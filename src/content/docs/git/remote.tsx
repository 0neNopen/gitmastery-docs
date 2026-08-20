import { VerticalFlowDiagram } from "@/components/lesson/VerticalFlowDiagram";
import type { LessonContent } from "@/types/lesson";

export const remote: LessonContent = {
  title: "Git Remote Dasar",
  seoTitle: "Git Remote - Menghubungkan Repository ke Server",
  description: "Mengenal konsep remote repository sebagai jembatan sinkronisasi antara komputer lokal dan internet.",
  objectives: [
    "Memahami pengertian dan fungsi remote repository",
    "Mengetahui relasi antara repositori lokal dan repositori online",
  ],
  explanation: (
    <>
      <p>
        Sejauh ini, seluruh alur kerja seperti <code>git init</code>, commit, branch, dan merge
        berjalan sepenuhnya di komputer lokal kamu tanpa memerlukan koneksi internet. Lalu, bagaimana
        jika kamu ingin mencadangkan proyek ke server online atau berkolaborasi dengan rekan tim?
      </p>
      <p>
        Di sinilah peran <strong>remote repository</strong>. Remote adalah salinan repositori yang
        tersimpan di server terpisah, umumnya di platform seperti GitHub. Repositori di komputermu
        disebut <em>local</em>, sedangkan repositori yang berada di internet disebut <em>remote</em>.
      </p>
      <p>Alur sinkronisasi data:</p>
      <ol>
        <li>Kamu menulis kode dan melakukan commit di repositori lokal komputermu.</li>
        <li>Git mengemas dan mengirimkan data commit tersebut ke server remote.</li>
        <li>Riwayat proyek tersimpan aman di server GitHub dan siap diakses tim.</li>
      </ol>
    </>
  ),
  diagram: {
    caption: "Alur sederhana sinkronisasi dari komputer lokal ke GitHub",
    content: <VerticalFlowDiagram steps={["Komputer Lokal", "Git", "Repository GitHub"]} />,
  },
  codeExample: {
    label: "bash",
    code: `# Di repository yang belum pernah dihubungkan ke mana pun:\n$ git remote -v`,
  },
  output: {
    label: "output",
    code: `# Tidak menampilkan apa-apa karena belum ada remote yang terhubung.\n# Kita akan menghubungkan repository ini ke GitHub di materi berikutnya.`,
  },
  tips: (
    <p>
      Nama <code>origin</code> yang sering kamu lihat adalah alias konvensi standar untuk remote utama.
      Sebaiknya gunakan nama standar ini agar selaras dengan alur kerja tim profesional.
    </p>
  ),
  commonMistakes: (
    <p>
      Mengira remote wajib ada sejak awal pembuatan proyek. Faktanya, kamu bisa bekerja mandiri di
      repositori lokal tanpa remote sama sekali sampai kamu siap membagikannya secara online.
    </p>
  ),
  summary: (
    <p>
      Remote repository adalah salinan daring dari repositori kamu. Perintah <code>git remote -v</code>{" "}
      digunakan untuk memeriksa daftar alamat remote yang sedang terhubung.
    </p>
  ),
  exercise: (
    <p>
      Jalankan perintah <code>git remote -v</code> pada proyek <code>belajar-git</code> kamu saat ini,
      dan pastikan hasilnya kosong sebagai bukti bahwa repositori kamu masih berstatus lokal murni.
    </p>
  ),
};
