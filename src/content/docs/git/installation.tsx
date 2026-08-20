import type { LessonContent } from "@/types/lesson";

export const installation: LessonContent = {
  title: "Instalasi Git",
  seoTitle: "Cara Install Git di Windows, macOS, dan Linux",
  description: "Panduan praktis memasang Git di Windows, macOS, dan Linux beserta cara verifikasinya.",
  objectives: [
    "Mampu menginstal Git sesuai sistem operasi yang digunakan",
    "Mengetahui cara memverifikasi keberhasilan instalasi Git",
  ],
  explanation: (
    <>
      <p>
        Sebelum mulai praktik, Git harus terpasang terlebih dahulu di komputermu. Langkah instalasi
        sangat mudah dan biasanya selesai dalam beberapa menit.
      </p>
      <p>
        <strong>Windows:</strong> Unduh file instalasi resmi dari <code>git-scm.com</code> lalu jalankan.
        Kamu bisa memilih opsi default dengan menekan &ldquo;Next&rdquo; hingga selesai. Setelah itu, buka
        aplikasi <strong>Git Bash</strong> yang otomatis terpasang. Git Bash menyediakan antarmuka terminal
        berbasis Unix yang sangat nyaman untuk menjalankan seluruh perintah di buku ini.
      </p>
      <p>
        <strong>macOS:</strong> Cara termudah adalah melalui Homebrew dengan perintah{" "}
        <code>brew install git</code>. Selain itu, macOS juga biasanya menawarkan instalasi otomatis
        alat pengembang Xcode Command Line Tools saat kamu mengetik <code>git</code> pertama kali di Terminal.
      </p>
      <p>
        <strong>Linux:</strong> Gunakan manajer paket bawaan distro kamu. Untuk keluarga Ubuntu/Debian,
        cukup jalankan perintah <code>sudo apt update && sudo apt install git</code>.
      </p>
      <p>
        Setelah proses instalasi selesai, verifikasi keberhasilannya dengan mengetik perintah{" "}
        <code>git --version</code> di terminal. Jika nomor versi muncul, artinya Git sudah siap digunakan.
      </p>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `# Windows: download & install dari git-scm.com, lalu buka Git Bash\n\n# macOS (via Homebrew)\n$ brew install git\n\n# Ubuntu / Debian\n$ sudo apt update\n$ sudo apt install git\n\n# Cek instalasi (berlaku untuk semua sistem operasi)\n$ git --version`,
  },
  output: {
    label: "output",
    code: `git version 2.43.0`,
  },
  commonMistakes: (
    <p>
      Jika setelah instalasi muncul pesan &ldquo;command not found&rdquo;, biasanya aplikasi terminal perlu
      dimuat ulang. Tutup dan buka kembali jendela terminal kamu agar path sistem diperbarui.
    </p>
  ),
  tips: (
    <p>
      Untuk pengguna Windows, disarankan selalu menggunakan <strong>Git Bash</strong> agar kompatibel
      dengan sintaks perintah yang dicontohkan di panduan ini.
    </p>
  ),
  summary: (
    <p>
      Git dapat dipasang dengan mudah di berbagai platform OS. Gunakan <code>git --version</code> untuk
      memastikan instalasi berhasil dan siap dipakai bekerja.
    </p>
  ),
  exercise: (
    <p>
      Pasang Git di komputer kamu sesuai OS yang digunakan, lalu jalankan <code>git --version</code> di
      terminal untuk memastikan versinya tampil dengan benar.
    </p>
  ),
};
