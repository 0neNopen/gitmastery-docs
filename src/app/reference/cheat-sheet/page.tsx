import type { Metadata } from "next";

import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { CopyCommandButton } from "@/components/docs/CopyCommandButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { cheatSheetSections } from "@/content/reference/cheat-sheet";

export const metadata: Metadata = buildPageMetadata({
  title: "Git Cheat Sheet - Referensi Perintah Git",
  description:
    "Daftar lengkap perintah Git yang paling sering dipakai: setup, operasi harian, branch, remote, dan undo. Cocok untuk referensi cepat.",
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
          { label: "Referensi", href: "/reference" },
          { label: "Cheat Sheet", href: "/reference/cheat-sheet" },
        ]}
      />

      <h1>Git Cheat Sheet</h1>
      <p className="lead text-lg text-foreground-muted">
        Daftar lengkap perintah Git yang paling sering dipakai. Klik tombol salin di setiap baris
        atau bookmark halaman ini untuk referensi cepat.
      </p>

      {cheatSheetSections.map((section) => (
        <section
          key={section.slug}
          id={section.slug}
          aria-labelledby={`heading-${section.slug}`}
          className="mt-12 scroll-mt-24"
        >
          <h2 id={`heading-${section.slug}`}>{section.title}</h2>
          <p className="text-foreground-muted">{section.intro}</p>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Perintah</TableHead>
                  <TableHead>Fungsi</TableHead>
                  <TableHead className="w-24 text-right">
                    <span className="sr-only">Salin perintah</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.rows.map((row) => (
                  <TableRow key={row.command}>
                    <TableCell className="whitespace-nowrap font-mono text-sm font-medium text-primary">
                      {row.command}
                    </TableCell>
                    <TableCell className="text-foreground-muted">{row.description}</TableCell>
                    <TableCell className="text-right">
                      <CopyCommandButton command={row.command} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      ))}
    </DocsLayout>
  );
}
