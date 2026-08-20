import type { LessonContent } from "@/types/lesson";

export const offline: LessonContent = {
  title: "Apakah Git Butuh Koneksi Internet?",
  seoTitle: "Git Bisa Digunakan Offline - Panduan Pemula GitMastery",
  description:
    "Git dirancang sebagai sistem terdistribusi di mana hampir semua operasi berjalan lokal tanpa internet. Koneksi hanya dibutuhkan saat sinkronisasi.",
  objectives: [
    "Memahami bahwa Git adalah sistem terdistribusi yang bekerja offline",
    "Mengetahui operasi mana yang lokal dan mana yang memerlukan jaringan internet",
    "Mampu bekerja produktif dengan Git dalam kondisi offline",
  ],
  explanation: (
    <>
      <p>
        Git dirancang sebagai <em>distributed version control system</em>. Ini
        artinya setiap developer menyimpan salinan penuh dari seluruh riwayat
        proyek di komputernya sendiri. Kamu tidak perlu terhubung ke server
        pusat untuk melakukan sebagian besar pekerjaan.
      </p>
      <p>Operasi yang berjalan <strong>100% lokal</strong> (tidak butuh internet):</p>
      <ul>
        <li><code>git init</code>, <code>git add</code>, <code>git commit</code></li>
        <li><code>git log</code>, <code>git diff</code>, <code>git status</code></li>
        <li><code>git branch</code>, <code>git checkout</code>, <code>git merge</code></li>
        <li><code>git stash</code>, <code>git reset</code>, <code>git revert</code></li>
      </ul>
      <p>Operasi yang <strong>butuh koneksi internet</strong>:</p>
      <ul>
        <li><code>git push</code>: mengirim commit ke server remote</li>
        <li><code>git pull</code> / <code>git fetch</code>: mengambil pembaruan dari server remote</li>
        <li><code>git clone</code>: mengunduh repositori untuk pertama kali</li>
      </ul>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `# Semua ini berjalan offline
git init my-project
cd my-project
echo "Hello" > README.md
git add README.md
git commit -m "first commit"
git log --oneline
git branch feature
git checkout feature

# Hanya ini yang butuh internet
git push origin main
git pull origin main`,
  },
  tips: (
    <p>
      Saat bekerja di perjalanan tanpa akses Wi-Fi, kamu tetap bisa membuat commit secara leluasa.
      Begitu tersambung kembali ke internet, cukup satu kali <code>git push</code> untuk mengirimkan
      seluruh commit tersebut sekaligus.
    </p>
  ),
  summary: (
    <p>
      Git bekerja offline untuk semua operasi inti. Koneksi internet hanya
      dibutuhkan saat berinteraksi dengan remote repository: <code>push</code>,{" "}
      <code>pull</code>, <code>fetch</code>, dan <code>clone</code>. Hal ini
      menjadikan Git sangat andal di segala situasi.
    </p>
  ),
  exercise: (
    <p>
      Coba nonaktifkan koneksi internet di komputermu, buat repositori baru, tambahkan tiga berkas,
      lakukan commit secara terpisah, lalu periksa riwayatnya menggunakan <code>git log --oneline</code>.
      Seluruh proses berjalan mulus tanpa membutuhkan jaringan.
    </p>
  ),
};
