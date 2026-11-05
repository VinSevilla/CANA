import Link from "next/link";
import { book } from "../_content/site";

/**
 * The one primary call to action. Ivory on Deep Sage = 4.65:1 (passes AA).
 *
 * `compact`: below the `sm` breakpoint the visible label shortens to "Book"
 * while the accessible name stays "Book Consultation". WCAG 2.5.3 (Label in
 * Name) is satisfied because the visible text is contained in the name.
 *
 * `tone="onDark"`: ivory button with Espresso text (12.3:1) for dark
 * panels, where a Deep Sage button would blend in. Hover underlines
 * rather than changing color, so contrast never drops.
 */
const tones = {
  default:
    "min-h-11 px-5 text-sm bg-deep-sage text-ivory hover:bg-espresso",
  onDark:
    "min-h-12 px-7 text-base bg-ivory text-espresso decoration-2 underline-offset-4 hover:underline",
} as const;

export function BookButton({
  id,
  compact = false,
  tone = "default",
}: {
  id?: string;
  compact?: boolean;
  tone?: keyof typeof tones;
}) {
  const [first, ...rest] = book.label.split(" ");
  return (
    <Link
      id={id}
      href={book.href}
      className={`inline-flex items-center rounded-full font-medium ${tones[tone]}`}
    >
      {/* One inline wrapper: inside a flex container, the space before
          "Consultation" would otherwise be trimmed ("BookConsultation"). */}
      <span>
        {first}
        <span className={compact ? "max-sm:sr-only" : undefined}>
          {" "}
          {rest.join(" ")}
        </span>
      </span>
    </Link>
  );
}
