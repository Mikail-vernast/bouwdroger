import { Link } from "react-router-dom";
import GidsShell, { type GidsFaq } from "@/components/gids/GidsShell";
import { SEO } from "@/data/seo";
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
    path: t.path,
    kw: kw(opgenomen ?? verwarming),
    kachel: !opgenomen && !!verwarming,
  };
});

const DROGERS = TOESTELLEN.filter((t) => !t.kachel && /ttk/i.test(t.key) && t.kw !== null);
const VOORBEELD = DROGERS.find((t) => t.key === "ttk350") ?? DROGERS[0];

const getal = (n: number, decimalen = 1) =>
  n.toLocaleString("nl-BE", { minimumFractionDigits: 0, maximumFractionDigits: decimalen });
const bedrag = (n: number) =>
  `€ ${n.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const perDag = (k: number) => k * 24;
const PRIJS_TXT = bedrag(VOORBEELD_PRIJS_KWH);

const FAQ: GidsFaq[] = [
  {
    question: "Hoeveel stroom verbruikt een bouwdroger per dag?",
    answer: VOORBEELD?.kw
      ? `Reken met het opgenomen vermogen maal 24 uur. Onze ${VOORBEELD.short} neemt ${getal(VOORBEELD.kw, 2)} kW op; dat is hoogstens ${getal(perDag(VOORBEELD.kw))} kWh per etmaal als hij onafgebroken op vol vermogen draait. In de praktijk ligt het lager, omdat de hygrostaat het toestel terugschakelt zodra de streefvochtigheid bereikt is.`
      : "Reken met het opgenomen vermogen op het typeplaatje maal 24 uur. Dat is de bovengrens; in de praktijk ligt het lager, omdat de hygrostaat het toestel terugschakelt zodra de streefvochtigheid bereikt is.",
  },
  {
    question: "Wat kost een bouwdroger aan elektriciteit?",
    answer: VOORBEELD?.kw
      ? `Vermenigvuldig de kWh per dag met uw prijs per kWh. Met een voorbeeldprijs van ${PRIJS_TXT} per kWh kost de ${VOORBEELD.short} hoogstens ${bedrag(perDag(VOORBEELD.kw) * VOORBEELD_PRIJS_KWH)} per dag aan stroom. Uw eigen prijs staat op uw energiefactuur.`
      : `Vermenigvuldig de kWh per dag met uw prijs per kWh, die op uw energiefactuur staat.`,
  },
  {
    question: "Mag een bouwdroger 24 uur per dag en 's nachts aan blijven?",
    answer:
      "Ja. Een bouwdroger is gemaakt om dag en nacht door te draaien, en dat moet ook: elk uur stilstand laat het vocht in de lucht weer oplopen. Voert hij het water niet naar een reservoir maar via een slang of condenspomp af, dan loopt hij ook het weekend door zonder dat u iets moet legen.",
  },
  {
    question: "Verbruikt een ventilator of een bouwkachel meer dan een bouwdroger?",
    answer:
      "Een bouwventilator verbruikt minder dan een bouwdroger. Een elektrische bouwkachel verbruikt veel meer: zij levert warmte, en dat kost het meeste energie. Haar thermostaat schakelt wel terug zodra de ruimte op temperatuur is.",
  },
];

const StroomverbruikPage = () => (
  <GidsShell
    seo={SEO.gidsStroomverbruik}
    path={PATH}
    crumbs={[
      { name: "Home", path: "/" },
      { name: "Gidsen", path: "/gids" },
      { name: "Stroomverbruik van een bouwdroger", path: PATH },
    ]}
    kick="Gids · verbruik en kosten"
    h1="Stroomverbruik van een bouwdroger: wat kost het per dag?"
    intro={
      <p>
        Een bouwdroger draait dag en nacht, dus de vraag wat dat aan stroom kost is terecht. Het antwoord
        is een eenvoudige som: vermogen maal uren maal dagen maal uw prijs per kWh. Hieronder staat het
        vermogen van onze toestellen, een uitgewerkt rekenvoorbeeld en wat het verbruik in de praktijk
        omhoog of omlaag duwt.
      </p>
    }
    heroImg={{ src: "/vernast/man-duim-kabels.webp", alt: "Vernast technicus met de kabels van een bouwdroger" }}
    articlePublished="2026-09-29"
    faq={FAQ}
  >
    <section className="sw">
      <div className="wrap prose">
        <h2>Zo rekent u het verbruik uit</h2>
        <p>
          Elk elektrisch toestel heeft een <b>opgenomen vermogen</b>, uitgedrukt in kilowatt (kW). Dat
          getal staat op het typeplaatje en in de technische fiche. Het verbruik in kilowattuur (kWh) is
          dat vermogen maal het aantal uren dat het toestel draait. De kost is dat verbruik maal uw prijs
          per kWh:
        </p>
        <p className="note">
          <b>kW × 24 uur × aantal dagen × prijs per kWh = stroomkost</b>
        </p>
        <p>
          Het resultaat is een <b>bovengrens</b>. Een condensbouwdroger heeft een hygrostaat: zodra de
          luchtvochtigheid op de streefwaarde zit, schakelt de compressor terug en verbruikt het toestel
          veel minder. In de eerste dagen van een droging, als er veel vocht vrijkomt, zit u dicht bij die
          bovengrens; naar het einde toe duidelijk eronder.
        </p>

        <h2 style={{ marginTop: 40 }}>Het vermogen van onze toestellen</h2>
        <p>
          Hieronder het opgenomen vermogen zoals het in de technische fiche op de toestelpagina staat, met
          het maximale verbruik per etmaal en de kost per dag bij een <b>voorbeeldprijs van {PRIJS_TXT} per
          kWh</b>. Die prijs is alleen een voorbeeld om mee te rekenen; uw eigen tarief staat op uw
          energiefactuur en kan hoger of lager liggen.
        </p>
        <div className="tbl">
          <table>
            <caption>
              Maximaal verbruik bij continu vol vermogen. Voorbeeldprijs {PRIJS_TXT}/kWh, geen tarief van
              Vernast. Vermeldt de fiche geen vermogen, kijk dan op het typeplaatje van het toestel.
            </caption>
            <thead>
              <tr>
                <th scope="col">Toestel</th>
                <th scope="col">Vermogen</th>
                <th scope="col">Max. kWh per 24 u</th>
                <th scope="col">Max. per dag (voorbeeld)</th>
              </tr>
            </thead>
            <tbody>
              {TOESTELLEN.map((t) => (
                <tr key={t.key}>
                  <td>
                    <Link to={t.path}>{t.name}</Link>
                  </td>
                  {t.kw === null ? (
                    <td colSpan={3}>Niet in de fiche vermeld: zie het typeplaatje</td>
                  ) : (
                    <>
                      <td className="num">{getal(t.kw, 2)} kW</td>
                      <td className="num">{getal(perDag(t.kw))} kWh</td>
                      <td className="num">{bedrag(perDag(t.kw) * VOORBEELD_PRIJS_KWH)}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Bij de bouwkachels is die bovengrens vooral theoretisch: hun thermostaat schakelt af zodra de
          ruimte op temperatuur is, en hoeveel ze daarna nog draaien hangt af van hoe goed het gebouw de
          warmte vasthoudt. Toch is de kachel bijna altijd de grootste verbruiker op de werf. Verwarm daarom
          alleen waar het nodig is, zoals in een koude kelder of een winterwerf.
        </p>

        {VOORBEELD?.kw ? (
          <>
            <h2 style={{ marginTop: 40 }}>Rekenvoorbeeld: twee weken drogen</h2>
            <p>
              Stel: u droogt een nieuwbouwwoning met één {VOORBEELD.short} gedurende twee weken, en het
              toestel draait onafgebroken op vol vermogen. Met de voorbeeldprijs van {PRIJS_TXT} per kWh:
            </p>
            <ul>
              <li>
                {getal(VOORBEELD.kw, 2)} kW × 24 uur = <b>{getal(perDag(VOORBEELD.kw))} kWh per dag</b>
              </li>
              <li>
                {getal(perDag(VOORBEELD.kw))} kWh × 14 dagen = <b>{getal(perDag(VOORBEELD.kw) * 14)} kWh</b>
              </li>
              <li>
                {getal(perDag(VOORBEELD.kw) * 14)} kWh × {PRIJS_TXT} ={" "}
                <b>{bedrag(perDag(VOORBEELD.kw) * 14 * VOORBEELD_PRIJS_KWH)}</b> aan stroom, als bovengrens
              </li>
            </ul>
            <p>
              Zet daar de huur tegenover: dezelfde {VOORBEELD.short} huurt u los aan{" "}
              {euro(TARIEVEN_PUBLIEK.find((t) => t.key === VOORBEELD.key)?.perDay ?? 0)} per dag exclusief
              btw (zie <Link to="/prijzen">alle prijzen</Link>). Zet u er een ventilator bij, dan komt daar
              relatief weinig verbruik bij; een bouwkachel weegt veel zwaarder door.
            </p>
          </>
        ) : null}

        <h2 style={{ marginTop: 40 }}>Wat bepaalt het verbruik?</h2>
        <ul>
          <li>
            <b>Hoe nat het gebouw is.</b> Zolang er veel vocht vrijkomt, draait de compressor bijna
            continu. Naarmate chape en pleister droger worden, schakelt de hygrostaat vaker terug.
          </li>
          <li>
            <b>De temperatuur.</b> In een koude ruimte werkt een condensdroger minder efficiënt en draait
            hij langer voor hetzelfde resultaat. Waarom dat zo is, leest u in{" "}
            <Link to="/gids/condensdroger-of-adsorptiedroger">condensdroger of adsorptiedroger</Link>.
          </li>
          <li>
            <b>Een open huis.</b> Ramen op kiepstand of een open deur naar een vochtige kelder laten
            steeds nieuwe vochtige lucht binnen. Dan droogt de bouwdroger de buitenlucht in plaats van uw
            muren. Houd de ruimte zoveel mogelijk dicht.
          </li>
          <li>
            <b>Het juiste formaat.</b> Een te klein toestel draait wekenlang op vol vermogen; een passend
            toestel is sneller klaar. De <Link to="/verhuur/calculator">droogcalculator</Link> rekent uit
            wat bij uw oppervlakte past.
          </li>
          <li>
            <b>De droogduur zelf.</b> De grootste besparing is een kortere droging. Hoe lang chape en
            pleisterwerk nodig hebben, staat in{" "}
            <Link to="/gids/hoe-lang-moet-chape-drogen">hoe lang moet chape drogen</Link>.
          </li>
        </ul>
      </div>
    </section>

    <section className="sw2">
      <div className="wrap prose">
        <h2>Mag een bouwdroger 24 uur per dag en 's nachts aan?</h2>
        <p>
          Ja, en dat is ook de bedoeling. Een bouwdroger is gebouwd voor continu gebruik. Zet u hem 's
          nachts uit, dan loopt de luchtvochtigheid in een paar uur weer op en begint het vocht uit de
          lucht opnieuw in de muren en de vloer te trekken. U verliest dan meer droogtijd dan u aan stroom
          bespaart.
        </p>
        <p>
          Wat wel belangrijk is bij doorlopend gebruik:
        </p>
        <ul>
          <li>
            <b>Afvoer van het water.</b> Met een reservoir moet u regelmatig legen, anders valt het toestel
            stil. Met een slang naar een afvoer, of een condenspomp (bij ons {euro(PUMP.price)} per
            bouwdroger per dag), loopt de droging ook 's nachts en in het weekend door.
          </li>
          <li>
            <b>Een vrije plaats.</b> Zet het toestel niet tegen een muur of onder een tafel; de lucht moet
            vrij aan- en afgevoerd kunnen worden.
          </li>
          <li>
            <b>De elektrische kring.</b> Een gewone kring van 16 A op 230 V kan ongeveer 3,6 kW aan. Tel het
            vermogen op van alles wat erop hangt, zeker als er ook ander bouwgereedschap op draait. Onze
            bouwkachels werken op 400 V krachtstroom en vragen hun eigen aansluiting.
          </li>
        </ul>
        <div className="note">
          <b>Liever niet zelf rekenen?</b> In een droogpakket plaatsen onze techniekers de toestellen,
          stellen ze de streefwaarde in en meten ze het vocht voor en na. Zo draait er niet meer dan nodig
          en niet langer dan nodig. <Link to="/verhuur/calculator">Bereken uw pakket</Link> of bekijk{" "}
          <Link to="/levering">levering en installatie</Link>.
        </div>
      </div>
    </section>
  </GidsShell>
);

export default StroomverbruikPage;
