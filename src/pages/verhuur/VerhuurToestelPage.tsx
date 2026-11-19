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
  toestelKey,
  toestelPad,
  type Product,
} from "@/data/verhuur";
import { productInTaal, scLabelInTaal, toestelChipsInTaal, toestelTitelEn, toestelTitelFr } from "@/data/verhuur.fr";
import { PICKUP_BY_KEY, PICKUP_PERIODS, PICKUP_SLOTS } from "@/data/afhalen";
import { toestelLabelIn } from "@/data/navigation";
import { useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { NUMBER_LOCALE } from "@/i18n/taal";
import { COPY } from "./VerhuurToestelPage.copy";
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

/*
  De afhaalvragen en -stappen gelden voor elk toestel; ze staan in
  `VerhuurToestelPage.copy.ts`, per taal, onder de toestelspecifieke FAQ.
*/

/*
  Periodes en afhaalmomenten komen uit `data/afhalen.ts`, dezelfde lijst als de
  afhaal-checkout. Stonden ze hier apart, dan kon een keuze onderweg stilzwijgend
  iets anders worden — en die pagina weigert nu wat ze niet kent.
*/
const PERIODS = PICKUP_PERIODS;

/**
 * Een bedrag zoals de bezoeker het moet zien (incl. of excl. btw), zonder centen
 * wanneer er geen zijn — dezelfde regel als `euroInt`.
 */
function useGeld(): (excl: number) => string {
  const toon = useToonBedrag();
  const taal = useTaal();
  return (excl: number) => {
    const { bedrag } = toon(excl);
    if (taal === "nl") return euroInt(bedrag);
    const centen = Math.round(bedrag * 100) % 100 !== 0;
    // Engels zet het teken vóór het bedrag, met een decimale punt: `€29.50`.
    if (taal === "en") {
      return bedrag.toLocaleString(NUMBER_LOCALE.en, {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: centen ? 2 : 0,
        maximumFractionDigits: 2,
      });
    }
    return `${bedrag.toLocaleString(NUMBER_LOCALE[taal], {
      minimumFractionDigits: centen ? 2 : 0,
      maximumFractionDigits: 2,
    })} €`;
  };
}

const VerhuurToestelPage = () => {
  const { toestel } = useParams();
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  const geld = useGeld();
  const btw = toon(0).label;
  const scLabel = scLabelInTaal(taal);
  const [searchParams] = useSearchParams();

  // De URL draagt de slug ("bouwdroger-70-liter"), niet de sleutel ("ttk350");
  // `toestelKey` vertaalt terug en aanvaardt onderweg ook nog de oude
  // sleutel-URL. Valt terug op het eerste toestel uit het gamma: "ttk350"
  // hardcoderen breekt zodra dat toestel in het portaal uit de verhuur gaat.
  const key = toestelKey(toestel) ?? PRODUCT_ORDER[0];
  // Prijs, foto's en sleutels blijven die van PRODUCTS; alleen de tekst volgt de taal.
  const prod: Product = productInTaal(key, taal);
  // De afhaalvragen gelden voor elk toestel en staan onder de specifieke FAQ.
  const questions: [string, string][] = [...prod.faq, ...t.pickupFaq];

  /*
    Hoeveel stuks deze bezoeker mag kiezen. Van sommige toestellen hebben we er
    één; liet de teller hier tot twaalf lopen, dan rekende de pagina een totaal
    voor dat de afhaal-checkout meteen weer naar beneden bijstelt.
  */
  const maxQty = Math.min(MAX_QTY, PICKUP_BY_KEY[key]?.max ?? MAX_QTY);

  // Soortwoord, kerncijfer en dagprijs — zie toestelTitel.ts voor het waarom.
  const nl = PRODUCTS[key];
  const naam = toestelLabelIn(key, taal);
  const pageTitle =
    taal === "nl"
      ? toestelTitel({ short: nl.short, type: nl.type, day: nl.day, spec: nl.key[0] })
      : taal === "fr"
        ? toestelTitelFr(naam, geld(prod.day))
        : toestelTitelEn(naam, geld(prod.day));

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
  const periodeLabel = (dagen: number) =>
    t.periode(dagen, PERIODS.find(([v]) => v === dagen)?.[1] ?? String(dagen));
  const langeDatum = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString(NUMBER_LOCALE[taal], { day: "numeric", month: "long" });
  const [retourVoor, retourMidden, retourNa] = t.retour(days);
  const vol = searchParams.get("vol");
  const sc = searchParams.get("sc");

  return (
    <div className="vh-prod">
      <PageMeta
        title={pageTitle}
        description={prod.sum}
        path={lp(toestelPad(key))}
        image={prod.img[0]}
        ogType="product"
        jsonLd={[
          productSchema({
            name: prod.name,
            description: prod.sum,
            image: prod.img[0],
            path: lp(toestelPad(key)),
            pricePerDay: prod.day,
            category: prod.type,
            specs: prod.specs,
          }),
          faqSchema(questions.map(([question, answer]) => ({ question, answer }))),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.toestellen, path: lp("/machines") },
            { name: naam, path: lp(toestelPad(key)) },
          ]),
        ]}
      />

      <V3Header lightAfter={320} />

      <section className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link to={lp("/")}>{t.home}</Link> <span>/</span>
            <Link to={`${lp("/")}#toestellen`}>{t.toestellen}</Link> <span>/</span>
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
                      aria-label={t.afbeelding(i + 1)}
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
                <b>{t.promo}</b>
                {/*
                  Proforma, niet "factuur". Wat er na het reserveren vertrekt is
                  een proforma: de huur loopt nog en de definitieve factuur
                  volgt pas na de terugbreng, wanneer de periode en eventuele
                  extra dagen vastliggen. "Instant factuur in uw mailbox" wekte
                  de verwachting van een boekhoudkundig stuk dat er dan nog niet
                  is.
                */}
                <span>&nbsp;· {t.proforma}</span>
              </div>
              <p className="psum">{prod.sum}</p>

              {vol && (
                <div className="ctx on">
                  <CheckIcon size={16} strokeWidth={2.2} />
                  <p>
                    {t.ctxBasis} <b>{Number(vol).toLocaleString(NUMBER_LOCALE[taal])} m³</b>
                    {sc && scLabel[sc] && (
                      <>
                        {" · "}
                        <b>{scLabel[sc]}</b>
                      </>
                    )}
                    {qty > 1 && (
                      <>
                        {" · "}
                        <b>{t.ctxToestellen(qty)}</b> {t.ctxAanbevolen}
                      </>
                    )}
                    . <Link to={`${lp("/")}#configurator`}>{t.opnieuw}</Link>
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
                  <span className="bt">{t.afhaalreservatie}</span>
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
                      ? t.nakijken
                      : dateBlocked
                        ? t.bezet
                        : t.beschikbaar}
                  </span>
                </div>
                <div className="bb">
                  <div className="pickupline">
                    <PinIcon size={15} />
                    <span>
                      {t.afhaalpunt}
                      <small>{t.afhaalpuntSub}</small>
                    </span>
                  </div>
                  <div className="brow">
                    <div className="fld">
                      <label htmlFor="startDate">{t.startdatum}</label>
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
                        rangeLabel={periodeLabel(days)}
                        invalid={dateBlocked}
                        describedBy={dateBlocked ? "dateWarn" : undefined}
                        onChange={setStartDate}
                      />
                    </div>
                    <div className="fld">
                      <label htmlFor="period">{t.huurperiode}</label>
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
                        {PERIODS.map(([v]) => {
                          const pct = Math.round(langhuurKorting(v) * 100);
                          return (
                            <option key={v} value={v}>
                              {periodeLabel(v)}
                              {pct > 0 ? ` · −${pct}${taal === "fr" ? "\u202f" : ""}%` : ""}
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
                      {retourVoor}
                      <b>{kortDatum(terug.start)}</b>
                      {retourMidden}
                      <b>{kortDatum(terug.eind)}</b>
                      {retourNa}
                    </p>
                  )}

                  <div className="brow">
                    <div className="fld">
                      <label htmlFor="qtyIn">{t.aantal}</label>
                      <div className="qty">
                        <button
                          type="button"
                          aria-label={t.minder}
                          onClick={() => setQty((q) => Math.max(1, q - 1))}
                        >
                          −
                        </button>
                        <input type="text" id="qtyIn" value={qty} readOnly />
                        <button
                          type="button"
                          aria-label={t.meer}
                          disabled={qty >= maxQty}
                          onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="fld">
                      <label htmlFor="slot">{t.afhaalmoment}</label>
                      <select id="slot" value={slot} onChange={(e) => setSlot(e.target.value)}>
                        {PICKUP_SLOTS.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {dateBlocked && (
                    <div className="datewarn" id="dateWarn" role="status">
                      <b>{t.datumBezet(langeDatum(startDate), qty > 1)}</b>
                      {suggestion ? (
                        <>
                          {" "}
                          {t.eerstVrij}{" "}
                          <button type="button" onClick={() => setStartDate(suggestion)}>
                            {langeDatum(suggestion)}
                          </button>
                          .
                        </>
                      ) : (
                        t.nietsVrij
                      )}
                    </div>
                  )}

                  {addonKeys.length > 0 && (
                    <div className="addons">
                      <div className="al">{t.aanbevolen}</div>
                      <div>
                        {addonKeys.map((k) => {
                          const a = productInTaal(k, taal);
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
                              <span className="ap">
                                {geld(a.day)}
                                {t.perDag}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="total">
                    <div className="tline">
                      <span>
                        {prod.short} × {qty} × {days} {t.dagen}
                      </span>
                      <span>{geld(base)}</span>
                    </div>
                    {addTotal > 0 && (
                      <div className="tline" style={{ display: "flex" }}>
                        <span>
                          {chosenAddons.map((k) => PRODUCTS[k].short).join(" + ")} × {days} {t.dagen}
                        </span>
                        <span>{geld(addTotal)}</span>
                      </div>
                    )}
                    {longStay > 0 && (
                      <div className="tline">
                        <span>{t.langhuur(Math.round(langhuurKorting(days) * 100))}</span>
                        <span className="disc">− {geld(longStay)}</span>
                      </div>
                    )}
                    <div className="tline">
                      <span>{t.afhalenGratis}</span>
                      <span className="disc">{t.gratis}</span>
                    </div>
                    <div className="tline big">
                      <span className="tl-lab">
                        {t.totaal} {btw}
                      </span>
                      <span className="tl-val">{geld(total)}</span>
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
                      {t.nietBeschikbaar}
                    </button>
                  ) : (
                    <Link className="btn btn-red" to={lp(`/verhuur/afhalen?${pickupQuery}`)}>
                      {t.reserveer} {geld(total)}
                      <ArrowRightIcon strokeWidth={2.4} />
                    </Link>
                  )}
                  <div className="note">
                    {t.noteVoor}{" "}
                    <Link to={lp("/verhuur/calculator")} style={{ color: "var(--red)", fontWeight: 700 }}>
                      {t.perPakket}
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
            <span className="kick">{t.waarvoor}</span>
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
            <span className="kick">{t.techFiche}</span>
            <h2 className="sec">{t.volledigeSpecs}</h2>
            <p className="lede">{t.specsLede}</p>
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
            <span className="kick">{t.afhalenKick}</span>
            <h2 className="sec">{t.zoWerkt}</h2>
            <p className="lede">{t.afhalenLede}</p>
          </div>
          <div className="astep-grid">
            {t.pickupSteps.map((step, i) => (
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
              <b>{t.pickupbarTitel}</b>
              <span>{t.pickupbarSub}</span>
            </div>
            <a
              className="btn"
              href={MAPS_URL}
              target="_blank"
              rel="noopener"
            >
              {t.route}
            </a>
          </div>

          <div className="zwaarbar">
            <div className="zb-t">
              <span className="zk">{t.goedOmTeWeten}</span>
              <b>{t.zwaarTitel}</b>
              <p>{t.zwaarTekst}</p>
              <Link className="btn" to={lp("/verhuur/calculator")}>
                {t.zwaarCta}
                <ArrowRightIcon size={14} strokeWidth={2.4} />
              </Link>
            </div>
            <img
              src="/vernast/oudere-man.webp"
              alt={t.zwaarAlt}
              loading="lazy"
            />
          </div>

          <p className="af-note">
            {t.afNoteVoor} <Link to={lp("/verhuur/calculator")}>{t.perPakket}</Link>
            {t.afNoteNa}
          </p>
        </div>
      </section>

      <section className="cross">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.combineer}</span>
            <h2 className="sec">{t.combineerTitel}</h2>
            <p className="lede">{t.combineerLede}</p>
          </div>
          {/*
            Dezelfde kaart als op de homepage, uit `ToestelKaart`. Hier stond
            een eigen variant met een rode fotokader en "BEKIJKEN" als klein
            rood woord; de bezoeker die van de homepage doorklikte, kreeg
            hetzelfde gamma in een ander jasje te zien.
          */}
          <div className="tk-grid">
            {cross.map((k) => {
              const c = productInTaal(k, taal);
              return (
                <ToestelKaart
                  key={k}
                  href={lp(toestelPad(k))}
                  tag={c.badge}
                  image={c.img[0]}
                  alt={productImageAlt(c, 0)}
                  name={toestelLabelIn(k, taal)}
                  blurb={c.sum}
                  chips={toestelChipsInTaal(k, taal)}
                  price={geld(c.day)}
                  priceNote={`${t.perDag} ${btw}`}
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
            <span className="kick onred">{t.ctaKick}</span>
            <h2>{t.ctaTitel}</h2>
            <p>{t.ctaTekst}</p>
            <div className="cb">
              <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
                {t.ctaKnop}
                <ArrowRightIcon strokeWidth={2.4} />
              </Link>
              {/*
                Zwart en niet glazig. `btn-glass` is half doorschijnend met een
                rand van 1 px, en naast de witte knop leest dat als een knop die
                uit staat — met een rand die de hoeken net anders laat lopen.
                De homepage zet hier `btn-dark` naast dezelfde witte knop.
              */}
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

export default VerhuurToestelPage;
