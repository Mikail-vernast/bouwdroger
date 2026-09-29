/**
 * Droogtijden per materiaaldikte, zoals /nieuwbouw ze in een tabel toont.
 *
 * De huurtermijn met bouwdroger komt uit de catalogus: de shop leidt ze af uit
 * de dikte (chape 5/6/7 cm, pleisterwerk 1/2/3 cm) en zet ze als `rentalWeeks`
 * op elk vast pakket. Een tabel met overgetypte weken zou weglopen zodra het
 * portaal een termijn aanpast — dan beloofde /nieuwbouw drie weken voor een
 * pakket dat er vier aanrekent. Daarom wordt ze hier uit dezelfde pakketten
 * gelezen als waarmee de calculator en de checkout rekenen.
 */
import { getAllPackages, packageThicknesses, type WorkType } from "../data/packages.js";
import { packageWeeks } from "./vastPakket.js";

export interface DroogtermijnRij {
  /** Dikte in cm. */
  dikte: number;
  /** Kortste en langste huurtermijn over alle oppervlaktes, in weken. */
  min: number;
  max: number;
}

/**
 * De huurtermijn per dikte voor een werksoort, oplopend naar dikte.
 *
 * Normaal is die termijn voor elke oppervlakte gelijk; loopt ze toch uiteen,
 * dan geeft de rij het bereik in plaats van één oppervlakte stil voor te trekken.
 */
export function droogtermijnen(soort: WorkType): DroogtermijnRij[] {
  const pakketten = getAllPackages();
  return packageThicknesses(soort).map((dikte) => {
    const weken = pakketten
      .filter((p) => p.workType === soort && p.thicknessCm === dikte)
      .map(packageWeeks);
    return { dikte, min: Math.min(...weken), max: Math.max(...weken) };
  });
}

/** "2 weken", of "2 tot 3 weken" als de termijn per oppervlakte verschilt. */
export function termijnLabel(rij: Pick<DroogtermijnRij, "min" | "max">): string {
  const eenheid = (n: number) => (n === 1 ? "week" : "weken");
  return rij.min === rij.max
    ? `${rij.min} ${eenheid(rij.min)}`
    : `${rij.min} tot ${rij.max} ${eenheid(rij.max)}`;
}

/** De huurtermijn van één waterschade- of combipakket, dat geen dikte kent. */
export function termijnZonderDikte(soort: WorkType): DroogtermijnRij | null {
  const weken = getAllPackages()
    .filter((p) => p.workType === soort)
    .map(packageWeeks);
  if (weken.length === 0) return null;
  return { dikte: 0, min: Math.min(...weken), max: Math.max(...weken) };
}

/**
 * De gangbare vuistregel voor natuurlijk drogen van zandcementchape: ongeveer
 * een week per centimeter voor de eerste vier centimeter, daarna twee weken per
 * extra centimeter — bij een goed verluchte ruimte rond 20 °C.
 *
 * Dit is een richtwaarde uit de bouwpraktijk, geen belofte en geen meting: ze
 * staat op de pagina om het verschil met actief drogen te tonen, met de
 * uitdrukkelijke vermelding dat alleen een restvochtmeting beslist.
 */
export function natuurlijkeChapeWeken(dikteCm: number): number {
  if (dikteCm <= 4) return dikteCm;
  return 4 + (dikteCm - 4) * 2;
}
