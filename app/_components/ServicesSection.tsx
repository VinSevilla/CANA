import Image from "next/image";
import Link from "next/link";
import { services, servicesSection, type Service } from "../_content/site";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { publicFileExists } from "./publicFileExists";

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col">
      {publicFileExists(service.image.src) ? (
        // The wrapper fixes the 4:3 box (no layout shift); `fill` +
        // object-cover crops any photo shape into it. `sizes` tells the
        // browser the rendered width so it downloads a right-sized file.
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sage/25">
          <Image
            src={service.image.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 340px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        // Same 4:3 box, so swapping in the photo later doesn't move anything.
        <ImagePlaceholder
          label={service.image.placeholderLabel}
          className="aspect-[4/3]"
        />
      )}
      {/* H3: card titles use Inter (serif is reserved for H1/H2). */}
      <h3 className="mt-6 text-xl font-semibold text-espresso lg:text-2xl">
        {service.name}
      </h3>
      {/* Short summary only; the full "Who it may be for" / "What to
          expect" copy lives on /services (the link below). */}
      <p className="mt-4 text-base">{service.summary}</p>
      {/* Link text names the service ("Learn about Medical Weight Loss"),
          so a screen-reader list of links isn't three identical "Learn more"s. */}
      <Link
        href={service.href}
        className="mt-6 inline-flex min-h-11 items-center font-medium text-deep-sage underline decoration-1 underline-offset-4 hover:decoration-2"
      >
        {servicesSection.linkPrefix} {service.name}
      </Link>
    </article>
  );
}

export function ServicesSection() {
  return (
    // id="services" is the hero's "Explore services" target.
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-sage/30 py-20 lg:py-32"
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
