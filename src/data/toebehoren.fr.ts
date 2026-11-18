/**
 * De toebehoren-fiches van `toebehoren.ts` in het Frans.
 *
 * `toebehorenInTaal(fiche, taal, prijs?)` geeft dezelfde `Toebehoren` terug met
 * alle tekst vertaald; `slug`, `dag` en de beeldpaden blijven gelijk.
 *
 * Eén antwoord in de FAQ noemt de prijs. Die staat hier niet als getal: geef
 * `prijs` mee zoals de pagina hem toont (bv. `toon(dag).tekst + " " +
 * toon(dag).label`, dus TVAC of HTVA naargelang de klant). Zonder `prijs` blijft
 * het Nederlandse antwoord ongewijzigd en krijgt het Franse het bedrag HTVA.
 *
 * Draait aan beide kanten, dus relatieve imports met `.js`.
 */

import type { Taal } from "../i18n/taal.js";
import { euro } from "../lib/verhuur.js";
import { CONDENSPOMP, type Toebehoren } from "./toebehoren.js";

type ToebehorenTekst = Omit<Toebehoren, "slug" | "dag" | "img" | "faq"> & {
  /** Alt en bijschrift per beeldpad. */
  img: Record<string, [alt: string, bijschrift?: string]>;
  faq: [vraag: string, antwoord: string | ((prijs: string) => string)][];
};

const CONDENSPOMP_FR: ToebehorenTekst = {
  naam: "Pompe à condensats externe",
  type: "Accessoire · évacuation automatique de l'eau",
  badge: "Évacuation automatique de l'eau",
  sum: "Un déshumidificateur de chantier retire l'humidité de l'air et la recueille dans un bac. La pompe à condensats veille à ce que vous ne deviez jamais vider ce bac : elle évacue l'eau en continu vers un lavabo, une douche ou un siphon de sol, jusqu'à 3,90 m plus haut que l'appareil.",
  img: {
    "/vernast/condenspomp-product-v2.webp": [
      "Pompe à condensats externe blanche sur un bac de récupération noir, avec câble d'alimentation et tuyau d'évacuation transparent sur un sol en béton",
      "Pompe à condensats externe avec bac de récupération et tuyau d'évacuation.",
    ],
    "/vernast/condenspomp-slangopstelling.webp": [
      "Exemple d'installation : tuyau de condensat vert d'un déshumidificateur vers une pompe posée au sol, avec un fin tuyau d'évacuation vers une évacuation située plus haut",
      "Via un tuyau vers la pompe : l'eau de condensation s'écoule du déshumidificateur vers le bac de récupération, puis elle est pompée.",
    ],
    "/vernast/condenspomp-zonder-emmer.webp": [
      "Exemple d'installation : pompe à condensats dans le compartiment inférieur d'un déshumidificateur, raccordée par un court tuyau vert et sans seau séparé",
      "Sans seau séparé : la pompe se place sous l'évacuation de condensat du déshumidificateur, si l'appareil s'y prête.",
    ],
  },
  key: [
    ["Évacuation", "90", "litres par heure"],
    ["Pompe jusqu'à", "3,90", "m de haut"],
    ["Consommation", "58", "watts"],
  ],
  aboutTitle: "Quand avez-vous besoin d'une pompe à condensats ?",
  about: [
    "Chaque déshumidificateur qui quitte notre dépôt est livré avec un <strong>bac de récupération</strong> et un tuyau de condensat, tous deux gratuits. S'il y a une évacuation <strong>plus basse</strong> que l'appareil (un siphon de sol, un bac de douche, le raccordement de la future machine à laver), l'eau s'y écoule d'elle-même et vous n'avez besoin de rien d'autre.",
    "Mais souvent, cette évacuation n'existe pas, ou elle se trouve <strong>plus haut</strong> que l'appareil. Le bac se remplit alors et le déshumidificateur s'arrête de lui-même dès qu'il est plein. Sur un chantier, cela arrive rarement au bon moment : vous revenez le lundi matin devant un appareil à l'arrêt depuis le vendredi soir, et l'air que vous aviez asséché vendredi ne l'est plus.",
    "C'est à cela que sert la pompe à condensats. Elle se place à côté ou sous le déshumidificateur, recueille l'eau de condensation et la refoule par un fin tuyau : <strong>jusqu'à 3,90 m plus haut</strong> que l'appareil, et sur une bonne distance à l'horizontale. Un flotteur la met en marche dès que le bac est plein et l'arrête dès qu'il est vide : vous n'avez jamais à vous en occuper.",
  ],
  bullets: [
    [
      "Plus jamais de réservoir à vider",
      "Sans pompe, vous videz le bac 2 à 3 fois par jour, selon l'humidité de la pièce. Avec pompe : pas une seule fois.",
    ],
    [
      "Tourne la nuit et le week-end",
      "Un bac plein arrête le déshumidificateur, et chaque heure d'arrêt fait remonter l'humidité de l'air.",
    ],
    [
      "Pompe vers le haut",
      "Jusqu'à 3,90 m de haut, donc aussi vers un lavabo, un évier ou une évacuation à l'étage supérieur.",
    ],
    [
      "Eau de condensation pure",
      "Ce qui en sort est de l'humidité de l'air, pas de la maçonnerie. Elle peut aller simplement à l'égout.",
    ],
  ],
  stappen: [
    ["Recueillir", "L'eau de condensation du déshumidificateur s'écoule par le tuyau dans le bac de la pompe."],
    ["Le flotteur s'enclenche", "Quand le bac est plein, un flotteur met la pompe en marche. Pas de bouton, pas de minuterie."],
    [
      "Pomper",
      "La pompe refoule l'eau par un fin tuyau vers l'évacuation, jusqu'à 3,90 m plus haut que l'appareil.",
    ],
    ["Arrêt automatique", "Quand le bac est vide, la pompe s'arrête jusqu'à la fois suivante. Jour et nuit."],
  ],
  specs: [
    ["Type", "Pompe à condensats externe avec bac de récupération"],
    ["Fonctionnement", "automatique, par interrupteur à flotteur"],
    ["Débit", "90 l/h à 3 m de hauteur de refoulement"],
    ["Hauteur de refoulement max.", "3,90 m"],
    ["Tension d'alimentation", "220 V / 50–60 Hz"],
    ["Puissance absorbée", "58 W (55 W en fonctionnement)"],
    ["Clapet anti-retour", "intégré"],
    ["Tuyau d'aspiration", "Ø 25 mm (diamètre extérieur)"],
    ["Tuyau d'évacuation", "Ø 5 mm (diamètre intérieur), fourni"],
    ["Dimensions (L × l × h)", "280 × 125 × 140 mm"],
    ["Poids", "env. 1,9 kg"],
    ["Application", "évacuation continue des condensats des déshumidificateurs de chantier"],
  ],
  faq: [
    [
      "Ai-je besoin d'une pompe à condensats ?",
      "Seulement s'il n'y a pas d'évacuation plus basse que l'appareil. S'il y a un siphon de sol, un bac de douche ou un raccordement de machine à laver à proximité, l'eau de condensation s'y écoule d'elle-même par le tuyau fourni d'office. Sinon, ou si l'évacuation est plus haute, la pompe fait la différence entre un appareil qui continue de tourner et un appareil qui s'arrête après une demi-journée.",
    ],
    [
      "Combien de pompes me faut-il ?",
      "Une par déshumidificateur. Chaque déshumidificateur recueille sa propre eau, chacun a donc besoin de sa propre évacuation. Dans la réservation, la pompe est donc réglée d'office sur une par appareil ; vous pouvez adapter ce nombre vous-même.",
    ],
    [
      "Combien cela coûte-t-il ?",
      (prijs) =>
        `${prijs} par déshumidificateur et par jour, en plus de la location de l'appareil. Pour un pack livré, notre technicien raccorde la pompe sur place ; c'est compris dans le prix.`,
    ],
    [
      "Où va cette eau ?",
      "Vers ce qui se trouve à proximité : un lavabo, un évier, un bac de douche, un siphon de sol ou le raccordement de la future machine à laver. Dans un appartement, c'est généralement la douche ; sur un chantier de nouvelle construction, plus souvent un siphon de sol. Le tuyau est fin et passe facilement le long d'une plinthe ou par une porte.",
    ],
    [
      "Cette eau peut-elle aller à l'égout ?",
      "Oui. C'est de l'eau de condensation pure : de l'humidité retirée de l'air et condensée sur les lamelles froides de l'appareil. Elle ne contient rien qui ne puisse aller dans une évacuation ordinaire.",
    ],
    [
      "Est-ce que je l'entends tourner ?",
      "À peine. La pompe ne tourne pas en continu mais par courtes impulsions de quelques secondes, chaque fois que le bac est plein. Entre-temps, elle est totalement silencieuse.",
    ],
    [
      "Puis-je raccorder la pompe moi-même ?",
      "Oui, et c'est d'ailleurs le principe si vous venez chercher un appareil. Vous placez la pompe sous ou à côté du déshumidificateur, mettez le tuyau de condensat dans le bac, branchez la fiche dans une prise ordinaire et tirez le fin tuyau d'évacuation jusqu'à votre évacuation. Il n'y a rien d'autre à régler.",
    ],
  ],
};

const FR: Record<string, ToebehorenTekst> = {
  [CONDENSPOMP.slug]: CONDENSPOMP_FR,
};

/** Een toebehoren-fiche in de taal van de pagina; zie de uitleg bovenaan. */
export function toebehorenInTaal(fiche: Toebehoren, taal: Taal, prijs?: string): Toebehoren {
  const fr = taal === "fr" ? FR[fiche.slug] : undefined;
  if (!fr) {
    if (!prijs) return fiche;
    // Het Nederlandse prijsantwoord begint met het bedrag excl. btw; vervang het
    // door wat de pagina toont.
    const nlBedrag = euro(fiche.dag);
    return {
      ...fiche,
      faq: fiche.faq.map(([v, a]): [string, string] => [v, a.split(nlBedrag).join(prijs)]),
    };
  }
  // Zelfde notatie als `formatEuro` (i18n/useTaal.ts), dat React meesleept.
  const bedrag =
    prijs ??
    `${fiche.dag.toLocaleString("fr-BE", { style: "currency", currency: "EUR" })} HTVA`;
  return {
    ...fiche,
    naam: fr.naam,
    type: fr.type,
    badge: fr.badge,
    sum: fr.sum,
    img: fiche.img.map(([src, alt, bijschrift]) => {
      const t = fr.img[src];
      return t ? [src, t[0], t[1] ?? bijschrift] : [src, alt, bijschrift];
    }),
    key: fr.key,
    aboutTitle: fr.aboutTitle,
    about: fr.about,
    bullets: fr.bullets,
    stappen: fr.stappen,
    specs: fr.specs,
    faq: fr.faq.map(([v, a]): [string, string] => [v, typeof a === "function" ? a(bedrag) : a]),
  };
}
