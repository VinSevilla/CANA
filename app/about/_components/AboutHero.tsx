import { Container } from "../../_components/Container";
import { CopyText } from "../../_components/CopyText";
import { PhotoOrPlaceholder } from "../../_components/PhotoOrPlaceholder";
import { aboutPage, providerPortrait } from "../../_content/site";

/**
 * About opening (Ivory): who she is. The H1 is the section's one serif
 * moment; her portrait is the anchor, unrounded and capped (420px on
 * desktop, 75% of the width on phones), inside a thin Sage outline frame
 * offset up and left. That frame deliberately differs from the homepage's
 * solid block (offset down and right). Credentials stay a caption under the
 * portrait: name, credential letters (placeholders), and her role line.
 *
 * The portrait carries meaning here, so it has alt text, and it is the
 * likely largest element, so it is preloaded when the photo exists.
 */
export function AboutHero() {
  const { hero } = aboutPage;
  return (
    <section aria-labelledby="about-page-heading" className="py-16 lg:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <h1
          id="about-page-heading"
          className="text-5xl leading-[1.05] text-balance sm:text-6xl lg:col-span-6 lg:text-[4rem] xl:text-7xl"
        >
          {hero.heading}
        </h1>
        <figure className="ml-auto w-3/4 lg:col-span-5 lg:col-start-8 lg:ml-0 lg:w-full lg:max-w-[420px] lg:justify-self-end">
          <div className="relative">
            {/* Decorative outline frame: same size as the portrait, offset
                24px (32px on desktop) up and left. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-6 -translate-y-6 border-2 border-sage lg:-translate-x-8 lg:-translate-y-8"
            />
            {/* Opaque backing so the frame only shows outside the portrait. */}
            <div className="relative bg-ivory">
              <PhotoOrPlaceholder
                photo={providerPortrait}
                alt={hero.portraitAlt}
                sizes="(min-width: 1024px) 420px, 75vw"
                preload
                rounded={false}
                className="aspect-[4/5]"
              />
            </div>
          </div>
          <figcaption className="mt-6">
            <span className="block font-medium text-espresso">
              <CopyText value={hero.name} />, <CopyText value={hero.credentials} />
            </span>
            <span className="mt-1 block">{hero.role}</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
