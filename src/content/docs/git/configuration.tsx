import type { LessonContent } from "@/types/lesson";

export const configuration: LessonContent = {
  title: "Konfigurasi Git",
  seoTitle: "Konfigurasi Git - Setting Nama dan Email",
  description: "Kenalkan identitasmu ke Git agar setiap riwayat perubahan tercatat dengan jelas.",
  objectives: [
    "Memahami alasan Git memerlukan nama dan email kamu",
    "Mampu mengatur identitas Git dengan benar",
  ],
  explanation: (
    <>
      <p>
        Sebelum mulai menyimpan perubahan pertama, Git perlu mengetahui identitasmu. Ini bukan untuk
        login ke internet, melainkan agar setiap titik riwayat yang kamu buat (disebut <em>commit</em>)
        tercatat jelas siapa pembuatnya.
      </p>
      <p>
        Bayangkan jika kamu bekerja bersama tim di proyek <code>belajar-git</code>. Tanpa identitas,
        riwayat perubahan akan menjadi anonim sehingga sulit mengetahui siapa yang menulis baris kode
        tersebut. Oleh karena itu, pengaturan ini wajib dilakukan sekali di awal sebelum melakukan
        commit pertama.
      </p>
      <p>
        Konfigurasi ini cukup dilakukan <strong>sekali untuk setiap komputer</strong>, bukan setiap kali
        membuat proyek baru. Git akan menyimpannya melalui opsi <code>--global</code> yang berlaku
        untuk seluruh repositori Git di perangkatmu.
      </p>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `$ git config --global user.name "Nama Kamu"\n$ git config --global user.email "email@example.com"`,
  },
  output: {
    label: "output",
    code: `# Perintah di atas tidak menampilkan apa-apa kalau berhasil.\n# Untuk mengecek hasilnya, jalankan:\n$ git config --global user.name\nNama Kamu`,
  },
  tips: (
    <p>
      Jika kamu berencana menggunakan GitHub, gunakan alamat email yang sama dengan akun GitHub kamu
      agar setiap commit yang kamu buat otomatis terhubung ke profil GitHub milikmu.
    </p>
  ),
  commonMistakes: (
    <p>
      Lupa menjalankan konfigurasi ini sebelum commit pertama. Jika kamu langsung melakukan commit,
      Git biasanya akan menampilkan peringatan dan meminta kamu mengatur <code>user.name</code> dan{" "}
      <code>user.email</code> terlebih dahulu.
    </p>
  ),
  summary: (
    <p>
      Perintah <code>git config --global user.name</code> dan <code>user.email</code> mendaftarkan
      identitas penulis ke sistem Git. Langkah ini cukup dilakukan sekali per perangkat.
    </p>
  ),
  exercise: (
    <p>
      Atur nama dan email kamu menggunakan perintah di atas, lalu periksa hasilnya dengan perintah{" "}
      <code>git config --global user.name</code> untuk memastikan namamu sudah tercatat.
    </p>
  ),
};
