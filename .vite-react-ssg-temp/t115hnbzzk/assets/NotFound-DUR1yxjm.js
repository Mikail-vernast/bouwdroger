import { jsxs, jsx } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { F as FontPreload } from "./FontPreload-C6Rzq6ld.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
import "vite-react-ssg";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/NotFound.tsx");
const COPY = {
  nl: { tekst: "Oops! Page not found", terug: "Return to Home" },
  fr: { tekst: "Oups ! Page introuvable", terug: "Retour à l'accueil" },
  en: { tekst: "Oops! Page not found", terug: "Return to Home" }
};
const NotFound = () => {
  const location = useLocation();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seo = useSeo("notFound");
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: [
    /* @__PURE__ */ jsx(FontPreload, { set: "inter" }),
    /* @__PURE__ */ jsx(PageMeta, { ...seo }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xl text-muted-foreground", children: t.tekst }),
      /* @__PURE__ */ jsx("a", { href: lp("/"), className: "text-primary underline hover:text-primary/90", children: t.terug })
    ] })
  ] });
};
export {
  NotFound as default
};
