import type { SearchDocument } from "@/types/search";

/**
 * High-value standalone pages that live outside `/docs/{git,github}`
 * and `/tutorials` (the Roadmap, Cheat Sheet, and Glossary index) so
 * beginners searching for "roadmap", "kurikulum", "cheat sheet", or
 * "glosarium" always land directly on the right page.
 */
export const lessonDocuments: SearchDocument[] = [
  {
    id: "page-curriculum",
    category: "Lesson",
    title: "Roadmap Belajar Git & GitHub",
    description:
      "Urutan belajar Git dan GitHub dari nol hingga siap berkolaborasi dalam tim.",
    href: "/curriculum",
    keywords: ["roadmap", "kurikulum", "curriculum", "panduan", "urutan belajar", "alur belajar"],
  },
  {
    id: "page-cheat-sheet",
    category: "Lesson",
    title: "Git Cheat Sheet",
    description:
      "Daftar lengkap perintah Git yang paling sering dipakai: setup, operasi harian, branch, remote, dan undo.",
    href: "/reference/cheat-sheet",
    keywords: ["cheat sheet", "cheatsheet", "daftar perintah", "referensi cepat", "ringkasan", "command"],
  },
  {
    id: "page-glossary",
    category: "Lesson",
    title: "Glosarium Git & GitHub",
    description:
      "Kumpulan istilah penting dalam Git dan GitHub beserta definisi singkatnya.",
    href: "/reference/glossary",
    keywords: ["glossary", "glosarium", "kamus", "istilah", "definisi"],
  },
];
