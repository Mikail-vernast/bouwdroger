import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Configurator from "@/components/Configurator";
import FAQ from "@/components/FAQ";
import V3Footer from "@/components/home-v3/V3Footer";
import PageMeta from "@/components/PageMeta";
import { SEO } from "@/data/seo";

const CalculatorDetailPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta {...SEO.calculatorDetail} />
      <TopBar />
      <Navbar />
      <main>
        <Configurator />
        <FAQ />
      </main>
      <V3Footer />
    </div>
  );
};

export default CalculatorDetailPage;
