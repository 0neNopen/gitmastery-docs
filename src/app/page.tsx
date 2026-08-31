import type { Metadata } from "next";

import { Navbar, Footer } from "@/components/layouts";
import { HeroSection, CategoryGrid } from "@/components/home";
import { homeNavLinks, homeFooterColumns } from "@/config/homepage";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.title,
  description:
    "Dokumentasi modern dan panduan langkah-demi-langkah untuk Git dan GitHub, dirancang untuk developer yang mengutamakan alur kerja yang bersih dan efisien.",
  path: "/",
  type: "website",
});

/**
 * Homepage. Deliberately thin: it only composes the Navbar, the two
 * sections from the approved design (Hero, Category grid), and the
 * Footer — every visual and structural decision lives inside those
 * shared components, so this file stays readable as the page grows.
 *
 * No sidebar/TOC here (the homepage isn't a lesson page), so it renders
 * its own header/footer directly rather than going through `DocsLayout`.
 */
export default function HomePage() {
  return (
    <>
      <Navbar
        primaryLinks={homeNavLinks}
        hasSidebar={false}
        ctaLabel="Mulai Belajar"
        ctaHref="/docs/git/introduction"
        githubHref="https://github.com/0neNopen/gitmastery-docs"
      />

      <main id="main-content">
        <HeroSection />
        <CategoryGrid />
      </main>

      <Footer
        columns={homeFooterColumns}
        tagline="Membangun standar baru dalam edukasi teknik. GitMastery membantu developer di seluruh Indonesia menguasai alur kerja Git yang profesional."
      />
    </>
  );
}
