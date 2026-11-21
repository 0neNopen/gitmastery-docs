import Link from "next/link";
import { Github } from "lucide-react";

import { buttonVariants } from "@/components/ui/Button";
import { DocsSearch } from "@/components/docs/DocsSearch";
import { MobileNav } from "@/components/layouts/MobileNav";
import { NavbarLinks } from "@/components/layouts/NavbarLinks";
import { SidebarTrigger } from "@/components/layouts/sidebar/SidebarTrigger";
import { SidebarCollapseToggle } from "@/components/layouts/sidebar/SidebarCollapseToggle";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Logo } from "@/components/shared/Logo";
import { searchIndex } from "@/content/search";
import { cn } from "@/lib/utils/cn";
import type { NavLink } from "@/types/navigation";

export interface NavbarProps {
  primaryLinks: NavLink[];
  /** Docs pages render the sidebar controls here (drawer trigger on mobile, collapse toggle on desktop); the homepage has no sidebar, so it opts out of both. */
  hasSidebar?: boolean;
  /** Optional persistent CTA shown on larger screens. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional external GitHub repository link. */
  githubHref?: string;
}

/**
 * Sticky top navigation shared by every page on the site, including the
 * homepage. Runs as a Server Component so `searchIndex` stays server-side
 * and only lightweight metadata is passed to `DocsSearch`.
 *
 * On docs pages (`hasSidebar={true}`), mobile primary links live inside the
 * unified Sidebar drawer so `< 768px` never renders two competing menu icons.
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
      <div className="mx-auto flex h-full w-full max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        {hasSidebar && (
          <>
            {/* Exactly one of these two is visible at any given width */}
            <SidebarTrigger />
            <SidebarCollapseToggle />
          </>
        )}

        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Logo className="h-6 w-6 shrink-0" />
          <span className="font-bold tracking-tight">GitMastery</span>
        </Link>

        <NavbarLinks links={primaryLinks} />

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <DocsSearch documents={searchIndex} />

          <ThemeToggle />

          {/* Only render the standalone mobile nav menu on pages without a sidebar
              (e.g. homepage); docs pages fold these links into the Sidebar drawer
              so mobile never shows two identical menu buttons. */}
          {!hasSidebar && <MobileNav links={primaryLinks} githubHref={githubHref} />}

          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden whitespace-nowrap rounded-lg px-3.5 py-1.5 font-semibold shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/30 lg:inline-flex"
              )}
            >
              {ctaLabel}
            </Link>
          )}

          {githubHref && (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitMastery di GitHub (buka di tab baru)"
              className="hidden h-9 w-9 items-center justify-center rounded-md text-foreground-muted transition-colors hover:bg-foreground/10 hover:text-foreground sm:inline-flex"
            >
              <Github className="h-5 w-5" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
