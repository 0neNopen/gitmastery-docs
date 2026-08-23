import { describe, expect, it } from "vitest";

import { cn } from "./cn";

describe("cn", () => {
  it("joins class names into one string", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops falsy values, so conditional classes are safe to pass", () => {
    expect(cn("visible", false && "hidden", undefined, null, "active")).toBe("visible active");
  });

  it("resolves conflicting Tailwind utilities with the last one winning", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("keeps non-conflicting classes when merging", () => {
    expect(cn("px-2", "font-bold")).toBe("px-2 font-bold");
  });

  it("returns an empty string when given nothing", () => {
    expect(cn()).toBe("");
  });
});
