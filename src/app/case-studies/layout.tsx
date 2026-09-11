import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/case-studies',
  },
  title: 'Case Studies & Client Results — Proven Growth Benchmarks',
  description: 'In-depth case studies showcasing how our digital growth engineering, web development, and enterprise platforms drive verified conversion lifts and revenue.',
  openGraph: {
    title: 'Case Studies | ISD Info Solutions',
    description: 'In-depth case studies showcasing how our digital growth engineering and enterprise platforms drive verified revenue.',
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
