import { notFound, redirect } from "next/navigation";

import { docsStructure, getDocsCategory } from "@/config/docs-structure";

interface DocsCategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return docsStructure.map((category) => ({ category: category.slug }));
}

export default async function DocsCategoryIndexPage({ params }: DocsCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getDocsCategory(categorySlug);
  const firstSlug = category?.order[0];

  if (!category || !firstSlug) notFound();

  redirect(`/docs/${category.slug}/${firstSlug}`);
}
