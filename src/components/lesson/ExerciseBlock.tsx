import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

import { Card } from "@/components/ui/Card";

export interface ExerciseBlockProps {
  children: ReactNode;
}

/**
 * The self-practice "Challenge" box shown at the end of every lesson.
 * One component instead of every page hand-styling its own exercise
 * callout, as the original export did with slightly different padding
 * and border colors each time.
 */
export function ExerciseBlock({ children }: ExerciseBlockProps) {
  return (
    <Card className="not-prose rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.08] via-primary/[0.03] to-transparent dark:from-primary/[0.14] dark:via-primary/[0.04] dark:to-transparent p-5 sm:p-6 shadow-md shadow-primary/5">
      <div className="mb-3.5 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary border border-primary/30 shadow-2xs">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
        </div>
        <span className="label-eyebrow font-bold text-primary tracking-wider text-xs">
          Tantangan Praktik
        </span>
      </div>
      <div className="text-sm sm:text-base leading-relaxed text-foreground/90 font-normal [&_p]:my-0 [&_code]:rounded-md [&_code]:bg-surface dark:[&_code]:bg-surface-high [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:font-semibold [&_code]:text-foreground [&_code]:border [&_code]:border-border/70 [&_code]:shadow-2xs [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </div>
    </Card>
  );
}
