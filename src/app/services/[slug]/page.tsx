'use client';

import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
} from 'lucide-react';

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
    title: 'Search & AI Visibility and Demand Generation that drives measurable growth',
    intro: 'From Technical SEO, AEO & GEO to performance paid media and conversion architecture — we build integrated campaigns that capture high-intent demand across search engines and AI models.',
    sections: [
      {
        kicker: 'What We Do',
        subheading: 'Full-spectrum digital marketing and AI discovery capabilities — each one connected, measured, and optimized for business outcomes.',
        items: [
          { name: 'Search & AI Visibility (SEO, AEO, GEO)', desc: 'Omni-search optimization across traditional Google rankings, Answer Engines (AEO), and Generative AI platforms like ChatGPT, Perplexity, and Gemini (GEO).' },
          { name: 'Generative Engine Optimization (GEO)', desc: 'Optimizing entity authority, structured schema, and digital citations so your brand is directly recommended in AI answers.' },
          { name: 'Paid Media & Performance PPC', desc: 'Google Ads, LinkedIn, Meta, and programmatic campaigns engineered for qualified pipeline — not just vanity clicks.' },
          { name: 'Content & Topic Authority', desc: 'High-leverage editorial calendars, conversion-focused landing pages, and thought leadership mapped to buyer journey stages.' },
          { name: 'Conversion Rate Optimization (CRO)', desc: 'A/B testing, UX audits, and funnel engineering that systematically convert traffic into qualified inquiries.' },
          { name: 'Multi-Touch Analytics & Attribution', desc: 'GA4 measurement, multi-touch attribution models, and BI reporting connecting marketing spend to closed revenue.' },
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
        { step: '01', title: 'Audit & AI Benchmark', desc: 'Deep analysis of your current search visibility, AI engine mentions, ad efficiency, and tech stack.' },
        { step: '02', title: 'Omni-Search Strategy', desc: 'Integrated plan connecting organic search, AI engine citations, paid acquisition, and conversion funnels.' },
        { step: '03', title: 'Campaign & Entity Build', desc: 'Full-funnel campaign architecture with creative, schema markup, and multi-touch tracking in place from day one.' },
        { step: '04', title: 'Optimization & Scaling', desc: 'Continuous A/B testing, bid management, and content updates to compound organic authority and pipeline week over week.' },
        { step: '05', title: 'Revenue Attribution', desc: 'Transparent dashboards showing pipeline impact, attribution data, and strategic recommendations.' },
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
      { q: 'What is the difference between SEO, AEO, and GEO?', a: 'SEO targets traditional search engine result pages (like Google/Bing blue links). AEO optimizes for direct answers and voice search snippets. GEO (Generative Engine Optimization) optimizes your brand authority and content so generative AI engines (ChatGPT, Perplexity, Gemini, Claude) cite and recommend your business in answers.' },
      { q: 'How long does it take to see results from digital marketing and GEO?', a: 'Paid media campaigns typically show early signals within 2–4 weeks. SEO, AEO, and GEO programs build compounding momentum over 3–6 months. We set realistic benchmarks at the start and report progress transparently throughout.' },
      { q: 'Do you work with our existing marketing tools?', a: "Yes. We integrate with your current CRM, analytics, and automation platforms. If there are gaps, we'll recommend specific tools that solve them — not blanket platform overhauls." },
      { q: 'How do you measure marketing ROI?', a: 'We implement multi-touch attribution models that connect marketing activity to pipeline and revenue. Every engagement starts with clear KPIs tied to business outcomes, and we provide regular reporting against those targets.' },
    ],
    ctaHeading: 'Get a Growth & AI Visibility Audit',
    ctaBody: "We'll analyze your current search and AI visibility performance and show you exactly where the highest-impact growth opportunities are.",
    ctaPrimary: 'Request an Audit',
  },
  'ai-platforms': {
    eyebrow: 'Service',
    title: 'AI Agents, Custom Platforms & Enterprise Automation',
    intro: 'We design and build autonomous AI agents, custom enterprise software, and intelligent workflow automation systems that solve real operational bottlenecks.',
    sections: [
      {
        kicker: 'Capabilities',
        subheading: 'End-to-end AI agent and platform development — from architecture and LLM integration to deployment and enterprise scaling.',
        items: [
          { name: 'Autonomous AI Agents', desc: 'Goal-driven AI agents that execute complex workflows, research, data synthesis, and customer interactions autonomously.' },
          { name: 'Custom Enterprise Platforms', desc: 'Purpose-built web platforms, internal portals, and standalone SaaS applications engineered around your exact business logic.' },
          { name: 'Intelligent Workflow Automation', desc: 'End-to-end automation connecting your CRM, ERP, and customer support, eliminating data re-entry and manual delays.' },
          { name: 'CRM & AI Data Integrations', desc: 'Direct bidirectional integrations with Salesforce, HubSpot, and vector databases for real-time lead scoring and intelligence.' },
          { name: 'Customer-Facing AI Experiences', desc: 'Intelligent portals, conversational assistants, and self-service interfaces that elevate client satisfaction and retention.' },
          { name: 'Real-Time BI & Dashboards', desc: 'Operational dashboards and analytics platforms that surface critical insights before you have to ask for them.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Use Cases',
        subheading: 'Practical AI and enterprise software applications that deliver measurable operational improvements across industries.',
        items: [
          { name: 'Lead Qualification & Scoring', desc: 'AI agents score and route inbound leads based on intent, budget, and engagement — so your sales team closes faster.' },
          { name: 'Knowledge Systems & RAG', desc: 'Enterprise knowledge bases and documentation platforms powered by vector search and contextual AI retrieval.' },
          { name: 'Operations Automation', desc: 'Workflow automation that unifies disparate tools, synchronizes data pipelines, and accelerates team velocity.' },
          { name: 'Education & Admissions Automation', desc: 'Student onboarding, document verification, and administrative workflows purpose-built for education institutions.' },
          { name: 'Enterprise Client Portals', desc: 'Secure, modern portals giving clients self-service access to data, reporting, and services — reducing support tickets.' },
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
  'seo': {
    eyebrow: 'Service',
    title: 'Search & AI Visibility (SEO, AEO & GEO)',
    intro: 'Total discovery optimization engineered for Google organic search, Answer Engines (AEO), and Generative AI engines like ChatGPT, Perplexity, and Gemini (GEO).',
    sections: [
      {
        kicker: 'Core Capabilities',
        subheading: 'Omni-search optimization that captures high-intent demand across both traditional search engines and generative AI chatbots.',
        items: [
          { name: 'Generative Engine Optimization (GEO)', desc: 'Optimizing entity authority, structured data models, and citations so your brand is surfaced and recommended in AI model answers.' },
          { name: 'Answer Engine Optimization (AEO)', desc: 'Engineering content for featured snippets, voice search queries, and direct answer carousels.' },
          { name: 'Technical SEO Architecture', desc: 'Core Web Vitals optimization, site speed acceleration, indexation pipelines, and crawl budget efficiency.' },
          { name: 'Entity & Knowledge Graph Schema', desc: 'Comprehensive JSON-LD semantic schema markup that builds unambiguous knowledge graph relationships.' },
          { name: 'Topic Cluster Strategy', desc: 'In-depth editorial content clusters mapped to commercial intent that compound organic domain authority.' },
          { name: 'Authority & Strategic Link Building', desc: 'High-tier digital PR and contextual backlink acquisition that builds lasting algorithmic trust.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Who It Benefits',
        subheading: 'Engineered for brands that want to dominate organic search and lead the transition into AI-driven discovery.',
        items: [
          { name: 'B2B SaaS & Tech', desc: 'Capture high-intent buyers researching solutions on Google, ChatGPT, and Perplexity.' },
          { name: 'Higher-Ed & EdTech', desc: 'Ensure your degree programs and courses are prominently recommended to prospective students.' },
          { name: 'Healthcare & Enterprise', desc: 'Build rock-solid trust, clinical entity accuracy, and regional visibility.' },
          { name: 'High-Growth Brands', desc: 'Scale organic acquisition channels with compounding ROI and zero ad fatigue.' },
        ],
        columns: 4,
      },
    ],
    process: {
      kicker: 'Our AI & SEO Roadmap',
      subheading: 'A 5-phase framework to achieve market-leading organic and AI visibility.',
      steps: [
        { step: '01', title: 'AI & SEO Audit', desc: 'Deep technical crawl, schema validation, backlink review, and AI engine citation benchmarking.' },
        { step: '02', title: 'Entity Architecture', desc: 'Design topic clusters, internal linking graphs, and semantic entity schema.' },
        { step: '03', title: 'Content & GEO Build', desc: 'Create authoritative, data-dense content optimized for both search algorithms and LLM context windows.' },
        { step: '04', title: 'Authority Amplification', desc: 'Earn high-authority media mentions and niche-relevant citations that build domain trust.' },
        { step: '05', title: 'Visibility Tracking', desc: 'Monitor Google rankings, AI overview citations, and organic revenue attribution.' },
      ],
    },
    results: {
      kicker: 'Proven Outcomes',
      subheading: 'Quantifiable growth across our client search campaigns.',
      items: [
        { stat: '340%', label: 'organic pipeline growth' },
        { stat: '#1', label: 'rankings on commercial terms' },
        { stat: '85%+', label: 'AI overview citation rate' },
      ],
    },
    faqs: [
      { q: 'What is Generative Engine Optimization (GEO)?', a: 'GEO is the practice of optimizing digital assets, entity relationships, and brand citations so that generative AI platforms (such as ChatGPT, Perplexity, Google Gemini, and Claude) cite, recommend, and link to your business when users ask commercial queries.' },
      { q: 'How does AEO differ from traditional SEO?', a: 'Traditional SEO aims to rank blue links on search result pages. Answer Engine Optimization (AEO) specifically structures content to be selected as the direct answer in Google featured snippets, AI overviews, and voice assistants (Siri, Alexa).' },
      { q: 'How soon can we expect organic and AI search results?', a: 'Technical and schema optimizations often show indexing improvements within 3–4 weeks. Topic cluster momentum and compounding AI citations build strong authority over 3–6 months.' },
    ],
    ctaHeading: 'Request a Free AI & Search Visibility Audit',
    ctaBody: "We'll benchmark your website across Google, ChatGPT, and Perplexity and deliver a prioritized growth roadmap.",
    ctaPrimary: 'Get Search & AI Audit',
  },
  'web-design': {
    eyebrow: 'Service',
    title: 'High-Performance Web Design & Enterprise Development',
    intro: 'Speed-engineered, conversion-driven websites and custom web applications built on Next.js, modern design systems, and headless architectures.',
    sections: [
      {
        kicker: 'Capabilities',
        subheading: 'Full-stack design and development that combines striking aesthetics with lightning-fast performance and clean code.',
        items: [
          { name: 'Next.js & React Enterprise Dev', desc: 'Modern App Router architecture, Server Components, and sub-second page transitions.' },
          { name: 'Design Systems & UI Prototyping', desc: 'Accessible, scalable component libraries with polished motion physics and dark/light themes.' },
          { name: 'Headless CMS Architecture', desc: 'Seamless integration with Sanity, Contentful, Strapi, or WordPress for rapid editorial workflows.' },
          { name: 'Core Web Vitals Optimization', desc: 'Sub-second LCP, zero layout shifts (CLS < 0.05), and 95+ Google PageSpeed performance scores.' },
          { name: 'Conversion Rate Architecture', desc: 'Friction-free UX funnels, dynamic inquiry calculators, and multi-step lead capture forms.' },
          { name: 'Custom Portals & Integrations', desc: 'Secure customer dashboards, API gateways, payment integrations, and CRM sync.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Who We Build For',
        subheading: 'Organizations ready to replace clunky legacy websites with fast, modern digital flagships.',
        items: [
          { name: 'B2B SaaS', desc: 'Product marketing sites that convert trials and enterprise demo bookings.' },
          { name: 'Universities & Schools', desc: 'High-converting enrollment portals and academic program showcases.' },
          { name: 'Enterprise Brands', desc: 'High-security, multi-region web architectures with enterprise scalability.' },
          { name: 'Growth-Stage Startups', desc: 'Fast turnaround MVP development and high-converting landing page suites.' },
        ],
        columns: 4,
      },
    ],
    process: {
      kicker: 'Our Build Process',
      subheading: 'An agile, iterative delivery methodology from discovery to launch.',
      steps: [
        { step: '01', title: 'Architecture & UX', desc: 'Information architecture, user flows, and wireframes designed around your conversion goals.' },
        { step: '02', title: 'Visual Design', desc: 'High-fidelity design system creation with bespoke typography, colors, and motion prototypes.' },
        { step: '03', title: 'Full-Stack Build', desc: 'Next.js and TypeScript development with clean modular components and CMS integration.' },
        { step: '04', title: 'QA & Optimization', desc: 'Rigorous cross-browser testing, accessibility (WCAG) checks, and Core Web Vitals tuning.' },
        { step: '05', title: 'Launch & Handoff', desc: 'Zero-downtime DNS rollout, team CMS training, and ongoing post-launch support.' },
      ],
    },
    results: {
      kicker: 'Performance Metrics',
      subheading: 'Proven speed and conversion benchmarks across our web builds.',
      items: [
        { stat: '< 0.8s', label: 'average page load time' },
        { stat: '98/100', label: 'Google PageSpeed score' },
        { stat: '+140%', label: 'average conversion rate lift' },
      ],
    },
    faqs: [
      { q: 'Why do you recommend Next.js for web development?', a: 'Next.js provides the best blend of server-side rendering, lightning-fast static generation, SEO optimization, and rich interactive experiences — ensuring your site is blazing fast and easily discoverable by search engines.' },
      { q: 'Will our marketing team be able to edit content without developers?', a: 'Yes. We pair every build with a modern visual Headless CMS (like Sanity or Contentful), allowing your marketing team to edit text, publish blog posts, and build new landing pages effortlessly.' },
    ],
    ctaHeading: 'Build a High-Performance Website',
    ctaBody: "Tell us about your upcoming web project, and let's craft a digital experience that converts.",
    ctaPrimary: 'Start Web Project',
  },
  'ppc': {
    eyebrow: 'Service',
    title: 'Paid Media & Performance PPC Engineered for Pipeline',
    intro: 'Precision paid acquisition across Google Ads, LinkedIn, Meta, and programmatic networks — engineered for qualified revenue pipeline, not vanity clicks.',
    sections: [
      {
        kicker: 'Channels & Capabilities',
        subheading: 'Targeted media buying with deep attribution and continuous creative experimentation.',
        items: [
          { name: 'Google Search & Performance Max', desc: 'High-intent commercial search capture with strict negative keyword hygiene and value bidding.' },
          { name: 'LinkedIn Demand Generation', desc: 'Account-Based Marketing (ABM), seniority-level targeting, and sponsored content funnels.' },
          { name: 'Meta & Programmatic Retargeting', desc: 'Multi-touch dynamic remarketing sequences that convert warm visitors into closed deals.' },
          { name: 'Landing Page Experimentation', desc: 'Dedicated campaign landing pages with continuous A/B split testing to lower CAC.' },
          { name: 'Attribution & ROAS Modeling', desc: 'First-party data tracking and CRM revenue attribution to prove true pipeline ROI.' },
          { name: 'Ad Creative & Copywriting', desc: 'High-converting ad copy, visual assets, and video snippets designed for maximum engagement.' },
        ],
        columns: 3,
      },
    ],
    process: {
      kicker: 'How We Manage PPC',
      subheading: 'A disciplined, data-driven optimization cycle that protects your budget.',
      steps: [
        { step: '01', title: 'Audience & Keyword Audit', desc: 'Analyze historical ad data, competitor strategy, and high-value search terms.' },
        { step: '02', title: 'Campaign Architecture', desc: 'Structure targeted ad groups, bidding strategies, and custom landing pages.' },
        { step: '03', title: 'Tracking Setup', desc: 'Implement server-side conversion tracking and CRM lead attribution.' },
        { step: '04', title: 'Launch & Optimize', desc: 'Continuous bid management, negative term scrubbing, and creative refresh cycles.' },
        { step: '05', title: 'Scale', desc: 'Allocate ad budget to winning ad sets and channels to maximize qualified pipeline.' },
      ],
    },
    results: {
      kicker: 'PPC Impact',
      subheading: 'Average advertising performance across our portfolio.',
      items: [
        { stat: '3.8x', label: 'average pipeline ROAS' },
        { stat: '-42%', label: 'reduction in cost per lead' },
        { stat: '4.1x', label: 'pipeline acceleration' },
      ],
    },
    faqs: [
      { q: 'What paid advertising channels do you specialize in?', a: 'We specialize in Google Search, Performance Max, LinkedIn Ads (ABM/B2B), Meta Ads (Facebook/Instagram), and programmatic display networks.' },
      { q: 'How do you ensure ad spend leads to actual revenue?', a: 'We integrate ad platforms directly with your CRM (Salesforce/HubSpot). We optimize campaigns based on pipeline quality and closed-won revenue rather than just raw form submissions or clicks.' },
    ],
    ctaHeading: 'Scale Your Paid Acquisition',
    ctaBody: "Let's review your existing ad accounts and find where you can cut wasted spend and accelerate pipeline.",
    ctaPrimary: 'Request PPC Audit',
  },
  'social-media': {
    eyebrow: 'Service',
    title: 'Social Media Marketing & Brand Authority',
    intro: 'Always-on social programs, executive thought leadership, and campaign amplification that build deep industry trust and market authority.',
    sections: [
      {
        kicker: 'Capabilities',
        subheading: 'Turn social channels into authentic growth and talent acquisition engines.',
        items: [
          { name: 'Executive & Founder Branding', desc: 'Ghostwriting and thought leadership strategy on LinkedIn to position leadership as industry authorities.' },
          { name: 'Content Strategy & Calendars', desc: 'Consistent editorial calendars with data infographics, carousels, and case study breakdowns.' },
          { name: 'Paid Social Amplification', desc: 'Boosting high-performing organic content directly to key decision-makers and accounts.' },
          { name: 'Community Management', desc: 'Active conversation monitoring, audience engagement, and relationship building.' },
        ],
        columns: 2,
      },
    ],
    results: {
      kicker: 'Results',
      subheading: 'Average organic social expansion for our clients.',
      items: [
        { stat: '450%+', label: 'engagement rate increase' },
        { stat: '12x', label: 'organic reach expansion' },
        { stat: '32%', label: 'inbound referral growth' },
      ],
    },
    ctaHeading: 'Build Your Brand Authority',
    ctaBody: "Let's craft a social strategy that turns followers into high-value commercial relationships.",
    ctaPrimary: 'Plan Social Strategy',
  },
  'analytics': {
    eyebrow: 'Service',
    title: 'Analytics, Data Architecture & CRO',
    intro: 'Turn data into decisions and traffic into revenue — comprehensive GA4 tracking, multi-touch attribution, and conversion rate optimization.',
    sections: [
      {
        kicker: 'Capabilities',
        subheading: 'End-to-end data infrastructure and continuous conversion experimentation.',
        items: [
          { name: 'GA4 & Server-Side Tagging', desc: 'Privacy-first tracking infrastructure and event taxonomies with zero data loss.' },
          { name: 'Multi-Touch Attribution', desc: 'Connecting organic sessions, ad clicks, and email touches directly to closed revenue.' },
          { name: 'Continuous CRO & A/B Testing', desc: 'Form optimization, friction removal, and value-proposition experimentation.' },
          { name: 'Executive BI Dashboards', desc: 'Real-time Looker Studio, Tableau, or custom dashboards showing pipeline velocity and CAC.' },
        ],
        columns: 2,
      },
    ],
    results: {
      kicker: 'Analytics ROI',
      subheading: 'Measurable conversion improvements.',
      items: [
        { stat: '+64%', label: 'average funnel conversion lift' },
        { stat: '100%', label: 'revenue attribution visibility' },
        { stat: '2.4x', label: 'ROI on CRO experimentation' },
      ],
    },
    ctaHeading: 'Turn Your Data Into Revenue',
    ctaBody: "Schedule an analytics audit to uncover hidden drop-offs and attribution gaps in your funnel.",
    ctaPrimary: 'Request Analytics Audit',
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
      {/* Breadcrumb Bar */}
      <div className="border-b border-border/80 bg-muted/40 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs text-muted-foreground lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/services" className="transition-colors hover:text-foreground">Services</Link>
            <span>/</span>
            <span className="font-semibold text-[var(--accent)]">{page.title.split(' ')[0]} {page.title.split(' ')[1] || ''}</span>
          </div>
          <Link
            href="/services"
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-[var(--accent)] hover:underline"
          >
            &larr; View all practices
          </Link>
        </div>
      </div>

      {page.sections.map((section, idx) => (
        <PageSection key={idx} variant={idx % 2 === 1 ? 'mist' : 'light'}>
          <Reveal className="mb-12 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3 py-1 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              <Sparkles className="h-3.5 w-3.5" />
              {section.kicker}
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">{section.subheading}</h2>
          </Reveal>
          <div className={`grid gap-6 sm:grid-cols-2 ${section.columns === 3 ? 'lg:grid-cols-3' : section.columns === 4 ? 'lg:grid-cols-4' : ''}`}>
            {section.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-xl"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-[var(--accent)]">{item.name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      ))}

      {page.process && (
        <PageSection>
          <Reveal className="mb-12 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3 py-1 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              <Zap className="h-3.5 w-3.5" />
              {page.process.kicker}
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">{page.process.subheading}</h2>
          </Reveal>
          <div className={`grid gap-6 ${page.process.steps.length >= 6 ? 'md:grid-cols-3 lg:grid-cols-6' : 'md:grid-cols-5'}`}>
            {page.process.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-lg"
                >
                  <div className="font-heading text-3xl font-extrabold text-[var(--accent)]/60 transition-colors group-hover:text-[var(--accent)]">{step.step}</div>
                  <h3 className="mt-3 font-heading text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.results && (
        <PageSection variant="mist">
          <Reveal className="mb-12 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3 py-1 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              <TrendingUp className="h-3.5 w-3.5" />
              {page.results.kicker}
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">{page.results.subheading}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {page.results.items.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm border-l-4 border-l-[var(--accent)]">
                  <div className="font-heading text-4xl font-extrabold tracking-tight text-[var(--accent)] md:text-5xl">{r.stat}</div>
                  <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">{r.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.tech && (
        <PageSection>
          <Reveal className="mb-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3 py-1 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              <Cpu className="h-3.5 w-3.5" />
              Technology Stack
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">Tools & Frameworks We Architect With</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {page.tech.map((t, i) => (
              <Reveal key={t} delay={i * 0.03}>
                <span className="rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-md">{t}</span>
              </Reveal>
            ))}
          </div>
        </PageSection>
      )}

      {page.inPractice && (
        <PageSection variant="mist">
          <Reveal className="mb-12 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3 py-1 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              <Layers className="h-3.5 w-3.5" />
              In Practice
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl text-foreground">Real-World Operational Impact</h2>
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
          <Reveal className="mb-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3 py-1 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Case Study
            </span>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10">
              <span className="rounded-full bg-[var(--accent)]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">{page.caseStudy.tag}</span>
              <h3 className="mt-4 font-heading text-2xl font-bold leading-snug md:text-3xl">{page.caseStudy.title}</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl bg-muted/50 p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Challenge</h4>
                  <p className="mt-2 text-sm text-foreground leading-relaxed">{page.caseStudy.challenge}</p>
                </div>
                <div className="rounded-2xl bg-muted/50 p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Solution</h4>
                  <p className="mt-2 text-sm text-foreground leading-relaxed">{page.caseStudy.solution}</p>
                </div>
                <div className="rounded-2xl bg-muted/50 p-5 border-l-4 border-[var(--accent)]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">Result</h4>
                  <p className="mt-2 text-base font-extrabold text-foreground leading-relaxed">{page.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </PageSection>
      )}

      {page.faqs && (
        <PageSection variant={page.caseStudy ? 'mist' : 'light'}>
          <Reveal className="mb-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3 py-1 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              <Sparkles className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold md:text-4xl text-foreground">Common Strategic Inquiries</h3>
          </Reveal>
          <div className="max-w-4xl space-y-4">
            {page.faqs.map((faq) => (
              <Reveal key={faq.q}>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[var(--accent)]/40 hover:shadow-md">
                  <h4 className="font-heading text-base font-bold text-foreground sm:text-lg">{faq.q}</h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
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
        secondaryHref="/services"
      />
    </PageShell>
  );
}
