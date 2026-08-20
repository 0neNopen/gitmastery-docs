import type { SearchDocument } from "@/types/search";

/**
 * FAQ answers point at the lesson that covers the question, since no
 * standalone `/reference/faq` page exists. They stay in the index
 * because they match how a beginner phrases a problem ("undo my last
 * commit") rather than how a lesson is titled.
 */
export const faqDocuments: SearchDocument[] = [
  {
    id: "faq-git-vs-github",
    category: "FAQ",
    title: "What's the difference between Git and GitHub?",
    description:
      "Git is a local version control tool; GitHub is a cloud platform for hosting Git repositories.",
    href: "/reference/faq/git-vs-github",
  },
  {
    id: "faq-always-online",
    category: "FAQ",
    title: "Do I need to be online to use Git?",
    description: "No. Git is distributed, so commits and history work fully offline.",
    href: "/reference/faq/offline",
    keywords: ["offline"],
  },
  {
    id: "faq-undo-last-commit",
    category: "FAQ",
    title: "How do I undo my last commit?",
    description: "Use git reset or git revert depending on whether history has been shared.",
    href: "/reference/faq/undo-commit",
    keywords: ["git reset", "git revert", "undo"],
  },
  {
    id: "faq-main-branch",
    category: "FAQ",
    title: "What is the 'main' branch?",
    description: "The default branch representing your project's stable, production-ready state.",
    href: "/reference/faq/main-branch",
  },
  {
    id: "faq-fork-vs-branch",
    category: "FAQ",
    title: "When should I use a fork instead of a branch?",
    description: "Fork when you don't have write access to the original repository; branch when you do.",
    href: "/reference/faq/fork-vs-branch",
  },
];
