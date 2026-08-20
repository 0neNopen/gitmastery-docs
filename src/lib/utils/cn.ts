import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely — clsx handles conditionals,
 * twMerge resolves conflicting utilities (e.g. "p-2" vs "p-4")
 * so the last one wins instead of both being applied.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
