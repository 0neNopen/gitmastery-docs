import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const commit: LessonContent = {
  title: "Menyimpan Perubahan dengan Commit",
  seoTitle: "Git Commit - Panduan Git untuk Pemula",
  description: "Simpan perubahanmu menjadi satu titik riwayat permanen yang dapat dibuka kembali kapan saja.",
  objectives: [
    "Memahami konsep commit dengan analogi save point game",
    "Mampu menyimpan perubahan melalui git add dan git commit",
    "Memahami perbedaan peran staging area dan commit",
  ],
  explanation: (
    <>
      <p>
        <strong>Commit</strong> adalah titik simpan resmi di dalam riwayat proyek kamu.
        Analoginya seperti menyimpan progres permainan (<em>save point</em>): kamu menyelesaikan misi
        tertentu lalu menyimpannya, sehingga jika terjadi kesalahan fatal, kamu bisa kembali ke titik
        simpan tersebut tanpa harus mengulang dari awal.
      </p>
      <p>
        Sebelum melakukan commit, ada tahap perantara yang disebut <strong>staging area</strong>.
        Bayangkan staging area seperti meja persiapan: kamu memilih file mana saja yang ingin
        disimpan, menaruhnya di atas meja persiapan, dan setelah yakin baru menguncinya ke dalam
        riwayat permanen lewat perintah commit.
      </p>
      <p>Alur penyimpanan terdiri dari dua langkah utama:</p>
      <ol>
        <li>
          <code>git add .</code>: memindahkan seluruh perubahan ke area persiapan (<em>staging area</em>)
          sebagai tanda bahwa file tersebut siap disimpan.
        </li>
        <li>
          <code>git commit -m &quot;pesan penjelasan&quot;</code>: membungkus file yang ada di staging area
          menjadi satu titik riwayat permanen disertai pesan deskripsi.
        </li>
      </ol>
      <p>
        Teks setelah opsi <code>-m</code> adalah pesan commit, yaitu penjelasan singkat mengenai apa yang
        ditambahkan atau diperbaiki. Pesan ini sangat penting agar kamu dan tim dapat menelusuri riwayat
        proyek dengan mudah.
      </p>
    </>
  ),
  diagram: {
    caption: "Alur penyimpanan file dari direktori kerja hingga menjadi commit",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "index.html berubah", description: "Working directory" },
          { label: "git add .", description: "Staging area" },
          { label: "git commit -m", description: "Riwayat tersimpan" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `$ git add .\n$ git commit -m "Menambahkan file pertama"`,
  },
  output: {
    label: "output",
    code: `[main (root-commit) a1b2c3d] Menambahkan file pertama\n 2 files changed, 10 insertions(+)\n create mode 100644 README.md\n create mode 100644 index.html`,
  },
  tips: (
    <p>
      Tulis pesan commit yang deskriptif dan padat. Contohnya &ldquo;Menambahkan halaman kontak&rdquo; jauh
      lebih informatif dibandingkan hanya menulis &ldquo;update&rdquo; atau &ldquo;fix&rdquo;.
    </p>
  ),
  commonMistakes: (
    <p>
      Lupa menjalankan <code>git add</code> sebelum <code>git commit</code>. Jika kamu langsung
      menjalankan commit, Git akan memberi tahu bahwa tidak ada berkas di staging area yang siap disimpan.
    </p>
  ),
  summary: (
    <p>
      <code>git add .</code> menempatkan perubahan ke staging area, kemudian{" "}
      <code>git commit -m &quot;pesan&quot;</code> menguncinya menjadi satu riwayat permanen. Dua perintah
      ini merupakan inti alur kerja harian saat menggunakan Git.
    </p>
  ),
  exercise: (
    <p>
      Di dalam proyek <code>belajar-git</code>, pastikan file <code>index.html</code> dan{" "}
      <code>README.md</code> sudah dibuat. Jalankan <code>git add .</code> lalu lanjutkan dengan{" "}
      <code>git commit -m &quot;Menambahkan file pertama&quot;</code>. Periksa status akhir dengan{" "}
      <code>git status</code> hingga muncul keterangan <em>working tree clean</em>.
    </p>
  ),
};
