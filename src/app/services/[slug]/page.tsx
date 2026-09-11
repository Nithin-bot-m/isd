'use client';

import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
} from 'lucide-react';

import { servicePages } from '@/lib/services-data';

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const page = servicePages[slug];

  if (!page) {
    notFound();
  }

  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      {/* Breadcrumb Bar */}
      <div className="border-b border-border/80 bg-muted/40 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs font-semibold text-muted-foreground lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/services" className="transition-colors hover:text-foreground">Services</Link>
            <span>/</span>
            <span className="font-bold text-[#0284C7] dark:text-[#38BDF8]">{page.title}</span>
          </div>
          <Link
            href="/services"
            className="hidden sm:inline-flex items-center gap-1 font-bold text-[#0284C7] dark:text-[#38BDF8] hover:underline"
          >
            &larr; View all practices
          </Link>
        </div>
      </div>

      {page.sections.map((section, idx) => (
        <PageSection key={idx} variant={idx % 2 === 1 ? 'mist' : 'light'}>
          <Reveal className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              {section.kicker}
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl text-foreground">{section.subheading}</h2>
          </Reveal>
          <div className={`grid gap-6 ${
            section.columns === 4
              ? 'sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'
              : section.columns === 3
              ? 'sm:grid-cols-2 lg:grid-cols-3'
              : 'sm:grid-cols-2'
          }`}>
            {section.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-sm transition-all hover:border-[#0284C7] hover:shadow-xl dark:hover:border-[#38BDF8] w-full max-w-full"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div>
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0284C7]/10 dark:bg-[#38BDF8]/15 text-[#0284C7] dark:text-[#38BDF8] transition-colors group-hover:bg-[#0284C7] group-hover:text-white dark:group-hover:bg-[#38BDF8] dark:group-hover:text-[#030712]">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">{item.name}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      ))}

      {page.process && (
        <PageSection>
          <Reveal className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <Zap className="h-3.5 w-3.5" />
              {page.process.kicker}
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl text-foreground">{page.process.subheading}</h2>
          </Reveal>
          <div className={`grid gap-5 sm:gap-6 ${
            page.process.steps.length === 4
              ? 'sm:grid-cols-2 lg:grid-cols-4'
              : page.process.steps.length === 5
              ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
              : page.process.steps.length >= 6
              ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              : 'sm:grid-cols-2 md:grid-cols-3'
          }`}>
            {page.process.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all hover:border-[#0284C7] hover:shadow-lg dark:hover:border-[#38BDF8] w-full max-w-full overflow-hidden"
                >
                  <div className="font-heading text-3xl font-extrabold text-[#0284C7]/40 dark:text-[#38BDF8]/40 transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">{step.step}</div>
                  <h3 className="mt-3 font-heading text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.results && (
        <PageSection variant="mist">
          <Reveal className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <TrendingUp className="h-3.5 w-3.5" />
              {page.results.kicker}
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl text-foreground">{page.results.subheading}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {page.results.items.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-sm border-l-4 border-l-[#0284C7] dark:border-l-[#38BDF8] w-full max-w-full">
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0284C7] dark:text-[#38BDF8] md:text-5xl">{r.stat}</div>
                  <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">{r.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.tech && (
        <PageSection>
          <Reveal className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <Cpu className="h-3.5 w-3.5" />
              Technology Stack
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl text-foreground">Tools & Frameworks We Architect With</h2>
          </Reveal>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {page.tech.map((t, i) => (
              <Reveal key={t} delay={i * 0.03}>
                <span className="rounded-2xl border border-border bg-card px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold shadow-sm transition-all hover:border-[#0284C7] hover:text-[#0284C7] dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8] hover:shadow-md">{t}</span>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.inPractice && (
        <PageSection variant="mist">
          <Reveal className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <Layers className="h-3.5 w-3.5" />
              In Practice
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl text-foreground">Real-World Operational Impact</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {page.inPractice.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-sm w-full max-w-full overflow-hidden">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground md:text-base">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.caseStudy && (
        <PageSection>
          <Reveal className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Case Study
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-xl md:p-10 w-full max-w-full overflow-hidden">
              <span className="rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">{page.caseStudy.tag}</span>
              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold leading-snug md:text-3xl">{page.caseStudy.title}</h3>
              <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-3">
                <div className="rounded-2xl bg-muted/50 p-4 sm:p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Challenge</h4>
                  <p className="mt-2 text-xs sm:text-sm text-foreground leading-relaxed">{page.caseStudy.challenge}</p>
                </div>
                <div className="rounded-2xl bg-muted/50 p-4 sm:p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Solution</h4>
                  <p className="mt-2 text-xs sm:text-sm text-foreground leading-relaxed">{page.caseStudy.solution}</p>
                </div>
                <div className="rounded-2xl bg-muted/50 p-4 sm:p-5 border-l-4 border-[#0284C7] dark:border-[#38BDF8]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">Result</h4>
                  <p className="mt-2 text-sm sm:text-base font-extrabold text-foreground leading-relaxed">{page.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </PageSection>
      )}

      {page.faqs && (
        <PageSection variant={page.caseStudy ? 'mist' : 'light'}>
          <Reveal className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </div>
            <h3 className="mt-3 font-heading text-2xl font-extrabold md:text-4xl text-foreground">Common Strategic Inquiries</h3>
          </Reveal>
          <div className="max-w-4xl space-y-4">
            {page.faqs.map((faq) => (
              <Reveal key={faq.q}>
                <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all hover:border-[#0284C7]/40 hover:shadow-md w-full max-w-full overflow-hidden">
                  <h4 className="font-heading text-base font-bold text-foreground sm:text-lg">{faq.q}</h4>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      <PageCtaBand
        heading={page.ctaHeading}
        body={page.ctaBody}
        primaryCta={page.ctaPrimary}
        secondaryCta="View All Services"
        secondaryHref="/services"
      />
    </PageShell>
  );
}



