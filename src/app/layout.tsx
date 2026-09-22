import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { JsonLd } from "@/components/json-ld";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://isdinfosolutions.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "ISD Info Solutions | Enterprise Digital Growth, Web Platforms & AI",
    template: "%s | ISD Info Solutions",
  },
  description:
    "ISD Info Solutions engineers high-converting web platforms, omni-channel search & AI discoverability (SEO, GEO), custom AI systems, and enterprise cloud architectures.",
  keywords: [
    "ISD Info Solutions",
    "isd infosolutions",
    "isd info solutions reviews",
    "ISD",
    "Digital Growth Engineering",
    "Generative Engine Optimization",
    "GEO AI Search",
    "Education Ecosystem Engineering",
    "Salesforce & Copado DevOps",
    "Enterprise Solutions",
    "Growth Strategy",
    "Full-Stack Web Development",
  ],
  authors: [{ name: "ISD Info Solutions", url: "https://isdinfosolutions.com" }],
  creator: "ISD Info Solutions",
  publisher: "ISD Info Solutions",
  icons: {
    icon: "/company-logo.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "ISD Info Solutions — Enterprise Digital Growth & AI Solutions",
    description:
      "Strategy-led. Tech-enabled. Outcome-focused. Integrated digital marketing, AI platforms, education marketing, and Salesforce DevOps.",
    url: "https://isdinfosolutions.com",
    siteName: "ISD Info Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/company-logo.png",
        width: 1200,
        height: 630,
        alt: "ISD Info Solutions — Digital Growth, Engineered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISD Info Solutions — Enterprise Digital Growth & AI Solutions",
    description: "Build Growth Intelligently with ISD Info Solutions.",
    images: ["/company-logo.png"],
    creator: "@ISDInfoSol",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} overflow-x-hidden w-full max-w-full`}>
      <body
        className="antialiased bg-background text-foreground overflow-x-hidden w-full max-w-full relative"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <CustomCursor />
          <ScrollProgress />
          <JsonLd />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
