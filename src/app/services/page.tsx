'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
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
      eyebrow="Master Architecture"
      title={<>Integrated engines for <span className="text-gradient">enterprise growth</span></>}
      intro="ISD combines Digital Growth Engineering™, Enterprise Solution Engineering™, Education Ecosystem Engineering™, and Salesforce & Copado DevOps into a single, connected operational engine. Every pillar reinforces the next."
    >
      <PageSection>
        <Reveal className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Layers className="h-3.5 w-3.5" />
            What We Do
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
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
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Zap className="h-3.5 w-3.5" />
            Growth Sequence
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
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
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-sm transition-all hover:border-[#0284C7]/60 hover:shadow-xl dark:hover:border-[#38BDF8]/60 w-full max-w-full overflow-hidden"
              >
                <div>
                  <span className="font-heading text-3xl font-extrabold text-[#0284C7]/40 dark:text-[#38BDF8]/40 transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">
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
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            Client Advantages
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
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
                className="h-full rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all hover:border-[#0284C7]/50 hover:shadow-md w-full max-w-full overflow-hidden"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0284C7]/10 text-[#0284C7] dark:bg-[#38BDF8]/15 dark:text-[#38BDF8]">
                  <CheckCircle2 className="h-5 w-5" />
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
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Verified Proof
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
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
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#0284C7] hover:shadow-xl w-full max-w-full overflow-hidden"
              >
                <div>
                  <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
                    {study.tags[0]}
                  </span>
                  <h3 className="mt-3 font-heading text-xl sm:text-2xl font-bold transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {study.challenge}
                  </p>
                </div>
                <div className="mt-6 border-l-4 border-[#0284C7] dark:border-[#38BDF8] bg-muted/40 p-4 rounded-r-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
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
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-8 md:p-10 transition-all hover:border-[#0284C7] hover:shadow-2xl w-full max-w-full"
    >
      <div
        className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#D97706] transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-2xl bg-[#0284C7]/10 dark:bg-[#38BDF8]/15 font-heading text-base sm:text-lg font-bold text-[#0284C7] dark:text-[#38BDF8] transition-colors group-hover:bg-[#0284C7] group-hover:text-white dark:group-hover:bg-[#38BDF8] dark:group-hover:text-[#030712]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
            Specialized Practice
          </span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">
          {service.title}
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {service.capabilities.slice(0, 5).map((cap) => (
            <span
              key={cap}
              className="inline-flex items-center rounded-lg border border-border bg-muted/60 px-2.5 py-1 text-xs font-semibold text-muted-foreground"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/80 pt-5">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[#0284C7] dark:text-[#38BDF8] hover:underline"
        >
          Explore practice details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

