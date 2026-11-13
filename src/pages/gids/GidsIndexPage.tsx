import { useState } from "react";
import { Link } from "react-router-dom";
import GidsShell from "@/components/gids/GidsShell";
import { SEO } from "@/data/seo";
import { GIDSEN } from "@/data/navigation";
import { HUB_GROEPEN, HUB_ITEMS, type HubItem } from "@/components/gids/hubInhoud";
import { itemListSchema } from "@/lib/schema";
import "@/styles/gids-hub.css";

/**
 * De inhoudshub van de site.
 *
 * Deze pagina toonde alleen de drie gidsen onder /gids — terwijl /levering,
 * /prijzen, /waterschade en de rest van de uitlegpagina's nergens vanaf hier
 * bereikbaar waren. Wie op "Gidsen over bouwdroging" klikte kreeg dus drie
 * kaarten en een doodlopende straat.
 *
 * Daarna stonden ze er allemaal, maar als vier rasters onder elkaar: zes
 * schermen scrollen voor je wist wat er was. Nu staat alles in één raster en
 * kiest de bezoeker bovenaan waar zijn vraag over gaat.
 *
 * `actief` begint op null, dus de geprerenderde HTML bevat alle kaarten. Wie
 * geen JavaScript uitvoert — de antwoordmachines waarvoor we prerenderen —
 * krijgt de volledige lijst en niet een leeg raster.
 *
 * Wat er staat (samenvattingen, pictogrammen, kleuren, groepskoppen) komt uit
 * `src/components/gids/hubInhoud.ts`, dezelfde bron als het mega-menu en de
 * footer: een nieuwe informatiepagina verschijnt hier vanzelf mee.
 */

const Pijl = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Kaart = ({ item, tag }: { item: HubItem; tag: boolean }) => (
  <Link className="hubkaart" data-kleur={item.kleur} to={item.path}>
    {/* Het groepslabel alleen in het ongefilterde raster: zonder dat label
        staan "Levering" en "Hoe lang moet chape drogen?" naast elkaar zonder
        dat zichtbaar is dat de ene een dienst beschrijft en de andere een
        vraag. Binnen één filter weet u dat al. */}
    {tag && <span className="tag">{item.groep}</span>}
    <span className="kop">
      <span className="ki" aria-hidden="true">
        <item.Icoon size={19} />
      </span>
      <h3>{item.label}</h3>
    </span>
    {item.samenvatting ? <p>{item.samenvatting}</p> : null}
    <span className="meer" aria-hidden="true">
      Lees verder <Pijl />
    </span>
  </Link>
);

const GidsIndexPage = () => {
  const [actief, setActief] = useState<string | null>(null);
  const groep = HUB_GROEPEN.find((g) => g.titel === actief);
  const zichtbaar = groep ? groep.items : HUB_ITEMS;

  return (
    <GidsShell
      seo={SEO.gids}
      path="/gids"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Gidsen", path: "/gids" },
      ]}
      kick="Alles over drogen · gidsen"
      h1="Gidsen over bouwdroging"
      intro={
        <p>
          Alles wat wij over drogen uitgelegd hebben, op één pagina. Hoe lang iets moet drogen, welk
          toestel u nodig heeft, wat dat aan stroom kost, en wat er bij een levering inbegrepen zit.
          Zonder verkooppraat, met de cijfers uit onze eigen catalogus waar die er zijn.
        </p>
      }
      heroImg={{ src: "/vernast/team-tools.webp", alt: "De Vernast vakmannen met hun gereedschap" }}
      jsonLd={[
        itemListSchema(
          "Gidsen over bouwdroging",
          GIDSEN.map((g) => ({ name: g.label, path: g.path }))
        ),
      ]}
    >
      <section className="sw">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{HUB_ITEMS.length} antwoorden</span>
            <h2 className="sec">Waar gaat uw vraag over?</h2>
            <p className="lede">
              Druk op een onderwerp en u ziet meteen welke vragen wij daarover beantwoorden. Van
              droogtijden en toestelkeuze tot wat een levering kost.
            </p>
          </div>

          <div className="hubfilters">
            <button type="button" aria-pressed={actief === null} onClick={() => setActief(null)}>
              Alles <span className="n">{HUB_ITEMS.length}</span>
            </button>
            {HUB_GROEPEN.map((g) => (
              <button
                key={g.titel}
                type="button"
                data-kleur={g.kleur}
                aria-pressed={actief === g.titel}
                onClick={() => setActief(g.titel)}
              >
                {g.titel} <span className="n">{g.items.length}</span>
              </button>
            ))}
          </div>

          <div className="hubtel">
            {groep ? (
              <>
                <p>
                  <b>{zichtbaar.length}</b> van de {HUB_ITEMS.length} pagina's · {groep.titel}
                  <button type="button" onClick={() => setActief(null)}>
                    Toon alles
                  </button>
                </p>
                <p className="uitleg">{groep.lede}</p>
              </>
            ) : (
              <p>
                <b>{HUB_ITEMS.length}</b> pagina's, verdeeld over {HUB_GROEPEN.length} onderwerpen
              </p>
            )}
          </div>

          <div className="hubgrid">
            {zichtbaar.map((item) => (
              <Kaart item={item} key={item.path} tag={actief === null} />
            ))}
          </div>
        </div>
      </section>

      <section className="sw">
        <div className="wrap">
          <div className="note">
            <b>Staat uw vraag er niet bij?</b> Bekijk <Link to="/machines">het volledige gamma</Link>{" "}
            als u een toestel zoekt, <Link to="/realisaties">de realisaties</Link> als u wilt zien hoe
            een werf als de uwe verliep, of bereken meteen uw opstelling in de{" "}
            <Link to="/verhuur/calculator">droogcalculator</Link>. Liever iemand aan de lijn? Dat kan
            ook, via <Link to="/contact">contact</Link>.
          </div>
        </div>
      </section>
    </GidsShell>
  );
};

export default GidsIndexPage;
