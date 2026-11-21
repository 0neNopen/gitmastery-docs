import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";

import { getCopyableCode, highlightCode, inferCodeLanguage } from "./code-highlight";

describe("getCopyableCode", () => {
  it("strips leading '$ ' prompts from single and multi-line bash snippets", () => {
    const input = "$ git branch fitur-baru\n$ git switch fitur-baru";
    expect(getCopyableCode(input, "bash")).toBe("git branch fitur-baru\ngit switch fitur-baru");
  });

  it("preserves comments, blank lines, and shell variables in bash snippets", () => {
    const input = "# cek path\n$ echo $HOME\n\n$ git status";
    expect(getCopyableCode(input, "bash")).toBe("# cek path\necho $HOME\n\ngit status");
  });

  it("leaves non-bash snippets completely untouched", () => {
    const outputSnippet = "$ git status\nOn branch main";
    expect(getCopyableCode(outputSnippet, "output")).toBe(outputSnippet);
    expect(getCopyableCode("<h1>$ 100</h1>", "html")).toBe("<h1>$ 100</h1>");
    expect(getCopyableCode("https://example.com", "url")).toBe("https://example.com");
  });

  it("infers bash language correctly from label", () => {
    expect(inferCodeLanguage("bash")).toBe("bash");
    expect(inferCodeLanguage("BASH")).toBe("bash");
    expect(inferCodeLanguage("output")).toBe("output");
    expect(inferCodeLanguage("index.html")).toBe("html");
  });

  it("renders non-breaking spaces for blank lines so spacing never collapses", () => {
    for (const lang of ["bash", "output", "html", "url", "text"] as const) {
      const nodes = highlightCode("line1\n\nline2", lang) as ReactElement<{ children: unknown }>[];
      expect(nodes).toHaveLength(3);
      expect(nodes[1]?.props.children).toBe("\u00A0");
    }
  });
});
