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
import { CHAPE, COPY, PLEISTER } from "./NieuwbouwPage.copy";
import "@/styles/v3-content.css";

/**
 * Chape en pleisterwerk drogen. Stond tot november 2026 op de oude
 * shadcn-schil met de `Navbar`; nu in de v3-vormtaal van /hoe-drogen-werkt,
 * met <V3Header> en de gedeelde opmaak uit src/styles/v3-content.css.
 *
 * De route heet sinds 12-11-2026 /nieuwbouw-drogen. /nieuwbouw noemde de
 * bouwfase en niet de dienst: in een zoekresultaat stond onder een titel over
 * chape en pleisterwerk een URL waar dat woord niet in voorkwam. De oude URL
 * leidt permanent door (vercel.json); de redirect blijft nodig omdat alle
 * Shopify-redirects voor chape- en pleisterpakketten hier uitkomen.
 *
 * De inhoud bleef: de twee droogtijdtabellen zijn de reden dat mensen hier
 * binnenkomen ("hoe lang chape drogen", "droogtijd pleisterwerk"), en ze
 * blijven dus echte <table>'s met een koprij — zodat een zoekmachine of
 * AI-assistent dikte en termijn aan elkaar kan koppelen.
 */

/** Het ondertekende vochtrapport is een betalende optie, geen standaard. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");

/*
  Wat de droogtijd bepaalt, in één reeks van zes.

  Hier stonden twee rode secties onder elkaar in de pagina: "Drie dingen die de
  droogtijd echt bepalen" en, drie secties verder, "Drie dingen die dagen
  schelen" — dezelfde vorm, dezelfde kaarten, en deels dezelfde inhoud:
  ventileren en verwarmen kwamen in allebei terug. Wie de pagina afscrolde,
  las twee keer hetzelfde met een ander opschrift.

  Nu is het één genummerde reeks in de vorm van "de eerste 48 uur" op
  /waterschade, in de volgorde waarin een bouwheer ze nodig heeft: van het
  moment waarop hij mag beginnen tot de meting die beslist of hij klaar is.

  De teksten staan in de copy (`praktijk`), de iconen hier, in dezelfde volgorde.
*/
const PRAKTIJK_ICONEN = [CalendarCheckIcon, HouseIcon, WindIcon, ThermoIcon, GaugeIcon, LayersIcon];

/*
  Twee antwoorden zijn hier rechtgezet. "Hoe lang moet mijn chape drogen"
  zei 4 tot 8 weken (zie hierboven), en "de ideale luchtvochtigheid voor
  vloerders" was "onder 2 %" — dat haalt luchtvochtigheid en restvocht in de
  chape door elkaar, en een vaste grens zonder soort chape of vloer is sowieso
  niet te geven. De vloerlegger bepaalt die grens; wij noemen er geen.
  Ze staan nu in NieuwbouwPage.copy.tsx.
*/

/**
 * De werven die we onder de vragen tonen: drie nieuwbouwdossiers waarin
 * pleister- en chapewerk moest drogen. `getRealisatie` kan `undefined` geven
 * wanneer een dossier uit de lijst verdwijnt; die valt dan stil weg in plaats
 * van de pagina te breken.
 */
const REFERENTIES = ["chape-pleisterwerk-drogen-hasselt", "nieuwbouw-drogen-kontich", "nieuwbouw-drogen-putte"]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r);

/*
  De doelen van "verder lezen", in de volgorde van de groepen en links in de copy.

  Hier stond "Zo pakten we het aan" met dezelfde drie realisaties als
  `REFERENTIES`. Die staan nu met hun foto onder de vragen; een tweede,
  kale linklijst naar diezelfde drie pagina's voegde niets toe.
*/
const LEES_DOELEN: { to: string; toestel?: string }[][] = [
  [
    { to: "/gids/hoe-lang-moet-chape-drogen" },
    { to: "/gids/hoe-lang-moet-pleisterwerk-drogen" },
    { to: "/hoe-drogen-werkt" },
    { to: "/drooggarantie" },
  ],
  [
    { to: toestelPad("ttk350"), toestel: "ttk350" },
    { to: toestelPad("radiaal2250"), toestel: "radiaal2250" },
    { to: toestelPad("teddh30"), toestel: "teddh30" },
  ],
  [
    { to: "/verhuur/calculator" },
    { to: "/prijzen" },
    { to: "/bouwdroger-huren-antwerpen" },
    { to: "/bouwdroger-huren-limburg" },
  ],
];

const NieuwbouwPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const seo = useSeo("nieuwbouw");

  /* Nederlands toont het rapport zoals altijd excl. btw; Frans volgt de keuze
     particulier/bedrijf uit de keuzepopup. */
  const rapportPrijs = RAPPORT
    ? taal === "nl"
      ? `${euro(RAPPORT.price)} excl. btw`
      : `${toon(RAPPORT.price).tekst} ${toon(RAPPORT.price).label}`
    : null;
  const faqs = t.faqs(rapportPrijs);

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
          path: lp("/nieuwbouw-drogen"),
          serviceType: t.schemaType,
        }),
        /*
          De vragen onderaan deze pagina, ook machineleesbaar. Zelfde tekst
          als wat zichtbaar staat, dus schema en pagina blijven gelijk.
        */
        faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema([
          { name: t.home, path: lp("/") },
          { name: t.schemaNaam, path: lp("/nieuwbouw-drogen") },
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
              <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
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

    {/*
      DROOGTIJDEN — de vraag waarmee mensen hier binnenkomen ("hoe lang chape
      drogen", "droogtijd pleisterwerk"). Een echte <table>, zodat een
      zoekmachine of AI-assistent de dikte en de termijn aan elkaar kan
      koppelen. De kolom "met bouwdroger" is de catalogus; de kolom "zonder" is
      uitdrukkelijk een vuistregel.
    */}
    <section className="sr" id="droogtijden">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.dKicker}</span>
          <h2 className="sec">{t.dH2}</h2>
          <p className="lede">{t.dLede1}</p>
          <p className="lede">{t.dLede2}</p>
        </div>

        <div className="tblwrap">
          <div className="tblscroll">
            <table className="tbl">
              <caption className="sr-only">{t.dCaption}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.dKolDikte}</th>
                  <th scope="col">{t.dKolMet}</th>
                  <th scope="col">{t.dKolZonder}</th>
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
        <p className="tblnote">{t.dNote}</p>
      </div>
    </section>

    {/* ================= PLEISTERWERK ================= */}
    <section className="sw">
      <div className="wrap split">
        <div>
          <span className="kick">{t.plKicker}</span>
          <h2 className="sec">{t.plH2}</h2>
          <p className="lede">{t.plP1}</p>
          <p className="lede">{t.plP2(lp)}</p>
          <div className="chips">
            {t.plChips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
        <div className="split-vis" style={{ alignItems: "stretch", display: "block" }}>
          <div className="tblwrap" style={{ marginTop: 0 }}>
            <div className="tblscroll">
              <table className="tbl">
                <caption className="sr-only">{t.plCaption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.plKolDikte}</th>
                    <th scope="col">{t.plKolTermijn}</th>
                  </tr>
                </thead>
                <tbody>
                  {PLEISTER.map((r) => (
                    <tr key={r.dikte}>
                      <th scope="row">{r.dikte} cm</th>
                      <td>{t.termijn(r)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="tblnote">{t.plNote}</p>
        </div>
      </div>
    </section>

    {/* ================= PAKKETTEN ================= */}
    <section className="sr" id="pakketten">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">{t.pKicker}</span>
          <h2 className="sec">{t.pH2}</h2>
          <p className="lede">{t.pLede}</p>
        </div>
        <Pakketkaarten />
        <div className="note">{t.pNote(lp)}</div>
      </div>
    </section>

    {/*
      IN DE PRAKTIJK — zes genummerde kaarten in de vorm van "de eerste 48 uur"
      op /waterschade (`.stapkaarten`/`.stk`). Deze sectie staat vlak boven de
      vragen omdat ze dezelfde rol speelt: wie tot hier las, weet wat het kost
      en hoe lang het duurt, en wil nu weten wat hij zelf moet doen.
    */}
    <section className="sw" id="praktijk">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.prKicker}</span>
          <h2 className="sec">{t.prH2}</h2>
          <p className="lede">{t.prLede}</p>
        </div>
        <div className="stapkaarten">
          {t.praktijk.map(({ title, desc }, i) => {
            const Icon = PRAKTIJK_ICONEN[i];
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

    <FaqBlok
      titel={t.faqTitel}
      vragen={faqs}
      sleutel="nb-faq"
    />

    {/*
      REFERENTIES — onder de vragen, in het wit.

      De pagina wisselde rood en wit af tot aan de vragen en liep daarna leeg op
      een linklijst. Drie werven met de foto van de werf zelf bewijzen wat de
      tekst hierboven belooft, en de slotplaat staat in dezelfde witte sectie:
      wie de vragen gelezen heeft en de werven gezien heeft, is klaar om te
      rekenen. Een lege strook ertussen brak dat moment.
    */}
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
              <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
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
      /*
        Wit, niet rood: de sectie erboven ("verder lezen") is rood, en twee
        rode blokken op elkaar laten de afwisseling van de hele pagina
        stilvallen.
      */
      achtergrond="wit"
    />

    </main>

    <V3Footer />
  </div>
  );
};

export default NieuwbouwPage;
