import type { SearchDocument } from "@/types/search";

/**
 * "Studi Kasus" / troubleshooting scenarios a beginner is likely to hit
 * — merge conflicts, a wrong commit, a failed clone, and so on. As
 * confirmed in `PROJECT_REVIEW.md` and `CONTENT_AUDIT.md`, none of
 * these pages exist yet; they're registered here so the category is
 * genuinely searchable the moment each page is written, following the
 * same `/troubleshooting/[slug]` convention already referenced from
 * the homepage and the Learning Roadmap. Until then, these results
 * will lead to the site's 404 page like any other not-yet-built link
 * on the site — this file does not fabricate content, only an index
 * entry pointing at where that content will live.
 */
export const caseStudyDocuments: SearchDocument[] = [
  {
    id: "case-study-merge-conflict",
    category: "Case Study",
    title: "Mengatasi Merge Conflict",
    description: "Git tidak bisa otomatis menggabungkan dua perubahan yang bentrok di baris yang sama.",
    href: "/troubleshooting/merge-conflict",
    keywords: ["conflict", "konflik", "<<<<<<<", "bentrok"],
  },
  {
    id: "case-study-detached-head",
    category: "Case Study",
    title: "Keluar dari Detached HEAD",
    description: "HEAD tidak menunjuk ke branch mana pun setelah checkout ke sebuah commit langsung.",
    href: "/troubleshooting/detached-head",
    keywords: ["detached head"],
  },
  {
    id: "case-study-salah-commit",
    category: "Case Study",
    title: "Salah Commit, Ingin Membatalkan",
    description: "Commit sudah terlanjur dibuat, tapi ternyata ada file yang seharusnya belum ikut disimpan.",
    href: "/troubleshooting/salah-commit",
    keywords: ["undo commit", "batalkan commit", "git reset"],
  },
  {
    id: "case-study-gagal-clone",
    category: "Case Study",
    title: "Gagal Clone Repository",
    description: "git clone gagal karena masalah URL, koneksi, atau izin akses repository.",
    href: "/troubleshooting/gagal-clone",
    keywords: ["clone error", "permission denied"],
  },
  {
    id: "case-study-push-ditolak",
    category: "Case Study",
    title: "Push Ditolak (Rejected)",
    description: "GitHub menolak git push karena ada perubahan di remote yang belum diambil ke lokal.",
    href: "/troubleshooting/push-ditolak",
    keywords: ["rejected", "non-fast-forward", "push ditolak"],
  },
];
