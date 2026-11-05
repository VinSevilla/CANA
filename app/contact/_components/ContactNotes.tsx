import { Container } from "../../_components/Container";
import { contactPage } from "../../_content/site";

/**
 * "Before you reach out" (Sage/10 tint, two ivory cards): the privacy note,
 * and emergency guidance kept visibly distinct from routine contact details
 * (its own card with an Espresso left border). No links in this section;
 * "911" is plain text on purpose.
 *
 * On the tint: only Espresso/Charcoal text (11.21 / 10.98). Cards are ivory
 * (12.34 / 12.09).
 */
export function ContactNotes() {
  const { privacy, emergency } = contactPage;
  return (
    <section aria-labelledby="contact-notes-heading" className="bg-sage/10 py-20 lg:py-28">
      <Container>
        <h2 id="contact-notes-heading" className="text-4xl text-balance lg:text-5xl">
          {contactPage.notesHeading}
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-sage/40 bg-ivory p-6 shadow-sm shadow-espresso/5 sm:p-8">
            <h3 className="text-xl font-semibold text-espresso lg:text-2xl">{privacy.title}</h3>
            <p className="mt-3">{privacy.body}</p>
          </div>
          <div className="rounded-2xl border border-sage/40 border-l-4 border-l-espresso bg-ivory p-6 shadow-sm shadow-espresso/5 sm:p-8">
            <h3 className="text-xl font-semibold text-espresso lg:text-2xl">{emergency.title}</h3>
            <p className="mt-3">{emergency.body}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
