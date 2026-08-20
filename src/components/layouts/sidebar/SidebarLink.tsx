"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lock } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import type { NavLink } from "@/types/navigation";

export function SidebarLink({ label, href, locked }: NavLink) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (locked) {
    return (
      <span
        aria-disabled="true"
        className="flex cursor-not-allowed items-center justify-between rounded px-3 py-1.5 text-sm text-foreground-muted/50"
      >
        {label}
        <Lock className="h-3 w-3" aria-hidden />
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative block rounded-lg px-3 py-1.5 text-sm transition-all duration-150",
        isActive
          ? "bg-primary/10 font-semibold text-primary shadow-sm shadow-primary/5"
          : "text-foreground-muted hover:bg-foreground/5 hover:text-foreground"
      )}
    >
      {label}
    </Link>
  );
}
