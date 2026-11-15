import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { REGIO_ROUTES, kaartVoor } from "@/data/regio-slugs";
import { gemeenteVanPlaats } from "@/data/gemeente-slugs";
import { STREKEN_PER_REGIO } from "@/data/provincie-gemeenten";
import { ArrowRightIcon } from "./icons";

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

const V3Regio = () => {
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
          <span className="kick">Leveringsgebied</span>
          <h2 className="sec">Wij leveren in heel België en in het zuiden van Nederland.</h2>
          <p className="lede">
            Klik op uw provincie, kies uw streek en zie meteen de gemeenten waar wij leveren,
            installeren en ophalen. Klik op de naam om naar de pagina van die provincie te gaan.
            Twijfelt u? Bel ons even.
          </p>
        </div>

        <div className="rg-streken rg-landen" role="tablist" aria-label="Gebied">
          {GROEPEN.map((g, i) => (
            <button
              key={g.naam}
              type="button"
              role="tab"
              aria-selected={i === groep}
              className={i === groep ? "actief" : undefined}
              onClick={() => kiesGroep(i)}
            >
              {g.naam}
            </button>
          ))}
        </div>

        <div className="regio-grid">
          <div className="rm-panel">
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
                  to={item.path}
                  aria-label={`Bouwdroger huren in ${item.name}`}
                >
                  <b />
                  {item.name}
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
                  {item.name}
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
              <Link to={region.path}>
                {region.name}
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
                <p className="rg-sub">Kies uw streek binnen {region.name}:</p>
                <div className="rg-streken" role="tablist" aria-label={`Streken in ${region.name}`}>
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
                      {st.naam}
                    </button>
                  ))}
                </div>
                {actieveStreek && <p className="rg-kenmerk">{actieveStreek.kenmerk}</p>}
              </>
            ) : (
              <p className="rg-sub">Een greep uit de gemeenten waar wij leveren en installeren:</p>
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
                    to={doel}
                    aria-label={
                      eigen
                        ? `Bouwdroger huren in ${town}`
                        : `${town}, bouwdroger huren in ${region.name}`
                    }
                  >
                    {town}
                  </Link>
                );
              })}
            </div>
            <p className="rg-note">
              Staat uw gemeente er niet bij? Wij leveren in heel België en in het zuiden van
              Nederland. Bel ons op
              03 689 90 65 en we bekijken het meteen.
            </p>
            <div className="rg-actions">
              <Link className="btn btn-red" to={region.path}>
                Bouwdroger huren in {region.name}
                <ArrowRightIcon size={14} />
              </Link>
              <Link className="btn btn-out" to="/verhuur/calculator">
                Gratis Calculator
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
        <nav className="rg-links" aria-label="Werkgebied">
          <span>Bouwdroger huren in:</span>
          {ALLE.map((r) => (
            <Link key={r.name} to={r.path}>
              {r.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default V3Regio;
