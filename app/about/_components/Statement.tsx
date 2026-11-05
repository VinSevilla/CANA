import { Container } from "../../_components/Container";
import { aboutPage } from "../../_content/site";

/**
 * The page's one honesty moment (Ivory): CANA's approved statement as a
 * large serif heading, with the approved paragraph beneath it, indented on
 * desktop. It is CANA's description of her approach, not her own words,
 * so it has no quote marks or attribution. No label, no dark band.
 * Text: Espresso/Charcoal on Ivory (12.34 / 12.09). No links here.
 */
export function Statement() {
  const { approach } = aboutPage;
  return (
    <section aria-labelledby="approach-heading" className="pb-20 lg:pb-32">
      <Container>
        <div className="border-t border-sage/30 pt-16 lg:grid lg:grid-cols-12 lg:gap-16 lg:pt-24">
          <h2
            id="approach-heading"
            className="max-w-[18ch] text-[2.75rem] leading-[1.08] text-balance sm:text-5xl lg:col-span-10 lg:text-[4rem] xl:text-[4.5rem]"
          >
            {approach.heading}
          </h2>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed lg:col-span-6 lg:col-start-5 lg:mt-0 lg:text-xl">
            {approach.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
