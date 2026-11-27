import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import GidsShell from "@/components/gids/GidsShell";
import { useSeo } from "@/data/seo";
import { navigatie } from "@/data/navigation";
import { hubGroepen, hubItems, type HubItem } from "@/components/gids/hubInhoud";
import { useCopy, useLokaalPad, useTaal, type Copy } from "@/i18n/useTaal";
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

interface HubTekst {
  crumbHome: string;
  crumb: string;
  kick: string;
  h1: string;
  intro: string;
  heroAlt: string;
  lijst: string;
  antwoorden: (n: number) => string;
  vraag: string;
  lede: string;
  alles: string;
  vanDe: (zichtbaar: number, totaal: number) => string;
  toonAlles: string;
  verdeeld: (groepen: number) => string;
  meer: string;
  note: (lp: (p: string) => string) => ReactNode;
}

const COPY = {
  nl: {
    crumbHome: "Home",
    crumb: "Gidsen",
    kick: "Alles over drogen · gidsen",
    h1: "Gidsen over bouwdroging",
    intro:
      "Alles wat wij over drogen uitgelegd hebben, op één pagina. Hoe lang iets moet drogen, welk toestel u nodig heeft, wat dat aan stroom kost, en wat er bij een levering inbegrepen zit. Zonder verkooppraat, met de cijfers uit onze eigen catalogus waar die er zijn.",
    heroAlt: "De Vernast vakmannen met hun gereedschap",
    lijst: "Gidsen over bouwdroging",
    antwoorden: (n) => `${n} antwoorden`,
    vraag: "Waar gaat uw vraag over?",
    lede: "Druk op een onderwerp en u ziet meteen welke vragen wij daarover beantwoorden. Van droogtijden en toestelkeuze tot wat een levering kost.",
    alles: "Alles",
    vanDe: (z, n) => ` van de ${n} pagina's · `,
    toonAlles: "Toon alles",
    verdeeld: (g) => ` pagina's, verdeeld over ${g} onderwerpen`,
    meer: "Lees verder",
    note: (lp) => (
      <>
        <b>Staat uw vraag er niet bij?</b> Bekijk <Link to={lp("/machines")}>het volledige gamma</Link>{" "}
        als u een toestel zoekt, <Link to={lp("/realisaties")}>de realisaties</Link> als u wilt zien hoe
        een werf als de uwe verliep, of bereken meteen uw opstelling in de{" "}
        <Link to={lp("/verhuur/simulator")}>droogcalculator</Link>. Liever iemand aan de lijn? Dat kan
        ook, via <Link to={lp("/contact")}>contact</Link>.
      </>
    ),
  },
  fr: {
    crumbHome: "Accueil",
    crumb: "Guides",
    kick: "Tout sur le séchage · guides",
    h1: "Guides du séchage de chantier",
    intro:
      "Tout ce que nous avons expliqué sur le séchage, sur une seule page. Combien de temps un matériau doit sécher, de quel appareil vous avez besoin, ce que cela coûte en électricité, et ce qui est compris dans une livraison. Sans discours commercial, avec les chiffres de notre propre catalogue quand ils existent.",
    heroAlt: "Les techniciens de Vernast avec leurs outils",
    lijst: "Guides du séchage de chantier",
    antwoorden: (n) => `${n} réponses`,
    vraag: "Sur quoi porte votre question ?",
    lede: "Touchez un sujet et vous voyez aussitôt à quelles questions nous répondons à ce propos. Des temps de séchage et du choix de l'appareil jusqu'au prix d'une livraison.",
    alles: "Tout",
    vanDe: (z, n) => ` des ${n} pages · `,
    toonAlles: "Tout afficher",
    verdeeld: (g) => ` pages, réparties en ${g} sujets`,
    meer: "Lire la suite",
    note: (lp) => (
      <>
        <b>Votre question n'y figure pas ?</b> Consultez <Link to={lp("/machines")}>toute la gamme</Link>{" "}
        si vous cherchez un appareil, <Link to={lp("/realisaties")}>les réalisations</Link> si vous voulez voir
        comment s'est déroulé un chantier comme le vôtre, ou calculez directement votre installation avec le{" "}
        <Link to={lp("/verhuur/simulator")}>calculateur de séchage</Link>. Vous préférez parler à quelqu'un ? C'est
        possible aussi, via la page <Link to={lp("/contact")}>contact</Link>.
      </>
    ),
  },
  en: {
    crumbHome: "Home",
    crumb: "Guides",
    kick: "All about drying · guides",
    h1: "Guides to construction drying",
    intro:
      "Everything we have explained about drying, on one page. How long something needs to dry, which machine you need, what that costs in electricity, and what is included in a delivery. No sales talk, with the figures from our own catalogue where they exist.",
    heroAlt: "The Vernast tradesmen with their tools",
    lijst: "Guides to construction drying",
    antwoorden: (n) => `${n} answers`,
    vraag: "What is your question about?",
    lede: "Tap a topic and you will immediately see which questions we answer about it. From drying times and choice of machine to what a delivery costs.",
    alles: "All",
    vanDe: (z, n) => ` of ${n} pages · `,
    toonAlles: "Show all",
    verdeeld: (g) => ` pages, across ${g} topics`,
    meer: "Read more",
    note: (lp) => (
      <>
        <b>Is your question not listed?</b> Browse <Link to={lp("/machines")}>the full range</Link>{" "}
        if you are looking for a machine, <Link to={lp("/realisaties")}>our projects</Link> if you want to see how
        a site like yours went, or work out your set-up straight away in the{" "}
        <Link to={lp("/verhuur/simulator")}>drying calculator</Link>. Rather speak to someone? You can do
        that too, via <Link to={lp("/contact")}>contact</Link>.
      </>
    ),
  },
} satisfies Copy<HubTekst>;

const Pijl = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Kaart = ({ item, tag, meer }: { item: HubItem; tag: boolean; meer: string }) => (
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
      {meer} <Pijl />
    </span>
  </Link>
);

const GidsIndexPage = () => {
  const [actief, setActief] = useState<string | null>(null);
  const taal = useTaal();
  const lp = useLokaalPad();
  const t = useCopy(COPY);
  const HUB_GROEPEN = hubGroepen(taal);
  const HUB_ITEMS = hubItems(taal);
  const groep = HUB_GROEPEN.find((g) => g.titel === actief);
  const zichtbaar = groep ? groep.items : HUB_ITEMS;

  return (
    <GidsShell
      seo={useSeo("gids")}
      path="/gids"
      crumbs={[
        { name: t.crumbHome, path: "/" },
        { name: t.crumb, path: "/gids" },
      ]}
      kick={t.kick}
      h1={t.h1}
      intro={<p>{t.intro}</p>}
      heroImg={{ src: "/vernast/team-tools.webp", alt: t.heroAlt }}
      jsonLd={[
        itemListSchema(
          t.lijst,
          navigatie(taal).GIDSEN.map((g) => ({ name: g.label, path: g.path }))
        ),
      ]}
    >
      <section className="sw">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.antwoorden(HUB_ITEMS.length)}</span>
            <h2 className="sec">{t.vraag}</h2>
            <p className="lede">{t.lede}</p>
          </div>

          <div className="hubfilters">
            <button type="button" aria-pressed={actief === null} onClick={() => setActief(null)}>
              {t.alles} <span className="n">{HUB_ITEMS.length}</span>
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
                  <b>{zichtbaar.length}</b>{t.vanDe(zichtbaar.length, HUB_ITEMS.length)}{groep.titel}
                  <button type="button" onClick={() => setActief(null)}>
                    {t.toonAlles}
                  </button>
                </p>
                <p className="uitleg">{groep.lede}</p>
              </>
            ) : (
              <p>
                <b>{HUB_ITEMS.length}</b>{t.verdeeld(HUB_GROEPEN.length)}
              </p>
            )}
          </div>

          <div className="hubgrid">
            {zichtbaar.map((item) => (
              <Kaart item={item} key={item.path} tag={actief === null} meer={t.meer} />
            ))}
          </div>
        </div>
      </section>

      <section className="sw">
        <div className="wrap">
          <div className="note">{t.note(lp)}</div>
        </div>
      </section>
    </GidsShell>
  );
};

export default GidsIndexPage;
