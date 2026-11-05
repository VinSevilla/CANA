import Link from "next/link";
import { services, servicesSection, type Service } from "../_content/site";
import { Container } from "./Container";
import { PhotoOrPlaceholder } from "./PhotoOrPlaceholder";

/**
 * Ivory card surface; the whole card is clickable through ONE link.
 *
 * "Stretched link": the "Learn about …" link's ::after covers the whole
 * card (the card is `relative`), so a click anywhere follows that link.
 * There is still exactly one interactive element per card: one Tab stop
 * and a short accessible name, with no link nested inside a link and no
 * heading inside a link. Trade-off: card text can't be mouse-selected.
 *
 * Focus: the link's own ring is hidden and the card draws it instead
 * (`has-[a:focus-visible]`), so keyboard users see the whole target.
 */
function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-sage/40 bg-ivory shadow-sm shadow-espresso/5 hover:shadow-md hover:shadow-espresso/10 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-deep-sage">
      {/* 4:3 when cards are full-width (phones), taller 4:5 from md. */}
      <PhotoOrPlaceholder
        photo={service.image}
        sizes="(min-width: 1024px) 340px, (min-width: 768px) 50vw, 100vw"
        className="aspect-[4/3] md:aspect-[4/5]"
        rounded={false}
      />
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        {/* H3: card titles use Inter (serif is reserved for H1/H2). */}
        <h3 className="text-xl font-semibold text-espresso lg:text-2xl">
          {service.name}
        </h3>
        {/* Short summary only; the full "Who it may be for" / "What to
            expect" copy lives on /services (the link below). */}
        <p className="mt-3 text-base">{service.summary}</p>
        {/* Link text names the service ("Learn about Medical Weight Loss"),
            so a screen-reader list of links isn't three identical "Learn more"s. */}
        <Link
          href={service.href}
          className="mt-auto inline-flex min-h-11 items-center pt-6 text-base font-medium text-deep-sage underline decoration-1 underline-offset-4 group-hover:decoration-2 after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          {servicesSection.linkPrefix} {service.name}
        </Link>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    // id="services" is the hero's "Explore services" target.
    // Sage/10 tint (#eae9de) so the ivory cards read as surfaces. On the
    // tint itself only Espresso (11.21) and Charcoal (10.98) text: Deep
    // Sage drops to 4.23, so links stay inside the ivory cards (4.65).
    // The cards' Deep Sage focus outline against the tint is 4.23 (3:1 needed).
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-sage/10 py-20 lg:py-32"
    >
      <Container>
        <h2 id="services-heading" className="text-4xl lg:text-5xl">
          {servicesSection.heading}
        </h2>
        <p className="mt-4 text-lg lg:text-xl">{servicesSection.intro}</p>
        <div className="mt-14 grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
