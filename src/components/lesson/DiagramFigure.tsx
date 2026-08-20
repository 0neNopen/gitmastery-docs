import type { ReactNode } from "react";

export interface DiagramFigureProps {
  caption: string;
  children: ReactNode;
}

/**
 * Wraps a lesson's Diagram content (usually a `WorkflowDiagram`, but
 * any visual works) in proper `<figure>`/`<figcaption>` semantics — the
 * caption is programmatically associated with the diagram rather than
 * floating nearby as an unrelated paragraph.
 */
export function DiagramFigure({ caption, children }: DiagramFigureProps) {
  return (
    <figure className="not-prose my-2 rounded-md border border-foreground/10 bg-surface-low p-6">
      <div className="flex items-center justify-center">{children}</div>
      <figcaption className="mt-4 text-center text-xs uppercase tracking-wide text-foreground-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
