/**
 * The entire documentation information architecture lives here. Adding
 * a new lesson slug to a category's `order` — and writing its content
 * file — is the only step needed to make it show up in the sidebar,
 * get a Previous/Next position, and resolve as a real route. Nothing
 * else in the system (sidebar, breadcrumb, navigation, routing) needs
 * to be told about it separately.
 */
export interface DocsCategory {
  /** URL segment, e.g. "git" → /docs/git/... */
  slug: string;
  /** Display label used in the sidebar and breadcrumb. */
  label: string;
  /** Lesson slugs in the order they should appear and be navigated through. */
  order: string[];
}

export const docsStructure: DocsCategory[] = [
  {
    slug: "git",
    label: "Git",
    order: [
      "introduction",
      "version-control",
      "installation",
      "configuration",
      "init",
      "status",
      "commit",
      "log",
      "branch",
      "merge",
      "remote",
    ],
  },
  {
    slug: "github",
    label: "GitHub",
    order: [
      "introduction",
      "account",
      "repository",
      "remote",
      "push",
      "pull",
      "clone",
      "pull-request",
    ],
  },
];

export function getDocsCategory(categorySlug: string): DocsCategory | undefined {
  return docsStructure.find((category) => category.slug === categorySlug);
}
