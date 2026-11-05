import { AboutIntro } from "./_components/AboutIntro";
import { ConsultationPanel } from "./_components/ConsultationPanel";
import { Hero } from "./_components/Hero";
import { HowItWorks } from "./_components/HowItWorks";
import { ServicesSection } from "./_components/ServicesSection";
import { TrustStrip } from "./_components/TrustStrip";

// Section order: Hero → Trust strip (renders only confirmed items) →
// Services → Provider → How It Works → Consultation panel (closing
// invitation). Header and footer live in the layout.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <AboutIntro />
      <HowItWorks />
      <ConsultationPanel />
    </>
  );
}
