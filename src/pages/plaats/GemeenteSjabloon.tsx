import { Fragment, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import { nadruk } from "@/components/content/nadruk";
import { beurt, hoofdKnop, tweedeKnop, type Sectie } from "@/components/content/ritme";
import {
  ArrowRightIcon,
  CartIcon,
  CheckIcon,
  GoogleIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  StarIcon,
  TruckIcon,
} from "@/components/home-v3/icons";
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import {
  GEMEENTE_BY_PATH,
  GEMEENTE_ROUTES,
  gemeentenInRegio,
  gemeenteNaamIn,
  gemeenteVanPlaats,
  kruimelIn,
  plaatsenVanRoute,
  plaatsEn,
  plaatsFr,
  plaatsIn,
  type GemeenteRoute,
} from "@/data/gemeente-slugs";
import type { Gemeente } from "@/data/gemeenten";
import { REGIO_ROUTES, kaartVoor, regioInEn, regioNaamIn } from "@/data/regio-slugs";
import {
  STREKEN_PER_REGIO,
  streekKenmerkEn,
  streekKenmerkFr,
  streekNaamEn,
  streekNaamFr,
} from "@/data/provincie-gemeenten";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { realisatieSlugsIn } from "@/data/realisatie-regio";
import { productImageAlt, PRODUCTS, toestelPad } from "@/data/verhuur";
import { productInTaal } from "@/data/verhuur.fr";
import { euroInt } from "@/lib/verhuur";
import { toestelLabelIn } from "@/data/navigation";
import { eersteReviews } from "@/data/reviews";
import {
  droogtermijnen,
  bereikLabel,
  natuurlijkeChapeBereik,
  natuurlijkePleisterWeken,
  termijnLabel,
} from "@/lib/droogtijden";
import { naarNl, vertaalPad } from "@/i18n/paden";
import { formatEuro, kies, useLokaalPad, useTaal, type Copy } from "@/i18n/useTaal";
import { GEDEELD, a, de } from "./plaats.copy";
import "@/styles/v3-content.css";

/**
 * Eén sjabloon voor de gemeentepagina's, in elke taal.
 *
 * De tekst komt als prop binnen: `pages/GemeentePage.tsx` geeft de
 * Nederlandse uit `gemeenten.ts`, `pages/GemeentePageFr.tsx` de Franse uit
 * `gemeenten-fr/`, `pages/GemeentePageEn.tsx` de Engelse uit `gemeenten-en/`.
 * Zo laadt dit sjabloon zelf geen van de drie, en krijgt een
 * Franstalige geen 3 MB Nederlandse tekst mee (en omgekeerd). De vaste teksten
 * eromheen staan in `plaats.copy.tsx` en hieronder in `COPY`.
 *
 * **Het verschil met de provinciepagina is bewust inhoudelijk, niet alleen
 * geografisch.** Zou deze pagina de provinciepagina zijn met een andere naam
 * erin, dan is ze een doorway page en filtert Google haar weg — samen met de
 * provinciepagina waarvan ze een kopie is. Daarom staan hier alleen secties
 * die iets zeggen dat op provincieniveau níét waar is: de rijtijd vanaf ons
 * magazijn, de bebouwing van déze gemeente, drie eigen vragen. Zie
 * `src/data/gemeenten.ts` voor de inhoudelijke lat.
 *
 * React Router kan geen `bouwdroger-huren-:gemeente` (een parameter moet een
 * heel segment zijn), dus App.tsx registreert vaste routes die allemaal hier
 * uitkomen; welke gemeente het is, volgt uit het pad (in het Frans en Engels via
 * `naarNl`).
 */

interface Props {
  gemeente: Gemeente;
  /**
   * De werffoto van de provincie, in de taal van de pagina. Komt van de
   * provinciedata (`regios.ts`, `regios-fr/` of `regios-en/`): er zijn per provincie één
   * foto en tientallen gemeenten, en de bebouwing van een gemeente lijkt op die
   * van haar provincie.
   */
  beeld: { src: string; alt: string };
}

/** Teksten die alleen de gemeentepagina heeft. */
const COPY = {
  nl: {
    prijsH2: (plaats: string) => `Wat kost een bouwdroger huren in ${plaats}?`,
    prijsLede1: (plaats: string): ReactNode => (
      <>
        <b>De juiste prijs begint bij wat er moet drogen.</b> Voor een volledige woning, natte
        chape of pleisterwerk berekent u een compleet droogpakket; voor één ruimte kan een los
        toestel geschikt zijn. <b>Levering in {plaats} is inbegrepen bij uw droogpakket.</b>
      </>
    ),
    /* Zoals de plaats na een vast "in" in `GEDEELD` staat; het Frans zet zelf "à" of "au". */
    in: (plaats: string) => plaats,
    pakketLede: (postcode: string): ReactNode => (
      <>
        <b>U hoeft zelf geen toestellen te combineren.</b> Wij berekenen uw droogpakket op basis
        van de oppervlakte, het materiaal en de laagdikte. U ziet <b>vooraf de pakketprijs</b>,
        inclusief levering op postcode {postcode}, installatie, voor- en nameting en ophaling.
      </>
    ),
    bouwKick: "De bebouwing hier",
    leverKick: "Waar we leveren",
    feitenBouw: [
      ["Afhaalpunt", "Aartselaar, op afspraak"],
      ["Levering", "Volgens uw bevestigde reservatie"],
      ["Transportkost", "Geen, inbegrepen in het droogpakket"],
    ] as [string, string][],
    postcode: "Postcode",
    bouwNoot: (lp: (p: string) => string, provPad: string, provNaam: string): ReactNode => (
      <>
        <b>Welk toestel u nodig heeft, hangt af van uw ruimte en niet van uw gemeente.</b> Het
        volledige gamma met capaciteiten en dagprijzen staat op{" "}
        <Link to={provPad}>de pagina over {provNaam}</Link>, of bereken uw opstelling meteen in de{" "}
        <Link to={lp("/verhuur/calculator")}>droogcalculator</Link>. Liever zelf ophalen? Dat kan in{" "}
        <Link to={lp("/afhalen")}>Aartselaar</Link>.
      </>
    ),
    toestelH2: (naam: string) => `Wat er in ${naam} het vaakst staat`,
    toestelNoot: (lp: (p: string) => string): ReactNode => (
      <>
        Bekijk de mogelijkheden voor uw project en vraag advies over de juiste opstelling.{" "}
        <Link to={lp("/verhuur/calculator")}>Bereken het droogpakket voor uw ruimte</Link> of
        bekijk <Link to={lp("/machines")}>alle toestellen</Link>.
      </>
    ),
    leverH2: (naam: string) => `Afhalen of leveren in ${naam}?`,
    feitenLever: [
      ["Afhaalpunt", "Aartselaar, op afspraak"],
      ["Levertermijn", "Volgens uw bevestigde reservatie"],
      ["Transport en installatie", "Inbegrepen in het droogpakket"],
    ] as [string, string][],
    wervenH2: (waar: string) => `Werven die we in ${waar} droogden`,
    omgeving: (plaats: string) => `${plaats} en omgeving`,
    wervenEen: "Eén project uit deze gemeente, met de foto's van de werf zelf.",
    wervenVeel: (n: number) => `${n} projecten uit deze gemeente, elk met de foto's van de werf zelf.`,
    wervenRond: (plaats: string, prov: string) =>
      `Werk uit ${plaats} zelf, aangevuld met werven elders in de provincie ${prov}. Elk met de foto's van de werf, dezelfde ploeg en dezelfde meting bij de start en bij de oplevering.`,
    wervenProv: (prov: string) =>
      `Werven uit de provincie ${prov}, elk met de foto's van de werf zelf. Dezelfde ploeg, dezelfde meting bij de start en bij de oplevering.`,
    alleWerven: (prov: string) => `Alle werven in ${prov} bekijken`,
    verloopH2: (naam: string) => `Van reservatie tot ophaling in ${naam}.`,
    rijden: (naam: string) => `Wij rijden naar ${naam}`,
    buiten: (prov: string) => `Buiten ${prov} rijden we ook, al telt de rit dan mee in de planning.`,
    inDeBuurt: "Bouwdroger huren in de buurt:",
    of: " of ",
    twijfel: "Twijfelt u over het aantal toestellen, bel ons op",
    bereken: "bereken meteen uw pakket",
    ofKort: "of",
    streekH2: (streek: string) => `${streek}, en de rest van de provincie.`,
    omstreken: (plaats: string) => `In ${plaats} en omstreken.`,
    streekLede: (plaats: string, prov: string): ReactNode => (
      <>
        <b>Wij leveren in {plaats} en de omliggende gemeenten.</b> Kies hieronder een plaats voor
        informatie over huren en levering, of bekijk het werkgebied in {prov}.
      </>
    ),
    elders: (prov: string) => `Elders in ${prov}`,
    eldersP:
      "Bekijk per gemeente hoe u een bouwdroger huurt, wat bij een droogpakket inbegrepen is en hoe u de levering afspreekt.",
    heleProv: (prov: string) => `Hele provincie ${prov}`,
    advies: "Advies nodig voor uw werf?",
    adviesP: "Bespreek de afmetingen, het materiaal en uw planning. Bel ons op",
    faqTitel: (plaats: string) => `Wat klanten in ${plaats} ons vragen.`,
    kaartAlt: (naam: string, prov: string) =>
      `Werkgebied van Vernast, met ${naam} in de provincie ${prov}`,
    badge: "Levering en plaatsing inbegrepen",
    badgeKlein: "Bij een droogpakket met levering",
    placeholder: (naam: string) =>
      `Bv. renovatie in ${naam}, chape vorige week geplaatst, wanneer kan de vloerder starten?`,
  },
  fr: {
    prijsH2: (plaats: string) => `Quel prix pour louer un déshumidificateur ${a(plaats)} ?`,
    prijsLede1: (plaats: string): ReactNode => (
      <>
        <b>Le bon prix dépend de ce qui doit sécher.</b> Pour une habitation entière, une chape
        humide ou du plafonnage, vous calculez un pack de séchage complet ; pour une seule pièce,
        un appareil seul peut convenir. <b>La livraison {a(plaats)} est comprise dans votre pack de séchage.</b>
      </>
    ),
    in: (plaats: string) => a(plaats),
    pakketLede: (postcode: string): ReactNode => (
      <>
        <b>Vous n'avez pas à combiner vous-même les appareils.</b> Nous calculons votre pack de
        séchage selon la surface, le matériau et l'épaisseur de la couche. Vous voyez{" "}
        <b>le prix du pack à l'avance</b>, livraison au code postal {postcode}, installation,
        mesures avant et après et reprise comprises.
      </>
    ),
    bouwKick: "Le bâti ici",
    leverKick: "Où nous livrons",
    feitenBouw: [
      ["Point d'enlèvement", "Aartselaar, sur rendez-vous"],
      ["Livraison", "Selon votre réservation confirmée"],
      ["Frais de transport", "Aucun, compris dans le pack de séchage"],
    ] as [string, string][],
    postcode: "Code postal",
    bouwNoot: (lp: (p: string) => string, provPad: string, provNaam: string): ReactNode => (
      <>
        <b>L'appareil qu'il vous faut dépend de votre pièce, pas de votre commune.</b> La gamme
        complète avec capacités et prix journaliers figure sur{" "}
        <Link to={provPad}>la page de notre zone d'activité {provNaam}</Link>, ou calculez tout de suite votre
        installation avec le <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link>.
        Vous préférez venir chercher l'appareil ? C'est possible à{" "}
        <Link to={lp("/afhalen")}>Aartselaar</Link>.
      </>
    ),
    toestelH2: (naam: string) => `Les appareils les plus utilisés ${a(naam)}`,
    toestelNoot: (lp: (p: string) => string): ReactNode => (
      <>
        Découvrez les possibilités pour votre projet et demandez conseil sur la bonne
        installation. <Link to={lp("/verhuur/calculator")}>Calculez le pack de séchage pour votre pièce</Link>{" "}
        ou consultez <Link to={lp("/machines")}>tous les appareils</Link>.
      </>
    ),
    leverH2: (naam: string) => `Enlèvement ou livraison ${a(naam)} ?`,
    feitenLever: [
      ["Point d'enlèvement", "Aartselaar, sur rendez-vous"],
      ["Délai de livraison", "Selon votre réservation confirmée"],
      ["Transport et installation", "Compris dans le pack de séchage"],
    ] as [string, string][],
    wervenH2: (waar: string) => `Des chantiers que nous avons séchés ${waar}`,
    omgeving: (plaats: string) => `${plaats} et environs`,
    wervenEen: "Un projet dans cette commune, avec les photos du chantier lui-même.",
    wervenVeel: (n: number) => `${n} projets dans cette commune, chacun avec les photos du chantier lui-même.`,
    wervenRond: (plaats: string, prov: string) =>
      `Des travaux ${a(plaats)} même, complétés par des chantiers ailleurs ${prov}. Chacun avec les photos du chantier, la même équipe et la même mesure au début et à la fin.`,
    wervenProv: (prov: string) =>
      `Des chantiers ${prov}, chacun avec les photos du chantier lui-même. La même équipe, la même mesure au début et à la fin.`,
    alleWerven: (prov: string) => `Voir tous les chantiers ${prov}`,
    verloopH2: (naam: string) => `De la réservation à la reprise ${a(naam)}.`,
    rijden: (naam: string) => `Nous venons ${a(naam)}`,
    buiten: (prov: string) =>
      `Nous roulons aussi en dehors de la province ${de(prov)}, le trajet compte alors dans la planification.`,
    inDeBuurt: "Louer un déshumidificateur dans les environs :",
    of: " ou ",
    twijfel: "Vous hésitez sur le nombre d'appareils ? Appelez-nous au",
    bereken: "calculez tout de suite votre pack",
    ofKort: "ou",
    streekH2: (streek: string) => `${streek}, et le reste de la province.`,
    omstreken: (plaats: string) => `${a(plaats)} et dans les environs.`.replace(/^à/, "À").replace(/^au/, "Au"),
    streekLede: (plaats: string, prov: string): ReactNode => (
      <>
        <b>Nous livrons {a(plaats)} et dans les communes voisines.</b> Choisissez une localité
        ci-dessous pour en savoir plus sur la location et la livraison, ou consultez notre zone
        d'activité {prov}.
      </>
    ),
    elders: (prov: string) => `Ailleurs ${prov}`,
    eldersP:
      "Découvrez pour chaque commune comment louer un déshumidificateur, ce que comprend un pack de séchage et comment convenir de la livraison.",
    heleProv: (prov: string) => `Toute la province : ${prov}`,
    advies: "Besoin d'un conseil pour votre chantier ?",
    adviesP: "Parlons des dimensions, du matériau et de votre planning. Appelez-nous au",
    faqTitel: (plaats: string) => `Les questions de nos clients ${a(plaats)}.`,
    kaartAlt: (naam: string, prov: string) => `Zone d'activité de Vernast, avec ${naam} ${prov}`,
    badge: "Livraison et installation comprises",
    badgeKlein: "Avec un pack de séchage livré",
    placeholder: (naam: string) =>
      `P. ex. rénovation ${a(naam)}, chape coulée la semaine dernière, quand le poseur de sol peut-il commencer ?`,
  },
  en: {
    prijsH2: (plaats: string) => `What does dehumidifier hire cost in ${plaats}?`,
    prijsLede1: (plaats: string): ReactNode => (
      <>
        <b>The right price starts with what needs to dry.</b> For a whole house, wet screed or
        plasterwork you calculate a complete drying package; for a single room, a single unit may
        be suitable. <b>Delivery in {plaats} is included in your drying package.</b>
      </>
    ),
    in: (plaats: string) => `in ${plaats}`,
    pakketLede: (postcode: string): ReactNode => (
      <>
        <b>You don't need to combine units yourself.</b> We calculate your drying package based on
        the floor area, the material and the layer thickness. You see{" "}
        <b>the package price in advance</b>, including delivery to postcode {postcode},
        installation, readings before and after, and collection.
      </>
    ),
    bouwKick: "The buildings here",
    leverKick: "Where we deliver",
    feitenBouw: [
      ["Collection point", "Aartselaar, by appointment"],
      ["Delivery", "As per your confirmed booking"],
      ["Transport cost", "None, included in the drying package"],
    ] as [string, string][],
    postcode: "Postcode",
    bouwNoot: (lp: (p: string) => string, provPad: string, prov: string): ReactNode => (
      <>
        <b>Which unit you need depends on your room, not on your municipality.</b> The full range
        with capacities and daily rates is on <Link to={provPad}>our page for deliveries {prov}</Link>,
        or calculate your set-up straight away in the{" "}
        <Link to={lp("/verhuur/calculator")}>drying calculator</Link>. Prefer to collect it
        yourself? You can, in <Link to={lp("/afhalen")}>Aartselaar</Link>.
      </>
    ),
    toestelH2: (naam: string) => `The units most often used in ${naam}`,
    toestelNoot: (lp: (p: string) => string): ReactNode => (
      <>
        See the options for your project and ask for advice on the right set-up.{" "}
        <Link to={lp("/verhuur/calculator")}>Calculate the drying package for your room</Link> or
        see <Link to={lp("/machines")}>all units</Link>.
      </>
    ),
    leverH2: (naam: string) => `Collection or delivery in ${naam}?`,
    feitenLever: [
      ["Collection point", "Aartselaar, by appointment"],
      ["Delivery time", "As per your confirmed booking"],
      ["Transport and installation", "Included in the drying package"],
    ] as [string, string][],
    wervenH2: (waar: string) => `Sites we dried ${waar}`,
    omgeving: (plaats: string) => `${plaats} and the surrounding area`,
    wervenEen: "One project from this municipality, with photos of the site itself.",
    wervenVeel: (n: number) => `${n} projects from this municipality, each with photos of the site itself.`,
    wervenRond: (plaats: string, prov: string) =>
      `Work in ${plaats} itself, plus sites elsewhere ${prov}. Each with photos of the site, the same team and the same reading at the start and at handover.`,
    wervenProv: (prov: string) =>
      `Sites ${prov}, each with photos of the site itself. The same team, the same reading at the start and at handover.`,
    alleWerven: (prov: string) => `View all sites ${prov}`,
    verloopH2: (naam: string) => `From booking to collection in ${naam}.`,
    rijden: (naam: string) => `We drive to ${naam}`,
    buiten: (prov: string) => `We also drive outside ${prov}, although the journey then counts in the planning.`,
    inDeBuurt: "Dehumidifier hire nearby:",
    of: " or ",
    twijfel: "Unsure about the number of units? Call us on",
    bereken: "calculate your package straight away",
    ofKort: "or",
    streekH2: (streek: string) => `${streek}, and the rest of the province.`,
    omstreken: (plaats: string) => `In ${plaats} and the surrounding area.`,
    streekLede: (plaats: string, prov: string): ReactNode => (
      <>
        <b>We deliver in {plaats} and the surrounding municipalities.</b> Choose a place below for
        details on hire and delivery, or see our service area {prov}.
      </>
    ),
    elders: (prov: string) => `Elsewhere ${prov}`,
    eldersP:
      "See for each municipality how to hire a construction dehumidifier, what a drying package includes and how to arrange delivery.",
    heleProv: (prov: string) => `The whole of ${prov}`,
    advies: "Need advice for your site?",
    adviesP: "Talk through the dimensions, the material and your planning. Call us on",
    faqTitel: (plaats: string) => `What customers in ${plaats} ask us.`,
    kaartAlt: (naam: string, prov: string) => `Vernast's service area, with ${naam} ${prov}`,
    badge: "Delivery and installation included",
    badgeKlein: "With a delivered drying package",
    placeholder: (naam: string) =>
      `E.g. renovation in ${naam}, screed laid last week, when can the floor layer start?`,
  },
} satisfies Copy<Record<string, unknown>>;

/**
 * Hoe de provincie in een Franse zin staat. Dezelfde waarden als `dans` in
 * `regios-fr/`, maar die bestanden zijn te groot om voor één zin te laden.
 */
const DANS_FR: Record<string, string> = {
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
  luik: "en province de Liège",
};

const GemeenteSjabloon = ({ gemeente, beeld }: Props) => {
  const { pathname } = useLocation();
  const taal = useTaal();
  const fr = taal === "fr";
  const nl = taal === "nl";
  const lp = useLokaalPad();
  const t = kies(COPY, taal);
  const g = kies(GEDEELD, taal);

  const route = GEMEENTE_BY_PATH[naarNl(pathname) ?? pathname.replace(/\/$/, "")] ?? GEMEENTE_ROUTES[0];
  const provincie = REGIO_ROUTES.find((r) => r.slug === route.regio)!;
  const kaart = kaartVoor(provincie);

  /** De naam van een gemeente in de taal van de pagina. */
  const naamVan = (r: GemeenteRoute) => gemeenteNaamIn(r, taal);
  const naam = naamVan(route);
  /*
    "Antwerpen stad", niet "Antwerpen" kaal. De stad en de provincie dragen
    dezelfde `name`; in een kop op déze pagina moet de lezer (en Google) zien
    welke van de twee bedoeld is. `kruimel` staat er precies daarvoor in
    `gemeente-slugs.ts`, en gemeenten zonder naamgenoot vallen terug op `name`.
  */
  const plaats = kruimelIn(route, taal);
  const provNaam = regioNaamIn(provincie, taal);
  /*
    "in Antwerpen" / "dans la province d'Anvers" / "in the province of
    Antwerp": het Frans en het Engels kiezen het voorzetsel per provincie.
    Het Nederlands zet zelf "in" of "provincie" in de zin.
  */
  const provIn = fr
    ? (DANS_FR[provincie.slug] ?? a(provNaam))
    : taal === "en"
      ? regioInEn(provincie)
      : provNaam;
  /*
    De provincie zonder voorzetsel: "outside the province of Antwerp", "the
    whole of East Flanders". Het Frans en het Nederlands gebruiken daar de kale
    naam.
  */
  const provZin = taal === "en" ? (provincie.zinEn ?? provNaam) : provNaam;
  /* Een plaats na een voorzetsel: "à Mons", "in Mons"; het Nederlands zet "in" zelf. */
  const inPlaats = (p: string) => (fr ? a(p) : `in ${p}`);
  /* De naam en de kenmerkzin van een streek in de taal van de pagina. */
  const streekNaam = (naam: string) =>
    fr ? streekNaamFr(naam) : taal === "en" ? streekNaamEn(naam) : naam;
  const streekKenmerk = (st: { gemeenten: string[]; kenmerk: string }) =>
    fr
      ? streekKenmerkFr(st.gemeenten, plaatsFr)
      : taal === "en"
        ? streekKenmerkEn(st.gemeenten, plaatsEn)
        : st.kenmerk;

  /*
    Een link naar een andere gemeente, alleen als die in deze taal bestaat. In
    het Frans heeft (nog) niet elke gemeente een pagina; een link naar de
    Nederlandse pagina midden in een Franse lijst zou de lezer van taal doen
    wisselen zonder dat hij erom vroeg.
  */
  const padIn = (nlPad: string) => (nl ? nlPad : vertaalPad(nlPad, taal));

  /*
    De werven in déze gemeente, herkend aan de plaatsnaam in `locatie`
    ("Bouwdroging · Kontich"). Hoogstens drie, want de rij is drie breed.
    Zijn er in deze gemeente zelf geen werven, dan vullen we aan met werven uit
    de provincie; de kop en de inleiding zeggen wél waar ze liggen, want een
    werf in Lokeren onder de titel "werven die we in Aartselaar droogden" is
    gewoon onwaar.
  */
  const plaatsen = plaatsenVanRoute(route);
  const regioWerven = realisatieSlugsIn(route.regio)
    .map(getRealisatie)
    .filter((r): r is Realisatie => !!r);
  const eigenWerven = regioWerven.filter((r) => plaatsen.some((p) => r.locatie.includes(p)));
  const werven = [
    ...eigenWerven,
    ...regioWerven.filter((r) => !eigenWerven.includes(r)),
  ].slice(0, 3);
  const wervenUitGemeente = eigenWerven.length > 0 && werven.every((r) => eigenWerven.includes(r));
  const wervenRondGemeente = eigenWerven.length > 0 && !wervenUitGemeente;

  /* De buurgemeenten die zelf een pagina hebben (in deze taal); het cluster
     dat deze pagina's samen draagt, net als bij de provincies onderling. */
  const buren = gemeente.buren
    .map((slug) => GEMEENTE_ROUTES.find((x) => x.slug === slug))
    .filter((x): x is GemeenteRoute => !!x && !!padIn(x.path));

  /*
    De streek waarin deze gemeente ligt, uit dezelfde lijst waarmee de
    provinciepagina haar gemeenten groepeert. Staat de gemeente (nog) in geen
    enkele streek, dan valt de kaart weg en blijft alleen de lijst met de
    andere gemeenten over.
  */
  const streek = (STREKEN_PER_REGIO[route.regio] ?? []).find((st) =>
    st.gemeenten.some((n) => n === route.name || plaatsen.includes(n)),
  );
  const andere = gemeentenInRegio(route.regio).filter((x) => x.slug !== route.slug && !!padIn(x.path));
  /*
    De gemeenten met een eigen pagina die níét al in de streekkaart hierboven
    staan. Zonder deze filter stond een buurgemeente twee keer als link op
    dezelfde pagina.
  */
  const elders = andere.filter(
    (x) => !(streek?.gemeenten ?? []).some((n) => gemeenteVanPlaats(n)?.slug === x.slug),
  );
  /*
    De vanafprijs komt uit `PRODUCTS` en wordt niet overgetypt. Alleen
    bouwdrogers tellen mee -- een ventilator is goedkoper, maar wie "vanaf"
    leest denkt aan de droger.
  */
  const drogers = Object.values(PRODUCTS).filter((p) => /ontvochtiger|droger/i.test(p.type));
  const goedkoopst = Math.min(...drogers.map((p) => p.day));
  const goedkoopsteDag = nl ? euroInt(goedkoopst) : formatEuro(goedkoopst, taal, 0);
  const chape = droogtermijnen("chape");
  const pleister = droogtermijnen("pleister");
  const termijn = g.weken ?? termijnLabel;
  const bereik = g.weken ?? bereikLabel;
  const provPad = lp(provincie.path);

  const feiten = (rijen: [string, string][]) => (
    <>
      {rijen.map(([dt, dd]) => (
        <div key={dt}>
          <dt>{dt}</dt>
          <dd>{dd}</dd>
        </div>
      ))}
      <div>
        <dt>{t.postcode}</dt>
        <dd>{route.postcode}</dd>
      </div>
    </>
  );

  const priceIntroSection: Sectie = (kleur) => (
    <>
      {/* ================= WAT HET KOST ================= */}
      {/*
        De prijsvraag vóór de toestellen. Wie "bouwdroger huren <gemeente>"
        intikt, weet nog niet dat wij een berekend pakket leveren in plaats van
        een machine te verhuren.
      */}
      <section className={kleur}>
        <div className="wrap split omgekeerd">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick">{g.prijs.kick}</span>
            <h2 className="sec">{t.prijsH2(plaats)}</h2>
            <p className="lede">{t.prijsLede1(plaats)}</p>
            <p className="lede">{g.prijs.lede2}</p>
            <dl className="feiten">
              {g.prijs.feiten.map(({ dt, dd }) => (
                <div key={dt}>
                  <dt>{dt}</dt>
                  <dd>{typeof dd === "function" ? dd(goedkoopsteDag) : dd}</dd>
                </div>
              ))}
            </dl>
            <div className="prijsknoppen">
              <Link className={hoofdKnop(kleur)} to={lp("/verhuur/calculator")}>
                {g.prijs.knopPakket}
                <ArrowRightIcon />
              </Link>
              <Link className={tweedeKnop(kleur)} to={lp("/prijzen")}>
                {g.prijs.knopPrijzen}
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <Reveal from="up" className="split-vis">
            <img
              className="cut vervaagd"
              src="/vernast/man-zen-crop.webp"
              alt={g.prijs.beeldAlt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              style={{ width: "min(84%,380px)" }}
            />
            <div className="fbadge" style={{ bottom: "-16px", left: "0" }}>
              <span className="ic"><CheckIcon size={15} strokeWidth={3} /></span>
              <div>
                {g.prijs.badge}
                <small>{g.prijs.badgeKlein}</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );

  const packagesSection: Sectie = (kleur) => (
    <>
      {/* ================= DROOGPAKKETTEN ================= */}
      <section className={kleur} id="droogpakketten">
        <div className="wrap">
          <div className="kop-rij">
            <div className="sec-head">
              <span className="kick">{g.pakket.kick}</span>
              <h2 className="sec">{g.pakket.h2(t.in(plaats))}</h2>
              <p className="lede">{t.pakketLede(route.postcode)}</p>
            </div>
            <div className="prijsknoppen">
              <Link className={hoofdKnop(kleur)} to={lp("/verhuur/calculator")}>
                {g.pakket.knopPakket}
                <ArrowRightIcon />
              </Link>
              <Link className={tweedeKnop(kleur)} to={lp("/prijzen")}>
                {g.pakket.knopPrijzen}
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div className="g3">
            {g.pakket.kaarten.map(({ Icon, title, desc, path, label }, i) => (
              <Reveal from="up" delay={i * 0.08} className="kaart gelijk" key={path}>
                <div className="ki"><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link className="btn" to={lp(path)} aria-label={label}>
                  {g.pakket.kaartKnop}
                  <ArrowRightIcon size={13} />
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="note schild">
            <span className="schild-ic" aria-hidden="true"><ShieldIcon size={22} strokeWidth={1.7} /></span>
            <div>
              <p>{g.pakket.garantie(lp)}</p>
              <p>{g.pakket.waarborg}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const bouwSection: Sectie = (kleur) => (
    <>
      {/* ================= WAARVOOR MEN HIER HUURT ================= */}
      <section className={kleur}>
        <div className="wrap">
          {/*
            De tekst links, een werffoto van de provincie rechts: wie hier
            kijkt of wij zijn soort gebouw kennen, ziet dat sneller op een
            foto dan in de alinea eronder.
          */}
          <div className="split">
            <div>
              <div className="sec-head">
                <span className="kick">{t.bouwKick}</span>
                <h2 className="sec">{gemeente.bouw.kop}</h2>
              </div>
              {[...gemeente.intro.slice(1), ...gemeente.bouw.alineas].map((alinea) => (
                <p className="lede" key={alinea}>
                  {nadruk(alinea)}
                </p>
              ))}
            </div>
            <Reveal from="up" className="split-vis">
              <img
                src={beeld.src}
                alt={beeld.alt}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>

          {/*
            De harde feiten als tabel, want dit is wat iemand die "bouwdroger
            huren <gemeente>" tikt meteen wil weten.
          */}
          <dl className="feiten" style={{ marginTop: "28px", maxWidth: "860px" }}>
            {feiten(t.feitenBouw)}
          </dl>

          <div className="note">{t.bouwNoot(lp, provPad, nl ? provNaam : provIn)}</div>
        </div>
      </section>
    </>
  );

  const equipmentSection: Sectie = (kleur) => (
    <>
      {/* ================= TOESTELLEN ================= */}
      {/*
        Dezelfde opbouw als op de provinciepagina, maar de `waarom` onder elke
        kaart is per gemeente geschreven. Naam, foto en prijs komen uit
        `PRODUCTS` en dus uit het portaal; `toestelLabelIn()` geeft de
        verhuurnaam en niet de typecode van de fabrikant.
      */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">{g.toestel.kick}</span>
            <h2 className="sec">{t.toestelH2(naam)}</h2>
          </div>
          <div className="prods">
            {gemeente.toestellen.map((item, i) => {
              if (!PRODUCTS[item.key]) return null;
              const prod = productInTaal(item.key, taal);
              const label = toestelLabelIn(item.key, taal);
              return (
                <Reveal from="up" delay={(i % 3) * 0.08} as="article" className="prod" key={item.key}>
                  <div className="pimg">
                    <img
                      src={prod.img[0]}
                      alt={productImageAlt(prod, 0)}
                      width={480}
                      height={360}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>{label}</h3>
                  <p className="pdesc" style={{ marginBottom: "18px" }}>{nadruk(item.waarom)}</p>
                  <Link className="btn" to={lp(toestelPad(item.key))} aria-label={g.toestel.aria(label)}>
                    {g.toestel.knop}
                    <ArrowRightIcon size={13} />
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="note">{t.toestelNoot(lp)}</div>
        </div>
      </section>
    </>
  );

  const deliverySection: Sectie = (kleur) => (
    <>
      {/* ================= AFHALEN OF LEVEREN ================= */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">{g.levering.kick}</span>
            <h2 className="sec">{t.leverH2(naam)}</h2>
          </div>
          <div className="split32">
            <Reveal from="up" className="paneel">
              <div className="phead">
                <span><TruckIcon size={19} /></span>
                <h3>{gemeente.levering.kop}</h3>
              </div>
              <p>{nadruk(gemeente.levering.alinea)}</p>
              <dl className="feiten">{feiten(t.feitenLever)}</dl>
              <Link className="btn" to={lp("/verhuur/calculator")} style={{ marginTop: "22px" }}>
                {g.levering.reserveer}
                <ArrowRightIcon />
              </Link>
            </Reveal>
            <Reveal from="up" delay={0.08} className="paneel">
              <div className="phead">
                <span><CartIcon size={19} /></span>
                <h3>{gemeente.afhalen.kop}</h3>
              </div>
              <p>{nadruk(gemeente.afhalen.alinea)}</p>
              <p style={{ marginTop: "18px" }}>
                <b style={{ color: "var(--txt)" }}>
                  {CONTACT.street}, {CONTACT.postalCode} {CONTACT.city}
                </b>
                <br />
                {g.levering.uren}
              </p>
              <Link className="btn" to={lp("/verhuur/afhalen")} style={{ marginTop: "22px" }}>
                {g.levering.afhalen}
                <ArrowRightIcon />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );

  const projectsSection: Sectie = (kleur) => (
    <>
      {/* ================= WERVEN HIER ================= */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">{g.praktijk}</span>
            <h2 className="sec">
              {t.wervenH2(
                wervenUitGemeente
                  ? nl ? plaats : inPlaats(plaats)
                  : wervenRondGemeente
                    ? nl ? t.omgeving(plaats) : inPlaats(t.omgeving(plaats))
                    : provIn,
              )}
            </h2>
            <p className="lede">
              {wervenUitGemeente
                ? werven.length === 1
                  ? t.wervenEen
                  : t.wervenVeel(werven.length)
                : wervenRondGemeente
                  ? t.wervenRond(plaats, nl ? provNaam : provIn)
                  : t.wervenProv(nl ? provNaam : provIn)}
            </p>
          </div>
          <div className="rzs">
            {werven.map((r, i) => (
              <Reveal from="up" delay={(i % 3) * 0.08} key={r.slug}>
                <Link className="rz" to={lp(`/realisaties/${r.slug}`)}>
                  <img
                    src={r.kaart}
                    alt={r.kaartAlt}
                    width={640}
                    height={420}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="rzt">
                    <span className="rzl">{r.locatie}</span>
                    <h3>{r.titel}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="tblnote" style={{ textAlign: "center" }}>
            <Link to={provPad} style={{ fontWeight: 600 }}>
              {t.alleWerven(nl ? provNaam : provIn)}
            </Link>
          </p>
        </div>
      </section>
    </>
  );

  const dryingTimesSection: Sectie = (kleur) => (
    <>
      {/* ================= DROOGTIJDEN ================= */}
      {/*
        Dezelfde tabel als op de provinciepagina, en bewust zonder er een
        lokaal verhaal omheen te verzinnen: een droogtijd hangt af van dikte,
        volume en temperatuur, niet van een postcode. De cijfers komen uit de
        pakketcatalogus (`src/lib/droogtijden.ts`).
      */}
      <section className={kleur}>
        <div className="wrap">
          <div className="kop-rij">
            <div className="sec-head">
              <span className="kick">{g.droog.kick}</span>
              <h2 className="sec">{g.droog.h2}</h2>
              <p className="lede">{g.droog.lede}</p>
            </div>
            <div className="prijsknoppen">
              <Link className={tweedeKnop(kleur)} to={lp("/waarom-bouwdroging")}>
                {g.droog.knop}
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div className="tblwrap">
            <div className="tblscroll">
              <table className="tbl">
                <caption className="sr-only">{g.droog.caption}</caption>
                <thead>
                  <tr>
                    {g.droog.kolommen.map((k) => (
                      <th scope="col" key={k}>{k}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {chape.map((rij) => (
                    <tr key={`chape-${rij.dikte}`}>
                      <th scope="row">{g.droog.chape(rij.dikte)}</th>
                      <td className="traag">{bereik(natuurlijkeChapeBereik(rij.dikte))}</td>
                      <td className="snel"><b>{termijn(rij)}</b></td>
                    </tr>
                  ))}
                  {pleister.map((rij) => (
                    <tr key={`pleister-${rij.dikte}`}>
                      <th scope="row">{g.droog.pleister(rij.dikte)}</th>
                      <td className="traag">{bereik(natuurlijkePleisterWeken(rij.dikte))}</td>
                      <td className="snel"><b>{termijn(rij)}</b></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="tblnote">{g.droog.noot(lp)}</p>
        </div>
      </section>
    </>
  );

  const processSection: Sectie = (kleur) => (
    <>
      {/* ================= HOE HET VERLOOPT ================= */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{g.verloop.kick}</span>
            <h2 className="sec">{t.verloopH2(naam)}</h2>
            <p className="lede">{g.verloop.lede}</p>
          </div>
          <div className="flow">
            {/* Eén stap draagt de gemeentenaam, zodat deze sectie niet op elke
                pagina woord voor woord dezelfde is. */}
            {g.verloop.stappen(t.rijden(naam)).map(({ Icon, title, desc }, i) => (
              <Reveal from="up" delay={i * 0.08} className="fl" key={title}>
                <i>{`0${i + 1}`}</i>
                <div className="fi"><Icon size={19} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>

          {/*
            Dezelfde slotnoot als op de provinciepagina: dit is de plek waar de
            vraag "komen jullie ook bij mij?" hoort.
          */}
          <div className="note">
            <b>{provincie.opAanvraag ? g.leverenOpAfspraak : g.leverenOveral}</b>{" "}
            {t.buiten(provZin)}
            {buren.length > 0 && (
              <>
                {" "}
                {t.inDeBuurt}{" "}
                {buren.map((x, i) => (
                  <span key={x.slug}>
                    {i > 0 && (i === buren.length - 1 ? t.of : ", ")}
                    <Link to={padIn(x.path)!}>{naamVan(x)}</Link>
                  </span>
                ))}
                .
              </>
            )}{" "}
            {t.twijfel}{" "}
            <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a> {t.ofKort}{" "}
            <Link to={lp("/verhuur/calculator")}>{t.bereken}</Link>.
          </div>
        </div>
      </section>
    </>
  );

  const reviewsSection: Sectie = (kleur) => (
    <>
      {/* ================= BEOORDELINGEN ================= */}
      {/*
        Dezelfde drie beoordelingen als op de homepage en de provinciepagina,
        uit `src/data/reviews.ts`. Geen ervan gaat over deze gemeente en dat
        staat er niet bij gelogen: ze zeggen hoe deze ploeg werkt.
      */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">{g.reviews.kick}</span>
            <h2 className="sec">{g.reviews.h2}</h2>
            <p className="lede">{g.reviews.lede}</p>
          </div>
          <div className="rvs">
            {eersteReviews(3).map((review, i) => (
              <Reveal from="up" delay={(i % 3) * 0.08} as="figure" className="rvc" key={review.name}>
                <div className="rvc-top">
                  <div className="rvc-st" role="img" aria-label={g.reviews.sterren(review.rating)}>
                    {Array.from({ length: review.rating }).map((_, ster) => (
                      <StarIcon key={ster} size={14} />
                    ))}
                  </div>
                  {review.source === "Google" ? (
                    <GoogleIcon size={17} />
                  ) : (
                    <span className="rvc-src">{review.source}</span>
                  )}
                </div>
                <blockquote>&ldquo;{review.text}&rdquo;</blockquote>
                <figcaption>
                  <span className="rvc-av" aria-hidden="true">{review.initials}</span>
                  <span>
                    <b>{review.name}</b>
                    <small>{review.service ?? review.date}</small>
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const linksSection: Sectie = (kleur) => (
    <>
      {/* ================= WAAR WE LEVEREN ================= */}
      {/*
        Hetzelfde ontwerp als op de provinciepagina: kaarten per streek met de
        plaatsnamen, en de gemeenten met een eigen pagina als link. De namen
        komen uit `provincie-gemeenten.ts`, dezelfde bron als de
        provinciepagina; in het Frans via `plaatsFr`.
      */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.leverKick}</span>
            <h2 className="sec">
              {streek ? t.streekH2(streekNaam(streek.naam)) : t.omstreken(plaats)}
            </h2>
            <p className="lede">{t.streekLede(plaats, nl ? provNaam : provIn)}</p>
          </div>

          <div className="strk">
            {streek && (
              <Reveal from="up" as="article" className="strk-blok">
                <h3>{streekNaam(streek.naam)}</h3>
                <p>{streekKenmerk(streek)}</p>
                <ul className="strk-lijst">
                  {streek.gemeenten.map((n) => {
                    const eigen = gemeenteVanPlaats(n);
                    const pad = eigen && eigen.slug !== route.slug ? padIn(eigen.path) : null;
                    const label = plaatsIn(n, taal);
                    return <li key={n}>{pad ? <Link to={pad}>{label}</Link> : <span>{label}</span>}</li>;
                  })}
                </ul>
              </Reveal>
            )}
            {elders.length > 0 && (
              <Reveal from="up" delay={0.08} as="article" className="strk-blok">
                <h3>{t.elders(nl ? provNaam : provIn)}</h3>
                <p>{t.eldersP}</p>
                <ul className="strk-lijst">
                  {elders.map((x) => (
                    <li key={x.slug}>
                      <Link to={padIn(x.path)!}>{naamVan(x)}</Link>
                    </li>
                  ))}
                  <li>
                    <Link to={provPad}>{t.heleProv(provZin)}</Link>
                  </li>
                </ul>
              </Reveal>
            )}
          </div>

          <div className="note">
            <b>{t.advies}</b> {t.adviesP}{" "}
            <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a> {t.ofKort}{" "}
            <Link to={lp("/verhuur/calculator")}>{t.bereken}</Link>.
          </div>
        </div>
      </section>
    </>
  );

  const faqSection: Sectie = (kleur) => (
    <FaqBlok
      titel={t.faqTitel(plaats)}
      vragen={gemeente.faq}
      sleutel="gemeente-faq"
      variant={kleur === "sr" ? "rood" : "wit"}
    >
      {/*
        Dezelfde rode plaat als op de provinciepagina, en om dezelfde reden
        binnen de FAQ-sectie: wie de vragen gelezen heeft is klaar om te
        boeken.
      */}
      <div className="manband">
        <div className="mb-t">
          <span className="mbk">{g.slot.mbk(t.in(plaats))}</span>
          <h3>{g.slot.h3}</h3>
          <p>{g.slot.p}</p>
          <div className="mb-cta">
            <Link className="btn btn-white glans" to={lp("/verhuur/calculator")}>
              {g.slot.knop}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <img
          className="mb-man breed tegenrand bijsnijden"
          src="/vernast/man-bestelwagen.webp"
          alt={g.slot.beeldAlt}
          width={1440}
          height={827}
          loading="lazy"
          decoding="async"
        />
      </div>
    </FaqBlok>
  );

  /*
    De volgorde, en daarmee de kleuren. De hero is rood, dus de eerste sectie
    is wit en vanaf daar wisselt het af. Een sectie die niets te tonen heeft
    (geen werven in deze gemeente) staat niet in de lijst en verbruikt geen
    beurt -- dat was de fout waardoor alles erna op de verkeerde kleur stond.

    Eerst het pakket, dan pas de toestellen: wie uit Google komt weet nog niet
    dat wij een berekend pakket leveren in plaats van een machine te verhuren.
  */
  const inhoud: Sectie[] = [
    priceIntroSection,
    packagesSection,
    bouwSection,
    equipmentSection,
    deliverySection,
    ...(werven.length > 0 ? [projectsSection] : []),
    ...(chape.length > 0 ? [dryingTimesSection] : []),
    linksSection,
    processSection,
    reviewsSection,
    faqSection,
  ];

  const kruimel = kruimelIn(route, taal);
  const pad = lp(route.path);

  return (
    <div className="v3c rg-page">
      <PageMeta
        title={gemeente.title}
        description={gemeente.description}
        path={pad}
        jsonLd={[
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
              containedInPlace: { "@type": "AdministrativeArea", name: provNaam },
            },
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
            { name: kruimel, path: pad },
          ]),
        ]}
      />

      <V3Header lightAfter={420} />

      <main>
        {/* ================= HERO ================= */}
        <div className="redtop">
          <section className="hero">
            <div className="wrap hero-grid">
              <div className="hero-copy">
                <nav aria-label={g.hero.kruimelpad} className="kruimels">
                  <ol>
                    <li>
                      <Link to={lp("/")}>{g.hero.home}</Link>
                      <span aria-hidden="true"> /</span>
                    </li>
                    <li>
                      <Link to={provPad}>{provNaam}</Link>
                      <span aria-hidden="true"> /</span>
                    </li>
                    <li aria-current="page">{kruimel}</li>
                  </ol>
                </nav>
                <span className="kick met-ic">
                  <PinIcon size={13} /> {gemeente.kicker}
                </span>
                <h1>{gemeente.h1}</h1>
                {/*
                  Eén alinea in de hero, niet alle: de eerste zin is wat iemand
                  hier moet lezen, de rest hoort in de body.
                */}
                <p>{nadruk(gemeente.intro[0])}</p>
                <div className="hcta">
                  <Link className="btn btn-white glans" to={lp("/verhuur/calculator")}>
                    {g.hero.knop}
                    <ArrowRightIcon />
                  </Link>
                  <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                    <PhoneIcon /> {g.hero.bel(CONTACT.phoneLocal)}
                  </a>
                </div>
              </div>
              <div className="hero-vis">
                <div className="kaartvis" style={{ aspectRatio: `${kaart.width}/${kaart.height}` }}>
                  <img
                    src={kaart.src}
                    alt={t.kaartAlt(naam, nl ? provNaam : provIn)}
                    width={kaart.width}
                    height={kaart.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span
                    className={`speld${parseInt(kaart.pin.left, 10) > 55 ? " links" : ""}`}
                    style={{ left: kaart.pin.left, top: kaart.pin.top }}
                  >
                    <b>{naam}</b>
                  </span>
                </div>
                <div className="fbadge" style={{ bottom: "40px", left: "-4%" }}>
                  <span className="ic">
                    <TruckIcon size={15} />
                  </span>
                  {/*
                    De badge leidt met wat in het pakket zit, niet met de
                    kilometers: de afstand is voor ons een planningsgegeven, voor
                    de bezoeker de vraag of ze op zijn factuur komt.
                  */}
                  <div>
                    {t.badge}
                    <small>{t.badgeKlein}</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {inhoud.map((sec, i) => (
          <Fragment key={i}>{sec(beurt(i))}</Fragment>
        ))}

        <ContactBlok
          titel={g.contact.titel(nl ? naam : inPlaats(naam))}
          lede={g.contact.lede}
          onderwerp="waterschade"
          placeholder={t.placeholder(naam)}
        />
      </main>

      <V3Footer />
    </div>
  );
};

export default GemeenteSjabloon;
