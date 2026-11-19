import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { g as CalendarCheckIcon, T as TruckIcon, B as BoltIcon } from "./V3Header-BeIMcMg7.js";
import { G as GaugeIcon, b as LayersIcon, a as WindIcon, L as LekIcon } from "./icons-DTi5RvwE.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/content/nadruk.tsx");
const nadruk = (tekst) => tekst.split(/\*\*(.+?)\*\*/g).map((deel, i) => i % 2 === 1 ? /* @__PURE__ */ jsx("b", { children: deel }, i) : /* @__PURE__ */ jsx(Fragment, { children: deel }, i));
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/content/ritme.ts");
const beurt = (i) => i % 2 === 0 ? "sw" : "sr";
const hoofdKnop = (k) => k === "sr" ? "btn btn-white glans" : "btn glans";
const tweedeKnop = (_k) => "btn btn-zwart";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/plaats/plaats.copy.tsx");
function a(naam) {
  if (naam.startsWith("Le ")) return `au ${naam.slice(3)}`;
  if (naam.startsWith("Les ")) return `aux ${naam.slice(4)}`;
  return `à ${naam}`;
}
function de(naam) {
  if (naam.startsWith("Le ")) return `du ${naam.slice(3)}`;
  if (naam.startsWith("Les ")) return `des ${naam.slice(4)}`;
  return /^[AEIOUYÉÈÊaeiouyéèê]/.test(naam) ? `d'${naam}` : `de ${naam}`;
}
function semaines(r) {
  const eenheid = (n) => n === 1 ? "semaine" : "semaines";
  return r.min === r.max ? `${r.min} ${eenheid(r.min)}` : `${r.min} à ${r.max} ${eenheid(r.max)}`;
}
function weeks(r) {
  const eenheid = (n) => n === 1 ? "week" : "weeks";
  return r.min === r.max ? `${r.min} ${eenheid(r.min)}` : `${r.min} to ${r.max} ${eenheid(r.max)}`;
}
const KAARTEN_NL = [
  {
    Icon: LayersIcon,
    title: "Chape drogen",
    desc: "Een berekende opstelling voor uw vloer, afgestemd op de dikte van de chape. De eindmeting helpt u en uw vloerlegger bepalen wanneer de afwerking kan starten.",
    path: "/chape-drogen",
    label: "Meer over chape drogen"
  },
  {
    Icon: WindIcon,
    title: "Pleisterwerk en nieuwbouw",
    desc: "Bouwdrogers en ventilatoren voor een gelijkmatige droging door de woning. Wij kiezen de capaciteit en verdelen de toestellen over de ruimtes.",
    path: "/nieuwbouw-drogen",
    label: "Meer over nieuwbouw drogen"
  },
  {
    Icon: LekIcon,
    title: "Drogen na waterschade",
    desc: "Een lek of overstroming? Laat eerst de oorzaak herstellen en stilstaand water verwijderen. Wij beoordelen de natte materialen en stemmen de droging daarop af.",
    path: "/waterschade",
    label: "Meer over drogen na waterschade"
  }
];
const KAARTEN_FR = [
  {
    Icon: LayersIcon,
    title: "Sécher une chape",
    desc: "Une installation calculée pour votre sol, adaptée à l'épaisseur de la chape. La mesure finale vous aide, vous et votre poseur de sol, à décider quand la finition peut commencer.",
    path: "/chape-drogen",
    label: "En savoir plus sur le séchage de chape"
  },
  {
    Icon: WindIcon,
    title: "Plafonnage et nouvelle construction",
    desc: "Des déshumidificateurs et des ventilateurs pour un séchage homogène dans toute l'habitation. Nous choisissons la capacité et répartissons les appareils entre les pièces.",
    path: "/nieuwbouw-drogen",
    label: "En savoir plus sur le séchage d'une nouvelle construction"
  },
  {
    Icon: LekIcon,
    title: "Sécher après un dégât des eaux",
    desc: "Une fuite ou une inondation ? Faites d'abord réparer la cause et évacuer l'eau stagnante. Nous évaluons les matériaux mouillés et adaptons le séchage en conséquence.",
    path: "/waterschade",
    label: "En savoir plus sur le séchage après un dégât des eaux"
  }
];
const KAARTEN_EN = [
  {
    Icon: LayersIcon,
    title: "Screed drying",
    desc: "A calculated set-up for your floor, matched to the thickness of the screed. The final reading helps you and your floor layer decide when finishing can start.",
    path: "/chape-drogen",
    label: "More about screed drying"
  },
  {
    Icon: WindIcon,
    title: "Plasterwork and new builds",
    desc: "Construction dehumidifiers and fans for even drying throughout the house. We choose the capacity and spread the units over the rooms.",
    path: "/nieuwbouw-drogen",
    label: "More about drying a new build"
  },
  {
    Icon: LekIcon,
    title: "Drying after water damage",
    desc: "A leak or a flood? Have the cause repaired and standing water removed first. We assess the wet materials and match the drying to them.",
    path: "/waterschade",
    label: "More about drying after water damage"
  }
];
const GEDEELD = {
  nl: {
    weken: null,
    btwExcl: "excl. btw",
    prijs: {
      kick: "Eén aanspreekpunt voor uw werf",
      lede2: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "U huurt ",
        /* @__PURE__ */ jsx("b", { children: "een droogpakket" }),
        " berekend op het volume, het materiaal en de temperatuur van uw werf. ",
        /* @__PURE__ */ jsx("b", { children: "De prijs is vooraf bekend" }),
        " en omvat de levering, de installatie, de vochtmeting bij de start en bij de oplevering en de ophaling. Niet droog binnen de berekende termijn? Dan loopt de huur volgens de voorwaarden ",
        /* @__PURE__ */ jsx("b", { children: "kosteloos verder" }),
        "."
      ] }),
      feiten: [
        { dt: "Eén losse bouwdroger, zelf geplaatst", dd: (p) => `vanaf ${p} per dag, excl. btw` },
        { dt: "Droogpakket op maat van uw werf", dd: "één vaste prijs, vooraf berekend" },
        { dt: "Levering, plaatsing, vochtmeting en ophaling", dd: "inbegrepen in elk pakket" },
        { dt: "Waarborg", dd: "geen" }
      ],
      knopPakket: "Bereken uw pakketprijs",
      knopPrijzen: "Bekijk alle huurprijzen",
      beeldAlt: "Zorgeloos huren bij Vernast: één prijs vooraf, geen waarborg",
      badge: "Prijs vooraf bekend",
      badgeKlein: "geen waarborg, geen nacalculatie"
    },
    pakket: {
      kick: "Uw complete droogpakket",
      h2: (waar) => `Bouwdroging in ${waar}, van plaatsing tot droog resultaat.`,
      knopPakket: "Bereken uw pakketprijs",
      knopPrijzen: "Prijzen en wat inbegrepen is",
      kaarten: KAARTEN_NL,
      kaartKnop: "Meer over deze droging",
      garantie: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("b", { children: "100 % Drooggarantie inbegrepen." }),
        " Is het materiaal ondanks correcte droogomstandigheden niet droog binnen de berekende periode? Dan huurt u de toestellen kosteloos verder, volgens onze",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "Drooggarantievoorwaarden" }),
        ". Dit geldt voor berekende pakketten die wij leveren en installeren; losse toestellen voor afhaling vallen er niet onder."
      ] }),
      waarborg: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("b", { children: "Geen waarborg." }),
        " De Calculator toont uw totaalprijs en de extra’s die u zelf kiest, zoals een condenspomp, bijkomende verwarming of een officieel vochtrapport."
      ] })
    },
    toestel: {
      kick: "De toestellen",
      aria: (naam) => `Bekijk ${naam}`,
      knop: "Bekijk dit toestel"
    },
    levering: {
      kick: "Twee manieren",
      reserveer: "Reserveer met levering",
      uren: "Ma–Vr 08:00–17:00, op afspraak",
      afhalen: "Zo werkt zelf afhalen"
    },
    praktijk: "Uit de praktijk",
    droog: {
      kick: "Hoe lang duurt het",
      h2: "Droogtijden met en zonder bouwdroger.",
      lede: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "De tabel helpt u de huurperiode te plannen.",
        " ",
        /* @__PURE__ */ jsx("b", { children: "Een richttermijn is geen bevestiging dat het materiaal droog genoeg is." }),
        " De controle vóór de afwerking blijft nodig."
      ] }),
      knop: "Waarom bouwdrogen?",
      caption: "Droogtijden per materiaal en dikte",
      kolommen: ["Wat moet drogen", "Zonder droger", "Met droogpakket van Vernast"],
      chape: (d) => `Cementchape ${d} cm`,
      pleister: (d) => `Pleisterwerk ${d} cm`,
      noot: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "De tabel geeft richtwaarden voor de planning. De werkelijke droogtijd hangt af van het materiaal en de omstandigheden op de werf. Laat vóór de afwerking het restvocht controleren volgens de eisen van uw vloerlegger of schilder. Voor berekende pakketten geldt kosteloos verder huren onder de",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "drooggarantievoorwaarden" }),
        ".",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "Hoe lang chape moet drogen" }),
        " legt het per situatie uit."
      ] })
    },
    verloop: {
      kick: "Hoe het verloopt",
      lede: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("b", { children: "Van uw aanvraag tot de ophaling." }),
        " We spreken de plaatsing af, leggen het gebruik uit en volgen het droogproces op met vochtmetingen."
      ] }),
      stappen: (tweede) => [
        {
          Icon: CalendarCheckIcon,
          title: "U reserveert",
          desc: "Bereken uw pakket online of bel voor advies. Geef uw werfadres, gewenste startdatum en de afmetingen van de ruimtes door."
        },
        {
          Icon: TruckIcon,
          title: tweede,
          desc: "Op het afgesproken moment plaatst de technieker de toestellen, sluit de condensafvoer aan en legt het gebruik uit."
        },
        {
          Icon: BoltIcon,
          title: "De opstelling draait",
          desc: "Gebruik de opstelling volgens de uitleg van de technieker. Controleer de condensafvoer en meld storingen of nieuwe vochtproblemen."
        },
        {
          Icon: GaugeIcon,
          title: "Wij meten en halen op",
          desc: "We controleren het vocht en spreken de ophaling af. Voor berekende pakketten geldt kosteloos verder huren als aan de drooggarantievoorwaarden is voldaan."
        }
      ]
    },
    reviews: {
      kick: "Wat klanten zeggen",
      h2: "Ervaringen van onze klanten.",
      lede: "Lees hoe klanten de levering, afspraken en opvolging van Vernast ervaren. Deze beoordelingen gaan over onze dienstverlening in het hele werkgebied.",
      sterren: (n) => `${n} van de 5 sterren`
    },
    slot: {
      mbk: (waar) => `Bouwdroger nodig in ${waar}`,
      h3: "Bereken uw droogpakket en kies uw gewenste leverdatum.",
      p: "Geplaatst en ingesteld door onze technieker, met een vochtmeting bij de start en bij de oplevering. Liever eerst even overleggen? Bel ons gerust.",
      knop: "Bereken uw droogpakket",
      beeldAlt: "Vernast technicus bij de bestelwagen met een bouwdroger"
    },
    hero: {
      kruimelpad: "Kruimelpad",
      home: "Home",
      knop: "Bereken uw droogpakket",
      bel: (nr) => `Bel ${nr}`
    },
    contact: {
      titel: (waar) => `Een vraag over drogen in ${waar}?`,
      lede: "Beschrijf kort wat er moet drogen en hoe groot de ruimte is. U krijgt binnen één werkdag antwoord van een droogspecialist, met een voorstel voor het juiste pakket.",
      onderwerpen: (waar) => [
        `Advies voor een werf in ${waar}`,
        "Levering en leverdatum",
        "Prijs van een droogpakket",
        "Waterschade, dit is dringend",
        "Iets anders"
      ]
    },
    schema: { serviceType: "Bouwdroger verhuur", werkgebied: "Werkgebied" },
    leverenOpAfspraak: "Hier leveren we op afspraak.",
    leverenOveral: "Wij leveren in heel België en Zuid-Nederland."
  },
  fr: {
    weken: semaines,
    btwExcl: "HTVA",
    prijs: {
      kick: "Un seul interlocuteur pour votre chantier",
      lede2: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "Vous louez ",
        /* @__PURE__ */ jsx("b", { children: "un pack de séchage" }),
        " calculé selon le volume, le matériau et la température de votre chantier. ",
        /* @__PURE__ */ jsx("b", { children: "Le prix est connu à l'avance" }),
        " et comprend la livraison, l'installation, la mesure d'humidité au début et à la fin, ainsi que la reprise. Pas sec dans le délai calculé ? La location se poursuit alors",
        " ",
        /* @__PURE__ */ jsx("b", { children: "sans frais" }),
        ", selon les conditions."
      ] }),
      feiten: [
        {
          dt: "Un déshumidificateur seul, installé par vous",
          dd: (p) => `à partir de ${p} par jour, HTVA`
        },
        { dt: "Pack de séchage adapté à votre chantier", dd: "un prix fixe, calculé à l'avance" },
        {
          dt: "Livraison, installation, mesure d'humidité et reprise",
          dd: "comprises dans chaque pack"
        },
        { dt: "Caution", dd: "aucune" }
      ],
      knopPakket: "Calculez le prix de votre pack",
      knopPrijzen: "Voir tous les prix de location",
      beeldAlt: "Louer sans souci chez Vernast : un prix connu à l'avance, sans caution",
      badge: "Prix connu à l'avance",
      badgeKlein: "sans caution, sans supplément après coup"
    },
    pakket: {
      kick: "Votre pack de séchage complet",
      h2: (waar) => `Le séchage de chantier ${waar}, de l'installation au résultat sec.`,
      knopPakket: "Calculez le prix de votre pack",
      knopPrijzen: "Les prix et ce qui est compris",
      kaarten: KAARTEN_FR,
      kaartKnop: "En savoir plus sur ce séchage",
      garantie: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("b", { children: "Garantie de séchage 100 % comprise." }),
        " Le matériau n'est pas sec dans la période calculée alors que les conditions de séchage étaient correctes ? Vous continuez alors à louer les appareils sans frais, selon nos",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "conditions de la garantie de séchage" }),
        ". Elle s'applique aux packs calculés que nous livrons et installons ; les appareils seuls enlevés par vos soins n'en font pas partie."
      ] }),
      waarborg: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("b", { children: "Pas de caution." }),
        " Le calculateur affiche votre prix total et les options que vous choisissez vous-même, comme une pompe à condensats, un chauffage d'appoint ou un rapport d'humidité officiel."
      ] })
    },
    toestel: {
      kick: "Les appareils",
      aria: (naam) => `Voir ${naam}`,
      knop: "Voir cet appareil"
    },
    levering: {
      kick: "Deux possibilités",
      reserveer: "Réserver avec livraison",
      uren: "Lu–Ve 08:00–17:00, sur rendez-vous",
      afhalen: "Comment fonctionne l'enlèvement"
    },
    praktijk: "Sur le terrain",
    droog: {
      kick: "Combien de temps",
      h2: "Temps de séchage avec et sans déshumidificateur.",
      lede: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "Le tableau vous aide à planifier la durée de location.",
        " ",
        /* @__PURE__ */ jsx("b", { children: "Un délai indicatif ne confirme pas que le matériau est assez sec." }),
        " Le contrôle avant la finition reste nécessaire."
      ] }),
      knop: "Pourquoi sécher son chantier ?",
      caption: "Temps de séchage par matériau et par épaisseur",
      kolommen: ["Ce qui doit sécher", "Sans déshumidificateur", "Avec un pack de séchage Vernast"],
      chape: (d) => `Chape ciment ${String(d).replace(".", ",")} cm`,
      pleister: (d) => `Plafonnage ${String(d).replace(".", ",")} cm`,
      noot: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "Le tableau donne des valeurs indicatives pour la planification. Le temps de séchage réel dépend du matériau et des conditions sur le chantier. Avant la finition, faites contrôler l'humidité résiduelle selon les exigences de votre poseur de sol ou de votre peintre. Pour les packs calculés, la location se poursuit sans frais selon les",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "conditions de la garantie de séchage" }),
        ".",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "Le temps de séchage d'une chape" }),
        " ",
        "l'explique situation par situation."
      ] })
    },
    verloop: {
      kick: "Comment ça se passe",
      lede: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("b", { children: "De votre demande à la reprise." }),
        " Nous convenons de l'installation, expliquons l'utilisation et suivons le séchage avec des mesures d'humidité."
      ] }),
      stappen: (tweede) => [
        {
          Icon: CalendarCheckIcon,
          title: "Vous réservez",
          desc: "Calculez votre pack en ligne ou appelez-nous pour un conseil. Indiquez l'adresse du chantier, la date de début souhaitée et les dimensions des pièces."
        },
        {
          Icon: TruckIcon,
          title: tweede,
          desc: "Au moment convenu, le technicien installe les appareils, raccorde l'évacuation des condensats et explique l'utilisation."
        },
        {
          Icon: BoltIcon,
          title: "L'installation tourne",
          desc: "Utilisez l'installation selon les explications du technicien. Contrôlez l'évacuation des condensats et signalez toute panne ou tout nouveau problème d'humidité."
        },
        {
          Icon: GaugeIcon,
          title: "Nous mesurons et reprenons",
          desc: "Nous contrôlons l'humidité et convenons de la reprise. Pour les packs calculés, la location se poursuit sans frais si les conditions de la garantie de séchage sont remplies."
        }
      ]
    },
    reviews: {
      kick: "Ce que disent nos clients",
      h2: "L'expérience de nos clients.",
      lede: "Découvrez comment nos clients vivent la livraison, les rendez-vous et le suivi de Vernast. Ces avis portent sur notre service dans toute notre zone d'activité.",
      sterren: (n) => `${n} étoiles sur 5`
    },
    slot: {
      mbk: (waar) => `Besoin d'un déshumidificateur ${waar}`,
      h3: "Calculez votre pack de séchage et choisissez votre date de livraison.",
      p: "Installé et réglé par notre technicien, avec une mesure d'humidité au début et à la fin. Vous préférez en parler d'abord ? Appelez-nous sans hésiter.",
      knop: "Calculez votre pack de séchage",
      beeldAlt: "Technicien Vernast près de la camionnette avec un déshumidificateur de chantier"
    },
    hero: {
      kruimelpad: "Fil d'Ariane",
      home: "Accueil",
      knop: "Calculez votre pack de séchage",
      bel: (nr) => `Appelez le ${nr}`
    },
    contact: {
      titel: (waar) => `Une question sur le séchage ${waar} ?`,
      lede: "Décrivez brièvement ce qui doit sécher et la taille de la pièce. Un spécialiste du séchage vous répond dans un délai d'un jour ouvrable, avec une proposition de pack adaptée.",
      onderwerpen: (waar) => [
        `Conseil pour un chantier ${waar}`,
        "Livraison et date de livraison",
        "Prix d'un pack de séchage",
        "Dégât des eaux, c'est urgent",
        "Autre chose"
      ]
    },
    schema: { serviceType: "Location de déshumidificateurs de chantier", werkgebied: "Zone d'activité" },
    leverenOpAfspraak: "Ici, nous livrons sur rendez-vous.",
    leverenOveral: "Nous livrons dans toute la Belgique et le sud des Pays-Bas."
  },
  en: {
    weken: weeks,
    btwExcl: "excl. VAT",
    prijs: {
      kick: "One point of contact for your site",
      lede2: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "You hire ",
        /* @__PURE__ */ jsx("b", { children: "a drying package" }),
        " calculated on the volume, the material and the temperature of your site. ",
        /* @__PURE__ */ jsx("b", { children: "The price is known in advance" }),
        " and covers delivery, installation, the moisture reading at the start and at handover, and collection. Not dry within the calculated period? Then the hire ",
        /* @__PURE__ */ jsx("b", { children: "continues free of charge" }),
        ", under the terms."
      ] }),
      feiten: [
        {
          dt: "A single construction dehumidifier, set up yourself",
          dd: (p) => `from ${p} per day, excl. VAT`
        },
        { dt: "Drying package tailored to your site", dd: "one fixed price, calculated in advance" },
        { dt: "Delivery, installation, moisture reading and collection", dd: "included in every package" },
        { dt: "Deposit", dd: "none" }
      ],
      knopPakket: "Calculate your package price",
      knopPrijzen: "See all hire prices",
      beeldAlt: "Worry-free hire with Vernast: one price up front, no deposit",
      badge: "Price known in advance",
      badgeKlein: "no deposit, no extra charges afterwards"
    },
    pakket: {
      kick: "Your complete drying package",
      h2: (waar) => `Construction drying ${waar}, from installation to a dry result.`,
      knopPakket: "Calculate your package price",
      knopPrijzen: "Prices and what is included",
      kaarten: KAARTEN_EN,
      kaartKnop: "More about this drying",
      garantie: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("b", { children: "100% drying guarantee included." }),
        " Is the material still not dry within the calculated period, despite correct drying conditions? Then you keep hiring the units free of charge, under our ",
        /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "drying guarantee terms" }),
        ". This applies to calculated packages that we deliver and install; single units for collection are not covered."
      ] }),
      waarborg: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("b", { children: "No deposit." }),
        " The calculator shows your total price and the extras you choose yourself, such as a condensate pump, extra heating or an official moisture report."
      ] })
    },
    toestel: {
      kick: "The units",
      aria: (naam) => `View ${naam}`,
      knop: "View this unit"
    },
    levering: {
      kick: "Two ways",
      reserveer: "Book with delivery",
      uren: "Mon–Fri 08:00–17:00, by appointment",
      afhalen: "How collection works"
    },
    praktijk: "From the field",
    droog: {
      kick: "How long does it take",
      h2: "Drying times with and without a dehumidifier.",
      lede: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "The table helps you plan the hire period.",
        " ",
        /* @__PURE__ */ jsx("b", { children: "A guide time does not confirm that the material is dry enough." }),
        " The check before finishing is still needed."
      ] }),
      knop: "Why construction drying?",
      caption: "Drying times by material and thickness",
      kolommen: ["What needs to dry", "Without a dehumidifier", "With a Vernast drying package"],
      chape: (d) => `Cement screed ${d} cm`,
      pleister: (d) => `Plasterwork ${d} cm`,
      noot: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "The table gives guide values for planning. The actual drying time depends on the material and the conditions on site. Before finishing, have the residual moisture checked against the requirements of your floor layer or decorator. For calculated packages, free continued hire applies under the",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "drying guarantee terms" }),
        ".",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "How long screed needs to dry" }),
        " ",
        "explains it case by case."
      ] })
    },
    verloop: {
      kick: "How it works",
      lede: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("b", { children: "From your request to collection." }),
        " We agree the installation, explain how to use the units and follow the drying process with moisture readings."
      ] }),
      stappen: (tweede) => [
        {
          Icon: CalendarCheckIcon,
          title: "You book",
          desc: "Calculate your package online or call us for advice. Give us your site address, your preferred start date and the dimensions of the rooms."
        },
        {
          Icon: TruckIcon,
          title: tweede,
          desc: "At the agreed time the technician installs the units, connects the condensate drain and explains how to use them."
        },
        {
          Icon: BoltIcon,
          title: "The set-up runs",
          desc: "Use the set-up as the technician explained. Check the condensate drain and report any faults or new moisture problems."
        },
        {
          Icon: GaugeIcon,
          title: "We measure and collect",
          desc: "We check the moisture and arrange collection. For calculated packages, free continued hire applies if the drying guarantee terms are met."
        }
      ]
    },
    reviews: {
      kick: "What customers say",
      h2: "Our customers' experiences.",
      lede: "Read how customers experience Vernast's delivery, appointments and follow-up. These reviews are about our service across our whole service area.",
      sterren: (n) => `${n} out of 5 stars`
    },
    slot: {
      mbk: (waar) => `Need a construction dehumidifier ${waar}`,
      h3: "Calculate your drying package and choose your delivery date.",
      p: "Installed and set up by our technician, with a moisture reading at the start and at handover. Prefer to talk it through first? Feel free to call us.",
      knop: "Calculate your drying package",
      beeldAlt: "Vernast technician by the van with a construction dehumidifier"
    },
    hero: {
      kruimelpad: "Breadcrumb",
      home: "Home",
      knop: "Calculate your drying package",
      bel: (nr) => `Call ${nr}`
    },
    contact: {
      titel: (waar) => `A question about drying ${waar}?`,
      lede: "Briefly describe what needs to dry and how big the room is. A drying specialist will reply within one working day, with a proposal for the right package.",
      onderwerpen: (waar) => [
        `Advice for a site ${waar}`,
        "Delivery and delivery date",
        "Price of a drying package",
        "Water damage, this is urgent",
        "Something else"
      ]
    },
    schema: { serviceType: "Construction dehumidifier hire", werkgebied: "Service area" },
    leverenOpAfspraak: "Here we deliver by appointment.",
    leverenOveral: "We deliver throughout Belgium and the south of the Netherlands."
  }
};
export {
  GEDEELD as G,
  a,
  beurt as b,
  de as d,
  hoofdKnop as h,
  nadruk as n,
  tweedeKnop as t
};
