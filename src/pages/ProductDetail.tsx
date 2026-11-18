import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Phone } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad, useTaal, useToonBedrag, type Copy } from "@/i18n/useTaal";
import { productInTaal } from "@/data/products.fr";
import type { Product } from "@/data/products";

type Tekst = {
  nietGevonden: string;
  terugOverzicht: string;
  categorie: Record<Product["category"], string>;
  /** Hoe de categorie in het kruimelpad staat. */
  kruimel: Record<Product["category"], string>;
  metaTitel: (p: Product) => string;
  metaBeschrijving: (p: Product, prijs: string) => string;
  machines: string;
  capaciteit: (p: Product) => string;
  perDag: (label: string) => string;
  korting: string;
  kenmerken: string;
  specificaties: string;
  huur: string;
  calculator: string;
  advies: string;
  belOns: string;
  voorAdvies: string;
  terug: string;
};

const COPY = {
  nl: {
    nietGevonden: "Product niet gevonden",
    terugOverzicht: "Terug naar overzicht",
    categorie: { bouwdrogers: "Bouwdroger", ventilatoren: "Ventilator", verwarming: "Verwarming" },
    kruimel: { bouwdrogers: "bouwdrogers", ventilatoren: "ventilatoren", verwarming: "verwarming" },
    metaTitel: (p) => `${p.name} huren, ${p.capacity} | Vernast`,
    metaBeschrijving: (p, prijs) =>
      `${p.name} huren aan ${prijs} per dag. ${p.suitableFor} Levering, installatie en ophaling inbegrepen, binnen 24 uur in heel Vlaanderen.`,
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
    terug: "Terug",
  },
  fr: {
    nietGevonden: "Produit introuvable",
    terugOverzicht: "Retour à l'aperçu",
    categorie: { bouwdrogers: "Déshumidificateur de chantier", ventilatoren: "Ventilateur", verwarming: "Chauffage" },
    kruimel: { bouwdrogers: "déshumidificateurs", ventilatoren: "ventilateurs", verwarming: "chauffage" },
    metaTitel: (p) => `Louer le ${p.name}, ${p.capacity} | Vernast`,
    metaBeschrijving: (p, prijs) =>
      `Louez le ${p.name} à ${prijs} par jour. ${p.suitableFor}. Livraison, installation et reprise comprises, sous 24 heures dans toute la Flandre.`,
    machines: "Machines",
    capaciteit: (p) => `Capacité\u00a0: ${p.capacity} · Convient pour\u00a0: ${p.suitableFor.charAt(0).toLowerCase()}${p.suitableFor.slice(1)}`,
    perDag: (label) => `/jour ${label}`,
    korting: "Remise pour les locations plus longues · Livraison gratuite à partir de 2 semaines",
    kenmerken: "Caractéristiques",
    specificaties: "Spécifications",
    huur: "Louer ce produit",
    calculator: "Utiliser le calculateur",
    advies: "Besoin de conseils ?",
    belOns: "Appelez-nous au",
    voorAdvies: "pour un conseil gratuit.",
    terug: "Retour",
  },
} satisfies Copy<Tekst>;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seoNietGevonden = useSeo("notFound");
  const taal = useTaal();
  const toon = useToonBedrag();
  const gevonden = products.find((p) => p.id === id);
  const product = gevonden ? productInTaal(gevonden, taal) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <PageMeta {...seoNietGevonden} />
        <TopBar />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">{t.nietGevonden}</h1>
          <Button asChild>
            <Link to={lp("/#producten")}>{t.terugOverzicht}</Link>
          </Button>
        </div>
        <V3Footer />
      </div>
    );
  }

  const allImages = [product.image, ...(product.gallery || [])];
  const allAlts = allImages.map((_, i) => (i === 0 ? product.imageAlt : product.galleryAlt?.[i - 1] ?? product.imageAlt));

  const categoryLabels = t.categorie;
  const pad = lp(`/product/${product.id}`);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title={t.metaTitel(product)}
        description={t.metaBeschrijving(product, `${toon(product.pricePerDay).tekst} ${toon(product.pricePerDay).label}`)}
        path={pad}
        image={product.image}
        ogType="product"
        /*
         * Uit de index gehouden ten gunste van /verhuur/toestel/*.
         *
         * Het zijn dezelfde toestellen onder twee namen — de ECO-reeks hier,
         * de fabrikantcodes daar; /vernast/eco-boost.webp hoort zowel bij
         * Boost als bij TTK 170 S. Deze pagina's halen zo'n 130 woorden,
         * de toestelpagina's ruim 1.100. Erger: de opgegeven capaciteiten
         * lopen tussen beide reeksen uiteen, en twee tegenstrijdige specs voor
         * één machine is precies wat een AI-antwoord onbetrouwbaar maakt.
         *
         * Geen canonical, want daarvoor moeten de pagina's gelijkwaardig zijn
         * en dat zijn ze pas als de cijfers kloppen. Zodra de ECO-reeks en de
         * toestelpagina's samengevoegd zijn, kan dit weg.
         */
        noindex
        jsonLd={[
          productSchema({
            name: product.name,
            description: `${product.capacity}. ${product.suitableFor}`,
            image: product.image,
            path: pad,
            pricePerDay: product.pricePerDay,
            category: categoryLabels[product.category],
            specs: Object.entries(product.specs ?? {}),
          }),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.machines, path: lp("/machines") },
            { name: product.name, path: pad },
          ]),
        ]}
      />
      <TopBar />
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to={lp("/")} className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to={lp("/#producten")} className="hover:text-primary transition-colors capitalize">
            {t.kruimel[product.category]}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div
            className="space-y-4"
          >
            <div className="bg-secondary rounded-2xl p-8 flex items-center justify-center aspect-square">
              <img
                src={allImages[activeImage]}
                alt={allAlts[activeImage]}
                className="max-h-full max-w-full object-contain" loading="lazy" decoding="async" />
            </div>
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === i ? "border-primary" : "border-border hover:border-primary/30"
                    }`}
                  >
                    <img src={img} alt={allAlts[i]} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div
            className="space-y-6"
          >
            <div>
              <Badge variant="secondary" className="mb-3">
                {categoryLabels[product.category]}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.capaciteit(product)}
              </p>
            </div>

            <div className="border-y border-border py-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-primary">
                  {toon(product.pricePerDay).tekst}
                </span>
                <span className="text-muted-foreground">{t.perDag(toon(product.pricePerDay).label)}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {t.korting}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-foreground">{t.kenmerken}</h3>
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>

            {/* Specs table */}
            {product.specs && (
              <div className="space-y-3">
                <h3 className="font-bold text-foreground">{t.specificaties}</h3>
                <div className="bg-secondary rounded-xl overflow-hidden">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex justify-between px-4 py-3 text-sm ${
                        i % 2 === 0 ? "" : "bg-background/50"
                      }`}
                    >
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-semibold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="font-bold text-base"
                onClick={() => navigate(lp("/booking"), { state: { productId: product.id } })}
              >
                {t.huur}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-bold text-base"
                onClick={() => navigate(lp("/#configurator"))}
              >
                {t.calculator}
              </Button>
            </div>

            <div className="bg-secondary rounded-xl p-5 flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">{t.advies}</p>
                <p className="text-sm text-muted-foreground">
                  {t.belOns} <a href="tel:+3236899065" className="text-primary font-semibold hover:underline">03 689 90 65</a> {t.voorAdvies}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t.terug}
          </Button>
        </div>
      </main>
      <V3Footer />
    </div>
  );
};

export default ProductDetail;
