import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CaretIcon, CartIcon, MailIcon, PhoneIcon } from "./icons";
import FontPreload from "@/components/FontPreload";
import MobileNav, { MobileNavActions } from "@/components/MobileNav";
import { ALLES_OVER_DROGEN, SCHIMMELS, TOESTELLEN } from "@/data/navigation";
import "@/styles/offerte-shine.css";
import "@/styles/mega-menu.css";

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
  /**
   * Viewportbreedte (px) waaronder de balk altijd licht staat, ongeacht de
   * scrollpositie. Nodig waar `verhuur-fixes.css` de header onder 900px uit
   * `position:fixed` haalt: hij hangt dan niet meer boven de donkere hero maar
   * staat erboven op de lichte pagina-achtergrond, en witte tekst op #F1EFEF
   * leest niet. Het logo wisselt in JS mee, dus CSS alleen kan dit niet.
   */
  alwaysLightBelow?: number;
  /**
   * CSS-selector van het donkere blok waar de balk boven zweeft, meestal
   * `.redtop`. Staat die er, dan telt niet meer de vaste `lightAfter` maar de
   * onderrand van dat blok: de balk wisselt precies wanneer het rood onder
   * hem ophoudt.
   *
   * Waarom dit erbij kwam: `lightAfter` is één getal, en de hoogte van een
   * hero is dat niet. Op /renovatie was het rood 705 px hoog op een laptop en
   * 1120 px op een telefoon, waar de herofoto wegvalt en de titel over vier
   * regels loopt. Met het getal dat op de laptop klopte, schoof op een
   * telefoon een melkwitte balk over de rode hero en was het menu
   * onleesbaar. `lightAfter` blijft de terugval voor wie geen selector
   * meegeeft.
   */
  darkUntil?: string;
}

/**
 * Onderrand van de nav-pil in gescrolde toestand (de bovenste regel is dan
 * ingeklapt). Zodra het donkere blok daarboven eindigt, hoort de balk licht
 * te staan.
 */
const PIL_ONDER = 80;

const V3Header = ({ lightAfter = 560, alwaysLightBelow, darkUntil }: V3HeaderProps) => {
  const [tucked, setTucked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuGroep, setMenuGroep] = useState<string | null>(null);
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
      /*
        Het donkere blok wordt elke keer opnieuw opgemeten in plaats van één
        keer bij het aankoppelen: de herofoto laadt lui, en zijn hoogte komt
        er dus pas later bij.
      */
      const donker = darkUntil ? document.querySelector(darkUntil) : null;
      setOnLight(
        lightAfter < 0 ||
          (alwaysLightBelow !== undefined && window.innerWidth <= alwaysLightBelow) ||
          (donker ? donker.getBoundingClientRect().bottom <= PIL_ONDER : y > lightAfter),
      );
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
    // Draaien van het scherm verandert de breedte zonder te scrollen; zonder
    // deze luisteraar blijft de balk dan in de verkeerde variant staan.
    window.addEventListener("resize", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [lightAfter, alwaysLightBelow, darkUntil]);

  const sluitMenu = () => {
    setMenuOpen(false);
    setMenuGroep(null);
  };

  const cls = ["hdr", tucked && "tucked", scrolled && "scrolled", onLight && "onlight"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
    <FontPreload set="v3" />
    <header className={cls} id="top">
      <div className="wrap topline mnav-topline">
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
          <span className="dot" /> Droogpakket berekend op uw woning · u kiest zelf uw leverdatum
        </div>
      </div>

      <div className="wrap navrow mnav-row">
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
                    <ul className="mmv-lijst">
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
                  <div className="mmv-groep">
                    <span className="mmv-kop">Toestellen</span>
                    {/*
                      Deze vijf stonden hier overgetypt, en liepen daardoor uit
                      de pas met het gamma: de Large bouwdroger, de Revolution
                      en de tweede kachel ontbraken, en bij de kachel van 30 kW
                      stond "3,30 kW" -- dat is het vermogen van de kachel in
                      een droogpakket, niet van dit toestel. Nu leest het menu
                      `TOESTELLEN` uit src/data/navigation.ts, dezelfde lijst
                      als de footer en het mobiele menu: een toestel dat in het
                      portaal te huur gaat of eruit gaat, volgt vanzelf.
                    */}
                    <ul className="mmv-lijst">
                      {TOESTELLEN.map((toestel) => (
                        <li key={toestel.path}>
                          <Link to={toestel.path}>{toestel.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mmv-groep">
                    <span className="mmv-kop">Service</span>
                    <ul className="mmv-lijst">
                      <li>
                        <Link to="/levering">Levering &amp; installatie</Link>
                      </li>
                      <li>
                        <Link to="/afhalen">Afhalen in Aartselaar</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/pakket">Vochtmeting inbegrepen</Link>
                      </li>
                      <li>
                        <Link to="/klantservice">Dekking &amp; eigen risico</Link>
                      </li>
                      <li>
                        <Link to="/verhuur/verlengen">Verlengen of stoppen</Link>
                      </li>
                    </ul>
                  </div>
                  {/*
                    Vierde kolom: schimmel en geur. Ozonbehandeling hoorde niet
                    onder "Service" — dat zijn de afspraken rond een huur, en
                    een ontschimmeling is een losse dienst. Wie met schimmel
                    zoekt, komt niet kijken bij levering en verlengen.
                  */}
                  <div className="mmv-groep">
                    <span className="mmv-kop">Schimmels</span>
                    <ul className="mmv-lijst">
                      {SCHIMMELS.map((item) => (
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
            <Link className="item" to="/klantservice">
              Klantenservice
            </Link>
            <Link className="item" to="/contact">
              Contact
            </Link>
          </div>

          <MobileNavActions open={menuOpen} onClick={() => (menuOpen ? sluitMenu() : setMenuOpen(true))} />
        </div>

        <Link className="cart mnav-hide-sm" to="/verhuur/calculator" aria-label="Winkelwagen">
          <CartIcon />
          <i id="cartCount">1</i>
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
    />
    </>
  );
};

export default V3Header;
