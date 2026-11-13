import { Link, useLocation } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarCheckIcon,
  CartIcon,
  GoogleIcon,
  PhoneIcon,
  PinIcon,
  StarIcon,
  TruckIcon,
} from "@/components/home-v3/icons";
import { GaugeIcon } from "@/components/content/icons";
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { REGIO_BY_PATH, REGIO_ROUTES } from "@/data/regio-slugs";
import { gemeentenInRegio, gemeenteVanPlaats } from "@/data/gemeente-slugs";
import { STREKEN_PER_REGIO } from "@/data/provincie-gemeenten";
import {
  droogtermijnen,
  natuurlijkeChapeWeken,
  natuurlijkePleisterWeken,
  termijnLabel,
} from "@/lib/droogtijden";
import { REGIO_BY_SLUG, realisatiesVoor, type Regio } from "@/data/regios";
import { productImageAlt, PRODUCTS, toestelPad } from "@/data/verhuur";
import { toestelLabel } from "@/data/navigation";
import { eersteReviews } from "@/data/reviews";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { realisatieSlugsIn } from "@/data/realisatie-regio";
import "@/styles/v3-content.css";

/**
 * Eén sjabloon voor de vijf regiopagina's (/bouwdroger-huren-<regio>).
 *
 * De inhoud staat volledig in `src/data/regios.ts`; dit bestand bepaalt
 * alleen de volgorde en de vorm. Alles wat hier staat wordt bij de build
 * geprerenderd, dus de H1, de tekst en de vragen staan in de HTML zonder dat
 * er JavaScript aan te pas komt.
 *
 * De vragen stonden daarom in een `<details>` en niet in de Radix-accordeon van
 * de andere pagina's: die rendert een dichtgeklapt antwoord helemaal niet, en
 * dan beweert de FAQPage-schema iets dat niet op de pagina staat. Sinds de
 * overstap naar de v3-vormtaal (november 2026) staan de antwoorden gewoon
 * open, net als op /renovatie en /prijzen — zelfde reden, één stap verder.
 *
 * Welke regio getoond wordt volgt uit het pad. React Router kan geen
 * `bouwdroger-huren-:regio` (een parameter moet een heel segment zijn), dus
 * App.tsx registreert vijf vaste routes die allemaal hier uitkomen.
 */
/** De vier stappen van een huur, voor de sectie onderaan elke regiopagina. */
const VERLOOP = [
  {
    Icon: CalendarCheckIcon,
    title: "U reserveert",
    desc: "Online via de calculator of met één telefoontje. U kiest zelf de leverdag; twijfelt u over het volume, dan rekenen wij het door.",
  },
  {
    Icon: TruckIcon,
    title: "Wij leveren en plaatsen",
    desc: "Binnen 24 uur. De technieker verdeelt de toestellen, sluit de condensafvoer aan en stelt de streefvochtigheid in.",
  },
  {
    Icon: BoltIcon,
    title: "De opstelling draait",
    desc: "Dag en nacht, ook in het weekend. U laat ramen en deuren dicht en verplaatst niets; de rest gebeurt vanzelf.",
  },
  {
    Icon: GaugeIcon,
    title: "Wij meten en halen op",
    desc: "De eindmeting bepaalt of het droog is, niet de kalender. Is het droog, dan halen we alles op; zo niet, dan huurt u kosteloos verder.",
  },
];

const RegioPage = () => {
  const { pathname } = useLocation();
  const route = REGIO_BY_PATH[pathname.replace(/\/$/, "")] ?? REGIO_ROUTES[0];
  const regio: Regio = REGIO_BY_SLUG[route.slug];
  const realisaties = realisatiesVoor(regio);
  /*
    Álle werven uit deze provincie, de drie uitgelichte vooraan.
    De rest stond tot 10-11-2026 onder de kaarten als bulletlijst met rode
    tekstlinks; die lijst is eruit omdat ze er rommelig uitzag. Ze mochten
    niet gewoon verdwijnen: van de 22 realisaties stonden er 19 niet in Google
    en de link vanaf hun regiopagina is precies de fix daarvoor
    (zie realisatie-regio.ts, 03-11-2026). Dus staan ze nu allemaal als kaart.
  */
  const gekozen = new Set(regio.realisaties.slugs);
  const werven = [
    ...realisaties,
    ...realisatieSlugsIn(regio.slug)
      .filter((slug) => !gekozen.has(slug))
      .map(getRealisatie)
      .filter((r): r is Realisatie => !!r),
  ];
  const andere = REGIO_ROUTES.filter((r) => r.slug !== regio.slug);
  const gemeenten = gemeentenInRegio(regio.slug);
  const streken = STREKEN_PER_REGIO[regio.slug] ?? [];
  /*
    De droogtermijnen komen uit de pakketcatalogus (`src/lib/droogtijden.ts`),
    niet uit een overgetypte tabel: wijzigt het portaal een termijn, dan
    wijzigt deze tabel mee. Zie de notitie bovenaan die module.
  */
  const chape = droogtermijnen("chape");
  const pleister = droogtermijnen("pleister");

  return (
    <div className="v3c rg-page">
      <PageMeta
        title={regio.title}
        description={regio.description}
        path={regio.path}
        jsonLd={[
          /*
            De Organization hoort hier, niet alleen op de andere pagina's. De
            Service hieronder verwijst met `provider: {"@id": ".../#organization"}`
            naar deze node, en Google lost een @id alleen op binnen de graaf van
            dezelfde pagina — zonder dit stond de provider dood te verwijzen.
          */
          organizationSchema(),
          serviceSchema({
            name: regio.h1,
            description: regio.description,
            path: regio.path,
            serviceType: "Bouwdroger verhuur",
            areaServed: regio.areaServed,
          }),
          faqSchema(regio.faq.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Werkgebied", path: "/#regio" },
            { name: regio.h1, path: regio.path },
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
              <nav aria-label="Kruimelpad" className="kruimels">
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                    <span aria-hidden="true"> /</span>
                  </li>
                  <li>
                    <a href="/#regio">Werkgebied</a>
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
                <p key={alinea}>{alinea}</p>
              ))}
              <div className="hcta">
                <Link className="btn btn-white" to="/verhuur/calculator">
                  Bereken uw droogpakket
                  <ArrowRightIcon />
                </Link>
                <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                  <PhoneIcon /> Bel {CONTACT.phoneLocal}
                </a>
              </div>
            </div>
            <div className="hero-vis">
              <div className="kaartvis">
                <img
                  src="/vernast/belgie-kaart-rood.webp"
                  alt={`Werkgebied van Vernast, met ${regio.name} aangeduid`}
                  width={1200}
                  height={980}
                  loading="lazy"
                  decoding="async"
                />
                {/*
                  Links van het midden hangt het label rechts van de speld en
                  omgekeerd; anders valt "West-Vlaanderen" buiten de kaart.
                */}
                <span
                  className={`speld${parseInt(route.pin.left, 10) > 55 ? " links" : ""}`}
                  style={{ left: route.pin.left, top: route.pin.top }}
                >
                  <b>{regio.name}</b>
                </span>
              </div>
              <div className="fbadge" style={{ bottom: "40px", left: "-4%" }}>
                <span className="ic"><TruckIcon size={15} /></span>
                <div>
                  Levering binnen 24 uur
                  <small>geplaatst en ingesteld door onze technieker</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= WAT WE HIER DROGEN ================= */}
      <section className="sw">
        <div className="wrap split">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick">Wat we hier drogen</span>
            <h2 className="sec">{regio.bouw.kop}</h2>
            {regio.bouw.alineas.map((alinea) => (
              <p className="lede" key={alinea}>
                {alinea}
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

      {/* ================= TOESTELLEN ================= */}
      <section className="sr">
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">De toestellen</span>
            <h2 className="sec">{regio.toestellen.kop}</h2>
          </div>
          <div className="prods">
            {regio.toestellen.items.map((item, i) => {
              const p = PRODUCTS[item.key];
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
                  {/*
                    De naam waaronder het toestel verhuurd wordt, niet
                    `p.short`. Dat veld komt uit het portaal en is de typecode
                    van de fabrikant: hier stond letterlijk "TTK 170 S" boven de
                    kaart en "Bekijk TEddH 30 T" op de knop, terwijl het menu,
                    de footer en de toestelpagina zelf "Small bouwdroger"
                    zeiden. `toestelLabel()` is dezelfde bron als die drie.
                  */}
                  <h3>{toestelLabel(item.key)}</h3>
                  <p className="pdesc" style={{ marginBottom: "18px" }}>{item.waarom}</p>
                  {/*
                    Kort op het scherm, volledig voor een schermlezer. "Bekijk
                    Highflow axiaalventilator" brak over twee regels en duwde de
                    vier knoppen uit één lijn; "Bekijken" alleen zou vier
                    identieke links opleveren in de linklijst van een
                    schermlezer, zonder te zeggen waarheen.
                  */}
                  <Link
                    className="btn btn-line"
                    to={toestelPad(item.key)}
                    aria-label={`Bekijk ${toestelLabel(item.key)}`}
                  >
                    Bekijk dit toestel
                    <ArrowRightIcon size={13} />
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="note">
            Twijfelt u tussen twee toestellen?{" "}
            <Link to="/verhuur/calculator">Bereken hoeveel liter per dag uw ruimte nodig heeft</Link> of
            bekijk <Link to="/machines">het volledige gamma</Link>.
          </div>
        </div>
      </section>

      {/* ================= AFHALEN OF LEVEREN ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">Twee manieren</span>
            <h2 className="sec">Afhalen of leveren in {regio.name}?</h2>
          </div>
          <div className="split32">
            <Reveal from="up" className="paneel">
              <div className="phead">
                <span><TruckIcon size={19} /></span>
                <h3>{regio.levering.kop}</h3>
              </div>
              {regio.levering.alineas.map((alinea) => (
                <p key={alinea}>{alinea}</p>
              ))}
              <dl className="feiten">
                {regio.levering.feiten.map((feit) => (
                  <div key={feit.label}>
                    <dt>{feit.label}</dt>
                    <dd>{feit.waarde}</dd>
                  </div>
                ))}
              </dl>
              {/*
                De gemeenten stonden alleen op de homepage-kaart, niet op de
                regiopagina zelf: Google stuurde "bouwdroger mechelen" daardoor
                naar de Limburg-pagina (Search Console, oktober 2026).
              */}
              <p style={{ marginTop: "20px" }}>
                <b style={{ color: "var(--txt)" }}>Wij leveren onder meer in </b>
                {regio.towns.join(", ")}.
              </p>
              <Link className="btn" to="/verhuur/calculator" style={{ marginTop: "22px" }}>
                Reserveer met levering
                <ArrowRightIcon />
              </Link>
            </Reveal>
            <Reveal from="up" delay={0.08} className="paneel">
              <div className="phead">
                <span><CartIcon size={19} /></span>
                <h3>{regio.afhalen.kop}</h3>
              </div>
              {regio.afhalen.alineas.map((alinea) => (
                <p key={alinea}>{alinea}</p>
              ))}
              <p style={{ marginTop: "18px" }}>
                <b style={{ color: "var(--txt)" }}>
                  {CONTACT.street}, {CONTACT.postalCode} {CONTACT.city}
                </b>
                <br />
                Ma–Vr 08:00–17:00, op afspraak
              </p>
              {/*
                Rood, net als "Reserveer met levering" ernaast. Als enige
                omlijnde knop in een rij van twee las hij als de minder
                belangrijke keuze, terwijl afhalen hier een volwaardig
                alternatief is -- en goedkoper voor de klant.
              */}
              <Link className="btn" to="/verhuur/afhalen" style={{ marginTop: "22px" }}>
                Zo werkt zelf afhalen
                <ArrowRightIcon />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= REALISATIES ================= */}
      {realisaties.length > 0 && (
        <section className="sr">
          <div className="wrap">
            <div className="sec-head mid">
              <span className="kick">Uit de praktijk</span>
              <h2 className="sec">{regio.realisaties.kop}</h2>
              {/* De intro beschrijft de uitgelichte werven; sinds álle werven
                  uit de provincie als kaart staan (zie `werven` hierboven)
                  klopte "Drie projecten" niet meer met de negen kaarten
                  eronder. De rest wordt nu geteld in plaats van verzwegen. */}
              <p className="lede">
                {regio.realisaties.intro}
                {werven.length > regio.realisaties.slugs.length && (
                  <>
                    {" "}
                    Daaronder volgt elke andere werf die we in {regio.name} droogden,{" "}
                    {werven.length} in totaal.
                  </>
                )}
              </p>
            </div>
            <div className="rzs">
              {werven.map((r, i) => (
                <Reveal from="up" delay={(i % 3) * 0.08} key={r.slug}>
                  <Link className="rz" to={`/realisaties/${r.slug}`}>
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
              <Link to="/realisaties" style={{ fontWeight: 600 }}>Alle realisaties bekijken</Link>
            </p>
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}
      {/* De titel luidde "Bouwdrogers huren in {regio.name}." — op één letter
          na de H1 van deze pagina, dus twee koppen op dezelfde zoekintentie
          binnen één document. */}
      <FaqBlok
        titel={`Wat klanten in ${regio.name} ons vragen.`}
        vragen={regio.faq}
        sleutel="regio-faq"
        variant="wit"
      >
        {/*
          De rode CTA-plaat staat bewust binnen de FAQ-sectie en niet in een
          eigen sectie eronder: wie de vragen heeft gelezen is klaar om te
          boeken, en met een lege witte strook ertussen viel dat moment weg.
        */}
        <div className="manband">
          <div className="mb-t">
            <span className="mbk">Bouwdroger nodig in {regio.name}</span>
            <h3>Bereken uw pakket, reserveer online, en morgen staat het er.</h3>
            <p>
              Geplaatst en ingesteld door onze technieker, met een vochtmeting bij de start en
              bij de oplevering. Liever eerst even overleggen? Bel ons gerust.
            </p>
            <div className="mb-cta">
              <Link className="btn btn-white" to="/verhuur/calculator">
                Bereken uw droogpakket
                <ArrowRightIcon />
              </Link>
              <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {CONTACT.phoneLocal}
              </a>
            </div>
          </div>
          <img
            className="mb-man breed bijsnijden"
            src="/vernast/man-bestelwagen.webp"
            alt="Vernast technicus bij de bestelwagen met een bouwdroger"
            width={1440}
            height={827}
            loading="lazy"
            decoding="async"
          />
        </div>
      </FaqBlok>

      {/* ================= DROOGTIJDEN ================= */}
      {/*
        Wat iemand na de prijs het vaakst wil weten: hoe lang staat dat ding
        er dan? Die vraag werd op deze pagina nergens beantwoord -- ze stond
        alleen in de gidsen, drie klikken verderop.

        De cijfers komen uit de pakketcatalogus en niet uit deze JSX, zodat de
        tabel niet uit elkaar loopt met wat de calculator aanrekent. De kolom
        "zonder droger" is de vuistregel uit de bouwpraktijk; dat staat er
        letterlijk bij, want het is een richtwaarde en geen belofte.
      */}
      {/*
        Gekoppeld aan `streken`, niet alleen aan `chape`.

        Deze tabel is op alle vijf de provinciepagina's identiek. Zette ze
        alleen erbij, dan daalde het aandeel eigen tekst van 64% naar 53-56%
        op de vier provincies die (nog) geen gemeentenlijst hebben -- gedeelde
        tekst erbij zonder eigen tekst ertegenover. Daarom rollen beide
        secties per provincie samen uit: zodra `provincie-gemeenten.ts` een
        geverifieerde lijst voor een provincie heeft, krijgt die pagina ze
        allebei. Antwerpen heeft er nu 61% eigen tekst mee.
      */}
      {chape.length > 0 && streken.length > 0 && (
        <section className="sr">
          <div className="wrap">
            <div className="sec-head">
              <span className="kick">Hoe lang duurt het</span>
              <h2 className="sec">Droogtijden met en zonder bouwdroger.</h2>
              <p className="lede">
                De huurtermijnen hieronder zijn die van onze droogpakketten, dezelfde als de
                calculator aanrekent. Ze gelden in heel {regio.name}: de droogtijd hangt af van
                dikte, volume en temperatuur, niet van uw postcode.
              </p>
            </div>

            <div className="tblwrap">
              <div className="tblscroll">
                <table className="tbl">
                  <caption className="sr-only">Droogtijden per materiaal en dikte</caption>
                  <thead>
                    <tr>
                      <th scope="col">Wat moet drogen</th>
                      <th scope="col">Zonder droger</th>
                      <th scope="col">Met droogpakket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chape.map((rij) => (
                      <tr key={`chape-${rij.dikte}`}>
                        <th scope="row">Cementchape {rij.dikte} cm</th>
                        <td>± {natuurlijkeChapeWeken(rij.dikte)} weken</td>
                        <td>
                          <b>{termijnLabel(rij)}</b>
                        </td>
                      </tr>
                    ))}
                    {pleister.map((rij) => {
                      const nat = natuurlijkePleisterWeken(rij.dikte);
                      return (
                        <tr key={`pleister-${rij.dikte}`}>
                          <th scope="row">Pleisterwerk {rij.dikte} cm</th>
                          <td>
                            ± {nat.min === nat.max ? nat.min : `${nat.min} tot ${nat.max}`} weken
                          </td>
                          <td>
                            <b>{termijnLabel(rij)}</b>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="tblnote">
              &ldquo;Zonder droger&rdquo; is de vuistregel uit de bouwpraktijk bij een goed
              verluchte ruimte rond 20 &deg;C &mdash; een richtwaarde, geen meting. In een koude of
              gesloten ruimte loopt ze flink op, en dat is precies waar een bouwdroger het verschil
              maakt. Wat telt is de eindmeting: is het op de afgesproken datum niet droog, dan
              huurt u kosteloos verder.{" "}
              <Link to="/gids/hoe-lang-moet-chape-drogen">Hoe lang chape moet drogen</Link> legt het
              per situatie uit.
            </p>
          </div>
        </section>
      )}

      {/* ================= GEMEENTEN PER STREEK ================= */}
      {/*
        Elke gemeente van de provincie, gegroepeerd per streek.

        De pagina noemde zeventien gemeenten en wekte daarmee de indruk dat we
        alleen daar komen: wie "bouwdroger huren Hemiksem" of "bouwdroger
        Westerlo" zocht, vond niets terwijl we er wel leveren. Per streek en
        niet per arrondissement, want de streek zegt iets over de bouw en dus
        over het drogen -- zandgrond en koude winterwerven in de Kempen,
        kleigrond en arbeiderswoningen aan de Rupel.

        Gemeenten met een eigen pagina worden vanzelf een link; de lijst in
        `provincie-gemeenten.ts` weet daar niets van.
      */}
      {streken.length > 0 && (
        <section className="sw">
          <div className="wrap">
            <div className="sec-head">
              <span className="kick">Waar we leveren</span>
              <h2 className="sec">De gemeenten van {regio.name}, per streek.</h2>
              <p className="lede">
                Wij leveren in de hele provincie, en de streek bepaalt mee welke opstelling erbij
                hoort. Staat uw gemeente er niet bij, bel ons dan gerust &mdash; ook net over de
                provinciegrens rijden we.
              </p>
            </div>
            <div className="strk">
              {streken.map((streek) => (
                <Reveal from="up" as="article" className="strk-blok" key={streek.naam}>
                  <h3>{streek.naam}</h3>
                  <p>{streek.kenmerk}</p>
                  <ul className="strk-lijst">
                    {streek.gemeenten.map((naam) => {
                      const eigen = gemeenteVanPlaats(naam);
                      return (
                        <li key={naam}>
                          {eigen ? <Link to={eigen.path}>{naam}</Link> : <span>{naam}</span>}
                        </li>
                      );
                    })}
                  </ul>
                </Reveal>
              ))}
            </div>
            <div className="note">
              <b>De onderstreepte gemeenten hebben een eigen pagina</b> met de rijtijd vanaf ons
              magazijn, de bebouwing ter plaatse en de vragen die daar spelen. De rest bedienen we
              even goed &mdash; bel ons op {CONTACT.phoneLocal} of{" "}
              <Link to="/verhuur/calculator">bereken meteen uw pakket</Link>.
            </div>
          </div>
        </section>
      )}

      {/*
        Hier stond alleen een kopje "Wij leveren in heel Vlaanderen en Brussel"
        met vier chips eronder. Twee problemen: het was geen sectie maar een
        linkrij, en de belofte was te krap — we rijden heel België. Nu staat er
        wat een bezoeker op dit punt wil weten (hoe het concreet verloopt), met
        de links naar de andere provincies eronder. Die links moeten blijven:
        ze vormen het cluster waarmee de vijf regiopagina's elkaar dragen.
      */}
      <section className="sr">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Hoe het verloopt</span>
            <h2 className="sec">Van reservatie tot meetrapport in {regio.name}.</h2>
            <p className="lede">
              Vier stappen, en u hoeft er zelf maar één te zetten. De rest doen wij, met een
              vochtmeting als bewijs in plaats van een datum op een kalender.
            </p>
          </div>
          <div className="flow">
            {VERLOOP.map(({ Icon, title, desc }, i) => (
              <Reveal from="up" delay={i * 0.08} className="fl" key={title}>
                <i>{`0${i + 1}`}</i>
                <div className="fi"><Icon size={19} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
          {/*
            De gemeenten van deze provincie die een eigen pagina hebben. Zonder
            deze lijst hangt elke gemeentepagina aan één link vanaf de
            homepage-kaart, en die kaart toont maar één provincie tegelijk —
            precies de situatie waardoor 19 van de 22 realisaties ooit niet
            geïndexeerd raakten (zie realisatie-regio.ts). De provinciepagina
            is de natuurlijke ouder, dus die draagt ze.
          */}
          {gemeenten.length > 0 && (
            <nav className="rg-links" aria-label={`Gemeenten in ${regio.name}`}>
              <span>Bouwdroger huren per gemeente:</span>
              {gemeenten.map((g) => (
                <Link key={g.slug} to={g.path}>
                  {g.name}
                </Link>
              ))}
            </nav>
          )}

          <div className="note">
            <b>Wij leveren in heel België.</b> Buiten de provincies hieronder rijden we ook, al
            telt de rit dan mee in de planning. Bel ons gerust voor een werf net over de
            provinciegrens. Ook bouwdrogers huren in:{" "}
            {andere.map((r, i) => (
              <span key={r.slug}>
                {i > 0 && (i === andere.length - 1 ? " en " : ", ")}
                <Link to={r.path}>{r.name}</Link>
              </span>
            ))}
            .
          </div>
        </div>
      </section>

      {/* ================= BEOORDELINGEN ================= */}
      {/*
        Een witte sectie tussen "Hoe het verloopt" en het contactblok, die
        allebei rood zijn: twee rode blokken onder elkaar liepen in elkaar over
        en de pagina verloor daar haar ritme. Dit is ook de juiste plek voor
        wat klanten zeggen — vlak voor het formulier, nadat alles uitgelegd is.

        De beoordelingen komen uit `src/data/reviews.ts`, dezelfde lijst als de
        homepage en /ozonbehandeling. Geen van de vijf gaat over deze regio en
        dat staat er niet bij gelogen: ze zeggen hoe deze ploeg werkt.
      */}
      <section className="sw">
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">Wat klanten zeggen</span>
            <h2 className="sec">Beoordeeld door wie ons al liet komen.</h2>
            <p className="lede">
              Beoordelingen van Vernast op Google en Solvari, letterlijk overgenomen. Over
              snelheid, afspraken nakomen en opvolging, precies wat een werf in {regio.name}
              {" "}van ons vraagt.
            </p>
          </div>
          <div className="rvs">
            {eersteReviews(3).map((review, i) => (
              <Reveal from="up" delay={(i % 3) * 0.08} as="figure" className="rvc" key={review.name}>
                <div className="rvc-top">
                  <div className="rvc-st" role="img" aria-label={`${review.rating} van de 5 sterren`}>
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

      <ContactBlok
        titel={`Een vraag over drogen in ${regio.name}?`}
        lede="Beschrijf kort wat er moet drogen en hoe groot de ruimte is. U krijgt binnen één werkdag antwoord van een droogspecialist, met een voorstel voor het juiste pakket."
        onderwerpen={[
          `Advies voor een werf in ${regio.name}`,
          "Levering en leverdatum",
          "Prijs van een droogpakket",
          "Waterschade, dit is dringend",
          "Iets anders",
        ]}
        placeholder={`Bv. nieuwbouw 140 m² in ${regio.towns[0]}, chape vorige week geplaatst, wanneer kan de vloerder starten?`}
      />

      </main>
      <V3Footer />
    </div>
  );
};

export default RegioPage;
