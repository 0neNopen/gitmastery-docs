import type { Config } from "tailwindcss";

/**
 * GitMastery design tokens.
 *
 * Values are pulled from the project's design system (see /docs/DESIGN.md)
 * and exposed as CSS variables in `globals.css` so both light/dark themes
 * and future rebrands only ever require editing one file.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "hsl(var(--surface))",
          dim: "hsl(var(--surface-dim))",
          low: "hsl(var(--surface-low))",
          high: "hsl(var(--surface-high))",
        },
        border: "hsl(var(--border))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          muted: "hsl(var(--foreground-muted))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          blue: "hsl(var(--accent-blue))",
          green: "hsl(var(--accent-green))",
          yellow: "hsl(var(--accent-yellow))",
          red: "hsl(var(--accent-red))",
        },
        code: {
          surface: "hsl(var(--code-surface))",
          header: "hsl(var(--code-header))",
          border: "hsl(var(--code-border))",
          text: "hsl(var(--code-text))",
          muted: "hsl(var(--code-muted))",
          string: "hsl(var(--code-string))",
          flag: "hsl(var(--code-flag))",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "'JetBrains Mono'",
          "'Fira Code'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        gutter: "1.5rem",
        section: "5rem",
      },
      typography: {
        DEFAULT: {
          css: {
            // Map prose's color roles directly onto our theme tokens.
            // Because --foreground/--foreground-muted/--border already
            // flip between the light and dark palettes in globals.css,
            // `prose` alone now adapts to the active theme — there's no
            // separate "inverted" palette to keep in sync by hand.
            "--tw-prose-body": "hsl(var(--foreground-muted))",
            "--tw-prose-headings": "hsl(var(--foreground))",
            "--tw-prose-bold": "hsl(var(--foreground))",
            "--tw-prose-links": "hsl(var(--primary))",
            "--tw-prose-code": "hsl(var(--foreground))",
            "--tw-prose-hr": "hsl(var(--border))",
            "--tw-prose-bullets": "hsl(var(--border))",
            "--tw-prose-quotes": "hsl(var(--foreground))",
            "--tw-prose-quote-borders": "hsl(var(--border))",
            "--tw-prose-th-borders": "hsl(var(--border))",
            "--tw-prose-td-borders": "hsl(var(--border))",
            maxWidth: "none",
            code: {
              "&::before": { content: "none" },
              "&::after": { content: "none" },
            },
          },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "pulse-subtle": "pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
