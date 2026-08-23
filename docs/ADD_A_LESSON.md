# Menambah Modul Materi Baru

Panduan langkah demi langkah untuk menambahkan satu halaman materi baru ke `/docs`. Di akhir panduan ini, materi Anda akan otomatis muncul di: **rute halaman**, **sidebar**, **navigasi Previous/Next**, dan **hasil pencarian (⌘K)** — tanpa menyentuh file routing atau komponen apa pun.

> Latar belakang arsitekturnya: baca [ARCHITECTURE.md](./ARCHITECTURE.md).

---

## Ringkasan: Hanya 3 Perubahan

| # | File | Apa yang dilakukan |
|---|---|---|
| 1 | `src/content/docs/<kategori>/<slug>.tsx` | **Baru** — isi materinya |
| 2 | `src/content/docs/<kategori>/index.ts` | Daftarkan file itu ke registry |
| 3 | `src/config/docs-structure.ts` | Masukkan slug ke array `order` kategorinya |

Itu saja. Sisanya diturunkan otomatis oleh sistem.

---

## Langkah 0 — Siapkan Lingkungan

```bash
npm install
npm run dev        # buka http://localhost:3000
```

## Langkah 1 — Tentukan Slug

Slug adalah segmen URL sekaligus identitas modul, misalnya `git-add` → `/docs/git/git-add`.

Aturan:
- Huruf kecil semua, tanda hubung sebagai pemisah (`git-add`, bukan `gitAdd`).
- Harus **sama persis** di dua tempat nanti (Langkah 3 dan 4) — perbedaan satu huruf membuat halaman "hilang" tanpa error.

## Langkah 2 — Tulis File Kontennya

Buat `src/content/docs/git/git-add.tsx` (contoh untuk kategori Git). Setiap file adalah satu objek `LessonContent`:

```tsx
import { WorkflowDiagram } from "@/components/lesson/WorkflowDiagram";
import type { LessonContent } from "@/types/lesson";

export const gitAdd: LessonContent = {
  title: "Memindahkan ke Staging",
  seoTitle: "Git Add - Cara Memindahkan File ke Staging Area",
  description: "Ringkasan satu kalimat yang tampil di kartu materi dan hasil pencarian.",
  objectives: [
    "Paham fungsi staging area dengan bahasa sederhana",
    "Bisa memindahkan file ke staging dengan git add",
  ],
  explanation: (
    <>
      <p>
        Penjelasan konsep utama. Boleh memakai <code>&lt;p&gt;</code>,{" "}
        <code>&lt;ol&gt;</code>, <code>&lt;strong&gt;</code>, dan{" "}
        <code>&lt;code&gt;</code> seperti pada modul lain.
      </p>
    </>
  ),
  diagram: {
    caption: "Alur kerja git add",
    content: (
      <WorkflowDiagram
        steps={[
          { label: "Working directory", description: "File baru" },
          { label: "git add", description: "Dipilih untuk disimpan" },
          { label: "Staging area", description: "Siap di-commit" },
        ]}
      />
    ),
  },
  codeExample: {
    label: "bash",
    code: `$ git add nama-file.txt`,
  },
  output: {
    label: "output",
    code: `(tidak ada output berarti berhasil)`,
  },
  tips: <p>Satu tip singkat yang benar-benar berguna.</p>,
  commonMistakes: <p>Kesalahan paling umum pemula terkait topik ini.</p>,
  summary: (
    <p>Rangkuman 1–3 kalimat.</p>
  ),
  exercise: (
    <p>
      Latihan konkret yang bisa dipraktikkan langsung di terminal pembaca.
    </p>
  ),
};
```

Catatan field:
- Wajib: `title`, `description`, `objectives`, `explanation`, `codeExample`, `summary`, `exercise`.
- Opsional (boleh dihapus seluruh bloknya): `seoTitle`, `diagram`, `output`, `tips`, `commonMistakes`. Seksi yang tidak ada otomatis hilang dari halaman **dan** dari daftar isi.
- `seoTitle` diisi agar judul di tab browser & mesin pencari deskriptif; `title` tetap pendek karena menjadi `<h1>` dan label sidebar.
- Lihat contoh nyata yang sudah matang: `src/content/docs/git/init.tsx`.

## Langkah 3 — Daftarkan di Registry Kategori

Buka `src/content/docs/git/index.ts`, tambahkan import lalu key objek:

```ts
import { gitAdd } from "./git-add";
// ...
export const gitDocs: Record<string, LessonContent> = {
  // ...
  "git-add": gitAdd,
};
```

**Key inilah slug-nya.** Tidak ada field slug lain di mana pun.

## Langkah 4 — Posisikan dalam Kurikulum

Buka `src/config/docs-structure.ts` dan sisipkan slug ke array `order`:

```ts
{
  slug: "git",
  label: "Git",
  order: [
    // ...slug lain
    "git-add",   // posisi di sini = urutan sidebar & urutan Previous/Next
  ],
},
```

Letakkan sesuai alur belajar — urutan array adalah urutan membaca.

## Langkah 5 — Verifikasi di Browser

Dengan `npm run dev` masih jalan, cek empat hal:

- [ ] Halaman terbuka: `http://localhost:3000/docs/git/git-add`
- [ ] Muncul di sidebar pada posisi yang benar
- [ ] Previous/Next menghubungkannya dengan tetangga barunya
- [ ] Mencari judulnya lewat ⌘K / Ctrl+K menemukannya (otomatis dari registry)

Jika salah satu gagal, penyebab nomor satu: **slug di Langkah 3 ≠ slug di Langkah 4**. Sistem sengaja melewatkan pasangan yang tidak cocok secara diam-diam agar build tidak pecah — lihat ARCHITECTURE.md § Keputusan 3.

## Langkah 6 — Gerbang Kualitas

```bash
npm run lint        # ESLint
npm test            # Unit test inti
npx tsc --noEmit    # Type checking strict
npm run build       # Build produksi harus sukses
```

CI akan menjalankan keempatnya ulang pada pull request Anda.

---

## Menambah Jenis Halaman Lain (Ringkas)

| Jenis | Konten hidup di | Perlu daftar manual ke pencarian? |
|---|---|---|
| Modul Git/GitHub (`/docs`) | `content/docs/{git,github}/` + `config/docs-structure.ts` | ❌ Tidak — derived otomatis |
| Tutorial (`/tutorials`) | `content/tutorials/` | ✅ Ya — `content/search/tutorials.ts` |
| Troubleshooting (`/troubleshooting`) | `content/troubleshooting/` | ✅ Ya — `content/search/case-studies.ts` |
| FAQ (`/reference/faq`) | `content/reference/faq/` | ✅ Ya — `content/search/faq.ts` |
| Glosarium / Cheat sheet | `content/reference/glossary.ts` / `cheat-sheet.ts` | ✅ Ya — `content/search/glossary.ts` |

Pola registrasinya sama untuk semua jenis: tulis konten → daftarkan di index kategorinya → (untuk non-docs) tambahkan entri pencarian.
