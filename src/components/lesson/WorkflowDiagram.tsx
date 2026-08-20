import { ArrowRight } from "lucide-react";

export interface WorkflowStep {
  label: string;
  description?: string;
}

export interface WorkflowDiagramProps {
  steps: WorkflowStep[];
}

/**
 * Renders an ordered sequence of steps connected by arrows — the same
 * "Working Directory → Staging Area → Local Repository" pattern from
 * the approved design, generalized to any step sequence. Every lesson
 * that needs a process diagram (git add/commit, branch/merge, fetch/
 * pull/push, etc.) reuses this one component with different `steps`
 * data instead of a bespoke diagram per page.
 */
export function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
  return (
    <ol className="not-prose flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-2">
      {steps.map((step, index) => (
        <li key={step.label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex min-w-[9.5rem] flex-col items-center gap-1 rounded-xl border border-border/80 bg-surface dark:bg-surface-low px-4 py-3.5 text-center shadow-xs transition-all hover:border-primary/30">
            <span className="text-sm font-semibold text-foreground tracking-tight">{step.label}</span>
            {step.description && (
              <span className="text-xs text-foreground-muted">{step.description}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-high/50 text-foreground-muted">
              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
