import type { LessonContent } from "@/types/lesson";

/**
 * Solusi untuk "push ditolak" (`! [rejected]`) — dua skenario paling
 * umum dan cara menanganinya. Topik dijanjikan di `case-studies.ts`.
 */
export const pushDitolak: LessonContent = {
  title: "Push Ditolak (Rejected)",
  seoTitle: "Git Push Rejected - Solusi Non-fast-forward dan Protected Branch",
  description:
    "Penyebab penolakan proses push ke repositori remote dan solusi mengatasinya secara aman tanpa merusak riwayat tim.",
  objectives: [
    "Memahami arti pesan error non-fast-forward dan protected branch",
    "Mampu memilih antara git pull biasa vs git pull --rebase untuk proses sinkronisasi",
    "Mengetahui prosedur saat push ditolak akibat aturan proteksi cabang (protected branch)",
  ],
  explanation: (
    <>
      <p>
        Proses push paling sering ditolak karena server remote memiliki commit baru yang belum ada di komputer lokalmu.
        Pesan yang tampil umumnya berupa: <code>! [rejected] main -&gt; main (non-fast-forward)</code>.
        Solusinya: sinkronkan pembaruan dari server terlebih dahulu sebelum mencoba push kembali.
      </p>
      <p>
        Dua metode sinkronisasi yang dapat dipilih:
      </p>
      <ul>
        <li>
          <code>git pull</code>: membuat commit penggabungan (merge commit) baru yang menyatukan riwayat lokal dan remote.
        </li>
        <li>
          <code>git pull --rebase</code>: memposisikan commit lokal kamu tepat di atas commit remote terbaru sehingga
          riwayat commit tetap linear dan rapi tanpa tambahan merge commit.
        </li>
      </ul>
      <p>
        Penyebab lainnya adalah proteksi cabang (<em>protected branch</em>). Pada repositori organisasi atau tim profesional,
        cabang <code>main</code> sering dikunci agar tidak menerima push langsung. Solusinya adalah membuat branch fitur baru
        lalu mengajukan Pull Request.
      </p>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `# Sync dengan remote dulu (pilihan 1: merge)
$ git pull
$ git push

# Sync dengan remote (pilihan 2: rebase, history lebih bersih)
$ git pull --rebase
$ git push

# Kalau push ke protected branch ditolak, push ke branch baru saja
$ git switch -c fitur-baru
$ git push -u origin fitur-baru
# Lalu buka Pull Request lewat UI GitHub`,
  },
  output: {
    label: "output",
    code: `To https://github.com/username/belajar-git.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/username/belajar-git.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes before pushing again.`,
  },
  tips: (
    <p>
      Untuk alur kerja tim harian, pertimbangkan menggunakan <code>git pull --rebase</code> agar grafik riwayat commit
      pada <code>git log --graph</code> tetap lurus dan mudah dipelajari.
    </p>
  ),
  commonMistakes: (
    <p>
      Menggunakan <code>git push --force</code> untuk memaksa pengiriman. Tindakan ini sangat berisiko karena dapat
      menimpa dan melenyapkan commit rekan tim di server. Gunakan opsi ini hanya pada branch pribadi saat benar-benar diperlukan.
    </p>
  ),
  summary: (
    <p>
      Push ditolak menandakan bahwa posisi branch di server lebih mutakhir dibanding lokal. Unduh pembaruan menggunakan{" "}
      <code>git pull --rebase</code> lalu lakukan push ulang. Jika branch terproteksi, ajukan pembaruan melalui Pull Request.
    </p>
  ),
  exercise: (
    <p>
      Coba lakukan simulasi dengan membuat commit langsung di GitHub melalui web browser, lalu buat commit baru di lokal.
      Jalankan <code>git push</code> dan perhatikan penolakannya. Selesaikan masalah tersebut menggunakan{" "}
      <code>git pull --rebase</code> dan lakukan push ulang hingga berhasil.
    </p>
  ),
};