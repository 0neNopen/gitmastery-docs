"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils/cn";
import { useActiveHeading } from "@/hooks/useActiveHeading";
import type { Heading } from "@/types/navigation";

export interface TableOfContentsProps {
  headings: Heading[];
}

/**
 * Sticky "On this page" navigation rendered in the right rail of a
 * lesson page. Headings are supplied by the MDX pipeline (extracted at
 * build time), so this component only ever deals with rendering + the
 * active-section highlight — it never parses content itself.
 */
export function TableOfContents({ headings }: TableOfContentsProps) {
  const headingIds = useMemo(() => headings.map((h) => h.id), [headings]);
  const activeId = useActiveHeading(headingIds);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Daftar isi"
      className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-56 shrink-0 self-start overflow-y-auto xl:block"
    >
      <p className="mb-3 label-eyebrow text-foreground-muted">
        Di Halaman Ini
      </p>
      <ul className="space-y-1.5 border-l border-foreground/10">
        {headings.map((heading) => {
          const isActive = heading.id === activeId;

          return (
            <li key={heading.id} className={cn(heading.level === 3 && "ml-3")}>
              <a
                href={`#${heading.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block border-l-2 -ml-px py-1 pl-3.5 text-sm transition-all duration-150",
                  isActive
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-foreground-muted hover:border-foreground/30 hover:text-foreground"
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
