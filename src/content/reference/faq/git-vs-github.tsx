import type { LessonContent } from "@/types/lesson";

export const gitVsGithub: LessonContent = {
  title: "Apa Perbedaan Git dan GitHub?",
  seoTitle: "Perbedaan Git dan GitHub - Panduan Pemula GitMastery",
  description:
    "Git adalah sistem pengontrol versi di komputer lokal, sedangkan GitHub adalah platform cloud untuk mencadangkan dan mengolaborasikan repositori Git.",
  objectives: [
    "Memahami bahwa Git dan GitHub adalah dua hal yang berbeda",
    "Mengetahui kapan menggunakan Git saja vs kapan membutuhkan layanan GitHub",
    "Mampu menjelaskan hubungan antara repositori lokal dan server remote",
  ],
  explanation: (
    <>
      <p>
        <strong>Git:</strong> Program pengontrol versi yang beroperasi di dalam komputermu. Git
        merekam setiap riwayat perubahan berkas dalam proyek, mencakup siapa yang melakukan perubahan,
        detail modifikasi baris, dan catatan waktunya. Seluruh data tersebut tersimpan rapi di direktori
        tersembunyi <code>.git</code>. Kamu dapat menggunakan Git secara offline.
      </p>
      <p>
        <strong>GitHub:</strong> Layanan web berbasis cloud yang berfungsi sebagai tempat penyimpanan
        repositori Git daring. GitHub bukan bagian inti dari aplikasi Git, melainkan platform pelengkap
        yang menambahkan fitur kolaborasi sosial seperti Pull Request, pelacak isu (Issue Tracker), dan
        portofolio profil developer.
      </p>
      <p>
        Analoginya: Git adalah aplikasi pengolah dokumen (seperti Microsoft Word), sedangkan GitHub adalah
        layanan penyimpanan awan (seperti Google Drive). Kamu dapat memakai Word tanpa Drive, dan kamu juga
        bisa memilih opsi cloud lain (seperti GitLab atau Bitbucket).
      </p>
    </>
  ),
  diagram: {
    caption: "Git (lokal) vs GitHub (cloud)",
    content: (
      <pre className="text-sm font-mono">
        {`Komputer kamu          Internet
┌─────────────────┐    ┌──────────────────────┐
│   Git (lokal)   │    │   GitHub (remote)    │
│                 │    │                      │
│  .git/          │◄──►│  github.com/user/repo│
│  (riwayat)      │    │  (backup + share)    │
└─────────────────┘    └──────────────────────┘
   git commit             git push / git pull`}
      </pre>
    ),
  },
  codeExample: {
    label: "bash",
    code: `# Git bekerja sepenuhnya lokal
git init
git add .
git commit -m "first commit"

# GitHub dibutuhkan untuk push ke cloud
git remote add origin https://github.com/username/repo.git
git push -u origin main`,
  },
  tips: (
    <p>
      Penggunaan GitHub bersifat opsional. Kamu dapat memilih platform remote lain seperti GitLab, Bitbucket,
      maupun hosting server mandiri. Kebutuhan utamanya adalah memahami Git itu sendiri.
    </p>
  ),
  summary: (
    <p>
      Git adalah alat version control yang berjalan di komputermu. GitHub
      adalah platform cloud untuk menyimpan dan berbagi repository Git. Kamu
      bisa belajar dan memakai Git sepenuhnya tanpa GitHub, tapi GitHub sangat
      membantu saat berkolaborasi dengan tim atau menyimpan backup online.
    </p>
  ),
  exercise: (
    <p>
      Buat repositori Git lokal baru dengan <code>git init</code>, tambahkan satu file, lalu lakukan commit.
      Lakukan seluruh langkah ini tanpa membuka browser internet untuk membuktikan bahwa Git beroperasi penuh secara lokal.
    </p>
  ),
};
