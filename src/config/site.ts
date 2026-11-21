/**
 * Resolves the canonical public origin without a trailing slash.
 * Prefers explicit `NEXT_PUBLIC_SITE_URL`, then falls back automatically
 * to Vercel's built-in production/deployment URL variables so deployed
 * builds never leak `http://localhost:3000` into canonical/sitemap/robots.
 */
export interface SiteUrlEnv {
  [key: string]: string | undefined;
  NEXT_PUBLIC_SITE_URL?: string;
  VERCEL_PROJECT_PRODUCTION_URL?: string;
  VERCEL_URL?: string;
}

export function resolveSiteUrl(env: SiteUrlEnv = process.env): string {
  const raw =
    env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL.trim()}`
      : "") ||
    (env.VERCEL_URL ? `https://${env.VERCEL_URL.trim()}` : "") ||
    "http://localhost:3000";

  return raw.replace(/\/+$/, "");
}

/**
 * Site-wide constants used by metadata, sitemap, and robots — kept in
 * one place so the production URL (or site name/description) is never
 * typed twice and drifting out of sync between files.
 */
export const siteConfig = {
  name: "GitMastery",
  url: resolveSiteUrl(),
  githubUrl: "https://github.com/0neNopen/gitmastery-docs",
  title: "GitMastery | Dokumentasi & Panduan Git Lengkap",
  description: "Dokumentasi modern dan panduan langkah-demi-langkah untuk Git dan GitHub.",
};
