import type { Metadata } from "next";

import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { RoadmapTimeline } from "@/components/roadmap";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { roadmapSteps } from "@/config/roadmap";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import type { Heading } from "@/types/navigation";

export const metadata: Metadata = buildPageMetadata({
  title: "Roadmap Belajar Git & GitHub untuk Pemula",
  description:
    "Peta belajar Git dan GitHub dari nol: Pengenalan, Instalasi, Dasar Git, Branch, Merge, Remote Repository, GitHub, Kolaborasi, hingga Studi Kasus.",
  path: "/curriculum",
});

/**
 * The TOC is derived straight from `roadmapSteps` — same pattern
 * `LessonTemplate` uses for its own headings — so the 9 steps and the
 * "On this page" list can never drift out of sync with each other.
 */
const headings: Heading[] = roadmapSteps.map((step) => ({
  id: step.id,
  text: step.title,
  level: 2,
}));

/**
 * The Learning Roadmap. Deliberately just a title, a short intro, and
 * the timeline — no progress tracker, no locked/completed states, no
 * terminal demo or achievement log. Those existed in the original
 * Stitch export but the approved brief for this page asked for a
 * simple, linear, easy-to-follow sequence, so this page renders exactly
 * that rather than the more elaborate original.
 */
export default function CurriculumPage() {
  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={headings}>
      <Breadcrumb items={[{ label: "Dokumentasi", href: "/" }, { label: "Roadmap Belajar", href: "/curriculum" }]} />

      <h1>Roadmap Belajar Git & GitHub</h1>
      <p className="lead text-lg text-foreground-muted">
        Urutan belajar Git dan GitHub dari nol hingga siap berkolaborasi dalam tim. Ikuti tahapan
        di bawah secara berurutan karena setiap langkah membangun fondasi penting untuk langkah berikutnya.
      </p>

      <div className="not-prose mt-10">
        <RoadmapTimeline steps={roadmapSteps} />
      </div>
    </DocsLayout>
  );
}
