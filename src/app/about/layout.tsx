import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
  title: 'About Us — Mission, Vision & Engineering Culture',
  description: 'Learn about ISD Info Solutions, our engineering-first philosophy, leadership team, and our commitment to building digital platforms that convert and scale.',
  openGraph: {
    title: 'About Us | ISD Info Solutions',
    description: 'Learn about ISD Info Solutions, our engineering-first philosophy, and our leadership team.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
