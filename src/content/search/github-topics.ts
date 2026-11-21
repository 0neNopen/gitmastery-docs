import type { SearchDocument } from "@/types/search";

/**
 * All real GitHub lessons live in `content/docs/github` and are already
 * indexed automatically by `commands.ts`. Previously this array held
 * placeholder entries ("GitHub Actions", "Branch Protection Rules",
 * "Conflict Resolution") pointed at unrelated lessons, which caused
 * misleading search results. Kept empty so future standalone GitHub
 * guides can be added here only once their pages actually exist.
 */
export const githubDocuments: SearchDocument[] = [];
