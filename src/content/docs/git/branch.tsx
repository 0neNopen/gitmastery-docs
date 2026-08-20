import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const branch: LessonContent = {
  title: "Membuat Branch",
  seoTitle: "Git Branch - Cara Membuat Branch Baru",
  description: "Eksplorasi fitur baru di ruang kerja terpisah tanpa mengganggu kode utama.",
  objectives: [
    "Memahami konsep branch dengan analogi cabang cerita",
    "Mampu membuat dan berpindah ke branch baru",
    "Mengetahui waktu yang tepat untuk memanfaatkan branch",
  ],
  explanation: (
    <>
      <p>
        <strong>Branch</strong> (percabangan) berfungsi seperti jalur cerita alternatif. Bayangkan kamu
        sedang menulis naskah cerita dan ingin menguji alur cerita baru tanpa menghapus naskah asli.
        Branch memungkinkan kamu mengembangkan fitur atau eksperimen secara terisolasi, sementara kode
        di cabang utama (biasanya bernama <code>main</code>) tetap stabil dan aman.
      </p>
      <p>
        Pada proyek <code>belajar-git</code>, misalnya kamu ingin merancang tampilan kontak baru tanpa
        takut merusak file <code>index.html</code> yang sudah berjalan. Kamu bisa membuat branch khusus,
        mengerjakannya sampai tuntas, lalu menggabungkannya kembali ke <code>main</code> setelah hasilnya
        teruji.
      </p>
      <p>Alur pembuatan dan perpindahan branch:</p>
      <ol>
        <li>
          <code>git branch nama-branch</code>: membuat cabang baru dari posisi commit saat ini.
        </li>
        <li>
          <code>git switch nama-branch</code>: berpindah ke cabang yang baru dibuat tersebut.
        </li>
      </ol>
      <p>
        Setelah berpindah, seluruh commit baru hanya akan tercatat di branch tersebut, menjaga branch{" "}
        <code>main</code> tetap bersih hingga kamu siap menggabungkannya.
      </p>
    </>
  ),
  diagram: {
    caption: "Alur pembuatan branch baru dari cabang utama main",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "main", description: "Riwayat utama" },
          { label: "git branch", description: "Cabang baru dibuat" },
          { label: "fitur-baru", description: "Dikerjakan terpisah" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `$ git branch fitur-baru\n$ git switch fitur-baru`,
  },
  output: {
    label: "output",
    code: `Switched to branch 'fitur-baru'`,
  },
  tips: (
    <p>
      Kamu bisa menggabungkan pembuatan dan perpindahan branch dalam satu perintah praktis:{" "}
      <code>git switch -c fitur-baru</code>. Opsi <code>-c</code> (singkatan dari <em>create</em>)
      otomatis membuat branch sekaligus langsung mengaktifkannya.
    </p>
  ),
  commonMistakes: (
    <p>
      Lupa memeriksa posisi branch sebelum mulai menulis kode sehingga tidak sengaja membuat commit
      langsung di branch <code>main</code>. Selalu jalankan <code>git status</code> untuk memastikan
      nama branch aktif yang sedang kamu tempati.
    </p>
  ),
  summary: (
    <p>
      Branch memberikan ruang kerja terisolasi untuk bereksperimen tanpa risiko merusak kode produksi di{" "}
      <code>main</code>. Gunakan <code>git branch</code> untuk mendaftar/membuat, dan{" "}
      <code>git switch</code> untuk berpindah.
    </p>
  ),
  exercise: (
    <p>
      Di dalam proyek <code>belajar-git</code>, buat branch baru bernama <code>coba-fitur</code>, pindah
      ke branch tersebut, lalu jalankan <code>git status</code> untuk memastikan kamu sudah aktif di
      branch <code>coba-fitur</code>.
    </p>
  ),
};
