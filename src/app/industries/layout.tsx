import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/industries',
  },
  title: 'Industries We Serve — Sector Growth Architecture',
  description: 'Specialized digital growth playbooks, performance engines, and technology architectures tailored for Education, B2B SaaS, Enterprise, and Healthcare.',
  openGraph: {
    title: 'Industries | ISD Info Solutions',
    description: 'Specialized digital growth playbooks tailored for Education, B2B SaaS, Enterprise, and Healthcare.',
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
