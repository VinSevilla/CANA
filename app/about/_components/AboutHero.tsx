import { Container } from "../../_components/Container";
import { CopyText } from "../../_components/CopyText";
import { PhotoOrPlaceholder } from "../../_components/PhotoOrPlaceholder";
import { aboutPage, providerPortrait } from "../../_content/site";

/**
 * About page hero (Ivory): who she is, with her portrait. Text comes first
 * on phones. The portrait carries meaning here, so it gets alt text, and it
 * is the likely largest element, so it is preloaded when the photo exists.
 * Below lg the portrait is capped at 448px wide so a 4:5 image doesn't
 * fill a tablet screen.
 */
export function AboutHero() {
  const { hero } = aboutPage;
  return (
    <section aria-labelledby="about-page-heading" className="py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-deep-sage">
            {hero.eyebrow}
          </p>
          <h1
            id="about-page-heading"
            className="mt-5 text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-[4rem] xl:text-7xl"
          >
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed lg:text-xl">{hero.intro}</p>
          <p className="mt-8 border-l-2 border-sage pl-4">
            <span className="block font-medium text-espresso">
              <CopyText value={hero.name} />, <CopyText value={hero.credentials} />
            </span>
            <span className="mt-1 block">{hero.role}</span>
          </p>
        </div>
        <PhotoOrPlaceholder
          photo={providerPortrait}
          alt={hero.portraitAlt}
          sizes="(min-width: 1024px) 420px, 448px"
          preload
          className="aspect-[4/5] w-full max-w-md lg:col-span-5 lg:max-w-none"
        />
      </Container>
    </section>
  );
}
