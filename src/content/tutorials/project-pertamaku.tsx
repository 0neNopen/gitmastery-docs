import { VerticalFlowDiagram } from "@/components/lesson/VerticalFlowDiagram";
import type { TutorialContent } from "@/types/tutorial";

export const projectPertamaku: TutorialContent = {
  title: "Project Pertamaku dengan Git & GitHub",
  seoTitle: "Tutorial Git & GitHub untuk Pemula - Project Pertamaku",
  description:
    "Panduan praktik langkah demi langkah dari nol: membuat proyek belajar-git, menyimpan riwayat dengan Git, hingga mengunggahnya ke GitHub.",
  intro: (
    <p>
      Ini adalah tutorial praktik perdana yang menggabungkan seluruh materi dasar Git dan GitHub.
      Ikuti setiap langkah secara berurutan tanpa melompat. Di akhir tutorial ini, kamu akan memiliki
      proyek sendiri yang tersimpan secara online di GitHub. Kita akan menggunakan contoh folder bernama{" "}
      <code>belajar-git</code>.
    </p>
  ),
  diagram: {
    caption: "Alur tahapan yang akan kita lalui bersama",
    content: (
      <VerticalFlowDiagram steps={["Project Lokal", "Git", "Commit", "GitHub", "Push"]} />
    ),
  },
  steps: [
    {
      title: "Membuat Folder Project",
      description: (
        <p>
          Langkah pertama, buat folder khusus untuk proyek ini bernama <code>belajar-git</code>.
          Gunakan nama ini secara konsisten sepanjang tutorial agar mudah diikuti.
        </p>
      ),
      command: { label: "bash", code: `$ mkdir belajar-git` },
      commandExplanation: (
        <p>
          <code>mkdir</code> (singkatan dari <em>make directory</em>) adalah perintah untuk membuat folder
          baru di sistem operasi kamu.
        </p>
      ),
    },
    {
      title: "Membuka Terminal",
      description: (
        <p>
          Buka aplikasi terminal (Git Bash di Windows, Terminal di macOS, atau terminal bawaan Linux),
          lalu masuk ke dalam direktori <code>belajar-git</code> yang baru saja dibuat.
        </p>
      ),
      command: { label: "bash", code: `$ cd belajar-git` },
      commandExplanation: (
        <p>
          <code>cd</code> (<em>change directory</em>) memindahkan lokasi kerja terminal kamu ke dalam folder{" "}
          <code>belajar-git</code>.
        </p>
      ),
      expectedOutput: {
        label: "output",
        code: `# Jalankan "pwd" (macOS/Linux) atau "cd" (Windows) untuk memastikan posisimu sudah di dalam folder belajar-git.`,
      },
    },
    {
      title: "Menjalankan git init",
      description: (
        <p>
          Aktifkan sistem pelacakan Git pada folder <code>belajar-git</code> agar siap mencatat seluruh
          riwayat perubahan.
        </p>
      ),
      command: { label: "bash", code: `$ git init` },
      commandExplanation: (
        <p>
          <code>git init</code> membuat direktori tersembunyi <code>.git</code> yang berfungsi sebagai basis
          data riwayat proyek.
        </p>
      ),
      expectedOutput: {
        label: "output",
        code: `Initialized empty Git repository in /Users/kamu/belajar-git/.git/`,
      },
    },
    {
      title: "Membuat File index.html",
      description: (
        <p>
          Buat file baru bernama <code>index.html</code> di dalam folder <code>belajar-git</code>{" "}
          menggunakan text editor favoritmu (seperti VS Code atau Notepad).
        </p>
      ),
      command: {
        label: "index.html",
        code: `<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Halo, ini project belajar-git!</h1>\n  </body>\n</html>`,
      },
      commandExplanation: (
        <p>
          Ini adalah contoh isi file HTML sederhana yang akan menjadi konten pertama di dalam repositori kamu.
        </p>
      ),
    },
    {
      title: "Menjalankan git status",
      description: (
        <p>
          Periksa kondisi repositori kamu sekarang. Memeriksa status secara berkala adalah praktik terbaik
          dalam alur kerja Git.
        </p>
      ),
      command: { label: "bash", code: `$ git status` },
      commandExplanation: (
        <p>
          <code>git status</code> menampilkan informasi file baru <code>index.html</code> yang terdeteksi di
          bawah bagian <em>Untracked files</em>.
        </p>
      ),
      expectedOutput: {
        label: "output",
        code: `On branch main\n\nNo commits yet\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\tindex.html\n\nnothing added to commit but untracked files present (use "git add" to track)`,
      },
    },
    {
      title: "Menjalankan git add .",
      description: (
        <p>
          Pindahkan file <code>index.html</code> ke area persiapan (<em>staging area</em>) sebelum disimpan
          menjadi commit permanen.
        </p>
      ),
      command: { label: "bash", code: `$ git add .` },
      commandExplanation: (
        <p>
          Tanda titik (<code>.</code>) menandakan bahwa seluruh file yang berubah di direktori saat ini akan
          didaftarkan ke staging area.
        </p>
      ),
      expectedOutput: {
        label: "output",
        code: `# Tidak ada pesan error. Cek statusnya dengan:\n$ git status\nChanges to be committed:\n\tnew file:   index.html`,
      },
    },
    {
      title: "Membuat Commit",
      description: (
        <p>
          Kunci seluruh perubahan di staging area menjadi titik riwayat permanen disertai pesan deskriptif.
        </p>
      ),
      command: { label: "bash", code: `$ git commit -m "Menambahkan file pertama"` },
      commandExplanation: (
        <p>
          Opsi <code>-m</code> menyertakan pesan deskripsi singkat sehingga riwayat proyek mudah dipahami di
          masa mendatang.
        </p>
      ),
      expectedOutput: {
        label: "output",
        code: `[main (root-commit) a1b2c3d] Menambahkan file pertama\n 1 file changed, 5 insertions(+)\n create mode 100644 index.html`,
      },
    },
    {
      title: "Membuat Repository GitHub",
      description: (
        <>
          <p>
            Buka situs GitHub, login ke akunmu, klik tombol <strong>+</strong> di pojok kanan atas, pilih{" "}
            <strong>New repository</strong>, lalu beri nama <code>belajar-git</code> (samakan persis dengan
            nama folder lokalmu).
          </p>
          <p>
            Biarkan opsi &ldquo;Add a README file&rdquo; tidak tercentang karena proyek lokalmu sudah memiliki
            file sendiri.
          </p>
        </>
      ),
      command: { label: "url", code: `https://github.com/username/belajar-git` },
      commandExplanation: (
        <p>
          Ini adalah alamat URL repositori baru kamu di GitHub yang akan kita gunakan pada langkah selanjutnya.
        </p>
      ),
    },
    {
      title: "Menghubungkan Repository Lokal dengan GitHub",
      description: (
        <p>
          Sambungkan repositori lokal <code>belajar-git</code> ke repositori online yang telah kamu buat di
          GitHub.
        </p>
      ),
      command: {
        label: "bash",
        code: `$ git remote add origin https://github.com/username/belajar-git.git`,
      },
      commandExplanation: (
        <p>
          <code>origin</code> adalah nama alias standar untuk remote GitHub. Pastikan mengganti bagian URL
          dengan tautan repositori milik akunmu sendiri.
        </p>
      ),
      expectedOutput: {
        label: "output",
        code: `# Perintah selesai tanpa output. Verifikasi dengan:\n$ git remote -v\norigin  https://github.com/username/belajar-git.git (fetch)\norigin  https://github.com/username/belajar-git.git (push)`,
      },
    },
    {
      title: "Menjalankan git push",
      description: <p>Kirim dan unggah commit pertama kamu dari komputer lokal ke server GitHub.</p>,
      command: { label: "bash", code: `$ git push -u origin main` },
      commandExplanation: (
        <p>
          Opsi <code>-u origin main</code> menetapkan cabang pelacakan default. Untuk proses push berikutnya,
          kamu cukup mengetik <code>git push</code>.
        </p>
      ),
      expectedOutput: {
        label: "output",
        code: `Enumerating objects: 3, done.\nTo https://github.com/username/belajar-git.git\n * [new branch]      main -> main\nBranch 'main' set up to track remote branch 'main' from 'origin'.`,
      },
    },
    {
      title: "Membuka Repository di GitHub",
      description: (
        <p>
          Buka tautan <code>https://github.com/username/belajar-git</code> di browser kamu. File{" "}
          <code>index.html</code> kini sudah tampil di repositori daring.
        </p>
      ),
    },
    {
      title: "Melakukan Perubahan Sederhana",
      description: (
        <p>
          Sekarang coba buka file <code>index.html</code> di editor, ubah teks di dalam tag{" "}
          <code>{"<h1>"}</code>, lalu simpan berkas tersebut.
        </p>
      ),
      command: {
        label: "index.html",
        code: `<h1>Halo, project belajar-git sudah update!</h1>`,
      },
      commandExplanation: (
        <p>
          Langkah ini bertujuan untuk melatih siklus kedua commit dan push pada alur kerja sehari-hari.
        </p>
      ),
    },
    {
      title: "Melakukan Commit Kedua",
      description: (
        <p>
          Simpan pembaruan tersebut sebagai commit kedua dengan langkah yang sama seperti sebelumnya.
        </p>
      ),
      command: {
        label: "bash",
        code: `$ git add .\n$ git commit -m "Update tulisan di index.html"`,
      },
      commandExplanation: (
        <p>
          <code>git add .</code> memasukkan file ke staging area, dan <code>git commit</code> menyimpannya
          menjadi riwayat baru.
        </p>
      ),
      expectedOutput: {
        label: "output",
        code: `[main e4f5g6h] Update tulisan di index.html\n 1 file changed, 1 insertion(+), 1 deletion(-)`,
      },
    },
    {
      title: "Melakukan Push Kedua",
      description: (
        <p>
          Kirim commit kedua ini ke GitHub menggunakan perintah push yang lebih ringkas.
        </p>
      ),
      command: { label: "bash", code: `$ git push` },
      commandExplanation: (
        <p>
          Kamu tidak perlu mengetikkan opsi <code>-u origin main</code> lagi karena konfigurasi upstream sudah
          tersimpan otomatis.
        </p>
      ),
      expectedOutput: {
        label: "output",
        code: `Enumerating objects: 3, done.\nTo https://github.com/username/belajar-git.git\n   a1b2c3d..e4f5g6h  main -> main`,
      },
    },
  ],
  summary: (
    <>
      <p>
        Selamat, kamu telah berhasil menyelesaikan seluruh alur kerja Git dan GitHub dari awal hingga akhir:
        mulai dari pembuatan folder lokal hingga tersimpan rapi di GitHub dengan riwayat commit yang jelas.
      </p>
      <p>
        Siklus ini (sunting file → <code>git add</code> → <code>git commit</code> → <code>git push</code>) adalah
        kunci rutinitas utama yang akan terus kamu gunakan dalam pengembangan aplikasi profesional.
      </p>
    </>
  ),
};
