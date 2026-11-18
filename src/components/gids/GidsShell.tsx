import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import FaqBlok from "@/components/content/FaqBlok";
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema } from "@/lib/schema";
import type { SeoEntry } from "@/data/seo";
import { useCopy, useLokaalPad, useTaal, type Copy } from "@/i18n/useTaal";
import { HTML_LANG, type Taal } from "@/i18n/taal";
import "@/styles/hoe-drogen-werkt.css";
import "@/styles/hoe-drogen-werkt-fixes.css";
import "@/styles/gids.css";

export interface GidsFaq {
  question: string;
  answer: string;
}

export interface GidsCrumb {
  name: string;
  path: string;
}

interface GidsShellProps {
  seo: SeoEntry;
  path: string;
  /** Het kruimelpad, inclusief Home en de pagina zelf. */
  crumbs: GidsCrumb[];
  kick: string;
  h1: string;
  intro: ReactNode;
  /**
   * `width` overschrijft de standaardbreedte — een staande foto wil smaller.
   * Weglaten = een hero zonder foto, over de volle breedte: niet elke pagina
   * heeft een beeld dat haar vraag echt illustreert, en een toestelfoto naast
   * een uitlegkop leest als een advertentie.
   */
  heroImg?: {
    src: string;
    alt: string;
    width?: string;
    /**
     * Een echte foto in plaats van een uitgesneden beeld: afgeronde hoeken en
     * een slagschaduw onder het kader. De andere gidsen tonen de ploeg als
     * transparante uitsnede, en die staat met scherpe hoeken op de onderrand
     * van het rood. Een rechthoekige foto leest zo als een losse rechthoek die
     * op de hero geplakt is.
     */
    rond?: boolean;
  };
  /** Het zwevende kaartje naast de herofoto; weglaten = geen kaartje. */
  heroBadge?: ReactNode;
  /**
   * Publicatiedatum voor het Article-schema. Weglaten = geen artikel (de
   * commerciële pagina en de hub), dan staat enkel de organisatie in de head.
   */
  articlePublished?: string;
  /**
   * Datum van de laatste inhoudelijke herziening, voor `dateModified`. Zonder
   * deze datum valt het schema terug op de publicatiedatum, en dan lijkt een
   * gids die net is uitgebreid even oud als de dag dat hij online kwam.
   */
  articleModified?: string;
  faq?: GidsFaq[];
  /**
   * Laat de FAQ weg onderaan — de pagina plaatst <GidsFaqSectie> dan zelf,
   * ergens tussen de andere secties. De `faq`-array blijft nodig: daaruit
   * komt het FAQPage-schema, en dat mag niet van de zichtbare vragen afwijken.
   */
  faqZelfPlaatsen?: boolean;
  /** Extra JSON-LD, bv. een OfferCatalog of ItemList. */
  jsonLd?: Record<string, unknown>[];
  children: ReactNode;
}

/*
  De vaste teksten van de schil. Wat per pagina verschilt (kop, inleiding,
  kruimelnamen) geeft de pagina zelf mee, al in haar eigen taal; paden geeft
  ze in het Nederlands, en de schil zet ze om.
*/
const COPY = {
  nl: {
    kruimelpad: "Kruimelpad",
    bereken: "Bereken uw droogpakket",
    afhalen: "Losse toestellen afhalen",
    faqKick: "Veelgestelde vragen",
    faqTitel: "Kort beantwoord",
  },
  fr: {
    kruimelpad: "Fil d'Ariane",
    bereken: "Calculez votre pack de séchage",
    afhalen: "Appareils à enlever",
    faqKick: "Questions fréquentes",
    faqTitel: "En bref",
  },
} satisfies Copy<{ kruimelpad: string; bereken: string; afhalen: string; faqKick: string; faqTitel: string }>;

/**
 * `articleSchema` zet de taal van de site (nl-BE) vast in het artikel. Een
 * Franse gids met `inLanguage: nl-BE` zou zichzelf tegenspreken, dus zet de
 * schil hier de taal van de pagina in de artikelknoop van de graaf.
 */
function inTaal(blok: Record<string, unknown>, taal: Taal): Record<string, unknown> {
  if (taal === "nl" || !Array.isArray(blok["@graph"])) return blok;
  return {
    ...blok,
    "@graph": (blok["@graph"] as Record<string, unknown>[]).map((knoop) =>
      knoop["@type"] === "Article" ? { ...knoop, inLanguage: HTML_LANG[taal] } : knoop
    ),
  };
}

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/**
 * De vragenlijst als eigen sectie, zodat een pagina haar ergens tussen de
 * andere secties kan zetten in plaats van altijd onderaan.
 *
 * Het zijn `<details>`-elementen en geen eigen klapmechaniek: de antwoorden
 * staan dan ook zonder JavaScript in de HTML — nodig, want deze pagina's
 * worden geprerenderd voor lezers die geen scripts uitvoeren — en de browser
 * regelt het open- en dichtklappen zelf, inclusief toetsenbord.
 */
export const GidsFaqSectie = ({
  faq,
  kick,
  titel,
  variant = "grijs",
}: {
  faq: GidsFaq[];
  kick?: string;
  titel: string;
  variant?: "grijs" | "rood";
}) => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return (
  /*
    Hetzelfde vragenblok als op de homepage en op de inhoudspagina's. Hier
    stond een eigen accordeon met een rond pijltje; dat was de derde vorm van
    de FAQ op dezelfde site. Zie src/components/content/FaqBlok.tsx voor
    waarom het één component is.
  */
  <FaqBlok
    kicker={kick ?? t.faqKick}
    titel={titel}
    vragen={faq.map((item) => ({ q: item.question, a: item.answer }))}
    sleutel="gids-faq"
    variant={variant === "rood" ? "rood" : "grijs"}
    vraagHref={lp("/contact")}
  />
  );
};

/**
 * De gedeelde schil van de gidsen en /luchtontvochtiger-huren: header, rode
 * hero met kruimelpad, inhoud, FAQ en footer.
 *
 * Eén plek voor de FAQ is geen luxe. Het FAQPage-schema moet woord voor woord
 * overeenkomen met de zichtbare vragen; door beide uit dezelfde array te
 * renderen kan de een niet van de ander afwijken. Zo ook het kruimelpad: wat
 * zichtbaar bovenaan staat, is wat in BreadcrumbList belandt.
 */
const GidsShell = ({
  seo,
  path,
  crumbs,
  kick,
  h1,
  intro,
  heroImg,
  heroBadge,
  articlePublished,
  articleModified,
  faq = [],
  faqZelfPlaatsen = false,
  jsonLd = [],
  children,
}: GidsShellProps) => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const pad = lp(path);
  const kruimels = crumbs.map((c) => ({ name: c.name, path: lp(c.path) }));

  return (
  <div className="hdw-page gids">
    <PageMeta
      {...seo}
      path={pad}
      ogType={articlePublished ? "article" : "website"}
      jsonLd={[
        articlePublished
          ? inTaal(
              articleSchema({
                headline: h1,
                description: seo.description,
                path: pad,
                datePublished: articlePublished,
                dateModified: articleModified,
              }),
              taal
            )
          : // Een @graph uit withOrganization() draagt het bedrijf al mee.
            jsonLd.some((blok) => Array.isArray(blok["@graph"]))
            ? null
            : organizationSchema(),
        breadcrumbSchema(kruimels),
        ...(faq.length ? [faqSchema(faq)] : []),
        ...jsonLd,
      ].filter((blok): blok is Record<string, unknown> => blok !== null)}
    />

    <V3Header lightAfter={420} />

    <div className="redtop">
      <section className="hero">
        <div className={heroImg ? "wrap hero-grid" : "wrap hero-grid nopic"}>
          <div className="hero-copy">
            <nav aria-label={t.kruimelpad}>
              <ol className="crumbs">
                {kruimels.map((c, i) => (
                  <li key={c.path}>
                    {i === kruimels.length - 1 ? (
                      <span aria-current="page">{c.name}</span>
                    ) : (
                      <Link to={c.path}>{c.name}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <span className="kick">{kick}</span>
            <h1>{h1}</h1>
            {intro}
            <div className="hcta">
              <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
                {t.bereken}
                <Arrow />
              </Link>
              <Link className="btn btn-ghost" to={lp("/verhuur/afhalen")}>
                {t.afhalen}
              </Link>
            </div>
          </div>
          {heroImg && (
            <div className="hero-vis">
              <img
                className={heroImg.rond ? "rond" : undefined}
                src={heroImg.src}
                alt={heroImg.alt}
                style={{ width: heroImg.width ?? "min(100%,520px)", position: "relative", zIndex: 1 }}
              />
              {heroBadge}
            </div>
          )}
        </div>
      </section>
    </div>

    {children}

    {faq.length > 0 && !faqZelfPlaatsen && <GidsFaqSectie faq={faq} titel={t.faqTitel} />}

    <V3Footer />
  </div>
  );
};

export default GidsShell;
