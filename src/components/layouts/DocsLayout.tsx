import type { ReactNode } from "react";

import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { Sidebar } from "@/components/layouts/sidebar/Sidebar";
import { SidebarProvider } from "@/components/layouts/sidebar/SidebarContext";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { siteConfig } from "@/config/site";
import { getSidebarGroups } from "@/lib/docs/get-sidebar-groups";
import type { Heading, NavGroup, NavLink } from "@/types/navigation";

export interface DocsLayoutProps {
  children: ReactNode;
  primaryNavLinks: NavLink[];
  footerColumns: NavGroup[];
  headings?: Heading[];
}

/**
 * The shell every documentation, tutorial, roadmap, and reference page
 * renders inside. Uses the same `max-w-7xl mx-auto` container as `Navbar`
 * and `Footer` so vertical edges stay aligned on wide monitors, and caps
 * article prose width (`max-w-3xl`) for comfortable reading line length.
 */
export function DocsLayout({ children, primaryNavLinks, footerColumns, headings = [] }: DocsLayoutProps) {
  const sidebarGroups = getSidebarGroups();

  return (
    <SidebarProvider>
      <Navbar
        primaryLinks={primaryNavLinks}
        githubHref={siteConfig.githubUrl}
      />

      <div className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Sidebar groups={sidebarGroups} primaryLinks={primaryNavLinks} />

        <main id="main-content" className="min-w-0 flex-1 py-8 sm:py-10 lg:pl-8 xl:pl-10">
          <div className="flex w-full gap-8 xl:gap-10">
            <article className="min-w-0 flex-1 prose prose-headings:scroll-mt-24 max-w-3xl">
              {children}
            </article>

            <TableOfContents headings={headings} />
          </div>
        </main>
      </div>

      <Footer
        columns={footerColumns}
        tagline="Dokumentasi modern untuk developer yang ingin menguasai version control."
      />
    </SidebarProvider>
  );
}
