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
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Magnetic } from '@/components/magnetic';
import { cn } from '@/lib/utils';

const servicesList = [
  {
    title: 'Digital Growth Engineering™',
    desc: 'Total discovery: SEO, AEO, GEO, and high-converting demand generation.',
    href: '/services/digital-marketing',
    icon: Megaphone,
    badge: 'Growth Engine',
  },
  {
    title: 'Enterprise Solution Engineering™',
    desc: 'Intelligent digital systems, AI workflows, custom platforms & automation.',
    href: '/services/enterprise-solutions',
    icon: Cpu,
    badge: 'Enterprise & AI',
  },
  {
    title: 'Education Ecosystem Engineering™',
    desc: 'Admissions funnel journeys, institutional positioning, and EdTech growth.',
    href: '/services/education-marketing',
    icon: GraduationCap,
    badge: 'Education',
  },
  {
    title: 'Salesforce & Copado DevOps',
    desc: 'Release management, automated CI/CD, and data governance.',
    href: '/services/salesforce-devops',
    icon: CloudCog,
    badge: 'DevOps & CI/CD',
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

  // Prevent background scrolling when mobile menu is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

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
          'pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3 sm:gap-6 rounded-full border border-border/80 bg-white/90 dark:bg-[#0B1120]/90 px-3.5 sm:px-6 py-2 sm:py-2.5 shadow-xl backdrop-blur-2xl ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300',
          scrolled
            ? 'shadow-2xl shadow-black/10 dark:shadow-black/60 border-[#0284C7]/20 py-2 sm:py-2.5 scale-[0.99]'
            : 'shadow-lg shadow-black/5 dark:shadow-black/30'
        )}
      >
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Magnetic as="div" className="inline-flex shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
              aria-label="ISD Info Solutions home"
            >
              <div className="relative h-8 w-8 sm:h-9 sm:w-9 shrink-0 overflow-hidden rounded-full border border-border/60 bg-white p-0.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/company-logo.png"
                  alt="ISD Info Solutions"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain rounded-full"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading text-[0.85rem] sm:text-[0.95rem] font-extrabold tracking-tight leading-none text-foreground truncate">
                  ISD <span className="font-semibold text-muted-foreground text-[0.72rem] sm:text-xs">INFO SOLUTIONS</span>
                </span>
                <span className="text-[0.58rem] sm:text-[0.62rem] font-bold tracking-wider uppercase text-[#0284C7] dark:text-[#38BDF8] leading-tight hidden xs:block sm:block">
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
                'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.92rem] font-medium transition-all duration-200 cursor-pointer',
                pathname?.startsWith('/services') || servicesMenuOpen
                  ? 'text-[#0284C7] dark:text-[#38BDF8] font-bold bg-[#0284C7]/10 dark:bg-[#38BDF8]/15'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              )}
              aria-expanded={servicesMenuOpen}
            >
              Services
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform duration-200',
                  servicesMenuOpen && 'rotate-180 text-[#0284C7] dark:text-[#38BDF8]'
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
                  className="absolute left-0 top-full mt-3 w-[580px] rounded-3xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:ring-white/10"
                >
                  <div className="mb-3 flex items-center justify-between border-b border-border/80 px-2 pb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Core Practices & Solutions
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setServicesMenuOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] dark:text-[#38BDF8] hover:underline"
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
                          className="group flex flex-col rounded-2xl border border-transparent p-3 transition-all duration-200 hover:border-[#0284C7]/30 hover:bg-muted/70"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#0284C7]/10 text-[#0284C7] dark:bg-[#38BDF8]/15 dark:text-[#38BDF8] transition-colors group-hover:bg-[#0284C7] group-hover:text-white dark:group-hover:bg-[#38BDF8] dark:group-hover:text-[#030712]">
                                <Icon className="h-4 w-4" />
                              </div>
                              <span className="font-heading text-[0.88rem] font-bold text-foreground transition-colors group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]">
                                {srv.title}
                              </span>
                            </div>
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
                      <Sparkles className="h-3.5 w-3.5 text-[#0284C7] dark:text-[#38BDF8]" />
                      All services connect under one unified architecture.
                    </span>
                    <Link
                      href="/contact"
                      onClick={() => setServicesMenuOpen(false)}
                      className="font-bold text-[#0284C7] dark:text-[#38BDF8] hover:underline"
                    >
                      Get Audit &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'nav-link inline-flex items-center rounded-full px-3.5 py-1.5 text-[0.92rem] font-medium transition-all duration-200',
                    isActive
                      ? 'text-[#0284C7] dark:text-[#38BDF8] font-bold bg-[#0284C7]/10 dark:bg-[#38BDF8]/15'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                  )}
                  data-active={isActive}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Section Actions: CTA, Theme Toggle, Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop Strategy Button */}
          <Magnetic as="div" className="hidden sm:inline-flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0284C7] to-[#0369A1] px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#0284C7]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#0284C7]/30 hover:scale-[1.02] cursor-pointer"
            >
              Book Strategy Call
            </Link>
          </Magnetic>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border border-border/80 bg-background/60 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-[#0284C7] cursor-pointer"
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
            className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border border-border/80 bg-card text-muted-foreground lg:hidden hover:bg-muted transition-colors cursor-pointer"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4.5 w-4.5 sm:h-5 sm:w-5" /> : <Menu className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-foreground" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu & Backdrop Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto z-[-1]"
              aria-hidden
            />

            {/* Floating Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto mx-auto mt-2 max-h-[82vh] overflow-y-auto rounded-3xl border border-border/90 bg-card/98 p-5 sm:p-6 backdrop-blur-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 lg:hidden"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                    Core Practices & Solutions
                  </span>
                  <div className="mt-2 grid gap-1.5">
                    {servicesList.map((srv) => {
                      const Icon = srv.icon;
                      return (
                        <Link
                          key={srv.href}
                          href={srv.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-2xl p-2.5 text-sm font-medium text-foreground hover:bg-muted/70 hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#0284C7]/10 text-[#0284C7] dark:bg-[#38BDF8]/15 dark:text-[#38BDF8]">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <span className="font-semibold text-xs sm:text-sm">{srv.title}</span>
                          </div>
                          <span className="rounded-full bg-muted px-2 py-0.5 text-[0.62rem] font-semibold text-muted-foreground shrink-0">
                            {srv.badge}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-border pt-3.5">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                    Navigation
                  </span>
                  <div className="mt-2 grid gap-1">
                    {mainNavLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-3 py-2 font-heading text-sm sm:text-base font-semibold transition-colors hover:bg-muted/70 hover:text-[#0284C7] dark:hover:text-[#38BDF8]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] py-3 text-sm font-bold text-white shadow-md hover:from-[#0369A1] hover:to-[#075985] transition-all"
                  >
                    Book a Strategy Call
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
