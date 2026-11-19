import { jsx, jsxs } from "react/jsx-runtime";
import { useParams, useNavigate, Link } from "react-router-dom";
import { c as cn, b as buttonVariants, N as Navbar, B as Button } from "./Navbar-DWDUC3vw.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { u as useToast, T as Toaster, L as Label, I as Input, a as Textarea } from "./toaster-BuM1bkqe.js";
import { B as Badge } from "./badge-RPp4hm6a.js";
import * as React from "react";
import { useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ChevronRight, ChevronLeft, ArrowLeft, CheckCircle2, Shield, Check, CalendarIcon, Flame, Wind, Droplets, Clock, Minus, Plus, ArrowRight, Truck, MapPin, Phone, User, Building2 } from "lucide-react";
import { DayPicker } from "react-day-picker";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { getPackageById, equipmentSummary, packageMetaTitle } from "./packages-DdkKuPcF.js";
import { differenceInDays, format, addDays } from "date-fns";
import { fr, enGB, nl } from "date-fns/locale";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { u as useCopy, a as useLokaalPad, b as useTaal, c as useToonBedrag, N as NUMBER_LOCALE } from "../main.mjs";
import { p as pakketInTaal, e as equipmentSummaryEn, a as equipmentSummaryFr, b as packageMetaTitleEn, c as packageMetaTitleFr } from "./packages.fr-BpE_nEXx.js";
import { p as productSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { m as maskEmail, a as maskPhone } from "./inputMask-BnLinOtl.js";
import { c as altVoorBeeld } from "./verhuur-CgnDb-wO.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./FontPreload-C6Rzq6ld.js";
import "vite-react-ssg";
import "./verhuur-8XCQs1EE.js";
import "@radix-ui/react-label";
import "@radix-ui/react-toast";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur.fr-CrIPL5Eo.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/ui/tabs.tsx");
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/ui/calendar.tsx");
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ..._props }) => /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
        IconRight: ({ ..._props }) => /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/ui/popover.tsx");
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PackageDetailPage.tsx");
const equipmentImages = {
  "Small Bouwdroger": "/products/eco-boost-50.webp",
  "Large Bouwdroger": "/products/eco-performance-80.webp",
  "Axiaal Ventilator": "/products/turbo-axiaal-5300.webp",
  "Elektrische Kachel": "/products/elektrische-kachel-2500.webp"
};
const equipmentIcons = {
  bouwdroger: Droplets,
  ventilator: Wind,
  kachel: Flame
};
const categoryImages = {
  "Chape drogen": ["/products/chape-drogen-1.webp", "/products/chape-drogen-2.webp", "/products/chape-drogen-3.webp", "/products/chape-drogen-4.webp", "/products/chape-drogen-5.webp"],
  "Pleister drogen": ["/products/pleister-1.webp", "/products/pleister-2.webp", "/products/pleister-3.webp", "/products/pleister-4.webp", "/products/pleister-5.webp"],
  "Chape & Pleister drogen": ["/products/pakket-1.webp", "/products/pakket-2.webp", "/products/pakket-3.webp", "/products/chape-pakket-1.webp", "/products/chape-pakket-2.webp"],
  "Chape & Verwarming": ["/products/chape-pakket-1.webp", "/products/chape-pakket-2.webp", "/products/chape-pakket-3.webp", "/products/chape-pakket-4.webp"],
  "Chape & Pleister & Verwarming": ["/products/pakket-4.webp", "/products/pakket-5.webp", "/products/pakket-6.webp", "/products/pakket-7.webp"],
  "Pleister & Verwarming": ["/products/pleister-10.webp", "/products/pleister-11.webp", "/products/pleister-12.webp"],
  "Waterschade": ["/products/pakket-1.webp", "/products/extra-1.webp", "/products/extra-2.webp"]
};
const defaultGallery = ["/products/pakket-1.webp", "/products/extra-6.webp", "/products/extra-7.webp", "/products/extra-8.webp"];
const EXTRA_DROGER_DAG = 12;
const EXTRA_VENTILATOR_DAG = 5;
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
    inbegrepen: (n) => `${n}× inbegrepen in uw pakket. Professionele kwaliteit, getest en onderhouden door onze technici.`,
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
    metaBeschrijving: (kort, inhoud, prijs) => `${kort} droogpakket met ${inhoud}. ${prijs} per 2 weken, inclusief levering, installatie en ophaling.`
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
    inbegrepen: (n) => `${n}× inclus dans votre pack. Qualité professionnelle, testée et entretenue par nos techniciens.`,
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
    metaBeschrijving: (kort, inhoud, prijs) => `Pack de séchage ${kort} avec ${inhoud}. ${prijs} par 2 semaines, livraison, installation et reprise comprises.`
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
    inbegrepen: (n) => `${n}× included in your package. Professional quality, tested and maintained by our technicians.`,
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
    metaBeschrijving: (kort, inhoud, prijs) => `${kort} drying package with ${inhoud}. ${prijs} per 2 weeks, including delivery, installation and collection.`
  }
};
const PackageDetailPage = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seoNietGevonden = useSeo("notFound");
  const taal = useTaal();
  const toon = useToonBedrag();
  const bedrag = (excl) => `${toon(excl).tekst} ${toon(excl).label}`;
  const datum = (d) => taal === "nl" ? format(d, "d MMM yyyy", { locale: nl }) : d.toLocaleDateString(NUMBER_LOCALE[taal], { day: "numeric", month: "short", year: "numeric" });
  const kalenderLocale = taal === "fr" ? fr : taal === "en" ? enGB : void 0;
  const pkg = packageId ? getPackageById(packageId) : void 0;
  const [activeImg, setActiveImg] = useState(0);
  const [startDate, setStartDate] = useState(void 0);
  const [endDate, setEndDate] = useState(void 0);
  const [extraDrogers, setExtraDrogers] = useState(0);
  const [extraVentilatoren, setExtraVentilatoren] = useState(0);
  const [customerType, setCustomerType] = useState("particulier");
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
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx(PageMeta, { ...seoNietGevonden }),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-20 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-foreground mb-4", children: t.nietGevonden }),
        /* @__PURE__ */ jsxs(Button, { onClick: () => navigate(lp("/levering")), className: "rounded-full", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
          " ",
          t.terugConfigurator
        ] })
      ] }),
      /* @__PURE__ */ jsx(V3Footer, {})
    ] });
  }
  const gallery = pkg.images.length ? pkg.images : categoryImages[pkg.category] || defaultGallery;
  const tp = pakketInTaal(pkg, taal);
  const samenstelling = tp.equipment.filter((item) => !item.optional).map((item) => `${item.count}× ${item.name}`).join(", ");
  const galleryAlts = gallery.map(
    (img, i) => i === 0 ? t.samenstelling(tp.title, samenstelling || tp.description) : taal === "nl" ? altVoorBeeld(img, t.foto(tp.title, i + 1)) : t.foto(tp.title, i + 1)
  );
  const pad = lp(`/levering/pakket/${pkg.id}`);
  const rentalDays = startDate && endDate ? Math.max(1, differenceInDays(endDate, startDate)) : 14;
  const rentalWeeks = Math.ceil(rentalDays / 7);
  const baseTotal = pkg.pricePerDay * rentalDays;
  const durationDiscount = rentalDays >= 28 ? 15 : rentalDays >= 21 ? 10 : rentalDays >= 14 ? 5 : 0;
  const extraEquipmentDaily = extraDrogers * EXTRA_DROGER_DAG + extraVentilatoren * EXTRA_VENTILATOR_DAG;
  const extraEquipmentTotal = extraEquipmentDaily * rentalDays;
  const subtotal = baseTotal + extraEquipmentTotal;
  const discount = Math.round(subtotal * (durationDiscount / 100));
  const totalPrice = subtotal - discount;
  const handleStartDateSelect = (date) => {
    setStartDate(date);
    if (date && (!endDate || endDate <= date)) {
      setEndDate(addDays(date, 14));
    }
  };
  const handleSubmit = async (e) => {
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
      const year = (/* @__PURE__ */ new Date()).getFullYear();
      const random = Math.floor(1e4 + Math.random() * 9e4);
      const bookingNumber = `BDR-${year}-${random}`;
      const totalDrogers = pkg.equipment.filter((e2) => e2.type === "bouwdroger").reduce((s, e2) => s + e2.count, 0) + extraDrogers;
      const totalVent = pkg.equipment.filter((e2) => e2.type === "ventilator").reduce((s, e2) => s + e2.count, 0) + extraVentilatoren;
      const totalVerw = pkg.equipment.filter((e2) => e2.type === "kachel").reduce((s, e2) => s + e2.count, 0);
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
        equipment_verwarming: totalVerw
      };
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "booking", data: bookingData })
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: `${taal === "nl" ? packageMetaTitle(pkg) : taal === "en" ? packageMetaTitleEn(tp) : packageMetaTitleFr(tp)} | Vernast`,
        description: t.metaBeschrijving(
          tp.shortTitle,
          taal === "nl" ? equipmentSummary(pkg) : taal === "en" ? equipmentSummaryEn(tp) : equipmentSummaryFr(tp),
          bedrag(pkg.pricePerTwoWeeks)
        ),
        path: pad,
        ogType: "product",
        noindex: true,
        jsonLd: [
          productSchema({
            name: tp.title,
            description: tp.description,
            image: gallery[0],
            path: pad,
            pricePerDay: pkg.pricePerDay,
            category: tp.category
          }),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.levering, path: lp("/levering") },
            { name: tp.shortTitle, path: pad }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-3", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Link, { to: lp("/"), className: "hover:text-foreground transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsx(Link, { to: lp("/levering"), className: "hover:text-foreground transition-colors", children: t.levering }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium truncate", children: tp.shortTitle })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-8 md:py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-muted/30 aspect-[4/3] mb-3", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: gallery[activeImg],
                alt: galleryAlts[activeImg],
                className: "w-full h-full object-cover",
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 space-y-2", children: [
              { icon: CheckCircle2, text: t.badges[0] },
              { icon: Shield, text: t.badges[1] },
              { icon: Check, text: t.badges[2] }
            ].map((b) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-accent/90 text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-semibold backdrop-blur-sm", children: [
              /* @__PURE__ */ jsx(b.icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: b.text })
            ] }, b.text)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 gap-2", children: gallery.map((img, i) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setActiveImg(i),
              className: cn(
                "rounded-lg overflow-hidden aspect-video border-2 transition-all",
                i === activeImg ? "border-primary shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
              ),
              children: /* @__PURE__ */ jsx("img", { src: img, alt: galleryAlts[i], className: "w-full h-full object-cover", loading: "lazy", decoding: "async" })
            },
            img
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-3xl font-black text-foreground mb-2 leading-tight", children: tp.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: tp.description }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { className: "text-xs font-semibold text-muted-foreground mb-1 block", children: t.uitgifte }),
              /* @__PURE__ */ jsxs(Popover, { children: [
                /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: cn("w-full justify-start text-left font-normal", !startDate && "text-muted-foreground"), children: [
                  /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
                  startDate ? datum(startDate) : t.kiesDatum
                ] }) }),
                /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
                  Calendar,
                  {
                    mode: "single",
                    selected: startDate,
                    onSelect: handleStartDateSelect,
                    locale: kalenderLocale,
                    disabled: (date) => date < /* @__PURE__ */ new Date(),
                    initialFocus: true
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { className: "text-xs font-semibold text-muted-foreground mb-1 block", children: t.retour }),
              /* @__PURE__ */ jsxs(Popover, { children: [
                /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground"), children: [
                  /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
                  endDate ? datum(endDate) : t.kiesDatum
                ] }) }),
                /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
                  Calendar,
                  {
                    mode: "single",
                    selected: endDate,
                    onSelect: setEndDate,
                    locale: kalenderLocale,
                    disabled: (date) => date < (startDate || /* @__PURE__ */ new Date()),
                    initialFocus: true
                  }
                ) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border border-border rounded-xl divide-y divide-border mb-6", children: pkg.equipment.map((item, i) => {
            const img = equipmentImages[item.name];
            return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3", children: [
              img ? /* @__PURE__ */ jsx("img", { src: img, alt: tp.equipment[i].name, className: "w-10 h-10 object-contain rounded", loading: "lazy", decoding: "async" }) : /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-muted rounded flex items-center justify-center", children: (() => {
                const Icon = equipmentIcons[item.type] || Droplets;
                return /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary" });
              })() }),
              /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                item.count,
                "× ",
                tp.equipment[i].name
              ] }) })
            ] }, i);
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: t.weken(rentalWeeks, rentalDays) }),
            durationDiscount > 0 && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs bg-primary/10 text-primary", children: t.duurkorting(durationDiscount) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-3xl font-black text-foreground", children: toon(totalPrice).tekst }),
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm", children: toon(totalPrice).label })
            ] }),
            discount > 0 && /* @__PURE__ */ jsx("p", { className: "text-sm text-primary font-medium", children: t.bespaart(toon(discount).tekst) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-muted/50 rounded-xl p-4 mb-6 space-y-3", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold", children: t.extraVraag }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: t.extraDroger }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "+",
                  toon(EXTRA_DROGER_DAG).tekst,
                  t.perDag
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setExtraDrogers(Math.max(0, extraDrogers - 1)), className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background", children: /* @__PURE__ */ jsx(Minus, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold w-5 text-center", children: extraDrogers }),
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setExtraDrogers(extraDrogers + 1), className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background", children: /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: t.extraVentilator }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "+",
                  toon(EXTRA_VENTILATOR_DAG).tekst,
                  t.perDag
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setExtraVentilatoren(Math.max(0, extraVentilatoren - 1)), className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background", children: /* @__PURE__ */ jsx(Minus, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold w-5 text-center", children: extraVentilatoren }),
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setExtraVentilatoren(extraVentilatoren + 1), className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background", children: /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              className: "w-full rounded-xl font-bold text-base gap-2",
              onClick: () => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth", block: "start" }),
              children: [
                t.boekDirect,
                " ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 mt-4", children: [
            { icon: Truck, text: t.vertrouwen[0] },
            { icon: Shield, text: t.vertrouwen[1] },
            { icon: Clock, text: t.vertrouwen[2] },
            { icon: MapPin, text: t.vertrouwen[3] }
          ].map((u) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx(u.icon, { className: "h-3.5 w-3.5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: u.text })
          ] }, u.text)) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10 md:py-16 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: pkg.equipment[0]?.name, children: [
        /* @__PURE__ */ jsx(TabsList, { className: "w-full flex-wrap h-auto gap-2 bg-transparent p-0 mb-8", children: pkg.equipment.map((item, i) => /* @__PURE__ */ jsx(
          TabsTrigger,
          {
            value: item.name,
            className: "rounded-full border border-border data-[state=active]:bg-accent data-[state=active]:text-primary-foreground data-[state=active]:border-accent px-5 py-2.5 text-sm font-semibold",
            children: tp.equipment[i].name
          },
          item.name
        )) }),
        pkg.equipment.map((item, i) => {
          const specs = tp.equipment[i].specs;
          return /* @__PURE__ */ jsx(TabsContent, { value: item.name, children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-start", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-black text-foreground mb-4", children: t.specKop }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: t.inbegrepen(item.count) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ jsx(Button, { variant: "default", className: "rounded-full w-fit", onClick: () => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" }), children: t.watInbegrepen }),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "rounded-full w-fit", onClick: () => navigate(lp("/contact")), children: [
                  /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mr-2" }),
                  " ",
                  t.hulp
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-6", children: Object.entries(specs).length > 0 && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground mb-3", children: t.specificaties }),
              /* @__PURE__ */ jsx("div", { className: "border border-border rounded-xl overflow-hidden", children: Object.entries(specs).map(([key, val], idx) => /* @__PURE__ */ jsxs("div", { className: cn("flex justify-between px-4 py-3 text-sm", idx % 2 === 0 ? "bg-background" : "bg-muted/30"), children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: key }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: val })
              ] }, key)) })
            ] }) })
          ] }) }, item.name);
        })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { id: "booking-form", className: "py-10 md:py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black mb-1", children: t.boekNu }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-6", children: t.bevestigen }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: ["particulier", "zakelijk"].map((type) => /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setCustomerType(type),
                className: cn(
                  "flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left",
                  customerType === type ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                ),
                children: [
                  type === "particulier" ? /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm capitalize", children: t.klantType[type] })
                ]
              },
              type
            )) }),
            customerType === "zakelijk" && /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.bedrijfsnaam }),
                /* @__PURE__ */ jsx(Input, { value: companyName, onChange: (e) => setCompanyName(e.target.value), required: true })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.btwNummer }),
                /* @__PURE__ */ jsx(Input, { value: vatNumber, onChange: (e) => setVatNumber(e.target.value), placeholder: "BE0123.456.789" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.voornaam }),
                /* @__PURE__ */ jsx(Input, { id: "firstName", value: firstName, onChange: (e) => setFirstName(e.target.value), required: true })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.achternaam }),
                /* @__PURE__ */ jsx(Input, { value: lastName, onChange: (e) => setLastName(e.target.value), required: true })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.email }),
                /* @__PURE__ */ jsx(Input, { type: "email", inputMode: "email", autoComplete: "email", autoCapitalize: "none", spellCheck: false, value: email, onChange: (e) => setEmail(maskEmail(e.target.value)), required: true })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.telefoon }),
                /* @__PURE__ */ jsx(Input, { type: "tel", inputMode: "tel", autoComplete: "tel", placeholder: "0470 00 00 00", value: phone, onChange: (e) => setPhone(maskPhone(e.target.value)), required: true })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.straat }),
              /* @__PURE__ */ jsx(Input, { value: address, onChange: (e) => setAddress(e.target.value), required: true })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.postcode }),
                /* @__PURE__ */ jsx(Input, { value: postalCode, onChange: (e) => setPostalCode(e.target.value) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.gemeente }),
                /* @__PURE__ */ jsx(Input, { value: city, onChange: (e) => setCity(e.target.value) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { className: "text-sm font-semibold", children: t.opmerkingen }),
              /* @__PURE__ */ jsx(Textarea, { value: notes, onChange: (e) => setNotes(e.target.value), placeholder: t.opmerkingenPh, rows: 3 })
            ] }),
            /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", className: "w-full font-bold text-base rounded-xl", disabled: isSubmitting, children: isSubmitting ? t.bezig : t.boekKnop(bedrag(totalPrice)) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center", children: t.geenBetaling })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-24 space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-accent text-primary-foreground rounded-2xl p-5", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-sm mb-3 opacity-80", children: t.prijsoverzicht }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "opacity-80", children: t.pakketDagen(rentalDays) }),
                /* @__PURE__ */ jsx("span", { children: toon(baseTotal).tekst })
              ] }),
              extraEquipmentTotal > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "opacity-80", children: t.extraApparatuur }),
                /* @__PURE__ */ jsx("span", { children: toon(extraEquipmentTotal).tekst })
              ] }),
              discount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-primary-foreground/80", children: [
                /* @__PURE__ */ jsx("span", { children: t.duurkortingRegel(durationDiscount) }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "-",
                  toon(discount).tekst
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-t border-primary-foreground/20 pt-2 flex justify-between text-lg font-black", children: [
                /* @__PURE__ */ jsx("span", { children: t.totaal }),
                /* @__PURE__ */ jsx("span", { children: toon(totalPrice).tekst })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs opacity-60", children: toon(totalPrice).label })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-card border border-border rounded-2xl p-5", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: t.zijbalk.map((regel) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: regel })
          ] }, regel)) }) }),
          /* @__PURE__ */ jsxs(Button, { variant: "ghost", onClick: () => navigate(lp("/levering")), className: "w-full gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
            " ",
            t.opnieuw
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 bg-background border-t border-border p-3 flex items-center justify-between lg:hidden z-50", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-black text-foreground", children: toon(totalPrice).tekst }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.mobielInfo(rentalWeeks, pkg.equipment.reduce((s, e) => s + e.count, 0) + extraDrogers + extraVentilatoren) })
        ] }),
        /* @__PURE__ */ jsxs(Button, { size: "sm", className: "rounded-xl font-bold gap-1", onClick: () => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" }), children: [
          t.boekNuKort,
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  PackageDetailPage as default
};
