import type { ReactNode } from "react";

/**
 * Deliberately not a real tokenizer/AST-based highlighter (Shiki,
 * Prism, etc.) — every code example on this site is a short bash
 * command, its terminal output, a URL, or a couple of HTML lines. A
 * handful of regex passes covers all of it without bundling a syntax
 * highlighting library and its language grammars, which would be a
 * lot of weight for content this simple.
 *
 * Whatever gets highlighted here is purely presentational — `copy()`
 * in `CodeBlock` always copies the original plain `code` string, never
 * anything derived from these spans, so highlighting can never change
 * what actually ends up on the clipboard.
 */

export type CodeLanguage = "bash" | "output" | "html" | "url" | "text";

/** Chooses a highlighting mode from a CodeBlock's `label` prop — "bash", "output", "url", "index.html", etc. */
export function inferCodeLanguage(label?: string): CodeLanguage {
  if (!label) return "text";
  const normalized = label.toLowerCase();
  if (normalized.startsWith("output")) return "output";
  if (normalized === "url") return "url";
  if (normalized === "html" || normalized.endsWith(".html")) return "html";
  if (normalized === "bash") return "bash";
  return "text";
}

const STRING_TOKEN = /^"(?:[^"\\]|\\.)*"$|^'(?:[^'\\]|\\.)*'$/;
const URL_TOKEN = /^https?:\/\//;
const FLAG_TOKEN = /^-{1,2}[a-zA-Z][\w-]*$/;

// One combined pattern so `.split()` interleaves matched tokens with
// the plain text around them, in a single left-to-right pass.
const TOKEN_SPLIT = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|https?:\/\/\S+|(?<=\s|^)-{1,2}[a-zA-Z][\w-]*)/g;

function tokenizeSegment(text: string, keyPrefix: string): ReactNode {
  return text.split(TOKEN_SPLIT).map((part, i) => {
    if (!part) return null;
    const key = `${keyPrefix}-${i}`;
    if (STRING_TOKEN.test(part)) {
      return (
        <span key={key} className="text-code-string">
          {part}
        </span>
      );
    }
    if (URL_TOKEN.test(part)) {
      return (
        <span key={key} className="break-all text-code-flag">
          {part}
        </span>
      );
    }
    if (FLAG_TOKEN.test(part)) {
      return (
        <span key={key} className="text-code-flag">
          {part}
        </span>
      );
    }
    return part;
  });
}

function highlightBashLine(line: string, lineKey: number): ReactNode {
  const trimmed = line.trimStart();
  const indent = line.slice(0, line.length - trimmed.length);

  if (trimmed.startsWith("#")) {
    return (
      <span key={lineKey} className="italic text-code-muted">
        {line}
      </span>
    );
  }

  const promptMatch = trimmed.match(/^(\$)(\s*)(.*)$/);
  if (promptMatch) {
    const [, dollar, space, rest] = promptMatch;
    return (
      <span key={lineKey}>
        {indent}
        {/* select-none so copying the visible text (not just the Copy button) skips the decorative prompt */}
        <span className="select-none text-code-muted">{dollar}</span>
        {space}
        {tokenizeSegment(rest ?? "", `l${lineKey}`)}
      </span>
    );
  }

  return <span key={lineKey}>{tokenizeSegment(line, `l${lineKey}`)}</span>;
}

const HTML_TOKEN_SPLIT = /(<\/?[a-zA-Z][\w-]*|\/?>|"(?:[^"\\]|\\.)*")/g;

function highlightHtmlLine(line: string, lineKey: number): ReactNode {
  return (
    <span key={lineKey}>
      {line.split(HTML_TOKEN_SPLIT).map((part, i) => {
        if (!part) return null;
        const key = `h${lineKey}-${i}`;
        if (/^<\/?[a-zA-Z]/.test(part)) {
          return (
            <span key={key} className="text-code-flag">
              {part}
            </span>
          );
        }
        if (part === ">" || part === "/>") {
          return (
            <span key={key} className="text-code-muted">
              {part}
            </span>
          );
        }
        if (part.startsWith('"')) {
          return (
            <span key={key} className="text-code-string">
              {part}
            </span>
          );
        }
        return part;
      })}
    </span>
  );
}

/** Renders `code` line-by-line, choosing token rules based on `language`. */
export function highlightCode(code: string, language: CodeLanguage): ReactNode {
  const lines = code.split("\n");

  if (language === "html") {
    return lines.map((line, i) => <div key={i}>{highlightHtmlLine(line, i)}</div>);
  }

  if (language === "url") {
    return lines.map((line, i) => (
      <div key={i} className="break-all text-code-flag">
        {line}
      </div>
    ));
  }

  if (language === "bash" || language === "output") {
    return lines.map((line, i) => <div key={i}>{highlightBashLine(line, i)}</div>);
  }

  // "text" — unknown label, no token rules, but still one div per line
  // so multi-line snippets keep their line breaks.
  return lines.map((line, i) => <div key={i}>{line || "\u00A0"}</div>);
}
