import { docsStructure } from "@/config/docs-structure";
import { docsRegistry } from "@/content/docs";
import type { NavGroup } from "@/types/navigation";

/**
 * Builds the sidebar entirely from `docsStructure` + `docsRegistry` —
 * there is no separately hand-maintained sidebar config to keep in sync
 * anymore. Adding a lesson means adding its slug to a category's
 * `order` array and writing its content file; it appears in the
 * sidebar the next time this runs, with no other change needed.
 *
 * A slug listed in `order` but not yet registered in `docsRegistry` is
 * silently skipped — the same defensive pattern used in
 * `getDocNavigation` — so the curriculum order can describe lessons
 * that don't exist yet without breaking the sidebar or the build.
 */
export function getSidebarGroups(): NavGroup[] {
  return docsStructure.map((category) => ({
    title: category.label,
    items: category.order
      .flatMap((slug) => {
        const lesson = docsRegistry[category.slug]?.[slug];
        // Unregistered slugs are skipped rather than rendered as dead links.
        return lesson ? [{ label: lesson.title, href: `/docs/${category.slug}/${slug}` }] : [];
      }),
  }));
}
