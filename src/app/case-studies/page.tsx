'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';

const caseStudyData = [
  {
    id: 'university',
    tag: 'Education',
    tags: ['Digital Marketing', 'Education Marketing'],
    title: 'Scaling Enrollment for a Regional University',
    challenge: 'Facing declining enrollment and fragmented marketing efforts, the university needed a unified strategy to reach prospective students across digital channels.',
    solution: 'Implemented an integrated demand generation engine combining SEO, paid media marketing automation, and CRM integration to create a seamless enrollment funnel.',
    result: '42% increase in qualified inquiries and 28% improvement in enrollment conversion within two semesters.',
  },
  {
    id: 'b2b-saas',
    tag: 'B2B SaaS',
    tags: ['AI Platforms', 'Salesforce DevOps'],
    title: 'AI-Powered Sales Ops for a B2B SaaS Company',
    challenge: 'The sales team spent more time on administrative tasks than selling, with no automation in place to support lead scoring or follow-up workflows.',
    solution: 'Deployed custom AI-driven lead scoring, automated follow-up sequences, and a Salesforce DevOps pipeline that reduced manual overhead by 60%.',
    result: '3.2x improvement in pipeline velocity and 45% reduction in average deal cycle time.',
  },
  {
    id: 'healthcare',
    tag: 'Healthcare',
    tags: ['Salesforce DevOps', 'AI Platforms'],
    title: 'CRM Modernization for a Healthcare Network',
    challenge: 'Outdated CRM systems created data silos across locations, making it impossible to track patient journeys or measure marketing ROI.',
    solution: 'Designed and implemented a unified Salesforce architecture with HIPAA-compliant integrations across all regional facilities.',
    result: '94% data accuracy improvement and a 35% reduction in patient intake processing time.',
  },
];

const filterCategories = ['All', 'Digital Marketing', 'AI Platforms', 'Education Marketing', 'Salesforce DevOps'];

export default function CaseStudiesPage() {
  const [active, setActive] = React.useState('All');

  const filtered = active === 'All'
    ? caseStudyData
    : caseStudyData.filter((c) => c.tag === active || c.tags.includes(active));

  return (
    <PageShell
      eyebrow="Case Studies"
      title={<>Results built through strategy, <span className="text-gradient">systems, and execution</span></>}
      intro="Explore how we help organizations across education, B2B SaaS, healthcare, and enterprise technology achieve measurable growth."
    >
      <PageSection>
        {/* Filter Pills */}
        <Reveal className="mb-12 flex flex-wrap gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                active === cat
                  ? 'bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/20'
                  : 'border border-border bg-card text-muted-foreground hover:text-foreground hover:border-[var(--accent)]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="flex flex-col gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((study, i) => (
              <Reveal key={study.id} delay={i * 0.1}>
                <CaseStudyCard study={study} index={i} />
              </Reveal>
            ))}
          </AnimatePresence>
        </div>
      </PageSection>

      <PageCtaBand
        title="Let's Build Your Success Story"
        subtitle="Every case study starts with a conversation. Tell us about your challenge and we'll show you what's possible."
        ctaText="Schedule a Strategy Call"
        ctaHref="/contact"
      />
    </PageShell>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: typeof caseStudyData[number];
  index: number;
}) {
  const gradients = [
    'from-[#0369a1] to-[#0284c7]',
    'from-[#0f172a] to-[#334155]',
    'from-[#0d9488] to-[#14b8a6]',
  ];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-2xl md:grid-cols-[1fr_2fr] md:p-10"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${
          gradients[index % gradients.length]
        } flex items-center justify-center p-6 text-white text-center`}
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-white/80">
            {study.tag}
          </span>
          <p className="mt-2 font-heading text-lg font-bold leading-snug">{study.title}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              {study.tag}
            </span>
            {study.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[0.7rem] font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <h2 className="font-heading text-2xl font-bold leading-snug transition-colors group-hover:text-[var(--accent)] md:text-3xl">
            {study.title}
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-muted/30 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Challenge
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{study.challenge}</p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-muted/30 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Solution
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{study.solution}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border-l-4 border-[var(--accent)] bg-muted/50 p-5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              <TrendingUp className="h-3.5 w-3.5" />
              Measurable Result
            </div>
            <p className="mt-1 font-heading text-lg font-bold text-foreground">
              {study.result}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/80 pt-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[var(--accent)] hover:underline"
          >
            Discuss a similar initiative
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
