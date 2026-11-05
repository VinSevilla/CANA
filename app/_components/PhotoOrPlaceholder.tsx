import Image from "next/image";
import type { PhotoSource } from "../_content/site";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { publicFileExists } from "./publicFileExists";

/**
 * A photo in a fixed-ratio box, or a placeholder in the same box when the
 * file isn't in /public at build time (photos aren't in git yet). The
 * check runs during prerendering, so the browser never requests a
 * missing file, and swapping the photo in later moves nothing.
 *
 * `className` must set the aspect ratio (e.g. "aspect-[4/5]") plus any
 * grid placement. `sizes` should match the rendered width so next/image
 * serves a right-sized file. `preload` is for the above-the-fold hero
 * only (Next.js 16 replaced `priority` with `preload`).
 */
export function PhotoOrPlaceholder({
  photo,
  sizes,
  className = "",
  preload = false,
  rounded = true,
}: {
  photo: PhotoSource;
  sizes: string;
  className?: string;
  preload?: boolean;
  /** false when a parent card already clips the corners. */
  rounded?: boolean;
}) {
  if (!publicFileExists(photo.src)) {
    return (
      <ImagePlaceholder
        label={photo.placeholderLabel}
        className={className}
        rounded={rounded}
      />
    );
  }
  return (
    <div
      className={`relative overflow-hidden bg-sage/25 ${rounded ? "rounded-2xl" : ""} ${className}`}
    >
      <Image
        src={photo.src}
        alt=""
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
      />
    </div>
  );
}
