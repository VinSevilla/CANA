import { Container } from "../../_components/Container";
import { CopyText } from "../../_components/CopyText";
import { aboutPage } from "../../_content/site";

/**
 * Her background (Ivory), read as a short narrative: the approved paragraph
 * at a comfortable measure (max 60ch), with her credentials beside it as an
 * understated list, small type and fine dividers, never a card. Every
 * credential value stays a placeholder until CANA confirms it.
 * Text: Espresso/Charcoal on Ivory (12.34 / 12.09). No links here.
 */
export function Background() {
  const { background } = aboutPage;
  return (
    <section aria-labelledby="background-heading" className="pb-20 lg:pb-28">
      <Container>
        <div className="grid gap-14 border-t border-sage/30 pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-20">
          <div className="lg:col-span-7">
            <h2 id="background-heading" className="text-4xl text-balance lg:text-5xl">
              {background.heading}
            </h2>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed">{background.body}</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="font-semibold text-espresso">{background.credentialsHeading}</h3>
            <dl className="mt-4 divide-y divide-sage/30 border-t border-sage/30">
              {background.credentials.map((item) => (
                <div key={item.label} className="py-3">
                  <dt className="text-sm font-medium text-espresso">{item.label}</dt>
                  <dd className="mt-1 text-base">
                    <CopyText value={item.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
