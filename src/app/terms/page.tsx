import type { Metadata } from "next";
import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description: "Syarat dan ketentuan penggunaan GitMastery.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={[]}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: "Terms", href: "/terms" },
        ]}
      />

      <h1>Terms of Service</h1>
      <p className="lead text-lg text-foreground-muted">
        Syarat dan ketentuan penggunaan platform GitMastery.
      </p>

      <section className="mt-8 space-y-4">
        <p>
          GitMastery adalah platform pembelajaran open source yang dapat digunakan secara gratis
          oleh siapa saja.
        </p>
        <p>
          Dengan menggunakan platform ini, Anda setuju untuk menggunakan konten secara bertanggung
          jawab dan tidak menyalahgunakan layanan yang disediakan.
        </p>
      </section>
    </DocsLayout>
  );
}
