"use client";

import { PanelLeft } from "lucide-react";

import { useSidebar } from "./SidebarContext";

/**
 * The mobile/tablet "open docs navigation" button rendered inside the Navbar.
 * Uses `PanelLeft` so it is visually distinct from a generic hamburger menu
 * and clearly signals opening the documentation sidebar drawer.
 */
export function SidebarTrigger() {
  const { isOpen, open } = useSidebar();

  return (
    <button
      type="button"
      onClick={open}
      aria-label="Buka navigasi dokumentasi"
      aria-expanded={isOpen}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-foreground-muted transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
    >
      <PanelLeft className="h-5 w-5" aria-hidden />
    </button>
  );
}
