import { Link } from "react-router-dom";
import { ArrowRightIcon, LeafIcon } from "@/components/home-v3/icons";
import Reveal from "@/components/Reveal";
import { DROGER_KAARTEN } from "@/data/tarieflijst";
import { PRODUCTS, productImageAlt } from "@/data/verhuur";
import { formatEuro, useCopy, useLokaalPad, useTaal, type Copy } from "@/i18n/useTaal";

interface Tekst {
  cta: string;
  perWeek: string;
  onderPrijs: string;
  voet: string;
  pakketKop: string;
  pakketVoor: string;
  garantie: string;
  pakketNa: string;
  samenstellen: string;
  /** De datatekst uit `DROGER_KAARTEN` in deze taal; `null` laat ze ongemoeid. */
  volume: ((nl: string) => string) | null;
  badge: Record<string, string>;
  desc: Record<string, string>;
}

const COPY = {
  nl: {
    cta: "Bekijk dit toestel",
    perWeek: "/week",
    onderPrijs: "excl. btw · levering en vochtmeting inbegrepen",
    voet:
      "Alle drie zijn eco-condensdrogers, te huur per dag of per week. Levering, plaatsing en de vochtmeting zitten in de prijs.",
    pakketKop: "Een volledige woning? Dan wordt het een droogpakket.",
    pakketVoor:
      "Een pakket combineert droger, ventilator en indien nodig een bouwkachel, berekend op uw oppervlakte en op wat er moet drogen. Alleen op zo'n berekend pakket geldt onze",
    garantie: "100 % drooggarantie",
    pakketNa: ": bij een los toestel kunnen we het resultaat niet garanderen.",
    samenstellen: "Stel uw pakket samen",
    volume: null,
    badge: {},
    desc: {},
  },
  fr: {
    cta: "Voir cet appareil",
    perWeek: "/semaine",
    onderPrijs: "HTVA · livraison et mesure d'humidité comprises",
    voet:
      "Ce sont tous trois des déshumidificateurs à condensation éco, à louer à la journée ou à la semaine. Livraison, installation et mesure d'humidité sont comprises dans le prix.",
    pakketKop: "Un logement entier ? Il vous faut alors un pack de séchage.",
    pakketVoor:
      "Un pack combine déshumidificateur, ventilateur et si nécessaire un chauffage de chantier, calculés selon votre surface et ce qui doit sécher. Notre",
    garantie: "garantie de séchage à 100 %",
    pakketNa:
      " ne s'applique qu'à un tel pack calculé : avec un appareil seul, nous ne pouvons pas garantir le résultat.",
    samenstellen: "Composez votre pack",
    // "Tot 250 m³ · 50 L/dag" uit tarieflijst.ts; de getallen blijven, de woorden niet.
    volume: (nl) => nl.replace(/^Tot /, "Jusqu'à ").replace(/ L\/dag$/, " l/jour"),
    badge: { "Meest gehuurd": "Le plus loué" },
    desc: {
      ttk170: "Une pièce, un appartement ou une petite rénovation",
      ttk350: "Une maison familiale standard ou une grande rénovation",
      ttk650: "Grands chantiers, caves spacieuses et dégâts des eaux urgents",
    },
  },
  en: {
    cta: "View this unit",
    perWeek: "/week",
    onderPrijs: "excl. VAT · delivery and moisture reading included",
    voet:
      "All three are eco condensation dryers, available by the day or by the week. Delivery, installation and the moisture reading are included in the price.",
    pakketKop: "A whole home? Then it becomes a drying package.",
    pakketVoor:
      "A package combines a dryer, a fan and if needed a site heater, calculated on your floor area and on what needs to dry. Our",
    garantie: "100% drying guarantee",
    pakketNa: " only applies to a calculated package like that: with a single unit we cannot guarantee the result.",
    samenstellen: "Put together your package",
    volume: (nl) => nl.replace(/^Tot /, "Up to ").replace(/ L\/dag$/, " L/day"),
    badge: { "Meest gehuurd": "Most hired" },
    desc: {
      ttk170: "One room, a flat or a small renovation",
      ttk350: "A standard family home or a large renovation",
      ttk650: "Large sites, spacious cellars and urgent water damage",
    },
  },
} satisfies Copy<Tekst>;

/**
 * De drie ontvochtigers als keuzeblok op een inhoudspagina — de v3-opvolger van de
 * oude `MachineCard`, die met die drie pagina's mee verdween.
 *
 * Wat er veranderde en waarom: de oude kaart toonde voor elk toestel hetzelfde
 * bliksemicoontje in een grijs vierkant, en een knop die altijd naar de
 * calculator ging. Drie identieke kaarten met een ander getal erop dus, terwijl
 * het portaal van elk toestel een foto publiceert. Nu staat die foto erop en
 * leidt de kaart naar de toestelpagina — de pagina die het toestel uitlegt —
 * met de calculator als tweede weg eronder.
 *
 * Prijzen en omschrijvingen komen uit `DROGER_KAARTEN`, dus uit de
 * gepubliceerde tarieven. Nooit een bedrag in een pagina overtypen.
 */
const Pakketkaarten = ({ ctaLabel }: { ctaLabel?: string }) => {
  const t = useCopy(COPY);
  const taal = useTaal();
  const lp = useLokaalPad();
  return (
  <div className="pkgs">
    {DROGER_KAARTEN.map((kaart, i) => {
      const product = PRODUCTS[kaart.key];
      return (
        <Reveal
          from="up"
          delay={i * 0.08}
          className={`pkg${kaart.highlight ? " top" : ""}`}
          key={kaart.key}
        >
          {kaart.badge && <span className="plab">{t.badge[kaart.badge] ?? kaart.badge}</span>}
          {product && (
            <img
              src={product.img[0]}
              alt={productImageAlt(product, 0)}
              width={420}
              height={420}
              loading="lazy"
              decoding="async"
            />
          )}
          <h3>{kaart.name}</h3>
          <span className="pvol">{t.volume ? t.volume(kaart.volume) : kaart.volume}</span>
          <p className="pdesc">{t.desc[kaart.key] ?? kaart.desc}</p>
          <div className="pprice">
            {/* Excl. btw zoals in het Nederlands; in het Frans en Engels in de
                notatie van die taal (`99 €`, `€99`) via formatEuro. */}
            <b>{taal === "nl" ? `€ ${kaart.weekPrice}` : formatEuro(Number(kaart.weekPrice), taal, 0)}</b>
            <span>{t.perWeek}</span>
            <small>{t.onderPrijs}</small>
          </div>
          <Link className={`btn${kaart.highlight ? "" : " btn-line"}`} to={lp(kaart.path)}>
            {ctaLabel ?? t.cta}
            <ArrowRightIcon size={13} />
          </Link>
        </Reveal>
      );
    })}
    <p className="pkgs-foot">
      <LeafIcon size={13} />
      <span>{t.voet}</span>
    </p>
    {/*
      Deze drie kaarten zijn toestellen, geen pakketten. Dat onderscheid moet er
      staan: de Drooggarantie geldt alleen voor een pakket dat via de calculator
      berekend en mét installatie geboekt is, niet voor een los toestel. Zonder
      deze balk las de sectie als "kies hier uw pakket".
    */}
    <div className="pkgcta">
      <div className="pc-t">
        <b>{t.pakketKop}</b>
        <p>
          {t.pakketVoor} <Link to={lp("/drooggarantie")}>{t.garantie}</Link>
          {t.pakketNa}
        </p>
      </div>
      <Link className="btn btn-white" to={lp("/verhuur/simulator")}>
        {t.samenstellen}
        <ArrowRightIcon />
      </Link>
    </div>
  </div>
  );
};

export default Pakketkaarten;
