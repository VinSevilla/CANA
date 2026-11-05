import { Container } from "../../_components/Container";
import { CopyText } from "../../_components/CopyText";
import { aboutPage } from "../../_content/site";

/**
 * Experience and credentials, on the Sage/10 tint (#eae9de).
 * Contrast on the tint: Espresso 11.21, Charcoal 10.98; Deep Sage is 4.23,
 * so it appears only in the large "10+" figure (>= 24px needs 3:1).
 * No links in this section. Credentials sit on an ivory card (12.09+) as a
 * definition list; every value is a placeholder until CANA confirms it.
 */
export function Background() {
  const { background } = aboutPage;
  return (
    <section aria-labelledby="background-heading" className="bg-sage/10 py-20 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 id="background-heading" className="text-4xl text-balance lg:text-5xl">
            {background.heading}
          </h2>
          <p className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="text-6xl font-semibold text-deep-sage">{background.stat}</span>
            <span className="max-w-xs font-medium text-espresso">{background.statLabel}</span>
          </p>
          <p className="mt-8 max-w-prose text-lg leading-relaxed">{background.body}</p>
        </div>
        <div className="rounded-2xl border border-sage/40 bg-ivory p-6 shadow-sm shadow-espresso/5 lg:col-span-5 lg:self-start lg:p-8">
          <h3 className="text-xl font-semibold text-espresso lg:text-2xl">
            {background.credentialsHeading}
          </h3>
          <dl className="mt-6 space-y-5">
            {background.credentials.map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-medium uppercase tracking-[0.12em] text-espresso">
                  {item.label}
                </dt>
                <dd className="mt-1.5">
                  <CopyText value={item.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
