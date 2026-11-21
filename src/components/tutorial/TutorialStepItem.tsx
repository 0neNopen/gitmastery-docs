import { CodeBlock } from "@/components/docs/CodeBlock";
import type { TutorialStep } from "@/types/tutorial";

export interface TutorialStepItemProps {
  step: TutorialStep;
  /** 1-based position, used for the heading id and the numbered badge. */
  index: number;
}

/**
 * Renders one step of a tutorial: a numbered heading, a short
 * description, an optional command block, an optional explanation of
 * what that command does, and an optional expected-output block. Every
 * field except `title`/`description` is optional because some steps
 * (like "buka terminal") are pure actions with nothing to run.
 */
export function TutorialStepItem({ step, index }: TutorialStepItemProps) {
  const headingId = `step-${index}`;

  return (
    <section aria-labelledby={headingId} className="border-t border-foreground/10 pt-8 first:border-t-0 first:pt-0">
      <h2 id={headingId} className="scroll-mt-24 flex items-center gap-3 text-2xl font-bold text-foreground">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
          {index}
        </span>
        {step.title}
      </h2>

      <div className="mt-3 leading-relaxed text-foreground-muted">{step.description}</div>

      {step.command && (
        <div className="not-prose mt-4">
          <CodeBlock label={step.command.label ?? "bash"} code={step.command.code} />
        </div>
      )}

      {step.commandExplanation && <div className="mt-3 text-foreground-muted">{step.commandExplanation}</div>}

      {step.expectedOutput && (
        <div className="not-prose mt-4">
          <p className="mb-2 label-eyebrow text-foreground-muted">Hasil yang diharapkan</p>
          <CodeBlock label={step.expectedOutput.label ?? "output"} code={step.expectedOutput.code} />
        </div>
      )}
    </section>
  );
}
