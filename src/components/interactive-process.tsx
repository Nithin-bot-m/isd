'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Compass,
  Rocket,
  LineChart,
  CheckCircle2,
  Clock,
  Target,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProcessDetail {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  timeline: string;
  outcome: string;
  activities: string[];
  deliverables: string[];
}

const detailedSteps: ProcessDetail[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Diagnostic Audit & Technical Baseline',
    desc: 'We audit your current systems, data pipelines, and marketing funnels to uncover hidden friction points and prioritize high-leverage opportunities.',
    icon: Search,
    timeline: 'Weeks 1 – 2',
    outcome: 'Full clarity on bottlenecks, tech debt, and immediate quick-win opportunities.',
    activities: [
      'Comprehensive CRM, tech stack & data flow analysis',
      'Full-funnel conversion & attribution audit',
      'Competitor positioning and audience intent research',
      'Technical SEO and Core Web Vitals health check',
    ],
    deliverables: [
      'Diagnostic Opportunity Matrix',
      'Architecture & Data Flow Map',
      'Executive Findings Brief',
    ],
  },
  {
    step: '02',
    title: 'Strategize',
    subtitle: 'Integrated Roadmap & Growth Blueprint',
    desc: 'Our cross-functional strategists engineer an integrated plan connecting marketing channels, AI workflows, and CRM operations into a cohesive system.',
    icon: Compass,
    timeline: 'Weeks 2 – 3',
    outcome: 'A validated roadmap with defined milestones, KPIs, and resource modeling.',
    activities: [
      'Multi-channel acquisition and content journey design',
      'AI platform architecture & workflow automation scoping',
      'Salesforce org optimization & release management planning',
      'Measurement framework and revenue attribution setup',
    ],
    deliverables: [
      'Integrated Growth Roadmap',
      'Technical Architecture Blueprint',
      'Quarterly Milestone Schedule',
    ],
  },
  {
    step: '03',
    title: 'Execute',
    subtitle: 'Precision Implementation & Launch',
    desc: 'We build, test, and deploy with zero downtime — launching high-converting campaigns, standalone AI platforms, and automated Salesforce pipelines.',
    icon: Rocket,
    timeline: 'Weeks 4 – 8+',
    outcome: 'Live, high-performance systems operating seamlessly across teams.',
    activities: [
      'Paid media and organic demand campaign activation',
      'Custom AI workflow & platform development',
      'Salesforce CI/CD pipeline and integration rollout',
      'High-velocity creative and landing page builds',
    ],
    deliverables: [
      'Live Production Deployments',
      'Automated Workflow Pipelines',
      'Real-Time Attribution Dashboard',
    ],
  },
  {
    step: '04',
    title: 'Optimize',
    subtitle: 'Continuous Refinement & Compounding Returns',
    desc: 'Through real-time telemetry, A/B experimentation, and proactive governance, we continually compound your pipeline velocity and ROI.',
    icon: LineChart,
    timeline: 'Continuous & Agile',
    outcome: 'Predictable, compounding growth and sustained operational excellence.',
    activities: [
      'Multivariate conversion rate optimization (CRO)',
      'Algorithmic budget allocation across top-performing channels',
      'Salesforce release governance and environment health monitoring',
      'Executive quarterly growth and intelligence reviews',
    ],
    deliverables: [
      'Bi-Weekly Optimization Reports',
      'Iterative Feature Enhancements',
      'Quarterly Strategy Alignment',
    ],
  },
];

export function InteractiveProcess() {
  const [activeIdx, setActiveIdx] = React.useState<number>(0);
  const activeStep = detailedSteps[activeIdx];

  return (
    <section id="process" className="relative overflow-hidden py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Our Delivery Methodology
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            How <span className="font-extrabold text-[#0284C7] dark:text-[#38BDF8]">ISD</span> delivers growth
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            A battle-tested 4-phase framework that eliminates vendor silos and turns fragmented initiatives into one cohesive growth engine.
          </p>
        </Reveal>

        {/* Step Navigation Bar */}
        <div className="relative mb-12">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {detailedSteps.map((step, idx) => {
              const isActive = activeIdx === idx;
              const Icon = step.icon;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative flex flex-col rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-[#0284C7] dark:border-[#38BDF8] bg-card shadow-xl shadow-[#0284C7]/10 ring-2 ring-[#0284C7]/20 dark:ring-[#38BDF8]/20'
                      : 'border-border bg-card/60 hover:border-[#0284C7]/40 hover:bg-card'
                  }`}
                >
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-heading text-2xl font-extrabold transition-colors ${
                        isActive ? 'text-[#0284C7] dark:text-[#38BDF8]' : 'text-muted-foreground/60'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`rounded-xl p-2.5 transition-colors ${
                        isActive
                          ? 'bg-[#0284C7] dark:bg-[#38BDF8] text-white dark:text-[#030712]'
                          : 'bg-muted text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-4 text-lg font-bold transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                    {step.subtitle}
                  </p>

                  {/* Active highlight line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStepIndicator"
                      className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-[#0284C7] dark:bg-[#38BDF8]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[6fr_5fr] lg:gap-12">
              {/* Left Column: Overview & Activities */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3 py-1 text-xs font-bold text-[#0284C7] dark:text-[#38BDF8]">
                    <Clock className="h-3.5 w-3.5" />
                    Typical Timeline: {activeStep.timeline}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    <Target className="h-3.5 w-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                    Phase {activeStep.step} of 04
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                  {activeStep.title}: {activeStep.subtitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {activeStep.desc}
                </p>

                <div className="mt-6 border-t border-border pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Core Activities in this Phase:
                  </h4>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {activeStep.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0284C7] dark:text-[#38BDF8]" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Key Deliverables & Outcome Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#0284C7]/20 dark:border-[#38BDF8]/20 bg-muted/40 p-6 md:p-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                    Key Tangible Deliverables
                  </div>
                  <div className="mt-4 space-y-3">
                    {activeStep.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm"
                      >
                        <span className="text-foreground font-semibold">{item}</span>
                        <span className="font-heading text-xs font-bold text-[#0284C7] dark:text-[#38BDF8]">
                          Verified
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-border/80 bg-card p-4 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Target Milestone Outcome
                    </div>
                    <p className="mt-1.5 text-sm font-semibold text-foreground">
                      {activeStep.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/60">
                  <button
                    type="button"
                    onClick={() => setActiveIdx((prev) => (prev + 1) % detailedSteps.length)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] dark:text-[#38BDF8] hover:underline cursor-pointer"
                  >
                    Next Phase ({detailedSteps[(activeIdx + 1) % detailedSteps.length].title})
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <Button asChild size="sm" className="h-10 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] font-bold text-white shadow-md hover:shadow-lg">
                    <Link href="/contact">Schedule Phase 01 Audit</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

