import { consultation } from "../_content/site";
import { BookButton } from "./BookButton";
import { Container } from "./Container";
import { CopyText } from "./CopyText";

/**
 * The page's closing call to action, on Espresso. `on-dark` switches the
 * focus ring to ivory (Deep Sage on Espresso is only 2.65:1; focus
 * indicators need 3:1). `id="panel-book"` lets the future mobile sticky
 * bar hide while this button is on screen.
 */
export function ConsultationPanel() {
  return (
    <section
      aria-labelledby="consultation-heading"
      className="on-dark bg-espresso py-20 text-ivory lg:py-28"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2
            id="consultation-heading"
            className="text-4xl text-ivory lg:text-5xl"
          >
            {consultation.heading}
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed">
            {consultation.body}
          </p>
          <p className="mt-4">
            <CopyText value={consultation.details} />
          </p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <BookButton id="panel-book" tone="onDark" />
        </div>
      </Container>
    </section>
  );
}
