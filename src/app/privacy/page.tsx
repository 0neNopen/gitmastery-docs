import type { Metadata } from "next";

import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi untuk pengguna platform dokumentasi GitMastery.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={[]}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: "Kebijakan Privasi", href: "/privacy" },
        ]}
      />

      <h1>Kebijakan Privasi</h1>
      <p className="lead text-lg text-foreground-muted">
        Kebijakan privasi untuk pengguna GitMastery.
      </p>

      <section className="mt-8 space-y-4">
        <p>
          GitMastery adalah platform dokumentasi statis yang tidak mengumpulkan data pribadi
          pengguna, tidak memerlukan akun login, dan tidak menggunakan cookie pelacakan.
        </p>
        <p>
          Kami hanya menyimpan preferensi tampilan lokal (mode tema terang/gelap dan status ciutkan
          sidebar) di <code>localStorage</code> browser kamu. Data tersebut tidak pernah dikirim ke
          server maupun dibagikan kepada pihak ketiga.
        </p>
      </section>
    </DocsLayout>
  );
}
