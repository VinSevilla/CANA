import type { Metadata } from "next";
import { ConsultationPanel } from "../_components/ConsultationPanel";
import { contactPage, nav } from "../_content/site";
import { ContactIntro } from "./_components/ContactIntro";
import { ContactNotes } from "./_components/ContactNotes";

export const metadata: Metadata = {
  title: nav.contact.label,
  description: contactPage.metaDescription,
};

// Section order: Intro + details (Ivory) → Before you reach out (Sage tint)
// → Consultation (Espresso).
export default function ContactPage() {
  return (
    <>
      <ContactIntro />
      <ContactNotes />
      {/* Shared with the homepage and About page (copy PENDING): the page's
          next step, and its second Book button. On desktop the header isn't
          sticky, so without it there'd be no Book button near the end. */}
      <ConsultationPanel />
    </>
  );
}
