import Link from "next/link";
import type { CSSProperties } from "react";
import { hero } from "../_content/site";
import { Container } from "./Container";
import { PhotoOrPlaceholder } from "./PhotoOrPlaceholder";
import { publicFileExists } from "./publicFileExists";

/**
 * Full-bleed hero with a protected text zone (Ivory text on Espresso).
 *
 * Phones: a 16:9 photo band (its own focal point) that fades into solid
 * Espresso; the text sits on the solid part, so its contrast never depends
 * on the photo (12.34:1).
 *
 * Desktop (lg+): the photo fills the hero (shorter than a full screen:
 * 560-760px). A localized left-to-right Espresso gradient protects the
 * text column, not a uniform dim. The text column is capped at 34rem so it
 * always ends before ~57% of the width, where the gradient is still >= 0.77
 * opacity. Math: Espresso at >= 0.69 keeps Ivory text >= 4.5:1 even over a
 * pure-white pixel (>= 0.55 for 3:1 large text). Tests also measure the
 * brightest pixel behind each line.
 *
 * Without a photo, an Espresso field shows (same box, no layout shift) and
 * the gradient is omitted: there's nothing to protect the text from, and it
 * would otherwise cover the placeholder label.
 * No Book button here: the header's is in view (one per viewport).
 */
export function Hero() {
  const focus = {
    "--focus-m": hero.focus.mobile,
    "--focus-d": hero.focus.desktop,
  } as CSSProperties;

  return (
    <section
      aria-labelledby="hero-heading"
      className="on-dark relative bg-espresso text-ivory lg:flex lg:min-h-[clamp(560px,72svh,760px)] lg:items-center"
    >
      <div className="relative lg:absolute lg:inset-0">
        <PhotoOrPlaceholder
          photo={hero.image}
          sizes="100vw"
          preload
          tone="dark"
          rounded={false}
          style={focus}
          imgClassName="object-[var(--focus-m)] lg:object-[var(--focus-d)]"
          className="aspect-[16/9] w-full lg:aspect-auto lg:h-full"
        />
        {publicFileExists(hero.image.src) && (
          <div
            aria-hidden="true"
            data-hero-scrim
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-espresso to-espresso/0 to-55% lg:bg-linear-to-r lg:from-espresso/90 lg:via-espresso/80 lg:via-55% lg:to-espresso/0 lg:to-85%"
          />
        )}
      </div>
      <Container className="relative py-10 sm:py-12 lg:py-24">
        <div data-hero-text className="max-w-[34rem]">
          <h1
            id="hero-heading"
            className="text-5xl leading-[1.05] text-balance text-ivory sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
          >
            {hero.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed lg:text-xl">{hero.body}</p>
          <Link
            href={hero.cta.href}
            className="mt-9 inline-flex min-h-11 items-center rounded-full border border-ivory px-6 font-medium text-ivory hover:bg-ivory hover:text-espresso motion-safe:transition-colors motion-safe:duration-150"
          >
            {hero.cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
