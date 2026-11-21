"use client";

import { Check, Copy } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/lib/utils/cn";

export interface CopyCommandButtonProps {
  command: string;
  className?: string;
}

/**
 * Compact one-click copy button for individual Git commands in reference
 * tables such as `/reference/cheat-sheet`.
 */
export function CopyCommandButton({ command, className }: CopyCommandButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      type="button"
      onClick={() => copy(command)}
      aria-label={copied ? `Perintah ${command} disalin` : `Salin perintah ${command}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground-muted transition-colors hover:border-primary/40 hover:bg-surface-high hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        copied && "border-accent-green/40 text-accent-green",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" aria-hidden />
          <span>Disalin</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" aria-hidden />
          <span>Salin</span>
        </>
      )}
    </button>
  );
}
