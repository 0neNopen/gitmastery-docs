import { searchDocuments } from "./search-documents";
import { searchIndex } from "@/content/search";
import type { SearchDocument } from "@/types/search";

/**
 * The search function every page passes to `SearchBar`. Centralizing
 * it here means the ranking logic and the corpus it runs against are
 * swappable in one place — e.g. replacing this with an Algolia
 * DocSearch or Pagefind call later touches only this file, not every
 * `Navbar`/`DocsLayout` usage across the site.
 */
export function searchDocs(query: string): SearchDocument[] {
  return searchDocuments(query, searchIndex);
}
