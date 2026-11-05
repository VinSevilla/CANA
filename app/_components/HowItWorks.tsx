import { howItWorks } from "../_content/site";
import { Container } from "./Container";
import { CopyText } from "./CopyText";

/**
 * Compact How It Works (Ivory): a numbered typographic list, not a card
 * grid. Desktop: heading left (4 cols), list right (8 cols), the heading
 * aligned with the first step; each row is the number beside one text
 * column (title, lead, body), separated by fine Sage rules. Phones: stacked. All copy is CANA-approved.
 *
 * The <ol> carries the sequence; the "01" numbers are visual only
 * (aria-hidden) so steps aren't announced twice. Numbers are 14px Deep Sage
 * on Ivory (4.65:1). No links here.
 */
export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="pb-20 lg:pb-28">
      <Container>
        <div className="border-t border-sage/30 pt-16 lg:grid lg:grid-cols-12 lg:gap-16 lg:pt-20">
          <h2 id="how-heading" className="text-3xl text-balance lg:col-span-4 lg:text-4xl">
            {howItWorks.heading}
          </h2>
          <ol className="mt-10 divide-y divide-sage/30 lg:col-span-8 lg:mt-0">
            {howItWorks.steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-x-6 gap-y-2 py-7 first:pt-0 last:pb-0 sm:grid-cols-[2.5rem_minmax(0,1fr)] lg:gap-x-8"
              >
                <span
                  aria-hidden="true"
                  className="pt-1 text-sm font-semibold tracking-[0.12em] text-deep-sage"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* One text column: title, lead, then body. */}
                <div className="max-w-[60ch]">
                  <h3 className="text-lg font-semibold text-balance text-espresso lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-medium text-espresso">{step.lead}</p>
                  <p className="mt-3">
                    <CopyText value={step.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
