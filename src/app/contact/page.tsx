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
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
  const [form, setForm] = React.useState({ name: '', email: '', company: '', service: '', timeline: '', summary: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      const ref = 'ISD-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setForm((prev) => ({ ...prev, _ref: ref } as typeof prev));
      setStatus('success');
    }, 850);
  };

  return (
    <PageShell
      eyebrow="Contact"
      title={<>Let&apos;s build what moves your <span className="text-gradient">business forward</span></>}
      intro="Tell us about your project, your goals, and your timeline. We'll get back to you within one business day."
    >
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[7fr_5fr]">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10">
              <div className="border-b border-border/80 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Project Inquiry
                </span>
                <h2 className="mt-1 font-heading text-2xl font-bold md:text-3xl">
                  Send us your brief
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fields marked with <span className="text-[var(--accent)]">*</span> are required.
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
                    className="flex min-h-[400px] flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-[var(--accent)] text-white shadow-xl">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold">Inquiry Received</h3>
                    <p className="mt-3 max-w-sm text-muted-foreground">
                      Thank you for reaching out, {form.name}. A senior growth specialist will respond within 24 hours.
                    </p>
                    <p className="mt-3 rounded-full bg-muted px-4 py-1 text-xs font-semibold text-muted-foreground">
                      Tracking Reference: {(form as any)._ref}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-8 rounded-xl border-border hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      onClick={() => {
                        setStatus('idle');
                        setForm({ name: '', email: '', company: '', service: '', timeline: '', summary: '' });
                      }}
                    >
                      Send another message
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
                          placeholder="e.g. Alex Morgan"
                          className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--accent)] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                        />
                      </Field>
                      <Field label="Work Email" required>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--accent)] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                        />
                      </Field>
                    </div>

                    <Field label="Company / Organization" required>
                      <input
                        required
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company name"
                        className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--accent)] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                      />
                    </Field>

                    <Field label="Primary Service Area" required>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm text-foreground focus:border-[var(--accent)] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                      >
                        <option value="">Select a service area</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                        <option value="multiple">Multiple services / Full-Stack Growth</option>
                      </select>
                    </Field>

                    <Field label="Project Summary" required>
                      <textarea
                        required
                        value={form.summary}
                        onChange={(e) => setForm({ ...form, summary: e.target.value })}
                        placeholder="Briefly describe your objectives, timeline, or current challenges..."
                        className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--accent)] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                        rows={4}
                      />
                    </Field>

                    <Field label="Project Timeline" required>
                      <select
                        required
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm text-foreground focus:border-[var(--accent)] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                      >
                        <option value="">Select a target timeline</option>
                        <option value="immediate">Ready to start immediately (&lt; 1 mo)</option>
                        <option value="1-3-months">1–3 months</option>
                        <option value="3-6-months">3–6 months</option>
                        <option value="exploring">Just exploring options</option>
                      </select>
                    </Field>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="relative flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] font-heading text-base font-bold text-white shadow-xl shadow-[var(--accent)]/25 transition-all hover:bg-[color-mix(in_oklch,var(--accent)_85%,black)] hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        'Submitting Your Inquiry...'
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
              <div className="rounded-3xl bg-[var(--carbon)] p-8 text-white shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Direct Inquiries
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold">Contact Directly</h3>
                <div className="mt-6 space-y-4 text-sm">
                  <a
                    href="mailto:hello@isdinfosolutions.com"
                    className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-[var(--accent)]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>hello@isdinfosolutions.com</span>
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-[var(--accent)]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Engagements
                </span>
                <h3 className="mt-1 font-heading text-xl font-bold">Why Reach Out</h3>
                <ul className="mt-5 space-y-4">
                  {whyReachOut.map((item) => (
                    <li key={item.title} className="rounded-xl bg-muted/30 p-3">
                      <div className="font-heading text-sm font-bold text-foreground">{item.title}</div>
                      <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Clock className="h-4 w-4 text-[var(--accent)]" />
                  Response SLA
                </div>
                <p className="mt-2 font-heading text-2xl font-extrabold text-[var(--accent)]">Under 24 hours</p>
                <p className="mt-1 text-xs text-muted-foreground">Monday–Friday, 9am–6pm EST</p>
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
        {label} {required && <span className="text-[var(--accent)]">*</span>}
      </span>
      {children}
    </label>
  );
}
