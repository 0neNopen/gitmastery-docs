"use client";

import { useCallback, useState } from "react";

/**
 * Copies a string to the clipboard and exposes a short-lived `copied`
 * flag so callers (CodeBlock's copy button, etc.) can swap an icon or
 * label to confirm the action without managing their own timers.
 */
export function useCopyToClipboard(resetAfterMs = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), resetAfterMs);
      } catch {
        // Clipboard API can fail (permissions, insecure context) —
        // fail silently rather than throwing in the UI.
        setCopied(false);
      }
    },
    [resetAfterMs]
  );

  return { copied, copy };
}
