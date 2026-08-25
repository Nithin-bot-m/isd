'use client';

import * as React from 'react';
import { notFound } from 'next/navigation';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { motion } from 'framer-motion';

interface ServicePageData {
  eyebrow: string;
  title: string;
  intro: string;
  sections: {
    kicker: string;
    heading?: string;
    subheading: string;
    items: { name: string; desc: string }[];
    columns?: number;
  }[];
  process?: {
    kicker: string;
    subheading: string;
    steps: { step: string; title: string; desc: string }[];
  };
  results?: {
    kicker: string;
    subheading: string;
    items: { stat: string; label: string }[];
  };
  tech?: string[];
  inPractice?: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
  caseStudy?: { tag: string; title: string; challenge: string; solution: string; result: string };
  ctaHeading: string;
  ctaBody: string;
  ctaPrimary: string;
}

const servicePages: Record<string, ServicePageData> = {
  'digital-marketing': {
    eyebrow: 'Service',
    title: 'Digital marketing that drives measurable growth',
    intro: 'From SEO to paid media to marketing automation — we build integrated campaigns that turn traffic into pipeline and pipeline into revenue.',
    sections: [
      {
        kicker: 'What We Do',
        subheading: 'Full-spectrum digital marketing capabilities — each one connected, measured, and optimized for business outcomes.',
        items: [
          { name: 'SEO', desc: 'Technical SEO audits, on-page optimization, content strategy, and authority-building programs that drive organic growth.' },
          { name: 'Paid Media', desc: 'Google Ads, LinkedIn, and programmatic campaigns built for qualified pipeline — not just clicks.' },
          { name: 'Content Strategy', desc: 'Thought leadership, conversion-focused landing pages, and content calendars aligned to buyer journey stages.' },
          { name: 'Conversion Optimization', desc: 'A/B testing, UX audits, and funnel analysis that systematically improve conversion rates across every touchpoint.' },
          { name: 'Analytics & Attribution', desc: 'Multi-touch attribution, GA4 implementation, and dashboards that connect marketing activity to revenue outcomes.' },
          { name: 'Marketing Automation', desc: 'HubSpot, Marketo, and Pardot implementations with nurture sequences that move prospects through complex buying cycles.' },
        ],
        columns: 3,
      },
      {
        kicker: "Who It's For",
        subheading: 'Our digital marketing practice is built for organizations with real complexity — multiple channels, audiences, and growth targets.',
        items: [
          { name: 'B2B', desc: 'Complex sales cycles, multiple stakeholders, and long consideration phases require precision targeting and nurture sequences.' },
          { name: 'Education', desc: 'Enrollment funnels with extended timelines, parent involvement, and seasonal peaks demand strategic campaign orchestration.' },
          { name: 'SaaS', desc: 'Product-led growth, trial-to-paid conversion, and expansion revenue require integrated product and marketing data.' },
          { name: 'Growth-Stage', desc: 'Series A–C companies scaling demand generation need efficient, measurable campaigns that prove unit economics.' },
        ],
        columns: 4,
      },
    ],
    process: {
      kicker: 'How We Work',
      subheading: 'A proven five-step process that moves from insight to impact with clarity at every stage.',
      steps: [
        { step: '01', title: 'Audit', desc: 'Deep analysis of your current marketing performance, tech stack, and competitive landscape.' },
        { step: '02', title: 'Strategy', desc: 'Integrated plan connecting channels, content, and campaigns to specific business objectives.' },
        { step: '03', title: 'Campaign Build', desc: 'Full-funnel campaign architecture with creative, targeting, and conversion tracking in place from day one.' },
        { step: '04', title: 'Optimization', desc: 'Continuous A/B testing, bid management, and audience refinement to improve performance week over week.' },
        { step: '05', title: 'Reporting', desc: 'Transparent dashboards showing pipeline impact, attribution data, and strategic recommendations.' },
      ],
    },
    results: {
      kicker: 'Results That Speak',
      subheading: 'Average performance improvements across our client portfolio.',
      items: [
        { stat: '47%', label: 'improvement in lead quality' },
        { stat: '3.2x', label: 'pipeline increase' },
        { stat: '2x', label: 'conversion rate improvement' },
      ],
    },
    faqs: [
      { q: 'How long does it take to see results from digital marketing?', a: 'Paid media campaigns typically show early signals within 2–4 weeks. SEO and content programs build momentum over 3–6 months. We set realistic expectations at the start and report progress transparently throughout.' },
      { q: 'Do you work with our existing marketing tools?', a: "Yes. We integrate with your current CRM, analytics, and automation platforms. If there are gaps, we'll recommend specific tools that solve them — not blanket platform overhauls." },
      { q: 'How do you measure marketing ROI?', a: 'We implement multi-touch attribution models that connect marketing activity to pipeline and revenue. Every engagement starts with clear KPIs tied to business outcomes, and we provide regular reporting against those targets.' },
    ],
    ctaHeading: 'Get a Growth Audit',
    ctaBody: "We'll analyze your current marketing performance and show you exactly where the highest-impact opportunities are.",
    ctaPrimary: 'Request an Audit',
  },
  'ai-platforms': {
    eyebrow: 'Service',
    title: 'AI platforms built for real business use',
    intro: 'We design and build AI-powered platforms, workflows, and internal tools that solve real operational problems — not science projects.',
    sections: [
      {
        kicker: 'Capabilities',
        subheading: 'End-to-end AI platform development — from strategy and architecture to deployment and ongoing optimization.',
        items: [
          { name: 'AI Workflow Design', desc: 'Intelligent workflows that automate decisions, route tasks, and reduce manual intervention across your operations.' },
          { name: 'Platform Development', desc: 'Custom-built platforms that unify data, tools, and processes into a single, purpose-built environment.' },
          { name: 'Internal Tools', desc: 'Dashboards, portals, and operational tools your teams actually use — built around how they work, not how software is supposed to work.' },
          { name: 'Automation Systems', desc: 'End-to-end automation from data ingestion to action, eliminating bottlenecks and reducing operational overhead.' },
          { name: 'Customer-Facing Experiences', desc: 'AI-powered portals, self-service tools, and intelligent interfaces that enhance client relationships and retention.' },
          { name: 'Dashboards & Reporting', desc: 'Real-time reporting platforms that surface the metrics that matter and surface insights before you have to ask for them.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Use Cases',
        subheading: 'Practical AI applications that deliver measurable operational improvements across industries.',
        items: [
          { name: 'Lead Qualification', desc: 'AI scores and routes inbound leads based on fit, intent, and engagement — so your sales team focuses on the right opportunities.' },
          { name: 'Knowledge Systems', desc: 'Internal knowledge bases and documentation platforms powered by AI search and contextual recommendations.' },
          { name: 'Internal Operations', desc: 'Workflow automation that connects disparate tools, eliminates data re-entry, and accelerates cross-functional processes.' },
          { name: 'Education Workflows', desc: 'Student onboarding, progress tracking, and administrative automation purpose-built for education institutions.' },
          { name: 'Client Portals', desc: 'AI-enhanced portals that give clients self-service access to data, reporting, and support — reducing ticket volume and increasing satisfaction.' },
        ],
        columns: 3,
      },
    ],
    process: {
      kicker: 'Our Build Approach',
      subheading: 'A structured, iterative process that moves from discovery to deployment with continuous validation.',
      steps: [
        { step: '01', title: 'Discovery', desc: 'Understand your operations, pain points, and the decisions that need automation.' },
        { step: '02', title: 'Use-Case Mapping', desc: 'Identify the highest-impact automation opportunities and map them to business outcomes.' },
        { step: '03', title: 'Architecture', desc: 'Design the technical foundation — data models, integrations, AI models, and deployment strategy.' },
        { step: '04', title: 'Build', desc: 'Iterative development with continuous feedback, testing, and validation against real workflows.' },
        { step: '05', title: 'Launch', desc: 'Controlled rollout with training, monitoring, and fallback protocols to ensure smooth adoption.' },
        { step: '06', title: 'Improve', desc: 'Ongoing optimization based on usage data, model performance, and evolving business needs.' },
      ],
    },
    tech: ['OpenAI', 'LangChain', 'Next.js', 'Python', 'Salesforce', 'Vercel AI SDK', 'Pinecone', 'PostgreSQL'],
    inPractice: [
      { title: 'Admissions Auto-Qualification', desc: 'A university receives thousands of inquiries each cycle. AI qualifies inbound leads based on program fit, engagement history, and enrollment likelihood — routing high-intent prospects directly to admissions counselors.' },
      { title: 'Sales Ops Intelligence Layer', desc: 'A B2B SaaS company layers AI on top of their Salesforce data to score leads, recommend next actions, and automate follow-up sequences — cutting manual research time by 60% and increasing pipeline velocity.' },
    ],
    faqs: [
      { q: 'Do we need to have AI expertise in-house to work with ISD?', a: 'No. We design platforms with your team in mind — intuitive interfaces, clear documentation, and training that ensures adoption. You don\'t need a data science team to benefit from AI-powered workflows.' },
      { q: 'How do you handle data privacy and security?', a: 'We architect every solution with security-first principles — encrypted data at rest and in transit, role-based access controls, and compliance with GDPR, HIPAA, and other regulatory frameworks as required.' },
      { q: 'What does an AI platform engagement typically look like?', a: 'Most engagements start with a 4–6 week discovery and architecture phase, followed by iterative builds in 2–4 week sprints. Total timeline depends on complexity, but most platforms are production-ready within 3–6 months.' },
    ],
    ctaHeading: 'Discuss an AI Platform',
    ctaBody: 'Tell us about the workflow you want to automate or the tool you want to build. We\'ll show you what\'s possible.',
    ctaPrimary: 'Start a Conversation',
  },
  'education-marketing': {
    eyebrow: 'Service',
    title: 'Education marketing built for trust, engagement, and enrollment',
    intro: 'We help schools, universities, and EdTech organizations reach the right students with the right message — and convert interest into enrollment.',
    sections: [
      {
        kicker: 'Services',
        subheading: 'Purpose-built marketing services for the unique challenges of education enrollment and growth.',
        items: [
          { name: 'Enrollment Marketing', desc: 'Full-funnel enrollment campaigns that reach prospective students across search, social, email, and display — optimized for inquiry-to-enrollment conversion.' },
          { name: 'Admissions Funnels', desc: 'Automated admissions workflows that qualify leads, personalize outreach, and keep prospective students engaged throughout the decision process.' },
          { name: 'EdTech Growth Strategy', desc: 'Market positioning, product-led growth, and demand generation for education technology companies entering new markets or scaling existing ones.' },
          { name: 'Content & Storytelling', desc: 'Compelling narratives that communicate institutional value, student success stories, and program differentiation to the right audiences.' },
          { name: 'Website Messaging', desc: 'Conversion-focused website optimization — clear value propositions, program pages, and inquiry forms designed to capture and convert interest.' },
          { name: 'CRM Nurture Flows', desc: 'Automated email sequences that nurture prospective students from first inquiry through enrollment, with personalized content at each stage.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Who We Serve',
        subheading: 'Education organizations at every level — from local schools to global platforms.',
        items: [
          { name: 'Schools', desc: 'K-12 institutions building enrollment pipelines, managing parent communication, and differentiating in competitive markets.' },
          { name: 'Universities', desc: 'Higher education institutions managing complex enrollment cycles, program marketing, and student lifecycle communications.' },
          { name: 'Training Providers', desc: 'Professional development, certification, and continuing education organizations reaching working professionals.' },
          { name: 'EdTech Platforms', desc: 'Education technology companies scaling user acquisition, demonstrating product value, and driving adoption.' },
        ],
        columns: 4,
      },
      {
        kicker: 'Why It Works',
        subheading: 'Education marketing requires a different playbook — long cycles, multiple stakeholders, and trust-based decisions.',
        items: [
          { name: 'Clear Messaging', desc: 'We translate institutional strengths into compelling, audience-specific messaging that cuts through noise and builds recognition.' },
          { name: 'Long-Cycle Nurturing', desc: 'Education decisions take months. Our nurture sequences maintain engagement, build trust, and guide prospects toward enrollment.' },
          { name: 'Trust-First Conversion', desc: 'We prioritize credibility and value over pressure tactics — because education decisions are deeply personal and high-stakes.' },
          { name: 'Audience Segmentation', desc: 'Different programs, different audiences, different messages. We segment and personalize at every level to maximize relevance.' },
        ],
        columns: 4,
      },
    ],
    caseStudy: {
      tag: 'Education',
      title: 'Scaling Enrollment for a Regional University',
      challenge: 'Facing declining enrollment and fragmented marketing efforts, the university needed a unified strategy to reach prospective students across digital channels.',
      solution: 'Implemented an integrated demand generation engine combining SEO, paid media marketing automation, and CRM integration to create a seamless enrollment funnel.',
      result: '42% increase in qualified inquiries and 28% improvement in enrollment conversion within two semesters.',
    },
    ctaHeading: 'Plan an Enrollment Strategy',
    ctaBody: "Let's build a marketing approach that reaches the right students, builds trust, and drives enrollment growth.",
    ctaPrimary: 'Schedule a Strategy Session',
  },
  'salesforce-devops': {
    eyebrow: 'Service',
    title: 'Salesforce DevOps for scalable, reliable delivery',
    intro: 'We help Salesforce teams move faster, deploy safer, and operate with confidence — from CI/CD pipelines to org governance.',
    sections: [
      {
        kicker: 'Capabilities',
        subheading: 'Full-spectrum Salesforce DevOps — from implementation and optimization to CI/CD and release governance.',
        items: [
          { name: 'Implementation Support', desc: 'End-to-end Salesforce implementation — from requirements gathering and configuration to data migration and user training.' },
          { name: 'Org Optimization', desc: 'Audit, clean, and optimize your Salesforce org — eliminating technical debt, streamlining data models, and improving performance.' },
          { name: 'CI/CD Pipelines', desc: 'Automated deployment pipelines using Salesforce DX, GitHub Actions, and Copado that reduce release risk and accelerate delivery.' },
          { name: 'Release Governance', desc: 'Structured release processes with approval gates, testing checkpoints, and rollback procedures that protect production stability.' },
          { name: 'Environment Strategy', desc: 'Sandbox management, scratch org strategies, and environment refresh schedules that keep development, testing, and staging in sync.' },
          { name: 'Integrations', desc: 'API-based integrations connecting Salesforce to your marketing, finance, and operations systems — with proper error handling and monitoring.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Delivery Benefits',
        subheading: 'Measurable improvements in how your team builds, deploys, and maintains Salesforce.',
        items: [
          { name: 'Reduced Deployment Friction', desc: 'Automated pipelines eliminate manual deployment steps, reducing release cycles from weeks to hours.' },
          { name: 'Better Visibility', desc: "Centralized dashboards show what's deployed, what's in progress, and what's ready for release across every environment." },
          { name: 'Improved Consistency', desc: 'Standardized processes and templates ensure every deployment follows the same quality standards — regardless of who\'s pushing.' },
          { name: 'Safer Releases', desc: 'Automated testing, approval gates, and rollback capabilities mean fewer production incidents and faster recovery when issues arise.' },
          { name: 'Cleaner Environments', desc: 'Regular org audits and data hygiene practices keep your Salesforce instance lean, fast, and maintainable as you scale.' },
        ],
        columns: 3,
      },
    ],
    process: {
      kicker: 'Our Process',
      subheading: 'A structured approach that builds DevOps maturity incrementally — starting with quick wins and scaling to full governance.',
      steps: [
        { step: '01', title: 'Assess', desc: 'Audit your current Salesforce org, processes, and team workflows to identify bottlenecks and technical debt.' },
        { step: '02', title: 'Architect', desc: "Design the target state — org strategy, release pipeline architecture, and governance framework aligned to your team's maturity." },
        { step: '03', title: 'Automate', desc: 'Build CI/CD pipelines, automated testing frameworks, and deployment scripts that eliminate manual risk.' },
        { step: '04', title: 'Govern', desc: 'Implement release governance — approval workflows, testing checkpoints, and documentation standards.' },
        { step: '05', title: 'Scale', desc: 'Expand the framework as your team and org grow — adding environments, integrations, and automation as needed.' },
      ],
    },
    faqs: [
      { q: 'Do we need to replace our current Salesforce setup?', a: 'In most cases, no. We start with what you have — optimizing the existing org, fixing data issues, and layering DevOps practices on top. Full rebuilds are rare and only recommended when the technical debt is beyond practical repair.' },
      { q: 'What Salesforce tools and platforms do you work with?', a: "We work across the Salesforce ecosystem — Sales Cloud, Service Cloud, Marketing Cloud, Platform, and Experience Cloud. For DevOps, we use Salesforce DX, GitHub Actions, Copado, Gearset, and custom pipeline solutions depending on your team's needs." },
      { q: 'How long does a typical Salesforce DevOps engagement take?', a: 'Initial assessment and architecture typically take 2–4 weeks. CI/CD pipeline setup and governance implementation usually take 4–8 weeks. Ongoing optimization is continuous, but most teams see significant improvement within the first quarter.' },
    ],
    ctaHeading: 'Talk to a Salesforce Expert',
    ctaBody: "Whether you're modernizing an existing org or starting fresh, we'll help you build a Salesforce practice that scales.",
    ctaPrimary: 'Schedule a Consultation',
  },
};

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const page = servicePages[slug];

  if (!page) {
    notFound();
  }

  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      {page.sections.map((section, idx) => (
        <PageSection key={idx} variant={idx % 2 === 1 ? 'mist' : 'light'}>
          <Reveal className="mb-12 max-w-2xl">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{section.kicker}</span>
            <p className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">{section.subheading}</p>
          </Reveal>
          <div className={`grid gap-6 sm:grid-cols-2 ${section.columns === 3 ? 'lg:grid-cols-3' : section.columns === 4 ? 'lg:grid-cols-4' : ''}`}>
            {section.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-xl"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      ))}

      {page.process && (
        <PageSection>
          <Reveal className="mb-12 max-w-2xl">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{page.process.kicker}</span>
            <p className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">{page.process.subheading}</p>
          </Reveal>
          <div className={`grid gap-6 ${page.process.steps.length >= 6 ? 'md:grid-cols-3 lg:grid-cols-6' : 'md:grid-cols-5'}`}>
            {page.process.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[var(--accent)]"
                >
                  <div className="font-heading text-3xl font-extrabold text-[var(--accent)]">{step.step}</div>
                  <h3 className="mt-3 font-heading text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.results && (
        <PageSection variant="mist">
          <Reveal className="mb-12 max-w-2xl">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{page.results.kicker}</span>
            <p className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">{page.results.subheading}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {page.results.items.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm border-l-4 border-l-[var(--accent)]">
                  <div className="font-heading text-4xl font-extrabold tracking-tight text-[var(--accent)] md:text-5xl">{r.stat}</div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{r.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.tech && (
        <PageSection>
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">Technology We Work With</span>
            <p className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">We recommend and build with the tools that best fit your use case — not the ones that generate the most vendor revenue.</p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {page.tech.map((t, i) => (
              <Reveal key={t} delay={i * 0.04}>
                <span className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium shadow-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">{t}</span>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.inPractice && (
        <PageSection variant="mist">
          <Reveal className="mb-12 max-w-2xl">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">In Practice</span>
            <p className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">Two scenarios that show how AI platforms solve real business problems.</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {page.inPractice.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.caseStudy && (
        <PageSection>
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">Case Study</span>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10">
              <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{page.caseStudy.tag}</span>
              <h3 className="mt-4 font-heading text-2xl font-bold leading-snug md:text-3xl">{page.caseStudy.title}</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl bg-muted/40 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Challenge</h4>
                  <p className="mt-2 text-sm text-foreground">{page.caseStudy.challenge}</p>
                </div>
                <div className="rounded-xl bg-muted/40 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Solution</h4>
                  <p className="mt-2 text-sm text-foreground">{page.caseStudy.solution}</p>
                </div>
                <div className="rounded-xl bg-muted/40 p-4 border-l-2 border-[var(--accent)]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">Result</h4>
                  <p className="mt-2 text-sm font-bold text-foreground">{page.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </PageSection>
      )}

      {page.faqs && (
        <PageSection variant={page.caseStudy ? 'mist' : 'light'}>
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">Frequently Asked Questions</span>
            <h3 className="mt-2 font-heading text-2xl font-bold md:text-3xl">Answers to common questions</h3>
          </Reveal>
          <div className="max-w-3xl space-y-4">
            {page.faqs.map((faq) => (
              <Reveal key={faq.q}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h4 className="font-heading text-base font-bold text-foreground">{faq.q}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      <PageCtaBand
        heading={page.ctaHeading}
        body={page.ctaBody}
        primaryCta={page.ctaPrimary}
        secondaryCta="View All Services"
      />
    </PageShell>
  );
}
