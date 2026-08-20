import { docsStructure } from "@/config/docs-structure";
import { docsRegistry } from "@/content/docs";
import { tutorials } from "@/content/tutorials";
import type { AdjacentPage } from "@/types/navigation";

export interface DocNavigation {
  previous?: AdjacentPage;
  next?: AdjacentPage;
}

interface SequenceEntry {
  category: string;
  slug: string;
  label: string;
  href: string;
}

/**
 * Flattens the entire learning path into one continuous sequence:
 * every registered Git lesson, then every registered GitHub lesson (in
 * `docsStructure` order), then every registered tutorial. This is what
 * makes "Next" carry a reader from the last Git lesson straight into
 * the first GitHub lesson, and from the last GitHub lesson into the
 * capstone tutorial — matching the site's intended end-to-end flow
 * (Git → GitHub → Project Pertamaku) rather than stopping dead at each
 * category's edge.
 *
 * An earlier version of this file scoped navigation to one category at
 * a time specifically to *prevent* crossing from Git into GitHub —
 * that was the wrong call once the two categories are meant to read as
 * one continuous course rather than two unrelated references.
 */
function getFullSequence(): SequenceEntry[] {
  const docEntries: SequenceEntry[] = docsStructure.flatMap((category) =>
    category.order.flatMap((slug) => {
      const lesson = docsRegistry[category.slug]?.[slug];
      // Unregistered slugs drop out of the sequence entirely, so
      // Previous/Next never points at a page that does not exist.
      if (!lesson) return [];
      return [
        {
          category: category.slug,
          slug,
          label: lesson.title,
          href: `/docs/${category.slug}/${slug}`,
        },
      ];
    })
  );

  const tutorialEntries: SequenceEntry[] = Object.entries(tutorials).map(([slug, tutorial]) => ({
    category: "tutorial",
    slug,
    label: tutorial.title,
    href: `/tutorials/${slug}`,
  }));

  return [...docEntries, ...tutorialEntries];
}

/**
 * Resolves Previous/Next for any point in the sequence — a doc lesson
 * (`category` is "git"/"github") or a tutorial (`category` is
 * "tutorial"). Only registered pages are ever considered, so a slug
 * that doesn't exist yet is transparently skipped rather than crashing
 * or linking somewhere broken.
 */
export function getDocNavigation(category: string, slug: string): DocNavigation {
  const sequence = getFullSequence();
  const index = sequence.findIndex((entry) => entry.category === category && entry.slug === slug);
  if (index === -1) return {};

  const previous = sequence[index - 1];
  const next = sequence[index + 1];

  return {
    previous: previous ? { label: previous.label, href: previous.href } : undefined,
    next: next ? { label: next.label, href: next.href } : undefined,
  };
}
