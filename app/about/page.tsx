import type { Metadata } from "next";
import { aboutPage, nav } from "../_content/site";
import { AboutHero } from "./_components/AboutHero";
import { ApproachBand } from "./_components/ApproachBand";
import { Background } from "./_components/Background";
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
    </>
  );
}
