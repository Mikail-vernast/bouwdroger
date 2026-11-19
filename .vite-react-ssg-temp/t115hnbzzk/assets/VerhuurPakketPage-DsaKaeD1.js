import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { C as CheckIcon, A as ArrowRightIcon, D as DropletPinIcon, T as TruckIcon, F as FileCheckIcon, a as ChatIcon, R as RefreshIcon } from "./icons-DYrN4MjJ.js";
import { a as catInTaal, b as packageGalleryAltsInTaal, d as packageSpecLineInTaal, s as specsInTaal, r as roleInTaal } from "./verhuur.fr-CrIPL5Eo.js";
import { u as useCopy, b as useTaal, a as useLokaalPad, c as useToonBedrag } from "../main.mjs";
import { a as extraUitQuery, e as extraNaarQuery } from "./booking-CFp-lxcW.js";
import { G as GRATIS_LEVERING_VOETNOOT, b as GRATIS_TOT_KM, L as LAAGSTE_TARIEF } from "./levering-CO7G5c_f.js";
import { j as parseConfig, b as allItems, q as packageImage, r as packageGallery, n as totalCapacity, t as totalAirflow, o as dryingDays, c as configWeeks, d as configPrice, l as configToQuery, f as deviceCount } from "./verhuur-8XCQs1EE.js";
import { b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
/* empty css                       */
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "lucide-react";
import "./packages-DdkKuPcF.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurPakketPage.tsx");
const COPY = {
  nl: {
    title: "Uw droogpakket: toestellen, droogtijd en prijs | Vernast",
    description: "Droogpakket op maat van uw woning: de juiste bouwdrogers, ventilatoren en kachels, met verwachte droogtijd en totaalprijs, geleverd binnen 24 uur.",
    home: "Home",
    crumbDroging: "Bouwdroging",
    crumbPakket: "Uw droogpakket",
    cur: "Volledig droogpakket",
    chip: "Alles in één Droogservice",
    h1: "Volledig droogpakket",
    factToestellen: "toestellen in dit pakket",
    factAfvoer: "vochtafvoer per 24 uur",
    factDagen: "dagen verwachte droogtijd",
    fact24: "24 u",
    fact24Label: "geleverd én geïnstalleerd",
    afbeelding: (n) => `Afbeelding ${n}`,
    ptag: "Categorie: Levering",
    h2: (size) => `Volledig droogpakket, woning tot ${size} m²`,
    usps: [
      ["Gratis levering*", ` binnen ${GRATIS_TOT_KM} km, geplaatst en afgesteld door onze technicus`],
      ["Transparante prijzen", " zonder verrassingen, u ziet het totaal vooraf"],
      ["Advies op maat", " door een bouwkundige expert, ook tijdens de droging"],
      ["Energiezuinige ECO-toestellen", ", lager verbruik per liter onttrokken vocht"],
      ["Gratis voor- en na-vochtmeting", " bij elk pakket, u ziet het resultaat zwart op wit"]
    ],
    /*
      "Levering binnen 24 uur" stond hier voor elk adres, van Boom tot Aarlen.
      Direct beschikbaar gaat over voorraad en klopt overal; wanneer wij rijden
      hangt aan de postcode.
    */
    avail: "Direct beschikbaar — u kiest zelf uw leverdag",
    voor: (weeks) => `voor ${weeks} ${weeks === 1 ? "week" : "weken"}`,
    inbegrepen: "alles inbegrepen",
    doorgaan: "Doorgaan naar samenstellen",
    uwPakket: "Uw pakket",
    inbegrepenToestellen: "Inbegrepen toestellen",
    uwPakketSub: "Automatisch berekend op basis van uw oppervlakte, pleister- en chapedikte. Een kant-en-klaar pakket: exact wat uw droging nodig heeft, niets meer.",
    perTweeWeken: "/ 2 wk",
    spxAfvoer: "Vochtafvoer per 24 u",
    spxLucht: "m³/u luchtverzet",
    spxDagen: "Dagen verwachte droogtijd",
    rolH: "Wat doet elk toestel?",
    rolStep: "Uw pakket uitgelegd",
    rolSub: "Drogen is een samenspel van capaciteit, circulatie en temperatuur. Ontbreekt er één, dan loopt de droogtijd op, daarom stellen wij pakketten samen in plaats van losse toestellen te verhuren.",
    inUwPakket: (q) => `${q}× in uw pakket`,
    incH: "Bij levering inbegrepen",
    incSpan: "Zonder meerkost",
    incP: "De huurprijs is een alles-in-prijs. Dit zit standaard bij elk pakket, zonder dat u er iets voor moet aanvragen.",
    inc: [
      [
        "Gratis vochtmeting bij levering én ophaling",
        "Onze technicus meet bij plaatsing de vochtwaarden van chape, pleisterwerk en lucht, en meet opnieuw bij ophaling. Zo weet u zwart op wit dat de ruimte droog is voor u afwerkt. Altijd inbegrepen, een ondertekend meetrapport voor uw verzekeraar of dossier kunt u optioneel bijnemen."
      ],
      [
        "Levering, plaatsing en ophaling, op de dag die u kiest",
        `Wij brengen alle toestellen naar de werf in het gekozen tijdslot en halen ze weer op zodra de droging klaar is. Binnen ${GRATIS_TOT_KM} km van ons magazijn in Aartselaar zit dat in de pakketprijs; daarbuiten komt er een transportvergoeding bij vanaf € ${LAAGSTE_TARIEF} excl. btw voor de heenrit en de ophaling samen. U vult uw postcode in bij de eerste stap van de boeking en ziet het exacte bedrag dan meteen staan.`
      ],
      [
        "Plaatsing, aansluiting en afstelling",
        "Elk toestel komt op de juiste positie, de condensafvoer wordt aangesloten en de streefvochtigheid ingesteld. U hoeft niets te sjouwen of te programmeren."
      ],
      [
        "Uitleg ter plaatse en bereikbare helpdesk",
        "De technicus legt uit hoe de toestellen werken en welke streefwaarde u mag verwachten. Tijdens de volledige huurperiode zijn onze vochtexperts telefonisch bereikbaar."
      ],
      [
        "Flexibel verlengen of vroeger stoppen",
        "Duurt de droging langer, dan verlengt u online met één klik. Bent u vroeger klaar, dan stopt u de huur en betaalt u enkel de dagen die u effectief gebruikt hebt."
      ]
    ],
    rbChip: "Waarom een pakket werkt",
    rbH: "Drogen is capaciteit, circulatie én temperatuur.",
    rbP: "Ontbreekt er één van de drie, dan loopt de droogtijd op, of stopt het proces zelfs helemaal. Daarom stellen wij complete pakketten samen in plaats van losse toestellen te verhuren.",
    rb: [
      [
        "Capaciteit",
        "De bouwdrogers bepalen hoeveel liter vocht er per dag uit de lucht kan. Wij dimensioneren op uw werkelijke volume, niet te klein, niet te groot."
      ],
      [
        "Circulatie",
        "Zonder luchtbeweging vormt zich een verzadigd laagje tegen chape en muur, daar stopt de droging. De ventilatoren doorbreken dat en winnen dagen."
      ],
      [
        "Temperatuur",
        "Onder 15 °C neemt lucht nauwelijks vocht op. De kachel brengt koude ruimtes op werkingstemperatuur, zodat de drogers op volle kracht werken."
      ]
    ],
    stats: [
      ["60 %", "sneller droog dan natuurlijke droging"],
      ["48 u", "voor schimmel begint te groeien, snel starten loont"],
      ["≤ 2 %", "restvocht vereist voor u mag afwerken"],
      ["24 u", "geleverd, geplaatst en afgesteld"]
    ],
    watInbegrepen: "Wat is inbegrepen?",
    hulp: "Hulp nodig? Bel ons"
  },
  fr: {
    title: "Votre pack de séchage : appareils, durée et prix | Vernast",
    description: "Pack de séchage sur mesure pour votre habitation : les bons déshumidificateurs, ventilateurs et chauffages, avec durée de séchage prévue et prix total, livré sous 24 heures.",
    home: "Accueil",
    crumbDroging: "Séchage de chantier",
    crumbPakket: "Votre pack de séchage",
    cur: "Pack de séchage complet",
    chip: "Service de séchage tout compris",
    h1: "Pack de séchage complet",
    factToestellen: "appareils dans ce pack",
    factAfvoer: "d'humidité évacuée par 24 heures",
    factDagen: "jours de séchage prévus",
    fact24: "24 h",
    fact24Label: "livré et installé",
    afbeelding: (n) => `Image ${n}`,
    ptag: "Catégorie : livraison",
    h2: (size) => `Pack de séchage complet, habitation jusqu'à ${size} m²`,
    usps: [
      ["Livraison gratuite*", ` dans un rayon de ${GRATIS_TOT_KM} km, installation et réglage par notre technicien`],
      ["Prix transparents", " sans surprise, vous voyez le total à l'avance"],
      ["Conseil sur mesure", " par un expert en construction, également pendant le séchage"],
      ["Appareils ÉCO économes en énergie", ", consommation réduite par litre d'humidité extrait"],
      ["Mesure d'humidité gratuite avant et après", " avec chaque pack, vous voyez le résultat noir sur blanc"]
    ],
    avail: "Disponible immédiatement — vous choisissez votre jour de livraison",
    voor: (weeks) => `pour ${weeks} ${weeks === 1 ? "semaine" : "semaines"}`,
    inbegrepen: "tout compris",
    doorgaan: "Passer à la composition",
    uwPakket: "Votre pack",
    inbegrepenToestellen: "Appareils inclus",
    uwPakketSub: "Calculé automatiquement selon votre superficie et l'épaisseur du plafonnage et de la chape. Un pack clé en main : exactement ce dont votre séchage a besoin, rien de plus.",
    perTweeWeken: "/ 2 sem.",
    spxAfvoer: "Humidité évacuée par 24 h",
    spxLucht: "m³/h de débit d'air",
    spxDagen: "Jours de séchage prévus",
    rolH: "Que fait chaque appareil ?",
    rolStep: "Votre pack expliqué",
    rolSub: "Sécher, c'est une combinaison de capacité, de circulation et de température. S'il en manque une, le temps de séchage s'allonge ; c'est pourquoi nous composons des packs au lieu de louer des appareils séparés.",
    inUwPakket: (q) => `${q}× dans votre pack`,
    incH: "Compris à la livraison",
    incSpan: "Sans supplément",
    incP: "Le prix de location est un prix tout compris. Tout ceci est inclus d'office dans chaque pack, sans que vous deviez le demander.",
    inc: [
      [
        "Mesure d'humidité gratuite à la livraison et à la reprise",
        "Lors du placement, notre technicien mesure l'humidité de la chape, du plafonnage et de l'air, puis il mesure à nouveau à la reprise. Vous savez ainsi noir sur blanc que la pièce est sèche avant la finition. Toujours compris ; un rapport de mesure signé pour votre assureur ou votre dossier est disponible en option."
      ],
      [
        "Livraison, placement et reprise, le jour que vous choisissez",
        `Nous apportons tous les appareils sur le chantier dans le créneau choisi et les reprenons dès que le séchage est terminé. Dans un rayon de ${GRATIS_TOT_KM} km de notre entrepôt à Aartselaar, c'est compris dans le prix du pack ; au-delà s'ajoute une indemnité de transport à partir de ${LAAGSTE_TARIEF} € HTVA pour l'aller et la reprise ensemble. Vous indiquez votre code postal à la première étape de la réservation et voyez le montant exact immédiatement.`
      ],
      [
        "Placement, raccordement et réglage",
        "Chaque appareil est placé au bon endroit, l'évacuation des condensats est raccordée et l'humidité visée est réglée. Vous n'avez rien à porter ni à programmer."
      ],
      [
        "Explications sur place et assistance joignable",
        "Le technicien vous explique le fonctionnement des appareils et la valeur cible à laquelle vous pouvez vous attendre. Pendant toute la période de location, nos experts en humidité sont joignables par téléphone."
      ],
      [
        "Prolonger ou arrêter plus tôt en toute souplesse",
        "Le séchage prend plus de temps ? Vous prolongez en ligne en un clic. Vous avez terminé plus tôt ? Vous arrêtez la location et ne payez que les jours réellement utilisés."
      ]
    ],
    rbChip: "Pourquoi un pack fonctionne",
    rbH: "Sécher, c'est capacité, circulation et température.",
    rbP: "S'il manque l'une des trois, le temps de séchage s'allonge, voire le processus s'arrête complètement. C'est pourquoi nous composons des packs complets au lieu de louer des appareils séparés.",
    rb: [
      [
        "Capacité",
        "Les déshumidificateurs déterminent combien de litres d'humidité peuvent être retirés de l'air chaque jour. Nous dimensionnons selon votre volume réel, ni trop petit, ni trop grand."
      ],
      [
        "Circulation",
        "Sans mouvement d'air, une fine couche saturée se forme contre la chape et le mur, et le séchage s'y arrête. Les ventilateurs la brisent et font gagner des jours."
      ],
      [
        "Température",
        "Sous 15 °C, l'air n'absorbe presque pas d'humidité. Le chauffage amène les pièces froides à température de fonctionnement, pour que les déshumidificateurs travaillent à pleine puissance."
      ]
    ],
    stats: [
      ["60 %", "plus rapide que le séchage naturel"],
      ["48 h", "avant que les moisissures commencent à se développer : démarrer vite, ça paie"],
      ["≤ 2 %", "d'humidité résiduelle requise avant la finition"],
      ["24 h", "livré, placé et réglé"]
    ],
    watInbegrepen: "Qu'est-ce qui est compris ?",
    hulp: "Besoin d'aide ? Appelez-nous"
  },
  en: {
    title: "Your drying package: units, drying time and price | Vernast",
    description: "A drying package tailored to your home: the right construction dehumidifiers, fans and heaters, with expected drying time and total price, delivered within 24 hours.",
    home: "Home",
    crumbDroging: "Construction drying",
    crumbPakket: "Your drying package",
    cur: "Complete drying package",
    chip: "All-in-one drying service",
    h1: "Complete drying package",
    factToestellen: "units in this package",
    factAfvoer: "moisture extraction per 24 hours",
    factDagen: "days expected drying time",
    fact24: "24 h",
    fact24Label: "delivered and installed",
    afbeelding: (n) => `Image ${n}`,
    ptag: "Category: Delivery",
    h2: (size) => `Complete drying package, home up to ${size} m²`,
    usps: [
      ["Free delivery*", ` within ${GRATIS_TOT_KM} km, set up and adjusted by our technician`],
      ["Transparent prices", " with no surprises, you see the total up front"],
      ["Tailored advice", " from a building expert, during the drying as well"],
      ["Energy-efficient ECO units", ", lower consumption per litre of moisture extracted"],
      ["Free moisture reading before and after", " with every package, you see the result in black and white"]
    ],
    avail: "Available now — you choose your delivery day",
    voor: (weeks) => `for ${weeks} ${weeks === 1 ? "week" : "weeks"}`,
    inbegrepen: "all included",
    doorgaan: "Continue to build your package",
    uwPakket: "Your package",
    inbegrepenToestellen: "Included units",
    uwPakketSub: "Calculated automatically from your floor area and plaster and screed thickness. A ready-made package: exactly what your drying needs, nothing more.",
    perTweeWeken: "/ 2 wks",
    spxAfvoer: "Moisture extraction per 24 h",
    spxLucht: "m³/h airflow",
    spxDagen: "Days expected drying time",
    rolH: "What does each unit do?",
    rolStep: "Your package explained",
    rolSub: "Drying is an interplay of capacity, circulation and temperature. If one is missing, the drying time goes up, which is why we put together packages instead of hiring out individual units.",
    inUwPakket: (q) => `${q}× in your package`,
    incH: "Included with delivery",
    incSpan: "At no extra cost",
    incP: "The hire price is an all-in price. All of this comes as standard with every package, without you having to ask for it.",
    inc: [
      [
        "Free moisture reading at delivery and collection",
        "When setting up, our technician measures the moisture levels of the screed, plaster and air, and measures again at collection. That way you know in black and white that the room is dry before you finish it. Always included; a signed measurement report for your insurer or file is available as an option."
      ],
      [
        "Delivery, placement and collection, on the day you choose",
        `We bring all the units to the site in the time slot you choose and collect them again as soon as the drying is done. Within ${GRATIS_TOT_KM} km of our warehouse in Aartselaar that is included in the package price; beyond it a transport charge applies from €${LAAGSTE_TARIEF} excl. VAT for the outbound trip and the collection together. You enter your postcode at the first step of the booking and see the exact amount straight away.`
      ],
      [
        "Positioning, connection and adjustment",
        "Every unit goes in the right position, the condensate drain is connected and the target humidity is set. You don't have to carry or programme anything."
      ],
      [
        "On-site explanation and a helpdesk you can reach",
        "The technician explains how the units work and what target value you can expect. Throughout the hire period, our moisture experts are available by phone."
      ],
      [
        "Extend or stop early, flexibly",
        "If the drying takes longer, you extend online with one click. If you're done sooner, you stop the hire and only pay for the days you actually used."
      ]
    ],
    rbChip: "Why a package works",
    rbH: "Drying is capacity, circulation and temperature.",
    rbP: "If one of the three is missing, the drying time goes up, or the process even stops altogether. That's why we put together complete packages instead of hiring out individual units.",
    rb: [
      [
        "Capacity",
        "The construction dehumidifiers determine how many litres of moisture can be taken out of the air each day. We size to your actual volume, not too small, not too big."
      ],
      [
        "Circulation",
        "Without air movement, a saturated layer forms against the screed and walls, and that's where the drying stops. The fans break it up and win you days."
      ],
      [
        "Temperature",
        "Below 15 °C, air barely absorbs any moisture. The heater brings cold rooms up to working temperature, so the dehumidifiers run at full power."
      ]
    ],
    stats: [
      ["60%", "faster drying than natural drying"],
      ["48 h", "before mould starts to grow, so starting quickly pays off"],
      ["≤ 2%", "residual moisture required before you can finish"],
      ["24 h", "delivered, positioned and adjusted"]
    ],
    watInbegrepen: "What's included?",
    hulp: "Need help? Call us"
  }
};
const INC_ICONS = [DropletPinIcon, TruckIcon, FileCheckIcon, ChatIcon, RefreshIcon];
const VerhuurPakketPage = () => {
  const t = useCopy(COPY);
  const taal = useTaal();
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  const CAT = catInTaal(taal);
  const ROLE = roleInTaal(taal);
  const SPECS = specsInTaal(taal);
  const [searchParams] = useSearchParams();
  const config = useMemo(() => parseConfig(searchParams), [searchParams]);
  const extra = useMemo(() => extraUitQuery(searchParams), [searchParams]);
  const items = useMemo(() => allItems(config, extra), [config, extra]);
  const lead = packageImage(config, items);
  const gallery = packageGallery(config, items);
  const galleryAlts = packageGalleryAltsInTaal(config, items, gallery, taal);
  const [shot, setShot] = useState(0);
  const [tab, setTab] = useState(SPECS[0].k);
  const cap = totalCapacity(items);
  const air = totalAirflow(items);
  const days = dryingDays(config);
  const weeks = configWeeks(config);
  const total = configPrice(config, items);
  const bookingHref = `${lp("/verhuur/boeking")}?${configToQuery(config)}${extraNaarQuery(extra)}`;
  return /* @__PURE__ */ jsxs("div", { className: "vh-pkg", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: t.title,
        description: t.description,
        path: lp("/verhuur/pakket"),
        image: lead,
        ogType: "product",
        jsonLd: breadcrumbSchema([
          { name: t.home, path: lp("/") },
          { name: t.crumbDroging, path: lp("/verhuur/calculator") },
          { name: t.crumbPakket, path: lp("/verhuur/pakket") }
        ])
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: -1 }),
    /* @__PURE__ */ jsx("section", { className: "lead", children: /* @__PURE__ */ jsxs("div", { className: "shell", children: [
      /* @__PURE__ */ jsxs("div", { className: "crumb", children: [
        /* @__PURE__ */ jsx(Link, { to: lp("/"), children: t.home }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: t.crumbDroging }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "cur", children: t.cur })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lead-in", children: [
        /* @__PURE__ */ jsx("span", { className: "chip", children: t.chip }),
        /* @__PURE__ */ jsx("h1", { children: t.h1 }),
        /* @__PURE__ */ jsx("p", { className: "lead-sub", children: packageSpecLineInTaal(config, taal) }),
        /* @__PURE__ */ jsxs("div", { className: "lead-facts", children: [
          /* @__PURE__ */ jsxs("div", { className: "lf", children: [
            /* @__PURE__ */ jsx("b", { children: deviceCount(items) }),
            /* @__PURE__ */ jsx("span", { children: t.factToestellen })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lf", children: [
            /* @__PURE__ */ jsxs("b", { children: [
              cap,
              " L"
            ] }),
            /* @__PURE__ */ jsx("span", { children: t.factAfvoer })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lf", children: [
            /* @__PURE__ */ jsx("b", { children: days }),
            /* @__PURE__ */ jsx("span", { children: t.factDagen })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lf", children: [
            /* @__PURE__ */ jsx("b", { children: t.fact24 }),
            /* @__PURE__ */ jsx("span", { children: t.fact24Label })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "phero", children: /* @__PURE__ */ jsx("div", { className: "shell", children: /* @__PURE__ */ jsxs("div", { className: "pgrid", children: [
      /* @__PURE__ */ jsxs("div", { className: "gal", children: [
        /* @__PURE__ */ jsxs("div", { className: "gmain", children: [
          /* @__PURE__ */ jsx("span", { className: "gtag", children: t.chip }),
          /* @__PURE__ */ jsxs(Head, { children: [
            /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://zqzrdzpfxqlwrojxsqdl.supabase.co" }),
            /* @__PURE__ */ jsx("link", { rel: "preload", href: gallery[0], as: "image", fetchPriority: "high" })
          ] }),
          /* @__PURE__ */ jsx("img", { src: gallery[shot], alt: galleryAlts[shot], fetchPriority: "high", decoding: "async" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "gth", children: gallery.map((src, i) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: i === shot ? "on" : void 0,
            onClick: () => setShot(i),
            "aria-label": t.afbeelding(i + 1),
            children: /* @__PURE__ */ jsx("img", { src, alt: galleryAlts[i], loading: "lazy", decoding: "async" })
          },
          src
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pinfo", children: [
        /* @__PURE__ */ jsx("div", { className: "ptag", children: t.ptag }),
        /* @__PURE__ */ jsx("h2", { children: t.h2(config.size) }),
        /* @__PURE__ */ jsx("div", { className: "usp", children: t.usps.map(([vet, rest]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(CheckIcon, {}),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("b", { children: vet }),
            rest
          ] })
        ] }, vet)) }),
        /* @__PURE__ */ jsx("p", { className: "uspnoot", children: GRATIS_LEVERING_VOETNOOT }),
        /* @__PURE__ */ jsxs("div", { className: "avail", children: [
          /* @__PURE__ */ jsx("span", { className: "d" }),
          " ",
          t.avail
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pprice", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "pv", children: toon(total).tekst }),
          /* @__PURE__ */ jsxs("div", { className: "pl", children: [
            t.voor(weeks),
            " · ",
            t.inbegrepen,
            " · ",
            toon(total).label
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "jump", children: /* @__PURE__ */ jsxs(Link, { className: "btn btn-d", to: bookingHref, children: [
          t.doorgaan,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "build", id: "afrekenen", children: /* @__PURE__ */ jsx("div", { className: "shell", children: /* @__PURE__ */ jsx("div", { className: "bgrid", children: /* @__PURE__ */ jsxs("div", { className: "bcol", children: [
      /* @__PURE__ */ jsxs("div", { className: "blk", children: [
        /* @__PURE__ */ jsxs("div", { className: "blkh", children: [
          /* @__PURE__ */ jsx("h2", { children: t.uwPakket }),
          /* @__PURE__ */ jsx("span", { className: "step", children: t.inbegrepenToestellen })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "bsub", children: t.uwPakketSub }),
        /* @__PURE__ */ jsx("div", { children: items.map((it) => /* @__PURE__ */ jsxs("div", { className: "dev", children: [
          /* @__PURE__ */ jsxs("span", { className: "dq", children: [
            it.q,
            "×"
          ] }),
          /* @__PURE__ */ jsx("img", { src: CAT[it.k].img, alt: CAT[it.k].name, loading: "lazy", decoding: "async" }),
          /* @__PURE__ */ jsxs("span", { className: "dn", children: [
            /* @__PURE__ */ jsx("b", { children: CAT[it.k].name }),
            /* @__PURE__ */ jsx("small", { children: CAT[it.k].sub })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "dp", children: [
            toon(CAT[it.k].w2 * it.q).tekst,
            " ",
            t.perTweeWeken
          ] })
        ] }, it.k)) }),
        /* @__PURE__ */ jsxs("div", { className: "spx", children: [
          /* @__PURE__ */ jsxs("div", { className: "s", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              cap,
              /* @__PURE__ */ jsx("small", { children: " L" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.spxAfvoer })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "s", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              taal === "en" ? (air / 1e3).toFixed(1) : (air / 1e3).toFixed(1).replace(".", ","),
              /* @__PURE__ */ jsx("small", { children: "k" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.spxLucht })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "s", children: [
            /* @__PURE__ */ jsx("div", { className: "n", children: days }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.spxDagen })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "blk", children: [
        /* @__PURE__ */ jsxs("div", { className: "blkh", children: [
          /* @__PURE__ */ jsx("h2", { children: t.rolH }),
          /* @__PURE__ */ jsx("span", { className: "step", children: t.rolStep })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "bsub", children: t.rolSub }),
        /* @__PURE__ */ jsx("div", { className: "role", children: items.map((it) => /* @__PURE__ */ jsxs("div", { className: "rrow", children: [
          /* @__PURE__ */ jsx("span", { className: "ri", children: /* @__PURE__ */ jsx("img", { src: CAT[it.k].img, alt: CAT[it.k].name, loading: "lazy", decoding: "async" }) }),
          /* @__PURE__ */ jsxs("span", { className: "rc2", children: [
            /* @__PURE__ */ jsxs("span", { className: "rtag", children: [
              ROLE[it.k].tag,
              " · ",
              t.inUwPakket(it.q)
            ] }),
            /* @__PURE__ */ jsx("h3", { children: CAT[it.k].name }),
            /* @__PURE__ */ jsx("p", { children: ROLE[it.k].txt })
          ] })
        ] }, it.k)) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "incsec", children: /* @__PURE__ */ jsx("div", { className: "shell", children: /* @__PURE__ */ jsxs("div", { className: "incwrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "ih", children: [
        /* @__PURE__ */ jsx("h2", { children: t.incH }),
        /* @__PURE__ */ jsx("span", { children: t.incSpan })
      ] }),
      /* @__PURE__ */ jsx("p", { children: t.incP }),
      /* @__PURE__ */ jsx("div", { className: "inclist", children: t.inc.map(([titel, tekst], i) => {
        const Icon = INC_ICONS[i];
        return /* @__PURE__ */ jsxs("div", { className: i === 0 ? "ii wide" : "ii", children: [
          /* @__PURE__ */ jsx("span", { className: "ic2", children: /* @__PURE__ */ jsx(Icon, {}) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("b", { children: titel }),
            /* @__PURE__ */ jsx("p", { children: tekst })
          ] })
        ] }, titel);
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "redband", children: /* @__PURE__ */ jsx("div", { className: "shell", children: /* @__PURE__ */ jsxs("div", { className: "rb", children: [
      /* @__PURE__ */ jsx("span", { className: "rb-lz1" }),
      /* @__PURE__ */ jsx("span", { className: "rb-lz2" }),
      /* @__PURE__ */ jsxs("div", { className: "rb-in", children: [
        /* @__PURE__ */ jsxs("div", { className: "rb-head", children: [
          /* @__PURE__ */ jsx("span", { className: "rb-chip", children: t.rbChip }),
          /* @__PURE__ */ jsx("h2", { children: t.rbH }),
          /* @__PURE__ */ jsx("p", { children: t.rbP })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rb-grid", children: t.rb.map(([titel, tekst], i) => /* @__PURE__ */ jsxs("div", { className: "rb-c", children: [
          /* @__PURE__ */ jsx("div", { className: "rb-n", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("h3", { children: titel }),
          /* @__PURE__ */ jsx("p", { children: tekst })
        ] }, titel)) }),
        /* @__PURE__ */ jsx("div", { className: "rb-stats", children: t.stats.map(([cijfer, tekst]) => /* @__PURE__ */ jsxs("div", { className: "rb-s", children: [
          /* @__PURE__ */ jsx("b", { children: cijfer }),
          /* @__PURE__ */ jsx("span", { children: tekst })
        ] }, cijfer)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "specs", children: /* @__PURE__ */ jsxs("div", { className: "shell", children: [
      /* @__PURE__ */ jsx("div", { className: "stabs", children: SPECS.map((s) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `stab${s.k === tab ? " on" : ""}`,
          onClick: () => setTab(s.k),
          children: s.tab
        },
        s.k
      )) }),
      /* @__PURE__ */ jsx("div", { children: SPECS.map((s) => /* @__PURE__ */ jsxs("div", { className: `spane${s.k === tab ? " on" : ""}`, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: s.h }),
          s.p.map((paragraph, i) => /* @__PURE__ */ jsxs("div", { children: [
            i === 1 && /* @__PURE__ */ jsx("div", { className: "sh4", children: s.h4 }),
            /* @__PURE__ */ jsx("p", { className: "sp", dangerouslySetInnerHTML: { __html: paragraph } })
          ] }, paragraph.slice(0, 24))),
          /* @__PURE__ */ jsxs("div", { className: "sbtns", children: [
            /* @__PURE__ */ jsx("a", { className: "btn btn-r", href: "#afrekenen", children: t.watInbegrepen }),
            /* @__PURE__ */ jsx("a", { className: "btn btn-r", href: "tel:+3236899065", children: t.hulp })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "sgrid", children: s.g.map(([groupName, rows]) => /* @__PURE__ */ jsxs("div", { className: "sgrp2", children: [
          /* @__PURE__ */ jsx("h4", { children: groupName }),
          /* @__PURE__ */ jsx("div", { className: "stbl", children: rows.map(([label, value]) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: label }),
            /* @__PURE__ */ jsx("span", { children: value })
          ] }, label)) })
        ] }, groupName)) })
      ] }, s.k)) })
    ] }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  VerhuurPakketPage as default
};
