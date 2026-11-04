/**
 * All site copy lives here (AGENTS.md: "All site copy lives in
 * app/_content/site.ts"). Components describe structure; this file
 * describes content. Never add unconfirmed facts — use confirm() instead.
 */

export const CONFIRM_LABEL = "CONFIRM WITH CANA";

/**
 * A piece of copy is either confirmed text, or a placeholder describing
 * what CANA still needs to confirm. Placeholders render visibly via
 * <CopyText>. Before launch, searching this file for `confirm(` must
 * return nothing.
 */
export type Placeholder = { readonly confirm: string };
export type Copy = string | Placeholder;
export const confirm = (detail: string): Placeholder => ({ confirm: detail });

export type NavLink = { label: string; href: string };

export type Service = {
  slug: string;
  name: string;
  href: string;
  imageLabel: string;
  whoFor: Copy;
  whatToExpect: Copy;
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
    imageLabel: "hormone therapy consultation",
    whoFor: confirm("who hormone and testosterone therapy may be for"),
    whatToExpect: confirm("evaluation, lab work, and treatment process"),
  },
  {
    slug: "aesthetic-injectables",
    name: "Botox & Aesthetic Injectables",
    href: "/services#aesthetic-injectables",
    imageLabel: "aesthetic treatment room",
    whoFor: confirm("who Botox and injectables may be for"),
    whatToExpect: confirm("treatment appointment and aftercare"),
  },
  {
    slug: "medical-weight-loss",
    name: "Medical Weight Loss",
    href: "/services#medical-weight-loss",
    imageLabel: "wellness and nutrition",
    whoFor: confirm("who the weight loss program may be for"),
    whatToExpect: confirm("program structure, medication, and check-ins"),
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

// --- Homepage ------------------------------------------------------------

export const hero = {
  eyebrow: "Hormone Therapy · Aesthetics · Weight Loss",
  heading: "Medical wellness, thoughtfully restored.",
  body: "Hormone and testosterone therapy, Botox and aesthetic injectables, and medical weight loss, with one provider guiding your care from your first consultation onward.",
  cta: { label: "Explore services", href: "#services" },
  imageLabel: "calm clinic interior or provider consultation",
} as const;

/**
 * Trust/credential items. ONLY add items CANA has confirmed (AGENTS.md).
 * While this list is empty, the trust strip is not rendered at all.
 */
export type TrustItem = { label: string };
export const trustItems: readonly TrustItem[] = [];

// Homepage About intro. The Cana origin story belongs on /about only.
export const aboutIntro = {
  heading: "One provider at every visit.",
  body: "CANA is built around a single provider. The person you meet at your first consultation is the person you'll see at every appointment after it, so you never start over with someone new.",
  providerLabel: "Your provider",
  provider: confirm("provider name, credentials, and licensure"),
  link: { label: "Learn more about CANA", href: "/about" },
} as const;

export const servicesSection = {
  heading: "Services",
  intro: "Three areas of care, one provider.",
  whoForLabel: "Who it may be for",
  whatToExpectLabel: "What to expect",
  linkPrefix: "Learn about",
} as const;

// Step titles describe the general flow; details stay unconfirmed.
export const howItWorks = {
  heading: "How it works",
  steps: [
    {
      title: "Consultation",
      body: confirm("what happens at the first consultation"),
    },
    {
      title: "Your treatment plan",
      body: confirm("how treatment plans are created"),
    },
    {
      title: "Follow-up with the same provider",
      body: confirm("follow-up schedule and format"),
    },
  ],
} as const;

export const consultation = {
  heading: "Start with a consultation.",
  body: "Talk through your goals with CANA's provider and find out which care may be right for you.",
  details: confirm("consultation format, length, and fee"),
} as const;
