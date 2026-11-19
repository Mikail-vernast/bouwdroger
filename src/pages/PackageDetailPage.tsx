import DienstVoorbeelden from "@/components/verhuur/DienstVoorbeelden";
import { procesBeelden } from "@/data/dienstbeelden";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
  Building2,
  User,
  Plus,
  Minus,
  Check,
  CalendarIcon,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { format, addDays, differenceInDays } from "date-fns";
import { enGB, fr, nl } from "date-fns/locale";
import { cn } from "@/lib/utils";
import PageMeta from "@/components/PageMeta";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad, useTaal, useToonBedrag, type Copy } from "@/i18n/useTaal";
import { NUMBER_LOCALE } from "@/i18n/taal";
import {
  equipmentSummaryEn,
  equipmentSummaryFr,
  packageMetaTitleEn,
  packageMetaTitleFr,
  pakketInTaal,
} from "@/data/packages.fr";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { maskEmail, maskPhone } from "@/lib/inputMask";
import { altVoorBeeld } from "@/lib/altTekst";

type CustomerType = "particulier" | "zakelijk";

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
  De dagprijzen van een extra toestel bovenop het pakket. Stonden twee keer in
  de pagina: in de berekening én als "+€12/dag" in de tekst. Nu één waarde die
  beide lezen. Wat de server aanrekent, rekent `orderIntake.ts` opnieuw uit.
*/
const EXTRA_DROGER_DAG = 12;
const EXTRA_VENTILATOR_DAG = 5;

type Tekst = {
  verplicht: string;
  kiesDatums: string;
  fout: string;
  probeerOpnieuw: string;
  nietGevonden: string;
  terugConfigurator: string;
  samenstelling: (titel: string, inhoud: string) => string;
  foto: (titel: string, nr: number) => string;
  levering: string;
  badges: [string, string, string];
  uitgifte: string;
  retour: string;
  kiesDatum: string;
  weken: (w: number, d: number) => string;
  duurkorting: (pct: number) => string;
  bespaart: (bedrag: string) => string;
  extraVraag: string;
  extraDroger: string;
  extraVentilator: string;
  perDag: string;
  boekDirect: string;
  vertrouwen: [string, string, string, string];
  specKop: string;
  inbegrepen: (n: number) => string;
  watInbegrepen: string;
  hulp: string;
  specificaties: string;
  boekNu: string;
  bevestigen: string;
  klantType: { particulier: string; zakelijk: string };
  bedrijfsnaam: string;
  btwNummer: string;
  voornaam: string;
  achternaam: string;
  email: string;
  telefoon: string;
  straat: string;
  postcode: string;
  gemeente: string;
  opmerkingen: string;
  opmerkingenPh: string;
  bezig: string;
  boekKnop: (bedrag: string) => string;
  geenBetaling: string;
  prijsoverzicht: string;
  pakketDagen: (d: number) => string;
  extraApparatuur: string;
  duurkortingRegel: (pct: number) => string;
  totaal: string;
  zijbalk: [string, string, string, string];
  opnieuw: string;
  mobielInfo: (w: number, n: number) => string;
  boekNuKort: string;
  metaBeschrijving: (kort: string, inhoud: string, prijs: string) => string;
};

const COPY = {
  nl: {
    verplicht: "Vul alle verplichte velden in",
    kiesDatums: "Selecteer een start- en einddatum",
    fout: "Er ging iets mis",
    probeerOpnieuw: "Probeer het opnieuw.",
    nietGevonden: "Pakket niet gevonden",
    terugConfigurator: "Terug naar configurator",
    samenstelling: (titel, inhoud) => `Samenstelling van het pakket ${titel}: ${inhoud}`,
    foto: (titel, nr) => `${titel}, foto ${nr}`,
    levering: "Levering",
    badges: ["Inclusief vochtmeting", "Bouwnorm proof", "Altijd inbegrepen"],
    uitgifte: "Uitgifte datum",
    retour: "Retour datum",
    kiesDatum: "Kies datum",
    weken: (w, d) => `${w} ${w === 1 ? "week" : "weken"} (${d} dagen)`,
    duurkorting: (pct) => `-${pct}% duurkorting`,
    bespaart: (bedrag) => `U bespaart ${bedrag} dankzij duurkorting`,
    extraVraag: "Extra apparatuur toevoegen?",
    extraDroger: "Extra bouwdroger",
    extraVentilator: "Extra ventilator",
    perDag: "/dag",
    boekDirect: "Direct Boeken",
    vertrouwen: ["Gratis levering & ophaling", "Vochtmeting inbegrepen", "Levering binnen 24u", "Heel België"],
    specKop: "Slim formaat met robuuste prestaties",
    inbegrepen: (n) =>
      `${n}× inbegrepen in uw pakket. Professionele kwaliteit, getest en onderhouden door onze technici.`,
    watInbegrepen: "Wat Is Inbegrepen?",
    hulp: "Hulp Nodig? Bel Ons",
    specificaties: "Specificaties",
    boekNu: "Boek nu",
    bevestigen: "Wij bevestigen uw boeking binnen 24 uur.",
    klantType: { particulier: "particulier", zakelijk: "zakelijk" },
    bedrijfsnaam: "Bedrijfsnaam *",
    btwNummer: "BTW-nummer",
    voornaam: "Voornaam *",
    achternaam: "Achternaam *",
    email: "E-mail *",
    telefoon: "Telefoon *",
    straat: "Straat + huisnummer *",
    postcode: "Postcode",
    gemeente: "Gemeente",
    opmerkingen: "Opmerkingen (optioneel)",
    opmerkingenPh: "Bijv. toegangsinformatie, specifieke wensen...",
    bezig: "Bezig met verzenden...",
    boekKnop: (bedrag) => `Boek Nu, ${bedrag}`,
    geenBetaling: "Geen betaling vereist. Wij bevestigen binnen 24 uur.",
    prijsoverzicht: "Prijsoverzicht",
    pakketDagen: (d) => `Pakket (${d}d)`,
    extraApparatuur: "Extra apparatuur",
    duurkortingRegel: (pct) => `Duurkorting (-${pct}%)`,
    totaal: "Totaal",
    zijbalk: ["Gratis levering & ophaling", "500+ projecten afgerond", "Vochtmeting inbegrepen", "Binnen 24u antwoord"],
    opnieuw: "Opnieuw configureren",
    mobielInfo: (w, n) => `${w}w • ${n} apparaten`,
    boekNuKort: "Boek nu",
    metaBeschrijving: (kort, inhoud, prijs) =>
      `${kort} droogpakket met ${inhoud}. ${prijs} per 2 weken, inclusief levering, installatie en ophaling.`,
  },
  fr: {
    verplicht: "Veuillez remplir tous les champs obligatoires",
    kiesDatums: "Sélectionnez une date de début et de fin",
    fout: "Une erreur s'est produite",
    probeerOpnieuw: "Veuillez réessayer.",
    nietGevonden: "Pack introuvable",
    terugConfigurator: "Retour au configurateur",
    samenstelling: (titel, inhoud) => `Composition du pack ${titel} : ${inhoud}`,
    foto: (titel, nr) => `${titel}, photo ${nr}`,
    levering: "Livraison",
    badges: ["Mesure d'humidité comprise", "Conforme aux normes de construction", "Toujours inclus"],
    uitgifte: "Date de départ",
    retour: "Date de retour",
    kiesDatum: "Choisir une date",
    weken: (w, d) => `${w} ${w === 1 ? "semaine" : "semaines"} (${d} jours)`,
    duurkorting: (pct) => `-${pct} % de remise de durée`,
    bespaart: (bedrag) => `Vous économisez ${bedrag} grâce à la remise de durée`,
    extraVraag: "Ajouter des appareils ?",
    extraDroger: "Déshumidificateur de chantier supplémentaire",
    extraVentilator: "Ventilateur supplémentaire",
    perDag: "/jour",
    boekDirect: "Réserver directement",
    vertrouwen: ["Livraison et reprise gratuites", "Mesure d'humidité comprise", "Livraison sous 24 h", "Toute la Belgique"],
    specKop: "Format compact, performances robustes",
    inbegrepen: (n) =>
      `${n}× inclus dans votre pack. Qualité professionnelle, testée et entretenue par nos techniciens.`,
    watInbegrepen: "Qu'est-ce qui est inclus ?",
    hulp: "Besoin d'aide ? Appelez-nous",
    specificaties: "Spécifications",
    boekNu: "Réservez maintenant",
    bevestigen: "Nous confirmons votre réservation dans les 24 heures.",
    klantType: { particulier: "Particulier", zakelijk: "Professionnel" },
    bedrijfsnaam: "Nom de l'entreprise *",
    btwNummer: "Numéro de TVA",
    voornaam: "Prénom *",
    achternaam: "Nom *",
    email: "E-mail *",
    telefoon: "Téléphone *",
    straat: "Rue + numéro *",
    postcode: "Code postal",
    gemeente: "Commune",
    opmerkingen: "Remarques (facultatif)",
    opmerkingenPh: "P. ex. informations d'accès, souhaits particuliers...",
    bezig: "Envoi en cours...",
    boekKnop: (bedrag) => `Réserver, ${bedrag}`,
    geenBetaling: "Aucun paiement requis. Nous confirmons dans les 24 heures.",
    prijsoverzicht: "Aperçu du prix",
    pakketDagen: (d) => `Pack (${d} j)`,
    extraApparatuur: "Appareils supplémentaires",
    duurkortingRegel: (pct) => `Remise de durée (-${pct} %)`,
    totaal: "Total",
    zijbalk: ["Livraison et reprise gratuites", "500+ projets réalisés", "Mesure d'humidité comprise", "Réponse sous 24 h"],
    opnieuw: "Reconfigurer",
    mobielInfo: (w, n) => `${w} sem. • ${n} appareils`,
    boekNuKort: "Réserver",
    metaBeschrijving: (kort, inhoud, prijs) =>
      `Pack de séchage ${kort} avec ${inhoud}. ${prijs} par 2 semaines, livraison, installation et reprise comprises.`,
  },
  en: {
    verplicht: "Please fill in all required fields",
    kiesDatums: "Select a start and end date",
    fout: "Something went wrong",
    probeerOpnieuw: "Please try again.",
    nietGevonden: "Package not found",
    terugConfigurator: "Back to the configurator",
    samenstelling: (titel, inhoud) => `Contents of the ${titel} package: ${inhoud}`,
    foto: (titel, nr) => `${titel}, photo ${nr}`,
    levering: "Delivery",
    badges: ["Moisture reading included", "Meets building standards", "Always included"],
    uitgifte: "Start date",
    retour: "Return date",
    kiesDatum: "Choose a date",
    weken: (w, d) => `${w} ${w === 1 ? "week" : "weeks"} (${d} days)`,
    duurkorting: (pct) => `-${pct}% duration discount`,
    bespaart: (bedrag) => `You save ${bedrag} with the duration discount`,
    extraVraag: "Add extra equipment?",
    extraDroger: "Extra construction dehumidifier",
    extraVentilator: "Extra fan",
    perDag: "/day",
    boekDirect: "Book now",
    vertrouwen: ["Free delivery & collection", "Moisture reading included", "Delivery within 24h", "All of Belgium"],
    specKop: "Compact size, robust performance",
    inbegrepen: (n) =>
      `${n}× included in your package. Professional quality, tested and maintained by our technicians.`,
    watInbegrepen: "What's included?",
    hulp: "Need help? Call us",
    specificaties: "Specifications",
    boekNu: "Book now",
    bevestigen: "We will confirm your booking within 24 hours.",
    klantType: { particulier: "Private", zakelijk: "Business" },
    bedrijfsnaam: "Company name *",
    btwNummer: "VAT number",
    voornaam: "First name *",
    achternaam: "Last name *",
    email: "Email *",
    telefoon: "Phone *",
    straat: "Street + house number *",
    postcode: "Postcode",
    gemeente: "Town",
    opmerkingen: "Comments (optional)",
    opmerkingenPh: "E.g. access information, specific requests...",
    bezig: "Sending...",
    boekKnop: (bedrag) => `Book now, ${bedrag}`,
    geenBetaling: "No payment required. We will confirm within 24 hours.",
    prijsoverzicht: "Price overview",
    pakketDagen: (d) => `Package (${d}d)`,
    extraApparatuur: "Extra equipment",
    duurkortingRegel: (pct) => `Duration discount (-${pct}%)`,
    totaal: "Total",
    zijbalk: ["Free delivery & collection", "500+ projects completed", "Moisture reading included", "Reply within 24h"],
    opnieuw: "Reconfigure",
    mobielInfo: (w, n) => `${w}w • ${n} units`,
    boekNuKort: "Book now",
    metaBeschrijving: (kort, inhoud, prijs) =>
      `${kort} drying package with ${inhoud}. ${prijs} per 2 weeks, including delivery, installation and collection.`,
  },
} satisfies Copy<Tekst>;

const PackageDetailPage = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seoNietGevonden = useSeo("notFound");
  const taal = useTaal();
  const toon = useToonBedrag();
  /** Bedrag + btw-label, zoals de bezoeker het hoort te zien. */
  const bedrag = (excl: number) => `${toon(excl).tekst} ${toon(excl).label}`;
  /*
    Nederlands houdt zijn date-fns-notatie ("3 dec. 2026"); de andere talen
    volgen NUMBER_LOCALE, zoals elders op de site.
  */
  const datum = (d: Date) =>
    taal === "nl"
      ? format(d, "d MMM yyyy", { locale: nl })
      : d.toLocaleDateString(NUMBER_LOCALE[taal], { day: "numeric", month: "short", year: "numeric" });
  /*
    De kalender bleef in het Nederlands als de taal niet "fr" was; Engels krijgt
    zijn eigen locale (Britse volgorde, week vanaf maandag) in plaats van de
    Amerikaanse standaard van date-fns.
  */
  const kalenderLocale = taal === "fr" ? fr : taal === "en" ? enGB : undefined;
  const pkg = packageId ? getPackageById(packageId) : undefined;

  // Gallery
  const [activeImg, setActiveImg] = useState(0);

  // Date picker
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  // Upsell
  const [extraDrogers, setExtraDrogers] = useState(0);
  const [extraVentilatoren, setExtraVentilatoren] = useState(0);

  // Form
  const [customerType, setCustomerType] = useState<CustomerType>("particulier");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Duration calculation
  const rentalDays = startDate && endDate ? Math.max(1, differenceInDays(endDate, startDate)) : 14;
  const rentalWeeks = Math.ceil(rentalDays / 7);

  // Pricing
  const baseTotal = pkg.pricePerDay * rentalDays;
  const durationDiscount = rentalDays >= 28 ? 15 : rentalDays >= 21 ? 10 : rentalDays >= 14 ? 5 : 0;
  const extraEquipmentDaily = extraDrogers * EXTRA_DROGER_DAG + extraVentilatoren * EXTRA_VENTILATOR_DAG;
  const extraEquipmentTotal = extraEquipmentDaily * rentalDays;
  const subtotal = baseTotal + extraEquipmentTotal;
  const discount = Math.round(subtotal * (durationDiscount / 100));
  const totalPrice = subtotal - discount;

  const handleStartDateSelect = (date: Date | undefined) => {
    setStartDate(date);
    if (date && (!endDate || endDate <= date)) {
      setEndDate(addDays(date, 14));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !lastName || !phone || !address) {
      toast({ title: t.verplicht, variant: "destructive" });
      return;
    }
    if (!startDate || !endDate) {
      toast({ title: t.kiesDatums, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const year = new Date().getFullYear();
      const random = Math.floor(10000 + Math.random() * 90000);
      const bookingNumber = `BDR-${year}-${random}`;

      const totalDrogers = pkg.equipment.filter(e => e.type === "bouwdroger").reduce((s, e) => s + e.count, 0) + extraDrogers;
      const totalVent = pkg.equipment.filter(e => e.type === "ventilator").reduce((s, e) => s + e.count, 0) + extraVentilatoren;
      const totalVerw = pkg.equipment.filter(e => e.type === "kachel").reduce((s, e) => s + e.count, 0);

      const bookingData = {
        booking_number: bookingNumber,
        customer_type: customerType,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        address,
        postal_code: postalCode,
        city,
        company_name: customerType === "zakelijk" ? companyName : null,
        vat_number: customerType === "zakelijk" ? vatNumber : null,
        notes: notes || null,
        status: "pending",
        package_tier: pkg.id,
        duration_days: rentalDays,
        rental_start_date: format(startDate, "yyyy-MM-dd"),
        rental_end_date: format(endDate, "yyyy-MM-dd"),
        total_price: totalPrice,
        equipment_drogers: totalDrogers,
        equipment_ventilatoren: totalVent,
        equipment_verwarming: totalVerw,
      };

      // Via /api/order — zie BookingPage: die route stuurt de boeking ook door
      // naar het bouwdrogers-portaal in Vernast.
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "booking", data: bookingData }),
      });

      if (!response.ok) {
        toast({ title: t.fout, description: t.probeerOpnieuw, variant: "destructive" });
        setIsSubmitting(false);
        return;
      }
      navigate(lp("/booking/success"), { state: { bookingNumber, firstName, email } });
    } catch {
      toast({ title: t.fout, variant: "destructive" });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
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

                {/* Date pickers */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div>
                    <Label className="text-xs font-semibold text-muted-foreground mb-1 block">{t.uitgifte}</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? datum(startDate) : t.kiesDatum}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={handleStartDateSelect}
                          locale={kalenderLocale}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label className="text-xs font-semibold text-muted-foreground mb-1 block">{t.retour}</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? datum(endDate) : t.kiesDatum}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          locale={kalenderLocale}
                          disabled={(date) => date < (startDate || new Date())}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Equipment list with images */}
                <div className="border border-border rounded-xl divide-y divide-border mb-6">
                  {pkg.equipment.map((item, i) => {
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

                {/* Duration info */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>{t.weken(rentalWeeks, rentalDays)}</span>
                  {durationDiscount > 0 && (
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">{t.duurkorting(durationDiscount)}</Badge>
                  )}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-foreground">{toon(totalPrice).tekst}</span>
                    <span className="text-muted-foreground text-sm">{toon(totalPrice).label}</span>
                  </div>
                  {discount > 0 && (
                    <p className="text-sm text-primary font-medium">{t.bespaart(toon(discount).tekst)}</p>
                  )}
                </div>

                {/* Extra equipment upsell */}
                <div className="bg-muted/50 rounded-xl p-4 mb-6 space-y-3">
                  <p className="text-sm font-bold">{t.extraVraag}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{t.extraDroger}</p>
                      <p className="text-xs text-muted-foreground">+{toon(EXTRA_DROGER_DAG).tekst}{t.perDag}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setExtraDrogers(Math.max(0, extraDrogers - 1))} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background"><Minus className="h-3 w-3" /></button>
                      <span className="text-sm font-bold w-5 text-center">{extraDrogers}</span>
                      <button type="button" onClick={() => setExtraDrogers(extraDrogers + 1)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background"><Plus className="h-3 w-3" /></button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{t.extraVentilator}</p>
                      <p className="text-xs text-muted-foreground">+{toon(EXTRA_VENTILATOR_DAG).tekst}{t.perDag}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setExtraVentilatoren(Math.max(0, extraVentilatoren - 1))} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background"><Minus className="h-3 w-3" /></button>
                      <span className="text-sm font-bold w-5 text-center">{extraVentilatoren}</span>
                      <button type="button" onClick={() => setExtraVentilatoren(extraVentilatoren + 1)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background"><Plus className="h-3 w-3" /></button>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  size="lg"
                  className="w-full rounded-xl font-bold text-base gap-2"
                  onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  {t.boekDirect} <ArrowRight className="h-4 w-4" />
                </Button>

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
                            {t.inbegrepen(item.count)}
                          </p>
                          <div className="flex flex-col gap-3">
                            <Button variant="default" className="rounded-full w-fit" onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}>
                              {t.watInbegrepen}
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

        {/* BOOKING FORM SECTION */}
        <section id="booking-form" className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-black mb-1">{t.boekNu}</h2>
                <p className="text-muted-foreground text-sm mb-6">{t.bevestigen}</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Customer type */}
                  <div className="grid grid-cols-2 gap-3">
                    {(["particulier", "zakelijk"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setCustomerType(type)}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left",
                          customerType === type ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                        )}
                      >
                        {type === "particulier" ? <User className="h-4 w-4" /> : <Building2 className="h-4 w-4" />}
                        <span className="font-semibold text-sm capitalize">{t.klantType[type]}</span>
                      </button>
                    ))}
                  </div>

                  {customerType === "zakelijk" && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">{t.bedrijfsnaam}</Label>
                        <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">{t.btwNummer}</Label>
                        <Input value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} placeholder="BE0123.456.789" />
                      </div>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">{t.voornaam}</Label>
                      <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">{t.achternaam}</Label>
                      <Input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">{t.email}</Label>
                      <Input type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} value={email} onChange={(e) => setEmail(maskEmail(e.target.value))} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">{t.telefoon}</Label>
                      <Input type="tel" inputMode="tel" autoComplete="tel" placeholder="0470 00 00 00" value={phone} onChange={(e) => setPhone(maskPhone(e.target.value))} required />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm font-semibold">{t.straat}</Label>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">{t.postcode}</Label>
                      <Input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">{t.gemeente}</Label>
                      <Input value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm font-semibold">{t.opmerkingen}</Label>
                    <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t.opmerkingenPh} rows={3} />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-bold text-base rounded-xl" disabled={isSubmitting}>
                    {isSubmitting ? t.bezig : t.boekKnop(bedrag(totalPrice))}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">{t.geenBetaling}</p>
                </form>
              </div>

              {/* Sticky sidebar summary */}
              <div className="lg:sticky lg:top-24 space-y-5">
                {/* Price recap */}
                <div className="bg-accent text-primary-foreground rounded-2xl p-5">
                  <h3 className="font-bold text-sm mb-3 opacity-80">{t.prijsoverzicht}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="opacity-80">{t.pakketDagen(rentalDays)}</span>
                      <span>{toon(baseTotal).tekst}</span>
                    </div>
                    {extraEquipmentTotal > 0 && (
                      <div className="flex justify-between">
                        <span className="opacity-80">{t.extraApparatuur}</span>
                        <span>{toon(extraEquipmentTotal).tekst}</span>
                      </div>
                    )}
                    {discount > 0 && (
                      <div className="flex justify-between text-primary-foreground/80">
                        <span>{t.duurkortingRegel(durationDiscount)}</span>
                        <span>-{toon(discount).tekst}</span>
                      </div>
                    )}
                    <div className="border-t border-primary-foreground/20 pt-2 flex justify-between text-lg font-black">
                      <span>{t.totaal}</span>
                      <span>{toon(totalPrice).tekst}</span>
                    </div>
                    <p className="text-xs opacity-60">{toon(totalPrice).label}</p>
                  </div>
                </div>

                {/*
                  Hier stond een sterrenrij met "4.9/5" en een quote van
                  "Pieter D." — allebei verzonnen, en op élke pakketpagina
                  geprerenderd. Wat overblijft zijn de vier punten hieronder:
                  die staan in de voorwaarden en zijn dus na te gaan.
                */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="space-y-2">
                    {t.zijbalk.map((regel) => (
                      <div key={regel} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{regel}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="ghost" onClick={() => navigate(lp("/levering"))} className="w-full gap-2 text-sm">
                  <ArrowLeft className="h-4 w-4" /> {t.opnieuw}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-3 flex items-center justify-between lg:hidden z-50">
          <div>
            <div className="text-lg font-black text-foreground">{toon(totalPrice).tekst}</div>
            <div className="text-xs text-muted-foreground">{t.mobielInfo(rentalWeeks, pkg.equipment.reduce((s, e) => s + e.count, 0) + extraDrogers + extraVentilatoren)}</div>
          </div>
          <Button size="sm" className="rounded-xl font-bold gap-1" onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}>
            {t.boekNuKort} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      <DienstVoorbeelden />
      </main>
      <V3Footer />
    </div>
  );
};

export default PackageDetailPage;
