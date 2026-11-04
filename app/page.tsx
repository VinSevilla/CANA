import { Hero } from "./_components/Hero";
import { TrustStrip } from "./_components/TrustStrip";

// Section order (Concept B): Hero → Trust strip → About → Services →
// How it works → Consultation panel. Header and footer live in the layout.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
    </>
  );
}
