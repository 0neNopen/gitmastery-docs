import type { RoadmapStep } from "@/types/roadmap";

/**
 * The linear roadmap requested: Pengenalan → Instalasi → Dasar Git →
 * Branch → Merge → Remote Repository → GitHub → Kolaborasi → Studi
 * Kasus. Hrefs follow the same `/docs/[category]/[slug]` and
 * `/getting-started/[slug]` routing conventions already used elsewhere
 * on the site (some of these lessons aren't written yet — see
 * PROJECT_REVIEW.md — but the links are future-proof: the moment a
 * matching lesson is registered in `content/docs`, these start
 * resolving with no change needed here).
 */
export const roadmapSteps: RoadmapStep[] = [
  {
    id: "pengenalan",
    title: "Pengenalan",
    description: "Pahami apa itu Git dan mengapa version control penting sebelum mulai coding.",
    href: "/docs/git/introduction",
  },
  {
    id: "instalasi",
    title: "Instalasi",
    description: "Install Git di sistem operasi Anda dan verifikasi instalasinya lewat terminal.",
    href: "/docs/git/installation",
  },
  {
    id: "dasar-git",
    title: "Dasar Git",
    description: "Pelajari init, staging, dan commit sebagai fondasi utama setiap workflow Git.",
    href: "/docs/git/init",
  },
  {
    id: "branch",
    title: "Branch",
    description: "Kembangkan fitur secara terpisah tanpa mengganggu kode di branch utama.",
    href: "/docs/git/branch",
  },
  {
    id: "merge",
    title: "Merge",
    description: "Gabungkan riwayat dari branch yang berbeda menjadi satu garis waktu.",
    href: "/docs/git/merge",
  },
  {
    id: "remote-repository",
    title: "Remote Repository",
    description: "Hubungkan repository lokal Anda dengan server remote seperti GitHub.",
    href: "/docs/git/remote",
  },
  {
    id: "github",
    title: "GitHub",
    description: "Kenali GitHub sebagai platform hosting dan kolaborasi berbasis Git.",
    href: "/docs/github/introduction",
  },
  {
    id: "kolaborasi",
    title: "Kolaborasi",
    description: "Pelajari alur kerja Pull Request dan code review dalam tim.",
    href: "/docs/github/pull-request",
  },
  {
    id: "studi-kasus",
    title: "Studi Kasus",
    description: "Terapkan semuanya dalam satu proyek nyata dari nol sampai Pull Request.",
    href: "/tutorials/project-pertamaku",
  },
];
