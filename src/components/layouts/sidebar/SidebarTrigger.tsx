"use client";

import { Menu } from "lucide-react";

import { useSidebar } from "./SidebarContext";

/**
 * The mobile "open menu" button rendered inside the Navbar. Deliberately
 * has no knowledge of the drawer's markup — it just flips the shared
 * `SidebarContext` flag that `Sidebar` renders from.
 */
export function SidebarTrigger() {
  const { isOpen, open } = useSidebar();

  return (
    <button
      type="button"
      onClick={open}
      aria-label="Buka menu dokumentasi"
      aria-expanded={isOpen}
      className="rounded p-2 text-foreground-muted hover:bg-foreground/10 hover:text-foreground lg:hidden"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}
