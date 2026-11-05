import type { Metadata } from "next";
import { ConsultationPanel } from "../_components/ConsultationPanel";
import { aboutPage, nav } from "../_content/site";
import { AboutHero } from "./_components/AboutHero";
import { Statement } from "./_components/Statement";
import { Background } from "./_components/Background";
import { OriginStory } from "./_components/OriginStory";
import { Principles } from "./_components/Principles";

export const metadata: Metadata = {
  title: nav.about.label,
  description: aboutPage.metaDescription,
};

// A profile, read top to bottom: who she is (opening) → her background →
// what she believes (statement) → what that means for you (principles) →
// why CANA exists (origin) → the consultation panel (the only dark section).
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Background />
      <Statement />
      <Principles />
      <OriginStory />
      {/* Shared with the homepage; the page's second Book button. */}
      <ConsultationPanel />
    </>
  );
}
