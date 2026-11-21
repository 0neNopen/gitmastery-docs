import type { Metadata } from "next";
import Link from "next/link";

import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { glossaryEntries } from "@/content/reference/glossary";
import type { Heading } from "@/types/navigation";

export const metadata: Metadata = buildPageMetadata({
  title: "Glosarium - Istilah Penting dalam Git & GitHub",
  description:
    "Kumpulan istilah penting dalam Git dan GitHub beserta definisi singkatnya: Repository, Commit, Branch, Merge, Fork, HEAD, Remote, dan Pull Request.",
  path: "/reference/glossary",
});

const headings: Heading[] = glossaryEntries.map((entry) => ({
  id: `term-${entry.slug}`,
  text: entry.term,
  level: 2,
}));

export default function GlossaryPage() {
  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={headings}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: "Referensi", href: "/reference" },
          { label: "Glosarium", href: "/reference/glossary" },
        ]}
      />

      <h1>Glosarium</h1>
      <p className="lead text-lg text-foreground-muted">
        Kumpulan istilah penting dalam Git dan GitHub beserta definisi singkatnya.
      </p>

      <dl className="not-prose mt-8 divide-y divide-border">
        {glossaryEntries.map((entry) => (
          <div key={entry.slug} id={`term-${entry.slug}`} className="scroll-mt-24 py-6 first:pt-0">
            <dt className="text-lg font-semibold text-foreground">{entry.term}</dt>
            <dd className="mt-2 leading-relaxed text-foreground-muted">{entry.description}</dd>
            {entry.relatedLesson && (
              <dd className="mt-2.5">
                <Link
                  href={entry.relatedLesson.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  → {entry.relatedLesson.label}
                </Link>
              </dd>
            )}
          </div>
        ))}
      </dl>
    </DocsLayout>
  );
}
