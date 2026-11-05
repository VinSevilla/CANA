import Link from "next/link";
import { services, servicesSection, type Service } from "../_content/site";
import { Container } from "./Container";
import { PhotoOrPlaceholder } from "./PhotoOrPlaceholder";

/**
 * One unboxed editorial feature: image, title, approved summary, link. No
 * border, surface, or shadow; whitespace separates the features.
 *
 * The whole feature is clickable through ONE link ("stretched link": the
 * "Learn about ..." link's ::after covers the feature), so there is one Tab
 * stop and a short accessible name. Keyboard focus outlines the feature.
 * Images share one crop per layout: 4:3 on phones, 4:5 from lg.
 * Hover/focus feedback (motion-safe only, <= 200ms): a 1.02 image scale
 * inside the frame and a thicker underline. Nothing moves with reduced motion.
 */
function ServiceFeature({ service }: { service: Service }) {
  return (
    <article className="group relative md:grid md:grid-cols-12 md:items-center md:gap-8 lg:block has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-8 has-[a:focus-visible]:outline-deep-sage">
      <PhotoOrPlaceholder
        photo={service.image}
        sizes="(min-width: 1024px) 340px, (min-width: 768px) 40vw, 100vw"
        rounded={false}
        imgClassName="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:scale-[1.02] motion-safe:group-has-[a:focus-visible]:scale-[1.02]"
        className="aspect-[4/3] md:col-span-5 lg:aspect-[4/5]"
      />
      <div className="mt-6 md:col-span-7 md:mt-0 lg:mt-7">
        {/* H3: Inter (serif is reserved for H1/H2). */}
        <h3 className="text-2xl font-semibold text-balance text-espresso">{service.name}</h3>
        <p className="mt-3 max-w-[36ch]">{service.summary}</p>
        <Link
          href={service.href}
          className="mt-4 inline-flex min-h-11 items-center font-medium text-deep-sage underline decoration-1 underline-offset-4 group-hover:decoration-2 motion-safe:transition-[text-decoration-thickness] motion-safe:duration-150 after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          {servicesSection.linkPrefix} {service.name}
        </Link>
      </div>
    </article>
  );
}

/**
 * Services (Ivory), right after the hero. Desktop: a split heading row
 * (title left, intro right) and three equal features with the middle one
 * set lower; equal sizes so no service reads as more important, and DOM
 * order equals reading order. Tablet: image beside text. Phones: a simple
 * stack.
 */
export function ServicesSection() {
  return (
    // id="services" is the hero's "Explore services" target.
    <section id="services" aria-labelledby="services-heading" className="py-20 lg:py-28">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-16">
          <h2 id="services-heading" className="text-4xl lg:col-span-5 lg:text-5xl">
            {servicesSection.heading}
          </h2>
          <p className="mt-4 max-w-[36ch] text-lg lg:col-span-6 lg:col-start-7 lg:mt-0 lg:text-xl">
            {servicesSection.intro}
          </p>
        </div>
        <ul role="list" className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <li key={service.slug} className={index === 1 ? "lg:mt-24" : undefined}>
              <ServiceFeature service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
