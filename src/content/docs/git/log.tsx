import type { LessonContent } from "@/types/lesson";

export const log: LessonContent = {
  title: "Melihat Riwayat Commit",
  seoTitle: "Git Log - Cara Melihat Riwayat Commit",
  description: "Menelusuri seluruh titik riwayat commit yang pernah disimpan di dalam repositori.",
  objectives: [
    "Memahami fungsi dasar dan tampilan git log",
    "Mampu membaca riwayat commit ringkas dengan opsi --oneline",
  ],
  explanation: (
    <>
      <p>
        Setelah membuat beberapa titik commit, kamu dapat melihat linimasa pengembangan proyek
        menggunakan perintah <code>git log</code>. Perintah ini menampilkan seluruh daftar commit yang
        pernah dibuat di repositori, diurutkan dari yang paling baru hingga yang paling awal.
      </p>
      <p>
        Setiap entri commit memuat kode unik (disebut <em>commit hash</em>), nama dan email pembuat,
        tanggal pembuatan, serta pesan deskripsi commit yang kamu tulis.
      </p>
      <p>
        Jika riwayat sudah cukup panjang, kamu dapat menggunakan format ringkas satu baris:{" "}
        <code>git log --oneline</code>. Opsi ini menyajikan commit dalam format yang sangat bersih dan
        mudah dipindai secara cepat.
      </p>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `$ git log --oneline`,
  },
  output: {
    label: "output",
    code: `a1b2c3d Menambahkan file pertama`,
  },
  tips: (
    <p>
      Ketika daftar log sangat panjang dan terminal masuk ke mode pager, tekan huruf <code>q</code> pada
      keyboard untuk keluar dan kembali ke baris perintah terminal.
    </p>
  ),
  commonMistakes: (
    <p>
      Menjalankan <code>git log</code> di repositori yang baru saja dibuat namun belum memiliki commit
      pertama. Pastikan kamu sudah melakukan <code>git commit</code> minimal satu kali agar riwayat
      dapat ditampilkan.
    </p>
  ),
  summary: (
    <p>
      <code>git log</code> menyajikan rekaman linimasa proyek kamu secara lengkap, sedangkan{" "}
      <code>git log --oneline</code> memberikan ringkasan satu baris yang praktis untuk melihat urutan
      riwayat dengan cepat.
    </p>
  ),
  exercise: (
    <p>
      Di dalam proyek <code>belajar-git</code>, lakukan perubahan kecil pada file <code>README.md</code>,
      simpan dengan commit baru, lalu jalankan <code>git log --oneline</code> untuk memastikan kedua
      baris riwayat commit muncul berurutan.
    </p>
  ),
};
