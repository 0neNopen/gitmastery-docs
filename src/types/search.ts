/**
 * The six content types the brief requires to be searchable. Kept as
 * a union rather than separate types per category so the search index,
 * scoring function, and UI can all treat every document identically —
 * a Command and a Glossary term are the same shape, just tagged
 * differently.
 */
export type SearchCategory = "Lesson" | "Command" | "GitHub" | "Case Study" | "FAQ" | "Glossary";

export interface SearchDocument {
  id: string;
  category: SearchCategory;
  title: string;
  description: string;
  href: string;
  /** Extra searchable terms not visible in the title (aliases, related commands). */
  keywords?: string[];
}
