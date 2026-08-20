import type { Metadata } from "next";
import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { cheatSheetSections } from "@/content/reference/cheat-sheet";

export const metadata: Metadata = buildPageMetadata({
  title: "Git Cheat Sheet - Referensi Command Git",
  description:
    "Daftar lengkap command Git yang paling sering dipakai: setup, operasi harian, branch, remote, dan undo. Cocok untuk referensi cepat.",
  path: "/reference/cheat-sheet",
});

export default function CheatSheetPage() {
  const headings = cheatSheetSections.map((section) => ({
    id: section.slug,
    text: section.title,
    level: 2 as const,
  }));

  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={headings}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: "Reference", href: "/reference/cheat-sheet" },
          { label: "Cheat Sheet", href: "/reference/cheat-sheet" },
        ]}
      />

      <h1>Git Cheat Sheet</h1>
      <p className="lead text-lg text-foreground-muted">
        Daftar lengkap command Git yang paling sering dipakai. Bookmark halaman ini untuk referensi cepat.
      </p>

      {cheatSheetSections.map((section) => (
        <section key={section.slug} id={section.slug} aria-labelledby={`heading-${section.slug}`} className="mt-12 scroll-mt-20">
          <h2 id={`heading-${section.slug}`}>{section.title}</h2>
          <p className="text-foreground-muted">{section.intro}</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-2 text-left font-semibold text-foreground">Command</th>
                  <th className="px-4 py-2 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="px-4 py-3 font-mono text-sm text-primary font-medium">{row.command}</td>
                    <td className="px-4 py-3 text-foreground-muted">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </DocsLayout>
  );
}
