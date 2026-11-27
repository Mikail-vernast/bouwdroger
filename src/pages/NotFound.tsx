import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { useSeo } from "@/data/seo";
import { CONTACT } from "@/lib/site";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import "@/styles/privacy.css";
import "@/styles/privacy-fixes.css";
import "@/styles/not-found.css";

/**
 * De 404-pagina. Wordt bij de build geprerenderd naar `dist/404.html`; de
 * Worker (`worker/index.ts`, `notFound()`) serveert die met status 404 voor
 * elk pad dat geen asset, redirect of route is.
 *
 * Het beeld: de foutcode staat op het display van een bouwdroger, in
 * led-segmenten (DSEG7, zie not-found.css), met het team ernaast. Dat display
 * is decoratie en staat op `aria-hidden`; de H1 eronder is de echte kop.
 *
 * De `.pv-page`-schil (tokens, header) komt uit privacy.css; de opmaak van
 * deze pagina zelf staat in not-found.css onder `.nf-page`.
 */

type Teksten = {
  schermMerk: string;
  schermCode: string;
  schermStatus: string;
  knoppen: [string, string, string];
  kicker: string;
  h1: string;
  lead: string;
  primair: string;
  home: string;
  teamAlt: string;
  linksTitel: string;
  links: { pad: string; titel: string; tekst: string }[];
  hulp: string;
};

const COPY = {
  nl: {
    schermMerk: "Vernast · Bouwdroger",
    schermCode: "Code",
    schermStatus: "Pagina niet gevonden",
    knoppen: ["AAN/UIT", "MODUS", "RV %"],
    kicker: "Fout 404",
    h1: "Deze pagina is drooggelegd.",
    lead: "De link is verouderd of er zit een typfout in het adres. Uw droogpakket berekenen kan wel gewoon — in twee minuten, met een vaste all-in prijs.",
    primair: "Bereken uw bouwdroging",
    home: "Naar de startpagina",
    teamAlt: "Drie Vernast-techniekers met kabels en een klembord",
    linksTitel: "Misschien zocht u dit",
    links: [
      { pad: "/prijzen", titel: "Prijzen", tekst: "Huurprijzen per toestel en per pakket" },
      { pad: "/drooggarantie", titel: "Drooggarantie", tekst: "Niet droog op tijd? Kosteloos verder huren" },
      { pad: "/machines", titel: "Toestellen", tekst: "Bouwdrogers, ventilatoren en toebehoren" },
      { pad: "/klantservice", titel: "Klantenservice", tekst: "Levering, verlengen, ophalen" },
    ],
    hulp: "Liever meteen iemand spreken?",
  },
  fr: {
    schermMerk: "Vernast · Déshumidificateur",
    schermCode: "Code",
    schermStatus: "Page introuvable",
    knoppen: ["MARCHE/ARRÊT", "MODE", "HR %"],
    kicker: "Erreur 404",
    h1: "Cette page a été asséchée.",
    lead: "Le lien est périmé ou l'adresse contient une faute de frappe. Calculer votre pack de séchage reste possible — en deux minutes, avec un prix fixe tout compris.",
    primair: "Calculez votre séchage",
    home: "Vers la page d'accueil",
    teamAlt: "Trois techniciens Vernast avec des câbles et un porte-bloc",
    linksTitel: "Vous cherchiez peut-être",
    links: [
      { pad: "/prijzen", titel: "Prix", tekst: "Tarifs de location par appareil et par pack" },
      { pad: "/drooggarantie", titel: "Garantie de séchage", tekst: "Pas sec à temps ? Location prolongée gratuitement" },
      { pad: "/machines", titel: "Appareils", tekst: "Déshumidificateurs, ventilateurs et accessoires" },
      { pad: "/klantservice", titel: "Service client", tekst: "Livraison, prolongation, enlèvement" },
    ],
    hulp: "Vous préférez parler à quelqu'un ?",
  },
  en: {
    schermMerk: "Vernast · Dehumidifier",
    schermCode: "Code",
    schermStatus: "Page not found",
    knoppen: ["ON/OFF", "MODE", "RH %"],
    kicker: "Error 404",
    h1: "This page has been dried out.",
    lead: "The link is outdated or the address contains a typo. You can still calculate your drying package — in two minutes, with a fixed all-in price.",
    primair: "Calculate your drying",
    home: "Go to the homepage",
    teamAlt: "Three Vernast technicians with cables and a clipboard",
    linksTitel: "Perhaps you were looking for",
    links: [
      { pad: "/prijzen", titel: "Prices", tekst: "Rental prices per unit and per package" },
      { pad: "/drooggarantie", titel: "Drying guarantee", tekst: "Not dry in time? Keep renting free of charge" },
      { pad: "/machines", titel: "Equipment", tekst: "Dehumidifiers, fans and accessories" },
      { pad: "/klantservice", titel: "Customer service", tekst: "Delivery, extensions, collection" },
    ],
    hulp: "Rather speak to someone right away?",
  },
} satisfies Copy<Teksten>;

const NotFound = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();

  return (
    <div className="pv-page nf-page">
      <PageMeta {...useSeo("notFound")} />

      <V3Header darkUntil=".nf-stage" />

      <section className="nf-stage">
        <div className="wrap nf-grid">
          <div className="nf-toestel" aria-hidden="true">
            <div className="nf-scherm">
              <div className="nf-rij">
                <span>{t.schermMerk}</span>
                <span>{t.schermCode}</span>
              </div>
              <div className="nf-led">404</div>
              <div className="nf-status">
                <i />
                {t.schermStatus}
              </div>
            </div>
            <div className="nf-knoppen">
              {t.knoppen.map((k) => (
                <span key={k}>{k}</span>
              ))}
            </div>
          </div>
          <img className="nf-team" src="/vernast/team-tools.webp" alt={t.teamAlt} decoding="async" />
        </div>
      </section>

      <section className="wrap nf-copy">
        <div>
          <span className="kick">{t.kicker}</span>
          <h1>{t.h1}</h1>
          <p className="nf-lead">{t.lead}</p>
          <div className="nf-btns">
            <Link className="nf-btn nf-btn-r" to={lp("/verhuur/simulator")}>
              {t.primair} <span aria-hidden="true">→</span>
            </Link>
            <Link className="nf-btn nf-btn-o" to={lp("/")}>
              {t.home}
            </Link>
          </div>
        </div>
        <nav className="nf-links" aria-label={t.linksTitel}>
          <h2>{t.linksTitel}</h2>
          {t.links.map((l) => (
            <Link key={l.pad} to={lp(l.pad)}>
              <b>{l.titel}</b>
              <small>{l.tekst}</small>
              <em aria-hidden="true">→</em>
            </Link>
          ))}
        </nav>
      </section>

      <p className="wrap nf-help">
        {t.hulp} <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>
        {" · "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </p>

      <V3Footer />
    </div>
  );
};

export default NotFound;
