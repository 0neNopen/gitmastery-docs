# 🚀 GitMastery

> **Dokumentasi Modern & Panduan Langkah-demi-Langkah Git & GitHub Berbahasa Indonesia.**  
> Dirancang khusus untuk developer dan pemula yang ingin menguasai *version control* dari nol hingga mahir dengan alur kerja yang bersih, efisien, dan siap kolaborasi tim.

---

## 🧭 Panduan Cepat: Memulai Belajar untuk Pemula

Jika Anda **baru pertama kali belajar** dan **belum memiliki Git di komputer atau akun GitHub**, ikuti 5 langkah mudah berikut untuk langsung mempraktikkan materi dari website ini:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ 1. Buka Website │ ──► │ 2. Bikin Akun   │ ──► │ 3. Pasang Git   │ ──► │ 4. Set Identitas│
│    GitMastery   │     │    GitHub       │     │    di Laptop    │     │    di Terminal  │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
                                                                                 │
                                                                                 ▼
                                                                        ┌─────────────────┐
                                                                        │ 5. Mulai Modul  │
                                                                        │    & Praktik!   │
                                                                        └─────────────────┘
```

### Langkah 1: Akses Website GitMastery
Website ini telah di-deploy ke web hosting sehingga Anda bisa langsung membuka dan membaca seluruh dokumentasi, roadmap belajar, serta contekan perintah (*cheat sheet*) secara gratis melalui browser di laptop maupun HP.

### Langkah 2: Buat Akun GitHub Gratis (Jika Belum Punya)
GitHub adalah tempat menyimpan repositori kode Anda secara online di cloud.
1. Buka [github.com](https://github.com).
2. Klik tombol **Sign Up**.
3. Masukkan alamat email aktif, buat password yang kuat, dan pilih username.
4. Lakukan verifikasi captcha dan masukkan kode OTP yang dikirimkan ke email Anda.
5. Akun GitHub Anda sudah siap digunakan!

### Langkah 3: Install Git di Komputer / Laptop
Git adalah aplikasi pengelola versi yang berjalan di komputer lokal Anda.
- **Windows**:
  1. Unduh installer resmi dari [git-scm.com/download/win](https://git-scm.com/download/win).
  2. Jalankan file installer (`.exe`) dan ikuti petunjuk default hingga selesai.
  3. Buka aplikasi **Git Bash** atau **Command Prompt (CMD)**.
- **macOS**:
  - Buka aplikasi **Terminal** dan jalankan perintah:
    ```bash
    xcode-select --install
    ```
    *atau jika menggunakan Homebrew:*
    ```bash
    brew install git
    ```
- **Linux (Ubuntu/Debian)**:
  - Buka Terminal dan jalankan:
    ```bash
    sudo apt update && sudo apt install git -y
    ```
- **Verifikasi Instalasi**:
  Ketik perintah berikut di terminal:
  ```bash
  git --version
  ```
  *(Jika muncul versi Git, misalnya `git version 2.4x.x`, berarti instalasi berhasil).*

### Langkah 4: Konfigurasi Identitas Git Anda
Buka terminal (atau Git Bash di Windows), lalu daftarkan nama dan email Anda (gunakan email yang sama dengan akun GitHub):
```bash
git config --global user.name "Nama Lengkap Anda"
git config --global user.email "email-anda@example.com"
```
Periksa apakah konfigurasi sudah tersimpan:
```bash
git config --list
```

### Langkah 5: Mulai Belajar Sesuai Jalur Kurikulum
Buka website GitMastery dan ikuti urutan belajar yang terstruktur:
1. Mulai dari menu **[Curriculum / Roadmap](/curriculum)** untuk memahami peta jalan.
2. Pelajari dasar perintah: `git init` ➔ `git status` ➔ `git add` & `git commit` ➔ `git log`.
3. Masuk ke percabangan: `git branch` ➔ `git merge`.
4. Hubungkan ke cloud: `git remote` ➔ `git push` ➔ `git pull` ➔ `git clone`.
5. Terapkan di **[Tutorial: Project Pertamaku](/tutorials/project-pertamaku)** untuk praktik langsung dari nol sampai membuat *Pull Request* pertama Anda!

---

## ✨ Fitur Utama GitMastery

- 📚 **30 Modul Dokumentasi & Praktik**:
  - **11 Modul Git**: Dari instalasi, konfigurasi, status, commit, log, branch, merge, hingga remote.
  - **8 Modul GitHub**: Akun, SSH/PAT, repositori remote, push, pull, clone, dan Pull Request.
  - **1 Capstone Tutorial**: Praktik end-to-end membangun proyek nyata langkah demi langkah.
  - **5 Panduan Troubleshooting**: Solusi masalah umum pemula (*Merge Conflict, Detached HEAD, Salah Commit, Gagal Clone, Push Ditolak*).
  - **5 Modul FAQ**: Tanya jawab esensial (*Git vs GitHub, Offline Git, Undo Commit, Main vs Master, Fork vs Branch*).
  - **Cheat Sheet & Glosarium**: Tabel referensi cepat perintah dan kamus istilah teknis.
- ⚡ **Pencarian Cepat (Command Palette `⌘K` / `Ctrl+K`)**:
  - Pencarian *instant in-memory* multi-kategori tanpa jeda jaringan.
- 🌓 **Dukungan Dark Mode & Light Mode**:
  - Tema adaptif dengan kontras tinggi standar WCAG AAA yang nyaman di mata siang maupun malam.
- 📱 **100% Responsif & Aksesibel**:
  - Navigasi mulus di HP, tablet, dan desktop; dilengkapi *keyboard navigation*, *focus trap*, dan *Skip to Content*.
- 📋 **Terminal Sandbox Interaktif**:
  - Blok kode dengan tombol satu-klik salin (*Copy to Clipboard*) dan penyorot sintaksis (*syntax highlighting*) otomatis.

---

## 🗺️ Alur Kurikulum Pembelajaran

| Tahap | Modul Materi | Fokus Pembelajaran |
|:---:|---|---|
| **01** | **Pondasi & Setup** | Pengenalan konsep Version Control, instalasi multi-OS, dan konfigurasi identitas global. |
| **02** | **Operasi Lokal** | Menginisiasi repo (`git init`), memahami 3 area Git (Working, Staging, Repo), commit, dan riwayat (`git log`). |
| **03** | **Percabangan (Branching)** | Bekerja aman di fitur terpisah (`git branch`, `switch`), menggabungkan kode (`git merge`), dan menangani konflik. |
| **04** | **Kolaborasi Cloud** | Menghubungkan repo lokal ke GitHub (`git remote`), mengunggah (`push`), mengunduh (`pull`), dan `clone`. |
| **05** | **Alur Tim & PR** | Membuka *Pull Request*, *Code Review*, diskusi tim, dan penggabungan branch produksi. |
| **06** | **Studi Kasus Proyek** | Praktik langsung membuat proyek dari terminal lokal hingga live di repositori GitHub. |
| **07** | **Solusi Masalah (Troubleshooting)** | Menangani *merge conflict*, membatalkan commit yang keliru, dan mengatasi *push rejected*. |

---

## 🛠️ Tech Stack & Arsitektur

Platform ini dibangun menggunakan teknologi web modern untuk menjamin kecepatan, performa tinggi, dan kemudahan pemeliharaan:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Library UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) + `@tailwindcss/typography`
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Bahasa**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Arsitektur Konten**: *Single-Source Data Registry* — seluruh halaman, sidebar, metadata SEO, breadcrumb, dan navigasi tersinkronisasi otomatis dari registry terpusat di `src/content/`.

---

## 💻 Panduan Menjalankan Proyek Secara Lokal (Untuk Developer)

Bagi pengembang yang ingin menjalankan atau mengembangkan website ini di komputer lokal:

### 1. Prasyarat
- **Node.js** versi `18.18.0` atau yang lebih baru.
- **npm**, **pnpm**, atau **yarn**.

### 2. Kloning Repositori & Install Dependensi
```bash
# Kloning repositori
git clone https://github.com/0neNopen/nopen-github-git.git gitmastery-components

# Masuk ke direktori proyek
cd gitmastery-components

# Pasang semua dependensi
npm install
```

### 3. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka browser dan akses `http://localhost:3000`. Halaman akan otomatis memuat ulang (*hot-reload*) setiap kali Anda menyunting file.

### 4. Build untuk Produksi

> **Catatan deployment:** sebelum build produksi, set variabel lingkungan `NEXT_PUBLIC_SITE_URL` ke domain asli situs (tanpa garis miring di akhir), contoh: `NEXT_PUBLIC_SITE_URL=https://gitmastery.example.com`. Nilai ini dipakai oleh `metadataBase`, sitemap, dan `robots.txt`.
```bash
# Melakukan type checking & build statis
npm run build

# Menjalankan build produksi secara lokal
npm run start
```

### 5. Pemeriksaan Kualitas (Lint, Test, Type Check)
```bash
# ESLint (aturan next/core-web-vitals, konfigurasi di .eslintrc.json)
npm run lint

# Unit test untuk fungsi-fungsi inti di src/lib (Vitest)
npm test

# Type checking TypeScript strict
npx tsc --noEmit
```

Kelimanya juga dijalankan otomatis oleh CI (`.github/workflows/ci.yml`) pada setiap push dan pull request.

---

## 📁 Struktur Direktori Proyek

```
gitmastery-components/
├── public/                     # Aset statis & favicon SVG
│   ├── favicon.svg
│   └── icon.svg
├── src/
│   ├── app/                    # Next.js App Router (Halaman & Rute Dinamis)
│   │   ├── docs/[category]/[slug]/ # Dynamic route untuk seluruh materi Git & GitHub
│   │   ├── tutorials/[slug]/       # Dynamic route tutorial proyek
│   │   ├── troubleshooting/[slug]/ # Dynamic route panduan perbaikan masalah
│   │   ├── reference/faq/[slug]/   # Dynamic route FAQ
│   │   ├── reference/cheat-sheet/  # Halaman tabel contekan perintah
│   │   ├── reference/glossary/     # Halaman kamus istilah
│   │   ├── curriculum/             # Halaman roadmap visual
│   │   ├── layout.tsx              # Root layout & tema
│   │   ├── page.tsx                # Homepage
│   │   ├── sitemap.ts              # Generator sitemap dinamis
│   │   └── robots.ts               # Generator robots.txt
│   ├── components/             # Komponen UI Reusable
│   │   ├── docs/                   # SearchBar, Breadcrumb, TableOfContents, CodeBlock
│   │   ├── home/                   # HeroSection, CategoryGrid, HeroTerminal
│   │   ├── layouts/                # Navbar, Footer, Sidebar, MobileNav, SkipToContent
│   │   ├── lesson/                 # LessonTemplate, WorkflowDiagram, ExerciseBlock
│   │   ├── roadmap/                # RoadmapTimeline, RoadmapStepCard
│   │   ├── shared/                 # Logo SVG, ThemeToggle
│   │   └── ui/                     # Button, Card, Table
│   ├── config/                 # Konfigurasi situs & struktur navigasi
│   │   ├── docs-structure.ts       # Urutan materi kurikulum
│   │   ├── navigation.ts           # Link navbar & footer
│   │   ├── roadmap.ts              # Step roadmap pembelajaran
│   │   └── site.ts                 # Metadata nama & URL situs
│   ├── content/                # Konten materi edukasi (Source of Truth)
│   │   ├── docs/git/               # 11 Modul materi Git
│   │   ├── docs/github/            # 8 Modul materi GitHub
│   │   ├── tutorials/              # Tutorial langkah demi langkah
│   │   ├── troubleshooting/        # 5 Panduan penanganan error
│   │   ├── reference/faq/          # 5 Modul tanya jawab
│   │   ├── reference/cheat-sheet.ts# Data cheat sheet perintah
│   │   ├── reference/glossary.ts   # Data glosarium istilah
│   │   └── search/                 # Index pencarian multi-kategori
│   ├── hooks/                  # Custom React Hooks (Theme, FocusTrap, Keyboard)
│   ├── lib/                    # Helper SEO, pencarian, dan navigasi docs
│   ├── styles/                 # Tailwind CSS & desain token (globals.css)
│   └── types/                  # Deklarasi tipe TypeScript
├── docs/                         # Panduan developer: arsitektur & cara menambah materi
│   ├── ARCHITECTURE.md
│   └── ADD_A_LESSON.md
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🤝 Berkontribusi

Kontribusi berupa perbaikan materi, penambahan tips, atau penyempurnaan kode selalu terbuka!

- 📘 **Menambah modul materi baru?** Ikuti panduan langkah demi langkah di [docs/ADD_A_LESSON.md](docs/ADD_A_LESSON.md).
- 🏗️ **Ingin memahami cara kerja situs?** Baca [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

Alur kontribusinya:
1. Lakukan **Fork** pada repositori ini.
2. Buat branch fitur baru (`git checkout -b fitur/materi-baru`).
3. Lakukan commit perubahan Anda (`git commit -m 'feat: tambah penjelasan tips remote'`).
4. Push ke branch Anda (`git push origin fitur/materi-baru`).
5. Buat **Pull Request** baru di repositori utama.

