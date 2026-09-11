import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/contact',
  },
  title: 'Contact Us — Schedule an Executive Strategy Consultation',
  description: 'Connect directly with ISD Info Solutions leadership to discuss your project brief, scope, and digital growth roadmap.',
  openGraph: {
    title: 'Contact Us | ISD Info Solutions',
    description: 'Connect directly with ISD Info Solutions leadership to discuss your project brief and growth goals.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
