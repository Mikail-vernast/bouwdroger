import { useState } from "react";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { ArrowRightIcon, CheckIcon } from "@/components/verhuur/icons";
import { PinIcon } from "@/components/home-v3/icons";
import ToestelKaart from "@/components/ToestelKaart";
import { CONDENSPOMP, toebehorenPad } from "@/data/toebehoren";
import { toebehorenInTaal } from "@/data/toebehoren.fr";
import { productImageAlt, PRODUCTS, toestelPad } from "@/data/verhuur";
import { productInTaal, toestelChipsInTaal } from "@/data/verhuur.fr";
import { toestelLabelIn } from "@/data/navigation";
import { useSeo } from "@/data/seo";
import { MAPS_URL } from "@/lib/site";
import { useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { COPY } from "./ToebehorenCondenspompPage.copy";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";
import "@/styles/toebehoren.css";

/**
 * De fiche van de condenspomp.
 *
 * Draagt bewust dezelfde schil en dezelfde klassen als de toestelpagina
 * (`.vh-prod` uit `verhuur.css`): dit is voor de bezoeker een product naast de
 * acht toestellen, en een eigen vormtaal voor één pagina zou alleen maar
 * verraden dat ze ergens anders vandaan komt. Wat hier níét staat is de
 * afhaalmodule met datum, aantal en totaal — de pomp wordt niet per stuk
 * gereserveerd maar hoort bij een bouwdroger, en een tweede prijsmotor voor
 * één artikel is precies hoe de afhaalpagina ooit aan eigen bedragen raakte.
 *
 * De paar blokken die de toestelpagina niet heeft (de twee manieren om de pomp
 * te krijgen, het schema van de waterafvoer) staan in `styles/toebehoren.css`.
 */
const ToebehorenCondenspompPage = () => {
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  const seo = useSeo("toebehorenCondenspomp");
  /*
    Het bedrag zoals deze bezoeker het moet zien, met zijn btw-label erbij:
    "€ 3,63 incl. btw" voor een particulier, "3,00 € HTVA" voor een bedrijf.
    Het getal zelf blijft `CONDENSPOMP.dag`, uit het portaal.
  */
  const prijs = `${toon(CONDENSPOMP.dag).tekst} ${toon(CONDENSPOMP.dag).label}`;
  const pomp = toebehorenInTaal(CONDENSPOMP, taal, prijs);
  const pad = lp(toebehorenPad(pomp.slug));
  const [shot, setShot] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  /*
    De kruisverkoop toont alleen de condensontvochtigers: die vangen water op
    en hebben dus een afvoer nodig. Een ventilator of een kachel onder "hoort
    bij" zou hier een toestel aanraden dat geen druppel water produceert, en de
    adsorptiedroger blaast zijn vocht via slangen weg in plaats van het op te
    vangen.

    Met de sleutels erbij geschreven en niet op `type` gefilterd: dat veld komt
    uit het portaal en is daar vrije tekst. Wordt het daar ooit anders
    gespeld, dan valt deze sectie stil leeg in plaats van dat er één kaart
    minder staat. De filter op `PRODUCTS` is dezelfde als in `PRODUCT_ADDONS`:
    wat niet te huur staat, verdwijnt mee.
  */
  const drogers = ["ttk170", "ttk350", "ttk650"].filter((key) => PRODUCTS[key]);

  return (
    <div className="vh-prod tb-page">
      <PageMeta
        title={seo.title}
        description={seo.description}
        path={pad}
        image={pomp.img[0][0]}
        ogType="product"
        jsonLd={[
          productSchema({
            name: pomp.naam,
            description: pomp.sum,
            image: pomp.img[0][0],
            path: pad,
            pricePerDay: pomp.dag,
            category: t.categorie,
            specs: pomp.specs,
          }),
          faqSchema(pomp.faq.map(([question, answer]) => ({ question, answer }))),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.toestellen, path: lp("/machines") },
            { name: pomp.naam, path: pad },
          ]),
        ]}
      />

      <V3Header lightAfter={320} />

      <section className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link to={lp("/")}>{t.home}</Link> <span>/</span>
            <Link to={lp("/machines")}>{t.toestellen}</Link> <span>/</span>
            <span className="cur">{pomp.naam}</span>
          </div>

          <div className="pgrid">
            <div className="gal">
              <div className="main">
                <span className="badge">{pomp.badge}</span>
                {/*
                  Dezelfde preload als op de toestelpagina: de hero-achtergrond
                  is het LCP-element maar staat in verhuur.css, en wordt dus pas
                  ontdekt wanneer die CSS binnen is.
                */}
                <Head>
                  <link rel="preload" href="/vernast/bg-red-wide-2.webp" as="image" type="image/webp" fetchPriority="high" />
                </Head>
                <img src={pomp.img[shot][0]} alt={pomp.img[shot][1]} width={1254} height={1254} fetchPriority="high" decoding="async" />
              </div>
              <div className="thumbs">
                {pomp.img.map(([src, alt], i) => (
                  <button
                    key={src}
                    type="button"
                    className={i === shot ? "on" : undefined}
                    onClick={() => setShot(i)}
                    aria-label={t.bekijk(alt)}
                    aria-pressed={i === shot}
                  >
                    <img src={src} alt={alt} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
              <p className="tb-bijschrift" aria-live="polite">{pomp.img[shot][2]}</p>
            </div>

            <div className="pinfo">
              <div className="ptype">{pomp.type}</div>
              <h1>{pomp.naam}</h1>
              <div className="promo-online">
                <CheckIcon size={15} strokeWidth={2.4} />
                <b>{t.promo(prijs)}</b>
                <span>&nbsp;· {t.aansluiting}</span>
              </div>
              <p className="psum">{pomp.sum}</p>

              <div className="keyspec">
                {pomp.key.map(([label, value, unit]) => (
                  <div className="k" key={label}>
                    <div className="kl">{label}</div>
                    <div className="kv">
                      {value}
                      {unit && <small> {unit}</small>}
                    </div>
                  </div>
                ))}
              </div>

              {/*
                Geen datumkiezer en geen teller. De pomp hoort bij een
                bouwdroger: de twee wegen hieronder zijn precies de twee wegen
                waarop die bouwdroger bij de klant raakt, en allebei rekenen ze
                het bedrag uit op hun eigen pagina.
              */}
              <div className="tb-wegen">
                <div className="tb-weg">
                  <span className="tb-k">{t.pakketK}</span>
                  <b>{t.pakketTitel}</b>
                  <p>{t.pakketTekst(prijs)}</p>
                  <Link className="btn btn-red" to={lp("/verhuur/calculator")}>
                    {t.pakketCta}
                    <ArrowRightIcon size={14} strokeWidth={2.4} />
                  </Link>
                </div>
                <div className="tb-weg">
                  <span className="tb-k">{t.afhaalK}</span>
                  <b>{t.afhaalTitel}</b>
                  <p>{t.afhaalTekst(prijs)}</p>
                  <Link className="btn btn-out" to={lp("/verhuur/afhalen?pomp=1")}>
                    {t.afhaalCta}
                    <ArrowRightIcon size={14} strokeWidth={2.4} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tb-opstellingen">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.opstKick}</span>
            <h2 className="sec">{t.opstTitel}</h2>
            <p className="lede">{t.opstLede}</p>
          </div>
          <div className="tb-fotogrid">
            {pomp.img.slice(1).map(([src, alt, bijschrift]) => (
              <figure key={src}>
                <img src={src} alt={alt} width={1254} height={1254} loading="lazy" decoding="async" />
                <figcaption>{bijschrift}</figcaption>
              </figure>
            ))}
          </div>
          <p className="tb-beeldnote">{t.opstNote}</p>
        </div>
      </section>

      <section className="about">
        <div className="wrap about-grid">
          <div>
            <span className="kick">{t.waarvoor}</span>
            <h2 className="sec">{pomp.aboutTitle}</h2>
            <div className="about-body" style={{ marginTop: 22 }}>
              {pomp.about.map((paragraph) => (
                // Vaste designtekst met <strong>-accenten — geen invoer van buitenaf.
                <p key={paragraph.slice(0, 24)} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>
          <div className="bullets">
            {pomp.bullets.map(([title, body]) => (
              <div className="bl" key={title}>
                <CheckIcon size={17} strokeWidth={2.4} />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="incl afh">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.afvoerKick}</span>
            <h2 className="sec">{t.afvoerTitel}</h2>
            <p className="lede">{t.afvoerLede}</p>
          </div>
          <div className="astep-grid">
            {pomp.stappen.map(([title, body], i) => (
              <div className="astep" key={title}>
                <div className="an">{i + 1}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className="tb-zonder">
            <div>
              <span className="tb-k">{t.zonderK}</span>
              <b>{t.zonderTitel}</b>
              <p>{t.zonderTekst}</p>
            </div>
            <div className="tb-of">{t.of}</div>
            <div>
              <span className="tb-k">{t.metK}</span>
              <b>{t.metTitel}</b>
              <p>{t.metTekst}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="specs">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.techFiche}</span>
            <h2 className="sec">{t.volledigeSpecs}</h2>
            <p className="lede">{t.specsLede}</p>
          </div>
          <div className="stable">
            <table>
              <tbody>
                {pomp.specs.map(([label, value]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="incl">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.afhalenKick}</span>
            <h2 className="sec">{t.afhalenTitel}</h2>
            <p className="lede">{t.afhalenLede}</p>
          </div>
          <div className="pickupbar">
            <PinIcon size={34} />
            <div className="pb-t">
              <b>{t.pickupbarTitel}</b>
              <span>{t.pickupbarSub}</span>
            </div>
            <a className="btn" href={MAPS_URL} target="_blank" rel="noopener">
              {t.route}
            </a>
          </div>
          <p className="af-note">
            {t.afNoteVoor} <Link to={lp("/verhuur/calculator")}>{t.afNoteLink}</Link>
            {t.afNoteNa}
          </p>
        </div>
      </section>

      <section className="cross">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.hoortBij}</span>
            <h2 className="sec">{t.hoortBijTitel}</h2>
            <p className="lede">{t.hoortBijLede}</p>
          </div>
          <div className="tk-grid">
            {drogers.map((key) => {
              const droger = productInTaal(key, taal);
              return (
                <ToestelKaart
                  key={key}
                  href={lp(toestelPad(key))}
                  tag={droger.badge}
                  image={droger.img[0]}
                  alt={productImageAlt(droger, 0)}
                  name={toestelLabelIn(key, taal)}
                  blurb={droger.sum}
                  chips={toestelChipsInTaal(key, taal)}
                  price={toon(droger.day).tekst}
                  priceNote={`${t.perDag} ${toon(droger.day).label}`}
                  cta={t.bekijken}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap faq-in">
          <div className="sec-head">
            <span className="kick">{t.faqKick}</span>
            <h2 className="sec">{t.faqTitel}</h2>
          </div>
          <div style={{ marginTop: 30 }}>
            {pomp.faq.map(([q, a], i) => (
              <details
                className="q"
                key={q}
                open={openFaq === i}
                onToggle={(e) => {
                  if ((e.currentTarget as HTMLDetailsElement).open) setOpenFaq(i);
                  else if (openFaq === i) setOpenFaq(-1);
                }}
              >
                <summary>
                  {q} <span className="pl">+</span>
                </summary>
                <div className="a">
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="cta-copy">
            <span className="kick onred">{t.ctaKick}</span>
            <h2>{t.ctaTitel}</h2>
            <p>{t.ctaTekst}</p>
            <div className="cb">
              <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
                {t.ctaKnop}
                <ArrowRightIcon strokeWidth={2.4} />
              </Link>
              <a className="btn btn-dark" href="tel:+3236899065">
                {t.bel}
              </a>
            </div>
          </div>
          <img className="cta-man" src="/vernast/man-klembord.webp" alt={t.expertAlt} loading="lazy" decoding="async" />
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default ToebehorenCondenspompPage;
