"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface SidebarContextValue {
  /** Mobile drawer (below `lg:`) — open/closed. */
  isOpen: boolean;
  open: () => void;
  close: () => void;
  /** Desktop rail (`lg:` and up) — collapsed/expanded. A separate concern from the drawer: they apply at different breakpoints and are never both relevant at once. */
  isCollapsed: boolean;
  toggleCollapsed: () => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

const COLLAPSE_STORAGE_KEY = "gitmastery-sidebar-collapsed";

/**
 * Owns two independent pieces of sidebar state, both needed by
 * components that don't otherwise have a direct reference to each
 * other (the trigger buttons live in `Navbar`, the rail/drawer render
 * once in `DocsLayout`):
 *
 * - `isOpen` — the mobile drawer, opened by `SidebarTrigger`.
 * - `isCollapsed` — the desktop rail, toggled by `SidebarCollapseToggle`
 *   and persisted to localStorage, the same pattern `ThemeProvider`
 *   uses for the same reason: it's a real user preference, not
 *   transient UI state.
 *
 * This is still the only shared UI state in the component set, so a
 * small Context remains proportionate — it hasn't grown into a reason
 * to reach for a state library.
 */
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(COLLAPSE_STORAGE_KEY);
    if (stored === "true") setIsCollapsed(true);
  }, []);

  function toggleCollapsed() {
    setIsCollapsed((current) => {
      const next = !current;
      window.localStorage.setItem(COLLAPSE_STORAGE_KEY, String(next));
      return next;
    });
  }

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      isCollapsed,
      toggleCollapsed,
    }),
    [isOpen, isCollapsed]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
