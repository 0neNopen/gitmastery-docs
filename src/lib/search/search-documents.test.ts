import { describe, expect, it } from "vitest";

import type { SearchDocument } from "@/types/search";
import { searchDocuments } from "./search-documents";

const docs: SearchDocument[] = [
  {
    id: "git-init",
    category: "Command",
    title: "Membuat Repository",
    description: "Ubah folder proyek biasa menjadi repositori Git.",
    href: "/docs/git/init",
    keywords: ["init", "git init"],
  },
  {
    id: "faq-remote",
    category: "FAQ",
    title: "Apa itu Remote",
    description: "Penjelasan remote repository dan kaitannya dengan push.",
    href: "/reference/faq/remote",
  },
];

/** Extracts ids in rank order so every test asserts on the full ordering. */
const idsFor = (query: string) => searchDocuments(query, docs).map((doc) => doc.id);

describe("searchDocuments", () => {
  it("returns nothing for an empty or whitespace-only query", () => {
    expect(searchDocuments("", docs)).toEqual([]);
    expect(searchDocuments("   ", docs)).toEqual([]);
  });

  it("returns nothing when no document matches", () => {
    expect(idsFor("rebase")).toEqual([]);
  });

  it("matches case-insensitively", () => {
    // Both docs mention a repository somewhere; the Git lesson must
    // still outrank the FAQ because its title contains the exact term.
    expect(idsFor("REPOSITORY")).toEqual(["git-init", "faq-remote"]);
  });

  it("ranks an exact title match above a substring match in another field", () => {
    // Both docs contain "remote" somewhere; only faq-remote has it as
    // its title, and exact > prefix > substring scoring must reflect that.
    expect(idsFor("remote")).toEqual(["faq-remote"]);
  });

  it("searches keywords as well as title and description", () => {
    // "init" only exists in the first doc's keywords — and its title
    // does not contain it — so the keyword path must be what matched.
    expect(idsFor("init")).toEqual(["git-init"]);
  });

  it("splits multi-word queries into terms that each contribute score", () => {
    // Neither field contains the full phrase: git-init scores on two
    // terms across keyword+description, while faq-remote matches only
    // "repository" in its description — still returned, but ranked lower.
    expect(idsFor("repository git")).toEqual(["git-init", "faq-remote"]);
  });

  it("never returns more than the requested limit", () => {
    const many: SearchDocument[] = Array.from({ length: 12 }, (_, i) => ({
      id: `doc-${i}`,
      category: "Glossary" as const,
      title: `Istilah commit ${i}`,
      description: "Entri glosarium.",
      href: `/reference/glossary/${i}`,
    }));
    expect(searchDocuments("commit", many, 5)).toHaveLength(5);
  });
});
