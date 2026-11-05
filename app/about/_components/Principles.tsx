import { Container } from "../../_components/Container";
import { aboutPage } from "../../_content/site";

/**
 * Three commitments that make the approach concrete (Ivory). A <ul>, not
 * an <ol>: they aren't steps. Same visual language as How It Works (sage
 * rule above each item), without numbers.
 */
export function Principles() {
  const { principles } = aboutPage;
  return (
    <section aria-labelledby="principles-heading" className="py-20 lg:py-32">
      <Container>
        <h2 id="principles-heading" className="text-4xl text-balance lg:text-5xl">
          {principles.heading}
        </h2>
        <ul className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {principles.items.map((item) => (
            <li key={item.title} className="border-t border-sage pt-6">
              <h3 className="text-xl font-semibold text-espresso lg:text-2xl">{item.title}</h3>
              <p className="mt-3">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
