import { tutorials } from "@/content/tutorials";
import type { SearchDocument } from "@/types/search";

/**
 * Derived from the tutorial registry, same DRY reasoning as
 * `commands.ts` — a tutorial is both a page and a search result the
 * moment it's registered, nothing to keep in sync separately.
 * Categorized as "Lesson" since tutorials are learning content, same
 * as the getting-started material this category was created for.
 */
export const tutorialDocuments: SearchDocument[] = Object.entries(tutorials).map(
  ([slug, tutorial]): SearchDocument => ({
    id: `tutorial-${slug}`,
    category: "Lesson",
    title: tutorial.title,
    description: tutorial.description,
    href: `/tutorials/${slug}`,
  })
);
