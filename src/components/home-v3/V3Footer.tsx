import { Link } from "react-router-dom";
import { MailIcon, PhoneIcon } from "./icons";

const V3Footer = () => (
  <footer className="site">
    <div className="wrap">
      <div className="fg">
        <div className="lc">
          <img src="/design/logo-horizontal-white.png" alt="Vernast Verhuur" />
          <p>
            Uw specialist in bouwdroging en verhuur van eco-bouwdrogers, ventilatoren en bouwkachels.
            Werkzaam in heel Vlaanderen, met levering binnen 24 uur.
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
              <Link to="/calculator">Pleisterwerk drogen</Link>
            </li>
            <li>
              <Link to="/calculator">Chape drogen</Link>
            </li>
            <li>
              <Link to="/waterschade">Waterschade drogen</Link>
            </li>
            <li>
              <Link to="/calculator">Kelder drogen</Link>
            </li>
            <li>
              <Link to="/levering">Alles in één Droogservice</Link>
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
              <Link to="/calculator">Bereken uw pakket</Link>
            </li>
            <li>
              <a href="#techniek">Alles over drogen</a>
            </li>
            <li>
              <a href="#faq">Veelgestelde vragen</a>
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
        <div>© {new Date().getFullYear()} Vernast Verhuur · BTW BE 0123.456.789</div>
        <div className="fl">
          <a href="#">Algemene voorwaarden</a>
          <a href="#">Privacy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default V3Footer;
