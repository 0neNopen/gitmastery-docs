"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/cn";
import type { NavLink } from "@/types/navigation";

export interface NavbarLinksProps {
  links: NavLink[];
}

function isNavLinkActive(pathname: string, href: string): boolean {
  if (pathname === href) return true;
  if (href.startsWith("/docs/") && pathname.startsWith("/docs/")) return true;
  if (href.startsWith("/tutorials/") && pathname.startsWith("/tutorials/")) return true;
  if (href.startsWith("/reference/") && pathname.startsWith("/reference/")) return true;
  if (href.startsWith("/troubleshooting/") && pathname.startsWith("/troubleshooting/")) return true;
  return false;
}

/**
 * Desktop inline primary navigation with section-aware active states.
 * Kept as a tiny client island so `Navbar` itself stays a Server Component.
 */
export function NavbarLinks({ links }: NavbarLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigasi Utama" className="hidden items-center gap-5 md:flex lg:gap-6">
      {links.map((link) => {
        const isActive = isNavLinkActive(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "whitespace-nowrap text-sm transition-colors",
              isActive
                ? "font-semibold text-foreground"
                : "text-foreground-muted hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
