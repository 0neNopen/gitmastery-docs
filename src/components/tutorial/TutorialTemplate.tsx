import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { DiagramFigure } from "@/components/lesson/DiagramFigure";
import { PageNavigation } from "@/components/lesson/PageNavigation";
import { primaryNavLinks, footerColumns } from "@/config/navigation";
import { TutorialStepItem } from "./TutorialStepItem";
import type { TutorialContent } from "@/types/tutorial";
import type { AdjacentPage, Heading } from "@/types/navigation";

export interface TutorialTemplateProps {
  tutorial: TutorialContent;
  href: string;
  previous?: AdjacentPage;
  next?: AdjacentPage;
}

/**
 * The one template every step-by-step tutorial renders through — the
 * same reasoning as `LessonTemplate`, but shaped for a sequential
 * walkthrough instead of a single-topic reference page. A tutorial is
 * never anything more than a `TutorialContent` object rendered through
 * this component; adding a second tutorial means writing a new content
 * file, not a new page or new markup.
 *
 * `previous`/`next` connect this tutorial back into the site's overall
 * learning sequence (e.g. "Previous: Pull Request") via the same
 * `PageNavigation` component every doc lesson uses — reusing it here
 * rather than duplicating that footer nav pattern.
 *
 * The "On this page" TOC is generated directly from the step titles —
 * there's no separate heading list to keep in sync as steps are added,
 * reordered, or renamed.
 */
export function TutorialTemplate({ tutorial, href, previous, next }: TutorialTemplateProps) {
  const headings: Heading[] = tutorial.steps.map((step, index) => ({
    id: `step-${index + 1}`,
    text: step.title,
    level: 2,
  }));

  return (
    <DocsLayout primaryNavLinks={primaryNavLinks} footerColumns={footerColumns} headings={headings}>
      <Breadcrumb
        items={[
          { label: "Dokumentasi", href: "/" },
          { label: "Tutorial", href },
          { label: tutorial.title, href },
        ]}
      />

      <h1>{tutorial.title}</h1>
      <p className="lead text-lg text-foreground-muted">{tutorial.description}</p>

      <div>{tutorial.intro}</div>

      {tutorial.diagram && (
        <DiagramFigure caption={tutorial.diagram.caption}>{tutorial.diagram.content}</DiagramFigure>
      )}

      <div className="not-prose space-y-8">
        {tutorial.steps.map((step, index) => (
          <TutorialStepItem key={step.title} step={step} index={index + 1} />
        ))}
      </div>

      <div>
        <h2>Selesai!</h2>
        {tutorial.summary}
      </div>

      <PageNavigation previous={previous} next={next} />
    </DocsLayout>
  );
}
