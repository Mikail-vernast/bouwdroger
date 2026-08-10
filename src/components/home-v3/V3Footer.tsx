import { Link } from "react-router-dom";
import { BEDRIJF, KIEZEN, SERVICE, TOEPASSINGEN } from "@/data/navigation";
import { MailIcon, PhoneIcon } from "./icons";
import { SITE_NAME } from "@/lib/site";

const V3Footer = () => (
  <footer className="site">
    <div className="wrap">
      <div className="fg">
        <div className="lc">
          <img src="/vernast/logo-horizontal-white.webp" alt="Vernast Verhuur" loading="lazy" decoding="async" />
          <p>
            Uw specialist in bouwdroging en verhuur van eco-bouwdrogers, ventilatoren en
            bouwkachels. Werkzaam in heel Vlaanderen, met levering binnen 24 uur.
          </p>
          <div className="fc">
            <a href="tel:+3236899065">
              <PhoneIcon size={16} /> 03 689 90 65
            </a>
            <a href="mailto:info@vernast-verhuur.be">
              <MailIcon size={16} /> info@vernast-verhuur.be
            </a>
          </div>
        </div>

        {/*
          Vier links die alle vier naar /verhuur/calculator wezen, is de
          designfile letterlijk genomen. Ze wijzen nu naar de pagina die het
          onderwerp ook echt behandelt — dat is waar de homepage haar sterkte
          aan de rest van de site doorgeeft.
        */}
        <div>
          <h2>Toepassingen</h2>
          <ul>
            {TOEPASSINGEN.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/verhuur/pakket">Alles in één Droogservice</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Kiezen en boeken</h2>
          <ul>
            {[...KIEZEN, ...SERVICE].map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/*
          Het bedrijf en de zustersites in één kolom. De grid telt er vier; een
          vijfde blok zou op een eigen rij vallen.
        */}
        <div>
          <h2>Vernast</h2>
          <ul>
            {BEDRIJF.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a href="/#faq">Veelgestelde vragen</a>
            </li>
            <li>
              <a href="https://www.vernast-vochtbestrijding.be/">Vernast Vochtbestrijding</a>
            </li>
            <li>
              <a href="https://www.vernast-schilderwerken.be/">Vernast Schilderwerken</a>
            </li>
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
          <a href="/#prijzen">Algemene voorwaarden</a>
          <a href="/#contact">Privacy</a>
          <a href="/#toestellen">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default V3Footer;
