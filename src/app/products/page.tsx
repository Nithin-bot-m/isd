import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Proprietary Products & Venture Platforms | ISD Info Solutions',
  description:
    'Explore proprietary platforms conceived, engineered, and operated by ISD Info Solutions, including NFX3 (NFX³) — institutional real-time forex and gold bullion intelligence.',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Proprietary Products & Venture Engineering"
      title={
        <>
          Software platforms engineered for{' '}
          <span className="text-gradient">real-time scale</span>
        </>
      }
      intro="Beyond enterprise client engagements, ISD conceives, architects, and operates proprietary platforms that solve complex real-world data and market challenges."
    >
      <PageSection>
        <div className="flex flex-col gap-10">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.1}>
              <div className="group grid gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm transition-all hover:border-[#0284C7] hover:shadow-2xl dark:hover:border-[#38BDF8] md:grid-cols-[1.1fr_1fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="rounded-full bg-amber-400/10 dark:bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-500 dark:text-amber-400 border border-amber-400/30">
                      {product.badge || 'Proprietary Platform'}
                    </span>
                    <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[0.7rem] font-semibold text-muted-foreground">
                      {product.category}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {product.longDescription}
                  </p>

                  <div className="mt-6 border-t border-border/80 pt-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      Key Capabilities & Architecture
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs font-medium text-foreground">
                      {product.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button asChild className="rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] font-bold text-white shadow-md">
                      <Link href={product.internalUrl}>
                        Explore Product Architecture
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-xl border-border hover:border-[#0284C7]">
                      <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                        Launch Live Platform
                        <ArrowUpRight className="h-4 w-4 ml-1.5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Visual Bento Preview Card */}
                <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0A0F1D] p-6 text-white shadow-inner">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Live Market Telemetry
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        24/5 Streaming
                      </span>
                    </div>

                    <div className="mt-6">
                      <div className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
                        Spot Bullion Feed (OANDA)
                      </div>
                      <div className="font-mono text-3xl font-black text-white mt-1">
                        XAU/USD $4,349.42
                      </div>
                      <div className="text-xs text-emerald-400 font-mono mt-1 font-semibold">
                        +0.75% session movement
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                      {product.stats.map((s) => (
                        <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                          <div className="font-heading text-lg font-bold text-amber-400">{s.value}</div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
                    <span>100% Educational Macro Telemetry</span>
                    <span className="font-mono text-amber-300">nfx3.com</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageCtaBand
        title="Have an idea for a proprietary SaaS or enterprise platform?"
        subtitle="ISD engineers mission-critical, real-time software systems from concept to scaled production."
        ctaText="Schedule a Platform Architecture Session"
        ctaHref="/contact"
      />
    </PageShell>
  );
}
