import type { DroogtermijnRij } from "@/lib/droogtijden";

/**
 * "2 weeks", of "2 to 3 weeks" — de Engelse tegenhanger van `termijnLabel`
 * uit lib/droogtijden.ts, naast `termijnLabelFr`.
 *
 * Zelfde reden als bij het Frans: de getallen komen uit de catalogus, alleen
 * de woorden zijn vertaald. Een overgetypt "2 to 3 weeks" loopt bij de
 * volgende prijspublicatie weg van wat het portaal verhuurt.
 */
export function termijnLabelEn(rij: Pick<DroogtermijnRij, "min" | "max">): string {
  const eenheid = (n: number) => (n === 1 ? "week" : "weeks");
  return rij.min === rij.max
    ? `${rij.min} ${eenheid(rij.min)}`
    : `${rij.min} to ${rij.max} ${eenheid(rij.max)}`;
}
