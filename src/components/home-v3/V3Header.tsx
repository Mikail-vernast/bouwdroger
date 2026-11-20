import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CaretIcon, CartIcon, MailIcon, PhoneIcon } from "./icons";
import FontPreload from "@/components/FontPreload";
import MobileNav, { MobileNavActions } from "@/components/MobileNav";
import { navigatie } from "@/data/navigation";
import { useCopy, useLokaalPad, useTaal } from "@/i18n/useTaal";
import { KlantWissel, TaalWissel } from "@/components/TaalWissel";
import { SCHIL_COPY } from "@/components/schil.copy";
import "@/styles/taalwissel.css";
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
  const t = useCopy(SCHIL_COPY);
  const lp = useLokaalPad();
  const { ALLES_OVER_DROGEN, MENU_SITUATIES, PAKKETTEN, TOESTELLEN } = navigatie(useTaal());

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
          <a href="mailto:info@vernast-bouwdrogers.be">
            <MailIcon /> info@vernast-bouwdrogers.be
          </a>
          <span>{t.uren}</span>
        </div>
        <div className="tl-right">
          <span className="wissels">
            <TaalWissel />
            <KlantWissel />
          </span>
        </div>
      </div>

      <div className="wrap navrow mnav-row">
        <div className="navpill">
          <Link className="nav-logo" to={lp("/")}>
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
              {t.groep}
              <CaretIcon className="caret" />
              <div className="submenu">
                <a href="https://vernast-vochtbestrijding.be/">
                  {t.groepVocht[0]}<small>{t.groepVocht[1]}</small>
                </a>
                <Link to={lp("/")}>
                  {t.groepVerhuur[0]}<small>{t.groepVerhuur[1]}</small>
                </Link>
                <a href="https://www.vernast-schilderwerken.be/">
                  {t.groepSchilder[0]}<small>{t.groepSchilder[1]}</small>
                </a>
              </div>
            </div>

            <div className="item mega has-sub">
              {t.bouwdroging}
              <CaretIcon className="caret" />
              <div className="mega-panel">
                <div className="mmv-cols">
                  {/*
                    De volgorde van deze vier: multicolumn vult eerst de linker
                    kolom, dus de leesvolgorde op het scherm is Toestellen naast
                    Toepassingen, met Pakketten en Service eronder. Het gamma en
                    de situatie waarin de bezoeker staat zijn waar hij naar
                    zoekt; wat een pakket kost en hoe de huur loopt, leest hij
                    pas als hij weet wát hij nodig heeft. Verander je hier de
                    volgorde, bedenk dan dat buur nummer twee onder nummer een
                    komt te staan, niet ernaast.
                  */}
                  <div className="mmv-groep">
                    <span className="mmv-kop">{t.kopToestellen}</span>
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
                    <span className="mmv-kop">{t.kopPakketten}</span>
                    {/*
                      Deze vijf stonden hier én in VHeader én in het mobiele
                      menu overgetypt, terwijl `PAKKETTEN` in
                      src/data/navigation.ts al bestond om precies dat te
                      voorkomen. Drie kopieën is er één te veel om met de hand
                      gelijk te houden.
                    */}
                    <ul className="mmv-lijst">
                      {PAKKETTEN.map((item) => (
                        <li key={item.label}>
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/*
                    Vierde kolom: in welke situatie staat de bezoeker. Ze heette
                    "Schimmels" en toonde ozon, /renovatie en /waterschade —
                    twee toepassingspagina's onder een kop die er maar één dekt,
                    en zonder /nieuwbouw-drogen, de grootste van de drie. Ze
                    leest nu `MENU_SITUATIES`; ozonbehandeling staat daar gewoon
                    in, en hoort nog altijd niet onder "Service", want dat zijn
                    de afspraken rond een huur.
                  */}
                  <div className="mmv-groep">
                    <span className="mmv-kop">{t.kopToepassingen}</span>
                    <ul className="mmv-lijst">
                      {MENU_SITUATIES.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mmv-groep">
                    <span className="mmv-kop">{t.kopService}</span>
                    <ul className="mmv-lijst">
                      <li>
                        <Link to={lp("/levering")}>{t.levering}</Link>
                      </li>
                      <li>
                        <Link to={lp("/afhalen")}>{t.afhalen}</Link>
                      </li>
                      <li>
                        <Link to={lp("/verhuur/pakket")}>{t.vochtmeting}</Link>
                      </li>
                      <li>
                        <Link to={lp("/klantservice")}>{t.dekking}</Link>
                      </li>
                      <li>
                        <Link to={lp("/verhuur/verlengen")}>{t.verlengen}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mega-foot">
                  <div className="mft">
                    <b>{t.megaVraag1}</b>
                    <span>{t.megaUitleg1}</span>
                  </div>
                  <Link className="btn-offerte" to={lp("/verhuur/calculator")}>
                    {t.calculatorKnop}
                  </Link>
                </div>
              </div>
            </div>

            <div className="item mega has-sub">
              {t.allesOverDrogen}
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
                    <b>{t.megaVraag2}</b>
                    <span>{t.megaUitleg2}</span>
                  </div>
                  <Link className="btn-offerte" to={lp("/verhuur/calculator")}>
                    {t.calculatorKnop}
                  </Link>
                </div>
              </div>
            </div>

            <Link className="item" to={lp("/realisaties")}>
              {t.realisaties}
            </Link>
            <Link className="item" to={lp("/over-ons")}>
              {t.overOns}
            </Link>
            <Link className="item" to={lp("/klantservice")}>
              {t.klantenservice}
            </Link>
            <Link className="item" to={lp("/contact")}>
              {t.contact}
            </Link>
          </div>

          <MobileNavActions open={menuOpen} onClick={() => (menuOpen ? sluitMenu() : setMenuOpen(true))} />
        </div>

        <Link className="cart mnav-hide-sm" to={lp("/verhuur/calculator")} aria-label={t.winkelwagen}>
          <CartIcon />
          <i id="cartCount">1</i>
        </Link>
        <Link className="btn-offerte mnav-cta-sm" to={lp("/verhuur/calculator")}>
          {t.calculatorKnop}
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
