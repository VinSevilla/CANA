import type { Metadata } from "next";
import { StubPage } from "../_components/StubPage";
import { nav } from "../_content/site";

export const metadata: Metadata = { title: nav.about.label };

export default function AboutPage() {
  return <StubPage title={nav.about.label} />;
}
