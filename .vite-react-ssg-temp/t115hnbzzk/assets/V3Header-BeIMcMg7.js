import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { F as FontPreload } from "./FontPreload-C6Rzq6ld.js";
import { n as navigatie, T as TaalWissel, K as KlantWissel } from "./V3Footer-9z4J1I4x.js";
import { C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { u as useCopy, a as useLokaalPad, b as useTaal } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/icons.tsx");
const strokeProps$1 = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const PhoneIcon = ({ size = 15 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 2, ...strokeProps$1, children: /* @__PURE__ */ jsx("path", { d: "M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" }) });
const MailIcon = ({ size = 15, strokeWidth = 2 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "m2 7 10 6 10-6" })
] });
const CaretIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { className, viewBox: "0 0 24 24", strokeWidth: 2.5, ...strokeProps$1, children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" }) });
const ArrowRightIcon = ({ size = 15, strokeWidth = 2.4 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] });
const CheckIcon = ({ size = 13, strokeWidth = 2.6 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth, ...strokeProps$1, children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) });
const CartIcon = ({ size = 21 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
  /* @__PURE__ */ jsx("path", { d: "M3 6h18" }),
  /* @__PURE__ */ jsx("path", { d: "M16 10a4 4 0 0 1-8 0" })
] });
const GoogleIcon = ({ size = 18 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 48 48", children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "#4285F4",
      d: "M45 24c0-1.6-.1-2.7-.4-4H24v8h12c-.2 2-1.5 5-4.7 7l6.4 5c3.7-3.5 7.3-8.6 7.3-16z"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "#34A853",
      d: "M24 46c6 0 11-2 14.7-5.4l-6.4-5C30.5 36.9 27.6 38 24 38c-6 0-11.1-4-12.9-9.5l-6.7 5.2C8.1 41.1 15.4 46 24 46z"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "#FBBC05",
      d: "M11.1 28.5c-.5-1.4-.8-2.9-.8-4.5s.3-3.1.7-4.5l-6.7-5.2C2.9 17.3 2 20.5 2 24s.9 6.7 2.4 9.7l6.7-5.2z"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "#EA4335",
      d: "M24 10c4.2 0 7 1.8 8.6 3.3l5.7-5.6C34.9 4.3 30 2 24 2 15.4 2 8.1 6.9 4.4 14.3l6.7 5.2C12.9 14 18 10 24 10z"
    }
  )
] });
const BoltIcon = ({ size = 19 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: /* @__PURE__ */ jsx("path", { d: "M13 2 3 14h9l-1 8 10-12h-9z" }) });
const MoldIcon = ({ size = 19 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ jsx("path", { d: "M8 12c0-2.5 2-4 4-4s4 1.5 4 4-2 4-4 4-4-1.5-4-4z" })
] });
const HouseIcon = ({ size = 19 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M3 21V9l9-6 9 6v12" }),
  /* @__PURE__ */ jsx("path", { d: "M9 21v-6h6v6" })
] });
const TruckIcon = ({ size = 21 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M10 17h4V5H2v12h3" }),
  /* @__PURE__ */ jsx("path", { d: "M20 17h2v-3.3a4 4 0 0 0-1.2-2.9L19 9h-5v8h1" }),
  /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "17.5", r: "2.5" }),
  /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "17.5", r: "2.5" })
] });
const ChecklistIcon = ({ size = 21 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
  /* @__PURE__ */ jsx("path", { d: "M14 2v6h6" }),
  /* @__PURE__ */ jsx("path", { d: "m9 15 2 2 4-4" })
] });
const RefreshIcon = ({ size = 21 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 1 1-6.2-8.6" }),
  /* @__PURE__ */ jsx("path", { d: "M21 4v5h-5" })
] });
const SupportIcon = ({ size = 21 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M5 18 3 20V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" }),
  /* @__PURE__ */ jsx("path", { d: "M8 12h.01M12 12h.01M16 12h.01" })
] });
const DropIcon = ({ size = 16 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.9, ...strokeProps$1, children: /* @__PURE__ */ jsx("path", { d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" }) });
const BrushIcon = ({ size = 16 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.9, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M2 22 4 18 15 7l4 4L8 22z" }),
  /* @__PURE__ */ jsx("path", { d: "m14 4 6 6" })
] });
const CellarIcon = ({ size = 16 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.9, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M3 10h18v11H3z" }),
  /* @__PURE__ */ jsx("path", { d: "M5 10V6a7 7 0 0 1 14 0v4" })
] });
const HouseSmallIcon = ({ size = 16 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.9, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M3 21V9l9-6 9 6v12" }),
  /* @__PURE__ */ jsx("path", { d: "M9 21v-6h6v6" })
] });
const LeafIcon = ({ size = 10 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 2.2, ...strokeProps$1, children: /* @__PURE__ */ jsx("path", { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }) });
const InfoIcon = ({ size = 17 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 2, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("path", { d: "M12 16v-4M12 8h.01" })
] });
const CardIcon = ({ size = 21 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M2 10h20" })
] });
const CalendarCheckIcon = ({ size = 21, height = 17 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height, rx: "2" }),
  height === 17 ? /* @__PURE__ */ jsx("path", { d: "M8 2v4M16 2v4M3 10h18" }) : /* @__PURE__ */ jsx("path", { d: "M3 10h18" }),
  /* @__PURE__ */ jsx("path", { d: "m9 15 2 2 4-4" })
] });
const PinIcon = ({ size = 19 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.8, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
] });
const UploadIcon = ({ size = 20 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.9, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
  /* @__PURE__ */ jsx("path", { d: "m17 8-5-5-5 5" }),
  /* @__PURE__ */ jsx("path", { d: "M12 3v12" })
] });
const FileIcon = ({ size = 14 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "#C81F2F", strokeWidth: 2, children: [
  /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
  /* @__PURE__ */ jsx("path", { d: "M14 2v6h6" })
] });
const StarIcon = ({ size = 14 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12 2.6l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.42l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.95L12 2.6Z" }) });
const PlanIcon = ({ size = 15, strokeWidth = 1.9 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M3.4 4.4h17.2v15.2H3.4z" }),
  /* @__PURE__ */ jsx("path", { d: "M10.2 4.4v6.1M10.2 14.1v5.5" }),
  /* @__PURE__ */ jsx("path", { d: "M10.2 10.5h10.4" })
] });
const ShieldIcon = ({ size = 15, strokeWidth = 1.9 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 2.8 19.5 5.8v5.4c0 4.4-3.1 7.6-7.5 9.1-4.4-1.5-7.5-4.7-7.5-9.1V5.8L12 2.8Z" }),
  /* @__PURE__ */ jsx("path", { d: "m9.2 11.8 2 2 3.6-3.8" })
] });
const ClipboardIcon = ({ size = 15, strokeWidth = 1.9 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M8.8 4.6H6.4A1.8 1.8 0 0 0 4.6 6.4v13.2a1.8 1.8 0 0 0 1.8 1.8h11.2a1.8 1.8 0 0 0 1.8-1.8V6.4a1.8 1.8 0 0 0-1.8-1.8h-2.4" }),
  /* @__PURE__ */ jsx("path", { d: "M9.4 2.8h5.2v3.4H9.4z" }),
  /* @__PURE__ */ jsx("path", { d: "m8.8 13.2 2.1 2.1 4.3-4.4" })
] });
const HelmetIcon = ({ size = 15, strokeWidth = 1.9 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M2.6 17.6h18.8" }),
  /* @__PURE__ */ jsx("path", { d: "M5.4 17.6v-3.1a6.6 6.6 0 0 1 13.2 0v3.1" }),
  /* @__PURE__ */ jsx("path", { d: "M9.6 8.6V6.2a1.6 1.6 0 0 1 1.6-1.6h1.6a1.6 1.6 0 0 1 1.6 1.6v2.4" }),
  /* @__PURE__ */ jsx("path", { d: "M12 8v9.6" })
] });
const CalcIcon = ({ size = 26 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 32 32", strokeWidth: 1.9, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("rect", { x: "7", y: "3.5", width: "18", height: "25", rx: "3" }),
  /* @__PURE__ */ jsx("rect", { className: "dfi-scherm", x: "10.5", y: "7", width: "11", height: "5", rx: "1.3", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "17", r: "1.3", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ jsx("circle", { cx: "16", cy: "17", r: "1.3", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "17", r: "1.3", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "22", r: "1.3", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ jsx("circle", { cx: "16", cy: "22", r: "1.3", fill: "currentColor", stroke: "none" }),
  /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "22", r: "1.3", fill: "currentColor", stroke: "none" })
] });
const PrijsIcon = ({ size = 26 }) => /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 32 32", strokeWidth: 1.9, ...strokeProps$1, children: /* @__PURE__ */ jsxs("g", { className: "dfi-label", children: [
  /* @__PURE__ */ jsx("path", { d: "M16.6 3.6H27a1.4 1.4 0 0 1 1.4 1.4v10.4a1.4 1.4 0 0 1-.41.99L16.2 28.18a1.4 1.4 0 0 1-1.98 0L3.82 17.78a1.4 1.4 0 0 1 0-1.98L15.61 4.01a1.4 1.4 0 0 1 .99-.41Z" }),
  /* @__PURE__ */ jsx("circle", { cx: "22.4", cy: "9.6", r: "2.1" })
] }) });
const GammaIcon = ({ size = 26 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 32 32", strokeWidth: 1.9, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("rect", { x: "3.5", y: "19", width: "7", height: "9.5", rx: "1.6" }),
  /* @__PURE__ */ jsx("rect", { className: "dfi-kies", x: "12.5", y: "12", width: "7", height: "16.5", rx: "1.6" }),
  /* @__PURE__ */ jsx("rect", { x: "21.5", y: "5", width: "7", height: "23.5", rx: "1.6" })
] });
const OpvolgIcon = ({ size = 26 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 32 32", strokeWidth: 1.9, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 6.5h14M12 16h14M12 25.5h14" }),
  /* @__PURE__ */ jsx("path", { className: "dfi-vink1", d: "m4 6.5 2.2 2.2L10 4.6" }),
  /* @__PURE__ */ jsx("path", { className: "dfi-vink2", d: "m4 16 2.2 2.2L10 14.1" }),
  /* @__PURE__ */ jsx("path", { className: "dfi-vink3", d: "m4 25.5 2.2 2.2L10 23.6" })
] });
const VerlengIcon = ({ size = 26 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 32 32", strokeWidth: 1.9, ...strokeProps$1, children: [
  /* @__PURE__ */ jsx("path", { d: "M5 9.5v13M27 9.5v13" }),
  /* @__PURE__ */ jsx("path", { className: "dfi-pijl", d: "M8 16h16M20.5 12.5 24 16l-3.5 3.5" })
] });
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/schil.copy.ts");
const SCHIL_COPY = {
  nl: {
    uren: "Ma–Vr 08:00–17:00",
    belofteV3: "Droogpakket berekend op uw woning · u kiest zelf uw leverdatum",
    belofteV: "Erkend droogspecialist · u kiest uw leverdatum",
    hoofdnav: "Hoofdnavigatie",
    groep: "Group",
    groepVocht: ["Vochtbestrijding", "Kelder · muren · gevel"],
    groepVerhuur: ["Verhuur & bouwdroging", "Toestellen en pakketten"],
    groepSchilder: ["Schilderwerken", "Binnen & buiten"],
    bouwdroging: "Bouwdroging",
    allesOverDrogen: "Alles over drogen",
    kopToestellen: "Toestellen",
    kopPakketten: "Pakketten",
    kopToepassingen: "Toepassingen",
    kopService: "Service",
    levering: "Levering & installatie",
    afhalen: "Afhalen in Aartselaar",
    vochtmeting: "Vochtmeting inbegrepen",
    dekking: "Dekking & eigen risico",
    verlengen: "Verlengen of stoppen",
    megaVraag1: "Niet zeker welk pakket u nodig heeft?",
    megaUitleg1: "Onze Calculator bepaalt in 5 vragen de juiste toestellen, droogtijd en prijs.",
    megaVraag2: "Liever eerst weten wat het kost?",
    megaUitleg2: "De Calculator rekent uw volume uit en zegt welk toestel en welke droogtijd erbij horen.",
    calculatorKnop: "Gratis Calculator",
    realisaties: "Realisaties",
    overOns: "Over ons",
    klantenservice: "Klantenservice",
    contact: "Contact",
    winkelwagen: "Winkelwagen",
    menuOpen: "Menu openen",
    menuSluit: "Menu sluiten",
    hoofdmenu: "Hoofdmenu",
    naarHome: "Naar de homepage",
    bel: (nummer) => `Bel ${nummer}`,
    chipService: "Levering & service",
    berekenPakket: "Bereken uw droogpakket"
  },
  fr: {
    uren: "Lu–Ve 8 h–17 h",
    belofteV3: "Pack calculé pour votre logement · livraison à la date choisie",
    belofteV: "Spécialiste agréé du séchage · date de livraison au choix",
    hoofdnav: "Navigation principale",
    groep: "Groupe",
    groepVocht: ["Traitement de l'humidité", "Cave · murs · façade"],
    groepVerhuur: ["Location & séchage", "Appareils et packs"],
    groepSchilder: ["Travaux de peinture", "Intérieur & extérieur"],
    bouwdroging: "Séchage",
    allesOverDrogen: "Tout sur le séchage",
    kopToestellen: "Appareils",
    kopPakketten: "Packs",
    kopToepassingen: "Applications",
    kopService: "Service",
    levering: "Livraison & installation",
    afhalen: "Enlèvement à Aartselaar",
    vochtmeting: "Mesure d'humidité comprise",
    dekking: "Couverture & franchise",
    verlengen: "Prolonger ou arrêter",
    megaVraag1: "Vous ne savez pas quel pack choisir ?",
    megaUitleg1: "Notre calculateur détermine en 5 questions les bons appareils, la durée de séchage et le prix.",
    megaVraag2: "Vous voulez d'abord connaître le prix ?",
    megaUitleg2: "Le calculateur évalue votre volume et vous indique l'appareil et la durée de séchage qui conviennent.",
    calculatorKnop: "Calculateur gratuit",
    realisaties: "Réalisations",
    overOns: "À propos",
    klantenservice: "Service client",
    contact: "Contact",
    winkelwagen: "Panier",
    menuOpen: "Ouvrir le menu",
    menuSluit: "Fermer le menu",
    hoofdmenu: "Menu principal",
    naarHome: "Vers la page d'accueil",
    bel: (nummer) => `Appeler le ${nummer}`,
    chipService: "Livraison & service",
    berekenPakket: "Calculez votre pack de séchage"
  },
  en: {
    uren: "Mon–Fri 08:00–17:00",
    belofteV3: "Drying package calculated for your home · you choose the delivery date",
    belofteV: "Accredited drying specialist · you choose your delivery date",
    hoofdnav: "Main navigation",
    groep: "Group",
    groepVocht: ["Damp control", "Cellar · walls · façade"],
    groepVerhuur: ["Hire & building drying", "Units and packages"],
    groepSchilder: ["Painting", "Interior & exterior"],
    bouwdroging: "Building drying",
    allesOverDrogen: "All about drying",
    kopToestellen: "Units",
    kopPakketten: "Packages",
    kopToepassingen: "Applications",
    kopService: "Service",
    levering: "Delivery & installation",
    afhalen: "Collection in Aartselaar",
    vochtmeting: "Moisture reading included",
    dekking: "Cover & excess",
    verlengen: "Extend or stop",
    megaVraag1: "Not sure which package you need?",
    megaUitleg1: "Our Calculator works out the right units, drying time and price in 5 questions.",
    megaVraag2: "Rather know the cost first?",
    megaUitleg2: "The Calculator works out your volume and tells you which unit and drying time go with it.",
    calculatorKnop: "Free Calculator",
    realisaties: "Projects",
    overOns: "About us",
    klantenservice: "Customer service",
    contact: "Contact",
    winkelwagen: "Basket",
    menuOpen: "Open menu",
    menuSluit: "Close menu",
    hoofdmenu: "Main menu",
    naarHome: "To the homepage",
    bel: (nummer) => `Call ${nummer}`,
    chipService: "Delivery & service",
    berekenPakket: "Calculate your drying package"
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/MobileNav.tsx");
const uitklapbaar = (nav, t) => [
  {
    id: "bouwdroging",
    label: t.bouwdroging,
    categorieen: [
      { chip: t.kopPakketten, items: nav.PAKKETTEN },
      { chip: t.kopToestellen, items: nav.TOESTELLEN },
      // Dezelfde vierde kolom als op de desktop: wie het menu Bouwdroging
      // opent, moet ook hier bij zijn eigen situatie kunnen.
      { chip: t.kopToepassingen, items: nav.MENU_SITUATIES },
      { chip: t.chipService, items: nav.SERVICE }
    ]
  },
  {
    id: "drogen",
    label: t.allesOverDrogen,
    // Dezelfde kolommen als in het mega-menu op de desktop, zodat beide
    // dezelfde pagina's tonen; de kop van elke kolom wordt hier de chip.
    categorieen: nav.ALLES_OVER_DROGEN.map((groep) => ({ chip: groep.titel, items: groep.items }))
  },
  { id: "groep", label: t.groep, categorieen: [{ items: nav.VERNAST_GROEP }] }
];
const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const CloseIcon = () => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", strokeWidth: 2, ...strokeProps, children: /* @__PURE__ */ jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
const CaretDown = ({ className }) => /* @__PURE__ */ jsx("svg", { className, viewBox: "0 0 24 24", strokeWidth: 2.2, ...strokeProps, children: /* @__PURE__ */ jsx("path", { d: "M6 9l6 6 6-6" }) });
const ArrowRight = () => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", strokeWidth: 2.4, ...strokeProps, children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] });
const PhoneGlyph = () => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", strokeWidth: 2, ...strokeProps, children: /* @__PURE__ */ jsx("path", { d: "M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" }) });
const MobileNavButton = ({
  open,
  onClick
}) => {
  const t = useCopy(SCHIL_COPY);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: "mnav-btn",
      "aria-label": open ? t.menuSluit : t.menuOpen,
      "aria-expanded": open,
      "aria-controls": "mobiel-menu",
      onClick,
      children: [
        /* @__PURE__ */ jsx("i", {}),
        /* @__PURE__ */ jsx("i", {}),
        /* @__PURE__ */ jsx("i", {})
      ]
    }
  );
};
const MobileNavActions = ({
  open,
  onClick
}) => {
  const t = useCopy(SCHIL_COPY);
  return /* @__PURE__ */ jsxs("div", { className: "mnav-acties", children: [
    /* @__PURE__ */ jsx("a", { className: "mnav-bel", href: `tel:${CONTACT.phoneE164}`, "aria-label": t.bel(CONTACT.phoneLocal), children: /* @__PURE__ */ jsx(PhoneGlyph, {}) }),
    /* @__PURE__ */ jsx(MobileNavButton, { open, onClick })
  ] });
};
const MobileNav = ({
  open,
  onClose,
  groep,
  onGroep,
  logo = "/vernast/logo-horizontal-white.webp"
}) => {
  const { pathname } = useLocation();
  const panelRef = useRef(null);
  const teruggeefFocus = useRef(null);
  const t = useCopy(SCHIL_COPY);
  const lp = useLokaalPad();
  const nav = navigatie(useTaal());
  const UITKLAPBAAR = uitklapbaar(nav, t);
  useEffect(() => {
    onClose();
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    teruggeefFocus.current = document.activeElement;
    panelRef.current?.querySelector(".mnav-close")?.focus();
    const vorigeOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const breed = window.matchMedia("(min-width: 1161px)");
    const onBreed = () => {
      if (breed.matches) onClose();
    };
    document.addEventListener("keydown", onKey);
    breed.addEventListener("change", onBreed);
    return () => {
      document.removeEventListener("keydown", onKey);
      breed.removeEventListener("change", onBreed);
      document.body.style.overflow = vorigeOverflow;
      teruggeefFocus.current?.focus?.();
    };
  }, [open, onClose]);
  const nummer = (i) => String(i + 1).padStart(2, "0");
  const rise = (i) => ({ transitionDelay: open ? `${0.1 + i * 0.05}s` : "0s" });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `mnav${open ? " is-open" : ""}`,
      id: "mobiel-menu",
      ref: panelRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": t.hoofdmenu,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mnav-h", children: [
          /* @__PURE__ */ jsx(Link, { to: lp("/"), "aria-label": t.naarHome, children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Vernast", width: 1600, height: 268, decoding: "async" }) }),
          /* @__PURE__ */ jsx("button", { type: "button", className: "mnav-close", "aria-label": t.menuSluit, onClick: onClose, children: /* @__PURE__ */ jsx(CloseIcon, {}) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mnav-list", children: [
          UITKLAPBAAR.map((rij, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: `mnav-acc mnav-rise${groep === rij.id ? " is-on" : ""}`,
              style: rise(i),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: "mnav-ix",
                    "aria-expanded": groep === rij.id,
                    onClick: () => onGroep(groep === rij.id ? null : rij.id),
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "n", children: nummer(i) }),
                      /* @__PURE__ */ jsx("span", { className: "t", children: rij.label }),
                      /* @__PURE__ */ jsx(CaretDown, { className: "c" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "mnav-sub", children: /* @__PURE__ */ jsxs("div", { children: [
                  rij.categorieen.map((cat) => /* @__PURE__ */ jsxs("div", { children: [
                    cat.chip ? /* @__PURE__ */ jsx("span", { className: "mnav-cat", children: cat.chip }) : null,
                    /* @__PURE__ */ jsx("ul", { children: cat.items.map((item) => /* @__PURE__ */ jsx("li", { children: item.href ? /* @__PURE__ */ jsx("a", { href: item.href, children: item.label }) : /* @__PURE__ */ jsx(Link, { to: item.path ?? "/", children: item.label }) }, item.label)) })
                  ] }, cat.chip ?? rij.id)),
                  /* @__PURE__ */ jsx("div", { className: "sluit" })
                ] }) })
              ]
            },
            rij.id
          )),
          nav.BEDRIJF.map((item, i) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "mnav-acc mnav-rise",
              style: rise(UITKLAPBAAR.length + i),
              children: /* @__PURE__ */ jsxs(Link, { className: "mnav-ix", to: item.path, children: [
                /* @__PURE__ */ jsx("span", { className: "n", children: nummer(UITKLAPBAAR.length + i) }),
                /* @__PURE__ */ jsx("span", { className: "t", children: item.label })
              ] })
            },
            item.path
          ))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mnav-foot", children: [
          /* @__PURE__ */ jsxs(Link, { className: "mnav-cta mnav-rise", style: rise(6), to: lp("/verhuur/calculator"), children: [
            t.berekenPakket,
            /* @__PURE__ */ jsx(ArrowRight, {})
          ] }),
          /* @__PURE__ */ jsxs("a", { className: "mnav-call mnav-rise", style: rise(7), href: `tel:${CONTACT.phoneE164}`, children: [
            /* @__PURE__ */ jsx(PhoneGlyph, {}),
            CONTACT.phoneLocal
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "mnav-hours mnav-rise", style: rise(8), children: [
            t.uren,
            " · ",
            CONTACT.email
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "wissels mnav-rise", style: rise(9), children: [
            /* @__PURE__ */ jsx(TaalWissel, {}),
            /* @__PURE__ */ jsx(KlantWissel, {})
          ] })
        ] })
      ]
    }
  );
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Header.tsx");
const PIL_ONDER = 80;
const V3Header = ({ lightAfter = 560, alwaysLightBelow, darkUntil }) => {
  const [tucked, setTucked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuGroep, setMenuGroep] = useState(null);
  const lastY = useRef(0);
  const t = useCopy(SCHIL_COPY);
  const lp = useLokaalPad();
  const { ALLES_OVER_DROGEN, MENU_SITUATIES, PAKKETTEN, TOESTELLEN } = navigatie(useTaal());
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 90) setTucked(false);
      else if (y > lastY.current + 6) setTucked(true);
      else if (y < lastY.current - 6) setTucked(false);
      setScrolled(y > 60);
      const donker = darkUntil ? document.querySelector(darkUntil) : null;
      setOnLight(
        lightAfter < 0 || alwaysLightBelow !== void 0 && window.innerWidth <= alwaysLightBelow || (donker ? donker.getBoundingClientRect().bottom <= PIL_ONDER : y > lightAfter)
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
  const cls = ["hdr", tucked && "tucked", scrolled && "scrolled", onLight && "onlight"].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(FontPreload, { set: "v3" }),
    /* @__PURE__ */ jsxs("header", { className: cls, id: "top", children: [
      /* @__PURE__ */ jsxs("div", { className: "wrap topline mnav-topline", children: [
        /* @__PURE__ */ jsxs("div", { className: "tl-left", children: [
          /* @__PURE__ */ jsxs("a", { href: "tel:+3236899065", children: [
            /* @__PURE__ */ jsx(PhoneIcon, {}),
            " 03 689 90 65"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:info@vernast-bouwdrogers.be", children: [
            /* @__PURE__ */ jsx(MailIcon, {}),
            " info@vernast-bouwdrogers.be"
          ] }),
          /* @__PURE__ */ jsx("span", { children: t.uren })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "tl-right", children: [
          /* @__PURE__ */ jsx("span", { className: "dot" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "tl-belofte", children: t.belofteV3 }),
          /* @__PURE__ */ jsxs("span", { className: "wissels", children: [
            /* @__PURE__ */ jsx(TaalWissel, {}),
            /* @__PURE__ */ jsx(KlantWissel, {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "wrap navrow mnav-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "navpill", children: [
          /* @__PURE__ */ jsx(Link, { className: "nav-logo", to: lp("/"), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: onLight ? "/vernast/logo-horizontal-black.webp" : "/vernast/logo-horizontal-white.webp",
              alt: "Vernast",
              width: 1600,
              height: 268,
              decoding: "async"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "nav-menu", children: [
            /* @__PURE__ */ jsxs("div", { className: "item has-sub", children: [
              t.groep,
              /* @__PURE__ */ jsx(CaretIcon, { className: "caret" }),
              /* @__PURE__ */ jsxs("div", { className: "submenu", children: [
                /* @__PURE__ */ jsxs("a", { href: "https://vernast-vochtbestrijding.be/", children: [
                  t.groepVocht[0],
                  /* @__PURE__ */ jsx("small", { children: t.groepVocht[1] })
                ] }),
                /* @__PURE__ */ jsxs(Link, { to: lp("/"), children: [
                  t.groepVerhuur[0],
                  /* @__PURE__ */ jsx("small", { children: t.groepVerhuur[1] })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "https://www.vernast-schilderwerken.be/", children: [
                  t.groepSchilder[0],
                  /* @__PURE__ */ jsx("small", { children: t.groepSchilder[1] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "item mega has-sub", children: [
              t.bouwdroging,
              /* @__PURE__ */ jsx(CaretIcon, { className: "caret" }),
              /* @__PURE__ */ jsxs("div", { className: "mega-panel", children: [
                /* @__PURE__ */ jsxs("div", { className: "mmv-cols", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mmv-groep", children: [
                    /* @__PURE__ */ jsx("span", { className: "mmv-kop", children: t.kopToestellen }),
                    /* @__PURE__ */ jsx("ul", { className: "mmv-lijst", children: TOESTELLEN.map((toestel) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: toestel.path, children: toestel.label }) }, toestel.path)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mmv-groep", children: [
                    /* @__PURE__ */ jsx("span", { className: "mmv-kop", children: t.kopPakketten }),
                    /* @__PURE__ */ jsx("ul", { className: "mmv-lijst", children: PAKKETTEN.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: item.path, children: item.label }) }, item.label)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mmv-groep", children: [
                    /* @__PURE__ */ jsx("span", { className: "mmv-kop", children: t.kopToepassingen }),
                    /* @__PURE__ */ jsx("ul", { className: "mmv-lijst", children: MENU_SITUATIES.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: item.path, children: item.label }) }, item.path)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mmv-groep", children: [
                    /* @__PURE__ */ jsx("span", { className: "mmv-kop", children: t.kopService }),
                    /* @__PURE__ */ jsxs("ul", { className: "mmv-lijst", children: [
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: t.levering }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: lp("/afhalen"), children: t.afhalen }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/pakket"), children: t.vochtmeting }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: t.dekking }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/verlengen"), children: t.verlengen }) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mega-foot", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mft", children: [
                    /* @__PURE__ */ jsx("b", { children: t.megaVraag1 }),
                    /* @__PURE__ */ jsx("span", { children: t.megaUitleg1 })
                  ] }),
                  /* @__PURE__ */ jsx(Link, { className: "btn-offerte", to: lp("/verhuur/calculator"), children: t.calculatorKnop })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "item mega has-sub", children: [
              t.allesOverDrogen,
              /* @__PURE__ */ jsx(CaretIcon, { className: "caret" }),
              /* @__PURE__ */ jsxs("div", { className: "mega-panel kennis", children: [
                /* @__PURE__ */ jsx("div", { className: "mmv-cols", children: ALLES_OVER_DROGEN.map((groep) => /* @__PURE__ */ jsxs("div", { className: "mmv-groep", children: [
                  /* @__PURE__ */ jsx("span", { className: "mmv-kop", children: groep.titel }),
                  /* @__PURE__ */ jsx("ul", { className: "mmv-lijst", children: groep.items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: item.path, children: item.label }) }, item.path)) })
                ] }, groep.titel)) }),
                /* @__PURE__ */ jsxs("div", { className: "mega-foot", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mft", children: [
                    /* @__PURE__ */ jsx("b", { children: t.megaVraag2 }),
                    /* @__PURE__ */ jsx("span", { children: t.megaUitleg2 })
                  ] }),
                  /* @__PURE__ */ jsx(Link, { className: "btn-offerte", to: lp("/verhuur/calculator"), children: t.calculatorKnop })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Link, { className: "item", to: lp("/realisaties"), children: t.realisaties }),
            /* @__PURE__ */ jsx(Link, { className: "item", to: lp("/over-ons"), children: t.overOns }),
            /* @__PURE__ */ jsx(Link, { className: "item", to: lp("/klantservice"), children: t.klantenservice }),
            /* @__PURE__ */ jsx(Link, { className: "item", to: lp("/contact"), children: t.contact })
          ] }),
          /* @__PURE__ */ jsx(MobileNavActions, { open: menuOpen, onClick: () => menuOpen ? sluitMenu() : setMenuOpen(true) })
        ] }),
        /* @__PURE__ */ jsxs(Link, { className: "cart mnav-hide-sm", to: lp("/verhuur/calculator"), "aria-label": t.winkelwagen, children: [
          /* @__PURE__ */ jsx(CartIcon, {}),
          /* @__PURE__ */ jsx("i", { id: "cartCount", children: "1" })
        ] }),
        /* @__PURE__ */ jsx(Link, { className: "btn-offerte mnav-cta-sm", to: lp("/verhuur/calculator"), children: t.calculatorKnop })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      MobileNav,
      {
        open: menuOpen,
        onClose: sluitMenu,
        groep: menuGroep,
        onGroep: setMenuGroep
      }
    )
  ] });
};
export {
  ArrowRightIcon as A,
  BoltIcon as B,
  ClipboardIcon as C,
  DropIcon as D,
  FileIcon as F,
  GammaIcon as G,
  HelmetIcon as H,
  InfoIcon as I,
  LeafIcon as L,
  MailIcon as M,
  OpvolgIcon as O,
  PlanIcon as P,
  RefreshIcon as R,
  ShieldIcon as S,
  TruckIcon as T,
  UploadIcon as U,
  VerlengIcon as V,
  PrijsIcon as a,
  CalcIcon as b,
  ChecklistIcon as c,
  SupportIcon as d,
  CheckIcon as e,
  CardIcon as f,
  CalendarCheckIcon as g,
  PinIcon as h,
  GoogleIcon as i,
  StarIcon as j,
  PhoneIcon as k,
  V3Header as l,
  CartIcon as m,
  MoldIcon as n,
  CellarIcon as o,
  BrushIcon as p,
  HouseSmallIcon as q,
  HouseIcon as r
};
