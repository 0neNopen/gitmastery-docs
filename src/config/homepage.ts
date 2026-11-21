import type { LucideIcon } from "lucide-react";
import { Terminal, CloudCog, History, RefreshCw, GitMerge, BookOpen } from "lucide-react";

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
      "Pahami konsep version control, staging, commit, dan branching dari nol hingga mahir di lingkungan lokal.",
    href: "/docs/git/introduction",
    icon: Terminal,
    accent: "primary",
  },
  {
    title: "Kolaborasi GitHub",
    description:
      "Kenali GitHub mulai dari membuat akun dan repositori hingga alur Pull Request serta kolaborasi tim.",
    href: "/docs/github/introduction",
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
    href: "/docs/github/remote",
    icon: RefreshCw,
    accent: "tertiary",
  },
  {
    title: "Menggabungkan Branch",
    description:
      "Strategi merge dan cara menyelesaikan konflik saat dua baris pekerjaan bertemu.",
    href: "/docs/git/merge",
    icon: GitMerge,
    accent: "primary",
  },
  {
    title: "Tutorial Proyek",
    description:
      "Praktik langsung dari nol: buat proyek, git init, commit, hubungkan ke GitHub, hingga git push pertamamu.",
    href: "/tutorials/project-pertamaku",
    icon: BookOpen,
    accent: "tertiary",
  },
];
