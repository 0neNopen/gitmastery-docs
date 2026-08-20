import { Fragment } from "react";

export interface VerticalFlowDiagramProps {
  steps: string[];
}

/**
 * A simple top-to-bottom flow diagram — each step in a box, connected
 * by a downward arrow. Used wherever a lesson needs the "A ↓ B ↓ C"
 * illustration style (first introduced in the Git "remote" lesson,
 * hand-written there before this component existed — refactored to
 * use this instead of leaving that markup duplicated).
 */
export function VerticalFlowDiagram({ steps }: VerticalFlowDiagramProps) {
  return (
    <div className="not-prose flex flex-col items-center gap-2.5 text-sm my-2">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <div className="min-w-[12rem] rounded-xl border border-border/80 bg-surface dark:bg-surface-low px-5 py-3 text-center font-semibold text-foreground shadow-xs transition-all hover:border-primary/30">
            {step}
          </div>
          {index < steps.length - 1 && (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-high/50 text-foreground-muted text-xs font-bold" aria-hidden>
              ↓
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
