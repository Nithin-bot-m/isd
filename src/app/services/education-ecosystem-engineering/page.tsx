import type { Metadata } from 'next';
import ServiceDetailPage from '../[slug]/page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/education-ecosystem-engineering',
  },
  title: 'Education Ecosystem Engineering™ — Institutional Growth & Enrollment',
  description: 'Turnkey enrollment platforms, student acquisition ecosystems, and institutional brand positioning for higher ed institutions and edtech innovators.',
  openGraph: {
    title: 'Education Ecosystem Engineering™ | ISD Info Solutions',
    description: 'Turnkey enrollment platforms, student acquisition ecosystems, and institutional brand positioning.',
  },
};

export default function EducationEcosystemEngineeringPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'education-ecosystem-engineering' })} />;
}

