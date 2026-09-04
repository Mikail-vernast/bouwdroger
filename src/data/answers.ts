/**
 * Direct answers for the key pages — the block right under the hero that
 * answers the page's core question in two to four sentences, with numbers.
 *
 * Why: answer engines (ChatGPT search, Copilot, Perplexity, Google AI Mode)
 * cite the passage that answers the question completely and carries concrete
 * figures. This site had strong copy but the prices sat three clicks deep in
 * the wizard, so an AI asked "wat kost een bouwdroger huren" had nothing to
 * quote.
 *
 * Every number comes from TARIEVEN (src/data/tarieven.ts), which
 * scripts/fetch-tarieven.mjs regenerates from the portal before each build —
 * so these sentences can never lag behind the published price list. The
 * "as of" date shown to visitors is the portal's publication date, not the
 * build date.
 */
import { TARIEVEN } from "./tarieven";

export interface AnswerFact {
  label: string;
  value: string;
  note?: string;
}

export interface PageAnswer {
  question: string;
  answer: string;
  facts: AnswerFact[];
}

const eur = (n: number) =>
  new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n);

const pct = (n: number) => `${Math.round(n * 100)}%`;

// TARIEVEN is `as const`; these are the slices this file reads, typed
// structurally so a wider generated object still fits without a cast.
interface FixedPackage { sqm: number; pricePerDay: number; pricePerTwoWeeks: number; rentalWeeks: number }
interface Product { name: string; day: number; type: string }
interface Pricing { deposit: number; online_discount: number; drying_days_water: number; fixed_weeks: number; ladder_fee: number }
const fixed: ReadonlyArray<FixedPackage> = TARIEVEN.fixed;
const products: Readonly<Record<string, Product>> = TARIEVEN.products;
const pricing: Pricing = TARIEVEN.pricing;
const extras: ReadonlyArray<{ price: number }> = TARIEVEN.extras;
const rapportPrijs = extras[0]?.price ?? 0;

const byTwoWeeks = [...fixed].sort((a, b) => a.pricePerTwoWeeks - b.pricePerTwoWeeks);
const cheapest = byTwoWeeks[0];
const dearest = byTwoWeeks[byTwoWeeks.length - 1];
const smallestSqm = Math.min(...fixed.map((f) => f.sqm));
const largestSqm = Math.max(...fixed.map((f) => f.sqm));
const cheapestDryer = Object.values(products)
  .filter((p) => /ontvochtiger/i.test(p.type))
  .sort((a, b) => a.day - b.day)[0];
const dryers = Object.values(products).filter((p) => /ontvochtiger/i.test(p.type)).length;

/** "11 augustus 2026" — when the price list was published in the portal. */
export const TARIFFS_AS_OF = new Intl.DateTimeFormat("nl-BE", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date(TARIEVEN.published_at));

export const TARIFFS_BASIS = `Prijzen uit de gepubliceerde tarievenlijst van Vernast Bouwdrogers, inclusief btw, versie ${TARIEVEN.version}.`;

const packageSentence =
  `Een compleet droogpakket voor een ruimte tot ${smallestSqm} m² kost ${eur(cheapest.pricePerTwoWeeks)} voor ${pricing.fixed_weeks} weken (${eur(cheapest.pricePerDay)} per dag); ` +
  `voor ${largestSqm} m² loopt dat op tot ${eur(dearest.pricePerTwoWeeks)}.`;

export const PAGE_ANSWERS: Record<string, PageAnswer> = {
  "/": {
    question: "Wat kost een bouwdroger huren bij Vernast?",
    answer:
      `Een losse bouwdroger huurt u vanaf ${eur(cheapestDryer.day)} per dag (${cheapestDryer.name}). ` +
      packageSentence +
      ` U betaalt een waarborg van ${eur(pricing.deposit)}, krijgt ${pct(pricing.online_discount)} korting bij online reserveren, en bij waterschade rekenen we op ${pricing.drying_days_water} droogdagen.`,
    facts: [
      { label: "Losse bouwdroger", value: `${eur(cheapestDryer.day)}/dag`, note: cheapestDryer.name },
      { label: `Pakket tot ${smallestSqm} m²`, value: eur(cheapest.pricePerTwoWeeks), note: `${pricing.fixed_weeks} weken, incl. btw` },
      { label: `Pakket tot ${largestSqm} m²`, value: eur(dearest.pricePerTwoWeeks), note: `${pricing.fixed_weeks} weken, incl. btw` },
      { label: "Online korting", value: pct(pricing.online_discount), note: `waarborg ${eur(pricing.deposit)}` },
    ],
  },
  "/prijzen": {
    question: "Wat kost een bouwdroger per dag, en wat zit erin?",
    answer:
      `Losse toestellen huurt u per dag: een bouwdroger vanaf ${eur(cheapestDryer.day)}, ${dryers} capaciteiten beschikbaar. ` +
      packageSentence +
      ` Elk pakket bevat de juiste combinatie van bouwdroger, ventilator en eventueel verwarming voor die oppervlakte; levering en installatie zitten erbij, de waarborg van ${eur(pricing.deposit)} krijgt u terug.`,
    facts: [
      { label: "Bouwdroger per dag", value: `vanaf ${eur(cheapestDryer.day)}`, note: cheapestDryer.name },
      { label: `Pakket ${smallestSqm} m²`, value: eur(cheapest.pricePerTwoWeeks), note: `${eur(cheapest.pricePerDay)}/dag` },
      { label: `Pakket ${largestSqm} m²`, value: eur(dearest.pricePerTwoWeeks), note: `${eur(dearest.pricePerDay)}/dag` },
      { label: "Online korting", value: pct(pricing.online_discount) },
    ],
  },
  "/nieuwbouw": {
    question: "Hoe lang moet chape of pleisterwerk drogen, en wat kost dat?",
    answer:
      `Vernast rekent per pakket met een vaste huurduur: ${[...new Set(fixed.map((f) => f.rentalWeeks))].sort().join(", ")} weken naargelang de dikte van chape of pleister. ` +
      packageSentence +
      ` Met een bouwdroger droogt een chape gecontroleerd in weken in plaats van maanden, en u vermijdt vochtschade aan parket, verf en isolatie.`,
    facts: [
      { label: `Pakket tot ${smallestSqm} m²`, value: eur(cheapest.pricePerTwoWeeks), note: `${pricing.fixed_weeks} weken` },
      { label: `Pakket tot ${largestSqm} m²`, value: eur(dearest.pricePerTwoWeeks), note: `${pricing.fixed_weeks} weken` },
      { label: "Huurduur", value: `${Math.min(...fixed.map((f) => f.rentalWeeks))}–${Math.max(...fixed.map((f) => f.rentalWeeks))} weken`, note: "naargelang dikte" },
      { label: "Waarborg", value: eur(pricing.deposit), note: "terugbetaald na ophaling" },
    ],
  },
  "/waterschade": {
    question: "Hoe snel is een woning droog na waterschade, en wat kost het?",
    answer:
      `Bij waterschade rekent Vernast op ${pricing.drying_days_water} droogdagen met een bouwdroger en ventilator; de pakketten voor waterschade lopen ${Math.max(...fixed.filter((f) => f.rentalWeeks).map((f) => f.rentalWeeks))} weken. ` +
      packageSentence +
      ` Een officieel vochtrapport voor uw verzekeraar kost ${eur(rapportPrijs)} extra.`,
    facts: [
      { label: "Droogdagen", value: String(pricing.drying_days_water), note: "richtwaarde waterschade" },
      { label: `Pakket tot ${smallestSqm} m²`, value: eur(cheapest.pricePerTwoWeeks), note: "incl. btw" },
      { label: "Vochtrapport", value: eur(rapportPrijs), note: "voor de verzekeraar" },
      { label: "Losse bouwdroger", value: `${eur(cheapestDryer.day)}/dag` },
    ],
  },
  "/renovatie": {
    question: "Wanneer heeft een renovatie een bouwdroger nodig, en wat kost het?",
    answer:
      `Na nieuw pleisterwerk, een nieuwe chape of natte kelderwerken zit er honderden liters water in de constructie die er zonder hulp maanden over doet. ` +
      packageSentence +
      ` Een losse bouwdroger voor één ruimte huurt u vanaf ${eur(cheapestDryer.day)} per dag.`,
    facts: [
      { label: `Pakket tot ${smallestSqm} m²`, value: eur(cheapest.pricePerTwoWeeks), note: `${pricing.fixed_weeks} weken` },
      { label: "Losse bouwdroger", value: `${eur(cheapestDryer.day)}/dag`, note: cheapestDryer.name },
      { label: "Online korting", value: pct(pricing.online_discount) },
      { label: "Waarborg", value: eur(pricing.deposit) },
    ],
  },
  "/machines": {
    question: "Welke bouwdroger heeft u nodig, en wat kost die per dag?",
    answer:
      `Vernast verhuurt ${dryers} condensontvochtigers van klein naar groot, vanaf ${eur(cheapestDryer.day)} per dag voor de ${cheapestDryer.name}; daarnaast bouwventilatoren, elektrische bouwkachels en een adsorptiedroger voor gericht drogen. ` +
      `De juiste capaciteit hangt af van het volume van de ruimte en de vochtbelasting; de calculator rekent dat voor u uit. ` +
      `Alle toestellen worden geleverd en geïnstalleerd, met een waarborg van ${eur(pricing.deposit)}.`,
    facts: [
      { label: "Condensontvochtigers", value: String(dryers), note: "capaciteiten" },
      { label: "Vanaf", value: `${eur(cheapestDryer.day)}/dag`, note: cheapestDryer.name },
      { label: "Adsorptiedroger", value: `${eur(products.revolution?.day ?? 0)}/dag`, note: "gericht drogen" },
      { label: "Waarborg", value: eur(pricing.deposit) },
    ],
  },
  "/hoe-drogen-werkt": {
    question: "Hoe droogt een bouwdroger een woning?",
    answer:
      `Een condensontvochtiger zuigt vochtige lucht aan, koelt ze af zodat het vocht condenseert, en blaast drogere en iets warmere lucht terug; een ventilator houdt die lucht in beweging langs de natte muren en vloeren. ` +
      `Zo verdampt het bouwvocht gecontroleerd in plaats van te wachten op het weer. ` +
      `Bij waterschade rekent Vernast op ${pricing.drying_days_water} droogdagen; een pakket voor een ruimte tot ${smallestSqm} m² kost ${eur(cheapest.pricePerTwoWeeks)} voor ${pricing.fixed_weeks} weken.`,
    facts: [
      { label: "Droogdagen waterschade", value: String(pricing.drying_days_water), note: "richtwaarde" },
      { label: `Pakket tot ${smallestSqm} m²`, value: eur(cheapest.pricePerTwoWeeks), note: `${pricing.fixed_weeks} weken` },
      { label: "Losse bouwdroger", value: `${eur(cheapestDryer.day)}/dag` },
    ],
  },
  "/waarom-bouwdroging": {
    question: "Waarom een bouwdroger huren in plaats van te wachten?",
    answer:
      `Natuurlijk drogen hangt af van het weer en duurt bij een chape of pleisterwerk maanden; een bouwdroger maakt er weken van en houdt de vochtigheid gelijkmatig, zodat parket, verf en isolatie geen schade oplopen. ` +
      packageSentence +
      ` Reken dat af tegen een vertraagde werf of een herstelde vloer, en de rekening is snel gemaakt.`,
    facts: [
      { label: `Pakket tot ${smallestSqm} m²`, value: eur(cheapest.pricePerTwoWeeks), note: `${pricing.fixed_weeks} weken` },
      { label: `Pakket tot ${largestSqm} m²`, value: eur(dearest.pricePerTwoWeeks), note: `${pricing.fixed_weeks} weken` },
      { label: "Losse bouwdroger", value: `${eur(cheapestDryer.day)}/dag` },
    ],
  },
  "/levering": {
    question: "Wat kost levering en installatie van een bouwdroger?",
    answer:
      `Levering en installatie zitten bij elk droogpakket inbegrepen; alleen wanneer de toestellen via een ladderlift naar boven moeten, komt er ${eur(pricing.ladder_fee)} bij. ` +
      packageSentence +
      ` Afhalen kan ook, dan valt de levering weg.`,
    facts: [
      { label: "Levering en installatie", value: "inbegrepen", note: "bij elk pakket" },
      { label: "Ladderlift", value: eur(pricing.ladder_fee), note: "alleen indien nodig" },
      { label: `Pakket tot ${smallestSqm} m²`, value: eur(cheapest.pricePerTwoWeeks), note: `${pricing.fixed_weeks} weken` },
      { label: "Waarborg", value: eur(pricing.deposit) },
    ],
  },
};

export function answerFor(path: string): PageAnswer | undefined {
  return PAGE_ANSWERS[path];
}
