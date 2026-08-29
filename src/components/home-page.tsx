'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  BarChart3,
  Users,
  Building2,
  GraduationCap,
  HeartPulse,
  Send,
  Zap,
  ShieldCheck,
  Cpu,
  Megaphone,
  CloudCog,
  TrendingUp,
  Activity,
  Code2,
  Globe,
  Sparkle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { Reveal } from '@/components/reveal';
import { Magnetic } from '@/components/magnetic';
import { InteractiveProcess } from '@/components/interactive-process';
import { Counter } from '@/components/counter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  services,
  caseStudies,
  industries,
  insights,
  faqs,
  trustStats,
  whyIsdPoints,
  valueWords,
} from '@/lib/data';

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-hidden" id="main-content">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <WhyIsdSection />
        <ValueBand />
        <InteractiveProcess />
        <FilterableWorkSection />
        <IndustriesSection />
        <InsightsSection />
        <FaqSection />
        <InteractiveCtaSection />
      </main>
      <Footer />
    </div>
  );
}

/* ============================ HERO ============================ */
function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-[#0A0F1D] text-white">
      {/* Dynamic atmospheric mesh background */}
      <div className="mesh-bg absolute inset-0 opacity-80" aria-hidden />
      
      {/* Precision grid overlay */}
      <div className="grid-overlay absolute inset-0 opacity-20" aria-hidden />

      {/* Luminous aurora light orbs */}
      <div
        className="absolute -top-32 -right-20 h-[500px] w-[500px] rounded-full bg-[#0284C7]/20 blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/2 -left-32 h-[450px] w-[450px] rounded-full bg-[#6366F1]/15 blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-24 right-1/4 h-[350px] w-[350px] rounded-full bg-[#D97706]/10 blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-md shadow-sm">
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
            <span>Strategy-Led Growth Partner &bull; Active</span>
          </div>

          <h1 className="mt-7 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight text-white max-w-4xl">
            Build Growth{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Intelligently
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-300/90 font-normal">
            Integrated digital marketing, custom AI platforms, education marketing, and Salesforce DevOps for organizations ready to scale without vendor silos.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Magnetic as="div" className="inline-flex w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="h-12 sm:h-13 w-full sm:w-auto gap-2.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] px-8 text-sm sm:text-base font-bold text-white shadow-xl shadow-[#0284C7]/30 hover:shadow-2xl hover:shadow-[#0284C7]/40 hover:from-[#0369A1] hover:to-[#075985] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link href="/contact">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>

            <Magnetic as="div" className="inline-flex w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 sm:h-13 w-full sm:w-auto gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-7 text-sm sm:text-base font-semibold text-white backdrop-blur-md hover:border-white/40 hover:bg-white/10 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link href="/services">
                  <Layers className="h-4 w-4 text-sky-400" />
                  Explore All Services
                </Link>
              </Button>
            </Magnetic>
          </div>

          {/* Trust signals row */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3.5 text-xs sm:text-sm font-medium text-slate-300">
            <span className="inline-flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </div>
              100+ deployments
            </span>
            <span className="inline-flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </div>
              98% client retention
            </span>
            <span className="inline-flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </div>
              3.2x avg pipeline lift
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================ TRUST BAR ============================ */
function TrustBar() {
  return (
    <section id="trust" className="relative -mt-px bg-card py-10 sm:py-12 md:py-16 border-b border-border/80 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {trustStats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass-card flex h-full flex-col items-center justify-center rounded-2xl p-4 sm:p-6 text-center">
                <div className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0284C7] dark:text-[#38BDF8] md:text-5xl">
                  {stat.num}
                </div>
                <div className="mt-2 text-[0.72rem] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground md:text-sm">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ SERVICES ============================ */
function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 bg-background relative overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Sparkle className="h-3.5 w-3.5" />
            What We Do
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Integrated services for <span className="text-gradient">modern growth</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Four specialized practices engineered to operate independently or combine for compounding market advantage.
          </p>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const icons = [Megaphone, Cpu, GraduationCap, CloudCog];
  const IconComponent = icons[index % icons.length];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#0284C7]/40 dark:hover:border-[#38BDF8]/40 hover:shadow-2xl hover:shadow-[#0284C7]/10 w-full max-w-full"
    >
      {/* Top accent light bar on hover */}
      <div
        className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-[#0284C7] via-[#6366F1] to-[#D97706] transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />

      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0284C7]/10 text-[#0284C7] dark:bg-[#38BDF8]/15 dark:text-[#38BDF8] transition-colors group-hover:bg-[#0284C7] group-hover:text-white dark:group-hover:bg-[#38BDF8] dark:group-hover:text-[#030712] shadow-sm">
            <IconComponent className="h-6 w-6" />
          </div>
          <span className="rounded-full border border-border bg-muted/70 px-3 py-1 text-xs font-bold text-muted-foreground">
            Practice {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {service.shortDescription}
        </p>

        {/* Capability Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {service.capabilities.slice(0, 4).map((cap) => (
            <span
              key={cap}
              className="inline-flex items-center rounded-lg border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground group-hover:border-[#0284C7]/20 transition-colors"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-5">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[#0284C7] dark:text-[#38BDF8] transition-all group-hover:gap-3"
        >
          Explore {service.title}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

/* ============================ WHY ISD (DARK MESH) ============================ */
function WhyIsdSection() {
  return (
    <section id="why" className="relative overflow-hidden bg-[#0A0F1D] py-20 sm:py-24 text-white md:py-32 w-full max-w-full">
      <div className="mesh-bg absolute inset-0 opacity-80" aria-hidden />
      <div className="grid-overlay absolute inset-0 opacity-15" aria-hidden />
      
      <div className="relative mx-auto grid max-w-7xl gap-10 sm:gap-12 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:items-center lg:px-8">
        <Reveal direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-400 mb-3 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Why ISD
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            One partner. Four connected{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              growth engines
            </span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
            ISD unifies the key disciplines your growth requires — marketing, intelligence, technology, and operations — eliminating vendor hand-offs and misaligned roadmaps.
          </p>

          <div className="mt-8 flex items-center gap-3.5 text-sm font-semibold text-slate-200 bg-white/[0.04] border border-white/10 rounded-2xl p-4 backdrop-blur-md">
            <ShieldCheck className="h-6 w-6 text-sky-400 shrink-0" />
            <span>Guaranteed SLA &bull; Verified Security &bull; Full Accountability</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyIsdPoints.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <GlassCard item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassCard({ item, index }: { item: (typeof whyIsdPoints)[number]; index: number }) {
  const icons = [Layers, Globe, Cpu, CloudCog];
  const IconComponent = icons[index % icons.length];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-white backdrop-blur-xl transition-all duration-300 hover:border-sky-400/50 hover:bg-white/[0.08] hover:shadow-xl"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/20 mb-4">
        <IconComponent className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-bold text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
    </motion.div>
  );
}

/* ============================ VALUE BAND ============================ */
function ValueBand() {
  return (
    <section className="bg-gradient-to-r from-[#0284C7] via-[#6366F1] to-[#0284C7] py-8 sm:py-10 shadow-xl overflow-hidden relative w-full max-w-full">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
        {valueWords.map((word, i) => (
          <React.Fragment key={word}>
            <motion.span
              className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-white md:text-4xl drop-shadow-md"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: i * 0.35,
                ease: 'easeInOut',
              }}
            >
              {word}
            </motion.span>
            {i < valueWords.length - 1 && (
              <span className="hidden h-2.5 w-2.5 rounded-full bg-white/50 md:block shadow-sm" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

/* ============================ FILTERABLE CASE STUDIES ============================ */
function FilterableWorkSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');

  const categories = ['All', 'Education', 'B2B SaaS', 'Healthcare'];

  const filteredStudies =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((study) =>
          study.tags.some((tag) => tag.toLowerCase().includes(activeCategory.toLowerCase()))
        );

  return (
    <section id="work" className="bg-muted/30 py-20 sm:py-24 md:py-32 relative overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <TrendingUp className="h-3.5 w-3.5" />
              Verified Case Studies
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Proof through <span className="text-gradient">execution</span>
            </h2>
          </Reveal>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0284C7] dark:bg-[#38BDF8] text-white dark:text-[#030712] shadow-lg shadow-[#0284C7]/25'
                    : 'border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, i) => (
              <Reveal key={study.id} delay={i * 0.1}>
                <CaseStudyCard study={study} index={i} />
              </Reveal>
            ))}
          </AnimatePresence>
        </div>

        <Reveal className="mt-14 text-center">
          <Magnetic as="div" className="inline-flex">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border border-border bg-card px-8 font-bold hover:border-[#0284C7] hover:text-[#0284C7] dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8] shadow-sm"
            >
              <Link href="/case-studies">Explore All Case Studies &rarr;</Link>
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  const gradients = [
    'from-[#0284C7] to-[#0369A1]',
    'from-[#0A0F1D] to-[#1E293B]',
    'from-[#0D9488] to-[#047857]',
  ];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className="group grid gap-6 sm:gap-8 rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#0284C7]/40 dark:hover:border-[#38BDF8]/40 hover:shadow-xl md:grid-cols-[1fr_2fr] w-full max-w-full overflow-hidden"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${
          gradients[index % gradients.length]
        } flex items-center justify-center p-6 text-white shadow-inner`}
      >
        <div className="text-center">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/15">
            Validated Outcome
          </span>
          <p className="mt-3 font-heading text-lg font-extrabold leading-snug">{study.title}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-border bg-muted/80 px-3 py-1 text-[0.72rem] font-bold text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mt-4 text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">
            {study.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {study.challenge}
          </p>

          <div className="mt-4 rounded-xl border-l-4 border-[#0284C7] dark:border-[#38BDF8] bg-muted/50 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
              Measurable Result
            </span>
            <p className="mt-1 font-heading text-base font-bold text-foreground md:text-lg">
              {study.result}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[#0284C7] dark:text-[#38BDF8] hover:underline"
          >
            Read Complete Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ============================ INDUSTRIES ============================ */
function IndustriesSection() {
  const icons = [GraduationCap, Cpu, Building2, HeartPulse];

  return (
    <section id="industries" className="relative overflow-hidden bg-[#0A0F1D] py-20 sm:py-24 text-white md:py-32 w-full max-w-full">
      <div className="mesh-bg absolute inset-0 opacity-80" aria-hidden />
      <div className="grid-overlay absolute inset-0 opacity-15" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-400 mb-3 backdrop-blur-md">
            <Building2 className="h-3.5 w-3.5" />
            Industries We Accelerate
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Built for complex <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">growth environments</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const IconComp = icons[i % icons.length];
            return (
              <Reveal key={ind.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.35 }}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/50 hover:bg-white/[0.08] hover:shadow-xl"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/20 mb-4">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">{ind.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{ind.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href={`/industries#${ind.id}`}
                      className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-sky-400 group-hover:underline"
                    >
                      Explore Sector
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================ INSIGHTS ============================ */
function InsightsSection() {
  return (
    <section id="blog" className="py-20 sm:py-24 md:py-32 bg-background relative overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Insights & Thought Leadership
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Intelligence for teams building <span className="text-gradient">smarter growth</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1}>
              <InsightCard post={post} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Magnetic as="div" className="inline-flex">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border border-border bg-card px-8 font-bold hover:border-[#0284C7] hover:text-[#0284C7] dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8] shadow-sm"
            >
              <Link href="/insights">View All Articles &rarr;</Link>
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

function InsightCard({
  post,
  index,
}: {
  post: (typeof insights)[number];
  index: number;
}) {
  const gradients = [
    'from-[#0284C7] to-[#0369A1]',
    'from-[#0A0F1D] to-[#1E293B]',
    'from-[#0D9488] to-[#047857]',
  ];

  return (
    <Link href="/insights" className="group flex flex-col h-full">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#0284C7]/40 dark:hover:border-[#38BDF8]/40"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              gradients[index % gradients.length]
            } flex items-center justify-center p-4 text-white text-center font-heading font-bold text-lg shadow-inner`}
          >
            {post.category}
          </div>
        </div>
        <div className="mt-5 flex flex-1 flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
              {post.category}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-border pt-3.5 text-xs font-medium text-muted-foreground">
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ============================ FAQ ============================ */
function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-24 md:py-32 bg-muted/30 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            FAQ
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3.5">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 data-[state=open]:border-[#0284C7] dark:data-[state=open]:border-[#38BDF8] data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="px-5 sm:px-6 py-4 sm:py-4.5 text-left font-heading text-sm sm:text-base font-bold hover:no-underline hover:text-[#0284C7] dark:hover:text-[#38BDF8]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ INTERACTIVE PROJECT PLANNER CTA ============================ */
function InteractiveCtaSection() {
  const [goal, setGoal] = React.useState<string>('Digital Marketing');
  const [scale, setScale] = React.useState<string>('Immediate (<1 Mo)');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const goals = [
    'Digital Marketing',
    'AI Platform / Automation',
    'Education Marketing',
    'Salesforce DevOps',
    'Full-Stack Growth',
  ];

  const scales = ['Immediate (<1 Mo)', '1 – 3 Months', 'Exploring Options'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 850);
  };

  return (
    <section id="cta" className="relative overflow-hidden bg-[#0A0F1D] py-20 sm:py-24 text-white md:py-32 w-full max-w-full">
      <div className="mesh-bg absolute inset-0 opacity-90" aria-hidden />
      <div className="grid-overlay absolute inset-0 opacity-15" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-6 sm:p-8 backdrop-blur-2xl shadow-2xl md:p-14">
            <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-400" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-[#0284C7] text-white shadow-xl shadow-[#0284C7]/40">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-3xl font-extrabold text-white">Project Brief Received!</h3>
                  <p className="mt-3 max-w-md text-slate-300">
                    Thank you, {form.name}. A senior growth director specializing in {goal} will contact you within 24 hours with a custom strategy assessment.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8 rounded-xl border-white/25 text-white hover:bg-white hover:text-[#0A0F1D]"
                    onClick={() => {
                      setStatus('idle');
                      setForm({ name: '', email: '', message: '' });
                    }}
                  >
                    Submit Another Brief
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-400 backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      Get Started Today
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                      Ready to connect strategy, systems, and growth?
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-base text-slate-300 md:text-lg">
                      Tell us what you are aiming to build or solve. We will construct a clear, outcome-backed roadmap for your team.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                    {/* Step 1: Goal Selector */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        1. Select Primary Growth Focus:
                      </label>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {goals.map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => setGoal(g)}
                            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                              goal === g
                                ? 'bg-[#0284C7] text-white shadow-lg shadow-[#0284C7]/30 border border-sky-400/50'
                                : 'border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Scale/Timeline Selector */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        2. Target Timeline:
                      </label>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {scales.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setScale(s)}
                            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                              scale === s
                                ? 'bg-white text-[#0A0F1D] font-extrabold shadow-lg'
                                : 'border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Contact Inputs */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        aria-label="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Work email address"
                        aria-label="Work email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all"
                      />
                    </div>

                    <textarea
                      required
                      placeholder="Briefly describe your objectives, existing stack, or challenges..."
                      aria-label="Project brief"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all"
                    />

                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                      <Magnetic as="div" className="inline-flex">
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="relative h-13 overflow-hidden rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] px-9 font-heading text-base font-bold text-white shadow-xl shadow-[#0284C7]/30 transition-all hover:shadow-2xl hover:shadow-[#0284C7]/40 hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
                        >
                          {status === 'loading' ? (
                            'Submitting Project Brief...'
                          ) : (
                            <span className="flex items-center gap-2">
                              Request Strategy Session
                              <Send className="h-4 w-4" />
                            </span>
                          )}
                        </button>
                      </Magnetic>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

