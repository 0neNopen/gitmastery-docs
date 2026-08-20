const THEME_STORAGE_KEY = "gitmastery-theme";

/**
 * Runs synchronously in <head>, before Tailwind's CSS or React ever
 * paint anything. Without this, the page would flash the wrong theme
 * for a frame — briefly light before switching to dark, or vice versa
 * — while React mounts and `ThemeProvider` figures out the real
 * preference. This script and `ThemeProvider` deliberately duplicate
 * a few lines of resolution logic; that's the cost of avoiding the
 * flash, not an oversight.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "light" || stored === "dark" ? stored : "system";
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = theme === "dark" || (theme === "system" && prefersDark);
    if (isDark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;
