import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ISD Info Solutions | Build Growth Intelligently",
  description:
    "We build high-performance websites, craft strategic SEO campaigns, and manage digital marketing that drives measurable business growth.",
  keywords: [
    "ISD Info Solutions",
    "Digital Growth Engineering",
    "Education Ecosystem Engineering",
    "Salesforce & Copado DevOps",
    "Enterprise Solutions",
    "Growth Strategy",
  ],
  authors: [{ name: "ISD Info Solutions" }],
  icons: {
    icon: "/company-logo.png",
  },
  openGraph: {
    title: "ISD Info Solutions — Build Growth Intelligently",
    description:
      "Strategy-led. Tech-enabled. Outcome-focused. Integrated digital marketing, AI platforms, education marketing, and Salesforce DevOps.",
    siteName: "ISD Info Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISD Info Solutions",
    description: "Build Growth Intelligently.",
  },
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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
