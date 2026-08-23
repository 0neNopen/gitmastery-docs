# Arsitektur GitMastery

Dokumen ini menjelaskan bagaimana situs ini bekerja secara menyeluruh: dari mana data berasal, bagaimana ia menjadi halaman, dan mengapa keputusan-keputusan penting diambil. Ditujukan bagi kontributor dan siapa pun yang ingin memahami kode ini.

---

## Ringkasan

GitMastery adalah **situs statis (SSG)** berbasis Next.js App Router. Tidak ada database, tidak ada backend, tidak ada autentikasi — seluruh konten hidup sebagai objek TypeScript di dalam repositori, dan semua halaman dirender saat *build time*.

Kunci arsitekturnya adalah **satu registry terpusat** (`docsRegistry`). Sidebar, routing, navigasi Previous/Next, sitemap, dan sebagian besar hasil pencarian **semuanya diturunkan (derived)** dari registry yang sama — tidak ada daftar kedua yang harus disinkronkan secara manual.

---

## Tech Stack

| Lapisan | Teknologi |
|---|---|
| Framework | Next.js 15 (App Router, Server Components, SSG) |
| UI | React 19 |
| Bahasa | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 3.4 + @tailwindcss/typography |
| Ikon | Lucide React |
| Test | Vitest (fungsi murni di `src/lib`) |
| CI | GitHub Actions |

---

## Diagram Inti: Registry dan Para Konsumennya

```
                    ┌──────────────────────────────────────┐
                    │  content/docs/git/index.ts           │
                    │  content/docs/github/index.ts        │
                    │         (docsRegistry)               │
                    └──────────────┬───────────────────────┘
                                   │ dibaca oleh:
        ┌──────────────┬───────────┴──────────┬─────────────────┐
        ▼              ▼                      ▼                 ▼
┌──────────────┐ ┌──────────────┐   ┌──────────────────┐ ┌─────────────┐
│ app/docs/    │ │ lib/docs/    │   │ lib/docs/        │ │ content/    │
│ [category]/  │ │ get-sidebar- │   │ get-doc-         │ │ search/     │
│ [slug]/page  │ │ groups.ts    │   │ navigation.ts    │ │ commands.ts │
│              │ │ (sidebar)    │   │ (Prev/Next)      │ │ (pencarian) │
│ generate-    │ └──────────────┘   └──────────────────┘ └─────────────┘
│ StaticParams │
│ + metadata   │      ┌──────────────────────────────┐
└──────┬───────┘      │ app/sitemap.ts + robots.ts   │
       │              │ (membaca semua registry)     │
       ▼              └──────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ BUILD TIME (SSG): setiap pasangan (kategori, slug) terdaftar│
│ → satu halaman HTML statis                                  │
└──────┬──────────────────────────────────────────────────────┘
       ▼
┌─────────────────────────────────────────────────────────────┐
│ RUNTIME DI BROWSER: HTML sudah jadi. Hanya beberapa bagian  │
│ kecil yang interaktif ("use client"): SearchBar (⌘K), tombol│
│ salin CodeBlock, ThemeToggle, TableOfContents scroll-spy.   │
└─────────────────────────────────────────────────────────────┘
```

---

## Lifecycle Satu Halaman (`/docs/git/init`)

1. **Data masuk** — Next.js mem-parse URL menjadi `params = { category: "git", slug: "init" }` (di Next 15 params berupa Promise dan harus di-await).
2. **Resolusi konten** — `getDocPage("git", "init")` mencari objek pelajaran di `docsRegistry.git.init`. Tidak ditemukan → `notFound()`.
3. **Navigasi turunan** — `getDocNavigation()` meratakan seluruh urutan kurikulum (semua pelajaran Git → semua GitHub → tutorial capstone), lalu mengambil tetangga sebelum/sesudah posisi halaman ini.
4. **Render** — `LessonTemplate` menyusun sembilan seksi tetap (Tujuan → Penjelasan → Diagram → Contoh → Output → Tips → Kesalahan Umum → Rangkuman → Latihan). Daftar isi ("On this page") dibangun otomatis dari field opsional mana yang benar-benar terisi.
5. **Output** — pada `npm run build`, `generateStaticParams()` sudah membuat satu HTML statis per halaman terdaftar; pengunjung menerima berkas jadi tanpa komputasi server.

---

## Struktur Folder dan Tanggung Jawabnya

```
src/
├── app/          Rute & orkestrasi halaman (App Router)
├── components/   UI reusable — ui/ (primitif), lesson/, layouts/, docs/, home/
├── config/       Konfigurasi situs: urutan kurikulum, nav, metadata
├── content/      DATA — seluruh materi pelajaran, tutorial, FAQ, glosarium
├── hooks/        Custom hooks klien (clipboard, theme, focus trap, dll.)
├── lib/          Fungsi murni: scoring pencarian, navigasi, sidebar, SEO
├── types/        Kontrak TypeScript antar lapisan
└── styles/       Design token Tailwind (globals.css)
```

Aturan praktisnya: **konten tidak pernah mengimpor dari `app/`**, komponen tidak pernah hardcode data konten, dan semua logika yang bisa diuji dipisah ke `lib/` sebagai fungsi murni.

---

## Keputusan Desain Kunci

### 1. `LessonContent` sengaja tidak punya field slug/kategori
Slug sebuah pelajaran **adalah** key objeknya di `index.ts` kategori; kategorinya adalah folder tempat ia terdaftar. Menyimpan keduanya lagi di dalam objek hanya menciptakan tempat kedua agar informasi itu bisa tidak sinkron. Lihat komentar di `src/types/lesson.ts`.

### 2. Navigasi Previous/Next melintasi batas kategori
Urutan belajar dirancang sebagai satu kursus menerus: Git → GitHub → Tutorial Project Pertamaku. Versi awal `get-doc-navigation.ts` membatasi navigasi dalam satu kategori — itu keputusan yang salah setelah dua kategori dimaksudkan dibaca sebagai satu rangkaian, dan telah dikoreksi (lihat komentar historis di file tersebut).

### 3. Slug "hantu" dilewati diam-diam (defensive skipping)
Slug yang terdaftar di `config/docs-structure.ts` tetapi belum punya file konten **tidak merusak apa pun**: ia hilang dari sidebar, urutan navigasi, dan rute. Inilah yang membuat urutan kurikulum boleh "berceramah tentang masa depan" tanpa memicu error build. Konsekuensinya: jika materi Anda tak muncul, periksa apakah slug sudah sama persis di **dua tempat** (key registry + array `order`).

### 4. Pencarian: sebagian derived, sebagian manual
Entri pencarian untuk pelajaran docs **diturunkan otomatis** dari registry (`content/search/commands.ts`) — tambah pelajaran sekali, langsung bisa dicari. Entri FAQ, glosarium, studi kasus, dan tutorial dikelola manual di file masing-masing karena datanya tidak hidup di satu objek registry yang seragam. Jika Anda menambah halaman jenis itu, tambahkan juga entri pencariannya.

### 5. Scoring pencarian sengaja sederhana
`search-documents.ts` memakai exact > prefix > substring dengan bobot title × 2 dan description × 0.5. Korpus hanya puluhan dokumen di memori — library fuzzy matching akan menambah bundle tanpa menambah relevansi nyata.

### 6. Tombol Salin menyalin string asli, bukan JSX hasil highlight
`CodeBlock` me-render versi tersorot-sintaksis, tetapi `copy(code)` selalu memakai string mentah yang diterima — yang ditempel pengguna identik byte-per-byte dengan yang tertulis.

### 7. Tema gelap tanpa flash
Script inline di `app/layout.tsx` menyetel class `dark` **sebelum** React hydrate; `<html>` memakai `suppressHydrationWarning` hanya untuk atribut itu. Ini trade-off standar dan aman — lihat komentar di layout.

---

## Gerbang Kualitas

Semua perintah berikut wajib hijau sebelum merge (dijalankan ulang otomatis oleh CI):

```bash
npm run lint        # ESLint, aturan next/core-web-vitals
npm test            # Unit test fungsi-fungsi inti (Vitest)
npx tsc --noEmit    # Type checking strict
npm run build       # Build produksi statis
```

Unit test sengaja hanya menargetkan fungsi murni di `src/lib` — mereka adalah dinding penopang: kalau scoring pencarian, urutan navigasi, atau pembentukan sidebar berubah tanpa sengaja, test akan menangkapnya sebelum pengguna merasakannya.
