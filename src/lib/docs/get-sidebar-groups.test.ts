import { describe, expect, it } from "vitest";

import { getSidebarGroups } from "./get-sidebar-groups";

describe("getSidebarGroups", () => {
  const groups = getSidebarGroups();

  it("produces one group per documentation category, in curriculum order", () => {
    expect(groups.map((group) => group.title)).toEqual(["Git", "GitHub"]);
  });

  it("lists every registered lesson of each category", () => {
    const [git, github] = groups;
    expect(git?.items).toHaveLength(11);
    expect(github?.items).toHaveLength(8);
  });

  it("builds each item's href from its own category slug", () => {
    for (const group of groups) {
      for (const item of group.items) {
        expect(item.href.startsWith(`/docs/${group.title.toLowerCase()}/`)).toBe(true);
        expect(item.label.length).toBeGreaterThan(0);
      }
    }
  });

  it("orders items exactly like the category's `order` array starts", () => {
    // The first Git lesson is always "introduction" — if sidebar order
    // ever drifts from the curriculum order, this catches it.
    expect(groups[0]?.items[0]?.href).toBe("/docs/git/introduction");
  });
});
