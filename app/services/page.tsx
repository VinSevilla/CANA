import type { Metadata } from "next";
import { StubPage } from "../_components/StubPage";
import { CONFIRM, nav, services } from "../_content/site";

export const metadata: Metadata = { title: nav.services.label };

// Each section's id matches the Services menu links (/services#slug).
export default function ServicesPage() {
  return (
    <StubPage title={nav.services.label}>
      {services.map((service) => (
        <section key={service.slug} id={service.slug} className="mt-16">
          <h2 className="text-3xl lg:text-4xl">{service.name}</h2>
          <p className="mt-4 max-w-prose">{CONFIRM}: service details</p>
        </section>
      ))}
    </StubPage>
  );
}
