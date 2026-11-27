import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { REGIO_ROUTES, kaartVoor } from "@/data/regio-slugs";
import { KAART_BREEDTE, KAART_HOOGTE, PROVINCIE_PADEN } from "@/data/kaart-provincies";
import { gemeenteVanPlaats } from "@/data/gemeente-slugs";
import { STREKEN_PER_REGIO } from "@/data/provincie-gemeenten";
import { useCopy, useLokaalPad, useTaal } from "@/i18n/useTaal";
import type { Taal } from "@/i18n/taal";
import { ArrowRightIcon } from "./icons";
import { COPY, PLAATS_EN, PROVINCIE_EN, PROVINCIE_FR, STREEK_EN, STREEK_FR } from "./V3Regio.copy";

interface Region {
  name: string;
  /** Pin position over the map of all of Belgium. */
  pin: CSSProperties;
  towns: string[];
  /** The region's own page. All six have one since 13-11-2026. */
  path: string;
  /** Key into STREKEN_PER_REGIO. */
  slug: string;
}

/*
  Alle zes komen uit dezelfde data als hun landingspagina, zodat de gemeenten
  op de kaart en de gemeenten op /bouwdroger-huren-<regio> niet uiteen kunnen
  lopen. Brussel stond hier tot 13-11-2026 hardgecodeerd omdat het geen pagina
  had; nu die bestaat, hoort het bij de rest en is de uitzondering weg.
*/
const bySlug = (slug: string): Region => {
  const r = REGIO_ROUTES.find((x) => x.slug === slug)!;
  /* De kaart is sinds 15-11-2026 die mét het zuiden van Nederland; de speld
     wordt daarvoor herrekend (zie `kaartVoor`). */
  const pin = kaartVoor({ pin: r.pin, metNederland: true }).pin;
  return { name: r.name, pin, towns: r.towns, path: r.path, slug };
};

/*
  Drie groepen, elk met hoogstens zes spelden. Met alle veertien gebieden
  tegelijk op de kaart liepen de labels over elkaar: Brussel, Vlaams- en
  Waals-Brabant liggen te dicht bij elkaar voor drie naamkaartjes.
  Volgorde binnen een groep: van west naar oost.
*/
const GROEPEN: { naam: string; regios: Region[]; start: number }[] = [
  {
    /* De zichtbare groepsnaam staat in `COPY.groepen`, in dezelfde volgorde. */
    naam: "Vlaanderen en Brussel",
    regios: ["west-vlaanderen", "oost-vlaanderen", "antwerpen", "vlaams-brabant", "brussel", "limburg"].map(bySlug),
    /** Opent op Antwerpen, de provincie van het magazijn. */
    start: 2,
  },
  {
    naam: "Wallonië",
    regios: ["henegouwen", "waals-brabant", "namen", "luik", "luxemburg"].map(bySlug),
    start: 0,
  },
  {
    naam: "Nederland",
    regios: ["zeeland", "noord-brabant", "nederlands-limburg"].map(bySlug),
    start: 0,
  },
];
const ALLE = GROEPEN.flatMap((g) => g.regios);

/* De Nederlandse provincies: hun gemeenten hebben geen Belgische Franse naam. */
const NEDERLAND = new Set(GROEPEN[2].regios.map((r) => r.slug));
/* Brussel en Wallonië: daar is de Franse plaatsnaam ook de Engelse (Ixelles, Mons). */
const FRANSTALIG = new Set(["brussel", ...GROEPEN[1].regios.map((r) => r.slug)]);

/**
 * De naam van een provincie in de taal van de pagina. `nameFr` komt uit
 * `regio-slugs.ts` (alleen de Belgische); de rest uit `PROVINCIE_FR`.
 */
function regioNaam(r: Region, taal: Taal): string {
  if (taal === "en") return PROVINCIE_EN[r.slug]?.naam ?? r.name;
  if (taal !== "fr") return r.name;
  const bron = REGIO_ROUTES.find((x) => x.slug === r.slug) as { nameFr?: string } | undefined;
  return bron?.nameFr ?? PROVINCIE_FR[r.slug]?.naam ?? r.name;
}

/**
 * De naam van een gemeente op de Franse kaart. Eerst `nameFr` uit
 * `gemeente-slugs.ts`; anders de Franse naam tussen haakjes die de Waalse
 * streeklijsten al dragen ("Bergen (Mons)" wordt "Mons"). Niet in Nederland:
 * daar is "Bergen (L.)" geen Franse naam maar een onderscheid met Bergen op Zoom.
 */
function plaatsNaam(town: string, regioSlug: string, taal: Taal): string {
  /* In het Engels: Vlaanderen en Nederland lokaal (op een paar exoniemen na),
     Brussel en Wallonië zoals in het Frans. */
  if (taal === "en" && !FRANSTALIG.has(regioSlug)) return PLAATS_EN[town] ?? town;
  if (taal === "nl" || NEDERLAND.has(regioSlug)) return town;
  const eigen = gemeenteVanPlaats(town) as { nameFr?: string; name: string } | undefined;
  if (eigen?.nameFr && eigen.name === town) return eigen.nameFr;
  const haakjes = /^.+ \((.+)\)$/.exec(town);
  /* Geen `eigen.nameFr` hier: "Zandvliet" vindt de pagina van Berendrecht. */
  return haakjes ? haakjes[1] : town;
}

const V3Regio = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const naam = (r: Region) => regioNaam(r, taal);
  const inRegio = (r: Region) => t.inRegio(r.slug, naam(r));
  const [groep, setGroep] = useState(0);
  const REGIONS = GROEPEN[groep].regios;
  const [active, setActive] = useState(GROEPEN[0].start);
  /*
    Welke streek binnen de gekozen provincie openstaat. Altijd de eerste bij
    het laden en bij elke wissel van provincie: een paneel dat opent op
    "De Kempen" omdat je dáár het laatst keek, verbergt de stad Antwerpen
    zonder te zeggen dat er nog vijf streken onder zitten.
  */
  const [streek, setStreek] = useState(0);
  const region = REGIONS[active];
  const plaats = (town: string) => plaatsNaam(town, region.slug, taal);
  const streken = STREKEN_PER_REGIO[region.slug] ?? [];
  /*
    `streek` kan na een provinciewissel buiten bereik vallen voor de nieuwe
    lijst; dit vangt dat op zonder een extra effect.
  */
  const actieveStreek = streken[Math.min(streek, streken.length - 1)];
  /*
    Met een strekenlijst toont het paneel élke gemeente van het gebied,
    verdeeld over die streken. Alle zes hebben er sinds 13-11-2026 een; de
    terugval op `region.towns` blijft staan voor het geval er een gebied
    bijkomt waarvan de lijst nog niet nagerekend is (zie
    provincie-gemeenten.ts).
  */
  const plaatsen = actieveStreek ? actieveStreek.gemeenten : region.towns;

  const kiesGroep = (g: number) => {
    setGroep(g);
    setActive(GROEPEN[g].start);
    setStreek(0);
  };

  const kiesRegio = (i: number) => {
    setActive(i);
    setStreek(0);
  };

  return (
    <section className="regio" id="regio">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.kick}</span>
          <h2 className="sec">{t.h2}</h2>
          <p className="lede">{t.lede}</p>
        </div>

        <div className="rg-streken rg-landen" role="tablist" aria-label={t.gebied}>
          {GROEPEN.map((g, i) => (
            <button
              key={g.naam}
              type="button"
              role="tab"
              aria-selected={i === groep}
              className={i === groep ? "actief" : undefined}
              onClick={() => kiesGroep(i)}
            >
              {t.groepen[i] ?? g.naam}
            </button>
          ))}
        </div>

        <div className="regio-grid">
          <div className="rm-panel">
            {/*
              De kaart als echte provincies in plaats van een achtergrondbeeld,
              zodat de gekozen provincie volledig rood kan kleuren (16-11-2026).
              Een speld alleen zei niet waar Antwerpen ophoudt en Limburg begint.
            */}
            <svg
              className="rm-kaart"
              viewBox={`0 0 ${KAART_BREEDTE} ${KAART_HOOGTE}`}
              aria-hidden="true"
              focusable="false"
            >
              {Object.entries(PROVINCIE_PADEN).map(([slug, d]) => (
                <path key={slug} d={d} fillRule="evenodd" className={slug === region.slug ? "actief" : undefined} />
              ))}
            </svg>
            {/*
              Twee dingen op één speld: de provincie kiezen, en naar haar
              pagina gaan. Een speld die alleen de gemeentenlijst verwisselde
              las als een knop die niets deed -- wie "Antwerpen" aandrukt
              verwacht de Antwerpse pagina, niet een andere chiplijst.

              Daarom is de *geselecteerde* speld een link en de rest een knop.
              Antwerpen staat bij het laden al open, dus daar volstaat één
              klik; bij een ander gebied kiest de eerste klik het en gaat de
              tweede naar zijn pagina. Dat geldt sinds 13-11-2026 ook voor
              Brussel, dat tot dan een knop zonder bestemming was.
            */}
            {REGIONS.map((item, i) =>
              i === active ? (
                <Link
                  key={item.name}
                  className="pin active"
                  style={item.pin}
                  to={lp(item.path)}
                  aria-label={t.pinLabel(inRegio(item))}
                >
                  <b />
                  {naam(item)}
                  <ArrowRightIcon size={12} />
                </Link>
              ) : (
                <button
                  key={item.name}
                  type="button"
                  className={`pin${i === active ? " active" : ""}`}
                  style={item.pin}
                  onClick={() => kiesRegio(i)}
                >
                  <b />
                  {naam(item)}
                </button>
              )
            )}
          </div>

          <div className="regio-info">
            {/*
              De provincienaam is de grootste "Antwerpen" op het scherm en
              stond als dode kop boven een lijst links. Nu draagt hij dezelfde
              bestemming als de rode knop onderaan het paneel.
            */}
            <h3 id="rgName">
              <Link to={lp(region.path)}>
                {naam(region)}
                <ArrowRightIcon size={15} />
              </Link>
            </h3>
            {streken.length > 0 ? (
              <>
                {/*
                  De streken als keuzerij. De provincie telt 78 gemeenten;
                  die allemaal onder elkaar als chip zetten maakte van dit
                  paneel een muur waarin je je eigen gemeente niet terugvond.
                  Per streek zijn het er hoogstens 26, en de streeknaam zegt
                  bovendien iets over wat er daar gedroogd wordt.
                */}
                <p className="rg-sub">{t.kiesStreek(naam(region))}</p>
                <div className="rg-streken" role="tablist" aria-label={t.strekenIn(naam(region))}>
                  {streken.map((st, i) => (
                    <button
                      key={st.naam}
                      type="button"
                      role="tab"
                      id={`rgStreek-${i}`}
                      aria-selected={i === Math.min(streek, streken.length - 1)}
                      aria-controls="rgChips"
                      className={i === Math.min(streek, streken.length - 1) ? "actief" : undefined}
                      onClick={() => setStreek(i)}
                    >
                      {(taal === "fr" && STREEK_FR[st.naam]) || (taal === "en" && STREEK_EN[st.naam]) || st.naam}
                    </button>
                  ))}
                </div>
                {actieveStreek && (
                  <p className="rg-kenmerk">
                    {t.kenmerk(actieveStreek.kenmerk, actieveStreek.gemeenten.slice(0, 3).map(plaats))}
                  </p>
                )}
              </>
            ) : (
              <p className="rg-sub">{t.greep}</p>
            )}
            {/*
              De gemeenten zagen eruit als knoppen en waren dode <span>'s. Wie
              "Antwerpen" of "Mechelen" aandrukte kreeg niets -- terwijl de
              pagina die net die gemeente behandelt één klik verderop stond.

              Elke chip gaat naar de regiopagina van haar provincie: die noemt
              de gemeente bij naam en beschrijft wat we er doen. Een eigen
              pagina per gemeente bestaat niet, en een chip die naar niets
              leidt is precies het probleem dat we hier oplossen. Sinds
              14-11-2026 geldt dat ook voor de negentien Brusselse gemeenten.
            */}
            <div
              className="rg-chips"
              id="rgChips"
              role={streken.length > 0 ? "tabpanel" : undefined}
              aria-labelledby={
                streken.length > 0 ? `rgStreek-${Math.min(streek, streken.length - 1)}` : undefined
              }
            >
              {plaatsen.map((town) => {
                /*
                  Heeft de gemeente een eigen pagina, dan gaat de chip daarheen
                  en niet naar de provincie. Tot 12-11-2026 wezen ze allemaal
                  naar de provincie, en dan kwam je op "Mechelen" drukken uit
                  op de Antwerpse pagina. Sinds 14-11-2026 heeft elke gemeente
                  van Vlaanderen en Brussel er een; de terugval op de
                  gebiedspagina blijft staan voor een naam die geen eigen
                  pagina heeft omdat een buurgemeente haar dekt.
                */
                const eigen = gemeenteVanPlaats(town);
                const doel = eigen?.path ?? region.path;
                return (
                  <Link
                    key={town}
                    to={lp(doel)}
                    aria-label={
                      eigen ? t.chipEigen(plaats(town)) : t.chipRegio(plaats(town), inRegio(region))
                    }
                  >
                    {plaats(town)}
                  </Link>
                );
              })}
            </div>
            <p className="rg-note">{t.noot}</p>
            <div className="rg-actions">
              <Link className="btn btn-red" to={lp(region.path)}>
                {t.huren(inRegio(region))}
                <ArrowRightIcon size={14} />
              </Link>
              <Link className="btn btn-out" to={lp("/verhuur/simulator")}>
                {t.calculator}
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/*
          Platte links naar alle zes de gebiedspagina's, altijd in de HTML. De
          kaart hierboven toont één gebied tegelijk en pas na een klik, dus een
          crawler die nooit klikt zou anders maar één regiolink zien.

          Brussel stond hier eerst als cursieve tekst tussen de vijf links,
          omdat het geen pagina had -- en dat wekte de indruk dat we er niet
          komen. Sinds het er een heeft, is het de zesde link.
        */}
        <nav className="rg-links" aria-label={t.werkgebied}>
          <span>{t.hurenIn}</span>
          {ALLE.map((r) => (
            <Link key={r.name} to={lp(r.path)}>
              {naam(r)}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default V3Regio;
