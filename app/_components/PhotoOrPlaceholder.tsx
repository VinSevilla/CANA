import Image from "next/image";
import type { CSSProperties } from "react";
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
 *
 * `alt` defaults to "" (decorative): most photos sit next to a heading
 * that already says what they show. Pass real alt text when the photo
 * itself carries meaning, e.g. the provider's portrait on the About page.
 */
export function PhotoOrPlaceholder({
  photo,
  sizes,
  className = "",
  preload = false,
  rounded = true,
  alt = "",
  tone = "light",
  imgClassName = "",
  style,
}: {
  photo: PhotoSource;
  sizes: string;
  className?: string;
  preload?: boolean;
  /** false when a parent card already clips the corners. */
  rounded?: boolean;
  alt?: string;
  /** "dark" for Espresso surroundings (hero): dark placeholder and backdrop. */
  tone?: "light" | "dark";
  /** Extra classes on the <img>, e.g. per-breakpoint object-position. */
  imgClassName?: string;
  /** Wrapper style, e.g. CSS variables consumed by imgClassName. */
  style?: CSSProperties;
}) {
  if (!publicFileExists(photo.src)) {
    return (
      <ImagePlaceholder
        label={photo.placeholderLabel}
        className={className}
        rounded={rounded}
        tone={tone}
      />
    );
  }
  return (
    <div
      className={`relative overflow-hidden ${tone === "dark" ? "bg-espresso" : "bg-sage/25"} ${rounded ? "rounded-2xl" : ""} ${className}`}
      style={style}
    >
      <Image
        src={photo.src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover ${imgClassName}`}
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
    </div>
  );
}
