'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell, PageSection, PageCtaBand } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Mail, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const insightData = [
  {
    id: 'education-funnels',
    category: 'Education Marketing',
    title: 'Why Most Education Marketers Get Enrollment Funnels Wrong',
    excerpt: 'The traditional enrollment funnel is broken. Here\'s how modern higher-ed institutions are restructuring their approach to student acquisition.',
    date: 'December 10, 2025',
    readTime: '6 min read',
  },
  {
    id: 'practical-ai-sales',
    category: 'AI & Automation',
    title: 'Practical AI for Sales Teams: Beyond the Hype',
    excerpt: 'Most AI tools promise transformation but deliver complexity. Learn how to identify and deploy AI solutions that actually move your sales metrics.',
    date: 'November 22, 2025',
    readTime: '8 min read',
  },
  {
    id: 'salesforce-devops-playbook',
    category: 'CRM & DevOps',
    title: 'The Salesforce DevOps Playbook for Growing Companies',
    excerpt: 'From sandbox management to CI/CD pipelines, here\'s the operational framework every scaling Salesforce team needs.',
    date: 'October 15, 2025',
    readTime: '10 min read',
  },
];

const filterCategories = ['All', 'Strategy', 'Digital Marketing', 'AI Platforms', 'Education', 'Salesforce'];

export default function InsightsPage() {
  const [active, setActive] = React.useState('All');
  const [subscribed, setSubscribed] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const filtered = active === 'All'
    ? insightData
    : insightData.filter((i) =>
        i.category.toLowerCase().includes(active.toLowerCase()) || active === 'All'
      );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <PageShell
      eyebrow="Insights"
      title={<>Insights for modern <span className="text-gradient">growth teams</span></>}
      intro="Practical thinking on digital growth, AI, CRM strategy, and the systems that make it all work."
    >
      <PageSection>
        {/* Filter Pills */}
        <Reveal className="mb-12 flex flex-wrap gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                active === cat
                  ? 'bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/20'
                  : 'border border-border bg-card text-muted-foreground hover:text-foreground hover:border-[var(--accent)]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.08}>
                <InsightCard post={post} index={i} />
              </Reveal>
            ))}
          </AnimatePresence>
        </div>
      </PageSection>

      {/* Newsletter Section */}
      <PageSection variant="mist">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-xl md:p-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              <Mail className="h-3.5 w-3.5" />
              Monthly Growth Dispatch
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold md:text-4xl">
              Get insights in your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Join growth leaders who receive our monthly breakdown of what&apos;s working in digital marketing, AI platforms, and CRM strategy — with actionable frameworks you can deploy immediately.
            </p>

            {subscribed ? (
              <div className="mt-8 rounded-2xl bg-[var(--accent)]/10 p-6 text-[var(--accent)] font-semibold">
                🎉 Thank you for subscribing! Watch for our next briefing.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--accent)] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 sm:max-w-xs"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 rounded-xl bg-[var(--accent)] px-7 font-heading text-sm font-semibold text-white shadow-md hover:bg-[color-mix(in_oklch,var(--accent)_85%,black)]"
                >
                  Subscribe
                  <Send className="h-3.5 w-3.5 ml-2" />
                </Button>
              </form>
            )}
            <p className="mt-4 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </div>
        </Reveal>
      </PageSection>

      <PageCtaBand
        title="Need Help Applying These Insights?"
        subtitle="We turn ideas into implementation. Let's talk about how these strategies apply to your business."
        ctaText="Schedule a Consultation"
        ctaHref="/contact"
      />
    </PageShell>
  );
}

function InsightCard({
  post,
  index,
}: {
  post: typeof insightData[number];
  index: number;
}) {
  const gradients = [
    'from-[#0369a1] to-[#0284c7]',
    'from-[#0f172a] to-[#334155]',
    'from-[#0d9488] to-[#14b8a6]',
  ];

  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-xl"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              gradients[index % gradients.length]
            } flex items-center justify-center p-6 text-white text-center font-heading font-bold text-lg`}
          >
            {post.category}
          </div>
        </div>

        <div className="mt-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            {post.category}
          </span>
          <h3 className="mt-2 font-heading text-xl font-bold leading-snug transition-colors group-hover:text-[var(--accent)]">
            {post.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-4 text-xs text-muted-foreground">
        <span>{post.date}</span>
        <span className="font-semibold text-foreground">{post.readTime}</span>
      </div>
    </motion.article>
  );
}
