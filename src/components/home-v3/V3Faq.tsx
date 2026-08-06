import { PhoneIcon } from "./icons";

/**
 * Also feeds the FAQPage JSON-LD on the homepage, so the answers a visitor
 * reads and the answers a search engine indexes can never drift apart.
 */
export const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "Hoe weet ik welk toestel ik nodig heb?",
    a: "Onze slimme calculator geeft een eerste berekening op basis van volume, toepassing en situatie. Zo kiest u gerichter en sneller, en komt u meteen op de pagina met het juiste pakket en de prijs.",
  },
  {
    q: "Hoelang duurt bouwdroging?",
    a: "Dat hangt af van het volume, het materiaal, de beginsituatie, de temperatuur en de gewenste eindtoestand. Actieve droging verloopt doorgaans aanzienlijk sneller dan natuurlijke droging, de calculator geeft u een realistische inschatting.",
  },
  {
    q: "Is levering inbegrepen?",
    a: "Ja. Levering, ophaling en installatie op gelijkvloers zijn standaard inbegrepen binnen de voorziene servicevoorwaarden, net als standaard toebehoren zoals verlengkabels.",
  },
  {
    q: "Moet ik het waterreservoir zelf leegmaken?",
    a: "Niet altijd. Afhankelijk van het toestel en de situatie kan automatische waterafvoer voorzien worden, zodat het water rechtstreeks wegloopt en u niets hoeft te ledigen.",
  },
  {
    q: "Kan ik verlengen als het nog niet droog is?",
    a: "Ja, verlengen is mogelijk met één klik. Zo blijft uw planning flexibel en loopt uw project niet vast op een te krap ingeschatte huurtermijn.",
  },
  {
    q: "Kan ik ook spoedlevering aanvragen?",
    a: "Ja. Bij dringende schadegevallen of strakke planningen voorzien wij een spoedlevering.",
  },
  {
    q: "Wat als ik een dossier nodig heb voor verzekering of expertise?",
    a: "In bepaalde situaties ondersteunen wij met aanvullende verslaggeving of technische documentatie voor uw dossier.",
  },
  {
    q: "Is bouwdroging nuttig bij schimmel?",
    a: "Ja, bouwdroging speelt een belangrijke rol in het terugdringen van de vochtige omstandigheden die schimmelgroei bevorderen. Bij actieve schimmel moet uiteraard ook de oorzaak correct aangepakt worden, daarvoor staat Vernast Vochtbestrijding klaar.",
  },
  {
    q: "Werkt een klassieke ontvochtiger ook in een kelder of koude ruimte?",
    a: "Dat hangt af van de temperatuur en de situatie. In koudere omstandigheden kan een andere techniek, zoals de ECO Revolution adsorptiedroger, of extra verwarming nodig zijn.",
  },
  {
    q: "Waarom moet een ruimte droog zijn voor afwerking?",
    a: "Omdat vochtige ondergronden problemen geven bij schilderwerken, vloeren, keukenplaatsing en andere afwerkingen: bladders, loskomende afwerking en schade aan kasten of plinten.",
  },
];

const V3Faq = () => (
  <section className="faq" id="faq">
    <div className="wrap faq-grid">
      <div className="faq-side">
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <span className="kick">Veelgestelde vragen</span>
          <h2 className="sec">Alles wat u wilt weten.</h2>
        </div>
        <div className="faq-help">
          <h3>Staat uw vraag er niet bij?</h3>
          <p>Onze droogexperts helpen u meteen verder, met advies op maat van uw situatie.</p>
          <div className="fh-btns">
            <a className="fh-call" href="tel:+3236899065">
              <PhoneIcon /> Bel 03 689 90 65
            </a>
            <a className="fh-form" href="#contact">
              Stel uw vraag online
            </a>
          </div>
        </div>
      </div>

      <div className="faq-list">
        {QUESTIONS.map((item, i) => (
          <details className="q" key={item.q} open={i === 0}>
            <summary>
              {item.q} <span className="pl">+</span>
            </summary>
            <div className="a">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default V3Faq;
