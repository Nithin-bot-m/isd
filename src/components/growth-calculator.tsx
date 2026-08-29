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
    <section id="roi-calculator" className="relative overflow-hidden py-20 sm:py-24 md:py-32 bg-background w-full max-w-full">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Calculator className="h-3.5 w-3.5" />
            Interactive ROI Estimator
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Simulate your growth <span className="text-gradient">potential</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            See how integrated digital marketing, AI automation, and Salesforce DevOps compound your pipeline velocity and team capacity.
          </p>
        </Reveal>

        {/* Industry Selector Tabs */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2.5">
          {industryPresets.map((preset) => {
            const active = selectedIndustry.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleSelectIndustry(preset)}
                className={`relative rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  active
                    ? 'bg-[#0284C7] dark:bg-[#38BDF8] text-white dark:text-[#030712] shadow-lg shadow-[#0284C7]/25'
                    : 'border border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                }`}
              >
                {preset.name}
              </button>
            );
          })}
        </Reveal>

        {/* Main Interactive Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[5fr_6fr]">
          {/* Controls Panel */}
          <Reveal delay={0.15}>
            <div className="relative h-full rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
                    {selectedIndustry.badge}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-foreground">{selectedIndustry.name} Inputs</h3>
                </div>
                <div className="rounded-xl bg-[#0284C7]/10 p-2.5 text-[#0284C7] dark:bg-[#38BDF8]/15 dark:text-[#38BDF8]">
                  <Layers className="h-5 w-5" />
                </div>
              </div>

              {/* Slider 1: Volume */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <label htmlFor="volume-slider" className="text-foreground">
                    {selectedIndustry.volumeLabel}
                  </label>
                  <span className="font-heading text-lg font-extrabold text-[#0284C7] dark:text-[#38BDF8]">
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
                  className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-[#0284C7] dark:accent-[#38BDF8]"
                />
                <div className="flex justify-between text-xs font-medium text-muted-foreground">
                  <span>{selectedIndustry.minVolume.toLocaleString()} / mo</span>
                  <span>{selectedIndustry.maxVolume.toLocaleString()} / mo</span>
                </div>
              </div>

              {/* Slider 2: Value */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <label htmlFor="value-slider" className="text-foreground">
                    {selectedIndustry.valueLabel}
                  </label>
                  <span className="font-heading text-lg font-extrabold text-[#0284C7] dark:text-[#38BDF8]">
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
                  className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-[#0284C7] dark:accent-[#38BDF8]"
                />
                <div className="flex justify-between text-xs font-medium text-muted-foreground">
                  <span>${selectedIndustry.minValue.toLocaleString()}</span>
                  <span>${selectedIndustry.maxValue.toLocaleString()}</span>
                </div>
              </div>

              {/* Key Deliverables Pill Box */}
              <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-5">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                  Key Enablers Deployed
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                  {selectedIndustry.keyOutcomes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0284C7] dark:text-[#38BDF8]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Results Projection Card */}
          <Reveal delay={0.2}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[#0284C7]/30 bg-card p-6 shadow-xl md:p-8">
              {/* Top Accent Strip */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0284C7] via-[#6366F1] to-[#D97706]" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Projected 12-Month Impact
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#0284C7]/15 dark:bg-[#38BDF8]/15 px-3 py-1 text-xs font-bold text-[#0284C7] dark:text-[#38BDF8]">
                    <TrendingUp className="h-3.5 w-3.5" />
                    +{Math.round(selectedIndustry.liftMultiplier * 100)}% Growth Lift
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-6 backdrop-blur">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Estimated Annual Pipeline Lift
                  </div>
                  <div className="mt-2 flex items-baseline gap-1 font-heading text-4xl font-extrabold text-[#0284C7] dark:text-[#38BDF8] md:text-5xl">
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
                  <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                      <Zap className="h-3.5 w-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                      Velocity Lift
                    </div>
                    <div className="mt-2 font-heading text-xl font-bold text-foreground">
                      {selectedIndustry.velocityBoost}
                    </div>
                    <div className="mt-1 text-[0.75rem] text-muted-foreground">
                      Cycle acceleration
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
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
              <div className="mt-8 pt-4 border-t border-border">
                <Button
                  asChild
                  size="lg"
                  className="h-13 w-full gap-2 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-base font-bold text-white shadow-xl shadow-[#0284C7]/25 hover:shadow-2xl hover:shadow-[#0284C7]/35 hover:-translate-y-0.5 transition-all"
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

