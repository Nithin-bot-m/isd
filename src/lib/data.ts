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
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Demand Generation',
    shortDescription:
      'Performance marketing, SEO, paid media, and full-funnel campaigns designed to drive qualified pipeline and measurable revenue growth.',
    heroIntro:
      'We help brands attract the right audiences, improve conversion performance, and turn marketing into a stronger business growth engine.',
    capabilities: [
      'SEO strategy',
      'Content strategy',
      'Paid media',
      'Campaign optimization',
      'Conversion rate optimization',
      'Marketing automation',
      'Analytics and attribution',
    ],
    valueProps:
      'stronger visibility, better lead quality, clearer funnel performance, more measurable ROI',
    ctaText: 'Get a Growth Audit',
    learnMoreHref: '/services/digital-marketing',
  },
  {
    id: 'ai-platforms',
    slug: 'ai-platforms',
    title: 'AI Platforms & Automation',
    shortDescription:
      'Custom AI solutions, intelligent workflows, and automation systems that transform how your teams operate and make decisions.',
    heroIntro:
      'We design and build AI-enabled experiences, internal tools, and standalone platforms that improve efficiency, decision-making, and digital capability.',
    capabilities: [
      'AI workflow design',
      'Standalone product platforms',
      'Internal business tools',
      'Automation systems',
      'Customer-facing experiences',
      'Dashboards and reporting',
    ],
    valueProps:
      'less manual friction, more scalable systems, faster decisions, better operational clarity',
    ctaText: 'Discuss an AI Platform',
    learnMoreHref: '/services/ai-platforms',
  },
  {
    id: 'education-marketing',
    slug: 'education-marketing',
    title: 'Education Marketing',
    shortDescription:
      'Enrollment strategy, brand positioning, and digital campaigns purpose-built for schools, universities, and edtech organizations.',
    heroIntro:
      'We help schools, institutions, education brands, and EdTech companies improve digital visibility, audience engagement, and conversion journeys.',
    capabilities: [
      'Enrollment marketing',
      'Admissions funnel strategy',
      'Education content strategy',
      'Website messaging',
      'CRM nurture journeys',
      'Audience segmentation',
    ],
    valueProps:
      'trust-first communication, long-cycle journey support, clearer value messaging, better inquiry-to-enrollment conversion',
    ctaText: 'Plan an Enrollment Strategy',
    learnMoreHref: '/services/education-marketing',
  },
  {
    id: 'salesforce-devops',
    slug: 'salesforce-devops',
    title: 'Salesforce DevOps & CRM',
    shortDescription:
      'Salesforce implementation, integration, DevOps pipelines, and CRM optimization that align sales, marketing, and service operations.',
    heroIntro:
      'We support Salesforce teams with delivery systems, environment strategy, automation, governance, and optimization.',
    capabilities: [
      'Salesforce implementation support',
      'Org optimization',
      'CI/CD planning',
      'Release management',
      'Environment strategy',
      'Integrations and governance',
    ],
    valueProps:
      'safer releases, stronger visibility, better coordination, scalable delivery practices',
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
    title: 'Web Design & Development',
    parent: 'Digital Marketing & Demand Generation',
    description:
      'High-performance websites engineered for conversion, speed, and search visibility — built on modern frameworks with clean technical architecture.',
    capabilities: [
      'UX/UI design systems',
      'Next.js & React development',
      'Headless CMS architecture',
      'Core Web Vitals optimization',
      'Conversion-focused landing pages',
      'Design tokens & component libraries',
    ],
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO & Content Strategy',
    parent: 'Digital Marketing & Demand Generation',
    description:
      'Technical SEO, content architecture, and editorial programs that compound organic visibility and pull qualified demand into your funnel.',
    capabilities: [
      'Technical SEO audits',
      'Keyword & topic strategy',
      'Editorial calendars',
      'On-page optimization',
      'Internal linking architecture',
      'Authority & link building',
    ],
  },
  {
    id: 'ppc',
    slug: 'ppc',
    title: 'Paid Media & PPC',
    parent: 'Digital Marketing & Demand Generation',
    description:
      'Full-funnel paid media across Google, LinkedIn, Meta, and programmatic — engineered for qualified pipeline, not vanity clicks.',
    capabilities: [
      'Google & Microsoft Ads',
      'LinkedIn demand campaigns',
      'Meta & programmatic',
      'Audience targeting & retargeting',
      'Landing page optimization',
      'Attribution & ROI modeling',
    ],
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Marketing',
    parent: 'Digital Marketing & Demand Generation',
    description:
      'Always-on social programs that build brand authority, support talent and recruiting, and amplify campaign moments across channels.',
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
  { label: 'Web Design & Development', href: '/services/web-design' },
  { label: 'SEO & Content Strategy', href: '/services/seo' },
  { label: 'Paid Media & PPC', href: '/services/ppc' },
  { label: 'Social Media Marketing', href: '/services/social-media' },
  { label: 'Analytics & CRO', href: '/services/analytics' },
];

export const footerCompanyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
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
