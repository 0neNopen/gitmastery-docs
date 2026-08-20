import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { Callout } from "@/components/docs/Callout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { LearningObjectives } from "./LearningObjectives";
import { DiagramFigure } from "./DiagramFigure";
import { ExerciseBlock } from "./ExerciseBlock";
import { PageNavigation } from "./PageNavigation";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import type { LessonContent } from "@/types/lesson";
import type { AdjacentPage, Heading } from "@/types/navigation";

export interface LessonTemplateProps {
  lesson: LessonContent;
  /** This page's own URL, e.g. "/docs/git/init" — used for the last breadcrumb crumb. */
  href: string;
  /** Category display name, e.g. "Git" — resolved from `docsStructure`, not stored on the lesson itself. */
  categoryLabel: string;
  /** Where the category breadcrumb crumb links to — its first registered lesson. */
  categoryHref: string;
  previous?: AdjacentPage;
  next?: AdjacentPage;
}

/** Section id → heading text, in the fixed order every lesson follows. */
const SECTION_TITLES = {
  objectives: "Tujuan Pembelajaran",
  explanation: "Penjelasan Konsep",
  diagram: "Alur Visual",
  "code-example": "Contoh Perintah",
  output: "Hasil Eksekusi",
  tips: "Tips Praktis",
  "common-mistakes": "Kesalahan Umum",
  summary: "Rangkuman Inti",
  exercise: "Tantangan Latihan",
} as const;

type SectionId = keyof typeof SECTION_TITLES;

/**
 * Builds the "On this page" TOC directly from which optional fields the
 * lesson actually supplies — a lesson with no `commonMistakes` simply
 * never gets that heading, in the template and in the TOC alike.
 */
function buildHeadings(lesson: LessonContent): Heading[] {
  const sections: SectionId[] = [
    "objectives",
    "explanation",
    ...(lesson.diagram ? (["diagram"] as const) : []),
    "code-example",
    ...(lesson.output ? (["output"] as const) : []),
    ...(lesson.tips ? (["tips"] as const) : []),
    ...(lesson.commonMistakes ? (["common-mistakes"] as const) : []),
    "summary",
    "exercise",
  ];

  return sections.map((id) => ({ id, text: SECTION_TITLES[id], level: 2 }));
}

/**
 * The one template every documentation page in the site renders
 * through. It owns the fixed section order and all of the section chrome.
 */
export function LessonTemplate({
  lesson,
  href,
  categoryLabel,
  categoryHref,
  previous,
  next,
}: LessonTemplateProps) {
  const headings = buildHeadings(lesson);

  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={headings}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: categoryLabel, href: categoryHref },
          { label: lesson.title, href },
        ]}
      />

      {/* Title + Description */}
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {lesson.title}
      </h1>
      <p className="lead text-lg leading-relaxed text-foreground-muted mt-2 mb-8">
        {lesson.description}
      </p>

      {/* Learning Objectives */}
      <section aria-labelledby="objectives" className="mb-10">
        <h2 id="objectives" className="text-xl font-bold tracking-tight text-foreground mb-4">
          Tujuan Pembelajaran
        </h2>
        <LearningObjectives items={lesson.objectives} />
      </section>

      {/* Explanation */}
      <section aria-labelledby="explanation" className="mb-10 leading-relaxed text-foreground/90">
        <h2 id="explanation" className="text-xl font-bold tracking-tight text-foreground mb-4">
          Penjelasan Konsep
        </h2>
        {lesson.explanation}
      </section>

      {/* Diagram (optional) */}
      {lesson.diagram && (
        <section aria-labelledby="diagram" className="mb-10">
          <h2 id="diagram" className="text-xl font-bold tracking-tight text-foreground mb-4">
            Alur Visual
          </h2>
          <DiagramFigure caption={lesson.diagram.caption}>{lesson.diagram.content}</DiagramFigure>
        </section>
      )}

      {/* Code Example */}
      <section aria-labelledby="code-example" className="mb-10">
        <h2 id="code-example" className="text-xl font-bold tracking-tight text-foreground mb-4">
          Contoh Perintah
        </h2>
        <CodeBlock label={lesson.codeExample.label ?? "bash"} code={lesson.codeExample.code} />
      </section>

      {/* Output (optional) */}
      {lesson.output && (
        <section aria-labelledby="output" className="mb-10">
          <h2 id="output" className="text-xl font-bold tracking-tight text-foreground mb-4">
            Hasil Eksekusi
          </h2>
          <CodeBlock label={lesson.output.label ?? "output"} code={lesson.output.code} />
        </section>
      )}

      {/* Tips (optional) */}
      {lesson.tips && (
        <section aria-labelledby="tips" className="mb-10">
          <h2 id="tips" className="text-xl font-bold tracking-tight text-foreground mb-4">
            Tips Praktis
          </h2>
          <Callout variant="tip">{lesson.tips}</Callout>
        </section>
      )}

      {/* Common Mistakes (optional) */}
      {lesson.commonMistakes && (
        <section aria-labelledby="common-mistakes" className="mb-10">
          <h2 id="common-mistakes" className="text-xl font-bold tracking-tight text-foreground mb-4">
            Kesalahan Umum
          </h2>
          <Callout variant="warning">{lesson.commonMistakes}</Callout>
        </section>
      )}

      {/* Summary */}
      <section aria-labelledby="summary" className="mb-10">
        <h2 id="summary" className="text-xl font-bold tracking-tight text-foreground mb-4">
          Rangkuman Inti
        </h2>
        {lesson.summary}
      </section>

      {/* Exercise */}
      <section aria-labelledby="exercise" className="mb-12">
        <h2 id="exercise" className="text-xl font-bold tracking-tight text-foreground mb-4">
          Tantangan Latihan
        </h2>
        <ExerciseBlock>{lesson.exercise}</ExerciseBlock>
      </section>

      {/* Previous / Next */}
      <PageNavigation previous={previous} next={next} />
    </DocsLayout>
  );
}
