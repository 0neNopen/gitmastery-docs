import type { NavGroup } from "@/types/navigation";
import { SidebarLink } from "./SidebarLink";

/**
 * The label is a plain paragraph associated via `aria-labelledby`, not
 * a heading. "Basic Git", "Branching", etc. are navigation group
 * labels, not content sections — and `Sidebar` renders before the main
 * content's own `h1` in the DOM, so using a heading here (as this
 * component originally did, an `<h3>`) meant every documentation page
 * had a heading appear *before* its `h1`, a real hierarchy violation
 * found during an accessibility audit. `role="group"` +
 * `aria-labelledby` still tells assistive tech "this list of links is
 * called X" — a plain `<div>` alone wouldn't communicate that
 * relationship, so the ARIA here is filling a real gap, not decorating
 * semantic HTML that was already sufficient on its own.
 */
export function SidebarGroup({ title, items }: NavGroup) {
  const labelId = `sidebar-group-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="mb-6">
      <p id={labelId} className="mb-2 px-3 label-eyebrow text-foreground-muted">
        {title}
      </p>
      <div
        role="group"
        aria-labelledby={labelId}
        className="space-y-0.5 border-l border-foreground/10 pl-0"
      >
        {items.map((item) => (
          <SidebarLink key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
}
