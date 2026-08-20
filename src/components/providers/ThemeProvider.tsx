"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  /** The user's stored preference — may be "system". */
  theme: Theme;
  /** What's actually rendered right now — always "light" or "dark". */
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const STORAGE_KEY = "gitmastery-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Site-wide theme state: system preference by default, manual override
 * persisted to localStorage. The `.dark` class this applies to
 * `<html>` is what `globals.css`'s `.dark { ... }` block responds to —
 * see `ThemeInitScript` for how the *first* paint avoids a flash before
 * this provider has mounted.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Real value is read from localStorage in the effect below. Starting
  // at "system" here matches what the inline init script assumes when
  // nothing is stored yet, so there's nothing to reconcile visually.
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  // One-time: adopt whatever preference was previously saved.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      setThemeState(stored);
    }
  }, []);

  // Whenever the preference (or the OS setting, while in "system" mode)
  // changes, resolve it to light/dark and apply the class.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function applyResolvedTheme() {
      const resolved = theme === "system" ? getSystemTheme() : theme;
      document.documentElement.classList.toggle("dark", resolved === "dark");
      setResolvedTheme(resolved);
    }

    applyResolvedTheme();

    if (theme !== "system") return;

    mediaQuery.addEventListener("change", applyResolvedTheme);
    return () => mediaQuery.removeEventListener("change", applyResolvedTheme);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
