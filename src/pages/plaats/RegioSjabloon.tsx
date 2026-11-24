import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
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
import { REGIO_ROUTES, kaartVoor, regioNaamIn } from "@/data/regio-slugs";
import { gemeenteNaamIn, gemeentenInRegio, gemeenteVanPlaats, plaatsEn, plaatsFr, plaatsIn } from "@/data/gemeente-slugs";
import {
  STREKEN_PER_REGIO,
  streekKenmerkEn,
  streekKenmerkFr,
  streekNaamEn,
  streekNaamFr,
} from "@/data/provincie-gemeenten";
import {
  bereikLabel,
  droogtermijnen,
  natuurlijkeChapeBereik,
  natuurlijkePleisterWeken,
  termijnLabel,
} from "@/lib/droogtijden";
import type { Regio } from "@/data/regios";
import { productImageAlt, PRODUCTS, toestelPad } from "@/data/verhuur";
import { productInTaal } from "@/data/verhuur.fr";
import { euroInt } from "@/lib/verhuur";
import { toestelLabelIn } from "@/data/navigation";
import { eersteReviews } from "@/data/reviews";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { realisatieSlugsIn } from "@/data/realisatie-regio";
import { regioLevering } from "@/lib/levering";
import { vertaalPad } from "@/i18n/paden";
import { formatEuro, kies, useLokaalPad, useTaal, type Copy } from "@/i18n/useTaal";
import { GEDEELD } from "./plaats.copy";
import "@/styles/v3-content.css";

/**
 * Eén sjabloon voor de provinciepagina's, in elke taal.
 *
 * De tekst komt als prop binnen: `pages/RegioPage.tsx` geeft de Nederlandse
 * uit `regios.ts`, `pages/RegioPageFr.tsx` de Franse uit `regios-fr/` en
 * `pages/RegioPageEn.tsx` de Engelse uit `regios-en/`. Dit
 * bestand bepaalt alleen de volgorde en de vorm. Alles wordt bij de build
 * geprerenderd, dus de H1, de tekst en de vragen staan in de HTML zonder dat
 * er JavaScript aan te pas komt.
 *
 * De antwoorden van de FAQ staan open (geen accordeon): een dichtgeklapt
 * antwoord rendert niet, en dan beweert de FAQPage-schema iets dat niet op de
 * pagina staat.
 */

interface Props {
  regio: Regio;
  /**
   * Hoe de provincie na een voorzetsel staat: "dans la province d'Anvers",
   * "in the province of Antwerp", "in East Flanders". Alleen in het Frans en
   * het Engels; het Nederlands zegt overal "in Antwerpen".
   */
  dans?: string;
}

/** Teksten die alleen de provinciepagina heeft. */
const COPY = {
  nl: {
    bouwKick: "Wat we hier drogen",
    toestelNoot: (lp: (p: string) => string): ReactNode => (
      <>
        Twijfelt u tussen twee toestellen?{" "}
        <Link to={lp("/verhuur/calculator")}>Bereken het droogpakket voor uw ruimte</Link> of
        bekijk <Link to={lp("/machines")}>het volledige gamma</Link>.
      </>
    ),
    leverH2West: "Leveren in West-Vlaanderen of afhalen bij Antwerpen?",
    leverH2: (waar: string) => `Afhalen of leveren ${waar}?`,
    leverenOnderMeer: "Wij leveren onder meer in ",
    afhalenWest: "Zelf afhalen: Aartselaar, A12 bij Antwerpen",
    wervenTotaal: (waar: string, n: number) =>
      ` Daaronder volgt elke andere werf die we ${waar} droogden, ${n} in totaal.`,
    alleRealisaties: "Alle realisaties bekijken",
    faqTitel: (waar: string) => `Wat klanten ${waar} ons vragen.`,
    streekKick: "Waar we leveren",
    streekH2: (naam: string) => `De gemeenten van ${naam}, per streek.`,
    streekLede: (naam: string): ReactNode => (
      <>
        <b>Wij leveren in heel {naam}.</b> Kies hieronder uw gemeente voor informatie over huren,
        levering en afhalen. Staat uw plaats er niet bij, neem dan contact op.
      </>
    ),
    kiesGemeente: (
      <>
        <b>Kies uw gemeente voor informatie over bouwdrogerverhuur.</b> Wilt u advies over uw werf
        of hulp bij het reserveren,{" "}
      </>
    ),
    gemeentenHierboven: (
      <>
        <b>Wij leveren in de gemeenten hierboven.</b> Wilt u advies over het aantal toestellen of de
        bereikbaarheid van uw werf,{" "}
      </>
    ),
    belOns: "bel ons op",
    of: "of",
    bereken: "bereken meteen uw pakket",
    verloopH2: (waar: string) => `Van reservatie tot eindmeting ${waar}.`,
    leverenPlaatsen: "Wij leveren en plaatsen",
    perGemeenteAria: (naam: string) => `Gemeenten in ${naam}`,
    perGemeente: "Bouwdroger huren per gemeente:",
    buiten:
      "Buiten de provincies hieronder rijden we ook, al telt de rit dan mee in de planning. Bel ons gerust voor een werf net over de provinciegrens. Ook bouwdrogers huren in:",
    en: " en ",
    prijsH2: (naam: string) => `Wat kost een bouwdroger huren in ${naam}?`,
    prijsLede1: (towns: string, stad: string): ReactNode => (
      <>
        <b>De juiste prijs begint bij wat er moet drogen.</b> Voor een volledige woning, natte
        chape of pleisterwerk berekent u een compleet droogpakket; voor één ruimte volstaat een los
        toestel. Wij leveren onder meer in {towns}; zelf afhalen kan in {stad} bij Antwerpen.
      </>
    ),
    pakketLede: (naam: string): ReactNode => (
      <>
        <b>U hoeft zelf geen toestellen te combineren.</b> Wij berekenen uw droogpakket op basis
        van de oppervlakte, het materiaal en de laagdikte. U ziet <b>vooraf de pakketprijs</b>,
        inclusief levering in {naam}, installatie, voor- en nameting en ophaling.
      </>
    ),
    prijsBeeldAlt: "Zorgeloos huren bij Vernast: één prijs vooraf, geen waarborg",
    kaartAlt: (naam: string) => `Werkgebied van Vernast, met ${naam} aangeduid`,
    heroFactsAria: "Inbegrepen bij uw droogpakket",
    badgeAfspraak: "Levering op afspraak",
    badge24: "Levering binnen 24 uur",
    badgeKlein: "geplaatst en ingesteld door onze technieker",
    placeholder: (stad: string) =>
      `Bv. nieuwbouw 140 m² in ${stad}, chape vorige week geplaatst, wanneer kan de vloerder starten?`,
  },
  fr: {
    bouwKick: "Ce que nous séchons ici",
    toestelNoot: (lp: (p: string) => string): ReactNode => (
      <>
        Vous hésitez entre deux appareils ?{" "}
        <Link to={lp("/verhuur/calculator")}>Calculez le pack de séchage pour votre pièce</Link> ou
        consultez <Link to={lp("/machines")}>toute la gamme</Link>.
      </>
    ),
    leverH2West: "Livraison en Flandre occidentale ou enlèvement près d'Anvers ?",
    leverH2: (waar: string) => `Enlèvement ou livraison ${waar} ?`,
    leverenOnderMeer: "Nous livrons notamment à ",
    afhalenWest: "Enlèvement : Aartselaar, sur l'A12 près d'Anvers",
    wervenTotaal: (waar: string, n: number) =>
      ` Suivent tous les autres chantiers que nous avons séchés ${waar}, ${n} au total.`,
    alleRealisaties: "Voir toutes les réalisations",
    faqTitel: (waar: string) => `Les questions de nos clients ${waar}.`,
    streekKick: "Où nous livrons",
    streekH2: (dans: string) => `Les communes, région par région, ${dans}.`,
    streekLede: (dans: string): ReactNode => (
      <>
        <b>Nous livrons partout {dans}.</b> Choisissez votre commune ci-dessous pour en savoir plus
        sur la location, la livraison et l'enlèvement. Votre localité n'y figure pas ? Contactez-nous.
      </>
    ),
    kiesGemeente: (
      <>
        <b>Choisissez votre commune pour en savoir plus sur la location de déshumidificateurs.</b>{" "}
        Pour un conseil sur votre chantier ou une aide à la réservation,{" "}
      </>
    ),
    gemeentenHierboven: (
      <>
        <b>Nous livrons dans les communes ci-dessus.</b> Pour un conseil sur le nombre d'appareils
        ou l'accessibilité de votre chantier,{" "}
      </>
    ),
    belOns: "appelez-nous au",
    of: "ou",
    bereken: "calculez tout de suite votre pack",
    verloopH2: (waar: string) => `De la réservation à la mesure finale ${waar}.`,
    leverenPlaatsen: "Nous livrons et installons",
    perGemeenteAria: (naam: string) => `Communes : ${naam}`,
    perGemeente: "Louer un déshumidificateur par commune :",
    buiten:
      "Nous roulons aussi en dehors des provinces ci-dessous, le trajet compte alors dans la planification. N'hésitez pas à nous appeler pour un chantier juste de l'autre côté de la limite provinciale. Location de déshumidificateurs aussi :",
    en: " et ",
    prijsH2: (dans: string) => `Quel prix pour louer un déshumidificateur ${dans} ?`,
    prijsLede1: (towns: string, stad: string): ReactNode => (
      <>
        <b>Le bon prix dépend de ce qui doit sécher.</b> Pour une habitation entière, une chape
        humide ou du plafonnage, vous calculez un pack de séchage complet ; pour une seule pièce, un
        appareil seul suffit. Nous livrons notamment à {towns} ; l'enlèvement est possible à {stad},
        près d'Anvers.
      </>
    ),
    pakketLede: (dans: string): ReactNode => (
      <>
        <b>Vous n'avez pas à combiner vous-même les appareils.</b> Nous calculons votre pack de
        séchage selon la surface, le matériau et l'épaisseur de la couche. Vous voyez{" "}
        <b>le prix du pack à l'avance</b>, livraison {dans}, installation, mesures avant et après
        et reprise comprises.
      </>
    ),
    prijsBeeldAlt: "Louer sans souci chez Vernast : un prix connu à l'avance, sans caution",
    kaartAlt: (naam: string) => `Zone d'activité de Vernast, avec ${naam} mis en évidence`,
    heroFactsAria: "Compris dans votre pack de séchage",
    badgeAfspraak: "Livraison sur rendez-vous",
    badge24: "Livraison en 24 heures",
    badgeKlein: "installé et réglé par notre technicien",
    placeholder: (stad: string) =>
      `P. ex. nouvelle construction de 140 m² à ${stad}, chape coulée la semaine dernière, quand le poseur de sol peut-il commencer ?`,
  },
  en: {
    bouwKick: "What we dry here",
    toestelNoot: (lp: (p: string) => string): ReactNode => (
      <>
        Torn between two units?{" "}
        <Link to={lp("/verhuur/calculator")}>Calculate the drying package for your room</Link> or
        see <Link to={lp("/machines")}>the full range</Link>.
      </>
    ),
    leverH2West: "Delivery in West Flanders or collection near Antwerp?",
    leverH2: (waar: string) => `Collection or delivery ${waar}?`,
    leverenOnderMeer: "Among other places, we deliver to ",
    afhalenWest: "Collect it yourself: Aartselaar, on the A12 near Antwerp",
    wervenTotaal: (waar: string, n: number) =>
      ` Below them is every other site we dried ${waar}, ${n} in total.`,
    alleRealisaties: "View all projects",
    faqTitel: (waar: string) => `What customers ${waar} ask us.`,
    streekKick: "Where we deliver",
    streekH2: (waar: string) => `The municipalities ${waar}, area by area.`,
    streekLede: (waar: string): ReactNode => (
      <>
        <b>We deliver everywhere {waar}.</b> Choose your municipality below for details on hire,
        delivery and collection. Is your town not listed? Get in touch.
      </>
    ),
    kiesGemeente: (
      <>
        <b>Choose your municipality for details on dehumidifier hire.</b> For advice on your site
        or help with your booking,{" "}
      </>
    ),
    gemeentenHierboven: (
      <>
        <b>We deliver to the municipalities above.</b> For advice on the number of units or access
        to your site,{" "}
      </>
    ),
    belOns: "call us on",
    of: "or",
    bereken: "calculate your package straight away",
    verloopH2: (waar: string) => `From booking to final reading ${waar}.`,
    leverenPlaatsen: "We deliver and install",
    perGemeenteAria: (naam: string) => `Municipalities in ${naam}`,
    perGemeente: "Dehumidifier hire by municipality:",
    buiten:
      "We also drive outside the provinces below, although the journey then counts in the planning. Feel free to call us about a site just over the provincial border. Dehumidifier hire also in:",
    en: " and ",
    prijsH2: (waar: string) => `What does dehumidifier hire cost ${waar}?`,
    prijsLede1: (towns: string, stad: string): ReactNode => (
      <>
        <b>The right price starts with what needs to dry.</b> For a whole house, wet screed or
        plasterwork you calculate a complete drying package; for a single room, a single unit is
        enough. Among other places, we deliver to {towns}; you can collect in {stad}, near Antwerp.
      </>
    ),
    pakketLede: (waar: string): ReactNode => (
      <>
        <b>You don't need to combine units yourself.</b> We calculate your drying package based on
        the floor area, the material and the layer thickness. You see{" "}
        <b>the package price in advance</b>, including delivery {waar}, installation, readings
        before and after, and collection.
      </>
    ),
    prijsBeeldAlt: "Worry-free hire with Vernast: one price up front, no deposit",
    kaartAlt: (naam: string) => `Vernast's service area, with ${naam} highlighted`,
    heroFactsAria: "Included in your drying package",
    badgeAfspraak: "Delivery by appointment",
    badge24: "Delivery within 24 hours",
    badgeKlein: "installed and set up by our technician",
    placeholder: (stad: string) =>
      `E.g. new build of 140 m² in ${stad}, screed laid last week, when can the floor layer start?`,
  },
} satisfies Copy<Record<string, unknown>>;

const RegioSjabloon = ({ regio, dans }: Props) => {
  const taal = useTaal();
  const fr = taal === "fr";
  const nl = taal === "nl";
  const lp = useLokaalPad();
  const t = kies(COPY, taal);
  const g = kies(GEDEELD, taal);

  const route = REGIO_ROUTES.find((r) => r.slug === regio.slug) ?? REGIO_ROUTES[0];
  /*
    Wat levering hier kost, uit de gemeten wegafstanden van deze regio. `null`
    voor een regio die nog niet in `LEVERREGIOS` staat; dan valt de pagina terug
    op de voorzichtige formulering. De zinnen uit `regioLevering` zijn
    Nederlands: het Frans en het Engels houden de vertaalde regel en lezen
    alleen de zones uit om niets te beloven wat niet klopt.
  */
  const levering = regioLevering(regio.slug);
  const gratisZone = levering?.vanaf === 0 && levering?.tot === 0;
  const isWest = regio.slug === "west-vlaanderen";
  const kaart = kaartVoor(route);
  /*
    "in Antwerpen" in het Nederlands; in het Frans en het Engels de vorm die
    de lader meegeeft ("dans la province d'Anvers", "in the province of
    Antwerp", "in East Flanders"), want daar hangt het voorzetsel van de
    provincie af.
  */
  const waar = nl ? `in ${regio.name}` : (dans ?? regio.name);
  const pad = lp(regio.path);
  /* Een link naar een pagina, alleen als die in deze taal bestaat. */
  const padIn = (nlPad: string) => (nl ? nlPad : vertaalPad(nlPad, taal));
  /** De naam van een andere provincie in de taal van de pagina. */
  const provNaam = (r: (typeof REGIO_ROUTES)[number]) => regioNaamIn(r, taal);
  /** De naam en de kenmerkzin van een streek in de taal van de pagina. */
  const streekNaam = (naam: string) => (fr ? streekNaamFr(naam) : taal === "en" ? streekNaamEn(naam) : naam);
  const streekKenmerk = (streek: { gemeenten: string[]; kenmerk: string }) =>
    fr
      ? streekKenmerkFr(streek.gemeenten, plaatsFr)
      : taal === "en"
        ? streekKenmerkEn(streek.gemeenten, plaatsEn)
        : streek.kenmerk;

  /*
    De uitgelichte werven uit de data, aangevuld met álle werven uit deze
    provincie. Ze mochten niet gewoon verdwijnen: de link vanaf hun
    regiopagina is wat ze in Google hield (zie realisatie-regio.ts).
  */
  const realisaties = regio.realisaties.slugs
    .map(getRealisatie)
    .filter((r): r is Realisatie => !!r);
  const gekozen = new Set(regio.realisaties.slugs);
  const werven = [
    ...realisaties,
    ...realisatieSlugsIn(regio.slug)
      .filter((slug) => !gekozen.has(slug))
      .map(getRealisatie)
      .filter((r): r is Realisatie => !!r),
  ];
  /* In het Frans en het Engels alleen de provincies met een pagina in die taal. */
  const andere = REGIO_ROUTES.filter((r) => r.slug !== regio.slug && !!padIn(r.path));
  const gemeenten = gemeentenInRegio(regio.slug).filter((x) => !!padIn(x.path));
  const streken = STREKEN_PER_REGIO[regio.slug] ?? [];
  /*
    De droogtermijnen komen uit de pakketcatalogus (`src/lib/droogtijden.ts`),
    niet uit een overgetypte tabel.
  */
  const chape = droogtermijnen("chape");
  const pleister = droogtermijnen("pleister");
  const termijn = g.weken ?? termijnLabel;
  const bereik = g.weken ?? bereikLabel;
  /*
    De vanafprijs, berekend uit `PRODUCTS` en niet overgetypt. Alleen
    bouwdrogers tellen mee; `type` is een label uit het portaal, vandaar de
    match op het woord.
  */
  const drogers = Object.values(PRODUCTS).filter((p) => /ontvochtiger|droger/i.test(p.type));
  const goedkoopst = Math.min(...drogers.map((p) => p.day));
  const goedkoopsteDag = nl ? euroInt(goedkoopst) : formatEuro(goedkoopst, taal, 0);
  /*
    De werffoto van deze provincie hangt aan "Wat we hier drogen". Op
    West-Vlaanderen draagt de prijssectie ze; elders staat daar de
    gerustgestelde klant, dezelfde uitsnede als in de hero van /prijzen.
  */
  const prijsBeeld = isWest
    ? { ...regio.beeld, uitsnede: false }
    : { src: "/vernast/man-zen-crop.webp", alt: t.prijsBeeldAlt, uitsnede: true };

  const feitenLijst = (feiten: { label: string; waarde: string }[]) => (
    <dl className="feiten">
      {feiten.map((feit) => (
        <div key={feit.label}>
          <dt>{feit.label}</dt>
          <dd>{feit.waarde}</dd>
        </div>
      ))}
    </dl>
  );

  const localDryingSection: Sectie = (kleur) => (
    <>
      {/* ================= WAT WE HIER DROGEN ================= */}
      <section className={kleur}>
        <div className="wrap split">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick">{t.bouwKick}</span>
            <h2 className="sec">{regio.bouw.kop}</h2>
            {regio.bouw.alineas.map((alinea) => (
              <p className="lede" key={alinea}>
                {nadruk(alinea)}
              </p>
            ))}
          </div>
          <Reveal from="up" className="split-vis">
            <img
              src={regio.beeld.src}
              alt={regio.beeld.alt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>
    </>
  );

  const equipmentSection: Sectie = (kleur) => (
    <>
      {/* ================= TOESTELLEN ================= */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">{g.toestel.kick}</span>
            <h2 className="sec">{regio.toestellen.kop}</h2>
          </div>
          <div className="prods">
            {regio.toestellen.items.map((item, i) => {
              const p = productInTaal(item.key, taal);
              /*
                De naam waaronder het toestel verhuurd wordt, niet `p.short`:
                dat is de typecode van de fabrikant ("TTK 170 S").
              */
              const label = toestelLabelIn(item.key, taal);
              return (
                <Reveal from="up" delay={(i % 3) * 0.08} as="article" className="prod" key={item.key}>
                  <div className="pimg">
                    <img
                      src={p.img[0]}
                      alt={productImageAlt(p, 0)}
                      width={480}
                      height={360}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>{label}</h3>
                  <p className="pdesc" style={{ marginBottom: "18px" }}>
                    {nadruk(item.waarom)}
                  </p>
                  {/* Kort op het scherm, volledig voor een schermlezer. */}
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
            <h2 className="sec">{isWest ? t.leverH2West : t.leverH2(waar)}</h2>
          </div>
          <div className="split32">
            <Reveal from="up" className="paneel">
              <div className="phead">
                <span>
                  <TruckIcon size={19} />
                </span>
                <h3>{regio.levering.kop}</h3>
              </div>
              {regio.levering.alineas.map((alinea) => (
                <p key={alinea}>{nadruk(alinea)}</p>
              ))}
              {feitenLijst(regio.levering.feiten)}
              {/*
                De gemeenten stonden alleen op de homepage-kaart, niet op de
                regiopagina zelf: Google stuurde "bouwdroger mechelen" daardoor
                naar de Limburg-pagina (Search Console, oktober 2026).
              */}
              <p style={{ marginTop: "20px" }}>
                <b style={{ color: "var(--txt)" }}>{t.leverenOnderMeer}</b>
                {regio.towns.join(", ")}.
              </p>
              <Link className="btn" to={lp("/verhuur/calculator")} style={{ marginTop: "22px" }}>
                {g.levering.reserveer}
                <ArrowRightIcon />
              </Link>
            </Reveal>
            <Reveal from="up" delay={0.08} className="paneel">
              <div className="phead">
                <span>
                  <CartIcon size={19} />
                </span>
                <h3>{isWest ? t.afhalenWest : regio.afhalen.kop}</h3>
              </div>
              {regio.afhalen.alineas.map((alinea) => (
                <p key={alinea}>{nadruk(alinea)}</p>
              ))}
              <p style={{ marginTop: "18px" }}>
                <b style={{ color: "var(--txt)" }}>
                  {CONTACT.street}, {CONTACT.postalCode} {CONTACT.city}
                </b>
                <br />
                {g.levering.uren}
              </p>
              {regio.afhalen.feiten && feitenLijst(regio.afhalen.feiten)}
              <Link className="btn" to={lp("/afhalen")} style={{ marginTop: "22px" }}>
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
      {/* ================= REALISATIES ================= */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">{g.praktijk}</span>
            <h2 className="sec">{regio.realisaties.kop}</h2>
            {/* De intro beschrijft de uitgelichte werven; de rest wordt geteld
                in plaats van verzwegen. */}
            <p className="lede">
              {regio.realisaties.intro}
              {werven.length > regio.realisaties.slugs.length && t.wervenTotaal(waar, werven.length)}
            </p>
          </div>
          <div className={`rzs${isWest && werven.length === 2 ? " twee" : ""}`}>
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
            <Link to={lp("/realisaties")} style={{ fontWeight: 600 }}>
              {t.alleRealisaties}
            </Link>
          </p>
        </div>
      </section>
    </>
  );

  const faqSection: Sectie = () => (
    <>
      {/* ================= FAQ ================= */}
      <FaqBlok titel={t.faqTitel(waar)} vragen={regio.faq} sleutel="regio-faq" variant="wit">
        {/*
          De rode CTA-plaat staat bewust binnen de FAQ-sectie: wie de vragen
          heeft gelezen is klaar om te boeken.
        */}
        <div className="manband">
          <div className="mb-t">
            <span className="mbk">{g.slot.mbk(nl ? regio.name : waar)}</span>
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
            className={`mb-man breed tegenrand ${isWest ? "regio-wagen" : "bijsnijden"}`}
            src="/vernast/man-bestelwagen.webp"
            alt={g.slot.beeldAlt}
            width={1440}
            height={827}
            loading="lazy"
            decoding="async"
          />
        </div>
      </FaqBlok>
    </>
  );

  const dryingTimesSection: Sectie = (kleur) => (
    <>
      {/* ================= DROOGTIJDEN ================= */}
      {/*
        Gekoppeld aan `streken`: deze tabel is op alle provinciepagina's
        identiek, dus ze rolt pas uit samen met de eigen gemeentenlijst, anders
        daalt het aandeel eigen tekst.
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
                      <td className="snel">
                        <b>{termijn(rij)}</b>
                      </td>
                    </tr>
                  ))}
                  {pleister.map((rij) => (
                    <tr key={`pleister-${rij.dikte}`}>
                      <th scope="row">{g.droog.pleister(rij.dikte)}</th>
                      <td className="traag">{bereik(natuurlijkePleisterWeken(rij.dikte))}</td>
                      <td className="snel">
                        <b>{termijn(rij)}</b>
                      </td>
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

  const townsSection: Sectie = (kleur) => (
    <>
      {/* ================= GEMEENTEN PER STREEK ================= */}
      {/*
        Elke gemeente van de provincie, gegroepeerd per streek. Gemeenten met
        een eigen pagina in deze taal worden vanzelf een link; de lijst in
        `provincie-gemeenten.ts` weet daar niets van.
      */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.streekKick}</span>
            <h2 className="sec">{t.streekH2(nl ? regio.name : waar)}</h2>
            <p className="lede">{t.streekLede(nl ? regio.name : waar)}</p>
          </div>
          <div className="strk">
            {streken.map((streek) => (
              <Reveal from="up" as="article" className="strk-blok" key={streek.naam}>
                <h3>{streekNaam(streek.naam)}</h3>
                <p>{streekKenmerk(streek)}</p>
                <ul className="strk-lijst">
                  {streek.gemeenten.map((naam) => {
                    const eigen = gemeenteVanPlaats(naam);
                    const doel = eigen ? padIn(eigen.path) : null;
                    const label = plaatsIn(naam, taal);
                    return (
                      <li key={naam}>
                        {doel ? <Link to={doel}>{label}</Link> : <span>{label}</span>}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}
          </div>
          {/* De zin over de gemeentepagina's alleen waar er ook links staan. */}
          <div className="note">
            {gemeenten.length > 0 ? t.kiesGemeente : t.gemeentenHierboven}
            {t.belOns} <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a> {t.of}{" "}
            <Link to={lp("/verhuur/calculator")}>{t.bereken}</Link>.
          </div>
        </div>
      </section>
    </>
  );

  const processSection: Sectie = (kleur) => (
    <>
      {/*
        Hoe het concreet verloopt, met de links naar de andere provincies
        eronder. Die links moeten blijven: ze vormen het cluster waarmee de
        regiopagina's elkaar dragen.
      */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{g.verloop.kick}</span>
            <h2 className="sec">{t.verloopH2(waar)}</h2>
            <p className="lede">{g.verloop.lede}</p>
          </div>
          <div className="flow">
            {g.verloop.stappen(t.leverenPlaatsen).map(({ Icon, title, desc }, i) => (
              <Reveal from="up" delay={i * 0.08} className="fl" key={title}>
                <i>{`0${i + 1}`}</i>
                <div className="fi">
                  <Icon size={19} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
          {/*
            De gemeenten met een eigen pagina, alleen wanneer deze provincie
            geen strekenlijst heeft; anders staan ze daar al als link.
          */}
          {gemeenten.length > 0 && streken.length === 0 && (
            <nav className="rg-links" aria-label={t.perGemeenteAria(regio.name)}>
              <span>{t.perGemeente}</span>
              {gemeenten.map((x) => (
                <Link key={x.slug} to={padIn(x.path)!}>
                  {gemeenteNaamIn(x, taal)}
                </Link>
              ))}
            </nav>
          )}

          <div className="note">
            <b>{g.leverenOveral}</b>{" "}
            {nl && levering ? `${levering.zin} ` : `${t.buiten} `}
            {andere.map((r, i) => (
              <span key={r.slug}>
                {i > 0 && (i === andere.length - 1 ? t.en : ", ")}
                <Link to={padIn(r.path)!}>{provNaam(r)}</Link>
              </span>
            ))}
            .
          </div>
        </div>
      </section>
    </>
  );

  const reviewsSection: Sectie = (kleur) => (
    <>
      {/* ================= BEOORDELINGEN ================= */}
      {/*
        Een witte sectie tussen "Hoe het verloopt" en het contactblok, die
        allebei rood zijn. De beoordelingen komen uit `src/data/reviews.ts`;
        geen ervan gaat over deze regio en dat staat er niet bij gelogen.
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
                    {Array.from({ length: review.rating }).map((_, star) => (
                      <StarIcon key={star} size={14} />
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
                  <span className="rvc-av" aria-hidden="true">
                    {review.initials}
                  </span>
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

  const priceIntroSection: Sectie = (kleur) => (
    <>
      {/* ================= WAT HET KOST ================= */}
      {/*
        De prijsvraag volledig: de alinea, vier harde feiten en de twee
        knoppen, naast een beeld. Gespiegeld (beeld links), zodat twee
        splitsecties onder elkaar niet als één lange kolom tekst lezen.
      */}
      <section className={kleur}>
        <div className="wrap split omgekeerd">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick">{g.prijs.kick}</span>
            <h2 className="sec">{t.prijsH2(nl ? regio.name : waar)}</h2>
            <p className="lede">{t.prijsLede1(regio.towns.slice(0, 4).join(", "), CONTACT.city)}</p>
            <p className="lede">{g.prijs.lede2}</p>
            {/* De bedragen komen uit `PRODUCTS` (het portaal), niet uit deze JSX. */}
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
              className={prijsBeeld.uitsnede ? "cut vervaagd" : undefined}
              src={prijsBeeld.src}
              alt={prijsBeeld.alt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              style={prijsBeeld.uitsnede ? { width: "min(84%,380px)" } : undefined}
            />
            {/* Linksonder: sinds het beeld links staat, lag "rechts" over de man. */}
            <div className="fbadge" style={{ bottom: "-16px", left: "0" }}>
              <span className="ic">
                <CheckIcon size={15} strokeWidth={3} />
              </span>
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
          {/* De kop links, de twee knoppen rechts ernaast. */}
          <div className="kop-rij">
            <div className="sec-head">
              <span className="kick">{g.pakket.kick}</span>
              <h2 className="sec">{g.pakket.h2(nl ? regio.name : waar)}</h2>
              <p className="lede">{t.pakketLede(nl ? regio.name : waar)}</p>
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
                <div className="ki">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link className="btn" to={lp(path)} aria-label={label}>
                  {g.pakket.kaartKnop}
                  <ArrowRightIcon size={13} />
                </Link>
              </Reveal>
            ))}
          </div>
          {/* Met het schild ervoor: hier staat een belofte, geen voorbehoud. */}
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

  /*
    De volgorde. De hero is rood, dus de eerste sectie is wit en vanaf daar
    wisselt het af. Een sectie die niets te tonen heeft hoort hier niet in de
    lijst en verbruikt geen beurt. De FAQ is wit en moet op een rode sectie
    volgen: het aantal secties vóór de FAQ hoort even te zijn.
    `regioRitme.test.tsx` meet het na op de gerenderde klassen.

    Eerst het pakket, dan pas de toestellen: wie net uit Google komt weet nog
    niet dat wij een berekend pakket leveren in plaats van een machine.
  */
  const voorFaq: Sectie[] = [
    priceIntroSection,
    packagesSection,
    localDryingSection,
    equipmentSection,
    deliverySection,
    ...(realisaties.length > 0 ? [projectsSection] : []),
    ...(chape.length > 0 && streken.length > 0 ? [dryingTimesSection] : []),
    ...(streken.length > 0 ? [townsSection] : []),
    processSection,
    reviewsSection,
  ];
  const kop = voorFaq.map((sectie, i) => <Fragment key={`kop-${i}`}>{sectie(beurt(i))}</Fragment>);
  /* Het formulier is altijd rood -- de pagina eindigt op rood, net als /prijzen. */

  return (
    <div className={`v3c rg-page${isWest ? " rg-west" : ""}`}>
      <PageMeta
        title={regio.title}
        description={regio.description}
        path={pad}
        jsonLd={[
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
            areaServed: regio.areaServed,
          }),
          faqSchema(regio.faq.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: g.hero.home, path: lp("/") },
            { name: g.schema.werkgebied, path: `${lp("/")}#regio` },
            { name: regio.h1, path: pad },
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
                      <a href={`${lp("/")}#regio`}>{g.schema.werkgebied}</a>
                      <span aria-hidden="true"> /</span>
                    </li>
                    <li aria-current="page">{regio.name}</li>
                  </ol>
                </nav>
                <span className="kick met-ic">
                  <PinIcon size={13} /> {regio.kicker}
                </span>
                <h1>{regio.h1}</h1>
                {regio.intro.map((alinea) => (
                  <p key={alinea}>{nadruk(alinea)}</p>
                ))}
                {regio.heroFacts && (
                  <div className="hbadges" aria-label={t.heroFactsAria}>
                    {regio.heroFacts.map((feit) => (
                      <span key={feit}>
                        <CheckIcon size={14} strokeWidth={3} /> {feit}
                      </span>
                    ))}
                  </div>
                )}
                {/*
                  Feiten als term en waarde, in de HTML en niet achter een
                  klik: dit is wat het AI-overzicht van Google letterlijk
                  overneemt. Zie `kortom` in regios.ts.
                */}
                {regio.kortom && (
                  <dl className="feiten kortom" aria-label={`Vernast in ${regio.name}, in het kort`}>
                    {regio.kortom.map((feit) => (
                      <div key={feit.label}>
                        <dt>{feit.label}</dt>
                        <dd>{feit.waarde}</dd>
                      </div>
                    ))}
                  </dl>
                )}
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
                    alt={t.kaartAlt(regio.name)}
                    width={kaart.width}
                    height={kaart.height}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Het label hangt gecentreerd bóven de punt (zie `.speld b`). */}
                  <span className="speld" style={{ left: kaart.pin.left, top: kaart.pin.top }}>
                    <b>{regio.name}</b>
                  </span>
                </div>
                <div className="fbadge" style={{ bottom: "40px", left: "-4%" }}>
                  <span className="ic">
                    <TruckIcon size={15} />
                  </span>
                  <div>
                    {nl
                      ? (levering?.badge ?? t.badgeAfspraak)
                      : gratisZone
                        ? t.badge24
                        : t.badgeAfspraak}
                    <small>{t.badgeKlein}</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {kop}
        {faqSection("sw")}

        <ContactBlok
          titel={g.contact.titel(nl ? regio.name : waar)}
          lede={g.contact.lede}
          onderwerp="waterschade"
          placeholder={t.placeholder(regio.towns[0])}
        />
      </main>
      <V3Footer />
    </div>
  );
};

export default RegioSjabloon;
