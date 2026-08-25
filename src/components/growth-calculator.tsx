'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Sparkles,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Counter } from '@/components/counter';
import { Reveal } from '@/components/reveal';

interface IndustryPreset {
  id: string;
  name: string;
  badge: string;
  defaultVolume: number;
  defaultValue: number;
  volumeLabel: string;
  valueLabel: string;
  minVolume: number;
  maxVolume: number;
  volumeStep: number;
  minValue: number;
  maxValue: number;
  valueStep: number;
  liftMultiplier: number;
  velocityBoost: string;
  hoursSaved: number;
  keyOutcomes: string[];
}

const industryPresets: IndustryPreset[] = [
  {
    id: 'b2b-saas',
    name: 'B2B & SaaS',
    badge: 'Demand & Revenue Engine',
    defaultVolume: 120,
    defaultValue: 12000,
    volumeLabel: 'Monthly Sales Qualified Leads (SQLs)',
    valueLabel: 'Average Deal / ACV ($)',
    minVolume: 20,
    maxVolume: 800,
    volumeStep: 10,
    minValue: 2000,
    maxValue: 60000,
    valueStep: 1000,
    liftMultiplier: 0.38,
    velocityBoost: '3.2x faster',
    hoursSaved: 54,
    keyOutcomes: [
      'AI-powered lead scoring and instant routing',
      'Automated sales cadence & CRM synchronization',
      'Full-funnel attribution across all paid channels',
    ],
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    badge: 'Enrollment Acceleration',
    defaultVolume: 350,
    defaultValue: 8500,
    volumeLabel: 'Monthly Inquiries / Applicants',
    valueLabel: 'Average Term / Program Value ($)',
    minVolume: 50,
    maxVolume: 2500,
    volumeStep: 25,
    minValue: 1500,
    maxValue: 35000,
    valueStep: 500,
    liftMultiplier: 0.42,
    velocityBoost: '28% higher conversion',
    hoursSaved: 68,
    keyOutcomes: [
      'High-intent student journey orchestration',
      'Automated multi-channel admissions nurture',
      'Programmatic search & campus brand positioning',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Tech',
    badge: 'Salesforce DevOps & Systems',
    defaultVolume: 80,
    defaultValue: 28000,
    volumeLabel: 'Monthly Pipeline Opportunities',
    valueLabel: 'Average Contract Value ($)',
    minVolume: 10,
    maxVolume: 400,
    volumeStep: 5,
    minValue: 5000,
    maxValue: 120000,
    valueStep: 2500,
    liftMultiplier: 0.32,
    velocityBoost: '45% shorter cycles',
    hoursSaved: 85,
    keyOutcomes: [
      'Automated CI/CD release governance & rollback',
      'Unified cross-org Salesforce data architecture',
      'Zero-downtime production deployment guardrails',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    badge: 'Compliance & Patient Intake',
    defaultVolume: 240,
    defaultValue: 4500,
    volumeLabel: 'Monthly Patient Inquiries / Intakes',
    valueLabel: 'Average Patient Care Value ($)',
    minVolume: 30,
    maxVolume: 1500,
    volumeStep: 10,
    minValue: 1000,
    maxValue: 25000,
    valueStep: 500,
    liftMultiplier: 0.35,
    velocityBoost: '94% data accuracy',
    hoursSaved: 62,
    keyOutcomes: [
      'HIPAA-compliant CRM & automated intake pathways',
      '35% reduction in intake processing delay',
      'Unified multi-location analytics and reporting',
    ],
  },
];

export function GrowthCalculator() {
  const [selectedIndustry, setSelectedIndustry] = React.useState<IndustryPreset>(
    industryPresets[0]
  );
  const [volume, setVolume] = React.useState<number>(selectedIndustry.defaultVolume);
  const [dealValue, setDealValue] = React.useState<number>(selectedIndustry.defaultValue);

  const handleSelectIndustry = (preset: IndustryPreset) => {
    setSelectedIndustry(preset);
    setVolume(preset.defaultVolume);
    setDealValue(preset.defaultValue);
  };

  // Calculations
  const calculatedAdditionalLeads = Math.round(volume * selectedIndustry.liftMultiplier);
  const calculatedAnnualRevenueLift = Math.round(
    calculatedAdditionalLeads * dealValue * 0.18 * 12
  );
  const calculatedHoursSavedAnnual = selectedIndustry.hoursSaved * 12;

  return (
    <section id="roi-calculator" className="relative overflow-hidden py-24 md:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[color-mix(in_oklch,var(--accent)_4%,transparent)] to-transparent" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3.5 py-1 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] backdrop-blur">
            <Calculator className="h-3.5 w-3.5" />
            Interactive ROI Estimator
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Simulate your growth <span className="text-gradient">potential</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            See how integrated digital marketing, AI automation, and Salesforce DevOps compound your pipeline velocity and team capacity.
          </p>
        </Reveal>

        {/* Industry Selector Tabs */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {industryPresets.map((preset) => {
            const active = selectedIndustry.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleSelectIndustry(preset)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/15'
                    : 'border border-border bg-card/60 text-muted-foreground hover:border-[var(--accent)]/40 hover:text-foreground'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeTabBadge"
                    className="absolute inset-0 -z-10 rounded-full bg-[var(--primary)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {preset.name}
              </button>
            );
          })}
        </Reveal>

        {/* Main Interactive Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[5fr_6fr]">
          {/* Controls Panel */}
          <Reveal delay={0.15}>
            <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {selectedIndustry.badge}
                  </span>
                  <h3 className="mt-1 text-xl font-bold">{selectedIndustry.name} Inputs</h3>
                </div>
                <div className="rounded-lg bg-[var(--accent)]/10 p-2 text-[var(--accent)]">
                  <Layers className="h-5 w-5" />
                </div>
              </div>

              {/* Slider 1: Volume */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-sm font-medium">
                  <label htmlFor="volume-slider" className="text-foreground">
                    {selectedIndustry.volumeLabel}
                  </label>
                  <span className="font-heading text-lg font-bold text-[var(--accent)]">
                    {volume.toLocaleString('en-US')} / mo
                  </span>
                </div>
                <input
                  id="volume-slider"
                  type="range"
                  min={selectedIndustry.minVolume}
                  max={selectedIndustry.maxVolume}
                  step={selectedIndustry.volumeStep}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-[var(--accent)]"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{selectedIndustry.minVolume.toLocaleString()} / mo</span>
                  <span>{selectedIndustry.maxVolume.toLocaleString()} / mo</span>
                </div>
              </div>

              {/* Slider 2: Value */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between text-sm font-medium">
                  <label htmlFor="value-slider" className="text-foreground">
                    {selectedIndustry.valueLabel}
                  </label>
                  <span className="font-heading text-lg font-bold text-[var(--accent)]">
                    ${dealValue.toLocaleString('en-US')}
                  </span>
                </div>
                <input
                  id="value-slider"
                  type="range"
                  min={selectedIndustry.minValue}
                  max={selectedIndustry.maxValue}
                  step={selectedIndustry.valueStep}
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-[var(--accent)]"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${selectedIndustry.minValue.toLocaleString()}</span>
                  <span>${selectedIndustry.maxValue.toLocaleString()}</span>
                </div>
              </div>

              {/* Key Deliverables Pill Box */}
              <div className="mt-8 rounded-xl border border-border/80 bg-muted/40 p-4">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
                  Key Enablers Deployed
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                  {selectedIndustry.keyOutcomes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Results Projection Card */}
          <Reveal delay={0.2}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--accent)]/30 bg-gradient-to-br from-card via-card to-[color-mix(in_oklch,var(--accent)_6%,transparent)] p-6 shadow-xl md:p-8">
              {/* Top Accent Strip */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--accent)] via-[color-mix(in_oklch,var(--accent)_60%,white)] to-[var(--accent)]" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Projected 12-Month Impact
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)]/15 px-2.5 py-0.5 text-xs font-bold text-[var(--accent)]">
                    <TrendingUp className="h-3.5 w-3.5" />
                    +{Math.round(selectedIndustry.liftMultiplier * 100)}% Growth Lift
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="mt-6 rounded-2xl border border-border bg-card/80 p-6 backdrop-blur">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Estimated Annual Pipeline Lift
                  </div>
                  <div className="mt-2 flex items-baseline gap-1 font-heading text-4xl font-extrabold text-[var(--accent)] md:text-5xl">
                    <span>+$</span>
                    <Counter
                      value={calculatedAnnualRevenueLift}
                      format={(n) => Math.round(n).toLocaleString('en-US')}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Modeled on verified +{calculatedAdditionalLeads.toLocaleString()} qualified opportunities/mo across connected channels.
                  </p>
                </div>

                {/* Sub-Metrics Grid */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card/60 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                      <Zap className="h-3.5 w-3.5 text-[var(--accent)]" />
                      Velocity Lift
                    </div>
                    <div className="mt-2 font-heading text-xl font-bold text-foreground">
                      {selectedIndustry.velocityBoost}
                    </div>
                    <div className="mt-1 text-[0.75rem] text-muted-foreground">
                      Cycle acceleration
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-card/60 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-[var(--accent)]" />
                      Team Capacity
                    </div>
                    <div className="mt-2 font-heading text-xl font-bold text-foreground">
                      ~{calculatedHoursSavedAnnual} hrs/yr
                    </div>
                    <div className="mt-1 text-[0.75rem] text-muted-foreground">
                      Automated time freed
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Band */}
              <div className="mt-8 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full gap-2 rounded-xl bg-[var(--accent)] text-base font-semibold text-white shadow-lg shadow-[var(--accent)]/25 hover:bg-[color-mix(in_oklch,var(--accent)_85%,black)] hover:shadow-xl hover:shadow-[var(--accent)]/35 hover:-translate-y-0.5"
                >
                  <Link href={`/contact?industry=${selectedIndustry.id}&volume=${volume}`}>
                    Build Strategy Based on This Model
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Zero commitment. Includes custom technical audit & growth roadmap.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
