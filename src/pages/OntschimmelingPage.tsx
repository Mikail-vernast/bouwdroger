import type { CSSProperties } from "react";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import OzonForm from "@/components/ozon/OzonForm";
import { ArrowRightIcon, GoogleIcon, PhoneIcon, StarIcon } from "@/components/home-v3/icons";
import {
  KelderIcon,
  MijtIcon,
  NeusIcon,
  SchildIcon,
  SleutelIcon,
  SporenIcon,
  WaterschadeIcon,
} from "@/components/ozon/ozonIcons";
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { ONTSCHIMMELING_COPY } from "./OntschimmelingPage.copy";
import { eersteReviews } from "@/data/reviews";
import "@/styles/ozonbehandeling.css";

/**
 * Ontschimmeling — het verwijderen van de schimmel zelf.
 *
 * Zustepagina van /ozonbehandeling, en bewust een eigen URL. Het zijn twee
 * verschillende zoekvragen en twee verschillende momenten in hetzelfde
 * traject: wie "schimmel verwijderen" intikt staat vóór het werk, wie
 * "ozonbehandeling" intikt weet al wat ozon is en zoekt de afronding. Eén
 * pagina voor allebei zou op geen van beide scherp staan — zie de toelichting
 * bovenaan `src/data/seo.ts` over kannibalisatie.
 *
 * Ze delen de schil (`.oz-page`, `src/styles/ozonbehandeling.css`), het
 * boekingsformulier en de iconen, zodat de twee pagina's herkenbaar één familie
 * zijn. De copy is van deze pagina alleen: hier staat het handwerk centraal —
 * oorzaak zoeken, afschermen, verwijderen, behandelen — en is ozon het
 * sluitstuk in plaats van het onderwerp.
 *
 * Twee dingen bewust zo, net als bij de zusterpagina:
 *  - geen `opacity:0` als begintoestand in de HTML (de pagina wordt
 *    geprerenderd; een animatiebibliotheek met een beginstaat zet die letterlijk
 *    in `dist/ontschimmeling/index.html` en levert onzichtbare inhoud op voor
 *    precies de AI-antwoordmachines waarvoor we prerenderen),
 *  - de FAQ in `<details>`, zodat elk antwoord in de HTML staat.
 */

/* De FAQ staat één keer in de copy (`OntschimmelingPage.copy.tsx`) en voedt het
   scherm én de JSON-LD. Twee kopieën zouden uit de pas lopen, en dan markeert de
   schema iets wat de bezoeker niet ziet. */

/*
 * De zes spaken van de hero-animatie: elke spore op de kring krijgt een
 * O₃-deeltje dat ernaartoe vertrekt. Identiek aan /ozonbehandeling — het is
 * dezelfde behandeling, dus hetzelfde beeld.
 *
 * Vaste hoeken en vertragingen, geen `Math.random()`: deze pagina wordt
 * geprerenderd en een willekeurige waarde levert bij hydratatie andere HTML op
 * dan in dist.
 */
const SPAKEN: { id: string; style: CSSProperties }[] = [
  { id: "p1", style: { "--a": "-90deg", animationDelay: "0s" } as CSSProperties },
  { id: "p2", style: { "--a": "-30deg", animationDelay: "1s" } as CSSProperties },
  { id: "p3", style: { "--a": "30deg", animationDelay: "2s" } as CSSProperties },
  { id: "p4", style: { "--a": "90deg", animationDelay: "3s" } as CSSProperties },
  { id: "p5", style: { "--a": "150deg", animationDelay: "4s" } as CSSProperties },
  { id: "p6", style: { "--a": "210deg", animationDelay: "5s" } as CSSProperties },
];

/** De sporen op de muur in het afrondingsblok, en de geurslierten ertussen. */
const SPOREN: { id: string; style: CSSProperties }[] = [
  { id: "s1", style: { left: "20%", top: "40%", "--ss": "42px", "--sd": "9s", animationDelay: "0s" } as CSSProperties },
  { id: "s2", style: { left: "37%", top: "72%", "--ss": "34px", "--sd": "9s", animationDelay: "1.5s" } as CSSProperties },
  { id: "s3", style: { left: "55%", top: "26%", "--ss": "48px", "--sd": "9s", animationDelay: "3s" } as CSSProperties },
  { id: "s4", style: { left: "70%", top: "76%", "--ss": "30px", "--sd": "9s", animationDelay: "4.5s" } as CSSProperties },
  { id: "s5", style: { left: "86%", top: "34%", "--ss": "38px", "--sd": "9s", animationDelay: "6s" } as CSSProperties },
  { id: "s6", style: { left: "12%", top: "76%", "--ss": "34px", "--sd": "9s", animationDelay: "7.5s" } as CSSProperties },
];

const MOLECULEN: { id: string; style: CSSProperties }[] = [
  { id: "m1", style: { left: "8%", top: "18%", "--s": "58px", "--dur": "11s", "--dx": "26px", "--dy": "-20px", "--dr": "34deg" } as CSSProperties },
  { id: "m2", style: { left: "62%", top: "12%", "--s": "44px", "--dur": "9s", "--dx": "-22px", "--dy": "26px", "--dr": "-42deg" } as CSSProperties },
  { id: "m3", style: { left: "78%", top: "58%", "--s": "66px", "--dur": "13s", "--dx": "-30px", "--dy": "-24px", "--dr": "28deg" } as CSSProperties },
  { id: "m4", style: { left: "26%", top: "68%", "--s": "40px", "--dur": "10s", "--dx": "24px", "--dy": "-18px", "--dr": "-30deg" } as CSSProperties },
  { id: "m5", style: { left: "46%", top: "38%", "--s": "52px", "--dur": "12s", "--dx": "18px", "--dy": "22px", "--dr": "46deg" } as CSSProperties },
];

/** Waar we ontschimmelen — dezelfde zes situaties als de zusterpagina kent.
    De iconen, in de volgorde van `inzet` in de copy. */
const INZET_ICONEN: JSX.Element[] = [
  <SporenIcon key="sporen" />,
  <KelderIcon key="kelder" />,
  <WaterschadeIcon key="water" />,
  <NeusIcon key="neus" />,
  <MijtIcon key="mijt" />,
  <SleutelIcon key="sleutel" />,
];

const OntschimmelingPage = () => {
  const t = useCopy(ONTSCHIMMELING_COPY);
  const lp = useLokaalPad();
  return (
  <div className="oz-page">
    <PageMeta
      {...useSeo("ontschimmeling")}
      path={lp("/ontschimmeling")}
      jsonLd={[
        organizationSchema(),
        serviceSchema({
          name: t.schemaNaam,
          description: t.schemaBeschrijving,
          path: lp("/ontschimmeling"),
          serviceType: t.schemaType,
        }),
        faqSchema(t.faq),
        breadcrumbSchema([
          { name: t.kruimelHome, path: lp("/") },
          { name: t.kruimel, path: lp("/ontschimmeling") },
        ]),
      ]}
    />

    <V3Header lightAfter={460} />

    <main>
      {/* ================= HERO ================= */}
      <div className="oz-top">
        <section className="oz-hero">
          <div className="oz-wrap oz-hero-grid">
            <div className="oz-hero-copy">
              <span className="oz-kick">{t.heroKick}</span>
              <h1>{t.h1}</h1>
              <p>{t.heroTekst}</p>
              <div className="oz-hero-cta">
                <a className="ozbtn ozbtn-white" href="#boeken">
                  {t.plaatsbezoek} <ArrowRightIcon size={13} strokeWidth={2.6} />
                </a>
                <a className="ozbtn ozbtn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                  <PhoneIcon size={14} /> {CONTACT.phoneLocal}
                </a>
              </div>
              <ul className="oz-hero-usp">
                {t.heroUsp.map((usp) => (
                  <li key={usp}>{usp}</li>
                ))}
              </ul>
            </div>

            {/*
              Dezelfde hero-animatie als op /ozonbehandeling: de behandeling in
              het midden slaat pulsen uit in álle richtingen, en elke spore op
              de kring klapt dicht op het moment dat het deeltje bij hem
              aankomt. Twee pagina's over hetzelfde werk horen hetzelfde beeld
              te dragen.

              `aria-hidden` omdat het decor is: de tekst ernaast zegt hetzelfde,
              en een schermlezer heeft niets aan twaalf lege spans. Alles draait
              op CSS-keyframes, dus er staat geen begintoestand in de
              geprerenderde HTML.
            */}
            <div className="oz-hero-vis" aria-hidden="true">
              <div className="oz-orbit">
                <span className="oz-ring r1" />
                <span className="oz-ring r2" />
                <span className="oz-ring r3" />
                <span className="oz-core">O₃</span>
                {SPAKEN.map((spaak) => (
                  <span className="oz-spoke" key={spaak.id} style={spaak.style}>
                    <i className="oz-shot" />
                    <i className="oz-target" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= HERKENBAAR ================= */}
      <section className="oz-sec oz-light">
        <div className="oz-wrap">
          <Reveal className="oz-head">
            <span className="oz-kick red">{t.herkenKick}</span>
            <h2 className="oz-h2">{t.herkenH2}</h2>
            <p className="oz-lede">{t.herkenLede}</p>
          </Reveal>

          <div className="oz-three">
            {t.herkenKaarten.map((kaart, i) => (
              <Reveal className="oz-card" key={kaart.title} delay={i ? i * 0.08 : undefined}>
                <span className="oz-num">{`0${i + 1}`}</span>
                <h3>{kaart.title}</h3>
                <p>{kaart.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="oz-note" delay={0.1}>
            {t.noot(lp)}
          </Reveal>
        </div>
      </section>

      {/* ================= WAAROM NU ================= */}
      <section className="oz-sec oz-red">
        <div className="oz-wrap oz-split">
          <Reveal className="oz-split-copy">
            <span className="oz-kick onred">{t.waaromKick}</span>
            <h2 className="oz-h2">{t.waaromH2}</h2>
            <p className="oz-lede">{t.waaromLede}</p>
            <p className="oz-body">{t.waaromBody}</p>
          </Reveal>

          <Reveal className="oz-split-vis" delay={0.1}>
            <dl className="oz-specs oz-specs-card">
              {t.aanpak.map(([label, waarde]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{waarde}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ================= DE AANPAK ================= */}
      <section className="oz-sec oz-light">
        <div className="oz-wrap">
          <Reveal className="oz-head">
            <span className="oz-kick red">{t.aanpakKick}</span>
            <h2 className="oz-h2">{t.aanpakH2}</h2>
            <p className="oz-lede">{t.aanpakLede}</p>
          </Reveal>

          <div className="oz-four">
            {t.stappen.map((stap, i) => (
              <Reveal className="oz-safe-card" key={stap.title} delay={i * 0.06}>
                <span className="oz-num">{`0${i + 1}`}</span>
                <b>{stap.title}</b>
                <p>{stap.text}</p>
              </Reveal>
            ))}
          </div>

          {/*
            Dezelfde animatie als op /ozonbehandeling, hier op de plek waar ze
            hoort: stap vier. De schimmelmuur maakt de praktijksituatie
            zichtbaar, een O₃-deeltje vliegt op een spore af, en pas als het
            raakt klapt de spore dicht. De legende eronder zegt wie wie is.

            De posities staan hard in de lijsten bovenaan en niet op
            `Math.random()`: deze pagina wordt geprerenderd, en een willekeurige
            waarde zou bij hydratatie niet overeenkomen met de HTML.
          */}
          <Reveal className="oz-stage-wrap" delay={0.08}>
            <div
              className="oz-stage"
              aria-label={t.stageLabel}
            >
              <span className="oz-glow" aria-hidden="true" />

              {MOLECULEN.map((mol) => (
                <span className="oz-mol3" key={mol.id} style={mol.style} aria-hidden="true">
                  <i className="oz-bond b1" />
                  <i className="oz-bond b2" />
                  <i className="oz-at a1" />
                  <i className="oz-at a2" />
                  <i className="oz-at a3" />
                </span>
              ))}

              {SPOREN.map((spore) => (
                <span className="oz-spore" key={spore.id} style={spore.style} aria-hidden="true">
                  <i className="oz-spore-body" />
                  <i className="oz-zap" />
                </span>
              ))}
            </div>

            <div className="oz-legend">
              <span className="oz-lg o3">
                <i /> <b>O₃</b> {t.legO3}
              </span>
              <span className="oz-lg sp">
                <i /> {t.legSpore}
              </span>
            </div>
          </Reveal>

          <Reveal className="oz-after" delay={0.12}>
            <p>{t.na(lp)}</p>
          </Reveal>

          <Reveal className="oz-band" delay={0.1}>
            <div className="oz-band-t">
              <span className="oz-kick onred">{t.bandKick}</span>
              <h3>{t.bandH3}</h3>
              <p>{t.band(lp)}</p>
              <a className="ozbtn ozbtn-white" href="#boeken">
                {t.plaatsbezoek} <ArrowRightIcon size={13} strokeWidth={2.6} />
              </a>
            </div>
            <img
              className="oz-band-man"
              src="/vernast/man-spuitbus.webp"
              alt={t.bandAlt}
              width={700}
              height={900}
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* ================= WAARVOOR ================= */}
      <section className="oz-sec oz-red">
        <div className="oz-wrap">
          <Reveal className="oz-head">
            <span className="oz-kick onred">{t.inzetKick}</span>
            <h2 className="oz-h2">{t.inzetH2}</h2>
            <p className="oz-lede">{t.inzetLede}</p>
          </Reveal>

          <div className="oz-grid6">
            {t.inzet.map((item, i) => (
              <Reveal className="oz-use" key={item.title} delay={(i % 3) * 0.07}>
                <span className="oz-use-ic">{INZET_ICONEN[i]}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VEILIG & VERANTWOORD ================= */}
      <section className="oz-sec oz-light">
        <div className="oz-wrap">
          <Reveal className="oz-head oz-head-mid">
            <span className="oz-kick red">
              <SchildIcon /> {t.veiligKick}
            </span>
            <h2 className="oz-h2">{t.veiligH2}</h2>
            <p className="oz-lede">{t.veiligLede}</p>
          </Reveal>
          <div className="oz-four">
            {t.veiligKaarten.map((kaart, i) => (
              <Reveal className="oz-safe-card" key={kaart.title} delay={i ? i * 0.06 : undefined}>
                <b>{kaart.title}</b>
                <p>{kaart.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="oz-sec oz-red">
        <div className="oz-wrap">
          <Reveal className="oz-head oz-head-mid">
            <span className="oz-kick onred">{t.reviewKick}</span>
            <h2 className="oz-h2">{t.reviewH2}</h2>
            <p className="oz-lede">{t.reviewLede}</p>
          </Reveal>
          <div className="oz-reviews">
            {eersteReviews(3).map((review, i) => (
              <Reveal className="oz-review" key={review.name} delay={(i % 3) * 0.07}>
                <div className="oz-review-stars" aria-label={t.sterren(review.rating)}>
                  {Array.from({ length: review.rating }, (_, star) => (
                    <StarIcon key={star} size={14} />
                  ))}
                </div>
                <p>{review.text}</p>
                <div className="oz-review-by">
                  <span className="oz-review-ini" aria-hidden="true">
                    {review.initials}
                  </span>
                  <span>
                    <b>{review.name}</b>
                    <small>
                      {review.source === "Google" && <GoogleIcon size={12} />} {review.source},{" "}
                      {t.datum(review.date)}
                    </small>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="oz-sec oz-light" id="faq">
        <div className="oz-wrap faq-grid">
          <div className="faq-side">
            <span className="oz-kick red">{t.faqKick}</span>
            <h2 className="oz-h2">{t.faqH2}</h2>
            <div className="faq-help">
              <h3>{t.faqHelpH3}</h3>
              <p>{t.faqHelp}</p>
              <div className="fh-btns">
                <a className="fh-call" href={`tel:${CONTACT.phoneE164}`}>
                  <PhoneIcon /> {t.bel} {CONTACT.phoneLocal}
                </a>
                <a className="fh-form" href="#boeken">
                  {t.online}
                </a>
              </div>
            </div>
          </div>

          <div className="faq-list">
            {t.faq.map((item, i) => (
              <details className="q" key={item.question} open={i === 0}>
                <summary>
                  {item.question} <span className="pl">+</span>
                </summary>
                <div className="a">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOEKEN ================= */}
      <section className="oz-sec oz-book">
        <div className="oz-wrap oz-book-grid">
          <Reveal className="oz-book-l">
            <span className="oz-kick onred">{t.boekKick}</span>
            <h2 className="oz-h2">{t.boekH2}</h2>
            <p>{t.boekTekst}</p>
            <ul className="oz-book-usp">
              {t.boekUsp.map((usp) => (
                <li key={usp}>{usp}</li>
              ))}
            </ul>
            <p className="oz-book-call">
              {t.liever}{" "}
              <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>,{" "}
              {t.uren(CONTACT.openingHours)}
            </p>
          </Reveal>
          <div className="oz-book-r">
            <OzonForm
              dienst="ontschimmeling"
              situatieStandaard="schimmel"
              verstuurLabel={t.verstuurLabel}
            />
          </div>
        </div>
      </section>
    </main>

    <V3Footer />
  </div>
  );
};

export default OntschimmelingPage;
