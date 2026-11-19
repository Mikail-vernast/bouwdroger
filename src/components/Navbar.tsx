import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Building2, Hammer, Droplets, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";
import FontPreload from "@/components/FontPreload";
import { KlantWissel, TaalWissel } from "@/components/TaalWissel";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import "@/styles/taalwissel.css";

/* De paden zijn Nederlands; de component zet ze om met `lp()`. */
const DIENSTEN_PAD = ["/nieuwbouw-drogen", "/renovatie", "/waterschade", "/renovatie", "/contact"];
const DIENSTEN_ICOON = [Building2, Hammer, Droplets, Droplets, HardHat];
const LINK_PAD = ["/levering", "/afhalen", "/machines", "/realisaties", "/over-ons", "/klantservice", "/contact"];

interface NavbarTekst {
  diensten: string;
  /** Per dienst: label, omschrijving, badge — in de volgorde van DIENSTEN_PAD. */
  dienstenItems: [string, string, string | null][];
  /** In de volgorde van LINK_PAD. */
  links: string[];
  cta: string;
  menuOpen: string;
}

const COPY = {
  nl: {
    diensten: "Diensten",
    dienstenItems: [
      ["Nieuwbouw", "Pleisterwerk & chape drogen", null],
      ["Renovatie", "Vocht & schimmel aanpakken", null],
      ["Waterschade", "Noodservice binnen 24u", "SPOED"],
      ["Vochtbestrijding", "Structurele vochtproblemen oplossen", null],
      ["Aannemers", "B2B tarieven & samenwerking", null],
    ],
    links: ["Levering", "Afhalen", "Machines", "Realisaties", "Over Ons", "Klantenservice", "Contact"],
    cta: "Bereken je prijs",
    menuOpen: "Menu openen",
  },
  fr: {
    diensten: "Services",
    dienstenItems: [
      ["Nouvelle construction", "Sécher plafonnage & chape", null],
      ["Rénovation", "Traiter humidité & moisissures", null],
      ["Dégâts des eaux", "Service d'urgence en 24 h", "URGENT"],
      ["Traitement de l'humidité", "Résoudre l'humidité structurelle", null],
      ["Entrepreneurs", "Tarifs B2B & partenariat", null],
    ],
    links: ["Livraison", "Enlèvement", "Machines", "Réalisations", "À propos", "Service client", "Contact"],
    cta: "Calculez votre prix",
    menuOpen: "Ouvrir le menu",
  },
  en: {
    diensten: "Services",
    dienstenItems: [
      ["New build", "Drying plaster & screed", null],
      ["Renovation", "Tackling damp & mould", null],
      ["Water damage", "Emergency service within 24 h", "URGENT"],
      ["Damp control", "Solving structural damp problems", null],
      ["Contractors", "B2B rates & partnership", null],
    ],
    links: ["Delivery", "Collection", "Machines", "Projects", "About us", "Customer service", "Contact"],
    cta: "Calculate your price",
    menuOpen: "Open menu",
  },
} satisfies Copy<NavbarTekst>;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDienstenOpen, setIsDienstenOpen] = useState(false);
  const [isMobileDienstenOpen, setIsMobileDienstenOpen] = useState(false);
  const dienstenRef = useRef<HTMLDivElement>(null);
  const dienstenTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const dienstenItems = DIENSTEN_PAD.map((pad, i) => ({
    label: t.dienstenItems[i][0],
    href: lp(pad),
    description: t.dienstenItems[i][1],
    badge: t.dienstenItems[i][2],
    icon: DIENSTEN_ICOON[i],
  }));
  const navLinks = LINK_PAD.map((pad, i) => ({ label: t.links[i], href: lp(pad) }));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsDienstenOpen(false);
    setIsMobileDienstenOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dienstenRef.current && !dienstenRef.current.contains(e.target as Node)) {
        setIsDienstenOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDienstenEnter = () => {
    if (dienstenTimeout.current) clearTimeout(dienstenTimeout.current);
    setIsDienstenOpen(true);
  };

  const handleDienstenLeave = () => {
    dienstenTimeout.current = setTimeout(() => setIsDienstenOpen(false), 150);
  };

  const isLinkActive = (href: string) => location.pathname === href;

  const isDienstenActive = dienstenItems.some((item) => location.pathname === item.href);

  return (
    <>
    <FontPreload set="inter" />
    <nav
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300 bg-accent",
        isScrolled && "shadow-lg"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to={lp("/")} className="flex-shrink-0">
          <img src={logoWhite} alt="Vernast Bouwdrogers" className="h-7 md:h-8 w-auto" loading="lazy" decoding="async" />
        </Link>

        {/* Desktop nav links - center */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Diensten dropdown */}
          <div
            ref={dienstenRef}
            className="relative"
            onMouseEnter={handleDienstenEnter}
            onMouseLeave={handleDienstenLeave}
          >
            <button
              onClick={() => setIsDienstenOpen((prev) => !prev)}
              className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isDienstenActive
                  ? "text-white bg-white/15"
                  : "text-primary-foreground/80 hover:text-white hover:bg-white/10"
              )}
            >
              {t.diensten}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isDienstenOpen && "rotate-180"
                )}
              />
            </button>

            {isDienstenOpen && (
              <div className="enter-pop absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] bg-white rounded-xl shadow-2xl border border-gray-100 p-2 grid grid-cols-2 gap-2">
                  {dienstenItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg transition-colors group",
                        isLinkActive(item.href)
                          ? "bg-primary/5"
                          : "hover:bg-gray-50"
                      )}
                    >
                      <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-foreground">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-1.5 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-foreground/60 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
          </div>

          {/* Other nav links */}
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isLinkActive(item.href)
                  ? "text-white bg-white/15"
                  : "text-primary-foreground/80 hover:text-white hover:bg-white/10"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA. De taal- en klantwissel staan op de desktop in de
            TopBar erboven: in deze balk duwden ze de knop uit beeld op 1280px. */}
        <div className="hidden lg:block flex-shrink-0">
          <Button
            asChild
            className="bg-white text-foreground hover:bg-white/90 font-semibold text-sm rounded-lg px-5"
          >
            <Link to={lp("/") + "#configurator"}>{t.cta} &rarr;</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label={t.menuOpen}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="enter-pop lg:hidden overflow-hidden bg-accent border-t border-white/10">
            <div className="py-3">
              {/* Mobile Diensten */}
              <button
                onClick={() => setIsMobileDienstenOpen((prev) => !prev)}
                className={cn(
                  "flex items-center justify-between w-full px-6 py-3 text-sm font-medium transition-colors",
                  isDienstenActive
                    ? "text-white bg-white/10"
                    : "text-primary-foreground/80 hover:text-white hover:bg-white/5"
                )}
              >
                {t.diensten}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isMobileDienstenOpen && "rotate-180"
                  )}
                />
              </button>

              {isMobileDienstenOpen && (
                <div className="enter-pop overflow-hidden">
                    <div className="px-6 py-2 space-y-1">
                      {dienstenItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                            isLinkActive(item.href)
                              ? "bg-white/10 text-white"
                              : "text-primary-foreground/70 hover:text-white hover:bg-white/5"
                          )}
                        >
                          <item.icon className="h-4 w-4 flex-shrink-0" />
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{item.label}</span>
                            {item.badge && (
                              <span className="text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-1.5 py-0.5 rounded">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                </div>
              )}

              {/* Other mobile nav links */}
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "block px-6 py-3 text-sm font-medium transition-colors",
                    isLinkActive(item.href)
                      ? "text-white bg-white/10"
                      : "text-primary-foreground/80 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile: taal en prijsweergave */}
              <div className="px-6 pt-3 text-primary-foreground/85">
                <span className="wissels">
                  <TaalWissel />
                  <KlantWissel />
                </span>
              </div>

              {/* Mobile CTA */}
              <div className="px-6 pt-4 pb-2">
                <Button
                  asChild
                  className="bg-white text-foreground hover:bg-white/90 font-semibold text-sm rounded-lg w-full"
                >
                  <Link to={lp("/") + "#configurator"}>{t.cta} &rarr;</Link>
                </Button>
              </div>
            </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
