import type { ReactNode } from "react";

/**
 * Wit en rood wisselen strikt af, en die kleur komt uit de volgorde — niet uit
 * elke sectie apart.
 *
 * Met een vaste klasse per sectie klopte het ritme alleen zolang niemand iets
 * verplaatste of oversloeg, en dat was precies wat er gebeurde. Op de
 * regiopagina's stonden er twee rode vlakken tegen elkaar zodra de rode
 * slotplaat onder de witte FAQ meetelde, en op de gemeentepagina's verschoof
 * alles zodra een gemeente geen eigen werven had: die sectie viel weg en elke
 * sectie erna stond vanaf dat punt op de verkeerde kleur.
 *
 * Daarom krijgt elke sectie haar kleur als argument en bepaalt de lijst in de
 * pagina de beurtrol. Een sectie die niet getoond wordt, staat niet in de lijst
 * en verbruikt dus ook geen beurt.
 *
 * Gedeeld door `RegioPage` en `GemeentePage`: twee pagina's met dezelfde vorm
 * en dezelfde valkuil, dus ook dezelfde telling.
 */
export type Kleur = "sw" | "sr";

/** Een sectie die haar achtergrondkleur van de volgorde krijgt. */
export type Sectie = (kleur: Kleur) => ReactNode;

/** Wit, rood, wit, rood — geteld vanaf de eerste sectie na de rode hero. */
export const beurt = (i: number): Kleur => (i % 2 === 0 ? "sw" : "sr");

/**
 * Een knop die op een rode sectie staat heeft de omgekeerde vulling nodig van
 * dezelfde knop op wit. Nu de kleur uit de volgorde komt en niet meer vastligt,
 * kan een sectie van achtergrond wisselen zonder dat iemand eraan denkt, dus
 * volgen de knoppen mee in plaats van vast te staan.
 *
 * `glans` is de lichtveeg die ook over "Gratis Calculator" in de header loopt
 * (zie `.btn.glans` in v3-content.css). Alleen de hoofdknop krijgt ze: zou elke
 * knop op de pagina bewegen, dan wijst niets meer de weg.
 */
export const hoofdKnop = (k: Kleur) => (k === "sr" ? "btn btn-white glans" : "btn glans");

/**
 * De tweede knop is zwart met witte tekst, op wit én op rood. Als dunne
 * omlijning naast een volle knop las hij nauwelijks als knop. Gevraagd op
 * 13-11-2026, eerst voor de rode sectie en meteen daarna voor de witte erboven.
 */
export const tweedeKnop = (_k: Kleur) => "btn btn-zwart";
