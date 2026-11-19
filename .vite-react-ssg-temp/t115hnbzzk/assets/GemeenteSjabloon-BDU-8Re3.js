import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import { Fragment } from "react";
import { useLocation, Link } from "react-router-dom";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { l as V3Header, h as PinIcon, A as ArrowRightIcon, k as PhoneIcon, T as TruckIcon, e as CheckIcon, S as ShieldIcon, m as CartIcon, j as StarIcon, i as GoogleIcon } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer, t as toestelLabelIn } from "./V3Footer-9z4J1I4x.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { C as ContactBlok } from "./ContactBlok-ykYeBJgi.js";
import { F as FaqBlok } from "./FaqBlok-Bkr2MHqW.js";
import { G as GEDEELD, a, n as nadruk, b as beurt, d as de, h as hoofdKnop, t as tweedeKnop } from "./plaats.copy-DyBymlm-.js";
import { o as organizationSchema, s as serviceSchema, f as faqSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { b as useTaal, a as useLokaalPad, o as kies, G as GEMEENTE_BY_PATH, n as naarNl, B as GEMEENTE_ROUTES, R as REGIO_ROUTES, k as kaartVoor, C as kruimelIn, x as regioNaamIn, z as regioInEn, D as plaatsenVanRoute, q as gemeentenInRegio, g as gemeenteVanPlaats, h as formatEuro, s as gemeenteNaamIn, v as vertaalPad, r as plaatsIn, i as plaatsFr, y as plaatsEn } from "../main.mjs";
import { S as STREKEN_PER_REGIO, s as streekNaamFr, a as streekNaamEn, b as streekKenmerkFr, c as streekKenmerkEn } from "./provincie-gemeenten-Dl-UWRQV.js";
import { getRealisatie } from "./realisaties-eA_H-cxM.js";
import { a as realisatieSlugsIn } from "./realisatie-regio-Bhy0QiA0.js";
import { P as PRODUCTS, p as productImageAlt, t as toestelPad } from "./verhuur-CgnDb-wO.js";
import { p as productInTaal } from "./verhuur.fr-CrIPL5Eo.js";
import { e as euroInt } from "./verhuur-8XCQs1EE.js";
import { e as eersteReviews } from "./reviews-BlVWZu-x.js";
import { d as droogtermijnen, b as termijnLabel, c as bereikLabel, e as natuurlijkeChapeBereik, a as natuurlijkePleisterWeken } from "./droogtijden-B2lUiF15.js";
/* empty css                    */
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/plaats/GemeenteSjabloon.tsx");
const COPY = {
  nl: {
    prijsH2: (plaats) => `Wat kost een bouwdroger huren in ${plaats}?`,
    prijsLede1: (plaats) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "De juiste prijs begint bij wat er moet drogen." }),
      " Voor een volledige woning, natte chape of pleisterwerk berekent u een compleet droogpakket; voor één ruimte kan een los toestel geschikt zijn. ",
      /* @__PURE__ */ jsxs("b", { children: [
        "Levering in ",
        plaats,
        " is inbegrepen bij uw droogpakket."
      ] })
    ] }),
    /* Zoals de plaats na een vast "in" in `GEDEELD` staat; het Frans zet zelf "à" of "au". */
    in: (plaats) => plaats,
    pakketLede: (postcode) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "U hoeft zelf geen toestellen te combineren." }),
      " Wij berekenen uw droogpakket op basis van de oppervlakte, het materiaal en de laagdikte. U ziet ",
      /* @__PURE__ */ jsx("b", { children: "vooraf de pakketprijs" }),
      ", inclusief levering op postcode ",
      postcode,
      ", installatie, voor- en nameting en ophaling."
    ] }),
    bouwKick: "De bebouwing hier",
    leverKick: "Waar we leveren",
    feitenBouw: [
      ["Afhaalpunt", "Aartselaar, op afspraak"],
      ["Levering", "Volgens uw bevestigde reservatie"],
      ["Transportkost", "Geen, inbegrepen in het droogpakket"]
    ],
    postcode: "Postcode",
    bouwNoot: (lp, provPad, provNaam) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Welk toestel u nodig heeft, hangt af van uw ruimte en niet van uw gemeente." }),
      " Het volledige gamma met capaciteiten en dagprijzen staat op",
      " ",
      /* @__PURE__ */ jsxs(Link, { to: provPad, children: [
        "de pagina over ",
        provNaam
      ] }),
      ", of bereken uw opstelling meteen in de",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
      ". Liever zelf ophalen? Dat kan in",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/afhalen"), children: "Aartselaar" }),
      "."
    ] }),
    toestelH2: (naam) => `Wat er in ${naam} het vaakst staat`,
    toestelNoot: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "Bekijk de mogelijkheden voor uw project en vraag advies over de juiste opstelling.",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Bereken het droogpakket voor uw ruimte" }),
      " of bekijk ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "alle toestellen" }),
      "."
    ] }),
    leverH2: (naam) => `Afhalen of leveren in ${naam}?`,
    feitenLever: [
      ["Afhaalpunt", "Aartselaar, op afspraak"],
      ["Levertermijn", "Volgens uw bevestigde reservatie"],
      ["Transport en installatie", "Inbegrepen in het droogpakket"]
    ],
    wervenH2: (waar) => `Werven die we in ${waar} droogden`,
    omgeving: (plaats) => `${plaats} en omgeving`,
    wervenEen: "Eén project uit deze gemeente, met de foto's van de werf zelf.",
    wervenVeel: (n) => `${n} projecten uit deze gemeente, elk met de foto's van de werf zelf.`,
    wervenRond: (plaats, prov) => `Werk uit ${plaats} zelf, aangevuld met werven elders in de provincie ${prov}. Elk met de foto's van de werf, dezelfde ploeg en dezelfde meting bij de start en bij de oplevering.`,
    wervenProv: (prov) => `Werven uit de provincie ${prov}, elk met de foto's van de werf zelf. Dezelfde ploeg, dezelfde meting bij de start en bij de oplevering.`,
    alleWerven: (prov) => `Alle werven in ${prov} bekijken`,
    verloopH2: (naam) => `Van reservatie tot ophaling in ${naam}.`,
    rijden: (naam) => `Wij rijden naar ${naam}`,
    buiten: (prov) => `Buiten ${prov} rijden we ook, al telt de rit dan mee in de planning.`,
    inDeBuurt: "Bouwdroger huren in de buurt:",
    of: " of ",
    twijfel: "Twijfelt u over het aantal toestellen, bel ons op",
    bereken: "bereken meteen uw pakket",
    ofKort: "of",
    streekH2: (streek) => `${streek}, en de rest van de provincie.`,
    omstreken: (plaats) => `In ${plaats} en omstreken.`,
    streekLede: (plaats, prov) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs("b", { children: [
        "Wij leveren in ",
        plaats,
        " en de omliggende gemeenten."
      ] }),
      " Kies hieronder een plaats voor informatie over huren en levering, of bekijk het werkgebied in ",
      prov,
      "."
    ] }),
    elders: (prov) => `Elders in ${prov}`,
    eldersP: "Bekijk per gemeente hoe u een bouwdroger huurt, wat bij een droogpakket inbegrepen is en hoe u de levering afspreekt.",
    heleProv: (prov) => `Hele provincie ${prov}`,
    advies: "Advies nodig voor uw werf?",
    adviesP: "Bespreek de afmetingen, het materiaal en uw planning. Bel ons op",
    faqTitel: (plaats) => `Wat klanten in ${plaats} ons vragen.`,
    kaartAlt: (naam, prov) => `Werkgebied van Vernast, met ${naam} in de provincie ${prov}`,
    badge: "Levering en plaatsing inbegrepen",
    badgeKlein: "Bij een droogpakket met levering",
    placeholder: (naam) => `Bv. renovatie in ${naam}, chape vorige week geplaatst, wanneer kan de vloerder starten?`
  },
  fr: {
    prijsH2: (plaats) => `Quel prix pour louer un déshumidificateur ${a(plaats)} ?`,
    prijsLede1: (plaats) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Le bon prix dépend de ce qui doit sécher." }),
      " Pour une habitation entière, une chape humide ou du plafonnage, vous calculez un pack de séchage complet ; pour une seule pièce, un appareil seul peut convenir. ",
      /* @__PURE__ */ jsxs("b", { children: [
        "La livraison ",
        a(plaats),
        " est comprise dans votre pack de séchage."
      ] })
    ] }),
    in: (plaats) => a(plaats),
    pakketLede: (postcode) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Vous n'avez pas à combiner vous-même les appareils." }),
      " Nous calculons votre pack de séchage selon la surface, le matériau et l'épaisseur de la couche. Vous voyez",
      " ",
      /* @__PURE__ */ jsx("b", { children: "le prix du pack à l'avance" }),
      ", livraison au code postal ",
      postcode,
      ", installation, mesures avant et après et reprise comprises."
    ] }),
    bouwKick: "Le bâti ici",
    leverKick: "Où nous livrons",
    feitenBouw: [
      ["Point d'enlèvement", "Aartselaar, sur rendez-vous"],
      ["Livraison", "Selon votre réservation confirmée"],
      ["Frais de transport", "Aucun, compris dans le pack de séchage"]
    ],
    postcode: "Code postal",
    bouwNoot: (lp, provPad, provNaam) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "L'appareil qu'il vous faut dépend de votre pièce, pas de votre commune." }),
      " La gamme complète avec capacités et prix journaliers figure sur",
      " ",
      /* @__PURE__ */ jsxs(Link, { to: provPad, children: [
        "la page de notre zone d'activité ",
        provNaam
      ] }),
      ", ou calculez tout de suite votre installation avec le ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
      ". Vous préférez venir chercher l'appareil ? C'est possible à",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/afhalen"), children: "Aartselaar" }),
      "."
    ] }),
    toestelH2: (naam) => `Les appareils les plus utilisés ${a(naam)}`,
    toestelNoot: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "Découvrez les possibilités pour votre projet et demandez conseil sur la bonne installation. ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Calculez le pack de séchage pour votre pièce" }),
      " ",
      "ou consultez ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "tous les appareils" }),
      "."
    ] }),
    leverH2: (naam) => `Enlèvement ou livraison ${a(naam)} ?`,
    feitenLever: [
      ["Point d'enlèvement", "Aartselaar, sur rendez-vous"],
      ["Délai de livraison", "Selon votre réservation confirmée"],
      ["Transport et installation", "Compris dans le pack de séchage"]
    ],
    wervenH2: (waar) => `Des chantiers que nous avons séchés ${waar}`,
    omgeving: (plaats) => `${plaats} et environs`,
    wervenEen: "Un projet dans cette commune, avec les photos du chantier lui-même.",
    wervenVeel: (n) => `${n} projets dans cette commune, chacun avec les photos du chantier lui-même.`,
    wervenRond: (plaats, prov) => `Des travaux ${a(plaats)} même, complétés par des chantiers ailleurs ${prov}. Chacun avec les photos du chantier, la même équipe et la même mesure au début et à la fin.`,
    wervenProv: (prov) => `Des chantiers ${prov}, chacun avec les photos du chantier lui-même. La même équipe, la même mesure au début et à la fin.`,
    alleWerven: (prov) => `Voir tous les chantiers ${prov}`,
    verloopH2: (naam) => `De la réservation à la reprise ${a(naam)}.`,
    rijden: (naam) => `Nous venons ${a(naam)}`,
    buiten: (prov) => `Nous roulons aussi en dehors de la province ${de(prov)}, le trajet compte alors dans la planification.`,
    inDeBuurt: "Louer un déshumidificateur dans les environs :",
    of: " ou ",
    twijfel: "Vous hésitez sur le nombre d'appareils ? Appelez-nous au",
    bereken: "calculez tout de suite votre pack",
    ofKort: "ou",
    streekH2: (streek) => `${streek}, et le reste de la province.`,
    omstreken: (plaats) => `${a(plaats)} et dans les environs.`.replace(/^à/, "À").replace(/^au/, "Au"),
    streekLede: (plaats, prov) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs("b", { children: [
        "Nous livrons ",
        a(plaats),
        " et dans les communes voisines."
      ] }),
      " Choisissez une localité ci-dessous pour en savoir plus sur la location et la livraison, ou consultez notre zone d'activité ",
      prov,
      "."
    ] }),
    elders: (prov) => `Ailleurs ${prov}`,
    eldersP: "Découvrez pour chaque commune comment louer un déshumidificateur, ce que comprend un pack de séchage et comment convenir de la livraison.",
    heleProv: (prov) => `Toute la province : ${prov}`,
    advies: "Besoin d'un conseil pour votre chantier ?",
    adviesP: "Parlons des dimensions, du matériau et de votre planning. Appelez-nous au",
    faqTitel: (plaats) => `Les questions de nos clients ${a(plaats)}.`,
    kaartAlt: (naam, prov) => `Zone d'activité de Vernast, avec ${naam} ${prov}`,
    badge: "Livraison et installation comprises",
    badgeKlein: "Avec un pack de séchage livré",
    placeholder: (naam) => `P. ex. rénovation ${a(naam)}, chape coulée la semaine dernière, quand le poseur de sol peut-il commencer ?`
  },
  en: {
    prijsH2: (plaats) => `What does dehumidifier hire cost in ${plaats}?`,
    prijsLede1: (plaats) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "The right price starts with what needs to dry." }),
      " For a whole house, wet screed or plasterwork you calculate a complete drying package; for a single room, a single unit may be suitable. ",
      /* @__PURE__ */ jsxs("b", { children: [
        "Delivery in ",
        plaats,
        " is included in your drying package."
      ] })
    ] }),
    in: (plaats) => `in ${plaats}`,
    pakketLede: (postcode) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "You don't need to combine units yourself." }),
      " We calculate your drying package based on the floor area, the material and the layer thickness. You see",
      " ",
      /* @__PURE__ */ jsx("b", { children: "the package price in advance" }),
      ", including delivery to postcode ",
      postcode,
      ", installation, readings before and after, and collection."
    ] }),
    bouwKick: "The buildings here",
    leverKick: "Where we deliver",
    feitenBouw: [
      ["Collection point", "Aartselaar, by appointment"],
      ["Delivery", "As per your confirmed booking"],
      ["Transport cost", "None, included in the drying package"]
    ],
    postcode: "Postcode",
    bouwNoot: (lp, provPad, prov) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("b", { children: "Which unit you need depends on your room, not on your municipality." }),
      " The full range with capacities and daily rates is on ",
      /* @__PURE__ */ jsxs(Link, { to: provPad, children: [
        "our page for deliveries ",
        prov
      ] }),
      ", or calculate your set-up straight away in the",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
      ". Prefer to collect it yourself? You can, in ",
      /* @__PURE__ */ jsx(Link, { to: lp("/afhalen"), children: "Aartselaar" }),
      "."
    ] }),
    toestelH2: (naam) => `The units most often used in ${naam}`,
    toestelNoot: (lp) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "See the options for your project and ask for advice on the right set-up.",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Calculate the drying package for your room" }),
      " or see ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "all units" }),
      "."
    ] }),
    leverH2: (naam) => `Collection or delivery in ${naam}?`,
    feitenLever: [
      ["Collection point", "Aartselaar, by appointment"],
      ["Delivery time", "As per your confirmed booking"],
      ["Transport and installation", "Included in the drying package"]
    ],
    wervenH2: (waar) => `Sites we dried ${waar}`,
    omgeving: (plaats) => `${plaats} and the surrounding area`,
    wervenEen: "One project from this municipality, with photos of the site itself.",
    wervenVeel: (n) => `${n} projects from this municipality, each with photos of the site itself.`,
    wervenRond: (plaats, prov) => `Work in ${plaats} itself, plus sites elsewhere ${prov}. Each with photos of the site, the same team and the same reading at the start and at handover.`,
    wervenProv: (prov) => `Sites ${prov}, each with photos of the site itself. The same team, the same reading at the start and at handover.`,
    alleWerven: (prov) => `View all sites ${prov}`,
    verloopH2: (naam) => `From booking to collection in ${naam}.`,
    rijden: (naam) => `We drive to ${naam}`,
    buiten: (prov) => `We also drive outside ${prov}, although the journey then counts in the planning.`,
    inDeBuurt: "Dehumidifier hire nearby:",
    of: " or ",
    twijfel: "Unsure about the number of units? Call us on",
    bereken: "calculate your package straight away",
    ofKort: "or",
    streekH2: (streek) => `${streek}, and the rest of the province.`,
    omstreken: (plaats) => `In ${plaats} and the surrounding area.`,
    streekLede: (plaats, prov) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs("b", { children: [
        "We deliver in ",
        plaats,
        " and the surrounding municipalities."
      ] }),
      " Choose a place below for details on hire and delivery, or see our service area ",
      prov,
      "."
    ] }),
    elders: (prov) => `Elsewhere ${prov}`,
    eldersP: "See for each municipality how to hire a construction dehumidifier, what a drying package includes and how to arrange delivery.",
    heleProv: (prov) => `The whole of ${prov}`,
    advies: "Need advice for your site?",
    adviesP: "Talk through the dimensions, the material and your planning. Call us on",
    faqTitel: (plaats) => `What customers in ${plaats} ask us.`,
    kaartAlt: (naam, prov) => `Vernast's service area, with ${naam} ${prov}`,
    badge: "Delivery and installation included",
    badgeKlein: "With a delivered drying package",
    placeholder: (naam) => `E.g. renovation in ${naam}, screed laid last week, when can the floor layer start?`
  }
};
const DANS_FR = {
  antwerpen: "dans la province d'Anvers",
  "oost-vlaanderen": "en Flandre orientale",
  "vlaams-brabant": "en Brabant flamand",
  brussel: "à Bruxelles",
  "west-vlaanderen": "en Flandre occidentale",
  limburg: "dans le Limbourg",
  "waals-brabant": "en Brabant wallon",
  henegouwen: "dans le Hainaut",
  namen: "en province de Namur",
  luxemburg: "en province de Luxembourg",
  luik: "en province de Liège"
};
const GemeenteSjabloon = ({ gemeente, beeld }) => {
  const { pathname } = useLocation();
  const taal = useTaal();
  const fr = taal === "fr";
  const nl = taal === "nl";
  const lp = useLokaalPad();
  const t = kies(COPY, taal);
  const g = kies(GEDEELD, taal);
  const route = GEMEENTE_BY_PATH[naarNl(pathname) ?? pathname.replace(/\/$/, "")] ?? GEMEENTE_ROUTES[0];
  const provincie = REGIO_ROUTES.find((r) => r.slug === route.regio);
  const kaart = kaartVoor(provincie);
  const naamVan = (r) => gemeenteNaamIn(r, taal);
  const naam = naamVan(route);
  const plaats = kruimelIn(route, taal);
  const provNaam = regioNaamIn(provincie, taal);
  const provIn = fr ? DANS_FR[provincie.slug] ?? a(provNaam) : taal === "en" ? regioInEn(provincie) : provNaam;
  const provZin = taal === "en" ? provincie.zinEn ?? provNaam : provNaam;
  const inPlaats = (p) => fr ? a(p) : `in ${p}`;
  const streekNaam = (naam2) => fr ? streekNaamFr(naam2) : taal === "en" ? streekNaamEn(naam2) : naam2;
  const streekKenmerk = (st) => fr ? streekKenmerkFr(st.gemeenten, plaatsFr) : taal === "en" ? streekKenmerkEn(st.gemeenten, plaatsEn) : st.kenmerk;
  const padIn = (nlPad) => nl ? nlPad : vertaalPad(nlPad, taal);
  const plaatsen = plaatsenVanRoute(route);
  const regioWerven = realisatieSlugsIn(route.regio).map(getRealisatie).filter((r) => !!r);
  const eigenWerven = regioWerven.filter((r) => plaatsen.some((p) => r.locatie.includes(p)));
  const werven = [
    ...eigenWerven,
    ...regioWerven.filter((r) => !eigenWerven.includes(r))
  ].slice(0, 3);
  const wervenUitGemeente = eigenWerven.length > 0 && werven.every((r) => eigenWerven.includes(r));
  const wervenRondGemeente = eigenWerven.length > 0 && !wervenUitGemeente;
  const buren = gemeente.buren.map((slug) => GEMEENTE_ROUTES.find((x) => x.slug === slug)).filter((x) => !!x && !!padIn(x.path));
  const streek = (STREKEN_PER_REGIO[route.regio] ?? []).find(
    (st) => st.gemeenten.some((n) => n === route.name || plaatsen.includes(n))
  );
  const andere = gemeentenInRegio(route.regio).filter((x) => x.slug !== route.slug && !!padIn(x.path));
  const elders = andere.filter(
    (x) => !(streek?.gemeenten ?? []).some((n) => gemeenteVanPlaats(n)?.slug === x.slug)
  );
  const drogers = Object.values(PRODUCTS).filter((p) => /ontvochtiger|droger/i.test(p.type));
  const goedkoopst = Math.min(...drogers.map((p) => p.day));
  const goedkoopsteDag = nl ? euroInt(goedkoopst) : formatEuro(goedkoopst, taal, 0);
  const chape = droogtermijnen("chape");
  const pleister = droogtermijnen("pleister");
  const termijn = g.weken ?? termijnLabel;
  const bereik = g.weken ?? bereikLabel;
  const provPad = lp(provincie.path);
  const feiten = (rijen) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
    rijen.map(([dt, dd]) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("dt", { children: dt }),
      /* @__PURE__ */ jsx("dd", { children: dd })
    ] }, dt)),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("dt", { children: t.postcode }),
      /* @__PURE__ */ jsx("dd", { children: route.postcode })
    ] })
  ] });
  const priceIntroSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap split omgekeerd", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", style: { marginBottom: 0 }, children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.prijs.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.prijsH2(plaats) }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.prijsLede1(plaats) }),
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
          className: "cut vervaagd",
          src: "/vernast/man-zen-crop.webp",
          alt: g.prijs.beeldAlt,
          width: 800,
          height: 600,
          loading: "lazy",
          decoding: "async",
          style: { width: "min(84%,380px)" }
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
        /* @__PURE__ */ jsx("h2", { className: "sec", children: g.pakket.h2(t.in(plaats)) }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.pakketLede(route.postcode) })
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
  const bouwSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.bouwKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: gemeente.bouw.kop })
        ] }),
        [...gemeente.intro.slice(1), ...gemeente.bouw.alineas].map((alinea) => /* @__PURE__ */ jsx("p", { className: "lede", children: nadruk(alinea) }, alinea))
      ] }),
      /* @__PURE__ */ jsx(Reveal, { from: "up", className: "split-vis", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: beeld.src,
          alt: beeld.alt,
          width: 800,
          height: 600,
          loading: "lazy",
          decoding: "async"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("dl", { className: "feiten", style: { marginTop: "28px", maxWidth: "860px" }, children: feiten(t.feitenBouw) }),
    /* @__PURE__ */ jsx("div", { className: "note", children: t.bouwNoot(lp, provPad, nl ? provNaam : provIn) })
  ] }) }) });
  const equipmentSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.toestel.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.toestelH2(naam) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "prods", children: gemeente.toestellen.map((item, i) => {
      if (!PRODUCTS[item.key]) return null;
      const prod = productInTaal(item.key, taal);
      const label = toestelLabelIn(item.key, taal);
      return /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i % 3 * 0.08, as: "article", className: "prod", children: [
        /* @__PURE__ */ jsx("div", { className: "pimg", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: prod.img[0],
            alt: productImageAlt(prod, 0),
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
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.leverH2(naam) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "split32", children: [
      /* @__PURE__ */ jsxs(Reveal, { from: "up", className: "paneel", children: [
        /* @__PURE__ */ jsxs("div", { className: "phead", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(TruckIcon, { size: 19 }) }),
          /* @__PURE__ */ jsx("h3", { children: gemeente.levering.kop })
        ] }),
        /* @__PURE__ */ jsx("p", { children: nadruk(gemeente.levering.alinea) }),
        /* @__PURE__ */ jsx("dl", { className: "feiten", children: feiten(t.feitenLever) }),
        /* @__PURE__ */ jsxs(Link, { className: "btn", to: lp("/verhuur/calculator"), style: { marginTop: "22px" }, children: [
          g.levering.reserveer,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: 0.08, className: "paneel", children: [
        /* @__PURE__ */ jsxs("div", { className: "phead", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(CartIcon, { size: 19 }) }),
          /* @__PURE__ */ jsx("h3", { children: gemeente.afhalen.kop })
        ] }),
        /* @__PURE__ */ jsx("p", { children: nadruk(gemeente.afhalen.alinea) }),
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
        /* @__PURE__ */ jsxs(Link, { className: "btn", to: lp("/verhuur/afhalen"), style: { marginTop: "22px" }, children: [
          g.levering.afhalen,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] })
      ] })
    ] })
  ] }) }) });
  const projectsSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.praktijk }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.wervenH2(
        wervenUitGemeente ? nl ? plaats : inPlaats(plaats) : wervenRondGemeente ? nl ? t.omgeving(plaats) : inPlaats(t.omgeving(plaats)) : provIn
      ) }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: wervenUitGemeente ? werven.length === 1 ? t.wervenEen : t.wervenVeel(werven.length) : wervenRondGemeente ? t.wervenRond(plaats, nl ? provNaam : provIn) : t.wervenProv(nl ? provNaam : provIn) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rzs", children: werven.map((r, i) => /* @__PURE__ */ jsx(Reveal, { from: "up", delay: i % 3 * 0.08, children: /* @__PURE__ */ jsxs(Link, { className: "rz", to: lp(`/realisaties/${r.slug}`), children: [
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
    /* @__PURE__ */ jsx("p", { className: "tblnote", style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(Link, { to: provPad, style: { fontWeight: 600 }, children: t.alleWerven(nl ? provNaam : provIn) }) })
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
  const processSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: g.verloop.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.verloopH2(naam) }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: g.verloop.lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flow", children: g.verloop.stappen(t.rijden(naam)).map(({ Icon, title, desc }, i) => /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i * 0.08, className: "fl", children: [
      /* @__PURE__ */ jsx("i", { children: `0${i + 1}` }),
      /* @__PURE__ */ jsx("div", { className: "fi", children: /* @__PURE__ */ jsx(Icon, { size: 19 }) }),
      /* @__PURE__ */ jsx("h3", { children: title }),
      /* @__PURE__ */ jsx("p", { children: desc })
    ] }, title)) }),
    /* @__PURE__ */ jsxs("div", { className: "note", children: [
      /* @__PURE__ */ jsx("b", { children: provincie.opAanvraag ? g.leverenOpAfspraak : g.leverenOveral }),
      " ",
      t.buiten(provZin),
      buren.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        " ",
        t.inDeBuurt,
        " ",
        buren.map((x, i) => /* @__PURE__ */ jsxs("span", { children: [
          i > 0 && (i === buren.length - 1 ? t.of : ", "),
          /* @__PURE__ */ jsx(Link, { to: padIn(x.path), children: naamVan(x) })
        ] }, x.slug)),
        "."
      ] }),
      " ",
      t.twijfel,
      " ",
      /* @__PURE__ */ jsx("a", { href: `tel:${CONTACT.phoneE164}`, children: CONTACT.phoneLocal }),
      " ",
      t.ofKort,
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: t.bereken }),
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
        /* @__PURE__ */ jsx("div", { className: "rvc-st", role: "img", "aria-label": g.reviews.sterren(review.rating), children: Array.from({ length: review.rating }).map((_, ster) => /* @__PURE__ */ jsx(StarIcon, { size: 14 }, ster)) }),
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
  const linksSection = (kleur) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("section", { className: kleur, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.leverKick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: streek ? t.streekH2(streekNaam(streek.naam)) : t.omstreken(plaats) }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.streekLede(plaats, nl ? provNaam : provIn) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "strk", children: [
      streek && /* @__PURE__ */ jsxs(Reveal, { from: "up", as: "article", className: "strk-blok", children: [
        /* @__PURE__ */ jsx("h3", { children: streekNaam(streek.naam) }),
        /* @__PURE__ */ jsx("p", { children: streekKenmerk(streek) }),
        /* @__PURE__ */ jsx("ul", { className: "strk-lijst", children: streek.gemeenten.map((n) => {
          const eigen = gemeenteVanPlaats(n);
          const pad2 = eigen && eigen.slug !== route.slug ? padIn(eigen.path) : null;
          const label = plaatsIn(n, taal);
          return /* @__PURE__ */ jsx("li", { children: pad2 ? /* @__PURE__ */ jsx(Link, { to: pad2, children: label }) : /* @__PURE__ */ jsx("span", { children: label }) }, n);
        }) })
      ] }),
      elders.length > 0 && /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: 0.08, as: "article", className: "strk-blok", children: [
        /* @__PURE__ */ jsx("h3", { children: t.elders(nl ? provNaam : provIn) }),
        /* @__PURE__ */ jsx("p", { children: t.eldersP }),
        /* @__PURE__ */ jsxs("ul", { className: "strk-lijst", children: [
          elders.map((x) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: padIn(x.path), children: naamVan(x) }) }, x.slug)),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: provPad, children: t.heleProv(provZin) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "note", children: [
      /* @__PURE__ */ jsx("b", { children: t.advies }),
      " ",
      t.adviesP,
      " ",
      /* @__PURE__ */ jsx("a", { href: `tel:${CONTACT.phoneE164}`, children: CONTACT.phoneLocal }),
      " ",
      t.ofKort,
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: t.bereken }),
      "."
    ] })
  ] }) }) });
  const faqSection = (kleur) => /* @__PURE__ */ jsx(
    FaqBlok,
    {
      titel: t.faqTitel(plaats),
      vragen: gemeente.faq,
      sleutel: "gemeente-faq",
      variant: kleur === "sr" ? "rood" : "wit",
      children: /* @__PURE__ */ jsxs("div", { className: "manband", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
          /* @__PURE__ */ jsx("span", { className: "mbk", children: g.slot.mbk(t.in(plaats)) }),
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
            className: "mb-man breed tegenrand bijsnijden",
            src: "/vernast/man-bestelwagen.webp",
            alt: g.slot.beeldAlt,
            width: 1440,
            height: 827,
            loading: "lazy",
            decoding: "async"
          }
        )
      ] })
    }
  );
  const inhoud = [
    priceIntroSection,
    packagesSection,
    bouwSection,
    equipmentSection,
    deliverySection,
    ...werven.length > 0 ? [projectsSection] : [],
    ...chape.length > 0 ? [dryingTimesSection] : [],
    linksSection,
    processSection,
    reviewsSection,
    faqSection
  ];
  const kruimel = kruimelIn(route, taal);
  const pad = lp(route.path);
  return /* @__PURE__ */ jsxs("div", { className: "v3c rg-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: gemeente.title,
        description: gemeente.description,
        path: pad,
        jsonLd: [
          organizationSchema(),
          serviceSchema({
            name: gemeente.h1,
            description: gemeente.description,
            path: pad,
            serviceType: g.schema.serviceType,
            /*
              Een `City`, niet de `AdministrativeArea` van de provinciepagina:
              zo zegt de schema zelf dat deze pagina over de gemeente gaat en
              die andere over de provincie.
            */
            areaServed: {
              "@type": "City",
              name: naam,
              postalCode: route.postcode,
              containedInPlace: { "@type": "AdministrativeArea", name: provNaam }
            }
          }),
          faqSchema(gemeente.faq.map((f) => ({ question: f.q, answer: f.a }))),
          /*
            Vier niveaus, met de provincie als echte tussenstap. Op de
            provinciepagina wijst niveau 2 nog naar `/#regio` — een anker, geen
            pagina — maar hier is er wél een bovenliggende pagina.
          */
          breadcrumbSchema([
            { name: g.hero.home, path: lp("/") },
            { name: g.schema.werkgebied, path: `${lp("/")}#regio` },
            { name: provNaam, path: provPad },
            { name: kruimel, path: pad }
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
              /* @__PURE__ */ jsx(Link, { to: provPad, children: provNaam }),
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " /" })
            ] }),
            /* @__PURE__ */ jsx("li", { "aria-current": "page", children: kruimel })
          ] }) }),
          /* @__PURE__ */ jsxs("span", { className: "kick met-ic", children: [
            /* @__PURE__ */ jsx(PinIcon, { size: 13 }),
            " ",
            gemeente.kicker
          ] }),
          /* @__PURE__ */ jsx("h1", { children: gemeente.h1 }),
          /* @__PURE__ */ jsx("p", { children: nadruk(gemeente.intro[0]) }),
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
                alt: t.kaartAlt(naam, nl ? provNaam : provIn),
                width: kaart.width,
                height: kaart.height,
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `speld${parseInt(kaart.pin.left, 10) > 55 ? " links" : ""}`,
                style: { left: kaart.pin.left, top: kaart.pin.top },
                children: /* @__PURE__ */ jsx("b", { children: naam })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fbadge", style: { bottom: "40px", left: "-4%" }, children: [
            /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsx(TruckIcon, { size: 15 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              t.badge,
              /* @__PURE__ */ jsx("small", { children: t.badgeKlein })
            ] })
          ] })
        ] })
      ] }) }) }),
      inhoud.map((sec, i) => /* @__PURE__ */ jsx(Fragment, { children: sec(beurt(i)) }, i)),
      /* @__PURE__ */ jsx(
        ContactBlok,
        {
          titel: g.contact.titel(nl ? naam : inPlaats(naam)),
          lede: g.contact.lede,
          onderwerpen: g.contact.onderwerpen(nl ? naam : inPlaats(naam)),
          placeholder: t.placeholder(naam)
        }
      )
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  GemeenteSjabloon as G
};
