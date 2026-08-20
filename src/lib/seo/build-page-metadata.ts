import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export interface BuildPageMetadataInput {
  /** The natural, human-written title for this specific page (search engines + browser tab). */
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/docs/git/commit". */
  path: string;
  /** Open Graph content type — "article" fits any single documentation/tutorial page; the homepage should pass "website". */
  type?: "article" | "website";
}

/**
 * Assembles a complete per-page `Metadata` object — title, description,
 * canonical URL, and Open Graph — in one place, so every route
 * (`docs/[category]/[slug]`, `tutorials/[slug]`, `curriculum`) gets the
 * same treatment instead of each one hand-rolling its own `openGraph`
 * block slightly differently. `title`/`description` are only ever
 * whatever the caller passes in — this function doesn't invent generic
 * boilerplate text, since every page's copy is meant to be genuinely
 * unique, not templated.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  type = "article",
}: BuildPageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
    },
  };
}
