import Link from "next/link";

import type { LessonContent } from "@/types/lesson";

export const undoCommit: LessonContent = {
  title: "Cara Membatalkan Commit Terakhir",
  seoTitle: "Cara Undo Commit Terakhir di Git - reset vs revert",
  description:
    "Dua metode utama membatalkan commit: git reset untuk riwayat lokal dan git revert untuk commit yang sudah diunggah ke server.",
  objectives: [
    "Memahami perbedaan konsep antara git reset dan git revert",
    "Mengetahui kapan menggunakan reset (lokal) vs revert (sudah di-push)",
    "Mampu membatalkan commit terakhir secara aman",
  ],
  explanation: (
    <>
      <p>
        Ada dua pendekatan untuk membatalkan commit, dan pilihan yang tepat
        bergantung pada apakah commit sudah di-push ke remote atau belum.
      </p>
      <h3>git reset: hapus commit dari riwayat lokal</h3>
      <p>
        Gunakan ini jika commit <em>belum di-push</em> dan hanya ada di komputer lokal.
        <code>git reset --soft HEAD~1</code> membatalkan commit namun menyimpan
        perubahan di staging area. <code>git reset --hard HEAD~1</code>{" "}
        membatalkan commit sekaligus membuang semua perubahan secara permanen.
      </p>
      <h3>git revert: buat commit pembalik baru</h3>
      <p>
        Gunakan ini jika commit <em>sudah di-push</em>. Daripada menghapus
        riwayat masa lalu yang dapat merusak sinkronisasi rekan tim, <code>git revert</code>{" "}
        membuat commit baru yang membalikkan perubahan tersebut secara transparan dan aman.
      </p>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `# Opsi 1: reset (hanya jika belum push)
# Batalkan commit, simpan perubahan di staging
git reset --soft HEAD~1

# Batalkan commit DAN buang perubahan (hati-hati!)
git reset --hard HEAD~1

# Opsi 2: revert (aman untuk commit yang sudah push)
# Buat commit baru yang membalik commit terakhir
git revert HEAD

# Revert tanpa langsung commit (review dulu)
git revert HEAD --no-commit`,
  },
  output: {
    label: "output",
    code: `# Setelah git revert HEAD
[main 3f9a2c1] Revert "tambah fitur login"
 1 file changed, 5 deletions(-)`,
  },
  tips: (
    <p>
      Aturan sederhana: jika commit sudah berada di remote GitHub, selalu gunakan{" "}
      <code>git revert</code>. Jika commit masih berada di lokal, kamu bebas memilih antara{" "}
      <code>reset --soft</code> (menyimpan perubahan) atau <code>reset --hard</code> (membuang
      perubahan). Untuk panduan langkah demi langkah saat terlanjur salah commit beserta pengecekan{" "}
      <code>git log origin/main..main</code>, lihat juga studi kasus{" "}
      <Link href="/troubleshooting/salah-commit">Salah Commit, Ingin Membatalkan</Link>.
    </p>
  ),
  commonMistakes: (
    <p>
      Menggunakan <code>git reset --hard</code> pada commit yang sudah
      di-push. Tindakan ini membuat riwayat lokal berbeda dari remote sehingga{" "}
      <code>git push</code> berikutnya akan ditolak.
    </p>
  ),
  summary: (
    <p>
      Gunakan <code>git reset</code> untuk commit yang belum di-push (lokal
      saja), dan <code>git revert</code> untuk commit yang sudah di-push ke
      remote. Revert selalu menjadi pilihan teraman untuk kolaborasi tim.
    </p>
  ),
  exercise: (
    <p>
      Buat repository lokal baru, buat 3 commit, lalu praktikkan{" "}
      <code>git reset --soft HEAD~1</code> dan amati hasilnya dengan{" "}
      <code>git log --oneline</code> dan <code>git status</code>. Kemudian
      buat commit ulang dan coba jalankan <code>git revert HEAD</code> untuk melihat
      bagaimana riwayat commit baru terbentuk.
    </p>
  ),
};
