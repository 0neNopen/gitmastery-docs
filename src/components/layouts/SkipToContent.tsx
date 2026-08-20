/**
 * Visually hidden until focused. Lets keyboard and screen-reader users
 * jump past the navbar straight to the page's main content instead of
 * tabbing through every nav link first. Standard pattern on
 * GitHub Docs, Next.js Docs, and most production documentation sites.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      Lompat ke konten utama
    </a>
  );
}
