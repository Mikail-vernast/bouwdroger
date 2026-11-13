import { Fragment, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import { nadruk } from "@/components/content/nadruk";
import { beurt, hoofdKnop, tweedeKnop, type Kleur, type Sectie } from "@/components/content/ritme";
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarCheckIcon,
  CartIcon,
  CheckIcon,
  GoogleIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  StarIcon,
  TruckIcon,
} from "@/components/home-v3/icons";
import { GaugeIcon, LayersIcon, LekIcon, WindIcon } from "@/components/content/icons";
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { REGIO_BY_PATH, REGIO_ROUTES } from "@/data/regio-slugs";
import { gemeentenInRegio, gemeenteVanPlaats } from "@/data/gemeente-slugs";
import { STREKEN_PER_REGIO } from "@/data/provincie-gemeenten";
import {
  bereikLabel,
  droogtermijnen,
  natuurlijkeChapeBereik,
  natuurlijkePleisterWeken,
  termijnLabel,
} from "@/lib/droogtijden";
import { REGIO_BY_SLUG, realisatiesVoor, type Regio } from "@/data/regios";
import { productImageAlt, PRODUCTS, toestelPad } from "@/data/verhuur";
import { euroInt } from "@/lib/verhuur";
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
    desc: "Online via de Calculator of met één telefoontje. U kiest zelf de leverdag; twijfelt u over het volume, dan rekenen wij het door.",
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
  const isWest = regio.slug === "west-vlaanderen";
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
  /*
    De vanafprijs in de prijssectie, berekend uit `PRODUCTS` en niet
    overgetypt: het portaal publiceert de dagprijzen en een bedrag in deze JSX
    zou vroeg of laat afwijken van wat de calculator aanrekent. Alleen
    bouwdrogers tellen mee -- een ventilator is goedkoper, maar wie "vanaf"
    leest denkt aan de droger zelf. `type` is een label uit het portaal
    ("Condensontvochtiger", "Adsorptiedroger · gericht drogen"), geen
    categorie; vandaar dat er op het woord gematcht wordt en niet op een
    sleutel.
  */
  const drogers = Object.values(PRODUCTS).filter((p) => /ontvochtiger|droger/i.test(p.type));
  const goedkoopsteDag = euroInt(Math.min(...drogers.map((p) => p.day)));
  /*
    De werffoto van deze provincie (`regio.beeld`) hangt aan "Waarvoor huren
    Antwerpenaren een bouwdroger?" -- daar hoort ze, want ze toont een werf uit
    déze streek. Op West-Vlaanderen staat die sectie niet in de volgorde en zou
    de foto nergens getoond worden; daar draagt de prijssectie ze.

    Elders zou dezelfde foto dan twee keer op één pagina staan. Daar staat de
    gerustgestelde klant naast de prijs, dezelfde uitsnede als in de hero van
    /prijzen -- gevraagd op 13-11-2026, met die pagina erbij als voorbeeld. Een
    uitsnede, dus geen afgeronde hoeken: `cut` haalt de fotolijst weg en de
    schaduw volgt vanzelf de omtrek.
  */
  const prijsBeeld = isWest
    ? { ...regio.beeld, uitsnede: false }
    : {
        src: "/vernast/man-zen-crop.webp",
        alt: "Zorgeloos huren bij Vernast: één prijs vooraf, geen waarborg",
        uitsnede: true,
      };

  const localDryingSection: Sectie = (kleur) => (
    <>
      {/* ================= WAT WE HIER DROGEN ================= */}
      <section className={kleur}>
        <div className="wrap split">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick">Wat we hier drogen</span>
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
            <span className="kick">De toestellen</span>
            <h2 className="sec">{regio.toestellen.kop}</h2>
          </div>
          <div className="prods">
            {regio.toestellen.items.map((item, i) => {
              const p = PRODUCTS[item.key];
              return (
                <Reveal
                  from="up"
                  delay={(i % 3) * 0.08}
                  as="article"
                  className="prod"
                  key={item.key}
                >
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
                  <p className="pdesc" style={{ marginBottom: "18px" }}>
                    {nadruk(item.waarom)}
                  </p>
                  {/*
                    Kort op het scherm, volledig voor een schermlezer. "Bekijk
                    Highflow axiaalventilator" brak over twee regels en duwde de
                    vier knoppen uit één lijn; "Bekijken" alleen zou vier
                    identieke links opleveren in de linklijst van een
                    schermlezer, zonder te zeggen waarheen.
                  */}
                  {/* Rood met witte tekst, zoals de kaartknoppen in de
                      pakkettensectie: omlijnd viel hij weg tegen de witte
                      kaart. Gevraagd op 13-11-2026. */}
                  <Link
                    className="btn"
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
            <Link to="/verhuur/calculator">
              Bereken hoeveel liter per dag uw ruimte nodig heeft
            </Link>{" "}
            of bekijk <Link to="/machines">het volledige gamma</Link>.
          </div>
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
            <span className="kick">Twee manieren</span>
            <h2 className="sec">
              {isWest
                ? "Leveren in West-Vlaanderen of afhalen bij Antwerpen?"
                : `Afhalen of leveren in ${regio.name}?`}
            </h2>
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
                <span>
                  <CartIcon size={19} />
                </span>
                <h3>
                  {isWest ? "Zelf afhalen: Aartselaar, A12 bij Antwerpen" : regio.afhalen.kop}
                </h3>
              </div>
              {regio.afhalen.alineas.map((alinea) => (
                <p key={alinea}>{nadruk(alinea)}</p>
              ))}
              <p style={{ marginTop: "18px" }}>
                <b style={{ color: "var(--txt)" }}>
                  {CONTACT.street}, {CONTACT.postalCode} {CONTACT.city}
                </b>
                <br />
                Ma–Vr 08:00–17:00, op afspraak
              </p>
              {/*
                Dezelfde feitentabel als in het leveringspaneel hiernaast. Dat
                paneel draagt twee alinea's én vijf regels; dit droeg er één,
                en omdat `.paneel` zijn knop naar de onderrand duwt bleef er
                een half scherm wit tussen de tekst en "Zo werkt zelf afhalen".
                De rij "Liever laten leveren?" staat er niet om te vullen: wie
                hier twijfelt, twijfelt precies daarover.
              */}
              {regio.afhalen.feiten && (
                <dl className="feiten">
                  {regio.afhalen.feiten.map((feit) => (
                    <div key={feit.label}>
                      <dt>{feit.label}</dt>
                      <dd>{feit.waarde}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {/*
                Rood, net als "Reserveer met levering" ernaast. Als enige
                omlijnde knop in een rij van twee las hij als de minder
                belangrijke keuze, terwijl afhalen hier een volwaardig
                alternatief is -- en goedkoper voor de klant.
              */}
              <Link className="btn" to="/afhalen" style={{ marginTop: "22px" }}>
                Zo werkt zelf afhalen
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
                  Daaronder volgt elke andere werf die we in {regio.name} droogden, {werven.length}{" "}
                  in totaal.
                </>
              )}
            </p>
          </div>
          <div className={`rzs${isWest && werven.length === 2 ? " twee" : ""}`}>
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
            <Link to="/realisaties" style={{ fontWeight: 600 }}>
              Alle realisaties bekijken
            </Link>
          </p>
        </div>
      </section>
    </>
  );

  const faqSection: Sectie = () => (
    <>
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
              Geplaatst en ingesteld door onze technieker, met een vochtmeting bij de start en bij
              de oplevering. Liever eerst even overleggen? Bel ons gerust.
            </p>
            {/*
              Eén knop, niet twee. Het telefoonnummer stond hier als omlijnde
              knop én twee blokken hoger als witte knop in het hulpkaartje van
              de FAQ -- twee keer hetzelfde nummer binnen één schermhoogte. Het
              kaartje is de betere plek: daar staat het naast de vraag waarop
              bellen het antwoord is.
            */}
            <div className="mb-cta">
              <Link className="btn btn-white glans" to="/verhuur/calculator">
                Bereken uw droogpakket
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          {/*
            `tegenrand` op allebei de varianten. De bestelwagen staat met zijn
            rechterrand tegen de rand van het beeld, maar de band heeft 44px
            binnenmarge -- op de provinciepagina's stopte de wagen daardoor
            vier centimeter voor de rand van het rode blok en leek hij er
            middenin te zweven. Op West-Vlaanderen stond die klasse er al.
          */}
          <img
            className={`mb-man breed tegenrand ${isWest ? "regio-wagen" : "bijsnijden"}`}
            src="/vernast/man-bestelwagen.webp"
            alt="Vernast technicus bij de bestelwagen met een bouwdroger"
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
      <section className={kleur}>
        <div className="wrap">
          {/*
            De knop staat naast de kop en niet onder de tabel: wie zich afvraagt
            hoe lang het duurt, vraagt zich meteen daarna af waaróm een
            bouwdroger het sneller doet. Gevraagd op 13-11-2026.
          */}
          <div className="kop-rij">
            <div className="sec-head">
              <span className="kick">Hoe lang duurt het</span>
              <h2 className="sec">Droogtijden met en zonder bouwdroger.</h2>
              <p className="lede">
                De huurtermijnen hieronder zijn die van onze droogpakketten,{" "}
                <b>dezelfde als de Calculator aanrekent</b>. Ze gelden in heel {regio.name}: de
                droogtijd hangt af van dikte, volume en temperatuur, <b>niet van uw postcode</b>.
              </p>
            </div>
            <div className="prijsknoppen">
              <Link className={tweedeKnop(kleur)} to="/waarom-bouwdroging">
                Waarom bouwdrogen?
                <ArrowRightIcon />
              </Link>
            </div>
          </div>

          <div className="tblwrap">
            <div className="tblscroll">
              <table className="tbl">
                <caption className="sr-only">Droogtijden per materiaal en dikte</caption>
                <thead>
                  <tr>
                    <th scope="col">Wat moet drogen</th>
                    <th scope="col">Zonder droger</th>
                    <th scope="col">Met droogpakket van Vernast</th>
                  </tr>
                </thead>
                <tbody>
                  {chape.map((rij) => (
                    <tr key={`chape-${rij.dikte}`}>
                      <th scope="row">Cementchape {rij.dikte} cm</th>
                      <td className="traag">{bereikLabel(natuurlijkeChapeBereik(rij.dikte))}</td>
                      <td className="snel">
                        <b>{termijnLabel(rij)}</b>
                      </td>
                    </tr>
                  ))}
                  {pleister.map((rij) => (
                    <tr key={`pleister-${rij.dikte}`}>
                      <th scope="row">Pleisterwerk {rij.dikte} cm</th>
                      <td className="traag">{bereikLabel(natuurlijkePleisterWeken(rij.dikte))}</td>
                      <td className="snel">
                        <b>{termijnLabel(rij)}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="tblnote">
            &ldquo;Zonder droger&rdquo; is de vuistregel uit de bouwpraktijk, en daarom een bereik:
            de ondergrens geldt in een goed verluchte ruimte rond 20 &deg;C, de bovengrens op een
            koude, dichtgemaakte werf in de winter. Een richtwaarde dus, geen meting, en
            precies waar een bouwdroger het verschil maakt. Wat telt is de eindmeting: is het op de
            afgesproken datum niet droog, dan huurt u kosteloos verder.{" "}
            <Link to="/gids/hoe-lang-moet-chape-drogen">Hoe lang chape moet drogen</Link> legt het
            per situatie uit.
          </p>
        </div>
      </section>
    </>
  );

  const townsSection: Sectie = (kleur) => (
    <>
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
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Waar we leveren</span>
            <h2 className="sec">De gemeenten van {regio.name}, per streek.</h2>
            <p className="lede">
              <b>Wij leveren in de hele provincie</b>, en de streek bepaalt mee welke opstelling
              erbij hoort. Staat uw gemeente er niet bij, bel ons dan gerust. Ook net over de
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
          {/*
              De zin over de onderstreepte gemeenten alleen waar er ook
              onderstreepte staan. De gemeentepagina's zijn een pilot en
              bestaan voorlopig enkel voor Antwerpen (zie `gemeente-slugs.ts`);
              op de vier andere provincies beloofde deze notitie een pagina per
              gemeente die er niet is, naast een lijst waarin geen enkele naam
              een link was.
            */}
          <div className="note">
            {gemeenten.length > 0 ? (
              <>
                <b>De onderstreepte gemeenten hebben een eigen pagina</b> met de rijtijd vanaf ons
                magazijn, de bebouwing ter plaatse en de vragen die daar spelen. De rest bedienen we
                even goed. Hebt u een vraag,{" "}
              </>
            ) : (
              <>
                <b>Wij leveren in elke gemeente hierboven</b>, en de streek bepaalt alleen welke
                opstelling meegaat, niet of we komen. Twijfelt u over het aantal toestellen
                voor uw volume,{" "}
              </>
            )}
            bel ons op <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a> of{" "}
            <Link to="/verhuur/calculator">bereken meteen uw pakket</Link>.
          </div>
        </div>
      </section>
    </>
  );

  const processSection: Sectie = (kleur) => (
    <>
      {/*
        Hier stond alleen een kopje "Wij leveren in heel Vlaanderen en Brussel"
        met vier chips eronder. Twee problemen: het was geen sectie maar een
        linkrij, en de belofte was te krap — we rijden heel België. Nu staat er
        wat een bezoeker op dit punt wil weten (hoe het concreet verloopt), met
        de links naar de andere provincies eronder. Die links moeten blijven:
        ze vormen het cluster waarmee de vijf regiopagina's elkaar dragen.
      */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Hoe het verloopt</span>
            <h2 className="sec">Van reservatie tot eindmeting in {regio.name}.</h2>
            <p className="lede">
              <b>Vier stappen, en u hoeft er zelf maar één te zetten.</b> De rest doen wij, met een
              <b> vochtmeting als bewijs</b> in plaats van een datum op een kalender.
            </p>
          </div>
          <div className="flow">
            {VERLOOP.map(({ Icon, title, desc }, i) => (
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
            De gemeenten van deze provincie die een eigen pagina hebben. Zonder
            deze lijst hangt elke gemeentepagina aan één link vanaf de
            homepage-kaart, en die kaart toont maar één provincie tegelijk —
            precies de situatie waardoor 19 van de 22 realisaties ooit niet
            geïndexeerd raakten (zie realisatie-regio.ts). De provinciepagina
            is de natuurlijke ouder, dus die draagt ze.

            Alleen wanneer deze provincie geen strekenlijst heeft. Heeft ze er
            wel een, dan staat elke gemeente daar al als link en stond ze hier
            een tweede keer -- op Antwerpen twee keer dezelfde zeventien namen,
            de ene keer per streek en de andere als rij in een rode sectie waar
            ze bovendien nauwelijks te lezen was.
          */}
          {gemeenten.length > 0 && streken.length === 0 && (
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
            <b>Wij leveren in heel België.</b> Buiten de provincies hieronder rijden we ook, al telt
            de rit dan mee in de planning. Bel ons gerust voor een werf net over de provinciegrens.
            Ook bouwdrogers huren in:{" "}
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
    </>
  );

  const reviewsSection: Sectie = (kleur) => (
    <>
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
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">Wat klanten zeggen</span>
            <h2 className="sec">Beoordeeld door wie ons al liet komen.</h2>
            <p className="lede">
              Beoordelingen van Vernast op Google en Solvari, letterlijk overgenomen. Over snelheid,
              afspraken nakomen en opvolging, precies wat een werf in {regio.name} van ons vraagt.
            </p>
          </div>
          <div className="rvs">
            {eersteReviews(3).map((review, i) => (
              <Reveal
                from="up"
                delay={(i % 3) * 0.08}
                as="figure"
                className="rvc"
                key={review.name}
              >
                <div className="rvc-top">
                  <div
                    className="rvc-st"
                    role="img"
                    aria-label={`${review.rating} van de 5 sterren`}
                  >
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
        Dit was een kop, één alinea en een omlijnde knop in een volle
        sectiebreedte: de rechterhelft stond leeg en het blok droeg minder
        informatie dan zijn eigen titel beloofde. Nu draagt het de prijsvraag
        volledig -- de alinea die uit de hero kwam, vier harde feiten en de
        twee knoppen die hier horen -- naast de werffoto van deze provincie.

        Die foto (`regio.beeld`) werd op de West-Vlaanderen-volgorde nergens
        getoond: `localDryingSection` staat alleen in de andere volgorde. Ze
        stond dus in de data te verstoffen terwijl precies hier een halve
        sectie leeg was.
      */}
      <section className={kleur}>
        {/*
          Gespiegeld: het beeld links, de tekst rechts. Twee splitsecties onder
          elkaar met de foto allebei rechts -- deze en "Waarvoor huren
          Antwerpenaren een bouwdroger?" -- lezen als één lange kolom tekst met
          een strook beeld ernaast. Gevraagd op 13-11-2026.
        */}
        <div className="wrap split omgekeerd">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick">Eén aanspreekpunt voor uw werf</span>
            <h2 className="sec">Wat kost een bouwdroger huren in {regio.name}?</h2>
            <p className="lede">
              <b>De juiste prijs begint bij wat er moet drogen.</b> Voor een volledige woning, natte
              chape of pleisterwerk berekent u een compleet droogpakket; voor één ruimte volstaat
              een los toestel. Wij leveren onder meer in {regio.towns.slice(0, 4).join(", ")}; zelf
              afhalen kan in {CONTACT.city} bij Antwerpen.
            </p>
            <p className="lede">
              U huurt <b>geen los toestel op goed geluk, maar een droogpakket</b> berekend op het
              volume, het materiaal en de temperatuur van uw werf. <b>De prijs is vooraf bekend</b>{" "}
              en omvat de levering, de installatie, de vochtmeting bij de start en bij de oplevering
              en de ophaling. Niet droog binnen de berekende termijn? Dan loopt de huur volgens de
              voorwaarden <b>kosteloos verder</b>.
            </p>
            {/*
              De bedragen komen uit `PRODUCTS` (het portaal), niet uit deze
              JSX. Een overgetypte prijs loopt vroeg of laat uiteen met wat de
              calculator aanrekent -- zie de notitie in CLAUDE.md.
            */}
            <dl className="feiten">
              <div>
                <dt>Eén losse bouwdroger, zelf geplaatst</dt>
                <dd>vanaf {goedkoopsteDag} per dag, excl. btw</dd>
              </div>
              <div>
                <dt>Droogpakket op maat van uw werf</dt>
                <dd>één vaste prijs, vooraf berekend</dd>
              </div>
              {/*
                De vochtmeting hoort in dezelfde regel als de levering: ze is
                geen extra maar deel van wat elk pakket draagt, en het is het
                verschil tussen een huurperiode en een gemeten einddatum.
              */}
              <div>
                <dt>Levering, plaatsing, vochtmeting en ophaling</dt>
                <dd>inbegrepen in elk pakket</dd>
              </div>
              <div>
                <dt>Waarborg</dt>
                <dd>geen</dd>
              </div>
            </dl>
            <div className="prijsknoppen">
              <Link className={hoofdKnop(kleur)} to="/verhuur/calculator">
                Bereken uw pakketprijs
                <ArrowRightIcon />
              </Link>
              <Link className={tweedeKnop(kleur)} to="/prijzen">
                Bekijk alle huurprijzen
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
            {/*
              Linksonder, niet rechtsonder. Sinds het beeld in de linkerkolom
              staat wijst "rechts" naar het midden van de pagina, en daar lag de
              badge over de man heen.
            */}
            <div className="fbadge" style={{ bottom: "-16px", left: "0" }}>
              <span className="ic">
                <CheckIcon size={15} strokeWidth={3} />
              </span>
              <div>
                Prijs vooraf bekend
                <small>geen waarborg, geen nacalculatie</small>
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
      {/*
        Drie dingen zaten hier scheef. De kaarten droegen tekst van ongelijke
        lengte, dus stond elke knop op een andere hoogte -- `.kaart.gelijk`
        duwt ze nu naar dezelfde onderlijn. De kaarten hadden geen icoon
        terwijl elke andere kaartenrij op deze schil er een heeft. En de
        staart was twee keer hetzelfde: een `note` over de Drooggarantie, een
        losse `lede` over de waarborg en dan één witte knop zonder gezelschap.
        De twee voorwaarden staan nu samen in de note, de twee knoppen samen
        in één rij.
      */}
      <section className={kleur} id="droogpakketten">
        <div className="wrap">
          {/*
            De kop links, de twee knoppen rechts ernaast. Ze stonden eerst
            onderaan de sectie, voorbij de kaarten en de voorwaarden, en daarna
            onder de inleiding -- maar daar duwden ze de kaarten weg terwijl de
            halve sectie rechts van de kop leeg bleef. Gevraagd op 13-11-2026.
          */}
          <div className="kop-rij">
          <div className="sec-head">
            <span className="kick">Uw complete droogpakket</span>
            <h2 className="sec">Bouwdroging in {regio.name}, van plaatsing tot droog resultaat.</h2>
            <p className="lede">
              <b>U hoeft zelf geen toestellen te combineren.</b> Wij berekenen uw droogpakket op
              basis van de oppervlakte, het materiaal en de laagdikte. U ziet{" "}
              <b>vooraf de pakketprijs</b>, inclusief levering in {regio.name}, installatie, voor-
              en nameting en ophaling.
            </p>
            {/*
              De twee knoppen stonden onderaan de sectie, voorbij de kaarten en
              de voorwaarden -- zes schermen ver van de belofte waar ze bij
              horen. Ze staan nu onder de inleiding, links bij de kop, zoals
              gevraagd op 13-11-2026.
            */}
          </div>
            <div className="prijsknoppen">
              <Link className={hoofdKnop(kleur)} to="/verhuur/calculator">
                Bereken uw pakketprijs
                <ArrowRightIcon />
              </Link>
              <Link className={tweedeKnop(kleur)} to="/prijzen">
                Prijzen en wat inbegrepen is
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div className="g3">
            {[
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
            ].map(({ Icon, title, desc, path, label }, i) => (
              <Reveal from="up" delay={i * 0.08} className="kaart gelijk" key={path}>
                <div className="ki">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {/*
                  Kort op het scherm, volledig voor een schermlezer: drie keer
                  "Meer over deze droging" onder elkaar zegt in een linklijst
                  niet waarheen.
                */}
                {/*
                  Rood met witte tekst, niet omlijnd: op een witte kaart in een
                  rode sectie viel de omlijnde knop weg tegen de kaart zelf.
                  Gevraagd op 13-11-2026.
                */}
                <Link className="btn" to={path} aria-label={label}>
                  Meer over deze droging
                  <ArrowRightIcon size={13} />
                </Link>
              </Reveal>
            ))}
          </div>
          {/*
            Met het schild ervoor. Twee alinea's over een garantie en een
            waarborg lazen als kleine lettertjes; het icoon zegt op een halve
            seconde dat hier een belofte staat en geen voorbehoud.
          */}
          <div className="note schild">
            <span className="schild-ic" aria-hidden="true"><ShieldIcon size={22} strokeWidth={1.7} /></span>
            <div>
            <p>
              <b>100 % Drooggarantie inbegrepen.</b> Is het materiaal ondanks correcte
              droogomstandigheden niet droog binnen de berekende periode? Dan huurt u de toestellen
              kosteloos verder, volgens onze{" "}
              <Link to="/drooggarantie">Drooggarantievoorwaarden</Link>. Dit geldt voor berekende
              pakketten die wij leveren en installeren; losse toestellen voor afhaling vallen er
              niet onder.
            </p>
            <p>
              <b>Geen waarborg.</b> De Calculator toont uw totaalprijs en de extra&rsquo;s die u
              zelf kiest, zoals een condenspomp, bijkomende verwarming of een officieel
              vochtrapport.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  /*
    De volgorde. De hero is rood, dus de eerste sectie is wit en vanaf daar
    wisselt het af. De FAQ is altijd wit en eindigt met de rode slotplaat; die
    plaat telt als de rode stap, dus daarna begint het weer bij wit.

    Een sectie die niets te tonen heeft (geen realisaties, geen strekenlijst)
    hoort hier niet in de lijst en verbruikt geen beurt -- dát was de fout die
    het ritme op vier van de vijf provincies liet verspringen.

    De FAQ is wit en moet dus op een rode sectie volgen: het aantal secties
    vóór de FAQ hoort even te zijn. `src/test/regios.test.ts` bewaakt dat,
    want aan deze lijst wordt vaker gesleuteld dan aan de kleuren.
  */
  /*
    Eén volgorde voor de vijf pagina's.

    West-Vlaanderen had er een eigen, en die sloeg `localDryingSection` over
    -- de sectie die `regio.bouw` rendert. Gevolg: de drie alinea's over de
    kust, Brugge en de Leiestreek stonden wel in `regios.ts` en telden mee in
    de woordentest van `regios.test.ts`, maar kwamen op de pagina nergens
    voor. Diezelfde rij miste ook de droogtijden en de gemeentenlijst, die er
    nu voor élke provincie zijn (`provincie-gemeenten.ts`, 13-11-2026).
  */
  const voorFaq: Sectie[] = [
    /*
          Eerst het pakket, dan pas de toestellen.

          De toestellensectie stond hier bovenaan, en dat is een antwoord op
          een vraag die de bezoeker nog niet gesteld heeft: wie net uit Google
          komt weet nog niet dat wij een berekend pakket leveren in plaats van
          een machine te verhuren. Hij koos dus een toestel uit vier kaarten,
          en de prijs- en pakketsectie kwam pas toen de keuze al gemaakt was.
          Gevraagd op 13-11-2026 -- en het is dezelfde volgorde die
          West-Vlaanderen al had.
        */
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
  /*
    De FAQ staat zo laag mogelijk: als laatste sectie vóór het formulier, want
    wie tot daar leest heeft zijn vraag al bijna gesteld. Ze stond ooit in het
    midden van de pagina, tussen de werven en de droogtijden in.

    Er komt niets meer achter. De beoordelingen stonden op West-Vlaanderen ná
    de FAQ, puur om het aantal secties ervóór even te krijgen; nu de vijf
    pagina's dezelfde rij delen klopt dat aantal uit zichzelf.
    `regioRitme.test.tsx` meet het na op de gerenderde klassen.
  */
  const naFaq: Sectie[] = [];

  const kop = voorFaq.map((sectie, i) => <Fragment key={`kop-${i}`}>{sectie(beurt(i))}</Fragment>);
  const staart = naFaq.map((sectie, i) => (
    <Fragment key={`staart-${i}`}>{sectie(beurt(i))}</Fragment>
  ));
  /*
    Het formulier is altijd rood -- de pagina eindigt op rood, net als
    /prijzen en de andere inhoudspagina's. Het stond op de beurt na de staart
    en viel daardoor op de provinciepagina's zonder reviews-staart wit uit:
    een licht formulier onder een witte FAQ, met alleen de rode slotplaat
    ertussen. Gevraagd op 13-11-2026 ("kan je dit nog in het rood maken"),
    net als eerder op /prijzen; reken het dus niet opnieuw uit.
  */

  return (
    <div className={`v3c rg-page${isWest ? " rg-west" : ""}`}>
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
                  <p key={alinea}>{nadruk(alinea)}</p>
                ))}
                {regio.heroFacts && (
                  <div className="hbadges" aria-label="Inbegrepen bij uw droogpakket">
                    {regio.heroFacts.map((feit) => (
                      <span key={feit}>
                        <CheckIcon size={14} strokeWidth={3} /> {feit}
                      </span>
                    ))}
                  </div>
                )}
                <div className="hcta">
                  <Link className="btn btn-white glans" to="/verhuur/calculator">
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
                  Het label hangt gecentreerd bóven de punt (zie `.speld b`),
                  dus het maakt niet meer uit aan welke kant van de kaart de
                  speld staat. Hier stond een klasse die het label naar links of
                  rechts gooide naargelang `pin.left`.
                */}
                  <span className="speld" style={{ left: route.pin.left, top: route.pin.top }}>
                    <b>{regio.name}</b>
                  </span>
                </div>
                <div className="fbadge" style={{ bottom: "40px", left: "-4%" }}>
                  <span className="ic">
                    <TruckIcon size={15} />
                  </span>
                  <div>
                    Levering binnen 24 uur
                    <small>geplaatst en ingesteld door onze technieker</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {kop}
        {faqSection("sw")}
        {staart}

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
