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
import { productImageAlt, PRODUCTS, toestelChips, toestelPad } from "@/data/verhuur";
import { toestelLabel } from "@/data/navigation";
import { SEO } from "@/data/seo";
import { MAPS_URL } from "@/lib/site";
import { euro, euroInt } from "@/lib/verhuur";
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
  const pomp = CONDENSPOMP;
  const pad = toebehorenPad(pomp.slug);
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
        title={SEO.toebehorenCondenspomp.title}
        description={SEO.toebehorenCondenspomp.description}
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
            category: "Toebehoren bouwdroger",
            specs: pomp.specs,
          }),
          faqSchema(pomp.faq.map(([question, answer]) => ({ question, answer }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Toestellen", path: "/machines" },
            { name: pomp.naam, path: pad },
          ]),
        ]}
      />

      <V3Header lightAfter={320} />

      <section className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/machines">Toestellen</Link> <span>/</span>
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
                <img src={pomp.img[shot][0]} alt={pomp.img[shot][1]} fetchPriority="high" decoding="async" />
              </div>
              <div className="thumbs">
                {pomp.img.map(([src, alt], i) => (
                  <button
                    key={src}
                    type="button"
                    className={i === shot ? "on" : undefined}
                    onClick={() => setShot(i)}
                    aria-label={`Afbeelding ${i + 1}`}
                  >
                    <img src={src} alt={alt} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pinfo">
              <div className="ptype">{pomp.type}</div>
              <h1>{pomp.naam}</h1>
              <div className="promo-online">
                <CheckIcon size={15} strokeWidth={2.4} />
                <b>{euro(pomp.dag)} per bouwdroger per dag</b>
                <span>&nbsp;· aansluiting inbegrepen</span>
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
                  <span className="tb-k">Bij een geleverd pakket</span>
                  <b>Onze technieker sluit hem aan</b>
                  <p>
                    Standaard één pomp per bouwdroger, aan {euro(pomp.dag)} per dag. Bij de
                    installatie legt de technieker de afvoer naar een lavabo, douche, vloerput of
                    wasmachineaansluiting. U vinkt hem aan tijdens het berekenen van uw pakket.
                  </p>
                  <Link className="btn btn-red" to="/verhuur/calculator">
                    Bereken uw pakket
                    <ArrowRightIcon size={14} strokeWidth={2.4} />
                  </Link>
                </div>
                <div className="tb-weg">
                  <span className="tb-k">Bij een afhaling</span>
                  <b>De pomp gaat mee met uw toestel</b>
                  <p>
                    Haalt u een bouwdroger af in Aartselaar, dan kan de pomp mee. Vraag hem bij uw
                    reservatie, dan leggen wij hem klaar; aansluiten is een slang in de bak en een
                    stekker in het stopcontact. De {euro(pomp.dag)} per dag komt op de eindfactuur,
                    samen met de werkelijke huurperiode.
                  </p>
                  <Link className="btn btn-out" to="/verhuur/afhalen?pomp=1">
                    Reserveer een toestel met pomp
                    <ArrowRightIcon size={14} strokeWidth={2.4} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="wrap about-grid">
          <div>
            <span className="kick">Waarvoor deze pomp</span>
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
            <span className="kick">Automatische waterafvoer</span>
            <h2 className="sec">Zo loopt het water weg.</h2>
            <p className="lede">
              Vier stappen die zich de hele huurperiode herhalen, zonder dat er iemand bij hoeft te
              zijn.
            </p>
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
              <span className="tb-k">Zonder pomp</span>
              <b>U leegt de opvangbak 2 à 3 keer per dag</b>
              <p>
                Loopt de bak vol terwijl er niemand is, dan schakelt de bouwdroger zichzelf uit en
                staat hij stil tot u hem leegt. Een weekend stilstand kost u een weekend droogtijd.
              </p>
            </div>
            <div className="tb-of">of</div>
            <div>
              <span className="tb-k">Met pomp</span>
              <b>U kijkt ernaar, meer niet</b>
              <p>
                Het condenswater loopt continu weg naar uw afvoer. Het toestel draait dag en nacht
                door, ook in het weekend, en haalt zo de droogtijd die ervoor berekend is.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="specs">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Technische fiche</span>
            <h2 className="sec">Volledige specificaties</h2>
            <p className="lede">
              Alle waarden zoals opgemeten onder standaardomstandigheden. Twijfelt u of uw afvoer
              haalbaar is? Bel ons, dan rekenen we het samen na.
            </p>
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
            <span className="kick">Afhalen in Aartselaar</span>
            <h2 className="sec">Of neem hem gewoon mee.</h2>
            <p className="lede">
              Reserveer uw bouwdroger online, vermeld de condenspomp bij uw reservatie en wij zetten
              allebei klaar tegen uw afhaalmoment.
            </p>
          </div>
          <div className="pickupbar">
            <PinIcon size={34} />
            <div className="pb-t">
              <b>Afhaalpunt Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar</b>
              <span>
                Vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel · Ma–Vr 08:00–17:00
              </span>
            </div>
            <a className="btn" href={MAPS_URL} target="_blank" rel="noopener">
              Plan uw route
            </a>
          </div>
          <p className="af-note">
            De pomp weegt geen 2 kg en past in elke koffer. Het toestel waar hij bij hoort niet:
            reken op 30 tot 50 kg. Liever niet tillen? Dan kiest u een{" "}
            <Link to="/verhuur/calculator">pakket met levering</Link>, en sluiten wij de afvoer
            meteen zelf aan.
          </p>
        </div>
      </section>

      <section className="cross">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Hoort bij</span>
            <h2 className="sec">De bouwdrogers waar de pomp op werkt</h2>
            <p className="lede">
              Elke bouwdroger vangt zijn eigen condenswater op, dus elke droger krijgt zijn eigen
              pomp.
            </p>
          </div>
          <div className="tk-grid">
            {drogers.map((key) => {
              const droger = PRODUCTS[key];
              return (
                <ToestelKaart
                  key={key}
                  href={toestelPad(key)}
                  tag={droger.badge}
                  image={droger.img[0]}
                  alt={productImageAlt(droger, 0)}
                  name={toestelLabel(key)}
                  blurb={droger.sum}
                  chips={toestelChips(droger)}
                  price={euroInt(droger.day)}
                  priceNote="/dag excl. btw"
                  cta="Bekijken"
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap faq-in">
          <div className="sec-head">
            <span className="kick">Veelgestelde vragen</span>
            <h2 className="sec">Over de condenspomp</h2>
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
            <span className="kick onred">Nog niet zeker?</span>
            <h2>Laat de configurator het voor u uitrekenen.</h2>
            <p>
              Geef uw oppervlakte en plafondhoogte in. U ziet meteen welk toestel, hoeveel units en
              hoeveel condenspompen bij uw ruimte horen, met de prijs erbij.
            </p>
            <div className="cb">
              <Link className="btn btn-white" to="/verhuur/calculator">
                Naar de configurator
                <ArrowRightIcon strokeWidth={2.4} />
              </Link>
              <a className="btn btn-dark" href="tel:+3236899065">
                Bel 03 689 90 65
              </a>
            </div>
          </div>
          <img className="cta-man" src="/vernast/man-klembord.webp" alt="Vernast droogexpert" loading="lazy" decoding="async" />
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default ToebehorenCondenspompPage;
