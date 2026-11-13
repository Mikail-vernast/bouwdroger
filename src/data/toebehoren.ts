/**
 * Toebehoren: wat bij een toestel hoort maar zelf geen toestel is.
 *
 * De acht toestelpagina's komen uit `TARIEVEN.products` — daar publiceert het
 * portaal naam, dagprijs, foto en voorraad van alles wat te huur staat. De
 * condenspomp staat daar niet tussen: ze is in de boeking een optie pér
 * bouwdroger en draagt haar prijs in `TARIEVEN.pricing.pump_price_per_day`,
 * precies het veld dat `PUMP` leest. Daarom staat ze hier en niet in
 * `PRODUCT_COPY`.
 *
 * Het bedrag komt dus ook hier uit `PUMP` en staat nergens als getal in de
 * tekst: er stonden ooit verzonnen bedragen op /prijzen, en een pagina die
 * "€ 2" uitschrijft terwijl het portaal € 3 publiceert is precies dat opnieuw.
 * Daarom zijn de antwoorden met een prijs erin functies van `euro(PUMP.price)`.
 *
 * Publiceert het portaal de pomp later wél als product, dan verhuist dit
 * bestand naar `TARIEVEN.products` zonder dat de pagina mee hoeft.
 */

import { PUMP } from "./verhuur.js";
import { euro } from "../lib/verhuur.js";

export interface Toebehoren {
  /** Laatste segment van de URL; zie `toebehorenPad`. */
  slug: string;
  /** De naam zoals de klant hem kent — de <h1> en het kruimelpad. */
  naam: string;
  /** Het soortwoord boven de titel. */
  type: string;
  /** Pil linksboven op de foto. */
  badge: string;
  /** Eén zin onder de titel, en tegelijk de meta-omschrijving van de fiche. */
  sum: string;
  /** Prijs per bouwdroger per dag, excl. btw. */
  dag: number;
  /** [bestand, omschrijving] — de omschrijving is de alt-tekst. */
  img: [src: string, alt: string][];
  /** De drie cijfers in de hero: [label, waarde, eenheid]. */
  key: [label: string, waarde: string, eenheid: string][];
  aboutTitle: string;
  /** Paragrafen, met <strong> voor nadruk zoals op de toestelpagina's. */
  about: string[];
  bullets: [titel: string, tekst: string][];
  /** Hoe het toestel zijn werk doet, in vier stappen. */
  stappen: [titel: string, tekst: string][];
  specs: [label: string, waarde: string][];
  faq: [vraag: string, antwoord: string][];
}

/**
 * De technische waarden komen van de fiche van het toestel dat wij verhuren
 * (externe condenspomp met opvangbak en vlotterschakelaar). Ze zijn
 * redactioneel en horen niet in een prijsveld van het portaal — net zoals bij
 * de toestelpagina's.
 */
export const CONDENSPOMP: Toebehoren = {
  slug: "condenspomp",
  naam: "Externe condenspomp",
  type: "Toebehoren · automatische waterafvoer",
  badge: "Automatische waterafvoer",
  sum: "Een bouwdroger haalt het vocht uit de lucht en vangt het op in een bak. De condenspomp zorgt dat u die bak nooit hoeft te legen: hij pompt het water continu weg naar een lavabo, douche of vloerput, tot 3,90 m hoger dan het toestel staat.",
  dag: PUMP.price,
  img: [
    [
      "/vernast/condenspomp-extern.webp",
      "Externe condenspomp met witte motorkap op een zwarte opvangbak, met aanzuigslang en voedingskabel",
    ],
    [
      "/vernast/condenspomp-extern-slang.webp",
      "Dezelfde condenspomp met de doorzichtige afvoerslang opgerold ernaast",
    ],
  ],
  key: [
    ["Afvoer", "90", "liter per uur"],
    ["Pompt tot", "3,90", "m hoog"],
    ["Verbruik", "58", "watt"],
  ],
  aboutTitle: "Wanneer heeft u een condenspomp nodig?",
  about: [
    "Elke bouwdroger die bij ons buitengaat heeft een <strong>opvangbak</strong> en een condensslang, allebei gratis. Ligt er een afvoer <strong>lager</strong> dan het toestel — een vloerput, een douchebak, de aansluiting van de toekomstige wasmachine — dan loopt het water daar vanzelf naartoe en heeft u verder niets nodig.",
    "Maar vaak ligt die afvoer er niet, of ligt hij <strong>hoger</strong> dan het toestel. Dan vult de opvangbak zich en schakelt de droger zichzelf uit zodra ze vol is. Op een werf gebeurt dat zelden op een gelegen moment: u komt maandagochtend terug op een toestel dat sinds vrijdagavond stilstaat, en de lucht die u vrijdag droog had, is dat intussen niet meer.",
    "Daarvoor is de condenspomp. Hij staat naast of onder de droger, vangt het condenswater op en duwt het via een dunne slang weg: <strong>tot 3,90 m hoger</strong> dan het toestel staat, en over een flinke afstand horizontaal. Een vlotter schakelt hem aan zodra het bakje vol is en weer uit zodra het leeg is — u hoeft er geen enkele keer naar om te kijken.",
  ],
  bullets: [
    [
      "Nooit een reservoir legen",
      "Zonder pomp leegt u de opvangbak 2 à 3 keer per dag, afhankelijk van hoe nat de ruimte is. Met pomp: geen enkele keer.",
    ],
    [
      "Draait door 's nachts en in het weekend",
      "Een volle bak zet de droger stil, en elk uur stilstand laat het vocht in de lucht weer oplopen.",
    ],
    [
      "Pompt naar boven",
      "Tot 3,90 m hoog, dus ook naar een lavabo, een gootsteen of een afvoer op de volgende verdieping.",
    ],
    [
      "Zuiver condenswater",
      "Wat eruit komt is vocht uit de lucht, niet uit de bouwmassa. Het mag gewoon in de afvoer.",
    ],
  ],
  stappen: [
    ["Opvangen", "Het condenswater uit de bouwdroger loopt via de slang in de opvangbak van de pomp."],
    ["Vlotter schakelt", "Staat die bak vol, dan zet een vlotter de pomp aan. Geen knop, geen timer."],
    [
      "Wegpompen",
      "De pomp duwt het water via een dunne slang naar de afvoer, tot 3,90 m hoger dan het toestel staat.",
    ],
    ["Vanzelf weer uit", "Is het bakje leeg, dan valt de pomp stil tot de volgende keer. Dag en nacht."],
  ],
  specs: [
    ["Type", "Externe condenspomp met opvangbak"],
    ["Werking", "automatisch, via vlotterschakelaar"],
    ["Debiet", "90 l/u bij 3 m opvoerhoogte"],
    ["Max. opvoerhoogte", "3,90 m"],
    ["Voedingsspanning", "220 V / 50–60 Hz"],
    ["Opgenomen vermogen", "58 W (55 W in bedrijf)"],
    ["Terugslagklep", "ingebouwd"],
    ["Aanzuigslang", "Ø 25 mm (buitenmaat)"],
    ["Afvoerslang", "Ø 5 mm (binnenmaat), meegeleverd"],
    ["Afmetingen (l × b × h)", "280 × 125 × 140 mm"],
    ["Gewicht", "ca. 1,9 kg"],
    ["Toepassing", "continue condensafvoer bij bouwdrogers"],
  ],
  faq: [
    [
      "Heb ik een condenspomp nodig?",
      "Alleen als er geen afvoer lager ligt dan het toestel. Is er een vloerput, een douchebak of een wasmachineaansluiting in de buurt, dan loopt het condenswater daar vanzelf naartoe via de slang die standaard meegaat. Is dat er niet, of ligt de afvoer hoger, dan is de pomp het verschil tussen een toestel dat doorloopt en een toestel dat na een halve dag stilvalt.",
    ],
    [
      "Hoeveel pompen heb ik nodig?",
      "Eén per bouwdroger. Elke droger vangt zijn eigen water op, dus elke droger heeft zijn eigen afvoer nodig. In de boeking staat de pomp daarom standaard op één per toestel; u kunt dat aantal zelf aanpassen.",
    ],
    [
      "Wat kost het?",
      `${euro(PUMP.price)} per bouwdroger per dag, bovenop de huur van het toestel. Bij een geleverd pakket sluit onze technieker de pomp ter plaatse aan; dat zit in de prijs.`,
    ],
    [
      "Waar loopt dat water naartoe?",
      "Naar wat er in de buurt is: een lavabo, een gootsteen, een douchebak, een vloerput of de aansluiting van de toekomstige wasmachine. In een appartement is dat meestal de douche, op een nieuwbouwwerf vaker een vloerput. De slang is dun en loopt makkelijk langs een plint of door een deuropening.",
    ],
    [
      "Mag dat water zomaar in de afvoer?",
      "Ja. Het is zuiver condenswater — vocht dat uit de lucht is gehaald en op de koude lamellen van het toestel is neergeslagen. Er zit niets in dat niet in een gewone afvoer mag.",
    ],
    [
      "Hoor ik hem draaien?",
      "Nauwelijks. De pomp draait niet continu maar in korte stoten van enkele seconden, telkens als het bakje vol staat. Daartussen is hij volledig stil.",
    ],
    [
      "Kan ik de pomp zelf aansluiten?",
      "Ja, en dat is ook de bedoeling als u een toestel komt afhalen. U zet de pomp onder of naast de droger, legt de condensslang in de opvangbak, steekt de stekker in een gewoon stopcontact en legt de dunne afvoerslang naar uw afvoer. Verder is er niets in te stellen.",
    ],
  ],
};

/** Het pad naar een toebehoren-fiche. Typ dit nergens over. */
export function toebehorenPad(slug: string): string {
  return `/verhuur/toebehoren/${slug}`;
}

/** De fiches die er zijn, in de volgorde waarin ze in de menu's staan. */
export const TOEBEHOREN: Toebehoren[] = [CONDENSPOMP];
