import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const push: LessonContent = {
  title: "Push",
  seoTitle: "Git Push - Cara Mengirim Project ke GitHub",
  description: "Kirim dan unggah seluruh riwayat commit lokal ke repositori GitHub.",
  objectives: ["Memahami fungsi git push", "Mampu mengirimkan commit pertama ke GitHub"],
  explanation: (
    <>
      <p>
        Setelah repositori lokal terhubung dengan GitHub melalui alias <code>origin</code>, langkah
        selanjutnya adalah mengirimkan riwayat commit lokal ke server daring menggunakan perintah{" "}
        <code>git push</code>.
      </p>
      <p>
        Ingat bahwa seluruh commit yang kamu buat sebelumnya baru tersimpan di disk lokal komputer.
        GitHub belum menerima perubahan tersebut sampai kamu mengeksekusi perintah <code>push</code>.
      </p>
      <p>
        Pada proses push perdana, gunakan opsi <code>-u</code> (singkatan dari <em>upstream</em>):{" "}
        <code>git push -u origin main</code>. Opsi ini menyambungkan branch <code>main</code> lokal
        dengan branch <code>main</code> di server remote secara permanen. Setelah langkah ini, push
        selanjutnya cukup mengetikkan <code>git push</code> saja.
      </p>
    </>
  ),
  diagram: {
    caption: "Alur pengiriman riwayat commit lokal ke server GitHub",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "Commit lokal", description: "Tersimpan di komputer" },
          { label: "git push", description: "Dikirim" },
          { label: "GitHub", description: "Bisa dilihat online" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `$ git push -u origin main`,
  },
  output: {
    label: "output",
    code: `Enumerating objects: 3, done.\nWriting objects: 100% (3/3), done.\nTo https://github.com/username/belajar-git.git\n * [new branch]      main -> main\nBranch 'main' set up to track remote branch 'main' from 'origin'.`,
  },
  tips: (
    <p>
      Setelah push berhasil, buka dan segarkan halaman repositori di GitHub. File <code>index.html</code>{" "}
      dan <code>README.md</code> kamu akan tampil secara live di browser.
    </p>
  ),
  commonMistakes: (
    <p>
      Melakukan push sebelum menjalankan <code>git remote add origin</code>. Jika muncul pesan error bahwa
      remote tidak ditemukan, pastikan kamu telah mendaftarkan alamat repositori terlebih dahulu.
    </p>
  ),
  summary: (
    <p>
      <code>git push</code> mengunggah commit lokal ke repositori GitHub. Gunakan opsi{" "}
      <code>-u origin main</code> pada pengiriman pertama untuk menetapkan jalur pelacakan cabang secara otomatis.
    </p>
  ),
  exercise: (
    <p>
      Jalankan perintah <code>git push -u origin main</code> pada proyek <code>belajar-git</code>, lalu
      buka repositori kamu di browser untuk memverifikasi bahwa file proyek sudah terunggah sempurna.
    </p>
  ),
};
