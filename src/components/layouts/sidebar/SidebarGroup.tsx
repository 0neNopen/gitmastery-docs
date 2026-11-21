import { useId } from "react";

import type { NavGroup } from "@/types/navigation";
import { SidebarLink } from "./SidebarLink";

/**
 * The label is a plain paragraph associated via `aria-labelledby`, not
 * a heading — so no heading appears before the page's `h1`. `useId()`
 * guarantees unique DOM IDs even when both the desktop rail and mobile
 * drawer mount the same group names simultaneously.
 */
export function SidebarGroup({ title, items }: NavGroup) {
  const labelId = useId();

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
