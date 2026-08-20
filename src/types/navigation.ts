/** A single link in the sidebar or top nav. */
export interface NavLink {
  label: string;
  href: string;
  /** Marks a link as not-yet-available (renders locked/disabled). */
  locked?: boolean;
}

/** A labeled group of links, rendered under an uppercase section heading. */
export interface NavGroup {
  title: string;
  items: NavLink[];
}

/** One entry in a page's "On this page" table of contents. */
export interface Heading {
  id: string;
  text: string;
  /** Only h2/h3 are surfaced in the TOC — deeper levels add noise. */
  level: 2 | 3;
}

/** A prev/next pair rendered at the bottom of a lesson page. */
export interface AdjacentPage {
  label: string;
  href: string;
}
