import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/insights',
  },
  title: 'Strategic Insights & Research — Engineering Digital Growth',
  description: 'Articles, analytical frameworks, and technical guides on modern SEO, performance marketing, conversion optimization, and web architecture.',
  openGraph: {
    title: 'Strategic Insights | ISD Info Solutions',
    description: 'Articles, analytical frameworks, and technical guides on modern SEO, performance marketing, and web architecture.',
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
