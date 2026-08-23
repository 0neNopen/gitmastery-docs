/**
 * Site-wide constants used by metadata, sitemap, and robots — kept in
 * one place so the production URL (or site name/description) is never
 * typed twice and drifting out of sync between files.
 *
 * The URL is read from `NEXT_PUBLIC_SITE_URL` when set, falling back to
 * localhost for development. Set the variable at build/deploy time to
 * the real production origin (no trailing slash) — `metadataBase`,
 * canonical URLs, `sitemap.ts`, and `robots.ts` all derive from it.
 */
export const siteConfig = {
  name: "GitMastery",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "GitMastery | Dokumentasi & Panduan Git Lengkap",
  description: "Dokumentasi modern dan panduan langkah-demi-langkah untuk Git dan GitHub.",
};
