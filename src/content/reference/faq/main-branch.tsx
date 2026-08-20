import type { LessonContent } from "@/types/lesson";

export const mainBranch: LessonContent = {
  title: "Apa Itu Branch 'main'?",
  seoTitle: "Apa Itu Branch main di Git - Panduan Pemula GitMastery",
  description:
    "Branch 'main' adalah cabang utama bawaan di repositori Git yang berfungsi sebagai titik awal proyek dan wadah kode produksi yang stabil.",
  objectives: [
    "Memahami konsep branch default dan fungsinya dalam alur kerja Git",
    "Mengetahui konvensi penamaan main vs master",
    "Mampu membuat dan berpindah branch dari cabang main",
  ],
  explanation: (
    <>
      <p>
        Saat kamu membuat repository baru dengan <code>git init</code> atau
        mengklon dari GitHub, Git otomatis membuat satu branch sebagai titik
        awal. Branch ini disebut <strong>branch default</strong>.
      </p>
      <p>
        Secara historis, branch default bernama <code>master</code>. Sejak
        2020, GitHub mengubah standarnya menjadi <code>main</code>, dan
        sebagian besar platform modern serta tim baru mengikuti konvensi ini.
        Keduanya secara teknis identik, hanya berbeda pada nama cabangnya saja.
      </p>
      <p>
        Konvensi umum: <code>main</code> adalah branch yang menyimpan kode
        stabil dan siap production. Developer biasanya membuat branch baru
        untuk setiap fitur atau perbaikan, lalu merge kembali ke{" "}
        <code>main</code> setelah selesai dan direview.
      </p>
    </>
  ),
  diagram: {
    caption: "Branch main sebagai garis utama pengembangan",
    content: (
      <pre className="text-sm font-mono">
        {`main  ●──●──●──────────────●  (kode stabil)
           \\          /
feature     ●──●──●        (fitur baru, lalu merge)`}
      </pre>
    ),
  },
  codeExample: {
    label: "bash",
    code: `# Cek branch mana yang aktif sekarang
git branch

# Buat branch baru dari main
git checkout -b feature/login

# Kembali ke main
git checkout main

# Rename branch master → main (jika perlu)
git branch -m master main`,
  },
  tips: (
    <p>
      Jangan commit langsung ke <code>main</code> di proyek tim. Buat branch
      baru untuk setiap perubahan, minta code review via pull request, baru
      merge ke <code>main</code>. Ini menjaga <code>main</code> selalu dalam
      kondisi berjalan dan stabil.
    </p>
  ),
  summary: (
    <p>
      Branch <code>main</code> adalah cabang utama yang dibuat secara default. Cabang ini menjadi standar
      rujukan rilis kode. Setiap penambahan fitur baru umumnya dikerjakan di branch terpisah sebelum digabungkan kembali.
    </p>
  ),
  exercise: (
    <p>
      Buat repository baru, periksa nama branch default dengan{" "}
      <code>git branch</code>, buat branch <code>feature/coba-coba</code>,
      tambahkan satu file di sana, commit, lalu merge kembali ke{" "}
      <code>main</code> dengan <code>git merge feature/coba-coba</code>.
    </p>
  ),
};
