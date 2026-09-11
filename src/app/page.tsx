import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: 'Digital Growth Engineering, Enterprise Web Platforms & SEO',
  description: 'ISD Info Solutions engineers high-converting digital platforms, performance marketing systems, and cloud architectures for ambitious modern brands.',
};

export default function Home() {
  return <HomePage />;
}

