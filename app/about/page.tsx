import type { Metadata } from "next";
import { ConsultationPanel } from "../_components/ConsultationPanel";
import { aboutPage, nav } from "../_content/site";
import { AboutHero } from "./_components/AboutHero";
import { ApproachBand } from "./_components/ApproachBand";
import { Background } from "./_components/Background";
import { OriginStory } from "./_components/OriginStory";
import { Principles } from "./_components/Principles";

export const metadata: Metadata = {
  title: nav.about.label,
  description: aboutPage.metaDescription,
};

// Section order: Hero (Ivory) → Approach (Espresso) → Principles (Ivory) →
// Background (Sage tint) → Why CANA (Ivory) → Consultation (Espresso).
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ApproachBand />
      <Principles />
      <Background />
      <OriginStory />
      {/* Shared with the homepage; the page's second Book button. */}
      <ConsultationPanel />
    </>
  );
}
