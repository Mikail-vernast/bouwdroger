/**
 * Alt-teksten voor beelden waarvan de code alleen het pad kent.
 *
 * De galerijen van pakketten en toestellen komen uit het Vernast-portaal
 * (`src/data/tarieven.ts`, gegenereerd), zonder omschrijving erbij. De
 * bestandsnamen daar zijn wél stabiel — `lineup-dryers`, `teddh-30`,
 * `ttv-4500` — dus die vertalen we hier naar een beschrijving. Herkennen we
 * het bestand niet, dan wint de context van de plek waar het beeld staat;
 * die geeft de aanroeper mee en is nooit een lege string.
 */
const BEKENDE_BEELDEN: [RegExp, string][] = [
  [/lineup-dryers/, "De drie Vernast eco-bouwdrogers naast elkaar: Boost, Performance en Ultimate"],
  [/teddh-30|kachel-30/, "Vernast elektrische bouwkachel Heatpower 30, 30 kW met ingebouwde thermostaat"],
  [/teddh-20|kachel-20/, "Vernast elektrische bouwkachel Heatboost 20, 20 kW met thermostaat"],
  [/ttv-4500|vent-axiaal/, "Vernast Turbo Highflow, bouwventilator met 4.500 m³/u luchtverzet"],
  [/dim-radiaal-ventilator/, "Afmetingen van de Vernast radiaalventilator: 54,5 × 51,5 × 49 cm, 20 kg"],
  [/vent-radiaal|radiaal/, "Vernast Turbo, 2.250 m³/u, blaast gericht over vloeren en chape"],
  [/ttk-170|eco-boost/, "Vernast Boost (TTK 170 S), condensontvochtiger van 50 liter per dag"],
  [/ttk-350|eco-performance/, "Vernast Performance (TTK 350 S), condensontvochtiger van 70 liter per dag"],
  [/ttk-650|eco-ultimate/, "Vernast Ultimate (TTK 650 S), condensontvochtiger van 110 liter per dag"],
  [/eco-revolution|revolution/, "Vernast Revolution, rode adsorptiedroger met slangaansluitingen voor gericht drogen"],
];

/**
 * De beschrijving van een beeld op basis van zijn pad, met `context` als
 * terugval voor beelden die we niet herkennen.
 */
export function altVoorBeeld(src: string, context: string): string {
  const bestand = src.split("/").pop()?.toLowerCase() ?? "";
  const hit = BEKENDE_BEELDEN.find(([patroon]) => patroon.test(bestand));
  return hit ? hit[1] : context;
}
