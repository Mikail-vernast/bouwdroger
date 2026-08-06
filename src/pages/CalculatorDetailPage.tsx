import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Configurator from "@/components/Configurator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
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
      <Footer />
    </div>
  );
};

export default CalculatorDetailPage;
