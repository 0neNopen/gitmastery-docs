import { describe, expect, it } from "vitest";

import { resolveSiteUrl } from "./site";

describe("resolveSiteUrl", () => {
  it("uses NEXT_PUBLIC_SITE_URL and strips trailing slashes", () => {
    expect(resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "https://gitmastery.id///" })).toBe(
      "https://gitmastery.id"
    );
  });

  it("falls back to VERCEL_PROJECT_PRODUCTION_URL when NEXT_PUBLIC_SITE_URL is unset", () => {
    expect(
      resolveSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: "gitmastery-docs.vercel.app" })
    ).toBe("https://gitmastery-docs.vercel.app");
  });

  it("falls back to VERCEL_URL for preview deployments", () => {
    expect(resolveSiteUrl({ VERCEL_URL: "gitmastery-preview.vercel.app" })).toBe(
      "https://gitmastery-preview.vercel.app"
    );
  });

  it("falls back to localhost in local development", () => {
    expect(resolveSiteUrl({})).toBe("http://localhost:3000");
  });
});
