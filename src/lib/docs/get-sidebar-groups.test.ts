import { describe, expect, it } from "vitest";

import { getSidebarGroups } from "./get-sidebar-groups";

describe("getSidebarGroups", () => {
  const groups = getSidebarGroups();

  it("produces all core documentation, tutorial, reference, FAQ, and troubleshooting groups", () => {
    expect(groups.map((group) => group.title)).toEqual([
      "Git",
      "GitHub",
      "Tutorial",
      "Referensi",
      "FAQ",
      "Troubleshooting",
    ]);
  });

  it("lists every registered lesson and reference article per group", () => {
    const byTitle = new Map(groups.map((g) => [g.title, g.items]));
    expect(byTitle.get("Git")).toHaveLength(11);
    expect(byTitle.get("GitHub")).toHaveLength(8);
    expect(byTitle.get("Tutorial")).toHaveLength(1);
    expect(byTitle.get("Referensi")).toHaveLength(3);
    expect(byTitle.get("FAQ")).toHaveLength(5);
    expect(byTitle.get("Troubleshooting")).toHaveLength(5);
  });

  it("builds valid internal hrefs and non-empty labels for every item", () => {
    for (const group of groups) {
      for (const item of group.items) {
        expect(item.href.startsWith("/")).toBe(true);
        expect(item.label.length).toBeGreaterThan(0);
      }
    }
  });

  it("keeps Git and GitHub items aligned with the curriculum order", () => {
    expect(groups[0]?.items[0]?.href).toBe("/docs/git/introduction");
    expect(groups[1]?.items[0]?.href).toBe("/docs/github/introduction");
  });
});
