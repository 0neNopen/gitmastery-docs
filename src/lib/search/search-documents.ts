import type { SearchDocument } from "@/types/search";

/**
 * Scores how well a single field matches a single query term.
 * Exact match ranks highest, then prefix match, then substring —
 * cheap string operations only, no regex backtracking risk.
 */
function scoreField(fieldValue: string, term: string): number {
  const value = fieldValue.toLowerCase();
  if (value === term) return 100;
  if (value.startsWith(term)) return 80;
  if (value.includes(term)) return 50;
  return 0;
}

/**
 * Ranks the corpus against a query and returns the top matches.
 *
 * Deliberately simple and dependency-free: the entire corpus is a few
 * dozen documents held in memory, so a fuzzy-matching library
 * (Fuse.js, MiniSearch, etc.) would add bundle weight without adding
 * real relevance — plain substring/prefix scoring over an in-memory
 * array is both fast (no network round-trip, no index build step at
 * request time) and easy to reason about.
 *
 * Multi-word queries are split into terms; each document's score is
 * the sum, across terms, of that term's best match across the title
 * (weighted highest), keywords, and description (weighted lowest) —
 * so "git commit" scores the git-commit page highly even though no
 * single field contains that exact phrase.
 */
export function searchDocuments(
  query: string,
  documents: SearchDocument[],
  limit = 8
): SearchDocument[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  const terms = trimmed.split(/\s+/);

  return documents
    .map((doc) => {
      const score = terms.reduce((total, term) => {
        const titleScore = scoreField(doc.title, term) * 2;
        const keywordScore = Math.max(0, ...(doc.keywords ?? []).map((k) => scoreField(k, term)));
        const descriptionScore = scoreField(doc.description, term) * 0.5;
        return total + Math.max(titleScore, keywordScore, descriptionScore);
      }, 0);

      return { doc, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((result) => result.doc);
}
