import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import VerderLezen from "@/components/VerderLezen";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import {
  ArrowRightIcon,
  BoltIcon,
  CardIcon,
  CheckIcon,
  PhoneIcon,
  SupportIcon,
} from "@/components/home-v3/icons";
import { TagIcon } from "@/components/content/icons";
import { breadcrumbSchema, faqSchema, offerCatalogSchema, serviceSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import {
  DROGERS,
  RENTAL_WEEKS,
  TARIEVEN_PUBLIEK,
  priceForWeeks,
  tariefInTaal,
  type Tarief,
} from "@/data/tarieflijst";
import { EXTRAS, LADDER_FEE, PRODUCTS, PUMP } from "@/data/verhuur";
import { toestelLabelIn } from "@/data/navigation";
import { coverInTaal, extrasInTaal } from "@/data/verhuur.fr";
import { findPackage } from "@/data/packages";
import { pakketInTaal } from "@/data/packages.fr";
import { NUMBER_LOCALE, type Taal } from "@/i18n/taal";
import { formatEuro, useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { COPY, rekenregelInTaal } from "./PrijzenPage.copy";
import { DEPOSIT_GROSS, EMPTY_OPTIONS, ONLINE_DISCOUNT, VAT_RATE, bookingSummary } from "@/lib/booking";
import { DEFAULT_CD, DEFAULT_SIZE, euro as euroCent, parseConfig } from "@/lib/verhuur";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";

/**
 * De prijzenpagina. Stond tot november 2026 op de oude shadcn-schil met de
 * `Navbar`; nu in de v3-vormtaal, met <V3Header> en de gedeelde opmaak uit
 * src/styles/v3-content.css.
 *
 * Alles wat hieronder als bedrag op de pagina komt, is afgeleid uit dezelfde
 * modules waarmee de boeking en Stripe rekenen: de dagprijzen uit PRODUCTS, de
 * opties uit verhuur.ts, en het rekenvoorbeeld uit `bookingSummary` zelf. Er
 * stond op /prijzen ooit een verzonnen tabel; een rekenvoorbeeld met
 * overgetypte getallen zou na de eerste prijswijziging in het portaal
 * hetzelfde worden.
 */
const PROCENT_ONLINE = Math.round(ONLINE_DISCOUNT * 100);
const PROCENT_BTW = Math.round(VAT_RATE * 100);
const MIDDEN = DROGERS[Math.floor(DROGERS.length / 2)];
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");
const STROOMKAST = EXTRAS.find((x) => x.k === "stroom");

/**
 * Het rekenvoorbeeld: een chapepakket op de standaardmaat van de calculator,
 * zonder kachels, met de opties die de boekingspagina standaard aanvinkt.
 * Precies wat een bezoeker ziet als hij die combinatie kiest en niets
 * verandert — dus geen "vanaf"-prijs die in de boeking alsnog hoger uitvalt.
 */
const VOORBEELD_CONFIG = parseConfig(
  new URLSearchParams({ wat: "chape", size: DEFAULT_SIZE, cd: DEFAULT_CD, heat: "0" })
);
const VOORBEELD_PAKKET = findPackage(Number(DEFAULT_SIZE), "chape", Number(DEFAULT_CD));
const VOORBEELD = VOORBEELD_PAKKET ? bookingSummary(VOORBEELD_CONFIG, EMPTY_OPTIONS) : null;

/**
 * Het opgenomen vermogen per toestel, uit de kerngegevens van de toestelpagina.
 * Dat is het maximum: de hygrostaat schakelt de droger terug zodra de
 * streefvochtigheid bereikt is, dus het werkelijke verbruik ligt lager. Een
 * stroomprijs staat er bewust niet bij — die verschilt per contract.
 */
function vermogenKw(key: string): number | null {
  const rij = PRODUCTS[key]?.key.find(([label]) => label === "Verbruik");
  if (!rij) return null;
  const kw = Number(rij[1].replace(",", "."));
  return Number.isFinite(kw) && kw > 0 ? kw : null;
}

const kwh = (n: number, taal: Taal) =>
  `${n.toLocaleString(NUMBER_LOCALE[taal], { maximumFractionDigits: 1 })} kWh`;

/**
 * Een bedrag mét centen in de notatie van de taal, zoals `euro` uit
 * lib/verhuur.ts ("€ 616,00", "− € 25,00") in het Nederlands.
 */
const euroCentIn = (n: number, taal: Taal) =>
  taal === "nl" ? euroCent(n) : `${n < 0 ? "− " : ""}${formatEuro(Math.abs(n), taal)}`;

const VERBRUIK = TARIEVEN_PUBLIEK.map((t) => ({ t, kw: vermogenKw(t.key) })).filter(
  (r): r is { t: (typeof TARIEVEN_PUBLIEK)[number]; kw: number } => r.kw !== null
);
const MIDDEN_KW = vermogenKw(MIDDEN.key);

/**
 * De ventilator en de kachel — het "extra" naast de ontvochtiger zelf.
 * Ze staan apart omdat ze de droging versnellen maar geen vocht afvoeren; de
 * tabel hierboven gaat over capaciteit, deze rij over ondersteuning.
 */
const EXTRA_DEVICES = TARIEVEN_PUBLIEK.filter((t) => t.litersPerDay === 0);

/** Iconen bij de drie garanties; de tekst staat in de copy. */
const GARANTIE_ICONEN = [BoltIcon, SupportIcon, CardIcon];

/*
 * De interne links van deze pagina (`verderLezen` in de copy). Ze stonden hier
 * al en verdwenen bij het herwerken van de pagina; daardoor had /prijzen geen
 * enkele link meer naar een realisatie of een regiopagina. Dat is precies hoe
 * een pagina een wees wordt: indexeerbaar en in de sitemap, maar zonder signaal
 * dat ze ergens bij hoort. `src/test/inhoudspaginas.test.tsx` bewaakt dat elke
 * inhoudspagina er minstens twee realisaties en één regio heeft.
 *
 * De prijsvragen in de copy staan zichtbaar onderaan de pagina én als
 * FAQ-schema in de head — die twee moeten gelijk blijven lopen.
 */

/**
 * Catalogusbedragen zoals deze bezoeker ze moet zien: incl. btw voor een
 * particulier, excl. voor een bedrijf, zonder centen wanneer er geen zijn.
 * Voor een bedrijf staat er dus letterlijk wat hier altijd stond ("€ 12").
 */
function useBedrag() {
  const toon = useToonBedrag();
  const taal = useTaal();
  const fmt = (excl: number) => {
    const { bedrag } = toon(excl);
    return formatEuro(bedrag, taal, Number.isInteger(bedrag) ? 0 : 2);
  };
  return { fmt, incl: toon(100).bedrag !== 100 };
}

const PrijzenPage = () => {
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const { fmt, incl } = useBedrag();
  const drogers = DROGERS.map((d) => tariefInTaal(d, taal));
  const midden = tariefInTaal(MIDDEN, taal);
  const faq = t.faq({
    drogers,
    midden,
    middenKw: MIDDEN_KW,
    prijs: fmt,
    weekprijs: (d: Tarief) => fmt(priceForWeeks(d, 1)),
    kwh: (n) => kwh(n, taal),
    kw: (n) => n.toLocaleString(NUMBER_LOCALE[taal]),
    incl,
  });
  const cover = coverInTaal(taal);
  const extras = extrasInTaal(taal);
  const rapport = RAPPORT && extras.find((x) => x.k === RAPPORT.k);
  const stroomkast = STROOMKAST && extras.find((x) => x.k === STROOMKAST.k);
  const voorbeeldPakket = VOORBEELD_PAKKET && pakketInTaal(VOORBEELD_PAKKET, taal);

  return (
  <div className="v3c pr-page">
    <PageMeta
      {...useSeo("prijzen")}
      jsonLd={[
        serviceSchema({
          name: t.service.name,
          description: t.service.description,
          path: lp("/prijzen"),
          serviceType: t.service.serviceType,
        }),
        offerCatalogSchema(
          t.catalogus,
          TARIEVEN_PUBLIEK.map((nl) => {
            const tr = tariefInTaal(nl, taal);
            return {
              /* De naam van het toestel zoals de pagina hem toont, niet de
                 typecode uit het portaal — zie `toestelLabel`. */
              name: toestelLabelIn(nl.key, taal),
              description: tr.summary,
              path: lp(tr.path),
              // Het schema draagt de catalogusprijs, excl. btw, zoals altijd.
              pricePerDay: tr.perDay,
            };
          })
        ),
        faqSchema(faq),
        breadcrumbSchema([
          { name: t.home, path: lp("/") },
          { name: t.prijzen, path: lp("/prijzen") },
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
            <span className="kick">{t.heroKick}</span>
            <h1>{t.heroH1}</h1>
            <p>{t.heroP}</p>
            <div className="hcta">
              <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
                {t.berekenPrijs}
                <ArrowRightIcon />
              </Link>
              <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {CONTACT.phoneLocal}
              </a>
            </div>
          </div>
          <div className="hero-vis">
            <img
              src="/vernast/man-zen-crop.webp"
              alt={t.heroAlt}
              width={700}
              height={760}
              loading="lazy"
              decoding="async"
              style={{ width: "min(84%,380px)", position: "relative", zIndex: 2 }}
            />
            {/*
              De badge zweeft (`floaty` in v3-content.css) en ligt áchter de man:
              met een hogere z-index dekte hij zijn gezicht af. Zelfde opbouw als
              op /drooggarantie.
            */}
            <div className="fbadge" style={{ top: "11%", right: "-14%", left: "auto", zIndex: 0 }}>
              <span className="ic"><TagIcon size={15} /></span>
              <div>
                {t.heroBadge}
                <small>{t.heroBadgeSub}</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/*
      PAKKET OF LOS TOESTEL — de belangrijkste keuze op deze pagina.

      We verhuren allebei, maar de Drooggarantie hangt uitsluitend aan een
      berekend pakket mét levering en installatie (zie /drooggarantie). Stond die
      scheiding er niet, dan leek een los toestel hetzelfde product voor minder
      geld, en kwam de garantiediscussie pas bij de eindmeting.
    */}
    <section className="sw" id="pakket-of-los">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.keuzeKick}</span>
          <h2 className="sec">{t.keuzeH2}</h2>
          <p className="lede">{t.keuzeLede}</p>
        </div>
        <div className="keuze2">
          <Reveal from="up" className="kz aanbevolen">
            <span className="kzlab">{t.pakketLab}</span>
            <span className="kzsub">{t.pakketSub}</span>
            <h3>{t.pakketH3}</h3>
            <p>{t.pakketP}</p>
            {t.pakketLijst(PROCENT_ONLINE)}
            <Link className="btn" to={lp("/verhuur/calculator")}>
              {t.pakketBtn}
              <ArrowRightIcon />
            </Link>
          </Reveal>
          <Reveal from="up" delay={0.08} className="kz">
            <span className="kzsub">{t.losSub}</span>
            <h3>{t.losH3}</h3>
            <p>{t.losP}</p>
            {t.losLijst}
            <Link className="btn btn-line" to={lp("/machines")}>
              {t.losBtn}
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
        <div className="note">{t.keuzeNote(lp)}</div>
      </div>
    </section>

    {/* ================= PRIJSOPBOUW ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.opbouwKick}</span>
          <h2 className="sec">{t.opbouwH2}</h2>
          <p className="lede">{t.opbouwLede}</p>
        </div>
        <div className="g2">
          <Reveal from="up" className="kaart">
            <div className="ki"><CheckIcon size={20} strokeWidth={2.4} /></div>
            <h3>{t.pakketprijsH3}</h3>
            <p>
              {t.pakketprijsP}
              {voorbeeldPakket && voorbeeldPakket.includes.length > 0
                ? t.inbegrepenZin(voorbeeldPakket.includes.join(", ").toLowerCase())
                : ""}
            </p>
          </Reveal>
          <Reveal from="up" delay={0.08} className="kaart">
            <div className="ki"><TagIcon size={20} /></div>
            <h3>{t.losprijsH3}</h3>
            <p>{t.losprijsP(midden.short, fmt(midden.perDay), fmt(priceForWeeks(midden, 2)))}</p>
          </Reveal>
          <Reveal from="up" delay={0.16} className="kaart">
            <div className="ki"><CardIcon size={20} /></div>
            <h3>{t.onlineH3(PROCENT_ONLINE)}</h3>
            <p>{t.onlineP(PROCENT_ONLINE, euroCentIn(DEPOSIT_GROSS, taal))}</p>
          </Reveal>
          <Reveal from="up" delay={0.24} className="kaart">
            <div className="ki"><BoltIcon size={20} /></div>
            <h3>{t.optiesH3}</h3>
            <ul className="feats" style={{ marginTop: "10px", marginBottom: 0 }}>
              {cover.filter((c) => c.price > 0).map((c) => (
                <li key={c.k}>
                  <CheckIcon size={12} strokeWidth={3} />
                  {t.dekking(c.name, fmt(c.price))}
                </li>
              ))}
              <li>
                <CheckIcon size={12} strokeWidth={3} />
                {t.pomp(lp, fmt(PUMP.price))}
              </li>
              <li>
                <CheckIcon size={12} strokeWidth={3} />
                {t.ladder(fmt(LADDER_FEE))}
              </li>
              {rapport && (
                <li>
                  <CheckIcon size={12} strokeWidth={3} />
                  {t.optie(rapport.name, fmt(rapport.price), rapport.unit)}
                </li>
              )}
              {stroomkast && (
                <li>
                  <CheckIcon size={12} strokeWidth={3} />
                  {t.optie(stroomkast.name, fmt(stroomkast.price), stroomkast.unit)}
                </li>
              )}
            </ul>
          </Reveal>
        </div>
        <p className="tblnote">{t.opbouwNote(incl, PROCENT_BTW)}</p>
      </div>
    </section>

    {/* Rekenvoorbeeld — rechtstreeks uit bookingSummary, zie boven. Toont
        excl. én incl. btw, dus voor iedereen hetzelfde. */}
    {VOORBEELD && voorbeeldPakket && (
      <section className="sw">
        <div className="wrap split">
          <div>
            <span className="kick">{t.vbKick}</span>
            <h2 className="sec">{voorbeeldPakket.title}</h2>
            <p className="lede">{t.vbLede1(VOORBEELD.weeks)}</p>
            <p className="lede">{t.vbLede2}</p>
            <div className="hcta" style={{ marginTop: "26px" }}>
              <Link className="btn" to={lp("/verhuur/calculator")}>
                {t.vbBtn}
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div style={{ display: "block" }}>
            <div className="tblwrap" style={{ marginTop: 0 }}>
              <div className="tblscroll">
                <table className="tbl bon">
                  <caption className="sr-only">{t.vbCaption}</caption>
                  <tbody>
                    <tr>
                      <th scope="row">{t.vbPakket(VOORBEELD.days)}</th>
                      <td>{euroCentIn(VOORBEELD.base, taal)}</td>
                    </tr>
                    {VOORBEELD.lines.map((l) => (
                      <tr key={l.l}>
                        <th scope="row">{rekenregelInTaal(l.l, taal)}</th>
                        <td>{l.inc ? t.inbegrepen : euroCentIn(l.v, taal)}</td>
                      </tr>
                    ))}
                    <tr>
                      <th scope="row">{t.vbKorting(PROCENT_ONLINE)}</th>
                      <td>{euroCentIn(-VOORBEELD.discount, taal)}</td>
                    </tr>
                    <tr className="totaal">
                      <th scope="row">{t.totaalExcl}</th>
                      <td>{euroCentIn(VOORBEELD.netTotal, taal)}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.btwRij(PROCENT_BTW)}</th>
                      <td>{euroCentIn(VOORBEELD.vat, taal)}</td>
                    </tr>
                    <tr className="totaal">
                      <th scope="row">{t.totaalIncl}</th>
                      <td>{euroCentIn(VOORBEELD.grossTotal, taal)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

    {/*
      HUURTARIEVEN — een echte <table>. De prijzen stonden hier eerder in een
      grid van div's met "€ XX" erin; zowel de bedragen als het tabelverband
      ontbraken dus. Een AI-antwoord op "wat kost een bouwdroger huren" komt uit
      precies deze cellen — die moeten leesbaar aan elkaar hangen.
    */}
    <section className="sr" id="tarieven">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.losKick}</span>
          <h2 className="sec">{t.losTabelH2}</h2>
          <p className="lede">{t.losTabelLede}</p>
        </div>

        <div className="tblwrap" style={{ marginTop: 0 }}>
          <div className="tblscroll">
            <table className="tbl">
              <caption className="sr-only">{t.losCaption(incl)}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.thDroger}</th>
                  <th scope="col">{t.thPerDag}</th>
                  {RENTAL_WEEKS.map((w) => (
                    <th key={w} scope="col">
                      {t.weken(w)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {drogers.map((d) => (
                  <tr key={d.key}>
                    <th scope="row">
                      <Link to={lp(d.path)}>{d.short}</Link>
                      <span style={{ display: "block", fontWeight: 400, fontSize: "11.5px", color: "var(--txt-dim)" }}>
                        {t.drogerSub(d.litersPerDay, d.volume)}
                      </span>
                    </th>
                    <td style={{ whiteSpace: "nowrap", fontWeight: 700, color: "var(--txt)" }}>
                      {fmt(d.perDay)}
                    </td>
                    {RENTAL_WEEKS.map((w) => (
                      <td key={w} style={{ whiteSpace: "nowrap" }}>
                        {fmt(priceForWeeks(d, w))}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="tblnote">{t.losNote(incl, PROCENT_BTW)}</p>

        <div className="split boven" style={{ marginTop: "44px" }}>
          <div>
            <span className="kick">{t.extraKick}</span>
            <h3 className="sec" style={{ fontSize: "clamp(22px,2.4vw,30px)" }}>
              {t.extraH3}
            </h3>
            <p className="lede">{t.extraLede}</p>
          </div>
          <div style={{ display: "block" }}>
            <div className="pricerows">
              {EXTRA_DEVICES.map((nl) => {
                const d = tariefInTaal(nl, taal);
                return (
                  <div key={d.key}>
                    <span className="pn">
                      {/* De tabel van de drogers hierboven draagt het merk uit
                          het portaal; deze rijen droegen de typecode van de
                          fabrikant ("Elektrische kachel TEddH 30 T"). Eén
                          namenstelsel: het label uit navigation.ts. */}
                      <Link to={lp(d.path)}>{toestelLabelIn(d.key, taal)}</Link>
                      <small>{d.type}</small>
                    </span>
                    <span className="pv">
                      {fmt(d.perDay)}
                      <span>{t.perDag}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ================= INBEGREPEN EN GARANTIES ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.inbKick}</span>
          <h2 className="sec">{t.inbH2}</h2>
          <p className="lede">{t.inbLede}</p>
        </div>
        <div className="vinkjes" style={{ marginBottom: "44px" }}>
          {t.inbegrepenLijst.map((item, i) => (
            <Reveal from="left" delay={i * 0.07} key={item}>
              <CheckIcon size={16} strokeWidth={3} />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
        <div className="g3">
          {t.garanties.map(({ title, desc }, i) => {
            const Icon = GARANTIE_ICONEN[i];
            return (
              <Reveal from="up" delay={i * 0.08} className="kaart" key={title}>
                <div className="ki"><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* ================= STROOMVERBRUIK ================= */}
    {VERBRUIK.length > 0 && (
      <section className="sr" id="stroomverbruik">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.stroomKick}</span>
            <h2 className="sec">{t.stroomH2}</h2>
            <p className="lede">{t.stroomLede}</p>
          </div>
          <div className="tblwrap" style={{ marginTop: 0 }}>
            <div className="tblscroll">
              <table className="tbl">
                <caption className="sr-only">{t.stroomCaption}</caption>
                <thead>
                  <tr>
                    {t.stroomTh.map((th) => (
                      <th scope="col" key={th}>{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {VERBRUIK.map(({ t: tarief, kw }) => (
                    <tr key={tarief.key}>
                      <th scope="row">
                        <Link to={lp(tarief.path)}>{tarief.short}</Link>
                      </th>
                      <td style={{ whiteSpace: "nowrap" }}>{kw.toLocaleString(NUMBER_LOCALE[taal])} kW</td>
                      <td style={{ whiteSpace: "nowrap" }}>{kwh(kw * 24, taal)}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{kwh(kw * 24 * 7, taal)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="note">{t.stroomNote(lp)}</div>
        </div>
      </section>
    )}

    {/*
      Veelgestelde vragen — zichtbaar, niet ingeklapt.

      Dit is de sectie waaruit een AI-assistent citeert wanneer iemand
      "wat kost een bouwdroger huren" vraagt. Dezelfde tekst staat als
      FAQ-schema in de head; schema voor onzichtbare inhoud is een
      overtreding, dus die twee mogen niet uit elkaar lopen.
    */}
    <FaqBlok
      titel={t.faqTitel}
      vragen={faq.map((item) => ({ q: item.question, a: item.answer }))}
      sleutel="pr-faq"
      variant="wit"
    >
      <div className="manband">
        <div className="mb-t">
          <span className="mbk">{t.slotKick}</span>
          <h3>{t.slotH3}</h3>
          <p>{t.slotP(PROCENT_ONLINE)}</p>
          <div className="mb-cta">
            <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
              {t.berekenPrijs}
              <ArrowRightIcon />
            </Link>
            <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
              <PhoneIcon /> {CONTACT.phoneLocal}
            </a>
          </div>
        </div>
        <img
          className="mb-man breed"
          src="/vernast/man-betaling.webp"
          alt={t.slotAlt}
          width={600}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </div>
    </FaqBlok>

    {/*
      Verder lezen staat hier in het wit en niet in het rood: samen met het
      rode contactformulier eronder was dit anders één rood vlak van bijna twee
      schermen hoog, met witte kaarten als enige contrast. De kaarten houden
      hun scheiding via `--bg-alt` (#F4F4F4) — dat zet `.sw .vlcard` al. Het
      formulier eronder blijft wél rood, zodat de pagina op rood eindigt.
    */}
    <VerderLezen
      titel={t.verderTitel}
      groepen={t.verderLezen.map((g) => ({
        ...g,
        links: g.links.map((l) => ({ ...l, to: lp(l.to) })),
      }))}
    />

    <ContactBlok
      kicker={t.contactKicker}
      titel={t.contactTitel}
      lede={t.contactLede}
      onderwerp="offerte_prijs"
      placeholder={t.contactPlaceholder}
    />

    </main>

    <V3Footer />
  </div>
  );
};

export default PrijzenPage;
