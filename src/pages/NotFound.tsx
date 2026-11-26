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
 * Hier stond de placeholder uit de oorspronkelijke scaffold: een grijs vlak met
 * "Oops! Page not found" in het Engels, zonder header of merk. Een bezoeker die
 * via een oude link binnenkwam, zag dus niets van de site en had één weg terug.
 * Nu draagt hij dezelfde header, hero en footer als de rest van de site (de
 * hero-opmaak komt uit privacy.css, `.pv-page .lhero`) en wijst hij naar de
 * pagina's waar een verdwaalde bezoeker het vaakst naartoe wil.
 */

type Teksten = {
  kicker: string;
  h1: string;
  lead: string;
  primair: string;
  home: string;
  heroAlt: string;
  linksTitel: string;
  links: { pad: string; titel: string; tekst: string }[];
  hulp: string;
};

const COPY = {
  nl: {
    kicker: "Fout 404",
    h1: "Deze pagina bestaat niet (meer)",
    lead: "De link is verouderd of er zit een typfout in het adres. Hieronder vindt u de pagina's waar de meeste bezoekers naar op zoek zijn.",
    primair: "Bereken uw bouwdroging",
    home: "Naar de startpagina",
    heroAlt: "Het Vernast-team",
    linksTitel: "Misschien zocht u dit",
    links: [
      { pad: "/verhuur/calculator", titel: "Droogpakket berekenen", tekst: "Uw pakket en all-in prijs in twee minuten." },
      { pad: "/prijzen", titel: "Prijzen", tekst: "Huurprijzen per toestel en per pakket." },
      { pad: "/drooggarantie", titel: "Drooggarantie", tekst: "Niet droog op tijd? Kosteloos verder huren." },
      { pad: "/machines", titel: "Toestellen", tekst: "Bouwdrogers, ventilatoren en toebehoren." },
      { pad: "/realisaties", titel: "Realisaties", tekst: "Werven die we al droog kregen." },
      { pad: "/klantservice", titel: "Klantenservice", tekst: "Levering, verlengen, ophalen en meer." },
    ],
    hulp: "Liever meteen iemand spreken?",
  },
  fr: {
    kicker: "Erreur 404",
    h1: "Cette page n'existe pas (ou plus)",
    lead: "Le lien est périmé ou l'adresse contient une faute de frappe. Vous trouverez ci-dessous les pages que la plupart des visiteurs recherchent.",
    primair: "Calculez votre séchage",
    home: "Vers la page d'accueil",
    heroAlt: "L'équipe Vernast",
    linksTitel: "Vous cherchiez peut-être",
    links: [
      { pad: "/verhuur/calculator", titel: "Calculer un pack de séchage", tekst: "Votre pack et son prix tout compris en deux minutes." },
      { pad: "/prijzen", titel: "Prix", tekst: "Tarifs de location par appareil et par pack." },
      { pad: "/drooggarantie", titel: "Garantie de séchage", tekst: "Pas sec à temps ? Location prolongée gratuitement." },
      { pad: "/machines", titel: "Appareils", tekst: "Déshumidificateurs, ventilateurs et accessoires." },
      { pad: "/realisaties", titel: "Réalisations", tekst: "Des chantiers que nous avons déjà asséchés." },
      { pad: "/klantservice", titel: "Service client", tekst: "Livraison, prolongation, enlèvement et plus." },
    ],
    hulp: "Vous préférez parler à quelqu'un ?",
  },
  en: {
    kicker: "Error 404",
    h1: "This page doesn't exist (anymore)",
    lead: "The link is outdated or the address contains a typo. Below are the pages most visitors are looking for.",
    primair: "Calculate your drying",
    home: "Go to the homepage",
    heroAlt: "The Vernast team",
    linksTitel: "Perhaps you were looking for",
    links: [
      { pad: "/verhuur/calculator", titel: "Calculate a drying package", tekst: "Your package and all-in price in two minutes." },
      { pad: "/prijzen", titel: "Prices", tekst: "Rental prices per unit and per package." },
      { pad: "/drooggarantie", titel: "Drying guarantee", tekst: "Not dry in time? Keep renting free of charge." },
      { pad: "/machines", titel: "Equipment", tekst: "Dehumidifiers, fans and accessories." },
      { pad: "/realisaties", titel: "Projects", tekst: "Sites we have already dried out." },
      { pad: "/klantservice", titel: "Customer service", tekst: "Delivery, extensions, collection and more." },
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

      <V3Header lightAfter={420} />

      <section className="lhero">
        <div className="wrap lh-grid">
          <div className="lh-copy">
            <span className="kick">{t.kicker}</span>
            <h1>{t.h1}</h1>
            <p>{t.lead}</p>
            <div className="nf-actions">
              <Link className="nf-btn nf-btn-w" to={lp("/verhuur/calculator")}>
                {t.primair} <span aria-hidden="true">→</span>
              </Link>
              <Link className="nf-btn nf-btn-o" to={lp("/")}>
                {t.home}
              </Link>
            </div>
          </div>
          <div className="lh-vis">
            <img src="/vernast/team-tools.webp" alt={t.heroAlt} decoding="async" />
          </div>
        </div>
      </section>

      <section className="nf-links">
        <div className="wrap">
          <h2>{t.linksTitel}</h2>
          <ul>
            {t.links.map((l) => (
              <li key={l.pad}>
                <Link to={lp(l.pad)}>
                  <strong>{l.titel}</strong>
                  <span>{l.tekst}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="nf-help">
            {t.hulp} <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>
            {" · "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default NotFound;
