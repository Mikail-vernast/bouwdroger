/**
 * Verhuurplatform — data uit de Claude Design handoff
 * (design_handoff_vernast_verhuur). De prijzen zijn afgeleid van één
 * klantvoorbeeld (€ 616 voor "Gebouw kleiner dan 180 m2 incl. verwarming,
 * 2 weken"); zodra de echte tarieflijst er is, hoeft enkel dit bestand mee.
 */

import { TARIEVEN } from "./tarieven.js";

export type DeviceKey = "small" | "medium" | "axiaal" | "kachel";

export interface Device {
  name: string;
  sub: string;
  img: string;
  /** huurprijs per toestel per 2 weken, in euro */
  w2: number;
  /** vochtafvoer in liter per 24 u */
  cap: number;
  /** luchtverzet in m³/u */
  air: number;
}

/**
 * De verkoopcatalogus komt uit het portaal (tab Pakketten). Vroeger stond ze
 * hier als letterlijke lijst; prijzen aanpassen vroeg toen een codewijziging.
 */
export const CAT: Record<DeviceKey, Device> = Object.fromEntries(
  Object.entries(TARIEVEN.devices).map(([key, d]) => [
    key,
    { name: d.name, sub: d.sub, img: d.img, w2: Number(d.w2), cap: Number(d.cap), air: Number(d.air) },
  ])
) as Record<DeviceKey, Device>;

export interface Bracket {
  small: number;
  medium: number;
  axiaal: number;
  kachel: number;
  /**
   * Verwachte droogtijd in dagen. Stond eerder als `size >= 180 ? 16 : 12` in
   * `dryingDays()`, waardoor het 180-pakket 16 dagen beloofde terwijl de
   * huurperiode vast op 14 staat — de pagina sprak zichzelf tegen en de
   * boekingswizard waarschuwde er ook nog eens over.
   *
   * Per bracket in de data omdat het een verkoopcijfer is, geen rekenregel: het
   * hoort bewerkbaar te zijn zonder dat er iemand aan een `if` moet komen.
   */
  dry: number;
  img: string;
}

/** Aantal toestellen per oppervlaktebracket — komt overeen met de pakketfoto's. */
export const BRACKET: Record<string, Bracket> = Object.fromEntries(
  Object.entries(TARIEVEN.packages).map(([size, p]) => [
    size,
    {
      small: Number(p.small),
      medium: Number(p.medium),
      axiaal: Number(p.axiaal),
      kachel: Number(p.kachel),
      dry: Number(p.dry),
      img: p.img,
    },
  ])
);

export const WET_IMG = "/verhuur/pkg-9.jpg";

/** Langer huren is goedkoper per week. */
export const WEEKS: Record<number, number> = {
  1: Number(TARIEVEN.pricing.weeks_multiplier_1),
  2: Number(TARIEVEN.pricing.weeks_multiplier_2),
  3: Number(TARIEVEN.pricing.weeks_multiplier_3),
  4: Number(TARIEVEN.pricing.weeks_multiplier_4),
};

export const ROLE: Record<DeviceKey, { tag: string; txt: string }> = {
  small: {
    tag: "Capaciteit",
    txt: "De Small Bouwdroger onttrekt tot 50 liter vocht per 24 uur. Compact, verrijdbaar en stil genoeg om te blijven staan terwijl er gewerkt wordt. Dit is de basiscapaciteit van uw pakket: zonder voldoende liters per dag sleept de droging aan.",
  },
  medium: {
    tag: "Extra capaciteit",
    txt: "De Medium Bouwdroger haalt tot 80 liter per 24 uur uit de lucht. Wij zetten dit toestel bij zodra het volume of de vochtbelasting oploopt, bijvoorbeeld bij dikkere chape of een volledige woning in één keer.",
  },
  axiaal: {
    tag: "Circulatie",
    txt: "Elke axiaalventilator verplaatst 5 300 m³ lucht per uur. Tegen een natte muur of chape vormt zich een dun laagje verzadigde lucht, daar stopt de droging. De ventilatoren doorbreken dat laagje zodat er telkens droge lucht in contact komt met het natte oppervlak.",
  },
  kachel: {
    tag: "Temperatuur",
    txt: "De elektrische kachel van 3,30 kW brengt de ruimte op werkingstemperatuur. Onder 15 °C neemt lucht nauwelijks vocht op en geeft de bouwmassa haar water traag af, met warmte erbij werkt de ontvochtiger weer op volle capaciteit.",
  },
};

/* ============================================================
   Technische fiches (tabs op de pakketpagina)
   ============================================================ */

export interface SpecSheet {
  k: string;
  tab: string;
  h: string;
  /** paragrafen, met <b> voor nadruk zoals in het design */
  p: string[];
  h4: string;
  /** [groepsnaam, [[label, waarde], ...]] */
  g: [string, [string, string][]][];
}

export const SPECS: SpecSheet[] = [
  {
    k: "small",
    tab: "Small Bouwdroger",
    h: "Compact, stil en altijd inzetbaar",
    p: [
      "Met een ontvochtigingscapaciteit tot <b>50 liter per 24 uur</b> haalt deze bouwdroger het vocht uit ruimtes tot ongeveer 250 m³. Verrijdbaar, compact en stil genoeg om te blijven staan terwijl er gewerkt wordt.",
      "Het toestel werkt <b>volledig automatisch</b>: de ingebouwde hygrostaat schakelt terug zodra de streefvochtigheid bereikt is. Wij sluiten standaard een condensslang aan zodat u geen water moet aftappen.",
    ],
    h4: "Automatisch, zuinig en onderhoudsvrij",
    g: [
      [
        "Ontvochtiging",
        [
          ["Capaciteit max. [l/24 u]", "50"],
          ["Werkbereik [°C]", "5 – 32"],
          ["Werkbereik [% RV]", "30 – 90"],
        ],
      ],
      ["Luchthoeveelheid", [["Niveau max. [m³/h]", "300"]]],
      [
        "Elektrische waarden",
        [
          ["Netaansluiting", "230 V / 50 Hz"],
          ["Opgenomen vermogen [kW]", "0,75"],
          ["Aansluitstekker", "CEE 7/7"],
        ],
      ],
      [
        "Afmetingen",
        [
          ["b × d × h [cm]", "43 × 43 × 65"],
          ["Gewicht [kg]", "27"],
          ["Waterreservoir", "met continu-afvoer"],
        ],
      ],
    ],
  },
  {
    k: "medium",
    tab: "Medium Bouwdroger",
    h: "Krachtig bij hogere vochtbelasting",
    p: [
      "Deze bouwdroger onttrekt tot <b>80 liter per 24 uur</b> en dekt volumes tot ongeveer 400 m³. Wij zetten het toestel bij zodra de vochtbelasting oploopt, dikkere chape, een volledige woning of een kortere deadline.",
      "Ondanks het hogere vermogen blijft het geluidsniveau laag genoeg voor bewoonde ruimtes, en de <b>automatische werking</b> betekent dat u het toestel gewoon kunt laten staan.",
    ],
    h4: "Meer capaciteit, dezelfde eenvoud",
    g: [
      [
        "Ontvochtiging",
        [
          ["Capaciteit max. [l/24 u]", "80"],
          ["Werkbereik [°C]", "5 – 32"],
          ["Werkbereik [% RV]", "30 – 90"],
        ],
      ],
      ["Luchthoeveelheid", [["Niveau max. [m³/h]", "550"]]],
      [
        "Elektrische waarden",
        [
          ["Netaansluiting", "230 V / 50 Hz"],
          ["Opgenomen vermogen [kW]", "1,1"],
          ["Aansluitstekker", "CEE 7/7"],
        ],
      ],
      [
        "Afmetingen",
        [
          ["b × d × h [cm]", "50 × 50 × 87"],
          ["Gewicht [kg]", "38"],
          ["Waterreservoir", "met continu-afvoer"],
        ],
      ],
    ],
  },
  {
    k: "axiaal",
    tab: "Axiaal Ventilatoren",
    h: "Robuuste ventilatiekracht",
    p: [
      "Met een luchtverplaatsing tot <b>5.300 m³/u</b> is deze axiaalventilator ideaal om droogprocessen te versnellen of frisse lucht te circuleren. Compact van formaat, maar stevig gebouwd, u zet hem moeiteloos neer waar ventilatie het verschil maakt.",
      "Deze ventilator draait op een gewone <b>230V-aansluiting</b>, is <b>spatwaterdicht (IP55)</b> en verbruikt slechts <b>0,25 kW</b>. Met <b>3 standen</b> en een luchtsnelheid tot <b>39,6 km/u</b> is hij klaar voor elke situatie, binnen én buiten.",
    ],
    h4: "Stil, zuinig en inzetbaar",
    g: [
      ["Luchthoeveelheid", [["Niveau max., vrij uitblazend [m³/h]", "5.300"]]],
      ["Luchtdruk", [["Niveau max. [Pa]", "80"]]],
      ["Ventilator", [["Ventilatorsnelheden", "3"]]],
      [
        "Luchtuitstroomsnelheid",
        [
          ["m/s", "11"],
          ["km/h", "39,6"],
        ],
      ],
      [
        "Elektrische waarden",
        [
          ["Netaansluiting", "230 V / 50 Hz"],
          ["Nominale stroomopname [A]", "1,1"],
          ["Opgenomen vermogen [kW]", "0,25"],
          ["aanbevolen afzekering [A]", "10"],
        ],
      ],
      ["Elektrische aansluiting", [["Aansluitstekker", "CEE 7/7"]]],
    ],
  },
  {
    k: "radiaal",
    tab: "Radiaal Ventilatoren",
    h: "Gericht drogen van chape en vloeren",
    p: [
      "De radiaalventilator blaast een <b>smalle, krachtige straal</b> net boven de vloer. Daarmee komt u onder chape, achter plinten en in hoeken waar een axiaalventilator niet bijraakt, precies waar het vocht het langst blijft zitten.",
      "Met <b>2.250 m³/u</b>, drie standen en een <b>extra stopcontact</b> voor doorvoer is dit het toestel dat wij standaard bijzetten bij chape en na waterschade.",
    ],
    h4: "Perfect voor gesloten ruimtes en chape",
    g: [
      ["Luchthoeveelheid", [["Niveau max. [m³/h]", "2.250"]]],
      [
        "Ventilator",
        [
          ["Ventilatorstanden", "3"],
          ["Extra stopcontact", "ja, doorvoer"],
        ],
      ],
      [
        "Elektrische waarden",
        [
          ["Netaansluiting", "230 V / 50 Hz"],
          ["Opgenomen vermogen [kW]", "0,50"],
          ["Beschermingsgraad", "IP55"],
        ],
      ],
      [
        "Afmetingen",
        [
          ["b × d × h [cm]", "48 × 39 × 45"],
          ["Gewicht [kg]", "11"],
          ["Stapelbaar", "ja"],
        ],
      ],
    ],
  },
  {
    k: "kachel",
    tab: "Elektrische kachel 3,30 kW",
    h: "Ideaal voor tijdelijke verwarming",
    p: [
      "Droging is temperatuurafhankelijk: onder <b>15 °C</b> neemt lucht nauwelijks vocht op en geeft de bouwmassa haar water traag af. Deze kachel brengt de ruimte op werkingstemperatuur zodat de bouwdrogers weer op volle capaciteit werken.",
      "De <b>ingebouwde thermostaat</b> houdt de gewenste temperatuur automatisch aan, de ventilator verspreidt de warmte gelijkmatig en de <b>overhittingsbeveiliging</b> maakt onbewaakt gebruik mogelijk.",
    ],
    h4: "Ingebouwde thermostaat en directe warmte",
    g: [
      [
        "Verwarming",
        [
          ["Verwarmingsvermogen [kW]", "3,30"],
          ["Standen", "2 + ventilatie"],
          ["Thermostaat", "ingebouwd, instelbaar"],
        ],
      ],
      ["Luchthoeveelheid", [["Niveau max. [m³/h]", "300"]]],
      [
        "Elektrische waarden",
        [
          ["Netaansluiting", "230 V / 50 Hz"],
          ["Nominale stroomopname [A]", "14,3"],
          ["aanbevolen afzekering [A]", "16"],
        ],
      ],
      [
        "Veiligheid",
        [
          ["Beveiliging", "overhittingsbeveiliging"],
          ["Behuizing", "staal, gepoedercoat"],
          ["Gewicht [kg]", "5,2"],
        ],
      ],
    ],
  },
];

/* ============================================================
   Boekingsflow
   ============================================================ */

export interface CoverTier {
  k: string;
  name: string;
  price: number;
  badge: string;
  sub: string;
  inc: string[];
  off: string[];
}

export const COVER: CoverTier[] = TARIEVEN.cover.map((c) => ({
  k: c.k,
  name: c.name,
  price: Number(c.price),
  badge: c.badge,
  sub: c.sub,
  inc: [...c.inc],
  off: [...c.off],
}));

export const PUMP = {
  price: Number(TARIEVEN.pricing.pump_price_per_day),
  name: "Condenspomp per bouwdroger",
  sub: "Geen reservoir of kuip legen: de pomp voert het condenswater rechtstreeks en automatisch af, ook naar een hoger gelegen afvoer. Het is zuiver condenswater en mag gewoon in de afvoer.",
};

/**
 * De huurperiode ligt vast op twee weken: die zit in de pakketprijs en bepaalt
 * ook de automatisch ingeplande ophaaldatum.
 */
export const FIXED_WEEKS = Number(TARIEVEN.pricing.fixed_weeks);

/** Eenmalig draagwerk wanneer de toestellen via een ladder naar boven moeten. */
export const LADDER_FEE = Number(TARIEVEN.pricing.ladder_fee);

/** Hoogste verdieping die het formulier laat kiezen. */
export const MAX_FLOORS = Number(TARIEVEN.pricing.max_floors);

export interface Extra {
  k: string;
  name: string;
  sub: string;
  price: number;
  unit: string;
  perWeek?: boolean;
}

export const EXTRAS: Extra[] = TARIEVEN.extras.map((x) => ({
  k: x.k,
  name: x.name,
  sub: x.sub,
  price: Number(x.price),
  unit: x.unit,
  perWeek: x.perWeek,
}));

/**
 * Pakketten worden altijd geleverd en geplaatst — zelf afhalen kan enkel bij
 * losse toestellen, en loopt via /afhalen.
 */
export const DELIVERY = [
  {
    k: "lever",
    name: "Laten leveren & installeren",
    sub: "Wij brengen alles binnen 24 u, plaatsen het en stellen de streefwaarde in. Ophaling na de huurperiode inbegrepen.",
    price: 0,
    tag: "Inbegrepen",
  },
];

/* ============================================================
   Productpagina's (per toestel)
   ============================================================ */

export interface Product {
  name: string;
  short: string;
  type: string;
  badge: string;
  /** dagprijs in euro */
  day: number;
  img: string[];
  sum: string;
  /** [label, waarde, eenheid] */
  key: [string, string, string][];
  aboutTitle: string;
  /** paragrafen, met <strong> voor nadruk zoals in het design */
  about: string[];
  bullets: [string, string][];
  specs: [string, string][];
  faq: [string, string][];
}

export const PRODUCTS: Record<string, Product> = {
  ttk170: {
    name: "Ontvochtiger TTK 170 S",
    short: "TTK 170 S",
    type: "Condensontvochtiger",
    badge: "Kleine ruimtes",
    day: 18,
    img: ["/vernast/eco-boost.webp", "/vernast/lineup-dryers.webp"],
    sum: "Compacte, verrijdbare condensontvochtiger. De juiste keuze voor één kamer, een appartement of een kleinere renovatie.",
    key: [
      ["Vochtafvoer", "50", "L/dag"],
      ["Bereik", "250", "m³"],
      ["Verbruik", "0,75", "kW"],
    ],
    aboutTitle: "Wanneer kiest u de TTK 170 S?",
    about: [
      "Dit is ons instaptoestel — maar met 50 liter vochtafvoer per dag is het bepaald geen lichtgewicht. Voor ruimtes tot ongeveer <strong>250 m³</strong> (bijvoorbeeld een appartement of een verdieping van een woning) haalt dit toestel het bouwvocht er efficiënt uit.",
      "De TTK 170 S is verrijdbaar en compact genoeg om via een normale deur of trap binnen te krijgen. Hij draait stil genoeg om in een bewoonde ruimte te blijven staan, wat hem geschikt maakt voor renovaties waar u ondertussen woont.",
      "Werkt u in een grotere ruimte of gaat het om waterschade waarbij snelheid telt? Kijk dan naar de <strong>TTK 350 S</strong> of <strong>TTK 650 S</strong>.",
    ],
    bullets: [
      ["Tot 250 m³", "Eén kamer, appartement of verdieping — het volume dat dit toestel comfortabel aankan."],
      ["Stil genoeg voor bewoonde ruimtes", "U kunt blijven wonen of werken terwijl het toestel draait."],
      ["Verrijdbaar en compact", "Past door normale deuren en is met één persoon te verplaatsen."],
      ["Continu-afvoer mogelijk", "Wij sluiten standaard een condensslang aan zodat u niets moet legen."],
    ],
    specs: [
      ["Type", "Condensontvochtiger"],
      ["Vochtafvoer (30 °C / 80 % RV)", "50 L/dag"],
      ["Aanbevolen volume", "tot 250 m³"],
      ["Luchtdebiet", "300 m³/u"],
      ["Opgenomen vermogen", "0,75 kW"],
      ["Voedingsspanning", "230 V / 50 Hz"],
      ["Werkingsbereik temperatuur", "5 – 32 °C"],
      ["Reservoir", "met continu-afvoeroptie"],
      ["Hygrostaat", "ingebouwd"],
      ["Afmetingen (b × d × h)", "ca. 43 × 43 × 65 cm"],
      ["Gewicht", "ca. 27 kg"],
      ["Mobiliteit", "wielen + duwbeugel"],
    ],
    faq: [
      [
        "Is dit toestel groot genoeg voor mijn woning?",
        "Voor één kamer, een appartement of een verdieping tot ongeveer 250 m³ volstaat de TTK 170 S. Voor een volledige nieuwbouwwoning raden we de TTK 350 S aan. Laat het gerust berekenen via de configurator — dan weet u het zeker.",
      ],
      [
        "Kan ik het toestel zelf verplaatsen?",
        "Ja. Het toestel weegt ongeveer 27 kg en staat op wielen met een duwbeugel. Eén persoon kan het rollen; voor trappen is twee personen aangeraden.",
      ],
      [
        "Hoeveel geluid maakt het?",
        "Beduidend minder dan een bouwventilator. U kunt in dezelfde woning blijven werken of wonen, al is het niet ideaal in een slaapkamer terwijl u slaapt.",
      ],
    ],
  },
  ttk350: {
    name: "Ontvochtiger TTK 350 S",
    short: "TTK 350 S",
    type: "Condensontvochtiger",
    badge: "Meest gehuurd",
    day: 24,
    img: ["/vernast/eco-performance.webp", "/vernast/lineup-dryers.webp"],
    sum: "Ons meest gehuurde toestel en de standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar binnen enkele dagen.",
    key: [
      ["Vochtafvoer", "70", "L/dag"],
      ["Bereik", "400", "m³"],
      ["Verbruik", "1,1", "kW"],
    ],
    aboutTitle: "Wanneer kiest u de TTK 350 S?",
    about: [
      "Dit is het toestel dat we het vaakst leveren, en met reden: met <strong>70 liter vochtafvoer per dag</strong> en een bereik tot <strong>400 m³</strong> dekt het een volledige nieuwbouwwoning of een grote renovatie in één keer.",
      "Bij nieuwbouw zit het meeste vocht in de chape en het pleisterwerk. Die geven hun water traag af — natuurlijke droging duurt weken. De TTK 350 S verlaagt de luchtvochtigheid ver genoeg om dat proces terug te brengen tot <strong>doorgaans 5 tot 7 dagen</strong>, zodat uw vloerder en schilder kunnen starten.",
      "Voor het beste resultaat combineert u dit toestel met een <strong>ventilator TTV 4500</strong>. Zonder luchtbeweging droogt vooral de lucht en niet de bouwmassa; met circulatie wint u dagen.",
    ],
    bullets: [
      ["Tot 400 m³", "Een volledige nieuwbouwwoning of grote renovatie in één toestel."],
      ["70 L per dag", "Voldoende capaciteit om verse chape en pleisterwerk snel op vocht te krijgen."],
      ["5 – 7 dagen droogtijd", "Typische doorlooptijd bij nieuwbouw met correcte plaatsing en circulatie."],
      ["Ingebouwde hygrostaat", "Het toestel schakelt zelf terug zodra de streefvochtigheid bereikt is."],
    ],
    specs: [
      ["Type", "Condensontvochtiger"],
      ["Vochtafvoer (30 °C / 80 % RV)", "70 L/dag"],
      ["Aanbevolen volume", "tot 400 m³"],
      ["Luchtdebiet", "550 m³/u"],
      ["Opgenomen vermogen", "1,1 kW"],
      ["Voedingsspanning", "230 V / 50 Hz"],
      ["Werkingsbereik temperatuur", "5 – 32 °C"],
      ["Reservoir", "met continu-afvoeroptie"],
      ["Hygrostaat", "ingebouwd"],
      ["Afmetingen (b × d × h)", "ca. 50 × 50 × 87 cm"],
      ["Gewicht", "ca. 38 kg"],
      ["Mobiliteit", "wielen + duwbeugel"],
    ],
    faq: [
      [
        "Waarom is dit het meest gehuurde toestel?",
        "Omdat het volume van een gemiddelde nieuwbouwwoning of grondige renovatie precies in het bereik van dit toestel valt. Het is krachtig genoeg om snel te werken, maar nog compact en zuinig genoeg voor normaal gebruik.",
      ],
      [
        "Heb ik er een ventilator bij nodig?",
        "Aangeraden, geen verplichting. Een ontvochtiger droogt de lucht; een ventilator zorgt dat die droge lucht ook effectief langs muren en vloeren strijkt. In de praktijk verkort die combinatie de droogtijd merkbaar — vooral bij dikke chape.",
      ],
      [
        "Wat als mijn ruimte groter is dan 400 m³?",
        "Dan plaatsen we ofwel de TTK 650 S, ofwel meerdere toestellen. De configurator rekent automatisch uit hoeveel units u nodig heeft.",
      ],
      [
        "Moet ik water aftappen?",
        "Nee. Bij de installatie sluiten we een condensslang aan op een afvoer. Is er geen afvoer in de buurt, dan plaatsen we een reservoir en spreken we de frequentie met u af.",
      ],
    ],
  },
  ttk650: {
    name: "Ontvochtiger TTK 650 S",
    short: "TTK 650 S",
    type: "Condensontvochtiger",
    badge: "Grote volumes",
    day: 34,
    img: ["/vernast/eco-ultimate.webp", "/vernast/lineup-dryers.webp"],
    sum: "Het zwaarste toestel in het gamma. Voor grote werven, kelders en waterschade waar elke dag telt.",
    key: [
      ["Vochtafvoer", "90", "L/dag"],
      ["Bereik", "600", "m³"],
      ["Verbruik", "1,4", "kW"],
    ],
    aboutTitle: "Wanneer kiest u de TTK 650 S?",
    about: [
      "Met <strong>90 liter per dag</strong> en een bereik tot <strong>600 m³</strong> is dit het toestel voor situaties waar volume of snelheid het probleem is: grote werven, industriële ruimtes, ruime kelders of acute waterschade.",
      "Bij <strong>waterschade</strong> is dit vaak de juiste keuze. Na een lek of overstroming zit het water niet alleen in de lucht maar diep in vloeren, muren en isolatie. Hoe sneller u de luchtvochtigheid omlaag brengt, hoe kleiner de kans op schimmel en structurele schade — de eerste 48 uur zijn beslissend.",
      "Droogt u een <strong>kelder of onverwarmde ruimte</strong>? Combineer dit toestel met de <strong>elektrische kachel TEddH 30 T</strong>. Onder 15 °C werkt condensatiedroging traag; met de kachel brengt u de temperatuur op peil en komt het vocht wel los.",
    ],
    bullets: [
      ["Tot 600 m³", "Grote werven, industriële ruimtes en ruime kelders in één toestel."],
      ["90 L per dag", "De hoogste vochtafvoer in ons gamma — voor acute situaties."],
      ["Eerste keuze bij waterschade", "Snel de luchtvochtigheid omlaag om schimmel en rot te voorkomen."],
      ["Combineer met kachel", "In koude ruimtes brengt de TEddH 30 T de temperatuur op werkingsniveau."],
    ],
    specs: [
      ["Type", "Condensontvochtiger"],
      ["Vochtafvoer (30 °C / 80 % RV)", "90 L/dag"],
      ["Aanbevolen volume", "tot 600 m³"],
      ["Luchtdebiet", "700 m³/u"],
      ["Opgenomen vermogen", "1,4 kW"],
      ["Voedingsspanning", "230 V / 50 Hz"],
      ["Werkingsbereik temperatuur", "5 – 32 °C"],
      ["Reservoir", "met continu-afvoeroptie"],
      ["Hygrostaat", "ingebouwd"],
      ["Afmetingen (b × d × h)", "ca. 55 × 55 × 95 cm"],
      ["Gewicht", "ca. 48 kg"],
      ["Mobiliteit", "wielen + duwbeugel"],
    ],
    faq: [
      [
        "Is dit toestel geschikt voor waterschade?",
        "Ja, het is onze eerste keuze bij waterschade. De hoge capaciteit haalt de luchtvochtigheid snel omlaag, wat cruciaal is in de eerste 48 uur. We combineren het bijna altijd met een of meerdere ventilatoren.",
      ],
      [
        "Werkt het in een koude kelder?",
        "Beperkt. Onder 15 °C daalt het rendement van elke condensontvochtiger sterk. Voor kelders leveren we dit toestel samen met de elektrische kachel TEddH 30 T, zodat de temperatuur op werkingsniveau komt.",
      ],
      [
        "Hoeveel stroom verbruikt het?",
        "1,4 kW bij volle werking — vergelijkbaar met een waterkoker die continu op halve kracht staat. Over een week is dat een beperkte kost tegenover de schade die u voorkomt.",
      ],
      [
        "Kan ik meerdere toestellen huren?",
        "Zeker. Bij volumes boven 600 m³ plaatsen we meerdere units. De configurator berekent automatisch het juiste aantal.",
      ],
    ],
  },
  ttv4500: {
    name: "Ventilator TTV 4500",
    short: "TTV 4500",
    type: "Bouwventilator · luchtcirculatie",
    badge: "Versnelt elke droging",
    day: 9,
    img: ["/vernast/vent-axiaal.webp"],
    sum: "Krachtige bouwventilator met 4 500 m³/u luchtverzet. Zorgt dat de droge lucht ook effectief langs muren en vloeren strijkt.",
    key: [
      ["Luchtverzet", "4 500", "m³/u"],
      ["Standen", "3", ""],
      ["Verbruik", "0,2", "kW"],
    ],
    aboutTitle: "Waarom een ventilator bij het drogen?",
    about: [
      "Een ontvochtiger droogt de <strong>lucht</strong>. Maar het vocht zit in uw <strong>muren, chape en vloer</strong>. Zonder luchtbeweging vormt zich een dun laagje verzadigde lucht tegen die oppervlakken — en daar stopt de droging.",
      "Een ventilator doorbreekt dat laagje. Door de lucht continu langs de bouwmassa te blazen blijft er telkens droge lucht in contact met het natte oppervlak, waardoor het vocht sneller vrijkomt. In de praktijk kan dat <strong>dagen verschil</strong> maken.",
      "Met <strong>4 500 m³/u</strong> en drie standen is dit toestel geschikt voor grote ruimtes. Het is licht, stapelbaar en richtbaar, zodat u de luchtstroom precies op de natte zone kunt zetten. Bij waterschade beschouwen wij een ventilator als <strong>essentieel</strong>, niet als optie.",
    ],
    bullets: [
      ["4 500 m³/u luchtverzet", "Genoeg debiet om een grote ruimte volledig in beweging te houden."],
      ["Onmisbaar bij waterschade", "Zonder circulatie droogt de lucht wel, de bouwmassa niet."],
      ["Zeer zuinig", "0,2 kW — het goedkoopste toestel om uw droogtijd te verkorten."],
      ["Richtbaar en stapelbaar", "Zet de luchtstroom precies waar het vocht zit; meerdere units combineerbaar."],
    ],
    specs: [
      ["Type", "Axiale bouwventilator"],
      ["Luchtverzet", "4 500 m³/u"],
      ["Snelheidsstanden", "3"],
      ["Opgenomen vermogen", "0,2 kW"],
      ["Voedingsspanning", "230 V / 50 Hz"],
      ["Rotordiameter", "ca. 45 cm"],
      ["Behuizing", "kunststof, stapelbaar"],
      ["Richtbaar", "ja, kantelbaar frame"],
      ["Afmetingen (b × d × h)", "ca. 56 × 30 × 62 cm"],
      ["Gewicht", "ca. 11 kg"],
      ["Toepassing", "bouwdroging, waterschade, ventilatie werf"],
    ],
    faq: [
      [
        "Heb ik een ventilator echt nodig?",
        "Bij nieuwbouw is het sterk aangeraden, bij waterschade beschouwen wij het als noodzakelijk. Een ontvochtiger zonder circulatie droogt vooral de lucht; met een ventilator komt het vocht ook effectief uit de muur en de chape.",
      ],
      [
        "Hoeveel ventilatoren heb ik nodig?",
        "Als richtlijn: één ventilator per grote ruimte of per natte zone. Bij een woning met meerdere kamers plaatsen we er vaak twee of drie. Onze technicus adviseert ter plaatse.",
      ],
      [
        "Kan ik hem alleen huren, zonder ontvochtiger?",
        "Dat kan, bijvoorbeeld om een werf te ventileren of verf sneller te laten drogen. Voor bouwvocht raden we altijd de combinatie met een ontvochtiger aan — een ventilator alleen verplaatst het vocht, hij verwijdert het niet.",
      ],
    ],
  },
  teddh30: {
    name: "Elektrische kachel TEddH 30 T",
    short: "TEddH 30 T",
    type: "Elektrische bouwkachel",
    badge: "Voor koude ruimtes",
    day: 29,
    img: ["/vernast/kachel-30.webp"],
    sum: "Elektrische bouwkachel van 30 kW met ingebouwde thermostaat. Brengt koude ruimtes op temperatuur zodat droging effectief wordt.",
    key: [
      ["Vermogen", "30", "kW"],
      ["Aansluiting", "400", "V"],
      ["Thermostaat", "ja", ""],
    ],
    aboutTitle: "Waarom verwarmen bij het drogen?",
    about: [
      "Droging is temperatuurafhankelijk. Warme lucht kan veel meer vocht vasthouden dan koude lucht — en warme bouwmassa geeft haar vocht sneller af. <strong>Onder 15 °C daalt het rendement van een condensontvochtiger sterk</strong>; onder 10 °C wordt het proces echt traag.",
      "Precies daar komt deze kachel in beeld. In een <strong>kelder, een onverwarmde nieuwbouw of een winterwerf</strong> brengt de TEddH 30 T de ruimte op werkingstemperatuur, waardoor de ontvochtiger weer op volle capaciteit kan werken. De combinatie levert een veel kortere droogtijd dan de ontvochtiger alleen.",
      "Met <strong>30 kW</strong> en een ingebouwde thermostaat verwarmt het toestel ook grote volumes en houdt het de temperatuur stabiel zonder dat u erbij moet blijven. Aansluiting op <strong>400 V krachtstroom</strong> is vereist — onze technicus controleert dat bij de levering.",
    ],
    bullets: [
      ["30 kW verwarmingsvermogen", "Brengt ook grote, koude ruimtes snel op werkingstemperatuur."],
      ["Onmisbaar in kelders", "Onder 15 °C werkt een ontvochtiger alleen niet efficiënt genoeg."],
      ["Ingebouwde thermostaat", "Houdt de streeftemperatuur automatisch aan — geen toezicht nodig."],
      ["400 V krachtstroom", "Wij controleren bij levering of uw aansluiting geschikt is."],
    ],
    specs: [
      ["Type", "Elektrische bouwkachel met ventilator"],
      ["Verwarmingsvermogen", "30 kW"],
      ["Standen", "meerdere vermogensstanden"],
      ["Voedingsspanning", "400 V / 3~ / 50 Hz"],
      ["Thermostaat", "ingebouwd, instelbaar"],
      ["Luchtdebiet", "ca. 2 000 m³/u"],
      ["Behuizing", "staal, gepoedercoat"],
      ["Beveiliging", "overhittingsbeveiliging"],
      ["Afmetingen (b × d × h)", "ca. 45 × 50 × 55 cm"],
      ["Gewicht", "ca. 24 kg"],
      ["Toepassing", "kelders, winterwerven, onverwarmde nieuwbouw"],
    ],
    faq: [
      [
        "Waarom heb ik een kachel nodig bij een ontvochtiger?",
        "Omdat droging temperatuurafhankelijk is. Onder 15 °C kan de lucht weinig vocht opnemen en geeft de bouwmassa haar water traag af. De kachel brengt de ruimte op temperatuur zodat de ontvochtiger op volle capaciteit werkt — samen droogt u aanzienlijk sneller.",
      ],
      [
        "Heb ik krachtstroom nodig?",
        "Ja, dit toestel vraagt een 400 V driefasige aansluiting. Onze technicus controleert dat bij de levering. Beschikt u niet over krachtstroom, dan bekijken we samen een alternatief.",
      ],
      [
        "Verbruikt dit veel stroom?",
        "Een kachel van 30 kW is geen zuinig toestel — maar in een koude ruimte is het de enige manier om de droging te doen werken. Zonder verwarming loopt de huurperiode van uw ontvochtiger véél langer op, wat uiteindelijk duurder uitkomt.",
      ],
      [
        "Kan de kachel onbewaakt blijven staan?",
        "De thermostaat en overhittingsbeveiliging maken continu gebruik mogelijk. Onze technicus legt bij de installatie uit hoe u het toestel veilig plaatst en welke afstand tot materialen u moet respecteren.",
      ],
    ],
  },
};

export const PRODUCT_ORDER = ["ttk170", "ttk350", "ttk650", "ttv4500", "teddh30"];

export const PRODUCT_ADDONS: Record<string, string[]> = {
  ttk170: ["ttv4500"],
  ttk350: ["ttv4500"],
  ttk650: ["ttv4500", "teddh30"],
  ttv4500: ["ttk350"],
  teddh30: ["ttk650"],
};

export const SC_LABEL: Record<string, string> = {
  nieuwbouw: "nieuwbouw",
  waterschade: "waterschade",
  renovatie: "renovatie",
  kelder: "kelder of koude ruimte",
};
