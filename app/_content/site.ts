/**
 * All site copy lives here (AGENTS.md: "All site copy lives in
 * app/_content/site.ts"). Components describe structure; this file
 * describes content. Never add unconfirmed facts — use CONFIRM instead.
 */

export const CONFIRM = "[CONFIRM WITH CANA]";

export type NavLink = { label: string; href: string };

export type Service = {
  slug: string;
  name: string;
  href: string;
};

export const site = {
  name: "CANA Health & Wellness",
  wordmark: "CANA",
  tagline: "Health & Wellness",
  description:
    "Hormone and testosterone therapy, Botox and aesthetic injectables, and medical weight loss.",
} as const;

export const services: readonly Service[] = [
  {
    slug: "hormone-therapy",
    name: "Hormone & Testosterone Therapy",
    href: "/services#hormone-therapy",
  },
  {
    slug: "aesthetic-injectables",
    name: "Botox & Aesthetic Injectables",
    href: "/services#aesthetic-injectables",
  },
  {
    slug: "medical-weight-loss",
    name: "Medical Weight Loss",
    href: "/services#medical-weight-loss",
  },
];

export const nav = {
  home: { label: "Home", href: "/" },
  about: { label: "About", href: "/about" },
  services: { label: "Services", href: "/services", allLabel: "All services" },
  contact: { label: "Contact", href: "/contact" },
} as const;

export const book: NavLink = { label: "Book Consultation", href: "/book" };

export const skipLinkLabel = "Skip to main content";

// --- Prototype-only copy (remove before production) ---------------------

export const stubNote =
  "Prototype stub. Content for this page comes in a later checkpoint.";

export const homeInProgress = {
  heading: "Homepage in progress",
  sectionHeading: "Checkpoint 2",
  body: "This build checks design tokens, fonts, the header, and the Services menu. Homepage sections arrive in checkpoint 3.",
} as const;
