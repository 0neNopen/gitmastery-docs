import type { LessonContent } from "@/types/lesson";

export const introduction: LessonContent = {
  title: "Apa Itu GitHub?",
  seoTitle: "Apa Itu GitHub? - Panduan GitHub untuk Pemula",
  description: "Mengenal GitHub sebagai platform daring untuk menyimpan, mencadangkan, dan mengolaborasikan repositori Git.",
  objectives: [
    "Memahami pengertian dan fungsi utama GitHub",
    "Mengetahui hubungan serta perbedaan mendasar antara Git dan GitHub",
    "Memahami alasan developer dan tim industri menggunakan GitHub",
  ],
  explanation: (
    <>
      <p>
        Kamu sudah menguasai alur kerja Git di komputer lokal: mulai dari <code>git init</code>,{" "}
        <code>git add</code>, <code>git commit</code>, hingga <code>git branch</code> dan{" "}
        <code>git merge</code>. Seluruh proses tersebut berlangsung di komputer lokalmu. Lalu, bagaimana
        jika kamu ingin mencadangkan proyek tersebut ke cloud atau bekerja bersama developer lain di
        berbagai tempat?
      </p>
      <p>
        Di sinilah <strong>GitHub</strong> hadir. GitHub adalah platform berbasis web yang menyediakan
        layanan hosting untuk repositori Git kamu, sehingga dapat diakses dari mana saja dan dibagikan
        ke rekan kerja dengan mudah.
      </p>
      <p>
        Analoginya: Git adalah buku catatan kerja pribadi yang merekam setiap coretan ide kamu,
        sedangkan GitHub adalah perpustakaan digital tempat kamu menyimpan salinan buku tersebut agar
        bisa dibaca dan dikembangkan bersama orang lain.
      </p>
      <p>
        Perlu diingat bahwa Git dan GitHub adalah <strong>dua hal yang berbeda</strong>. Git adalah
        aplikasi mesin pengontrol versinya, sedangkan GitHub adalah wadah daring untuk menyimpan hasil
        pekerjaan Git. Kamu bisa menggunakan Git tanpa GitHub, namun GitHub membutuhkan Git untuk
        menjalankan fungsinya.
      </p>
      <p>
        Alasan utama penggunaan GitHub mencakup: keamanan cadangan proyek di cloud, kemudahan berbagi
        kode portofolio, dan fitur kolaborasi tim yang mencegah konflik kode saat bekerja secara simultan.
      </p>
    </>
  ),
  codeExample: {
    label: "url",
    code: `https://github.com/octocat/Hello-World`,
  },
  tips: (
    <p>
      Cara mudah mengingatnya: semua perintah yang diawali kata <code>git</code> (seperti{" "}
      <code>git commit</code>) berjalan di mesin lokal kamu. Sedangkan GitHub digunakan saat
      berhubungan dengan layanan web, seperti membuat akun, mengelola repositori daring, atau membuka
      Pull Request.
    </p>
  ),
  summary: (
    <p>
      GitHub adalah layanan cloud untuk menampung repositori Git dan memfasilitasi kolaborasi tim.
      Git bertindak sebagai pencatat riwayat, dan GitHub menjadi pusat penyimpanan daringnya.
    </p>
  ),
  exercise: (
    <p>
      Coba jelaskan dengan bahasamu sendiri dalam satu kalimat: apa perbedaan mendasar antara Git dan
      GitHub? Jika kamu dapat menjelaskannya secara lugas, konsep ini sudah kamu kuasai dengan baik.
    </p>
  ),
};
