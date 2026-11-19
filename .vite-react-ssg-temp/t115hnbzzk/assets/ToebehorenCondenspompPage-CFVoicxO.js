import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { P as PageMeta, M as MAPS_URL } from "./PageMeta-BXulEWcY.js";
import { l as V3Header, h as PinIcon } from "./V3Header-BeIMcMg7.js";
import { C as CONDENSPOMP, a as toebehorenPad, t as toestelLabelIn, V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { C as CheckIcon, A as ArrowRightIcon } from "./icons-DYrN4MjJ.js";
import { T as ToestelKaart } from "./ToestelKaart-CnhGGTku.js";
import { t as toebehorenInTaal } from "./toebehoren.fr-Bjqcq-Ot.js";
import { P as PRODUCTS, p as productImageAlt, t as toestelPad } from "./verhuur-CgnDb-wO.js";
import { p as productInTaal, t as toestelChipsInTaal } from "./verhuur.fr-CrIPL5Eo.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { b as useTaal, u as useCopy, a as useLokaalPad, c as useToonBedrag } from "../main.mjs";
import { p as productSchema, f as faqSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
/* empty css                       */
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./tarieven-ZrzMF0e-.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/ToebehorenCondenspompPage.copy.ts");
const COPY = {
  nl: {
    home: "Home",
    toestellen: "Toestellen",
    categorie: "Toebehoren bouwdroger",
    bekijk: (alt) => `Bekijk: ${alt}`,
    promo: (prijs) => `${prijs} per bouwdroger per dag`,
    aansluiting: "aansluiting inbegrepen",
    pakketK: "Bij een geleverd pakket",
    pakketTitel: "Onze technieker sluit hem aan",
    pakketTekst: (prijs) => `Standaard één pomp per bouwdroger, aan ${prijs} per dag. Bij de installatie legt de technieker de afvoer naar een lavabo, douche, vloerput of wasmachineaansluiting. U vinkt hem aan tijdens het berekenen van uw pakket.`,
    pakketCta: "Bereken uw pakket",
    afhaalK: "Bij een afhaling",
    afhaalTitel: "De pomp gaat mee met uw toestel",
    afhaalTekst: (prijs) => `Haalt u een bouwdroger af in Aartselaar, dan kan de pomp mee. Vraag hem bij uw reservatie, dan leggen wij hem klaar; aansluiten is een slang in de bak en een stekker in het stopcontact. De ${prijs} per dag komt op de eindfactuur, samen met de werkelijke huurperiode.`,
    afhaalCta: "Reserveer een toestel met pomp",
    opstKick: "De aansluiting in beeld",
    opstTitel: "Van bouwdroger naar afvoer, zonder emmer legen.",
    opstLede: "Met een slang naar de pomp of met de pomp onder de condensafvoer: de juiste plaatsing hangt af van uw bouwdroger en de beschikbare ruimte.",
    opstNote: "Illustratieve voorbeeldopstellingen. Laat de aansluiting afstemmen op uw toestel. De toevoerslang moet naar de pomp aflopen; de pomp voert het water daarna verder af.",
    waarvoor: "Waarvoor deze pomp",
    afvoerKick: "Automatische waterafvoer",
    afvoerTitel: "Zo loopt het water weg.",
    afvoerLede: "Vier stappen die zich de hele huurperiode herhalen, zonder dat er iemand bij hoeft te zijn.",
    zonderK: "Zonder pomp",
    zonderTitel: "U leegt de opvangbak gemiddeld 2 keer per dag",
    zonderTekst: "Loopt de bak vol terwijl er niemand is, dan schakelt de bouwdroger zichzelf uit en staat hij stil tot u hem leegt. Een weekend stilstand kost u een weekend droogtijd.",
    of: "of",
    metK: "Met pomp",
    metTitel: "U kijkt ernaar, meer niet",
    metTekst: "Het condenswater loopt continu weg naar uw afvoer. Het toestel draait dag en nacht door, ook in het weekend, en haalt zo de droogtijd die ervoor berekend is.",
    techFiche: "Technische fiche",
    volledigeSpecs: "Volledige specificaties",
    specsLede: "Alle waarden zoals opgemeten onder standaardomstandigheden. Twijfelt u of uw afvoer haalbaar is? Bel ons, dan rekenen we het samen na.",
    afhalenKick: "Afhalen in Aartselaar",
    afhalenTitel: "Of neem hem gewoon mee.",
    afhalenLede: "Reserveer uw bouwdroger online, vermeld de condenspomp bij uw reservatie en wij zetten allebei klaar tegen uw afhaalmoment.",
    pickupbarTitel: "Afhaalpunt Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel · Ma–Vr 08:00–17:00",
    route: "Plan uw route",
    afNoteVoor: "De pomp weegt geen 2 kg en past in elke koffer. Het toestel waar hij bij hoort niet: reken op 30 tot 50 kg. Liever niet tillen? Dan kiest u een",
    afNoteLink: "pakket met levering",
    afNoteNa: ", en sluiten wij de afvoer meteen zelf aan.",
    hoortBij: "Hoort bij",
    hoortBijTitel: "De bouwdrogers waar de pomp op werkt",
    hoortBijLede: "Elke bouwdroger vangt zijn eigen condenswater op, dus elke droger krijgt zijn eigen pomp.",
    perDag: "/dag",
    bekijken: "Bekijken",
    faqKick: "Veelgestelde vragen",
    faqTitel: "Over de condenspomp",
    ctaKick: "Nog niet zeker?",
    ctaTitel: "Laat de configurator het voor u uitrekenen.",
    ctaTekst: "Geef uw oppervlakte en plafondhoogte in. U ziet meteen welk toestel, hoeveel units en hoeveel condenspompen bij uw ruimte horen, met de prijs erbij.",
    ctaKnop: "Naar de configurator",
    bel: "Bel 03 689 90 65",
    expertAlt: "Vernast droogexpert"
  },
  fr: {
    home: "Accueil",
    toestellen: "Appareils",
    categorie: "Accessoire pour déshumidificateur de chantier",
    bekijk: (alt) => `Voir : ${alt}`,
    promo: (prijs) => `${prijs} par déshumidificateur et par jour`,
    aansluiting: "raccordement compris",
    pakketK: "Avec un pack livré",
    pakketTitel: "Notre technicien la raccorde",
    pakketTekst: (prijs) => `D'office une pompe par déshumidificateur, à ${prijs} par jour. Lors de l'installation, le technicien tire l'évacuation vers un lavabo, une douche, un siphon de sol ou un raccordement de machine à laver. Vous la cochez en calculant votre pack.`,
    pakketCta: "Calculez votre pack",
    afhaalK: "Avec un enlèvement",
    afhaalTitel: "La pompe part avec votre appareil",
    afhaalTekst: (prijs) => `Vous venez chercher un déshumidificateur à Aartselaar ? La pompe peut partir avec. Demandez-la lors de votre réservation et nous la préparons ; la raccorder, c'est un tuyau dans le bac et une fiche dans la prise. Les ${prijs} par jour figurent sur la facture finale, avec la période de location réelle.`,
    afhaalCta: "Réserver un appareil avec pompe",
    opstKick: "Le raccordement en images",
    opstTitel: "Du déshumidificateur à l'évacuation, sans vider de seau.",
    opstLede: "Avec un tuyau vers la pompe ou avec la pompe sous l'évacuation de condensat : le bon emplacement dépend de votre déshumidificateur et de la place disponible.",
    opstNote: "Exemples d'installation à titre d'illustration. Faites adapter le raccordement à votre appareil. Le tuyau d'arrivée doit descendre vers la pompe ; la pompe évacue ensuite l'eau plus loin.",
    waarvoor: "À quoi sert cette pompe",
    afvoerKick: "Évacuation automatique de l'eau",
    afvoerTitel: "Voici comment l'eau s'en va.",
    afvoerLede: "Quatre étapes qui se répètent pendant toute la période de location, sans que personne ne doive être présent.",
    zonderK: "Sans pompe",
    zonderTitel: "Vous videz le bac en moyenne 2 fois par jour",
    zonderTekst: "Si le bac se remplit alors que personne n'est là, le déshumidificateur s'arrête de lui-même et reste à l'arrêt jusqu'à ce que vous le vidiez. Un week-end d'arrêt vous coûte un week-end de séchage.",
    of: "ou",
    metK: "Avec pompe",
    metTitel: "Vous y jetez un œil, rien de plus",
    metTekst: "L'eau de condensation s'écoule en continu vers votre évacuation. L'appareil tourne jour et nuit, week-end compris, et atteint ainsi le temps de séchage calculé pour lui.",
    techFiche: "Fiche technique",
    volledigeSpecs: "Spécifications complètes",
    specsLede: "Toutes les valeurs mesurées dans des conditions standard. Vous doutez que votre évacuation soit faisable ? Appelez-nous, nous ferons le calcul ensemble.",
    afhalenKick: "Enlèvement à Aartselaar",
    afhalenTitel: "Ou emportez-la simplement.",
    afhalenLede: "Réservez votre déshumidificateur en ligne, mentionnez la pompe à condensats dans votre réservation et nous préparons les deux pour votre moment d'enlèvement.",
    pickupbarTitel: "Point d'enlèvement Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Le long de l'A12, facilement accessible depuis Anvers et Bruxelles · Lu–ve 08:00–17:00",
    route: "Planifiez votre itinéraire",
    afNoteVoor: "La pompe pèse moins de 2 kg et tient dans n'importe quel coffre. L'appareil auquel elle est reliée, non : comptez 30 à 50 kg. Vous préférez ne pas porter ? Choisissez alors un",
    afNoteLink: "pack avec livraison",
    afNoteNa: ", et nous raccordons l'évacuation nous-mêmes sur place.",
    hoortBij: "Va avec",
    hoortBijTitel: "Les déshumidificateurs sur lesquels la pompe fonctionne",
    hoortBijLede: "Chaque déshumidificateur recueille sa propre eau de condensation, chaque déshumidificateur reçoit donc sa propre pompe.",
    perDag: "/jour",
    bekijken: "Voir",
    faqKick: "Questions fréquentes",
    faqTitel: "À propos de la pompe à condensats",
    ctaKick: "Pas encore sûr ?",
    ctaTitel: "Laissez le configurateur faire le calcul pour vous.",
    ctaTekst: "Indiquez votre surface et la hauteur sous plafond. Vous voyez tout de suite quel appareil, combien d'unités et combien de pompes à condensats correspondent à votre espace, avec le prix.",
    ctaKnop: "Vers le configurateur",
    bel: "Appelez le 03 689 90 65",
    expertAlt: "Expert en séchage Vernast"
  },
  en: {
    home: "Home",
    toestellen: "Units",
    categorie: "Construction dehumidifier accessory",
    bekijk: (alt) => `View: ${alt}`,
    promo: (prijs) => `${prijs} per construction dehumidifier per day`,
    aansluiting: "connection included",
    pakketK: "With a delivered package",
    pakketTitel: "Our technician connects it",
    pakketTekst: (prijs) => `One pump per construction dehumidifier as standard, at ${prijs} per day. During installation, the technician runs the drain to a washbasin, shower, floor drain or washing machine connection. You tick it while calculating your package.`,
    pakketCta: "Calculate your package",
    afhaalK: "With a collection",
    afhaalTitel: "The pump comes with your unit",
    afhaalTekst: (prijs) => `If you collect a construction dehumidifier in Aartselaar, the pump can come along. Ask for it when you book and we'll have it ready; connecting it is a hose in the tank and a plug in the socket. The ${prijs} per day goes on the final invoice, together with the actual hire period.`,
    afhaalCta: "Book a unit with pump",
    opstKick: "The connection in pictures",
    opstTitel: "From dehumidifier to drain, without emptying a bucket.",
    opstLede: "With a hose to the pump or with the pump under the condensate outlet: the right placement depends on your construction dehumidifier and the space available.",
    opstNote: "Illustrative example set-ups. Have the connection matched to your unit. The supply hose must slope down to the pump; the pump then carries the water away.",
    waarvoor: "What this pump is for",
    afvoerKick: "Automatic water drainage",
    afvoerTitel: "This is how the water drains away.",
    afvoerLede: "Four steps that repeat throughout the hire period, without anyone needing to be there.",
    zonderK: "Without pump",
    zonderTitel: "You empty the tank about twice a day on average",
    zonderTekst: "If the tank fills up while nobody is there, the construction dehumidifier switches itself off and stays idle until you empty it. A weekend standing still costs you a weekend of drying time.",
    of: "or",
    metK: "With pump",
    metTitel: "You keep an eye on it, nothing more",
    metTekst: "The condensate drains continuously to your drain. The unit keeps running day and night, weekends included, and so achieves the drying time calculated for it.",
    techFiche: "Technical data sheet",
    volledigeSpecs: "Full specifications",
    specsLede: "All values as measured under standard conditions. Not sure whether your drain is feasible? Call us and we'll work it out together.",
    afhalenKick: "Collection in Aartselaar",
    afhalenTitel: "Or simply take it with you.",
    afhalenLede: "Book your construction dehumidifier online, mention the condensate pump in your booking and we'll have both ready for your collection time.",
    pickupbarTitel: "Vernast collection point, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Right by the A12, easy to reach from Antwerp and Brussels · Mon–Fri 08:00–17:00",
    route: "Plan your route",
    afNoteVoor: "The pump weighs less than 2 kg and fits in any car boot. The unit it goes with does not: expect 30 to 50 kg. Rather not lift? Then choose a",
    afNoteLink: "package with delivery",
    afNoteNa: ", and we'll connect the drain ourselves straight away.",
    hoortBij: "Goes with",
    hoortBijTitel: "The construction dehumidifiers the pump works with",
    hoortBijLede: "Every construction dehumidifier collects its own condensate, so every dehumidifier gets its own pump.",
    perDag: "/day",
    bekijken: "View",
    faqKick: "Frequently asked questions",
    faqTitel: "About the condensate pump",
    ctaKick: "Not sure yet?",
    ctaTitel: "Let the configurator work it out for you.",
    ctaTekst: "Enter your floor area and ceiling height. You'll see straight away which unit, how many units and how many condensate pumps suit your space, with the price.",
    ctaKnop: "Go to the configurator",
    bel: "Call 03 689 90 65",
    expertAlt: "Vernast drying expert"
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/ToebehorenCondenspompPage.tsx");
const ToebehorenCondenspompPage = () => {
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  const seo = useSeo("toebehorenCondenspomp");
  const prijs = `${toon(CONDENSPOMP.dag).tekst} ${toon(CONDENSPOMP.dag).label}`;
  const pomp = toebehorenInTaal(CONDENSPOMP, taal, prijs);
  const pad = lp(toebehorenPad(pomp.slug));
  const [shot, setShot] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const drogers = ["ttk170", "ttk350", "ttk650"].filter((key) => PRODUCTS[key]);
  return /* @__PURE__ */ jsxs("div", { className: "vh-prod tb-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: seo.title,
        description: seo.description,
        path: pad,
        image: pomp.img[0][0],
        ogType: "product",
        jsonLd: [
          productSchema({
            name: pomp.naam,
            description: pomp.sum,
            image: pomp.img[0][0],
            path: pad,
            pricePerDay: pomp.dag,
            category: t.categorie,
            specs: pomp.specs
          }),
          faqSchema(pomp.faq.map(([question, answer]) => ({ question, answer }))),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.toestellen, path: lp("/machines") },
            { name: pomp.naam, path: pad }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 320 }),
    /* @__PURE__ */ jsx("section", { className: "phero", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "crumb", children: [
        /* @__PURE__ */ jsx(Link, { to: lp("/"), children: t.home }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: t.toestellen }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "cur", children: pomp.naam })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pgrid", children: [
        /* @__PURE__ */ jsxs("div", { className: "gal", children: [
          /* @__PURE__ */ jsxs("div", { className: "main", children: [
            /* @__PURE__ */ jsx("span", { className: "badge", children: pomp.badge }),
            /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("link", { rel: "preload", href: "/vernast/bg-red-wide-2.webp", as: "image", type: "image/webp", fetchPriority: "high" }) }),
            /* @__PURE__ */ jsx("img", { src: pomp.img[shot][0], alt: pomp.img[shot][1], width: 1254, height: 1254, fetchPriority: "high", decoding: "async" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "thumbs", children: pomp.img.map(([src, alt], i) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: i === shot ? "on" : void 0,
              onClick: () => setShot(i),
              "aria-label": t.bekijk(alt),
              "aria-pressed": i === shot,
              children: /* @__PURE__ */ jsx("img", { src, alt, loading: "lazy", decoding: "async" })
            },
            src
          )) }),
          /* @__PURE__ */ jsx("p", { className: "tb-bijschrift", "aria-live": "polite", children: pomp.img[shot][2] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pinfo", children: [
          /* @__PURE__ */ jsx("div", { className: "ptype", children: pomp.type }),
          /* @__PURE__ */ jsx("h1", { children: pomp.naam }),
          /* @__PURE__ */ jsxs("div", { className: "promo-online", children: [
            /* @__PURE__ */ jsx(CheckIcon, { size: 15, strokeWidth: 2.4 }),
            /* @__PURE__ */ jsx("b", { children: t.promo(prijs) }),
            /* @__PURE__ */ jsxs("span", { children: [
              " · ",
              t.aansluiting
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "psum", children: pomp.sum }),
          /* @__PURE__ */ jsx("div", { className: "keyspec", children: pomp.key.map(([label, value, unit]) => /* @__PURE__ */ jsxs("div", { className: "k", children: [
            /* @__PURE__ */ jsx("div", { className: "kl", children: label }),
            /* @__PURE__ */ jsxs("div", { className: "kv", children: [
              value,
              unit && /* @__PURE__ */ jsxs("small", { children: [
                " ",
                unit
              ] })
            ] })
          ] }, label)) }),
          /* @__PURE__ */ jsxs("div", { className: "tb-wegen", children: [
            /* @__PURE__ */ jsxs("div", { className: "tb-weg", children: [
              /* @__PURE__ */ jsx("span", { className: "tb-k", children: t.pakketK }),
              /* @__PURE__ */ jsx("b", { children: t.pakketTitel }),
              /* @__PURE__ */ jsx("p", { children: t.pakketTekst(prijs) }),
              /* @__PURE__ */ jsxs(Link, { className: "btn btn-red", to: lp("/verhuur/calculator"), children: [
                t.pakketCta,
                /* @__PURE__ */ jsx(ArrowRightIcon, { size: 14, strokeWidth: 2.4 })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "tb-weg", children: [
              /* @__PURE__ */ jsx("span", { className: "tb-k", children: t.afhaalK }),
              /* @__PURE__ */ jsx("b", { children: t.afhaalTitel }),
              /* @__PURE__ */ jsx("p", { children: t.afhaalTekst(prijs) }),
              /* @__PURE__ */ jsxs(Link, { className: "btn btn-out", to: lp("/verhuur/afhalen?pomp=1"), children: [
                t.afhaalCta,
                /* @__PURE__ */ jsx(ArrowRightIcon, { size: 14, strokeWidth: 2.4 })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "tb-opstellingen", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.opstKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.opstTitel }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.opstLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "tb-fotogrid", children: pomp.img.slice(1).map(([src, alt, bijschrift]) => /* @__PURE__ */ jsxs("figure", { children: [
        /* @__PURE__ */ jsx("img", { src, alt, width: 1254, height: 1254, loading: "lazy", decoding: "async" }),
        /* @__PURE__ */ jsx("figcaption", { children: bijschrift })
      ] }, src)) }),
      /* @__PURE__ */ jsx("p", { className: "tb-beeldnote", children: t.opstNote })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "about", children: /* @__PURE__ */ jsxs("div", { className: "wrap about-grid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.waarvoor }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: pomp.aboutTitle }),
        /* @__PURE__ */ jsx("div", { className: "about-body", style: { marginTop: 22 }, children: pomp.about.map((paragraph) => (
          // Vaste designtekst met <strong>-accenten — geen invoer van buitenaf.
          /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: paragraph } }, paragraph.slice(0, 24))
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bullets", children: pomp.bullets.map(([title, body]) => /* @__PURE__ */ jsxs("div", { className: "bl", children: [
        /* @__PURE__ */ jsx(CheckIcon, { size: 17, strokeWidth: 2.4 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: title }),
          /* @__PURE__ */ jsx("p", { children: body })
        ] })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "incl afh", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.afvoerKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.afvoerTitel }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.afvoerLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "astep-grid", children: pomp.stappen.map(([title, body], i) => /* @__PURE__ */ jsxs("div", { className: "astep", children: [
        /* @__PURE__ */ jsx("div", { className: "an", children: i + 1 }),
        /* @__PURE__ */ jsx("h3", { children: title }),
        /* @__PURE__ */ jsx("p", { children: body })
      ] }, title)) }),
      /* @__PURE__ */ jsxs("div", { className: "tb-zonder", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "tb-k", children: t.zonderK }),
          /* @__PURE__ */ jsx("b", { children: t.zonderTitel }),
          /* @__PURE__ */ jsx("p", { children: t.zonderTekst })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "tb-of", children: t.of }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "tb-k", children: t.metK }),
          /* @__PURE__ */ jsx("b", { children: t.metTitel }),
          /* @__PURE__ */ jsx("p", { children: t.metTekst })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "specs", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.techFiche }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.volledigeSpecs }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.specsLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "stable", children: /* @__PURE__ */ jsx("table", { children: /* @__PURE__ */ jsx("tbody", { children: pomp.specs.map(([label, value]) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: label }),
        /* @__PURE__ */ jsx("td", { children: value })
      ] }, label)) }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "incl", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.afhalenKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.afhalenTitel }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.afhalenLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pickupbar", children: [
        /* @__PURE__ */ jsx(PinIcon, { size: 34 }),
        /* @__PURE__ */ jsxs("div", { className: "pb-t", children: [
          /* @__PURE__ */ jsx("b", { children: t.pickupbarTitel }),
          /* @__PURE__ */ jsx("span", { children: t.pickupbarSub })
        ] }),
        /* @__PURE__ */ jsx("a", { className: "btn", href: MAPS_URL, target: "_blank", rel: "noopener", children: t.route })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "af-note", children: [
        t.afNoteVoor,
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: t.afNoteLink }),
        t.afNoteNa
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "cross", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.hoortBij }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.hoortBijTitel }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.hoortBijLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "tk-grid", children: drogers.map((key) => {
        const droger = productInTaal(key, taal);
        return /* @__PURE__ */ jsx(
          ToestelKaart,
          {
            href: lp(toestelPad(key)),
            tag: droger.badge,
            image: droger.img[0],
            alt: productImageAlt(droger, 0),
            name: toestelLabelIn(key, taal),
            blurb: droger.sum,
            chips: toestelChipsInTaal(key, taal),
            price: toon(droger.day).tekst,
            priceNote: `${t.perDag} ${toon(droger.day).label}`,
            cta: t.bekijken
          },
          key
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "faq", children: /* @__PURE__ */ jsxs("div", { className: "wrap faq-in", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.faqKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.faqTitel })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 30 }, children: pomp.faq.map(([q, a], i) => /* @__PURE__ */ jsxs(
        "details",
        {
          className: "q",
          open: openFaq === i,
          onToggle: (e) => {
            if (e.currentTarget.open) setOpenFaq(i);
            else if (openFaq === i) setOpenFaq(-1);
          },
          children: [
            /* @__PURE__ */ jsxs("summary", { children: [
              q,
              " ",
              /* @__PURE__ */ jsx("span", { className: "pl", children: "+" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "a", children: /* @__PURE__ */ jsx("p", { children: a }) })
          ]
        },
        q
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "cta", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "cta-copy", children: [
        /* @__PURE__ */ jsx("span", { className: "kick onred", children: t.ctaKick }),
        /* @__PURE__ */ jsx("h2", { children: t.ctaTitel }),
        /* @__PURE__ */ jsx("p", { children: t.ctaTekst }),
        /* @__PURE__ */ jsxs("div", { className: "cb", children: [
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
            t.ctaKnop,
            /* @__PURE__ */ jsx(ArrowRightIcon, { strokeWidth: 2.4 })
          ] }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-dark", href: "tel:+3236899065", children: t.bel })
        ] })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "cta-man", src: "/vernast/man-klembord.webp", alt: t.expertAlt, loading: "lazy", decoding: "async" })
    ] }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  ToebehorenCondenspompPage as default
};
