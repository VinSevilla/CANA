import { howItWorks } from "../_content/site";
import { Container } from "./Container";
import { CopyText } from "./CopyText";

/**
 * An ordered list (<ol>) carries the sequence for screen readers; the big
 * numbers are visual only (aria-hidden) so steps aren't announced twice.
 */
export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="border-t border-sage/30 py-20 lg:py-32"
    >
      <Container>
        <h2 id="how-heading" className="text-4xl lg:text-5xl">
          {howItWorks.heading}
        </h2>
        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className="border-t border-sage pt-6">
              <span
                aria-hidden="true"
                className="block text-sm font-semibold tracking-[0.18em] text-deep-sage"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-espresso">
                {step.title}
              </h3>
              <p className="mt-3">
                <CopyText value={step.body} />
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
