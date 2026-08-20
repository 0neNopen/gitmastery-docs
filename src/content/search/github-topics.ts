import type { SearchDocument } from "@/types/search";

/**
 * "Pull Requests" used to live here as a standalone entry, but it now
 * exists as a real page under `content/docs/github` (see
 * `commands.ts`) — keeping both would mean it shows up twice in
 * search. The remaining topics here have no equivalent under
 * `/docs/github` yet.
 */
export const githubDocuments: SearchDocument[] = [
  {
    id: "github-conflict-resolution",
    category: "GitHub",
    title: "Conflict Resolution & Pull Requests",
    description: "Resolve merge conflicts that arise during a pull request review.",
    href: "/docs/git/merge",
    keywords: ["merge conflict"],
  },
  {
    id: "github-branch-protection",
    category: "GitHub",
    title: "Branch Protection Rules",
    description: "Require reviews, status checks, and prevent force-pushes to key branches.",
    href: "/docs/github/repository",
  },
  {
    id: "github-actions",
    category: "GitHub",
    title: "GitHub Actions",
    description: "Automate testing, linting, and deployment with CI/CD workflows.",
    href: "/docs/github/pull-request",
    keywords: ["ci/cd", "automation", "workflow"],
  },
];
