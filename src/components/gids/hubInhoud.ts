import type { ComponentType } from "react";
import { ALLES_OVER_DROGEN } from "@/data/navigation";
import {
  BoltIcon,
  BrushIcon,
  CartIcon,
  CellarIcon,
  DropIcon,
  FileIcon,
  InfoIcon,
  GammaIcon,
  MoldIcon,
  PrijsIcon,
  ShieldIcon,
  SupportIcon,
  TruckIcon,
} from "@/components/home-v3/icons";
import {
  ClockIcon,
  DoosIcon,
  DrogerIcon,
  LayersIcon,
  LekIcon,
  WarnIcon,
  WindIcon,
} from "@/components/content/icons";

/**
 * De inhoud van de hub op /gids, los van de pagina die haar toont.
 *
 * Stond eerst in `GidsIndexPage.tsx`. Sinds er ontwerpvarianten van die hub
 * naast elkaar bekeken worden (/gids/ontwerp-*) hoort de samenvatting van een
 * pagina niet meer bij één weergave: anders staat dezelfde zin in vier
 * bestanden en loopt de ene uiteen met de andere.
 *
 * De lijst zelf komt uit `ALLES_OVER_DROGEN`, dezelfde bron als het mega-menu,
 * de footer en het mobiele menu. Een nieuwe informatiepagina wordt op één plek
 * toegevoegd (`src/data/navigation.ts`) en verschijnt hier mee — zonder
 * samenvatting of pictogram valt ze terug op de standaard, ze verdwijnt nooit
 * stil.
 */

/** Wat elke pagina beantwoordt, in één of twee zinnen. */
export const SAMENVATTING: Record<string, string> = {
  /* Gidsen */
  "/chape-drogen":
    "Wat een chapedroging bij u kost en hoe ze verloopt: huurtermijn per chapedikte, levering en installatie, meting voor en na, en de drooggarantie op de einddatum.",
  "/pleisterwerk-drogen":
    "Pleisterwerk laten drogen met een droogpakket: termijn per laagdikte, wat de technieker doet, en wanneer de schilder of behanger kan starten.",
  "/gids/hoe-lang-moet-chape-drogen":
    "Droogtijden per dikte, natuurlijk en met een bouwdroger, het verschil tussen cement- en anhydrietchape, vloerverwarming opstoken en restvocht meten. Met een aparte sectie over pleisterwerk.",
  "/gids/hoe-lang-moet-pleisterwerk-drogen":
    "Droogtijd per laagdikte, het verschil tussen gips- en cementpleister, waarom het vocht in een dichtgemaakt huis blijft hangen en wanneer de schilder mag komen.",
  "/gids/natuurlijk-drogen-of-bouwdroger":
    "Moet u hier wel iets voor huren? Wat natuurlijk drogen van u vraagt, waarom het seizoen erover beslist, en het verschil met een droogpakket in weken.",
  "/gids/condensdroger-of-adsorptiedroger":
    "Hoe beide toestellen werken, waarom een condensdroger in de koude rendement verliest, en welk toestel past bij een kelder, een nieuwbouw of water onder de vloer.",
  "/gids/stroomverbruik-bouwdroger":
    "Het vermogen van onze toestellen, een rekenvoorbeeld in kWh en euro, en waarom een bouwdroger gewoon 24 uur per dag en 's nachts mag doordraaien.",

  /* Uitleg */
  "/hoe-drogen-werkt":
    "De techniek achter het drogen: hoe temperatuur, luchtvochtigheid en luchtbeweging samenwerken, waarom condensatie werkt en wat een hygrometer u precies vertelt.",
  "/waarom-bouwdroging":
    "Wat er misgaat als u wacht op goed weer: schimmel, loskomend pleisterwerk, vloeren die later bol komen te staan, en hoeveel weken een werf daarmee uitloopt.",
  "/drooggarantie":
    "Droog op de afgesproken datum of u huurt kosteloos verder. Wat de garantie dekt, welke voorwaarden eraan hangen en hoe de vochtmeting bij start en oplevering verloopt.",
  "/klantservice":
    "Verlengen, vroeger stoppen, een toestel dat niet doet wat het moet doen, een factuur of een dossier voor de verzekering, wie u belt en wat u mag verwachten.",

  /* Toepassingen */
  "/nieuwbouw-drogen":
    "Chape en pleisterwerk versneld drogen zonder het werk te forceren: hoeveel toestellen een woning nodig heeft, wanneer u mag starten en hoe u restvocht aantoont vóór de vloerder komt.",
  "/waterschade":
    "Wat u doet in de eerste 48 uur na een lek of een overstroming, hoe wij onder vloeren en achter wanden drogen, en welk meetrapport uw verzekeraar nodig heeft.",
  "/renovatie":
    "Een kelder die vochtig blijft, muren met zoutuitbloei of schimmel achter de kasten: hoe droging en vochtbestrijding op elkaar aansluiten en in welke volgorde.",
  "/ozonbehandeling":
    "Geur en schimmelsporen wegnemen ná de droging: wat ozon doet, hoe lang een behandeling duurt en waarom een ruimte daarna moet verluchten voor u er weer in kunt.",
  "/luchtontvochtiger-huren":
    "Het verschil tussen een huishoudelijke ontvochtiger en een bouwdroger, welke capaciteit bij welk volume hoort, en wanneer één toestel volstaat.",
  "/ontschimmeling":
    "Schimmel aanpakken bij de oorzaak in plaats van ze weg te schilderen: waar ze vandaan komt, wat wij behandelen en waarom de ruimte eerst droog moet zijn.",

  /* Het gamma */
  "/machines":
    "Elk toestel dat wij verhuren, met zijn ontvochtigingscapaciteit, vermogen en het volume waarvoor het bedoeld is — bouwdrogers, ventilatoren en luchtreinigers.",
  "/verhuur/afhalen":
    "Een los toestel zelf ophalen in Aartselaar: wat er beschikbaar is, het afhaaltarief per dag en meteen online uw afhaalmoment vastleggen.",

  /* Prijzen & service */
  "/prijzen":
    "Eén dagprijs per toestel, zonder waarborg en zonder verborgen kosten. Inclusief pakketprijzen, Drooggarantie en alle voorwaarden in gewone taal.",
  "/levering":
    "Binnen 24 uur geleverd, geplaatst en ingesteld door onze technieker, met een vochtmeting bij de start. Wat er inbegrepen zit, wat de condenspomp doet en hoe het ophalen verloopt.",
  "/afhalen":
    "Losse toestellen zelf ophalen in Aartselaar, aan afhaaltarief. De route, de tijdsloten, wat er in uw auto past en waar u op let bij het vervoeren van een droger.",
};

/**
 * Dezelfde pagina als een vraag geformuleerd.
 *
 * De labels uit het menu zijn navigatie-labels ("Chape drogen", "Levering"):
 * die zeggen waar u terechtkomt, niet wát wij beantwoorden. Een hub die als
 * vragenlijst leest heeft de vraag nodig; zonder entry valt ze terug op het
 * menulabel, zodat een nieuwe pagina ook hier niet stilvalt.
 */
export const VRAAG: Record<string, string> = {
  "/gids/hoe-lang-moet-chape-drogen": "Hoe lang moet chape drogen?",
  "/gids/hoe-lang-moet-pleisterwerk-drogen": "Hoe lang moet pleisterwerk drogen?",
  "/gids/natuurlijk-drogen-of-bouwdroger": "Moet ik huren, of droogt het vanzelf?",
  "/gids/condensdroger-of-adsorptiedroger": "Condensdroger of adsorptiedroger — welk toestel heb ik nodig?",
  "/gids/stroomverbruik-bouwdroger": "Wat kost een bouwdroger aan stroom?",

  "/hoe-drogen-werkt": "Hoe droogt een bouwdroger een ruimte eigenlijk?",
  "/waarom-bouwdroging": "Wat gaat er mis als ik gewoon wacht tot het droog is?",
  "/drooggarantie": "Wat als het op de afgesproken datum niet droog is?",
  "/klantservice": "Hoe verleng ik, stop ik vroeger of meld ik een probleem?",

  "/chape-drogen": "Wat kost het om mijn chape te laten drogen?",
  "/pleisterwerk-drogen": "Wanneer kan de schilder na het pleisterwerk starten?",
  "/nieuwbouw-drogen": "Hoeveel toestellen heeft mijn nieuwbouw nodig?",
  "/waterschade": "Wat doe ik in de eerste 48 uur na waterschade?",
  "/renovatie": "Hoe krijg ik een kelder of een vochtige muur droog?",
  "/ozonbehandeling": "Hoe raak ik van de geur en de schimmelsporen af?",
  "/luchtontvochtiger-huren": "Volstaat een ontvochtiger, of heb ik een bouwdroger nodig?",
  "/ontschimmeling": "Hoe raak ik van de schimmel af, en blijft ze weg?",

  "/machines": "Welke toestellen verhuren jullie?",
  "/verhuur/afhalen": "Wat kost een los toestel afhalen?",

  "/prijzen": "Wat kost een bouwdroger per dag?",
  "/levering": "Wat zit er bij een levering inbegrepen?",
  "/afhalen": "Kan ik een toestel zelf komen ophalen?",
};

/** Het pictogram per pagina; onbekend valt terug op {@link FileIcon}. */
export const PICTOGRAM: Record<string, ComponentType<{ size?: number }>> = {
  "/chape-drogen": LayersIcon,
  "/pleisterwerk-drogen": BrushIcon,
  "/gids/hoe-lang-moet-chape-drogen": ClockIcon,
  "/gids/hoe-lang-moet-pleisterwerk-drogen": BrushIcon,
  "/gids/natuurlijk-drogen-of-bouwdroger": WindIcon,
  "/gids/condensdroger-of-adsorptiedroger": DrogerIcon,
  "/gids/stroomverbruik-bouwdroger": BoltIcon,

  "/hoe-drogen-werkt": DropIcon,
  "/waarom-bouwdroging": InfoIcon,
  "/drooggarantie": ShieldIcon,
  "/klantservice": SupportIcon,

  "/nieuwbouw-drogen": LayersIcon,
  "/waterschade": LekIcon,
  "/renovatie": CellarIcon,
  "/ozonbehandeling": MoldIcon,
  "/luchtontvochtiger-huren": WindIcon,
  /* Niet MoldIcon: dat staat al op /ozonbehandeling, en twee identieke
     pictogrammen in hetzelfde raster lezen als één pagina die dubbel staat. */
  "/ontschimmeling": WarnIcon,

  "/machines": GammaIcon,
  "/verhuur/afhalen": DoosIcon,

  "/prijzen": PrijsIcon,
  "/levering": TruckIcon,
  "/afhalen": CartIcon,
};

/**
 * De kleur van het pictogram per onderwerp.
 *
 * De kaarten zijn gebroken wit en verder gelijk; het blokje met het pictogram
 * is wat ze uit elkaar houdt. Met negentien kaarten in één raster is dat het
 * verschil tussen een lijst en een overzicht: u ziet aan de kleur of u naar
 * een gids, een toepassing of een prijspagina kijkt, ook zonder het label te
 * lezen. Een groep zonder kleur valt terug op `wit`.
 */
export type Kleur = "zwart" | "geel" | "groen" | "wit" | "rood";

/**
 * De kop boven elke groep. De sleutel is de groepstitel uit
 * `ALLES_OVER_DROGEN`; een groep die hier niet staat krijgt haar eigen titel
 * als kop en geen inleiding — ze verschijnt dus hoe dan ook.
 */
export const GROEPKOP: Record<string, { kop: string; lede: string; kort: string; kleur: Kleur }> = {
  Gidsen: {
    kop: "Kies uw vraag",
    lede: "Eén concrete vraag per gids, uitgewerkt met droogtijden, rekenvoorbeelden en de cijfers uit onze eigen catalogus.",
    kort: "Droogtijden, toestelkeuze en verbruik, uitgerekend.",
    kleur: "zwart",
  },
  Uitleg: {
    kop: "Hoe drogen werkt, en waarom het niet vanzelf gaat",
    lede: "De achtergrond bij alles hierboven: de techniek, de reden om niet te wachten, en wat wij beloven wanneer u bij ons huurt.",
    kort: "De techniek erachter en wat wij beloven.",
    kleur: "geel",
  },
  Toepassingen: {
    kop: "Uw situatie",
    lede: "Een nieuwbouw, een lek, een vochtige kelder of een geur die blijft hangen, elk met een eigen aanpak, droogtijd en opstelling.",
    kort: "Nieuwbouw, waterschade, kelder of geur.",
    kleur: "groen",
  },
  "Het gamma": {
    kop: "De toestellen zelf",
    lede: "Wat er in het magazijn staat, met de capaciteit en het vermogen per toestel, en hoe u er zelf een komt halen.",
    kort: "De toestellen, met capaciteit en vermogen.",
    kleur: "wit",
  },
  "Prijzen & service": {
    kop: "Wat het kost en hoe het geleverd wordt",
    lede: "De tarieven, wat er bij een levering inbegrepen zit, en wat er verandert wanneer u de toestellen zelf komt halen.",
    kort: "Tarieven, levering en zelf afhalen.",
    kleur: "rood",
  },
};

export interface HubItem {
  path: string;
  /** Het menulabel: waar u terechtkomt. */
  label: string;
  /** Dezelfde pagina als vraag; valt terug op het label. */
  vraag: string;
  samenvatting: string;
  Icoon: ComponentType<{ size?: number }>;
  groep: string;
  kleur: Kleur;
}

export interface HubGroep {
  titel: string;
  kop: string;
  lede: string;
  kort: string;
  kleur: Kleur;
  items: HubItem[];
}

/* De gidsen vooraan: dit is hun pagina. De rest volgt in de volgorde van het
   menu, zodat iemand die van daar komt dezelfde indeling terugvindt. */
export const HUB_GROEPEN: HubGroep[] = [
  ...ALLES_OVER_DROGEN.filter((g) => g.titel === "Gidsen"),
  ...ALLES_OVER_DROGEN.filter((g) => g.titel !== "Gidsen"),
].map((groep) => {
  const kop = GROEPKOP[groep.titel];
  return {
    titel: groep.titel,
    kop: kop?.kop ?? groep.titel,
    lede: kop?.lede ?? "",
    kort: kop?.kort ?? "",
    kleur: kop?.kleur ?? "wit",
    // "Alle gidsen" is de hub zelf; een kaart die naar zichzelf linkt helpt
    // niemand en kost een crawler een beurt.
    items: groep.items
      .filter((item) => item.path !== "/gids")
      .map((item) => ({
        path: item.path,
        label: item.label,
        vraag: VRAAG[item.path] ?? item.label,
        samenvatting: SAMENVATTING[item.path] ?? "",
        Icoon: PICTOGRAM[item.path] ?? FileIcon,
        groep: groep.titel,
        kleur: kop?.kleur ?? "wit",
      })),
  };
});

/** Alle pagina's op één hoop, in de volgorde van de groepen. */
export const HUB_ITEMS: HubItem[] = HUB_GROEPEN.flatMap((g) => g.items);
