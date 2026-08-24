import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  Check,
  ClipboardCheck,
  Clock3,
  Droplets,
  Mail,
  Phone,
  Plug,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { SEO } from "@/data/seo";
import "@/styles/drooggarantie.css";
import "@/styles/drooggarantie-fixes.css";
import "@/styles/drooggarantie-v2.css";

const steps = [
  {
    number: "01",
    title: "Wij berekenen uw droogplan",
    body: "Uw oppervlakte, volume, materiaal en situatie bepalen hoeveel capaciteit en droogtijd nodig zijn.",
    icon: Calculator,
  },
  {
    number: "02",
    title: "Wij installeren en meten",
    body: "Onze technieker plaatst de toestellen correct en legt de startwaarden vast bij de nulmeting.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "De installatie draait continu",
    body: "De opstelling voert het bouwvocht gecontroleerd af. U hoeft niets te verplaatsen of in te stellen.",
    icon: Droplets,
  },
  {
    number: "04",
    title: "De eindmeting beslist",
    body: "Streefwaarde bereikt? Dan halen we op. Nog niet? Dan loopt de huur zonder extra huurkosten door.*",
    icon: ShieldCheck,
  },
];

const benefits = [
  {
    title: "Bescherm uw afwerking",
    body: "Werk pas verder wanneer de meting bevestigt dat het materiaal de afgesproken streefwaarde heeft bereikt.",
  },
  {
    title: "Behoud grip op uw planning",
    body: "U krijgt vooraf een berekende droogperiode en achteraf een objectieve controle van het resultaat.",
  },
  {
    title: "Vermijd extra huurkosten",
    body: "Heeft uw project ondanks correcte omstandigheden meer tijd nodig, dan betaalt u geen extra toestelhuur.*",
  },
];

const faqs = [
  {
    question: "Wat betekent ‘droog’ binnen de garantie?",
    answer:
      "Niet een woning zonder enig restvocht, maar de vooraf afgesproken streefwaarde voor het gemeten materiaal. De meting bij ophaling is bepalend, niet hoe droog een muur of vloer aanvoelt.",
  },
  {
    question: "Wat betaal ik als de droging langer duurt?",
    answer:
      "Wanneer aan de garantievoorwaarden is voldaan, rekenen wij voor de verlengperiode geen extra huur van de gegarandeerde toestellen aan. De overige afspraken uit de huurovereenkomst blijven gelden.",
  },
  {
    question: "Waarom geldt de garantie alleen bij levering en installatie?",
    answer:
      "Omdat wij alleen dan de capaciteit, beginmeting, plaatsing en werking van de volledige opstelling kunnen controleren. Bij zelf afhalen beheert u die factoren zelf.",
  },
  {
    question: "Wat als er tijdens de droging nieuw vocht ontstaat?",
    answer:
      "Een actief lek, opstijgend grondvocht, nieuwe waterschade of nieuw aangebracht nat materiaal valt buiten de garantie. We bekijken dan samen welk aangepast droogplan nodig is.",
  },
];

const DrooggarantieV2Page = () => (
  <div className="dg-page dg-v2">
    <PageMeta
      {...SEO.drooggarantie}
      title="Concept V2 — Vernast Drooggarantie"
      path="/drooggarantie-v2"
      noindex
    />

    <V3Header lightAfter={520} />

    <main>
      <section className="dgv2-hero">
        <div className="wrap dgv2-hero-grid">
          <div className="dgv2-hero-copy">
            <span className="kick">Drooggarantie standaard inbegrepen</span>
            <h1>Niet droog binnen de berekende periode? Dan huurt u zonder extra huurkosten verder.*</h1>
            <p>
              Geen giswerk en geen onverwachte extra toestelhuur. Wij berekenen uw droogpakket,
              installeren de volledige opstelling en meten bij de start en het einde. Is de
              afgesproken streefwaarde nog niet bereikt? Dan loopt de toestelhuur zonder extra
              kosten door.*
            </p>

            <div className="dgv2-actions">
              <Link className="btn btn-white" to="/verhuur/calculator">
                Bereken mijn droogplan <ArrowRight size={17} />
              </Link>
              <a className="btn btn-ghost" href="#zo-werkt-het">
                Zo werkt de garantie
              </a>
            </div>

            <div className="dgv2-trust" aria-label="Voordelen van de Drooggarantie">
              <span><Check size={15} /> Geen toeslag</span>
              <span><Check size={15} /> Twee vochtmetingen</span>
              <span><Check size={15} /> Professioneel geïnstalleerd</span>
            </div>
          </div>

          <div className="dgv2-hero-visual">
            <div className="dgv2-orbit" aria-hidden="true" />
            <img
              src="/vernast/man-zen-crop.webp"
              alt="Zorgeloos drogen met de Vernast Drooggarantie"
              width="720"
              height="900"
            />
            <div className="dgv2-proof-card">
              <span><TimerReset size={20} /></span>
              <div>
                <strong>€ 0 extra toestelhuur</strong>
                <small>als de streefwaarde meer tijd vraagt*</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dgv2-proofbar" aria-label="Garantie in cijfers">
        <div className="wrap dgv2-proofbar-grid">
          <div><strong>Inbegrepen</strong><span>Geen toeslag voor de garantie</span></div>
          <div><strong>2 metingen</strong><span>Bij installatie en ophaling</span></div>
          <div><strong>€ 0 extra huur</strong><span>Als meer droogtijd nodig is*</span></div>
          <div><strong>Binnen 24 uur</strong><span>Omruiling bij een defect toestel</span></div>
        </div>
      </section>

      <section className="dgv2-problem">
        <div className="wrap">
          <div className="dgv2-section-head">
            <span className="kick">Zekerheid vóór u verder afwerkt</span>
            <h2>Uw planning mag niet afhangen van een schatting.</h2>
            <p>
              Te vroeg schilderen, vloeren of afwerken kan schade veroorzaken. Onnodig lang
              wachten kost tijd. Daarom koppelen wij uw droogplan aan metingen én aan een duidelijke
              financiële garantie.
            </p>
          </div>

          <div className="dgv2-benefits">
            {benefits.map((benefit, index) => (
              <article key={benefit.title}>
                <span className="dgv2-benefit-number">0{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dgv2-process" id="zo-werkt-het">
        <div className="wrap">
          <div className="dgv2-section-head light">
            <span className="kick">Van berekening tot meetbaar resultaat</span>
            <h2>Vier controlepunten. Eén heldere afspraak.</h2>
            <p>
              De garantie is geen losse belofte. Ze volgt uit een berekend pakket, een gecontroleerde
              installatie en twee meetmomenten.
            </p>
          </div>

          <div className="dgv2-steps">
            {steps.map(({ number, title, body, icon: Icon }) => (
              <article key={number}>
                <div className="dgv2-step-top">
                  <span className="dgv2-step-icon"><Icon size={21} /></span>
                  <span className="dgv2-step-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dgv2-measure">
        <div className="wrap dgv2-measure-grid">
          <div>
            <span className="kick">Gemeten, niet gegokt</span>
            <h2>De eindmeting bepaalt wanneer uw project klaar is.</h2>
            <p>
              “Droog” is bij Vernast geen gevoel. Bij de installatie leggen we de beginwaarden vast.
              Bij de ophaling vergelijken we die met de afgesproken streefwaarde voor het materiaal.
            </p>
            <ul>
              <li><Check size={16} /> Beginwaarden vastgelegd bij installatie</li>
              <li><Check size={16} /> Streefwaarde afgestemd op het materiaal</li>
              <li><Check size={16} /> Eindmeting bepaalt ophaling of verlenging</li>
            </ul>
          </div>

          <div className="dgv2-meter-card" aria-label="Voorbeeld van de drie meetmomenten">
            <div className="dgv2-meter-head">
              <span><Droplets size={18} /></span>
              <div><strong>Uw meettraject</strong><small>Objectief opgevolgd</small></div>
            </div>
            <div className="dgv2-meter-row"><span>1. Nulmeting</span><b>Startwaarde vastgelegd</b></div>
            <div className="dgv2-meter-line"><i /></div>
            <div className="dgv2-meter-row"><span>2. Droogperiode</span><b>Installatie continu actief</b></div>
            <div className="dgv2-meter-line mid"><i /></div>
            <div className="dgv2-meter-row"><span>3. Eindmeting</span><b className="ok">Streefwaarde beslist</b></div>
          </div>
        </div>
      </section>

      <section className="dgv2-terms" id="voorwaarden">
        <div className="wrap">
          <div className="dgv2-section-head">
            <span className="kick">Duidelijke spelregels</span>
            <h2>Dit krijgt u. Zo blijft uw garantie geldig.</h2>
            <p>Geen verrassingen achteraf: de belangrijkste afspraken staan hieronder in gewone taal.</p>
          </div>

          <div className="dgv2-term-grid">
            <article className="dgv2-covered">
              <span className="dgv2-card-label">De garantie</span>
              <h3>Geen extra toestelhuur als meer droogtijd nodig is.*</h3>
              <ul>
                <li><Check size={16} /> Geldig voor een online berekend droogpakket</li>
                <li><Check size={16} /> Levering en installatie door Vernast inbegrepen</li>
                <li><Check size={16} /> Vochtmeting bij de start en het einde</li>
                <li><Check size={16} /> Geen extra toestelhuur tot de streefwaarde bereikt is*</li>
                <li><Check size={16} /> Gratis omruiling bij een defect toestel binnen 24 uur</li>
              </ul>
            </article>

            <article>
              <span className="dgv2-card-label">Uw deel</span>
              <h3>Zorg dat de installatie correct kan blijven werken.</h3>
              <ul>
                <li><Clock3 size={16} /> Laat alle toestellen dag en nacht draaien</li>
                <li><Plug size={16} /> Voorzie continu een werkende stroomaansluiting</li>
                <li><ShieldCheck size={16} /> Verplaats de opstelling alleen na overleg</li>
                <li><Droplets size={16} /> Voeg tijdens de droging geen nieuwe vochtbron toe</li>
                <li><Phone size={16} /> Meld storingen of wijzigingen onmiddellijk</li>
              </ul>
            </article>
          </div>

          <div className="dgv2-fineprint">
            <strong>* Samengevat</strong>
            <p>
              De Drooggarantie geldt voor droogpakketten die via de calculator zijn berekend en met
              levering en installatie zijn geboekt. Losse toestellen en zelf afhalen vallen erbuiten.
              De opstelling moet ongewijzigd en continu hebben gewerkt. Actieve lekken, opstijgend
              grondvocht, nieuwe waterschade en nieuw aangebracht nat materiaal vallen buiten de
              garantie. De gemeten streefwaarde per materiaal is bepalend. De volledige afspraken
              staan in de <Link to="/algemene-voorwaarden">algemene voorwaarden</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="dgv2-faq">
        <div className="wrap dgv2-faq-grid">
          <div className="dgv2-section-head">
            <span className="kick">Veelgestelde vragen</span>
            <h2>Goed om te weten vóór u boekt.</h2>
            <p>Nog een vraag over uw werf? Onze droogspecialisten bekijken uw situatie graag met u.</p>
            <div className="dgv2-contact-links">
              <a href="tel:+3236899065"><Phone size={16} /> 03 689 90 65</a>
              <a href="mailto:info@vernast-verhuur.be"><Mail size={16} /> Stuur een e-mail</a>
            </div>
          </div>

          <div className="dgv2-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="dgv2-final">
        <div className="wrap">
          <div className="dgv2-final-card">
            <div>
              <span className="kick">Drooggarantie zonder toeslag</span>
              <h2>Bereken nu uw droogplan en weet meteen waar u aan toe bent.</h2>
              <p>Uw pakket, berekende periode en all-in prijs in enkele minuten.</p>
              <Link className="btn btn-white" to="/verhuur/calculator">
                Bereken mijn droogplan <ArrowRight size={17} />
              </Link>
            </div>
            <img
              src="/vernast/man-duim-kabels.webp"
              alt="Vernast technieker klaar om uw drooginstallatie te plaatsen"
              width="720"
              height="900"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>

    <V3Footer />
  </div>
);

export default DrooggarantieV2Page;
