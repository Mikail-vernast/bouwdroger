/**
 * Franse teksten bij de verhuurcatalogus van `verhuur.ts`.
 *
 * Alleen proza: sleutels, prijzen, foto's en Stripe-metadata blijven in
 * `verhuur.ts` (en `tarieven.ts`) staan, zodat een bedrag op het scherm en
 * bij Stripe uit dezelfde bron blijft komen. Wat hier staat, legt zich er in
 * de taal van de pagina overheen.
 *
 * Gebruik:
 *
 * - `productInTaal(key | product, taal)` — het volledige `Product` met naam,
 *   type, badge, samenvatting, alt-teksten, fiche, voordelen en FAQ vertaald.
 *   `day`, `img` en de volgorde van alles blijven die van het Nederlandse
 *   product. Voor `taal === "nl"` krijg je het origineel terug.
 * - `toestelChipsInTaal(product, taal)` — `toestelChips` in de taal van de pagina.
 * - Toestelnamen: `toestelLabelIn(key, taal)` in `navigation.ts`; pakketten:
 *   `pakketInTaal` in `packages.fr.ts`. Die staan daar en niet hier.
 * - `vertaalPortaal(tekst, taal)` — elke tekst die het portaal publiceert
 *   (naam, type, badge, dekking, extra's …). Opgezocht op de
 *   letterlijke Nederlandse tekst, niet op een sleutel: wijzigt iemand die
 *   tekst in het portaal, dan valt het Frans terug op het nieuwe Nederlands in
 *   plaats van een verouderde vertaling te tonen.
 * - `catInTaal`, `roleInTaal`, `specsInTaal`, `coverInTaal`, `extrasInTaal`,
 *   `pumpInTaal`, `deliveryInTaal`, `scLabelInTaal`, `deviceLabelInTaal` —
 *   dezelfde structuren als in `verhuur.ts` / `lib/verhuur.ts`, vertaald.
 * - `packageSpecLineInTaal`, `packageGalleryAltsInTaal`, `deviceLineLabelInTaal`
 *   — de weergavefuncties uit `lib/verhuur.ts`. `packageTitle` blijft bewust
 *   Nederlands: die belandt in de Stripe-productnaam en in het portaal.
 *
 * Engels werkt op dezelfde manier: de teksten staan in `verhuur.en.ts`, de
 * functies hier zijn driewegs. Een taal die hier niet herkend wordt, krijgt
 * het Nederlandse origineel, nooit het Frans.
 *
 * Draait aan beide kanten, dus relatieve imports met `.js`.
 */

import type { Taal } from "../i18n/taal.js";
import {
  CAT,
  COVER,
  DELIVERY,
  EXTRAS,
  PRODUCTS,
  PUMP,
  ROLE,
  SC_LABEL,
  SPECS,
  type CoverTier,
  type Device,
  type DeviceKey,
  type Extra,
  type Product,
  type SpecSheet,
} from "./verhuur.js";
import {
  DEVICE_LABEL,
  isWaterDamage,
  type DeviceLine,
  type PackageConfig,
  type PackageItem,
} from "../lib/verhuur.js";
import { altVoorBeeld } from "../lib/altTekst.js";
import {
  BEKENDE_BEELDEN_EN,
  DELIVERY_EN,
  DEVICE_LABEL_EN,
  GEDEELDE_ALT_EN,
  PORTAAL_EN,
  PRODUCT_EN,
  PUMP_EN,
  ROLE_EN,
  SC_LABEL_EN,
  SPECS_EN,
  WERK_EN,
} from "./verhuur.en.js";

export { toestelTitelEn } from "./verhuur.en.js";

/* ============================================================
   Teksten uit het portaal
   ============================================================ */

/**
 * Letterlijke Nederlandse portaaltekst → Frans. Een tekst die hier niet staat,
 * blijft Nederlands: liever een Nederlandse badge dan een vertaling van iets
 * wat er niet meer staat.
 */
const PORTAAL_FR: Record<string, string> = {
  /* Productnamen (`name`) */
  "Ontvochtiger TTK 170 S": "Déshumidificateur TTK 170 S",
  "Ontvochtiger TTK 350 S": "Déshumidificateur TTK 350 S",
  "Ontvochtiger TTK 650 S": "Déshumidificateur TTK 650 S",
  "Elektrische kachel TEddH 20 T": "Chauffage électrique TEddH 20 T",
  "Elektrische kachel TEddH 30 T": "Chauffage électrique TEddH 30 T",
  "Ventilator TTV 4500": "Ventilateur TTV 4500",
  "Adsorptiedroger Revolution": "Déshumidificateur à adsorption Revolution",
  "Radiaalventilator 2 250 m³/u": "Ventilateur radial 2 250 m³/h",

  /* Soorten (`type`) */
  Condensontvochtiger: "Déshumidificateur à condensation",
  "Elektrische bouwkachel": "Chauffage de chantier électrique",
  "Bouwventilator · luchtcirculatie": "Ventilateur de chantier · circulation d'air",
  "Adsorptiedroger · gericht drogen": "Déshumidificateur à adsorption · séchage ciblé",
  "Bouwventilator · gericht drogen": "Ventilateur de chantier · séchage ciblé",

  /* Badges */
  "Kleine ruimtes": "Petits espaces",
  "Meest gehuurd": "Le plus loué",
  "Grote volumes": "Grands volumes",
  "Kleinere ruimtes": "Espaces plus petits",
  "Voor koude ruimtes": "Pour les espaces froids",
  "Versnelt elke droging": "Accélère chaque séchage",
  "Plaatselijk drogen": "Séchage localisé",
  "Gericht drogen": "Séchage ciblé",
  "Meest gekozen": "Le plus choisi",

  /* Samenvattingen (`sum`) */
  "Compacte, verrijdbare condensontvochtiger. De juiste keuze voor één kamer, een appartement of een kleinere renovatie.":
    "Déshumidificateur à condensation compact et mobile. Le bon choix pour une pièce, un appartement ou une rénovation de taille modeste.",
  "Ons meest gehuurde toestel en de standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar binnen enkele dagen.":
    "Notre appareil le plus loué et la référence pour la nouvelle construction. Sèche la chape et le plafonnage de manière fiable en quelques jours.",
  "Het zwaarste toestel in het gamma. Voor grote werven, kelders en waterschade waar elke dag telt.":
    "L'appareil le plus puissant de la gamme. Pour les grands chantiers, les caves et les dégâts des eaux où chaque jour compte.",
  "Elektrische bouwkachel van 20 kW met thermostaat. Brengt kleinere koude ruimtes op temperatuur zodat de droging blijft doorlopen.":
    "Chauffage de chantier électrique de 20 kW avec thermostat. Met les espaces froids plus petits à température pour que le séchage continue.",
  "Elektrische bouwkachel van 30 kW met ingebouwde thermostaat. Brengt koude ruimtes op temperatuur zodat droging effectief wordt.":
    "Chauffage de chantier électrique de 30 kW avec thermostat intégré. Met les espaces froids à température pour que le séchage devienne efficace.",
  "Krachtige bouwventilator met 4 500 m³/u luchtverzet. Zorgt dat de droge lucht ook effectief langs muren en vloeren strijkt.":
    "Ventilateur de chantier puissant avec un débit de 4 500 m³/h. Veille à ce que l'air sec passe réellement le long des murs et des sols.",
  "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken. Werkt ook bij lage temperaturen.":
    "Sèche de manière ciblée via des gaines : sous les sols, dans les cloisons et aux endroits difficiles d'accès. Fonctionne aussi à basse température.",
  "Blaast de lucht gericht over vloeren en chape, ook onder kasten en in hoeken. De vaste partner van een ontvochtiger bij vloerdroging.":
    "Souffle l'air de manière ciblée sur les sols et la chape, même sous les meubles et dans les coins. Le partenaire attitré d'un déshumidificateur pour le séchage des sols.",

  /* Toestelcatalogus (`CAT`) */
  "Boost, 50 l / 24 u": "Boost, 50 l / 24 h",
  "Highflow, 5 300 m³/u": "Highflow, 5 300 m³/h",
  "Elektrische kachel, 3,30 kW": "Chauffage électrique, 3,30 kW",
  "Performance, 80 l / 24 u": "Performance, 80 l / 24 h",
  "Automatische werking · laag geluidsniveau · waterreservoir":
    "Fonctionnement automatique · faible niveau sonore · réservoir d'eau",
  "Spatwaterdicht (IP55) · 3 standen · 0,25 kW": "Étanche aux projections (IP55) · 3 vitesses · 0,25 kW",
  "Ingebouwde thermostaat · gelijkmatige verdeling": "Thermostat intégré · répartition homogène",
  "Krachtig bij overgang naar hogere vochtbelasting": "Puissant lorsque la charge d'humidité augmente",

  /* Dekking (`COVER`) */
  Standaard: "Standard",
  "Eigen risico € 250": "Franchise de 250 €",
  "Geen eigen risico": "Sans franchise",
  "Zit standaard bij elke huur. U draagt zelf het eigen risico.":
    "Inclus d'office dans chaque location. Vous supportez vous-même la franchise.",
  "Verlaagt uw eigen risico van € 1.000 naar € 250 en dekt diefstal.":
    "Réduit votre franchise de 1 000 € à 250 € et couvre le vol.",
  "Volledig zonder eigen risico, bij schade, defect én diefstal.":
    "Entièrement sans franchise, en cas de dommage, de panne et de vol.",
  "Wettelijke aansprakelijkheid": "Responsabilité civile",
  "Technische storing gedekt": "Panne technique couverte",
  "Normale gebruiksslijtage": "Usure normale",
  "Eigen risico € 1.000 bij schade": "Franchise de 1 000 € en cas de dommage",
  "Diefstal niet gedekt": "Vol non couvert",
  "Geen vervangtoestel": "Pas d'appareil de remplacement",
  "Eigen risico verlaagd tot € 250": "Franchise réduite à 250 €",
  "Diefstal gedekt": "Vol couvert",
  "Vervangtoestel binnen 24 u": "Appareil de remplacement sous 24 h",
  "Bij schade betaalt u de eerste € 250": "En cas de dommage, vous payez les premiers 250 €",
  "Géén eigen risico bij schade": "Aucune franchise en cas de dommage",
  "Diefstal volledig gedekt": "Vol entièrement couvert",
  "Defect toestel direct vervangen": "Appareil défectueux remplacé immédiatement",
  "Vervangtoestel binnen 12 u": "Appareil de remplacement sous 12 h",
  "Voorrang bij planning en verlenging": "Priorité pour la planification et la prolongation",

  /* Extra's (`EXTRAS`) */
  "Officieel vochtrapport": "Rapport d'humidité officiel",
  "Verslag nodig voor uw verzekeraar, huisbaas of bouwdossier? Wij werken de standaard voor- en nameting uit tot een ondertekend rapport met alle meetwaarden.":
    "Besoin d'un rapport pour votre assureur, votre propriétaire ou votre dossier de construction ? Nous transformons la mesure standard avant et après en un rapport signé avec toutes les valeurs mesurées.",
  eenmalig: "unique",
  "Werfstroomkast (paddestoel)": "Coffret électrique de chantier (champignon)",
  "Nog geen elektriciteitskast op de werf? Wij verhuren een werfstroomverdeler mee, zodat alle toestellen meteen veilig kunnen draaien.":
    "Pas encore de tableau électrique sur le chantier ? Nous louons en plus un coffret de distribution de chantier, pour que tous les appareils puissent fonctionner tout de suite en sécurité.",
  "per week": "par semaine",
};

/** Een tekst uit het portaal in de taal van de pagina; onbekend blijft Nederlands. */
export function vertaalPortaal(tekst: string, taal: Taal): string {
  if (!tekst) return tekst;
  if (taal === "fr") return PORTAAL_FR[tekst] ?? tekst;
  if (taal === "en") return PORTAAL_EN[tekst] ?? tekst;
  return tekst;
}

/* ============================================================
   Toestelpagina's
   ============================================================ */

/** Wat per toestel vertaald wordt; de rest komt uit `PRODUCTS`. */
export interface ProductTekst {
  /** Alt-tekst per beeldpad: portaalfoto's, extra foto's en infoplaten. */
  alt: Record<string, string>;
  key: [string, string, string][];
  aboutTitle: string;
  about: string[];
  bullets: [string, string][];
  specs: [string, string][];
  faq: [string, string][];
}

const GEDEELDE_ALT_FR: Record<string, string> = {
  "/vernast/post/transparantie.webp":
    "Transparence sur le prix et le planning : calcul automatique, aucune incertitude sur la durée, entièrement sec pour la phase de construction suivante",
};

const PRODUCT_FR: Record<string, ProductTekst> = {
  ttk170: {
    alt: {
      "/vernast/eco-boost.webp":
        "Vernast Boost, déshumidificateur à condensation Boost de 50 litres par jour pour des espaces jusqu'à 250 m³",
      "/vernast/lineup-dryers-werfruimte.webp":
        "Les trois déshumidificateurs de chantier éco Vernast côte à côte, le Boost est le plus petit modèle",
      "/vernast/boost-werf-keuken-aansluitingen-v3.webp":
        "Déshumidificateur Boost à côté d'un îlot de cuisine en cours de montage dans une maison neuve lumineuse, avec des armoires partiellement posées",
      "/vernast/boost-zijaanzicht-vernast-werfruimte.webp":
        "Déshumidificateur Boost vu de trois quarts avec le logo Vernast dans un local de chantier lumineux",
      "/vernast/boost-vooraanzicht-werfruimte.webp":
        "Déshumidificateur Boost TTK 170 S vu de face dans un local de chantier lumineux, sans câble qui dépasse",
      "/vernast/boost-achteraanzicht-werfruimte.webp":
        "Vue arrière du déshumidificateur Boost TTK 170 S avec ses grilles de ventilation dans un local de chantier lumineux, sans câble qui dépasse",
      "/vernast/boost-werf-nat-pleister-leefruimte.webp":
        "Déshumidificateur Boost dans le séjour d'une nouvelle construction avec fenêtres posées et plafonnage visiblement humide",
      "/vernast/boost-werf-nat-pleister-kamer.webp":
        "Déshumidificateur Boost dans une pièce fraîchement plafonnée, fenêtres fermées et taches de plafonnage humides",
      "/vernast/post/boost-info-poster.webp":
        "Affiche d'information Vernast du déshumidificateur Small : fonctionnement automatique, niveau sonore et réservoir d'eau",
      "/vernast/post/boost-afmetingen.webp": "Dimensions du Vernast Boost : 54 × 49 × 96,3 cm",
    },
    key: [
      ["Évacuation d'humidité", "50", "L/jour"],
      ["Portée", "250", "m³"],
      ["Consommation", "0,75", "kW"],
    ],
    aboutTitle: "Quand choisir le Boost ?",
    about: [
      "C'est notre appareil d'entrée de gamme, mais avec 50 litres d'humidité évacués par jour, il n'a rien d'un poids plume. Pour des espaces jusqu'à environ <strong>250 m³</strong> (par exemple un appartement ou un étage de maison), cet appareil élimine efficacement l'humidité de construction.",
      "Le Boost est mobile et assez compact pour passer par une porte ou un escalier ordinaire. Il est assez silencieux pour rester dans un espace habité, ce qui le rend adapté aux rénovations pendant lesquelles vous continuez à y vivre.",
      "Vous travaillez dans un espace plus grand ou il s'agit de dégâts des eaux où la rapidité compte ? Regardez alors le <strong>Performance</strong> ou l'<strong>Ultimate</strong>.",
    ],
    bullets: [
      ["Jusqu'à 250 m³", "Une pièce, un appartement ou un étage : le volume que cet appareil gère confortablement."],
      ["Assez silencieux pour un espace habité", "Vous pouvez continuer à vivre ou à travailler pendant que l'appareil tourne."],
      ["Mobile et compact", "Passe par des portes ordinaires et se déplace par une seule personne."],
      ["Évacuation continue possible", "Nous raccordons d'office un tuyau de condensat, vous n'avez rien à vider."],
    ],
    specs: [
      ["Type", "Déshumidificateur à condensation"],
      ["Évacuation d'humidité (30 °C / 80 % HR)", "50 L/jour"],
      ["Volume recommandé", "jusqu'à 250 m³"],
      ["Débit d'air", "300 m³/h"],
      ["Puissance absorbée", "0,75 kW"],
      ["Tension d'alimentation", "230 V / 50 Hz"],
      ["Plage de température", "5 – 32 °C"],
      ["Réservoir", "avec option d'évacuation continue"],
      ["Hygrostat", "intégré"],
      ["Dimensions (l × p × h)", "env. 43 × 43 × 65 cm"],
      ["Poids", "env. 32 kg"],
      ["Mobilité", "roues + poignée de poussée"],
    ],
    faq: [
      [
        "Cet appareil est-il assez grand pour mon habitation ?",
        "Pour une pièce, un appartement ou un étage jusqu'à environ 250 m³, le Boost suffit. Pour une maison neuve complète, nous conseillons le Performance. Faites le calcul via le configurateur, vous serez alors fixé.",
      ],
      [
        "Puis-je déplacer l'appareil moi-même ?",
        "Oui. L'appareil pèse environ 27 kg et repose sur des roues avec une poignée de poussée. Une personne peut le faire rouler ; pour les escaliers, deux personnes sont conseillées.",
      ],
      [
        "Fait-il beaucoup de bruit ?",
        "Nettement moins qu'un ventilateur de chantier. Vous pouvez continuer à travailler ou à vivre dans la même habitation, même si ce n'est pas idéal dans une chambre pendant que vous dormez.",
      ],
    ],
  },
  ttk350: {
    alt: {
      "/vernast/eco-performance.webp":
        "Vernast Performance, déshumidificateur à condensation Performance de 70 litres par jour pour des espaces jusqu'à 400 m³",
      "/vernast/lineup-dryers-werfruimte.webp":
        "Les trois déshumidificateurs de chantier éco Vernast côte à côte, le Performance est le modèle intermédiaire",
      "/vernast/performance-vooraanzicht-werfruimte.webp":
        "Déshumidificateur Performance TTK 350 S vu de face dans un local de chantier lumineux, sans câble qui dépasse",
      "/vernast/performance-achteraanzicht-werfruimte.webp":
        "Vue arrière du déshumidificateur Performance TTK 350 S dans un local de chantier lumineux, sans câble qui dépasse",
      "/vernast/performance-zijaanzicht-vernast-werfruimte.webp":
        "Déshumidificateur Performance vu de trois quarts avec le logo Vernast dans un local de chantier lumineux",
      "/vernast/performance-werf-nat-pleister.webp":
        "Déshumidificateur Performance dans le séjour d'une nouvelle construction avec plafonnage humide et fenêtres posées",
      "/vernast/performance-werf-keuken-v2.webp":
        "Déshumidificateur Performance dans une extension de cuisine avec des armoires en chêne partiellement posées et de grandes baies vitrées",
      "/vernast/post/performance-info-poster.webp":
        "Affiche d'information Vernast du déshumidificateur Medium : fonctionnement automatique, niveau sonore et réservoir d'eau",
      "/vernast/post/performance-afmetingen-v2.webp":
        "Dimensions du Vernast Performance : 53 × 50 × 96,5 cm, poids 39 kg selon l'affiche fournie",
    },
    key: [
      ["Évacuation d'humidité", "70", "L/jour"],
      ["Portée", "400", "m³"],
      ["Consommation", "1,1", "kW"],
    ],
    aboutTitle: "Quand choisir le Performance ?",
    about: [
      "C'est l'appareil que nous livrons le plus souvent, et pour cause : avec <strong>70 litres d'humidité évacués par jour</strong> et une portée jusqu'à <strong>400 m³</strong>, il couvre une maison neuve complète ou une grande rénovation en une fois.",
      "En nouvelle construction, l'essentiel de l'humidité se trouve dans la chape et le plafonnage. Ils libèrent leur eau lentement, le séchage naturel prend des semaines. Le Performance abaisse suffisamment l'humidité de l'air pour raccourcir nettement ce processus : <strong>deux à quatre semaines</strong>, selon l'épaisseur de la chape ou du plafonnage, pour que votre poseur de sol et votre peintre puissent commencer plus tôt.",
      "Pour un résultat optimal, combinez cet appareil avec un <strong>ventilateur Highflow</strong>. Sans mouvement d'air, c'est surtout l'air qui sèche et non la maçonnerie ; avec de la circulation, vous gagnez des jours.",
    ],
    bullets: [
      ["Jusqu'à 400 m³", "Une maison neuve complète ou une grande rénovation avec un seul appareil."],
      ["70 L par jour", "Une capacité suffisante pour assécher rapidement une chape et un plafonnage frais."],
      ["5 – 7 jours de séchage", "Durée typique en nouvelle construction avec un placement correct et de la circulation."],
      ["Hygrostat intégré", "L'appareil se met de lui-même au ralenti dès que l'humidité visée est atteinte."],
    ],
    specs: [
      ["Type", "Déshumidificateur à condensation"],
      ["Évacuation d'humidité (30 °C / 80 % HR)", "70 L/jour"],
      ["Volume recommandé", "jusqu'à 400 m³"],
      ["Débit d'air", "550 m³/h"],
      ["Puissance absorbée", "1,1 kW"],
      ["Tension d'alimentation", "230 V / 50 Hz"],
      ["Plage de température", "5 – 32 °C"],
      ["Réservoir", "avec option d'évacuation continue"],
      ["Hygrostat", "intégré"],
      ["Dimensions (l × p × h)", "env. 50 × 50 × 87 cm"],
      ["Poids", "env. 50 kg"],
      ["Mobilité", "roues + poignée de poussée"],
    ],
    faq: [
      [
        "Pourquoi est-ce l'appareil le plus loué ?",
        "Parce que le volume d'une maison neuve moyenne ou d'une rénovation en profondeur tombe exactement dans la portée de cet appareil. Il est assez puissant pour travailler vite, tout en restant compact et économe pour un usage normal.",
      ],
      [
        "Ai-je besoin d'un ventilateur en plus ?",
        "Conseillé, pas obligatoire. Un déshumidificateur sèche l'air ; un ventilateur veille à ce que cet air sec passe réellement le long des murs et des sols. En pratique, cette combinaison raccourcit sensiblement le temps de séchage, surtout avec une chape épaisse.",
      ],
      [
        "Et si mon espace dépasse 400 m³ ?",
        "Nous plaçons alors soit l'Ultimate, soit plusieurs appareils. Le configurateur calcule automatiquement le nombre d'unités nécessaires.",
      ],
      [
        "Dois-je vider l'eau ?",
        "Non. Lors de l'installation, nous raccordons un tuyau de condensat à une évacuation. S'il n'y a pas d'évacuation à proximité, nous plaçons un réservoir et convenons avec vous de la fréquence.",
      ],
    ],
  },
  ttk650: {
    alt: {
      "/vernast/eco-ultimate.webp":
        "Vernast Ultimate, déshumidificateur à condensation Ultimate de 110 litres par jour pour des espaces jusqu'à 600 m³",
      "/vernast/lineup-dryers.webp":
        "Les trois déshumidificateurs de chantier éco Vernast côte à côte, l'Ultimate est le plus grand modèle",
      "/vernast/post/ultimate-afmetingen.webp": "Dimensions du Vernast Ultimate : 61,6 × 51,1 × 102,2 cm, 52 kg",
    },
    key: [
      ["Évacuation d'humidité", "110", "L/jour"],
      ["Portée", "600", "m³"],
      ["Consommation", "1,4", "kW"],
    ],
    aboutTitle: "Quand choisir l'Ultimate ?",
    about: [
      "Avec <strong>110 litres par jour</strong> et une portée jusqu'à <strong>600 m³</strong>, c'est l'appareil des situations où le volume ou la rapidité pose problème : grands chantiers, espaces industriels, caves spacieuses ou dégâts des eaux aigus.",
      "En cas de <strong>dégâts des eaux</strong>, c'est souvent le bon choix. Après une fuite ou une inondation, l'eau ne se trouve pas seulement dans l'air mais profondément dans les sols, les murs et l'isolation. Plus vite vous faites baisser l'humidité de l'air, plus le risque de moisissures et de dégâts structurels diminue, les 48 premières heures sont décisives.",
      "Vous séchez une <strong>cave ou un espace non chauffé</strong> ? Combinez cet appareil avec le <strong>Heatpower 30</strong>. Sous 15 °C, le séchage par condensation est lent ; avec le chauffage, vous remontez la température et l'humidité se libère.",
    ],
    bullets: [
      ["Jusqu'à 600 m³", "Grands chantiers, espaces industriels et caves spacieuses avec un seul appareil."],
      ["110 L par jour", "La plus forte évacuation d'humidité de notre gamme, pour les situations urgentes."],
      ["Premier choix en cas de dégâts des eaux", "Faire baisser vite l'humidité de l'air pour éviter moisissures et pourriture."],
      ["À combiner avec un chauffage", "Dans les espaces froids, le Heatpower 30 amène la température au niveau de fonctionnement."],
    ],
    specs: [
      ["Type", "Déshumidificateur à condensation"],
      ["Évacuation d'humidité (30 °C / 80 % HR)", "110 L/jour"],
      ["Volume recommandé", "jusqu'à 600 m³"],
      ["Débit d'air", "700 m³/h"],
      ["Puissance absorbée", "1,4 kW"],
      ["Tension d'alimentation", "230 V / 50 Hz"],
      ["Plage de température", "5 – 32 °C"],
      ["Réservoir", "avec option d'évacuation continue"],
      ["Hygrostat", "intégré"],
      ["Dimensions (l × p × h)", "env. 55 × 55 × 95 cm"],
      ["Poids", "env. 52 kg"],
      ["Mobilité", "roues + poignée de poussée"],
    ],
    faq: [
      [
        "Cet appareil convient-il pour des dégâts des eaux ?",
        "Oui, c'est notre premier choix en cas de dégâts des eaux. Sa grande capacité fait baisser rapidement l'humidité de l'air, ce qui est crucial pendant les 48 premières heures. Nous le combinons presque toujours avec un ou plusieurs ventilateurs.",
      ],
      [
        "Fonctionne-t-il dans une cave froide ?",
        "De manière limitée. Sous 15 °C, le rendement de tout déshumidificateur à condensation chute fortement. Pour les caves, nous livrons cet appareil avec le Heatpower 30, afin que la température atteigne le niveau de fonctionnement.",
      ],
      [
        "Combien d'électricité consomme-t-il ?",
        "1,4 kW à plein régime, comparable à une bouilloire qui tournerait en continu à mi-puissance. Sur une semaine, c'est un coût limité face aux dégâts que vous évitez.",
      ],
      [
        "Puis-je louer plusieurs appareils ?",
        "Bien sûr. Au-delà de 600 m³, nous plaçons plusieurs unités. Le configurateur calcule automatiquement le nombre correct.",
      ],
    ],
  },
  ttv4500: {
    alt: {
      "/vernast/vent-axiaal.webp": "Vernast Turbo Highflow, ventilateur de chantier avec un débit de 4 500 m³/h",
      "/vernast/vent-axiaal-vooraanzicht.webp":
        "Ventilateur axial Vernast TTV 4500 vu de face dans un local de chantier lumineux",
      "/vernast/post/axiaal-specs.webp":
        "Caractéristiques du ventilateur axial Vernast Highflow : débit d'air élevé, étanche aux projections IP55, 230 V, trois vitesses",
      "/vernast/post/axiaal-afmetingen.webp": "Dimensions du Vernast Highflow : 35,8 × 51,5 × 52 cm, 15 kg",
    },
    key: [
      ["Débit d'air", "4 500", "m³/h"],
      ["Vitesses", "3", ""],
      ["Consommation", "0,2", "kW"],
    ],
    aboutTitle: "Pourquoi un ventilateur pour sécher ?",
    about: [
      "Un déshumidificateur sèche l'<strong>air</strong>. Mais l'humidité se trouve dans vos <strong>murs, votre chape et votre sol</strong>. Sans mouvement d'air, une fine couche d'air saturé se forme contre ces surfaces, et le séchage s'y arrête.",
      "Un ventilateur brise cette couche. En soufflant l'air en continu le long de la maçonnerie, de l'air sec reste toujours en contact avec la surface humide, ce qui libère l'humidité plus vite. En pratique, cela peut faire <strong>des jours de différence</strong>.",
      "Avec <strong>4 500 m³/h</strong> et trois vitesses, cet appareil convient aux grands espaces. Il est léger, empilable et orientable, pour diriger le flux d'air exactement sur la zone humide. En cas de dégâts des eaux, nous considérons un ventilateur comme <strong>essentiel</strong>, pas comme une option.",
    ],
    bullets: [
      ["4 500 m³/h de débit d'air", "Assez de débit pour garder tout un grand espace en mouvement."],
      ["Indispensable en cas de dégâts des eaux", "Sans circulation, l'air sèche, mais pas la maçonnerie."],
      ["Très économe", "0,2 kW : l'appareil le moins cher pour raccourcir votre temps de séchage."],
      ["Orientable et empilable", "Dirigez le flux d'air exactement là où se trouve l'humidité ; plusieurs unités combinables."],
    ],
    specs: [
      ["Type", "Ventilateur de chantier axial"],
      ["Débit d'air", "4 500 m³/h"],
      ["Vitesses", "3"],
      ["Puissance absorbée", "0,2 kW"],
      ["Tension d'alimentation", "230 V / 50 Hz"],
      ["Diamètre du rotor", "env. 45 cm"],
      ["Boîtier", "plastique, empilable"],
      ["Orientable", "oui, cadre inclinable"],
      ["Dimensions (l × p × h)", "env. 56 × 30 × 62 cm"],
      ["Poids", "env. 15 kg"],
      ["Application", "séchage de chantier, dégâts des eaux, ventilation de chantier"],
    ],
    faq: [
      [
        "Ai-je vraiment besoin d'un ventilateur ?",
        "En nouvelle construction, c'est vivement conseillé ; en cas de dégâts des eaux, nous le considérons comme nécessaire. Un déshumidificateur sans circulation sèche surtout l'air ; avec un ventilateur, l'humidité sort aussi réellement du mur et de la chape.",
      ],
      [
        "Combien de ventilateurs me faut-il ?",
        "À titre indicatif : un ventilateur par grand espace ou par zone humide. Dans une habitation de plusieurs pièces, nous en plaçons souvent deux ou trois. Notre technicien vous conseille sur place.",
      ],
      [
        "Puis-je le louer seul, sans déshumidificateur ?",
        "C'est possible, par exemple pour ventiler un chantier ou faire sécher de la peinture plus vite. Pour l'humidité de construction, nous conseillons toujours la combinaison avec un déshumidificateur : un ventilateur seul déplace l'humidité, il ne l'élimine pas.",
      ],
    ],
  },
  teddh30: {
    alt: {
      "/vernast/kachel-30.webp":
        "Chauffage de chantier électrique Vernast Heatpower 30, 30 kW avec thermostat intégré",
      "/vernast/post/kachel-30-specs.webp":
        "Caractéristiques du Vernast Heatpower 30 : thermostat intégré, répartition homogène, chaleur directe, protection contre la surchauffe",
      "/vernast/post/kachel-30-afmetingen.webp": "Dimensions du Vernast Heatpower 30 : 28 × 26 × 30 cm, 10 kg",
    },
    key: [
      ["Puissance", "30", "kW"],
      ["Raccordement", "400", "V"],
      ["Température max.", "75", "°C"],
      ["Thermostat", "oui", ""],
    ],
    aboutTitle: "Pourquoi chauffer pendant le séchage ?",
    about: [
      "Le séchage dépend de la température. L'air chaud peut retenir beaucoup plus d'humidité que l'air froid, et une maçonnerie chaude libère son humidité plus vite. <strong>Sous 15 °C, le rendement d'un déshumidificateur à condensation chute fortement</strong> ; sous 10 °C, le processus devient vraiment lent.",
      "C'est précisément là qu'intervient ce chauffage. Dans une <strong>cave, une nouvelle construction non chauffée ou un chantier d'hiver</strong>, le Heatpower 30 amène l'espace à la température de fonctionnement, pour que le déshumidificateur puisse de nouveau travailler à pleine capacité. La combinaison donne un temps de séchage bien plus court que le déshumidificateur seul.",
      "Avec <strong>30 kW</strong> et un thermostat intégré, l'appareil chauffe aussi de grands volumes et maintient la température stable sans que vous deviez rester à côté. Un raccordement en <strong>400 V (courant triphasé)</strong> est requis, notre technicien le vérifie à la livraison.",
    ],
    bullets: [
      ["30 kW de puissance de chauffe", "Amène aussi les grands espaces froids rapidement à température de fonctionnement."],
      ["Indispensable dans les caves", "Sous 15 °C, un déshumidificateur seul ne travaille pas assez efficacement."],
      ["Thermostat intégré", "Maintient automatiquement la température visée, aucune surveillance nécessaire."],
      ["Courant triphasé 400 V", "Nous vérifions à la livraison si votre raccordement convient."],
    ],
    specs: [
      ["Type", "Chauffage de chantier électrique avec ventilateur"],
      ["Puissance de chauffe", "30 kW"],
      ["Positions", "plusieurs niveaux de puissance"],
      ["Tension d'alimentation", "400 V / 3~ / 50 Hz"],
      ["Thermostat", "intégré, réglable"],
      ["Débit d'air", "env. 2 000 m³/h"],
      ["Boîtier", "acier, revêtement poudre"],
      ["Sécurité", "protection contre la surchauffe"],
      ["Dimensions (l × p × h)", "env. 45 × 50 × 55 cm"],
      ["Poids", "env. 24 kg"],
      ["Application", "caves, chantiers d'hiver, nouvelle construction non chauffée"],
    ],
    faq: [
      [
        "Pourquoi ai-je besoin d'un chauffage avec un déshumidificateur ?",
        "Parce que le séchage dépend de la température. Sous 15 °C, l'air absorbe peu d'humidité et la maçonnerie libère son eau lentement. Le chauffage amène l'espace à température pour que le déshumidificateur travaille à pleine capacité, ensemble vous séchez nettement plus vite.",
      ],
      [
        "Ai-je besoin de courant triphasé ?",
        "Oui, cet appareil demande un raccordement triphasé 400 V. Notre technicien le vérifie à la livraison. Si vous ne disposez pas de courant triphasé, nous examinons ensemble une alternative.",
      ],
      [
        "Consomme-t-il beaucoup d'électricité ?",
        "Un chauffage de 30 kW n'est pas un appareil économe, mais dans un espace froid c'est le seul moyen de faire fonctionner le séchage. Sans chauffage, la location de votre déshumidificateur dure bien plus longtemps, ce qui revient finalement plus cher.",
      ],
      [
        "Le chauffage peut-il rester sans surveillance ?",
        "Le thermostat et la protection contre la surchauffe permettent un usage continu. Lors de l'installation, notre technicien vous explique comment placer l'appareil en sécurité et quelle distance respecter par rapport aux matériaux.",
      ],
    ],
  },
  teddh20: {
    alt: {
      "/vernast/kachel-20.webp":
        "Chauffage de chantier électrique Vernast Heatboost 20, 20 kW avec thermostat pour les espaces plus petits",
    },
    key: [
      ["Puissance", "20", "kW"],
      ["Raccordement", "400", "V"],
      ["Température max.", "60", "°C"],
      ["Thermostat", "oui", ""],
    ],
    aboutTitle: "Quand choisir le TEH 20 T ?",
    about: [
      "Le même rôle que le <strong>Heatpower 30</strong>, mais une taille en dessous. Ce chauffage amène une <strong>cave, un garage, un appartement ou un étage fermé</strong> à température de fonctionnement, pour que votre déshumidificateur puisse de nouveau travailler à pleine capacité.",
      "Sous 15 °C, l'air n'absorbe presque pas d'humidité et la maçonnerie libère son eau lentement. Dans un espace non chauffé, chauffer n'est donc pas une question de confort mais la condition pour sécher tout court, sans chauffage votre location dure tout simplement plus longtemps.",
      "Avec <strong>20 kW</strong>, cet appareil chauffe les espaces pour lesquels la version de 30 kW est surdimensionnée. Ce modèle demande lui aussi du <strong>courant triphasé 400 V</strong> ; si vous n'en disposez pas, prévenez-nous à l'avance.",
    ],
    bullets: [
      ["20 kW de puissance de chauffe", "Suffisant pour une cave, un garage ou un étage fermé."],
      ["La taille en dessous du Heatpower 30", "Plus petit et plus léger, pour les espaces où 30 kW, c'est trop."],
      ["Thermostat intégré", "Maintient la température visée sans que vous deviez rester à côté."],
      ["Courant triphasé 400 V", "Vérifiez à l'avance si votre chantier dispose d'un raccordement triphasé."],
    ],
    specs: [
      ["Type", "Chauffage de chantier électrique avec ventilateur"],
      ["Puissance de chauffe", "20 kW"],
      ["Positions", "plusieurs niveaux de puissance"],
      ["Tension d'alimentation", "400 V / 3~ / 50 Hz"],
      ["Thermostat", "intégré, réglable"],
      ["Boîtier", "acier, revêtement poudre"],
      ["Sécurité", "protection contre la surchauffe"],
      ["Application", "caves, garages, appartements, chantiers d'hiver"],
    ],
    faq: [
      [
        "Quelle est la différence avec le Heatpower 30 ?",
        "Uniquement la puissance : 20 kW contre 30 kW. Pour une cave, un garage ou un appartement, cette version suffit largement. S'il s'agit d'une maison complète en construction ou d'un grand chantier, choisissez la version de 30 kW.",
      ],
      [
        "Ai-je besoin de courant triphasé ?",
        "Oui, cet appareil demande lui aussi un raccordement triphasé 400 V. Si vous n'en disposez pas, signalez-le lors de votre réservation, nous examinerons ensemble une alternative.",
      ],
      [
        "Un chauffage suffit-il à lui seul pour sécher ?",
        "Non. La chaleur libère l'humidité de la maçonnerie, mais ne l'évacue pas. Combinez toujours avec un déshumidificateur, sinon cette même humidité se condense ailleurs dans l'espace.",
      ],
    ],
  },
  radiaal2250: {
    alt: {
      "/vernast/vent-radiaal.webp":
        "Vernast Turbo de 2 250 m³/h, souffle de manière ciblée sur les sols et la chape",
      "/products/dim-radiaal-ventilator.webp":
        "Dimensions du ventilateur radial Vernast : 54,5 × 51,5 × 49 cm, 20 kg",
      "/vernast/post/radiaal-specs.webp":
        "Caractéristiques du ventilateur radial Vernast Turboflow : 2 250 m³/h, étanche aux projections IP55, trois vitesses, prise supplémentaire",
      "/vernast/post/radiaal-afmetingen.webp": "Dimensions du Vernast Turboflow : 54,5 × 51,5 × 49 cm, 20 kg",
    },
    key: [
      ["Débit d'air", "2 250", "m³/h"],
      ["Vitesses", "3", ""],
      ["Protection", "IP55", ""],
    ],
    aboutTitle: "Axial ou radial, que choisir ?",
    about: [
      "Un <strong>ventilateur axial</strong> met toute une pièce en mouvement. Un <strong>ventilateur radial</strong> fait autre chose : il pousse l'air en un jet étroit et puissant à ras de la surface. Exactement ce qu'il vous faut pour les <strong>sols et la chape</strong>.",
      "Grâce à ce jet ciblé, l'appareil chasse la couche d'air saturé qui reste collée à un sol humide. Vous pouvez aussi l'orienter sous des meubles, contre une plinthe ou dans un coin, des endroits qu'un ventilateur axial n'atteint pas.",
      "Avec <strong>2 250 m³/h</strong>, trois vitesses et un <strong>boîtier étanche aux projections (IP55)</strong>, c'est l'appareil que nous ajoutons d'office pour le séchage de chape et après des dégâts des eaux. Combinez-le avec un déshumidificateur : le ventilateur libère l'humidité, le déshumidificateur la retire de l'air.",
    ],
    bullets: [
      ["Jet d'air ciblé", "Souffle à ras des sols et de la chape au lieu de traverser la pièce."],
      ["Atteint ce que vous ne pouvez pas atteindre", "Sous les meubles, contre les plinthes et dans les coins, grâce au cadre inclinable."],
      ["Étanche aux projections (IP55)", "Continue de tourner en sécurité sur un sol mouillé après des dégâts des eaux."],
      ["Raccordable en série", "Prise supplémentaire sur l'appareil pour pouvoir relier plusieurs unités."],
    ],
    specs: [
      ["Type", "Ventilateur de chantier radial"],
      ["Débit d'air", "2 250 m³/h"],
      ["Vitesses", "3"],
      ["Puissance absorbée", "max. 1,2 kW"],
      ["Indice de protection", "IP55"],
      ["Tension d'alimentation", "230 V / 50 Hz"],
      ["Prise de raccordement en série", "oui, 6 A"],
      ["Boîtier", "plastique, empilable"],
      ["Orientable", "oui, plusieurs angles de soufflage"],
      ["Dimensions (l × p × h)", "env. 54,5 × 51,5 × 49 cm"],
      ["Poids", "env. 15 kg"],
      ["Application", "séchage de sols et de chape, dégâts des eaux"],
    ],
    faq: [
      [
        "Quand choisir un radial plutôt qu'un axial ?",
        "Si l'humidité se trouve dans le sol ou la chape, le radial est le meilleur choix : le jet d'air passe à ras de la surface. S'il s'agit de toute une pièce ou des murs, un ventilateur axial convient mieux. En cas de dégâts des eaux, nous combinons souvent les deux.",
      ],
      [
        "Combien d'appareils me faut-il ?",
        "À titre indicatif, un ventilateur radial par zone humide ou par pièce. Pour un étage complet après des dégâts des eaux, nous en plaçons généralement deux ou trois, complétés par un déshumidificateur.",
      ],
      [
        "Peut-il être posé sur un sol mouillé ?",
        "Oui, le boîtier est étanche aux projections (IP55). Posez toutefois l'appareil sur une surface plane et jamais dans de l'eau stagnante.",
      ],
    ],
  },
  revolution: {
    alt: {
      "/vernast/luchtkussen-wand-overzicht.webp": "Déshumidificateur à adsorption relié au film couvrant un mur humide",
      "/vernast/luchtkussen-wand-detail.webp": "Détail de la gaine sous le film mural avec ouverture de sortie",
      "/vernast/luchtkussen-vloer.webp": "Déshumidificateur envoyant de l’air sec sous un film sur un sol humide",

      "/vernast/eco-revolution.webp":
        "Vernast Revolution, déshumidificateur à adsorption rouge avec raccords de gaines pour un séchage localisé",
    },
    key: [
      ["Technique", "Adsorption", ""],
      ["Séchage", "via des gaines", ""],
      ["Espaces froids", "oui", ""],
    ],
    aboutTitle: "Quand choisir ce déshumidificateur à adsorption ?",
    about: [
      "Un déshumidificateur à condensation sèche l'air d'une pièce. Ce <strong>déshumidificateur à adsorption</strong> fait l'inverse : il souffle de l'air sec via des <strong>gaines</strong> exactement là où se trouve l'humidité, sous un plancher flottant, dans une cloison ou dans une construction isolée.",
      "Vous séchez ainsi de manière <strong>ciblée</strong> plutôt que toute la pièce, ce qui, après des dégâts des eaux, fait souvent la différence entre démolir et sécher. L'adsorption continue en outre à fonctionner à des <strong>températures plus basses</strong>, là où un déshumidificateur à condensation perd du rendement.",
      "Vous doutez que ce soit le bon appareil pour votre situation ? Appelez-nous, c'est par excellence un appareil que nous préférons évaluer d'abord avec vous.",
    ],
    bullets: [
      ["Sèche de manière ciblée via des gaines", "Sous les sols, dans les cloisons et aux endroits difficiles d'accès."],
      ["Fonctionne aussi à basse température", "Contrairement à la condensation, l'adsorption perd peu de rendement dans le froid."],
      ["Évite de démolir", "Souvent le moyen de sauver un plancher flottant après des dégâts des eaux."],
      ["Conseil préalable", "Nous examinons ensemble si votre construction s'y prête."],
    ],
    specs: [
      ["Type", "Déshumidificateur à adsorption"],
      ["Fonctionnement", "air sec via des gaines vers la zone humide"],
      ["Puissance absorbée (20 °C / 60 % HR)", "0,42 kW"],
      ["Puissance de raccordement", "0,55 kW"],
      ["Tension d'alimentation", "230 V / 50 Hz"],
      ["Application", "structure de sol, cloisons, isolation, espaces froids"],
    ],
    faq: [
      [
        "Quelle est la différence avec un déshumidificateur de chantier ordinaire ?",
        "Un déshumidificateur à condensation sèche l'air de la pièce ; cet appareil souffle de l'air sec via des gaines directement dans la construction. Si l'humidité se trouve sous un sol ou dans une cloison, un déshumidificateur ordinaire ne l'atteint pas.",
      ],
      [
        "Quand est-ce le bon choix ?",
        "Surtout après des dégâts des eaux où l'eau s'est infiltrée sous un plancher flottant ou dans l'isolation. Également dans les espaces non chauffés, où un déshumidificateur à condensation perd du rendement.",
      ],
    ],
  },
};

const product_cache = new Map<string, Product>();

/**
 * Een toestel in de taal van de pagina. Neemt een sleutel of een product uit
 * `PRODUCTS`; voor `nl` (of een onbekend toestel) komt het origineel terug.
 *
 * Prijs, foto's en hun volgorde blijven die van `PRODUCTS`: alleen de tekst
 * verschilt. Ontbreekt een Franse alt voor een nieuw portaalbeeld, dan
 * beschrijft `altVoorBeeldInTaal` het aan de hand van de bestandsnaam.
 */
export function productInTaal(keyOfProduct: string | Product, taal: Taal): Product {
  const key =
    typeof keyOfProduct === "string"
      ? keyOfProduct
      : (Object.keys(PRODUCTS).find((k) => PRODUCTS[k] === keyOfProduct) ?? "");
  const nl = typeof keyOfProduct === "string" ? PRODUCTS[keyOfProduct] : keyOfProduct;
  if (taal === "nl" || !nl) return nl;
  const fr = taal === "fr" ? PRODUCT_FR[key] : taal === "en" ? PRODUCT_EN[key] : undefined;
  if (!fr) return nl;
  const gedeeld = taal === "fr" ? GEDEELDE_ALT_FR : GEDEELDE_ALT_EN;

  const bewaard = product_cache.get(`${taal}:${key}`);
  if (bewaard) return bewaard;

  const name = vertaalPortaal(nl.name, taal);
  // Een beeld zonder omschrijving in deze taal krijgt er een uit zijn
  // bestandsnaam, of anders de toestelnaam: nooit de Nederlandse alt.
  const alt = (src: string) => fr.alt[src] ?? gedeeld[src] ?? altVoorBeeldInTaal(src, name, taal);
  const uit: Product = {
    ...nl,
    name,
    type: vertaalPortaal(nl.type, taal),
    badge: vertaalPortaal(nl.badge, taal),
    sum: vertaalPortaal(nl.sum, taal),
    imgAlt: nl.img.map((src) => alt(src)),
    posts: nl.posts.map(([src]): [string, string] => [src, alt(src)]),
    key: fr.key,
    aboutTitle: fr.aboutTitle,
    about: fr.about,
    bullets: fr.bullets,
    specs: fr.specs,
    faq: fr.faq,
  };
  product_cache.set(`${taal}:${key}`, uit);
  return uit;
}

/** `PRODUCTS` in de taal van de pagina, voor wie over alle toestellen loopt. */
export function productsInTaal(taal: Taal): Record<string, Product> {
  if (taal === "nl") return PRODUCTS;
  return Object.fromEntries(Object.keys(PRODUCTS).map((k) => [k, productInTaal(k, taal)]));
}

/**
 * `toestelChips` in de taal van de pagina: ["70 litres par jour",
 * "jusqu'à 400 m³", "1,1 kW"]. Leest de Nederlandse labels om te weten welk
 * cijfer wat is, en de Franse voor de woorden.
 */
export function toestelChipsInTaal(keyOfProduct: string | Product, taal: Taal, aantal = 3): string[] {
  const key =
    typeof keyOfProduct === "string"
      ? keyOfProduct
      : (Object.keys(PRODUCTS).find((k) => PRODUCTS[k] === keyOfProduct) ?? "");
  const nl = PRODUCTS[key] ?? (typeof keyOfProduct === "string" ? undefined : keyOfProduct);
  if (!nl) return [];
  const fr = taal === "fr" ? PRODUCT_FR[key] : taal === "en" ? PRODUCT_EN[key] : undefined;
  return nl.key.slice(0, aantal).map(([nlNaam, value, unit], i) => {
    if (!fr) {
      if (nlNaam === "Vochtafvoer") return `${value} liter per dag`;
      if (nlNaam === "Bereik") return `tot ${value} m³`;
      if (unit) return `${value} ${unit}`;
      if (/^\d/.test(value)) return `${value} ${nlNaam.toLowerCase()}`;
      return value === "ja" ? nlNaam.toLowerCase() : value;
    }
    const [frNaam, frWaarde, frEenheid] = fr.key[i] ?? [nlNaam, value, unit];
    if (taal === "en") {
      if (nlNaam === "Vochtafvoer") return `${value} litres a day`;
      if (nlNaam === "Bereik") return `up to ${value} m³`;
      if (frEenheid) return `${frWaarde} ${frEenheid}`;
      if (/^\d/.test(frWaarde)) return `${frWaarde} ${frNaam.toLowerCase()}`; // "3 speeds"
      return frWaarde === "yes" ? frNaam.toLowerCase() : frWaarde;
    }
    if (nlNaam === "Vochtafvoer") return `${value} litres par jour`;
    if (nlNaam === "Bereik") return `jusqu'à ${value} m³`;
    if (frEenheid) return `${frWaarde} ${frEenheid}`;
    if (/^\d/.test(frWaarde)) return `${frWaarde} ${frNaam.toLowerCase()}`; // "3 vitesses"
    return frWaarde === "oui" ? frNaam.toLowerCase() : frWaarde;
  });
}

/**
 * De paginatitel van een toestelpagina in het Frans — de tegenhanger van
 * `toestelTitel` (lib/toestelTitel.ts), met dezelfde grens van 60 tekens.
 * `naam` is `toestelLabelIn(key, "fr")` uit `navigation.ts`; `dagprijs` is de getoonde tekst ("14,52 €"), zodat de titel dezelfde
 * btw-weergave volgt als de pagina.
 */
export function toestelTitelFr(naam: string, dagprijs?: string): string {
  // "Location déshumidificateur Performance": het soortwoord is hier geen begin van een zin.
  const klein = naam.charAt(0).toLowerCase() + naam.slice(1);
  const bouw = (prijs?: string) => `Location ${klein}${prijs ? ` - ${prijs}/jour` : ""} | Vernast`;
  const met = dagprijs ? bouw(dagprijs) : "";
  return met && met.length <= 60 ? met : bouw();
}

/* ============================================================
   Alt-teksten voor beelden waarvan alleen het pad bekend is
   ============================================================ */

const BEKENDE_BEELDEN_FR: [RegExp, string][] = [
  [/lineup-dryers/, "Les trois déshumidificateurs de chantier éco Vernast côte à côte : Boost, Performance et Ultimate"],
  [/teddh-30|kachel-30/, "Chauffage de chantier électrique Vernast Heatpower 30, 30 kW avec thermostat intégré"],
  [/teddh-20|kachel-20/, "Chauffage de chantier électrique Vernast Heatboost 20, 20 kW avec thermostat"],
  [/ttv-4500|vent-axiaal/, "Vernast Turbo Highflow, ventilateur de chantier avec un débit de 4 500 m³/h"],
  [/dim-radiaal-ventilator/, "Dimensions du ventilateur radial Vernast : 54,5 × 51,5 × 49 cm, 20 kg"],
  [/vent-radiaal|radiaal/, "Vernast Turbo, 2 250 m³/h, souffle de manière ciblée sur les sols et la chape"],
  [/ttk-170|eco-boost/, "Vernast Boost (TTK 170 S), déshumidificateur à condensation de 50 litres par jour"],
  [/ttk-350|eco-performance/, "Vernast Performance (TTK 350 S), déshumidificateur à condensation de 70 litres par jour"],
  [/ttk-650|eco-ultimate/, "Vernast Ultimate (TTK 650 S), déshumidificateur à condensation de 110 litres par jour"],
  [/eco-revolution|revolution/, "Vernast Revolution, déshumidificateur à adsorption rouge avec raccords de gaines pour un séchage ciblé"],
];

/** `altVoorBeeld` (lib/altTekst.ts) in de taal van de pagina. */
export function altVoorBeeldInTaal(src: string, context: string, taal: Taal): string {
  if (taal !== "fr" && taal !== "en") return altVoorBeeld(src, context);
  const bestand = src.split("/").pop()?.toLowerCase() ?? "";
  const hit = (taal === "fr" ? BEKENDE_BEELDEN_FR : BEKENDE_BEELDEN_EN).find(([patroon]) => patroon.test(bestand));
  return hit ? hit[1] : context;
}

/* ============================================================
   Pakketpagina en boekingsflow
   ============================================================ */

/** `CAT` met vertaalde naam en ondertitel; prijzen en capaciteit ongewijzigd. */
export function catInTaal(taal: Taal): Record<DeviceKey, Device> {
  if (taal === "nl") return CAT;
  return Object.fromEntries(
    Object.entries(CAT).map(([k, d]) => [
      k,
      { ...d, name: vertaalPortaal(d.name, taal), sub: vertaalPortaal(d.sub, taal) },
    ]),
  ) as Record<DeviceKey, Device>;
}

const ROLE_FR: typeof ROLE = {
  small: {
    tag: "Capacité",
    txt: "Le déshumidificateur Boost extrait jusqu'à 50 litres d'humidité par 24 heures. Compact, mobile et assez silencieux pour rester en place pendant les travaux. C'est la capacité de base de votre pack : sans assez de litres par jour, le séchage traîne.",
  },
  medium: {
    tag: "Capacité supplémentaire",
    txt: "Le déshumidificateur Performance retire jusqu'à 70 litres par 24 heures de l'air. Nous ajoutons cet appareil dès que le volume ou la charge d'humidité augmente, par exemple avec une chape plus épaisse ou une habitation complète en une fois.",
  },
  axiaal: {
    tag: "Circulation",
    txt: "Chaque ventilateur axial déplace 4 500 m³ d'air par heure. Contre un mur ou une chape humide se forme une fine couche d'air saturé, et le séchage s'y arrête. Les ventilateurs brisent cette couche pour que de l'air sec soit toujours en contact avec la surface humide.",
  },
  kachel: {
    tag: "Température",
    txt: "Le chauffage électrique de 3,30 kW amène la pièce à la température de fonctionnement. Sous 15 °C, l'air n'absorbe presque pas d'humidité et la maçonnerie libère son eau lentement ; avec de la chaleur, le déshumidificateur retrouve sa pleine capacité.",
  },
};

export function roleInTaal(taal: Taal): typeof ROLE {
  return taal === "fr" ? ROLE_FR : taal === "en" ? ROLE_EN : ROLE;
}

const SPECS_FR: SpecSheet[] = [
  {
    k: "small",
    tab: "Déshumidificateur Boost",
    h: "Compact, silencieux et toujours opérationnel",
    p: [
      "Avec une capacité de déshumidification jusqu'à <b>50 litres par 24 heures</b>, ce déshumidificateur de chantier retire l'humidité d'espaces jusqu'à environ 250 m³. Mobile, compact et assez silencieux pour rester en place pendant les travaux.",
      "L'appareil fonctionne de manière <b>entièrement automatique</b> : l'hygrostat intégré le met au ralenti dès que l'humidité visée est atteinte. Nous raccordons d'office un tuyau de condensat, vous n'avez donc pas d'eau à vider.",
    ],
    h4: "Automatique, économe et sans entretien",
    g: [
      [
        "Déshumidification",
        [
          ["Capacité max. [l/24 h]", "50"],
          ["Plage de fonctionnement [°C]", "5 – 32"],
          ["Plage de fonctionnement [% HR]", "30 – 90"],
        ],
      ],
      ["Débit d'air", [["Niveau max. [m³/h]", "300"]]],
      [
        "Valeurs électriques",
        [
          ["Raccordement au réseau", "230 V / 50 Hz"],
          ["Puissance absorbée [kW]", "0,75"],
          ["Fiche", "CEE 7/7"],
        ],
      ],
      [
        "Dimensions",
        [
          ["l × p × h [cm]", "43 × 43 × 65"],
          ["Poids [kg]", "32"],
          ["Réservoir d'eau", "avec évacuation continue"],
        ],
      ],
    ],
  },
  {
    k: "medium",
    tab: "Déshumidificateur Performance",
    h: "Puissant face à une charge d'humidité plus élevée",
    p: [
      "Ce déshumidificateur de chantier extrait jusqu'à <b>70 litres par 24 heures</b> et couvre des volumes jusqu'à environ 400 m³. Nous ajoutons l'appareil dès que la charge d'humidité augmente : chape plus épaisse, habitation complète ou délai plus court.",
      "Malgré sa puissance plus élevée, le niveau sonore reste assez bas pour des espaces habités, et le <b>fonctionnement automatique</b> signifie que vous pouvez simplement laisser l'appareil tourner.",
    ],
    h4: "Plus de capacité, la même simplicité",
    g: [
      [
        "Déshumidification",
        [
          ["Capacité max. [l/24 h]", "70"],
          ["Plage de fonctionnement [°C]", "5 – 32"],
          ["Plage de fonctionnement [% HR]", "30 – 90"],
        ],
      ],
      ["Débit d'air", [["Niveau max. [m³/h]", "550"]]],
      [
        "Valeurs électriques",
        [
          ["Raccordement au réseau", "230 V / 50 Hz"],
          ["Puissance absorbée [kW]", "1,1"],
          ["Fiche", "CEE 7/7"],
        ],
      ],
      [
        "Dimensions",
        [
          ["l × p × h [cm]", "50 × 50 × 87"],
          ["Poids [kg]", "50"],
          ["Réservoir d'eau", "avec évacuation continue"],
        ],
      ],
    ],
  },
  {
    k: "axiaal",
    tab: "Ventilateurs axiaux",
    h: "Une ventilation robuste",
    p: [
      "Avec un débit d'air jusqu'à <b>4 500 m³/h</b>, ce ventilateur axial est idéal pour accélérer le séchage ou faire circuler de l'air frais. Compact mais solidement construit, vous le placez sans effort là où la ventilation fait la différence.",
      "Ce ventilateur fonctionne sur une <b>prise 230 V</b> ordinaire, est <b>étanche aux projections (IP55)</b> et ne consomme que <b>0,25 kW</b>. Avec <b>3 vitesses</b> et une vitesse d'air jusqu'à <b>39,6 km/h</b>, il est prêt pour toutes les situations, à l'intérieur comme à l'extérieur.",
    ],
    h4: "Silencieux, économe et polyvalent",
    g: [
      ["Débit d'air", [["Niveau max., soufflage libre [m³/h]", "5 300"]]],
      ["Pression d'air", [["Niveau max. [Pa]", "80"]]],
      ["Ventilateur", [["Vitesses", "3"]]],
      [
        "Vitesse de sortie d'air",
        [
          ["m/s", "11"],
          ["km/h", "39,6"],
        ],
      ],
      [
        "Valeurs électriques",
        [
          ["Raccordement au réseau", "230 V / 50 Hz"],
          ["Courant nominal [A]", "1,1"],
          ["Puissance absorbée [kW]", "0,25"],
          ["fusible recommandé [A]", "10"],
        ],
      ],
      ["Raccordement électrique", [["Fiche", "CEE 7/7"]]],
    ],
  },
  {
    k: "radiaal",
    tab: "Ventilateurs radiaux",
    h: "Séchage ciblé de la chape et des sols",
    p: [
      "Le ventilateur radial souffle un <b>jet étroit et puissant</b> juste au-dessus du sol. Vous atteignez ainsi le dessous de la chape, l'arrière des plinthes et les coins qu'un ventilateur axial n'atteint pas, précisément là où l'humidité reste le plus longtemps.",
      "Avec <b>2 250 m³/h</b>, trois vitesses et une <b>prise supplémentaire</b> pour le raccordement en série, c'est l'appareil que nous ajoutons d'office pour la chape et après des dégâts des eaux.",
    ],
    h4: "Parfait pour les espaces fermés et la chape",
    g: [
      ["Débit d'air", [["Niveau max. [m³/h]", "2 250"]]],
      [
        "Ventilateur",
        [
          ["Vitesses", "3"],
          ["Prise supplémentaire", "oui, en série"],
        ],
      ],
      [
        "Valeurs électriques",
        [
          ["Raccordement au réseau", "230 V / 50 Hz"],
          ["Puissance absorbée [kW]", "0,50"],
          ["Indice de protection", "IP55"],
        ],
      ],
      [
        "Dimensions",
        [
          ["l × p × h [cm]", "48 × 39 × 45"],
          ["Poids [kg]", "15"],
          ["Empilable", "oui"],
        ],
      ],
    ],
  },
  {
    k: "kachel",
    tab: "Chauffage électrique 3,30 kW",
    h: "Idéal pour un chauffage temporaire",
    p: [
      "Le séchage dépend de la température : sous <b>15 °C</b>, l'air n'absorbe presque pas d'humidité et la maçonnerie libère son eau lentement. Ce chauffage amène la pièce à température de fonctionnement pour que les déshumidificateurs travaillent de nouveau à pleine capacité.",
      "Le <b>thermostat intégré</b> maintient automatiquement la température souhaitée, le ventilateur répartit la chaleur de manière homogène et la <b>protection contre la surchauffe</b> permet une utilisation sans surveillance.",
    ],
    h4: "Thermostat intégré et chaleur directe",
    g: [
      [
        "Chauffage",
        [
          ["Puissance de chauffe [kW]", "3,30"],
          ["Positions", "2 + ventilation"],
          ["Thermostat", "intégré, réglable"],
        ],
      ],
      ["Débit d'air", [["Niveau max. [m³/h]", "300"]]],
      [
        "Valeurs électriques",
        [
          ["Raccordement au réseau", "230 V / 50 Hz"],
          ["Courant nominal [A]", "14,3"],
          ["fusible recommandé [A]", "16"],
        ],
      ],
      [
        "Sécurité",
        [
          ["Protection", "protection contre la surchauffe"],
          ["Boîtier", "acier, revêtement poudre"],
          ["Poids [kg]", "10"],
        ],
      ],
    ],
  },
];

export function specsInTaal(taal: Taal): SpecSheet[] {
  return taal === "fr" ? SPECS_FR : taal === "en" ? SPECS_EN : SPECS;
}

/** `COVER` met vertaalde teksten; `k` en `price` ongewijzigd. */
export function coverInTaal(taal: Taal): CoverTier[] {
  if (taal === "nl") return COVER;
  const v = (t: string) => vertaalPortaal(t, taal);
  return COVER.map((c) => ({
    ...c,
    name: v(c.name),
    badge: v(c.badge),
    sub: v(c.sub),
    inc: c.inc.map(v),
    off: c.off.map(v),
  }));
}

/** `EXTRAS` met vertaalde teksten; `k`, `price` en `perWeek` ongewijzigd. */
export function extrasInTaal(taal: Taal): Extra[] {
  if (taal === "nl") return EXTRAS;
  const v = (t: string) => vertaalPortaal(t, taal);
  return EXTRAS.map((x) => ({ ...x, name: v(x.name), sub: v(x.sub), unit: v(x.unit) }));
}

const PUMP_FR = {
  name: "Pompe à condensats par déshumidificateur",
  sub: "Plus de réservoir ni de bac à vider : la pompe évacue l'eau de condensation directement et automatiquement, même vers une évacuation située plus haut. C'est de l'eau de condensation pure, elle peut aller simplement à l'égout.",
};

/** `PUMP` met vertaalde naam en uitleg; de prijs blijft die uit het portaal. */
export function pumpInTaal(taal: Taal): typeof PUMP {
  if (taal === "fr") return { ...PUMP, ...PUMP_FR };
  if (taal === "en") return { ...PUMP, ...PUMP_EN };
  return PUMP;
}

const DELIVERY_FR: Record<string, { name: string; sub: string; tag: string }> = {
  lever: {
    name: "Livraison & installation",
    sub: "Nous apportons tout sous 24 h, nous l'installons et réglons la valeur cible. Reprise après la période de location comprise.",
    tag: "Inclus",
  },
};

export function deliveryInTaal(taal: Taal): typeof DELIVERY {
  if (taal === "nl") return DELIVERY;
  const tekst = taal === "fr" ? DELIVERY_FR : DELIVERY_EN;
  return DELIVERY.map((d) => ({ ...d, ...(tekst[d.k] ?? {}) }));
}

const SC_LABEL_FR: Record<string, string> = {
  nieuwbouw: "nouvelle construction",
  waterschade: "dégâts des eaux",
  renovatie: "rénovation",
  kelder: "cave ou espace froid",
};

export function scLabelInTaal(taal: Taal): Record<string, string> {
  return taal === "fr" ? SC_LABEL_FR : taal === "en" ? SC_LABEL_EN : SC_LABEL;
}

const DEVICE_LABEL_FR: Record<DeviceKey, string> = {
  small: "Déshumidificateur Small",
  medium: "Déshumidificateur Medium",
  axiaal: "Ventilateur axial",
  kachel: "Chauffage électrique",
};

/** `DEVICE_LABEL` (lib/verhuur.ts) in de taal van de pagina. */
export function deviceLabelInTaal(taal: Taal): Record<DeviceKey, string> {
  return taal === "fr" ? DEVICE_LABEL_FR : taal === "en" ? DEVICE_LABEL_EN : DEVICE_LABEL;
}

/** `deviceLineLabel` (lib/verhuur.ts) in de taal van de pagina: "2× Boost". */
export function deviceLineLabelInTaal(line: DeviceLine, taal: Taal): string {
  const product = line.product_key ? PRODUCTS[line.product_key] : undefined;
  const name = line.product_key
    ? (product?.short ?? (product ? vertaalPortaal(product.name, taal) : line.product_key))
    : (deviceLabelInTaal(taal)[line.device_key as DeviceKey] ?? line.device_key ?? "");
  return `${line.qty}× ${name}`;
}

/**
 * `packageSpecLine` (lib/verhuur.ts) in de taal van de pagina:
 * "Habitation jusqu'à 180 m² · chape 6 cm · chauffage compris".
 */
export function packageSpecLineInTaal(c: PackageConfig, taal: Taal): string {
  if (taal === "en") {
    const bits = [`Home up to ${c.size} m²`, ...dikteEn(c)];
    bits.push(c.heat ? "heating included" : "heating excluded");
    return bits.join(" · ");
  }
  if (taal !== "fr") {
    const bits = [`Woning tot ${c.size} m²`, ...dikteNl(c)];
    bits.push(c.heat ? "inclusief verwarming" : "exclusief verwarming");
    return bits.join(" · ");
  }
  const bits = [`Habitation jusqu'à ${c.size} m²`, ...dikteFr(c)];
  bits.push(c.heat ? "chauffage compris" : "sans chauffage");
  return bits.join(" · ");
}

function dikteNl(c: PackageConfig): string[] {
  if (isWaterDamage(c)) return ["waterschade"];
  if (c.wat === "chape") return [`chapedikte ${c.cd} cm`];
  if (c.wat === "pleister") return [`pleisterdikte ${c.pd} cm`];
  return ["pleisterwerk + chape"];
}

function dikteEn(c: PackageConfig): string[] {
  if (isWaterDamage(c)) return ["water damage"];
  if (c.wat === "chape") return [`screed thickness ${c.cd} cm`];
  if (c.wat === "pleister") return [`plaster thickness ${c.pd} cm`];
  return ["plaster + screed"];
}

function dikteFr(c: PackageConfig): string[] {
  if (isWaterDamage(c)) return ["dégâts des eaux"];
  if (c.wat === "chape") return [`épaisseur de chape ${c.cd} cm`];
  if (c.wat === "pleister") return [`épaisseur de plafonnage ${c.pd} cm`];
  return ["plafonnage + chape"];
}

/** `packageGalleryAlts` (lib/verhuur.ts) in de taal van de pagina. */
export function packageGalleryAltsInTaal(
  c: PackageConfig,
  items: PackageItem[],
  gallery: string[],
  taal: Taal,
): string[] {
  const cat = catInTaal(taal);
  const samenstelling = items
    .filter((it) => it.q > 0)
    .map((it) => `${it.q}× ${cat[it.k].name}`)
    .join(", ");
  if (taal === "en") {
    const pakket = `Drying package for ${WERK_EN[c.wat] ?? c.wat}, ${packageSpecLineInTaal(c, taal).toLowerCase()}`;
    return gallery.map((src, i) =>
      i === 0
        ? `Composition of your drying package: ${samenstelling || pakket}`
        : altVoorBeeldInTaal(src, `${pakket}, photo ${i + 1}`, taal),
    );
  }
  if (taal !== "fr") {
    const werk: Record<string, string> = {
      pleister: "pleisterwerk",
      chape: "chape",
      beide: "pleisterwerk en chape",
      waterschade: "waterschade",
    };
    const pakket = `Droogpakket voor ${werk[c.wat] ?? c.wat}, ${packageSpecLineInTaal(c, taal).toLowerCase()}`;
    return gallery.map((src, i) =>
      i === 0
        ? `Samenstelling van uw droogpakket: ${samenstelling || pakket}`
        : altVoorBeeld(src, `${pakket}, foto ${i + 1}`),
    );
  }
  const werk: Record<string, string> = {
    pleister: "le plafonnage",
    chape: "la chape",
    beide: "le plafonnage et la chape",
    waterschade: "les dégâts des eaux",
  };
  const pakket = `Pack de séchage pour ${werk[c.wat] ?? c.wat}, ${packageSpecLineInTaal(c, taal).toLowerCase()}`;
  return gallery.map((src, i) =>
    i === 0
      ? `Composition de votre pack de séchage : ${samenstelling || pakket}`
      : altVoorBeeldInTaal(src, `${pakket}, photo ${i + 1}`, taal),
  );
}
