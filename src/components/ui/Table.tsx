import { type HTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils/cn";

/**
 * Composable Table primitive, same pattern as `Card` — a wrapper plus
 * small semantic parts, rather than one monolithic component with a
 * `rows`/`columns` prop. Built for structured reference content (a
 * comparison table, a command reference, a cheat sheet) that doesn't
 * belong inside prose flow — for tables written directly in lesson
 * markdown/JSX, Tailwind Typography already themes `<table>` via the
 * `--tw-prose-th-borders` / `--tw-prose-td-borders` mapping in
 * `tailwind.config.ts`, so this component is for the "outside of
 * prose" case specifically.
 *
 * Every part uses the same `border-foreground/10` / `bg-surface-low`
 * tokens as the rest of the UI, so it inherits light/dark theming for
 * free rather than needing its own palette (unlike `CodeBlock`, a
 * table has no special contrast needs beyond ordinary body text).
 */
export const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="not-prose overflow-x-auto rounded-md border border-foreground/10">
      <table ref={ref} className={cn("w-full border-collapse text-sm", className)} {...props} />
    </div>
  )
);
Table.displayName = "Table";

export const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("bg-surface-low", className)} {...props} />
  )
);
TableHeader.displayName = "TableHeader";

export const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <tbody ref={ref} className={className} {...props} />
);
TableBody.displayName = "TableBody";

export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-t border-foreground/10 first:border-t-0 hover:bg-foreground/5", className)}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";

export const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "label-eyebrow px-4 py-3 text-left font-semibold text-foreground-muted",
        className
      )}
      {...props}
    />
  )
);
TableHead.displayName = "TableHead";

export const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("px-4 py-3 text-foreground", className)} {...props} />
  )
);
TableCell.displayName = "TableCell";
