import { jsxs, jsx } from "react/jsx-runtime";
import { useLocation, Link } from "react-router-dom";
import { T as TopBar } from "./TopBar-B0jE5GHc.js";
import { N as Navbar, B as Button } from "./Navbar-DWDUC3vw.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { C as Card, c as CardContent } from "./card-Dl9QPFXW.js";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./FontPreload-C6Rzq6ld.js";
import "vite-react-ssg";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/BookingSuccess.tsx");
const COPY = {
  nl: {
    bedankt: "Bedankt",
    intro: "Uw boekingsaanvraag is succesvol ontvangen. Wij nemen zo snel mogelijk contact met u op.",
    nummer: "Uw boekingsnummer",
    bevestiging: "Een bevestiging wordt verzonden naar",
    watNu: "Wat gebeurt er nu?",
    stappen: [
      "Wij bekijken uw aanvraag en checken beschikbaarheid",
      "U ontvangt een bevestiging met definitieve prijs en leverdatum",
      "Wij leveren op de afgesproken datum met gratis vochtmeting"
    ],
    home: "Terug naar home",
    bel: "Bel ons"
  },
  fr: {
    bedankt: "Merci",
    intro: "Votre demande de réservation a bien été reçue. Nous vous contactons dans les plus brefs délais.",
    nummer: "Votre numéro de réservation",
    bevestiging: "Une confirmation sera envoyée à",
    watNu: "Et maintenant ?",
    stappen: [
      "Nous examinons votre demande et vérifions la disponibilité",
      "Vous recevez une confirmation avec le prix définitif et la date de livraison",
      "Nous livrons à la date convenue, mesure d'humidité gratuite comprise"
    ],
    home: "Retour à l'accueil",
    bel: "Appelez-nous"
  },
  en: {
    bedankt: "Thank you",
    intro: "Your booking request has been received. We will get in touch with you as soon as possible.",
    nummer: "Your booking number",
    bevestiging: "A confirmation will be sent to",
    watNu: "What happens next?",
    stappen: [
      "We review your request and check availability",
      "You receive a confirmation with the final price and delivery date",
      "We deliver on the agreed date, with a free moisture reading"
    ],
    home: "Back to home",
    bel: "Call us"
  }
};
const BookingSuccess = () => {
  const location = useLocation();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const state = location.state;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(PageMeta, { ...useSeo("bookingSuccess") }),
    /* @__PURE__ */ jsx(TopBar, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "max-w-2xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-10 w-10 text-primary" }) }),
          /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-black mb-4", children: [
            t.bedankt,
            state?.firstName ? `, ${state.firstName}` : "",
            "!"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8", children: t.intro }),
          state?.bookingNumber && /* @__PURE__ */ jsx(Card, { className: "mb-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "py-6 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: t.nummer }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-black text-primary", children: state.bookingNumber })
            ] }),
            state.email && /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              t.bevestiging,
              " ",
              /* @__PURE__ */ jsx("strong", { children: state.email })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Card, { className: "mb-8 text-left", children: /* @__PURE__ */ jsxs(CardContent, { className: "py-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4", children: t.watNu }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: t.stappen.map((text, i) => ({ step: String(i + 1), text })).map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center", children: item.step }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground pt-1", children: item.text })
            ] }, item.step)) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "font-bold gap-2", children: /* @__PURE__ */ jsxs(Link, { to: lp("/"), children: [
              t.home,
              " ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "gap-2", children: /* @__PURE__ */ jsxs("a", { href: "tel:+3236899065", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
              " ",
              t.bel
            ] }) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  BookingSuccess as default
};
