import { Link } from "react-router-dom";
import GidsShell, { GidsFaqSectie, type GidsFaq } from "@/components/gids/GidsShell";
import ContactBlok from "@/components/content/ContactBlok";
import Reveal from "@/components/Reveal";
import { useSeo } from "@/data/seo";
import { productInTaal } from "@/data/verhuur.fr";
import { NUMBER_LOCALE, type Taal } from "@/i18n/taal";
import { formatEuro, useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { COPY, type Ctx } from "./StroomverbruikPage.copy";
import { PRODUCTS, PUMP } from "@/data/verhuur";
import { TARIEVEN_PUBLIEK, euro } from "@/data/tarieflijst";

const PATH = "/gids/stroomverbruik-bouwdroger";

/**
 * Een VOORBEELDprijs per kWh, geen tarief van ons en geen marktgemiddelde.
 * Stroomprijzen verschillen per contract en per maand; deze waarde bestaat
 * alleen om de rekensom leesbaar te maken, en de pagina zegt dat er letterlijk
 * bij. Wie hem aanpast, past alleen het voorbeeld aan.
 */
const VOORBEELD_PRIJS_KWH = 0.3;

/** "1,1 kW" of "30 kW" uit de technische fiche → 1.1 of 30. */
function kw(waarde: string | undefined): number | null {
  const m = waarde?.match(/([\d.,]+)\s*kW/i);
  if (!m) return null;
  const n = Number(m[1].replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

interface Verbruik {
  key: string;
  name: string;
  short: string;
  /** "Condensontvochtiger", "Bouwventilator · luchtcirculatie", … */
  type: string;
  path: string;
  /** Opgenomen vermogen uit de fiche; null als de fiche het niet vermeldt. */
  kw: number | null;
  kachel: boolean;
}

/*
  Het vermogen komt uit de technische fiche op de toestelpagina
  (`PRODUCTS[key].specs`): "Opgenomen vermogen" voor drogers en ventilatoren,
  "Verwarmingsvermogen" voor de kachels. Vermeldt een fiche geen vermogen —
  vandaag de adsorptiedroger — dan staat er geen verzonnen getal, maar een
  verwijzing naar het typeplaatje.
*/
const TOESTELLEN: Verbruik[] = TARIEVEN_PUBLIEK.map((t) => {
  const specs = PRODUCTS[t.key]?.specs ?? [];
  const opgenomen = specs.find(([l]) => /opgenomen vermogen/i.test(l))?.[1];
  const verwarming = specs.find(([l]) => /verwarmingsvermogen/i.test(l))?.[1];
  return {
    key: t.key,
    name: t.name,
    short: t.short,
    type: t.type,
    path: t.path,
    kw: kw(opgenomen ?? verwarming),
    kachel: !opgenomen && !!verwarming,
  };
});

const DROGERS = TOESTELLEN.filter((t) => !t.kachel && /ttk/i.test(t.key) && t.kw !== null);
/*
  Het toestel waarmee de hele pagina rekent: de kleinste bouwdroger uit het
  gamma. Niet omdat hij het meest verhuurd wordt — dat is de TTK 350 S — maar
  omdat een bezoeker die "wat kost een bouwdroger per dag" intikt een ondergrens
  zoekt, en de pagina anders opent met een bedrag dat voor zijn situatie te hoog
  is. Wie een groter toestel nodig heeft, vindt het in de tabel hieronder.
*/
const VOORBEELD = DROGERS.find((t) => t.key === "ttk170") ?? DROGERS[0];

const getal = (n: number, decimalen = 1) =>
  n.toLocaleString("nl-BE", { minimumFractionDigits: 0, maximumFractionDigits: decimalen });
const bedrag = (n: number) =>
  `€ ${n.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** Altijd één decimaal — "3,3" naast "3" leest als een grotere kloof dan er is. */
const eenDecimaal = (n: number) =>
  n.toLocaleString("nl-BE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const perDag = (k: number) => k * 24;

/** De eenheid achter "50 L/…" in de vergelijkingskaarten. */
const PER_DAG_EENHEID: Record<Taal, string> = { nl: "dag", fr: "jour", en: "day" };
const PRIJS_TXT = bedrag(VOORBEELD_PRIJS_KWH);

/**
 * Het vergelijkingstoestel. De Dryfast DF 800 is de bouwdroger die bij de
 * meeste Belgische verhuurders in het gamma staat, dus de eerlijkste maatstaf.
 *
 * De cijfers komen letterlijk uit de fiche van de verdeler en staan hier mét
 * bron op het scherm: een vergelijking met een bij naam genoemd product moet
 * controleerbaar zijn, anders is het geen vergelijking maar een claim. Wijzigt
 * de fabrikant zijn fiche, pas dan deze constante én de bronregel aan.
 */
const CONCURRENT = {
  naam: "Dryfast DF 800",
  omschrijving: "De bouwdroger die bij de meeste verhuurders in het gamma staat",
  kw: 2.1,
  liters: 150,
  volume: 800,
  bron: "https://www.verbo.be/product/bouwdroger-dryfast-df800/",
  bronNaam: "productfiche van de verdeler",
};

/**
 * Het kleinere broertje van de DF 800, waarmee het rekenvoorbeeld vergeleken
 * wordt. Cijfers uit de fiche van de verdeler; zie de bronregel op het scherm.
 */
const CONCURRENT_KLEIN = {
  naam: "Dryfast DF 400",
  kw: 1.4,
  liters: 75,
  bron: "https://euromat.be/product/bouwdroger-df400/",
};

/** Liter water uit de lucht per verbruikte kilowattuur — de eco-maatstaf. */
const perKwh = (liters: number, k: number) => liters / perDag(k);

/*
  Welk toestel van ons naast de DF 800 staat, en waarom het niet over
  zuinigheid pér toestel gaat.

  Per liter onttrokken water ontlopen de toestellen elkaar weinig: de DF 800
  haalt 150 L uit 50,4 kWh, onze Boost 50 L uit 18 kWh. Het verschil zit
  niet in de techniek maar in het formaat. Een DF 800 is een toestel voor
  volumes tot 800 m³; zet je dat in een ruimte die er 250 nodig heeft, dan
  betaal je elke dag voor capaciteit die niet gebruikt wordt. Daarom vergelijkt
  dit blok verbruik en kost per etmaal, niet liter per kWh — dát is het getal
  waarop een verkeerd gedimensioneerd toestel de klant geld kost.
*/
const ONS = (() => {
  const t = TARIEVEN_PUBLIEK.find((x) => x.key === "ttk170");
  const vermogen = TOESTELLEN.find((x) => x.key === "ttk170")?.kw;
  return t && vermogen ? { ...t, kw: vermogen } : null;
})();

/* De rekensom van het voorbeeldtoestel, één keer uitgerekend: de statbalk, de
   meter, de somrij en de FAQ tonen allemaal dezelfde getallen. */
const V = VOORBEELD?.kw
  ? {
      short: VOORBEELD.short,
      path: VOORBEELD.path,
      kw: VOORBEELD.kw,
      kwhDag: perDag(VOORBEELD.kw),
      kostDag: perDag(VOORBEELD.kw) * VOORBEELD_PRIJS_KWH,
      kwhTweeWeken: perDag(VOORBEELD.kw) * 14,
      kostTweeWeken: perDag(VOORBEELD.kw) * 14 * VOORBEELD_PRIJS_KWH,
      huurDag: TARIEVEN_PUBLIEK.find((t) => t.key === VOORBEELD.key)?.perDay ?? 0,
    }
  : null;

/**
 * Hoeveel stroom onze kleinste bouwdroger bespaart tegenover een standaard
 * verhuurtoestel in dezelfde ruimte. Afgeleid, niet ingetypt: verandert het
 * vermogen in de fiche of in de fiche van de concurrent, dan verandert dit
 * percentage mee — en dus ook de belofte in de hero.
 */
const ZUINIGER = VOORBEELD?.kw
  ? Math.round((1 - perDag(VOORBEELD.kw) / perDag(CONCURRENT.kw)) * 100)
  : null;

/** Het hele getal en de decimaal apart — de meter laat de laatste cijfer tikken. */
const KWH_DELEN = V ? getal(V.kwhDag).split(",") : [];

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** Het aandachtsteken in de rode "waar u wel op let"-kaart. */
const Let = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v5" />
    <path d="M12 16h.01" />
  </svg>
);

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/* De pictogrammen bij de vijf factoren uit "wat bepaalt het verbruik"; de
   titels en teksten staan per taal in StroomverbruikPage.copy.tsx. */
const FACTOR_ICONEN = [
  <svg key="0" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" />
      </svg>,
  <svg key="1" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
      </svg>,
  <svg key="2" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18M9 21V9M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
      </svg>,
  <svg key="3" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18v10H3z" />
        <path d="M7 7v3M11 7v5M15 7v3M19 7v5" />
      </svg>,
  <svg key="4" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>,
];

const StroomverbruikPage = () => {
  const lp = useLokaalPad();
  const taal = useTaal();
  const toonBedrag = useToonBedrag();
  const nl = taal === "nl";
  /*
    De Nederlandse formatters hierboven blijven ongewijzigd in gebruik; in een
    andere taal komen dezelfde getallen in de notatie van die taal ("0,30 €").
    Catalogusbedragen (huur, condenspomp) tonen Frans en Engels zoals de
    bezoeker ze betaalt, met TVAC/HTVA of incl./excl. VAT; het Nederlands
    houdt zijn cataloguscijfer.
  */
  const fmtGetal = nl
    ? getal
    : (n: number, decimalen = 1) =>
        n.toLocaleString(NUMBER_LOCALE[taal], { minimumFractionDigits: 0, maximumFractionDigits: decimalen });
  const fmtBedrag = nl ? bedrag : (n: number) => formatEuro(n, taal);
  const catalogus = (excl: number) => {
    if (nl) return euro(excl);
    const b = toonBedrag(excl);
    return `${b.tekst} ${b.label}`;
  };
  const typeIn = (key: string, type: string) => (nl ? type : productInTaal(key, taal)?.type ?? type);
  const ctx: Ctx = {
    lp,
    getal: fmtGetal,
    bedrag: fmtBedrag,
    prijs: fmtBedrag(VOORBEELD_PRIJS_KWH),
    prijsKwh: VOORBEELD_PRIJS_KWH,
    perDag,
    huur: catalogus,
    pomp: catalogus(PUMP.price),
    V,
    ONS: ONS ? { ...ONS, type: typeIn(ONS.key, ONS.type) } : null,
    ZUINIGER,
    groot: CONCURRENT,
    klein: CONCURRENT_KLEIN,
    zonderVermogen: TOESTELLEN.some((x) => x.kw === null),
  };
  const t = useCopy(COPY)(ctx);
  const g = fmtGetal;
  const b = fmtBedrag;
  const P = ctx.prijs;
  const reken = V ? t.reken(V) : null;
  const meter = V ? t.meter(V) : null;
  const ons = ctx.ONS ? t.ons(ctx.ONS) : null;
  const O = ctx.ONS;

  return (
  <GidsShell
    seo={useSeo("gidsStroomverbruik")}
    path={PATH}
    crumbs={[
      { name: t.crumbHome, path: "/" },
      { name: t.crumbGidsen, path: "/gids" },
      { name: t.crumb, path: PATH },
    ]}
    kick={t.kick}
    h1={t.h1}
    intro={
      <>
        <p>{t.intro1}</p>
        {ZUINIGER && V ? <p>{t.intro2(V, ZUINIGER)}</p> : null}
      </>
    }
    heroImg={{
      src: "/vernast/man-zen-crop.webp",
      alt: t.heroAlt,
      width: "min(78%,360px)",
    }}
    heroBadge={
      ZUINIGER ? (
        <div className="fbadge" style={{ top: "-8%", right: "-17%", left: "auto", zIndex: 0 }}>
          <span className="ic">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6" />
            </svg>
          </span>
          <div>{t.badge(ZUINIGER)}</div>
        </div>
      ) : null
    }
    articlePublished="2026-09-29"
    faq={t.faq}
    faqZelfPlaatsen
  >
    {/* ============ DE SOM IN VIER GETALLEN ============ */}
    {V && (
      <div className="statrule">
        <div className="wrap">
          <Reveal className="band" from="up">
            <div className="st">
              <div className="n">
                {g(V.kw, 2)}
                <em>kW</em>
              </div>
              <div className="l">{t.stats(V)[0].l}</div>
            </div>
            <div className="st">
              <div className="n">
                {g(V.kwhDag)}
                <em>kWh</em>
              </div>
              <div className="l">{t.stats(V)[1].l}</div>
            </div>
            <div className="st">
              <div className="n">
                {P}
                <em>/kWh</em>
              </div>
              <div className="l">{t.stats(V)[2].l}</div>
            </div>
            <div className="st">
              <div className="n">
                24<em>{t.uur}</em>
              </div>
              <div className="l">{t.stats(V)[3].l}</div>
            </div>
          </Reveal>
        </div>
      </div>
    )}

    {/* ============ DE FORMULE ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>{t.formuleH2}</h2>
          <p>{t.formuleP1}</p>
          <p className="note">
            <b>{t.formule}</b>
          </p>
          <p>{t.formuleP2}</p>
        </Reveal>

        {/*
          De meter is versiering: elk getal erin staat ook in de tekst ernaast
          en in de tabel hieronder. Zo mist een bezoeker zonder JavaScript —
          en dat zijn de antwoordmachines waarvoor we prerenderen — niets.
        */}
        {/*
          Twee kaarten op één plek, die elkaar afwisselen: ons toestel en een
          bouwdroger van de concurrentie. Beide staan volledig in de
          HTML — het wisselen is CSS, geen JavaScript — zodat een lezer zonder
          scripts allebei de bedragen gewoon onder elkaar ziet staan. Elk getal
          erin komt ook in de tabel en de balken terug.
        */}
        {V && meter && (
          <Reveal className="meterdek" from="right" delay={0.1} aria-hidden="true">
            <div className="meter kaart-a">
              <div className="mt-h">
                <b>{meter.onsKop}</b>
                <span className="ons">{meter.zuinigst}</span>
              </div>
              <div className="mt-dial">
                <div className="mt-kwh">
                  {g(V.kwhDag)}
                  <em>kWh</em>
                </div>
                <div className="mt-sub">{meter.sub}</div>
              </div>
              <div className="mtrow">
                <span className="k">{meter.vermogen}</span>
                <span className="v">
                  {g(V.kw, 2)} <small>kW</small>
                </span>
              </div>
              <div className="mtrow">
                <span className="k">{meter.draaiuren}</span>
                <span className="v">
                  24 <small>{t.uur}</small>
                </span>
              </div>
              <div className="mtrow">
                <span className="k">{meter.voorbeeldprijs}</span>
                <span className="v">
                  {P} <small>/kWh</small>
                </span>
              </div>
              <div className="mt-res groen">
                <b>{meter.onsRes}</b>
                <span>{meter.aanStroom}</span>
              </div>
            </div>

            <div className="meter kaart-b">
              <div className="mt-h">
                <b>{meter.hunKop}</b>
                <span className="hun">{meter.zelfde}</span>
              </div>
              <div className="mt-dial">
                <div className="mt-kwh">
                  {g(perDag(CONCURRENT.kw))}
                  <em>kWh</em>
                </div>
                <div className="mt-sub">{meter.sub}</div>
              </div>
              <div className="mtrow">
                <span className="k">{meter.vermogen}</span>
                <span className="v">
                  {g(CONCURRENT.kw, 2)} <small>kW</small>
                </span>
              </div>
              <div className="mtrow">
                <span className="k">{meter.draaiuren}</span>
                <span className="v">
                  24 <small>{t.uur}</small>
                </span>
              </div>
              <div className="mtrow">
                <span className="k">{meter.voorbeeldprijs}</span>
                <span className="v">
                  {P} <small>/kWh</small>
                </span>
              </div>
              <div className="mt-res rood">
                <b>{meter.hunRes}</b>
                <span>{meter.aanStroom}</span>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>

    {/* ============ HET VERMOGEN VAN DE TOESTELLEN ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.tblKick}</span>
          <h2 className="sec">{t.tblH2}</h2>
          <p className="lede">{t.tblLede}</p>
        </Reveal>

        <Reveal className="tbl" from="up" delay={0.1}>
          <table>
            <caption>
              {t.caption}
              {ctx.zonderVermogen ? t.captionGeen : ""}
            </caption>
            <thead>
              <tr>
                <th scope="col">{t.thToestel}</th>
                <th scope="col">{t.thVermogen}</th>
                <th scope="col">{t.thKwh}</th>
                <th scope="col">{t.thDag}</th>
              </tr>
            </thead>
            <tbody>
              {TOESTELLEN.map((x) => (
                <tr key={x.key}>
                  <td>
                    <Link className="tnaam" to={lp(x.path)}>
                      {x.short}
                    </Link>
                    <small>{typeIn(x.key, x.type)}</small>
                  </td>
                  {x.kw === null ? (
                    <td colSpan={3}>{t.geenVermogen}</td>
                  ) : (
                    <>
                      <td className="num">{g(x.kw, 2)} kW</td>
                      <td className="num">{g(perDag(x.kw))} kWh</td>
                      <td className="num">{b(perDag(x.kw) * VOORBEELD_PRIJS_KWH)}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="note" from="up" delay={0.15}>
          {t.tblNote}
        </Reveal>
      </div>
    </section>

    {/* ============ REKENVOORBEELD ============ */}
    {V && reken && (
      <section className="sw">
        <div className="wrap wsplit">
          <Reveal className="sec-head" from="left" style={{ marginBottom: 0 }}>
            <span className="kick">{reken.kick}</span>
            <h2 className="sec">{reken.h2}</h2>
            <p className="lede">{reken.p1}</p>
            <p className="lede">{reken.p2}</p>
            <p className="lede">{reken.p3}</p>
          </Reveal>

          <Reveal className="vglkaart" from="right" delay={0.1}>
            <div className="vgl">
              <div className="vrow groen">
                <div className="vl">
                  <span>{reken.onsLabel}</span>
                  <b>{b(V.kostDag)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: `${Math.round((V.kw / CONCURRENT.kw) * 100)}%` }} />
                </div>
              </div>
              <div className="vrow rood">
                <div className="vl">
                  <span>
                    {CONCURRENT_KLEIN.naam}, {g(CONCURRENT_KLEIN.kw, 2)} kW
                  </span>
                  <b>{b(perDag(CONCURRENT_KLEIN.kw) * VOORBEELD_PRIJS_KWH)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: `${Math.round((CONCURRENT_KLEIN.kw / CONCURRENT.kw) * 100)}%` }} />
                </div>
              </div>
              <div className="vrow rood">
                <div className="vl">
                  <span>
                    {CONCURRENT.naam}, {g(CONCURRENT.kw, 2)} kW
                  </span>
                  <b>{b(perDag(CONCURRENT.kw) * VOORBEELD_PRIJS_KWH)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: "100%" }} />
                </div>
              </div>
              <div className="vrow huur">
                <div className="vl">
                  <span>{reken.huurLabel}</span>
                  <b>{catalogus(V.huurDag)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <p className="vglnoot">{reken.noot}</p>
          </Reveal>
        </div>

        <div className="wrap">
          <Reveal className="prose somkop" from="up" delay={0.15}>
            <h3>{reken.somKop}</h3>
          </Reveal>

          <Reveal className="somrij" from="up" delay={0.1}>
            <div className="som">
              <span className="sk">{reken.uurSom}</span>
              <span className="sv">
                {g(V.kwhDag)}
                <small>{reken.kwhDag}</small>
              </span>
            </div>
            <span className="somop" aria-hidden="true">
              ×
            </span>
            <div className="som">
              <span className="sk">{reken.dagen}</span>
              <span className="sv">
                {g(V.kwhTweeWeken)}
                <small>kWh</small>
              </span>
            </div>
            <span className="somop" aria-hidden="true">
              ×
            </span>
            <div className="som uit">
              <span className="sk">{reken.perKwh}</span>
              <span className="sv">
                {b(V.kostTweeWeken)}
                <small>{reken.stroom}</small>
              </span>
            </div>
          </Reveal>
          <Reveal className="somnoot" from="up" delay={0.15}>
            {reken.somnoot}
          </Reveal>

          <Reveal className="somvs" from="up" delay={0.2}>
            {reken.somvs}
          </Reveal>
        </div>
      </section>
    )}

    {/* ============ VEELGESTELDE VRAGEN ============ */}
    <GidsFaqSectie
      faq={t.faq}
      titel={t.faqTitel}
      variant="rood"
    />

    {/* ============ ONS TOESTEL NAAST DE DF 800 ============ */}
    {O && ons && (
      <section className="sw">
        <div className="wrap">
          <Reveal className="sec-head" from="up">
            <span className="kick">{ons.kick}</span>
            <h2 className="sec">{ons.h2}</h2>
            <p className="lede">{ons.lede}</p>
          </Reveal>

          <div className="ecog">
            <Reveal className="eco wij" from="left" delay={0.05}>
              <span className="et">{ons.onsLabel}</span>
              <h3>{O.short}</h3>
              <p className="esub">{ons.esub}</p>
              <div className="ekpi">
                {g(perDag(O.kw))}
                <em>{ons.kwhEtmaal}</em>
              </div>
              <p className="ekpil">{ons.ekpilOns}</p>
              <div className="erow">
                <span className="k">{ons.vermogen}</span>
                <span className="v">{g(O.kw, 2)} kW</span>
              </div>
              <div className="erow">
                <span className="k">{ons.afvoer}</span>
                <span className="v">{O.litersPerDay} L/{PER_DAG_EENHEID[taal]}</span>
              </div>
              <div className="erow">
                <span className="k">{ons.volume}</span>
                <span className="v">{ons.totVolume(O.volume)}</span>
              </div>
              <div className="erow">
                <span className="k">{ons.tweeWeken}</span>
                <span className="v">{b(perDag(O.kw) * 14 * VOORBEELD_PRIJS_KWH)}</span>
              </div>
              <p className="emeer">
                <Link to={lp(O.path)}>{ons.bekijk}</Link>
              </p>
            </Reveal>

            <Reveal className="eco hun" from="right" delay={0.1}>
              <span className="et">{ons.vglLabel}</span>
              <h3>{CONCURRENT.naam}</h3>
              <p className="esub">{t.concurrentOmschrijving}</p>
              <div className="ekpi">
                {g(perDag(CONCURRENT.kw))}
                <em>{ons.kwhEtmaal}</em>
              </div>
              <p className="ekpil">{ons.ekpilHun}</p>
              <div className="erow">
                <span className="k">{ons.vermogen}</span>
                <span className="v">{g(CONCURRENT.kw, 2)} kW</span>
              </div>
              <div className="erow">
                <span className="k">{ons.afvoer}</span>
                <span className="v">{CONCURRENT.liters} L/{PER_DAG_EENHEID[taal]}</span>
              </div>
              <div className="erow">
                <span className="k">{ons.volume}</span>
                <span className="v">{ons.totVolume(CONCURRENT.volume)}</span>
              </div>
              <div className="erow">
                <span className="k">{ons.tweeWeken}</span>
                <span className="v">{b(perDag(CONCURRENT.kw) * 14 * VOORBEELD_PRIJS_KWH)}</span>
              </div>
            </Reveal>
          </div>

          <div className="ecoslot">
          <Reveal className="note" from="up" delay={0.15}>
            {ons.note}
          </Reveal>

          <Reveal className="ecobron" from="up" delay={0.2}>
            {ons.bron}
          </Reveal>
          </div>
        </div>
      </section>
    )}

    {/* ============ WAT BEPAALT HET VERBRUIK ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.praktijkKick}</span>
          <h2 className="sec">{t.praktijkH2}</h2>
          <p className="lede">{t.praktijkLede}</p>
        </Reveal>
        <div className="cyc">
          {t.factoren.map((f, i) => (
            <Reveal className="cy" from="up" delay={i * 0.06} key={f.titel}>
              <i aria-hidden="true">0{i + 1}</i>
              <span className="ci2">{FACTOR_ICONEN[i]}</span>
              <h3>{f.titel}</h3>
              <p>{f.tekst}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ============ 24 UUR PER DAG ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.nachtKick}</span>
          <h2 className="sec">{t.nachtH2}</h2>
          <p className="lede">{t.nachtLede}</p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs groen" from="left" delay={0.05}>
            <span className="vt">{t.doorLabel}</span>
            <h3>{t.doorH3}</h3>
            <ul>
              {t.door.map((d) => (
                <li key={d.b}>
                  <Check />
                  <span>
                    <b>{d.b}</b> {d.tekst}
                  </span>
                </li>
              ))}
            </ul>
            <span className="vf">{t.doorVoet}</span>
          </Reveal>

          <Reveal className="vs rood" from="right" delay={0.1}>
            <span className="vt">{t.letLabel}</span>
            <h3>{t.letH3}</h3>
            <ul>
              {t.letop.map((d) => (
                <li key={d.b}>
                  <Let />
                  <span>
                    <b>{d.b}</b> {d.tekst}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="manband aansluitend" from="up">
          <div className="mb-t">
            <span className="mbk">{t.mbKick}</span>
            <h3>{t.mbH3}</h3>
            <p>{t.mbP}</p>
            <Link className="btn btn-white mb-cta" to={lp("/verhuur/calculator")}>
              {t.mbCta}
              <Arrow />
            </Link>
          </div>
          <img
            className="mb-man"
            src="/vernast/man-duim-kabels.webp"
            alt={t.mbAlt}
            style={{ width: "min(30%,320px)" }}
          />
        </Reveal>
      </div>
    </section>

    {/* ============ FORMULIER ============ */}
    <ContactBlok
      kicker={t.contact.kicker}
      titel={t.contact.titel}
      lede={t.contact.lede}
      onderwerpen={t.contact.onderwerpen}
      placeholder={t.contact.placeholder}
    />
  </GidsShell>
  );
};

export default StroomverbruikPage;
