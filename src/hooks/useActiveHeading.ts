"use client";

import { useEffect, useState } from "react";

/**
 * Watches a set of heading elements and reports which one is currently
 * in view, so the Table of Contents can highlight the active section
 * as the reader scrolls. IntersectionObserver is used over scroll-position
 * math because it's cheaper and doesn't need throttling.
 */
export function useActiveHeading(headingIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headingIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      {
        // Treat a heading as "active" once it crosses the top ~20% of the
        // viewport, and stop tracking before it reaches the bottom third.
        rootMargin: "0px 0px -70% 0px",
        threshold: 0,
      }
    );

    headingIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headingIds]);

  return activeId;
}
