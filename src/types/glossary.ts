/**
 * One term in the standalone Glossary page (`/reference/glossary`).
 *
 * Distinct from `LessonContent`: a glossary entry has no body sections,
 * no diagram, no code example, no exercise — just the term itself,
 * its definition, and (optionally) which lesson teaches it in depth.
 *
 * The anchor id on the rendered page is `term-${slug}` so each entry
 * can be linked from anywhere on the site (e.g. `/reference/glossary#commit`).
 */
export interface GlossaryEntry {
  /** Anchor slug, used in the URL fragment. Lowercase, kebab-case, ASCII only. */
  slug: string;
  /** The term itself, displayed as the heading (e.g. "Pull Request (PR)"). */
  term: string;
  /** One-sentence definition, plain prose. */
  description: string;
  /** Optional lesson that teaches this term in depth. */
  relatedLesson?: {
    label: string;
    href: string;
  };
}