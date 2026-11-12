import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import GidsShell from "@/components/gids/GidsShell";
import { SEO } from "@/data/seo";
import { ALLES_OVER_DROGEN, GIDSEN, type NavLinkItem } from "@/data/navigation";
import { itemListSchema } from "@/lib/schema";
import {
  BoltIcon,
  BrushIcon,
  CartIcon,
  CellarIcon,
  DropIcon,
  FileIcon,
  InfoIcon,
  MoldIcon,
  PrijsIcon,
  ShieldIcon,
  SupportIcon,
  TruckIcon,
} from "@/components/home-v3/icons";
import {
  ClockIcon,
  DrogerIcon,
  LayersIcon,
  LekIcon,
  WindIcon,
} from "@/components/content/icons";

/**
 * De inhoudshub van de site.
 *
 * Deze pagina toonde alleen de drie gidsen onder /gids — terwijl /levering,
 * /prijzen, /waterschade en de rest van de uitlegpagina's nergens vanaf hier
 * bereikbaar waren. Wie op "Gidsen over bouwdroging" klikte kreeg dus drie
 * kaarten en een doodlopende straat.
 *
 * De lijst komt daarom uit `ALLES_OVER_DROGEN`, dezelfde bron als het
 * mega-menu, de footer en het mobiele menu. Een nieuwe informatiepagina wordt
 * op één plek toegevoegd (`src/data/navigation.ts`) en verschijnt hier mee —
 * zonder samenvatting of pictogram valt ze terug op de standaard, ze
 * verdwijnt nooit stil.
 */

/** Wat elke pagina beantwoordt, in één of twee zinnen. */
const SAMENVATTING: Record<string, string> = {
  /* Gidsen */
  "/gids/hoe-lang-moet-chape-drogen":
    "Droogtijden per dikte, natuurlijk en met een bouwdroger, het verschil tussen cement- en anhydrietchape, vloerverwarming opstoken en restvocht meten. Met een aparte sectie over pleisterwerk.",
  "/gids/hoe-lang-moet-pleisterwerk-drogen":
    "Droogtijd per laagdikte, het verschil tussen gips- en cementpleister, waarom het vocht in een dichtgemaakt huis blijft hangen en wanneer de schilder mag komen.",
  "/gids/condensdroger-of-adsorptiedroger":
    "Hoe beide toestellen werken, waarom een condensdroger in de koude rendement verliest, en welk toestel past bij een kelder, een nieuwbouw of water onder de vloer.",
  "/gids/stroomverbruik-bouwdroger":
    "Het vermogen van onze toestellen, een rekenvoorbeeld in kWh en euro, en waarom een bouwdroger gewoon 24 uur per dag en 's nachts mag doordraaien.",

  /* Uitleg */
  "/hoe-drogen-werkt":
    "De techniek achter het drogen: hoe temperatuur, luchtvochtigheid en luchtbeweging samenwerken, waarom condensatie werkt en wat een hygrometer u precies vertelt.",
  "/waarom-bouwdroging":
    "Wat er misgaat als u wacht op goed weer: schimmel, loskomend pleisterwerk, vloeren die later bol komen te staan, en hoeveel weken een werf daarmee uitloopt.",
  "/drooggarantie":
    "Droog op de afgesproken datum of u huurt kosteloos verder. Wat de garantie dekt, welke voorwaarden eraan hangen en hoe de vochtmeting bij start en oplevering verloopt.",
  "/klantservice":
    "Verlengen, vroeger stoppen, een toestel dat niet doet wat het moet doen, een factuur of een dossier voor de verzekering, wie u belt en wat u mag verwachten.",

  /* Toepassingen */
  "/nieuwbouw-drogen":
    "Chape en pleisterwerk versneld drogen zonder het werk te forceren: hoeveel toestellen een woning nodig heeft, wanneer u mag starten en hoe u restvocht aantoont vóór de vloerder komt.",
  "/waterschade":
    "Wat u doet in de eerste 48 uur na een lek of een overstroming, hoe wij onder vloeren en achter wanden drogen, en welk meetrapport uw verzekeraar nodig heeft.",
  "/renovatie":
    "Een kelder die vochtig blijft, muren met zoutuitbloei of schimmel achter de kasten: hoe droging en vochtbestrijding op elkaar aansluiten en in welke volgorde.",
  "/ozonbehandeling":
    "Geur en schimmelsporen wegnemen ná de droging: wat ozon doet, hoe lang een behandeling duurt en waarom een ruimte daarna moet verluchten voor u er weer in kunt.",
  "/luchtontvochtiger-huren":
    "Het verschil tussen een huishoudelijke ontvochtiger en een bouwdroger, welke capaciteit bij welk volume hoort, en wanneer één toestel volstaat.",

  /* Prijzen & service */
  "/prijzen":
    "Eén dagprijs per toestel, zonder waarborg en zonder verborgen kosten, met korting bij langere periodes. Inclusief de tarieven per pakket en de voorwaarden in gewone taal.",
  "/levering":
    "Binnen 24 uur geleverd, geplaatst en ingesteld door onze technieker, met een vochtmeting bij de start. Wat er inbegrepen zit, wat de condenspomp doet en hoe het ophalen verloopt.",
  "/afhalen":
    "Losse toestellen zelf ophalen in Aartselaar, aan afhaaltarief. De route, de tijdsloten, wat er in uw auto past en waar u op let bij het vervoeren van een droger.",
};

/** Het pictogram per pagina; onbekend valt terug op {@link FileIcon}. */
const PICTOGRAM: Record<string, ComponentType<{ size?: number }>> = {
  "/gids/hoe-lang-moet-chape-drogen": ClockIcon,
  "/gids/hoe-lang-moet-pleisterwerk-drogen": BrushIcon,
  "/gids/condensdroger-of-adsorptiedroger": DrogerIcon,
  "/gids/stroomverbruik-bouwdroger": BoltIcon,

  "/hoe-drogen-werkt": DropIcon,
  "/waarom-bouwdroging": InfoIcon,
  "/drooggarantie": ShieldIcon,
  "/klantservice": SupportIcon,

  "/nieuwbouw-drogen": LayersIcon,
  "/waterschade": LekIcon,
  "/renovatie": CellarIcon,
  "/ozonbehandeling": MoldIcon,
  "/luchtontvochtiger-huren": WindIcon,

  "/prijzen": PrijsIcon,
  "/levering": TruckIcon,
  "/afhalen": CartIcon,
};

/**
 * De kop boven elke groep. De sleutel is de groepstitel uit
 * `ALLES_OVER_DROGEN`; een groep die hier niet staat krijgt haar eigen titel
 * als kop en geen inleiding — ze verschijnt dus hoe dan ook.
 */
const GROEPKOP: Record<string, { kop: string; lede: string }> = {
  Gidsen: {
    kop: "Kies uw vraag",
    lede: "Eén concrete vraag per gids, uitgewerkt met droogtijden, rekenvoorbeelden en de cijfers uit onze eigen catalogus.",
  },
  Uitleg: {
    kop: "Hoe drogen werkt, en waarom het niet vanzelf gaat",
    lede: "De achtergrond bij alles hierboven: de techniek, de reden om niet te wachten, en wat wij beloven wanneer u bij ons huurt.",
  },
  Toepassingen: {
    kop: "Uw situatie",
    lede: "Een nieuwbouw, een lek, een vochtige kelder of een geur die blijft hangen, elk met een eigen aanpak, droogtijd en opstelling.",
  },
  "Prijzen & service": {
    kop: "Wat het kost en hoe het geleverd wordt",
    lede: "De tarieven, wat er bij een levering inbegrepen zit, en wat er verandert wanneer u de toestellen zelf komt halen.",
  },
};

/* De gidsen vooraan: dit is hun pagina. De rest volgt in de volgorde van het
   menu, zodat iemand die van daar komt dezelfde indeling terugvindt. */
const GROEPEN = [
  ...ALLES_OVER_DROGEN.filter((g) => g.titel === "Gidsen"),
  ...ALLES_OVER_DROGEN.filter((g) => g.titel !== "Gidsen"),
].map((groep) => ({
  ...groep,
  // "Alle gidsen" is deze pagina zelf; een kaart die naar zichzelf linkt helpt
  // niemand en kost een crawler een beurt.
  items: groep.items.filter((item) => item.path !== "/gids"),
}));

const Kaart = ({ item }: { item: NavLinkItem }) => {
  const Icoon = PICTOGRAM[item.path] ?? FileIcon;
  return (
    <Link className="kaart gidskaart" to={item.path}>
      <span className="ki" aria-hidden="true">
        <Icoon size={20} />
      </span>
      <h3>{item.label}</h3>
      {SAMENVATTING[item.path] ? <p>{SAMENVATTING[item.path]}</p> : null}
      <span className="meer" aria-hidden="true">
        Lees verder
      </span>
    </Link>
  );
};

const GidsIndexPage = () => (
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
    {GROEPEN.map((groep, i) => {
      const kop = GROEPKOP[groep.titel];
      return (
        <section className={i % 2 === 0 ? "sw" : "sr"} key={groep.titel}>
          <div className="wrap">
            <div className="sec-head">
              <span className="kick">{groep.titel}</span>
              <h2 className="sec">{kop?.kop ?? groep.titel}</h2>
              {kop ? <p className="lede">{kop.lede}</p> : null}
            </div>
            <div className="g3">
              {groep.items.map((item) => (
                <Kaart item={item} key={item.path} />
              ))}
            </div>
          </div>
        </section>
      );
    })}

    <section className="sw">
      <div className="wrap">
        <div className="note">
          <b>Staat uw vraag er niet bij?</b> Bekijk <Link to="/machines">het volledige gamma</Link> als
          u een toestel zoekt, <Link to="/realisaties">de realisaties</Link> als u wilt zien hoe een
          werf als de uwe verliep, of bereken meteen uw opstelling in de{" "}
          <Link to="/verhuur/calculator">droogcalculator</Link>. Liever iemand aan de lijn? Dat kan
          ook, via <Link to="/contact">contact</Link>.
        </div>
      </div>
    </section>
  </GidsShell>
);

export default GidsIndexPage;
