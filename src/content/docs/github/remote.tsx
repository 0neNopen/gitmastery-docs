import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const remote: LessonContent = {
  title: "Menghubungkan Project Lokal dengan GitHub",
  seoTitle: "Menghubungkan Repository Lokal ke GitHub",
  description: "Sambungkan repositori di komputer lokal ke repositori online yang telah kamu buat di GitHub.",
  objectives: [
    "Memahami keterkaitan antara repositori lokal dan repositori GitHub",
    "Mampu menyambungkan keduanya menggunakan satu baris perintah",
    "Memahami makna istilah remote, origin, dan URL repositori",
  ],
  explanation: (
    <>
      <p>
        Saat ini kamu memiliki dua repositori yang belum terhubung: repositori lokal <code>belajar-git</code>{" "}
        di komputermu (yang telah memiliki riwayat commit), dan repositori daring <code>belajar-git</code>{" "}
        di GitHub. Langkah berikutnya adalah menyambungkan keduanya.
      </p>
      <p>Tiga istilah kunci yang perlu dipahami:</p>
      <ul>
        <li>
          <strong>remote:</strong> sebutan umum untuk repositori yang berlokasi di server eksternal
          (seperti di GitHub).
        </li>
        <li>
          <strong>origin:</strong> nama alias standar yang diberikan pada remote utama.
        </li>
        <li>
          <strong>URL repository:</strong> alamat web lengkap repositori GitHub kamu, dengan format{" "}
          <code>https://github.com/username/nama-repo.git</code>.
        </li>
      </ul>
      <p>
        URL ini dapat kamu salin langsung dari halaman repositori GitHub kamu melalui tombol hijau{" "}
        <strong>Code</strong>.
      </p>
    </>
  ),
  diagram: {
    caption: "Alur penyambungan repositori lokal ke GitHub",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "Repository lokal", description: "belajar-git di komputermu" },
          { label: "git remote add origin", description: "Menghubungkan" },
          { label: "Repository GitHub", description: "Siap menerima riwayat" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `$ git remote add origin https://github.com/username/belajar-git.git`,
  },
  output: {
    label: "output",
    code: `# Perintah ini tidak menampilkan apa-apa kalau berhasil.\n# Cek hasilnya dengan:\n$ git remote -v\norigin  https://github.com/username/belajar-git.git (fetch)\norigin  https://github.com/username/belajar-git.git (push)`,
  },
  tips: (
    <p>
      Perintah ini hanya perlu dijalankan <strong>sekali</strong> untuk setiap repositori. Setelah
      tersambung, Git akan mengingat referensi <code>origin</code> secara permanen.
    </p>
  ),
  commonMistakes: (
    <p>
      Salah menyalin URL repositori atau lupa mengganti <code>username</code> dengan akun milikmu sendiri.
      Jika keliru, jalankan <code>git remote remove origin</code> lalu ulangi kembali dengan URL yang benar.
    </p>
  ),
  summary: (
    <p>
      <code>git remote add origin URL_REPOSITORY</code> menghubungkan repositori lokal ke GitHub dengan
      alias <code>origin</code>. Langkah ini merupakan prasyarat sebelum melakukan pengiriman data (<em>push</em>).
    </p>
  ),
  exercise: (
    <p>
      Salin URL repositori <code>belajar-git</code> dari GitHub kamu, lalu jalankan perintah{" "}
      <code>git remote add origin</code>. Verifikasi hasilnya dengan mengetik <code>git remote -v</code>.
    </p>
  ),
};
