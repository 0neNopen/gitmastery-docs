import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const init: LessonContent = {
  title: "Membuat Repository",
  seoTitle: "Git Init - Cara Membuat Repository Git",
  description: "Ubah folder proyek biasa menjadi repositori Git yang siap mencatat setiap riwayat.",
  objectives: [
    "Paham konsep repositori dengan bahasa sederhana",
    "Bisa menginisialisasi repositori Git baru dari folder biasa",
    "Mengetahui apa yang terjadi di balik layar saat git init dijalankan",
  ],
  explanation: (
    <>
      <p>
        <strong>Repository</strong> (sering disingkat &ldquo;repo&rdquo;) pada dasarnya adalah
        folder proyek biasa. Bedanya, folder ini memiliki kemampuan menyimpan riwayat perubahan
        karena sistem Git telah diaktifkan di dalamnya.
      </p>
      <p>
        Mari kita coba praktikkan langsung. Buat folder baru bernama <code>belajar-git</code>, lalu
        masuk ke folder tersebut melalui terminal:
      </p>
      <ol>
        <li>
          Buat folder <code>belajar-git</code>
        </li>
        <li>Masuk ke folder tersebut melalui terminal</li>
        <li>
          Jalankan perintah <code>git init</code>
        </li>
      </ol>
      <p>
        Saat <code>git init</code> dijalankan, Git membuat folder tersembunyi bernama{" "}
        <code>.git</code> di dalam direktori <code>belajar-git</code>. Folder ini yang menyimpan
        seluruh basis data riwayat proyek kamu. Kamu tidak perlu menyunting isinya secara manual
        karena Git akan mengelolanya secara otomatis.
      </p>
      <p>
        Setelah <code>git init</code> berhasil, folder <code>belajar-git</code> resmi menjadi
        repositori Git. File yang berada di dalamnya belum otomatis tercatat sebagai riwayat simpan,
        dan langkah tersebut akan kita pelajari pada materi commit.
      </p>
    </>
  ),
  diagram: {
    caption: "Proses inisialisasi git init",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "Folder biasa", description: "belajar-git" },
          { label: "git init", description: "Membuat .git/" },
          { label: "Git repository", description: "Siap mencatat riwayat" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `$ mkdir belajar-git\n$ cd belajar-git\n$ git init`,
  },
  output: {
    label: "output",
    code: `Initialized empty Git repository in /Users/kamu/belajar-git/.git/`,
  },
  tips: (
    <p>
      Setelah menjalankan <code>git init</code>, biasakan langsung mengecek kondisi repositori
      dengan perintah <code>git status</code> untuk memastikan status proyek dalam keadaan bersih.
    </p>
  ),
  commonMistakes: (
    <p>
      Menjalankan <code>git init</code> di dalam folder yang sudah menjadi repositori Git, atau di
      folder induk komputer (seperti Desktop atau Home). Jika ragu, jalankan <code>git status</code>{" "}
      terlebih dahulu. Jika muncul pesan &ldquo;not a git repository&rdquo;, maka aman untuk
      menjalankan <code>git init</code>.
    </p>
  ),
  summary: (
    <p>
      Repositori adalah folder proyek yang telah diaktifkan Git di dalamnya. Perintah <code>git init</code>{" "}
      mengubah folder biasa menjadi repositori Git dengan membuat direktori tersembunyi <code>.git</code>,
      dan cukup dijalankan sekali saat memulai proyek.
    </p>
  ),
  exercise: (
    <p>
      Buat folder <code>belajar-git</code>, masuk ke dalamnya, lalu jalankan <code>git init</code>.
      Setelah itu jalankan <code>ls -la</code> (macOS/Linux) atau <code>dir /a</code> (Windows) untuk
      memastikan folder <code>.git</code> berhasil dibuat.
    </p>
  ),
};
