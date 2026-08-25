'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  Cpu,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { industries, caseStudies } from '@/lib/data';

const industryIcons: Record<string, React.ElementType> = {
  education: GraduationCap,
  'b2b-saas': Building2,
  enterprise: Cpu,
  healthcare: HeartPulse,
};

export default function IndustriesPage() {
  return (
    <PageShell
      eyebrow="Industries"
      title={<>Sector-aware growth <span className="text-gradient">expertise</span></>}
      intro="We do not believe in generic playbooks. ISD specializes in high-complexity sectors where customer journeys are multifaceted, compliance is non-negotiable, and technology must connect directly to revenue."
      variant="mist"
    >
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-2">
          {industries.map((ind, i) => {
            const Icon = industryIcons[ind.id] || Building2;
            const relevantCaseStudy = caseStudies.find((c) =>
              c.tags.some((t) => t.toLowerCase().includes(ind.title.toLowerCase().split(' ')[0]))
            );

            return (
              <Reveal key={ind.id} delay={i * 0.1}>
                <div
                  id={ind.id}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-xl md:p-10"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-border/80 pb-6">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h2 className="font-heading text-2xl font-bold">{ind.title}</h2>
                          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                            Core Sector Practice
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {ind.longDescription || ind.description}
                    </p>

                    <div className="mt-6 space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Specialized Capabilities:
                      </h3>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {ind.services.map((srv, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 rounded-2xl border border-[var(--accent)]/20 bg-muted/40 p-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                        Target Strategic Outcomes:
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {ind.outcomes.map((out, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground"
                          >
                            {out}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-6">
                    <Button asChild size="sm" className="rounded-xl bg-[var(--accent)] text-white hover:bg-[color-mix(in_oklch,var(--accent)_85%,black)]">
                      <Link href={`/contact?industry=${ind.id}`}>
                        Discuss Your {ind.title} Roadmap
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>

                    <Link
                      href="/case-studies"
                      className="text-xs font-semibold text-[var(--accent)] hover:underline"
                    >
                      View Related Proof &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </PageSection>

      <PageCtaBand
        title="Need an industry-specific growth strategy?"
        subtitle="Let our sector specialists audit your existing acquisition, technology, and operational pipelines."
        ctaText="Book an Industry Strategy Call"
        ctaHref="/contact"
      />
    </PageShell>
  );
}
