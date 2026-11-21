"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X } from "lucide-react";

import { useEscapeToClose } from "@/hooks/useEscapeToClose";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import type { NavLink } from "@/types/navigation";

export interface MobileNavProps {
  links: NavLink[];
  githubHref?: string;
}

/**
 * Mobile primary menu used on pages without a documentation sidebar
 * (such as the homepage). Renders only below `md:` where the inline
 * navbar links are hidden, and portals its overlay to `document.body`
 * so `backdrop-blur-xl` on `<header>` cannot trap its fixed height.
 */
export function MobileNav({ links, githubHref }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const close = () => setIsOpen(false);

  useLockBodyScroll(isOpen);
  useEscapeToClose(isOpen, close);
  useFocusTrap(panelRef, isOpen);

  // Close on navigation, so the panel never covers the page it opened.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // The panel is `md:hidden`; if the viewport widens past that while it
  // is open, it vanishes but body scroll would stay locked.
  useEffect(() => {
    if (!isOpen) return;
    const wide = window.matchMedia("(min-width: 768px)");
    if (wide.matches) close();
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) close();
    };
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) panelRef.current?.focus();
  }, [isOpen]);

  if (links.length === 0) return null;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={isOpen}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground-muted transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-x-0 top-16 bottom-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={close} aria-hidden />
            <div
              ref={panelRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
              className="absolute inset-x-0 top-0 max-h-full overflow-y-auto border-b border-foreground/10 bg-surface-low p-4 shadow-2xl focus:outline-none"
            >
              <nav aria-label="Navigasi Utama Mobile">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={pathname === link.href ? "page" : undefined}
                        className="block rounded-md px-3 py-2.5 text-sm text-foreground-muted transition-colors hover:bg-foreground/5 hover:text-foreground aria-[current=page]:bg-foreground/5 aria-[current=page]:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {githubHref && (
                  <div className="mt-3 border-t border-foreground/10 pt-3">
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-foreground-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                    >
                      <Github className="h-4 w-4" aria-hidden />
                      <span>GitMastery di GitHub</span>
                    </a>
                  </div>
                )}
              </nav>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
