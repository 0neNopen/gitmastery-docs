import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const clone: LessonContent = {
  title: "Clone",
  seoTitle: "Git Clone - Cara Download Project dari GitHub",
  description: "Mengunduh salinan lengkap repositori GitHub beserta seluruh riwayat commit ke komputer lokal.",
  objectives: [
    "Memahami fungsi dasar dan manfaat git clone",
    "Mengetahui perbedaan penggunaan antara git clone dan git remote add",
  ],
  explanation: (
    <>
      <p>
        Sebelumnya kamu mempelajari cara menghubungkan proyek yang sudah ada di komputer lokal ke
        GitHub menggunakan <code>git remote add origin</code>. Namun, bagaimana jika situasinya
        terbalik: proyek sudah tersedia di GitHub dan kamu belum memiliki salinannya di komputer?
      </p>
      <p>
        Di sinilah <code>git clone</code> digunakan. Perintah ini mengunduh seluruh file proyek beserta
        seluruh riwayat commit secara instan ke komputer lokal kamu hanya dalam satu langkah.
      </p>
      <p>
        Contoh skenario nyata: rekan tim telah membuat repositori di GitHub dan mengundang kamu untuk
        berkontribusi. Alih-alih membuat folder baru secara manual, kamu cukup melakukan <code>clone</code>,
        dan seluruh kode beserta koneksi remote <code>origin</code> akan otomatis terkonfigurasi.
      </p>
    </>
  ),
  diagram: {
    caption: "Alur penyalinan repositori dari GitHub ke komputer lokal",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "Repository GitHub", description: "Sudah ada duluan" },
          { label: "git clone", description: "Disalin lengkap" },
          { label: "Komputermu", description: "origin otomatis terpasang" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `$ git clone https://github.com/username/belajar-git.git`,
  },
  output: {
    label: "output",
    code: `Cloning into 'belajar-git'...\nremote: Enumerating objects: 6, done.\nReceiving objects: 100% (6/6), done.`,
  },
  tips: (
    <p>
      Setelah proses clone selesai, jalankan <code>git remote -v</code> di dalam direktori proyek.
      Alamat remote <code>origin</code> telah terpasang otomatis tanpa perlu konfigurasi manual tambahan.
    </p>
  ),
  commonMistakes: (
    <p>
      Bingung membedakan kapan harus menggunakan <code>clone</code> dan <code>remote add</code>. Gunakan{" "}
      <code>clone</code> jika proyek sudah ada di GitHub dan kamu ingin mengunduhnya. Gunakan{" "}
      <code>remote add</code> jika kamu memulai proyek dari lokal dan ingin menyambungkannya ke GitHub.
    </p>
  ),
  summary: (
    <p>
      <code>git clone URL_REPOSITORY</code> menyalin repositori secara utuh dari GitHub ke komputer lokal,
      lengkap dengan cabang dan seluruh riwayat commit terdahulu.
    </p>
  ),
  exercise: (
    <p>
      Pilih satu repositori publik di GitHub, lalu jalankan perintah <code>git clone</code> menggunakan
      URL repositori tersebut. Periksa isinya dengan perintah <code>ls</code> untuk memastikan file telah
      tersalin sempurna.
    </p>
  ),
};
