import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wat kost een bouwdroger huren?",
    answer: "Vanaf €9/dag. De exacte prijs hangt af van het type werk, de oppervlakte en de huurperiode. Gebruik onze calculator voor een directe berekening op maat.",
  },
  {
    question: "Hoe lang duurt bouwdroging?",
    answer: "Na pleisterwerk gemiddeld 2-4 weken, na chape 4-8 weken. Bij waterschade varieert dit. Wij adviseren op basis van uw situatie.",
  },
  {
    question: "Wat zit er inbegrepen bij de all-in service?",
    answer: "Levering, professionele installatie, gratis vochtmeting en telefonische support. Eén prijs, alles erin.",
  },
  {
    question: "Heb ik een vochtmeting nodig?",
    answer: "Ja, uw vloerlegger eist een vochtrapport voordat hij kan starten. Bij onze all-in service is deze meting gratis inbegrepen — dat bespaart u €100-200.",
  },
  {
    question: "Leveren jullie in heel België?",
    answer: "Ja, wij leveren vanuit ons magazijn in Aartselaar (bij Antwerpen) in heel België. De leveringskost is een vaste km-vergoeding, transparant en eerlijk.",
  },
  {
    question: "Kan ik de huurperiode verlengen?",
    answer: "Ja, op elk moment. Bij langere periodes profiteert u van extra korting: 10% vanaf 2 weken, 15% vanaf 4 weken, 20% vanaf 8 weken.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alles wat u moet weten over het huren van bouwdrogers bij Vernast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
