import type { ReactNode } from "react";

import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { Sidebar } from "@/components/layouts/sidebar/Sidebar";
import { SidebarProvider } from "@/components/layouts/sidebar/SidebarContext";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { siteConfig } from "@/config/site";
import { getSidebarGroups } from "@/lib/docs/get-sidebar-groups";
import { cn } from "@/lib/utils/cn";
import type { Heading, NavGroup, NavLink } from "@/types/navigation";

export interface DocsLayoutProps {
  children: ReactNode;
  primaryNavLinks: NavLink[];
  footerColumns: NavGroup[];
  headings?: Heading[];
  /** Expands the center content column for wide table-based pages such as Cheat Sheet. */
  wideContent?: boolean;
}

/**
 * Full-bleed documentation shell: Navbar, Sidebar, TOC, and Footer span
 * the full viewport width edge-to-edge (eliminating dead side margins on
 * 1440px–1920px+ monitors), while the center article stays generously sized
 * (`max-w-4xl` for lessons, `max-w-5xl` for wide tables) and centered in
 * the main workspace for comfortable long-form reading.
 */
export function DocsLayout({
  children,
  primaryNavLinks,
  footerColumns,
  headings = [],
  wideContent = false,
}: DocsLayoutProps) {
  const sidebarGroups = getSidebarGroups();

  return (
    <SidebarProvider>
      <Navbar
        primaryLinks={primaryNavLinks}
        githubHref={siteConfig.githubUrl}
        fullWidth
      />

      <div className="flex w-full">
        <Sidebar groups={sidebarGroups} primaryLinks={primaryNavLinks} />

        <main
          id="main-content"
          className="min-w-0 flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 xl:px-12"
        >
          <div className="flex w-full items-start gap-8 xl:gap-12">
            <article
              className={cn(
                "mx-auto min-w-0 flex-1 prose prose-headings:scroll-mt-24",
                wideContent ? "max-w-5xl" : "max-w-4xl"
              )}
            >
              {children}
            </article>

            <TableOfContents headings={headings} />
          </div>
        </main>
      </div>

      <Footer
        columns={footerColumns}
        tagline="Dokumentasi modern untuk developer yang ingin menguasai version control."
        fullWidth
      />
    </SidebarProvider>
  );
}
