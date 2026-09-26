import { faqs } from '@/lib/data';

export function JsonLd() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://isdinfosolutions.com/#website',
    url: 'https://isdinfosolutions.com',
    name: 'ISD Info Solutions',
    alternateName: [
      'ISD Info Solutions',
      'ISD',
      'ISD Infosolutions',
      'isdinfosolutions.com',
      'ISD Info Solutions Official Website',
    ],
    description:
      'ISD Info Solutions is an enterprise digital growth and technology agency specializing in Digital Growth Engineering, Custom AI Platforms, Education Ecosystem Engineering, and Salesforce DevOps.',
    publisher: {
      '@id': 'https://isdinfosolutions.com/#organization',
    },
    inLanguage: 'en-US',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': 'https://isdinfosolutions.com/#organization',
    name: 'ISD Info Solutions',
    legalName: 'ISD Info Solutions',
    alternateName: [
      'ISD',
      'ISD Infosolutions',
      'ISD Info Solutions Agency',
      'isdinfosolutions.com',
    ],
    url: 'https://isdinfosolutions.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://isdinfosolutions.com/company-logo.png',
      caption: 'ISD Info Solutions Official Logo',
    },
    image: 'https://isdinfosolutions.com/company-logo.png',
    description:
      'We engineer high-converting digital platforms, performance marketing systems, custom AI platforms, and cloud architectures for ambitious modern organizations.',
    email: 'info@isdinfosolutions.com',
    telephone: '+916361120944',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.instagram.com/isd.info.solutions',
      'https://www.facebook.com/share/191VahNXcK/',
      'https://x.com/ISDInfoSol',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+916361120944',
        contactType: 'customer service',
        email: 'info@isdinfosolutions.com',
        availableLanguage: ['English', 'Hindi', 'Kannada'],
      },
    ],
    knowsAbout: [
      'Digital Growth Engineering',
      'Search Engine Optimization (SEO)',
      'Generative Engine Optimization (GEO)',
      'AI Search Visibility',
      'Custom AI Platforms & Autonomous Agents',
      'Education Ecosystem Engineering',
      'Salesforce & Copado DevOps',
      'Next.js Web Applications',
      'Performance Marketing & Paid PPC',
      'Revenue Intelligence & Multi-Touch Attribution',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ISD Info Solutions Core Engineering Practices',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Growth Engineering™',
            description:
              'The systematic engineering of digital presence, search & AI discoverability (SEO, AEO, GEO), paid acquisition, and revenue intelligence.',
            url: 'https://isdinfosolutions.com/services/digital-growth-engineering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Solution Engineering™',
            description:
              'Intelligent digital systems, custom SaaS applications, autonomous AI agents, workflow automation, and cross-channel Connected Engagement™.',
            url: 'https://isdinfosolutions.com/services/enterprise-solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Education Ecosystem Engineering™',
            description:
              'Strategic institutional transformation, accreditation advisory (NAAC, NBA, NIRF), admissions funnel engineering, and industry-academia integration.',
            url: 'https://isdinfosolutions.com/services/education-ecosystem-engineering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': ['WebApplication', 'FinancialService'],
            name: 'NFX³ (NFX3) — Real-Time Forex & Gold Bullion Intelligence',
            alternateName: ['NFX3', 'NFX³', 'NFX3 Market Intel'],
            description:
              'Official proprietary real-time financial market intelligence platform engineered by ISD Info Solutions, featuring sub-second XAU/USD telemetry, ForexFactory calendar synchronization, and CFTC COT flow analytics.',
            url: 'https://isdinfosolutions.com/products/nfx3',
            sameAs: 'https://www.nfx3.com',
          },
        },
      ],
    },
  };

  const nfx3Schema = {
    '@context': 'https://schema.org',
    '@type': ['WebApplication', 'FinancialService'],
    '@id': 'https://www.nfx3.com/#platform',
    name: 'NFX3 (NFX³) — Real-Time Forex & Gold Bullion Intelligence',
    alternateName: ['NFX3', 'NFX³', 'NFX 3', 'NFX3 Market Intel'],
    url: 'https://www.nfx3.com',
    description:
      'NFX3 is an institutional-grade, real-time market intelligence platform covering global foreign exchange (Forex) and gold bullion (XAU/USD) markets. Conceived, engineered, and operated by ISD Info Solutions.',
    creator: {
      '@id': 'https://isdinfosolutions.com/#organization',
    },
    publisher: {
      '@id': 'https://isdinfosolutions.com/#organization',
    },
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nfx3Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
