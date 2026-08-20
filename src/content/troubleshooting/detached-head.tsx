import type { LessonContent } from "@/types/lesson";

/**
 * Solusi untuk "detached HEAD" — muncul saat kamu checkout ke commit
 * tertentu, bukan ke branch. Topik ini dijanjikan di
 * `case-studies.ts` (id: case-study-detached-head).
 */
export const detachedHead: LessonContent = {
  title: "Keluar dari Detached HEAD",
  seoTitle: "Detached HEAD di Git - Penyebab dan Cara Mengatasinya",
  description:
    "Memahami penyebab kondisi detached HEAD dan panduan aman kembali ke cabang utama tanpa kehilangan commit.",
  objectives: [
    "Memahami konsep HEAD dan penyebab terpisahnya dari branch",
    "Mampu kembali ke branch kerja secara aman",
    "Mampu menyelamatkan commit yang dibuat saat berada di kondisi detached HEAD",
  ],
  explanation: (
    <>
      <p>
        <strong>HEAD</strong> adalah penunjuk (<em>pointer</em>) di Git yang menandai posisi kerja kamu
        saat ini. Dalam kondisi normal, HEAD menunjuk ke sebuah branch (misalnya <code>main</code>),
        dan branch tersebut menunjuk ke commit terbaru. Saat kamu berpindah langsung ke hash commit tertentu
        (misalnya <code>git checkout a1b2c3d</code>), HEAD akan menunjuk langsung ke commit tersebut dan
        terlepas dari branch. Kondisi inilah yang dinamakan <em>detached HEAD</em>.
      </p>
      <p>
        Kondisi ini aman jika kamu hanya ingin membaca atau menginspeksi kode lama. Namun, jika kamu membuat
        commit baru di posisi ini, commit tersebut tidak terikat pada branch mana pun dan berisiko terhapus
        oleh mekanisme pembersihan otomatis Git di kemudian hari.
      </p>
      <p>Langkah keluar dari detached HEAD:</p>
      <ol>
        <li>
          <strong>Jika hanya melihat-lihat:</strong> Jalankan <code>git switch -</code> untuk kembali ke branch
          terakhir yang kamu gunakan.
        </li>
        <li>
          <strong>Jika telah membuat commit baru:</strong> Jalankan <code>git switch -c nama-branch-baru</code>{" "}
          untuk membuat branch baru dari posisi saat ini sehingga seluruh commit baru tersimpan dengan aman.
        </li>
      </ol>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `# Lihat status - apakah ada commit baru yang belum tersimpan?
$ git status

# Opsi 1: kembali ke branch asal (kalau tidak ada commit baru)
$ git switch -

# Opsi 2: simpan commit baru di branch baru
$ git switch -c percobaan-detached

# Verifikasi kembali normal
$ git status`,
  },
  output: {
    label: "output",
    code: `HEAD detached at a1b2c3d
nothing to commit, working tree clean`,
  },
  tips: (
    <p>
      Jika kamu terlanjur berpindah branch dan kehilangan commit dari sesi detached HEAD, jalankan{" "}
      <code>git reflog</code> untuk menemukan hash commit tersebut, lalu buat branch menggunakan{" "}
      <code>git switch -c nama-branch &lt;hash&gt;</code>.
    </p>
  ),
  commonMistakes: (
    <p>
      Melanjutkan penulisan kode dalam kondisi detached HEAD tanpa menyadarinya. Selalu periksa dengan{" "}
      <code>git status</code>. Jika muncul peringatan &ldquo;HEAD detached&rdquo;, segera buat branch baru
      atau kembali ke cabang utama.
    </p>
  ),
  summary: (
    <p>
      Detached HEAD adalah fitur eksplorasi kode historis. Jika kamu membuat commit baru pada kondisi ini,
      segera amankan dengan membuat branch baru lewat <code>git switch -c nama-branch</code>.
    </p>
  ),
  exercise: (
    <p>
      Jalankan <code>git log --oneline</code>, pilih satu commit lama, lalu pindah menggunakan{" "}
      <code>git checkout &lt;hash&gt;</code>. Amati statusnya, buat satu commit latihan, lalu amankan commit
      tersebut ke cabang baru menggunakan <code>git switch -c eksperimen-detached</code>.
    </p>
  ),
};