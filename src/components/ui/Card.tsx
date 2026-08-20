import { type HTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Render the card as its child element (e.g. a Link) instead of a div — same pattern as shadcn/ui's Button. */
  asChild?: boolean;
}

/**
 * Composable Card primitive, following the same pattern as shadcn/ui.
 * Rather than building a separate "FeatureCard" and "LessonCard" component
 * (as the original export did, twice, with diverging markup), every card
 * on the site is assembled from these parts — so a design tweak to
 * padding or border radius happens once, here. `asChild` lets a whole
 * card become a single `<Link>` (see `CategoryCard`) without duplicating
 * its visual styling on the anchor separately.
 *
 * `min-w-0` is load-bearing, not decorative: flex and grid items default
 * to `min-width: auto`, which can stop a Card from shrinking below its
 * content's natural width inside a flex row (found during a responsive
 * audit — `RoadmapStepCard` places a Card in a `flex` row alongside a
 * fixed-width number badge). Fixed once here rather than patched at
 * every call site that happens to use Card inside flex/grid.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          "block min-w-0 rounded-2xl bg-surface-low p-6 sm:p-7",
          "shadow-lg shadow-black/5 dark:shadow-2xl dark:shadow-black/50",
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/80 dark:hover:bg-surface-high/50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-3 flex items-center gap-3", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Which heading level to render — defaults to `h3` because most Card
   * usage (e.g. `CategoryCard` on the homepage) sits under a preceding
   * `h2`. Pages with no such `h2` in between (like the Learning
   * Roadmap, where each step is the only heading between the page's
   * `h1` and Footer) must pass `as="h2"` explicitly — found as a real
   * h1→h3 hierarchy skip during an accessibility audit. Card itself
   * can't guess the right level for every context, so it's a prop
   * rather than a hardcoded tag.
   */
  as?: "h2" | "h3" | "h4";
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Heading = "h3", ...props }, ref) => (
    <Heading ref={ref} className={cn("text-base font-semibold text-foreground", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm leading-relaxed text-foreground-muted", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("text-sm", className)} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-4 flex items-center gap-2 pt-4 border-t border-foreground/10", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";
