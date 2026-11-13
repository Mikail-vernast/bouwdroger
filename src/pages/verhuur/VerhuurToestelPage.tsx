import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Head } from "vite-react-ssg";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { ArrowRightIcon, CaretIcon, CheckIcon } from "@/components/verhuur/icons";
import { PinIcon } from "@/components/home-v3/icons";
import Datumkiezer from "@/components/Datumkiezer";
import ToestelKaart from "@/components/ToestelKaart";
import {
  PRODUCT_ADDONS,
  PRODUCT_ORDER,
  productImageAlt,
  PRODUCTS,
  SC_LABEL,
  toestelChips,
  toestelKey,
  toestelPad,
  type Product,
} from "@/data/verhuur";
import { PICKUP_BY_KEY, PICKUP_PERIODS, PICKUP_SLOTS } from "@/data/afhalen";
import { toestelLabel } from "@/data/navigation";
import { MAPS_URL } from "@/lib/site";
import { earliestPickupDate, langhuurKorting, longStayDiscount, serializeSelection } from "@/lib/afhalen";
import { firstFreeDate, usePickupAvailability } from "@/hooks/usePickupAvailability";
import { addDays, euroInt, isoDate } from "@/lib/verhuur";
import { toestelTitel } from "@/lib/toestelTitel";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

const MAX_QTY = 12;

/** `16/11/26` — dezelfde notatie als in de kalender, zie `Datumkiezer`. */
const kortDatum = (d: Date) =>
  `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(
    d.getFullYear(),
  ).slice(-2)}`;

/**
 * Vragen die op elke toestelpagina onder de toestelspecifieke FAQ komen: ze
 * gaan over het afhalen zelf en gelden dus voor het hele gamma.
 */
const PICKUP_FAQ: [string, string][] = [
  [
    "Waar haal ik het toestel af?",
    "Aan ons afhaalpunt: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar, vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel. Open ma–vr van 08:00 tot 17:00.",
  ],
  [
    "Wat breng ik mee bij de afhaling?",
    "Uw identiteitskaart en uw reservatiebevestiging (op uw telefoon volstaat). Wij laden het toestel mee in uw wagen of aanhangwagen.",
  ],
  [
    "Kan dit toestel ook geleverd en geïnstalleerd worden?",
    "Ja, maar uitsluitend als onderdeel van een berekend droogpakket. Alleen zo kunnen wij onze 100% droog-garantie waarmaken. Bereken uw pakket via de Calculator.",
  ],
  [
    "Waarom zijn afhaalprijzen lager?",
    "U bespaart de transport- en installatiekost. Reserveren doet u online: betaal alles vooraf met 5% korting, of bevestig met een voorschot en reken de rest af bij de afhaling.",
  ],
];

const PICKUP_STEPS = [
  {
    title: "Reserveer online",
    body: "Kies uw toestel, huurperiode en afhaalmoment. U betaalt vooraf met 5% korting of enkel het voorschot.",
  },
  {
    title: "Bevestiging binnen het uur",
    body: "U ontvangt uw reservatiebevestiging met routebeschrijving en wat u meebrengt (identiteitskaart).",
  },
  {
    title: "Afhalen op de A12",
    body: "Uw toestel staat klaar aan ons afhaalpunt. Een openstaand saldo scant en betaalt u hier met Bancontact, kaart of Apple Pay. Breng een ruime koffer, break of aanhangwagen mee.",
  },
  {
    title: "Terugbrengen, klaar",
    body: "Breng het toestel terug op het afgesproken moment. Uw factuur staat dan al in uw mailbox.",
  },
];

/*
  Periodes en afhaalmomenten komen uit `data/afhalen.ts`, dezelfde lijst als de
  afhaal-checkout. Stonden ze hier apart, dan kon een keuze onderweg stilzwijgend
  iets anders worden — en die pagina weigert nu wat ze niet kent.
*/
const PERIODS = PICKUP_PERIODS;

const VerhuurToestelPage = () => {
  const { toestel } = useParams();
  const [searchParams] = useSearchParams();

  // De URL draagt de slug ("bouwdroger-70-liter"), niet de sleutel ("ttk350");
  // `toestelKey` vertaalt terug en aanvaardt onderweg ook nog de oude
  // sleutel-URL. Valt terug op het eerste toestel uit het gamma: "ttk350"
  // hardcoderen breekt zodra dat toestel in het portaal uit de verhuur gaat.
  const key = toestelKey(toestel) ?? PRODUCT_ORDER[0];
  const prod: Product = PRODUCTS[key];
  // De afhaalvragen gelden voor elk toestel en staan onder de specifieke FAQ.
  const questions: [string, string][] = [...prod.faq, ...PICKUP_FAQ];

  /*
    Hoeveel stuks deze bezoeker mag kiezen. Van sommige toestellen hebben we er
    één; liet de teller hier tot twaalf lopen, dan rekende de pagina een totaal
    voor dat de afhaal-checkout meteen weer naar beneden bijstelt.
  */
  const maxQty = Math.min(MAX_QTY, PICKUP_BY_KEY[key]?.max ?? MAX_QTY);

  // Soortwoord, kerncijfer en dagprijs — zie toestelTitel.ts voor het waarom.
  const pageTitle = toestelTitel({ short: prod.short, type: prod.type, day: prod.day, spec: prod.key[0] });

  /*
    De naam die de klant kent, en niet `prod.name`.

    Dat veld komt rechtstreeks uit het portaal en draagt de typecode van de
    fabrikant: deze pagina zette "Ontvochtiger TTK 350 S" als <h1> en in het
    kruimelpad, terwijl de titel in het tabblad "Bouwdroger Performance huren"
    zei, de kaart op de homepage "Performance", de footer "Medium bouwdroger"
    en de kruisverkoop onderaan dezelfde pagina óók "Performance". Vier namen
    voor één machine, waarvan de enige die niemand zoekt het grootst op het
    scherm stond. `toestelLabel()` is de ene naam, site-breed.
  */
  const naam = toestelLabel(key);

  /*
    De galerij: eerst de foto's van het portaal, dan de infoplaten uit de
    ontwerpmap (specificaties en afmetingen). Ze staan in `prod.posts` en niet
    achteraan `prod.img` geplakt, zodat een foto die het portaal er later bij
    publiceert de alt-teksten niet laat verschuiven.
  */
  const shots: { src: string; alt: string }[] = [
    ...prod.img.map((src, i) => ({ src, alt: productImageAlt(prod, i) })),
    ...prod.posts.map(([src, alt]) => ({ src, alt })),
  ];

  const [qty, setQty] = useState(() =>
    Math.max(1, Math.min(maxQty, parseInt(searchParams.get("units") || "1", 10) || 1))
  );
  const [days, setDays] = useState(7);
  const [addons, setAddons] = useState<Record<string, boolean>>({});
  const [shot, setShot] = useState(0);
  const [slot, setSlot] = useState(PICKUP_SLOTS[1]);
  const [openFaq, setOpenFaq] = useState(0);

  /*
    Leeg bij de prerender én bij de eerste render in de browser, pas na mount
    ingevuld — dezelfde reden als op de afhaalpagina. "Morgen" is bij de build
    een andere dag dan bij de bezoeker, en een datum uit de initializer gaf dus
    een hydratatiefout waarna React de geprerenderde pagina weggooide en
    opnieuw opbouwde.

    `minDate` is morgen en niet vandaag: wij zetten een toestel minstens 24 uur
    op voorhand klaar. De datumkiezer liet vandaag toe, en wie om 16.50 u voor
    dezelfde dag reserveerde stond tien minuten later voor een deur waar niets
    klaarstond. `pickupDate` in `orderIntake.ts` weigert diezelfde datum
    server-side — een `min` in de browser is geen controle.
  */
  const [startDate, setStartDate] = useState("");
  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    const min = earliestPickupDate();
    setMinDate(min);
    setStartDate((current) => (current && current >= min ? current : min));
  }, []);

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
  /*
    Vanaf vier weken zakt de huurprijs met 10%. Hetzelfde `longStayDiscount`
    dat `pickupSummary` gebruikt, zodat het bedrag op deze knop gelijk is aan
    wat de afhaalpagina toont en aan wat `api/afhaal-checkout.ts` server-side
    opnieuw uitrekent. De 5% voor online betalen komt daar op de afhaalpagina
    nog bovenop; die keuze staat hier nog niet.
  */
  const longStay = longStayDiscount(base + addTotal, days);
  const total = base + addTotal - longStay;

  /*
    Wat de bezoeker hier instelt, gaat mee naar de afhaal-checkout. Zonder deze
    parameters landde hij daar met een leeg formulier en moest hij toestel,
    aantal, periode en afhaalmoment opnieuw kiezen — terwijl hij dat net had
    gedaan. De pagina aan de andere kant leest ze met `parseSelection`.
  */
  const selection = serializeSelection({
    [key]: qty,
    ...Object.fromEntries(chosenAddons.map((k) => [k, 1])),
  });

  const pickupQuery = new URLSearchParams({
    d: selection,
    days: String(days),
    date: startDate,
    slot,
  }).toString();

  /*
    Van sommige toestellen hebben we er één. Zonder deze controle stelde de
    pagina "Direct beschikbaar" en een startdatum voor die al verhuurd was, en
    liep de bezoeker pas bij het afrekenen tegen een weigering aan.
  */
  const { blocked, loading: checkingDates, horizonDays } = usePickupAvailability(selection, days);
  const dateBlocked = blocked.includes(startDate);
  const suggestion = dateBlocked ? firstFreeDate(startDate, blocked, horizonDays) : null;

  /*
    Van wanneer tot wanneer. Alle periodes zijn veelvouden van zeven dagen, dus
    de terugbrengdag valt op dezelfde weekdag als de afhaaldag en nooit in het
    weekend, wanneer het magazijn dicht is.
  */
  const terug = useMemo(() => {
    const start = startDate ? new Date(`${startDate}T00:00:00`) : null;
    if (!start || Number.isNaN(start.getTime())) return null;
    return { start, eind: addDays(start, days) };
  }, [startDate, days]);

  const cross = PRODUCT_ORDER.filter((k) => k !== key);
  const vol = searchParams.get("vol");
  const sc = searchParams.get("sc");

  return (
    <div className="vh-prod">
      <PageMeta
        title={pageTitle}
        description={prod.sum}
        path={toestelPad(key)}
        image={prod.img[0]}
        ogType="product"
        jsonLd={[
          productSchema({
            name: prod.name,
            description: prod.sum,
            image: prod.img[0],
            path: toestelPad(key),
            pricePerDay: prod.day,
            category: prod.type,
            specs: prod.specs,
          }),
          faqSchema(questions.map(([question, answer]) => ({ question, answer }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Toestellen", path: "/machines" },
            { name: naam, path: toestelPad(key) },
          ]),
        ]}
      />

      <V3Header lightAfter={320} />

      <section className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/#toestellen">Toestellen</Link> <span>/</span>
            <span className="cur">{naam}</span>
          </div>

          <div className="pgrid">
            <div className="gal">
              <div className="main">
                <span className="badge">{prod.badge}</span>
                {/*
                  De hero-achtergrond is het LCP-element, maar staat in verhuur.css en wordt
                  pas ontdekt als die CSS binnen is (2,1 s load delay): vooruit halen, zoals
                  V3Hero doet. De productfoto niet ook preloaden — die concurreerde op een
                  trage lijn om dezelfde bandbreedte. Ze is wel niet meer lazy.
                */}
                <Head>
                  <link rel="preload" href="/vernast/bg-red-wide-2.webp" as="image" type="image/webp" fetchPriority="high" />
                </Head>
                <img src={shots[shot]?.src} alt={shots[shot]?.alt ?? ""} fetchPriority="high" decoding="async" />
              </div>
              {shots.length > 1 && (
                <div className="thumbs">
                  {shots.map((s, i) => (
                    <button
                      key={s.src}
                      type="button"
                      className={i === shot ? "on" : undefined}
                      onClick={() => setShot(i)}
                      aria-label={`Afbeelding ${i + 1}`}
                    >
                      <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="pinfo" id="boeken">
              <div className="ptype">{prod.type}</div>
              <h1>{naam}</h1>
              <div className="promo-online">
                <CheckIcon size={15} strokeWidth={2.4} />
                <b>5% korting bij online betalen</b>
                {/*
                  Proforma, niet "factuur". Wat er na het reserveren vertrekt is
                  een proforma: de huur loopt nog en de definitieve factuur
                  volgt pas na de terugbreng, wanneer de periode en eventuele
                  extra dagen vastliggen. "Instant factuur in uw mailbox" wekte
                  de verwachting van een boekhoudkundig stuk dat er dan nog niet
                  is.
                */}
                <span>&nbsp;· proforma factuur meteen in uw mailbox</span>
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
                  {/*
                    Antwoordt de controle niet, dan staat er "Beschikbaar" en
                    niet "Beschikbaarheid onbekend". Dat laatste stond er bij
                    elke storing van het portaal, en bij een bezoeker die nog
                    niets gekozen heeft stáát er ook geen selectie om na te
                    kijken — de badge zei dan iets verontrustends over een
                    toestel dat gewoon in het rek staat. De harde controle zit
                    in `api/afhaal-checkout.ts` en geeft een 409; alleen een
                    datum die écht bezet blijkt, houdt de knop hier tegen.
                  */}
                  <span className={`stock${dateBlocked ? " op" : ""}`}>
                    <span className="d" />{" "}
                    {checkingDates
                      ? "Beschikbaarheid nakijken…"
                      : dateBlocked
                        ? "Bezet op deze datum"
                        : "Beschikbaar"}
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
                      {/*
                        Geen `<input type="date">` meer: die opent de kalender
                        van de browser, en daarin is niet te zien dat het
                        magazijn in het weekend dicht is of dat een dag volzit.
                        Zie `components/Datumkiezer.tsx`.
                      */}
                      <Datumkiezer
                        id="startDate"
                        value={startDate}
                        min={minDate}
                        blocked={blocked}
                        rangeDays={days}
                        rangeLabel={PERIODS.find(([v]) => v === days)?.[1]}
                        invalid={dateBlocked}
                        describedBy={dateBlocked ? "dateWarn" : undefined}
                        onChange={setStartDate}
                      />
                    </div>
                    <div className="fld">
                      <label htmlFor="period">Huurperiode</label>
                      <select
                        id="period"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                      >
                        {/*
                          De korting staat in de keuzelijst zelf en niet alleen
                          onderaan bij het totaal: dit is het moment waarop de
                          bezoeker de periode kiest, en een voordeel dat hij pas
                          ziet nadat hij gekozen heeft, stuurt zijn keuze niet.
                        */}
                        {PERIODS.map(([v, label]) => {
                          const pct = Math.round(langhuurKorting(v) * 100);
                          return (
                            <option key={v} value={v}>
                              {label}
                              {pct > 0 ? ` · −${pct}%` : ""}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  {/*
                    De terugbrengdatum staat hier en niet alleen in de kalender:
                    wie de periode wisselt heeft die kalender meestal dicht, en
                    moest "1 week" dan zelf omrekenen naar een dag.
                  */}
                  {terug && (
                    <p className="retour">
                      Afhalen op <b>{kortDatum(terug.start)}</b>, terugbrengen op{" "}
                      <b>{kortDatum(terug.eind)}</b> — {days} dagen
                    </p>
                  )}

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
                          disabled={qty >= maxQty}
                          onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
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

                  {dateBlocked && (
                    <div className="datewarn" id="dateWarn" role="status">
                      <b>
                        Op {new Date(`${startDate}T00:00:00`).toLocaleDateString("nl-BE", {
                          day: "numeric",
                          month: "long",
                        })}{" "}
                        staat {qty > 1 ? "dit aantal" : "dit toestel"} al ingepland.
                      </b>
                      {suggestion ? (
                        <>
                          {" "}
                          De eerstvolgende vrije startdatum is{" "}
                          <button type="button" onClick={() => setStartDate(suggestion)}>
                            {new Date(`${suggestion}T00:00:00`).toLocaleDateString("nl-BE", {
                              day: "numeric",
                              month: "long",
                            })}
                          </button>
                          .
                        </>
                      ) : (
                        " De komende weken is er niets vrij, bel ons op 03 689 90 65."
                      )}
                    </div>
                  )}

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
                              <img src={a.img[0]} alt={productImageAlt(a, 0)} loading="lazy" decoding="async" />
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
                    {longStay > 0 && (
                      <div className="tline">
                        <span>Langhuurkorting ({Math.round(langhuurKorting(days) * 100)}%)</span>
                        <span className="disc">− {euroInt(longStay)}</span>
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
                  {/*
                    Een bezette datum stopt hier, niet pas op de afhaalpagina: die
                    zou dezelfde datum overnemen en pas bij het afrekenen weigeren.
                    Faalt de controle zelf, dan blijft de knop gewoon werken — de
                    server kijkt het daar hoe dan ook opnieuw na.
                  */}
                  {dateBlocked ? (
                    <button className="btn btn-red" type="button" disabled>
                      Niet beschikbaar op deze datum
                    </button>
                  ) : (
                    <Link className="btn btn-red" to={`/verhuur/afhalen?${pickupQuery}`}>
                      Reserveer voor afhaling, {euroInt(total)}
                      <ArrowRightIcon strokeWidth={2.4} />
                    </Link>
                  )}
                  <div className="note">
                    5% korting bij online betalen · lagere afhaalprijzen · liever geleverd én
                    geïnstalleerd? Dat kan{" "}
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
                  <h3>{title}</h3>
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
              reserveert online en haalt op wanneer het u past, wij zetten alles klaar.
            </p>
          </div>
          <div className="astep-grid">
            {PICKUP_STEPS.map((step, i) => (
              <div className="astep" key={step.title}>
                <div className="an">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>

          <div className="pickupbar">
            <PinIcon size={34} />
            <div className="pb-t">
              <b>Afhaalpunt Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar</b>
              <span>
                Vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel · Ma–Vr 08:00–17:00
              </span>
            </div>
            <a
              className="btn"
              href={MAPS_URL}
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
            <Link to="/verhuur/calculator">per pakket</Link>, alleen zo kunnen wij onze 100%
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
          {/*
            Dezelfde kaart als op de homepage, uit `ToestelKaart`. Hier stond
            een eigen variant met een rode fotokader en "BEKIJKEN" als klein
            rood woord; de bezoeker die van de homepage doorklikte, kreeg
            hetzelfde gamma in een ander jasje te zien.
          */}
          <div className="tk-grid">
            {cross.map((k) => {
              const c = PRODUCTS[k];
              return (
                <ToestelKaart
                  key={k}
                  href={toestelPad(k)}
                  tag={c.badge}
                  image={c.img[0]}
                  alt={productImageAlt(c, 0)}
                  name={toestelLabel(k)}
                  blurb={c.sum}
                  chips={toestelChips(c)}
                  price={euroInt(c.day)}
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
              {/*
                Zwart en niet glazig. `btn-glass` is half doorschijnend met een
                rand van 1 px, en naast de witte knop leest dat als een knop die
                uit staat — met een rand die de hoeken net anders laat lopen.
                De homepage zet hier `btn-dark` naast dezelfde witte knop.
              */}
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

export default VerhuurToestelPage;
