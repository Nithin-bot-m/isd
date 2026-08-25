'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Clock, Briefcase, Sparkles, Heart } from 'lucide-react';

const openRoles = [
  {
    title: 'Senior Growth & Demand Strategist',
    department: 'Digital Marketing',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    desc: 'Lead multi-channel demand generation campaigns, attribution modeling, and client growth roadmaps for scaling B2B SaaS and education partners.',
  },
  {
    title: 'AI Platform & Workflow Engineer',
    department: 'Engineering & AI',
    location: 'Remote',
    type: 'Full-time',
    desc: 'Architect and build custom LLM-powered internal tools, automated workflows, and standalone intelligent platforms for enterprise clients.',
  },
  {
    title: 'Salesforce DevOps Architect',
    department: 'CRM & DevOps',
    location: 'Remote',
    type: 'Full-time',
    desc: 'Design release management frameworks, CI/CD automation pipelines, and multi-org data governance across complex Salesforce environments.',
  },
  {
    title: 'Technical SEO & Content Strategist',
    department: 'Digital Marketing',
    location: 'Remote',
    type: 'Full-time',
    desc: 'Drive programmatic search architecture, Core Web Vitals optimization, and high-converting editorial content strategies.',
  },
];

const perks = [
  { title: 'Remote-First Culture', desc: 'Work from wherever you are most productive with flexible hours and ergonomic stipends.' },
  { title: 'Continuous Learning', desc: 'Dedicated annual budget for certifications, conferences, and technical development.' },
  { title: 'High-Impact Projects', desc: 'Solve real, complex growth challenges for ambitious brands and institutions without corporate red tape.' },
  { title: 'Comprehensive Benefits', desc: 'Competitive compensation, health coverage, paid time off, and retirement planning.' },
];

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Careers at ISD"
      title={<>Build what moves <span className="text-gradient">modern businesses</span> forward</>}
      intro="Join a team of strategic consultants, platform engineers, and marketing operators building the future of intelligent growth."
    >
      {/* Culture & Open Roles */}
      <PageSection>
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Open Opportunities
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Current positions
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            We are always looking for curious, high-performing individuals who thrive at the intersection of strategy and execution.
          </p>
        </Reveal>

        <div className="grid gap-6">
          {openRoles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-xl md:flex-row md:items-center md:p-10"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="rounded-full bg-[var(--accent)]/10 px-3 py-0.5 text-xs font-semibold text-[var(--accent)]">
                      {role.department}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {role.type}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground transition-colors group-hover:text-[var(--accent)]">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {role.desc}
                  </p>
                </div>

                <div className="mt-6 md:mt-0">
                  <Button asChild className="rounded-xl bg-[var(--accent)] text-white hover:bg-[color-mix(in_oklch,var(--accent)_85%,black)]">
                    <Link href={`/contact?role=${encodeURIComponent(role.title)}`}>
                      Apply for Role
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* Perks / Benefits */}
      <PageSection variant="mist">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Life at ISD
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Why you will love working here
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => (
            <Reveal key={perk.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{perk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageCtaBand
        title="Don't see your role?"
        subtitle="We are always open to meeting exceptional talent. Send us your resume and a brief intro about what you love to build."
        ctaText="Get in Touch"
        ctaHref="/contact"
      />
    </PageShell>
  );
}
