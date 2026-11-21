import { gitDocs } from "@/content/docs/git";
import { githubDocs } from "@/content/docs/github";
import type { SearchDocument } from "@/types/search";

/**
 * Every Git and GitHub lesson is already registered in
 * `content/docs/git` and `content/docs/github` for the documentation
 * routes. Rather than maintaining a second list for search, this
 * derives search documents directly from those same registries — add
 * a lesson once, and it's a page, a sidebar entry, and a search result
 * all at once.
 *
 * Kept strictly server-side: `Navbar` (a Server Component) passes the
 * resulting plain-data array down to `DocsSearch`, so none of the JSX
 * bodies in `gitDocs`/`githubDocs` ever enter the client JS bundle.
 */
export const commandDocuments: SearchDocument[] = [
  ...Object.entries(gitDocs).map(([slug, lesson]): SearchDocument => {
    const plainSlug = slug.replace(/-/g, " ");
    return {
      id: `git-${slug}`,
      category: "Command",
      title: lesson.title,
      description: lesson.description,
      href: `/docs/git/${slug}`,
      keywords: Array.from(new Set([slug, plainSlug, `git ${plainSlug}`])),
    };
  }),
  ...Object.entries(githubDocs).map(([slug, lesson]): SearchDocument => {
    const plainSlug = slug.replace(/-/g, " ");
    return {
      id: `github-${slug}`,
      category: "GitHub",
      title: lesson.title,
      description: lesson.description,
      href: `/docs/github/${slug}`,
      keywords: Array.from(new Set([slug, plainSlug, `github ${plainSlug}`])),
    };
  }),
];
