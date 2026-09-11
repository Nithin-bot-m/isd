import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Sparkles, Compass } from 'lucide-react';

export const metadata = {
  title: '404 — Page Not Found | ISD Info Solutions',
  description: 'The requested page could not be found. Explore our services, case studies, or return to the homepage.',
};

export default function NotFound() {
  const quickLinks = [
    { label: 'Strategic Services', href: '/services', desc: 'Explore our full suite of digital growth and enterprise solutions.' },
    { label: 'Case Studies', href: '/case-studies', desc: 'Read real-world results and proven growth transformations.' },
    { label: 'Industry Insights', href: '/insights', desc: 'Actionable perspectives on SEO, web performance, and AI.' },
    { label: 'Contact Us', href: '/contact', desc: 'Schedule a direct strategic consultation with leadership.' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main id="main-content" className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0284C7] dark:text-[#38BDF8] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Error 404
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Page Not Found
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            The page you are looking for might have been moved, renamed, or temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] font-bold text-white shadow-lg hover:shadow-xl px-6">
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                Return to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl font-bold px-6">
              <Link href="/services" className="inline-flex items-center gap-2">
                <Compass className="h-4 w-4" />
                Explore Services
              </Link>
            </Button>
          </div>

          <div className="mt-14 border-t border-border/80 pt-10 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 text-center sm:text-left">
              Helpful Destinations
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-border bg-card p-4 transition-all duration-200 hover:border-[#0284C7] hover:shadow-md"
                >
                  <div className="font-heading text-sm font-bold text-foreground group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors">
                    {item.label} &rarr;
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {item.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
