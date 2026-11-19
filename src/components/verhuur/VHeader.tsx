import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CaretIcon, CartIcon, MailIcon, PhoneIcon } from "./icons";
import { navigatie } from "@/data/navigation";
import { useCopy, useLokaalPad, useTaal } from "@/i18n/useTaal";
import { KlantWissel, TaalWissel } from "@/components/TaalWissel";
import { SCHIL_COPY } from "@/components/schil.copy";
import "@/styles/taalwissel.css";
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
  const t = useCopy(SCHIL_COPY);
  const lp = useLokaalPad();
  const { ALLES_OVER_DROGEN, MENU_SITUATIES, PAKKETTEN, TOESTELLEN } = navigatie(useTaal());

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
          <span>{t.uren}</span>
        </div>
        <div className="tl-right">
          <span className="dot" /> <span className="tl-belofte">{t.belofteV}</span>
          <span className="wissels">
            <TaalWissel />
            <KlantWissel />
          </span>
        </div>
      </div>

      <div className="wrap navrow mnav-row">
        <div className="navpill">
          <Link className="nav-logo" to={lp("/")}>
            <img src="/verhuur/logo-horizontal-black.webp" alt="Vernast" />
          </Link>

          <nav className="nav-menu" aria-label={t.hoofdnav}>
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
                    <ul className="mmv-lijst">
                      {TOESTELLEN.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mmv-groep">
                    <span className="mmv-kop">{t.kopPakketten}</span>
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
                  {/*
                    De verhuurschil had geen situatiekolom: wie in de funnel zat
                    kon vanuit "Bouwdroging" alleen naar pakketten, toestellen
                    en service. Chape en pleisterwerk drogen, waterschade en de
                    vochtige kelder stonden alleen in "Alles over drogen". Beide
                    schillen tonen nu dezelfde vier kolommen.
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
                        <Link to={lp("/") + "#levering"}>{t.levering}</Link>
                      </li>
                      <li>
                        <Link to={lp("/afhalen")}>{t.afhalen}</Link>
                      </li>
                      <li>
                        <Link to={lp("/verhuur/pakket")}>{t.vochtmeting}</Link>
                      </li>
                      <li>
                        <Link to={lp("/verhuur/boeking")}>{t.dekking}</Link>
                      </li>
                      <li>
                        <Link to={lp("/verhuur/boeking")}>{t.verlengen}</Link>
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
            <Link className="item" to={lp("/") + "#faq"}>
              {t.klantenservice}
            </Link>
            <Link className="item" to={lp("/contact")}>
              {t.contact}
            </Link>
          </nav>

          <MobileNavActions open={menuOpen} onClick={() => (menuOpen ? sluitMenu() : setMenuOpen(true))} />
        </div>

        <Link className="cart mnav-hide-sm" to={lp("/verhuur/boeking")} aria-label={t.winkelwagen}>
          <CartIcon />
          <i>1</i>
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
      logo="/verhuur/logo-horizontal-white.webp"
    />
    </>
  );
};

export default VHeader;
