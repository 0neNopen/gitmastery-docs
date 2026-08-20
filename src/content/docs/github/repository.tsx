import type { LessonContent } from "@/types/lesson";

export const repository: LessonContent = {
  title: "Membuat Repository GitHub",
  seoTitle: "Cara Membuat Repository di GitHub",
  description: "Membuat wadah repositori online di GitHub untuk menampung proyek belajar-git kamu.",
  objectives: [
    "Memahami konsep repositori daring di GitHub",
    "Mampu membuat repositori baru di GitHub",
    "Mengetahui perbedaan visibilitas Public dan Private",
  ],
  explanation: (
    <>
      <p>
        Repositori di GitHub memiliki konsep yang serupa dengan repositori lokal hasil perintah{" "}
        <code>git init</code>. Bedanya, repositori GitHub berada di server cloud sehingga seluruh riwayat
        commit dapat diakses kapan saja dan dicadangkan secara aman.
      </p>
      <p>Langkah pembuatan repositori:</p>
      <ol>
        <li>
          Login ke akun GitHub, klik tombol <strong>+</strong> di sudut kanan atas, lalu pilih{" "}
          <strong>New repository</strong>.
        </li>
        <li>
          Masukkan nama repositori, misalnya <code>belajar-git</code> (samakan dengan nama folder proyek
          lokal agar mudah dikenali).
        </li>
        <li>Pilih tingkat visibilitas (Public atau Private).</li>
        <li>
          Klik tombol <strong>Create repository</strong>.
        </li>
      </ol>
      <p>
        <strong>Public:</strong> Repositori dapat dilihat oleh siapa saja di internet.{" "}
        <strong>Private:</strong> Repositori hanya dapat diakses oleh kamu dan anggota tim yang kamu undang.
        Untuk tahap latihan, opsi Private sangat cocok jika kamu belum ingin mempublikasikan proyek ke publik.
      </p>
      <p>
        Setelah repositori dibuat, GitHub akan menampilkan halaman panduan berisi instruksi baris perintah
        yang akan kita gunakan untuk menyambungkan repositori lokal ke GitHub pada materi berikutnya.
      </p>
    </>
  ),
  codeExample: {
    label: "url",
    code: `https://github.com/username/belajar-git`,
  },
  tips: (
    <p>
      Jangan centang opsi &ldquo;Add a README file&rdquo; jika proyek lokalmu sudah memiliki file di dalamnya,
      agar proses integrasi awal berjalan mulus tanpa konflik.
    </p>
  ),
  commonMistakes: (
    <p>
      Memberikan nama repositori yang berbeda jauh dari nama folder lokal sehingga menyulitkan pelacakan
      proyek. Selalu gunakan penamaan yang konsisten.
    </p>
  ),
  summary: (
    <p>
      Repositori GitHub adalah wadah daring untuk menyimpan proyek lokal kamu. Buat melalui menu{" "}
      <strong>New repository</strong>, tentukan nama yang relevan, dan atur visibilitas sesuai kebutuhan.
    </p>
  ),
  exercise: (
    <p>
      Buat repositori baru di GitHub bernama <code>belajar-git</code>, atur visibilitasnya sebagai Private,
      dan biarkan seluruh opsi inisialisasi tambahan tetap kosong.
    </p>
  ),
};
