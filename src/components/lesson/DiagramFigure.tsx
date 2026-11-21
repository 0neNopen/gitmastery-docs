import type { ReactNode } from "react";

export interface DiagramFigureProps {
  caption: string;
  children: ReactNode;
}

/**
 * Wraps a lesson's Diagram content (usually a `WorkflowDiagram`,
 * `VerticalFlowDiagram`, or ASCII `<pre>`) in semantic `<figure>`/`<figcaption>`.
 * Uses `overflow-x-auto` with `w-fit min-w-full justify-center` so narrow
 * diagrams stay centered while wider ASCII diagrams scroll cleanly on 320px–375px
 * viewports without clipping their left edge or overflowing the page.
 */
export function DiagramFigure({ caption, children }: DiagramFigureProps) {
  return (
    <figure className="not-prose my-2 rounded-md border border-foreground/10 bg-surface-low p-4 sm:p-6">
      <div className="w-full overflow-x-auto">
        <div className="mx-auto flex w-fit min-w-full items-center justify-center">
          {children}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs uppercase tracking-wide text-foreground-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
