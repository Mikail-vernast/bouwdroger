import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CalendarCheckIcon, TruckIcon, BoltIcon } from "@/components/home-v3/icons";
import { GaugeIcon, LayersIcon, LekIcon, WindIcon } from "@/components/content/icons";
import type { Copy } from "@/i18n/useTaal";

/**
 * De vaste teksten van de provincie- en gemeentepagina's, per taal.
 *
 * De lokale tekst (titel, intro, vragen) staat in de data: `regios.ts` en
 * `gemeenten.ts` voor het Nederlands, `regios-fr/` en `gemeenten-fr/` voor het
 * Frans. Wat hier staat, is wat het sjabloon er zelf omheen zet: koppen,
 * knoppen, de feitentabellen, de droogtijden, de vier stappen. Het Nederlands
 * is letterlijk wat er vóór de vertaling in `RegioPage` en `GemeentePage`
 * stond.
 *
 * Een plaatsnaam in een Franse zin vraagt soms een ander voorzetsel ("au
 * Rœulx", "d'Anvers"); daarvoor zijn `a()` en `de()` hieronder.
 */

type Lp = (nlPad: string) => string;

/** "à Mons", "au Rœulx", "aux Bons Villers". */
export function a(naam: string): string {
  if (naam.startsWith("Le ")) return `au ${naam.slice(3)}`;
  if (naam.startsWith("Les ")) return `aux ${naam.slice(4)}`;
  return `à ${naam}`;
}

/** "de Malines", "d'Anvers", "du Rœulx". */
export function de(naam: string): string {
  if (naam.startsWith("Le ")) return `du ${naam.slice(3)}`;
  if (naam.startsWith("Les ")) return `des ${naam.slice(4)}`;
  return /^[AEIOUYÉÈÊaeiouyéèê]/.test(naam) ? `d'${naam}` : `de ${naam}`;
}

/** "3 à 5 semaines", zoals `bereikLabel` en `termijnLabel` het in het Nederlands zeggen. */
function semaines(r: { min: number; max: number }): string {
  const eenheid = (n: number) => (n === 1 ? "semaine" : "semaines");
  return r.min === r.max ? `${r.min} ${eenheid(r.min)}` : `${r.min} à ${r.max} ${eenheid(r.max)}`;
}

/* ------------------------------------------------------------------ */
/* Wat beide pagina's delen                                             */
/* ------------------------------------------------------------------ */

interface Kaart {
  Icon: typeof LayersIcon;
  title: string;
  desc: string;
  path: string;
  label: string;
}

interface Stap {
  Icon: typeof LayersIcon;
  title: string;
  desc: string;
}

export interface GedeeldeCopy {
  /** Hoe een droogtermijn in de tabel staat; het Nederlands gebruikt `bereikLabel`. */
  weken: ((r: { min: number; max: number }) => string) | null;
  btwExcl: string;
  prijs: {
    kick: string;
    lede2: ReactNode;
    feiten: { dt: string; dd: string | ((prijs: string) => string) }[];
    knopPakket: string;
    knopPrijzen: string;
    beeldAlt: string;
    badge: string;
    badgeKlein: string;
  };
  pakket: {
    kick: string;
    h2: (waar: string) => string;
    knopPakket: string;
    knopPrijzen: string;
    kaarten: Kaart[];
    kaartKnop: string;
    garantie: (lp: Lp) => ReactNode;
    waarborg: ReactNode;
  };
  toestel: { kick: string; aria: (naam: string) => string; knop: string };
  levering: { kick: string; reserveer: string; uren: string; afhalen: string };
  praktijk: string;
  droog: {
    kick: string;
    h2: string;
    lede: ReactNode;
    knop: string;
    caption: string;
    kolommen: [string, string, string];
    chape: (dikte: number) => string;
    pleister: (dikte: number) => string;
    noot: (lp: Lp) => ReactNode;
  };
  verloop: { kick: string; lede: ReactNode; stappen: (tweede: string) => Stap[] };
  reviews: { kick: string; h2: string; lede: string; sterren: (n: number) => string };
  slot: {
    mbk: (waar: string) => string;
    h3: string;
    p: string;
    knop: string;
    beeldAlt: string;
  };
  hero: { kruimelpad: string; home: string; knop: string; bel: (nr: string) => string };
  contact: {
    titel: (waar: string) => string;
    lede: string;
    onderwerpen: (waar: string) => string[];
  };
  schema: { serviceType: string; werkgebied: string };
  leverenOpAfspraak: string;
  leverenOveral: string;
}

const KAARTEN_NL: Kaart[] = [
  {
    Icon: LayersIcon,
    title: "Chape drogen",
    desc: "Een berekende opstelling voor uw vloer, afgestemd op de dikte van de chape. De eindmeting helpt u en uw vloerlegger bepalen wanneer de afwerking kan starten.",
    path: "/chape-drogen",
    label: "Meer over chape drogen",
  },
  {
    Icon: WindIcon,
    title: "Pleisterwerk en nieuwbouw",
    desc: "Bouwdrogers en ventilatoren voor een gelijkmatige droging door de woning. Wij kiezen de capaciteit en verdelen de toestellen over de ruimtes.",
    path: "/nieuwbouw-drogen",
    label: "Meer over nieuwbouw drogen",
  },
  {
    Icon: LekIcon,
    title: "Drogen na waterschade",
    desc: "Een lek of overstroming? Laat eerst de oorzaak herstellen en stilstaand water verwijderen. Wij beoordelen de natte materialen en stemmen de droging daarop af.",
    path: "/waterschade",
    label: "Meer over drogen na waterschade",
  },
];

const KAARTEN_FR: Kaart[] = [
  {
    Icon: LayersIcon,
    title: "Sécher une chape",
    desc: "Une installation calculée pour votre sol, adaptée à l'épaisseur de la chape. La mesure finale vous aide, vous et votre poseur de sol, à décider quand la finition peut commencer.",
    path: "/chape-drogen",
    label: "En savoir plus sur le séchage de chape",
  },
  {
    Icon: WindIcon,
    title: "Plafonnage et nouvelle construction",
    desc: "Des déshumidificateurs et des ventilateurs pour un séchage homogène dans toute l'habitation. Nous choisissons la capacité et répartissons les appareils entre les pièces.",
    path: "/nieuwbouw-drogen",
    label: "En savoir plus sur le séchage d'une nouvelle construction",
  },
  {
    Icon: LekIcon,
    title: "Sécher après un dégât des eaux",
    desc: "Une fuite ou une inondation ? Faites d'abord réparer la cause et évacuer l'eau stagnante. Nous évaluons les matériaux mouillés et adaptons le séchage en conséquence.",
    path: "/waterschade",
    label: "En savoir plus sur le séchage après un dégât des eaux",
  },
];

export const GEDEELD: Copy<GedeeldeCopy> = {
  nl: {
    weken: null,
    btwExcl: "excl. btw",
    prijs: {
      kick: "Eén aanspreekpunt voor uw werf",
      lede2: (
        <>
          U huurt <b>een droogpakket</b> berekend op het volume, het materiaal en de temperatuur
          van uw werf. <b>De prijs is vooraf bekend</b> en omvat de levering, de installatie, de
          vochtmeting bij de start en bij de oplevering en de ophaling. Niet droog binnen de
          berekende termijn? Dan loopt de huur volgens de voorwaarden <b>kosteloos verder</b>.
        </>
      ),
      feiten: [
        { dt: "Eén losse bouwdroger, zelf geplaatst", dd: (p) => `vanaf ${p} per dag, excl. btw` },
        { dt: "Droogpakket op maat van uw werf", dd: "één vaste prijs, vooraf berekend" },
        { dt: "Levering, plaatsing, vochtmeting en ophaling", dd: "inbegrepen in elk pakket" },
        { dt: "Waarborg", dd: "geen" },
      ],
      knopPakket: "Bereken uw pakketprijs",
      knopPrijzen: "Bekijk alle huurprijzen",
      beeldAlt: "Zorgeloos huren bij Vernast: één prijs vooraf, geen waarborg",
      badge: "Prijs vooraf bekend",
      badgeKlein: "geen waarborg, geen nacalculatie",
    },
    pakket: {
      kick: "Uw complete droogpakket",
      h2: (waar) => `Bouwdroging in ${waar}, van plaatsing tot droog resultaat.`,
      knopPakket: "Bereken uw pakketprijs",
      knopPrijzen: "Prijzen en wat inbegrepen is",
      kaarten: KAARTEN_NL,
      kaartKnop: "Meer over deze droging",
      garantie: (lp) => (
        <>
          <b>100 % Drooggarantie inbegrepen.</b> Is het materiaal ondanks correcte
          droogomstandigheden niet droog binnen de berekende periode? Dan huurt u de toestellen
          kosteloos verder, volgens onze{" "}
          <Link to={lp("/drooggarantie")}>Drooggarantievoorwaarden</Link>. Dit geldt voor berekende
          pakketten die wij leveren en installeren; losse toestellen voor afhaling vallen er niet
          onder.
        </>
      ),
      waarborg: (
        <>
          <b>Geen waarborg.</b> De Calculator toont uw totaalprijs en de extra&rsquo;s die u zelf
          kiest, zoals een condenspomp, bijkomende verwarming of een officieel vochtrapport.
        </>
      ),
    },
    toestel: {
      kick: "De toestellen",
      aria: (naam) => `Bekijk ${naam}`,
      knop: "Bekijk dit toestel",
    },
    levering: {
      kick: "Twee manieren",
      reserveer: "Reserveer met levering",
      uren: "Ma–Vr 08:00–17:00, op afspraak",
      afhalen: "Zo werkt zelf afhalen",
    },
    praktijk: "Uit de praktijk",
    droog: {
      kick: "Hoe lang duurt het",
      h2: "Droogtijden met en zonder bouwdroger.",
      lede: (
        <>
          De tabel helpt u de huurperiode te plannen.{" "}
          <b>Een richttermijn is geen bevestiging dat het materiaal droog genoeg is.</b> De controle
          vóór de afwerking blijft nodig.
        </>
      ),
      knop: "Waarom bouwdrogen?",
      caption: "Droogtijden per materiaal en dikte",
      kolommen: ["Wat moet drogen", "Zonder droger", "Met droogpakket van Vernast"],
      chape: (d) => `Cementchape ${d} cm`,
      pleister: (d) => `Pleisterwerk ${d} cm`,
      noot: (lp) => (
        <>
          De tabel geeft richtwaarden voor de planning. De werkelijke droogtijd hangt af van het
          materiaal en de omstandigheden op de werf. Laat vóór de afwerking het restvocht
          controleren volgens de eisen van uw vloerlegger of schilder. Voor berekende pakketten
          geldt kosteloos verder huren onder de{" "}
          <Link to={lp("/drooggarantie")}>drooggarantievoorwaarden</Link>.{" "}
          <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>Hoe lang chape moet drogen</Link> legt
          het per situatie uit.
        </>
      ),
    },
    verloop: {
      kick: "Hoe het verloopt",
      lede: (
        <>
          <b>Van uw aanvraag tot de ophaling.</b> We spreken de plaatsing af, leggen het gebruik
          uit en volgen het droogproces op met vochtmetingen.
        </>
      ),
      stappen: (tweede) => [
        {
          Icon: CalendarCheckIcon,
          title: "U reserveert",
          desc: "Bereken uw pakket online of bel voor advies. Geef uw werfadres, gewenste startdatum en de afmetingen van de ruimtes door.",
        },
        {
          Icon: TruckIcon,
          title: tweede,
          desc: "Op het afgesproken moment plaatst de technieker de toestellen, sluit de condensafvoer aan en legt het gebruik uit.",
        },
        {
          Icon: BoltIcon,
          title: "De opstelling draait",
          desc: "Gebruik de opstelling volgens de uitleg van de technieker. Controleer de condensafvoer en meld storingen of nieuwe vochtproblemen.",
        },
        {
          Icon: GaugeIcon,
          title: "Wij meten en halen op",
          desc: "We controleren het vocht en spreken de ophaling af. Voor berekende pakketten geldt kosteloos verder huren als aan de drooggarantievoorwaarden is voldaan.",
        },
      ],
    },
    reviews: {
      kick: "Wat klanten zeggen",
      h2: "Ervaringen van onze klanten.",
      lede: "Lees hoe klanten de levering, afspraken en opvolging van Vernast ervaren. Deze beoordelingen gaan over onze dienstverlening in het hele werkgebied.",
      sterren: (n) => `${n} van de 5 sterren`,
    },
    slot: {
      mbk: (waar) => `Bouwdroger nodig in ${waar}`,
      h3: "Bereken uw droogpakket en kies uw gewenste leverdatum.",
      p: "Geplaatst en ingesteld door onze technieker, met een vochtmeting bij de start en bij de oplevering. Liever eerst even overleggen? Bel ons gerust.",
      knop: "Bereken uw droogpakket",
      beeldAlt: "Vernast technicus bij de bestelwagen met een bouwdroger",
    },
    hero: {
      kruimelpad: "Kruimelpad",
      home: "Home",
      knop: "Bereken uw droogpakket",
      bel: (nr) => `Bel ${nr}`,
    },
    contact: {
      titel: (waar) => `Een vraag over drogen in ${waar}?`,
      lede: "Beschrijf kort wat er moet drogen en hoe groot de ruimte is. U krijgt binnen één werkdag antwoord van een droogspecialist, met een voorstel voor het juiste pakket.",
      onderwerpen: (waar) => [
        `Advies voor een werf in ${waar}`,
        "Levering en leverdatum",
        "Prijs van een droogpakket",
        "Waterschade, dit is dringend",
        "Iets anders",
      ],
    },
    schema: { serviceType: "Bouwdroger verhuur", werkgebied: "Werkgebied" },
    leverenOpAfspraak: "Hier leveren we op afspraak.",
    leverenOveral: "Wij leveren in heel België.",
  },
  fr: {
    weken: semaines,
    btwExcl: "HTVA",
    prijs: {
      kick: "Un seul interlocuteur pour votre chantier",
      lede2: (
        <>
          Vous louez <b>un pack de séchage</b> calculé selon le volume, le matériau et la
          température de votre chantier. <b>Le prix est connu à l'avance</b> et comprend la
          livraison, l'installation, la mesure d'humidité au début et à la fin, ainsi que la
          reprise. Pas sec dans le délai calculé ? La location se poursuit alors{" "}
          <b>sans frais</b>, selon les conditions.
        </>
      ),
      feiten: [
        {
          dt: "Un déshumidificateur seul, installé par vous",
          dd: (p) => `à partir de ${p} par jour, HTVA`,
        },
        { dt: "Pack de séchage adapté à votre chantier", dd: "un prix fixe, calculé à l'avance" },
        {
          dt: "Livraison, installation, mesure d'humidité et reprise",
          dd: "comprises dans chaque pack",
        },
        { dt: "Caution", dd: "aucune" },
      ],
      knopPakket: "Calculez le prix de votre pack",
      knopPrijzen: "Voir tous les prix de location",
      beeldAlt: "Louer sans souci chez Vernast : un prix connu à l'avance, sans caution",
      badge: "Prix connu à l'avance",
      badgeKlein: "sans caution, sans supplément après coup",
    },
    pakket: {
      kick: "Votre pack de séchage complet",
      h2: (waar) => `Le séchage de chantier ${waar}, de l'installation au résultat sec.`,
      knopPakket: "Calculez le prix de votre pack",
      knopPrijzen: "Les prix et ce qui est compris",
      kaarten: KAARTEN_FR,
      kaartKnop: "En savoir plus sur ce séchage",
      garantie: (lp) => (
        <>
          <b>Garantie de séchage 100 % comprise.</b> Le matériau n'est pas sec dans la période
          calculée alors que les conditions de séchage étaient correctes ? Vous continuez alors à
          louer les appareils sans frais, selon nos{" "}
          <Link to={lp("/drooggarantie")}>conditions de la garantie de séchage</Link>. Elle
          s'applique aux packs calculés que nous livrons et installons ; les appareils seuls
          enlevés par vos soins n'en font pas partie.
        </>
      ),
      waarborg: (
        <>
          <b>Pas de caution.</b> Le calculateur affiche votre prix total et les options que vous
          choisissez vous-même, comme une pompe à condensats, un chauffage d'appoint ou un rapport
          d'humidité officiel.
        </>
      ),
    },
    toestel: {
      kick: "Les appareils",
      aria: (naam) => `Voir ${naam}`,
      knop: "Voir cet appareil",
    },
    levering: {
      kick: "Deux possibilités",
      reserveer: "Réserver avec livraison",
      uren: "Lu–Ve 08:00–17:00, sur rendez-vous",
      afhalen: "Comment fonctionne l'enlèvement",
    },
    praktijk: "Sur le terrain",
    droog: {
      kick: "Combien de temps",
      h2: "Temps de séchage avec et sans déshumidificateur.",
      lede: (
        <>
          Le tableau vous aide à planifier la durée de location.{" "}
          <b>Un délai indicatif ne confirme pas que le matériau est assez sec.</b> Le contrôle
          avant la finition reste nécessaire.
        </>
      ),
      knop: "Pourquoi sécher son chantier ?",
      caption: "Temps de séchage par matériau et par épaisseur",
      kolommen: ["Ce qui doit sécher", "Sans déshumidificateur", "Avec un pack de séchage Vernast"],
      chape: (d) => `Chape ciment ${String(d).replace(".", ",")} cm`,
      pleister: (d) => `Plafonnage ${String(d).replace(".", ",")} cm`,
      noot: (lp) => (
        <>
          Le tableau donne des valeurs indicatives pour la planification. Le temps de séchage réel
          dépend du matériau et des conditions sur le chantier. Avant la finition, faites contrôler
          l'humidité résiduelle selon les exigences de votre poseur de sol ou de votre peintre.
          Pour les packs calculés, la location se poursuit sans frais selon les{" "}
          <Link to={lp("/drooggarantie")}>conditions de la garantie de séchage</Link>.{" "}
          <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>Le temps de séchage d'une chape</Link>{" "}
          l'explique situation par situation.
        </>
      ),
    },
    verloop: {
      kick: "Comment ça se passe",
      lede: (
        <>
          <b>De votre demande à la reprise.</b> Nous convenons de l'installation, expliquons
          l'utilisation et suivons le séchage avec des mesures d'humidité.
        </>
      ),
      stappen: (tweede) => [
        {
          Icon: CalendarCheckIcon,
          title: "Vous réservez",
          desc: "Calculez votre pack en ligne ou appelez-nous pour un conseil. Indiquez l'adresse du chantier, la date de début souhaitée et les dimensions des pièces.",
        },
        {
          Icon: TruckIcon,
          title: tweede,
          desc: "Au moment convenu, le technicien installe les appareils, raccorde l'évacuation des condensats et explique l'utilisation.",
        },
        {
          Icon: BoltIcon,
          title: "L'installation tourne",
          desc: "Utilisez l'installation selon les explications du technicien. Contrôlez l'évacuation des condensats et signalez toute panne ou tout nouveau problème d'humidité.",
        },
        {
          Icon: GaugeIcon,
          title: "Nous mesurons et reprenons",
          desc: "Nous contrôlons l'humidité et convenons de la reprise. Pour les packs calculés, la location se poursuit sans frais si les conditions de la garantie de séchage sont remplies.",
        },
      ],
    },
    reviews: {
      kick: "Ce que disent nos clients",
      h2: "L'expérience de nos clients.",
      lede: "Découvrez comment nos clients vivent la livraison, les rendez-vous et le suivi de Vernast. Ces avis portent sur notre service dans toute notre zone d'activité.",
      sterren: (n) => `${n} étoiles sur 5`,
    },
    slot: {
      mbk: (waar) => `Besoin d'un déshumidificateur ${waar}`,
      h3: "Calculez votre pack de séchage et choisissez votre date de livraison.",
      p: "Installé et réglé par notre technicien, avec une mesure d'humidité au début et à la fin. Vous préférez en parler d'abord ? Appelez-nous sans hésiter.",
      knop: "Calculez votre pack de séchage",
      beeldAlt: "Technicien Vernast près de la camionnette avec un déshumidificateur de chantier",
    },
    hero: {
      kruimelpad: "Fil d'Ariane",
      home: "Accueil",
      knop: "Calculez votre pack de séchage",
      bel: (nr) => `Appelez le ${nr}`,
    },
    contact: {
      titel: (waar) => `Une question sur le séchage ${waar} ?`,
      lede: "Décrivez brièvement ce qui doit sécher et la taille de la pièce. Un spécialiste du séchage vous répond dans un délai d'un jour ouvrable, avec une proposition de pack adaptée.",
      onderwerpen: (waar) => [
        `Conseil pour un chantier ${waar}`,
        "Livraison et date de livraison",
        "Prix d'un pack de séchage",
        "Dégât des eaux, c'est urgent",
        "Autre chose",
      ],
    },
    schema: { serviceType: "Location de déshumidificateurs de chantier", werkgebied: "Zone d'activité" },
    leverenOpAfspraak: "Ici, nous livrons sur rendez-vous.",
    leverenOveral: "Nous livrons dans toute la Belgique.",
  },
};
