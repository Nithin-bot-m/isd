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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1" id="main-content">
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
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Navy gradient backdrop */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--carbon)] via-[var(--carbon)] to-[color-mix(in_oklch,var(--carbon)_80%,var(--accent))]"
        aria-hidden
      />
      {/* Subtle grid */}
      <div className="grid-overlay absolute inset-0 z-0 opacity-[0.15]" aria-hidden />
      {/* Glow orbs */}
      <div
        className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-[var(--accent)] opacity-20 blur-3xl animate-pulse"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
              Strategy-Led Growth Partner &bull; Active
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Build Growth{' '}
              <span className="bg-gradient-to-r from-white via-[color-mix(in_oklch,white_85%,var(--accent))] to-[color-mix(in_oklch,white_70%,var(--accent))] bg-clip-text text-transparent">
                Intelligently
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Integrated digital marketing, custom AI platforms, education marketing, and Salesforce DevOps for organizations ready to scale without vendor silos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Magnetic as="div" className="inline-flex">
                <Button
                  asChild
                  size="lg"
                  className="h-12 gap-2 rounded-xl bg-[var(--accent)] px-7 text-base font-semibold text-white shadow-xl shadow-[color-mix(in_oklch,var(--accent)_40%,transparent)] hover:bg-[color-mix(in_oklch,var(--accent)_85%,black)] hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <Link href="/contact">
                    Book a Strategy Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic as="div" className="inline-flex">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 gap-2 rounded-xl border-white/20 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur hover:border-white/40 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                >
                  <Link href="/services">
                    <Layers className="h-4 w-4 text-[var(--accent)]" />
                    Explore All Services
                  </Link>
                </Button>
              </Magnetic>
            </div>

            {/* Trust signals row */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                100+ deployments
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                98% client retention
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                3.2x avg pipeline lift
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================ TRUST BAR ============================ */
function TrustBar() {
  return (
    <section id="trust" className="relative -mt-px bg-card py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {trustStats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-card">
              <div className="flex h-full flex-col items-center justify-center px-4 py-8 text-center md:py-10">
                <div className="font-heading text-4xl font-extrabold tracking-tight text-[var(--accent)] md:text-5xl">
                  {stat.num}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:text-sm">
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
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Integrated services for <span className="text-gradient">modern growth</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Four specialized practices engineered to operate independently or combine for compounding market advantage.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
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
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-[var(--accent)] hover:shadow-2xl"
    >
      {/* Accent top gradient */}
      <div
        className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] via-[color-mix(in_oklch,var(--accent)_60%,white)] to-[var(--accent)] transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />

      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent)]/10 font-heading text-lg font-bold text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            Core Practice
          </span>
        </div>

        <h3 className="font-heading text-2xl font-bold tracking-tight transition-colors group-hover:text-[var(--accent)]">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {service.shortDescription}
        </p>

        {/* Capability Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {service.capabilities.slice(0, 4).map((cap) => (
            <span
              key={cap}
              className="inline-flex items-center rounded-lg border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/80 pt-5">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[var(--accent)] transition-colors hover:underline"
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
    <section id="why" className="relative overflow-hidden bg-[var(--carbon)] py-24 text-white md:py-32">
      <div className="mesh-bg absolute inset-0 opacity-90" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[5fr_7fr] lg:items-center lg:px-8">
        <Reveal direction="up">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Why ISD
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            One partner. Four connected{' '}
            <span className="text-gradient">growth engines</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            ISD unifies the key disciplines your growth requires — marketing, intelligence, technology, and operations — eliminating vendor hand-offs and misaligned roadmaps.
          </p>

          <div className="mt-8 flex items-center gap-4 text-sm font-semibold text-white/80">
            <ShieldCheck className="h-6 w-6 text-[var(--accent)]" />
            <span>Guaranteed SLA &bull; Verified Security &bull; Full Accountability</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyIsdPoints.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <GlassCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassCard({ item }: { item: (typeof whyIsdPoints)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="glass relative overflow-hidden rounded-2xl p-6 text-white"
    >
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
    </motion.div>
  );
}

/* ============================ VALUE BAND ============================ */
function ValueBand() {
  return (
    <section className="bg-gradient-to-r from-[var(--accent)] via-[color-mix(in_oklch,var(--accent)_80%,var(--carbon))] to-[var(--accent)] py-10 shadow-inner">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 lg:px-8">
        {valueWords.map((word, i) => (
          <React.Fragment key={word}>
            <motion.span
              className="font-heading text-2xl font-extrabold tracking-tight text-white md:text-4xl"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            >
              {word}
            </motion.span>
            {i < valueWords.length - 1 && (
              <span className="hidden h-2 w-2 rounded-full bg-white/40 md:block" />
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
    <section id="work" className="bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
          <Reveal className="max-w-2xl">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
              Verified Case Studies
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Proof through <span className="text-gradient">execution</span>
            </h2>
          </Reveal>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[var(--accent)] text-white shadow-md'
                    : 'border border-border bg-card text-muted-foreground hover:text-foreground'
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
              className="rounded-xl border-border px-8 font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className="group grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl md:grid-cols-[1fr_2fr] md:p-8"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${
          gradients[index % gradients.length]
        } flex items-center justify-center p-6 text-white`}
      >
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Validated Outcome
          </span>
          <p className="mt-2 font-heading text-lg font-bold leading-snug">{study.title}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-1.5">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-0.5 text-[0.7rem] font-semibold text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mt-4 text-2xl font-bold leading-snug transition-colors group-hover:text-[var(--accent)]">
            {study.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {study.challenge}
          </p>

          <div className="mt-4 rounded-xl border-l-4 border-[var(--accent)] bg-muted/40 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
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
            className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[var(--accent)] hover:underline"
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
  return (
    <section id="industries" className="relative overflow-hidden bg-[var(--carbon)] py-24 text-white md:py-32">
      <div className="mesh-bg absolute inset-0 opacity-90" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Industries We Accelerate
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Built for complex <span className="text-gradient">growth environments</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35 }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:border-[var(--accent)]/50 hover:bg-white/[0.08]"
              >
                <div>
                  <h3 className="font-heading text-xl font-bold">{ind.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{ind.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={`/industries#${ind.id}`}
                    className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-[var(--accent)] group-hover:underline"
                  >
                    Explore Sector
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ INSIGHTS ============================ */
function InsightsSection() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Insights & Thought Leadership
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Intelligence for teams building <span className="text-gradient">smarter growth</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
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
              className="rounded-xl border-border px-8 font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
    'from-[#0369a1] to-[#0284c7]',
    'from-[#0f172a] to-[#334155]',
    'from-[#0d9488] to-[#14b8a6]',
  ];

  return (
    <Link href="/insights" className="group flex flex-col">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-lg hover:border-[var(--accent)]/40"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              gradients[index % gradients.length]
            } flex items-center justify-center p-4 text-white text-center font-heading font-bold text-lg`}
          >
            {post.category}
          </div>
        </div>
        <div className="mt-4 flex flex-1 flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              {post.category}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold leading-snug transition-colors group-hover:text-[var(--accent)]">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-border/60 pt-3 text-xs text-muted-foreground">
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
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card transition-colors data-[state=open]:border-[var(--accent)] data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-heading text-base font-semibold hover:no-underline hover:text-[var(--accent)]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
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
    <section id="cta" className="relative overflow-hidden bg-[var(--carbon)] py-24 text-white md:py-32">
      <div className="mesh-bg absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-14">
            <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[var(--accent)] via-[color-mix(in_oklch,var(--accent)_60%,white)] to-[var(--accent)]" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-[var(--accent)] text-white shadow-xl">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold">Project Brief Received!</h3>
                  <p className="mt-3 max-w-md text-white/70">
                    Thank you, {form.name}. A senior growth director specializing in {goal} will contact you within 24 hours with a custom strategy assessment.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8 rounded-xl border-white/25 text-white hover:bg-white hover:text-[var(--carbon)]"
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
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      <Sparkles className="h-3.5 w-3.5" />
                      Get Started Today
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                      Ready to connect strategy, systems, and growth?
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-base text-white/70 md:text-lg">
                      Tell us what you are aiming to build or solve. We will construct a clear, outcome-backed roadmap for your team.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                    {/* Step 1: Goal Selector */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                        1. Select Primary Growth Focus:
                      </label>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {goals.map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => setGoal(g)}
                            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                              goal === g
                                ? 'bg-[var(--accent)] text-white shadow-md'
                                : 'border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Scale/Timeline Selector */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                        2. Target Timeline:
                      </label>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {scales.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setScale(s)}
                            className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                              scale === s
                                ? 'bg-white text-[var(--carbon)] font-bold shadow-md'
                                : 'border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
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
                        className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Work email address"
                        aria-label="Work email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                      />
                    </div>

                    <textarea
                      required
                      placeholder="Briefly describe your objectives, existing stack, or challenges..."
                      aria-label="Project brief"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                    />

                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                      <Magnetic as="div" className="inline-flex">
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="relative h-13 overflow-hidden rounded-xl bg-[var(--accent)] px-8 font-heading text-base font-bold text-white shadow-xl shadow-[var(--accent)]/30 transition-all hover:bg-[color-mix(in_oklch,var(--accent)_85%,black)] hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-70"
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
