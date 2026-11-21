/**
 * Safe wrappers around `window.localStorage` so strict privacy modes,
 * sandboxed iframes, or quota errors degrade gracefully instead of
 * throwing an uncaught exception during provider mount or user clicks.
 */
export function safeGetStorageItem(key: string): string | null {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function safeSetStorageItem(key: string, value: string): void {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, value);
  } catch {
    // Storage unavailable or quota exceeded — ignore and keep in-memory state.
  }
}
