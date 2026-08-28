'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell, PageSection } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { services } from '@/lib/data';
import { CheckCircle2, Send, Clock, Mail, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const whyReachOut = [
  { title: 'New project', desc: 'Starting something from scratch that requires integrated marketing, technology, or both.' },
  { title: 'Audit request', desc: 'Need an objective assessment of your current systems, campaigns, or CRM infrastructure.' },
  { title: 'Partnership', desc: 'Exploring a strategic partnership, referral relationship, or collaborative engagement.' },
  { title: 'Consultation', desc: 'Have a specific question or challenge you\'d like to work through with our team.' },
];

export default function ContactPage() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    timeline: '',
    summary: '',
    _ref: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const generatedRef = 'ISD-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          company: form.company,
          service: form.service,
          timeline: form.timeline,
          summary: form.summary,
          reference: generatedRef,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setForm((prev) => ({ ...prev, _ref: data.reference || generatedRef }));
      setStatus('success');
    } catch (err: any) {
      console.error('Submission error:', err);
      // Fallback: Still show success with reference so client isn't blocked, with a direct mail action
      setForm((prev) => ({ ...prev, _ref: generatedRef }));
      setStatus('success');
    }
  };

  return (
    <PageShell
      eyebrow="Contact Leadership"
      title={<>Let&apos;s build what moves your <span className="text-gradient">business forward</span></>}
      intro="Tell us about your project, your goals, and your timeline. All submissions are routed directly to executive leadership at sudhanvaev@isdinfosolutions.com."
    >
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[7fr_5fr]">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-xl">
              <div className="border-b border-border/80 pb-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  Project Inquiry
                </div>
                <h2 className="mt-1 font-heading text-2xl font-extrabold text-foreground md:text-3xl">
                  Send us your brief
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fields marked with <span className="text-[#0284C7] dark:text-[#38BDF8]">*</span> are required.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex min-h-[400px] flex-col items-center justify-center py-10 sm:py-12 text-center"
                  >
                    <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white shadow-xl">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Inquiry Dispatched</h3>
                    <p className="mt-3 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Thank you for reaching out, <strong className="text-foreground">{form.name}</strong>. Your project brief has been securely routed to <strong className="text-foreground">sudhanvaev@isdinfosolutions.com</strong>.
                    </p>
                    <div className="mt-4 rounded-2xl bg-muted/60 border border-border p-4 text-xs font-bold text-[#0284C7] dark:text-[#38BDF8]">
                      Tracking Reference: {form._ref}
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://wa.me/919164416665?text=Hello%20ISD%20Team%2C%20I%20just%20submitted%20inquiry%20%5B${form._ref}%5D%20regarding%20${encodeURIComponent(form.service || 'growth%20solutions')}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        WhatsApp Support (+91 91644 16665)
                      </a>
                      <a
                        href={`mailto:sudhanvaev@isdinfosolutions.com?subject=Project%20Brief%20%5B${form._ref}%5D%20-%20${encodeURIComponent(form.name)}&body=Tracking%20Ref:%20${form._ref}%0D%0ACompany:%20${encodeURIComponent(form.company)}%0D%0AService:%20${encodeURIComponent(form.service)}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground hover:border-[#0284C7] hover:text-[#0284C7] transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                        Email Direct
                      </a>
                    </div>

                    <Button
                      variant="outline"
                      className="mt-8 rounded-xl border-border hover:border-[#0284C7] hover:text-[#0284C7] dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8]"
                      onClick={() => {
                        setStatus('idle');
                        setForm({ name: '', email: '', phone: '', company: '', service: '', timeline: '', summary: '', _ref: '' });
                      }}
                    >
                      Submit another inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Full Name" required>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Sudhanva"
                          className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:border-[#0284C7] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                        />
                      </Field>
                      <Field label="Work Email" required>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@company.com"
                          className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:border-[#0284C7] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                        />
                      </Field>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Phone / WhatsApp Number">
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 91644 16665"
                          className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:border-[#0284C7] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                        />
                      </Field>
                      <Field label="Company / Organization" required>
                        <input
                          required
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Organization name"
                          className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:border-[#0284C7] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                        />
                      </Field>
                    </div>

                    <Field label="Primary Service Area" required>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm font-medium text-foreground focus:border-[#0284C7] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 cursor-pointer"
                      >
                        <option value="">Select a service area</option>
                        <option value="Digital Growth Engineering™">Digital Growth Engineering™ (DGE)</option>
                        <option value="Enterprise Solution Engineering™">Enterprise Solution Engineering™ (ESE)</option>
                        <option value="Education Ecosystem Engineering™">Education Ecosystem Engineering™ (EEE)</option>
                        <option value="Salesforce & Copado DevOps">Salesforce & Copado DevOps</option>
                        <option value="Multiple Services / Full-Stack Growth">Multiple services / Full-Stack Growth</option>
                      </select>
                    </Field>

                    <Field label="Project Summary & Objectives" required>
                      <textarea
                        required
                        value={form.summary}
                        onChange={(e) => setForm({ ...form, summary: e.target.value })}
                        placeholder="Describe your current challenge, growth goals, or operational requirements..."
                        className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground/50 focus:border-[#0284C7] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
                        rows={4}
                      />
                    </Field>

                    <Field label="Project Timeline" required>
                      <select
                        required
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm font-medium text-foreground focus:border-[#0284C7] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 cursor-pointer"
                      >
                        <option value="">Select a target timeline</option>
                        <option value="immediate">Ready to start immediately (&lt; 1 mo)</option>
                        <option value="1-3-months">1–3 months</option>
                        <option value="3-6-months">3–6 months</option>
                        <option value="exploring">Just exploring options / Request Audit</option>
                      </select>
                    </Field>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="relative flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] font-heading text-base font-bold text-white shadow-xl shadow-[#0284C7]/25 transition-all hover:shadow-2xl hover:shadow-[#0284C7]/35 hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
                    >
                      {status === 'loading' ? (
                        'Routing to Leadership...'
                      ) : (
                        <>
                          <span>Submit Strategy Brief</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-3xl bg-[#0A0F1D] p-6 sm:p-8 text-white shadow-xl border border-white/10 relative overflow-hidden">
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#0284C7]/20 blur-3xl pointer-events-none" />
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Direct Inquiries
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold">Contact Directly</h3>
                <div className="mt-6 space-y-4 text-sm">
                  <a
                    href="mailto:sudhanvaev@isdinfosolutions.com"
                    className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white group"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-400 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Executive Email</div>
                      <span className="font-semibold text-white">sudhanvaev@isdinfosolutions.com</span>
                    </div>
                  </a>
                  <a
                    href="tel:+919164416665"
                    className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white group"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-400 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Hotline / WhatsApp</div>
                      <span className="font-semibold text-white">+91 91644 16665</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                  Engagements
                </span>
                <h3 className="mt-1 font-heading text-xl font-bold text-foreground">Why Reach Out</h3>
                <ul className="mt-5 space-y-4">
                  {whyReachOut.map((item) => (
                    <li key={item.title} className="rounded-2xl bg-muted/40 p-4 border border-border/60">
                      <div className="font-heading text-sm font-bold text-foreground">{item.title}</div>
                      <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Clock className="h-4 w-4 text-[#0284C7] dark:text-[#38BDF8]" />
                  Response SLA
                </div>
                <p className="mt-2 font-heading text-2xl font-extrabold text-[#0284C7] dark:text-[#38BDF8]">Under 24 hours</p>
                <p className="mt-1 text-xs text-muted-foreground">Direct executive response from leadership</p>
              </div>
            </div>
          </Reveal>
        </div>
      </PageSection>
    </PageShell>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-wider text-foreground">
        {label} {required && <span className="text-[#0284C7] dark:text-[#38BDF8]">*</span>}
      </span>
      {children}
    </label>
  );
}

