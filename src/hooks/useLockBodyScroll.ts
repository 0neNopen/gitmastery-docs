"use client";

import { useEffect } from "react";

/**
 * Prevents background scroll while a modal/drawer (mobile sidebar,
 * search overlay) is open. Restores the previous overflow value on
 * cleanup so nested usages don't clobber each other.
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
