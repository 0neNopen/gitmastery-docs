import type { LessonContent } from "@/types/lesson";

/**
 * Solusi untuk `merge conflict` — kasus yang dijanjikan di
 * `case-studies.ts` sebagai hasil pencarian "merge conflict" /
 * "konflik merge". Konten mengikuti pola `docs/git/merge.tsx`
 * (explanation + codeExample + output + tips + commonMistakes +
 * summary + exercise) sehingga template, TOC, dan search tidak perlu
 * membedakan halaman ini dari lesson biasa.
 */
export const mergeConflict: LessonContent = {
  title: "Mengatasi Merge Conflict",
  seoTitle: "Cara Mengatasi Merge Conflict di Git - Panduan Pemula",
  description:
    "Panduan praktis membaca marker konflik kode, memilih revisi yang tepat, dan menyelesaikan proses merge conflict secara aman.",
  objectives: [
    "Mengenali indikasi terjadinya merge conflict pada terminal dan struktur file",
    "Mampu meninjau dan memilih versi baris kode yang benar secara manual",
    "Mampu menyelesaikan konflik hingga tahap akhir commit dengan aman",
  ],
  explanation: (
    <>
      <p>
        Merge conflict terjadi ketika Git tidak dapat menggabungkan perubahan baris secara otomatis,
        misalnya saat kamu dan rekan tim mengubah baris yang sama di berkas yang sama dari cabang berbeda.
        Karena Git tidak dapat menebak versi mana yang harus dipertahankan, proses penggabungan dijeda agar
        kamu dapat menentukan pilihan secara manual.
      </p>
      <p>
        Pesan yang muncul biasanya seperti ini:
        <code>CONFLICT (content): Merge conflict in index.html</code>{" "}
        diikuti <code>Automatic merge failed; fix conflicts and then commit
        the result.</code>
      </p>
      <p>Langkah penyelesaian konflik:</p>
      <ol>
        <li>
          Buka file yang bermasalah. Git telah menandai area perbedaan menggunakan blok marker yang dimulai dengan{" "}
          <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> dan diakhiri dengan <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.
        </li>
        <li>
          Sunting file: tentukan kode yang ingin dipertahankan atau padukan kedua kode tersebut. Hapus seluruh tanda marker (
          <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>)
          setelah selesai.
        </li>
        <li>
          Jalankan <code>git add</code> pada file yang telah diperbaiki, lalu selesaikan dengan <code>git commit</code>.
        </li>
      </ol>
    </>
  ),
  codeExample: {
    label: "bash",
    code: `# 1. lihat file yang konflik
$ git status

# 2. buka dan perbaiki file yang ditandai "Unmerged paths"
# (hapus marker <<<<<<<, =======, >>>>>>>)

# 3. setelah selesai, tandai file sudah resolved
$ git add index.html

# 4. selesaikan merge
$ git commit -m "Resolve merge conflict in index.html"`,
  },
  output: {
    label: "output",
    code: `On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")
Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")`,
  },
  tips: (
    <p>
      Sebelum mengedit, periksa daftar berkas yang bermasalah dengan perintah{" "}
      <code>git diff --name-only --diff-filter=U</code>. Pada penanda konflik, baris di atas <code>=======</code>{" "}
      merupakan versi cabang aktif saat ini (<em>current branch</em>), sedangkan baris di bawahnya adalah versi cabang yang digabungkan (<em>incoming branch</em>).
    </p>
  ),
  commonMistakes: (
    <p>
      Menghapus kode secara terburu-buru tanpa membaca isinya. Konflik sering kali diselesaikan dengan cara memadukan
      kedua logika kode, bukan sekadar membuang salah satu versi.
    </p>
  ),
  summary: (
    <p>
      Merge conflict adalah proses normal dalam kolaborasi tim. Buka file yang berkonflik, tentukan baris akhir terbaik,
      bersihkan marker penanda, lalu jalankan <code>git add</code> dan <code>git commit</code>.
    </p>
  ),
  exercise: (
    <p>
      Buat dua branch latihan, modifikasi baris yang sama pada <code>README.md</code> di kedua cabang tersebut, lalu lakukan merge.
      Amati penanda konflik yang muncul, sunting kodenya secara manual, dan tuntaskan proses merge dengan{" "}
      <code>git add</code> serta <code>git commit</code>.
    </p>
  ),
};