import type { LessonContent } from "@/types/lesson";

export const introduction: LessonContent = {
  title: "Apa Itu Git?",
  seoTitle: "Apa Itu Git? - Panduan Git untuk Pemula",
  description:
    "Kenalan dengan Git dari nol: mulai dari pengertian, alasan penggunaannya, hingga masalah nyata yang diselesaikannya.",
  objectives: [
    "Paham pengertian Git tanpa istilah teknis yang membingungkan",
    "Mengetahui masalah nyata yang dapat diselesaikan oleh Git",
    "Memahami perbedaan mendasar antara Git dan GitHub",
  ],
  explanation: (
    <>
      <p>
        Git secara sederhana adalah alat untuk <strong>menyimpan riwayat perubahan</strong> pada
        file proyek kamu. Setiap kali selesai mengerjakan sesuatu (misalnya menambah halaman baru
        atau memperbaiki bug), kamu bisa &ldquo;menyimpan&rdquo; kondisi proyek pada titik tersebut.
        Jika di kemudian hari dibutuhkan, kamu bisa kembali ke titik riwayat mana pun yang pernah
        disimpan dengan mudah.
      </p>
      <p>
        Bayangkan saat kamu membuat proyek bernama <code>belajar-git</code> yang berisi file{" "}
        <code>index.html</code> dan <code>README.md</code>. Tanpa Git, orang biasanya menyimpan
        versi cadangan dengan menduplikasi folder secara manual: <code>belajar-git-fix</code>,{" "}
        <code>belajar-git-fix-banget</code>, hingga <code>belajar-git-final</code>. Lama-kelamaan,
        kamu akan bingung menentukan folder mana yang berisi versi paling baru dan benar-benar siap
        digunakan.
      </p>
      <p>
        Git menyelesaikan masalah tersebut secara rapi. Kamu cukup memiliki satu folder saja, namun
        seluruh riwayat perubahannya tercatat otomatis di dalamnya. Kamu bisa melihat kapan
        perubahan dibuat, apa saja baris yang diubah, dan kembali ke versi sebelumnya kapan pun
        tanpa perlu membuat banyak folder duplikat.
      </p>
      <p>
        Analoginya, Git mirip seperti fitur &ldquo;riwayat versi&rdquo; di Google Docs. Kamu terus
        menulis, dan setiap titik simpan tersimpan rapi untuk dibuka kembali. Bedanya, Git dirancang
        khusus untuk baris kode, dan kamu yang memegang kendali penuh kapan titik simpan tersebut
        dibuat.
      </p>
    </>
  ),
  tips: (
    <p>
      Git dan GitHub adalah dua hal yang berbeda meskipun namanya mirip. <strong>Git</strong> adalah
      aplikasi pengontrol versi yang berjalan langsung di komputer lokal kamu.{" "}
      <strong>GitHub</strong> adalah layanan berbasis web tempat menyimpan repositori Git di
      internet agar mudah dicadangkan dan dikolaborasikan bersama tim. Git bisa digunakan tanpa
      GitHub, sedangkan GitHub memerlukan Git untuk berfungsi.
    </p>
  ),
  codeExample: {
    label: "bash",
    code: `$ git --version`,
  },
  output: {
    label: "output",
    code: `git version 2.43.0`,
  },
  summary: (
    <p>
      Git adalah alat untuk mencatat riwayat perubahan file proyek secara bertahap sehingga kamu
      tidak perlu menduplikasi folder secara manual. Sedangkan GitHub adalah platform online untuk
      menyimpan dan membagikan repositori Git di internet.
    </p>
  ),
  exercise: (
    <p>
      Coba ingat kembali tugas atau proyek yang pernah kamu simpan dengan nama folder berbeda
      (misalnya <code>tugas-final</code> atau <code>tugas-revisi-2</code>). Bayangkan jika proyek
      tersebut dikelola dengan Git, semua versi lama tersimpan rapi hanya dalam satu folder utama.
    </p>
  ),
};
