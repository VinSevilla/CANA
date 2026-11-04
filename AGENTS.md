<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## CANA Health & Wellness: project rules

These rules apply to all code, copy, and design work in this repository.

### Content integrity
- CANA has exactly **one provider**. Never use plural language
  ("our providers", "our team", "our doctors"). Emphasize continuity
  of care with a single provider.
- Never invent credentials, qualifications, outcomes, statistics,
  reviews, testimonials, addresses, phone numbers, or hours.
  Unconfirmed facts appear as a visible `[CONFIRM WITH CANA]` placeholder.
- Trust/credential items render only when confirmed by CANA. If none
  are confirmed, the trust strip is not rendered.
- The Cana of Galilee origin story appears only on the About page.
- All site copy lives in `app/_content/site.ts`, not in components.

### Design
- Fonts: serif (Cormorant Garamond) for H1 and H2 only; Inter for
  everything else.
- Colors: Espresso #3B2A1F, Charcoal #2F2F2F, Warm Ivory #F7F3EA.
  Deep Sage #62725A for links, buttons, and small text.
  Sage #7A8F70 is decorative only (never text or controls).
- Light mode only. No scroll-triggered animations.
- Images use fixed aspect ratios to prevent layout shift.

### Navigation & calls to action
- Nav must include Home, About, Services (disclosure menu listing the
  three services), Contact, and Book Consultation.
- At most one Book Consultation button visible per viewport. The
  mobile sticky bar appears only after the header button leaves view
  and hides while the consultation panel's button is visible.

### Accessibility
- Target WCAG 2.2 AA: 4.5:1 text contrast (3:1 large text), visible
  focus, keyboard-operable menus (Esc closes, focus returns),
  focus never hidden by sticky elements, targets ≥ 24×24 px.

### Git
- Branches are named `prototype/...` or `feature/...`.
- Commit messages use `type: summary`, where type is one of
  `feat:`, `fix:`, `chore:`, `docs:`.
- Nothing merges to `main` without the project owner's review.

### Process
- Substantial changes need an approved plan; small, obvious fixes don't.
- Before release, manually review all copy for plural-provider
  language, and confirm no `[CONFIRM WITH CANA]` placeholders remain.
