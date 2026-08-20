import { CheckCircle2 } from "lucide-react";

export interface LearningObjectivesProps {
  items: string[];
}

/**
 * Renders the "Learning Objectives" checklist. A real `<ul>` so screen
 * readers announce the item count, with each objective's checkmark
 * marked decorative since the text alone conveys the meaning.
 */
export function LearningObjectives({ items }: LearningObjectivesProps) {
  return (
    <ul className="not-prose space-y-3.5 rounded-2xl border border-primary/25 border-l-[4px] border-l-primary bg-gradient-to-r from-primary/[0.08] via-primary/[0.03] to-transparent dark:from-primary/[0.14] dark:via-primary/[0.04] dark:to-transparent p-4 sm:p-5 shadow-sm shadow-primary/5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3.5 text-sm sm:text-base text-foreground/90 leading-relaxed font-normal [&_code]:rounded-md [&_code]:bg-surface dark:[&_code]:bg-surface-high [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:font-semibold [&_code]:text-foreground [&_code]:border [&_code]:border-border/70 [&_strong]:font-semibold [&_strong]:text-foreground">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary border border-primary/30 mt-0.5 shadow-2xs">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
          </div>
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ul>
  );
}
