import { ArrowRight } from "lucide-react";

export interface WorkflowStep {
  label: string;
  description?: string;
}

export interface WorkflowDiagramProps {
  steps: WorkflowStep[];
}

/**
 * Renders an ordered sequence of steps connected by arrows. Stacks
 * vertically on narrow mobile viewports (`< sm`) with rotated arrows so
 * arrows never dangle at the end of a wrapped row, then flows horizontally
 * from `sm:` upward.
 */
export function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
  return (
    <ol className="not-prose my-2 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
      {steps.map((step, index) => (
        <li
          key={`${step.label}-${index}`}
          className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <div className="flex min-w-[10.5rem] flex-col items-center gap-1 rounded-xl border border-border/80 bg-surface px-4 py-3.5 text-center shadow-sm transition-all hover:border-primary/30 dark:bg-surface-low sm:min-w-[9.5rem]">
            <span className="text-sm font-semibold tracking-tight text-foreground">{step.label}</span>
            {step.description && (
              <span className="text-xs text-foreground-muted">{step.description}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-high/50 text-foreground-muted">
              <ArrowRight className="h-3.5 w-3.5 shrink-0 rotate-90 sm:rotate-0" aria-hidden />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
