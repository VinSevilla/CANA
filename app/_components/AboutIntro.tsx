import Link from "next/link";
import { aboutIntro } from "../_content/site";
import { Container } from "./Container";
import { CopyText } from "./CopyText";
import { PhotoOrPlaceholder } from "./PhotoOrPlaceholder";

/**
 * Provider feature band: continuity of care with one provider, on
 * Espresso. No origin story here (About page only).
 *
 * On Espresso only Ivory text works (12.34:1; Ivory/80 label 8.47:1).
 * Deep Sage (2.65) and Charcoal (1.02) must not be used here. `on-dark`
 * switches the focus ring to ivory. There is no Book button in this band,
 * so the sticky Book bar logic is unaffected.
 */
export function AboutIntro() {
  return (
    <section
      aria-labelledby="about-heading"
      className="on-dark bg-espresso py-20 text-ivory lg:py-28"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2
            id="about-heading"
            className="text-[2.5rem] leading-tight text-ivory sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
          >
            {aboutIntro.heading}
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed lg:text-xl">
            {aboutIntro.body}
          </p>
          <p className="mt-8">
            <span className="block text-sm font-medium uppercase tracking-[0.18em] text-ivory/80">
              {aboutIntro.providerLabel}
            </span>
            <span className="mt-2 block">
              <CopyText value={aboutIntro.provider} />
            </span>
          </p>
          <Link
            href={aboutIntro.link.href}
            className="mt-10 inline-flex min-h-11 items-center font-medium text-ivory underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            {aboutIntro.link.label}
          </Link>
        </div>
        <PhotoOrPlaceholder
          photo={aboutIntro.portrait}
          sizes="(min-width: 1024px) 420px, 100vw"
          className="aspect-[4/5] lg:col-span-5"
        />
      </Container>
    </section>
  );
}
