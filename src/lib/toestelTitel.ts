/**
 * De paginatitel van een toestelpagina.
 *
 * Tot eind september 2026 was dat "TTK 350 S huren — vochtafvoer 70 L/dag". Niemand
 * zoekt op een typenummer: Search Console toonde vertoningen op "bouwdroger huren",
 * "bouwdroger 80 liter" en "bouwkachel te huur", en de toestelpagina's droegen dat
 * soortwoord nergens in hun titel. Concurrenten die wél scoren zetten bovendien de
 * dagprijs in de titel — dat is de vraag die de zoeker heeft.
 *
 * Het soortwoord komt uit `type` (door het portaal gepubliceerd). Staat het al in de
 * korte naam ("Adsorptiedroger Revolution"), dan niet nog eens.
 */
const SOORT: Array<[prefix: string, soort: string]> = [
  ["Condensontvochtiger", "Bouwdroger"],
  ["Adsorptiedroger", "Adsorptiedroger"],
  // "Bouwventilator" duwt "Radiaal 2250 … € 5/dag" over de 60 tekens.
  ["Bouwventilator", "Ventilator"],
  ["Elektrische bouwkachel", "Bouwkachel"],
];

export interface ToestelTitelInput {
  short: string;
  type: string;
  day: number;
  /** Eerste fiche-regel: [label, waarde, eenheid]. */
  spec: [string, string, string] | undefined;
}

function dagprijs(day: number): string {
  return (
    "€ " +
    day.toLocaleString("nl-BE", {
      minimumFractionDigits: Number.isInteger(day) ? 0 : 2,
      maximumFractionDigits: 2,
    })
  );
}

export function toestelTitel({ short, type, day, spec }: ToestelTitelInput): string {
  const soort = SOORT.find(([prefix]) => type.startsWith(prefix))?.[1];
  const naam =
    soort && !short.toLowerCase().includes(soort.toLowerCase()) ? `${soort} ${short}` : short;

  /*
    Begint de naam zelf met het soortwoord ("Adsorptiedroger Revolution"), dan
    komt "huren" er meteen achter: "Adsorptiedroger huren — Revolution". Zo staat
    de zoekopdracht letterlijk vooraan. "Adsorptiedroger Revolution huren" stond
    in november 2026 op plaats 17 voor "adsorptiedroger huren", onze zoekterm met
    de meeste vertoningen. Bouwdrogers krijgen dit bewust niet: acht pagina's die
    met "Bouwdroger huren" beginnen zouden met de homepage concurreren.
  */
  if (soort === "Adsorptiedroger" && naam.toLowerCase().startsWith(soort.toLowerCase() + " ")) {
    const rest = naam.slice(soort.length + 1);
    const prijs = day > 0 ? `, ${dagprijs(day)}/dag` : "";
    return `${soort} huren — ${rest}${prijs} | Vernast`;
  }

  const delen: string[] = [];
  const [, waarde = "", eenheid = ""] = spec ?? [];
  // "Radiaal 2250" draagt zijn luchtverzet al in de naam; "2 250 m³/u" erachter
  // herhaalt het en duwt de titel over de 60 tekens.
  const kaal = (t: string) => t.replace(/\s/g, "");
  // Een kort getal als de "30" in "TEddH 30 T" zegt een zoeker niets; "30 kW" wel.
  const zitInNaam = kaal(waarde).length >= 4 && kaal(short).includes(kaal(waarde));
  if (eenheid && !zitInNaam) delen.push(`${waarde} ${eenheid}`);
  if (day > 0) delen.push(`${dagprijs(day)}/dag`);

  const bouw = (stukken: string[]) =>
    `${naam} huren${stukken.length ? ` — ${stukken.join(", ")}` : ""} | Vernast`;

  /*
    Google kapt een titel af rond 60 tekens, dus die grens is hard. Tot 11-2026
    paste alles omdat de toestellen hun typenummer droegen ("TTK 350 S"); met
    de namen uit het portaal ("Performance") liep diezelfde titel op 63 uit
    en viel ", € 12/dag" buiten beeld -- juist het stuk waarvoor het in de titel
    staat.

    Daarom kort hij zichzelf in: past hij niet, dan valt eerst de specificatie
    weg en blijft de dagprijs staan. De prijs is de vraag van de zoeker; de
    vochtafvoer staat even verderop op de pagina zelf. Past zelfs dat niet, dan
    blijft de kale naam over -- dan is er een naam gepubliceerd die hier
    sowieso niet in past, en is afkappen erger dan weglaten.
  */
  const MAX = 60;
  for (const poging of [delen, delen.slice(-1), []]) {
    const titel = bouw(poging);
    if (titel.length <= MAX) return titel;
  }
  return bouw([]);
}
