/**
 * Ambient geometric grid & soft luminous glow behind the homepage hero.
 * Pure Server Component — zero client JS or hydration overhead.
 */
export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Ambient glowing radial lights */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 h-[380px] w-[640px] sm:h-[480px] sm:w-[850px] rounded-full bg-primary/15 dark:bg-primary/20 blur-[120px] dark:blur-[140px] transition-all duration-700" />
      <div className="absolute right-[-10%] top-[20%] h-[300px] w-[400px] rounded-full bg-accent-blue/5 dark:bg-accent-blue/10 blur-[100px] transition-all duration-700" />

      {/* SVG Grid Pattern */}
      <svg
        className="absolute inset-0 h-full w-full stroke-border/40 dark:stroke-border/30 [mask-image:radial-gradient(ellipse_at_top,white_20%,transparent_75%)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 40V.5H40" fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#hero-grid-pattern)"
        />
      </svg>

      {/* Subtle floating dot pattern overlay for texture depth */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground-muted) / 0.3) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
