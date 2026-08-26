'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { Reveal } from '@/components/reveal';
import { Magnetic } from '@/components/magnetic';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageShellProps {
  children: React.ReactNode;
  /** Hero headline */
  title: React.ReactNode;
  /** Hero intro paragraph */
  intro?: string;
  /** Background style: mist (default), dark, light */
  variant?: 'mist' | 'dark' | 'light';
  /** Optional eyebrow/kicker text */
  eyebrow?: string;
}

/**
 * Shared page shell for all sub-pages.
 * Renders the header, a page hero with homepage-grade ambient gradients and glows, the main content, and the footer.
 */
export function PageShell({
  children,
  title,
  intro,
  variant = 'dark',
  eyebrow,
}: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1" id="main-content">
        {/* Sub-page Hero with Homepage-grade ambient visuals */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 bg-[var(--carbon)] text-white">
          {/* Navy gradient backdrop */}
          <div
            className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--carbon)] via-[var(--carbon)] to-[color-mix(in_oklch,var(--carbon)_80%,var(--accent))]"
            aria-hidden
          />
          {/* Subtle grid */}
          <div className="grid-overlay absolute inset-0 z-0 opacity-[0.15]" aria-hidden />
          {/* Ambient Glow Orbs */}
          <div
            className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[var(--accent)] opacity-20 blur-3xl animate-pulse"
            aria-hidden
          />
          <div
            className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[var(--accent)] opacity-15 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur">
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {eyebrow}
                  </span>
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl"
              >
                {title}
              </motion.h1>

              {intro && (
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.14 }}
                  className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
                >
                  {intro}
                </motion.p>
              )}
            </div>
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </div>
  );
}

/** Standard content section used inside PageShell */
export function PageSection({
  children,
  className = '',
  variant = 'light',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'mist' | 'dark';
}) {
  const bg =
    variant === 'dark'
      ? 'bg-[var(--carbon)] text-white'
      : variant === 'mist'
      ? 'bg-muted/40'
      : 'bg-background';

  return (
    <section className={`py-20 md:py-28 ${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Reusable CTA band for the bottom of sub-pages styled with homepage visual fidelity */
export function PageCtaBand({
  heading = 'Ready to connect strategy, systems, and growth?',
  body = 'Whether you need better demand generation, a smarter platform, stronger enrollment journeys, or cleaner Salesforce delivery, ISD can help define the right next move.',
  primaryCta = 'Schedule a Discovery Call',
  secondaryCta = 'Send Your Project Brief',
  secondaryHref = '/contact',
  title,
  subtitle,
  ctaText,
  ctaHref = '/contact',
}: {
  heading?: string;
  body?: string;
  primaryCta?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  const finalHeading = title || heading;
  const finalBody = subtitle || body;
  const finalPrimaryCta = ctaText || primaryCta;
  const finalSecondaryHref = secondaryHref || (secondaryCta.toLowerCase().includes('service') ? '/services' : '/contact');

  return (
    <section className="relative overflow-hidden bg-[var(--carbon)] py-24 text-white md:py-32">
      <div className="mesh-bg absolute inset-0 opacity-90" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl md:p-14">
            <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[var(--accent)] via-[color-mix(in_oklch,var(--accent)_60%,white)] to-[var(--accent)]" />

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              <Sparkles className="h-3.5 w-3.5" />
              Take the Next Step
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              {finalHeading}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
              {finalBody}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Magnetic as="div" className="inline-flex">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl bg-[var(--accent)] px-8 font-heading text-base font-bold text-white shadow-xl shadow-[var(--accent)]/30 transition-all hover:bg-[color-mix(in_oklch,var(--accent)_85%,black)] hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <Link href={ctaHref}>
                    {finalPrimaryCta}
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </Button>
              </Magnetic>

              <Magnetic as="div" className="inline-flex">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border border-white/20 bg-white/5 px-7 font-heading text-base font-semibold text-white backdrop-blur hover:bg-white hover:text-[var(--carbon)] hover:-translate-y-0.5"
                >
                  <Link href={finalSecondaryHref}>{secondaryCta}</Link>
                </Button>
              </Magnetic>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60">
              <ShieldCheck className="h-4 w-4 text-[var(--accent)]" />
              <span>Full Strategy Assessment &bull; Zero Commitment &bull; 24hr Response</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
