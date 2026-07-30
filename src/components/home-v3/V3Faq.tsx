const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "Hoe weet ik welk toestel ik nodig heb?",
    a: "Onze slimme calculator geeft een eerste berekening op basis van volume, toepassing en situatie. Zo kiest u gerichter en sneller — en komt u meteen op de pagina met het juiste pakket en de prijs.",
  },
  {
    q: "Hoelang duurt bouwdroging?",
    a: "Dat hangt af van het volume, het materiaal, de beginsituatie, de temperatuur en de gewenste eindtoestand. Actieve droging verloopt doorgaans aanzienlijk sneller dan natuurlijke droging — de calculator geeft u een realistische inschatting.",
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
    a: "Ja, bouwdroging speelt een belangrijke rol in het terugdringen van de vochtige omstandigheden die schimmelgroei bevorderen. Bij actieve schimmel moet uiteraard ook de oorzaak correct aangepakt worden — daarvoor staat Vernast Vochtbestrijding klaar.",
  },
  {
    q: "Werkt een klassieke ontvochtiger ook in een kelder of koude ruimte?",
    a: "Dat hangt af van de temperatuur en de situatie. In koudere omstandigheden kan een andere techniek — zoals de ECO Revolution adsorptiedroger — of extra verwarming nodig zijn.",
  },
  {
    q: "Waarom moet een ruimte droog zijn voor afwerking?",
    a: "Omdat vochtige ondergronden problemen geven bij schilderwerken, vloeren, keukenplaatsing en andere afwerkingen: bladders, loskomende afwerking en schade aan kasten of plinten.",
  },
];

const V3Faq = () => (
  <section className="faq" id="faq" aria-labelledby="faq-heading">
    <img className="faq-worker" src="/design/worker-arrow-crop.png" alt="" />

    <div className="wrap faq-grid">
      <div className="sec-head">
        <span className="kick">Veelgestelde vragen</span>
        <h2 className="sec" id="faq-heading">
          Alles wat u wilt weten.
        </h2>
        <p className="lede">
          Staat uw vraag er niet bij? Bel{" "}
          <a href="tel:+3236899065" style={{ color: "var(--red)", fontWeight: 600 }}>
            03 689 90 65
          </a>{" "}
          — onze experts helpen u meteen verder.
        </p>
      </div>

      <div>
        {QUESTIONS.map((item, index) => (
          <details className="q" key={item.q} open={index === 0}>
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
