import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CaretIcon, CartIcon, MailIcon, PhoneIcon } from "./icons";

/** Below this offset the header is always pinned, regardless of direction. */
const ALWAYS_VISIBLE_UNTIL = 90;
/** Ignore scroll jitter smaller than this before hiding/showing the bar. */
const DIRECTION_DEADZONE = 6;
/** Fallback threshold for the light/dark swap if the hero cannot be measured. */
const FALLBACK_LIGHT_THRESHOLD = 560;

const V3Header = () => {
  const [tucked, setTucked] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const headerRef = useRef<HTMLElement>(null);
  /**
   * Scroll offset at which the header leaves the dark hero. Measured rather than
   * hardcoded: the swap must track the hero's real height, which varies with the
   * hero artwork's aspect ratio and the viewport width.
   */
  const lightThreshold = useRef(FALLBACK_LIGHT_THRESHOLD);

  useEffect(() => {
    const measure = () => {
      const hero = document.querySelector<HTMLElement>(".v3 .hero");
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      lightThreshold.current = hero
        ? Math.max(0, hero.offsetTop + hero.offsetHeight - headerHeight)
        : FALLBACK_LIGHT_THRESHOLD;
    };

    const onScroll = () => {
      const y = window.scrollY;

      setTucked((wasTucked) => {
        if (y < ALWAYS_VISIBLE_UNTIL) return false;
        if (y > lastY.current + DIRECTION_DEADZONE) return true;
        if (y < lastY.current - DIRECTION_DEADZONE) return false;
        return wasTucked;
      });
      setOnLight(y > lightThreshold.current);

      lastY.current = y;
      ticking.current = false;
    };

    const onScrollRaf = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(onScroll);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    onScroll();

    // The hero image settles after decode, which changes the hero's height.
    const heroImg = document.querySelector<HTMLImageElement>(".v3 .hero-art");
    if (heroImg && !heroImg.complete) heroImg.addEventListener("load", onResize, { once: true });

    window.addEventListener("scroll", onScrollRaf, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScrollRaf);
      window.removeEventListener("resize", onResize);
      heroImg?.removeEventListener("load", onResize);
    };
  }, []);

  const logo = onLight ? "/design/logo-horizontal-black.png" : "/design/logo-horizontal-white.png";

  return (
    <header
      ref={headerRef}
      className={`hdr${tucked ? " tucked" : ""}${onLight ? " onlight" : ""}`}
      id="top"
    >
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
            <img src={logo} alt="Vernast" />
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
                        <Link to="/calculator">Pleisterwerk drogen</Link>
                      </li>
                      <li>
                        <Link to="/calculator">Chape drogen</Link>
                      </li>
                      <li>
                        <Link to="/calculator">Pleisterwerk + chape</Link>
                      </li>
                      <li>
                        <Link to="/waterschade">Waterschade drogen</Link>
                      </li>
                      <li>
                        <Link to="/levering">Alles in één Droogservice</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mcol">
                    <span className="mlab">Toestellen</span>
                    <ul>
                      <li>
                        <Link to="/product/bd-1">Small bouwdroger</Link>
                      </li>
                      <li>
                        <Link to="/product/bd-2">Medium bouwdroger</Link>
                      </li>
                      <li>
                        <Link to="/product/vt-1">Turbo axiaalventilator</Link>
                      </li>
                      <li>
                        <Link to="/product/vt-2">Turbo radiaalventilator</Link>
                      </li>
                      <li>
                        <Link to="/product/vw-1">Elektrische kachel</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mcol">
                    <span className="mlab">Service</span>
                    <ul>
                      <li>
                        <Link to="/levering">Levering &amp; installatie</Link>
                      </li>
                      <li>
                        <Link to="/afhalen">Afhalen in Aartselaar</Link>
                      </li>
                      <li>
                        <Link to="/levering">Vochtmeting inbegrepen</Link>
                      </li>
                      <li>
                        <Link to="/reserveren">Dekking &amp; eigen risico</Link>
                      </li>
                      <li>
                        <Link to="/reserveren">Verlengen of stoppen</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mcol">
                    <span className="mlab">Alles over drogen</span>
                    <ul>
                      <li>
                        <a href="#techniek">Hoe drogen werkt</a>
                      </li>
                      <li>
                        <a href="#voordelen">Waarom bouwdroging</a>
                      </li>
                      <li>
                        <a href="#prijzen">Prijzen &amp; voorwaarden</a>
                      </li>
                      <li>
                        <a href="#toepassingen">Toepassingen</a>
                      </li>
                      <li>
                        <a href="#faq">Veelgestelde vragen</a>
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
                  <Link className="btn-offerte" to="/calculator">
                    Gratis offerte
                  </Link>
                </div>
              </div>
            </div>

            <div className="item has-sub">
              Alles over drogen
              <CaretIcon className="caret" />
              <div className="submenu">
                <a href="#techniek">
                  Hoe drogen werkt<small>Capaciteit · circulatie · warmte</small>
                </a>
                <a href="#voordelen">
                  Waarom bouwdroging<small>Wat vocht u kost</small>
                </a>
                <a href="#levering">
                  Levering &amp; installatie<small>Binnen 24 uur geplaatst</small>
                </a>
                <a href="#prijzen">
                  Prijzen &amp; voorwaarden<small>Eén dagprijs, alles erin</small>
                </a>
              </div>
            </div>

            <Link className="item" to="/realisaties">
              Realisaties
            </Link>
            <Link className="item" to="/over-ons">
              Over ons
            </Link>
            <a className="item" href="#faq">
              Klantenservice
            </a>
            <Link className="item" to="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <Link className="cart" to="/reserveren" aria-label="Winkelwagen">
          <CartIcon />
          <i>1</i>
        </Link>

        <Link className="btn-offerte" to="/calculator">
          Gratis offerte
        </Link>
      </div>
    </header>
  );
};

export default V3Header;
