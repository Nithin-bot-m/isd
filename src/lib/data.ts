// Real content sourced from https://isd-info-solutions.web.app/

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroIntro: string;
  capabilities: string[];
  valueProps: string;
  ctaText: string;
  learnMoreHref: string;
}

export const services: Service[] = [
  {
    id: 'digital-growth-engineering',
    slug: 'digital-growth-engineering',
    title: 'Digital Growth Engineering™',
    shortDescription:
      'The systematic engineering of digital presence, search & AI discoverability (SEO, AEO, GEO), paid acquisition, conversion architecture, and revenue intelligence.',
    heroIntro:
      'We engineer digital growth — from digital presence to measurable revenue. One connected growth ecosystem spanning search, AI visibility, performance media, CRO, and lifecycle automation.',
    capabilities: [
      'Growth Intelligence™ (Market & Search Demand Analysis)',
      'Digital Presence Architecture™ (Websites, Knowledge Panels, Directories)',
      'Search & AI Visibility™ (SEO, AEO, GEO, Entity Optimization)',
      'Paid Growth Engineering™ (Google AI Max, Meta Advantage+, Programmatic)',
      'Content Intelligence & Creation™ (Topic Clusters, AI-Ready Knowledge Assets)',
      'Conversion Growth Engineering™ (CRO, Funnel Architecture, A/B Testing)',
      'Revenue Intelligence™ (GA4, Server-Side Tracking, Multi-Touch Attribution)',
      'Lifecycle Growth Engineering™ (CRM, Automated WhatsApp/Email Nurturing)',
    ],
    valueProps:
      'omni-search & AI discoverability, qualified high-intent pipeline, frictionless conversion, multi-touch revenue attribution',
    ctaText: 'Get a Growth Audit',
    learnMoreHref: '/services/digital-growth-engineering',
  },
  {
    id: 'enterprise-solutions',
    slug: 'enterprise-solutions',
    title: 'Enterprise Solution Engineering™',
    shortDescription:
      'Intelligent digital systems, custom SaaS applications, autonomous AI agents, workflow automation, and cross-channel Connected Engagement™.',
    heroIntro:
      'We engineer intelligent digital systems that transform complex business processes into scalable, measurable, and automated operations.',
    capabilities: [
      'Digital Experience Engineering™ (Portals, Web Apps, Design Systems)',
      'Application Engineering™ (Custom SaaS Platforms, Internal Tools)',
      'Customer Intelligence & CRM Engineering™ (Salesforce, HubSpot, Custom CRM)',
      'Data & Intelligence Engineering™ (Executive Dashboards, Real-Time BI)',
      'AI Systems Engineering™ (Autonomous AI Agents, Enterprise Copilots, RAG)',
      'AI Workflow Engineering™ (Multi-Step Intelligent Process Automation)',
      'Integration & API Engineering™ (CRM, ERP, Payment, Messaging Gateways)',
      'Connected Engagement™ (WhatsApp, Email, RCS, SMS Multi-Channel Layer)',
    ],
    valueProps:
      'unified operational workflows, autonomous system leverage, decision intelligence, connected communication infrastructure',
    ctaText: 'Discuss an Enterprise Solution',
    learnMoreHref: '/services/enterprise-solutions',
  },
  {
    id: 'education-ecosystem-engineering',
    slug: 'education-ecosystem-engineering',
    title: 'Education Ecosystem Engineering™',
    shortDescription:
      'Strategic institutional transformation, accreditation advisory (NAAC, NBA, NIRF), admissions funnel engineering, and industry-academia integration.',
    heroIntro:
      'Navigate, transform, and grow across the education ecosystem — from institutional strategy and accreditation to student careers, industry partnerships, and enrollment growth.',
    capabilities: [
      'Institutional Excellence Engineering™ (Strategic Planning & Governance)',
      'Regulatory, Accreditation & Ranking Advisory™ (AICTE, UGC, NAAC, NBA, NIRF)',
      'Academic Ecosystem Engineering™ (Outcome-Based Education & BoS Support)',
      'Industry-Academia Integration™ (Corporate MoUs, Labs & Live Projects)',
      'Talent-to-Career Engineering™ (Placement Cell Transformation & Employability)',
      'Enrolment Growth Engineering™ (Admissions Funnel & CRM Nurture Journeys)',
      'Education Growth Marketing™ (Institutional Branding & Multi-Channel Campaigns)',
      'Education Mobility Advisory™ (Domestic & International Admissions Advisory)',
    ],
    valueProps:
      'trust-first communication, long-cycle student nurturing, statutory compliance readiness, campus placement transformation',
    ctaText: 'Plan an Ecosystem Strategy',
    learnMoreHref: '/services/education-ecosystem-engineering',
  },
  {
    id: 'salesforce-devops',
    slug: 'salesforce-devops',
    title: 'Salesforce & Copado DevOps',
    shortDescription:
      'Salesforce implementation, integration, Copado CI/CD pipelines, and CRM optimization that align sales, marketing, and service operations.',
    heroIntro:
      'We support enterprise Salesforce teams with delivery systems, Copado/Salesforce DX automation, environment strategy, and release governance.',
    capabilities: [
      'Salesforce implementation & architecture',
      'Org optimization & technical debt health checks',
      'CI/CD release management (Salesforce DX, Copado, Gearset)',
      'Automated deployment pipelines & rollback gates',
      'Sandbox & scratch org environment strategy',
      'API integrations and enterprise data governance',
    ],
    valueProps:
      'safer releases, zero downtime, stronger visibility, scalable enterprise delivery practices',
    ctaText: 'Talk to a Salesforce Expert',
    learnMoreHref: '/services/salesforce-devops',
  },
];

// Additional services from the footer (sub-services)
export interface SubService {
  id: string;
  slug: string;
  title: string;
  parent: string;
  description: string;
  capabilities: string[];
}

export const subServices: SubService[] = [
  {
    id: 'web-design',
    slug: 'web-design',
    title: 'Web Design & Enterprise Development',
    parent: 'Digital Marketing & Demand Generation',
    description:
      'High-performance websites and custom web applications engineered for conversion, speed, and search visibility — built on modern frameworks with clean architecture.',
    capabilities: [
      'Next.js & React enterprise development',
      'UX/UI design systems & prototyping',
      'Headless CMS & API architecture',
      'Core Web Vitals optimization',
      'Conversion-focused landing pages',
      'Design tokens & component libraries',
    ],
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'Search & AI Visibility (SEO, AEO & GEO)',
    parent: 'Digital Marketing & Demand Generation',
    description:
      'Omni-search discovery: Technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) engineered for Google, ChatGPT, Perplexity, Gemini, and Claude citations.',
    capabilities: [
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'Technical SEO audits & architecture',
      'AI Overviews & citation strategy',
      'Entity & knowledge graph schema',
      'Authority & strategic link building',
    ],
  },
  {
    id: 'ppc',
    slug: 'ppc',
    title: 'Paid Media & Performance PPC',
    parent: 'Digital Marketing & Demand Generation',
    description:
      'Full-funnel paid media across Google, LinkedIn, Meta, and programmatic — engineered for qualified pipeline, not vanity clicks.',
    capabilities: [
      'Google & Microsoft Ads',
      'LinkedIn demand campaigns',
      'Meta & programmatic networks',
      'Audience targeting & retargeting',
      'Landing page optimization',
      'Attribution & ROI modeling',
    ],
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media & Brand Authority',
    parent: 'Digital Marketing & Demand Generation',
    description:
      'Always-on social programs that build brand authority, support talent recruiting, and amplify campaign moments across channels.',
    capabilities: [
      'Channel strategy & positioning',
      'Content calendars',
      'Community management',
      'Executive social programs',
      'Paid social amplification',
      'Performance reporting',
    ],
  },
  {
    id: 'analytics',
    slug: 'analytics',
    title: 'Analytics & CRO',
    parent: 'Digital Marketing & Demand Generation',
    description:
      'Measurement architecture, dashboards, and conversion rate optimization that turn data into decisions — and traffic into revenue.',
    capabilities: [
      'GA4 & tag manager setup',
      'Multi-touch attribution',
      'Dashboard & reporting design',
      'Funnel analysis',
      'A/B testing programs',
      'CRO experimentation',
    ],
  },
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  externalUrl: string;
  internalUrl: string;
  features: string[];
  stats: { value: string; label: string }[];
  tags: string[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: 'nfx3',
    slug: 'nfx3',
    name: 'NFX³ (NFX3)',
    tagline: 'Decode The Market — Real-Time Forex & Gold Bullion Intelligence',
    category: 'Fintech & Market Telemetry',
    shortDescription:
      'An institutional-grade, real-time market intelligence platform delivering sub-second spot gold (XAU/USD) telemetry, ForexFactory calendar synchronization, CFTC COT flows, and central bank macro radar.',
    longDescription:
      'NFX3 is a proprietary financial intelligence platform engineered and operated by ISD Info Solutions. Built for forex and gold bullion traders, analysts, and institutional macro researchers, NFX3 aggregates verified tier-1 macroeconomic data—including central bank policies (Federal Reserve, ECB, BoE, BoJ), ForexFactory high-impact releases, CFTC Commitments of Traders (COT) institutional positioning, and live interbank quotes—delivered in a streamlined, zero-noise terminal experience.',
    externalUrl: 'https://www.nfx3.com',
    internalUrl: '/products/nfx3',
    badge: 'Proprietary Flagship Product',
    features: [
      'Live 1-Minute Ambient Candlestick Telemetry (XAU/USD Gold)',
      'Sub-Second Interbank Spot Quotes & Tight $0.60 USD Spread via OANDA',
      'ForexFactory High-Impact Economic Calendar with Live Countdowns',
      'CFTC Commitments of Traders (COT) Speculative Institutional Flows',
      'Central Bank Interest Rate Radar & Macro Policy Tracking',
      '24/5 Streaming Foreign Exchange Ticker Tape & Session Clocks',
      '100% Educational Macro Research — Strictly 0 Buy/Sell Signals',
    ],
    stats: [
      { value: '24+', label: 'Interbank FX Pairs' },
      { value: '< 250ms', label: 'Streaming Latency' },
      { value: '100%', label: 'ForexFactory Feed Ingestion' },
      { value: '0', label: 'Noise / Buy/Sell Signals' },
    ],
    tags: ['Fintech', 'Real-Time Data', 'Next.js', 'Market Intelligence', 'WebSockets'],
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  tags: string[];
  challenge: string;
  solution: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'nfx3-fintech-platform',
    title: 'NFX³ — Real-Time Institutional Forex & Bullion Intelligence Platform',
    tags: ['Fintech & Platforms', 'AI Platforms', 'Enterprise Systems'],
    challenge:
      'Traders and macro analysts faced fragmented, delayed data streams across central bank policies, high-impact economic releases, and spot bullion feeds—cluttered with speculative noise and unreliable signals.',
    solution:
      'ISD engineered NFX³: a proprietary zero-noise market terminal aggregating sub-second OANDA interbank telemetry, automated ForexFactory calendar ingestion, CFTC COT speculative flow tracking, and central bank rate monitors.',
    result:
      '24/5 sub-second streaming interbank telemetry, 100% automated macroeconomic ingestion, and a unified terminal experience serving global FX & bullion participants.',
  },
  {
    id: 'university-enrollment',
    title: 'Scaling Enrollment for a Regional University',
    tags: ['Education', 'Digital Marketing', 'Education Marketing'],
    challenge:
      'Facing declining enrollment and fragmented marketing efforts, the university needed a unified strategy to reach prospective students across digital channels.',
    solution:
      'Built an integrated enrollment marketing program with paid media, SEO, CRM nurture journeys, and a conversion-optimized website — all aligned to the prospective student journey.',
    result:
      '42% increase in qualified inquiries and 28% improvement in enrollment conversion within two semesters.',
  },
  {
    id: 'b2b-saas-sales-ops',
    title: 'AI-Powered Sales Ops for a B2B SaaS Company',
    tags: ['B2B SaaS', 'AI Platforms', 'Salesforce DevOps'],
    challenge:
      'The sales team spent more time on administrative tasks than selling, with no automation in place to support lead scoring or follow-up workflows.',
    solution:
      'Deployed an AI-powered lead scoring and routing system on Salesforce, with automated nurture sequences and a unified dashboard for sales ops.',
    result:
      '3.2x improvement in pipeline velocity and 45% reduction in average deal cycle time.',
  },
  {
    id: 'healthcare-crm',
    title: 'CRM Modernization for a Healthcare Network',
    tags: ['Healthcare', 'Salesforce DevOps', 'AI Platforms'],
    challenge:
      'Outdated CRM systems created data silos across locations, making it impossible to track patient journeys or measure marketing ROI.',
    solution:
      'Modernized the CRM on a unified Salesforce Health Cloud instance with CI/CD pipelines, integrated data sources, and reporting dashboards.',
    result:
      '94% data accuracy improvement and a 35% reduction in patient intake processing time.',
  },
];

export interface Industry {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  services: string[];
  outcomes: string[];
}

export const industries: Industry[] = [
  {
    id: 'education',
    title: 'Education & EdTech',
    description:
      'Schools, universities, and education technology companies navigating digital transformation and enrollment growth.',
    longDescription:
      'We partner with K-12 districts, higher education institutions, and EdTech platforms to build trust-led enrollment journeys, modernize digital infrastructure, and connect marketing with admissions operations. From inquiry to enrollment, our work is grounded in the long-cycle, high-consideration nature of education decisions.',
    services: [
      'Enrollment marketing',
      'Admissions funnel strategy',
      'Education content strategy',
      'CRM nurture journeys',
      'Website design & messaging',
      'Audience segmentation',
    ],
    outcomes: [
      '42% increase in qualified inquiries',
      '28% improvement in enrollment conversion',
      'Unified applicant journey across channels',
    ],
  },
  {
    id: 'b2b-saas',
    title: 'B2B & SaaS',
    description:
      'Software and technology companies scaling demand generation, product-led growth, and customer acquisition.',
    longDescription:
      'We help B2B SaaS companies build demand engines that connect marketing, sales, and product — from awareness through expansion. Our work spans account-based marketing, sales operations automation, and the technical infrastructure that supports a high-velocity revenue engine.',
    services: [
      'Demand generation',
      'Account-based marketing',
      'Salesforce DevOps',
      'AI-powered lead scoring',
      'Pipeline analytics',
      'Product-led growth strategy',
    ],
    outcomes: [
      '3.2x improvement in pipeline velocity',
      '45% reduction in deal cycle time',
      'Cleaner handoffs between marketing & sales',
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Technology',
    description:
      'Large organizations modernizing marketing operations, CRM infrastructure, and data-driven decision making.',
    longDescription:
      'We support enterprise teams with the operational systems, governance, and cross-functional alignment needed to modernize marketing and sales technology at scale. Our engagements balance velocity with compliance — accelerating delivery without compromising control.',
    services: [
      'CRM modernization',
      'Marketing operations',
      'Data governance',
      'CI/CD pipeline setup',
      'Cross-functional reporting',
      'Change management',
    ],
    outcomes: [
      'Stronger cross-functional visibility',
      'Safer, more predictable releases',
      'Compounding impact across initiatives',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    description:
      'Healthcare providers and life sciences organizations managing complex patient journeys and compliance requirements.',
    longDescription:
      'We help healthcare networks and life sciences organizations modernize CRM, integrate data across locations, and build patient journeys that respect compliance constraints while improving access, intake, and engagement.',
    services: [
      'Salesforce Health Cloud',
      'Patient journey mapping',
      'CRM modernization',
      'Compliance-aware data integration',
      'Marketing ROI measurement',
      'Operational reporting',
    ],
    outcomes: [
      '94% data accuracy improvement',
      '35% reduction in intake processing time',
      'Unified patient view across locations',
    ],
  },
];

export interface Insight {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export const insights: Insight[] = [
  {
    id: 'education-funnels',
    title: 'Why Most Education Marketers Get Enrollment Funnels Wrong',
    category: 'Education Marketing',
    date: '2025-12-10',
    readTime: '6 min read',
    excerpt:
      'The traditional enrollment funnel is broken. Here\'s how modern higher-ed institutions are restructuring their approach to student acquisition.',
  },
  {
    id: 'practical-ai-sales',
    title: 'Practical AI for Sales Teams: Beyond the Hype',
    category: 'AI & Automation',
    date: '2025-11-22',
    readTime: '8 min read',
    excerpt:
      'Most AI tools promise transformation but deliver complexity. Learn how to identify and deploy AI solutions that actually move your sales metrics.',
  },
  {
    id: 'salesforce-devops-playbook',
    title: 'The Salesforce DevOps Playbook for Growing Companies',
    category: 'CRM & DevOps',
    date: '2025-10-15',
    readTime: '10 min read',
    excerpt:
      'From sandbox management to CI/CD pipelines, here\'s the operational framework every scaling Salesforce team needs.',
  },
];

export const faqs = [
  {
    q: 'What is ISD Info Solutions?',
    a: 'ISD Info Solutions (accessible at isdinfosolutions.com) is an enterprise digital growth engineering and technology agency. We partner with ambitious organizations to build high-performance web platforms, engineer omni-channel search & AI discoverability (SEO, AEO, GEO), build custom AI platforms, and manage cloud & CRM architectures that drive measurable, compounding business growth.',
  },
  {
    q: 'What services does ISD Info Solutions provide?',
    a: 'ISD Info Solutions delivers three flagship practice areas: (1) Digital Growth Engineering™ (omni-search visibility, SEO, GEO, paid media, CRO, and revenue intelligence), (2) Enterprise Solution Engineering™ (custom SaaS platforms, autonomous AI agents, workflow automation, and Salesforce & Copado DevOps), and (3) Education Ecosystem Engineering™ (institutional accreditation advisory, admissions funnel engineering, and campus placements).',
  },
  {
    q: 'Where is ISD Info Solutions based and how can I contact the team?',
    a: 'ISD Info Solutions operates globally with primary operations in India. You can connect directly with executive leadership by emailing info@isdinfosolutions.com or calling / WhatsApp messaging +91 63611 20944. Consultations can also be booked through our website contact form.',
  },
  {
    q: 'What types of organizations does ISD work with?',
    a: 'We partner with education institutions, B2B SaaS companies, enterprise technology firms, and healthcare organizations. Our approach is tailored to the unique growth challenges of each vertical.',
  },
  {
    q: 'Do you work with startups or only established organizations?',
    a: 'We work with growth-stage companies and established organizations that have real complexity — multiple channels, systems, or teams that need integration. Whether you\'re scaling from Series B or optimizing a multi-billion-dollar operation, our model adapts.',
  },
  {
    q: 'How is ISD different from a traditional agency?',
    a: 'Traditional agencies often operate in silos — SEO over here, CRM over there. ISD is built on integration. Every service connects to the next, which means less fragmentation, fewer vendors, and more compounding impact from every initiative.',
  },
  {
    q: 'What does your Salesforce DevOps practice include?',
    a: 'Our Salesforce practice covers implementation, custom development, CI/CD pipeline setup, sandbox management, data migration, and ongoing optimization. We treat Salesforce as a product, not a one-time project.',
  },
  {
    q: 'Can you work with our existing tech stack?',
    a: 'Absolutely. Most of our clients come to us with existing tools and systems. We integrate with what you have, optimize where needed, and only recommend new technology when it creates clear, measurable value.',
  },
  {
    q: 'How do you measure success?',
    a: 'Every engagement starts with clear KPIs tied to business outcomes — pipeline growth, enrollment targets, operational efficiency, or revenue impact. We provide regular reporting and strategic reviews to keep everything on track.',
  },
  {
    q: 'Does ISD Info Solutions build proprietary products or only client services?',
    a: 'Beyond client engagements, ISD conceives, engineers, and operates proprietary high-performance software platforms. Our flagship fintech product is NFX³ (accessible at nfx3.com), an institutional-grade, real-time market intelligence terminal for global foreign exchange (Forex) and gold bullion (XAU/USD) featuring sub-second ambient telemetry, ForexFactory economic calendar ingestion, and CFTC COT flow analytics.',
  },
];

export const trustStats = [
  { num: '100+', label: 'Projects Delivered' },
  { num: '4', label: 'Industry Verticals' },
  { num: '3.2x', label: 'Average Pipeline Impact' },
  { num: '98%', label: 'Client Retention' },
];

export const whyIsdPoints = [
  {
    icon: '◆',
    title: 'Integrated Execution',
    desc: 'Every service connects to the next, reducing fragmentation and increasing impact.',
  },
  {
    icon: '◇',
    title: 'Sector-Aware Strategy',
    desc: 'We understand the nuances of education, B2B, SaaS, and enterprise environments.',
  },
  {
    icon: '▲',
    title: 'Practical AI Enablement',
    desc: 'AI systems designed for real workflows, not demo-worthy experiments.',
  },
  {
    icon: '●',
    title: 'End-to-End Delivery',
    desc: 'From strategy through execution, we stay with you across the full journey.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We audit your current systems, data, and marketing performance to identify the highest-impact opportunities.',
  },
  {
    step: '02',
    title: 'Strategize',
    desc: 'Our team builds an integrated roadmap connecting technology, channels, and operations into one cohesive plan.',
  },
  {
    step: '03',
    title: 'Execute',
    desc: 'We implement, launch, and manage — from campaign builds and AI workflows to Salesforce deployments.',
  },
  {
    step: '04',
    title: 'Optimize',
    desc: 'Continuous measurement, iteration, and improvement ensure sustained performance and compounding returns.',
  },
];

export const valueWords = ['Visibility', 'Engagement', 'Automation', 'Scale'];

export const footerServiceLinks = [
  { label: 'Digital Growth Engineering™', href: '/services/digital-growth-engineering' },
  { label: 'Enterprise Solution Engineering™', href: '/services/enterprise-solutions' },
  { label: 'Education Ecosystem Engineering™', href: '/services/education-ecosystem-engineering' },
  { label: 'Salesforce & Copado DevOps', href: '/services/salesforce-devops' },
];

export const footerProductLinks = [
  { label: 'NFX³ Market Intelligence', href: '/products/nfx3', isExternal: false },
  { label: 'Launch NFX3.com ↗', href: 'https://www.nfx3.com', isExternal: true },
];

export const footerCompanyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Proprietary Products', href: '/products/nfx3' },
  { label: 'Our Work', href: '/case-studies' },
  { label: 'Blog & Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks = [
  {
    name: 'Instagram',
    label: '@isd.info.solutions',
    href: 'https://www.instagram.com/isd.info.solutions?stkn=MWhyMXgwY3U3NHZlcw==',
  },
  {
    name: 'Facebook',
    label: 'ISD Info Solutions',
    href: 'https://www.facebook.com/share/191VahNXcK/',
  },
  {
    name: 'X',
    label: '@ISDInfoSol',
    href: 'https://x.com/ISDInfoSol',
  },
];


export const aboutBeliefs = [
  {
    title: 'Clarity drives growth.',
    desc: 'Complex problems require simple, well-architected solutions.',
  },
  {
    title: 'We build systems, not isolated outputs.',
    desc: 'Every campaign, platform, and process must connect to a larger operational engine.',
  },
  {
    title: 'Practical innovation over trend-driven complexity.',
    desc: 'We deploy technology that creates actual leverage, not technical debt.',
  },
  {
    title: 'We focus on results that can scale.',
    desc: 'Early wins must be built on architecture that can support tomorrow\'s volume.',
  },
];

export const contactNextSteps = [
  'We review your brief',
  'Schedule a 30-min discovery call',
  'Map initial strategy approach',
  'Provide a formal proposal',
];
