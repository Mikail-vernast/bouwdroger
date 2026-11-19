import { jsx, jsxs } from "react/jsx-runtime";
import { Phone, Mail, Facebook } from "lucide-react";
import { B as Button } from "./Navbar-DWDUC3vw.js";
import { u as useCopy } from "../main.mjs";
import { T as TaalWissel, K as KlantWissel } from "./V3Footer-9z4J1I4x.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/TopBar.tsx");
const COPY = { nl: { offerte: "Gratis Offerte" }, fr: { offerte: "Devis gratuit" }, en: { offerte: "Free quote" } };
const TopBar = () => {
  const t = useCopy(COPY);
  return /* @__PURE__ */ jsx("div", { className: "bg-foreground text-background text-sm py-2", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsxs("a", { href: "tel:+3236899065", className: "flex items-center gap-2 hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "03 689 90 65" })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "mailto:info@vernast-bouwdrogers.be", className: "flex items-center gap-2 hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "info@vernast-bouwdrogers.be" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxs("span", { className: "wissels hidden md:inline-flex", children: [
        /* @__PURE__ */ jsx(TaalWissel, {}),
        /* @__PURE__ */ jsx(KlantWissel, {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Facebook", className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(Button, { size: "sm", className: "text-xs font-semibold tracking-wide uppercase", children: t.offerte })
    ] })
  ] }) });
};
export {
  TopBar as T
};
