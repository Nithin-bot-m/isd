import Link from 'next/link';
import Image from 'next/image';
import { footerServiceLinks, footerCompanyLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--carbon)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/company-logo.png"
                alt="ISD Info Solutions"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-contain shadow-md transition-transform duration-200 group-hover:scale-105"
              />
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                ISD <span className="font-medium text-white/50">Info Solutions</span>
              </span>
            </Link>
            <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.12em] text-[var(--teal)]">
              Digital Growth, Engineered.
            </p>
            <p className="mt-3 max-w-sm leading-relaxed text-white/70">
              We partner with ambitious brands to build digital experiences that convert, scale, and endure.
            </p>
          </div>

          <FooterCol title="Services" items={footerServiceLinks} />
          <FooterCol title="Company" items={footerCompanyLinks} />

          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@isdinfosolutions.com"
                  className="inline-block text-sm text-white/70 transition-all hover:translate-x-0.5 hover:text-white"
                >
                  hello@isdinfosolutions.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="inline-block text-sm text-white/70 transition-all hover:translate-x-0.5 hover:text-white"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-white/60 sm:flex-row">
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
      <h3 className="font-heading font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="inline-block text-sm text-white/70 transition-all hover:translate-x-0.5 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
