import type { Metadata } from 'next';
import ServiceDetailPage from '../[slug]/page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/enterprise-solutions',
  },
  title: 'Enterprise Solution Engineering™ — Web Systems & Architecture',
  description: 'Scalable cloud architectures, high-performance web systems, and secure API infrastructure built for enterprise reliability and velocity.',
  openGraph: {
    title: 'Enterprise Solution Engineering™ | ISD Info Solutions',
    description: 'Scalable cloud architectures, high-performance web systems, and secure API infrastructure built for enterprise scale.',
  },
};

export default function EnterpriseSolutionsPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'enterprise-solutions' })} />;
}

