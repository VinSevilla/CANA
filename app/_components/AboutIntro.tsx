import Link from "next/link";
import { aboutIntro } from "../_content/site";
import { Container } from "./Container";
import { CopyText } from "./CopyText";

/** Continuity of care with one provider. No origin story here (About page only). */
export function AboutIntro() {
  return (
    <section
      aria-labelledby="about-heading"
      className="border-t border-sage/30 py-20 lg:py-32"
    >
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <h2
          id="about-heading"
          className="text-[2.5rem] leading-tight sm:text-5xl lg:col-span-5 lg:text-[3.5rem] xl:text-[4rem]"
        >
          {aboutIntro.heading}
        </h2>
        <div className="max-w-prose lg:col-span-7">
          <p className="text-lg leading-relaxed lg:text-xl">{aboutIntro.body}</p>
          <p className="mt-8">
            <span className="block text-sm font-medium uppercase tracking-[0.18em] text-deep-sage">
              {aboutIntro.providerLabel}
            </span>
            <span className="mt-2 block">
              <CopyText value={aboutIntro.provider} />
            </span>
          </p>
          <Link
            href={aboutIntro.link.href}
            className="mt-10 inline-flex min-h-11 items-center font-medium text-deep-sage underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            {aboutIntro.link.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
