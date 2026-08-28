import Link from 'next/link';
import Image from 'next/image';
import { footerServiceLinks, footerCompanyLinks } from '@/lib/data';
import { ShieldCheck, Mail, Phone, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto bg-[#0A0F1D] text-white relative overflow-hidden border-t border-white/10">
      {/* Subtle atmospheric glow */}
      <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-[#0284C7]/10 blur-[120px] pointer-events-none" />
      <div className="grid-overlay absolute inset-0 opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 border-b border-white/10 pb-12 sm:pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3 group" aria-label="ISD Info Solutions home">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/20 bg-white p-0.5 shadow-md transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/company-logo.png"
                  alt="ISD Info Solutions"
                  width={40}
                  height={40}
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <span className="font-heading text-lg font-extrabold tracking-tight text-white">
                ISD <span className="font-medium text-slate-400">INFO SOLUTIONS</span>
              </span>
            </Link>
            <p className="mt-6 font-heading text-xs font-bold uppercase tracking-[0.14em] text-sky-400">
              Digital Growth, Engineered.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              We partner with ambitious brands to build digital experiences that convert, scale, and endure.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          <FooterCol title="Services" items={footerServiceLinks} />
          <FooterCol title="Company" items={footerCompanyLinks} />

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Contact & Support</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:sudhanvaev@isdinfosolutions.com"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition-all hover:translate-x-0.5 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                  sudhanvaev@isdinfosolutions.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919164416665"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition-all hover:translate-x-0.5 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                  +91 91644 16665
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 ISD Info Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="group inline-flex items-center gap-1 text-sm text-slate-300 transition-all duration-200 hover:translate-x-0.5 hover:text-white"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100 text-sky-400" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

