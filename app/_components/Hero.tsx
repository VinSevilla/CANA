import Link from "next/link";
import { hero } from "../_content/site";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";

/**
 * Split hero. No Book button here: the header's Book button is already in
 * this viewport (one Book button per viewport), so the hero's action is a
 * secondary "Explore services" link.
 *
 * On phones the text comes first (it's the page's main message and loads
 * instantly); the image follows.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="py-16 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {/* Wraps between items, never inside one. Spacing separates the
              items instead of "·" characters, which can end up dangling
              at a line break. role="list" restores list semantics that
              Safari drops when list bullets are removed with CSS. */}
          <ul
            role="list"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium uppercase tracking-[0.18em] text-deep-sage"
          >
            {hero.eyebrowItems.map((item) => (
              <li key={item} className="whitespace-nowrap">
                {item}
              </li>
            ))}
          </ul>
          <h1
            id="hero-heading"
            className="mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed lg:text-xl">
            {hero.body}
          </p>
          <Link
            href={hero.cta.href}
            className="mt-10 inline-flex min-h-11 items-center rounded-full border border-deep-sage px-6 font-medium text-deep-sage hover:bg-deep-sage hover:text-ivory"
          >
            {hero.cta.label}
          </Link>
        </div>
        <ImagePlaceholder
          label={hero.imageLabel}
          className="aspect-[4/3] lg:col-span-5 lg:aspect-[4/5]"
        />
      </Container>
    </section>
  );
}
