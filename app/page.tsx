import { AboutIntro } from "./_components/AboutIntro";
import { ConsultationPanel } from "./_components/ConsultationPanel";
import { Hero } from "./_components/Hero";
import { HowItWorks } from "./_components/HowItWorks";
import { ServicesSection } from "./_components/ServicesSection";
import { TrustStrip } from "./_components/TrustStrip";

// Section order (Concept B): Hero → Trust strip → About → Services →
// How it works → Consultation panel. Header and footer live in the layout.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutIntro />
      <ServicesSection />
      <HowItWorks />
      <ConsultationPanel />
    </>
  );
}
