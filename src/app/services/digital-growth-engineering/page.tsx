import type { Metadata } from 'next';
import ServiceDetailPage from '../[slug]/page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/digital-growth-engineering',
  },
  title: 'Digital Growth Engineering™ — Performance Marketing & SEO',
  description: 'Full-funnel digital marketing, data-driven SEO, and performance acquisition architectures engineered to drive high-intent pipeline and revenue.',
  openGraph: {
    title: 'Digital Growth Engineering™ | ISD Info Solutions',
    description: 'Full-funnel digital marketing, data-driven SEO, and performance acquisition architectures engineered to drive revenue.',
  },
};

export default function DigitalGrowthEngineeringPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'digital-growth-engineering' })} />;
}

