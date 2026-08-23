import { describe, expect, it } from "vitest";

import { getDocNavigation } from "./get-doc-navigation";

/**
 * These tests pin the end-to-end reading sequence the site promises:
 * Git lessons → GitHub lessons → capstone tutorial, with Previous/Next
 * crossing category boundaries instead of stopping dead at each edge.
 */
describe("getDocNavigation", () => {
  it("gives the very first lesson no Previous link", () => {
    const { previous } = getDocNavigation("git", "introduction");
    expect(previous).toBeUndefined();
  });

  it("chains the first Git lesson to the second one", () => {
    const { next } = getDocNavigation("git", "introduction");
    expect(next?.href).toBe("/docs/git/version-control");
  });

  it("carries the reader from the last Git lesson into the first GitHub lesson", () => {
    const { next } = getDocNavigation("git", "remote");
    expect(next?.href).toBe("/docs/github/introduction");
  });

  it("carries the reader from the last GitHub lesson into the tutorial", () => {
    const { next } = getDocNavigation("github", "pull-request");
    expect(next?.href).toBe("/tutorials/project-pertamaku");
  });

  it("ends the sequence after the final tutorial — no dangling Next", () => {
    const { previous, next } = getDocNavigation("tutorial", "project-pertamaku");
    expect(previous?.href).toBe("/docs/github/pull-request");
    expect(next).toBeUndefined();
  });

  it("returns an empty result for a page that is not in any registry", () => {
    expect(getDocNavigation("git", "does-not-exist")).toEqual({});
  });
});
