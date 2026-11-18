import type { ComponentType } from "react";
import { navigatie } from "@/data/navigation";
import type { Taal } from "@/i18n/taal";
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

/** {@link SAMENVATTING} in het Frans, met dezelfde (Nederlandse) sleutels. */
export const SAMENVATTING_FR: Record<string, string> = {
  /* Gidsen */
  "/chape-drogen":
    "Ce que coûte chez vous le séchage d'une chape et comment il se déroule : durée de location par épaisseur de chape, livraison et installation, mesure avant et après, et la garantie de séchage sur la date de fin.",
  "/pleisterwerk-drogen":
    "Faire sécher un plafonnage avec un pack de séchage : délai par épaisseur de couche, ce que fait le technicien, et quand le peintre ou le tapissier peut commencer.",
  "/gids/hoe-lang-moet-chape-drogen":
    "Les temps de séchage par épaisseur, naturellement et avec un déshumidificateur, la différence entre chape ciment et chape anhydrite, la mise en chauffe du chauffage par le sol et la mesure de l'humidité résiduelle. Avec une section distincte sur le plafonnage.",
  "/gids/hoe-lang-moet-pleisterwerk-drogen":
    "Le temps de séchage par épaisseur de couche, la différence entre enduit plâtre et enduit ciment, pourquoi l'humidité reste dans une maison fermée et quand le peintre peut venir.",
  "/gids/natuurlijk-drogen-of-bouwdroger":
    "Faut-il vraiment louer quelque chose ? Ce que le séchage naturel exige de vous, pourquoi la saison est déterminante, et la différence en semaines avec un pack de séchage.",
  "/gids/condensdroger-of-adsorptiedroger":
    "Comment fonctionnent les deux appareils, pourquoi un déshumidificateur à condensation perd du rendement dans le froid, et quel appareil convient à une cave, une nouvelle construction ou de l'eau sous le sol.",
  "/gids/stroomverbruik-bouwdroger":
    "La puissance de nos appareils, un exemple de calcul en kWh et en euros, et pourquoi un déshumidificateur de chantier peut tout simplement tourner 24 heures sur 24, y compris la nuit.",

  /* Uitleg */
  "/hoe-drogen-werkt":
    "La technique du séchage : comment la température, l'humidité de l'air et le mouvement de l'air agissent ensemble, pourquoi la condensation fonctionne et ce que vous dit exactement un hygromètre.",
  "/waarom-bouwdroging":
    "Ce qui tourne mal si vous attendez le beau temps : moisissures, plafonnage qui se décolle, sols qui gonflent plus tard, et de combien de semaines un chantier est alors retardé.",
  "/drooggarantie":
    "Sec à la date convenue ou vous continuez à louer sans frais. Ce que couvre la garantie, les conditions qui s'y rattachent et le déroulement de la mesure d'humidité au début et à la fin.",
  "/klantservice":
    "Prolonger, arrêter plus tôt, un appareil qui ne fait pas ce qu'il doit, une facture ou un dossier pour l'assurance : qui appeler et à quoi vous attendre.",

  /* Toepassingen */
  "/nieuwbouw-drogen":
    "Accélérer le séchage de la chape et du plafonnage sans forcer les travaux : combien d'appareils il faut pour une maison, quand vous pouvez commencer et comment prouver l'humidité résiduelle avant l'arrivée du poseur de sol.",
  "/waterschade":
    "Ce qu'il faut faire dans les 48 premières heures après une fuite ou une inondation, comment nous séchons sous les sols et derrière les murs, et quel rapport de mesure votre assureur demande.",
  "/renovatie":
    "Une cave qui reste humide, des murs avec des efflorescences salines ou des moisissures derrière les armoires : comment séchage et traitement de l'humidité s'enchaînent, et dans quel ordre.",
  "/ozonbehandeling":
    "Éliminer les odeurs et les spores de moisissures après le séchage : ce que fait l'ozone, combien de temps dure un traitement et pourquoi une pièce doit ensuite être aérée avant que vous puissiez y retourner.",
  "/luchtontvochtiger-huren":
    "La différence entre un déshumidificateur domestique et un déshumidificateur de chantier, quelle capacité pour quel volume, et quand un seul appareil suffit.",
  "/ontschimmeling":
    "Traiter les moisissures à la source au lieu de les repeindre : d'où elles viennent, ce que nous traitons et pourquoi la pièce doit d'abord être sèche.",

  /* Het gamma */
  "/machines":
    "Chaque appareil que nous louons, avec sa capacité de déshumidification, sa puissance et le volume auquel il est destiné : déshumidificateurs, ventilateurs et purificateurs d'air.",
  "/verhuur/afhalen":
    "Enlever vous-même un appareil à Aartselaar : ce qui est disponible, le tarif d'enlèvement par jour et la réservation immédiate en ligne de votre moment d'enlèvement.",

  /* Prijzen & service */
  "/prijzen":
    "Un prix journalier par appareil, sans caution et sans frais cachés. Avec les prix des packs, la garantie de séchage et toutes les conditions en langage clair.",
  "/levering":
    "Livré dans les 24 heures, installé et réglé par notre technicien, avec une mesure d'humidité au départ. Ce qui est compris, ce que fait la pompe à condensats et comment se passe l'enlèvement.",
  "/afhalen":
    "Enlever vous-même des appareils à Aartselaar, au tarif d'enlèvement. L'itinéraire, les créneaux horaires, ce qui tient dans votre voiture et à quoi faire attention lors du transport d'un déshumidificateur.",
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

/** {@link VRAAG} in het Frans, met dezelfde (Nederlandse) sleutels. */
export const VRAAG_FR: Record<string, string> = {
  "/gids/hoe-lang-moet-chape-drogen": "Combien de temps une chape doit-elle sécher ?",
  "/gids/hoe-lang-moet-pleisterwerk-drogen": "Combien de temps un plafonnage doit-il sécher ?",
  "/gids/natuurlijk-drogen-of-bouwdroger": "Dois-je louer, ou cela sèche-t-il tout seul ?",
  "/gids/condensdroger-of-adsorptiedroger": "Condensation ou adsorption : de quel appareil ai-je besoin ?",
  "/gids/stroomverbruik-bouwdroger": "Combien coûte un déshumidificateur en électricité ?",

  "/hoe-drogen-werkt": "Comment un déshumidificateur de chantier sèche-t-il réellement une pièce ?",
  "/waarom-bouwdroging": "Qu'est-ce qui tourne mal si j'attends simplement que ça sèche ?",
  "/drooggarantie": "Et si ce n'est pas sec à la date convenue ?",
  "/klantservice": "Comment prolonger, arrêter plus tôt ou signaler un problème ?",

  "/chape-drogen": "Combien coûte le séchage de ma chape ?",
  "/pleisterwerk-drogen": "Quand le peintre peut-il commencer après le plafonnage ?",
  "/nieuwbouw-drogen": "Combien d'appareils faut-il pour ma nouvelle construction ?",
  "/waterschade": "Que faire dans les 48 premières heures après des dégâts des eaux ?",
  "/renovatie": "Comment assécher une cave ou un mur humide ?",
  "/ozonbehandeling": "Comment me débarrasser de l'odeur et des spores de moisissures ?",
  "/luchtontvochtiger-huren": "Un déshumidificateur d'air suffit-il, ou me faut-il un déshumidificateur de chantier ?",
  "/ontschimmeling": "Comment me débarrasser des moisissures, et qu'elles ne reviennent pas ?",

  "/machines": "Quels appareils louez-vous ?",
  "/verhuur/afhalen": "Combien coûte l'enlèvement d'un appareil ?",

  "/prijzen": "Combien coûte un déshumidificateur de chantier par jour ?",
  "/levering": "Qu'est-ce qui est compris dans une livraison ?",
  "/afhalen": "Puis-je venir chercher un appareil moi-même ?",
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
 * is wat ze uit elkaar houdt. Met tweeëntwintig kaarten in één raster is dat
 * het verschil tussen een lijst en een overzicht: u ziet aan de kleur of u
 * naar een gids, een toepassing of een prijspagina kijkt, ook zonder het
 * label te lezen.
 *
 * De vijf tinten komen allemaal uit de huisstijl — zwart, zand, donkerrood,
 * wit en het rood van het logo. Een eerdere set met groen en geel erbij gaf
 * wél onderscheid, maar las als vijf losse merken op één pagina. Een groep
 * zonder kleur valt terug op `wit`.
 */
export type Kleur = "zwart" | "zand" | "maroon" | "wit" | "rood";

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
    kleur: "zand",
  },
  Toepassingen: {
    kop: "Uw situatie",
    lede: "Een nieuwbouw, een lek, een vochtige kelder of een geur die blijft hangen, elk met een eigen aanpak, droogtijd en opstelling.",
    kort: "Nieuwbouw, waterschade, kelder of geur.",
    kleur: "maroon",
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

/** {@link GROEPKOP} in het Frans; de sleutel blijft de Nederlandse groepstitel. */
export const GROEPKOP_FR: Record<string, { kop: string; lede: string; kort: string }> = {
  Gidsen: {
    kop: "Choisissez votre question",
    lede: "Une question concrète par guide, développée avec des temps de séchage, des exemples de calcul et les chiffres de notre propre catalogue.",
    kort: "Temps de séchage, choix de l'appareil et consommation, calculés.",
  },
  Uitleg: {
    kop: "Comment fonctionne le séchage, et pourquoi il ne se fait pas tout seul",
    lede: "Le contexte de tout ce qui précède : la technique, la raison de ne pas attendre, et ce que nous promettons quand vous louez chez nous.",
    kort: "La technique et ce que nous promettons.",
  },
  Toepassingen: {
    kop: "Votre situation",
    lede: "Une nouvelle construction, une fuite, une cave humide ou une odeur qui persiste, chacune avec sa propre approche, son temps de séchage et son installation.",
    kort: "Nouvelle construction, dégâts des eaux, cave ou odeur.",
  },
  "Het gamma": {
    kop: "Les appareils",
    lede: "Ce qui se trouve dans notre entrepôt, avec la capacité et la puissance de chaque appareil, et comment venir en chercher un vous-même.",
    kort: "Les appareils, avec capacité et puissance.",
  },
  "Prijzen & service": {
    kop: "Ce que ça coûte et comment c'est livré",
    lede: "Les tarifs, ce qui est compris dans une livraison, et ce qui change quand vous venez chercher les appareils vous-même.",
    kort: "Tarifs, livraison et enlèvement.",
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

/*
  De gidsen vooraan: dit is hun pagina. De rest volgt in de volgorde van het
  menu, zodat iemand die van daar komt dezelfde indeling terugvindt.

  De Nederlandse en de Franse menulijst hebben dezelfde vorm (`navigatie()`
  vertaalt ze item voor item), dus lopen ze hier naast elkaar: de Nederlandse
  geeft de sleutel voor samenvatting, vraag en pictogram, de taal van de pagina
  het label en het pad.
*/
function bouwGroepen(taal: Taal): HubGroep[] {
  const nl = navigatie("nl").ALLES_OVER_DROGEN;
  const lokaal = navigatie(taal).ALLES_OVER_DROGEN;
  const fr = taal === "fr";
  const volgorde = [
    ...nl.map((g, i) => ({ g, i })).filter(({ g }) => g.titel === "Gidsen"),
    ...nl.map((g, i) => ({ g, i })).filter(({ g }) => g.titel !== "Gidsen"),
  ];
  return volgorde.map(({ g: groep, i }) => {
    const kop = GROEPKOP[groep.titel];
    const kopFr = fr ? GROEPKOP_FR[groep.titel] : undefined;
    const titel = lokaal[i]?.titel ?? groep.titel;
    return {
      titel,
      kop: kopFr?.kop ?? (fr ? titel : (kop?.kop ?? groep.titel)),
      lede: kopFr?.lede ?? (fr ? "" : (kop?.lede ?? "")),
      kort: kopFr?.kort ?? (fr ? "" : (kop?.kort ?? "")),
      kleur: kop?.kleur ?? "wit",
      // "Alle gidsen" is de hub zelf; een kaart die naar zichzelf linkt helpt
      // niemand en kost een crawler een beurt.
      items: groep.items
        .map((item, j) => ({ item, hier: lokaal[i]?.items[j] ?? item }))
        .filter(({ item }) => item.path !== "/gids")
        .map(({ item, hier }) => ({
          path: hier.path,
          label: hier.label,
          vraag: (fr ? VRAAG_FR : VRAAG)[item.path] ?? hier.label,
          samenvatting: (fr ? SAMENVATTING_FR : SAMENVATTING)[item.path] ?? "",
          Icoon: PICTOGRAM[item.path] ?? FileIcon,
          groep: titel,
          kleur: kop?.kleur ?? "wit",
        })),
    };
  });
}

const CACHE: Partial<Record<Taal, HubGroep[]>> = {};

/** De groepen van de hub in één taal, één keer opgebouwd. */
export function hubGroepen(taal: Taal): HubGroep[] {
  return (CACHE[taal] ??= bouwGroepen(taal));
}

/** Alle pagina's op één hoop, in de volgorde van de groepen. */
export function hubItems(taal: Taal): HubItem[] {
  return hubGroepen(taal).flatMap((g) => g.items);
}
