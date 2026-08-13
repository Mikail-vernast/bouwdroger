import { Link } from "react-router-dom";
import { MailIcon, PhoneIcon } from "./icons";
import { SITE_NAME } from "@/lib/site";

/** Footer van het verhuurplatform (Calculator · Pakket · Boeking). */
const VFooter = () => (
  <footer className="site">
    <div className="wrap">
      <div className="fg">
        <div className="lc">
          <img src="/verhuur/logo-horizontal-white.webp" alt="Vernast Verhuur" loading="lazy" decoding="async" />
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
        </div>
        <div>
          <h4>Diensten</h4>
          <ul>
            <li>
              <Link to="/verhuur/calculator">Pleisterwerk drogen</Link>
            </li>
            <li>
              <Link to="/verhuur/calculator">Chape drogen</Link>
            </li>
            <li>
              <Link to="/verhuur/calculator">Waterschade drogen</Link>
            </li>
            <li>
              <Link to="/verhuur/calculator">Kelder drogen</Link>
            </li>
            <li>
              <Link to="/verhuur/pakket">Alles in één Droogservice</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Sitemap</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/verhuur/calculator">Bereken uw pakket</Link>
            </li>
            <li>
              <Link to="/#techniek">Alles over drogen</Link>
            </li>
            <li>
              <Link to="/#faq">Veelgestelde vragen</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Vernast Groep</h4>
          <ul>
            <li>
              <a href="https://www.vernast-vochtbestrijding.be/">Vernast Vochtbestrijding</a>
            </li>
            <li>
              <a href="https://www.vernast-schilderwerken.be/">Vernast Schilderwerken</a>
            </li>
            <li>
              <Link to="/">Vernast Verhuur</Link>
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
          <Link to="/contact">Algemene voorwaarden</Link>
          <Link to="/contact">Privacy</Link>
          <Link to="/contact">Sitemap</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default VFooter;
