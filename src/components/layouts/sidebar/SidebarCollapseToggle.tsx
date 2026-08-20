"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { useSidebar } from "./SidebarContext";

/**
 * Collapses/expands the desktop sidebar rail. Deliberately separate
 * from `SidebarTrigger` (the mobile drawer button) even though they sit
 * in the same spot in the Navbar — `hidden lg:inline-flex` here and
 * `lg:hidden` on the mobile trigger mean exactly one of the two is ever
 * visible at a given width, matching which sidebar mode is actually
 * active at that breakpoint.
 */
export function SidebarCollapseToggle() {
  const { isCollapsed, toggleCollapsed } = useSidebar();
  const Icon = isCollapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <button
      type="button"
      onClick={toggleCollapsed}
      aria-label={isCollapsed ? "Perluas sidebar" : "Ciutkan sidebar"}
      aria-pressed={isCollapsed}
      title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-md text-foreground-muted transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:inline-flex"
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  );
}
