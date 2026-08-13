import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CaretIcon, CartIcon, MailIcon, PhoneIcon } from "./icons";
import { TOESTELLEN } from "@/data/navigation";
import FontPreload from "@/components/FontPreload";

/**
 * The site header from the design: a top line with the contact details and a
 * floating glass nav pill with two dropdowns and one mega-menu.
 *
 * Above the dark hero the pill is transparent glass with white text; past
 * `lightAfter` pixels of scroll it flips to the white variant and the logo
 * swaps to the black lockup. That is the design's `data-light` mechanism —
 * every page sets its own threshold because every hero has its own height.
 */
interface V3HeaderProps {
  /** Scroll offset (px) at which the header turns light. */
  lightAfter?: number;
}

const V3Header = ({ lightAfter = 560 }: V3HeaderProps) => {
  const [tucked, setTucked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      // Hide on the way down, show again on the way up — but never within the
      // first 90px, where the header still belongs to the hero.
      if (y < 90) setTucked(false);
      else if (y > lastY.current + 6) setTucked(true);
      else if (y < lastY.current - 6) setTucked(false);

      setScrolled(y > 60);
      setOnLight(lightAfter < 0 || y > lightAfter);
      lastY.current = y;
      ticking = false;
    };

    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(onScroll);
    };

    onScroll();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [lightAfter]);

  const cls = ["hdr", tucked && "tucked", scrolled && "scrolled", onLight && "onlight"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
    <FontPreload set="v3" />
    <header className={cls} id="top">
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
            <img
              src={onLight ? "/vernast/logo-horizontal-black.webp" : "/vernast/logo-horizontal-white.webp"}
              alt="Vernast"
              width={1600}
              height={268}
              decoding="async"
            />
          </Link>

          <div className="nav-menu">
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
                      {TOESTELLEN.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mcol">
                    <span className="mlab">Service</span>
                    <ul>
                      <li>
                        <Link to="/verhuur/afhalen">Levering &amp; installatie</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/afhalen">Afhalen in Aartselaar</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/pakket">Vochtmeting inbegrepen</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/boeking">Dekking &amp; eigen risico</Link>
                      </li>
                      <li>
                        <Link to="/klantservice#verlengen">Verlengen of stoppen</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mcol">
                    <span className="mlab">Alles over drogen</span>
                    <ul>
                      <li>
                        <a href="/#natuurlijk-actief">Hoe drogen werkt</a>
                      </li>
                      <li>
                        <a href="/#voordelen">Waarom bouwdroging</a>
                      </li>
                      <li>
                        <a href="/#prijzen">Prijzen &amp; voorwaarden</a>
                      </li>
                      <li>
                        <a href="/#toepassingen">Toepassingen</a>
                      </li>
                      <li>
                        <a href="/#faq">Veelgestelde vragen</a>
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
                <a href="/#natuurlijk-actief">
                  Hoe drogen werkt<small>Capaciteit · circulatie · warmte</small>
                </a>
                <a href="/#voordelen">
                  Waarom bouwdroging<small>Wat vocht u kost</small>
                </a>
                <a href="/#regio">
                  Levering &amp; installatie<small>Binnen 24 uur geplaatst</small>
                </a>
                <a href="/#prijzen">
                  Prijzen &amp; voorwaarden<small>Eén dagprijs, alles erin</small>
                </a>
              </div>
            </div>

            <a className="item" href="/#toepassingen">
              Realisaties
            </a>
            <a className="item" href="/#voordelen">
              Over ons
            </a>
            <Link className="item" to="/klantservice">
              Klantenservice
            </Link>
            <a className="item" href="/#contact">
              Contact
            </a>
          </div>
        </div>

        <Link className="cart" to="/verhuur/calculator" aria-label="Winkelwagen">
          <CartIcon />
          <i id="cartCount">1</i>
        </Link>
        <Link className="btn-offerte" to="/verhuur/calculator">
          Gratis offerte
        </Link>
      </div>
    </header>
    </>
  );
};

export default V3Header;
