import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils/cn";

import type { NavGroup } from "@/types/navigation";

export interface FooterProps {
  columns: NavGroup[];
  tagline: string;
  /** Matches edge-to-edge full-bleed width on docs pages; defaults to centered `max-w-7xl` on marketing pages. */
  fullWidth?: boolean;
}

/**
 * Site footer. Link columns are data-driven (`columns` prop) rather than
 * hand-written per page, so adding a new footer link never means editing
 * markup — only the config object that feeds this component.
 *
 * The `lg:grid-cols-[2fr_repeat(N,1fr)]` track count must match
 * `columns.length` (plus the brand column) — found during a responsive
 * audit with a stale `repeat(3,1fr)` left over from when there were
 * three footer columns configured instead of two, leaving one grid
 * track permanently empty at `lg:` and up. Not an overflow bug, just
 * wasted width; update the `2` here if `footerColumns` grows again.
 */
export function Footer({ columns, tagline, fullWidth = false }: FooterProps) {
  const lgGridCols =
    columns.length === 4
      ? "lg:grid-cols-[2fr_repeat(4,1fr)]"
      : columns.length === 3
      ? "lg:grid-cols-[2fr_repeat(3,1fr)]"
      : "lg:grid-cols-[2fr_repeat(2,1fr)]";

  return (
    <footer className="w-full border-t border-foreground/10">
      <div
        className={cn(
          "px-4 py-12 sm:px-6 lg:px-8",
          fullWidth ? "w-full xl:px-10" : "mx-auto max-w-7xl"
        )}
      >
        <div className={`grid gap-10 sm:grid-cols-2 ${lgGridCols}`}>
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-semibold text-foreground">
              <Logo className="h-6 w-6 shrink-0" />
              <span className="font-bold tracking-tight">GitMastery</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-foreground-muted">{tagline}</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 label-eyebrow text-foreground-muted">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-foreground/10 pt-6 text-sm text-foreground-muted">
          © {new Date().getFullYear()} GitMastery. Dibuat untuk developer.
        </div>
      </div>
    </footer>
  );
}
