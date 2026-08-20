import type { LessonContent } from "@/types/lesson";

/**
 * Solusi untuk "salah commit" — undo commit lokal vs commit yang sudah
 * di-push. Topik dijanjikan di `case-studies.ts`.
 */
export const salahCommit: LessonContent = {
  title: "Salah Commit, Ingin Membatalkan",
  seoTitle: "Undo Commit Git - Reset vs Revert, Bedanya untuk Pemula",
  description:
    "Perbedaan cara membatalkan commit yang masih berstatus lokal dibandingkan commit yang sudah terlanjur di-push ke server.",
  objectives: [
    "Mengetahui dua skenario pembatalan: commit lokal vs commit yang sudah di-push",
    "Mampu menggunakan git reset untuk membatalkan commit lokal secara rapi",
    "Mampu menggunakan git revert untuk membatalkan commit secara aman tanpa merusak riwayat tim",
  ],
  explanation: (
    <>
      <p>
        Pertanyaan mendasar sebelum memilih perintah pembatalan:{" "}
        <strong>apakah commit ini sudah di-push ke GitHub atau belum?</strong>
      </p>
      <p>
        <strong>Skenario 1 (Masih Lokal / Belum di-push):</strong> Sangat aman untuk
        mengubah atau membatalkan commit dari riwayat lokal karena belum ada rekan tim yang menarik kode tersebut.
        Perintah yang digunakan adalah <code>git reset</code>.
      </p>
      <ul>
        <li>
          <code>git reset --soft HEAD~1</code>: membatalkan commit terakhir, namun berkas perubahan tetap berada
          di staging area sehingga siap diperbaiki dan di-commit ulang.
        </li>
        <li>
          <code>git reset --mixed HEAD~1</code>: membatalkan commit dan mengembalikan berkas ke direktori kerja
          (belum di-staging).
        </li>
        <li>
          <code>git reset --hard HEAD~1</code>: membatalkan commit sekaligus menghapus seluruh perubahan berkas secara permanen.
        </li>
      </ul>
      <p>
        <strong>Skenario 2 (Sudah di-push ke Server):</strong> Jangan mengubah atau menghapus riwayat yang sudah diunduh orang lain.
        Solusi terbaik adalah membuat commit baru yang membalikkan efek commit sebelumnya menggunakan <code>git revert</code>.
      </p>
      <p>
        Perintah <code>git revert &lt;hash&gt;</code> akan secara otomatis membuat commit baru yang membatalkan isi perubahan dari commit{" "}
        <code>&lt;hash&gt;</code> tanpa memanipulasi riwayat masa lalu sehingga sangat aman untuk kolaborasi tim.
      </p>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `# Skenario 1: undo commit lokal yang salah (commit terakhir)
$ git reset --soft HEAD~1

# Cek: perubahan masih ada di staging area
$ git status

# Skenario 2: undo commit yang sudah di-push
$ git revert <hash-commit-salah>

# Git otomatis membuat commit baru yang membatalkan perubahan
# Push seperti biasa
$ git push`,
  },
  output: {
    label: "output",
    code: `[main 9f8e7d6] Revert "Menambahkan paragraf yang salah"
 1 file changed, 1 deletion(-)`,
  },
  tips: (
    <p>
      Jika ragu apakah commit sudah terkirim ke server, periksa dengan perintah{" "}
      <code>git log origin/main..main</code>. Jika ada baris commit yang tampil, artinya commit tersebut masih berada di lokal.
      Jika ragu, gunakan <code>git revert</code> karena selalu menjadi opsi paling aman.
    </p>
  ),
  commonMistakes: (
    <p>
      Menjalankan <code>git reset --hard</code> pada commit yang sudah di-push. Tindakan ini membuat riwayat lokal tertinggal
      dari remote sehingga push berikutnya akan ditolak server. Jika terjadi, gunakan <code>git revert</code> untuk memulihkan keadaan.
    </p>
  ),
  summary: (
    <p>
      Gunakan <code>git reset</code> untuk commit lokal, dan gunakan <code>git revert</code> untuk commit yang sudah di-push.
      Reset mengubah riwayat di komputermu, sedangkan revert menambahkan commit pembalik baru tanpa merusak riwayat bersama.
    </p>
  ),
  exercise: (
    <p>
      Buat sebuah commit latihan di branch lokal, batalkan menggunakan{" "}
      <code>git reset --soft HEAD~1</code>, perbaiki pesannya, lalu commit
      kembali. Setelah itu, buat commit baru lalu jalankan <code>git revert HEAD</code> untuk melihat bagaimana Git
      membuat commit pembalik secara otomatis.
    </p>
  ),
};