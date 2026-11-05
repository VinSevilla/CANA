import { trustItems } from "../_content/site";
import { Container } from "./Container";

/**
 * Credentials / trust signals. Renders ONLY confirmed items, and nothing
 * at all while none are confirmed: an empty strip, or placeholder
 * credentials, would undermine trust rather than build it.
 */
export function TrustStrip() {
  if (trustItems.length === 0) return null;

  return (
    <section aria-label="Credentials" className="border-y border-sage/30">
      <Container>
        <ul className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <li key={item.label} className="flex items-center gap-3 font-medium text-espresso">
              <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-sage" />
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
