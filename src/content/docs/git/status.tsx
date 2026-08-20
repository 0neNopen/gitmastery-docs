import type { LessonContent } from "@/types/lesson";

export const status: LessonContent = {
  title: "Melihat Status Project",
  seoTitle: "Git Status - Cek Perubahan File di Git",
  description: "Perintah utama yang paling sering digunakan untuk mengecek status dan perubahan file proyek.",
  objectives: [
    "Memahami fungsi dasar dan output git status",
    "Bisa membaca status file yang belum tercatat (untracked)",
  ],
  explanation: (
    <>
      <p>
        <code>git status</code> adalah perintah untuk melihat kondisi terkini repositori kamu, seperti
        file mana yang baru saja diubah, file baru yang belum terlacak, atau file yang siap disimpan.
        Ini adalah perintah navigasi penting yang akan sering kamu ketik untuk memantau progres.
      </p>
      <p>
        Coba praktikkan di proyek <code>belajar-git</code> yang telah dibuat sebelumnya. Jika repositori
        masih kosong, <code>git status</code> akan menampilkan pesan <em>nothing to commit, working tree clean</em>,
        artinya tidak ada berkas yang berubah atau perlu disimpan.
      </p>
      <p>
        Sekarang coba buat file baru bernama <code>index.html</code>. Jalankan <code>git status</code>{" "}
        kembali. Git akan menampilkan bahwa terdapat file baru yang belum terlacak di bawah daftar{" "}
        <em>Untracked files</em>.
      </p>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `$ git status`,
  },
  output: {
    label: "output (setelah index.html dibuat)",
    code: `On branch main\n\nNo commits yet\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\tindex.html\n\nnothing added to commit but untracked files present (use "git add" to track)`,
  },
  tips: (
    <p>
      Jadikan <code>git status</code> sebagai kebiasaan rutin: jalankan sebelum dan sesudah kamu
      melakukan perubahan file. Ini langkah termudah untuk menghindari kekeliruan sebelum menyimpan
      perubahan.
    </p>
  ),
  commonMistakes: (
    <p>
      Mengabaikan <code>git status</code> dan langsung melakukan commit tanpa memeriksa daftar file
      terlebih dahulu. Terkadang ada file konfigurasi sementara atau file rahasia yang tidak sengaja
      ikut tersimpan.
    </p>
  ),
  summary: (
    <p>
      <code>git status</code> memberikan informasi transparan mengenai status berkas di direktori
      kerja kamu, membantu memastikan kondisi repositori selalu terpantau sebelum melangkah ke tahap
      berikutnya.
    </p>
  ),
  exercise: (
    <p>
      Di dalam folder <code>belajar-git</code>, buat file <code>README.md</code> baru lalu jalankan{" "}
      <code>git status</code>. Periksa bagian <em>Untracked files</em> dan pastikan file{" "}
      <code>README.md</code> muncul di daftar tersebut.
    </p>
  ),
};
