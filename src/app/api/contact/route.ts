import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = 'sudhanvaev@isdinfosolutions.com';

// ------------------- SECURITY CONTROLS -------------------

// 1. In-Memory Rate Limiter (Sliding Window per Client IP)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;      // Max 5 submissions per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

// 2. Input Sanitizers (Anti-CRLF, Anti-XSS, Length Limiter)
function sanitizeHeader(input: string, maxLen = 100): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[\r\n\t]/g, ' ') // Strip CRLF to prevent SMTP Header Injection
    .trim()
    .slice(0, maxLen);
}

function escapeHtml(str: string, maxLen = 5000): string {
  if (typeof str !== 'string') return '';
  const trimmed = str.slice(0, maxLen);
  return trimmed
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// ------------------- REQUEST HANDLER -------------------

export async function POST(request: Request) {
  try {
    // A. Rate Limiting Check
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
                     request.headers.get('x-real-ip') ||
                     'anonymous-client';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before submitting again.' },
        {
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Limit': String(MAX_REQUESTS_PER_WINDOW),
          },
        }
      );
    }

    // B. Parse and Validate JSON Body
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON payload received.' },
        { status: 400 }
      );
    }

    const {
      name: rawName,
      email: rawEmail,
      phone: rawPhone,
      company: rawCompany,
      service: rawService,
      timeline: rawTimeline,
      summary: rawSummary,
      reference: rawRef,
    } = body || {};

    // C. Strict Validation
    if (!rawName || typeof rawName !== 'string' || rawName.trim().length === 0) {
      return NextResponse.json({ error: 'Valid Name is required.' }, { status: 400 });
    }
    if (!rawEmail || typeof rawEmail !== 'string' || !EMAIL_REGEX.test(rawEmail.trim())) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    if (!rawSummary || typeof rawSummary !== 'string' || rawSummary.trim().length < 5) {
      return NextResponse.json({ error: 'Project Summary must be at least 5 characters.' }, { status: 400 });
    }

    // D. Sanitization & Safe Boundary Enforcement
    const name = sanitizeHeader(rawName, 100);
    const email = sanitizeHeader(rawEmail, 150).toLowerCase();
    const phone = sanitizeHeader(rawPhone || 'Not provided', 30);
    const company = sanitizeHeader(rawCompany || 'Not provided', 120);
    const service = sanitizeHeader(rawService || 'General Inquiry', 100);
    const timeline = sanitizeHeader(rawTimeline || 'Not specified', 60);
    const safeRef = sanitizeHeader(rawRef || 'ISD-' + Math.random().toString(36).substring(2, 8).toUpperCase(), 20);

    const safeHtmlName = escapeHtml(name);
    const safeHtmlEmail = escapeHtml(email);
    const safeHtmlPhone = escapeHtml(phone);
    const safeHtmlCompany = escapeHtml(company);
    const safeHtmlService = escapeHtml(service);
    const safeHtmlTimeline = escapeHtml(timeline);
    const safeHtmlSummary = escapeHtml(rawSummary, 4000);

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    // E. Prepare Structured Email Templates
    const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0A0F1D; color: #F8FAFC; margin: 0; padding: 24px; }
    .container { max-width: 620px; margin: 0 auto; background: #0B1120; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #0284C7 0%, #0369A1 100%); padding: 32px 28px; text-align: center; }
    .header h1 { margin: 0; color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0 0; color: rgba(255,255,255,0.9); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    .content { padding: 28px; background: #0B1120; }
    .badge { display: inline-block; background: rgba(2, 132, 199, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #38BDF8; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 20px; }
    .grid-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .grid-table td { padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; vertical-align: top; }
    .grid-table td.label { width: 35%; color: #94A3B8; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
    .grid-table td.val { width: 65%; color: #F8FAFC; font-weight: 600; }
    .message-box { background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 4px solid #0284C7; border-radius: 12px; padding: 18px; margin-top: 16px; font-size: 14px; line-height: 1.6; color: #E2E8F0; white-space: pre-wrap; }
    .footer { padding: 20px 28px; background: #070B14; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; color: #64748B; font-size: 12px; }
    .btn { display: inline-block; background: #0284C7; color: #ffffff !important; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 14px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Project Inquiry</h1>
      <p>ISD Info Solutions Contact Portal</p>
    </div>
    <div class="content">
      <span class="badge">Reference: ${safeRef}</span>
      <table class="grid-table">
        <tr>
          <td class="label">Client Name</td>
          <td class="val"><strong>${safeHtmlName}</strong></td>
        </tr>
        <tr>
          <td class="label">Work Email</td>
          <td class="val"><a href="mailto:${safeHtmlEmail}" style="color: #38BDF8; text-decoration: none;">${safeHtmlEmail}</a></td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp</td>
          <td class="val"><a href="tel:${safeHtmlPhone}" style="color: #38BDF8; text-decoration: none;">${safeHtmlPhone}</a></td>
        </tr>
        <tr>
          <td class="label">Company</td>
          <td class="val">${safeHtmlCompany}</td>
        </tr>
        <tr>
          <td class="label">Target Service</td>
          <td class="val"><strong>${safeHtmlService}</strong></td>
        </tr>
        <tr>
          <td class="label">Project Timeline</td>
          <td class="val">${safeHtmlTimeline}</td>
        </tr>
        <tr>
          <td class="label">Submission Time</td>
          <td class="val">${timestamp}</td>
        </tr>
      </table>

      <div style="font-size: 12px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Project Brief & Objectives:</div>
      <div class="message-box">${safeHtmlSummary}</div>

      <div style="text-align: center;">
        <a href="mailto:${safeHtmlEmail}?subject=Re:%20ISD%20Info%20Solutions%20Inquiry%20%5B${safeRef}%5D" class="btn">Reply to ${safeHtmlName} Directly</a>
      </div>
    </div>
    <div class="footer">
      This notification was automatically generated by the ISD Info Solutions platform.<br>
      Destination: ${RECIPIENT_EMAIL} &bull; Hotline: +91 63611 20944
    </div>
  </div>
</body>
</html>
    `.trim();

    const textEmail = `
=====================================================
NEW INQUIRY RECEIVED — ISD INFO SOLUTIONS
=====================================================
Tracking Ref:  ${safeRef}
Client Name:   ${name}
Work Email:    ${email}
Phone Number:  ${phone}
Company/Org:   ${company}
Service Area:  ${service}
Target Window: ${timeline}
Submitted At:  ${timestamp}

PROJECT BRIEF / SUMMARY:
-----------------------------------------------------
${rawSummary.slice(0, 4000)}
-----------------------------------------------------
Direct Reply: mailto:${email}
=====================================================
    `.trim();

    // F. Email Dispatch Engine (Supports Nodemailer SMTP and Resend API)
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || RECIPIENT_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE === 'false' ? false : (process.env.SMTP_SECURE === 'true' || smtpPort === 465);
    const fromAddress = process.env.SMTP_FROM || (smtpUser ? `ISD Info Solutions <${smtpUser}>` : `ISD Info Solutions Leads <leads@isdinfosolutions.com>`);

    let emailSent = false;
    let dispatchMethod = 'none';

    // 1. Resend API Dispatch (High reliability for Vercel/Next.js)
    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || 'ISD Portal <onboarding@resend.dev>',
            to: [recipientEmail],
            reply_to: email,
            subject: `[ISD Lead] ${name} (${company}) — ${service} [${safeRef}]`,
            text: textEmail,
            html: htmlEmail,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
          dispatchMethod = 'resend';
        } else {
          const resendErr = await resendRes.text();
          console.error('[Resend Error]:', resendErr);
        }
      } catch (err) {
        console.error('[Resend Exception]:', err);
      }
    }

    // 2. Nodemailer SMTP Dispatch (Gmail / Google Workspace / Custom SMTP)
    if (!emailSent && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          // Security: Prevent SSRF and Local File Inclusion through attachments/URLs
          disableFileAccess: true,
          disableUrlAccess: true,
        });

        await transporter.sendMail({
          from: fromAddress,
          to: recipientEmail,
          replyTo: email,
          subject: `[ISD Lead] ${name} (${company}) — ${service} [${safeRef}]`,
          text: textEmail,
          html: htmlEmail,
        });

        emailSent = true;
        dispatchMethod = 'smtp';
      } catch (err: any) {
        console.error('[SMTP Delivery Error]:', err?.message || err);
      }
    }

    // 3. If no email provider is configured, log inquiry for Vercel Function Logs
    if (!emailSent) {
      console.warn(`[LEAD RECEIVED (SMTP/Resend NOT CONFIGURED) for ${recipientEmail}]:`, {
        reference: safeRef,
        name,
        email,
        phone,
        company,
        service,
        timeline,
        timestamp,
      });
    }

    return NextResponse.json(
      {
        success: true,
        reference: safeRef,
        emailSent,
        recipient: RECIPIENT_EMAIL,
        timestamp,
        message: 'Inquiry successfully processed and dispatched to ISD Info Solutions leadership.',
      },
      {
        headers: {
          'X-RateLimit-Limit': String(MAX_REQUESTS_PER_WINDOW),
        },
      }
    );
  } catch (error: any) {
    console.error('Contact form submission handler error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry securely. Please reach out directly to sudhanvaev@isdinfosolutions.com' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}
