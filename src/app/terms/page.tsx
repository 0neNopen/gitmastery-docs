import type { Metadata } from "next";

import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan platform dokumentasi GitMastery.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={[]}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: "Syarat & Ketentuan", href: "/terms" },
        ]}
      />

      <h1>Syarat &amp; Ketentuan</h1>
      <p className="lead text-lg text-foreground-muted">
        Syarat dan ketentuan penggunaan platform GitMastery.
      </p>

      <section className="mt-8 space-y-4">
        <p>
          GitMastery adalah platform pembelajaran dokumentasi Git dan GitHub yang dapat diakses
          secara gratis oleh siapa saja untuk keperluan belajar maupun referensi kerja.
        </p>
        <p>
          Dengan menggunakan platform ini, kamu setuju untuk memanfaatkan materi secara bertanggung
          jawab dan tetap memverifikasi perintah sebelum menjalankannya di lingkungan produksi.
        </p>
      </section>
    </DocsLayout>
  );
}
