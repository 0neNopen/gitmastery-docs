import { afterEach, describe, expect, it, vi } from "vitest";

import { safeGetStorageItem, safeSetStorageItem } from "./storage";

describe("safeStorage helpers", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns null and does not throw when window is unavailable (SSR/Node)", () => {
    expect(safeGetStorageItem("gitmastery-theme")).toBeNull();
    expect(() => safeSetStorageItem("gitmastery-theme", "dark")).not.toThrow();
  });

  it("reads and writes values when localStorage works", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("window", {
      localStorage: {
        getItem: (k: string) => store.get(k) ?? null,
        setItem: (k: string, v: string) => {
          store.set(k, v);
        },
      },
    });

    safeSetStorageItem("gitmastery-theme", "dark");
    expect(safeGetStorageItem("gitmastery-theme")).toBe("dark");
  });

  it("swallows SecurityError / QuotaExceededError without throwing", () => {
    vi.stubGlobal("window", {
      localStorage: {
        getItem: () => {
          throw new Error("SecurityError: storage disabled");
        },
        setItem: () => {
          throw new Error("QuotaExceededError");
        },
      },
    });

    expect(safeGetStorageItem("gitmastery-theme")).toBeNull();
    expect(() => safeSetStorageItem("gitmastery-theme", "dark")).not.toThrow();
  });
});
