import { glossaryEntries } from "@/content/reference/glossary";
import type { SearchDocument } from "@/types/search";

const GLOSSARY_KEYWORDS: Record<string, string[]> = {
  repository: ["repo", "repositori", "glossary", "glosarium"],
  commit: ["snapshot", "simpan perubahan", "glossary", "glosarium"],
  branch: ["cabang", "percabangan", "glossary", "glosarium"],
  merge: ["gabung branch", "penggabungan", "glossary", "glosarium"],
  fork: ["salin repo", "open source", "glossary", "glosarium"],
  head: ["pointer", "detached head", "glossary", "glosarium"],
  remote: ["origin", "server", "cloud", "glossary", "glosarium"],
  "pull-request": ["pr", "code review", "glossary", "glosarium"],
};

/**
 * Derived directly from `glossaryEntries` so search results match the
 * Indonesian definitions on `/reference/glossary` and link straight to
 * each term's anchor (`#term-<slug>`).
 */
export const glossaryDocuments: SearchDocument[] = glossaryEntries.map((entry): SearchDocument => ({
  id: `glossary-${entry.slug}`,
  category: "Glossary",
  title: entry.term,
  description: entry.description,
  href: `/reference/glossary#term-${entry.slug}`,
  keywords: GLOSSARY_KEYWORDS[entry.slug],
}));
