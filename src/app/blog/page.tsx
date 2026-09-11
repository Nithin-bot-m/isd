import type { Metadata } from 'next';
import InsightsPage from '../insights/page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/insights',
  },
  title: 'Blog & Engineering Analysis — Thought Leadership',
  description: 'In-depth perspectives on full-funnel digital marketing, AI search discoverability, enrollment marketing, and cloud platform engineering.',
  openGraph: {
    title: 'Blog | ISD Info Solutions',
    description: 'In-depth perspectives on full-funnel digital marketing, AI search discoverability, and cloud engineering.',
  },
};

export default function BlogPage() {
  return <InsightsPage />;
}

