import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Hero from "@/components/home-v3/V3Hero";
import V3StatRule from "@/components/home-v3/V3StatRule";
import V3Products from "@/components/home-v3/V3Products";
import V3Difference from "@/components/home-v3/V3Difference";
import V3Cases from "@/components/home-v3/V3Cases";
import V3EcoLineup from "@/components/home-v3/V3EcoLineup";
import V3Consequences from "@/components/home-v3/V3Consequences";
import V3Intro from "@/components/home-v3/V3Intro";
import V3Technique from "@/components/home-v3/V3Technique";
import V3Pricing from "@/components/home-v3/V3Pricing";
import V3Delivery from "@/components/home-v3/V3Delivery";
import V3Configurator from "@/components/home-v3/V3Configurator";
import V3About from "@/components/home-v3/V3About";
import V3Faq from "@/components/home-v3/V3Faq";
import V3Cta from "@/components/home-v3/V3Cta";
import V3Footer from "@/components/home-v3/V3Footer";
import "@/styles/home-v3.css";

/**
 * Home — "Home V3", imported from the Vernast Claude Design project.
 * Section order follows the design file exactly.
 */
const Index = () => {
  return (
    <div className="v3">
      <PageMeta
        title="Vernast Bouwdrogers — Bouwdroging zonder gokwerk"
        description="Bereken exact welke bouwdroger u nodig heeft en boek meteen. Levering, installatie en ophaling inbegrepen — binnen 24 uur in heel Vlaanderen."
      />
      <V3Header />
      <main>
        <V3Hero />
        <V3StatRule />
        <V3Products />
        <V3Difference />
        <V3Cases />
        <V3EcoLineup />
        <V3Consequences />
        <V3Intro />
        <V3Technique />
        <V3Pricing />
        <V3Delivery />
        <V3Configurator />
        <V3About />
        <V3Faq />
        <V3Cta />
      </main>
      <V3Footer />
    </div>
  );
};

export default Index;
