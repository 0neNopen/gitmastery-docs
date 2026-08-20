/**
 * One section in the standalone Cheat Sheet page (`/reference/cheat-sheet`).
 *
 * Each section groups related commands (Setup / Daily / Branch / Remote /
 * Undo) with a heading anchor and a fixed-shape list of rows. Kept
 * distinct from `LessonContent` because the cheat sheet's whole value is
 * the scannable table — there is no prose, no objectives, no exercise.
 */
export interface CheatSheetRow {
  /** The command exactly as the user types it, e.g. `git commit -m "<msg>"`. */
  command: string;
  /** One short line describing what it does. */
  description: string;
}

export interface CheatSheetSection {
  /** Anchor slug for direct linking, e.g. `setup`, `daily`, `branch`. */
  slug: string;
  /** Section heading shown to readers, e.g. "Setup Awal". */
  title: string;
  /** Short one-liner shown under the title. */
  intro: string;
  /** Ordered rows for this section. */
  rows: CheatSheetRow[];
}