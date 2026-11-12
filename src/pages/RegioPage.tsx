import { Link, useLocation } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import ContactBlok from "@/components/content/ContactBlok";
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
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { REGIO_BY_PATH, REGIO_ROUTES } from "@/data/regio-slugs";
import { REGIO_BY_SLUG, realisatiesVoor, type Regio } from "@/data/regios";
import { PRODUCTS, productImageAlt } from "@/data/verhuur";
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

  return (
    <div className="v3c rg-page">
      <PageMeta
        title={regio.title}
        description={regio.description}
        path={regio.path}
        jsonLd={[
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
                    to={`/verhuur/toestel/${item.key}`}
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
              <p className="lede">{regio.realisaties.intro}</p>
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
      <section className="sw">
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">Veelgestelde vragen</span>
            <h2 className="sec">Bouwdrogers huren in {regio.name}.</h2>
          </div>
          <div className="faqs">
            {regio.faq.map((item, i) => (
              <Reveal from="up" delay={(i % 2) * 0.06} as="dl" className="faq" key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </Reveal>
            ))}
          </div>

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
        </div>
      </section>

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
              snelheid, afspraken nakomen en opvolging — precies wat een werf in {regio.name}
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
