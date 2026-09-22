import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: {
    absolute: 'ISD Info Solutions | Enterprise Digital Growth, Web Platforms & AI',
  },
  description:
    'ISD Info Solutions is an enterprise digital growth and technology agency engineering high-converting web platforms, custom AI systems, performance marketing, and Salesforce DevOps.',
  keywords: [
    'ISD Info Solutions',
    'isd info solutions',
    'isdinfosolutions',
    'isd infosolutions.com',
    'ISD Info Solutions company',
    'Digital Growth Engineering',
    'Enterprise Solution Engineering',
    'Education Ecosystem Engineering',
    'Salesforce Copado DevOps',
  ],
};

export default function Home() {
  return <HomePage />;
}

