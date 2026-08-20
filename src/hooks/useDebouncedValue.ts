"use client";

import { useEffect, useState } from "react";

/**
 * Returns `value`, but delayed until it's stopped changing for
 * `delayMs`. Used by `SearchBar` so fast typing doesn't re-run the
 * search on every keystroke — with an in-memory index this is cheap
 * either way, but debouncing keeps the pattern correct if `onQuery`
 * is later swapped for a network-backed search provider.
 */
export function useDebouncedValue<T>(value: T, delayMs = 120): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(timeout);
  }, [value, delayMs]);

  return debounced;
}
