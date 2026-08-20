import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LessonTemplate } from "@/components/lesson/LessonTemplate";
import { faqRegistry, faqOrder } from "@/content/reference/faq";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

interface FaqPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return faqOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: FaqPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = faqRegistry[slug];
  if (!lesson) return {};

  return buildPageMetadata({
    title: lesson.seoTitle ?? lesson.title,
    description: lesson.description,
    path: `/reference/faq/${slug}`,
  });
}

export default async function FaqPage({ params }: FaqPageProps) {
  const { slug } = await params;
  const lesson = faqRegistry[slug];

  if (!lesson) notFound();

  const currentIndex = faqOrder.indexOf(slug);
  const previousSlug = currentIndex > 0 ? faqOrder[currentIndex - 1] : undefined;
  const nextSlug = currentIndex < faqOrder.length - 1 ? faqOrder[currentIndex + 1] : undefined;

  const previous = previousSlug
    ? {
        label: faqRegistry[previousSlug]!.title,
        href: `/reference/faq/${previousSlug}`,
      }
    : undefined;
  const next = nextSlug
    ? {
        label: faqRegistry[nextSlug]!.title,
        href: `/reference/faq/${nextSlug}`,
      }
    : undefined;

  return (
    <LessonTemplate
      lesson={lesson}
      href={`/reference/faq/${slug}`}
      categoryLabel="FAQ"
      categoryHref={`/reference/faq/${faqOrder[0]}`}
      previous={previous}
      next={next}
    />
  );
}
