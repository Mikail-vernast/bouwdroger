import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Building2, Hammer, Droplets, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import { enterInitial } from "@/lib/firstPaint";

const dienstenItems = [
  {
    label: "Nieuwbouw",
    href: "/nieuwbouw",
    description: "Pleisterwerk & chape drogen",
    icon: Building2,
    badge: null,
  },
  {
    label: "Renovatie",
    href: "/renovatie",
    description: "Vocht & schimmel aanpakken",
    icon: Hammer,
    badge: null,
  },
  {
    label: "Waterschade",
    href: "/waterschade",
    description: "Noodservice binnen 24u",
    icon: Droplets,
    badge: "SPOED",
  },
  {
    label: "Vochtbestrijding",
    href: "/renovatie",
    description: "Structurele vochtproblemen oplossen",
    icon: Droplets,
    badge: null,
  },
  {
    label: "Aannemers",
    href: "/contact",
    description: "B2B tarieven & samenwerking",
    icon: HardHat,
    badge: null,
  },
];

const navLinks = [
  { label: "Levering", href: "/levering" },
  { label: "Afhalen", href: "/afhalen" },
  { label: "Machines", href: "/machines" },
  { label: "Realisaties", href: "/realisaties" },
  { label: "Over Ons", href: "/over-ons" },
  { label: "Klantenservice", href: "/klantservice" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDienstenOpen, setIsDienstenOpen] = useState(false);
  const [isMobileDienstenOpen, setIsMobileDienstenOpen] = useState(false);
  const dienstenRef = useRef<HTMLDivElement>(null);
  const dienstenTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

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
    <nav
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300 bg-accent",
        isScrolled && "shadow-lg"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
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
              Diensten
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isDienstenOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {isDienstenOpen && (
                <motion.div
                  initial={enterInitial({ opacity: 0, y: 8 })}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] bg-white rounded-xl shadow-2xl border border-gray-100 p-2 grid grid-cols-2 gap-2"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
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

        {/* Desktop CTA */}
        <div className="hidden lg:block flex-shrink-0">
          <Button
            asChild
            className="bg-white text-foreground hover:bg-white/90 font-semibold text-sm rounded-lg px-5"
          >
            <Link to="/#configurator">Bereken je prijs &rarr;</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Menu openen"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={enterInitial({ height: 0, opacity: 0 })}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-accent border-t border-white/10"
          >
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
                Diensten
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isMobileDienstenOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {isMobileDienstenOpen && (
                  <motion.div
                    initial={enterInitial({ height: 0, opacity: 0 })}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>

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

              {/* Mobile CTA */}
              <div className="px-6 pt-4 pb-2">
                <Button
                  asChild
                  className="bg-white text-foreground hover:bg-white/90 font-semibold text-sm rounded-lg w-full"
                >
                  <Link to="/#configurator">Bereken je prijs &rarr;</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
