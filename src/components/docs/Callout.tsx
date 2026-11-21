import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Info, Lightbulb, AlertTriangle, HelpCircle } from "lucide-react";

import { cn } from "@/lib/utils/cn";

const calloutVariants = cva(
  "relative not-prose flex items-start gap-3.5 sm:gap-4 rounded-2xl border p-4 sm:p-5 text-sm sm:text-base leading-relaxed transition-all duration-200 shadow-sm",
  {
    variants: {
      variant: {
        info: "border-sky-500/25 border-l-[4px] border-l-sky-500 bg-gradient-to-r from-sky-500/[0.08] via-sky-500/[0.03] to-transparent dark:from-sky-500/[0.14] dark:via-sky-500/[0.04] dark:to-transparent text-foreground shadow-sky-500/5",
        tip: "border-amber-500/25 border-l-[4px] border-l-amber-500 bg-gradient-to-r from-amber-500/[0.08] via-amber-500/[0.03] to-transparent dark:from-amber-500/[0.14] dark:via-amber-500/[0.04] dark:to-transparent text-foreground shadow-amber-500/5",
        warning: "border-rose-500/25 border-l-[4px] border-l-rose-500 bg-gradient-to-r from-rose-500/[0.08] via-rose-500/[0.03] to-transparent dark:from-rose-500/[0.14] dark:via-rose-500/[0.04] dark:to-transparent text-foreground shadow-rose-500/5",
        quiz: "border-primary/25 border-l-[4px] border-l-primary bg-gradient-to-r from-primary/[0.08] via-primary/[0.03] to-transparent dark:from-primary/[0.14] dark:via-primary/[0.04] dark:to-transparent text-foreground shadow-primary/5",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const iconBadgeVariants = {
  info: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30",
  tip: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30",
  warning: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30",
  quiz: "bg-primary/15 text-primary border border-primary/30",
} as const;

const iconByVariant = {
  info: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
  quiz: HelpCircle,
} as const;

export interface CalloutProps extends VariantProps<typeof calloutVariants> {
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * A single Callout component covers every highlight-box variant defined
 * in the design system (Info, Tip/Warning, Quiz) with polished cards,
 * structured icon badges, subtle gradients, and automatic inline code styling.
 */
export function Callout({ variant = "info", title, children, className }: CalloutProps) {
  const safeVariant = variant ?? "info";
  const Icon = iconByVariant[safeVariant];
  const badgeClass = iconBadgeVariants[safeVariant];

  return (
    <div role="note" className={cn(calloutVariants({ variant: safeVariant }), className)}>
      <div className={cn("mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm", badgeClass)}>
        <Icon className="h-4 w-4" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        {title && (
          <p className="mb-1.5 font-semibold text-foreground tracking-tight text-sm sm:text-base">
            {title}
          </p>
        )}
        <div className="text-foreground/90 font-normal leading-relaxed [&_p]:my-0 [&_code]:rounded-md [&_code]:bg-surface dark:[&_code]:bg-surface-high [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:font-semibold [&_code]:text-foreground [&_code]:border [&_code]:border-border/70 [&_code]:shadow-sm [&_strong]:font-semibold [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_a]:font-medium hover:[&_a]:text-primary/80">
          {children}
        </div>
      </div>
    </div>
  );
}
