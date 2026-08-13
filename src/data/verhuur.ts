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

/** `droger` telt small + medium op, `totaal` alle toestellen. */
export interface ImageRule {
  device: DeviceKey | "droger" | "totaal";
  min: number;
  image: string;
}

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
          ["Gewicht [kg]", "32"],
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
          ["Gewicht [kg]", "50"],
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
          ["Gewicht [kg]", "15"],
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
          ["Gewicht [kg]", "10"],
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

/**
 * De toestelpagina's. Naam, dagprijs, badge, samenvatting en foto's komen uit
 * het portaal (tab Pakketten → Tarieven bewerken); de lange teksten, specs en
 * FAQ blijven hier staan — die zijn redactioneel en horen niet in een prijsveld.
 */
const PRODUCT_COPY: Record<string, Omit<Product, "name" | "short" | "type" | "badge" | "day" | "img" | "sum">> = {
  ttk170: {
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
      ["Gewicht", "ca. 32 kg"],
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
      ["Gewicht", "ca. 50 kg"],
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
    key: [
      ["Vochtafvoer", "90", "L/dag"],
      ["Bereik", "600", "m³"],
      ["Verbruik", "1,4", "kW"],
    ],
    aboutTitle: "Wanneer kiest u de TTK 650 S?",
    about: [
      "Met <strong>90 liter per dag</strong> en een bereik tot <strong>600 m³</strong> is dit het toestel voor situaties waar volume of snelheid het probleem is: grote werven, industriële ruimtes, ruime kelders of acute waterschade.",
      "Bij <strong>waterschade</strong> is dit vaak de juiste keuze. Na een lek of overstroming zit het water niet alleen in de lucht maar diep in vloeren, muren en isolatie. Hoe sneller u de luchtvochtigheid omlaag brengt, hoe kleiner de kans op schimmel en structurele schade — de eerste 48 uur zijn beslissend.",
      "Droogt u een <strong>kelder of onverwarmde ruimte</strong>? Combineer dit toestel met de <strong>elektrische kachel TEH 30 T</strong>. Onder 15 °C werkt condensatiedroging traag; met de kachel brengt u de temperatuur op peil en komt het vocht wel los.",
    ],
    bullets: [
      ["Tot 600 m³", "Grote werven, industriële ruimtes en ruime kelders in één toestel."],
      ["90 L per dag", "De hoogste vochtafvoer in ons gamma — voor acute situaties."],
      ["Eerste keuze bij waterschade", "Snel de luchtvochtigheid omlaag om schimmel en rot te voorkomen."],
      ["Combineer met kachel", "In koude ruimtes brengt de TEH 30 T de temperatuur op werkingsniveau."],
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
      ["Gewicht", "ca. 52 kg"],
      ["Mobiliteit", "wielen + duwbeugel"],
    ],
    faq: [
      [
        "Is dit toestel geschikt voor waterschade?",
        "Ja, het is onze eerste keuze bij waterschade. De hoge capaciteit haalt de luchtvochtigheid snel omlaag, wat cruciaal is in de eerste 48 uur. We combineren het bijna altijd met een of meerdere ventilatoren.",
      ],
      [
        "Werkt het in een koude kelder?",
        "Beperkt. Onder 15 °C daalt het rendement van elke condensontvochtiger sterk. Voor kelders leveren we dit toestel samen met de elektrische kachel TEH 30 T, zodat de temperatuur op werkingsniveau komt.",
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
      ["Gewicht", "ca. 15 kg"],
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
    key: [
      ["Vermogen", "30", "kW"],
      ["Aansluiting", "400", "V"],
      ["Thermostaat", "ja", ""],
    ],
    aboutTitle: "Waarom verwarmen bij het drogen?",
    about: [
      "Droging is temperatuurafhankelijk. Warme lucht kan veel meer vocht vasthouden dan koude lucht — en warme bouwmassa geeft haar vocht sneller af. <strong>Onder 15 °C daalt het rendement van een condensontvochtiger sterk</strong>; onder 10 °C wordt het proces echt traag.",
      "Precies daar komt deze kachel in beeld. In een <strong>kelder, een onverwarmde nieuwbouw of een winterwerf</strong> brengt de TEH 30 T de ruimte op werkingstemperatuur, waardoor de ontvochtiger weer op volle capaciteit kan werken. De combinatie levert een veel kortere droogtijd dan de ontvochtiger alleen.",
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
  teddh20: {
    key: [
      ["Vermogen", "20", "kW"],
      ["Aansluiting", "400", "V"],
      ["Thermostaat", "ja", ""],
    ],
    aboutTitle: "Wanneer kiest u de TEH 20 T?",
    about: [
      "Dezelfde rol als de <strong>TEH 30 T</strong>, maar een maat kleiner. Deze kachel brengt een <strong>kelder, garage, appartement of afgesloten verdieping</strong> op werkingstemperatuur zodat uw ontvochtiger weer op volle capaciteit kan werken.",
      "Onder 15 °C neemt lucht nauwelijks vocht op en geeft de bouwmassa haar water traag af. In een onverwarmde ruimte is verwarmen dus geen comfortkeuze maar de voorwaarde om überhaupt te drogen — zonder kachel loopt uw huurperiode simpelweg langer.",
      "Met <strong>20 kW</strong> verwarmt dit toestel ruimtes waarvoor de 30 kW-versie overgedimensioneerd is. Ook dit model vraagt <strong>400 V krachtstroom</strong>; is die er niet, laat het ons dan vooraf weten.",
    ],
    bullets: [
      ["20 kW verwarmingsvermogen", "Genoeg voor een kelder, garage of afgesloten verdieping."],
      ["De maat onder de TEH 30 T", "Kleiner en lichter, voor ruimtes waar 30 kW te veel is."],
      ["Ingebouwde thermostaat", "Houdt de streeftemperatuur aan zonder dat u erbij moet blijven."],
      ["400 V krachtstroom", "Controleer vooraf of uw werf een driefasige aansluiting heeft."],
    ],
    specs: [
      ["Type", "Elektrische bouwkachel met ventilator"],
      ["Verwarmingsvermogen", "20 kW"],
      ["Standen", "meerdere vermogensstanden"],
      ["Voedingsspanning", "400 V / 3~ / 50 Hz"],
      ["Thermostaat", "ingebouwd, instelbaar"],
      ["Behuizing", "staal, gepoedercoat"],
      ["Beveiliging", "overhittingsbeveiliging"],
      ["Toepassing", "kelders, garages, appartementen, winterwerven"],
    ],
    faq: [
      [
        "Wat is het verschil met de TEH 30 T?",
        "Enkel het vermogen: 20 kW tegenover 30 kW. Voor een kelder, garage of appartement volstaat deze versie ruimschoots. Gaat het om een volledige woning in aanbouw of een grote werf, kies dan de 30 kW-versie.",
      ],
      [
        "Heb ik krachtstroom nodig?",
        "Ja, ook dit toestel vraagt een 400 V driefasige aansluiting. Beschikt u daar niet over, laat het ons weten bij uw reservatie — dan bekijken we samen een alternatief.",
      ],
      [
        "Volstaat een kachel alleen om te drogen?",
        "Nee. Warmte maakt het vocht los uit de bouwmassa, maar voert het niet af. Combineer altijd met een ontvochtiger, anders slaat datzelfde vocht elders in de ruimte weer neer.",
      ],
    ],
  },
  radiaal2250: {
    key: [
      ["Luchtverzet", "2 250", "m³/u"],
      ["Standen", "3", ""],
      ["Bescherming", "IP55", ""],
    ],
    aboutTitle: "Axiaal of radiaal — wat kiest u?",
    about: [
      "Een <strong>axiaalventilator</strong> zet een hele ruimte in beweging. Een <strong>radiaalventilator</strong> doet iets anders: die perst de lucht in een smalle, krachtige straal vlak over het oppervlak. Precies wat u nodig heeft bij <strong>vloeren en chape</strong>.",
      "Door die gerichte straal blaast het toestel de verzadigde luchtlaag weg die tegen een natte vloer blijft hangen. U kunt hem ook onder kasten, tegen een plint of in een hoek richten — plekken waar een axiaalventilator niet bij komt.",
      "Met <strong>2 250 m³/u</strong>, drie standen en een <strong>spatwaterdichte behuizing (IP55)</strong> is dit het toestel dat wij standaard bijzetten bij chapedroging en na waterschade. Combineer hem met een ontvochtiger: de ventilator maakt het vocht los, de ontvochtiger haalt het uit de lucht.",
    ],
    bullets: [
      ["Gerichte luchtstraal", "Blaast vlak over vloeren en chape in plaats van door de ruimte."],
      ["Komt waar u niet bij kunt", "Onder kasten, tegen plinten en in hoeken, dankzij het kantelbare frame."],
      ["Spatwaterdicht (IP55)", "Blijft veilig draaien op een natte vloer na waterschade."],
      ["Doorlusbaar", "Extra stopcontact op het toestel zodat u meerdere units kunt koppelen."],
    ],
    specs: [
      ["Type", "Radiale bouwventilator"],
      ["Luchtverzet", "2 250 m³/u"],
      ["Snelheidsstanden", "3"],
      ["Beschermingsgraad", "IP55"],
      ["Voedingsspanning", "230 V / 50 Hz"],
      ["Doorvoerstopcontact", "ja, 6 A"],
      ["Behuizing", "kunststof, stapelbaar"],
      ["Richtbaar", "ja, meerdere blaashoeken"],
      ["Afmetingen (b × d × h)", "ca. 54,5 × 51,5 × 49 cm"],
      ["Gewicht", "ca. 15 kg"],
      ["Toepassing", "vloer- en chapedroging, waterschade"],
    ],
    faq: [
      [
        "Wanneer kies ik radiaal in plaats van axiaal?",
        "Zit het vocht in de vloer of de chape, dan is radiaal de betere keuze: de luchtstraal strijkt vlak over het oppervlak. Gaat het om een volledige ruimte of om muren, dan zet u beter een axiaalventilator in. Bij waterschade combineren wij vaak beide.",
      ],
      [
        "Hoeveel toestellen heb ik nodig?",
        "Als richtlijn één radiaalventilator per natte zone of per kamer. Voor een volledige verdieping na waterschade zetten we er meestal twee of drie in, aangevuld met een ontvochtiger.",
      ],
      [
        "Mag hij op een natte vloer staan?",
        "Ja, de behuizing is spatwaterdicht (IP55). Zet het toestel wel op een vlakke ondergrond en nooit in staand water.",
      ],
    ],
  },
  /*
    Nog niet zichtbaar op de site: dit toestel staat in het portaal op "niet te
    huur" omdat er geen exemplaar in het depot ligt. De pagina verschijnt zodra
    die schakelaar aan gaat — de teksten hieronder staan klaar, de technische
    fiche moet dan nog aangevuld worden met de cijfers van het gekozen model.
  */
  revolution: {
    key: [
      ["Techniek", "Adsorptie", ""],
      ["Drogen", "via slangen", ""],
      ["Koude ruimtes", "ja", ""],
    ],
    aboutTitle: "Wanneer kiest u deze adsorptiedroger?",
    about: [
      "Een condensontvochtiger droogt de lucht in een ruimte. Deze <strong>adsorptiedroger</strong> doet het omgekeerde: hij blaast droge lucht via <strong>slangen</strong> precies naar de plek waar het vocht zit — onder een zwevende vloer, in een wandopbouw of in een geïsoleerde constructie.",
      "Daardoor droogt u <strong>gericht</strong> in plaats van de hele ruimte, wat na waterschade vaak het verschil maakt tussen uitbreken en drogen. Adsorptie werkt bovendien door bij <strong>lagere temperaturen</strong>, waar een condensontvochtiger rendement verliest.",
      "Twijfelt u of dit het juiste toestel is voor uw situatie? Bel ons — dit is bij uitstek een toestel dat wij liever eerst samen met u inschatten.",
    ],
    bullets: [
      ["Droogt gericht via slangen", "Onder vloeren, in wanden en op moeilijk bereikbare plekken."],
      ["Werkt ook bij lage temperatuur", "Adsorptie verliest, anders dan condensatie, weinig rendement in de koude."],
      ["Vermijdt uitbreken", "Vaak de manier om een zwevende vloer te redden na waterschade."],
      ["Advies vooraf", "Wij bekijken samen of uw constructie zich hiervoor leent."],
    ],
    specs: [
      ["Type", "Adsorptiedroger"],
      ["Werking", "droge lucht via slangen naar de natte zone"],
      ["Toepassing", "vloeropbouw, wanden, isolatie, koude ruimtes"],
    ],
    faq: [
      [
        "Wat is het verschil met een gewone bouwdroger?",
        "Een condensontvochtiger droogt de lucht in de ruimte; dit toestel blaast droge lucht via slangen rechtstreeks in de constructie. Zit het vocht onder een vloer of in een wand, dan raakt een gewone bouwdroger er niet bij.",
      ],
      [
        "Wanneer is dit de juiste keuze?",
        "Vooral na waterschade waarbij water onder een zwevende vloer of in de isolatie is gelopen. Ook in onverwarmde ruimtes, waar een condensontvochtiger aan rendement inboet.",
      ],
    ],
  },
};

/**
 * De volledige toestelpagina: bewerkbare velden uit het portaal, samengevoegd
 * met de redactionele tekst hierboven.
 *
 * Wat het portaal niet publiceert, bestaat hier niet. Een toestel dat daar op
 * "niet te huur" gezet wordt, verdwijnt uit de gepubliceerde tarieven — zonder
 * deze filter zou de build daarop stukvallen (`t.name` op undefined) en dus
 * helemaal geen nieuwe site opleveren.
 */
export const PRODUCTS: Record<string, Product> = Object.fromEntries(
  Object.entries(PRODUCT_COPY).flatMap(([key, copy]) => {
    const t = TARIEVEN.products[key as keyof typeof TARIEVEN.products];
    if (!t) return [];
    return [
      [
        key,
        {
          ...copy,
          name: t.name,
          short: t.short,
          type: t.type,
          badge: t.badge,
          day: Number(t.day),
          img: [...t.img],
          sum: t.sum,
        },
      ],
    ];
  })
);

/** De gammavolgorde, beperkt tot wat het portaal vandaag te huur aanbiedt. */
export const PRODUCT_ORDER = [
  "ttk170",
  "ttk350",
  "ttk650",
  "revolution",
  "ttv4500",
  "radiaal2250",
  "teddh30",
  "teddh20",
].filter((key) => PRODUCTS[key]);

/** Wat er op een toestelpagina bijgeboekt kan worden — enkel wat te huur staat. */
export const PRODUCT_ADDONS: Record<string, string[]> = Object.fromEntries(
  Object.entries({
    ttk170: ["ttv4500"],
    ttk350: ["ttv4500", "radiaal2250"],
    ttk650: ["ttv4500", "teddh30"],
    revolution: ["ttv4500"],
    ttv4500: ["ttk350"],
    radiaal2250: ["ttk350"],
    teddh30: ["ttk650"],
    teddh20: ["ttk350"],
  }).map(([key, addons]) => [key, addons.filter((addon) => PRODUCTS[addon])])
);

export const SC_LABEL: Record<string, string> = {
  nieuwbouw: "nieuwbouw",
  waterschade: "waterschade",
  renovatie: "renovatie",
  kelder: "kelder of koude ruimte",
};
