import type { Metadata } from 'next';
import CaseStudiesPage from '../case-studies/page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/case-studies',
  },
  title: 'Our Work & Portfolio — Digital Transformation & Growth',
  description: 'Explore selected engagements, performance marketing campaigns, and digital infrastructure built by ISD Info Solutions for high-growth brands.',
  openGraph: {
    title: 'Our Work | ISD Info Solutions',
    description: 'Explore selected engagements, performance marketing campaigns, and digital infrastructure built by ISD Info Solutions.',
  },
};

export default function WorkPage() {
  return <CaseStudiesPage />;
}

