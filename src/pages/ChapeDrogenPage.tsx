import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import Pakketkaarten from "@/components/content/Pakketkaarten";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import { ArrowRightIcon, CalendarCheckIcon, CheckIcon, HouseIcon, PhoneIcon } from "@/components/home-v3/icons";
import { GaugeIcon, LayersIcon, ThermoIcon, WindIcon, XIcon } from "@/components/content/icons";
import { useSeo } from "@/data/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { euro } from "@/data/tarieflijst";
import { EXTRAS, toestelPad } from "@/data/verhuur";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { CONTACT } from "@/lib/site";
import { useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { CHAPE, COPY } from "./ChapeDrogenPage.copy";
import "@/styles/v3-content.css";

/**
 * Chape drogen als eigen dienstpagina, naast /pleisterwerk-drogen en het
 * combipakket op /nieuwbouw-drogen.
 *
 * Waarom gesplitst: "chape drogen" en "pleisterwerk drogen" zijn twee
 * zoekvragen van twee verschillende mensen. De bouwheer die zijn vloerlegger
 * ziet wachten, zoekt niet op pleisterwerk, en omgekeerd. Eén pagina die
 * allebei behandelde, stond voor allebei half.
 *
 * Het verschil met de gids: deze pagina verkoopt de dienst (wat wij doen, wat
 * het pakket bevat, wanneer wij komen), de gids legt de materie uit
 * (vuistregels per centimeter, anhydriet, opstookprotocol, CM-meting). De
 * droogtijdtabel staat hier als huurtermijn van het pakket, niet als
 * droogtijdenles; voor dat laatste verwijst de pagina door.
 */

/** Het ondertekende vochtrapport is een betalende optie, geen standaard. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");

/*
  De droging zoals ze bij de klant verloopt, in de volgorde waarin hij ze
  meemaakt. Niet wat een bouwdroger technisch doet: dat staat op
  /hoe-drogen-werkt, en het herhalen zou deze pagina met die pagina laten
  botsen op dezelfde zoekvraag. De teksten staan in de copy, de iconen hier,
  in dezelfde volgorde.
*/
const STAP_ICONEN = [CalendarCheckIcon, GaugeIcon, HouseIcon, WindIcon, ThermoIcon, LayersIcon];

/* Drie werven waar chape moest drogen. `getRealisatie` geeft undefined zodra
   een dossier uit de lijst verdwijnt; die valt dan stil weg. */
const REFERENTIES = ["chape-pleisterwerk-drogen-hasselt", "bouwvocht-drogen-wintam", "nieuwbouw-drogen-putte"]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r);

/* De doelen van "verder lezen", in de volgorde van de groepen en links in de copy. */
const LEES_DOELEN: { to: string; toestel?: string }[][] = [
  [
    { to: "/gids/hoe-lang-moet-chape-drogen" },
    { to: "/hoe-drogen-werkt" },
    { to: "/drooggarantie" },
    { to: "/nieuwbouw-drogen" },
  ],
  [
    { to: toestelPad("ttk350"), toestel: "ttk350" },
    { to: toestelPad("radiaal2250"), toestel: "radiaal2250" },
    { to: toestelPad("teddh30"), toestel: "teddh30" },
  ],
  [{ to: "/verhuur/simulator" }, { to: "/prijzen" }, { to: "/levering" }, { to: "/afhalen" }],
];

const ChapeDrogenPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const seo = useSeo("chapeDrogen");

  /* Nederlands toont het rapport zoals altijd excl. btw; Frans en Engels volgen de keuze
     particulier/bedrijf uit de keuzepopup. */
  const rapportPrijs = RAPPORT
    ? taal === "nl"
      ? `${euro(RAPPORT.price)} excl. btw`
      : `${toon(RAPPORT.price).tekst} ${toon(RAPPORT.price).label}`
    : null;

  const verderLezen: LeesGroep[] = t.verderLezen.map((g, gi) => ({
    kop: g.kop,
    links: g.links.map((l, li) => ({
      ...l,
      to: lp(LEES_DOELEN[gi][li].to),
      toestel: LEES_DOELEN[gi][li].toestel,
    })),
  }));

  return (
  <div className="v3c nb-page">
    <PageMeta
      {...seo}
      jsonLd={[
        serviceSchema({
          name: t.schemaNaam,
          description: t.schemaBeschrijving,
          path: lp("/chape-drogen"),
          serviceType: t.schemaType,
        }),
        faqSchema(t.faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema([
          { name: t.home, path: lp("/") },
          { name: t.schemaNaam, path: lp("/chape-drogen") },
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
            <span className="kick">{t.heroKicker}</span>
            <h1>{t.heroH1}</h1>
            <p>{t.heroP}</p>
            <div className="hcta">
              <Link className="btn btn-white" to={lp("/verhuur/simulator")}>
                {t.ctaPakket}
                <ArrowRightIcon />
              </Link>
              <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {CONTACT.phoneLocal}
              </a>
            </div>
          </div>
          <div className="hero-vis">
            <img
              className="framed"
              style={{ objectPosition: "50% 62%" }}
              src="/vernast/case-chape-v2.webp"
              alt={t.heroAlt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <div className="fbadge" style={{ bottom: "60px", left: "-6%" }}>
              <span className="ic"><CheckIcon size={15} /></span>
              <div>
                {t.badge}
                <small>{t.badgeSub}</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* ================= ZONDER / MET ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.vsKicker}</span>
          <h2 className="sec">{t.vsH2}</h2>
          <p className="lede">{t.vsLede}</p>
        </div>
        <div className="vs">
          <Reveal from="up" className="vscard">
            <div className="vshead">
              <span><XIcon size={17} /></span>
              <h3>{t.vsZonder}</h3>
            </div>
            <ul>
              {t.zonder.map((item) => (
                <li key={item}>
                  <XIcon size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="up" delay={0.08} className="vscard goed">
            <div className="vshead">
              <span><CheckIcon size={17} strokeWidth={3} /></span>
              <h3>{t.vsMet}</h3>
            </div>
            <ul>
              {t.met.map((item) => (
                <li key={item}>
                  <CheckIcon size={14} strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ================= HUURTERMIJN PER DIKTE ================= */}
    <section className="sr" id="termijnen">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.tKicker}</span>
          <h2 className="sec">{t.tH2}</h2>
          <p className="lede">{t.tLede}</p>
        </div>

        <div className="tblwrap">
          <div className="tblscroll">
            <table className="tbl">
              <caption className="sr-only">{t.tCaption}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.tKolDikte}</th>
                  <th scope="col">{t.tKolMet}</th>
                  <th scope="col">{t.tKolZonder}</th>
                </tr>
              </thead>
              <tbody>
                {CHAPE.map((r) => (
                  <tr key={r.dikte}>
                    <th scope="row">{r.dikte} cm</th>
                    <td>{t.termijn(r)}</td>
                    <td>{t.natuurlijk(r.dikte)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="tblnote">{t.tNote(lp)}</p>
      </div>
    </section>

    {/* ================= ZO VERLOOPT HET ================= */}
    <section className="sw" id="werkwijze">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.wKicker}</span>
          <h2 className="sec">{t.wH2}</h2>
          <p className="lede">{t.wLede}</p>
        </div>
        <div className="stapkaarten">
          {t.stappen.map(({ title, desc }, i) => {
            const Icon = STAP_ICONEN[i];
            return (
              <Reveal from="up" delay={(i % 3) * 0.08} className="stk" key={title}>
                <span className="stkic"><Icon size={21} /></span>
                <span className="stknr">{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* ================= TOESTELLEN ================= */}
    <section className="sr" id="pakketten">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">{t.pKicker}</span>
          <h2 className="sec">{t.pH2}</h2>
          <p className="lede">{t.pLede}</p>
        </div>
        <Pakketkaarten />
      </div>
    </section>

    {/* ================= VRIJGAVE VAN DE VLOER ================= */}
    <section className="sw" id="meting">
      <div className="wrap split">
        <div>
          <span className="kick">{t.mKicker}</span>
          <h2 className="sec">{t.mH2}</h2>
          <p className="lede">{t.mP1}</p>
          <p className="lede">{t.mP2(rapportPrijs)}</p>
          <p className="lede">{t.mP3(lp)}</p>
          <div className="chips">
            {t.chips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
        <div className="split-vis">
          <img
            className="chape-vloerderfoto"
            src="/vernast/chape-vloerder-tegelen.webp"
            alt={t.mAlt}
            width={1448}
            height={1086}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <FaqBlok
      titel={t.faqTitel}
      vragen={t.faqs}
      sleutel="chape-faq"
    />

    {/* ================= REFERENTIES ================= */}
    <section className="sw" id="referenties">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">{t.rKicker}</span>
          <h2 className="sec">{t.rH2}</h2>
          <p className="lede">{t.rLede}</p>
        </div>
        <div className="refs">
          {REFERENTIES.map((r, i) => (
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
          <Link to={lp("/realisaties?soort=bouwvocht")} style={{ fontWeight: 600 }}>
            {t.rAlle}
          </Link>
        </p>
        <div className="manband">
          <div className="mb-t">
            <span className="mbk">{t.mbKicker}</span>
            <h3>{t.mbH3}</h3>
            <p>{t.mbP}</p>
            <div className="mb-cta">
              <Link className="btn btn-white" to={lp("/verhuur/simulator")}>
                {t.ctaPakket}
                <ArrowRightIcon />
              </Link>
              <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {CONTACT.phoneLocal}
              </a>
            </div>
          </div>
          <img
            className="mb-man"
            src="/vernast/man-klembord-pen.webp"
            alt={t.mbAlt}
            width={600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <VerderLezen
      titel={t.verderLezenTitel}
      kicker={t.verderLezenKicker}
      groepen={verderLezen}
      achtergrond="sr"
    />

    <ContactBlok
      kicker={t.cKicker}
      titel={t.cTitel}
      lede={t.cLede}
      onderwerpen={t.cOnderwerpen}
      placeholder={t.cPlaceholder}
      achtergrond="wit"
    />

    </main>

    <V3Footer />
  </div>
  );
};

export default ChapeDrogenPage;
