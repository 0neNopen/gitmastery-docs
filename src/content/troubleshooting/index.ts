import type { LessonContent } from "@/types/lesson";
import { mergeConflict } from "./merge-conflict";
import { detachedHead } from "./detached-head";
import { salahCommit } from "./salah-commit";
import { gagalClone } from "./gagal-clone";
import { pushDitolak } from "./push-ditolak";

/**
 * Solusi untuk kasus-kasus yang umum dijumpai pemula: merge conflict,
 * detached HEAD, undo commit, gagal clone, push ditolak. Di urutan
 * "frekuensi tinggi → rendah", supaya Prev/Next di `LessonTemplate`
 * mengalir dari yang paling sering dibutuhkan ke yang lebih jarang.
 *
 * Pola registry mengikuti `content/docs/git/index.ts` — slug (kunci
 * objek) menentukan URL `/troubleshooting/<slug>`, dan
 * `app/troubleshooting/[slug]/page.tsx` menurunkan halaman dari sini.
 */
export const troubleshooting: Record<string, LessonContent> = {
  "merge-conflict": mergeConflict,
  "salah-commit": salahCommit,
  "push-ditolak": pushDitolak,
  "detached-head": detachedHead,
  "gagal-clone": gagalClone,
};

export const troubleshootingOrder: string[] = [
  "merge-conflict",
  "salah-commit",
  "push-ditolak",
  "detached-head",
  "gagal-clone",
];