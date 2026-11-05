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

/**
 * A photo slot. `src` is a path under /public. Photos are not in git yet
 * (licensing), so <PhotoOrPlaceholder> shows a placeholder with
 * `placeholderLabel` when the file is missing at build time.
 * Photos are decorative (alt=""): nearby headings carry the meaning.
 */
export type PhotoSource = { src: string; placeholderLabel: string };

export type Service = {
  slug: string;
  name: string;
  href: string;
  image: PhotoSource;
  /**
   * Homepage card text: the verbatim first sentence of `whoFor`.
   * Excerpt only, never new wording. Full copy appears on /services.
   */
  summary: string;
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
    image: {
      src: "/images/services/hormone-therapy.webp",
      placeholderLabel: "hormone therapy consultation",
    },
    summary:
      "Hormone and testosterone therapy may be appropriate for individuals experiencing symptoms such as persistent fatigue, reduced energy, low libido, changes in mood, or decreased muscle strength.",
    whoFor:
      "Hormone and testosterone therapy may be appropriate for individuals experiencing symptoms such as persistent fatigue, reduced energy, low libido, changes in mood, or decreased muscle strength. For those concerned about hormonal imbalances or age-related changes, a personalized medical evaluation can help determine whether treatment may be beneficial.",
    whatToExpect:
      "Your journey begins with an evaluation of your health history, symptoms, and wellness goals. When appropriate, laboratory testing can help assess hormone levels and guide treatment decisions. If therapy is recommended, your care plan may include ongoing monitoring and adjustments based on your individual needs, response to treatment, and long-term health.",
  },
  {
    slug: "aesthetic-injectables",
    name: "Botox & Aesthetic Injectables",
    href: "/services#aesthetic-injectables",
    image: {
      src: "/images/services/aesthetic-injectables.jpg",
      placeholderLabel: "aesthetic treatment room",
    },
    summary:
      "Botox and aesthetic injectables may be suitable for individuals looking to soften the appearance of fine lines and wrinkles, address specific cosmetic concerns, or maintain a refreshed, natural-looking appearance.",
    whoFor:
      "Botox and aesthetic injectables may be suitable for individuals looking to soften the appearance of fine lines and wrinkles, address specific cosmetic concerns, or maintain a refreshed, natural-looking appearance. Whether exploring aesthetic treatments for the first time or maintaining previous results, the goal is to support your personal preferences and confidence.",
    whatToExpect:
      "The process begins with a consultation to discuss your aesthetic goals, facial features, and available treatment options. Your provider will review the potential benefits, risks, and expected results before recommending an appropriate approach. Depending on the treatment, injections may be completed during a brief office visit. Results, recovery time, and maintenance needs vary by treatment and individual response.",
  },
  {
    slug: "medical-weight-loss",
    name: "Medical Weight Loss",
    href: "/services#medical-weight-loss",
    image: {
      src: "/images/services/medical-weight-loss.avif",
      placeholderLabel: "wellness and nutrition",
    },
    summary:
      "Medical weight loss may be appropriate for individuals who have struggled to achieve or maintain their weight-management goals through traditional approaches alone.",
    whoFor:
      "Medical weight loss may be appropriate for individuals who have struggled to achieve or maintain their weight-management goals through traditional approaches alone. It may also benefit those seeking a more structured, personalized strategy that considers their overall health, lifestyle, and individual needs.",
    whatToExpect:
      "Your experience begins with an assessment of your medical history, current health, and personal goals. Depending on your needs and medical eligibility, your plan may include nutritional guidance, lifestyle recommendations, prescription treatment options, and ongoing follow-up. The focus is on supporting sustainable progress, informed decisions, and long-term health rather than quick fixes or unrealistic expectations.",
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

/** `href` makes the value a link (e.g. tel: so phones can tap to call). */
export type ContactItem = { label: string; value: Copy; href?: string };

export const footer = {
  servicesHeading: "Services",
  clinicHeading: "Clinic",
  clinicLinks: [nav.home, nav.about, nav.contact] as readonly NavLink[],
  contactHeading: "Contact",
  // Address, email, and hours are TBD per CANA; phone is confirmed.
  contact: [
    { label: "Address", value: confirm("clinic address") },
    { label: "Phone", value: "(619) 512-7491", href: "tel:+16195127491" },
    { label: "Email", value: confirm("email address") },
    { label: "Hours", value: confirm("hours of operation") },
  ] as readonly ContactItem[],
  legal: [
    confirm("privacy policy and notice of privacy practices"),
    confirm("terms of use"),
  ],
  disclaimer: confirm("medical disclaimer"),
  // Stored, not computed: with cacheComponents, `new Date()` during
  // prerendering fails the build. Update yearly (or automate later).
  copyrightYear: 2026,
  copyrightHolder: confirm("legal business name"),
} as const;

// --- Prototype-only copy (remove before production) ---------------------

export const stubNote =
  "Prototype stub. Content for this page comes in a later checkpoint.";

// --- Homepage ------------------------------------------------------------

export const hero = {
  // Rendered as a wrapping list; each item stays on one line.
  eyebrowItems: ["Hormone Therapy", "Aesthetics", "Weight Loss"],
  heading: "Medical wellness, thoughtfully restored.",
  body: "Hormone and testosterone therapy, Botox and aesthetic injectables, and medical weight loss, with one provider guiding your care from your first consultation onward.",
  cta: { label: "Explore services", href: "#services" },
  // No hero photo exists yet; shows the placeholder until one is added.
  image: {
    src: "/images/hero.jpg",
    placeholderLabel: "calm clinic interior or provider consultation",
  } satisfies PhotoSource,
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

// How It Works: titles and leads verbatim from CANA; bodies shortened by
// deleting words only (Option A). PENDING CANA CONFIRMATION.
export const howItWorks = {
  heading: "How It Works",
  steps: [
    {
      title: "Consultation",
      lead: "Your wellness journey begins with a conversation.",
      body: "Your provider will take time to understand your health concerns, medical history, and personal goals.",
    },
    {
      title: "Your Personalized Treatment Plan",
      lead: "Care designed around your individual needs.",
      body: "If treatment is recommended, your plan will reflect your individual health needs, preferences, and goals.",
    },
    {
      title: "Ongoing Care & Follow-Up",
      lead: "Personalized support beyond your first visit.",
      body: "Follow-up visits, when appropriate, allow your provider to evaluate your progress and make adjustments as needed.",
    },
  ],
} as const;

export const consultation = {
  heading: "Start with a consultation.",
  body: "Talk through your goals with CANA's provider and find out which care may be right for you.",
  details: confirm("consultation format, length, and fee"),
} as const;
