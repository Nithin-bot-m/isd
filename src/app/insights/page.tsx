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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Newsletter Subscriber',
            email: email,
            phone: 'Not provided',
            company: 'Newsletter Subscriber',
            service: 'Insights Newsletter Subscription',
            timeline: 'Active Subscriber',
            summary: `New subscriber opted in for the Monthly Growth Dispatch newsletter: ${email}`,
            reference: 'ISD-NEWS-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
          }),
        });
      } catch (err) {
        console.error('Newsletter dispatch error:', err);
      }
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
        <Reveal className="mb-12 flex flex-wrap gap-2.5">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                active === cat
                  ? 'bg-[#0284C7] dark:bg-[#38BDF8] text-white dark:text-[#030712] shadow-lg shadow-[#0284C7]/25'
                  : 'border border-border bg-card text-muted-foreground hover:text-foreground hover:border-[#0284C7]/40'
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
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-8 text-center shadow-xl md:p-14 w-full max-w-full">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0284C7] dark:text-[#38BDF8] mb-3">
              <Mail className="h-3.5 w-3.5" />
              Monthly Growth Dispatch
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Get insights in your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground md:text-base">
              Join growth leaders who receive our monthly breakdown of what&apos;s working in digital marketing, AI platforms, and CRM strategy — with actionable frameworks you can deploy immediately.
            </p>

            {subscribed ? (
              <div className="mt-8 rounded-2xl bg-[#0284C7]/10 dark:bg-[#38BDF8]/15 p-6 text-[#0284C7] dark:text-[#38BDF8] font-bold">
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
                  className="h-12 w-full rounded-xl border border-border bg-muted/40 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[#0284C7] focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 sm:max-w-xs font-medium"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] px-7 font-heading text-sm font-bold text-white shadow-md hover:shadow-lg"
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
    'from-[#0369A1] via-[#0284C7] to-[#0EA5E9]',
    'from-[#0F172A] via-[#1E293B] to-[#334155]',
    'from-[#0F766E] via-[#0D9488] to-[#14B8A6]',
  ];

  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all hover:border-[#0284C7] hover:shadow-xl w-full max-w-full overflow-hidden"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-sm">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              gradients[index % gradients.length]
            } flex items-center justify-center p-6 text-white text-center font-heading font-bold text-lg`}
          >
            {post.category}
          </div>
        </div>

        <div className="mt-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
            {post.category}
          </span>
          <h3 className="mt-2 font-heading text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">
            {post.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-4 text-xs text-muted-foreground">
        <span>{post.date}</span>
        <span className="font-bold text-foreground">{post.readTime}</span>
      </div>
    </motion.article>
  );
}

