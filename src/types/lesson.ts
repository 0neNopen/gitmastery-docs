import type { ReactNode } from "react";

/**
 * The fixed shape of every documentation page on the site: Title,
 * Description, Learning Objectives, Explanation, Diagram, Code Example,
 * Output, Tips, Common Mistakes, Summary, and Exercise.
 *
 * Deliberately has no `slug` or `category` field. Both are already
 * fully determined by *where* a lesson is registered — the object key
 * in `content/docs/git/index.ts` is its slug, and which folder it lives
 * in is its category — so storing them again inside the content object
 * would just be a second place for that information to drift out of
 * sync with the registry key.
 *
 * `LessonTemplate` is the only component that knows how to lay these
 * fields out — every actual page is just an object matching this shape.
 * Diagram, Output, Tips, and Common Mistakes are optional because not
 * every page needs all four — the template quietly omits a section
 * (and its TOC entry) when its data is absent.
 */
export interface LessonContent {
  title: string;
  description: string;
  /**
   * Natural, human-written `<title>` tag text for search engines and
   * browser tabs — e.g. "Git Commit - Panduan Git untuk Pemula". Kept
   * separate from `title` (the in-page `<h1>`) because a good SEO
   * title and a good on-page heading don't always want identical
   * phrasing: `title` can stay a short, exact command name ("git
   * commit"), while `seoTitle` adds the descriptive, keyword-relevant
   * context search results benefit from. Falls back to a generic
   * `"{title} | GitMastery"` (via the root layout's title template) if
   * omitted, but every registered lesson should have one — search
   * engines de-prioritize pages with generic, repetitive titles.
   */
  seoTitle?: string;
  objectives: string[];
  explanation: ReactNode;
  diagram?: {
    caption: string;
    content: ReactNode;
  };
  codeExample: {
    label?: string;
    code: string;
  };
  output?: {
    label?: string;
    code: string;
  };
  tips?: ReactNode;
  commonMistakes?: ReactNode;
  summary: ReactNode;
  exercise: ReactNode;
}
