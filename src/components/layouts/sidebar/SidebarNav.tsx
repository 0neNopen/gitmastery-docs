import type { NavGroup } from "@/types/navigation";
import { SidebarGroup } from "./SidebarGroup";

export interface SidebarNavProps {
  groups: NavGroup[];
  ariaLabel?: string;
}

/**
 * The actual list of nav groups/links — deliberately has no knowledge
 * of whether it's rendered inside the static desktop rail or the mobile
 * drawer overlay. That split is handled one level up in `Sidebar`, so
 * this component (and its data) is defined exactly once.
 */
export function SidebarNav({ groups, ariaLabel = "Navigasi dokumentasi" }: SidebarNavProps) {
  return (
    <nav aria-label={ariaLabel} className="px-3">
      {groups.map((group) => (
        <SidebarGroup key={group.title} {...group} />
      ))}
    </nav>
  );
}
