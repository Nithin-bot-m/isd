'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Calendar,
  Layers,
  Database,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Landmark,
  Clock,
  Sparkles,
  ExternalLink,
  Code2,
  Radio,
  BarChart3,
  Cpu,
  Zap,
} from 'lucide-react';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/magnetic';

export function Nfx3ClientPage() {
  return (
    <PageShell
      eyebrow="ISD Proprietary Platform · Live In Production"
      title={
        <>
          NFX³ — Real-Time Institutional{' '}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400 bg-clip-text text-transparent">
            Market Intelligence
          </span>
        </>
      }
      intro="Conceived, architected, and operated by ISD Info Solutions — NFX3 decodes global foreign exchange markets, live XAU/USD bullion telemetry, ForexFactory calendar releases, and central bank macro policies with institutional rigour and zero noise."
    >
      {/* Quick Launch & Status Bar */}
      <section className="relative z-20 -mt-10 mb-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-2xl shadow-xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                Live Production Platform
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                <Radio className="h-3.5 w-3.5 text-amber-400" />
                24/5 Interbank Feed Active
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400">
                &bull; URL: <code className="text-amber-300 font-mono">https://www.nfx3.com</code>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Magnetic as="div">
                <Button
                  asChild
                  size="sm"
                  className="gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 font-bold text-black shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-400 hover:scale-[1.02] transition-all"
                >
                  <a
                    href="https://www.nfx3.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Launch NFX3 live platform in new tab"
                  >
                    Launch Live Terminal
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Terminal Interactive Preview */}
      <PageSection variant="dark" className="pt-6 sm:pt-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-400 mb-4 border border-amber-400/20">
                <Zap className="h-3.5 w-3.5" />
                Venture Engineering Showcase
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                Institutional market data,{' '}
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  engineered without noise.
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                Financial traders, proprietary desk operators, and macro analysts often drown in fragmented screens, delayed feeds, and speculative buy/sell noise.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
                ISD engineered <strong>NFX³</strong> from the ground up: an ultra-fast, real-time terminal that aggregates verified macroeconomic releases, central bank rate radars, CFTC COT speculative flows, and sub-second spot gold bullion quotes in one unified glass cockpit.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-white/10 pt-6">
                <div>
                  <div className="font-heading text-2xl font-bold text-amber-400">24+</div>
                  <div className="mt-1 text-xs text-slate-400">Interbank Pairs</div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-amber-400">&lt;250ms</div>
                  <div className="mt-1 text-xs text-slate-400">Streaming Telemetry</div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-amber-400">100%</div>
                  <div className="mt-1 text-xs text-slate-400">ForexFactory Ingest</div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-emerald-400">0</div>
                  <div className="mt-1 text-xs text-slate-400">Signal Noise</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Interactive Live Telemetry Bento Display */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-card/90 via-[#0B1220]/95 to-[#070A12]/95 p-6 sm:p-7 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-black tracking-wider text-white">
                      XAU/USD SPOT
                    </span>
                    <span className="rounded bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-amber-300 border border-amber-400/30">
                      OANDA INTERBANK
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400 border border-emerald-500/30">
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
                    LIVE 24/5
                  </span>
                </div>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">
                      Spot Bullion (Troy Ounce)
                    </span>
                    <div className="mt-1 font-mono text-3xl sm:text-4xl font-black text-white flex items-baseline gap-1.5">
                      <span>$4,349.42</span>
                      <span className="text-xs font-normal text-slate-400">USD/oz</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-xl bg-emerald-500/10 px-3 py-1.5 text-xs sm:text-sm font-bold text-emerald-400 border border-emerald-500/20">
                    <Activity className="h-3.5 w-3.5" />
                    +0.75%
                  </div>
                </div>

                {/* BID / ASK & Spread */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Interbank Bid
                    </span>
                    <div className="font-mono text-sm sm:text-base font-bold text-white mt-0.5">
                      $4,349.12
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Interbank Ask
                    </span>
                    <div className="font-mono text-sm sm:text-base font-bold text-white mt-0.5">
                      $4,349.72
                    </div>
                  </div>
                </div>

                {/* Micro Widgets */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3 text-sky-400" />
                        Next High-Impact
                      </span>
                      <span className="text-amber-300 font-mono">08:30 EST</span>
                    </div>
                    <p className="mt-1 font-semibold text-white truncate text-[12px]">
                      US Non-Farm Payrolls (NFP)
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <Landmark className="h-3 w-3 text-purple-400" />
                        Fed Funds Rate
                      </span>
                      <span className="text-purple-300 font-mono font-bold">4.50%</span>
                    </div>
                    <p className="mt-1 font-semibold text-white truncate text-[12px]">
                      Target 4.25% – 4.50%
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    100% Educational &bull; Zero Buy/Sell Signals
                  </span>
                  <a
                    href="https://www.nfx3.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
                  >
                    Open Live Terminal
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </PageSection>

      {/* Four Core Pillars of NFX3 */}
      <PageSection variant="mist">
        <Reveal className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Layers className="h-3.5 w-3.5" />
            Platform Architecture
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Four pillars of <span className="text-gradient">market telemetry</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            How ISD engineered every layer of NFX3 to deliver high-concurrency, zero-latency macroeconomic intelligence.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all hover:border-[#0284C7] hover:shadow-xl dark:hover:border-[#38BDF8]"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0284C7]/10 dark:bg-[#38BDF8]/15 text-[#0284C7] dark:text-[#38BDF8] mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Pillar 0{i + 1}
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-foreground sm:text-2xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pillar.desc}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-border/60 pt-4">
                      {pillar.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-foreground font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </PageSection>

      {/* The ISD Venture Engineering Story */}
      <PageSection variant="dark">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-400 mb-3 backdrop-blur-md">
              <Code2 className="h-3.5 w-3.5" />
              Engineering Behind The Product
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl leading-tight">
              Why ISD built NFX³: Proving{' '}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                platform velocity
              </span>
            </h2>
          </Reveal>

          <div className="space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
            <Reveal>
              <p>
                Many digital agencies only consult on other people’s systems. At <strong>ISD Info Solutions</strong>, we believe the best software engineering teams build, launch, and operate their own production products.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p>
                NFX³ was engineered as a high-throughput, low-latency showcase of ISD’s <strong>Enterprise Solution Engineering™</strong> and <strong>AI Systems Engineering™</strong> capabilities. Handling live interbank WebSocket feeds, financial time-series rendering, and automated macroeconomic data pipelines requires bulletproof software architecture.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                This exact engineering rigor is what we bring to every enterprise client engagement—whether you are building a custom B2B SaaS platform, real-time data ingestion pipelines, or automated internal operational tools.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 font-bold text-white shadow-lg"
                >
                  <Link href="/services/enterprise-solutions">
                    Explore Enterprise Solutions
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-white/20 bg-white/5 text-white hover:bg-white hover:text-[#0A0F1D]"
                >
                  <a href="https://www.nfx3.com" target="_blank" rel="noopener noreferrer">
                    Explore NFX3 Live
                    <ArrowUpRight className="h-4 w-4 ml-1.5" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </PageSection>

      {/* Tech Stack & System Specifications */}
      <PageSection variant="light">
        <Reveal className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Cpu className="h-3.5 w-3.5" />
            Stack & Telemetry Specifications
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Built on institutional infrastructure
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techSpecs.map((spec, i) => (
            <Reveal key={spec.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[#0284C7] dark:hover:border-[#38BDF8]">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {spec.category}
                </div>
                <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
                  {spec.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {spec.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* Reusable CTA Band */}
      <PageCtaBand
        title="Ready to Build Your Own Next-Gen Platform?"
        subtitle="Looking to architect high-throughput applications, real-time data visualizers, or custom AI systems? Partner directly with the engineering team that built NFX³."
        ctaText="Book an Architecture Session"
        ctaHref="/contact"
        secondaryCta="Visit NFX3.com ↗"
        secondaryHref="https://www.nfx3.com"
      />
    </PageShell>
  );
}

const pillars = [
  {
    icon: Activity,
    title: 'Live 1-Minute Ambient Telemetry',
    desc: 'Direct sub-second interbank spot gold (XAU/USD) price quotes via institutional OANDA feeds with locked $0.60 interbank spreads.',
    bullets: [
      '1-minute ambient candlestick charts & volume histograms',
      'Session percentage performance & real-time bid/ask quotes',
      '24/5 streaming status spanning Asian, London & NY sessions',
    ],
  },
  {
    icon: Calendar,
    title: 'ForexFactory Calendar Ingestion',
    desc: 'Continuous ingestion and synchronization of tier-1 macroeconomic calendar releases directly from ForexFactory.',
    bullets: [
      'Categorized into High Impact (Red Folder) and Medium Impact',
      'Consensus forecasts, previous prints, and live reported values',
      'UTC/GMT countdown clocks synced to upcoming releases',
    ],
  },
  {
    icon: BarChart3,
    title: 'CFTC COT Speculative Flows',
    desc: 'Automated decoding of weekly Commitments of Traders (COT) reports published by the US Commodity Futures Trading Commission.',
    bullets: [
      'Speculative non-commercial net positions vs commercial hedgers',
      'Covers Gold (XAU) and all G10 currency futures',
      'Visual historical histograms highlighting institutional bias',
    ],
  },
  {
    icon: Landmark,
    title: 'Central Bank Policy Benchmark Radar',
    desc: 'Live monetary policy tracking across the global central banking quad: Federal Reserve, European Central Bank, Bank of England, and Bank of Japan.',
    bullets: [
      'Benchmark policy interest rates and target ranges',
      'Meeting review dates and hawkish/dovish forward guidance',
      '24/5 session clock tracking Sydney, Tokyo, London & New York',
    ],
  },
];

const techSpecs = [
  {
    category: 'Frontend & UI',
    title: 'Next.js & Ambient Canvas',
    desc: 'React 19, Tailwind CSS, Turbopack, and hardware-accelerated ambient canvas graphics for smooth 60fps telemetry.',
  },
  {
    category: 'Data Ingestion',
    title: 'Interbank WebSocket Feeds',
    desc: 'Sub-second interbank quote streaming connected to OANDA endpoints with automatic failover and reconnect logic.',
  },
  {
    category: 'Pipeline Processing',
    title: 'ForexFactory & CFTC Parsers',
    desc: 'Serverless cron workers parsing tier-1 economic events, previous/consensus values, and weekly CFTC COT positioning data.',
  },
  {
    category: 'Compliance & Ethics',
    title: '100% Objective Macro Intel',
    desc: 'Zero buy/sell signals, zero trading calls, zero subscription paywalls — pure institutional macroeconomic research.',
  },
];
