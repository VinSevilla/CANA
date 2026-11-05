import type { Metadata } from "next";
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
    </>
  );
}
