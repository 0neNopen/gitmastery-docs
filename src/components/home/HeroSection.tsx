import Link from "next/link";
import { ArrowRight, BookOpen, Compass } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import { GridBackground } from "./GridBackground";
import { HeroTerminal } from "./HeroTerminal";

/**
 * Homepage HeroSection enhanced with React Bits inspired design patterns:
 * - Subtle geometric grid background with radial fade and ambient glowing mesh
 * - Animated shimmer badge with ping indicator
 * - Dynamic gradient typography matching GitMastery brand tokens
 * - Interactive Git terminal sandbox showcase
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24 lg:pt-28"
    >
      {/* React Bits inspired ambient grid & glow background */}
      <GridBackground />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Animated Shiny Eyebrow Badge */}
        <div className="relative mb-6 inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm shadow-primary/10 backdrop-blur-sm">
          {/* Shimmer sweep animation */}
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/25 dark:via-primary/25 to-transparent"
            aria-hidden="true"
          />

          {/* Pulse beacon dot */}
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>

          <span className="relative tracking-wide">Panduan Komprehensif Git &amp; GitHub</span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-heading"
          className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.18]"
        >
          Kuasai Kontrol Versi dengan{" "}
          <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 dark:from-primary dark:via-orange-400 dark:to-amber-300 bg-clip-text text-transparent">
            Presisi.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          Dokumentasi modern dan panduan alur kerja Git &amp; GitHub langkah demi langkah.
          Dirancang untuk developer yang mengutamakan kebersihan repositori dan efisiensi kolaborasi tim.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
          <Link
            href="/docs/git/introduction"
            className={cn(
              "group relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 sm:w-auto",
              "hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>Mulai Belajar</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/curriculum"
            className={cn(
              "group flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface-low/80 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-foreground shadow-sm transition-all duration-200 sm:w-auto",
              "hover:bg-surface-high hover:border-primary/40 hover:text-primary hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            <Compass className="h-4 w-4 text-foreground-muted transition-colors group-hover:text-primary" aria-hidden="true" />
            <span>Lihat Roadmap</span>
          </Link>
        </div>

        {/* Interactive Git Terminal Simulator */}
        <HeroTerminal />
      </div>
    </section>
  );
}
