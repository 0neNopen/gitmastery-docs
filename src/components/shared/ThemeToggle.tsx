"use client";

import { Moon, Sun, Monitor, type LucideIcon } from "lucide-react";

import { useTheme, type Theme } from "@/hooks/useTheme";

const THEME_ORDER: Theme[] = ["light", "dark", "system"];

const THEME_META: Record<Theme, { label: string; icon: LucideIcon }> = {
  light: { label: "Terang", icon: Sun },
  dark: { label: "Gelap", icon: Moon },
  system: { label: "Sistem", icon: Monitor },
};

/**
 * A single button that cycles Light → Dark → System → Light. Chosen
 * over a dropdown menu deliberately: three states with one click each
 * is simple enough that a menu (and the extra dependency/markup a
 * proper Radix DropdownMenu would need) isn't earning its keep here.
 *
 * The icon always reflects the *current* choice — including "System"
 * getting its own Monitor icon rather than silently resolving to
 * Sun/Moon — so a user who deliberately picked "System" can see that
 * their choice stuck, not just today's resolved appearance.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { label, icon: Icon } = THEME_META[theme];

  function nextTheme(current: Theme): Theme {
    // Non-null: modulo over a non-empty tuple always lands in range.
    return THEME_ORDER[(THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length]!;
  }

  function handleClick() {
    setTheme(nextTheme(theme));
  }

  const nextLabel = THEME_META[nextTheme(theme)].label;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Tema: ${label}. Aktifkan untuk beralih ke mode ${nextLabel}.`}
      title={`Tema: ${label}`}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-foreground-muted transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  );
}
