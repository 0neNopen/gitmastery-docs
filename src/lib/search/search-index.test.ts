import { describe, expect, it } from "vitest";

import { docsRegistry } from "@/content/docs";
import { faqRegistry } from "@/content/reference/faq";
import { glossaryEntries } from "@/content/reference/glossary";
import { searchIndex } from "@/content/search";
import { troubleshooting } from "@/content/troubleshooting";
import { tutorials } from "@/content/tutorials";
import { searchDocs } from "./search-docs";

function getValidHrefs(): Set<string> {
  const valid = new Set<string>([
    "/",
    "/curriculum",
    "/reference/cheat-sheet",
    "/reference/glossary",
    "/about",
    "/privacy",
    "/terms",
  ]);

  for (const [category, lessons] of Object.entries(docsRegistry)) {
    for (const slug of Object.keys(lessons)) {
      valid.add(`/docs/${category}/${slug}`);
    }
  }
  for (const slug of Object.keys(tutorials)) {
    valid.add(`/tutorials/${slug}`);
  }
  for (const slug of Object.keys(faqRegistry)) {
    valid.add(`/reference/faq/${slug}`);
  }
  for (const slug of Object.keys(troubleshooting)) {
    valid.add(`/troubleshooting/${slug}`);
  }
  for (const entry of glossaryEntries) {
    valid.add(`/reference/glossary#term-${entry.slug}`);
  }

  return valid;
}

describe("searchIndex integrity", () => {
  it("contains no duplicate document IDs", () => {
    const ids = searchIndex.map((doc) => doc.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("points every entry at a real, registered route or glossary anchor", () => {
    const validHrefs = getValidHrefs();
    const broken = searchIndex.filter((doc) => !validHrefs.has(doc.href));
    expect(broken).toEqual([]);
  });

  it("does not contain misleading phantom entries (e.g. GitHub Actions, Branch Protection)", () => {
    const ids = new Set(searchIndex.map((doc) => doc.id));
    expect(ids.has("github-actions")).toBe(false);
    expect(ids.has("github-branch-protection")).toBe(false);
    expect(ids.has("github-conflict-resolution")).toBe(false);
    expect(searchDocs("ci/cd")).toEqual([]);
    expect(searchDocs("protection")).toEqual([]);
  });

  it("finds standalone high-value pages (cheat sheet, roadmap, glosarium) and Indonesian FAQs", () => {
    expect(searchDocs("cheat sheet").some((d) => d.href === "/reference/cheat-sheet")).toBe(true);
    expect(searchDocs("roadmap").some((d) => d.href === "/curriculum")).toBe(true);
    expect(searchDocs("glosarium").some((d) => d.href === "/reference/glossary")).toBe(true);
    expect(searchDocs("perbedaan git github").some((d) => d.href === "/reference/faq/git-vs-github")).toBe(true);
    expect(searchDocs("merge conflict").some((d) => d.href === "/troubleshooting/merge-conflict")).toBe(true);
  });
});
