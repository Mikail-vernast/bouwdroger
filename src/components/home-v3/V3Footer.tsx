import { Link } from "react-router-dom";
import { BEDRIJF, KIEZEN, ONTDEK, SERVICE, TOEPASSINGEN, VERNAST_GROEP } from "@/data/navigation";
import { MailIcon, PhoneIcon } from "./icons";
import { SITE_NAME } from "@/lib/site";
import "@/styles/site-footer.css";

const V3Footer = () => (
  <footer className="site">
    <div className="wrap">
      <div className="fg">
        <div className="lc">
          <img src="/vernast/logo-horizontal-white.webp" alt="Vernast Bouwdrogers" loading="lazy" decoding="async" />
          <p>
            Uw specialist in bouwdroging en verhuur van eco-bouwdrogers, ventilatoren en
            bouwkachels. Werkzaam in heel Vlaanderen, met levering op de datum die u kiest.
          </p>
          <div className="fc">
            <a href="tel:+3236899065">
              <PhoneIcon size={16} /> 03 689 90 65
            </a>
            <a href="mailto:info@vernast-verhuur.be">
              <MailIcon size={16} /> info@vernast-verhuur.be
            </a>
          </div>
          <p>
            Boomsesteenweg 12 / Unit 11, 2630 Aartselaar
            <br />
            Ma–Vr 08:00–17:00
          </p>
        </div>

        {/*
          Kolom 2 — het aanbod: de rekenhulpen en het gamma (KIEZEN), waarvoor
          mensen drogen (TOEPASSINGEN) en de alles-in-één service.
        */}
        <div>
          <h2>Bouwdroging</h2>
          <ul>
            {/* /machines (Ons volledige gamma) bewust weggelaten — nog niet af. */}
            {[...KIEZEN, ...TOEPASSINGEN]
              .filter((link) => link.path !== "/machines")
              .map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            <li>
              <Link to="/verhuur/pakket">Alles in één Droogservice</Link>
            </li>
          </ul>
        </div>

        {/*
          Kolom 3 — service en uitleg. ONTDEK bundelt de pagina's die eerder
          nergens vandaan gelinkt werden (Klantenservice, Drooggarantie,
          Hoe drogen werkt, Waarom bouwdroging).
        */}
        <div>
          <h2>Service &amp; info</h2>
          <ul>
            {[...SERVICE, ...ONTDEK].map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a href="/#faq">Veelgestelde vragen</a>
            </li>
          </ul>
        </div>

        {/*
          Kolom 4 — de Vernast-groep: elk zusterbedrijf op zijn eigen domein,
          gevolgd door de bedrijfspagina's van deze site.
        */}
        <div>
          <h2>Vernast</h2>
          <ul>
            {VERNAST_GROEP.map((entiteit) => (
              <li key={entiteit.label}>
                {entiteit.href ? (
                  <a href={entiteit.href} target="_blank" rel="noopener noreferrer">
                    {entiteit.label}
                  </a>
                ) : (
                  <Link to={entiteit.path!}>{entiteit.label}</Link>
                )}
              </li>
            ))}
            {/* /over-ons bewust weggelaten — nog niet af. */}
            {BEDRIJF.filter((link) => link.path !== "/over-ons").map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fb">
        <div>
          {/*
            Hier stond "BTW BE 0123.456.789" — een voorbeeldnummer uit een
            formulier-placeholder, gepubliceerd op elke pagina van de
            verhuurfunnel. Een verzonnen ondernemingsnummer is erger dan geen:
            het is onjuiste bedrijfsinformatie op een handelssite, en zowel
            Google als een AI-assistent neemt het over als feit. Zodra het
            echte nummer bekend is, hoort het hier terug.
          */}
          © {new Date().getFullYear()} {SITE_NAME}
        </div>
        <div className="fl">
          <Link to="/algemene-voorwaarden">Algemene voorwaarden</Link>
          <Link to="/privacy">Privacy</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default V3Footer;
