"use client";

import { useCallback } from "react";

import { SearchBar } from "./SearchBar";
import { searchDocuments } from "@/lib/search/search-documents";
import type { SearchDocument } from "@/types/search";

export interface DocsSearchProps {
  /**
   * Plain serializable search corpus built on the server (in `Navbar`).
   * Passing metadata as props keeps all 20+ JSX lesson/tutorial files
   * completely out of the client JS bundle while preserving the single
   * source of truth in `content/search`.
   */
  documents: SearchDocument[];
}

export function DocsSearch({ documents }: DocsSearchProps) {
  const handleQuery = useCallback(
    (query: string) => searchDocuments(query, documents),
    [documents]
  );

  return <SearchBar onQuery={handleQuery} placeholder="Cari dokumentasi..." />;
}
