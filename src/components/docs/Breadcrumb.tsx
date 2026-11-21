import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { NavLink } from "@/types/navigation";

export interface BreadcrumbProps {
  /** Ordered from root to current page. The last item renders as plain text, not a link. */
  items: NavLink[];
}

/**
 * Breadcrumb trail shown at the top of every docs page. Takes a plain
 * array of links so it can be driven directly from route segments or
 * frontmatter — no page needs to hand-build its own trail.
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Navigasi breadcrumb" className="not-prose mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-foreground-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.href}-${index}`} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-foreground">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 text-foreground-muted/50" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
