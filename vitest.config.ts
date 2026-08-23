import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

/**
 * Unit tests cover the pure functions in `src/lib` — the scoring,
 * navigation, and sidebar builders the whole site is derived from.
 * They run in Node (no DOM needed), with the same `@/` path alias
 * the app uses, resolved here to match `tsconfig.json`.
 */
export default defineConfig({
  // Content files are plain `.tsx` objects without React imports —
  // Next's build handles them via its own JSX transform, so Vitest
  // needs the automatic runtime enabled explicitly.
  esbuild: {
    jsx: "automatic",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
