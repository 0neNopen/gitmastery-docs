"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Copies a string to the clipboard and exposes a short-lived `copied`
 * flag plus a `reset` helper (e.g. when switching tabs). Clears pending
 * timers on rapid re-clicks and component unmount so state never flickers
 * or updates after unmount.
 */
export function useCopyToClipboard(resetAfterMs = 2000) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    clearTimer();
    setCopied(false);
  }, [clearTimer]);

  useEffect(() => clearTimer, [clearTimer]);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        clearTimer();
        setCopied(true);
        timerRef.current = window.setTimeout(() => {
          setCopied(false);
          timerRef.current = null;
        }, resetAfterMs);
      } catch {
        clearTimer();
        setCopied(false);
      }
    },
    [clearTimer, resetAfterMs]
  );

  return { copied, copy, reset };
}
