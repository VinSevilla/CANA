import { Container } from "../../_components/Container";
import { aboutPage } from "../../_content/site";

/**
 * What honest care looks like (Ivory): the two remaining commitments as a
 * quiet pair under the statement, each with a fine Sage rule above it. A
 * <ul>, not an <ol>: they aren't steps. The H2 is deliberately smaller
 * than the statement above it (one bold serif moment per section).
 * Text: Espresso/Charcoal on Ivory. No links here.
 */
export function Principles() {
  const { principles } = aboutPage;
  return (
    <section aria-labelledby="principles-heading" className="pb-20 lg:pb-28">
      <Container>
        <div className="border-t border-sage/30 pt-16 lg:pt-20">
          <h2 id="principles-heading" className="text-3xl text-balance lg:text-4xl">
            {principles.heading}
          </h2>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-12 lg:gap-16">
            {principles.items.map((item) => (
              <li key={item.title} className="border-t border-sage/30 pt-6">
                <h3 className="text-lg font-semibold text-balance text-espresso lg:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[48ch]">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
