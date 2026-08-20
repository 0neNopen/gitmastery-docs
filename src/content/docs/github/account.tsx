import type { LessonContent } from "@/types/lesson";

export const account: LessonContent = {
  title: "Membuat Akun GitHub",
  seoTitle: "Cara Membuat Akun GitHub Gratis",
  description: "Panduan cepat membuat akun GitHub gratis untuk mulai mencadangkan dan membagikan repositori proyek secara online.",
  objectives: ["Membuat akun GitHub yang siap digunakan", "Mampu masuk ke dashboard GitHub"],
  explanation: (
    <>
      <p>
        Sebelum menyimpan repositori di GitHub, kamu perlu membuat akun terlebih dahulu. Proses
        pendaftarannya gratis dan hanya memerlukan waktu beberapa menit.
      </p>
      <ol>
        <li>
          Buka situs <code>github.com</code> melalui peramban browser kamu.
        </li>
        <li>
          Klik tombol <strong>Sign up</strong> di sudut kanan atas halaman.
        </li>
        <li>Masukkan username, alamat email aktif, serta kata sandi.</li>
        <li>Lakukan verifikasi captcha dan konfirmasi kode yang dikirim ke email.</li>
        <li>Selesai, akun GitHub kamu telah aktif dan siap digunakan.</li>
      </ol>
      <p>
        Setelah berhasil membuat akun, kamu dapat login kapan saja menggunakan username atau email.
        Browser akan menyimpan sesi login sehingga kamu tidak perlu mengulang proses autentikasi setiap saat.
      </p>
    </>
  ),
  codeExample: {
    label: "url",
    code: `https://github.com/username`,
  },
  tips: (
    <p>
      Pilihlah username yang profesional dan mudah diingat karena username ini akan menjadi URL profil
      dan repositori portofoliomu, misalnya <code>github.com/username/belajar-git</code>.
    </p>
  ),
  commonMistakes: (
    <p>
      Menggunakan email yang berbeda antara akun GitHub dan konfigurasi <code>git config --global user.email</code>{" "}
      di terminal. Gunakan alamat email yang sama persis agar seluruh kontribusi commit tercatat di profil GitHub kamu.
    </p>
  ),
  summary: (
    <p>
      Membuat akun di <code>github.com</code> merupakan pintu masuk utama untuk memanfaatkan fitur remote
      repository dan kolaborasi Git di skala global.
    </p>
  ),
  exercise: (
    <p>
      Jika belum memiliki akun, daftarkan akun baru di <code>github.com</code>. Jika sudah memiliki akun,
      pastikan kamu dapat login dan melihat profil dasbor GitHub kamu dengan lancar.
    </p>
  ),
};
