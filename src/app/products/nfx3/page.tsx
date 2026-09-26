import type { Metadata } from 'next';
import { Nfx3ClientPage } from './nfx3-client-page';

export const metadata: Metadata = {
  title: 'NFX³ (NFX3) — Real-Time Forex & Gold Bullion Intelligence | An ISD Product',
  description:
    'NFX3 (NFX³) is a proprietary financial intelligence platform engineered and operated by ISD Info Solutions. Featuring sub-second XAU/USD gold bullion telemetry, ForexFactory economic calendar synchronization, and CFTC COT institutional flows.',
  alternates: {
    canonical: '/products/nfx3',
  },
  keywords: [
    'NFX3',
    'NFX³',
    'NFX 3',
    'nfx3.com',
    'ISD Info Solutions product',
    'ISD NFX3',
    'Real-time forex intelligence',
    'Gold bullion telemetry',
    'XAUUSD live feed',
    'ForexFactory live calendar',
    'CFTC COT flows',
    'Institutional macro research',
  ],
  openGraph: {
    title: 'NFX³ (NFX3) — Real-Time Forex & Gold Bullion Intelligence | ISD Info Solutions',
    description:
      'Official proprietary market intelligence platform engineered by ISD Info Solutions. Live interbank XAU/USD telemetry, ForexFactory calendar engine, and CFTC COT flows.',
    url: 'https://isdinfosolutions.com/products/nfx3',
    type: 'website',
  },
};

export default function Nfx3ProductPage() {
  return <Nfx3ClientPage />;
}
