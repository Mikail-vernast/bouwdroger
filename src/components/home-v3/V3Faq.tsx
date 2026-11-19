import { useCopy, type Copy } from "@/i18n/useTaal";
import { PhoneIcon } from "./icons";

type Vraag = { q: string; a: string };

/**
 * Also feeds the FAQPage JSON-LD on the homepage, so the answers a visitor
 * reads and the answers a search engine indexes can never drift apart.
 * Lees ze per taal via `useFaqVragen()`; `QUESTIONS` blijft de Nederlandse lijst.
 */
export const QUESTIONS: Vraag[] = [
  {
    q: "Hoe weet ik welk toestel ik nodig heb?",
    a: "Onze slimme Calculator geeft een eerste berekening op basis van volume, toepassing en situatie. Zo kiest u gerichter en sneller, en komt u meteen op de pagina met het juiste pakket en de prijs.",
  },
  {
    q: "Hoelang duurt bouwdroging?",
    a: "Dat hangt af van het volume, het materiaal, de beginsituatie, de temperatuur en de gewenste eindtoestand. Actieve droging verloopt doorgaans aanzienlijk sneller dan natuurlijke droging, de Calculator geeft u een realistische inschatting.",
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
    a: "Dat hangt af van de temperatuur en de situatie. In koudere omstandigheden kan een andere techniek, zoals de Revolution adsorptiedroger, of extra verwarming nodig zijn.",
  },
  {
    q: "Waarom moet een ruimte droog zijn voor afwerking?",
    a: "Omdat vochtige ondergronden problemen geven bij schilderwerken, vloeren, keukenplaatsing en andere afwerkingen: bladders, loskomende afwerking en schade aan kasten of plinten.",
  },
];

const QUESTIONS_FR: Vraag[] = [
  {
    q: "Comment savoir de quel appareil j'ai besoin ?",
    a: "Notre calculateur intelligent fait un premier calcul sur la base du volume, de l'application et de la situation. Vous choisissez ainsi de manière plus ciblée et plus rapide, et arrivez directement sur la page avec le bon pack et le prix.",
  },
  {
    q: "Combien de temps dure un séchage de chantier ?",
    a: "Cela dépend du volume, du matériau, de la situation de départ, de la température et de l'état final souhaité. Un séchage actif est généralement nettement plus rapide qu'un séchage naturel, le calculateur vous donne une estimation réaliste.",
  },
  {
    q: "La livraison est-elle comprise ?",
    a: "Oui. La livraison, l'enlèvement et l'installation au rez-de-chaussée sont inclus par défaut dans les conditions de service prévues, tout comme les accessoires standard comme les rallonges.",
  },
  {
    q: "Dois-je vider moi-même le réservoir d'eau ?",
    a: "Pas toujours. Selon l'appareil et la situation, une évacuation automatique de l'eau peut être prévue, de sorte que l'eau s'écoule directement et que vous n'avez rien à vider.",
  },
  {
    q: "Puis-je prolonger si ce n'est pas encore sec ?",
    a: "Oui, la prolongation est possible en un clic. Votre planning reste ainsi flexible et votre projet ne se bloque pas sur une durée de location estimée trop juste.",
  },
  {
    q: "Puis-je aussi demander une livraison express ?",
    a: "Oui. Pour les sinistres urgents ou les plannings serrés, nous prévoyons une livraison express.",
  },
  {
    q: "Et si j'ai besoin d'un dossier pour l'assurance ou une expertise ?",
    a: "Dans certaines situations, nous vous aidons avec un rapport complémentaire ou une documentation technique pour votre dossier.",
  },
  {
    q: "Le séchage de chantier est-il utile en cas de moisissures ?",
    a: "Oui, le séchage de chantier joue un rôle important pour réduire les conditions humides qui favorisent le développement des moisissures. En cas de moisissures actives, la cause doit bien sûr aussi être traitée correctement, et Vernast Vochtbestrijding est là pour cela.",
  },
  {
    q: "Un déshumidificateur classique fonctionne-t-il aussi dans une cave ou une pièce froide ?",
    a: "Cela dépend de la température et de la situation. Dans des conditions plus froides, une autre technique, comme le déshumidificateur à adsorption Revolution, ou un chauffage supplémentaire peut être nécessaire.",
  },
  {
    q: "Pourquoi une pièce doit-elle être sèche avant les finitions ?",
    a: "Parce que les supports humides posent problème pour la peinture, les sols, la pose de cuisine et d'autres finitions : cloques, finitions qui se décollent et dégâts aux armoires ou aux plinthes.",
  },
];

const QUESTIONS_EN: Vraag[] = [
  {
    q: "How do I know which unit I need?",
    a: "Our smart Calculator gives a first calculation based on volume, application and situation. That way you choose more precisely and faster, and land straight on the page with the right package and price.",
  },
  {
    q: "How long does building drying take?",
    a: "That depends on the volume, the material, the starting situation, the temperature and the desired end state. Active drying is generally considerably faster than natural drying, and the Calculator gives you a realistic estimate.",
  },
  {
    q: "Is delivery included?",
    a: "Yes. Delivery, collection and ground-floor installation are included as standard within the stated service terms, as are standard accessories such as extension leads.",
  },
  {
    q: "Do I have to empty the water tank myself?",
    a: "Not always. Depending on the unit and the situation, automatic water drainage can be provided, so the water runs straight away and you do not have to empty anything.",
  },
  {
    q: "Can I extend if it is not dry yet?",
    a: "Yes, you can extend with one click. That keeps your schedule flexible and stops your project grinding to a halt on a hire period that was estimated too tightly.",
  },
  {
    q: "Can I request express delivery?",
    a: "Yes. For urgent damage cases or tight schedules, we arrange an express delivery.",
  },
  {
    q: "What if I need a file for insurance or an expert assessment?",
    a: "In certain situations we support you with additional reporting or technical documentation for your file.",
  },
  {
    q: "Is building drying useful when there is mould?",
    a: "Yes, building drying plays an important role in reducing the damp conditions that encourage mould growth. With active mould the cause also has to be tackled properly, of course, and Vernast Vochtbestrijding is there for that.",
  },
  {
    q: "Does a conventional dehumidifier also work in a cellar or cold room?",
    a: "That depends on the temperature and the situation. In colder conditions a different technique, such as the Revolution desiccant dehumidifier, or extra heating may be needed.",
  },
  {
    q: "Why does a room need to be dry before finishing?",
    a: "Because damp surfaces cause problems with painting, flooring, kitchen fitting and other finishes: blistering, finishes coming loose and damage to cabinets or skirting boards.",
  },
];

const COPY = {
  nl: {
    vragen: QUESTIONS,
    kick: "Veelgestelde vragen",
    h2: "Alles wat u wilt weten.",
    helpH3: "Staat uw vraag er niet bij?",
    helpP: "Onze droogexperts helpen u meteen verder, met advies op maat van uw situatie.",
    bel: "Bel 03 689 90 65",
    online: "Stel uw vraag online",
  },
  fr: {
    vragen: QUESTIONS_FR,
    kick: "Questions fréquentes",
    h2: "Tout ce que vous voulez savoir.",
    helpH3: "Votre question n'y figure pas ?",
    helpP: "Nos experts en séchage vous aident immédiatement, avec un conseil adapté à votre situation.",
    bel: "Appelez le 03 689 90 65",
    online: "Posez votre question en ligne",
  },
  en: {
    vragen: QUESTIONS_EN,
    kick: "Frequently asked questions",
    h2: "Everything you want to know.",
    helpH3: "Is your question not listed?",
    helpP: "Our drying experts will help you straight away, with advice tailored to your situation.",
    bel: "Call +32 3 689 90 65",
    online: "Ask your question online",
  },
} satisfies Copy<{
  vragen: Vraag[];
  kick: string;
  h2: string;
  helpH3: string;
  helpP: string;
  bel: string;
  online: string;
}>;

/** De vragen in de taal van de pagina — ook voor de FAQPage-schema in `Index`. */
export function useFaqVragen(): Vraag[] {
  return useCopy(COPY).vragen;
}

const V3Faq = () => {
  const t = useCopy(COPY);
  return (
  <section className="faq" id="faq">
    <div className="wrap faq-grid">
      <div className="faq-side">
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <span className="kick">{t.kick}</span>
          <h2 className="sec">{t.h2}</h2>
        </div>
        <div className="faq-help">
          <h3>{t.helpH3}</h3>
          <p>{t.helpP}</p>
          <div className="fh-btns">
            <a className="fh-call" href="tel:+3236899065">
              <PhoneIcon /> {t.bel}
            </a>
            <a className="fh-form" href="#contact">
              {t.online}
            </a>
          </div>
        </div>
      </div>

      <div className="faq-list">
        {t.vragen.map((item, i) => (
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
};

export default V3Faq;
