import type { Metadata } from "next";
import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { glossaryEntries } from "@/content/reference/glossary";

export const metadata: Metadata = buildPageMetadata({
  title: "Glossary - Istilah Penting dalam Git & GitHub",
  description:
    "Kumpulan istilah penting dalam Git dan GitHub beserta definisi singkatnya. Repository, Commit, Branch, Merge, Fork, HEAD, Remote, Pull Request.",
  path: "/reference/glossary",
});

export default function GlossaryPage() {
  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={[]}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: "Reference", href: "/reference/glossary" },
          { label: "Glossary", href: "/reference/glossary" },
        ]}
      />

      <h1>Glossary</h1>
      <p className="lead text-lg text-foreground-muted">
        Kumpulan istilah penting dalam Git dan GitHub beserta definisi singkatnya.
      </p>

      <dl className="mt-8 space-y-6">
        {glossaryEntries.map((entry) => (
          <div key={entry.slug} id={`term-${entry.slug}`} className="scroll-mt-20">
            <dt className="text-lg font-semibold text-foreground">{entry.term}</dt>
            <dd className="mt-2 text-foreground-muted">{entry.description}</dd>
            {entry.relatedLesson && (
              <dd className="mt-2">
                <a
                  href={entry.relatedLesson.href}
                  className="text-sm text-primary hover:underline"
                >
                  → {entry.relatedLesson.label}
                </a>
              </dd>
            )}
          </div>
        ))}
      </dl>
    </DocsLayout>
  );
}
