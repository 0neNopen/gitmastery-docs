import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const pullRequest: LessonContent = {
  title: "Pull Request",
  seoTitle: "Pull Request - Cara Kolaborasi di GitHub",
  description: "Mekanisme pengajuan perubahan kode dari branch fitur ke cabang utama secara profesional.",
  objectives: [
    "Memahami konsep dan fungsi Pull Request (PR)",
    "Memahami alur kerja dari pembuatan cabang hingga penggabungan (merge)",
  ],
  explanation: (
    <>
      <p>
        Ketika bekerja dalam tim, developer jarang melakukan <code>push</code> langsung ke cabang{" "}
        <code>main</code>. Sebagai gantinya, ada tahap peninjauan kode (<em>code review</em>) yang
        disebut <strong>Pull Request</strong> (sering disingkat <strong>PR</strong>).
      </p>
      <p>
        Pull Request bukan perintah terminal Git, melainkan fitur kolaborasi yang disediakan oleh GitHub.
        Konsepnya sederhana: kamu mengerjakan fitur di branch terpisah, mengunggah branch tersebut ke
        GitHub, lalu membuka Pull Request untuk meminta rekan tim meninjau dan menyetujui perubahanmu
        sebelum digabungkan ke cabang utama.
      </p>
      <p>Alur kerja standar Pull Request:</p>
    </>
  ),
  diagram: {
    caption: "Alur Pull Request dari pembuatan perubahan hingga tahap merge",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "Developer A", description: "Membuat perubahan" },
          { label: "Push ke GitHub", description: "git push" },
          { label: "Pull Request", description: "Diajukan" },
          { label: "Review", description: "Dicek orang lain" },
          { label: "Merge", description: "Digabungkan" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `# Setelah kerja di branch terpisah dan push ke GitHub\n$ git push -u origin fitur-baru\n\n# Buka Pull Request lewat website GitHub\n# GitHub otomatis menawarkan tombol "Compare & pull request"`,
  },
  tips: (
    <p>
      Tuliskan deskripsi ringkas dan jelas pada setiap Pull Request mengenai apa saja yang diperbarui
      dan alasannya. Ini sangat membantu reviewer memahami konteks perubahan secara cepat.
    </p>
  ),
  commonMistakes: (
    <p>
      Membuka Pull Request langsung dari branch <code>main</code> lokal. Biasakan selalu membuat branch
      fitur khusus (seperti <code>fitur-login</code>) agar branch utama tetap steril hingga perubahan
      disetujui.
    </p>
  ),
  summary: (
    <p>
      Pull Request adalah standar industri untuk meninjau dan menggabungkan kode secara kolaboratif.
      Alurnya: buat perubahan di branch baru, push ke GitHub, ajukan Pull Request, lakukan review tim,
      lalu gabungkan (merge).
    </p>
  ),
  exercise: (
    <p>
      Buat branch baru di repositori <code>belajar-git</code>, lakukan perubahan pada <code>README.md</code>,
      commit, lalu push branch tersebut ke GitHub. Buka situs GitHub dan coba ajukan Pull Request perdana
      kamu ke branch <code>main</code>.
    </p>
  ),
};
