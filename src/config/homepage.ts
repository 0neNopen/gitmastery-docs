import type { LucideIcon } from "lucide-react";
import { Terminal, CloudCog, History, Settings2, LockKeyhole, BookOpen } from "lucide-react";

import type { NavGroup, NavLink } from "@/types/navigation";

export interface LearningCategory {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  /** Alternates the icon accent between primary and tertiary, as in the approved design. */
  accent: "primary" | "tertiary";
}

export const learningCategories: LearningCategory[] = [
  {
    title: "Dasar-Dasar Git",
    description:
      "Pahami konsep staging, commit, dan branching dari nol hingga mahir di lingkungan lokal.",
    href: "/docs/git/introduction",
    icon: Terminal,
    accent: "primary",
  },
  {
    title: "Kolaborasi GitHub",
    description:
      "Pelajari alur kerja Pull Request, manajemen issue, dan kolaborasi tim dalam skala besar.",
    href: "/docs/github/pull-request",
    icon: CloudCog,
    accent: "tertiary",
  },
  {
    title: "Riwayat & Log",
    description:
      "Baca sejarah proyek lewat git log, dan pahami bagaimana setiap commit tercatat sebagai titik pulih.",
    href: "/docs/git/log",
    icon: History,
    accent: "primary",
  },
  {
    title: "Sinkronisasi Remote",
    description:
      "Hubungkan repositori lokal ke GitHub, lalu push dan pull perubahan antar mesin dengan aman.",
    href: "/docs/github/push",
    icon: Settings2,
    accent: "tertiary",
  },
  {
    title: "Menggabungkan Branch",
    description:
      "Strategi merge dan cara menyelesaikan konflik saat dua baris pekerjaan bertemu.",
    href: "/docs/git/merge",
    icon: LockKeyhole,
    accent: "primary",
  },
  {
    title: "Tutorial Proyek",
    description: "Praktik langsung dari nol: bikin repo, commit, push, sampai buka Pull Request pertamamu.",
    href: "/tutorials/project-pertamaku",
    icon: BookOpen,
    accent: "tertiary",
  },
];

export const homeNavLinks: NavLink[] = [
  { label: "Dokumentasi", href: "/docs/git/introduction" },
  { label: "Panduan", href: "/curriculum" },
  { label: "Tutorial", href: "/tutorials/project-pertamaku" },
];

/**
 * Every href here resolves to a real page. Links to pages that were
 * never built (`/reference/*`, `/about`, `/privacy`, `/terms`,
 * `/github/github-actions`) were removed rather than left as 404s.
 */
export const homeFooterColumns: NavGroup[] = [
  {
    title: "Materi",
    items: [
      { label: "Dasar Git", href: "/docs/git/introduction" },
      { label: "Alur Kerja Tim", href: "/docs/github/pull-request" },
      { label: "Kurikulum", href: "/curriculum" },
    ],
  },
  {
    title: "Praktik",
    items: [
      { label: "Tutorial Proyek", href: "/tutorials/project-pertamaku" },
      { label: "Commit Pertama", href: "/docs/git/commit" },
      { label: "Clone Repositori", href: "/docs/github/clone" },
    ],
  },
];
