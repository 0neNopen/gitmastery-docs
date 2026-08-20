import type { LessonContent } from "@/types/lesson";
import { gitDocs } from "./git";
import { githubDocs } from "./github";

/**
 * Mirrors the requested folder structure exactly:
 *
 * docs/
 * ├── git/     → gitDocs
 * └── github/  → githubDocs
 *
 * This nested object is the single source every other part of the
 * system reads from — routing (`generateStaticParams`), the sidebar
 * (`getSidebarGroups`), Previous/Next (`getDocNavigation`), and search
 * (`content/search/commands.ts`) all derive from this, so none of them
 * can drift out of sync with what content actually exists.
 */
export const docsRegistry: Record<string, Record<string, LessonContent>> = {
  git: gitDocs,
  github: githubDocs,
};

export function getDocPage(category: string, slug: string): LessonContent | undefined {
  return docsRegistry[category]?.[slug];
}
