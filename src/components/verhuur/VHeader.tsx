import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CaretIcon, CartIcon, MailIcon, PhoneIcon } from "./icons";
import { ALLES_OVER_DROGEN, MENU_SITUATIES, PAKKETTEN, TOESTELLEN } from "@/data/navigation";
import "@/styles/mega-menu.css";
import MobileNav, { MobileNavActions } from "@/components/MobileNav";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuGroep, setMenuGroep] = useState<string | null>(null);
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

  const sluitMenu = () => {
    setMenuOpen(false);
    setMenuGroep(null);
  };

  return (
    <>
    <header className={`hdr onlight${tucked ? " tucked" : ""}`}>
      <div className="wrap topline mnav-topline">
        <div className="tl-left">
          <a href="tel:+3236899065">
            <PhoneIcon /> 03 689 90 65
          </a>
          <a href="mailto:info@vernast-bouwdrogers.be">
            <MailIcon /> info@vernast-bouwdrogers.be
          </a>
          <span>Ma–Vr 08:00–17:00</span>
        </div>
        <div className="tl-right">
          <span className="dot" /> Erkend droogspecialist · u kiest uw leverdatum
        </div>
      </div>

      <div className="wrap navrow mnav-row">
        <div className="navpill">
          <Link className="nav-logo" to="/">
            <img src="/verhuur/logo-horizontal-black.webp" alt="Vernast" />
          </Link>

          <nav className="nav-menu" aria-label="Hoofdnavigatie">
            <div className="item has-sub">
              Group
              <CaretIcon className="caret" />
              <div className="submenu">
                <a href="https://vernast-vochtbestrijding.be/">
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
                <div className="mmv-cols">
                  <div className="mmv-groep">
                    <span className="mmv-kop">Pakketten</span>
                    {/* Dezelfde lijst als in V3Header en het mobiele menu:
                        `PAKKETTEN` in src/data/navigation.ts. */}
                    <ul className="mmv-lijst">
                      {PAKKETTEN.map((item) => (
                        <li key={item.label}>
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mmv-groep">
                    <span className="mmv-kop">Toestellen</span>
                    <ul className="mmv-lijst">
                      {TOESTELLEN.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mmv-groep">
                    <span className="mmv-kop">Service</span>
                    <ul className="mmv-lijst">
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
                  {/*
                    De verhuurschil had geen situatiekolom: wie in de funnel zat
                    kon vanuit "Bouwdroging" alleen naar pakketten, toestellen
                    en service. Chape en pleisterwerk drogen, waterschade en de
                    vochtige kelder stonden alleen in "Alles over drogen". Beide
                    schillen tonen nu dezelfde vier kolommen.
                  */}
                  <div className="mmv-groep">
                    <span className="mmv-kop">Toepassingen</span>
                    <ul className="mmv-lijst">
                      {MENU_SITUATIES.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
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
                    Bereken uw pakket
                  </Link>
                </div>
              </div>
            </div>

            <div className="item mega has-sub">
              Alles over drogen
              <CaretIcon className="caret" />
              {/*
                Ook dit is een mega-menu en geen uitklapper meer. Er stonden
                vier vaste links in terwijl de gidsen, de toepassingen en
                /prijzen er niet in zaten — "alles over drogen" gaf dus niet
                alles. De kolommen komen uit src/data/navigation.ts, dezelfde
                bron als de footer en het mobiele menu.
              */}
              <div className="mega-panel kennis">
                <div className="mmv-cols">
                  {ALLES_OVER_DROGEN.map((groep) => (
                    <div className="mmv-groep" key={groep.titel}>
                      <span className="mmv-kop">{groep.titel}</span>
                      <ul className="mmv-lijst">
                        {groep.items.map((item) => (
                          <li key={item.path}>
                            <Link to={item.path}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mega-foot">
                  <div className="mft">
                    <b>Liever eerst weten wat het kost?</b>
                    <span>
                      De calculator rekent uw volume uit en zegt welk toestel en welke droogtijd erbij
                      horen.
                    </span>
                  </div>
                  <Link className="btn-offerte" to="/verhuur/calculator">
                    Bereken uw pakket
                  </Link>
                </div>
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

          <MobileNavActions open={menuOpen} onClick={() => (menuOpen ? sluitMenu() : setMenuOpen(true))} />
        </div>

        <Link className="cart mnav-hide-sm" to="/verhuur/boeking" aria-label="Winkelwagen">
          <CartIcon />
          <i>1</i>
        </Link>

        <Link className="btn-offerte mnav-cta-sm" to="/verhuur/calculator">
          Bereken uw pakket
        </Link>
      </div>
    </header>

    <MobileNav
      open={menuOpen}
      onClose={sluitMenu}
      groep={menuGroep}
      onGroep={setMenuGroep}
      logo="/verhuur/logo-horizontal-white.webp"
    />
    </>
  );
};

export default VHeader;
