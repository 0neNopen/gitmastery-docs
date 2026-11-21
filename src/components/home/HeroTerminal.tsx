"use client";

import { useId, useState } from "react";
import { Check, Copy, Terminal as TerminalIcon, GitBranch, GitCommit, Sparkles } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/lib/utils/cn";

interface TerminalSnippet {
  id: string;
  tabLabel: string;
  icon: typeof TerminalIcon;
  branch: string;
  badgeText: string;
  commands: {
    command: string;
    output?: string[];
  }[];
}

const TERMINAL_SNIPPETS: TerminalSnippet[] = [
  {
    id: "init",
    tabLabel: "Alur Dasar",
    icon: TerminalIcon,
    branch: "main",
    badgeText: "3 file di-commit",
    commands: [
      {
        command: "git init",
        output: ["Initialized empty Git repository in /home/developer/proyek/.git/"],
      },
      {
        command: "git add .",
      },
      {
        command: 'git commit -m "feat: struktur awal proyek"',
        output: [
          "[main (root-commit) 8b4c29a] feat: struktur awal proyek",
          " 3 files changed, 62 insertions(+)",
        ],
      },
    ],
  },
  {
    id: "branch",
    tabLabel: "Branching",
    icon: GitBranch,
    branch: "feat/landing-page",
    badgeText: "berpindah branch",
    commands: [
      {
        command: "git switch -c feat/landing-page",
        output: ["Switched to a new branch 'feat/landing-page'"],
      },
      {
        command: "git status -s",
        output: [
          " M src/components/HeroSection.tsx",
          " A src/components/SpotlightCard.tsx",
          "?? src/assets/illustrations/",
        ],
      },
    ],
  },
  {
    id: "sync",
    tabLabel: "Push Remote",
    icon: GitCommit,
    branch: "main",
    badgeText: "tersinkron ke remote",
    commands: [
      {
        command: "git remote add origin https://github.com/kamu/proyek-hebat.git",
      },
      {
        command: "git push -u origin main",
        output: [
          "Enumerating objects: 9, done.",
          "Writing objects: 100% (9/9), 2.14 KiB | 2.14 MiB/s, done.",
          "To https://github.com/kamu/proyek-hebat.git",
          " * [new branch]      main -> main",
          "Branch 'main' set up to track remote branch 'main'.",
        ],
      },
    ],
  },
];

/**
 * Interactive workflow preview terminal shown in the homepage hero.
 * Lets visitors inspect three common Git workflows via accessible tabs
 * and copy the clean commands in one click.
 */
export function HeroTerminal() {
  const [activeTabId, setActiveTabId] = useState<string>("init");
  const { copied, copy, reset } = useCopyToClipboard();
  const tabBaseId = useId();

  const activeSnippet: TerminalSnippet =
    TERMINAL_SNIPPETS.find((s) => s.id === activeTabId) ?? TERMINAL_SNIPPETS[0]!;

  const fullRawCommands = activeSnippet.commands.map((c) => c.command).join("\n");

  function selectTab(id: string) {
    setActiveTabId(id);
    reset();
  }

  return (
    <div className="group relative mx-auto mt-12 w-full max-w-3xl text-left">
      {/* Outer ambient aura glow */}
      <div
        className="pointer-events-none absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-primary/30 via-accent-blue/20 to-primary/30 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100 dark:opacity-40"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-xl border border-code-border bg-code-surface shadow-2xl shadow-black/10 backdrop-blur-sm dark:shadow-black/60">
        {/* Terminal Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-code-border bg-code-header px-4 py-2.5">
          {/* Traffic light dots + Interactive Tabs (Desktop) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-accent-red/80" />
              <span className="h-3 w-3 rounded-full bg-accent-yellow/80" />
              <span className="h-3 w-3 rounded-full bg-accent-green/80" />
            </div>

            <div
              role="tablist"
              aria-label="Contoh alur kerja Git"
              className="ml-2 hidden items-center gap-1 border-l border-code-border pl-3 sm:flex"
            >
              {TERMINAL_SNIPPETS.map((snippet) => {
                const Icon = snippet.icon;
                const isActive = snippet.id === activeTabId;
                return (
                  <button
                    key={snippet.id}
                    id={`${tabBaseId}-tab-${snippet.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${tabBaseId}-panel`}
                    onClick={() => selectTab(snippet.id)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all",
                      isActive
                        ? "bg-surface text-primary shadow-sm shadow-black/5 dark:bg-surface-low dark:text-primary"
                        : "text-code-muted hover:bg-code-border/40 hover:text-code-text"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{snippet.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Header: Git Branch & Copy Action */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 rounded-full border border-code-border bg-code-surface px-2.5 py-0.5 font-mono text-[11px] text-code-muted">
              <GitBranch className="h-3 w-3 text-primary" aria-hidden="true" />
              <span className="font-medium text-code-text">{activeSnippet.branch}</span>
            </div>

            <button
              type="button"
              onClick={() => copy(fullRawCommands)}
              className="flex items-center gap-1.5 rounded-md border border-code-border bg-code-surface px-2.5 py-1 text-xs font-medium text-code-muted transition-all hover:border-primary/50 hover:bg-code-border/40 hover:text-code-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={copied ? "Perintah disalin ke clipboard" : "Salin semua perintah"}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-accent-green" aria-hidden="true" />
                  <span className="text-[11px] text-accent-green">Disalin</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="text-[11px]">Salin</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Tab Selectors */}
        <div
          role="tablist"
          aria-label="Contoh alur kerja Git (mobile)"
          className="flex gap-1 overflow-x-auto border-b border-code-border bg-code-surface px-2 py-1.5 sm:hidden"
        >
          {TERMINAL_SNIPPETS.map((snippet) => {
            const Icon = snippet.icon;
            const isActive = snippet.id === activeTabId;
            return (
              <button
                key={snippet.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tabBaseId}-panel`}
                onClick={() => selectTab(snippet.id)}
                className={cn(
                  "flex items-center gap-1.5 whitespace-nowrap rounded px-2.5 py-1 text-xs font-medium transition-all",
                  isActive
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-code-muted hover:text-code-text"
                )}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{snippet.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Terminal Body Content */}
        <div
          id={`${tabBaseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${tabBaseId}-tab-${activeSnippet.id}`}
          className="overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm"
        >
          <div className="space-y-4">
            {activeSnippet.commands.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                {/* Command Line */}
                <div className="flex items-center gap-2 font-semibold">
                  <span className="select-none font-bold text-primary">$</span>
                  <span className="text-code-text">{item.command}</span>
                </div>

                {/* Output Lines */}
                {item.output && (
                  <div className="space-y-0.5 border-l-2 border-primary/20 pl-4 text-xs text-code-muted/90">
                    {item.output.map((line, lineIdx) => (
                      <div key={lineIdx} className="leading-snug">
                        {line.startsWith("[main") || line.startsWith("Switched") ? (
                          <span className="text-accent-green">{line}</span>
                        ) : line.startsWith(" M ") ? (
                          <span>
                            <span className="font-bold text-accent-yellow">M </span>
                            {line.slice(3)}
                          </span>
                        ) : line.startsWith(" A ") ? (
                          <span>
                            <span className="font-bold text-accent-green">A </span>
                            {line.slice(3)}
                          </span>
                        ) : line.startsWith("?? ") ? (
                          <span>
                            <span className="font-bold text-accent-red">?? </span>
                            {line.slice(3)}
                          </span>
                        ) : line.includes("Enumerating") || line.includes("Writing") ? (
                          <span className="text-accent-blue/80">{line}</span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Footer Bar */}
        <div className="flex items-center justify-between border-t border-code-border bg-code-header/60 px-4 py-2 text-[11px] text-code-muted">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-accent-green" aria-hidden="true" />
            <span className="font-mono">Status: {activeSnippet.badgeText}</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px]">
            <Sparkles className="h-3 w-3 text-primary" aria-hidden="true" />
            <span>Pratinjau Alur Kerja Git</span>
          </div>
        </div>
      </div>
    </div>
  );
}
