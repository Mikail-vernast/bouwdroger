import DienstVoorbeelden from "@/components/verhuur/DienstVoorbeelden";
import { procesBeelden } from "@/data/dienstbeelden";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { equipmentSummary, getPackageById, packageMetaTitle } from "@/data/packages";
import {
  CheckCircle2,
  ArrowLeft,
  Truck,
  Shield,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  Droplets,
  Wind,
  Flame,
  ArrowRight,
  Check,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import PageMeta from "@/components/PageMeta";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad, useTaal, useToonBedrag, type Copy } from "@/i18n/useTaal";
import {
  equipmentSummaryEn,
  equipmentSummaryFr,
  packageMetaTitleEn,
  packageMetaTitleFr,
  pakketInTaal,
} from "@/data/packages.fr";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { altVoorBeeld } from "@/lib/altTekst";
import { packageTotal, packageWeeks } from "@/lib/vastPakket";
import { configToQuery } from "@/lib/verhuur";

const equipmentImages: Record<string, string> = {
  "Small Bouwdroger": "/products/eco-boost-50.webp",
  "Large Bouwdroger": "/products/eco-performance-80.webp",
  "Axiaal Ventilator": "/products/turbo-axiaal-5300.webp",
  "Elektrische Kachel": "/products/elektrische-kachel-2500.webp",
};

const equipmentIcons: Record<string, typeof Droplets> = {
  bouwdroger: Droplets,
  ventilator: Wind,
  kachel: Flame,
};

const categoryImages: Record<string, string[]> = {
  "Chape drogen": ["/products/chape-drogen-1.webp", "/products/chape-drogen-2.webp", "/products/chape-drogen-3.webp", "/products/chape-drogen-4.webp", "/products/chape-drogen-5.webp"],
  "Pleister drogen": ["/products/pleister-1.webp", "/products/pleister-2.webp", "/products/pleister-3.webp", "/products/pleister-4.webp", "/products/pleister-5.webp"],
  "Chape & Pleister drogen": ["/products/pakket-1.webp", "/products/pakket-2.webp", "/products/pakket-3.webp", "/products/chape-pakket-1.webp", "/products/chape-pakket-2.webp"],
  "Chape & Verwarming": ["/products/chape-pakket-1.webp", "/products/chape-pakket-2.webp", "/products/chape-pakket-3.webp", "/products/chape-pakket-4.webp"],
  "Chape & Pleister & Verwarming": ["/products/pakket-4.webp", "/products/pakket-5.webp", "/products/pakket-6.webp", "/products/pakket-7.webp"],
  "Pleister & Verwarming": ["/products/pleister-10.webp", "/products/pleister-11.webp", "/products/pleister-12.webp"],
  "Waterschade": ["/products/pakket-1.webp", "/products/extra-1.webp", "/products/extra-2.webp"],
};

const defaultGallery = ["/products/pakket-1.webp", "/products/extra-6.webp", "/products/extra-7.webp", "/products/extra-8.webp"];

/*
  Boeken gebeurt in de boekingsflow (/verhuur/pakket), niet meer op deze pagina.
  Tot 24-11-2026 had ze een eigen formulier met een vrij gekozen huurduur, een
  duurkorting van 5/10/15 % en kachels die gratis meegingen. Een vast pakket
  loopt echter één termijn (uit de materiaaldikte), zonder staffelkorting:
  chape-100-6 werd zo € 161,80 in plaats van € 256,20. Deze pagina toont nu het
  pakket met zijn vaste termijn en prijs en stuurt door naar de flow die ook
  `api/checkout.ts` gebruikt.
*/

type Tekst = {
  nietGevonden: string;
  terugConfigurator: string;
  samenstelling: (titel: string, inhoud: string) => string;
  foto: (titel: string, nr: number) => string;
  levering: string;
  badges: [string, string, string];
  termijn: (w: number, d: number) => string;
  pakketprijs: string;
  kachelsOptioneel: string;
  volgendeStap: string;
  boekDirect: string;
  vertrouwen: [string, string, string, string];
  specKop: string;
  inbegrepen: (n: number) => string;
  hulp: string;
  specificaties: string;
  opnieuw: string;
  mobielInfo: (w: number, n: number) => string;
  boekNuKort: string;
  metaBeschrijving: (kort: string, inhoud: string, prijs: string) => string;
};

const COPY = {
  nl: {
    nietGevonden: "Pakket niet gevonden",
    terugConfigurator: "Terug naar configurator",
    samenstelling: (titel, inhoud) => `Samenstelling van het pakket ${titel}: ${inhoud}`,
    foto: (titel, nr) => `${titel}, foto ${nr}`,
    levering: "Levering",
    badges: ["Inclusief vochtmeting", "Bouwnorm proof", "Altijd inbegrepen"],
    termijn: (w, d) => `Vaste huurtermijn: ${w} ${w === 1 ? "week" : "weken"} (${d} dagen)`,
    pakketprijs: "Pakketprijs voor de volledige termijn",
    kachelsOptioneel: "Verwarmt u zelf niet? Kachels voegt u toe in de volgende stap.",
    volgendeStap: "In de volgende stap kiest u de leverdatum, de plaatsing en eventueel extra toestellen.",
    boekDirect: "Boek dit pakket",
    vertrouwen: ["Gratis levering & ophaling", "Vochtmeting inbegrepen", "Levering binnen 24u", "Heel België"],
    specKop: "Slim formaat met robuuste prestaties",
    inbegrepen: (n) =>
      `${n}× inbegrepen in uw pakket. Professionele kwaliteit, getest en onderhouden door onze technici.`,
    hulp: "Hulp Nodig? Bel Ons",
    specificaties: "Specificaties",
    opnieuw: "Opnieuw configureren",
    mobielInfo: (w, n) => `${w} weken • ${n} apparaten`,
    boekNuKort: "Boek nu",
    metaBeschrijving: (kort, inhoud, prijs) =>
      `${kort} droogpakket met ${inhoud}. ${prijs} per 2 weken, inclusief levering, installatie en ophaling.`,
  },
  fr: {
    nietGevonden: "Pack introuvable",
    terugConfigurator: "Retour au configurateur",
    samenstelling: (titel, inhoud) => `Composition du pack ${titel} : ${inhoud}`,
    foto: (titel, nr) => `${titel}, photo ${nr}`,
    levering: "Livraison",
    badges: ["Mesure d'humidité comprise", "Conforme aux normes de construction", "Toujours inclus"],
    termijn: (w, d) => `Durée de location fixe : ${w} ${w === 1 ? "semaine" : "semaines"} (${d} jours)`,
    pakketprijs: "Prix du pack pour toute la durée",
    kachelsOptioneel: "Vous ne chauffez pas vous-même ? Ajoutez des chauffages à l'étape suivante.",
    volgendeStap: "À l'étape suivante, vous choisissez la date de livraison, l'installation et d'éventuels appareils supplémentaires.",
    boekDirect: "Réserver ce pack",
    vertrouwen: ["Livraison et reprise gratuites", "Mesure d'humidité comprise", "Livraison sous 24 h", "Toute la Belgique"],
    specKop: "Format compact, performances robustes",
    inbegrepen: (n) =>
      `${n}× inclus dans votre pack. Qualité professionnelle, testée et entretenue par nos techniciens.`,
    hulp: "Besoin d'aide ? Appelez-nous",
    specificaties: "Spécifications",
    opnieuw: "Reconfigurer",
    mobielInfo: (w, n) => `${w} sem. • ${n} appareils`,
    boekNuKort: "Réserver",
    metaBeschrijving: (kort, inhoud, prijs) =>
      `Pack de séchage ${kort} avec ${inhoud}. ${prijs} par 2 semaines, livraison, installation et reprise comprises.`,
  },
  en: {
    nietGevonden: "Package not found",
    terugConfigurator: "Back to the configurator",
    samenstelling: (titel, inhoud) => `Contents of the ${titel} package: ${inhoud}`,
    foto: (titel, nr) => `${titel}, photo ${nr}`,
    levering: "Delivery",
    badges: ["Moisture reading included", "Meets building standards", "Always included"],
    termijn: (w, d) => `Fixed rental period: ${w} ${w === 1 ? "week" : "weeks"} (${d} days)`,
    pakketprijs: "Package price for the full period",
    kachelsOptioneel: "Not heating the site yourself? Add heaters in the next step.",
    volgendeStap: "In the next step you choose the delivery date, the placement and any extra equipment.",
    boekDirect: "Book this package",
    vertrouwen: ["Free delivery & collection", "Moisture reading included", "Delivery within 24h", "All of Belgium"],
    specKop: "Compact size, robust performance",
    inbegrepen: (n) =>
      `${n}× included in your package. Professional quality, tested and maintained by our technicians.`,
    hulp: "Need help? Call us",
    specificaties: "Specifications",
    opnieuw: "Reconfigure",
    mobielInfo: (w, n) => `${w} weeks • ${n} units`,
    boekNuKort: "Book now",
    metaBeschrijving: (kort, inhoud, prijs) =>
      `${kort} drying package with ${inhoud}. ${prijs} per 2 weeks, including delivery, installation and collection.`,
  },
} satisfies Copy<Tekst>;

const PackageDetailPage = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seoNietGevonden = useSeo("notFound");
  const taal = useTaal();
  const toon = useToonBedrag();
  /** Bedrag + btw-label, zoals de bezoeker het hoort te zien. */
  const bedrag = (excl: number) => `${toon(excl).tekst} ${toon(excl).label}`;
  const pkg = packageId ? getPackageById(packageId) : undefined;

  // Gallery
  const [activeImg, setActiveImg] = useState(0);


  if (!pkg) {
    return (
      <div className="min-h-screen bg-background">
        <PageMeta {...seoNietGevonden} />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t.nietGevonden}</h1>
          <Button onClick={() => navigate(lp("/levering"))} className="rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" /> {t.terugConfigurator}
          </Button>
        </div>
        <V3Footer />
      </div>
    );
  }

  // Beheerd in het Vernast-portaal; publiceerde nog niemand een galerij voor dit
  // pakket, dan de vaste lijst per werksoort van vroeger.
  const gallery = [...(pkg.images.length ? pkg.images : categoryImages[pkg.category] || defaultGallery).slice(0, 3), ...procesBeelden(taal).slice(0, 3).map(f => f.src)];
  // De pakketfoto uit het portaal is de banner met de toestellen en hun
  // aantallen; die beschrijven we vanuit de samenstelling. De rest kent
  // `altVoorBeeld` aan zijn bestandsnaam, met de pakkettitel als terugval.
  //
  // `tp` is hetzelfde pakket met zijn teksten in de taal van de pagina; `pkg`
  // blijft de bron voor opzoekingen, berekeningen en wat naar /api/order gaat.
  // `altVoorBeeld` kent alleen Nederlandse omschrijvingen, dus in een andere
  // taal valt elk beeld terug op de context.
  const tp = pakketInTaal(pkg, taal);
  const samenstelling = tp.equipment
    .filter((item) => !item.optional)
    .map((item) => `${item.count}× ${item.name}`)
    .join(", ");
  const galleryAlts = gallery.map((img, i) =>
    procesBeelden(taal).find(f => f.src === img)?.alt ?? (i === 0
      ? t.samenstelling(tp.title, samenstelling || tp.description)
      : taal === "nl"
        ? altVoorBeeld(img, t.foto(tp.title, i + 1))
        : t.foto(tp.title, i + 1)),
  );
  const pad = lp(`/levering/pakket/${pkg.id}`);

  // Een vast pakket loopt één termijn en kost dagprijs × die dagen, zonder
  // staffelkorting — precies wat de boekingsflow en api/checkout.ts rekenen.
  const weeks = packageWeeks(pkg);
  const days = weeks * 7;
  const totalPrice = packageTotal(pkg);
  const included = pkg.equipment.filter((item) => !item.optional);
  const hasOptionalHeaters = pkg.equipment.some((item) => item.optional);
  const boekPad = `${lp("/verhuur/pakket")}?${configToQuery({
    size: String(pkg.sqm),
    wat: pkg.workType,
    pd: pkg.workType === "pleister" && pkg.thicknessCm !== null ? String(pkg.thicknessCm) : "2",
    cd: pkg.workType === "chape" && pkg.thicknessCm !== null ? String(pkg.thicknessCm) : "6",
    heat: false,
    weeks,
  })}`;

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        /*
         * De titel moet de variant benoemen, niet alleen de oppervlakte: drie
         * pakketten voor dezelfde woning verschillen enkel in laagdikte, en met
         * `shortTitle` kregen ze alle drie dezelfde titel — drie pagina's die
         * op precies dezelfde zoekopdracht mikken.
         */
        title={`${
          taal === "nl" ? packageMetaTitle(pkg) : taal === "en" ? packageMetaTitleEn(tp) : packageMetaTitleFr(tp)
        } | Vernast`}
        description={t.metaBeschrijving(
          tp.shortTitle,
          taal === "nl" ? equipmentSummary(pkg) : taal === "en" ? equipmentSummaryEn(tp) : equipmentSummaryFr(tp),
          bedrag(pkg.pricePerTwoWeeks),
        )}
        path={pad}
        ogType="product"
        /*
         * Uit de index gehouden. Deze pagina bestaat 46 keer, telkens met
         * dezelfde tekst en een andere oppervlakte — gemeten 96 tot 97 procent
         * woordoverlap. Zulke reeksen vallen onder wat Google "scaled content
         * abuse" noemt, en ze zouden 64 procent van het indexeerbare oppervlak
         * uitmaken. Ze blijven volledig werken als eindpunt van de calculator;
         * `follow` zorgt dat de links erop hun waarde blijven doorgeven. De
         * zoekwaarde hoort op /levering en /prijzen, waar het verhaal één keer
         * goed verteld staat.
         */
        noindex
        jsonLd={[
          productSchema({
            name: tp.title,
            description: tp.description,
            image: gallery[0],
            path: pad,
            pricePerDay: pkg.pricePerDay,
            category: tp.category,
          }),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.levering, path: lp("/levering") },
            { name: tp.shortTitle, path: pad },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to={lp("/")} className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to={lp("/levering")} className="hover:text-foreground transition-colors">{t.levering}</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium truncate">{tp.shortTitle}</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION: Gallery + Price/Booking Right */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* LEFT: Image Gallery */}
              <div>
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden bg-muted/30 aspect-[3/2] mb-3">
                  <img
                    src={gallery[activeImg]}
                    alt={galleryAlts[activeImg]}
                    className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  {/* USP badges overlay */}
                  <div className="absolute bottom-4 left-4 space-y-2">
                    {[
                      { icon: CheckCircle2, text: t.badges[0] },
                      { icon: Shield, text: t.badges[1] },
                      { icon: Check, text: t.badges[2] },
                    ].map((b) => (
                      <div key={b.text} className="flex items-center gap-2 bg-accent/90 text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-semibold backdrop-blur-sm">
                        <b.icon className="h-4 w-4" />
                        <span>{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Thumbnails */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {gallery.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActiveImg(i)}
                      className={cn(
                        "rounded-lg overflow-hidden aspect-video border-2 transition-all",
                        i === activeImg ? "border-primary shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                      <img src={img} alt={galleryAlts[i]} className="w-full h-full object-contain" loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT: Title, Date, Equipment, Price */}
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2 leading-tight">
                  {tp.title}
                </h1>
                <p className="text-muted-foreground mb-6">{tp.description}</p>

                {/* Equipment list with images: what the package price includes */}
                <div className="border border-border rounded-xl divide-y divide-border mb-3">
                  {included.map((item) => {
                    const i = pkg.equipment.indexOf(item);
                    const img = equipmentImages[item.name];
                    return (
                      <div key={i} className="flex items-center gap-3 p-3">
                        {img ? (
                          <img src={img} alt={tp.equipment[i].name} className="w-10 h-10 object-contain rounded" loading="lazy" decoding="async" />
                        ) : (
                          <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                            {(() => { const Icon = equipmentIcons[item.type] || Droplets; return <Icon className="h-5 w-5 text-primary" />; })()}
                          </div>
                        )}
                        <div className="flex-1">
                          <span className="text-sm font-medium">{item.count}× {tp.equipment[i].name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {hasOptionalHeaters && (
                  <p className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                    <Flame className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    {t.kachelsOptioneel}
                  </p>
                )}

                {/* Fixed rental period */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>{t.termijn(weeks, days)}</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-foreground">{toon(totalPrice).tekst}</span>
                    <span className="text-muted-foreground text-sm">{toon(totalPrice).label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.pakketprijs}</p>
                </div>

                {/* CTA: booking happens in the booking flow */}
                <Button asChild size="lg" className="w-full rounded-xl font-bold text-base gap-2">
                  <Link to={boekPad}>
                    {t.boekDirect} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-2">{t.volgendeStap}</p>

                {/* Trust row */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { icon: Truck, text: t.vertrouwen[0] },
                    { icon: Shield, text: t.vertrouwen[1] },
                    { icon: Clock, text: t.vertrouwen[2] },
                    { icon: MapPin, text: t.vertrouwen[3] },
                  ].map((u) => (
                    <div key={u.text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <u.icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>{u.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Specs Tabs */}
        <section className="py-10 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue={pkg.equipment[0]?.name}>
                <TabsList className="w-full flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
                  {pkg.equipment.map((item, i) => (
                    <TabsTrigger
                      key={item.name}
                      value={item.name}
                      className="rounded-full border border-border data-[state=active]:bg-accent data-[state=active]:text-primary-foreground data-[state=active]:border-accent px-5 py-2.5 text-sm font-semibold"
                    >
                      {tp.equipment[i].name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {pkg.equipment.map((item, i) => {
                  const specs = tp.equipment[i].specs;
                  return (
                    <TabsContent key={item.name} value={item.name}>
                      <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left: description */}
                        <div>
                          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                            {t.specKop}
                          </h2>
                          <p className="text-muted-foreground mb-6">
                            {item.optional ? t.kachelsOptioneel : t.inbegrepen(item.count)}
                          </p>
                          <div className="flex flex-col gap-3">
                            <Button asChild variant="default" className="rounded-full w-fit">
                              <Link to={boekPad}>{t.boekDirect}</Link>
                            </Button>
                            <Button variant="outline" className="rounded-full w-fit" onClick={() => navigate(lp("/contact"))}>
                              <Phone className="h-4 w-4 mr-2" /> {t.hulp}
                            </Button>
                          </div>
                        </div>
                        {/* Right: specs tables */}
                        <div className="space-y-6">
                          {Object.entries(specs).length > 0 && (
                            <div>
                              <h3 className="font-bold text-foreground mb-3">{t.specificaties}</h3>
                              <div className="border border-border rounded-xl overflow-hidden">
                                {Object.entries(specs).map(([key, val], idx) => (
                                  <div key={key} className={cn("flex justify-between px-4 py-3 text-sm", idx % 2 === 0 ? "bg-background" : "bg-muted/30")}>
                                    <span className="text-muted-foreground">{key}</span>
                                    <span className="font-semibold text-foreground">{val}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-10 text-center">
          <Button variant="ghost" onClick={() => navigate(lp("/levering"))} className="gap-2 text-sm">
            <ArrowLeft className="h-4 w-4" /> {t.opnieuw}
          </Button>
        </div>

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-3 flex items-center justify-between lg:hidden z-50">
          <div>
            <div className="text-lg font-black text-foreground">{toon(totalPrice).tekst}</div>
            <div className="text-xs text-muted-foreground">{t.mobielInfo(weeks, included.reduce((s, e) => s + e.count, 0))}</div>
          </div>
          <Button asChild size="sm" className="rounded-xl font-bold gap-1">
            <Link to={boekPad}>
              {t.boekNuKort} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      <DienstVoorbeelden />
      </main>
      <V3Footer />
    </div>
  );
};

export default PackageDetailPage;
