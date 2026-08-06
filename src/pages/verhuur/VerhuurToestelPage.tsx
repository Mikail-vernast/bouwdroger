import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { ArrowRightIcon, CaretIcon, CheckIcon } from "@/components/verhuur/icons";
import { PinIcon } from "@/components/home-v3/icons";
import {
  PRODUCTS,
  PRODUCT_ADDONS,
  PRODUCT_ORDER,
  SC_LABEL,
  type Product,
} from "@/data/verhuur";
import { addDays, euroInt, isoDate } from "@/lib/verhuur";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

const MAX_QTY = 12;
/** Kortingsdrempels: vanaf een week − 10 %, vanaf een maand − 30 %. */
/** Afhaalmomenten in het magazijn, zoals in het design. */
const PICKUP_SLOTS = ["08:00 – 10:00", "10:00 – 12:00", "13:00 – 15:00", "15:00 – 17:00"];

/**
 * Vragen die op elke toestelpagina onder de toestelspecifieke FAQ komen: ze
 * gaan over het afhalen zelf en gelden dus voor het hele gamma.
 */
const PICKUP_FAQ: [string, string][] = [
  [
    "Waar haal ik het toestel af?",
    "Aan ons afhaalpunt: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar — vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel. Open ma–vr van 08:00 tot 17:00.",
  ],
  [
    "Wat breng ik mee bij de afhaling?",
    "Uw identiteitskaart en uw reservatiebevestiging (op uw telefoon volstaat). Wij laden het toestel mee in uw wagen of aanhangwagen.",
  ],
  [
    "Kan dit toestel ook geleverd en geïnstalleerd worden?",
    "Ja, maar uitsluitend als onderdeel van een berekend droogpakket. Alleen zo kunnen wij onze 100% droog-garantie waarmaken. Bereken uw pakket via de calculator.",
  ],
  [
    "Waarom zijn afhaalprijzen lager?",
    "U bespaart de transport- en installatiekost. Reserveren blijft gratis en zonder voorschot.",
  ],
];

const PICKUP_STEPS = [
  {
    title: "Reserveer online",
    body: "Kies uw toestel, huurperiode en afhaalmoment. U betaalt niets vooraf.",
  },
  {
    title: "Bevestiging binnen het uur",
    body: "U ontvangt uw reservatiebevestiging met routebeschrijving en wat u meebrengt (identiteitskaart).",
  },
  {
    title: "Afhalen op de A12",
    body: "Uw toestel staat klaar aan ons afhaalpunt. Wij laden mee in en geven korte uitleg. Breng een ruime koffer, break of aanhangwagen mee.",
  },
  {
    title: "Terugbrengen, klaar",
    body: "Breng het toestel terug op het afgesproken moment. Facturatie volgt na de huurperiode.",
  },
];

const PERIODS: [number, string][] = [
  [3, "3 dagen"],
  [7, "1 week"],
  [14, "2 weken"],
  [30, "1 maand"],
  [60, "2 maanden"],
];

const NAV_MODELS: [string, string][] = [
  ["ttk170", "Ontvochtiger TTK 170 S"],
  ["ttk350", "Ontvochtiger TTK 350 S"],
  ["ttk650", "Ontvochtiger TTK 650 S"],
  ["ttv4500", "Ventilator TTV 4500"],
  ["teddh30", "Elektrische kachel TEddH 30 T"],
];

const VerhuurToestelPage = () => {
  const { model } = useParams();
  const [searchParams] = useSearchParams();

  const key = model && PRODUCTS[model] ? model : "ttk350";
  const prod: Product = PRODUCTS[key];
  // De afhaalvragen gelden voor elk toestel en staan onder de specifieke FAQ.
  const questions: [string, string][] = [...prod.faq, ...PICKUP_FAQ];

  const [qty, setQty] = useState(() => Math.max(1, parseInt(searchParams.get("units") || "1", 10) || 1));
  const [days, setDays] = useState(7);
  const [addons, setAddons] = useState<Record<string, boolean>>({});
  const [shot, setShot] = useState(0);
  const [startDate, setStartDate] = useState(() => isoDate(addDays(new Date(), 1)));
  const [slot, setSlot] = useState(PICKUP_SLOTS[1]);
  const [openFaq, setOpenFaq] = useState(0);

  // Een ander toestel is een andere pagina: herstart de boekmodule.
  useEffect(() => {
    setAddons({});
    setShot(0);
    setOpenFaq(0);
  }, [key]);

  const addonKeys = PRODUCT_ADDONS[key] || [];
  const base = prod.day * qty * days;

  const chosenAddons = addonKeys.filter((k) => addons[k]);
  const addTotal = chosenAddons.reduce((s, k) => s + PRODUCTS[k].day * days, 0);
  // De afhaalpagina rekent geen week- of maandkorting: de afhaalprijzen liggen
  // al lager dan de pakketprijs.
  const total = base + addTotal;

  const cross = PRODUCT_ORDER.filter((k) => k !== key);
  const vol = searchParams.get("vol");
  const sc = searchParams.get("sc");

  return (
    <div className="vh-prod">
      <PageMeta
        title={`${prod.short} huren — ${prod.key[0][0].toLowerCase()} ${prod.key[0][1]} ${prod.key[0][2]} | Vernast`}
        description={prod.sum}
        path={`/verhuur/toestel/${key}`}
        image={prod.img[0]}
        ogType="product"
        jsonLd={[
          productSchema({
            name: prod.name,
            description: prod.sum,
            image: prod.img[0],
            path: `/verhuur/toestel/${key}`,
            pricePerDay: prod.day,
            category: prod.type,
            specs: prod.specs,
          }),
          faqSchema(questions.map(([question, answer]) => ({ question, answer }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Toestellen", path: "/machines" },
            { name: prod.short, path: `/verhuur/toestel/${key}` },
          ]),
        ]}
      />

      <V3Header lightAfter={320} />

      <section className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/#toestellen">Toestellen</Link> <span>/</span>
            <span className="cur">{prod.name}</span>
          </div>

          <div className="pgrid">
            <div className="gal">
              <div className="main">
                <span className="badge">{prod.badge}</span>
                <img src={prod.img[shot]} alt={prod.name} loading="lazy" decoding="async" />
              </div>
              {prod.img.length > 1 && (
                <div className="thumbs">
                  {prod.img.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className={i === shot ? "on" : undefined}
                      onClick={() => setShot(i)}
                      aria-label={`Afbeelding ${i + 1}`}
                    >
                      <img src={src} alt="" loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="pinfo" id="boeken">
              <div className="ptype">{prod.type}</div>
              <h1>{prod.name}</h1>
              <div className="promo-online">
                <CheckIcon size={15} strokeWidth={2.4} />
                <b>5% korting bij online betalen</b>
                <span>&nbsp;— instant factuur in uw mailbox</span>
              </div>
              <p className="psum">{prod.sum}</p>

              {vol && (
                <div className="ctx on">
                  <CheckIcon size={16} strokeWidth={2.2} />
                  <p>
                    Op basis van uw berekening: <b>{Number(vol).toLocaleString("nl-BE")} m³</b>
                    {sc && SC_LABEL[sc] && (
                      <>
                        {" · "}
                        <b>{SC_LABEL[sc]}</b>
                      </>
                    )}
                    {qty > 1 && (
                      <>
                        {" · "}
                        <b>{qty} toestellen</b> aanbevolen
                      </>
                    )}
                    . <Link to="/#configurator">Opnieuw berekenen</Link>
                  </p>
                </div>
              )}

              <div className="keyspec">
                {prod.key.map(([label, value, unit]) => (
                  <div className="k" key={label}>
                    <div className="kl">{label}</div>
                    <div className="kv">
                      {value}
                      {unit && <small> {unit}</small>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="book">
                <div className="bh">
                  <span className="bt">Afhaalreservatie</span>
                  <span className="stock">
                    <span className="d" /> Direct beschikbaar
                  </span>
                </div>
                <div className="bb">
                  <div className="pickupline">
                    <PinIcon size={15} />
                    <span>
                      Afhaalpunt: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar
                      <small>Vlak langs de A12 · Ma–Vr 08:00–17:00</small>
                    </span>
                  </div>
                  <div className="brow">
                    <div className="fld">
                      <label htmlFor="startDate">Startdatum</label>
                      <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        min={isoDate(new Date())}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                    <div className="fld">
                      <label htmlFor="period">Huurperiode</label>
                      <select
                        id="period"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                      >
                        {PERIODS.map(([v, label]) => (
                          <option key={v} value={v}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="brow">
                    <div className="fld">
                      <label htmlFor="qtyIn">Aantal toestellen</label>
                      <div className="qty">
                        <button
                          type="button"
                          aria-label="Minder"
                          onClick={() => setQty((q) => Math.max(1, q - 1))}
                        >
                          −
                        </button>
                        <input type="text" id="qtyIn" value={qty} readOnly />
                        <button
                          type="button"
                          aria-label="Meer"
                          onClick={() => setQty((q) => Math.min(MAX_QTY, q + 1))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="fld">
                      <label htmlFor="slot">Afhaalmoment</label>
                      <select id="slot" value={slot} onChange={(e) => setSlot(e.target.value)}>
                        {PICKUP_SLOTS.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {addonKeys.length > 0 && (
                    <div className="addons">
                      <div className="al">Aanbevolen erbij</div>
                      <div>
                        {addonKeys.map((k) => {
                          const a = PRODUCTS[k];
                          return (
                            <label className={`addon${addons[k] ? " on" : ""}`} key={k}>
                              <input
                                type="checkbox"
                                checked={!!addons[k]}
                                onChange={(e) =>
                                  setAddons((p) => ({ ...p, [k]: e.target.checked }))
                                }
                              />
                              <img src={a.img[0]} alt="" loading="lazy" decoding="async" />
                              <span className="at">
                                {a.short}
                                <small>{a.type}</small>
                              </span>
                              <span className="ap">€ {a.day}/dag</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="total">
                    <div className="tline">
                      <span>
                        {prod.short} × {qty} × {days} dagen
                      </span>
                      <span>{euroInt(base)}</span>
                    </div>
                    {addTotal > 0 && (
                      <div className="tline" style={{ display: "flex" }}>
                        <span>
                          {chosenAddons.map((k) => PRODUCTS[k].short).join(" + ")} × {days} dagen
                        </span>
                        <span>{euroInt(addTotal)}</span>
                      </div>
                    )}
                    <div className="tline">
                      <span>Afhalen &amp; terugbrengen in Aartselaar</span>
                      <span className="disc">Gratis</span>
                    </div>
                    <div className="tline big">
                      <span className="tl-lab">Totaal excl. btw</span>
                      <span className="tl-val">{euroInt(total)}</span>
                    </div>
                  </div>
                </div>
                <div className="bf">
                  <Link className="btn btn-red" to="/verhuur/afhalen">
                    Reserveer voor afhaling — {euroInt(total)}
                    <ArrowRightIcon strokeWidth={2.4} />
                  </Link>
                  <div className="note">
                    Geen voorschot · lagere afhaalprijzen · liever geleverd én geïnstalleerd? Dat kan{" "}
                    <Link to="/verhuur/calculator" style={{ color: "var(--red)", fontWeight: 700 }}>
                      per pakket
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="wrap about-grid">
          <div>
            <span className="kick">Waarvoor dit toestel</span>
            <h2 className="sec">{prod.aboutTitle}</h2>
            <div className="about-body" style={{ marginTop: 22 }}>
              {prod.about.map((paragraph) => (
                // Vaste designtekst met <strong>-accenten — geen invoer van buitenaf.
                <p key={paragraph.slice(0, 24)} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>
          <div className="bullets">
            {prod.bullets.map(([title, body]) => (
              <div className="bl" key={title}>
                <CheckIcon size={17} strokeWidth={2.4} />
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="specs">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Technische fiche</span>
            <h2 className="sec">Volledige specificaties</h2>
            <p className="lede">
              Alle waarden zoals opgemeten onder standaardomstandigheden. Vragen over uw specifieke
              situatie? Bel ons.
            </p>
          </div>
          <div className="stable">
            <table>
              <tbody>
                {prod.specs.map(([label, value]) => (
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

      <section className="incl afh" id="afhalen">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Afhalen in Aartselaar</span>
            <h2 className="sec">Zo werkt afhalen.</h2>
            <p className="lede">
              Losse toestellen huurt u tegen lagere afhaalprijzen via onze afhaal-checkout. U
              reserveert online en haalt op wanneer het u past — wij zetten alles klaar.
            </p>
          </div>
          <div className="astep-grid">
            {PICKUP_STEPS.map((step, i) => (
              <div className="astep" key={step.title}>
                <div className="an">{i + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))}
          </div>

          <div className="pickupbar">
            <PinIcon size={34} />
            <div className="pb-t">
              <b>Afhaalpunt Vernast — Boomsesteenweg 12 / Unit 11, 2630 Aartselaar</b>
              <span>
                Vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel · Ma–Vr 08:00–17:00
              </span>
            </div>
            <a
              className="btn"
              href="https://www.google.com/maps/search/?api=1&query=Boomsesteenweg+12+2630+Aartselaar"
              target="_blank"
              rel="noopener"
            >
              Plan uw route
            </a>
          </div>

          <div className="zwaarbar">
            <div className="zb-t">
              <span className="zk">Goed om te weten</span>
              <b>Sommige toestellen zijn zwaar. Til niet, laat leveren.</b>
              <p>
                Een professionele bouwdroger weegt al snel 30 tot 50 kg. Zelf tillen, zeker op een
                trap, is niet zonder risico. Bent u wat ouder of fysiek minder sterk? Kies dan voor
                een pakket met levering: wij dragen, plaatsen en stellen alles in, u hoeft niets te
                tillen.
              </p>
              <Link className="btn" to="/verhuur/calculator">
                Bekijk pakketten met levering
                <ArrowRightIcon size={14} strokeWidth={2.4} />
              </Link>
            </div>
            <img
              src="/vernast/oudere-man.webp"
              alt="Oudere man met rugpijn na het tillen van een zwaar toestel"
              loading="lazy"
            />
          </div>

          <p className="af-note">
            Leveren en installeren doen wij uitsluitend{" "}
            <Link to="/verhuur/calculator">per pakket</Link> — alleen zo kunnen wij onze 100%
            droog-garantie waarmaken.
          </p>
        </div>
      </section>

      <section className="cross">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Combineer met</span>
            <h2 className="sec">Sneller droog met de juiste combinatie</h2>
            <p className="lede">
              Circulatie en temperatuur bepalen hoe snel het vocht uit de bouwmassa komt. Deze
              toestellen versterken elkaar.
            </p>
          </div>
          <div className="cgrid">
            {cross.map((k) => {
              const c = PRODUCTS[k];
              return (
                <Link className="cc" to={`/verhuur/toestel/${k}`} key={k}>
                  <div className="cm">
                    <img src={c.img[0]} alt={c.name} loading="lazy" decoding="async" />
                  </div>
                  <div className="cb">
                    <h3>{c.short}</h3>
                    <div className="ccap">
                      {c.key[0][0]} {c.key[0][1]} {c.key[0][2]}
                    </div>
                    <div className="cf">
                      <span className="pr">
                        € {c.day}
                        <small> /dag</small>
                      </span>
                      <span className="go">Bekijken</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap faq-in">
          <div className="sec-head">
            <span className="kick">Veelgestelde vragen</span>
            <h2 className="sec">Over dit toestel</h2>
          </div>
          <div style={{ marginTop: 30 }}>
            {questions.map(([q, a], i) => (
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
              Geef uw oppervlakte en plafondhoogte in, u ziet meteen welk toestel, hoeveel units en
              welke prijs bij uw ruimte hoort.
            </p>
            <div className="cb">
              <Link className="btn btn-white" to="/verhuur/calculator">
                Naar de configurator
                <ArrowRightIcon strokeWidth={2.4} />
              </Link>
              <a className="btn btn-glass" href="tel:+3236899065">
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

export default VerhuurToestelPage;
