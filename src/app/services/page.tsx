'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { services, caseStudies } from '@/lib/data';

const howServicesConnect = [
  { step: '01', title: 'Attract', desc: 'Drive qualified traffic through SEO, paid media, and content that reaches your ideal audience.' },
  { step: '02', title: 'Engage', desc: 'Convert visitors with compelling experiences, AI-powered personalization, and conversion-optimized pathways.' },
  { step: '03', title: 'Enable', desc: 'Equip your teams with integrated CRM, automation, and data systems that eliminate manual friction.' },
  { step: '04', title: 'Scale', desc: 'Accelerate growth with optimized pipelines, measurable performance, and compounding operational efficiency.' },
];

const whyClientsHire = [
  { title: 'Fewer Silos', desc: 'One team owns the full stack — strategy, execution, and optimization — so nothing gets lost between vendors.' },
  { title: 'Better Visibility', desc: 'Unified dashboards and attribution connect every channel to revenue, giving you clarity on what\'s working.' },
  { title: 'Stronger Execution', desc: 'Dedicated specialists in each discipline ensure every initiative is implemented to the highest standard.' },
  { title: 'Faster Iteration', desc: 'Integrated feedback loops let us refine campaigns, platforms, and processes in real time — not quarterly.' },
];

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title={<>Integrated services for <span className="text-gradient">modern growth</span></>}
      intro="ISD combines digital marketing, AI platforms, education marketing, and Salesforce DevOps into a single, connected growth engine. Every service reinforces the next."
    >
      <PageSection>
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Four practices, one connected architecture
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Each service is designed to stand alone or work together for compound impact across your entire organization.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection variant="mist">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Growth Sequence
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            How services connect
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Our services follow a natural growth sequence — each stage builds on the last, creating momentum that compounds over time.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-4">
          {howServicesConnect.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-xl"
              >
                <div>
                  <span className="font-heading text-3xl font-extrabold text-[var(--accent)]/40 transition-colors group-hover:text-[var(--accent)]">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Client Advantages
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Why clients hire ISD
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Organizations choose ISD when they need a partner who understands the full picture — not just one piece of the puzzle.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyClientsHire.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[var(--accent)]/50 hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection variant="mist">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Verified Proof
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Related case studies
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            See how our integrated approach delivers measurable results for clients across industries.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((study, i) => (
            <Reveal key={study.id} delay={i * 0.08}>
              <Link
                href="/case-studies"
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl"
              >
                <div>
                  <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-0.5 text-xs font-semibold text-muted-foreground">
                    {study.tags[0]}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold transition-colors group-hover:text-[var(--accent)]">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {study.challenge}
                  </p>
                </div>
                <div className="mt-6 border-l-4 border-[var(--accent)] bg-muted/40 p-4 rounded-r-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    Result
                  </span>
                  <p className="mt-1 font-heading text-base font-bold text-foreground">
                    {study.result}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageCtaBand
        title="Talk to an Expert"
        subtitle="Tell us about your growth challenges. We'll show you how an integrated approach can create measurable impact."
        ctaText="Schedule a Strategy Call"
        ctaHref="/contact"
      />
    </PageShell>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-[var(--accent)] hover:shadow-2xl md:p-10"
    >
      <div
        className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] via-[color-mix(in_oklch,var(--accent)_60%,white)] to-[var(--accent)] transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent)]/10 font-heading text-lg font-bold text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            Specialized Practice
          </span>
        </div>

        <h3 className="font-heading text-2xl font-bold tracking-tight transition-colors group-hover:text-[var(--accent)]">
          {service.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {service.capabilities.slice(0, 5).map((cap) => (
            <span
              key={cap}
              className="inline-flex items-center rounded-lg border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/80 pt-5">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[var(--accent)] hover:underline"
        >
          Explore practice details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
