'use client';

import { motion } from 'framer-motion';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { CheckCircle2, Sparkles, Target, Compass, ShieldCheck, Users, Award } from 'lucide-react';

const beliefs = [
  { title: 'Clarity drives growth', desc: 'We believe that clear strategy, clear messaging, and clear systems create the foundation for sustainable business growth.' },
  { title: 'Systems, not isolated outputs', desc: 'Every campaign, platform, and workflow we build connects to a larger growth architecture.' },
  { title: 'Practical innovation', desc: 'We adopt technology and approaches that solve real problems, not ones that simply look impressive.' },
  { title: 'Results that scale', desc: 'We focus on outcomes that compound, not tactics that expire.' },
];

const whyClients = [
  { title: 'Integrated thinking', desc: 'We don\'t operate in silos. Every recommendation considers its impact across your marketing, technology, and operations.' },
  { title: 'Sector awareness', desc: 'Deep expertise in education, B2B SaaS, healthcare, and enterprise technology means we understand your landscape — not just your tools.' },
  { title: 'Execution depth', desc: 'Strategy without execution is speculation. We build, deploy, manage, and optimize — from first campaign to full-scale rollout.' },
  { title: 'Long-term partnership', desc: 'We measure success in years, not sprints. Our engagement model is designed to build capability alongside delivering results.' },
];

const teamStats = [
  { num: '12+', label: 'Team members' },
  { num: '4', label: 'Industry verticals' },
  { num: '50+', label: 'Projects delivered' },
];

const teamRoles = [
  'Strategic consultants who understand your business goals',
  'Platform engineers who build scalable architectures',
  'Marketing operators who execute campaigns end-to-end',
  'CRM architects who unify sales, marketing, and service',
  'Data analysts who turn metrics into actionable insights',
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About ISD"
      title={<>A modern solutions partner for <span className="text-gradient">growth, platforms, and delivery</span></>}
      intro="We exist to close the gap between strategy and execution for organizations navigating complex digital growth."
    >
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Who We Are
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Strategy without execution is just consulting
            </h2>
          </Reveal>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <Reveal>
              <p>
                ISD Info Solutions was founded on a simple observation: too many organizations have strong strategies that never translate into operational reality. The gap between planning and execution costs companies millions in missed opportunities, fragmented systems, and stalled growth.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                We built ISD to close that gap. Our team brings together strategic consultants, platform engineers, marketing operators, and CRM architects under one roof — all aligned around a single mission: turning business objectives into measurable outcomes.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                From demand generation campaigns that fill pipelines, to AI workflows that eliminate manual bottlenecks, to Salesforce architectures that unify entire organizations — we do the hard work of making growth systems actually work.
              </p>
            </Reveal>
          </div>
        </div>
      </PageSection>

      <PageSection variant="mist">
        <Reveal className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Target className="h-3.5 w-3.5" />
            What We Believe
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            The principles that guide every engagement
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {beliefs.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-sm transition-all hover:border-[#0284C7] hover:shadow-xl dark:hover:border-[#38BDF8] w-full max-w-full overflow-hidden"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0284C7]/10 dark:bg-[#38BDF8]/15 text-[#0284C7] dark:text-[#38BDF8]">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <Reveal className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
            <Compass className="h-3.5 w-3.5" />
            Why Clients Choose ISD
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Built for organizations that need more than a vendor
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyClients.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-sm transition-all hover:border-[#0284C7]/50 hover:shadow-md w-full max-w-full overflow-hidden"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0284C7]/10 dark:bg-[#38BDF8]/15 text-[#0284C7] dark:text-[#38BDF8]">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection variant="mist">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[6fr_6fr] lg:items-center">
          <div>
            <Reveal className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
                <Users className="h-3.5 w-3.5" />
                Our Team
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                Strategic thinking meets delivery discipline
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground md:text-lg">
                Our team combines strategic thinking, technical expertise, and delivery discipline. From senior strategists and platform architects to campaign operators and CRM engineers, every member of the ISD team is focused on one thing: making your growth systems work.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              {teamStats.map((stat, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-card p-3.5 sm:p-4 shadow-sm text-center">
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0284C7] dark:text-[#38BDF8] md:text-4xl">{stat.num}</div>
                    <div className="mt-1 text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-xl w-full max-w-full overflow-hidden">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Integrated Capabilities Roster
            </h3>
            <ul className="space-y-3">
              {teamRoles.map((role, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="flex items-start gap-3 rounded-2xl border border-border/80 bg-muted/40 p-3.5 sm:p-4 text-xs sm:text-sm font-semibold text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0284C7] dark:text-[#38BDF8]" />
                    <span>{role}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <PageCtaBand
        title="Start a Conversation"
        subtitle="Whether you're exploring a new initiative or rethinking an existing one, we'd love to hear about your goals."
        ctaText="Talk to ISD"
        ctaHref="/contact"
      />
    </PageShell>
  );
}

