import type { Metadata } from 'next';
import { servicePages } from '@/lib/services-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages[slug];

  if (!page) {
    const formattedSlug = slug
      ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
      : 'Service Detail';
    return {
      title: `${formattedSlug} — Service Practice`,
      description: `Explore specialized ${formattedSlug} capabilities and digital growth architectures from ISD Info Solutions.`,
      openGraph: {
        title: `${formattedSlug} | ISD Info Solutions`,
        description: `Explore specialized ${formattedSlug} capabilities from ISD Info Solutions.`,
      },
    };
  }

  const cleanDesc = page.intro.length > 160
    ? page.intro.slice(0, 157).replace(/\s+\S*$/, '') + '...'
    : page.intro;

  return {
    title: `${page.title} — Practice Area`,
    description: cleanDesc,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${page.title} | ISD Info Solutions`,
      description: cleanDesc,
    },
  };
}

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
