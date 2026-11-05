import { Container } from "../../_components/Container";
import { CopyText } from "../../_components/CopyText";
import { aboutPage } from "../../_content/site";

/**
 * Why CANA (Ivory): the origin story in her own words, so it's a
 * <figure>/<blockquote> with a <figcaption> attribution. Until CANA sends
 * her words, both are placeholders; nothing of ours goes inside the quote.
 * Quote text is Inter (serif is reserved for H1/H2).
 */
export function OriginStory() {
  const { origin } = aboutPage;
  return (
    <section aria-labelledby="origin-heading" className="py-20 lg:py-32">
      <Container>
        <div className="max-w-3xl">
          <h2 id="origin-heading" className="text-4xl text-balance lg:text-5xl">
            {origin.heading}
          </h2>
          <figure className="mt-10 border-l-2 border-sage pl-6 lg:pl-8">
            <blockquote className="text-xl leading-relaxed text-espresso lg:text-2xl">
              <p>
                <CopyText value={origin.story} />
              </p>
            </blockquote>
            <figcaption className="mt-6">
              <CopyText value={origin.attribution} />
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
