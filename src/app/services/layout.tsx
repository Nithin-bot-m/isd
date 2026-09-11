import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services',
  },
  title: 'Strategic Services — Growth, Enterprise & Education Engineering',
  description: 'Explore our specialized practices: Digital Growth Engineering, Enterprise Solution Engineering, Education Ecosystems, and DevOps architectures.',
  openGraph: {
    title: 'Services | ISD Info Solutions',
    description: 'Explore our specialized practices: Digital Growth Engineering, Enterprise Solution Engineering, Education Ecosystems, and DevOps architectures.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
