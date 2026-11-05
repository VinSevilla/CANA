import { howItWorks } from "../_content/site";
import { Container } from "./Container";
import { CopyText } from "./CopyText";

/**
 * An ordered list (<ol>) carries the sequence for screen readers; the big
 * numbers are visual only (aria-hidden) so steps aren't announced twice.
 *
 * Sage/10 background (#eae9de) gives the page rhythm. Contrast on it:
 * Espresso 11.21, Charcoal 10.98, Deep Sage 4.23 (below 4.5, so Deep
 * Sage here is only used at >= 24px, where WCAG requires 3:1). Keep
 * links and small Deep Sage text out of this section.
 */
export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="bg-sage/10 py-20 lg:py-32">
      <Container>
        <h2 id="how-heading" className="text-4xl lg:text-5xl">
          {howItWorks.heading}
        </h2>
        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className="border-t border-sage pt-6">
              <span
                aria-hidden="true"
                className="block text-2xl font-semibold tracking-[0.12em] text-deep-sage"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-espresso">
                {step.title}
              </h3>
              <p className="mt-3 font-medium text-espresso">{step.lead}</p>
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
