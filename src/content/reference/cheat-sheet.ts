import type { CheatSheetSection } from "@/types/cheat-sheet";

export const cheatSheetSections: CheatSheetSection[] = [
  {
    slug: "setup",
    title: "Setup Awal",
    intro: "Konfigurasi Git untuk pertama kali di komputer baru",
    rows: [
      {
        command: "git config --global user.name \"Nama Kamu\"",
        description: "Set nama yang muncul di setiap commit",
      },
      {
        command: "git config --global user.email \"email@example.com\"",
        description: "Set email yang terkait dengan setiap commit",
      },
      {
        command: "git config --list",
        description: "Lihat semua konfigurasi Git saat ini",
      },
      {
        command: "git init",
        description: "Buat repository Git baru di folder saat ini",
      },
      {
        command: "git clone <url>",
        description: "Unduh repository dari remote ke lokal",
      },
    ],
  },
  {
    slug: "daily",
    title: "Operasi Harian",
    intro: "Command yang paling sering dipakai setiap hari",
    rows: [
      {
        command: "git status",
        description: "Lihat status file (modified, staged, untracked)",
      },
      {
        command: "git add <file>",
        description: "Tambahkan file ke staging area",
      },
      {
        command: "git add .",
        description: "Tambahkan semua perubahan ke staging area",
      },
      {
        command: "git commit -m \"<message>\"",
        description: "Buat commit dengan pesan",
      },
      {
        command: "git log --oneline",
        description: "Lihat riwayat commit dalam format ringkas",
      },
      {
        command: "git diff",
        description: "Lihat perubahan yang belum di-stage",
      },
      {
        command: "git diff --staged",
        description: "Lihat perubahan yang sudah di-stage",
      },
    ],
  },
  {
    slug: "branch",
    title: "Bekerja dengan Branch",
    intro: "Membuat, berpindah, dan menggabungkan branch",
    rows: [
      {
        command: "git branch",
        description: "Lihat daftar branch lokal",
      },
      {
        command: "git branch <name>",
        description: "Buat branch baru (tapi tidak berpindah ke sana)",
      },
      {
        command: "git switch <branch>",
        description: "Pindah ke branch lain (sintaks modern Git 2.23+)",
      },
      {
        command: "git switch -c <branch>",
        description: "Buat branch baru dan langsung pindah ke sana (modern)",
      },
      {
        command: "git checkout <branch>",
        description: "Pindah ke branch lain (sintaks klasik)",
      },
      {
        command: "git checkout -b <branch>",
        description: "Buat branch baru dan langsung pindah ke sana (klasik)",
      },
      {
        command: "git merge <branch>",
        description: "Gabungkan branch lain ke branch saat ini",
      },
      {
        command: "git branch -d <branch>",
        description: "Hapus branch lokal (hanya jika sudah di-merge)",
      },
      {
        command: "git branch -D <branch>",
        description: "Paksa hapus branch lokal (meski belum di-merge)",
      },
    ],
  },
  {
    slug: "remote",
    title: "Sinkronisasi dengan Remote",
    intro: "Push dan pull perubahan ke/dari GitHub atau remote lain",
    rows: [
      {
        command: "git remote -v",
        description: "Lihat daftar remote yang terkonfigurasi",
      },
      {
        command: "git remote add origin <url>",
        description: "Tambahkan remote baru bernama 'origin'",
      },
      {
        command: "git fetch",
        description: "Unduh perubahan dari remote tanpa merge",
      },
      {
        command: "git pull",
        description: "Unduh dan merge perubahan dari remote",
      },
      {
        command: "git push",
        description: "Kirim commit lokal ke remote",
      },
      {
        command: "git push -u origin <branch>",
        description: "Push branch baru dan set tracking",
      },
      {
        command: "git push --force",
        description: "Paksa push (hati-hati, bisa timpa commit remote!)",
      },
    ],
  },
  {
    slug: "undo",
    title: "Undo & Rollback",
    intro: "Membatalkan perubahan atau commit yang tidak diinginkan",
    rows: [
      {
        command: "git restore <file>",
        description: "Buang perubahan di working directory (belum di-stage)",
      },
      {
        command: "git restore --staged <file>",
        description: "Unstage file (tapi simpan perubahan di working dir)",
      },
      {
        command: "git reset --soft HEAD~1",
        description: "Batalkan commit terakhir, simpan perubahan di staging",
      },
      {
        command: "git reset --hard HEAD~1",
        description: "Batalkan commit terakhir DAN buang semua perubahan",
      },
      {
        command: "git revert <commit>",
        description: "Buat commit baru yang membalik commit tertentu",
      },
      {
        command: "git stash",
        description: "Simpan perubahan sementara tanpa commit",
      },
      {
        command: "git stash pop",
        description: "Kembalikan perubahan yang di-stash terakhir",
      },
    ],
  },
];
