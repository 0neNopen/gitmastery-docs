"use client";

import { useEffect } from "react";

/**
 * Closes an overlay when Escape is pressed, while it's active. Both the
 * mobile sidebar drawer and the search dialog need this exact behavior;
 * extracted here so it's implemented (and cleaned up) once instead of
 * being rewritten slightly differently in each component.
 */
export function useEscapeToClose(active: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!active) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onEscape();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, onEscape]);
}
