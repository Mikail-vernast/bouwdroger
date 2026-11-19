import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "./products-BvI4fr_a.js";
import { T as TopBar } from "./TopBar-B0jE5GHc.js";
import { N as Navbar, B as Button } from "./Navbar-DWDUC3vw.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { B as Badge } from "./badge-RPp4hm6a.js";
import { Check, Phone, ArrowLeft } from "lucide-react";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { p as productSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { u as useCopy, a as useLokaalPad, b as useTaal, c as useToonBedrag } from "../main.mjs";
import { p as productInTaal } from "./products.fr-BaEl5sMH.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./FontPreload-C6Rzq6ld.js";
import "vite-react-ssg";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./verhuur.fr-CrIPL5Eo.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/ProductDetail.tsx");
const COPY = {
  nl: {
    nietGevonden: "Product niet gevonden",
    terugOverzicht: "Terug naar overzicht",
    categorie: { bouwdrogers: "Bouwdroger", ventilatoren: "Ventilator", verwarming: "Verwarming" },
    kruimel: { bouwdrogers: "bouwdrogers", ventilatoren: "ventilatoren", verwarming: "verwarming" },
    metaTitel: (p) => `${p.name} huren, ${p.capacity} | Vernast`,
    metaBeschrijving: (p, prijs) => `${p.name} huren aan ${prijs} per dag. ${p.suitableFor} Levering, installatie en ophaling inbegrepen, binnen 24 uur in heel Vlaanderen.`,
    machines: "Machines",
    capaciteit: (p) => `Capaciteit: ${p.capacity} · Geschikt voor ${p.suitableFor}`,
    perDag: (label) => `/dag ${label}`,
    korting: "Korting bij langere huurperiodes · Gratis levering vanaf 2 weken",
    kenmerken: "Kenmerken",
    specificaties: "Specificaties",
    huur: "Huur dit product",
    calculator: "Gebruik de Calculator",
    advies: "Advies nodig?",
    belOns: "Bel ons op",
    voorAdvies: "voor gratis advies.",
    terug: "Terug"
  },
  fr: {
    nietGevonden: "Produit introuvable",
    terugOverzicht: "Retour à l'aperçu",
    categorie: { bouwdrogers: "Déshumidificateur de chantier", ventilatoren: "Ventilateur", verwarming: "Chauffage" },
    kruimel: { bouwdrogers: "déshumidificateurs", ventilatoren: "ventilateurs", verwarming: "chauffage" },
    metaTitel: (p) => `Louer le ${p.name}, ${p.capacity} | Vernast`,
    metaBeschrijving: (p, prijs) => `Louez le ${p.name} à ${prijs} par jour. ${p.suitableFor}. Livraison, installation et reprise comprises, sous 24 heures dans toute la Flandre.`,
    machines: "Machines",
    capaciteit: (p) => `Capacité : ${p.capacity} · Convient pour : ${p.suitableFor.charAt(0).toLowerCase()}${p.suitableFor.slice(1)}`,
    perDag: (label) => `/jour ${label}`,
    korting: "Remise pour les locations plus longues · Livraison gratuite à partir de 2 semaines",
    kenmerken: "Caractéristiques",
    specificaties: "Spécifications",
    huur: "Louer ce produit",
    calculator: "Utiliser le calculateur",
    advies: "Besoin de conseils ?",
    belOns: "Appelez-nous au",
    voorAdvies: "pour un conseil gratuit.",
    terug: "Retour"
  },
  en: {
    nietGevonden: "Product not found",
    terugOverzicht: "Back to overview",
    categorie: { bouwdrogers: "Construction dehumidifier", ventilatoren: "Fan", verwarming: "Heating" },
    kruimel: { bouwdrogers: "construction dehumidifiers", ventilatoren: "fans", verwarming: "heating" },
    metaTitel: (p) => `${p.name} hire, ${p.capacity} | Vernast`,
    metaBeschrijving: (p, prijs) => `Hire the ${p.name} for ${prijs} per day. ${p.suitableFor}. Delivery, installation and collection included, within 24 hours throughout Flanders.`,
    machines: "Machines",
    capaciteit: (p) => `Capacity: ${p.capacity} · Suitable for: ${p.suitableFor.charAt(0).toLowerCase()}${p.suitableFor.slice(1)}`,
    perDag: (label) => `/day ${label}`,
    korting: "Discount for longer rental periods · Free delivery from 2 weeks",
    kenmerken: "Features",
    specificaties: "Specifications",
    huur: "Hire this product",
    calculator: "Use the calculator",
    advies: "Need advice?",
    belOns: "Call us on",
    voorAdvies: "for free advice.",
    terug: "Back"
  }
};
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seoNietGevonden = useSeo("notFound");
  const taal = useTaal();
  const toon = useToonBedrag();
  const gevonden = products.find((p) => p.id === id);
  const product = gevonden ? productInTaal(gevonden, taal) : void 0;
  const [activeImage, setActiveImage] = useState(0);
  if (!product) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx(PageMeta, { ...seoNietGevonden }),
      /* @__PURE__ */ jsx(TopBar, {}),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-20 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4", children: t.nietGevonden }),
        /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: lp("/#producten"), children: t.terugOverzicht }) })
      ] }),
      /* @__PURE__ */ jsx(V3Footer, {})
    ] });
  }
  const allImages = [product.image, ...product.gallery || []];
  const allAlts = allImages.map((_, i) => i === 0 ? product.imageAlt : product.galleryAlt?.[i - 1] ?? product.imageAlt);
  const categoryLabels = t.categorie;
  const pad = lp(`/product/${product.id}`);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: t.metaTitel(product),
        description: t.metaBeschrijving(product, `${toon(product.pricePerDay).tekst} ${toon(product.pricePerDay).label}`),
        path: pad,
        image: product.image,
        ogType: "product",
        noindex: true,
        jsonLd: [
          productSchema({
            name: product.name,
            description: `${product.capacity}. ${product.suitableFor}`,
            image: product.image,
            path: pad,
            pricePerDay: product.pricePerDay,
            category: categoryLabels[product.category],
            specs: Object.entries(product.specs ?? {})
          }),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.machines, path: lp("/machines") },
            { name: product.name, path: pad }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(TopBar, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-8", children: [
        /* @__PURE__ */ jsx(Link, { to: lp("/"), className: "hover:text-primary transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: lp("/#producten"), className: "hover:text-primary transition-colors capitalize", children: t.kruimel[product.category] }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: product.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "bg-secondary rounded-2xl p-8 flex items-center justify-center aspect-square", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: allImages[activeImage],
                  alt: allAlts[activeImage],
                  className: "max-h-full max-w-full object-contain",
                  loading: "lazy",
                  decoding: "async"
                }
              ) }),
              allImages.length > 1 && /* @__PURE__ */ jsx("div", { className: "flex gap-3 overflow-x-auto pb-2", children: allImages.map((img, i) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setActiveImage(i),
                  className: `flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === i ? "border-primary" : "border-border hover:border-primary/30"}`,
                  children: /* @__PURE__ */ jsx("img", { src: img, alt: allAlts[i], className: "w-full h-full object-cover", loading: "lazy", decoding: "async" })
                },
                i
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "space-y-6",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "mb-3", children: categoryLabels[product.category] }),
                /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-black text-foreground mb-2", children: product.name }),
                /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: t.capaciteit(product) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-y border-border py-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-primary", children: toon(product.pricePerDay).tekst }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: t.perDag(toon(product.pricePerDay).label) })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: t.korting })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground", children: t.kenmerken }),
                product.features.map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-foreground", children: f })
                ] }, f))
              ] }),
              product.specs && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground", children: t.specificaties }),
                /* @__PURE__ */ jsx("div", { className: "bg-secondary rounded-xl overflow-hidden", children: Object.entries(product.specs).map(([key, value], i) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `flex justify-between px-4 py-3 text-sm ${i % 2 === 0 ? "" : "bg-background/50"}`,
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: key }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: value })
                    ]
                  },
                  key
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "lg",
                    className: "font-bold text-base",
                    onClick: () => navigate(lp("/booking"), { state: { productId: product.id } }),
                    children: t.huur
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "font-bold text-base",
                    onClick: () => navigate(lp("/#configurator")),
                    children: t.calculator
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-secondary rounded-xl p-5 flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-primary flex-shrink-0" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground text-sm", children: t.advies }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    t.belOns,
                    " ",
                    /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", className: "text-primary font-semibold hover:underline", children: "03 689 90 65" }),
                    " ",
                    t.voorAdvies
                  ] })
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", onClick: () => navigate(-1), className: "gap-2", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        t.terug
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  ProductDetail as default
};
