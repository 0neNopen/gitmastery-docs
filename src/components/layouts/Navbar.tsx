import Link from "next/link";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { DocsSearch } from "@/components/docs/DocsSearch";
import { MobileNav } from "@/components/layouts/MobileNav";
import { SidebarTrigger } from "@/components/layouts/sidebar/SidebarTrigger";
import { SidebarCollapseToggle } from "@/components/layouts/sidebar/SidebarCollapseToggle";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Logo } from "@/components/shared/Logo";
import type { NavLink } from "@/types/navigation";

export interface NavbarProps {
  primaryLinks: NavLink[];
  /** Docs pages render the sidebar controls here (drawer trigger on mobile, collapse toggle on desktop); the homepage has no sidebar, so it opts out of both. */
  hasSidebar?: boolean;
  /** Docs pages show a persistent "Start Learning" CTA; the homepage already leads with CTAs in its hero. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional GitHub link shown in place of the CTA (matches the approved homepage header). */
  githubHref?: string;
}

/**
 * Sticky top navigation shared by every page on the site, including the
 * homepage. Rather than maintaining a separate homepage-only header
 * (as the original export effectively did), the few real differences
 * between "docs page header" and "homepage header" — the sidebar
 * controls and the CTA — are exposed as optional props. Search needs no
 * prop at all: `DocsSearch` wires itself to the real index internally.
 */
export function Navbar({
  primaryLinks,
  hasSidebar = true,
  ctaLabel,
  ctaHref,
  githubHref,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-foreground/10 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {hasSidebar && (
          <>
            {/* Exactly one of these two is visible at any given width */}
            <SidebarTrigger />
            <SidebarCollapseToggle />
          </>
        )}

        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-semibold text-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Logo className="h-6 w-6 shrink-0" />
          <span className="font-bold tracking-tight">GitMastery</span>
        </Link>

        <nav aria-label="Navigasi Utama" className="hidden items-center gap-6 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <DocsSearch />

          <ThemeToggle />

          {/* Below `md:` the inline nav above is hidden; this carries the
              same links, including on the homepage which has no sidebar. */}
          <MobileNav links={primaryLinks} />

          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="hidden sm:inline-flex">
              <Button size="sm" className="whitespace-nowrap font-semibold px-3.5 py-1.5 rounded-lg shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 transition-all">
                {ctaLabel}
              </Button>
            </Link>
          )}

          {githubHref && (
            <a
              href={githubHref}
              aria-label="GitMastery di GitHub"
              className="hidden text-foreground-muted transition-colors hover:text-primary sm:inline-flex"
            >
              <Github className="h-5 w-5" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
