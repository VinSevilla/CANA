import { Container } from "../../_components/Container";
import { CopyText } from "../../_components/CopyText";
import { contactDetails, contactPage, type ContactItem } from "../../_content/site";

/**
 * Contact intro (Ivory): welcome on the left, the details card on the right
 * (stacked on phones, card second). Details come from the shared
 * contactDetails, ordered so the confirmed phone number comes first.
 *
 * Safety rule: an item becomes a link only if it has an `href` AND its value
 * is confirmed text. A placeholder can never render as a link, even if an
 * href is added to it by mistake.
 */
function DetailValue({ item }: { item: ContactItem }) {
  if (item.href && typeof item.value === "string") {
    return (
      <a
        href={item.href}
        className="inline-flex min-h-11 items-center text-2xl font-medium text-deep-sage underline decoration-1 underline-offset-4 hover:decoration-2"
      >
        {/* Accessible name "Call (619) 512-7491" contains the visible
            label, satisfying WCAG 2.5.3 Label in Name. */}
        {item.href.startsWith("tel:") && (
          <span className="sr-only">{contactPage.callPrefix} </span>
        )}
        {item.value}
      </a>
    );
  }
  return <CopyText value={item.value} />;
}

export function ContactIntro() {
  const ordered = contactPage.detailOrder
    .map((label) => contactDetails.find((item) => item.label === label))
    .filter((item): item is ContactItem => Boolean(item));
  const items: ContactItem[] = [...ordered, contactPage.booking];

  return (
    <section aria-labelledby="contact-page-heading" className="py-16 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
        <div className="lg:col-span-6 xl:col-span-7">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-deep-sage">
            {contactPage.eyebrow}
          </p>
          <h1
            id="contact-page-heading"
            className="mt-5 text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-[4rem] xl:text-7xl"
          >
            {contactPage.heading}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed lg:text-xl">{contactPage.intro}</p>
        </div>
        <div className="rounded-2xl border border-sage/40 bg-ivory p-6 shadow-sm shadow-espresso/5 sm:p-8 lg:col-span-6 xl:col-span-5">
          <h2 id="contact-details-heading" className="text-3xl text-balance lg:text-4xl">
            {contactPage.detailsHeading}
          </h2>
          <dl className="mt-6 divide-y divide-sage/30">
            {items.map((item) => (
              <div key={item.label} className="py-4 first:pt-0 last:pb-0">
                <dt className="text-sm font-medium uppercase tracking-[0.12em] text-espresso">
                  {item.label}
                </dt>
                <dd className="mt-1.5">
                  <DetailValue item={item} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
