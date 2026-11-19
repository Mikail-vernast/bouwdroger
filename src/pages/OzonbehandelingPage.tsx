import type { CSSProperties } from "react";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import OzonForm from "@/components/ozon/OzonForm";
import { ArrowRightIcon, GoogleIcon, PhoneIcon, StarIcon } from "@/components/home-v3/icons";
import {
  KelderIcon,
  SchildIcon,
  MijtIcon,
  NeusIcon,
  SleutelIcon,
  SporenIcon,
  WaterschadeIcon,
} from "@/components/ozon/ozonIcons";
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { OZON_COPY } from "./OzonbehandelingPage.copy";
import { eersteReviews } from "@/data/reviews";
import "@/styles/ozonbehandeling.css";

/**
 * Ozonbehandeling — de ontschimmelingsdienst, met een eigen pagina.
 *
 * De inhoud komt van de zustersite (vernast-vochtbestrijding.be/ozonbehandeling),
 * maar niet als kopie: daar is ozon het sluitstuk van een vochtsanering, hier is
 * het het sluitstuk van een droging. Deze pagina legt daarom telkens de link naar
 * wat deze site wél doet — drogen na waterschade, een vochtige kelder, de
 * drooggarantie — in plaats van naar muurinjectie en kelderbekuiping.
 *
 * De vormtaal is die van de v3-schil (rood #C8102E, maroon, Plus Jakarta Sans):
 * de zustersite gebruikt blauw/groen voor de O₃-animaties, en dat hoort niet op
 * een pagina met deze header en footer. Alle animaties draaien hier op CSS in
 * dezelfde rood-maroon-palet.
 *
 * Twee dingen bewust zo:
 *  - Geen `opacity:0` als begintoestand in de HTML. Deze pagina wordt bij de
 *    build geprerenderd, en een animatiebibliotheek met een beginstaat zet die
 *    letterlijk in `dist/ozonbehandeling/index.html` — onzichtbare inhoud voor
 *    precies de AI-antwoordmachines waarvoor we prerenderen. De scroll-animaties
 *    lopen daarom via <Reveal>, dat pas ná mount verbergt.
 *  - De FAQ staat in `<details>`, niet in een JS-accordeon: de antwoorden staan
 *    zo volledig in de HTML, ook zonder JavaScript.
 */

/* De FAQ staat één keer in de copy (`OzonbehandelingPage.copy.tsx`), en voedt
   zowel het scherm als de JSON-LD. Twee kopieën zouden uit de pas lopen, en dan
   markeert de schema iets wat de bezoeker niet ziet. */

/** De iconen van de zes situaties waarvoor we ozon inzetten, in de volgorde van `inzet` in de copy. */
const INZET_ICONEN: JSX.Element[] = [
  <SporenIcon key="sporen" />,
  <MijtIcon key="mijt" />,
  <NeusIcon key="neus" />,
  <KelderIcon key="kelder" />,
  <WaterschadeIcon key="water" />,
  <SleutelIcon key="sleutel" />,
];

/*
 * De zes spaken van de hero-animatie: elk een spore op de kring, met het
 * O₃-deeltje dat ernaartoe vertrekt.
 *
 * De hoek staat in `--a` en de vertraging regelt wanneer die spore aan de beurt
 * is: zes sporen die tegelijk dichtklappen ziet eruit als een knipperende lamp,
 * één voor één rond de cirkel als een behandeling die zich verspreidt. Daarom
 * lopen de vertragingen mee met de hoek — de klap draait met de wijzers van de
 * klok mee.
 *
 * Vaste waarden, geen `Math.random()`: de pagina wordt geprerenderd en een
 * willekeurige waarde levert bij hydratatie een andere HTML op dan in dist.
 */
const SPAKEN: { id: string; style: CSSProperties }[] = [
  { id: "p1", style: { "--a": "-90deg", animationDelay: "0s" } as CSSProperties },
  { id: "p2", style: { "--a": "-30deg", animationDelay: "1s" } as CSSProperties },
  { id: "p3", style: { "--a": "30deg", animationDelay: "2s" } as CSSProperties },
  { id: "p4", style: { "--a": "90deg", animationDelay: "3s" } as CSSProperties },
  { id: "p5", style: { "--a": "150deg", animationDelay: "4s" } as CSSProperties },
  { id: "p6", style: { "--a": "210deg", animationDelay: "5s" } as CSSProperties },
];

/*
 * De zwevende O₃-moleculen en de sporen die ze opruimen.
 *
 * Vaste posities, duur en vertraging — geen `Math.random()`. De pagina wordt bij
 * de build geprerenderd; een willekeurige waarde zou in de HTML anders staan dan
 * wat React in de browser berekent, en dat is precies een hydratatiefout.
 *
 * De vertragingen lopen bewust niet gelijk op: zes sporen die tegelijk ploffen
 * ziet eruit als een storing, verspreid over de cyclus als een behandeling.
 */
const MOLECULEN: { id: string; style: CSSProperties }[] = [
  { id: "m1", style: { left: "8%", top: "18%", "--s": "58px", "--dur": "11s", "--dx": "26px", "--dy": "-20px", "--dr": "34deg" } as CSSProperties },
  { id: "m2", style: { left: "62%", top: "12%", "--s": "44px", "--dur": "9s", "--dx": "-22px", "--dy": "26px", "--dr": "-42deg" } as CSSProperties },
  { id: "m3", style: { left: "78%", top: "58%", "--s": "66px", "--dur": "13s", "--dx": "-30px", "--dy": "-24px", "--dr": "28deg" } as CSSProperties },
  { id: "m4", style: { left: "26%", top: "68%", "--s": "40px", "--dur": "10s", "--dx": "24px", "--dy": "-18px", "--dr": "-30deg" } as CSSProperties },
  { id: "m5", style: { left: "46%", top: "38%", "--s": "52px", "--dur": "12s", "--dx": "18px", "--dy": "22px", "--dr": "46deg" } as CSSProperties },
];

const SPOREN: { id: string; style: CSSProperties }[] = [
  { id: "s1", style: { left: "20%", top: "40%", "--ss": "42px", "--sd": "9s", animationDelay: "0s" } as CSSProperties },
  { id: "s2", style: { left: "37%", top: "72%", "--ss": "34px", "--sd": "9s", animationDelay: "1.5s" } as CSSProperties },
  { id: "s3", style: { left: "55%", top: "26%", "--ss": "48px", "--sd": "9s", animationDelay: "3s" } as CSSProperties },
  { id: "s4", style: { left: "70%", top: "76%", "--ss": "30px", "--sd": "9s", animationDelay: "4.5s" } as CSSProperties },
  { id: "s5", style: { left: "86%", top: "34%", "--ss": "38px", "--sd": "9s", animationDelay: "6s" } as CSSProperties },
  { id: "s6", style: { left: "12%", top: "76%", "--ss": "34px", "--sd": "9s", animationDelay: "7.5s" } as CSSProperties },
];

const OzonbehandelingPage = () => {
  const t = useCopy(OZON_COPY);
  const lp = useLokaalPad();
  return (
  <div className="oz-page">
    <PageMeta
      {...useSeo("ozonbehandeling")}
      path={lp("/ozonbehandeling")}
      jsonLd={[
        organizationSchema(),
        serviceSchema({
          name: t.schemaNaam,
          description: t.schemaBeschrijving,
          path: lp("/ozonbehandeling"),
          serviceType: t.schemaType,
        }),
        faqSchema(t.faq),
        breadcrumbSchema([
          { name: t.kruimelHome, path: lp("/") },
          { name: t.kruimel, path: lp("/ozonbehandeling") },
        ]),
      ]}
    />

    {/*
      De header staat buiten <main>: hij hoort bij de schil, niet bij de inhoud.
      Hij staat ook buiten `.oz-top` — anders dan op de oudere handoff-pagina's,
      waar hij ín de rode kop zit. Dat mag, want `.hdr` is `position:fixed` en
      zweeft dus los boven de achtergrond; zo houdt deze pagina wél één
      <main>-landmark, net als de homepage.
    */}
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
                {t.heroCta} <ArrowRightIcon size={13} strokeWidth={2.6} />
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
            De hero-animatie: ozon dat rondom uitwaaiert en de sporen aanvalt.

            Hier stond eerst een O₃-bol met drie atomen eromheen. Mooi, maar het
            zei niets — een molecuul dat om zichzelf draait vertelt niet dat er
            iets opgeruimd wordt. Nu staan de sporen op een kring errond, slaat
            de generator in het midden pulsen uit in álle richtingen, en klapt
            elke spore dicht op het moment dat het deeltje bij hem aankomt.

            `aria-hidden` omdat het decor is: de tekst ernaast zegt hetzelfde, en
            een schermlezer heeft niets aan twaalf lege spans. Alles draait op
            CSS-keyframes, dus er staat geen begintoestand in de geprerenderde
            HTML.
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

    {/* ================= WAT IS OZON ================= */}
    <section className="oz-sec oz-red">
      <div className="oz-wrap oz-split">
        <Reveal className="oz-split-copy">
          <span className="oz-kick onred">{t.watKick}</span>
          <h2 className="oz-h2">{t.watH2}</h2>
          <p className="oz-lede">{t.watLede}</p>
          <p className="oz-body">{t.watBody}</p>
        </Reveal>

        {/* De omzetting O₂ → O₃, puur CSS. Decoratief, dus aria-hidden. */}
        <Reveal className="oz-split-vis" delay={0.1}>
          <div className="oz-mol" aria-hidden="true">
            <div className="oz-mol-side">
              <div className="oz-mol-atoms two">
                <i />
                <i />
              </div>
              <b>O₂</b>
              <small>{t.molO2}</small>
            </div>
            <div className="oz-mol-arrow">
              <span className="oz-spark" />
              <svg width="30" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <small>{t.molEnergie}</small>
            </div>
            <div className="oz-mol-side hot">
              <div className="oz-mol-atoms three">
                <i />
                <i />
                <i className="loose" />
              </div>
              <b>O₃</b>
              <small>{t.molO3}</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ================= HOE WERKT HET ================= */}
    <section className="oz-sec oz-light">
      <div className="oz-wrap">
        <Reveal className="oz-head oz-head-mid">
          <span className="oz-kick red">{t.hoeKick}</span>
          <h2 className="oz-h2">{t.hoeH2}</h2>
          <p className="oz-lede">{t.hoeLede}</p>
        </Reveal>

        {/*
          De animatie van de zustersite, in onze kleuren. Daar is ze blauw op
          marineblauw (blauw = ozon, groen = spore); hier is de spore een donkere
          schimmelvlek zoals op de homepage, en de actieve zuurstof wit met een
          rode kern.

          De schimmelmuur maakt de praktijksituatie zichtbaar. Daarover vliegt
          een O₃-deeltje op een spore af, en pas als het raakt klapt de spore
          dicht. Met de legende eronder is in één blik duidelijk wie wie is.

          De posities staan hard in de lijsten hieronder en niet op
          `Math.random()`: deze pagina wordt bij de build geprerenderd, en een
          willekeurige waarde zou bij hydratatie niet overeenkomen met de HTML.
        */}
        <Reveal className="oz-stage-wrap" delay={0.08}>
          <div className="oz-stage" aria-label={t.stageLabel}>
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

          {/*
            De legende staat naast de bak, niet erin. Binnenin lag ze op een
            telefoon over de onderste sporen heen: die staan op een vast
            percentage van de hoogte, dus wegschuiven kon niet. Nu zweeft ze op
            een breed scherm nog steeds over de onderrand, en zakt ze op een
            smal scherm gewoon onder de bak.
          */}
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
          <p>{t.hoeNa}</p>
        </Reveal>
      </div>
    </section>

    {/* ================= DE CIRKEL DOORBREKEN ================= */}
    <section className="oz-sec oz-red">
      <div className="oz-wrap">
        <Reveal className="oz-head">
          <span className="oz-kick onred">{t.cirkelKick}</span>
          <h2 className="oz-h2">{t.cirkelH2}</h2>
          <p className="oz-lede">{t.cirkelLede}</p>
        </Reveal>

        <div className="oz-steps">
          <Reveal className="oz-step">
            <span className="oz-step-n">1</span>
            <h3>{t.stap1Titel}</h3>
            <p>{t.stap1(lp)}</p>
          </Reveal>
          <Reveal className="oz-step" delay={0.08}>
            <span className="oz-step-n">2</span>
            <h3>{t.stap2Titel}</h3>
            <p>{t.stap2}</p>
          </Reveal>
          <Reveal className="oz-step" delay={0.16}>
            <span className="oz-step-n">3</span>
            <h3>{t.stap3Titel}</h3>
            <p>{t.stap3}</p>
          </Reveal>
        </div>

        <Reveal className="oz-band" delay={0.1}>
          <div className="oz-band-t">
            <span className="oz-kick onred">{t.bandKick}</span>
            <h3>{t.bandH3}</h3>
            <p>{t.band(lp)}</p>
            <a className="ozbtn ozbtn-white" href="#boeken">
              {t.bandCta} <ArrowRightIcon size={13} strokeWidth={2.6} />
            </a>
          </div>
          <img
            className="oz-band-man"
            src="/vernast/man-schimmelpak.webp"
            alt={t.bandAlt}
            width={700}
            height={900}
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>

    {/* ================= WAARVOOR ZETTEN WIJ HET IN ================= */}
    <section className="oz-sec oz-light">
      <div className="oz-wrap">
        <Reveal className="oz-head">
          <span className="oz-kick red">{t.inzetKick}</span>
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

    {/* ================= ONZE TECHNIEK ================= */}
    {/*
      Techniek en veiligheid stonden hier als twee panelen naast elkaar in één
      sectie. Uit elkaar getrokken omdat het twee verschillende vragen zijn —
      "waarmee werken jullie" en "is het veilig" — en omdat de pagina sindsdien
      strikt wit en rood afwisselt: twee blokken in één sectie delen
      noodzakelijkerwijs dezelfde ondergrond.
    */}
    <section className="oz-sec oz-red">
      <div className="oz-wrap oz-split">
        <Reveal className="oz-split-copy">
          <span className="oz-kick onred">{t.techKick}</span>
          <h2 className="oz-h2">{t.techH2}</h2>
          <p className="oz-lede">{t.techLede}</p>
          <p className="oz-body">{t.techBody}</p>
        </Reveal>
        <Reveal className="oz-split-vis" delay={0.1}>
          <dl className="oz-specs oz-specs-card">
            {t.techniek.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
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
    {/*
      Dezelfde beoordelingen als op de homepage, en om dezelfde reden zó: alleen
      reviews waarvan de tekst zélf geen ander vak noemt (wie over muurinjectie
      of schilderwerk schrijft hoort op de site van dat vak), letterlijk
      overgenomen, en géén gemiddelde of aantal — zie de toelichting bij
      `REVIEWS` in src/lib/site.ts.

      Geen ervan gaat over een ozonbehandeling; dat staat er niet bij gelogen.
      Ze zeggen wat ze zeggen: hoe deze ploeg werkt. Komt er een echte
      ozon-review binnen, dan vervangt die er hier één.
    */}
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
                    {review.source === "Google" && <GoogleIcon size={12} />} {review.source} ·{" "}
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
    {/*
      Dezelfde opbouw als de FAQ op de homepage: een smalle linkerkolom met de
      kop en een donkere hulpkaart, de vragen in een bredere kolom ernaast. Het
      stond hier als één gecentreerde lijst over de volle breedte — dezelfde
      inhoud, maar een ander blok dan de bezoeker twee pagina's eerder zag, en
      zonder de uitweg ("staat uw vraag er niet bij?") die daar juist de
      telefoon oplevert.

      De klassenamen zijn die van de homepage (`faq`, `q`, `pl`), maar de regels
      staan opnieuw onder `.oz-page`: de originelen leven binnen `.v3` en erven
      daar hun tokens.

      `<details>` blijft, met de eerste open — zo staat elk antwoord in de
      geprerenderde HTML, ook voor wie geen JavaScript uitvoert.
    */}
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
            <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>, {t.uren(CONTACT.openingHours)}
          </p>
        </Reveal>
        <div className="oz-book-r">
          <OzonForm />
        </div>
      </div>
    </section>

    </main>

    <V3Footer />
  </div>
  );
};

export default OzonbehandelingPage;
