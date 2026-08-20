import type { ReactNode } from "react";

import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { Sidebar } from "@/components/layouts/sidebar/Sidebar";
import { SidebarProvider } from "@/components/layouts/sidebar/SidebarContext";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { getSidebarGroups } from "@/lib/docs/get-sidebar-groups";
import type { Heading, NavGroup, NavLink } from "@/types/navigation";

export interface DocsLayoutProps {
  children: ReactNode;
  primaryNavLinks: NavLink[];
  footerColumns: NavGroup[];
  headings?: Heading[];
}

/**
 * The shell every documentation page renders inside. This is the single
 * place that assembles Navbar + Sidebar + content + TOC + Footer — an
 * individual lesson page never touches layout markup, it only provides
 * its content and heading list.
 *
 * Notice there's no `sidebarGroups` prop: the sidebar is derived
 * internally via `getSidebarGroups()`, straight from the documentation
 * structure. No page needs to know the sidebar exists, let alone pass
 * it data — the same reasoning that already removed the `onSearch`
 * prop in favor of `DocsSearch` wiring itself up.
 */
export function DocsLayout({ children, primaryNavLinks, footerColumns, headings = [] }: DocsLayoutProps) {
  const sidebarGroups = getSidebarGroups();

  return (
    <SidebarProvider>
      <Navbar primaryLinks={primaryNavLinks} ctaLabel="Mulai Belajar" ctaHref="/docs/git/introduction" />

      <div className="flex w-full px-4 sm:px-6 lg:px-8">
        <Sidebar groups={sidebarGroups} />

        <main id="main-content" className="min-w-0 flex-1 px-4 py-10 lg:px-8 xl:px-12">
          <div className="flex w-full gap-8 xl:gap-12">
            <article className="min-w-0 flex-1 prose prose-headings:scroll-mt-24 max-w-none">
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
