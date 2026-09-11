import type { Metadata } from 'next';
import { industries } from '@/lib/data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find(
    (i) => i.id.toLowerCase() === slug?.toLowerCase() || (i.slug && i.slug.toLowerCase() === slug?.toLowerCase())
  );

  if (!industry) {
    const formattedSlug = slug
      ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
      : 'Sector Detail';
    return {
      title: `${formattedSlug} — Industry Practice`,
      description: `Specialized digital growth playbooks and technical solutions for ${formattedSlug} by ISD Info Solutions.`,
      openGraph: {
        title: `${formattedSlug} | ISD Info Solutions`,
        description: `Specialized digital growth playbooks for ${formattedSlug} by ISD Info Solutions.`,
      },
    };
  }

  return {
    title: `${industry.title} — Industry Practice`,
    description: industry.description || industry.longDescription,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.title} | ISD Info Solutions`,
      description: industry.description,
    },
  };
}

export default function IndustrySlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
