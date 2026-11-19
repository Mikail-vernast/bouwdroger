import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";
import { t as taalUitPad, j as alternatieven, H as HTML_LANG, O as OG_LOCALE } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/site.ts");
const SITE_URL = "https://vernast-bouwdrogers.be".replace(/\/$/, "");
const SITE_NAME = "Vernast Bouwdrogers";
const SITE_LANG = "nl-BE";
const DEFAULT_OG_IMAGE = "/design/og-default.png";
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;
const CONTACT = {
  /** E.164, voor `tel:`-links en schema.org. */
  phoneE164: "+3236899065",
  /**
   * Zoals het op het scherm staat. De internationale notatie hoort bij
   * schema.org en bij bezoekers van buiten België; in de balk en het menu
   * schrijft de site zelf het lokale nummer, en dat stond tot nu toe op elke
   * plek apart overgetypt.
   */
  phoneLocal: "03 689 90 65",
  email: "info@vernast-bouwdrogers.be",
  street: "Boomsesteenweg 12, Unit 11",
  postalCode: "2630",
  city: "Aartselaar",
  region: "Antwerpen",
  country: "BE",
  /** Openingsuren zoals ze op elke pagina in de topbalk staan. */
  openingHours: "Mo-Fr 08:00-17:00",
  /**
   * Coördinaten van het magazijn (OpenStreetMap, gebouw Boomsesteenweg 12).
   *
   * Zonder `geo` moet Google het adres zelf geolokaliseren, en "Boomsesteenweg"
   * loopt door vier gemeenten. Voor een bedrijf dat het van "bouwdroger huren
   * in de buurt" moet hebben, is dat het verschil tussen wel en niet in de
   * lokale resultaten staan.
   */
  latitude: 51.13598,
  longitude: 4.37512
};
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CONTACT.street.split(",")[0]}, ${CONTACT.postalCode} ${CONTACT.city}`
)}`;
const HEADQUARTERS = {
  name: "Vernast",
  url: "https://www.vernast.be/",
  street: "Ballaarstraat 99",
  postalCode: "2018",
  city: "Antwerpen",
  region: "Antwerpen",
  country: "BE",
  latitude: 51.2024,
  longitude: 4.4018
};
const ORGANIZATION_LOGO = "/vernast/logo-horizontal-black.webp";
const ORGANIZATION_IMAGE = "/vernast/lineup-dryers.webp";
const SERVICE_AREA = [
  "Antwerpen",
  "Vlaams-Brabant",
  "Oost-Vlaanderen",
  "West-Vlaanderen",
  "Limburg",
  "Brussels Hoofdstedelijk Gewest"
];
const REVIEWS = null;
const SAME_AS = [
  "https://www.vernast.be/",
  "https://vernast-vochtbestrijding.be/",
  "https://www.vernast-schilderwerken.be/",
  "https://www.linkedin.com/company/vernast",
  "https://www.facebook.com/people/Vernastbe/61559074829852/",
  "https://www.instagram.com/vernast.be/"
];
function absoluteUrl(path) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
function canonicalUrl(pathname) {
  const clean = pathname.split("?")[0].split("#")[0];
  const trimmed = clean !== "/" ? clean.replace(/\/$/, "") : "/";
  return `${SITE_URL}${trimmed}`;
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/PageMeta.tsx");
const PageMeta = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
  ogType = "website"
}) => {
  const location = useLocation();
  const canonical = canonicalUrl(path ?? location.pathname);
  const ogImage = absoluteUrl(image);
  const blocks = jsonLd ? Array.isArray(jsonLd) ? jsonLd : [jsonLd] : [];
  const taal = taalUitPad(location.pathname);
  const alt = noindex ? {} : alternatieven(location.pathname);
  const altLinks = Object.entries(alt);
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("html", { lang: HTML_LANG[taal] }),
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        name: "robots",
        content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      }
    ),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: SITE_NAME }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: OG_LOCALE[taal] }),
    altLinks.filter(([t]) => t !== taal).map(([t]) => /* @__PURE__ */ jsx("meta", { property: "og:locale:alternate", content: OG_LOCALE[t] }, `ogl-${t}`)),
    altLinks.length > 1 && altLinks.map(([t, p]) => /* @__PURE__ */ jsx("link", { rel: "alternate", hrefLang: HTML_LANG[t], href: canonicalUrl(p) }, `hl-${t}`)),
    altLinks.length > 1 && alt.nl && /* @__PURE__ */ jsx("link", { rel: "alternate", hrefLang: "x-default", href: canonicalUrl(alt.nl) }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
    image === DEFAULT_OG_IMAGE && /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: String(OG_IMAGE_WIDTH) }),
    image === DEFAULT_OG_IMAGE && /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
    blocks.map((block, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(block) }, i))
  ] });
};
export {
  CONTACT as C,
  HEADQUARTERS as H,
  MAPS_URL as M,
  ORGANIZATION_IMAGE as O,
  PageMeta as P,
  REVIEWS as R,
  SITE_NAME as S,
  SAME_AS as a,
  SITE_LANG as b,
  SITE_URL as c,
  SERVICE_AREA as d,
  absoluteUrl as e,
  ORGANIZATION_LOGO as f
};
