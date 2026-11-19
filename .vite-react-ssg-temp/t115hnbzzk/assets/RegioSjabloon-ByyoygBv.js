import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { l as V3Header, h as PinIcon, e as CheckIcon, A as ArrowRightIcon, k as PhoneIcon, T as TruckIcon, S as ShieldIcon, m as CartIcon, j as StarIcon, i as GoogleIcon } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer, t as toestelLabelIn } from "./V3Footer-9z4J1I4x.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { C as ContactBlok } from "./ContactBlok-ykYeBJgi.js";
import { F as FaqBlok } from "./FaqBlok-Bkr2MHqW.js";
import { G as GEDEELD, b as beurt, n as nadruk, h as hoofdKnop, t as tweedeKnop } from "./plaats.copy-DyBymlm-.js";
import { o as organizationSchema, s as serviceSchema, f as faqSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { b as useTaal, a as useLokaalPad, o as kies, R as REGIO_ROUTES, k as kaartVoor, q as gemeentenInRegio, h as formatEuro, v as vertaalPad, g as gemeenteVanPlaats, r as plaatsIn, s as gemeenteNaamIn, x as regioNaamIn, i as plaatsFr, y as plaatsEn } from "../main.mjs";
import { S as STREKEN_PER_REGIO, s as streekNaamFr, a as streekNaamEn, b as streekKenmerkFr, c as streekKenmerkEn } from "./provincie-gemeenten-Dl-UWRQV.js";
import { d as droogtermijnen, b as termijnLabel, c as bereikLabel, e as natuurlijkeChapeBereik, a as natuurlijkePleisterWeken } from "./droogtijden-B2lUiF15.js";
import { P as PRODUCTS, p as productImageAlt, t as toestelPad } from "./verhuur-CgnDb-wO.js";
import { p as productInTaal } from "./verhuur.fr-CrIPL5Eo.js";
import { e as euroInt } from "./verhuur-8XCQs1EE.js";
import { e as eersteReviews } from "./reviews-BlVWZu-x.js";
import { getRealisatie } from "./realisaties-eA_H-cxM.js";
import { a as realisatieSlugsIn } from "./realisatie-regio-Bhy0QiA0.js";
import { r as regioLevering } from "./levering-CO7G5c_f.js";
/* empty css                    */
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/plaats/RegioSjabloon.tsx");
const COPY = {
  nl: {
    bouwKick: "Wat we hier drogen",
    toestelNoot: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "Twijfelt u tussen twee toestellen?",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Bereken het droogpakket voor uw ruimte" }),
      " of bekijk ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "het volledige gamma" }),
      "."
    ] }),
    leverH2West: "Leveren in West-Vlaanderen of afhalen bij Antwerpen?",
    leverH2: (waar) => `Afhalen of leveren ${waar}?`,
    leverenOnderMeer: "Wij leveren onder meer in ",
    afhalenWest: "Zelf afhalen: Aartselaar, A12 bij Antwerpen",
    wervenTotaal: (waar, n) => ` Daaronder volgt elke andere werf die we ${waar} droogden, ${n} in totaal.`,
    alleRealisaties: "Alle realisaties bekijken",
    faqTitel: (waar) => `Wat klanten ${waar} ons vragen.`,
    streekKick: "Waar we leveren",
    streekH2: (naam) => `De gemeenten van ${naam}, per streek.`,
    streekLede: (naam) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs("b", { children: [
        "Wij leveren in heel ",
        naam,
        "."
      ] }),
      " Kies hieronder uw gemeente voor informatie over huren, levering en afhalen. Staat uw plaats er niet bij, neem dan contact op."
    ] }),
    kiesGemeente: /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Kies uw gemeente voor informatie over bouwdrogerverhuur." }),
      " Wilt u advies over uw werf of hulp bij het reserveren,",
      " "
    ] }),
    gemeentenHierboven: /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Wij leveren in de gemeenten hierboven." }),
      " Wilt u advies over het aantal toestellen of de bereikbaarheid van uw werf,",
      " "
    ] }),
    belOns: "bel ons op",
    of: "of",
    bereken: "bereken meteen uw pakket",
    verloopH2: (waar) => `Van reservatie tot eindmeting ${waar}.`,
    leverenPlaatsen: "Wij leveren en plaatsen",
    perGemeenteAria: (naam) => `Gemeenten in ${naam}`,
    perGemeente: "Bouwdroger huren per gemeente:",
    buiten: "Buiten de provincies hieronder rijden we ook, al telt de rit dan mee in de planning. Bel ons gerust voor een werf net over de provinciegrens. Ook bouwdrogers huren in:",
    en: " en ",
    prijsH2: (naam) => `Wat kost een bouwdroger huren in ${naam}?`,
    prijsLede1: (towns, stad) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "De juiste prijs begint bij wat er moet drogen." }),
      " Voor een volledige woning, natte chape of pleisterwerk berekent u een compleet droogpakket; voor één ruimte volstaat een los toestel. Wij leveren onder meer in ",
      towns,
      "; zelf afhalen kan in ",
      stad,
      " bij Antwerpen."
    ] }),
    pakketLede: (naam) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "U hoeft zelf geen toestellen te combineren." }),
      " Wij berekenen uw droogpakket op basis van de oppervlakte, het materiaal en de laagdikte. U ziet ",
      /* @__PURE__ */ jsx("b", { children: "vooraf de pakketprijs" }),
      ", inclusief levering in ",
      naam,
      ", installatie, voor- en nameting en ophaling."
    ] }),
    prijsBeeldAlt: "Zorgeloos huren bij Vernast: één prijs vooraf, geen waarborg",
    kaartAlt: (naam) => `Werkgebied van Vernast, met ${naam} aangeduid`,
    heroFactsAria: "Inbegrepen bij uw droogpakket",
    badgeAfspraak: "Levering op afspraak",
    badge24: "Levering binnen 24 uur",
    badgeKlein: "geplaatst en ingesteld door onze technieker",
    placeholder: (stad) => `Bv. nieuwbouw 140 m² in ${stad}, chape vorige week geplaatst, wanneer kan de vloerder starten?`
  },
  fr: {
    bouwKick: "Ce que nous séchons ici",
    toestelNoot: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "Vous hésitez entre deux appareils ?",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Calculez le pack de séchage pour votre pièce" }),
      " ou consultez ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "toute la gamme" }),
      "."
    ] }),
    leverH2West: "Livraison en Flandre occidentale ou enlèvement près d'Anvers ?",
    leverH2: (waar) => `Enlèvement ou livraison ${waar} ?`,
    leverenOnderMeer: "Nous livrons notamment à ",
    afhalenWest: "Enlèvement : Aartselaar, sur l'A12 près d'Anvers",
    wervenTotaal: (waar, n) => ` Suivent tous les autres chantiers que nous avons séchés ${waar}, ${n} au total.`,
    alleRealisaties: "Voir toutes les réalisations",
    faqTitel: (waar) => `Les questions de nos clients ${waar}.`,
    streekKick: "Où nous livrons",
    streekH2: (dans) => `Les communes, région par région, ${dans}.`,
    streekLede: (dans) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs("b", { children: [
        "Nous livrons partout ",
        dans,
        "."
      ] }),
      " Choisissez votre commune ci-dessous pour en savoir plus sur la location, la livraison et l'enlèvement. Votre localité n'y figure pas ? Contactez-nous."
    ] }),
    kiesGemeente: /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Choisissez votre commune pour en savoir plus sur la location de déshumidificateurs." }),
      " ",
      "Pour un conseil sur votre chantier ou une aide à la réservation,",
      " "
    ] }),
    gemeentenHierboven: /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Nous livrons dans les communes ci-dessus." }),
      " Pour un conseil sur le nombre d'appareils ou l'accessibilité de votre chantier,",
      " "
    ] }),
    belOns: "appelez-nous au",
    of: "ou",
    bereken: "calculez tout de suite votre pack",
    verloopH2: (waar) => `De la réservation à la mesure finale ${waar}.`,
    leverenPlaatsen: "Nous livrons et installons",
    perGemeenteAria: (naam) => `Communes : ${naam}`,
    perGemeente: "Louer un déshumidificateur par commune :",
    buiten: "Nous roulons aussi en dehors des provinces ci-dessous, le trajet compte alors dans la planification. N'hésitez pas à nous appeler pour un chantier juste de l'autre côté de la limite provinciale. Location de déshumidificateurs aussi :",
    en: " et ",
    prijsH2: (dans) => `Quel prix pour louer un déshumidificateur ${dans} ?`,
    prijsLede1: (towns, stad) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Le bon prix dépend de ce qui doit sécher." }),
      " Pour une habitation entière, une chape humide ou du plafonnage, vous calculez un pack de séchage complet ; pour une seule pièce, un appareil seul suffit. Nous livrons notamment à ",
      towns,
      " ; l'enlèvement est possible à ",
      stad,
      ", près d'Anvers."
    ] }),
    pakketLede: (dans) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Vous n'avez pas à combiner vous-même les appareils." }),
      " Nous calculons votre pack de séchage selon la surface, le matériau et l'épaisseur de la couche. Vous voyez",
      " ",
      /* @__PURE__ */ jsx("b", { children: "le prix du pack à l'avance" }),
      ", livraison ",
      dans,
      ", installation, mesures avant et après et reprise comprises."
    ] }),
    prijsBeeldAlt: "Louer sans souci chez Vernast : un prix connu à l'avance, sans caution",
    kaartAlt: (naam) => `Zone d'activité de Vernast, avec ${naam} mis en évidence`,
    heroFactsAria: "Compris dans votre pack de séchage",
    badgeAfspraak: "Livraison sur rendez-vous",
    badge24: "Livraison en 24 heures",
    badgeKlein: "installé et réglé par notre technicien",
    placeholder: (stad) => `P. ex. nouvelle construction de 140 m² à ${stad}, chape coulée la semaine dernière, quand le poseur de sol peut-il commencer ?`
  },
  en: {
    bouwKick: "What we dry here",
    toestelNoot: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "Torn between two units?",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Calculate the drying package for your room" }),
      " or see ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "the full range" }),
      "."
    ] }),
    leverH2West: "Delivery in West Flanders or collection near Antwerp?",
    leverH2: (waar) => `Collection or delivery ${waar}?`,
    leverenOnderMeer: "Among other places, we deliver to ",
    afhalenWest: "Collect it yourself: Aartselaar, on the A12 near Antwerp",
    wervenTotaal: (waar, n) => ` Below them is every other site we dried ${waar}, ${n} in total.`,
    alleRealisaties: "View all projects",
    faqTitel: (waar) => `What customers ${waar} ask us.`,
    streekKick: "Where we deliver",
    streekH2: (waar) => `The municipalities ${waar}, area by area.`,
    streekLede: (waar) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs("b", { children: [
        "We deliver everywhere ",
        waar,
        "."
      ] }),
      " Choose your municipality below for details on hire, delivery and collection. Is your town not listed? Get in touch."
    ] }),
    kiesGemeente: /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Choose your municipality for details on dehumidifier hire." }),
      " For advice on your site or help with your booking,",
      " "
    ] }),
    gemeentenHierboven: /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "We deliver to the municipalities above." }),
      " For advice on the number of units or access to your site,",
      " "
    ] }),
    belOns: "call us on",
    of: "or",
    bereken: "calculate your package straight away",
    verloopH2: (waar) => `From booking to final reading ${waar}.`,
    leverenPlaatsen: "We deliver and install",
    perGemeenteAria: (naam) => `Municipalities in ${naam}`,
    perGemeente: "Dehumidifier hire by municipality:",
    buiten: "We also drive outside the provinces below, although the journey then counts in the planning. Feel free to call us about a site just over the provincial border. Dehumidifier hire also in:",
    en: " and ",
    prijsH2: (waar) => `What does dehumidifier hire cost ${waar}?`,
    prijsLede1: (towns, stad) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "The right price starts with what needs to dry." }),
      " For a whole house, wet screed or plasterwork you calculate a complete drying package; for a single room, a single unit is enough. Among other places, we deliver to ",
      towns,
      "; you can collect in ",
      stad,
      ", near Antwerp."
    ] }),
    pakketLede: (waar) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "You don't need to combine units yourself." }),
      " We calculate your drying package based on the floor area, the material and the layer thickness. You see",
      " ",
      /* @__PURE__ */ jsx("b", { children: "the package price in advance" }),
      ", including delivery ",
      waar,
      ", installation, readings before and after, and collection."
    ] }),
    prijsBeeldAlt: "Worry-free hire with Vernast: one price up front, no deposit",
    kaartAlt: (naam) => `Vernast's service area, with ${naam} highlighted`,
    heroFactsAria: "Included in your drying package",
    badgeAfspraak: "Delivery by appointment",
    badge24: "Delivery within 24 hours",
    badgeKlein: "installed and set up by our technician",
    placeholder: (stad) => `E.g. new build of 140 m² in ${stad}, screed laid last week, when can the floor layer start?`
  }
};
const RegioSjabloon = ({ regio, dans }) => {
  const taal = useTaal();
  const fr = taal === "fr";
  const nl = taal === "nl";
  const lp = useLokaalPad();
  const t = kies(COPY, taal);
  const g = kies(GEDEELD, taal);
  const route = REGIO_ROUTES.find((r) => r.slug === regio.slug) ?? REGIO_ROUTES[0];
  const levering = regioLevering(regio.slug);
  const gratisZone = levering?.vanaf === 0 && levering?.tot === 0;
  const isWest = regio.slug === "west-vlaanderen";
  const kaart = kaartVoor(route);
  const waar = nl ? `in ${regio.name}` : dans ?? regio.name;
  const pad = lp(regio.path);
  const padIn = (nlPad) => nl ? nlPad : vertaalPad(nlPad, taal);
  const provNaam = (r) => regioNaamIn(r, taal);
  const streekNaam = (naam) => fr ? streekNaamFr(naam) : taal === "en" ? streekNaamEn(naam) : naam;
  const streekKenmerk = (streek) => fr ? streekKenmerkFr(streek.gemeenten, plaatsFr) : taal === "en" ? streekKenmerkEn(streek.gemeenten, plaatsEn) : streek.kenmerk;
  const realisaties = regio.realisaties.slugs.map(getRealisatie).filter((r) => !!r);
  const gekozen = new Set(regio.realisaties.slugs);
  const werven = [
    ...realisaties,
    ...realisatieSlugsIn(regio.slug).filter((slug) => !gekozen.has(slug)).map(getRealisatie).filter((r) => !!r)
  ];
  const andere = REGIO_ROUTES.filter((r) => r.slug !== regio.slug && !!padIn(r.path));
  const gemeenten = gemeentenInRegio(regio.slug).filter((x) => !!padIn(x.path));
  const streken = STREKEN_PER_REGIO[regio.slug] ?? [];
  const chape = droogtermijnen("chape");
  const pleister = droogtermijnen("pleister");
  const termijn = g.weken ?? termijnLabel;
  const bereik = g.weken ?? bereikLabel;
  const drogers = Object.values(PRODUCTS).filter((p) => /ontvochtiger|droger/i.test(p.type));
  const goedkoopst = Math.min(...drogers.map((p) => p.day));
  const goedkoopsteDag = nl ? euroInt(goedkoopst) : formatEuro(goedkoopst, taal, 0);
  const prijsBeeld = isWest ? { ...regio.beeld, uitsnede: false } : { src: "/vernast/man-zen-crop.webp", alt: t.prijsBeeldAlt, uitsnede: true };
  const feitenLijst = (feiten) => /* @__PURE__ */ jsx("dl", { className: "feiten", children: feiten.map((feit) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("dt", { children: feit.label }),
    /* @__PURE__ */ jsx("dd", { children: feit.waarde })
  ] }, feit.label)) });
  const localDryingSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap split", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", style: { marginBottom: 0 }, children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.bouwKick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: regio.bouw.kop }),
      regio.bouw.alineas.map((alinea) => /* @__PURE__ */ jsx("p", { className: "lede", children: nadruk(alinea) }, alinea))
    ] }),
    /* @__PURE__ */ jsx(Reveal, { from: "up", className: "split-vis", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: regio.beeld.src,
        alt: regio.beeld.alt,
        width: 800,
        height: 600,
        loading: "lazy",
        decoding: "async"
      }
    ) })
  ] }) }) });
  const equipmentSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.toestel.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: regio.toestellen.kop })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "prods", children: regio.toestellen.items.map((item, i) => {
      const p = productInTaal(item.key, taal);
      const label = toestelLabelIn(item.key, taal);
      return /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i % 3 * 0.08, as: "article", className: "prod", children: [
        /* @__PURE__ */ jsx("div", { className: "pimg", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: p.img[0],
            alt: productImageAlt(p, 0),
            width: 480,
            height: 360,
            loading: "lazy",
            decoding: "async"
          }
        ) }),
        /* @__PURE__ */ jsx("h3", { children: label }),
        /* @__PURE__ */ jsx("p", { className: "pdesc", style: { marginBottom: "18px" }, children: nadruk(item.waarom) }),
        /* @__PURE__ */ jsxs(Link, { className: "btn", to: lp(toestelPad(item.key)), "aria-label": g.toestel.aria(label), children: [
          g.toestel.knop,
          /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13 })
        ] })
      ] }, item.key);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "note", children: t.toestelNoot(lp) })
  ] }) }) });
  const deliverySection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.levering.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: isWest ? t.leverH2West : t.leverH2(waar) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "split32", children: [
      /* @__PURE__ */ jsxs(Reveal, { from: "up", className: "paneel", children: [
        /* @__PURE__ */ jsxs("div", { className: "phead", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(TruckIcon, { size: 19 }) }),
          /* @__PURE__ */ jsx("h3", { children: regio.levering.kop })
        ] }),
        regio.levering.alineas.map((alinea) => /* @__PURE__ */ jsx("p", { children: nadruk(alinea) }, alinea)),
        feitenLijst(regio.levering.feiten),
        /* @__PURE__ */ jsxs("p", { style: { marginTop: "20px" }, children: [
          /* @__PURE__ */ jsx("b", { style: { color: "var(--txt)" }, children: t.leverenOnderMeer }),
          regio.towns.join(", "),
          "."
        ] }),
        /* @__PURE__ */ jsxs(Link, { className: "btn", to: lp("/verhuur/calculator"), style: { marginTop: "22px" }, children: [
          g.levering.reserveer,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: 0.08, className: "paneel", children: [
        /* @__PURE__ */ jsxs("div", { className: "phead", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(CartIcon, { size: 19 }) }),
          /* @__PURE__ */ jsx("h3", { children: isWest ? t.afhalenWest : regio.afhalen.kop })
        ] }),
        regio.afhalen.alineas.map((alinea) => /* @__PURE__ */ jsx("p", { children: nadruk(alinea) }, alinea)),
        /* @__PURE__ */ jsxs("p", { style: { marginTop: "18px" }, children: [
          /* @__PURE__ */ jsxs("b", { style: { color: "var(--txt)" }, children: [
            CONTACT.street,
            ", ",
            CONTACT.postalCode,
            " ",
            CONTACT.city
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          g.levering.uren
        ] }),
        regio.afhalen.feiten && feitenLijst(regio.afhalen.feiten),
        /* @__PURE__ */ jsxs(Link, { className: "btn", to: lp("/afhalen"), style: { marginTop: "22px" }, children: [
          g.levering.afhalen,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] })
      ] })
    ] })
  ] }) }) });
  const projectsSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.praktijk }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: regio.realisaties.kop }),
      /* @__PURE__ */ jsxs("p", { className: "lede", children: [
        regio.realisaties.intro,
        werven.length > regio.realisaties.slugs.length && t.wervenTotaal(waar, werven.length)
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `rzs${isWest && werven.length === 2 ? " twee" : ""}`, children: werven.map((r, i) => /* @__PURE__ */ jsx(Reveal, { from: "up", delay: i % 3 * 0.08, children: /* @__PURE__ */ jsxs(Link, { className: "rz", to: lp(`/realisaties/${r.slug}`), children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: r.kaart,
          alt: r.kaartAlt,
          width: 640,
          height: 420,
          loading: "lazy",
          decoding: "async"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "rzt", children: [
        /* @__PURE__ */ jsx("span", { className: "rzl", children: r.locatie }),
        /* @__PURE__ */ jsx("h3", { children: r.titel })
      ] })
    ] }) }, r.slug)) }),
    /* @__PURE__ */ jsx("p", { className: "tblnote", style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(Link, { to: lp("/realisaties"), style: { fontWeight: 600 }, children: t.alleRealisaties }) })
  ] }) }) });
  const faqSection = () => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(FaqBlok, { titel: t.faqTitel(waar), vragen: regio.faq, sleutel: "regio-faq", variant: "wit", children: /* @__PURE__ */ jsxs("div", { className: "manband", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
      /* @__PURE__ */ jsx("span", { className: "mbk", children: g.slot.mbk(nl ? regio.name : waar) }),
      /* @__PURE__ */ jsx("h3", { children: g.slot.h3 }),
      /* @__PURE__ */ jsx("p", { children: g.slot.p }),
      /* @__PURE__ */ jsx("div", { className: "mb-cta", children: /* @__PURE__ */ jsxs(Link, { className: "btn btn-white glans", to: lp("/verhuur/calculator"), children: [
        g.slot.knop,
        /* @__PURE__ */ jsx(ArrowRightIcon, {})
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: `mb-man breed tegenrand ${isWest ? "regio-wagen" : "bijsnijden"}`,
        src: "/vernast/man-bestelwagen.webp",
        alt: g.slot.beeldAlt,
        width: 1440,
        height: 827,
        loading: "lazy",
        decoding: "async"
      }
    )
  ] }) }) });
  const dryingTimesSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "kop-rij", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: g.droog.kick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: g.droog.h2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: g.droog.lede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "prijsknoppen", children: /* @__PURE__ */ jsxs(Link, { className: tweedeKnop(), to: lp("/waarom-bouwdroging"), children: [
        g.droog.knop,
        /* @__PURE__ */ jsx(ArrowRightIcon, {})
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "tblwrap", children: /* @__PURE__ */ jsx("div", { className: "tblscroll", children: /* @__PURE__ */ jsxs("table", { className: "tbl", children: [
      /* @__PURE__ */ jsx("caption", { className: "sr-only", children: g.droog.caption }),
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: g.droog.kolommen.map((k) => /* @__PURE__ */ jsx("th", { scope: "col", children: k }, k)) }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        chape.map((rij) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "row", children: g.droog.chape(rij.dikte) }),
          /* @__PURE__ */ jsx("td", { className: "traag", children: bereik(natuurlijkeChapeBereik(rij.dikte)) }),
          /* @__PURE__ */ jsx("td", { className: "snel", children: /* @__PURE__ */ jsx("b", { children: termijn(rij) }) })
        ] }, `chape-${rij.dikte}`)),
        pleister.map((rij) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "row", children: g.droog.pleister(rij.dikte) }),
          /* @__PURE__ */ jsx("td", { className: "traag", children: bereik(natuurlijkePleisterWeken(rij.dikte)) }),
          /* @__PURE__ */ jsx("td", { className: "snel", children: /* @__PURE__ */ jsx("b", { children: termijn(rij) }) })
        ] }, `pleister-${rij.dikte}`))
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("p", { className: "tblnote", children: g.droog.noot(lp) })
  ] }) }) });
  const townsSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.streekKick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.streekH2(nl ? regio.name : waar) }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.streekLede(nl ? regio.name : waar) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "strk", children: streken.map((streek) => /* @__PURE__ */ jsxs(Reveal, { from: "up", as: "article", className: "strk-blok", children: [
      /* @__PURE__ */ jsx("h3", { children: streekNaam(streek.naam) }),
      /* @__PURE__ */ jsx("p", { children: streekKenmerk(streek) }),
      /* @__PURE__ */ jsx("ul", { className: "strk-lijst", children: streek.gemeenten.map((naam) => {
        const eigen = gemeenteVanPlaats(naam);
        const doel = eigen ? padIn(eigen.path) : null;
        const label = plaatsIn(naam, taal);
        return /* @__PURE__ */ jsx("li", { children: doel ? /* @__PURE__ */ jsx(Link, { to: doel, children: label }) : /* @__PURE__ */ jsx("span", { children: label }) }, naam);
      }) })
    ] }, streek.naam)) }),
    /* @__PURE__ */ jsxs("div", { className: "note", children: [
      gemeenten.length > 0 ? t.kiesGemeente : t.gemeentenHierboven,
      t.belOns,
      " ",
      /* @__PURE__ */ jsx("a", { href: `tel:${CONTACT.phoneE164}`, children: CONTACT.phoneLocal }),
      " ",
      t.of,
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: t.bereken }),
      "."
    ] })
  ] }) }) });
  const processSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.verloop.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.verloopH2(waar) }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: g.verloop.lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flow", children: g.verloop.stappen(t.leverenPlaatsen).map(({ Icon, title, desc }, i) => /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i * 0.08, className: "fl", children: [
      /* @__PURE__ */ jsx("i", { children: `0${i + 1}` }),
      /* @__PURE__ */ jsx("div", { className: "fi", children: /* @__PURE__ */ jsx(Icon, { size: 19 }) }),
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx("p", { children: desc })
    ] }, title)) }),
    gemeenten.length > 0 && streken.length === 0 && /* @__PURE__ */ jsxs("nav", { className: "rg-links", "aria-label": t.perGemeenteAria(regio.name), children: [
      /* @__PURE__ */ jsx("span", { children: t.perGemeente }),
      gemeenten.map((x) => /* @__PURE__ */ jsx(Link, { to: padIn(x.path), children: gemeenteNaamIn(x, taal) }, x.slug))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "note", children: [
      /* @__PURE__ */ jsx("b", { children: g.leverenOveral }),
      " ",
      nl && levering ? `${levering.zin} ` : `${t.buiten} `,
      andere.map((r, i) => /* @__PURE__ */ jsxs("span", { children: [
        i > 0 && (i === andere.length - 1 ? t.en : ", "),
        /* @__PURE__ */ jsx(Link, { to: padIn(r.path), children: provNaam(r) })
      ] }, r.slug)),
      "."
    ] })
  ] }) }) });
  const reviewsSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.reviews.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: g.reviews.h2 }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: g.reviews.lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rvs", children: eersteReviews(3).map((review, i) => /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i % 3 * 0.08, as: "figure", className: "rvc", children: [
      /* @__PURE__ */ jsxs("div", { className: "rvc-top", children: [
        /* @__PURE__ */ jsx("div", { className: "rvc-st", role: "img", "aria-label": g.reviews.sterren(review.rating), children: Array.from({ length: review.rating }).map((_, star) => /* @__PURE__ */ jsx(StarIcon, { size: 14 }, star)) }),
        review.source === "Google" ? /* @__PURE__ */ jsx(GoogleIcon, { size: 17 }) : /* @__PURE__ */ jsx("span", { className: "rvc-src", children: review.source })
      ] }),
      /* @__PURE__ */ jsxs("blockquote", { children: [
        "“",
        review.text,
        "”"
      ] }),
      /* @__PURE__ */ jsxs("figcaption", { children: [
        /* @__PURE__ */ jsx("span", { className: "rvc-av", "aria-hidden": "true", children: review.initials }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("b", { children: review.name }),
          /* @__PURE__ */ jsx("small", { children: review.service ?? review.date })
        ] })
      ] })
    ] }, review.name)) })
  ] }) }) });
  const priceIntroSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap split omgekeerd", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", style: { marginBottom: 0 }, children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.prijs.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.prijsH2(nl ? regio.name : waar) }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.prijsLede1(regio.towns.slice(0, 4).join(", "), CONTACT.city) }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: g.prijs.lede2 }),
      /* @__PURE__ */ jsx("dl", { className: "feiten", children: g.prijs.feiten.map(({ dt, dd }) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { children: dt }),
        /* @__PURE__ */ jsx("dd", { children: typeof dd === "function" ? dd(goedkoopsteDag) : dd })
      ] }, dt)) }),
      /* @__PURE__ */ jsxs("div", { className: "prijsknoppen", children: [
        /* @__PURE__ */ jsxs(Link, { className: hoofdKnop(kleur), to: lp("/verhuur/calculator"), children: [
          g.prijs.knopPakket,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] }),
        /* @__PURE__ */ jsxs(Link, { className: tweedeKnop(), to: lp("/prijzen"), children: [
          g.prijs.knopPrijzen,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Reveal, { from: "up", className: "split-vis", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: prijsBeeld.uitsnede ? "cut vervaagd" : void 0,
          src: prijsBeeld.src,
          alt: prijsBeeld.alt,
          width: 800,
          height: 600,
          loading: "lazy",
          decoding: "async",
          style: prijsBeeld.uitsnede ? { width: "min(84%,380px)" } : void 0
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "fbadge", style: { bottom: "-16px", left: "0" }, children: [
        /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsx(CheckIcon, { size: 15, strokeWidth: 3 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          g.prijs.badge,
          /* @__PURE__ */ jsx("small", { children: g.prijs.badgeKlein })
        ] })
      ] })
    ] })
  ] }) }) });
  const packagesSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, id: "droogpakketten", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "kop-rij", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: g.pakket.kick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: g.pakket.h2(nl ? regio.name : waar) }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.pakketLede(nl ? regio.name : waar) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "prijsknoppen", children: [
        /* @__PURE__ */ jsxs(Link, { className: hoofdKnop(kleur), to: lp("/verhuur/calculator"), children: [
          g.pakket.knopPakket,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] }),
        /* @__PURE__ */ jsxs(Link, { className: tweedeKnop(), to: lp("/prijzen"), children: [
          g.pakket.knopPrijzen,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "g3", children: g.pakket.kaarten.map(({ Icon, title, desc, path, label }, i) => /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i * 0.08, className: "kaart gelijk", children: [
      /* @__PURE__ */ jsx("div", { className: "ki", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx("p", { children: desc }),
      /* @__PURE__ */ jsxs(Link, { className: "btn", to: lp(path), "aria-label": label, children: [
        g.pakket.kaartKnop,
        /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13 })
      ] })
    ] }, path)) }),
    /* @__PURE__ */ jsxs("div", { className: "note schild", children: [
      /* @__PURE__ */ jsx("span", { className: "schild-ic", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ShieldIcon, { size: 22, strokeWidth: 1.7 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { children: g.pakket.garantie(lp) }),
        /* @__PURE__ */ jsx("p", { children: g.pakket.waarborg })
      ] })
    ] })
  ] }) }) });
  const voorFaq = [
    priceIntroSection,
    packagesSection,
    localDryingSection,
    equipmentSection,
    deliverySection,
    ...realisaties.length > 0 ? [projectsSection] : [],
    ...chape.length > 0 && streken.length > 0 ? [dryingTimesSection] : [],
    ...streken.length > 0 ? [townsSection] : [],
    processSection,
    reviewsSection
  ];
  const kop = voorFaq.map((sectie, i) => /* @__PURE__ */ jsx(Fragment, { children: sectie(beurt(i)) }, `kop-${i}`));
  return /* @__PURE__ */ jsxs("div", { className: `v3c rg-page${isWest ? " rg-west" : ""}`, children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: regio.title,
        description: regio.description,
        path: pad,
        jsonLd: [
          /*
            De Organization hoort hier: de Service verwijst er met een @id naar,
            en Google lost een @id alleen op binnen de graaf van dezelfde pagina.
          */
          organizationSchema(),
          serviceSchema({
            name: regio.h1,
            description: regio.description,
            path: pad,
            serviceType: g.schema.serviceType,
            areaServed: regio.areaServed
          }),
          faqSchema(regio.faq.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: g.hero.home, path: lp("/") },
            { name: g.schema.werkgebied, path: `${lp("/")}#regio` },
            { name: regio.h1, path: pad }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 420 }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "redtop", children: /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap hero-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
          /* @__PURE__ */ jsx("nav", { "aria-label": g.hero.kruimelpad, className: "kruimels", children: /* @__PURE__ */ jsxs("ol", { children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Link, { to: lp("/"), children: g.hero.home }),
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " /" })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("a", { href: `${lp("/")}#regio`, children: g.schema.werkgebied }),
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " /" })
            ] }),
            /* @__PURE__ */ jsx("li", { "aria-current": "page", children: regio.name })
          ] }) }),
          /* @__PURE__ */ jsxs("span", { className: "kick met-ic", children: [
            /* @__PURE__ */ jsx(PinIcon, { size: 13 }),
            " ",
            regio.kicker
          ] }),
          /* @__PURE__ */ jsx("h1", { children: regio.h1 }),
          regio.intro.map((alinea) => /* @__PURE__ */ jsx("p", { children: nadruk(alinea) }, alinea)),
          regio.heroFacts && /* @__PURE__ */ jsx("div", { className: "hbadges", "aria-label": t.heroFactsAria, children: regio.heroFacts.map((feit) => /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
            " ",
            feit
          ] }, feit)) }),
          /* @__PURE__ */ jsxs("div", { className: "hcta", children: [
            /* @__PURE__ */ jsxs(Link, { className: "btn btn-white glans", to: lp("/verhuur/calculator"), children: [
              g.hero.knop,
              /* @__PURE__ */ jsx(ArrowRightIcon, {})
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "btn btn-ghost", href: `tel:${CONTACT.phoneE164}`, children: [
              /* @__PURE__ */ jsx(PhoneIcon, {}),
              " ",
              g.hero.bel(CONTACT.phoneLocal)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-vis", children: [
          /* @__PURE__ */ jsxs("div", { className: "kaartvis", style: { aspectRatio: `${kaart.width}/${kaart.height}` }, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: kaart.src,
                alt: t.kaartAlt(regio.name),
                width: kaart.width,
                height: kaart.height,
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "speld", style: { left: kaart.pin.left, top: kaart.pin.top }, children: /* @__PURE__ */ jsx("b", { children: regio.name }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fbadge", style: { bottom: "40px", left: "-4%" }, children: [
            /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsx(TruckIcon, { size: 15 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              nl ? levering?.badge ?? t.badgeAfspraak : gratisZone ? t.badge24 : t.badgeAfspraak,
              /* @__PURE__ */ jsx("small", { children: t.badgeKlein })
            ] })
          ] })
        ] })
      ] }) }) }),
      kop,
      faqSection(),
      /* @__PURE__ */ jsx(
        ContactBlok,
        {
          titel: g.contact.titel(nl ? regio.name : waar),
          lede: g.contact.lede,
          onderwerpen: g.contact.onderwerpen(nl ? regio.name : waar),
          placeholder: t.placeholder(regio.towns[0])
        }
      )
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  RegioSjabloon as R
};
