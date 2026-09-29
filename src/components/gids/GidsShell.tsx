import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema } from "@/lib/schema";
import type { SeoEntry } from "@/data/seo";
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
  heroImg: { src: string; alt: string };
  /**
   * Publicatiedatum voor het Article-schema. Weglaten = geen artikel (de
   * commerciële pagina en de hub), dan staat enkel de organisatie in de head.
   */
  articlePublished?: string;
  faq?: GidsFaq[];
  /** Extra JSON-LD, bv. een OfferCatalog of ItemList. */
  jsonLd?: Record<string, unknown>[];
  children: ReactNode;
}

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

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
  articlePublished,
  faq = [],
  jsonLd = [],
  children,
}: GidsShellProps) => (
  <div className="hdw-page gids">
    <PageMeta
      {...seo}
      path={path}
      ogType={articlePublished ? "article" : "website"}
      jsonLd={[
        articlePublished
          ? articleSchema({
              headline: h1,
              description: seo.description,
              path,
              datePublished: articlePublished,
            })
          : organizationSchema(),
        breadcrumbSchema(crumbs),
        ...(faq.length ? [faqSchema(faq)] : []),
        ...jsonLd,
      ]}
    />

    <V3Header lightAfter={420} />

    <div className="redtop">
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <nav aria-label="Kruimelpad">
              <ol className="crumbs">
                {crumbs.map((c, i) => (
                  <li key={c.path}>
                    {i === crumbs.length - 1 ? (
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
              <Link className="btn btn-white" to="/verhuur/calculator">
                Bereken uw droogpakket
                <Arrow />
              </Link>
              <Link className="btn btn-ghost" to="/verhuur/afhalen">
                Losse toestellen afhalen
              </Link>
            </div>
          </div>
          <div className="hero-vis">
            <img src={heroImg.src} alt={heroImg.alt} style={{ width: "min(100%,520px)" }} />
          </div>
        </div>
      </section>
    </div>

    {children}

    {faq.length > 0 && (
      <section className="sw2" id="faq">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">Veelgestelde vragen</span>
            <h2 className="sec">Kort beantwoord</h2>
          </div>
          <div className="faq">
            {faq.map((item) => (
              <div className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}

    <V3Footer />
  </div>
);

export default GidsShell;
