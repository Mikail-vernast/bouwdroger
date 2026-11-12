import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import ContactBlok from "@/components/content/ContactBlok";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  DropIcon,
  LeafIcon,
  PhoneIcon,
} from "@/components/home-v3/icons";
import { ThermoIcon, WindIcon } from "@/components/content/icons";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import { PRODUCTS, PRODUCT_ADDONS, PRODUCT_ORDER, productImageAlt } from "@/data/verhuur";
import { DROGERS, euro } from "@/data/tarieflijst";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";

/**
 * Het gamma: drogers, ventilatoren en kachels. Stond tot november 2026 op de
 * oude shadcn-schil met de `Navbar`; nu in de v3-vormtaal, met <V3Header> en
 * de gedeelde opmaak uit src/styles/v3-content.css.
 *
 * De bannerhero met tekst in de afbeelding is vervangen door de gewone
 * v3-hero. Die banner was de grootste afbeelding boven de vouw van de hele
 * site, en de tekst erin moest telkens opnieuw tegen een foto uitgelijnd
 * worden; de v3-hero zet de kop in echte tekst naast een uitgesneden toestel.
 */

/*
  Keuzehulp en vergelijking. Alle cijfers komen uit PRODUCTS (de toestelpagina's
  en het portaal): /machines en /verhuur/toestel/* spraken elkaar eerder tegen
  over liters en kubieke meters, en dat mag niet terugkomen via een tabel die
  hier met de hand bijgehouden wordt.
*/

/** Een waarde uit de kerngegevens van een toestel, bv. "Verbruik" → "1,1 kW". */
function kerngegeven(key: string, label: string): string | null {
  const rij = PRODUCTS[key]?.key.find(([l]) => l === label);
  return rij ? `${rij[1]}${rij[2] ? ` ${rij[2]}` : ""}` : null;
}

/**
 * De meetconditie van de vochtafvoer, uit het speclabel van de middelste
 * droger ("Vochtafvoer (30 °C / 80 % RV)"). Staat er geen, dan zegt de tekst
 * enkel dat het om een labowaarde gaat.
 */
const MEETCONDITIE = (() => {
  const key = DROGERS[Math.floor(DROGERS.length / 2)]?.key;
  const label = key ? PRODUCTS[key]?.specs.find(([l]) => l.startsWith("Vochtafvoer ("))?.[0] : undefined;
  return label?.match(/\(([^)]+)\)/)?.[1] ?? null;
})();

const KLEINSTE = DROGERS[0];
const GROOTSTE = DROGERS[DROGERS.length - 1];

interface Keuze {
  key: string;
  titel: string;
  wanneer: string;
}

/** Per toesteltype: wanneer kiest u het. Enkel wat het portaal verhuurt. */
const keuzes: Keuze[] = [
  {
    key: "ttk350",
    titel: "Condensontvochtiger",
    wanneer:
      "De standaard voor bouwvocht, chape, pleisterwerk en de meeste waterschade in een verwarmde of gematigde ruimte. Hij koelt de lucht af tot het vocht condenseert en voert het water af via een slang of reservoir. Onder ongeveer 15 °C daalt het rendement sterk.",
  },
  {
    key: "revolution",
    titel: "Adsorptiedroger",
    wanneer:
      "Voor koude ruimtes en om gericht te drogen: hij blaast droge lucht via slangen in een vloeropbouw, een wand of isolatie. Kies hem wanneer het vocht zit waar een gewone droger niet bij komt, bijvoorbeeld onder een zwevende chape na waterschade.",
  },
  {
    key: "ttv4500",
    titel: "Axiaalventilator",
    wanneer:
      "Zet de hele ruimte in beweging. Tegen een natte muur of vloer blijft anders een laagje verzadigde lucht hangen en stopt de droging. Voert zelf geen vocht af: voor bouwvocht zet u hem samen met een ontvochtiger in.",
  },
  {
    key: "radiaal2250",
    titel: "Radiaalventilator",
    wanneer:
      "Blaast een smalle straal vlak over de vloer, ook onder kasten en tegen plinten. De betere keuze wanneer het vocht in de chape of de vloer zit; bij waterschade vaak samen met een axiaalventilator.",
  },
  {
    key: "teddh30",
    titel: "Elektrische bouwkachel",
    wanneer:
      "Voor kelders, winterwerven en onverwarmde nieuwbouw. Warmte maakt het vocht los en laat de condensdroger op volle capaciteit werken, maar voert zelf niets af. De losse Heatpower en Heatboost vragen een aansluiting op 400 V krachtstroom; de kachel in een droogpakket draait op 230 V.",
  },
].filter((k) => PRODUCTS[k.key]);

/**
 * De combinaties die op de toestelpagina's als aanvulling voorgesteld worden,
 * voor de drie ontvochtigers. Uit `PRODUCT_ADDONS`, dus dezelfde suggestie als
 * wie op de toestelpagina iets bijboekt.
 */
const combinaties = DROGERS.map((t) => ({
  droger: t,
  erbij: (PRODUCT_ADDONS[t.key] ?? []).map((k) => PRODUCTS[k]).filter(Boolean),
})).filter((c) => c.erbij.length > 0);

const faqs = [
  {
    q: "Hoeveel liter per dag heb ik nodig?",
    a: `Reken eerst het volume van de ruimte uit: vloeroppervlakte maal plafondhoogte. Onze kleinste droger, de ${KLEINSTE.short}, is bedoeld voor ruimtes tot ${KLEINSTE.volume} m³; de ${GROOTSTE.short} gaat tot ${GROOTSTE.volume} m³. Veel nat materiaal, zoals een dikke chape of verse waterschade, vraagt meer capaciteit dan het volume alleen doet vermoeden. Twijfelt u, neem dan het grotere toestel of laat de calculator rekenen.`,
  },
  {
    q: "Wat is het verschil tussen een condensdroger en een adsorptiedroger?",
    a: "Een condensdroger koelt de lucht af tot het vocht condenseert en werkt het best boven ongeveer 15 °C. Een adsorptiedroger haalt het vocht uit de lucht met een vochtopnemend materiaal, verliest in de koude weinig capaciteit en kan droge lucht via slangen gericht in een vloer of wand blazen.",
  },
  {
    q: "Heb ik naast een bouwdroger een ventilator nodig?",
    a: "Bij nieuwbouw is het sterk aangeraden, bij waterschade beschouwen wij het als noodzakelijk. Een ontvochtiger droogt de lucht; een ventilator zorgt dat die droge lucht ook langs de natte muren en vloeren strijkt.",
  },
];

const verderLezen: LeesGroep[] = [
  {
    kop: "Zo zetten we de toestellen in",
    links: [
      { to: "/realisaties/mnr-k-putte", label: "Bouwvocht weggedroogd in een nieuwbouw in Putte" },
      { to: "/realisaties/mnr-erdem-bedrijfsgebouw", label: "Waterschade in een bedrijfsgebouw gedroogd" },
      { to: "/realisaties/mancave-brugge", label: "Vochtige kelder in Brugge weer droog" },
    ],
  },
  {
    kop: "Kiezen en berekenen",
    links: [
      { to: "/verhuur/calculator", label: "Bereken welk pakket bij uw ruimte past" },
      { to: "/prijzen", label: "Huurprijzen per dag en per week" },
      { to: "/nieuwbouw", label: "Chape en pleisterwerk drogen" },
      { to: "/waterschade", label: "Waterschade drogen" },
    ],
  },
  {
    kop: "Levering in uw regio",
    links: [
      { to: "/bouwdroger-huren-vlaams-brabant", label: "Bouwdroger huren in Vlaams-Brabant" },
      { to: "/bouwdroger-huren-antwerpen", label: "Bouwdroger huren in de provincie Antwerpen" },
    ],
  },
];

/**
 * Het gamma zoals het portaal het publiceert, gegroepeerd per soort.
 *
 * Hier stond tot november 2026 een tweede lijst: acht toestellen (Turbo Axiaal
 * 8500, Turbo Radiaal 7000, elektrische kachels van 5/9/18 kW, dieselheaters
 * van 118 en 236 kW) met hun dagprijs met de hand ingetypt en zonder foto. Die
 * toestellen staan niet in de verhuurcatalogus, de prijzen klopten niet, en ze
 * stonden naast de echte kaarten alsof ze te huur waren. Weg dus: wat het
 * portaal niet publiceert, bestaat op deze pagina niet. Zie ook de regel in
 * CLAUDE.md — nooit een bedrag overtypen in een pagina.
 */
const GAMMA = [
  {
    id: "bouwdrogers",
    Icon: DropIcon,
    kop: "Bouwdrogers",
    lede: "Onze eco-lijn verbruikt tot 40 % minder energie dan traditionele industriële drogers, merkbaar op uw stroomfactuur bij een toestel dat weken dag en nacht draait. De Revolution staat erbij als adsorptiedroger: die droogt gericht in een vloeropbouw of een koude kelder.",
    keys: PRODUCT_ORDER.filter((k) =>
      /Condensontvochtiger|Adsorptiedroger/.test(PRODUCTS[k].type)
    ),
  },
  {
    id: "ventilatoren",
    Icon: WindIcon,
    kop: "Ventilatoren",
    lede: "Luchtbeweging versnelt het drogen merkbaar. Axiaal zet de hele ruimte in beweging, radiaal blaast vlak over een natte vloer. Bij waterschade hoort er altijd één bij.",
    keys: PRODUCT_ORDER.filter((k) => /Bouwventilator/.test(PRODUCTS[k].type)),
  },
  {
    id: "verwarming",
    Icon: ThermoIcon,
    kop: "Verwarming",
    lede: "Onder 15 °C droogt een condensdroger traag: koude lucht neemt weinig vocht op. Twee elektrische bouwkachels met thermostaat, allebei op 400 V krachtstroom.",
    keys: PRODUCT_ORDER.filter((k) => /bouwkachel/i.test(PRODUCTS[k].type)),
  },
].filter((g) => g.keys.length > 0);

const toebehoren = [
  { Icon: BoltIcon, name: "Verlengsnoer 10 m", desc: "Zit gratis bij elke bouwdroger. Vraag er gerust een tweede bij als het stopcontact ver zit.", gratis: true },
  { Icon: DropIcon, name: "Opvangbak", desc: "Ook gratis bij elke droger. Liever niets legen? Dan neemt u een condenspomp bij het pakket.", gratis: true },
  { Icon: ThermoIcon, name: "Airconditioner", desc: "Beschikbaar op aanvraag, bijvoorbeeld voor een serverruimte of een werf in de zomer.", gratis: false },
];

/**
 * Eén toestel uit de catalogus als kaart.
 *
 * De kop is de naam waaronder het toestel verhuurd wordt ("Eco Boost"), niet
 * het typenummer: niemand huurt een "Ontvochtiger TTK 170 S". Dat nummer staat
 * op de toestelpagina zelf, voor wie offertes vergelijkt. Foto, prijs en specs
 * komen allemaal uit het portaal.
 */
const Toestelkaart = ({ sleutel, index }: { sleutel: string; index: number }) => {
  const p = PRODUCTS[sleutel];
  return (
    <Reveal from="up" delay={(index % 4) * 0.06} className={`prod${p.badge === "Meest gehuurd" ? " top" : ""}`}>
      {p.badge && <span className="plab">{p.badge}</span>}
      <div className="pimg">
        <img
          src={p.img[0]}
          alt={productImageAlt(p, 0)}
          width={420}
          height={420}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3>{p.short}</h3>
      <div className="pday">
        {euro(p.day)}
        <span>/dag</span>
      </div>
      <div className="chipsm">
        {p.key.slice(0, 3).map(([label, waarde, eenheid]) => (
          <span key={label}>
            {waarde}
            {eenheid ? ` ${eenheid}` : ""}
          </span>
        ))}
      </div>
      <p className="pdesc" style={{ margin: "0 0 16px" }}>{p.sum}</p>
      <Link className="btn btn-line" to={`/verhuur/toestel/${sleutel}`}>
        Bekijk de {p.short}
        <ArrowRightIcon size={13} />
      </Link>
    </Reveal>
  );
};

const MachinesPage = () => (
    <div className="v3c mc-page">
      <PageMeta
        {...SEO.machines}
        jsonLd={[
          itemListSchema(
            "Gamma bouwdrogers, ventilatoren en bouwkachels",
            PRODUCT_ORDER.map((k) => ({
              name: PRODUCTS[k].name,
              path: `/verhuur/toestel/${k}`,
            }))
          ),
          faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Machines", path: "/machines" },
          ]),
        ]}
      />

      <V3Header lightAfter={420} />

      <main>

      {/* ================= HERO ================= */}
      <div className="redtop">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="kick">Ons productgamma</span>
              <h1>Bouwdrogers, ventilatoren en kachels huren.</h1>
              <p>
                Drie soorten toestellen die elk iets anders doen: de ontvochtiger haalt het vocht
                uit de lucht, de ventilator brengt die droge lucht bij het natte materiaal, en de
                kachel zorgt dat de ruimte warm genoeg is om het vocht los te laten. Van compacte
                eco-drogers tot elektrische bouwkachels: hieronder staat het hele gamma met zijn
                dagprijs.
              </p>
              <div className="jump">
                <a href="#bouwdrogers"><DropIcon size={15} /> Bouwdrogers</a>
                <a href="#ventilatoren"><WindIcon size={15} /> Ventilatoren</a>
                <a href="#verwarming"><ThermoIcon size={15} /> Verwarming</a>
              </div>
            </div>
            <div className="hero-vis">
              <img
                src="/vernast/lineup-dryers.webp"
                alt="De drie Vernast eco-bouwdrogers naast elkaar"
                width={900}
                height={700}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ width: "min(100%,520px)" }}
              />
              <div className="fbadge" style={{ top: "-20px", left: "2%" }}>
                <span className="ic"><LeafIcon size={15} /></span>
                <div>
                  Eco-lijn
                  <small>tot 40 % minder energie</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= KEUZEHULP ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Keuzehulp</span>
            <h2 className="sec">Welk toestel kiest u?</h2>
            <p className="lede">
              In de meeste situaties werkt u met een combinatie: een ontvochtiger die het vocht
              afvoert, en een ventilator die de droge lucht bij de muren en de vloer brengt. Wat
              elk toestel doet, en wanneer u het kiest.
            </p>
          </div>
          <div className="g3">
            {keuzes.map((k, i) => (
              <Reveal from="up" delay={(i % 3) * 0.08} className="kaart" key={k.key}>
                <span className="kick" style={{ marginBottom: "6px" }}>{k.titel}</span>
                <h3>{PRODUCTS[k.key].name}</h3>
                <p>{k.wanneer}</p>
                <Link
                  className="plink"
                  to={`/verhuur/toestel/${k.key}`}
                  style={{ marginTop: "14px", display: "inline-flex" }}
                >
                  Bekijk de {PRODUCTS[k.key].short}
                  <ArrowRightIcon size={13} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPACITEIT ================= */}
      <section className="sr">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Liter of kubieke meter</span>
            <h2 className="sec">Wat zegt de capaciteit van een droger?</h2>
            <p className="lede">
              Bij een ontvochtiger staan twee getallen. De <b>vochtafvoer in liter per dag</b> is
              hoeveel water het toestel maximaal uit de lucht haalt
              {MEETCONDITIE ? `, gemeten bij ${MEETCONDITIE}` : " onder labo-omstandigheden"}. In
              een koelere of drogere ruimte haalt geen enkele droger dat cijfer: het is een maat om
              toestellen te vergelijken, geen belofte voor uw werf.
            </p>
            <p className="lede">
              Het <b>bereik in kubieke meter</b> is het volume waarvoor het toestel geschikt is.
              Reken uw volume uit als vloeroppervlakte maal plafondhoogte: 100 m² bij 2,5 m hoog is
              250 m³. Zit er veel nat materiaal in die ruimte, zoals een verse chape of recente
              waterschade, kies dan eerder het grotere toestel of een tweede droger.
            </p>
          </div>

          <div className="tblwrap" style={{ marginTop: 0 }}>
            <div className="tblscroll">
              <table className="tbl">
                <caption className="sr-only">
                  Vergelijking van de ontvochtigers: capaciteit, bereik, verbruik en dagprijs
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Ontvochtiger</th>
                    <th scope="col">Liter per dag</th>
                    <th scope="col">Bereik</th>
                    <th scope="col">Verbruik</th>
                    <th scope="col">Per dag</th>
                  </tr>
                </thead>
                <tbody>
                  {DROGERS.map((t) => (
                    <tr key={t.key}>
                      <th scope="row">
                        <Link to={t.path}>{t.short}</Link>
                        {t.badge && (
                          <span style={{ display: "block", fontWeight: 400, fontSize: "11.5px", color: "var(--txt-dim)" }}>
                            {t.badge}
                          </span>
                        )}
                      </th>
                      <td>{t.litersPerDay} L</td>
                      <td style={{ whiteSpace: "nowrap" }}>tot {t.volume} m³</td>
                      <td style={{ whiteSpace: "nowrap" }}>{kerngegeven(t.key, "Verbruik") ?? "—"}</td>
                      <td style={{ whiteSpace: "nowrap", fontWeight: 700, color: "var(--txt)" }}>
                        {euro(t.perDay)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="tblnote">
            Prijzen excl. btw. Meer over de prijsopbouw en het stroomverbruik op{" "}
            <Link to="/prijzen">de prijzenpagina</Link>.
          </p>

          {combinaties.length > 0 && (
            <div className="note">
              <b>Welke combinatie hoort erbij?</b> Een ontvochtiger staat zelden alleen. Dit zijn de
              toestellen die we bij elke droger als aanvulling voorstellen: een ventilator om de
              droge lucht bij de muren en de vloer te krijgen, en in een koude ruimte een kachel.
              <ul style={{ margin: "12px 0 0", paddingLeft: "18px" }}>
                {combinaties.map(({ droger, erbij }) => (
                  <li key={droger.key} style={{ marginBottom: "5px" }}>
                    <Link to={droger.path}>{droger.short}</Link> met{" "}
                    {erbij.map((p) => p.name).join(" en ")}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ================= HET GAMMA ================= */}
      {GAMMA.map((groep, i) => (
        <section className={i % 2 === 0 ? "sw" : "sr"} id={groep.id} key={groep.id}>
          <div className="wrap">
            <div className="sec-head">
              <div className="cathead">
                <span className="ci"><groep.Icon size={19} /></span>
                <h2 className="sec">{groep.kop}</h2>
              </div>
              <p className="lede">{groep.lede}</p>
            </div>
            <div className={`prods${groep.keys.length <= 2 ? " twee" : groep.keys.length === 3 ? " drie" : ""}`}>
              {groep.keys.map((k, j) => (
                <Toestelkaart sleutel={k} index={j} key={k} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ================= TOEBEHOREN ================= */}
      <section className="sr">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Toebehoren</span>
            <h2 className="sec">Wat er standaard bij zit, en wat u kunt bijvragen.</h2>
          </div>
          <div className="g3">
            {toebehoren.map(({ Icon, name, desc, gratis }, i) => (
              <Reveal from="up" delay={i * 0.08} className="kaart" key={name}>
                <div className="ki"><Icon size={20} /></div>
                <h3>{name}</h3>
                <p>{desc}</p>
                {gratis && (
                  <span className="verdict ja" style={{ marginTop: "12px", marginBottom: 0 }}>
                    <CheckIcon size={12} /> Gratis
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerderLezen titel="Verder lezen over het materiaal" groepen={verderLezen} />

      {/* FAQ — zichtbaar, en gelijk aan de FAQ-schema in de head. */}
      <section className="sr">
        <div className="wrap">
          <div className="sec-head mid">
            <span className="kick">Veelgestelde vragen</span>
            <h2 className="sec">Veelgestelde vragen over het materiaal.</h2>
          </div>
          <div className="faqs">
            {faqs.map((faq, i) => (
              <Reveal from="up" delay={(i % 2) * 0.06} as="dl" className="faq" key={faq.q}>
                <dt>{faq.q}</dt>
                <dd>{faq.a}</dd>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SLOT-CTA ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="manband">
            <div className="mb-t">
              <span className="mbk">Twijfelt u nog</span>
              <h3>U hoeft niet zelf te kiezen welk toestel het wordt.</h3>
              <p>
                Geef ons uw oppervlakte en uw situatie, dan rekent de calculator het volledige
                pakket uit: droger, ventilator en kachel in de juiste verhouding. Of u belt ons en
                we doen het aan de telefoon.
              </p>
              <div className="mb-cta">
                <Link className="btn btn-white" to="/verhuur/calculator">
                  Bereken uw droogpakket
                  <ArrowRightIcon />
                </Link>
                <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                  <PhoneIcon /> {CONTACT.phoneLocal}
                </a>
              </div>
            </div>
            <img
              className="mb-man"
              src="/vernast/man-duim-kabels.webp"
              alt="Vernast technicus met de kabels van een bouwdroger"
              width={600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <ContactBlok
        kicker="Welk toestel heeft u nodig?"
        titel="Niet zeker welk toestel bij uw werf past?"
        lede="Beschrijf kort de ruimte en wat er moet drogen. Een droogspecialist zegt u binnen één werkdag welk toestel of welke combinatie het wordt."
        onderwerpen={[
          "Advies over het juiste toestel",
          "Meerdere toestellen voor een grote werf",
          "Adsorptiedroger of condensdroger?",
          "Prijs en beschikbaarheid",
          "Iets anders",
        ]}
        placeholder="Bv. kelder van 60 m² met 2,2 m plafondhoogte, onverwarmd, vochtige muren na een lek."
      />

      </main>

      <V3Footer />
    </div>
);

export default MachinesPage;
