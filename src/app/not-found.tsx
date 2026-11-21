import Link from "next/link";
import { FileQuestion } from "lucide-react";

import { Footer, Navbar } from "@/components/layouts";
import { buttonVariants } from "@/components/ui/Button";
import { footerColumns, primaryNavLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils/cn";

/**
 * Next.js renders this automatically for any unmatched route. Includes
 * the site Navbar (with Search) and Footer so lost visitors can search
 * or jump directly to any topic instead of hitting a dead end.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        primaryLinks={primaryNavLinks}
        hasSidebar={false}
        githubHref={siteConfig.githubUrl}
      />

      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-20 text-center"
      >
        <FileQuestion className="h-10 w-10 text-foreground-muted" aria-hidden />
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-foreground-muted">
          Halaman yang kamu cari tidak tersedia atau mungkin sudah dipindahkan.
          Coba gunakan pencarian di atas atau kembali ke materi utama.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link href="/docs/git/introduction" className={cn(buttonVariants({ size: "md" }))}>
            Mulai Belajar Git
          </Link>
          <Link href="/" className={cn(buttonVariants({ variant: "secondary", size: "md" }))}>
            Kembali ke Beranda
          </Link>
        </div>
      </main>

      <Footer
        columns={footerColumns}
        tagline="Dokumentasi modern untuk developer yang ingin menguasai version control."
      />
    </div>
  );
}
