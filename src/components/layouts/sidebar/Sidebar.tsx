"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useEscapeToClose } from "@/hooks/useEscapeToClose";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import type { NavGroup, NavLink } from "@/types/navigation";
import { SidebarNav } from "./SidebarNav";
import { useSidebar } from "./SidebarContext";

export interface SidebarProps {
  groups: NavGroup[];
  /** Primary top-level links surfaced at the top of the mobile drawer below `md:` so mobile docs pages only need one menu trigger. */
  primaryLinks?: NavLink[];
}

/**
 * One Sidebar component handles both breakpoints — a fixed 280px rail
 * on desktop (`lg:` and up) and a full-screen overlay drawer below it —
 * rather than the three divergent sidebar implementations found across
 * the original page export. Both share the exact same `SidebarNav`, so
 * the link list is never duplicated between them. Open/close state
 * (drawer) and collapsed state (rail) both come from `SidebarContext`,
 * so the Navbar's two trigger buttons can control this without a direct
 * reference to it.
 */
export function Sidebar({ groups, primaryLinks = [] }: SidebarProps) {
  const { isOpen, close, isCollapsed } = useSidebar();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(isOpen);
  useEscapeToClose(isOpen, close);
  useFocusTrap(drawerRef, isOpen);
  // Tapping a lesson navigates but leaves the drawer covering the page
  // it just opened, with body scroll still locked — so close on every
  // route change. Keyed on `pathname` rather than the link's onClick so
  // it also covers Back/Forward.
  const pathname = usePathname();
  useEffect(() => {
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- route change only
  }, [pathname]);
  // The drawer only exists below `lg:`. If the viewport crosses that
  // breakpoint while open (rotation, window resize), the overlay and its
  // close button are display:none but `isOpen` stays true — leaving body
  // scroll locked with no visible way to release it.
  useEffect(() => {
    if (!isOpen) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    if (desktop.matches) close();
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) close();
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [isOpen, close]);

  // Move focus into the drawer the moment it opens — without this, a
  // keyboard/screen-reader user who opened it via SidebarTrigger would
  // have focus left behind on a trigger button now hidden underneath
  // the open overlay.
  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  return (
    <>
      {/* Desktop: static rail, collapses to zero width instead of unmounting
          so the collapse/expand transition animates smoothly. `inert` pulls
          its links out of the tab order while collapsed — width alone would
          leave them focusably "invisible" for keyboard users otherwise. */}
      <aside
        inert={isCollapsed || undefined}
        aria-hidden={isCollapsed}
        className={cn(
          "sticky top-16 hidden h-[calc(100vh-4rem)] shrink-0 overflow-y-auto overflow-x-hidden border-foreground/10 py-6 transition-[width,border-color] duration-200 ease-in-out lg:block",
          isCollapsed ? "w-0 overflow-hidden border-r-0 py-0" : "w-64 border-r xl:w-72"
        )}
      >
        <div className={cn(isCollapsed ? "invisible w-64 xl:w-72" : "w-full min-w-0")}>
          <SidebarNav groups={groups} />
        </div>
      </aside>

      {/* Mobile: full-screen drawer overlay, only mounted while open */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={close} aria-hidden />
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu dokumentasi"
            className="absolute inset-y-0 left-0 w-72 max-w-[80vw] overflow-y-auto bg-surface-low py-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between px-4">
              <span className="text-sm font-semibold text-foreground">Navigasi</span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Tutup navigasi dokumentasi"
                className="rounded p-1.5 text-foreground-muted hover:bg-foreground/10 hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            {primaryLinks.length > 0 && (
              <div className="mb-4 border-b border-foreground/10 pb-2 md:hidden">
                <SidebarNav
                  ariaLabel="Menu utama mobile"
                  groups={[{ title: "Menu Utama", items: primaryLinks }]}
                />
              </div>
            )}
            <SidebarNav groups={groups} />
          </div>
        </div>
      )}
    </>
  );
}
