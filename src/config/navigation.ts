import type { NavGroup, NavLink } from "@/types/navigation";

export const primaryNavLinks: NavLink[] = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Tutorial", href: "/tutorials/project-pertamaku" },
  { label: "Workflows", href: "/docs/github/pull-request" },
  { label: "Perintah Git", href: "/docs/git/commit" },
];

export const footerColumns: NavGroup[] = [
  {
    title: "Belajar Git",
    items: [
      { label: "Pengenalan Git", href: "/docs/git/introduction" },
      { label: "Commit", href: "/docs/git/commit" },
      { label: "Branch", href: "/docs/git/branch" },
    ],
  },
  {
    title: "Belajar GitHub",
    items: [
      { label: "Pengenalan GitHub", href: "/docs/github/introduction" },
      { label: "Pull Request", href: "/docs/github/pull-request" },
      { label: "Tutorial Proyek", href: "/tutorials/project-pertamaku" },
    ],
  },
  {
    title: "Referensi",
    items: [
      { label: "Cheat Sheet", href: "/reference/cheat-sheet" },
      { label: "Glossary", href: "/reference/glossary" },
      { label: "FAQ", href: "/reference/faq/git-vs-github" },
    ],
  },
  {
    title: "Lainnya",
    items: [
      { label: "Troubleshooting", href: "/troubleshooting/merge-conflict" },
      { label: "Tentang", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
