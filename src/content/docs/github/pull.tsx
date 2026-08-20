import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const pull: LessonContent = {
  title: "Pull",
  seoTitle: "Git Pull - Cara Mengambil Update dari GitHub",
  description: "Mengambil dan menyinkronkan pembaruan kode terbaru dari GitHub ke komputer lokal.",
  objectives: ["Memahami fungsi dan mekanisme git pull", "Mengetahui waktu yang tepat untuk melakukan pull"],
  explanation: (
    <>
      <p>
        Jika <code>push</code> mengirimkan data lokal ke GitHub, maka <code>pull</code> adalah
        kebalikannya, yaitu menarik dan menyatukan pembaruan dari repositori GitHub ke komputer lokal kamu.
      </p>
      <p>
        Analoginya: bayangkan repositori GitHub seperti papan pengumuman bersama. Jika rekan tim (atau kamu
        sendiri dari komputer lain) telah mengunggah pembaruan ke sana, komputer lokalmu saat ini belum
        mengetahuinya sampai kamu mengeksekusi <code>git pull</code> untuk menyinkronkan seluruh berkas.
      </p>
      <p>
        Kamu disarankan selalu menjalankan <code>git pull</code> sebelum memulai sesi penulisan kode baru
        untuk memastikan basis kode lokal selalu mutakhir dan menghindari potensi konflik kode.
      </p>
    </>
  ),
  diagram: {
    caption: "Alur penarikan pembaruan terkini dari server GitHub",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "GitHub", description: "Ada perubahan baru" },
          { label: "git pull", description: "Diambil" },
          { label: "Repository lokal", description: "Ikut ter-update" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `$ git pull origin main`,
  },
  output: {
    label: "output",
    code: `From https://github.com/username/belajar-git\n * branch            main       -> FETCH_HEAD\nUpdating a1b2c3d..e4f5g6h\nFast-forward\n README.md | 2 ++\n 1 file changed, 2 insertions(+)`,
  },
  tips: (
    <p>
      Biasakan menjalankan <code>git pull</code> di awal setiap sesi kerja sebelum membuat perubahan baru.
      Kebiasaan ini menjaga keharmonisan riwayat repositori saat bekerja dalam tim.
    </p>
  ),
  commonMistakes: (
    <p>
      Lupa melakukan <code>pull</code> sebelum bekerja, lalu mengalami penolakan saat melakukan <code>push</code>{" "}
      karena ada commit di server yang mendahului commit lokal. Solusinya: lakukan <code>pull</code> terlebih dahulu,
      baru lakukan <code>push</code> kembali.
    </p>
  ),
  summary: (
    <p>
      <code>git pull</code> menarik seluruh commit terbaru dari GitHub ke repositori lokal. Jalankan perintah ini
      di awal setiap sesi kerja agar status proyek selalu sinkron.
    </p>
  ),
  exercise: (
    <p>
      Buka repositori <code>belajar-git</code> di website GitHub, sunting file <code>README.md</code> langsung
      lewat browser, lalu simpan commit tersebut. Kembali ke terminal dan jalankan <code>git pull origin main</code>{" "}
      untuk memastikan baris perubahan tersebut terunduh ke komputermu.
    </p>
  ),
};
