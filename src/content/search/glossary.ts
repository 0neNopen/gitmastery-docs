import type { SearchDocument } from "@/types/search";

/**
 * Glossary terms point at the lesson that actually teaches the term
 * rather than a standalone `/reference/glossary` page, which does not
 * exist. These entries still earn their place next to the lesson
 * entries in `commands.ts`: they carry the vocabulary a beginner
 * searches for ("repo", "PR", "HEAD") but which no lesson title
 * contains, so the term is findable even when the page name isn't.
 *
 * If a real glossary page is built later, repoint these hrefs at its
 * anchors — the ids and keywords stay as they are.
 */
export const glossaryDocuments: SearchDocument[] = [
  {
    id: "glossary-repository",
    category: "Glossary",
    title: "Repository",
    description: "A storage location holding a project's files, complete history, and metadata.",
    href: "/docs/github/repository",
    keywords: ["repo"],
  },
  {
    id: "glossary-commit",
    category: "Glossary",
    title: "Commit",
    description: "A permanent, uniquely-identified snapshot of staged changes.",
    href: "/docs/git/commit",
  },
  {
    id: "glossary-branch",
    category: "Glossary",
    title: "Branch",
    description: "A movable pointer to a commit, enabling isolated lines of development.",
    href: "/docs/git/branch",
  },
  {
    id: "glossary-merge",
    category: "Glossary",
    title: "Merge",
    description: "Combining the commit history of two branches into one.",
    href: "/docs/git/merge",
  },
  {
    id: "glossary-fork",
    category: "Glossary",
    title: "Fork",
    description: "A copy of someone else's repository into your own account, for independent changes.",
    href: "/docs/github/repository",
  },
  {
    id: "glossary-head",
    category: "Glossary",
    title: "HEAD",
    description: "A pointer to the commit or branch currently checked out in your working directory.",
    href: "/docs/git/branch",
  },
  {
    id: "glossary-remote",
    category: "Glossary",
    title: "Remote",
    description: "A version of your repository hosted elsewhere, such as on GitHub.",
    href: "/docs/git/remote",
  },
  {
    id: "glossary-pull-request",
    category: "Glossary",
    title: "Pull Request (PR)",
    description: "A request to merge changes from one branch or fork into another, with review.",
    href: "/docs/github/pull-request",
    keywords: ["pr"],
  },
];
