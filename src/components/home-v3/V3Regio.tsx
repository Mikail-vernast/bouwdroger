import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { gemeenteVanPlaats } from "@/data/gemeente-slugs";
import { ArrowRightIcon } from "./icons";

interface Region {
  name: string;
  /** Pin position over the map of all of Belgium. */
  pin: CSSProperties;
  towns: string[];
  /** The region's own page, when it has one. Brussel has none (yet). */
  path?: string;
}

/*
  The five provinces come from the same data as their landing pages, so the
  towns on the map and the towns on /bouwdroger-huren-<regio> cannot drift
  apart. Brussel stays here only: we deliver there, but it has no page.
*/
const BRUSSEL: Region = {
  name: "Brussel",
  // Brussel ligt midden in Vlaams-Brabant, dus de twee spelden kunnen niet
  // allebei exact staan zonder over elkaar te vallen. Deze staat net ten
  // zuidwesten van die van de provincie, in de richting van Halle.
  pin: { left: "43%", top: "41%" },
  towns: [
    "Brussel-stad", "Schaarbeek", "Anderlecht", "Ukkel", "Elsene", "Etterbeek", "Jette", "Evere",
    "Vorst", "Sint-Gillis", "Molenbeek", "Laken", "Woluwe", "Oudergem", "Ganshoren", "Koekelberg",
  ],
};

const bySlug = (slug: string): Region => {
  const r = REGIO_ROUTES.find((x) => x.slug === slug)!;
  return { name: r.name, pin: r.pin, towns: r.towns, path: r.path };
};

/* Design order: west to east, Brussel between Vlaams-Brabant and Limburg. */
const REGIONS: Region[] = [
  bySlug("west-vlaanderen"),
  bySlug("oost-vlaanderen"),
  bySlug("antwerpen"),
  bySlug("vlaams-brabant"),
  BRUSSEL,
  bySlug("limburg"),
];

/** The design opens on Antwerpen — the province the depot sits in. */
const DEFAULT_REGION = 2;

const V3Regio = () => {
  const [active, setActive] = useState(DEFAULT_REGION);
  const region = REGIONS[active];

  return (
    <section className="regio" id="regio">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Leveringsgebied</span>
          <h2 className="sec">Wij leveren in heel Vlaanderen en Brussel.</h2>
          <p className="lede">
            Klik op uw provincie en zie meteen de gemeenten waar wij leveren, installeren en ophalen.
            Klik op de naam om naar de pagina van die provincie te gaan. Twijfelt u? Bel ons even.
          </p>
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
              klik; bij een andere provincie kiest de eerste klik haar en gaat
              de tweede naar haar pagina. Brussel blijft altijd een knop: we
              leveren er wel, maar het heeft geen eigen pagina.
            */}
            {REGIONS.map((item, i) =>
              i === active && item.path ? (
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
                  onClick={() => setActive(i)}
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
              {region.path ? (
                <Link to={region.path}>
                  {region.name}
                  <ArrowRightIcon size={15} />
                </Link>
              ) : (
                region.name
              )}
            </h3>
            <p className="rg-sub">Een greep uit de gemeenten waar wij leveren en installeren:</p>
            {/*
              De gemeenten zagen eruit als knoppen en waren dode <span>'s. Wie
              "Antwerpen" of "Mechelen" aandrukte kreeg niets -- terwijl de
              pagina die net die gemeente behandelt één klik verderop stond.

              Elke chip gaat naar de regiopagina van haar provincie: die noemt
              de gemeente bij naam en beschrijft wat we er doen. Een eigen
              pagina per gemeente bestaat niet, en een chip die naar niets
              leidt is precies het probleem dat we hier oplossen. Brussel heeft
              geen pagina, dus blijven die chips wél gewone tekst.
            */}
            <div className="rg-chips" id="rgChips">
              {region.towns.map((town) => {
                /*
                  Heeft de gemeente een eigen pagina, dan gaat de chip daarheen
                  en niet naar de provincie. Tot 12-11-2026 wezen ze allemaal
                  naar de provincie, en dan kwam je op "Mechelen" drukken uit
                  op de Antwerpse pagina. Zolang de pilot loopt hebben alleen
                  de Antwerpse gemeenten een eigen pagina; de rest valt terug
                  op de provincie in plaats van dood te staan.
                */
                const eigen = gemeenteVanPlaats(town);
                const doel = eigen?.path ?? region.path;
                if (!doel) return <span key={town}>{town}</span>;
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
              Staat uw gemeente er niet bij? Wij leveren in heel Vlaanderen en Brussel. Bel ons op
              03 689 90 65 en we bekijken het meteen.
            </p>
            <div className="rg-actions">
              {region.path && (
                <Link className="btn btn-red" to={region.path}>
                  Bouwdroger huren in {region.name}
                  <ArrowRightIcon size={14} />
                </Link>
              )}
              <Link className="btn btn-out" to="/verhuur/calculator">
                Bereken uw pakket
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/*
          Plain links to all five region pages, always in the HTML. The map
          above shows one province at a time and only after a click, so a
          crawler that never clicks would otherwise see a single region link.
        */}
        <nav className="rg-links" aria-label="Werkgebied">
          <span>Bouwdroger huren in:</span>
          {REGIONS.filter((r) => r.path).map((r) => (
            <Link key={r.name} to={r.path!}>
              {r.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default V3Regio;
