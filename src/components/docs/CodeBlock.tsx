"use client";

import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { highlightCode, inferCodeLanguage } from "./code-highlight";

export interface CodeBlockProps {
  code: string;
  /** Optional filename or context label shown in the terminal header, e.g. "bash", "output", "url", "index.html". Also selects the syntax-highlighting mode — see `code-highlight.tsx`. */
  label?: string;
  className?: string;
}

/**
 * Terminal-styled code block used for every command example on the
 * site. One component instead of the three near-identical hand-copied
 * terminal mockups found across the original export (each with
 * slightly different dot colors, padding, and copy-button placement).
 *
 * Uses its own `code-*` color tokens (`globals.css`) rather than the
 * page's `surface`/`foreground` tokens — a terminal window is a
 * distinct kind of surface with its own contrast requirements (syntax
 * colors tuned specifically against it), so it gets its own small
 * palette that still switches between light and dark themes, the same
 * way every other themed token in the project does.
 *
 * Highlighting is purely presentational: the Copy button always copies
 * the original `code` string passed in, never the highlighted JSX, so
 * what a user pastes is byte-for-byte identical to what was written —
 * never reformatted, reflowed, or altered.
 */
export function CodeBlock({ code, label, className }: CodeBlockProps) {
  const { copied, copy } = useCopyToClipboard();
  const language = inferCodeLanguage(label);

  return (
    <div className={cn("not-prose overflow-hidden rounded-md border border-code-border bg-code-surface", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-code-border bg-code-header px-4 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent-red/70" aria-hidden />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent-yellow/70" aria-hidden />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent-green/70" aria-hidden />
          {label && <span className="ml-2 truncate font-mono text-xs text-code-muted">{label}</span>}
        </div>

        <button
          type="button"
          onClick={() => copy(code)}
          className="flex shrink-0 items-center gap-1.5 rounded px-2 py-1 text-xs text-code-muted transition-colors hover:bg-code-border/50 hover:text-code-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={copied ? "Disalin ke clipboard" : "Salin ke clipboard"}
        >
          {copied ? <Check className="h-3.5 w-3.5 text-accent-green" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Disalin" : "Salin"}
        </button>
      </div>

      <pre className="overflow-x-auto p-4 bg-transparent m-0">
        <code className="block whitespace-pre font-mono text-sm leading-relaxed text-code-text">
          {highlightCode(code, language)}
        </code>
      </pre>
    </div>
  );
}
