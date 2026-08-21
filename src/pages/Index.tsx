import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Hero from "@/components/home-v3/V3Hero";
import V3StatRule from "@/components/home-v3/V3StatRule";
import V3Products from "@/components/home-v3/V3Products";
import V3HowItWorks from "@/components/home-v3/V3HowItWorks";
import V3Cases from "@/components/home-v3/V3Cases";
import V3Market from "@/components/home-v3/V3Market";
import V3Intro from "@/components/home-v3/V3Intro";
import V3EcoLineup from "@/components/home-v3/V3EcoLineup";
import V3Difference from "@/components/home-v3/V3Difference";
import V3Included from "@/components/home-v3/V3Included";
import V3Ozon from "@/components/home-v3/V3Ozon";
import V3Regio from "@/components/home-v3/V3Regio";
import V3Pay from "@/components/home-v3/V3Pay";
import V3Pickup from "@/components/home-v3/V3Pickup";
import V3Faq, { QUESTIONS } from "@/components/home-v3/V3Faq";
import V3Cta from "@/components/home-v3/V3Cta";
import V3Footer from "@/components/home-v3/V3Footer";
import "@/styles/home-v3.css";
import "@/styles/home-v3-fixes.css";
import { SEO } from "@/data/seo";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/schema";

/**
 * Home — "Home V3", imported from the Vernast Claude Design handoff.
 * Section order follows the design file exactly.
 */
const Index = () => {
  return (
    <div className="v3">
      <PageMeta
        {...SEO.home}
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          faqSchema(QUESTIONS.map((item) => ({ question: item.q, answer: item.a }))),
        ]}
      />
      <V3Header />
      <main>
        <V3Hero />
        <V3StatRule />
        <V3Products />
        <V3HowItWorks />
        <V3Cases />
        <V3Market />
        <V3Intro />
        <V3EcoLineup />
        <V3Difference />
        <V3Included />
        <V3Ozon />
        <V3Regio />
        <V3Pay />
        <V3Pickup />
        <V3Cta />
        <V3Faq />
      </main>
      <V3Footer />
    </div>
  );
};

export default Index;
