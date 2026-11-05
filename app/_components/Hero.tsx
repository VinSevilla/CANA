import Link from "next/link";
import { hero } from "../_content/site";
import { Container } from "./Container";
import { PhotoOrPlaceholder } from "./PhotoOrPlaceholder";

/**
 * Split hero. No Book button here: the header's Book button is already in
 * this viewport (one Book button per viewport), so the hero's action is a
 * secondary "Explore services" link.
 *
 * On phones the text comes first (it's the page's main message and loads
 * instantly); the image follows.
 *
 * Image weight: at xl (1280px+) the hero alone widens to 80rem and splits
 * 6/6, so the image grows (~576x720) without squeezing the H1 onto a 4th
 * line. Between lg and xl a 6/6 split forces 4 lines, so it stays 7/5.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="py-16 lg:py-12">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:max-w-[80rem]">
        <div className="lg:col-span-7 xl:col-span-6">
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
        <PhotoOrPlaceholder
          photo={hero.image}
          sizes="(min-width: 1280px) 576px, (min-width: 1024px) 420px, 100vw"
          preload
          className="aspect-[4/3] lg:col-span-5 lg:aspect-[4/5] xl:col-span-6"
        />
      </Container>
    </section>
  );
}
