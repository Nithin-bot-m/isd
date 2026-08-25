'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Megaphone,
  Cpu,
  GraduationCap,
  CloudCog,
  ArrowRight,
  Sparkles,
  Calculator,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/magnetic';
import { cn } from '@/lib/utils';

const servicesList = [
  {
    title: 'Digital Marketing & SEO',
    desc: 'Performance marketing, SEO, and paid demand generation.',
    href: '/services/digital-marketing',
    icon: Megaphone,
    badge: 'Demand Engine',
  },
  {
    title: 'AI Platforms & Automation',
    desc: 'Custom intelligent platforms, internal workflows & apps.',
    href: '/services/ai-platforms',
    icon: Cpu,
    badge: 'AI Systems',
  },
  {
    title: 'Education Marketing',
    desc: 'Enrollment strategy and admissions funnel journeys.',
    href: '/services/education-marketing',
    icon: GraduationCap,
    badge: 'Higher-Ed',
  },
  {
    title: 'Salesforce DevOps & CRM',
    desc: 'Release management, org CI/CD, and data governance.',
    href: '/services/salesforce-devops',
    icon: CloudCog,
    badge: 'Enterprise',
  },
];

const mainNavLinks = [
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on click outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile drawer on route change
  React.useEffect(() => {
    setOpen(false);
    setServicesMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-3 sm:top-5 z-[90] pointer-events-none px-3 sm:px-6 lg:px-8 transition-all duration-300">
      {/* Floating Island Stadium / Pill Container */}
      <nav
        className={cn(
          'pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3 sm:gap-6 rounded-full border border-border/80 bg-white/95 dark:bg-card/95 px-4 sm:px-6 py-2.5 shadow-xl backdrop-blur-2xl ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300',
          scrolled
            ? 'shadow-2xl shadow-black/10 dark:shadow-black/50 border-border/90 py-2 sm:py-2.5 scale-[0.99]'
            : 'shadow-lg shadow-black/5 dark:shadow-black/30'
        )}
      >
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <Magnetic as="div" className="inline-flex">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="ISD Info Solutions home"
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border/60 bg-white p-0.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/company-logo.png"
                  alt="ISD Info Solutions"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain rounded-full"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-[0.95rem] font-extrabold tracking-tight leading-none text-foreground">
                  ISD <span className="font-semibold text-muted-foreground text-xs sm:text-sm">INFO SOLUTIONS</span>
                </span>
                <span className="text-[0.62rem] font-semibold tracking-wider uppercase text-[var(--accent)] leading-tight hidden sm:block">
                  Build Growth Intelligently
                </span>
              </div>
            </Link>
          </Magnetic>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 xl:gap-2 lg:flex" ref={menuRef}>
          {/* Services / Programs Dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setServicesMenuOpen((v) => !v)}
              onMouseEnter={() => setServicesMenuOpen(true)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.92rem] font-medium transition-colors',
                pathname?.startsWith('/services') || servicesMenuOpen
                  ? 'text-[var(--accent)] font-semibold bg-[var(--accent)]/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              )}
              aria-expanded={servicesMenuOpen}
            >
              Services
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform duration-200',
                  servicesMenuOpen && 'rotate-180 text-[var(--accent)]'
                )}
              />
            </button>

            {/* Mega Dropdown Menu */}
            <AnimatePresence>
              {servicesMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  onMouseLeave={() => setServicesMenuOpen(false)}
                  className="absolute left-0 top-full mt-3 w-[520px] rounded-3xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:ring-white/10"
                >
                  <div className="mb-3 flex items-center justify-between border-b border-border/80 px-2 pb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Core Practices & Solutions
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setServicesMenuOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline"
                    >
                      All Services
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {servicesList.map((srv) => {
                      const Icon = srv.icon;
                      return (
                        <Link
                          key={srv.href}
                          href={srv.href}
                          onClick={() => setServicesMenuOpen(false)}
                          className="group flex flex-col rounded-2xl border border-transparent p-3 transition-all hover:border-[var(--accent)]/30 hover:bg-muted/70"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="font-heading text-sm font-semibold transition-colors group-hover:text-[var(--accent)]">
                              {srv.title}
                            </span>
                          </div>
                          <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">
                            {srv.desc}
                          </p>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3.5 rounded-2xl bg-muted/50 p-3 text-xs text-muted-foreground flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
                      All services connect under one unified strategy.
                    </span>
                    <Link
                      href="/contact"
                      onClick={() => setServicesMenuOpen(false)}
                      className="font-semibold text-[var(--accent)] hover:underline"
                    >
                      Get Audit &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Standard Navigation Links */}
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative inline-block rounded-full px-3.5 py-1.5 text-[0.92rem] font-medium transition-colors',
                    isActive
                      ? 'text-[var(--accent)] font-semibold bg-[var(--accent)]/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-[var(--accent)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Primary Vibrant "Book a Strategy Call" Pill Button with Hover Elevation */}
          <Magnetic as="div" className="hidden sm:inline-flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 hover:bg-cyan-300 text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-black px-5 sm:px-6 py-2 text-[0.88rem] font-bold shadow-md shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-400/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Strategy Call
            </Link>
          </Magnetic>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-border/80 bg-background/60 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-[var(--accent)]"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </button>
          )}

          {/* Mobile Hamburger Drawer Toggle */}
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/80 bg-card text-muted-foreground lg:hidden hover:bg-muted transition-colors"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Floating below the Island) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-border/90 bg-card/95 p-6 backdrop-blur-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 lg:hidden"
          >
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Services
                </span>
                <div className="mt-2 grid gap-1 pl-1">
                  {servicesList.map((srv) => (
                    <Link
                      key={srv.href}
                      href={srv.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/70 hover:text-[var(--accent)] transition-colors"
                    >
                      <span>{srv.title}</span>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[0.65rem] font-semibold text-muted-foreground">
                        {srv.badge}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Navigation
                </span>
                <div className="mt-2 grid gap-1 pl-1">
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2 font-heading text-base font-semibold transition-colors hover:bg-muted/70 hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full bg-cyan-400 py-3.5 text-sm font-bold text-black shadow-md hover:bg-cyan-300 transition-colors"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

