"use client";

import { learningCategories } from "@/config/homepage";
import { CategoryCard } from "./CategoryCard";

/**
 * The six learning-category tiles enhanced with React Bits Spotlight cards.
 * Marked up as an actual list (`<ul>`/`<li>`) with clear heading hierarchy
 * and accessible metadata.
 */
export function CategoryGrid() {
  return (
    <section aria-labelledby="categories-heading" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <span>MODUL &amp; MATERI</span>
          </div>
          <h2
            id="categories-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            Mulai Dari Pondasi Hingga Mahir
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-foreground-muted">
            Pilih topik yang ingin kamu pelajari dan kuasai setiap konsep Git dengan panduan interaktif dan terstruktur.
          </p>
        </div>

        {/* Category Cards Grid */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learningCategories.map((category) => (
            <li key={category.href} className="flex">
              <CategoryCard {...category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
