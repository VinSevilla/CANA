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

/**
 * CANA's contact details: the single source for the footer and the Contact
 * page. Phone is confirmed; address, email, and hours are TBD per CANA.
 * Only give an item an `href` once its destination is confirmed; a
 * placeholder must never become a link.
 */
export const contactDetails: readonly ContactItem[] = [
  { label: "Address", value: confirm("clinic address") },
  { label: "Phone", value: "(619) 512-7491", href: "tel:+16195127491" },
  { label: "Email", value: confirm("email address") },
  { label: "Hours", value: confirm("hours of operation") },
];

export const footer = {
  servicesHeading: "Services",
  clinicHeading: "Clinic",
  clinicLinks: [nav.home, nav.about, nav.contact] as readonly NavLink[],
  contactHeading: "Contact",
  contact: contactDetails,
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

// Hero: heading, body, and the "Explore services" label were drafted in the
// prototype: PENDING CANA CONFIRMATION (wording kept for now).
export const hero = {
  heading: "Medical wellness, thoughtfully restored.",
  body: "Hormone and testosterone therapy, Botox and aesthetic injectables, and medical weight loss, with one provider guiding your care from your first consultation onward.",
  cta: { label: "Explore services", href: "#services" },
  // No licensed hero photo yet; an Espresso field shows until one is added.
  // Never ship the local stand-in (it shows another clinic's branding).
  image: {
    src: "/images/hero.jpg",
    placeholderLabel: "calm clinic interior or provider consultation",
  } satisfies PhotoSource,
  // Focal points (CSS object-position) per layout: the mobile frame is a
  // 16:9 band above the text; desktop is full-bleed with text on the left,
  // so the subject should sit right of center. Tune per real photo.
  focus: { mobile: "50% 45%", desktop: "72% 50%" },
} as const;

/**
 * Trust/credential items. ONLY add items CANA has confirmed (AGENTS.md).
 * While this list is empty, the trust strip is not rendered at all.
 */
export type TrustItem = { label: string };
export const trustItems: readonly TrustItem[] = [];

// Photo of CANA's actual provider (never stock). Shared by the homepage
// provider band and the About page; placeholder until one is supplied.
export const providerPortrait: PhotoSource = {
  src: "/images/provider/portrait.jpg",
  placeholderLabel: "portrait of CANA's provider",
};

// Homepage provider band. The Cana origin story belongs on /about only.
// heading/body: confirmed by CANA (verbatim). Provider details below are
// still unconfirmed.
export const aboutIntro = {
  heading: "Care that feels personal.",
  body: "At CANA, you'll see the same provider at every visit. She gets to know you, your history, and what matters to you, so each appointment feels less like a checkup and more like catching up with someone who's genuinely in your corner.",
  // Portrait caption: the existing name placeholder (reused, not a new one)
  // and her role. "Nurse practitioner" is a confirmed fact; this caption
  // wording is new: PENDING CANA CONFIRMATION.
  provider: confirm("provider name, credentials, and licensure"),
  role: "Nurse practitioner",
  // Link label drafted in the prototype: PENDING CANA CONFIRMATION.
  link: { label: "Learn more about CANA", href: "/about" },
  portrait: providerPortrait,
} as const;

// Services section: heading "Services" is a plain label; the intro "Three
// areas of care, one provider." was drafted in the prototype: PENDING CANA
// CONFIRMATION (wording kept for now). Card summaries are verbatim CANA copy.
export const servicesSection = {
  heading: "Services",
  intro: "Three areas of care, one provider.",
  whoForLabel: "Who it may be for",
  whatToExpectLabel: "What to expect",
  linkPrefix: "Learn about",
} as const;

// How It Works: titles and leads verbatim from CANA; bodies are the
// shortened Option A versions, confirmed by CANA.
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

// Consultation panel, shared by the homepage and the About page.
// heading/body: drafted in the prototype, PENDING CANA CONFIRMATION.
export const consultation = {
  heading: "Start with a consultation.",
  body: "Talk through your goals with CANA's provider and find out which care may be right for you.",
  details: confirm("consultation format, length, and fee"),
} as const;

// --- About page -----------------------------------------------------------
// All wording below has been approved by CANA, including the stated
// experience (10+ years practicing and prescribing as a nurse practitioner;
// two years in aesthetic care). Facts not yet supplied stay as confirm()
// placeholders (her name, credential letters, licensure, board
// certification, education, origin story); her portrait stays a photo
// placeholder until CANA supplies one.
// No quotes attributed to her, testimonials, counts, outcomes, or awards.
export const aboutPage = {
  metaDescription:
    "Meet CANA's provider, a nurse practitioner focused on honest, personal care.",
  hero: {
    heading: "Honest care from one provider who knows you.",
    name: confirm("her name"),
    credentials: confirm("credential letters"),
    role: "Nurse practitioner · your provider at every visit",
    // Meaningful on this page (who she is), so not decorative. Add her name
    // once confirmed.
    portraitAlt: "Portrait of CANA's nurse practitioner",
  },
  approach: {
    label: "The CANA approach",
    heading: "If you don't need a treatment, she won't recommend it.",
    body: "Every visit starts with an honest conversation about your health, your goals, and your options. When a treatment makes sense, she'll explain why. When it doesn't, she'll tell you that too.",
  },
  principles: {
    heading: "What honest care looks like",
    items: [
      {
        title: "Only what you need",
        body: "Recommendations are based on your health and goals. She won't recommend or prescribe treatment you don't need.",
      },
      {
        title: "Straight answers",
        body: "You'll hear the potential benefits, the risks, and what to realistically expect before you decide anything.",
      },
      {
        title: "The same provider, every visit",
        body: "You'll see her at every appointment, so your care builds on what she already knows about you.",
      },
    ],
  },
  background: {
    heading: "A decade of medical practice",
    body: "She has been practicing and prescribing as a nurse practitioner for more than 10 years. She has also worked in aesthetic care for two years, building on that medical foundation: the same attention to health history, safety, and informed decisions she brings to every visit.",
    credentialsHeading: "Credentials",
    credentials: [
      { label: "Name", value: confirm("name") },
      { label: "Credentials", value: confirm("credential letters") },
      { label: "State licensure", value: confirm("state(s) of licensure") },
      { label: "Board certification", value: confirm("board certification") },
      { label: "Education", value: confirm("education") },
    ],
  },
  origin: {
    heading: "Why CANA",
    // Her own words go here; nothing of ours is placed inside the quote.
    story: confirm("the story of why she started CANA, in her own words"),
    attribution: confirm("her name"),
  },
} as const;

// --- Contact page ----------------------------------------------------------
// All wording below was drafted for the prototype: PENDING CANA CONFIRMATION.
// Contact details themselves come from contactDetails (single source).
// No availability, response times, walk-ins, telehealth, or parking info.
export const contactPage = {
  metaDescription:
    "How to reach CANA Health & Wellness and take the first step toward a consultation.",
  eyebrow: "Contact",
  heading: "Let's start with a conversation.",
  intro:
    "Have a question about a service, or ready to talk about a consultation? Here's how to reach CANA.",
  detailsHeading: "How to reach CANA",
  // Order on this page: the confirmed, actionable detail first.
  detailOrder: ["Phone", "Email", "Address", "Hours"],
  // Screen-reader prefix for tel: links ("Call (619) 512-7491").
  callPrefix: "Call",
  booking: { label: "Booking", value: confirm("how to book a consultation") },
  notesHeading: "Before you reach out",
  // PENDING CANA APPROVAL. Makes no claim that any channel is secure or
  // HIPAA-compliant.
  privacy: {
    title: "Keep health details for your consultation",
    body: "Please don't include medical details, such as symptoms, medications, or health history, in emails or general inquiries. You can share them with your provider during your consultation.",
  },
  // PENDING CANA APPROVAL; confirm it suits CANA's location before launch.
  // Says nothing about what care CANA does or doesn't offer. 911 stays plain
  // text (no tel: link) to avoid accidental emergency calls.
  emergency: {
    title: "In an emergency",
    body: "If you are experiencing a medical emergency, call 911 or go to the nearest emergency room.",
  },
} as const;

