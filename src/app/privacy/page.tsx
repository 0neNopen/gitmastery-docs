import type { Metadata } from "next";
import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Kebijakan privasi GitMastery.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={[]}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: "Privacy", href: "/privacy" },
        ]}
      />

      <h1>Privacy Policy</h1>
      <p className="lead text-lg text-foreground-muted">
        Kebijakan privasi untuk pengguna GitMastery.
      </p>

      <section className="mt-8 space-y-4">
        <p>
          GitMastery adalah platform dokumentasi statis yang tidak mengumpulkan data pribadi pengguna.
        </p>
        <p>
          Kami tidak menggunakan cookies untuk tracking, tidak menyimpan informasi login, dan tidak
          membagikan data apapun kepada pihak ketiga.
        </p>
      </section>
    </DocsLayout>
  );
}
