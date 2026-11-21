import type { NavGroup, NavLink } from "@/types/navigation";

/**
 * Single primary navigation bar shared consistently across the homepage
 * and every documentation/reference page.
 */
export const primaryNavLinks: NavLink[] = [
  { label: "Dokumentasi", href: "/docs/git/introduction" },
  { label: "Roadmap", href: "/curriculum" },
  { label: "Tutorial", href: "/tutorials/project-pertamaku" },
  { label: "Referensi", href: "/reference/cheat-sheet" },
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
      { label: "Roadmap Belajar", href: "/curriculum" },
      { label: "Cheat Sheet", href: "/reference/cheat-sheet" },
      { label: "Glosarium", href: "/reference/glossary" },
      { label: "FAQ", href: "/reference/faq/git-vs-github" },
    ],
  },
  {
    title: "Lainnya",
    items: [
      { label: "Troubleshooting", href: "/troubleshooting/merge-conflict" },
      { label: "Tentang", href: "/about" },
      { label: "Kebijakan Privasi", href: "/privacy" },
      { label: "Syarat & Ketentuan", href: "/terms" },
    ],
  },
];
