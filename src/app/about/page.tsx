import type { Metadata } from "next";
import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tentang GitMastery",
  description: "GitMastery adalah platform pembelajaran Git dan GitHub berbahasa Indonesia untuk pemula.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={[]}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <h1>Tentang GitMastery</h1>
      <p className="lead text-lg text-foreground-muted">
        Platform pembelajaran Git dan GitHub berbahasa Indonesia untuk pemula.
      </p>

      <section className="mt-8 space-y-4">
        <p>
          GitMastery adalah dokumentasi lengkap yang dirancang untuk membantu developer Indonesia
          menguasai Git dan GitHub dari nol hingga mahir.
        </p>
        <p>
          Kami percaya bahwa version control adalah skill fundamental yang harus dikuasai setiap
          developer modern. GitMastery hadir untuk membuat pembelajaran Git lebih mudah dipahami
          dengan penjelasan dalam bahasa Indonesia, contoh praktis, dan studi kasus nyata.
        </p>
      </section>
    </DocsLayout>
  );
}
