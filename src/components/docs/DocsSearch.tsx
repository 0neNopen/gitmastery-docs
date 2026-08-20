"use client";

import { SearchBar } from "./SearchBar";
import { searchDocs } from "@/lib/search/search-docs";

/**
 * Connects `SearchBar` to the site's real search index. Kept as its
 * own tiny client component so `Navbar` (and anything else that wants
 * search) can just render `<DocsSearch />` — no `onSearch` prop to
 * thread through `DocsLayout` → `LessonTemplate` → every page.
 */
export function DocsSearch() {
  return <SearchBar onQuery={searchDocs} placeholder="Cari dokumentasi..." />;
}
