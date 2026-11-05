import { Container } from "../../_components/Container";
import { CopyText } from "../../_components/CopyText";
import { aboutPage } from "../../_content/site";

/**
 * Why CANA (Ivory): the origin story in her own words, so it's a
 * <figure>/<blockquote> with a <figcaption> attribution. Until CANA sends
 * her words, both are placeholders; nothing of ours goes inside the quote.
 * Quote text is Inter (serif is reserved for H1/H2). A fine line above and
 * a moderate H2 match the rest of the profile.
 */
export function OriginStory() {
  const { origin } = aboutPage;
  return (
    <section aria-labelledby="origin-heading" className="pb-20 lg:pb-28">
      <Container>
        <div className="border-t border-sage/30 pt-16 lg:pt-20">
          <div className="max-w-3xl">
            <h2 id="origin-heading" className="text-3xl text-balance lg:text-4xl">
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
        </div>
      </Container>
    </section>
  );
}
