import type { Metadata } from "next";
import { CopyText } from "../_components/CopyText";
import { StubPage } from "../_components/StubPage";
import { nav, services, servicesSection } from "../_content/site";

export const metadata: Metadata = { title: nav.services.label };

// Each section's id matches the Services menu links (/services#slug).
export default function ServicesPage() {
  return (
    <StubPage title={nav.services.label}>
      {services.map((service) => (
        <section key={service.slug} id={service.slug} className="mt-16 max-w-prose">
          <h2 className="text-3xl lg:text-4xl">{service.name}</h2>
          <h3 className="mt-6 font-semibold text-espresso">
            {servicesSection.whoForLabel}
          </h3>
          <p className="mt-2">
            <CopyText value={service.whoFor} />
          </p>
          <h3 className="mt-6 font-semibold text-espresso">
            {servicesSection.whatToExpectLabel}
          </h3>
          <p className="mt-2">
            <CopyText value={service.whatToExpect} />
          </p>
        </section>
      ))}
    </StubPage>
  );
}
