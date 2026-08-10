import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CaretIcon, CartIcon, MailIcon, PhoneIcon } from "./icons";

/** Onder deze offset blijft de balk altijd staan, ongeacht de scrollrichting. */
const ALWAYS_VISIBLE_UNTIL = 90;
/** Scroll-jitter kleiner dan dit negeren we voor het in-/uitschuiven. */
const DIRECTION_DEADZONE = 6;

/**
 * Header van het verhuurplatform. In de designfiles staat `data-light="-1"`:
 * deze pagina's hebben geen donkere hero, dus de balk staat altijd in de
 * lichte variant (wit pill, zwart logo).
 */
const VHeader = () => {
  const [tucked, setTucked] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setTucked((wasTucked) => {
        if (y < ALWAYS_VISIBLE_UNTIL) return false;
        if (y > lastY.current + DIRECTION_DEADZONE) return true;
        if (y < lastY.current - DIRECTION_DEADZONE) return false;
        return wasTucked;
      });
      lastY.current = y;
      ticking.current = false;
    };

    const onScrollRaf = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(onScroll);
    };

    onScroll();
    window.addEventListener("scroll", onScrollRaf, { passive: true });
    return () => window.removeEventListener("scroll", onScrollRaf);
  }, []);

  return (
    <header className={`hdr onlight${tucked ? " tucked" : ""}`}>
      <div className="wrap topline">
        <div className="tl-left">
          <a href="tel:+3236899065">
            <PhoneIcon /> 03 689 90 65
          </a>
          <a href="mailto:info@vernast-verhuur.be">
            <MailIcon /> info@vernast-verhuur.be
          </a>
          <span>Ma–Vr 08:00–17:00</span>
        </div>
        <div className="tl-right">
          <span className="dot" /> Erkend droogspecialist · levering binnen 24 u
        </div>
      </div>

      <div className="wrap navrow">
        <div className="navpill">
          <Link className="nav-logo" to="/">
            <img src="/verhuur/logo-horizontal-black.webp" alt="Vernast" />
          </Link>

          <nav className="nav-menu" aria-label="Hoofdnavigatie">
            <div className="item has-sub">
              Vernast Group
              <CaretIcon className="caret" />
              <div className="submenu">
                <a href="https://www.vernast-vochtbestrijding.be/">
                  Vochtbestrijding<small>Kelder · muren · gevel</small>
                </a>
                <Link to="/">
                  Verhuur &amp; bouwdroging<small>Toestellen en pakketten</small>
                </Link>
                <a href="https://www.vernast-schilderwerken.be/">
                  Schilderwerken<small>Binnen &amp; buiten</small>
                </a>
              </div>
            </div>

            <div className="item mega has-sub">
              Bouwdroging
              <CaretIcon className="caret" />
              <div className="mega-panel">
                <div className="mega-cols">
                  <div className="mcol">
                    <span className="mlab">Pakketten</span>
                    <ul>
                      <li>
                        <Link to="/verhuur/calculator">Pleisterwerk drogen</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/calculator">Chape drogen</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/calculator">Pleisterwerk + chape</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/calculator">Waterschade drogen</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/pakket">Alles in één Droogservice</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mcol">
                    <span className="mlab">Toestellen</span>
                    <ul>
                      <li>
                        <Link to="/verhuur/toestel/ttk170">Small bouwdroger</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/toestel/ttk350">Medium bouwdroger</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/toestel/ttv4500">Turbo axiaalventilator</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/toestel/ttv4500">Turbo radiaalventilator</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/toestel/teddh30">Elektrische kachel 3,30 kW</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mcol">
                    <span className="mlab">Service</span>
                    <ul>
                      <li>
                        <Link to="/#levering">Levering &amp; installatie</Link>
                      </li>
                      <li>
                        <Link to="/afhalen">Afhalen in Aartselaar</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/pakket">Vochtmeting inbegrepen</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/boeking">Dekking &amp; eigen risico</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/boeking">Verlengen of stoppen</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mcol">
                    <span className="mlab">Alles over drogen</span>
                    <ul>
                      <li>
                        <Link to="/#techniek">Hoe drogen werkt</Link>
                      </li>
                      <li>
                        <Link to="/#voordelen">Waarom bouwdroging</Link>
                      </li>
                      <li>
                        <Link to="/#prijzen">Prijzen &amp; voorwaarden</Link>
                      </li>
                      <li>
                        <Link to="/#toepassingen">Toepassingen</Link>
                      </li>
                      <li>
                        <Link to="/#faq">Veelgestelde vragen</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mega-foot">
                  <div className="mft">
                    <b>Niet zeker welk pakket u nodig heeft?</b>
                    <span>
                      Onze calculator bepaalt in 5 vragen de juiste toestellen, droogtijd en prijs.
                    </span>
                  </div>
                  <Link className="btn-offerte" to="/verhuur/calculator">
                    Gratis offerte
                  </Link>
                </div>
              </div>
            </div>

            <div className="item has-sub">
              Alles over drogen
              <CaretIcon className="caret" />
              <div className="submenu">
                <Link to="/#techniek">
                  Hoe drogen werkt<small>Capaciteit · circulatie · warmte</small>
                </Link>
                <Link to="/#voordelen">
                  Waarom bouwdroging<small>Wat vocht u kost</small>
                </Link>
                <Link to="/#levering">
                  Levering &amp; installatie<small>Binnen 24 uur geplaatst</small>
                </Link>
                <Link to="/#prijzen">
                  Prijzen &amp; voorwaarden<small>Eén dagprijs, alles erin</small>
                </Link>
              </div>
            </div>

            <Link className="item" to="/realisaties">
              Realisaties
            </Link>
            <Link className="item" to="/over-ons">
              Over ons
            </Link>
            <Link className="item" to="/#faq">
              Klantenservice
            </Link>
            <Link className="item" to="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <Link className="cart" to="/verhuur/boeking" aria-label="Winkelwagen">
          <CartIcon />
          <i>1</i>
        </Link>

        <Link className="btn-offerte" to="/verhuur/calculator">
          Gratis offerte
        </Link>
      </div>
    </header>
  );
};

export default VHeader;
