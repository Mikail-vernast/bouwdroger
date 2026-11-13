import { Fragment } from "react";
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
import {
  GEMEENTE_BY_PATH,
  GEMEENTE_ROUTES,
  gemeentenInRegio,
  gemeenteVanPlaats,
} from "@/data/gemeente-slugs";
import { GEMEENTE_BY_SLUG, plaatsenVoor, routeVan, type Gemeente } from "@/data/gemeenten";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { REGIO_BY_SLUG } from "@/data/regios";
import { STREKEN_PER_REGIO } from "@/data/provincie-gemeenten";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { realisatieSlugsIn } from "@/data/realisatie-regio";
import { productImageAlt, PRODUCTS, toestelPad } from "@/data/verhuur";
import { euroInt } from "@/lib/verhuur";
import { toestelLabel } from "@/data/navigation";
import { eersteReviews } from "@/data/reviews";
import {
  droogtermijnen,
  bereikLabel,
  natuurlijkeChapeBereik,
  natuurlijkePleisterWeken,
  termijnLabel,
} from "@/lib/droogtijden";
import "@/styles/v3-content.css";

/**
 * Eén sjabloon voor de gemeentepagina's (/bouwdroger-huren-<gemeente>).
 *
 * Opzet gelijk aan `RegioPage`: de inhoud staat in `src/data/gemeenten.ts`,
 * dit bestand bepaalt alleen de volgorde en de vorm. Alles wordt geprerenderd,
 * dus H1, tekst en vragen staan in de HTML zonder JavaScript.
 *
 * **Het verschil met de provinciepagina is bewust inhoudelijk, niet alleen
 * geografisch.** Zou deze pagina de provinciepagina zijn met een andere naam
 * erin, dan is ze een doorway page en filtert Google haar weg — samen met de
 * provinciepagina waarvan ze een kopie is. Daarom staan hier alleen secties
 * die iets zeggen dat op provincieniveau níét waar is: de rijtijd vanaf ons
 * magazijn, de bebouwing van déze gemeente, drie eigen vragen. Wat voor de
 * hele provincie geldt — het toestellenoverzicht, het verloop van een huur,
 * de beoordelingen — staat bewust alleen op de provinciepagina, met een link
 * ernaartoe. Zie `src/data/gemeenten.ts` voor de inhoudelijke lat.
 *
 * React Router kan geen `bouwdroger-huren-:gemeente` (een parameter moet een
 * heel segment zijn), dus App.tsx registreert vaste routes die allemaal hier
 * uitkomen — zelfde oplossing als bij de regiopagina's.
 */

/**
 * De vier stappen van een huur. Eén regel draagt de gemeentenaam, zodat deze
 * sectie niet op zeventien pagina's woord voor woord dezelfde is.
 */
const verloop = (naam: string) => [
  {
    Icon: CalendarCheckIcon,
    title: "U reserveert",
    desc: "Online via de Calculator of met één telefoontje. U kiest zelf de leverdag; twijfelt u over het volume, dan rekenen wij het door.",
  },
  {
    Icon: TruckIcon,
    title: `Wij rijden naar ${naam}`,
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

const GemeentePage = () => {
  const { pathname } = useLocation();
  const route = GEMEENTE_BY_PATH[pathname.replace(/\/$/, "")] ?? GEMEENTE_ROUTES[0];
  const gemeente: Gemeente = GEMEENTE_BY_SLUG[route.slug];
  const provincie = REGIO_ROUTES.find((r) => r.slug === route.regio)!;
  /*
    "Antwerpen stad", niet "Antwerpen" kaal. De stad en de provincie dragen
    dezelfde `name`; in een kop op déze pagina moet de lezer (en Google) zien
    welke van de twee bedoeld is. `kruimel` staat er precies daarvoor in
    `gemeente-slugs.ts`, en gemeenten zonder naamgenoot vallen terug op `name`.
  */
  const plaats = route.kruimel ?? route.name;

  /*
    De werven in déze gemeente, herkend aan de plaatsnaam in `locatie`
    ("Bouwdroging · Kontich"). Staat er niets, dan tonen we de sectie niet —
    liever geen sectie dan een lege belofte of een werf uit een andere streek.
  */
  const plaatsen = plaatsenVoor(gemeente);
  const plaatsenVanRoute = plaatsen;
  /*
    Hoogstens drie, want de rij is drie breed: een vierde kaart zette een halve
    rij leeg onder de andere drie. Wie er meer wil zien klikt door.

    Zijn er in deze gemeente zelf geen werven, dan vullen we aan met werven uit
    de provincie. Anders valt de hele sectie weg -- en dat deed ze, op
    Aartselaar, Kontich en nog een handvol gemeenten: de pagina miste dan niet
    alleen haar bewijs maar ook een beurt in het rood-wit-ritme, waardoor de
    FAQ en het formulier onderaan allebei rood uitvielen. Gevraagd op
    13-11-2026: "zijn referentieadres speelt niet echt een rol".

    De kop en de inleiding zeggen wél waar de werven liggen, want een werf in
    Lokeren onder de titel "werven die we in Aartselaar droogden" is gewoon
    onwaar.
  */
  const regioWerven = realisatieSlugsIn(route.regio)
    .map(getRealisatie)
    .filter((r): r is Realisatie => !!r);
  const eigenWerven = regioWerven.filter((r) => plaatsen.some((p) => r.locatie.includes(p)));
  const werven = [
    ...eigenWerven,
    ...regioWerven.filter((r) => !eigenWerven.includes(r)),
  ].slice(0, 3);
  /*
    Wat de kop boven de werven mag beloven. Alleen eigen werven: "in Berchem".
    Eentje eigen en de rest uit de provincie: "in Berchem en omgeving". Geen
    enkele: de provincie. Een werf in Boom onder de kop "werven die we in
    Aartselaar droogden" is gewoon onwaar, en dat is precies waar Google een
    gemeentepagina op afrekent.
  */
  const wervenUitGemeente = eigenWerven.length > 0 && werven.every((r) => eigenWerven.includes(r));
  const wervenRondGemeente = eigenWerven.length > 0 && !wervenUitGemeente;

  /* De buurgemeenten die zelf een pagina hebben; het cluster dat deze
     pagina's samen draagt, net als bij de provincies onderling. */
  const buren = gemeente.buren
    .map((slug) => GEMEENTE_ROUTES.find((g) => g.slug === slug))
    .filter((g): g is (typeof GEMEENTE_ROUTES)[number] => !!g);

  /* De andere gemeenten in dezelfde provincie, voor de lijst onderaan. */
  /*
    De streek waarin deze gemeente ligt, uit dezelfde lijst waarmee de
    provinciepagina haar gemeenten groepeert. Zo draagt "Waar we leveren" hier
    hetzelfde ontwerp én dezelfde namen als daar, zonder dat ze overgetypt
    worden. Staat de gemeente (nog) in geen enkele streek, dan valt de kaart
    weg en blijft alleen de lijst met de andere gemeenten over.
  */
  const streek = (STREKEN_PER_REGIO[route.regio] ?? []).find((st) =>
    st.gemeenten.some((naam) => naam === route.name || plaatsenVanRoute.includes(naam)),
  );
  const andere = gemeentenInRegio(route.regio).filter((g) => g.slug !== route.slug);
  /*
    De gemeenten met een eigen pagina die níét al in de streekkaart hierboven
    staan. Zonder deze filter stond een buurgemeente twee keer als link op
    dezelfde pagina -- één keer in haar streek en één keer in de lijst ernaast.
  */
  const elders = andere.filter(
    (g) => !(streek?.gemeenten ?? []).some((naam) => gemeenteVanPlaats(naam)?.slug === g.slug),
  );
  /*
    De vanafprijs komt uit `PRODUCTS` en wordt niet overgetypt: het portaal
    publiceert de dagprijzen en een bedrag in deze JSX zou vroeg of laat
    afwijken van wat de calculator aanrekent. Alleen bouwdrogers tellen mee --
    een ventilator is goedkoper, maar wie "vanaf" leest denkt aan de droger.
  */
  const drogers = Object.values(PRODUCTS).filter((p) => /ontvochtiger|droger/i.test(p.type));
  const goedkoopsteDag = euroInt(Math.min(...drogers.map((p) => p.day)));
  const chape = droogtermijnen("chape");
  const pleister = droogtermijnen("pleister");

  const priceIntroSection: Sectie = (kleur) => (
    <>
      {/* ================= WAT HET KOST ================= */}
      {/*
        De prijsvraag vóór de toestellen. Wie "bouwdroger huren <gemeente>"
        intikt, weet nog niet dat wij een berekend pakket leveren in plaats van
        een machine te verhuren: stond de toestellenrij vooraan, dan koos hij
        een toestel voor hij wist dat dat de vraag niet is.

        De cijfers zijn hier wél lokaal -- rijtijd, postcode -- want dat is het
        bestaansrecht van deze pagina naast die van de provincie.
      */}
      <section className={kleur}>
        <div className="wrap split omgekeerd">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick">Eén aanspreekpunt voor uw werf</span>
            <h2 className="sec">Wat kost een bouwdroger huren in {plaats}?</h2>
            <p className="lede">
              <b>De juiste prijs begint bij wat er moet drogen.</b> Voor een volledige woning,
              natte chape of pleisterwerk berekent u een compleet droogpakket; voor één ruimte
              volstaat een los toestel. Ons magazijn staat op {gemeente.rit.afstand} van{" "}
              {plaats}, {gemeente.rit.tijd}, en <b>die rit komt niet op uw factuur</b>.
            </p>
            <p className="lede">
              U huurt <b>geen los toestel op goed geluk, maar een droogpakket</b> berekend op het
              volume, het materiaal en de temperatuur van uw werf. <b>De prijs is vooraf bekend</b>{" "}
              en omvat de levering, de installatie, de vochtmeting bij de start en bij de
              oplevering en de ophaling. Niet droog binnen de berekende termijn? Dan loopt de huur
              volgens de voorwaarden <b>kosteloos verder</b>.
            </p>
            <dl className="feiten">
              <div>
                <dt>Eén losse bouwdroger, zelf geplaatst</dt>
                <dd>vanaf {goedkoopsteDag} per dag, excl. btw</dd>
              </div>
              <div>
                <dt>Droogpakket op maat van uw werf</dt>
                <dd>één vaste prijs, vooraf berekend</dd>
              </div>
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
              className="cut vervaagd"
              src="/vernast/man-zen-crop.webp"
              alt="Zorgeloos huren bij Vernast: één prijs vooraf, geen waarborg"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              style={{ width: "min(84%,380px)" }}
            />
            <div className="fbadge" style={{ bottom: "-16px", left: "0" }}>
              <span className="ic"><CheckIcon size={15} strokeWidth={3} /></span>
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
      <section className={kleur} id="droogpakketten">
        <div className="wrap">
          <div className="kop-rij">
            <div className="sec-head">
              <span className="kick">Uw complete droogpakket</span>
              <h2 className="sec">
                Bouwdroging in {plaats}, van plaatsing tot droog resultaat.
              </h2>
              <p className="lede">
                <b>U hoeft zelf geen toestellen te combineren.</b> Wij berekenen uw droogpakket op
                basis van de oppervlakte, het materiaal en de laagdikte. U ziet{" "}
                <b>vooraf de pakketprijs</b>, inclusief levering op postcode {route.postcode},
                installatie, voor- en nameting en ophaling.
              </p>
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
                <div className="ki"><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link className="btn" to={path} aria-label={label}>
                  Meer over deze droging
                  <ArrowRightIcon size={13} />
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="note schild">
            <span className="schild-ic" aria-hidden="true"><ShieldIcon size={22} strokeWidth={1.7} /></span>
            <div>
              <p>
                <b>100 % Drooggarantie inbegrepen.</b> Is het materiaal ondanks correcte
                droogomstandigheden niet droog binnen de berekende periode? Dan huurt u de
                toestellen kosteloos verder, volgens onze{" "}
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

  const bouwSection: Sectie = (kleur) => (
    <>
        {/* ================= WAARVOOR MEN HIER HUURT ================= */}
        <section className={kleur}>
          <div className="wrap">
            {/*
              De tekst links, een werffoto rechts. Dit was een kolom tekst over
              de volle breedte, en dat is precies de sectie waar iemand kijkt
              of wij zijn soort gebouw kennen -- een foto van dat soort werf
              zegt dat sneller dan de alinea eronder. Gevraagd op 13-11-2026.

              De foto komt van de provincie (`regio.beeld`) en niet per
              gemeente: er zijn vijf werffoto's en zeventien gemeentepagina's,
              en de bebouwing van een gemeente lijkt nu eenmaal op die van haar
              provincie. Zo staat er geen beeld bij dat elders vandaan komt.
            */}
            <div className="split">
              <div>
                <div className="sec-head">
                  <span className="kick">De bebouwing hier</span>
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
                  src={REGIO_BY_SLUG[route.regio].beeld.src}
                  alt={REGIO_BY_SLUG[route.regio].beeld.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </Reveal>
            </div>

            {/*
              De harde feiten als tabel, want dit is wat iemand die "bouwdroger
              huren <gemeente>" tikt meteen wil weten: hoe ver, hoe snel, wat
              kost de rit. Op de provinciepagina staat dit noodgedwongen vaag
              ("15 tot 40 minuten"); hier kan het exact.
            */}
            <dl className="feiten" style={{ marginTop: "28px", maxWidth: "860px" }}>
              <div>
                <dt>Vanaf ons magazijn</dt>
                <dd>
                  {gemeente.rit.afstand}, {gemeente.rit.tijd}
                </dd>
              </div>
              <div>
                <dt>Levering</dt>
                <dd>Binnen 24 uur, meestal de volgende werkdag</dd>
              </div>
              <div>
                <dt>Transportkost</dt>
                <dd>Geen, inbegrepen in het droogpakket</dd>
              </div>
              <div>
                <dt>Postcode</dt>
                <dd>{route.postcode}</dd>
              </div>
            </dl>

            <div className="note">
              <b>Welk toestel u nodig heeft, hangt af van uw ruimte en niet van uw gemeente.</b>{" "}
              Het volledige gamma met capaciteiten en dagprijzen staat op{" "}
              <Link to={provincie.path}>de pagina over {provincie.name}</Link>, of bereken uw
              opstelling meteen in de <Link to="/verhuur/calculator">droogcalculator</Link>. Liever
              zelf ophalen? Dat kan in <Link to="/afhalen">Aartselaar</Link>.
            </div>
          </div>
        </section>
    </>
  );

  const equipmentSection: Sectie = (kleur) => (
    <>
        {/* ================= TOESTELLEN ================= */}
        {/*
          Dezelfde opbouw als op de provinciepagina, maar de `waarom` onder
          elke kaart is per gemeente geschreven: in Antwerpen staat de Small
          er omdat hij door een draaitrap past, in Geel de TTK 650 omdat de
          volumes groter zijn. Dezelfde drie kaarten met dezelfde tekst op
          zeventien pagina's zou kopieerwerk zijn.

          Naam, foto en prijs komen uit `PRODUCTS` en dus uit het portaal;
          `toestelLabel()` geeft de verhuurnaam en niet de typecode van de
          fabrikant.
        */}
        <section className={kleur}>
          <div className="wrap">
            <div className="sec-head mid">
              <span className="kick">De toestellen</span>
              <h2 className="sec">Wat er in {route.name} het vaakst staat</h2>
            </div>
            <div className="prods">
              {gemeente.toestellen.map((item, i) => {
                const prod = PRODUCTS[item.key];
                if (!prod) return null;
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
                    <h3>{toestelLabel(item.key)}</h3>
                    <p className="pdesc" style={{ marginBottom: "18px" }}>{nadruk(item.waarom)}</p>
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
              Dit is wat hier het vaakst past, niet het volledige gamma.{" "}
              <Link to="/verhuur/calculator">Bereken hoeveel liter per dag uw ruimte nodig heeft</Link>{" "}
              of bekijk <Link to="/machines">alle toestellen</Link>.
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
              <h2 className="sec">Afhalen of leveren in {route.name}?</h2>
            </div>
            <div className="split32">
              <Reveal from="up" className="paneel">
                <div className="phead">
                  <span><TruckIcon size={19} /></span>
                  <h3>{gemeente.levering.kop}</h3>
                </div>
                <p>{nadruk(gemeente.levering.alinea)}</p>
                {/*
                  De feiten die op provincieniveau noodgedwongen vaag blijven
                  ("15 tot 40 minuten") kunnen hier exact: één gemeente, één
                  rijtijd. Dat is het eigenlijke bestaansrecht van deze pagina.
                */}
                <dl className="feiten">
                  <div>
                    <dt>Vanaf ons magazijn</dt>
                    <dd>
                      {gemeente.rit.afstand}, {gemeente.rit.tijd}
                    </dd>
                  </div>
                  <div>
                    <dt>Levertermijn</dt>
                    <dd>Binnen 24 uur, meestal de volgende werkdag</dd>
                  </div>
                  <div>
                    <dt>Transport en installatie</dt>
                    <dd>Inbegrepen in het droogpakket</dd>
                  </div>
                  <div>
                    <dt>Postcode</dt>
                    <dd>{route.postcode}</dd>
                  </div>
                </dl>
                <Link className="btn" to="/verhuur/calculator" style={{ marginTop: "22px" }}>
                  Reserveer met levering
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
                  Ma&ndash;Vr 08:00&ndash;17:00, op afspraak
                </p>
                <Link className="btn" to="/verhuur/afhalen" style={{ marginTop: "22px" }}>
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
        {/* ================= WERVEN HIER ================= */}
          <section className={kleur}>
            <div className="wrap">
              <div className="sec-head mid">
                <span className="kick">Uit de praktijk</span>
                <h2 className="sec">
                  Werven die we in{" "}
                  {wervenUitGemeente
                    ? plaats
                    : wervenRondGemeente
                      ? `${plaats} en omgeving`
                      : provincie.name}{" "}
                  droogden
                </h2>
                <p className="lede">
                  {wervenUitGemeente
                    ? werven.length === 1
                      ? "Eén project uit deze gemeente, met de foto's van de werf zelf."
                      : `${werven.length} projecten uit deze gemeente, elk met de foto's van de werf zelf.`
                    : wervenRondGemeente
                      ? `Werk uit ${plaats} zelf, aangevuld met werven elders in de provincie ${provincie.name}. Elk met de foto's van de werf, dezelfde ploeg en dezelfde meting bij de start en bij de oplevering.`
                      : `Werven uit de provincie ${provincie.name}, elk met de foto's van de werf zelf. Dezelfde ploeg, dezelfde meting bij de start en bij de oplevering.`}
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
                <Link to={provincie.path} style={{ fontWeight: 600 }}>
                  Alle werven in {provincie.name} bekijken
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
          lokaal verhaal omheen te verzinnen: een droogtijd hangt af van
          dikte, volume en temperatuur, niet van een postcode. Dat staat er
          dan ook letterlijk, zodat de pagina niets suggereert wat niet waar
          is. De cijfers komen uit de pakketcatalogus (`src/lib/droogtijden.ts`).
        */}
          <section className={kleur}>
            <div className="wrap">
              {/*
                De knop staat naast de kop, niet onder de tabel: wie zich
                afvraagt hoe lang het duurt, vraagt zich meteen daarna af
                waaróm een bouwdroger het sneller doet.
              */}
              <div className="kop-rij">
                <div className="sec-head">
                  <span className="kick">Hoe lang duurt het</span>
                  <h2 className="sec">Droogtijden met en zonder bouwdroger.</h2>
                  <p className="lede">
                    De huurtermijnen hieronder zijn die van onze droogpakketten, <b>dezelfde als
                    de Calculator aanrekent</b>. Ze gelden in {plaats} zoals overal: de droogtijd
                    hangt af van dikte, volume en temperatuur, <b>niet van uw postcode</b>.
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
                          <td className="snel"><b>{termijnLabel(rij)}</b></td>
                        </tr>
                      ))}
                      {pleister.map((rij) => (
                        <tr key={`pleister-${rij.dikte}`}>
                          <th scope="row">Pleisterwerk {rij.dikte} cm</th>
                          <td className="traag">{bereikLabel(natuurlijkePleisterWeken(rij.dikte))}</td>
                          <td className="snel"><b>{termijnLabel(rij)}</b></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="tblnote">
                &ldquo;Zonder droger&rdquo; is de vuistregel uit de bouwpraktijk, en daarom een
                bereik: de ondergrens geldt in een goed verluchte ruimte rond 20 &deg;C, de
                bovengrens op een koude, dichtgemaakte werf in de winter. Wat telt is
                de eindmeting: is het op de afgesproken datum niet droog, dan huurt u kosteloos
                verder.{" "}
                <Link to="/gids/hoe-lang-moet-chape-drogen">Hoe lang chape moet drogen</Link> legt
                het per situatie uit.
              </p>
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
              <span className="kick">Hoe het verloopt</span>
              <h2 className="sec">Van reservatie tot meetrapport in {route.name}.</h2>
              <p className="lede">
                <b>Vier stappen, en u hoeft er zelf maar één te zetten.</b> De rest doen wij, met
                een <b>vochtmeting als bewijs</b> in plaats van een datum op een kalender.
              </p>
            </div>
            <div className="flow">
              {verloop(route.name).map(({ Icon, title, desc }, i) => (
                <Reveal from="up" delay={i * 0.08} className="fl" key={title}>
                  <i>{`0${i + 1}`}</i>
                  <div className="fi"><Icon size={19} /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </Reveal>
              ))}
            </div>

            {/*
              Dezelfde slotnoot als op de provinciepagina: vier stappen zonder
              afsluiting lieten de sectie open eindigen, en dit is de plek waar
              de vraag "komen jullie ook bij mij?" hoort.
            */}
            <div className="note">
              <b>Wij leveren in heel België.</b> Buiten {provincie.name} rijden we ook, al telt de
              rit dan mee in de planning.
              {buren.length > 0 && (
                <>
                  {" "}
                  Bouwdroger huren in de buurt:{" "}
                  {buren.map((g, i) => (
                    <span key={g.slug}>
                      {i > 0 && (i === buren.length - 1 ? " of " : ", ")}
                      <Link to={g.path}>{g.name}</Link>
                    </span>
                  ))}
                  .
                </>
              )}{" "}
              Twijfelt u over het aantal toestellen, bel ons op{" "}
              <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a> of{" "}
              <Link to="/verhuur/calculator">bereken meteen uw pakket</Link>.
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
          staat er niet bij gelogen: ze zeggen hoe deze ploeg werkt. Een
          verzonnen review met een lokale naam eronder zou de enige manier zijn
          om dat anders te doen, en dat doen we niet.
        */}
        <section className={kleur}>
          <div className="wrap">
            <div className="sec-head mid">
              <span className="kick">Wat klanten zeggen</span>
              <h2 className="sec">Beoordeeld door wie ons al liet komen.</h2>
              <p className="lede">
                Beoordelingen van Vernast op Google en Solvari, <b>letterlijk overgenomen</b>. Over
                snelheid, afspraken nakomen en opvolging, precies wat een werf in {plaats} van ons
                vraagt.
              </p>
            </div>
            <div className="rvs">
              {eersteReviews(3).map((review, i) => (
                <Reveal from="up" delay={(i % 3) * 0.08} as="figure" className="rvc" key={review.name}>
                  <div className="rvc-top">
                    <div className="rvc-st" role="img" aria-label={`${review.rating} van de 5 sterren`}>
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
        plaatsnamen in drie kolommen, en de gemeenten met een eigen pagina als
        link. Hier stond eerst een notitie met een rij losse namen eronder --
        zonder kop, zonder uitleg, en op rood nauwelijks te lezen.

        De namen komen uit `provincie-gemeenten.ts`, dezelfde bron als de
        provinciepagina, dus ze lopen niet uiteen. De tweede kaart draagt wat
        daar niet in staat: de andere gemeenten van de provincie die wél een
        eigen pagina hebben. Zonder die links hangt elke gemeentepagina aan één
        link vanaf de homepagekaart, en dat is precies waarom de realisaties
        ooit niet geïndexeerd raakten (zie realisatie-regio.ts).
      */}
      <section className={kleur}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Waar we leveren</span>
            <h2 className="sec">
              {streek ? `${streek.naam}, en de rest van de provincie.` : `In ${plaats} en omstreken.`}
            </h2>
            <p className="lede">
              <b>Wij leveren in de hele gemeente</b>, tegen dezelfde prijs en binnen dezelfde 24
              uur. Staat uw gemeente er niet bij, bel ons dan gerust. Ook net over de grens van{" "}
              {provincie.name} rijden we.
            </p>
          </div>

          <div className="strk">
            {streek && (
              <Reveal from="up" as="article" className="strk-blok">
                <h3>{streek.naam}</h3>
                <p>{streek.kenmerk}</p>
                <ul className="strk-lijst">
                  {streek.gemeenten.map((naam) => {
                    const eigen = gemeenteVanPlaats(naam);
                    return (
                      <li key={naam}>
                        {eigen && eigen.slug !== route.slug ? (
                          <Link to={eigen.path}>{naam}</Link>
                        ) : (
                          <span>{naam}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            )}
            {elders.length > 0 && (
              <Reveal from="up" delay={0.08} as="article" className="strk-blok">
                <h3>Elders in {provincie.name}</h3>
                <p>
                  Deze gemeenten hebben een eigen pagina, met de rijtijd vanaf ons magazijn en de
                  bebouwing ter plaatse. De rest van de provincie bedienen we even goed.
                </p>
                <ul className="strk-lijst">
                  {elders.map((g) => (
                    <li key={g.slug}>
                      <Link to={g.path}>{g.name}</Link>
                    </li>
                  ))}
                  <li>
                    <Link to={provincie.path}>Hele provincie {provincie.name}</Link>
                  </li>
                </ul>
              </Reveal>
            )}
          </div>

          <div className="note">
            <b>De onderstreepte gemeenten hebben een eigen pagina</b> met de rijtijd vanaf ons
            magazijn, de bebouwing ter plaatse en de vragen die daar spelen. De rest bedienen we
            even goed. Hebt u een vraag, bel ons op{" "}
            <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a> of{" "}
            <Link to="/verhuur/calculator">bereken meteen uw pakket</Link>.
          </div>
        </div>
      </section>
    </>
  );

  const faqSection: Sectie = (kleur) => (
    <FaqBlok
      titel={`Wat klanten in ${plaats} ons vragen.`}
      vragen={gemeente.faq}
      sleutel="gemeente-faq"
      variant={kleur === "sr" ? "rood" : "wit"}
    >
      {/*
        Dezelfde rode plaat als op de provinciepagina, en om dezelfde reden
        binnen de FAQ-sectie: wie de vragen gelezen heeft is klaar om te
        boeken, en met een lege strook ertussen viel dat moment weg.
      */}
      <div className="manband">
        <div className="mb-t">
          <span className="mbk">Bouwdroger nodig in {plaats}</span>
          <h3>Bereken uw pakket, reserveer online, en morgen staat het er.</h3>
          <p>
            Geplaatst en ingesteld door onze technieker, met een vochtmeting bij de start en bij
            de oplevering. Liever eerst even overleggen? Bel ons gerust.
          </p>
          <div className="mb-cta">
            <Link className="btn btn-white glans" to="/verhuur/calculator">
              Bereken uw droogpakket
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <img
          className="mb-man breed tegenrand bijsnijden"
          src="/vernast/man-bestelwagen.webp"
          alt="Vernast technicus bij de bestelwagen met een bouwdroger"
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
    Zelfde volgorde als op de provinciepagina.
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

  return (
    <div className="v3c rg-page">
      <PageMeta
        title={gemeente.title}
        description={gemeente.description}
        path={route.path}
        jsonLd={[
          organizationSchema(),
          serviceSchema({
            name: gemeente.h1,
            description: gemeente.description,
            path: route.path,
            serviceType: "Bouwdroger verhuur",
            /*
              Een `City`, niet de `AdministrativeArea` van de provinciepagina:
              zo zegt de schema zelf dat deze pagina over de gemeente gaat en
              die andere over de provincie, in plaats van twee pagina's die
              hetzelfde gebied claimen.
            */
            areaServed: {
              "@type": "City",
              name: route.name,
              postalCode: route.postcode,
              containedInPlace: { "@type": "AdministrativeArea", name: provincie.name },
            },
          }),
          faqSchema(gemeente.faq.map((f) => ({ question: f.q, answer: f.a }))),
          /*
            Vier niveaus, met de provincie als echte tussenstap. Op de
            provinciepagina wijst niveau 2 nog naar `/#regio` — een anker, geen
            pagina — maar hier is er wél een bovenliggende pagina, en die hoort
            in het kruimelpad te staan.
          */
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Werkgebied", path: "/#regio" },
            { name: provincie.name, path: provincie.path },
            { name: route.kruimel ?? route.name, path: route.path },
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
                      <Link to={provincie.path}>{provincie.name}</Link>
                      <span aria-hidden="true"> /</span>
                    </li>
                    <li aria-current="page">{route.kruimel ?? route.name}</li>
                  </ol>
                </nav>
                <span className="kick met-ic">
                  <PinIcon size={13} /> {gemeente.kicker}
                </span>
                <h1>{gemeente.h1}</h1>
                {/*
                  Eén alinea in de hero, niet alle. De hero droeg de volledige
                  `intro` en werd daarmee een lap tekst waarin de H1 en de knop
                  verdronken — de eerste zin is wat iemand hier moet lezen, de
                  rest hoort in de body (zie de sectie hieronder).
                */}
                <p>{nadruk(gemeente.intro[0])}</p>
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
                    alt={`Werkgebied van Vernast, met ${route.name} in de provincie ${provincie.name}`}
                    width={1200}
                    height={980}
                    loading="lazy"
                    decoding="async"
                  />
                  <span
                    className={`speld${parseInt(provincie.pin.left, 10) > 55 ? " links" : ""}`}
                    style={{ left: provincie.pin.left, top: provincie.pin.top }}
                  >
                    <b>{route.name}</b>
                  </span>
                </div>
                <div className="fbadge" style={{ bottom: "40px", left: "-4%" }}>
                  <span className="ic">
                    <TruckIcon size={15} />
                  </span>
                  {/*
                    De badge leidt met wat in het pakket zit, niet met de
                    kilometers: de afstand is voor ons een planningsgegeven, voor
                    de bezoeker de vraag of ze op zijn factuur komt. Gevraagd op
                    13-11-2026. De rit staat er nog onder, want hij zegt hoe snel
                    we er kunnen zijn.
                  */}
                  <div>
                    Levering en plaatsing inbegrepen
                    <small>
                      {gemeente.rit.afstand} vanaf Aartselaar, {gemeente.rit.tijd}
                    </small>
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
          titel={`Een vraag over drogen in ${route.name}?`}
          lede="Beschrijf kort wat er moet drogen en hoe groot de ruimte is. U krijgt binnen één werkdag antwoord van een droogspecialist, met een voorstel voor het juiste pakket."
          onderwerpen={[
            `Advies voor een werf in ${route.name}`,
            "Levering en leverdatum",
            "Prijs van een droogpakket",
            "Waterschade, dit is dringend",
            "Iets anders",
          ]}
          placeholder={`Bv. renovatie in ${route.name}, chape vorige week geplaatst, wanneer kan de vloerder starten?`}
        />
      </main>

      <V3Footer />
    </div>
  );
};

export default GemeentePage;
