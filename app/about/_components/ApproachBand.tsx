import { Container } from "../../_components/Container";
import { aboutPage } from "../../_content/site";

/**
 * The page's central idea, on Espresso. Written as CANA's description of
 * her approach, not as a quote from her. Ivory text only (12.34:1; the
 * Ivory/80 label ~8.4:1). No links, so no focus rings here.
 */
export function ApproachBand() {
  const { approach } = aboutPage;
  return (
    <section
      aria-labelledby="approach-heading"
      className="on-dark bg-espresso py-20 text-ivory lg:py-32"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-ivory/80">
            {approach.label}
          </p>
          <h2
            id="approach-heading"
            className="mt-6 text-[2.5rem] leading-tight text-balance text-ivory sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
          >
            {approach.heading}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed lg:text-xl">{approach.body}</p>
        </div>
      </Container>
    </section>
  );
}
