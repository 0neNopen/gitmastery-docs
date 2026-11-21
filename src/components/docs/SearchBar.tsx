"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useEscapeToClose } from "@/hooks/useEscapeToClose";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import type { SearchCategory, SearchDocument } from "@/types/search";

export interface SearchBarProps {
  /**
   * Pluggable query function so the same UI works whether the backing
   * index is the in-memory `searchDocuments` helper, Pagefind, or Algolia
   * DocSearch — only this one function needs to change per integration.
   */
  onQuery: (query: string) => Promise<SearchDocument[]> | SearchDocument[];
  placeholder?: string;
}

/** Fixed display order for grouped results — matches the site's information architecture. */
const CATEGORY_ORDER: SearchCategory[] = ["Lesson", "Command", "GitHub", "Case Study", "FAQ", "Glossary"];

/** Display label per category — kept separate from the internal type values so those can stay stable English identifiers. */
const CATEGORY_LABEL: Record<SearchCategory, string> = {
  Lesson: "Materi & Referensi",
  Command: "Perintah Git",
  GitHub: "Materi GitHub",
  "Case Study": "Troubleshooting",
  FAQ: "FAQ",
  Glossary: "Glosarium",
};

const CATEGORY_COLOR: Record<SearchCategory, string> = {
  Lesson: "bg-primary",
  Command: "bg-accent-blue",
  GitHub: "bg-accent-green",
  "Case Study": "bg-foreground-muted",
  FAQ: "bg-accent-yellow",
  Glossary: "bg-accent-red",
};

const QUICK_SUGGESTIONS = ["git commit", "merge conflict", "pull request", "cheat sheet", "roadmap"];

function groupByCategory(results: SearchDocument[]): [SearchCategory, SearchDocument[]][] {
  return CATEGORY_ORDER.map(
    (category): [SearchCategory, SearchDocument[]] => [
      category,
      results.filter((r) => r.category === category),
    ]
  ).filter(([, items]) => items.length > 0);
}

/**
 * Site-wide search. Renders as a compact trigger inline in the navbar
 * — a labeled pill from `sm:` up, an icon-only button below it so
 * search stays reachable on mobile — and expands into a full
 * command-palette dialog portaled to `document.body` on click or ⌘K/Ctrl+K.
 *
 * Implements the WAI-ARIA combobox pattern (`role="combobox"` input +
 * `role="listbox"` results, `aria-activedescendant` tracking the
 * highlighted option in visual display order) so arrow keys, Enter,
 * and Escape all work without a mouse.
 */
export function SearchBar({ onQuery, placeholder = "Cari dokumentasi..." }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchDocument[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shortcutHint, setShortcutHint] = useState("Ctrl K");

  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const router = useRouter();

  const debouncedQuery = useDebouncedValue(query);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
    setActiveIndex(0);
  }, []);

  useLockBodyScroll(isOpen);
  useEscapeToClose(isOpen, close);
  useFocusTrap(panelRef, isOpen);

  // Show ⌘K on Apple platforms, Ctrl K elsewhere — set post-mount to avoid SSR mismatch.
  useEffect(() => {
    if (typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      setShortcutHint("⌘K");
    }
  }, []);

  // Global ⌘K / Ctrl+K shortcut (Caps-Lock safe), reachable from anywhere on the page
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((current) => !current);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus the input the moment the dialog mounts
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const trimmed = debouncedQuery.trim();
    if (!trimmed) {
      setResults([]);
      setActiveIndex(0);
      return;
    }

    let cancelled = false;
    Promise.resolve(onQuery(trimmed)).then((data) => {
      if (!cancelled) {
        setResults(data);
        setActiveIndex(0);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, onQuery]);

  const grouped = useMemo(() => groupByCategory(results), [results]);

  // Flat list in the exact visual order rendered inside the listbox,
  // so ArrowDown / ArrowUp / Enter always move linearly top-to-bottom.
  const orderedResults = useMemo(
    () => grouped.flatMap(([, items]) => items),
    [grouped]
  );

  const indexById = useMemo(() => {
    const map = new Map<string, number>();
    orderedResults.forEach((doc, index) => map.set(doc.id, index));
    return map;
  }, [orderedResults]);

  // Keep the keyboard-highlighted option scrolled into view inside the listbox
  useEffect(() => {
    if (!isOpen || orderedResults.length === 0) return;
    const activeOption = document.getElementById(`${listboxId}-option-${activeIndex}`);
    activeOption?.scrollIntoView({ block: "nearest" });
  }, [isOpen, activeIndex, orderedResults.length, listboxId]);

  const trimmedQuery = query.trim();
  const isSettled = trimmedQuery.length > 0 && trimmedQuery === debouncedQuery.trim();

  function navigateTo(href: string) {
    router.push(href);
    close();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (orderedResults.length === 0) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % orderedResults.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + orderedResults.length) % orderedResults.length);
        break;
      case "Enter": {
        event.preventDefault();
        const active = orderedResults[activeIndex];
        if (active) navigateTo(active.href);
        break;
      }
    }
  }

  return (
    <>
      {/* Compact pill trigger — sm and up */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hidden w-full max-w-xs items-center gap-2 rounded-md border border-foreground/10 bg-surface-low px-3 py-2 text-sm text-foreground-muted transition-colors hover:border-foreground/20 sm:flex"
      >
        <Search className="h-4 w-4 shrink-0" aria-hidden />
        <span className="flex-1 text-left">{placeholder}</span>
        <kbd className="rounded border border-foreground/10 px-1.5 py-0.5 font-mono text-xs whitespace-nowrap">
          {shortcutHint}
        </kbd>
      </button>

      {/* Icon-only trigger — below sm, so search stays reachable on mobile */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Cari dokumentasi"
        className="flex h-9 w-9 items-center justify-center rounded-md text-foreground-muted transition-colors hover:bg-foreground/10 hover:text-foreground sm:hidden"
      >
        <Search className="h-4 w-4" aria-hidden />
      </button>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-20 sm:pt-24"
            onClick={close}
          >
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Cari dokumentasi"
              className="w-full max-w-lg overflow-hidden rounded-md border border-foreground/10 bg-surface-low shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
                <Search className="h-4 w-4 shrink-0 text-foreground-muted" aria-hidden />
                <input
                  ref={inputRef}
                  role="combobox"
                  aria-expanded={orderedResults.length > 0}
                  aria-controls={listboxId}
                  aria-autocomplete="list"
                  aria-activedescendant={
                    orderedResults.length > 0 ? `${listboxId}-option-${activeIndex}` : undefined
                  }
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Cari materi, perintah, error, FAQ, atau glosarium..."
                  className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-foreground-muted"
                />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Tutup pencarian"
                  className="shrink-0 rounded p-1 text-foreground-muted hover:bg-foreground/10 hover:text-foreground"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>

              {!trimmedQuery && (
                <div className="p-4">
                  <p className="mb-2.5 label-eyebrow text-foreground-muted">Pencarian Populer</p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_SUGGESTIONS.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => {
                          setQuery(suggestion);
                          inputRef.current?.focus();
                        }}
                        className="rounded-md border border-foreground/10 bg-surface px-2.5 py-1 text-xs text-foreground-muted transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {orderedResults.length > 0 && (
                <ul
                  id={listboxId}
                  role="listbox"
                  aria-label="Hasil pencarian"
                  className="max-h-80 overflow-y-auto p-2"
                >
                  {grouped.map(([category, items]) => (
                    <li key={category} role="presentation">
                      <p
                        role="presentation"
                        className="px-3 pb-1 pt-2 label-eyebrow text-foreground-muted"
                      >
                        {CATEGORY_LABEL[category]}
                      </p>
                      <ul role="presentation">
                        {items.map((result) => {
                          const visualIndex = indexById.get(result.id) ?? 0;
                          const isActive = visualIndex === activeIndex;

                          return (
                            <li key={result.id} role="presentation">
                              <a
                                id={`${listboxId}-option-${visualIndex}`}
                                role="option"
                                aria-selected={isActive}
                                href={result.href}
                                tabIndex={-1}
                                onMouseEnter={() => setActiveIndex(visualIndex)}
                                onClick={(event) => {
                                  event.preventDefault();
                                  navigateTo(result.href);
                                }}
                                className={cn(
                                  "flex flex-col gap-0.5 rounded px-3 py-2",
                                  isActive ? "bg-primary/10" : "hover:bg-foreground/5"
                                )}
                              >
                                <span className="flex items-center gap-2 text-sm text-foreground">
                                  <span
                                    className={cn(
                                      "h-1.5 w-1.5 shrink-0 rounded-full",
                                      CATEGORY_COLOR[result.category]
                                    )}
                                    aria-hidden
                                  />
                                  {result.title}
                                </span>
                                <span className="truncate pl-3.5 text-xs text-foreground-muted">
                                  {result.description}
                                </span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}

              {isSettled && orderedResults.length === 0 && (
                <p className="p-4 text-center text-sm text-foreground-muted" role="status">
                  Tidak ada hasil untuk &ldquo;{trimmedQuery}&rdquo;
                </p>
              )}

              <div className="hidden items-center justify-between border-t border-foreground/10 px-4 py-2 text-[11px] text-foreground-muted sm:flex">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="rounded border border-foreground/10 px-1 py-0.5 font-mono">↑</kbd>{" "}
                    <kbd className="rounded border border-foreground/10 px-1 py-0.5 font-mono">↓</kbd>{" "}
                    navigasi
                  </span>
                  <span>
                    <kbd className="rounded border border-foreground/10 px-1 py-0.5 font-mono">↵</kbd>{" "}
                    buka
                  </span>
                </div>
                <span>
                  <kbd className="rounded border border-foreground/10 px-1 py-0.5 font-mono">Esc</kbd>{" "}
                  tutup
                </span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
