import type { LessonContent } from "@/types/lesson";

/**
 * Solusi untuk "gagal clone" — tiga error paling umum beserta cara
 * mendiagnosisnya. Topik dijanjikan di `case-studies.ts`.
 */
export const gagalClone: LessonContent = {
  title: "Gagal Clone Repository",
  seoTitle: "Git Clone Gagal - Cara Mengatasi 3 Error Paling Umum",
  description:
    "Solusi komprehensif mengatasi tiga kegagalan git clone paling umum: masalah izin akses, salah URL repositori, dan verifikasi sertifikat SSL.",
  objectives: [
    "Mampu mengenali tiga jenis error clone paling umum melalui pesan terminal",
    "Mengetahui cara memverifikasi URL dan hak akses repositori sebelum proses clone",
    "Mampu menambahkan SSH key ke akun GitHub saat mengalami masalah autentikasi",
  ],
  explanation: (
    <>
      <p>
        Saat perintah <code>git clone</code> gagal dijalankan, langkah pertama adalah membaca pesan terminal.
        Sebagian besar kasus disebabkan oleh salah satu dari tiga faktor berikut:
      </p>
      <p>
        <strong>1. <code>Permission denied (publickey)</code>:</strong>{" "}
        GitHub tidak mengenali kunci SSH yang ada di komputermu. Solusinya: buat kunci SSH baru lalu daftarkan
        ke menu Settings → SSH and GPG keys di akun GitHub.
      </p>
      <p>
        <strong>2. <code>Repository not found</code>:</strong> Terdapat kesalahan penulisan URL, repositori telah
        dihapus dari GitHub, atau repositori berstatus Private dan akun kamu belum diberi hak akses kontributor.
      </p>
      <p>
        <strong>3. <code>SSL certificate problem</code>:</strong> Sertifikat keamanan pada jaringan lokal (misalnya Wi-Fi
        kantor atau kampus) tidak dikenali oleh Git. Solusi yang disarankan adalah menggunakan protokol SSH (<code>git@github.com:...</code>).
      </p>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `# Diagnosa: cek apakah URL valid dan reachable
$ git ls-remote https://github.com/username/repo.git

# Perbaiki: tambah SSH key kalau dapat "Permission denied (publickey)"
$ ssh-keygen -t ed25519 -C "emailkamu@example.com"
$ cat ~/.ssh/id_ed25519.pub
# (paste output-nya ke GitHub Settings > SSH and GPG keys)

# Verifikasi koneksi SSH ke GitHub
$ ssh -T git@github.com
# Output yang diharapkan: "Hi username! You've successfully authenticated..."`,
  },
  output: {
    label: "output",
    code: `git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

# Setelah fix:
Hi username! You've successfully authenticated, but GitHub does not provide shell access.`,
  },
  tips: (
    <p>
      Saat baru pertama kali menggunakan komputer baru, perintah <code>ssh -T git@github.com</code> adalah
      alat diagnosa tercepat untuk memastikan koneksi autentikasi SSH ke GitHub sudah terpasang dengan baik.
    </p>
  ),
  commonMistakes: (
    <p>
      Menonaktifkan verifikasi SSL secara sembarangan tanpa meneliti akar masalahnya. Tindakan tersebut berisiko pada
      keamanan jaringan. Selalu periksa konfigurasi URL dan koneksi jaringan terlebih dahulu.
    </p>
  ),
  summary: (
    <p>
      Kegagalan proses clone umumnya berakar pada masalah autentikasi SSH, kesalahan penulisan alamat repositori, atau
      isu jaringan SSL. Cermati teks pesan error di terminal untuk menentukan solusi yang tepat.
    </p>
  ),
  exercise: (
    <p>
      Lakukan clone pada repositori publik yang valid (misalnya <code>https://github.com/octocat/Hello-World</code>).
      Selanjutnya coba sengaja ubah satu karakter URL dan perhatikan bagaimana Git menampilkan pesan kesalahan repositori tidak ditemukan.
    </p>
  ),
};