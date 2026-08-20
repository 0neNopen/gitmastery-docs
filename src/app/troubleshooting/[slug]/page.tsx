import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LessonTemplate } from "@/components/lesson/LessonTemplate";
import { troubleshooting, troubleshootingOrder } from "@/content/troubleshooting";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

interface TroubleshootingPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return troubleshootingOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TroubleshootingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = troubleshooting[slug];
  if (!lesson) return {};

  return buildPageMetadata({
    title: lesson.seoTitle ?? lesson.title,
    description: lesson.description,
    path: `/troubleshooting/${slug}`,
  });
}

export default async function TroubleshootingPage({ params }: TroubleshootingPageProps) {
  const { slug } = await params;
  const lesson = troubleshooting[slug];

  if (!lesson) notFound();

  const currentIndex = troubleshootingOrder.indexOf(slug);
  const previousSlug = currentIndex > 0 ? troubleshootingOrder[currentIndex - 1] : undefined;
  const nextSlug = currentIndex < troubleshootingOrder.length - 1 ? troubleshootingOrder[currentIndex + 1] : undefined;

  const previous = previousSlug
    ? {
        label: troubleshooting[previousSlug]!.title,
        href: `/troubleshooting/${previousSlug}`,
      }
    : undefined;
  const next = nextSlug
    ? {
        label: troubleshooting[nextSlug]!.title,
        href: `/troubleshooting/${nextSlug}`,
      }
    : undefined;

  return (
    <LessonTemplate
      lesson={lesson}
      href={`/troubleshooting/${slug}`}
      categoryLabel="Troubleshooting"
      categoryHref={`/troubleshooting/${troubleshootingOrder[0]}`}
      previous={previous}
      next={next}
    />
  );
}
