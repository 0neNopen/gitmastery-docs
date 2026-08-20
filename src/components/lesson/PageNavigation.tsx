import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { AdjacentPage } from "@/types/navigation";

export interface PageNavigationProps {
  previous?: AdjacentPage;
  next?: AdjacentPage;
}

/**
 * The Previous/Next footer nav shown on every lesson page. Takes plain
 * data rather than being hand-wired per page — see
 * `lib/docs/get-doc-navigation.ts`, which derives these two links
 * automatically from the curriculum order, so no lesson file has to
 * hardcode "what comes next."
 */
export function PageNavigation({ previous, next }: PageNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Navigasi materi"
      className="not-prose mt-4 grid gap-4 border-t border-foreground/10 pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={previous.href}
          className="group flex flex-col rounded-md border border-foreground/10 p-4 transition-colors hover:border-foreground/20 hover:bg-foreground/5"
        >
          <span className="flex items-center gap-1.5 text-xs text-foreground-muted">
            <ArrowLeft className="h-3 w-3" aria-hidden />
            Previous
          </span>
          <span className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
            {previous.label}
          </span>
        </Link>
      ) : (
        <div aria-hidden />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end rounded-md border border-foreground/10 p-4 text-right transition-colors hover:border-foreground/20 hover:bg-foreground/5 sm:col-start-2"
        >
          <span className="flex items-center gap-1.5 text-xs text-foreground-muted">
            Next
            <ArrowRight className="h-3 w-3" aria-hidden />
          </span>
          <span className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
            {next.label}
          </span>
        </Link>
      ) : (
        <div aria-hidden />
      )}
    </nav>
  );
}
