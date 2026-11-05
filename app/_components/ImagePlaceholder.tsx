/**
 * Neutral stand-in for photography that doesn't exist yet.
 *
 * `className` must include an aspect ratio (e.g. "aspect-[4/3]"). Fixing
 * the ratio reserves the space up front, so swapping in the real photo
 * later causes no layout shift (CLS).
 *
 * Tailwind only generates classes it can see written out in full, which
 * is why callers pass complete class names rather than a ratio number.
 *
 * PROTOTYPE ONLY: the visible "Photo: …" label (12px) exists for review.
 * Remove it before launch (see AGENTS.md, Process).
 */
export function ImagePlaceholder({
  label,
  className = "",
  rounded = true,
}: {
  label: string;
  className?: string;
  /** false when a parent card already clips the corners. */
  rounded?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`relative overflow-hidden bg-sage/25 ${rounded ? "rounded-2xl" : ""} ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute bottom-3 left-3 rounded-md bg-ivory/90 px-2.5 py-1 text-xs text-charcoal"
      >
        Photo: {label}
      </span>
    </div>
  );
}
