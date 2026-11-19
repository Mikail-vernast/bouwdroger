import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Building2, Hammer, Droplets, HardHat, ChevronDown, X, Menu } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { useLocation, Link } from "react-router-dom";
import { F as FontPreload } from "./FontPreload-C6Rzq6ld.js";
import { T as TaalWissel, K as KlantWissel } from "./V3Footer-9z4J1I4x.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/utils.ts");
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/ui/button.tsx");
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const logoWhite = "/assets/logo-white-KE3PDBeI.png";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/Navbar.tsx");
const DIENSTEN_PAD = ["/nieuwbouw-drogen", "/renovatie", "/waterschade", "/renovatie", "/contact"];
const DIENSTEN_ICOON = [Building2, Hammer, Droplets, Droplets, HardHat];
const LINK_PAD = ["/levering", "/afhalen", "/machines", "/realisaties", "/over-ons", "/klantservice", "/contact"];
const COPY = {
  nl: {
    diensten: "Diensten",
    dienstenItems: [
      ["Nieuwbouw", "Pleisterwerk & chape drogen", null],
      ["Renovatie", "Vocht & schimmel aanpakken", null],
      ["Waterschade", "Noodservice binnen 24u", "SPOED"],
      ["Vochtbestrijding", "Structurele vochtproblemen oplossen", null],
      ["Aannemers", "B2B tarieven & samenwerking", null]
    ],
    links: ["Levering", "Afhalen", "Machines", "Realisaties", "Over Ons", "Klantenservice", "Contact"],
    cta: "Bereken je prijs",
    menuOpen: "Menu openen"
  },
  fr: {
    diensten: "Services",
    dienstenItems: [
      ["Nouvelle construction", "Sécher plafonnage & chape", null],
      ["Rénovation", "Traiter humidité & moisissures", null],
      ["Dégâts des eaux", "Service d'urgence en 24 h", "URGENT"],
      ["Traitement de l'humidité", "Résoudre l'humidité structurelle", null],
      ["Entrepreneurs", "Tarifs B2B & partenariat", null]
    ],
    links: ["Livraison", "Enlèvement", "Machines", "Réalisations", "À propos", "Service client", "Contact"],
    cta: "Calculez votre prix",
    menuOpen: "Ouvrir le menu"
  },
  en: {
    diensten: "Services",
    dienstenItems: [
      ["New build", "Drying plaster & screed", null],
      ["Renovation", "Tackling damp & mould", null],
      ["Water damage", "Emergency service within 24 h", "URGENT"],
      ["Damp control", "Solving structural damp problems", null],
      ["Contractors", "B2B rates & partnership", null]
    ],
    links: ["Delivery", "Collection", "Machines", "Projects", "About us", "Customer service", "Contact"],
    cta: "Calculate your price",
    menuOpen: "Open menu"
  }
};
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDienstenOpen, setIsDienstenOpen] = useState(false);
  const [isMobileDienstenOpen, setIsMobileDienstenOpen] = useState(false);
  const dienstenRef = useRef(null);
  const dienstenTimeout = useRef(null);
  const location = useLocation();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const dienstenItems = DIENSTEN_PAD.map((pad, i) => ({
    label: t.dienstenItems[i][0],
    href: lp(pad),
    description: t.dienstenItems[i][1],
    badge: t.dienstenItems[i][2],
    icon: DIENSTEN_ICOON[i]
  }));
  const navLinks = LINK_PAD.map((pad, i) => ({ label: t.links[i], href: lp(pad) }));
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileOpen(false);
    setIsDienstenOpen(false);
    setIsMobileDienstenOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dienstenRef.current && !dienstenRef.current.contains(e.target)) {
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
  const isLinkActive = (href) => location.pathname === href;
  const isDienstenActive = dienstenItems.some((item) => location.pathname === item.href);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(FontPreload, { set: "inter" }),
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: cn(
          "sticky top-0 z-50 transition-shadow duration-300 bg-accent",
          isScrolled && "shadow-lg"
        ),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between h-16 md:h-20", children: [
            /* @__PURE__ */ jsx(Link, { to: lp("/"), className: "flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src: logoWhite, alt: "Vernast Bouwdrogers", className: "h-7 md:h-8 w-auto", loading: "lazy", decoding: "async" }) }),
            /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-1", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  ref: dienstenRef,
                  className: "relative",
                  onMouseEnter: handleDienstenEnter,
                  onMouseLeave: handleDienstenLeave,
                  children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => setIsDienstenOpen((prev) => !prev),
                        className: cn(
                          "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                          isDienstenActive ? "text-white bg-white/15" : "text-primary-foreground/80 hover:text-white hover:bg-white/10"
                        ),
                        children: [
                          t.diensten,
                          /* @__PURE__ */ jsx(
                            ChevronDown,
                            {
                              className: cn(
                                "h-4 w-4 transition-transform duration-200",
                                isDienstenOpen && "rotate-180"
                              )
                            }
                          )
                        ]
                      }
                    ),
                    isDienstenOpen && /* @__PURE__ */ jsx("div", { className: "enter-pop absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] bg-white rounded-xl shadow-2xl border border-gray-100 p-2 grid grid-cols-2 gap-2", children: dienstenItems.map((item) => /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: item.href,
                        className: cn(
                          "flex items-start gap-3 p-3 rounded-lg transition-colors group",
                          isLinkActive(item.href) ? "bg-primary/5" : "hover:bg-gray-50"
                        ),
                        children: [
                          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-0.5 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors", children: /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5" }) }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: item.label }),
                              item.badge && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-1.5 py-0.5 rounded", children: item.badge })
                            ] }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground/60 mt-0.5", children: item.description })
                          ] })
                        ]
                      },
                      item.label
                    )) })
                  ]
                }
              ),
              navLinks.map((item) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: item.href,
                  className: cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isLinkActive(item.href) ? "text-white bg-white/15" : "text-primary-foreground/80 hover:text-white hover:bg-white/10"
                  ),
                  children: item.label
                },
                item.label
              ))
            ] }),
            /* @__PURE__ */ jsx("div", { className: "hidden lg:block flex-shrink-0", children: /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                className: "bg-white text-foreground hover:bg-white/90 font-semibold text-sm rounded-lg px-5",
                children: /* @__PURE__ */ jsxs(Link, { to: lp("/") + "#configurator", children: [
                  t.cta,
                  " →"
                ] })
              }
            ) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "lg:hidden p-2 text-primary-foreground",
                onClick: () => setIsMobileOpen((prev) => !prev),
                "aria-label": t.menuOpen,
                children: isMobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
              }
            )
          ] }),
          isMobileOpen && /* @__PURE__ */ jsx("div", { className: "enter-pop lg:hidden overflow-hidden bg-accent border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "py-3", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setIsMobileDienstenOpen((prev) => !prev),
                className: cn(
                  "flex items-center justify-between w-full px-6 py-3 text-sm font-medium transition-colors",
                  isDienstenActive ? "text-white bg-white/10" : "text-primary-foreground/80 hover:text-white hover:bg-white/5"
                ),
                children: [
                  t.diensten,
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      className: cn(
                        "h-4 w-4 transition-transform duration-200",
                        isMobileDienstenOpen && "rotate-180"
                      )
                    }
                  )
                ]
              }
            ),
            isMobileDienstenOpen && /* @__PURE__ */ jsx("div", { className: "enter-pop overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "px-6 py-2 space-y-1", children: dienstenItems.map((item) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: item.href,
                className: cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  isLinkActive(item.href) ? "bg-white/10 text-white" : "text-primary-foreground/70 hover:text-white hover:bg-white/5"
                ),
                children: [
                  /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 flex-shrink-0" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: item.label }),
                    item.badge && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-1.5 py-0.5 rounded", children: item.badge })
                  ] })
                ]
              },
              item.label
            )) }) }),
            navLinks.map((item) => /* @__PURE__ */ jsx(
              Link,
              {
                to: item.href,
                className: cn(
                  "block px-6 py-3 text-sm font-medium transition-colors",
                  isLinkActive(item.href) ? "text-white bg-white/10" : "text-primary-foreground/80 hover:text-white hover:bg-white/5"
                ),
                children: item.label
              },
              item.label
            )),
            /* @__PURE__ */ jsx("div", { className: "px-6 pt-3 text-primary-foreground/85", children: /* @__PURE__ */ jsxs("span", { className: "wissels", children: [
              /* @__PURE__ */ jsx(TaalWissel, {}),
              /* @__PURE__ */ jsx(KlantWissel, {})
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 pt-4 pb-2", children: /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                className: "bg-white text-foreground hover:bg-white/90 font-semibold text-sm rounded-lg w-full",
                children: /* @__PURE__ */ jsxs(Link, { to: lp("/") + "#configurator", children: [
                  t.cta,
                  " →"
                ] })
              }
            ) })
          ] }) })
        ]
      }
    )
  ] });
};
export {
  Button as B,
  Navbar as N,
  buttonVariants as b,
  cn as c
};
