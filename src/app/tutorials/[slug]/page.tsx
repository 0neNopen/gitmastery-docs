import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { TutorialTemplate } from "@/components/tutorial";
import { tutorials } from "@/content/tutorials";
import { getDocNavigation } from "@/lib/docs/get-doc-navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

interface TutorialPageProps {
  /** Next.js 15 passes route params as a Promise — must be awaited. */
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(tutorials).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TutorialPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = tutorials[slug];
  if (!tutorial) return {};

  return buildPageMetadata({
    title: tutorial.seoTitle ?? tutorial.title,
    description: tutorial.description,
    path: `/tutorials/${slug}`,
  });
}

/**
 * This single file is every practical tutorial on the site — same
 * "registry + dynamic route" pattern as `/docs/[category]/[slug]`.
 * Adding a second tutorial never means creating a new page.tsx.
 *
 * `getDocNavigation("tutorial", slug)` connects this page into the same
 * continuous sequence as the doc lessons — e.g. "Previous: Pull
 * Request" — since tutorials are part of the site's overall learning
 * flow, not a separate island.
 */
export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = tutorials[slug];
  if (!tutorial) notFound();

  const { previous, next } = getDocNavigation("tutorial", slug);

  return (
    <TutorialTemplate
      tutorial={tutorial}
      href={`/tutorials/${slug}`}
      previous={previous}
      next={next}
    />
  );
}
