import type { DroogtermijnRij } from "@/lib/droogtijden";

/**
 * "2 semaines", of "2 à 3 semaines" — de Franse tegenhanger van `termijnLabel`
 * uit lib/droogtijden.ts, voor de toepassingspagina's.
 *
 * Staat hier en niet in lib/droogtijden.ts omdat die module ook door de
 * gidsen en regiopagina's gedeeld wordt; zo blijft de Franse vertaling bij de
 * pagina's die ze gebruiken. De getallen komen nog altijd uit de catalogus.
 */
export function termijnLabelFr(rij: Pick<DroogtermijnRij, "min" | "max">): string {
  const eenheid = (n: number) => (n === 1 ? "semaine" : "semaines");
  return rij.min === rij.max
    ? `${rij.min} ${eenheid(rij.min)}`
    : `${rij.min} à ${rij.max} ${eenheid(rij.max)}`;
}
