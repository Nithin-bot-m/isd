'use client';

import * as React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  Cpu,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
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

export default function IndustryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const industry = industries.find(
    (i) => i.id.toLowerCase() === slug?.toLowerCase() || i.slug?.toLowerCase() === slug?.toLowerCase()
  ) || industries[0];

  if (!industry && slug) {
    notFound();
  }

  const Icon = industryIcons[industry.id] || Building2;
  const relatedCaseStudy = caseStudies.find((c) =>
    c.tags.some((t) => t.toLowerCase().includes(industry.title.toLowerCase().split(' ')[0]))
  ) || caseStudies[0];

  return (
    <PageShell
      eyebrow="Sector Practice"
      title={<>{industry.title} <span className="text-gradient">Growth Engine</span></>}
      intro={industry.longDescription || industry.description}
    >
      {/* Breadcrumb Bar */}
      <div className="border-b border-border/80 bg-muted/40 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs font-semibold text-muted-foreground lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/industries" className="transition-colors hover:text-foreground">Industries</Link>
            <span>/</span>
            <span className="font-bold text-[#0284C7] dark:text-[#38BDF8]">{industry.title}</span>
          </div>
          <Link
            href="/industries"
            className="hidden sm:inline-flex items-center gap-1 font-bold text-[#0284C7] dark:text-[#38BDF8] hover:underline"
          >
            &larr; View all sectors
          </Link>
        </div>
      </div>

      {/* Overview & Core Capabilities */}
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[5fr_4fr]">
          <div>
            <Reveal className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Sector Architecture
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Engineered for {industry.title} Complexity
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {industry.longDescription || industry.description}
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Domain Capabilities We Deploy:
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {industry.services.map((srv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0284C7] dark:text-[#38BDF8]" />
                    <span className="text-sm font-semibold text-foreground">{srv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Outcomes Panel */}
          <div>
            <div className="rounded-3xl border border-[#0284C7]/20 dark:border-[#38BDF8]/20 bg-card p-8 shadow-xl">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0284C7]/10 text-[#0284C7] dark:bg-[#38BDF8]/15 dark:text-[#38BDF8]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Target Outcomes</h3>
                  <p className="text-xs text-muted-foreground">Quantifiable Business Impact</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {industry.outcomes.map((out, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-xl border border-border/80 bg-muted/40 px-4 py-3.5 text-sm font-bold text-foreground"
                  >
                    <Zap className="h-4 w-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-border">
                <Button asChild size="lg" className="w-full h-12 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] font-bold text-white shadow-md hover:shadow-lg">
                  <Link href={`/contact?industry=${industry.id}`}>
                    Schedule a {industry.title} Audit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Relevant Case Study Section */}
      {relatedCaseStudy && (
        <PageSection variant="mist">
          <Reveal className="mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Case Study
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Proven Sector Results
            </h2>
          </Reveal>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10">
            <span className="rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
              {relatedCaseStudy.tag}
            </span>
            <h3 className="mt-4 font-heading text-2xl font-bold md:text-3xl">{relatedCaseStudy.title}</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-muted/40 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Challenge</h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{relatedCaseStudy.challenge}</p>
              </div>
              <div className="rounded-2xl bg-muted/40 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Solution</h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{relatedCaseStudy.solution}</p>
              </div>
              <div className="rounded-2xl border-l-4 border-[#0284C7] dark:border-[#38BDF8] bg-muted/50 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">Result</h4>
                <p className="mt-2 text-base font-extrabold leading-relaxed text-foreground">{relatedCaseStudy.result}</p>
              </div>
            </div>
          </div>
        </PageSection>
      )}

      <PageCtaBand
        title={`Accelerate Your ${industry.title} Pipeline`}
        subtitle="Schedule an architecture and growth consultation with our specialized practice leads."
        ctaText="Book Sector Consultation"
        ctaHref={`/contact?industry=${industry.id}`}
      />
    </PageShell>
  );
}
