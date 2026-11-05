import Link from "next/link";
import { aboutIntro, aboutPage } from "../_content/site";
import { Container } from "./Container";
import { CopyText } from "./CopyText";
import { PhotoOrPlaceholder } from "./PhotoOrPlaceholder";

/**
 * Provider feature: the homepage's personal centerpiece (Ivory). Built like
 * a print profile, not a card: an offset 4:5 portrait with a still Sage
 * block behind it (decorative only), a caption, a large serif statement set
 * lower than the portrait, CANA's approved paragraph, and one About link.
 *
 * Text: Espresso/Charcoal on Ivory (12.34 / 12.09); link Deep Sage (4.65).
 * The portrait reuses the About page's approved alt text, since here the
 * photo itself carries meaning. No Book button (sticky bar unaffected).
 */
export function AboutIntro() {
  return (
    <section aria-labelledby="about-heading" className="pb-20 lg:pb-32">
      <Container>
        <div className="grid gap-14 border-t border-sage/30 pt-20 lg:grid-cols-12 lg:gap-16 lg:pt-28">
          <figure className="w-4/5 max-w-sm lg:col-span-5 lg:w-full lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-5 -bottom-5 left-8 top-8 bg-sage/30 sm:-right-7 sm:-bottom-7 sm:left-12 sm:top-12"
              />
              {/* Opaque ivory backing: the placeholder fill is translucent, so
                  without it the decorative block would show through. */}
              <div className="relative bg-ivory">
                <PhotoOrPlaceholder
                  photo={aboutIntro.portrait}
                  alt={aboutPage.hero.portraitAlt}
                  sizes="(min-width: 1024px) 420px, 80vw"
                  rounded={false}
                  className="aspect-[4/5]"
                />
              </div>
            </div>
            <figcaption className="mt-12">
              <span className="block font-medium text-espresso">
                <CopyText value={aboutIntro.provider} />
              </span>
              <span className="mt-1 block">{aboutIntro.role}</span>
            </figcaption>
          </figure>
          <div className="lg:col-span-6 lg:col-start-7 lg:mt-24">
            <h2
              id="about-heading"
              className="text-[2.75rem] leading-[1.1] text-balance sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
            >
              {aboutIntro.heading}
            </h2>
            <p className="mt-8 max-w-[38ch] text-lg leading-relaxed lg:text-xl">{aboutIntro.body}</p>
            <Link
              href={aboutIntro.link.href}
              className="mt-10 inline-flex min-h-11 items-center font-medium text-deep-sage underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              {aboutIntro.link.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
