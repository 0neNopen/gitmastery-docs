import type { GlossaryEntry } from "@/types/glossary";

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: "repository",
    term: "Repository (Repo)",
    description:
      "Folder proyek yang dilacak oleh Git, berisi semua file dan riwayat perubahan lengkap sejak pertama kali dibuat.",
    relatedLesson: {
      label: "Pelajari git init",
      href: "/docs/git/init",
    },
  },
  {
    slug: "commit",
    term: "Commit",
    description:
      "Snapshot dari keadaan proyek pada satu titik waktu. Setiap commit menyimpan perubahan yang kamu buat beserta pesan yang menjelaskan mengapa perubahan itu dibuat.",
    relatedLesson: {
      label: "Pelajari git commit",
      href: "/docs/git/commit",
    },
  },
  {
    slug: "branch",
    term: "Branch",
    description:
      "Jalur pengembangan terpisah di dalam repository yang sama. Branch memungkinkan kamu bekerja pada fitur baru tanpa mengganggu kode utama di branch main.",
    relatedLesson: {
      label: "Pelajari git branch",
      href: "/docs/git/branch",
    },
  },
  {
    slug: "merge",
    term: "Merge",
    description:
      "Proses menggabungkan perubahan dari satu branch ke branch lain. Git otomatis menggabungkan perubahan yang tidak konflik, dan meminta bantuan manual jika ada konflik.",
    relatedLesson: {
      label: "Pelajari git merge",
      href: "/docs/git/merge",
    },
  },
  {
    slug: "fork",
    term: "Fork",
    description:
      "Salinan penuh repository milik orang lain ke akun GitHub-mu sendiri. Digunakan untuk berkontribusi ke proyek open source tanpa memiliki akses write ke repository asli.",
    relatedLesson: {
      label: "Pelajari Fork vs Branch",
      href: "/reference/faq/fork-vs-branch",
    },
  },
  {
    slug: "head",
    term: "HEAD",
    description:
      "Pointer yang menunjukkan ke commit mana kamu sedang berada saat ini. Biasanya HEAD menunjuk ke ujung branch aktif.",
    relatedLesson: {
      label: "Pelajari Detached HEAD",
      href: "/troubleshooting/detached-head",
    },
  },
  {
    slug: "remote",
    term: "Remote",
    description:
      "Versi repository yang tersimpan di server lain (seperti GitHub). Remote memungkinkan kolaborasi tim: kamu mengunggah (push) perubahan lokal ke remote dan menarik (pull) pembaruan rekan tim dari server tersebut.",
    relatedLesson: {
      label: "Pelajari git remote",
      href: "/docs/git/remote",
    },
  },
  {
    slug: "pull-request",
    term: "Pull Request (PR)",
    description:
      "Permintaan untuk menggabungkan perubahan dari satu branch (atau fork) ke branch lain. Pull request adalah tempat code review dan diskusi terjadi sebelum kode di-merge.",
    relatedLesson: {
      label: "Pelajari Pull Request",
      href: "/docs/github/pull-request",
    },
  },
];
