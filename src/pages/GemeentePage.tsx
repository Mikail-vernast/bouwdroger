import { Link, useLocation } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import { ArrowRightIcon, PhoneIcon, PinIcon, TruckIcon } from "@/components/home-v3/icons";
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { GEMEENTE_BY_PATH, GEMEENTE_ROUTES, gemeentenInRegio } from "@/data/gemeente-slugs";
import { GEMEENTE_BY_SLUG, plaatsenVoor, routeVan, type Gemeente } from "@/data/gemeenten";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { realisatieSlugsIn } from "@/data/realisatie-regio";
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

const GemeentePage = () => {
  const { pathname } = useLocation();
  const route = GEMEENTE_BY_PATH[pathname.replace(/\/$/, "")] ?? GEMEENTE_ROUTES[0];
  const gemeente: Gemeente = GEMEENTE_BY_SLUG[route.slug];
  const provincie = REGIO_ROUTES.find((r) => r.slug === route.regio)!;

  /*
    De werven in déze gemeente, herkend aan de plaatsnaam in `locatie`
    ("Bouwdroging · Kontich"). Staat er niets, dan tonen we de sectie niet —
    liever geen sectie dan een lege belofte of een werf uit een andere streek.
  */
  const plaatsen = plaatsenVoor(gemeente);
  const werven = realisatieSlugsIn(route.regio)
    .map(getRealisatie)
    .filter((r): r is Realisatie => !!r)
    .filter((r) => plaatsen.some((p) => r.locatie.includes(p)));

  /* De buurgemeenten die zelf een pagina hebben; het cluster dat deze
     pagina's samen draagt, net als bij de provincies onderling. */
  const buren = gemeente.buren
    .map((slug) => GEMEENTE_ROUTES.find((g) => g.slug === slug))
    .filter((g): g is (typeof GEMEENTE_ROUTES)[number] => !!g);

  /* De andere gemeenten in dezelfde provincie, voor de lijst onderaan. */
  const andere = gemeentenInRegio(route.regio).filter((g) => g.slug !== route.slug);

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
                <p>{gemeente.intro[0]}</p>
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
                  <div>
                    {gemeente.rit.afstand} vanaf ons magazijn
                    <small>Aartselaar &middot; {gemeente.rit.tijd}</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ================= WAARVOOR MEN HIER HUURT ================= */}
        <section className="sw">
          <div className="wrap">
            <div className="sec-head">
              <span className="kick">De bebouwing hier</span>
              <h2 className="sec">{gemeente.bouw.kop}</h2>
            </div>
            {[...gemeente.intro.slice(1), ...gemeente.bouw.alineas].map((alinea) => (
              <p className="lede" key={alinea} style={{ maxWidth: "860px" }}>
                {alinea}
              </p>
            ))}

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
                <dd>Geen &mdash; inbegrepen in het droogpakket</dd>
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

        {/* ================= WERVEN HIER ================= */}
        {werven.length > 0 && (
          <section className="sr">
            <div className="wrap">
              <div className="sec-head mid">
                <span className="kick">Uit de praktijk</span>
                <h2 className="sec">Werven die we in {route.name} droogden</h2>
                <p className="lede">
                  {werven.length === 1
                    ? "Eén project uit deze gemeente, met de foto's van de werf zelf."
                    : `${werven.length} projecten uit deze gemeente, elk met de foto's van de werf zelf.`}
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
        )}

        {/* ================= FAQ ================= */}
        <FaqBlok
          titel={`Wat klanten in ${route.name} ons vragen.`}
          vragen={gemeente.faq}
          sleutel="gemeente-faq"
          variant="wit"
        />

        {/* ================= BUURGEMEENTEN ================= */}
        {/*
          De linklijst die dit cluster bij elkaar houdt. Buurgemeenten eerst
          (die zoekt iemand het vaakst als zijn eigen gemeente er niet bij
          staat), dan de rest van de provincie, dan de provinciepagina zelf.
          Zonder deze lijst hangt elke gemeentepagina los aan één link vanaf de
          homepage, en dat is precies waarom de realisaties ooit niet
          geïndexeerd raakten — zie realisatie-regio.ts.
        */}
        <section className="sw">
          <div className="wrap">
            <div className="note">
              <b>Wij leveren in heel België.</b> Staat uw gemeente er niet bij, bel ons gerust op{" "}
              {CONTACT.phoneLocal} &mdash; ook net over de grens van {provincie.name} rijden we.
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
              )}
            </div>

            {andere.length > 0 && (
              <nav className="rg-links" aria-label={`Gemeenten in ${provincie.name}`}>
                <span>Ook in {provincie.name}:</span>
                {andere.map((g) => (
                  <Link key={g.slug} to={g.path}>
                    {g.name}
                  </Link>
                ))}
                <Link to={provincie.path}>Hele provincie {provincie.name}</Link>
              </nav>
            )}
          </div>
        </section>

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
