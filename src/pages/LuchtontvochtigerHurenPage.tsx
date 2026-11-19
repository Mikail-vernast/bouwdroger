import { Link } from "react-router-dom";
import GidsShell from "@/components/gids/GidsShell";
import { useSeo } from "@/data/seo";
import { DROGERS, drogersInTaal, euro, priceForWeeks } from "@/data/tarieflijst";
import { REGIO_ROUTES, type RegioRoute } from "@/data/regio-slugs";
import { offerCatalogSchema } from "@/lib/schema";
import { toestelPad } from "@/data/verhuur";
import { lokaalPad, useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { COPY, type Bedragen, type Cijfers } from "./LuchtontvochtigerHurenPage.copy";

const PATH = "/luchtontvochtiger-huren";

/*
  Alle bedragen en capaciteiten komen uit DROGERS (tarieflijst.ts), dat zelf
  uit PRODUCTS en dus uit het portaal leest. Deze pagina bestaat voor een
  ander woord ("luchtontvochtiger", "ontvochtiger huren"), niet voor andere
  prijzen: wat hier staat, is per definitie wat /prijzen en de toestelpagina's
  zeggen.
*/
const VANAF = DROGERS.length ? Math.min(...DROGERS.map((t) => t.perDay)) : null;
const LITERS = DROGERS.map((t) => t.litersPerDay).filter(Boolean);
const GOEDKOOPSTE = DROGERS.find((t) => t.perDay === VANAF);
const CIJFERS: Cijfers = {
  goedkoopste: GOEDKOOPSTE,
  goedkoopsteWeek: GOEDKOOPSTE ? priceForWeeks(GOEDKOOPSTE, 1) : null,
  vanaf: VANAF,
  litersMin: LITERS.length ? Math.min(...LITERS) : null,
  litersMax: LITERS.length ? Math.max(...LITERS) : null,
};

/*
  Engelse provincienamen. `regio-slugs.ts` heeft alleen een `nameFr`, en dat
  bestand is niet van deze pagina. "Antwerpen" of "Oost-Vlaanderen" in een
  Engelse zin is even fout als « en Anvers » in een Franse: wie in het Engels
  zoekt, tikt "Antwerp" en "East Flanders". Zonder Engelse exoniem valt de naam
  terug op de Franse (de officiële naam van een Waalse provincie) en anders op
  de Nederlandse.
*/
const REGIO_EN: Record<string, string> = {
  antwerpen: "Antwerp",
  "oost-vlaanderen": "East Flanders",
  "west-vlaanderen": "West Flanders",
  "vlaams-brabant": "Flemish Brabant",
  "waals-brabant": "Walloon Brabant",
  brussel: "Brussels",
  limburg: "Limburg",
  henegouwen: "Hainaut",
  namen: "Namur",
  luik: "Liège",
  luxemburg: "Luxembourg",
  "noord-brabant": "North Brabant",
  "nederlands-limburg": "Dutch Limburg",
};
function regioNaamEn(r: Pick<RegioRoute, "slug" | "name" | "nameFr">): string {
  return REGIO_EN[r.slug] ?? r.nameFr ?? r.name;
}

const LuchtontvochtigerHurenPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const seo = useSeo("luchtontvochtigerHuren");
  /* Toestelnamen, badges en samenvattingen in de taal van de pagina. Frans
     stond eerst bewust op DROGERS, en toonde daardoor Nederlandse teksten
     ("Meest gehuurd", "Compacte, verrijdbare condensontvochtiger…"). */
  const drogers = drogersInTaal(taal);

  /* Nederlands blijft zoals het altijd was: excl. btw, "€ 9". Frans en Engels
     volgen de keuze particulier/bedrijf uit de keuzepopup. */
  const bedragen: Bedragen =
    taal === "nl"
      ? { prijs: euro, btw: "exclusief btw" }
      : { prijs: (excl) => toon(excl).tekst, btw: toon(0).label };

  return (
    <GidsShell
      seo={seo}
      path={PATH}
      crumbs={[
        { name: t.home, path: "/" },
        { name: t.crumb, path: PATH },
      ]}
      kick={t.kick}
      h1={t.h1}
      intro={t.intro(CIJFERS, bedragen)}
      faq={t.faq(CIJFERS, bedragen)}
      jsonLd={[
        offerCatalogSchema(
          t.catalogusNaam,
          drogers.map((d) => ({
            name: d.name,
            description: d.summary,
            path: lokaalPad(d.path, taal),
            pricePerDay: d.perDay,
          })),
        ),
      ]}
    >
      <section className="sw">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.gKick}</span>
            <h2 className="sec">{t.gH2}</h2>
            <p className="lede">{t.gLede(bedragen.btw)}</p>
          </div>
          <div className="g3">
            {drogers.map((d) => (
              <div className="kaart" key={d.key}>
                {d.badge ? <span className="kick">{d.badge}</span> : null}
                <h3>{d.name}</h3>
                <p>{t.kaartCapaciteit(d.litersPerDay, d.volume)}</p>
                <p className="prijs">
                  {t.kaartPrijs(bedragen.prijs(d.perDay), bedragen.prijs(priceForWeeks(d, 1)))}
                </p>
                <p>{d.summary}</p>
                <Link className="meer" to={lp(d.path)}>
                  {t.kaartMeer(d.short)}
                </Link>
              </div>
            ))}
          </div>
          <div className="note">{t.note(lp)}</div>
        </div>
      </section>

      <section className="sw2">
        <div className="wrap prose">
          <h2>{t.wH2}</h2>

          <h3>{t.kelderH3}</h3>
          <p>{t.kelderP(lp, toestelPad("teddh20"))}</p>

          <h3>{t.waterH3}</h3>
          <p>{t.waterP(lp)}</p>

          <h3>{t.nieuwbouwH3}</h3>
          <p>{t.nieuwbouwP(lp)}</p>

          <h2 style={{ marginTop: 40 }}>{t.proH2}</h2>
          <p>{t.proP(lp)}</p>

          <h2 style={{ marginTop: 40 }}>{t.afH2}</h2>
          <ul>
            <li>{t.afZelf(lp)}</li>
            <li>{t.afLever(lp)}</li>
          </ul>

          <h2 style={{ marginTop: 40 }}>{t.regioH2}</h2>
          <p>
            {t.regioIntro}{" "}
            {REGIO_ROUTES.map((r, i) => (
              <span key={r.path}>
                <Link to={lp(r.path)}>{t.regioLink(
                    taal === "nl" ? r.name : taal === "en" ? regioNaamEn(r) : r.nameFr ?? r.name,
                  )}</Link>
                {i < REGIO_ROUTES.length - 2 ? ", " : i === REGIO_ROUTES.length - 2 ? t.regioEn : "."}
              </span>
            ))}
          </p>
        </div>
      </section>
    </GidsShell>
  );
};

export default LuchtontvochtigerHurenPage;
