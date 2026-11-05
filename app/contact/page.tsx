import type { Metadata } from "next";
import { StubPage } from "../_components/StubPage";
import { nav } from "../_content/site";

export const metadata: Metadata = { title: nav.contact.label };

export default function ContactPage() {
  return <StubPage title={nav.contact.label} />;
}
