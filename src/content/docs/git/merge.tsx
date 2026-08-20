import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const merge: LessonContent = {
  title: "Menggabungkan Branch",
  seoTitle: "Git Merge - Cara Menggabungkan Branch",
  description: "Satukan kembali hasil pekerjaan dari branch terpisah ke cabang utama proyek.",
  objectives: [
    "Memahami konsep penggabungan branch (merge)",
    "Mampu menggabungkan branch fitur ke dalam main secara aman",
  ],
  explanation: (
    <>
      <p>
        Setelah pekerjaan di branch terpisah (misalnya <code>fitur-baru</code>) selesai dan siap
        digunakan, langkah berikutnya adalah menyatukan perubahan tersebut kembali ke cabang utama{" "}
        <code>main</code>. Proses penggabungan ini dinamakan <strong>merge</strong>.
      </p>
      <p>
        Analoginya, merge seperti menyatukan naskah revisi ke dalam draf naskah utama. Seluruh
        riwayat commit dari branch <code>fitur-baru</code> akan disematkan ke dalam branch{" "}
        <code>main</code> sehingga cabang utama memiliki kode terbaru.
      </p>
      <p>Langkah penggabungan:</p>
      <ol>
        <li>
          <code>git switch main</code>: berpindah terlebih dahulu ke branch tujuan penggabungan.
        </li>
        <li>
          <code>git merge fitur-baru</code>: menarik dan menggabungkan perubahan dari branch{" "}
          <code>fitur-baru</code> ke dalam <code>main</code>.
        </li>
      </ol>
      <p>
        Setelah proses merge sukses, branch <code>main</code> sudah memiliki seluruh pembaruan. Branch{" "}
        <code>fitur-baru</code> dapat dipertahankan atau dihapus jika tidak digunakan lagi.
      </p>
    </>
  ),
  diagram: {
    caption: "Alur penggabungan branch fitur ke branch main",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "fitur-baru", description: "Selesai dikerjakan" },
          { label: "git merge", description: "Proses penggabungan" },
          { label: "main", description: "Memiliki seluruh kode terbaru" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `$ git switch main\n$ git merge fitur-baru`,
  },
  output: {
    label: "output",
    code: `Updating a1b2c3d..e4f5g6h\nFast-forward\n index.html | 5 +++++\n 1 file changed, 5 insertions(+)`,
  },
  tips: (
    <p>
      Selalu pastikan kamu sudah berada di branch target (misalnya <code>main</code>) sebelum menjalankan{" "}
      <code>git merge</code>.
    </p>
  ),
  commonMistakes: (
    <p>
      Menjalankan perintah <code>git merge</code> dari posisi branch yang salah. Jika ragu, jalankan{" "}
      <code>git status</code> terlebih dahulu untuk memastikan cabang aktif kamu sebelum melakukan merge.
    </p>
  ),
  summary: (
    <p>
      Merge menyatukan riwayat commit dari cabang kerja ke cabang tujuan. Pastikan selalu berpindah ke
      branch tujuan terlebih dahulu (<code>git switch main</code>) sebelum menjalankan <code>git merge</code>.
    </p>
  ),
  exercise: (
    <p>
      Dari branch <code>coba-fitur</code> yang dibuat sebelumnya, buat satu commit baru. Setelah itu,
      pindah ke branch <code>main</code> dan gabungkan dengan perintah <code>git merge coba-fitur</code>.
      Periksa log menggunakan <code>git log --oneline</code> untuk memastikan riwayat commit telah masuk.
    </p>
  ),
};
