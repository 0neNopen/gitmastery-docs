import type { SearchDocument } from "@/types/search";

/**
 * "Introduction", "What is Version Control?", "Installing Git", and
 * "Configuring Git" used to live here as standalone entries, but all
 * four now exist as real pages in `content/docs/git` (see
 * `commands.ts`) — keeping them here too would mean every one of those
 * topics shows up twice in search results.
 *
 * Empty for now — kept as a file (rather than deleted) so a future
 * standalone "Lesson"-category topic that doesn't fit under `/docs/git`
 * or `/docs/github` has an obvious place to go.
 */
export const lessonDocuments: SearchDocument[] = [];
