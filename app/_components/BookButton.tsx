import Link from "next/link";
import { book } from "../_content/site";

/**
 * The one primary call to action. Ivory on Deep Sage = 4.65:1 (passes AA).
 *
 * `compact`: below the `sm` breakpoint the visible label shortens to "Book"
 * while the accessible name stays "Book Consultation". WCAG 2.5.3 (Label in
 * Name) is satisfied because the visible text is contained in the name.
 */
export function BookButton({
  id,
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  const [first, ...rest] = book.label.split(" ");
  return (
    <Link
      id={id}
      href={book.href}
      className="inline-flex min-h-11 items-center rounded-full bg-deep-sage px-5 text-sm font-medium text-ivory hover:bg-espresso"
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
