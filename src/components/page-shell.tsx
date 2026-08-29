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
    <div className="flex min-h-screen flex-col bg-background text-foreground w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-hidden" id="main-content">
        {/* Sub-page Hero with Homepage-grade ambient visuals */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-44 md:pb-28 bg-[#0A0F1D] text-white w-full max-w-full">
          {/* Dynamic atmospheric mesh background */}
          <div className="mesh-bg absolute inset-0 opacity-80" aria-hidden />
          
          {/* Precision grid */}
          <div className="grid-overlay absolute inset-0 opacity-20" aria-hidden />
          
          {/* Ambient Luminous Aurora Orbs */}
          <div
            className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-[#0284C7]/20 blur-[120px] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#6366F1]/15 blur-[120px] pointer-events-none"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-[0.72rem] sm:text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-sky-400 backdrop-blur-md mb-3 sm:mb-4 shadow-sm">
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {eyebrow}
                  </span>
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-6xl"
              >
                {title}
              </motion.h1>

              {intro && (
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.14 }}
                  className="mt-4 sm:mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl font-normal"
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
      ? 'bg-[#0A0F1D] text-white'
      : variant === 'mist'
      ? 'bg-muted/30'
      : 'bg-background';

  return (
    <section className={`py-14 sm:py-20 md:py-28 relative overflow-hidden w-full max-w-full ${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
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
    <section className="relative overflow-hidden bg-[#0A0F1D] py-16 text-white sm:py-24 md:py-32">
      <div className="mesh-bg absolute inset-0 opacity-90" aria-hidden />
      <div className="grid-overlay absolute inset-0 opacity-15" aria-hidden />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-6 text-center backdrop-blur-2xl shadow-2xl sm:p-10 md:p-14">
            <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-400" />

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-400 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Take the Next Step
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-5xl">
              {finalHeading}
            </h2>

            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
              {finalBody}
            </p>

            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Magnetic as="div" className="inline-flex w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="h-12 sm:h-13 w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] px-7 sm:px-9 font-heading text-sm sm:text-base font-bold text-white shadow-xl shadow-[#0284C7]/30 transition-all hover:shadow-2xl hover:shadow-[#0284C7]/40 hover:-translate-y-0.5"
                >
                  <Link href={ctaHref}>
                    {finalPrimaryCta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </Magnetic>

              <Magnetic as="div" className="inline-flex w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-13 w-full sm:w-auto rounded-xl border border-white/20 bg-white/[0.05] px-6 sm:px-8 font-heading text-sm sm:text-base font-semibold text-white backdrop-blur hover:bg-white hover:text-[#0A0F1D] hover:-translate-y-0.5 transition-all"
                >
                  <Link href={finalSecondaryHref}>{secondaryCta}</Link>
                </Button>
              </Magnetic>
            </div>

            <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-400">
              <ShieldCheck className="h-4 w-4 text-sky-400 shrink-0" />
              <span>Full Strategy Assessment &bull; Zero Commitment &bull; 24hr Response</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

