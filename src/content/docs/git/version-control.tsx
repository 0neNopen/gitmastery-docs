import type { LessonContent } from "@/types/lesson";

export const versionControl: LessonContent = {
  title: "Apa Itu Version Control?",
  seoTitle: "Version Control Adalah? - Konsep Dasar Git",
  description: "Memahami konsep dasar Version Control dan mengapa developer modern selalu menggunakannya.",
  objectives: [
    "Paham pengertian version control tanpa istilah rumit",
    "Mengerti alasan utama developer membutuhkan version control",
    "Melihat contoh nyata masalah yang timbul tanpa version control",
  ],
  explanation: (
    <>
      <p>
        <strong>Version control</strong> (sistem pengontrol versi) adalah sistem yang merekam setiap
        perubahan pada file dari waktu ke waktu. Tujuannya agar kamu bisa melihat riwayat lengkap
        pengembangan proyek, membandingkan perubahan, dan kembali ke versi stabil kapan pun jika
        versi terbaru mengalami masalah.
      </p>
      <p>
        Bayangkan saat kamu mengerjakan file <code>index.html</code> pada proyek <code>belajar-git</code>.
        Tanpa version control, skenario yang sering terjadi adalah:
      </p>
      <ol>
        <li>
          <code>index.html</code>
        </li>
        <li>
          <code>index_v2.html</code>
        </li>
        <li>
          <code>index_v2_fix.html</code>
        </li>
        <li>
          <code>index_final.html</code>
        </li>
        <li>
          <code>index_final_beneran.html</code>
        </li>
      </ol>
      <p>
        Setelah beberapa minggu, kamu akan lupa perbedaan antara <code>index_v2.html</code> dan{" "}
        <code>index_v2_fix.html</code>, serta mana yang sebenarnya sedang aktif digunakan. Ini adalah
        masalah umum saat belum menerapkan version control.
      </p>
      <p>
        Dengan version control, kamu cukup mempertahankan satu file <code>index.html</code>. Setiap
        kali ada pembaruan penting, kamu menyimpannya sebagai satu titik riwayat (dikenal dengan
        istilah <em>commit</em>), lengkap dengan catatan alasan perubahannya. Seluruh versi terdahulu
        tetap tersimpan aman di dalam sistem riwayat, bukan berserakan sebagai file terpisah.
      </p>
      <p>
        Git adalah salah satu alat version control terpopuler di dunia. Git menyimpan seluruh basis
        data riwayat di dalam folder tersembunyi bernama <code>.git</code> pada proyek kamu. Kamu
        tidak perlu menyunting folder tersebut secara langsung karena Git mengelola semuanya
        secara otomatis di balik layar.
      </p>
    </>
  ),
  commonMistakes: (
    <p>
      Banyak yang mengira version control sama persis dengan backup biasa. Perbedaannya, version
      control mencatat setiap perubahan secara bertahap dan mendetail beserta deskripsinya, bukan
      sekadar menyalin seluruh file cadangan di akhir pekerjaan.
    </p>
  ),
  codeExample: {
    label: "bash",
    code: `# Setelah Git diinisialisasi, folder tersembunyi ini yang menyimpan seluruh riwayat proyek\n$ ls -la\n.git/`,
  },
  summary: (
    <p>
      Version control adalah sistem untuk mengelola riwayat perubahan file secara rapi dan
      terstruktur tanpa perlu menduplikasi file manual. Git adalah alat pengontrol versi standar
      industri yang akan kita gunakan sepanjang panduan ini.
    </p>
  ),
  exercise: (
    <p>
      Jelaskan dengan bahasamu sendiri: jika ada rekan yang bertanya apa fungsi utama version control,
      bagaimana kamu menjelaskannya dalam satu kalimat sederhana?
    </p>
  ),
};
