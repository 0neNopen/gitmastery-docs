import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LessonTemplate } from "@/components/lesson/LessonTemplate";
import { docsStructure, getDocsCategory } from "@/config/docs-structure";
import { docsRegistry, getDocPage } from "@/content/docs";
import { getDocNavigation } from "@/lib/docs/get-doc-navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

interface DocPageProps {
  /** Next.js 15 passes route params as a Promise — must be awaited. */
  params: Promise<{ category: string; slug: string }>;
}

/**
 * Pre-renders every registered lesson across every category at build
 * time. Adding a new lesson — a new file in `content/docs/git/` or
 * `content/docs/github/`, registered in that category's `index.ts` —
 * automatically gets it a static page here, with no route file to
 * create and nothing in this file to touch.
 */
export function generateStaticParams() {
  return docsStructure.flatMap((category) =>
    Object.keys(docsRegistry[category.slug] ?? {}).map((slug) => ({
      category: category.slug,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const lesson = getDocPage(category, slug);
  if (!lesson) return {};

  return buildPageMetadata({
    title: lesson.seoTitle ?? lesson.title,
    description: lesson.description,
    path: `/docs/${category}/${slug}`,
  });
}

/**
 * This single file is every documentation page on the site —
 * `/docs/git/init`, `/docs/github/pull-request`, all of them. It
 * resolves the lesson and its category from the registry, derives
 * Previous/Next from the category's order, and hands everything to
 * `LessonTemplate` — which owns the actual layout. There's nothing
 * page-specific here to duplicate as more lessons are added.
 */
export default async function DocPage({ params }: DocPageProps) {
  const { category: categorySlug, slug } = await params;
  const lesson = getDocPage(categorySlug, slug);
  const category = getDocsCategory(categorySlug);

  if (!lesson || !category) notFound();

  const { previous, next } = getDocNavigation(categorySlug, slug);
  const href = `/docs/${categorySlug}/${slug}`;

  return (
    <LessonTemplate
      lesson={lesson}
      href={href}
      categoryLabel={category.label}
      categoryHref={`/docs/${category.slug}/${category.order[0]}`}
      previous={previous}
      next={next}
    />
  );
}
