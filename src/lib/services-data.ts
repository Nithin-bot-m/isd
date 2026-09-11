export interface ServicePageData {
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

export const servicePages: Record<string, ServicePageData> = {
  'digital-growth-engineering': {
    eyebrow: 'Master Framework — Pillar 01',
    title: 'Digital Growth Engineering™',
    intro: 'The systematic engineering of a company\'s digital presence, discoverability, authority, customer acquisition, conversion, and retention across search, social, AI, advertising, content, websites, marketplaces, and digital platforms.',
    sections: [
      {
        kicker: '13 Engineering Pillars',
        subheading: 'One connected digital growth ecosystem spanning market intelligence, AI discoverability, performance acquisition, conversion architecture, and revenue telemetry.',
        items: [
          { name: '01. Growth Intelligence™', desc: 'Pre-spend market analysis, competitor ad & SEO intelligence, consumer search demand forecasting, digital share of voice, and brand perception mapping.' },
          { name: '02. Digital Presence Architecture™', desc: 'Corporate websites, campaign landing engines, mobile speed, Core Web Vitals, Google Business Profile, Apple Maps, and ecosystem directory authority.' },
          { name: '03. Search & AI Visibility™ (SEO, AEO, GEO)', desc: 'Technical SEO, schema markup, entity optimization, AI crawler accessibility, and citation monitoring across ChatGPT, Perplexity, Gemini, and Claude.' },
          { name: '04. Paid Growth Engineering™', desc: 'Full-funnel Google Performance Max, AI Max, YouTube Demand Gen, Meta Advantage+, and precision B2B programmatic advertising.' },
          { name: '05. Content Intelligence & Creation™', desc: 'Topic cluster architecture, thought leadership whitepapers, video shorts/reels, infographics, and citation-ready structured knowledge assets.' },
          { name: '06. Social Growth Engineering™', desc: 'Executive & founder branding, LinkedIn thought leadership, community management, creator collaborations, and UGC amplification.' },
          { name: '07. Conversion Growth Engineering™ (CRO)', desc: 'Funnel architecture, UX audits, A/B & multivariate testing, session heatmaps, form optimization, and lead qualification mechanisms.' },
          { name: '08. Revenue Intelligence™', desc: 'GA4 server-side tracking, Conversions API, multi-touch attribution, CRM pipeline tracking, and CAC/LTV/ROAS decision dashboards.' },
          { name: '09. Lifecycle Growth Engineering™', desc: 'Lead nurturing, automated WhatsApp, email & SMS workflows, lead scoring, re-engagement campaigns, and loyalty referral systems.' },
          { name: '10. Digital Reputation Engineering™', desc: 'Google review generation, brand sentiment monitoring, PR amplification, directory accuracy, and brand SERP/Knowledge Panel management.' },
          { name: '11. Digital Commerce Engineering™', desc: 'E-commerce architecture, Shopify/WooCommerce, Google Merchant Center feeds, Shopping Ads, marketplace advertising (Amazon/B2B), and cart recovery.' },
          { name: '12. Creator Growth Engineering™', desc: 'Creator identification, performance influencer campaigns, UGC production, and creator content engineered for AEO/GEO brand citations.' },
          { name: '13. AI Growth Automation™', desc: 'AI content workflows, automated lead routing, conversational sales agents, predictive campaign analysis, and AI brand visibility tracking.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Digital Growth Score™',
        subheading: 'We audit and score your entire business across 10 critical digital growth dimensions before deploying budget.',
        items: [
          { name: '1. Website Technical Health', desc: 'Mobile responsiveness, Core Web Vitals, security, speed, and technical crawlability.' },
          { name: '2. SEO & Entity Visibility', desc: 'Indexability, keyword footprint, content depth, internal linking, and backlink authority.' },
          { name: '3. Generative AI Visibility', desc: 'Entity clarity, schema coverage, citation potential, and brand mentions across LLMs.' },
          { name: '4. Local & Map Presence', desc: 'Google Business Profile completeness, local schema, NAP consistency, and reviews.' },
          { name: '5. Social Authority Footprint', desc: 'Platform completeness, audience engagement, thought leadership, and brand consistency.' },
          { name: '6. Content Authority & Depth', desc: 'Topic cluster coverage, freshness, original research, and educational asset depth.' },
          { name: '7. Paid Media Readiness', desc: 'Pixel architecture, conversion API setup, landing page alignment, and tracking hygiene.' },
          { name: '8. Conversion Architecture', desc: 'CTA clarity, friction-free forms, trust signals, social proof, and value proposition clarity.' },
          { name: '9. Reputation & Trust Signals', desc: 'Third-party reviews, brand sentiment, mentions, and crisis resilience.' },
          { name: '10. Revenue Attribution Hygiene', desc: 'GA4 event architecture, GTM server-side tagging, and CRM integration clarity.' },
        ],
        columns: 3,
      },
    ],
    process: {
      kicker: 'Methodology',
      subheading: 'Our 7-stage enterprise lifecycle — from initial diagnosis to compounding scale.',
      steps: [
        { step: '01', title: 'Diagnose', desc: 'Deep market intelligence, competitor benchmarking, and digital growth score assessment.' },
        { step: '02', title: 'Establish', desc: 'Build the digital presence architecture, websites, schema, and tracking foundations.' },
        { step: '03', title: 'Attract', desc: 'Activate Search, AI visibility, performance media, social, and high-leverage content.' },
        { step: '04', title: 'Convert', desc: 'Deploy CRO, high-converting landing pages, UX optimization, and lead qualification.' },
        { step: '05', title: 'Nurture', desc: 'Automate CRM follow-ups, WhatsApp workflows, email nurturing, and retargeting.' },
        { step: '06', title: 'Measure', desc: 'Deliver closed-loop attribution, revenue telemetry, and CAC/LTV forecasting.' },
        { step: '07', title: 'Scale', desc: 'Deploy AI automation, continuous experimentation, and market expansion.' },
      ],
    },
    results: {
      kicker: 'Enterprise Growth Impact',
      subheading: 'Compounding commercial outcomes across enterprise client engagements.',
      items: [
        { stat: '4.8x', label: 'average qualified pipeline expansion' },
        { stat: '68%', label: 'reduction in customer acquisition friction' },
        { stat: '100%', label: 'multi-touch revenue attribution visibility' },
      ],
    },
    tech: ['Google AI Max', 'Performance Max', 'Meta Advantage+', 'GA4', 'GTM Server-Side', 'Conversions API', 'Next.js', 'Schema.org', 'HubSpot', 'Salesforce CRM'],
    inPractice: [
      { title: 'Omni-Search & Generative AI Domination', desc: 'A high-growth B2B enterprise scaled inbound pipeline by 310% by structuring their entire web presence for traditional Google SEO and generative AI engine recommendations (ChatGPT & Perplexity).' },
      { title: 'Full-Stack Performance & Lifecycle Conversion', desc: 'Connected paid media campaigns directly to automated WhatsApp lead qualification and CRM nurture sequences, lifting inquiry-to-closed-deal conversion by 54% in 90 days.' },
    ],
    faqs: [
      { q: 'What is the core difference between Digital Marketing and Digital Growth Engineering™?', a: 'Traditional digital marketing focuses on siloed outputs (clicks, impressions, isolated ad campaigns). Digital Growth Engineering™ systematically architects the entire business ecosystem — connecting market intelligence, AI discoverability, CRO, CRM automation, and closed-loop revenue attribution.' },
      { q: 'How does Search & AI Visibility (AEO/GEO) work?', a: 'We optimize your brand entities, structured data schema, and authoritative third-party digital citations so your company is directly referenced and cited when users ask questions to AI systems like ChatGPT, Perplexity, Gemini, and Claude.' },
      { q: 'How quickly can we expect measurable business outcomes?', a: 'Paid growth campaigns and conversion optimization show early pipeline lift within 14–30 days. Organic authority, search presence, and generative AI citations compound over 3–6 months with continuous telemetry reporting.' },
    ],
    ctaHeading: 'Engineer Your Digital Growth Ecosystem',
    ctaBody: 'Schedule a discovery session to audit your digital presence and map your 13-pillar growth architecture.',
    ctaPrimary: 'Request Growth Strategy Brief',
  },
  'digital-marketing': {
    eyebrow: 'Master Framework — Pillar 01',
    title: 'Digital Growth Engineering™',
    intro: 'The systematic engineering of a company\'s digital presence, discoverability, authority, customer acquisition, conversion, and retention across search, social, AI, advertising, content, websites, marketplaces, and digital platforms.',
    sections: [
      {
        kicker: '13 Engineering Pillars',
        subheading: 'One connected digital growth ecosystem spanning market intelligence, AI discoverability, performance acquisition, conversion architecture, and revenue telemetry.',
        items: [
          { name: '01. Growth Intelligence™', desc: 'Pre-spend market analysis, competitor ad & SEO intelligence, consumer search demand forecasting, digital share of voice, and brand perception mapping.' },
          { name: '02. Digital Presence Architecture™', desc: 'Corporate websites, campaign landing engines, mobile speed, Core Web Vitals, Google Business Profile, Apple Maps, and ecosystem directory authority.' },
          { name: '03. Search & AI Visibility™ (SEO, AEO, GEO)', desc: 'Technical SEO, schema markup, entity optimization, AI crawler accessibility, and citation monitoring across ChatGPT, Perplexity, Gemini, and Claude.' },
          { name: '04. Paid Growth Engineering™', desc: 'Full-funnel Google Performance Max, AI Max, YouTube Demand Gen, Meta Advantage+, and precision B2B programmatic advertising.' },
          { name: '05. Content Intelligence & Creation™', desc: 'Topic cluster architecture, thought leadership whitepapers, video shorts/reels, infographics, and citation-ready structured knowledge assets.' },
          { name: '06. Social Growth Engineering™', desc: 'Executive & founder branding, LinkedIn thought leadership, community management, creator collaborations, and UGC amplification.' },
          { name: '07. Conversion Growth Engineering™ (CRO)', desc: 'Funnel architecture, UX audits, A/B & multivariate testing, session heatmaps, form optimization, and lead qualification mechanisms.' },
          { name: '08. Revenue Intelligence™', desc: 'GA4 server-side tracking, Conversions API, multi-touch attribution, CRM pipeline tracking, and CAC/LTV/ROAS decision dashboards.' },
          { name: '09. Lifecycle Growth Engineering™', desc: 'Lead nurturing, automated WhatsApp, email & SMS workflows, lead scoring, re-engagement campaigns, and loyalty referral systems.' },
          { name: '10. Digital Reputation Engineering™', desc: 'Google review generation, brand sentiment monitoring, PR amplification, directory accuracy, and brand SERP/Knowledge Panel management.' },
          { name: '11. Digital Commerce Engineering™', desc: 'E-commerce architecture, Shopify/WooCommerce, Google Merchant Center feeds, Shopping Ads, marketplace advertising (Amazon/B2B), and cart recovery.' },
          { name: '12. Creator Growth Engineering™', desc: 'Creator identification, performance influencer campaigns, UGC production, and creator content engineered for AEO/GEO brand citations.' },
          { name: '13. AI Growth Automation™', desc: 'AI content workflows, automated lead routing, conversational sales agents, predictive campaign analysis, and AI brand visibility tracking.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Digital Growth Score™',
        subheading: 'We audit and score your entire business across 10 critical digital growth dimensions before deploying budget.',
        items: [
          { name: '1. Website Technical Health', desc: 'Mobile responsiveness, Core Web Vitals, security, speed, and technical crawlability.' },
          { name: '2. SEO & Entity Visibility', desc: 'Indexability, keyword footprint, content depth, internal linking, and backlink authority.' },
          { name: '3. Generative AI Visibility', desc: 'Entity clarity, schema coverage, citation potential, and brand mentions across LLMs.' },
          { name: '4. Local & Map Presence', desc: 'Google Business Profile completeness, local schema, NAP consistency, and reviews.' },
          { name: '5. Social Authority Footprint', desc: 'Platform completeness, audience engagement, thought leadership, and brand consistency.' },
          { name: '6. Content Authority & Depth', desc: 'Topic cluster coverage, freshness, original research, and educational asset depth.' },
          { name: '7. Paid Media Readiness', desc: 'Pixel architecture, conversion API setup, landing page alignment, and tracking hygiene.' },
          { name: '8. Conversion Architecture', desc: 'CTA clarity, friction-free forms, trust signals, social proof, and value proposition clarity.' },
          { name: '9. Reputation & Trust Signals', desc: 'Third-party reviews, brand sentiment, mentions, and crisis resilience.' },
          { name: '10. Revenue Attribution Hygiene', desc: 'GA4 event architecture, GTM server-side tagging, and CRM integration clarity.' },
        ],
        columns: 3,
      },
    ],
    process: {
      kicker: 'Methodology',
      subheading: 'Our 7-stage enterprise lifecycle — from initial diagnosis to compounding scale.',
      steps: [
        { step: '01', title: 'Diagnose', desc: 'Deep market intelligence, competitor benchmarking, and digital growth score assessment.' },
        { step: '02', title: 'Establish', desc: 'Build the digital presence architecture, websites, schema, and tracking foundations.' },
        { step: '03', title: 'Attract', desc: 'Activate Search, AI visibility, performance media, social, and high-leverage content.' },
        { step: '04', title: 'Convert', desc: 'Deploy CRO, high-converting landing pages, UX optimization, and lead qualification.' },
        { step: '05', title: 'Nurture', desc: 'Automate CRM follow-ups, WhatsApp workflows, email nurturing, and retargeting.' },
        { step: '06', title: 'Measure', desc: 'Deliver closed-loop attribution, revenue telemetry, and CAC/LTV forecasting.' },
        { step: '07', title: 'Scale', desc: 'Deploy AI automation, continuous experimentation, and market expansion.' },
      ],
    },
    results: {
      kicker: 'Enterprise Growth Impact',
      subheading: 'Compounding commercial outcomes across enterprise client engagements.',
      items: [
        { stat: '4.8x', label: 'average qualified pipeline expansion' },
        { stat: '68%', label: 'reduction in customer acquisition friction' },
        { stat: '100%', label: 'multi-touch revenue attribution visibility' },
      ],
    },
    tech: ['Google AI Max', 'Performance Max', 'Meta Advantage+', 'GA4', 'GTM Server-Side', 'Conversions API', 'Next.js', 'Schema.org', 'HubSpot', 'Salesforce CRM'],
    inPractice: [
      { title: 'Omni-Search & Generative AI Domination', desc: 'A high-growth B2B enterprise scaled inbound pipeline by 310% by structuring their entire web presence for traditional Google SEO and generative AI engine recommendations (ChatGPT & Perplexity).' },
      { title: 'Full-Stack Performance & Lifecycle Conversion', desc: 'Connected paid media campaigns directly to automated WhatsApp lead qualification and CRM nurture sequences, lifting inquiry-to-closed-deal conversion by 54% in 90 days.' },
    ],
    faqs: [
      { q: 'What is the core difference between Digital Marketing and Digital Growth Engineering™?', a: 'Traditional digital marketing focuses on siloed outputs (clicks, impressions, isolated ad campaigns). Digital Growth Engineering™ systematically architects the entire business ecosystem — connecting market intelligence, AI discoverability, CRO, CRM automation, and closed-loop revenue attribution.' },
      { q: 'How does Search & AI Visibility (AEO/GEO) work?', a: 'We optimize your brand entities, structured data schema, and authoritative third-party digital citations so your company is directly referenced and cited when users ask questions to AI systems like ChatGPT, Perplexity, Gemini, and Claude.' },
      { q: 'How quickly can we expect measurable business outcomes?', a: 'Paid growth campaigns and conversion optimization show early pipeline lift within 14–30 days. Organic authority, search presence, and generative AI citations compound over 3–6 months with continuous telemetry reporting.' },
    ],
    ctaHeading: 'Engineer Your Digital Growth Ecosystem',
    ctaBody: 'Schedule a discovery session to audit your digital presence and map your 13-pillar growth architecture.',
    ctaPrimary: 'Request Growth Strategy Brief',
  },
  'enterprise-solutions': {
    eyebrow: 'Master Framework — Pillar 03',
    title: 'Enterprise Solution Engineering™',
    intro: 'We engineer intelligent digital systems, autonomous AI agents, enterprise applications, automation workflows, and connected multi-channel platforms that transform complex business operations into scalable engines.',
    sections: [
      {
        kicker: '12 Enterprise Capabilities',
        subheading: 'Full-stack enterprise systems engineering designed around how your organisation actually works and scales.',
        items: [
          { name: '01. Digital Experience Engineering™', desc: 'Enterprise portals, corporate web applications, customer/partner portals, PWA, mobile applications, and unified enterprise design systems.' },
          { name: '02. Application Engineering™', desc: 'Custom SaaS platforms, internal business applications, marketplace platforms, booking engines, and logistics/healthcare systems.' },
          { name: '03. Customer Intelligence & CRM Engineering™', desc: 'Salesforce, Microsoft Dynamics, HubSpot, Zoho, and custom CRM architecture with sales pipeline automation and customer data platforms.' },
          { name: '04. Data & Intelligence Engineering™', desc: 'Executive BI dashboards, real-time MIS reporting, data pipelines, predictive analytics, and automated decision intelligence.' },
          { name: '05. AI Systems Engineering™', desc: 'Autonomous AI agents, enterprise copilots, RAG knowledge bases, contextual document intelligence, and customer service assistants.' },
          { name: '06. AI Workflow Engineering™', desc: 'Multi-step AI-orchestrated workflows (e.g. Lead received → AI intent classification → CRM lookup → scoring → WhatsApp notification → task assignment).' },
          { name: '07. Intelligent Process Automation (IPA)™', desc: 'Repetitive workflow automation, RPA, API orchestration, automated document processing, approvals, and scheduled enterprise syncs.' },
          { name: '08. Integration & API Engineering™', desc: 'Unifying disparate systems — connecting CRM, ERP, HRMS, LMS, payment gateways, WhatsApp, and internal legacy databases into one ecosystem.' },
          { name: '09. Cloud & Platform Engineering™', desc: 'Resilient cloud infrastructure (AWS/GCP), containerisation, CI/CD automated deployment pipelines, DevOps, and disaster recovery.' },
          { name: '10. Cybersecurity Engineering™', desc: 'Application security, identity & access management (IAM), API security, data protection, vulnerability audits, and compliance readiness.' },
          { name: '11. Enterprise Platform Engineering™', desc: 'Custom supply chain systems, vendor management portals, procurement workflows, and ERP enterprise extensions.' },
          { name: '12. Digital Operations & Managed Services™', desc: '24/7 application maintenance, CRM administration, AI agent telemetry monitoring, cloud operations, and SLA-based technical support.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Horizontal Multi-Channel Layer',
        subheading: 'Connected Engagement™ — Unifying communication, automation, customer data, and revenue telemetry across every touchpoint.',
        items: [
          { name: 'Communicate', desc: 'Official WhatsApp Business API, RCS Messaging, Transactional Email, SMS, Push Notifications, and Conversational Voice AI.' },
          { name: 'Understand', desc: 'Unified CRM customer data platform, real-time behavioral segmentation, and intent scoring across all touchpoints.' },
          { name: 'Automate', desc: 'Multi-channel trigger workflows, event-driven AI agents, instant document delivery, and automated appointment scheduling.' },
          { name: 'Measure', desc: 'Closed-loop attribution, messaging engagement analytics, response time SLAs, and conversion telemetry.' },
        ],
        columns: 4,
      },
    ],
    process: {
      kicker: 'Solution Lifecycle',
      subheading: 'Our 8-stage enterprise engineering roadmap.',
      steps: [
        { step: '01', title: 'Discover', desc: 'Understand operations, pain points, data systems, and human workflows.' },
        { step: '02', title: 'Architect', desc: 'Design the target technology ecosystem, data models, APIs, and security.' },
        { step: '03', title: 'Engineer', desc: 'Build scalable software, portals, and platforms using modern tech stacks.' },
        { step: '04', title: 'Integrate', desc: 'Connect ERP, CRM, databases, payment gateways, and messaging channels.' },
        { step: '05', title: 'Automate', desc: 'Deploy intelligent workflows, autonomous AI agents, and trigger rules.' },
        { step: '06', title: 'Measure', desc: 'Monitor telemetry, response latency, operational efficiency, and error rates.' },
        { step: '07', title: 'Optimise', desc: 'Continuously refine logic, AI model context, and workflow throughput.' },
        { step: '08', title: 'Scale', desc: 'Expand across departments, regional business units, and new capabilities.' },
      ],
    },
    results: {
      kicker: 'Operational Leverage',
      subheading: 'Demonstrated operational efficiency gains across enterprise deployments.',
      items: [
        { stat: '73%', label: 'reduction in manual process friction' },
        { stat: '3.4x', label: 'increase in operational team velocity' },
        { stat: '99.9%', label: 'system uptime across integrated platforms' },
      ],
    },
    tech: ['Next.js', 'Node.js', 'Python', 'OpenAI', 'LangChain', 'PostgreSQL', 'Redis', 'Docker', 'Salesforce DX', 'WhatsApp Cloud API'],
    inPractice: [
      { title: 'End-to-End Autonomous Admissions & Lead Routing', desc: 'Integrated an institution\'s website forms with AI intent parsing, auto-qualifying candidates in CRM, and triggering instant personalized WhatsApp responses with zero human lag.' },
      { title: 'Enterprise BI & Real-Time Operational Telemetry', desc: 'Consolidated fragmented data across 5 disparate legacy databases into a real-time executive dashboard layer, giving leadership instant decision visibility.' },
    ],
    faqs: [
      { q: 'How does Enterprise Solution Engineering™ differ from traditional IT vendor services?', a: 'Traditional IT vendors build isolated tools or throw hours at maintenance. We engineer interconnected business systems around your actual processes — embedding AI agents, CRM workflows, and multi-channel messaging that eliminate friction.' },
      { q: 'Can you integrate with our existing legacy systems and CRM?', a: 'Yes. Our Integration & API Engineering practice specializes in bridging legacy databases, custom ERPs, and modern cloud platforms (Salesforce, HubSpot, custom APIs) without requiring high-risk total overhauls.' },
      { q: 'How is data security and compliance handled for enterprise AI systems?', a: 'All systems are built with role-based access control (RBAC), end-to-end data encryption at rest and in transit, private vector database VPCs, and zero data retention agreements for sensitive enterprise data.' },
    ],
    ctaHeading: 'Build What Your Business Needs Next',
    ctaBody: 'Discuss your operational bottlenecks, custom platform requirements, or AI workflow architecture with our senior solution engineers.',
    ctaPrimary: 'Schedule Technical Consultation',
  },
  'ai-platforms': {
    eyebrow: 'Master Framework — Pillar 03',
    title: 'Enterprise Solution Engineering™',
    intro: 'We engineer intelligent digital systems, autonomous AI agents, enterprise applications, automation workflows, and connected multi-channel platforms that transform complex business operations into scalable engines.',
    sections: [
      {
        kicker: '12 Enterprise Capabilities',
        subheading: 'Full-stack enterprise systems engineering designed around how your organisation actually works and scales.',
        items: [
          { name: '01. Digital Experience Engineering™', desc: 'Enterprise portals, corporate web applications, customer/partner portals, PWA, mobile applications, and unified enterprise design systems.' },
          { name: '02. Application Engineering™', desc: 'Custom SaaS platforms, internal business applications, marketplace platforms, booking engines, and logistics/healthcare systems.' },
          { name: '03. Customer Intelligence & CRM Engineering™', desc: 'Salesforce, Microsoft Dynamics, HubSpot, Zoho, and custom CRM architecture with sales pipeline automation and customer data platforms.' },
          { name: '04. Data & Intelligence Engineering™', desc: 'Executive BI dashboards, real-time MIS reporting, data pipelines, predictive analytics, and automated decision intelligence.' },
          { name: '05. AI Systems Engineering™', desc: 'Autonomous AI agents, enterprise copilots, RAG knowledge bases, contextual document intelligence, and customer service assistants.' },
          { name: '06. AI Workflow Engineering™', desc: 'Multi-step AI-orchestrated workflows (e.g. Lead received → AI intent classification → CRM lookup → scoring → WhatsApp notification → task assignment).' },
          { name: '07. Intelligent Process Automation (IPA)™', desc: 'Repetitive workflow automation, RPA, API orchestration, automated document processing, approvals, and scheduled enterprise syncs.' },
          { name: '08. Integration & API Engineering™', desc: 'Unifying disparate systems — connecting CRM, ERP, HRMS, LMS, payment gateways, WhatsApp, and internal legacy databases into one ecosystem.' },
          { name: '09. Cloud & Platform Engineering™', desc: 'Resilient cloud infrastructure (AWS/GCP), containerisation, CI/CD automated deployment pipelines, DevOps, and disaster recovery.' },
          { name: '10. Cybersecurity Engineering™', desc: 'Application security, identity & access management (IAM), API security, data protection, vulnerability audits, and compliance readiness.' },
          { name: '11. Enterprise Platform Engineering™', desc: 'Custom supply chain systems, vendor management portals, procurement workflows, and ERP enterprise extensions.' },
          { name: '12. Digital Operations & Managed Services™', desc: '24/7 application maintenance, CRM administration, AI agent telemetry monitoring, cloud operations, and SLA-based technical support.' },
        ],
        columns: 3,
      },
      {
        kicker: 'Horizontal Multi-Channel Layer',
        subheading: 'Connected Engagement™ — Unifying communication, automation, customer data, and revenue telemetry across every touchpoint.',
        items: [
          { name: 'Communicate', desc: 'Official WhatsApp Business API, RCS Messaging, Transactional Email, SMS, Push Notifications, and Conversational Voice AI.' },
          { name: 'Understand', desc: 'Unified CRM customer data platform, real-time behavioral segmentation, and intent scoring across all touchpoints.' },
          { name: 'Automate', desc: 'Multi-channel trigger workflows, event-driven AI agents, instant document delivery, and automated appointment scheduling.' },
          { name: 'Measure', desc: 'Closed-loop attribution, messaging engagement analytics, response time SLAs, and conversion telemetry.' },
        ],
        columns: 4,
      },
    ],
    process: {
      kicker: 'Solution Lifecycle',
      subheading: 'Our 8-stage enterprise engineering roadmap.',
      steps: [
        { step: '01', title: 'Discover', desc: 'Understand operations, pain points, data systems, and human workflows.' },
        { step: '02', title: 'Architect', desc: 'Design the target technology ecosystem, data models, APIs, and security.' },
        { step: '03', title: 'Engineer', desc: 'Build scalable software, portals, and platforms using modern tech stacks.' },
        { step: '04', title: 'Integrate', desc: 'Connect ERP, CRM, databases, payment gateways, and messaging channels.' },
        { step: '05', title: 'Automate', desc: 'Deploy intelligent workflows, autonomous AI agents, and trigger rules.' },
        { step: '06', title: 'Measure', desc: 'Monitor telemetry, response latency, operational efficiency, and error rates.' },
        { step: '07', title: 'Optimise', desc: 'Continuously refine logic, AI model context, and workflow throughput.' },
        { step: '08', title: 'Scale', desc: 'Expand across departments, regional business units, and new capabilities.' },
      ],
    },
    results: {
      kicker: 'Operational Leverage',
      subheading: 'Demonstrated operational efficiency gains across enterprise deployments.',
      items: [
        { stat: '73%', label: 'reduction in manual process friction' },
        { stat: '3.4x', label: 'increase in operational team velocity' },
        { stat: '99.9%', label: 'system uptime across integrated platforms' },
      ],
    },
    tech: ['Next.js', 'Node.js', 'Python', 'OpenAI', 'LangChain', 'PostgreSQL', 'Redis', 'Docker', 'Salesforce DX', 'WhatsApp Cloud API'],
    inPractice: [
      { title: 'End-to-End Autonomous Admissions & Lead Routing', desc: 'Integrated an institution\'s website forms with AI intent parsing, auto-qualifying candidates in CRM, and triggering instant personalized WhatsApp responses with zero human lag.' },
      { title: 'Enterprise BI & Real-Time Operational Telemetry', desc: 'Consolidated fragmented data across 5 disparate legacy databases into a real-time executive dashboard layer, giving leadership instant decision visibility.' },
    ],
    faqs: [
      { q: 'How does Enterprise Solution Engineering™ differ from traditional IT vendor services?', a: 'Traditional IT vendors build isolated tools or throw hours at maintenance. We engineer interconnected business systems around your actual processes — embedding AI agents, CRM workflows, and multi-channel messaging that eliminate friction.' },
      { q: 'Can you integrate with our existing legacy systems and CRM?', a: 'Yes. Our Integration & API Engineering practice specializes in bridging legacy databases, custom ERPs, and modern cloud platforms (Salesforce, HubSpot, custom APIs) without requiring high-risk total overhauls.' },
      { q: 'How is data security and compliance handled for enterprise AI systems?', a: 'All systems are built with role-based access control (RBAC), end-to-end data encryption at rest and in transit, private vector database VPCs, and zero data retention agreements for sensitive enterprise data.' },
    ],
    ctaHeading: 'Build What Your Business Needs Next',
    ctaBody: 'Discuss your operational bottlenecks, custom platform requirements, or AI workflow architecture with our senior solution engineers.',
    ctaPrimary: 'Schedule Technical Consultation',
  },
  'education-ecosystem-engineering': {
    eyebrow: 'Master Framework — Pillar 02',
    title: 'Education Ecosystem Engineering™',
    intro: 'The strategic design, transformation, and optimisation of institutions, academic systems, talent pathways, and learner journeys across the entire education ecosystem.',
    sections: [
      {
        kicker: '20 Comprehensive Domains',
        subheading: 'Enterprise advisory and transformation connecting institutions, leadership, faculty, students, and corporate industry.',
        items: [
          { name: '01. Institutional Excellence Engineering™', desc: 'Strategic planning, university status, autonomous institution advisory, academic portfolio restructuring, and digital campus transformation.' },
          { name: '02. Regulatory, Accreditation & Ranking Advisory™', desc: 'Statutory compliance and quality advisory for UGC, AICTE, NAAC SSR readiness, NBA documentation, and NIRF/QS metric strategy.' },
          { name: '03. Academic Ecosystem Engineering™', desc: 'Curriculum restructuring, Outcome-Based Education (OBE), Board of Studies support, international MoUs, and credit transfer frameworks.' },
          { name: '04. Industry-Academia Integration™', desc: 'Corporate MoUs, industry-sponsored innovation labs, live capstone projects, internships, apprenticeships, and guest expert lectures.' },
          { name: '05. Talent-to-Career Engineering™', desc: 'Placement cell modernization, employability assessments, recruiter acquisition drives, LinkedIn/resume optimization, and campus hiring.' },
          { name: '06. Skills Transformation™', desc: 'B2B corporate training, B2I institutional upskilling, and B2C certification bootcamps for emerging technical and leadership capabilities.' },
          { name: '07. Career & Talent Intelligence™', desc: 'Validated psychometric career aptitude mapping, personality alignment, and job-role suitability diagnostics for graduates and professionals.' },
          { name: '08. Education Mobility Advisory™', desc: 'Domestic university selection, international study abroad advisory, application strategy, SOP/LOR review, and scholarship guidance.' },
          { name: '09. Enrolment Growth Engineering™', desc: 'Admissions funnel optimization, automated tele-counselling workflows, CRM lead nurturing, and parent/student engagement.' },
          { name: '10. Education Growth Marketing™', desc: 'Institutional branding, high-intent student acquisition campaigns, education SEO/AEO/GEO, and multi-channel digital visibility.' },
          { name: '11. Education Creator & Influence Network™', desc: 'Campus ambassador programs, student creator networks, faculty thought leadership, and institutional UGC campaigns.' },
          { name: '12. Education Outreach & Activation™', desc: 'School/college outreach programs, education career fairs, campus open houses, counselling camps, and regional roadshows.' },
          { name: '13. Academic Research Enablement™', desc: 'Ethical research methodology guidance, literature review structuring, statistical analysis support, and manuscript editing.' },
          { name: '14. Faculty Excellence & Development™', desc: 'Faculty Development Programs (FDPs), digital pedagogy, AI in classroom education, and research grant writing guidance.' },
          { name: '15. School Education Advisory™', desc: 'K-12 school establishment advisory, CBSE/ICSE pathway planning, teacher training, parent engagement, and school admissions.' },
          { name: '16. EdTech Strategy & Transformation™', desc: 'LMS architecture, student portals, AI tutors, digital classrooms, hybrid program delivery, and learning experience design.' },
          { name: '17. Global Education Strategy™', desc: 'Institutional internationalization, student exchange agreements, joint twinning degrees, and global institutional partnerships.' },
          { name: '18. Research & Innovation Ecosystem™', desc: 'Campus incubators, entrepreneurship cells, patent/IP awareness, innovation challenges, and technology transfer frameworks.' },
          { name: '19. Institutional Leadership Advisory™', desc: 'Executive strategic counsel for Vice Chancellors, Principals, Deans, Registrars, and Trustees.' },
          { name: '20. Student Potential Mapping™', desc: 'High-school (15+) decision support, stream selection, aptitude profiling, and higher education pathway planning.' },
        ],
        columns: 4,
      },
      {
        kicker: 'Education Growth Navigator™',
        subheading: 'Intelligent routing for universities, schools, leaders, students, and employers.',
        items: [
          { name: 'For Universities & Colleges', desc: 'Accreditation readiness (NAAC/NBA), NIRF ranking optimization, admissions growth, and placement cell transformation.' },
          { name: 'For School Leaders & Trustees', desc: 'Institutional strategy, CBSE/ICSE affiliation advisory, parent engagement, and teacher training programs.' },
          { name: 'For Students & Parents', desc: 'Career intelligence profiling, domestic & international admission advisory, scholarship guidance, and skill bootcamps.' },
          { name: 'For Corporate Employers', desc: 'Campus recruitment drives, pre-assessed talent acquisition, corporate academies, and university research partnerships.' },
        ],
        columns: 4,
      },
    ],
    process: {
      kicker: 'Transformation Process',
      subheading: 'A disciplined framework for institutional and academic advancement.',
      steps: [
        { step: '01', title: 'Ecosystem Audit', desc: 'Assess institutional health, compliance readiness, student journeys, and corporate relations.' },
        { step: '02', title: 'Strategic Roadmap', desc: 'Define actionable targets for accreditation, curriculum, admissions, and industry connect.' },
        { step: '03', title: 'Capacity Building', desc: 'Deploy faculty development, admissions CRM, curriculum restructuring, and student workshops.' },
        { step: '04', title: 'Execution & Outreach', desc: 'Activate marketing, corporate partnership MoUs, recruiter drives, and student mobility pipelines.' },
        { step: '05', title: 'Quality Assurance', desc: 'Continuous review of learning outcomes, accreditation SSR documentation, and placement metrics.' },
      ],
    },
    results: {
      kicker: 'Institutional Outcomes',
      subheading: 'Demonstrated transformation across partner institutions.',
      items: [
        { stat: '42%', label: 'increase in qualified admissions inquiries' },
        { stat: '85%+', label: 'student placement readiness rate' },
        { stat: '100%', label: 'statutory compliance & SSR data readiness' },
      ],
    },
    tech: ['Education CRM', 'LMS Platforms', 'NAAC Data Frameworks', 'NIRF Analytics', 'AI Admissions Triage', 'WhatsApp Automation'],
    inPractice: [
      { title: 'Regional University Admissions & NAAC Readiness', desc: 'Architected a unified digital admissions funnel while preparing comprehensive SSR documentation — resulting in a 42% enrollment lift and on-schedule accreditation submission.' },
      { title: 'Campus-to-Corporate Placement Engineering', desc: 'Structured pre-placement aptitude and technical training across 1,200+ students, establishing 18 new corporate MoUs and expanding placement conversion.' },
    ],
    faqs: [
      { q: 'How do you support NAAC, NBA, and NIRF ranking initiatives?', a: 'We provide structured data strategy, SSR documentation preparation, AQAR data alignment, peer-team audit readiness, and institutional benchmarking to optimize verifiable quality metrics.' },
      { q: 'What is the Education Growth Navigator™?', a: 'It is our intelligent triage framework that routes each stakeholder (University, College, School, Student, or Employer) to the exact service pillar and specialist advisor needed.' },
      { q: 'What are your ethical standards regarding academic research?', a: 'We strictly adhere to ethical enablement: providing research methodology mentoring, data analysis guidance, literature review frameworks, and manuscript editing. We never engage in ghostwriting or fabricated research.' },
    ],
    ctaHeading: 'Transform Your Education Ecosystem',
    ctaBody: 'Connect with our institutional and academic growth strategists to evaluate your roadmap.',
    ctaPrimary: 'Book Institutional Consultation',
  },
  'education-marketing': {
    eyebrow: 'Master Framework — Pillar 02',
    title: 'Education Ecosystem Engineering™',
    intro: 'The strategic design, transformation, and optimisation of institutions, academic systems, talent pathways, and learner journeys across the entire education ecosystem.',
    sections: [
      {
        kicker: '20 Comprehensive Domains',
        subheading: 'Enterprise advisory and transformation connecting institutions, leadership, faculty, students, and corporate industry.',
        items: [
          { name: '01. Institutional Excellence Engineering™', desc: 'Strategic planning, university status, autonomous institution advisory, academic portfolio restructuring, and digital campus transformation.' },
          { name: '02. Regulatory, Accreditation & Ranking Advisory™', desc: 'Statutory compliance and quality advisory for UGC, AICTE, NAAC SSR readiness, NBA documentation, and NIRF/QS metric strategy.' },
          { name: '03. Academic Ecosystem Engineering™', desc: 'Curriculum restructuring, Outcome-Based Education (OBE), Board of Studies support, international MoUs, and credit transfer frameworks.' },
          { name: '04. Industry-Academia Integration™', desc: 'Corporate MoUs, industry-sponsored innovation labs, live capstone projects, internships, apprenticeships, and guest expert lectures.' },
          { name: '05. Talent-to-Career Engineering™', desc: 'Placement cell modernization, employability assessments, recruiter acquisition drives, LinkedIn/resume optimization, and campus hiring.' },
          { name: '06. Skills Transformation™', desc: 'B2B corporate training, B2I institutional upskilling, and B2C certification bootcamps for emerging technical and leadership capabilities.' },
          { name: '07. Career & Talent Intelligence™', desc: 'Validated psychometric career aptitude mapping, personality alignment, and job-role suitability diagnostics for graduates and professionals.' },
          { name: '08. Education Mobility Advisory™', desc: 'Domestic university selection, international study abroad advisory, application strategy, SOP/LOR review, and scholarship guidance.' },
          { name: '09. Enrolment Growth Engineering™', desc: 'Admissions funnel optimization, automated tele-counselling workflows, CRM lead nurturing, and parent/student engagement.' },
          { name: '10. Education Growth Marketing™', desc: 'Institutional branding, high-intent student acquisition campaigns, education SEO/AEO/GEO, and multi-channel digital visibility.' },
          { name: '11. Education Creator & Influence Network™', desc: 'Campus ambassador programs, student creator networks, faculty thought leadership, and institutional UGC campaigns.' },
          { name: '12. Education Outreach & Activation™', desc: 'School/college outreach programs, education career fairs, campus open houses, counselling camps, and regional roadshows.' },
          { name: '13. Academic Research Enablement™', desc: 'Ethical research methodology guidance, literature review structuring, statistical analysis support, and manuscript editing.' },
          { name: '14. Faculty Excellence & Development™', desc: 'Faculty Development Programs (FDPs), digital pedagogy, AI in classroom education, and research grant writing guidance.' },
          { name: '15. School Education Advisory™', desc: 'K-12 school establishment advisory, CBSE/ICSE pathway planning, teacher training, parent engagement, and school admissions.' },
          { name: '16. EdTech Strategy & Transformation™', desc: 'LMS architecture, student portals, AI tutors, digital classrooms, hybrid program delivery, and learning experience design.' },
          { name: '17. Global Education Strategy™', desc: 'Institutional internationalization, student exchange agreements, joint twinning degrees, and global institutional partnerships.' },
          { name: '18. Research & Innovation Ecosystem™', desc: 'Campus incubators, entrepreneurship cells, patent/IP awareness, innovation challenges, and technology transfer frameworks.' },
          { name: '19. Institutional Leadership Advisory™', desc: 'Executive strategic counsel for Vice Chancellors, Principals, Deans, Registrars, and Trustees.' },
          { name: '20. Student Potential Mapping™', desc: 'High-school (15+) decision support, stream selection, aptitude profiling, and higher education pathway planning.' },
        ],
        columns: 4,
      },
      {
        kicker: 'Education Growth Navigator™',
        subheading: 'Intelligent routing for universities, schools, leaders, students, and employers.',
        items: [
          { name: 'For Universities & Colleges', desc: 'Accreditation readiness (NAAC/NBA), NIRF ranking optimization, admissions growth, and placement cell transformation.' },
          { name: 'For School Leaders & Trustees', desc: 'Institutional strategy, CBSE/ICSE affiliation advisory, parent engagement, and teacher training programs.' },
          { name: 'For Students & Parents', desc: 'Career intelligence profiling, domestic & international admission advisory, scholarship guidance, and skill bootcamps.' },
          { name: 'For Corporate Employers', desc: 'Campus recruitment drives, pre-assessed talent acquisition, corporate academies, and university research partnerships.' },
        ],
        columns: 4,
      },
    ],
    process: {
      kicker: 'Transformation Process',
      subheading: 'A disciplined framework for institutional and academic advancement.',
      steps: [
        { step: '01', title: 'Ecosystem Audit', desc: 'Assess institutional health, compliance readiness, student journeys, and corporate relations.' },
        { step: '02', title: 'Strategic Roadmap', desc: 'Define actionable targets for accreditation, curriculum, admissions, and industry connect.' },
        { step: '03', title: 'Capacity Building', desc: 'Deploy faculty development, admissions CRM, curriculum restructuring, and student workshops.' },
        { step: '04', title: 'Execution & Outreach', desc: 'Activate marketing, corporate partnership MoUs, recruiter drives, and student mobility pipelines.' },
        { step: '05', title: 'Quality Assurance', desc: 'Continuous review of learning outcomes, accreditation SSR documentation, and placement metrics.' },
      ],
    },
    results: {
      kicker: 'Institutional Outcomes',
      subheading: 'Demonstrated transformation across partner institutions.',
      items: [
        { stat: '42%', label: 'increase in qualified admissions inquiries' },
        { stat: '85%+', label: 'student placement readiness rate' },
        { stat: '100%', label: 'statutory compliance & SSR data readiness' },
      ],
    },
    tech: ['Education CRM', 'LMS Platforms', 'NAAC Data Frameworks', 'NIRF Analytics', 'AI Admissions Triage', 'WhatsApp Automation'],
    inPractice: [
      { title: 'Regional University Admissions & NAAC Readiness', desc: 'Architected a unified digital admissions funnel while preparing comprehensive SSR documentation — resulting in a 42% enrollment lift and on-schedule accreditation submission.' },
      { title: 'Campus-to-Corporate Placement Engineering', desc: 'Structured pre-placement aptitude and technical training across 1,200+ students, establishing 18 new corporate MoUs and expanding placement conversion.' },
    ],
    faqs: [
      { q: 'How do you support NAAC, NBA, and NIRF ranking initiatives?', a: 'We provide structured data strategy, SSR documentation preparation, AQAR data alignment, peer-team audit readiness, and institutional benchmarking to optimize verifiable quality metrics.' },
      { q: 'What is the Education Growth Navigator™?', a: 'It is our intelligent triage framework that routes each stakeholder (University, College, School, Student, or Employer) to the exact service pillar and specialist advisor needed.' },
      { q: 'What are your ethical standards regarding academic research?', a: 'We strictly adhere to ethical enablement: providing research methodology mentoring, data analysis guidance, literature review frameworks, and manuscript editing. We never engage in ghostwriting or fabricated research.' },
    ],
    ctaHeading: 'Transform Your Education Ecosystem',
    ctaBody: 'Connect with our institutional and academic growth strategists to evaluate your roadmap.',
    ctaPrimary: 'Book Institutional Consultation',
  },
  'salesforce-devops': {
    eyebrow: 'Specialized Practice',
    title: 'Salesforce & Copado DevOps',
    intro: 'We support enterprise Salesforce teams with automated CI/CD release management, Copado pipelines, org health optimization, and multi-environment governance.',
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
    results: {
      kicker: 'DevOps Velocity',
      subheading: 'Average performance improvements across enterprise Salesforce teams.',
      items: [
        { stat: '0', label: 'production deployment downtime' },
        { stat: '85%', label: 'faster release cycle turnaround' },
        { stat: '100%', label: 'automated deployment audit trail' },
      ],
    },
    tech: ['Salesforce DX', 'Copado', 'Gearset', 'GitHub Actions', 'Sales Cloud', 'Service Cloud', 'Marketing Cloud'],
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
    eyebrow: 'Specialized Discipline',
    title: 'Search & AI Visibility (SEO, AEO, GEO)',
    intro: 'Comprehensive discovery engineering — dominating traditional Google search rankings, Answer Engine snippets (AEO), and Generative AI citations (GEO).',
    sections: [
      {
        kicker: 'Core Capabilities',
        subheading: 'Omni-search discovery across all search engines and generative AI platforms.',
        items: [
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