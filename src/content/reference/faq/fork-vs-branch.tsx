import type { LessonContent } from "@/types/lesson";

export const forkVsBranch: LessonContent = {
  title: "Fork vs Branch: Kapan Memakai yang Mana?",
  seoTitle: "Fork vs Branch di Git dan GitHub - Kapan Pakai yang Mana",
  description:
    "Fork digunakan saat kamu tidak memiliki akses tulis ke repositori utama. Branch digunakan saat kamu telah tergabung sebagai kontributor resmi dalam tim.",
  objectives: [
    "Memahami perbedaan teknis antara fork dan branch",
    "Mengetahui situasi yang tepat untuk menggunakan masing-masing fitur",
    "Mampu berkontribusi ke proyek open source melalui mekanisme fork",
  ],
  explanation: (
    <>
      <p>
        <strong>Branch:</strong> Jalur pengembangan paralel di dalam repositori yang sama. Kamu dan rekan tim
        bekerja di repositori bersama pada cabang berbeda. Untuk membuat branch langsung di proyek, kamu membutuhkan
        hak akses penulisan (<em>write access</em>).
      </p>
      <p>
        <strong>Fork:</strong> Salinan utuh repositori milik orang lain ke dalam akun GitHub kamu sendiri. Kamu memiliki
        hak akses penuh pada repositori fork tersebut, namun tidak memiliki hak modifikasi langsung di repositori asli.
        Ini adalah mekanisme standar kontribusi proyek <em>open source</em>: kamu membuat fork, menyunting kode di repositori
        fork milikmu, lalu mengajukan Pull Request ke pemilik repositori utama.
      </p>
      <p>
        Panduan ringkas penggunaan:
      </p>
      <ul>
        <li>
          <strong>Gunakan branch:</strong> Jika kamu adalah anggota tim internal dengan hak akses repositori bersama.
        </li>
        <li>
          <strong>Gunakan fork:</strong> Jika kamu ingin berkontribusi pada proyek publik atau repositori pihak ketiga tanpa hak akses langsung.
        </li>
      </ul>
    </>
  ),
  diagram: {
    caption: "Fork (salin repo) vs Branch (jalur di repo yang sama)",
    content: (
      <pre className="text-sm font-mono">
        {`FORK                          BRANCH
github.com/owner/repo         github.com/team/repo
       │                            │
       ▼  (fork)                    │  main
github.com/you/repo           ──●──●──●──
       │                         \\ feature
       │ branch + commit           ──●──●
       ▼
Pull Request → owner/repo`}
      </pre>
    ),
  },
  codeExample: {
    label: "bash",
    code: `# Fork: clone fork-mu, buat branch, push, lalu buat PR
git clone https://github.com/KAMU/repo-fork.git
cd repo-fork
git checkout -b fix/typo-readme
# ... buat perubahan ...
git add .
git commit -m "fix: perbaiki typo di README"
git push origin fix/typo-readme
# Buka GitHub → buat Pull Request ke repo asli

# Branch (sudah punya akses ke repo asli):
git checkout -b feature/user-login
# ... buat perubahan ...
git push origin feature/user-login
# Buka GitHub → buat Pull Request ke main`,
  },
  tips: (
    <p>
      Saat berkontribusi via fork, tambahkan remote ke repo asli agar kamu
      bisa sync update:{" "}
      <code>git remote add upstream https://github.com/owner/repo.git</code>.
      Lalu <code>git fetch upstream</code> dan{" "}
      <code>git merge upstream/main</code> untuk menjaga fork-mu tetap
      up-to-date.
    </p>
  ),
  summary: (
    <p>
      Branch sangat tepat untuk kolaborasi internal tim pada repositori bersama. Fork digunakan untuk berkontribusi
      ke proyek eksternal. Keduanya bermuara pada pengajuan Pull Request dengan alur peninjauan kode yang serupa.
    </p>
  ),
  exercise: (
    <p>
      Cari repositori open source di GitHub, lakukan fork ke akunmu, clone ke komputer lokal, buat branch baru, dan
      lakukan perubahan kecil pada dokumentasi. Push ke repositori fork dan amati tombol &ldquo;Contribute&rdquo;
      di antarmuka GitHub untuk mengajukan Pull Request.
    </p>
  ),
};
