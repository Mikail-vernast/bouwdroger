import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { T as TopBar } from "./TopBar-B0jE5GHc.js";
import { N as Navbar, B as Button } from "./Navbar-DWDUC3vw.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { u as useToast, T as Toaster, L as Label, I as Input, a as Textarea } from "./toaster-BuM1bkqe.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-Dl9QPFXW.js";
import { B as Badge } from "./badge-RPp4hm6a.js";
import { ArrowLeft, User, Building2, Droplets, Wind, Flame, Check } from "lucide-react";
import { products } from "./products-BvI4fr_a.js";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { m as maskEmail, a as maskPhone } from "./inputMask-BnLinOtl.js";
import { u as useCopy, a as useLokaalPad, b as useTaal, c as useToonBedrag } from "../main.mjs";
import { p as productInTaal } from "./products.fr-BaEl5sMH.js";
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
import "@radix-ui/react-label";
import "@radix-ui/react-toast";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/BookingPage.tsx");
const COPY = {
  nl: {
    verplicht: "Vul alle verplichte velden in",
    fout: "Er ging iets mis",
    foutUitleg: "Probeer het opnieuw of contacteer ons.",
    terug: "Terug",
    h1: "Boeking aanvragen",
    intro: "Vul uw gegevens in en wij nemen binnen 24 uur contact met u op.",
    typeKlant: "Type klant",
    particulier: "Particulier",
    particulierSub: "Privépersoon",
    zakelijk: "Zakelijk",
    zakelijkSub: "Bedrijf / Aannemer",
    bedrijfsnaam: "Bedrijfsnaam *",
    btwNummer: "BTW-nummer",
    contact: "Contactgegevens",
    voornaam: "Voornaam *",
    achternaam: "Achternaam *",
    email: "E-mail *",
    telefoon: "Telefoon *",
    adresKop: "Afleveradres",
    straat: "Straat + huisnummer *",
    postcode: "Postcode",
    gemeente: "Gemeente",
    opmerkingen: "Opmerkingen (optioneel)",
    opmerkingenPh: "Bijv. toegangsinformatie, specifieke wensen...",
    bezig: "Bezig met verzenden...",
    versturen: "Boeking aanvragen",
    selectie: "Uw selectie",
    pakket: (label) => `${label} pakket`,
    oppervlakte: "Oppervlakte",
    type: "Type",
    duur: "Duur",
    dagen: (n) => `${n} dagen`,
    droger: "Bouwdroger",
    ventilator: "Ventilator",
    verwarming: "Verwarming",
    totaal: "Totaal",
    bespaart: (bedrag) => `U bespaart ${bedrag} dankzij duurkorting`,
    perDag: "/dag",
    geenPakket: "Geen pakket geselecteerd. U kunt ook een vrijblijvende offerte aanvragen.",
    voordelen: ["Gratis vochtmeting bij levering", "Gratis levering vanaf 2 weken", "Binnen 24u antwoord"]
  },
  fr: {
    verplicht: "Veuillez remplir tous les champs obligatoires",
    fout: "Une erreur s'est produite",
    foutUitleg: "Réessayez ou contactez-nous.",
    terug: "Retour",
    h1: "Demander une réservation",
    intro: "Indiquez vos coordonnées et nous vous contactons dans les 24 heures.",
    typeKlant: "Type de client",
    particulier: "Particulier",
    particulierSub: "Personne privée",
    zakelijk: "Professionnel",
    zakelijkSub: "Entreprise / Entrepreneur",
    bedrijfsnaam: "Nom de l'entreprise *",
    btwNummer: "Numéro de TVA",
    contact: "Coordonnées",
    voornaam: "Prénom *",
    achternaam: "Nom *",
    email: "E-mail *",
    telefoon: "Téléphone *",
    adresKop: "Adresse de livraison",
    straat: "Rue + numéro *",
    postcode: "Code postal",
    gemeente: "Commune",
    opmerkingen: "Remarques (facultatif)",
    opmerkingenPh: "P. ex. informations d'accès, souhaits particuliers...",
    bezig: "Envoi en cours...",
    versturen: "Demander une réservation",
    selectie: "Votre sélection",
    pakket: (label) => `Pack ${label}`,
    oppervlakte: "Surface",
    type: "Type",
    duur: "Durée",
    dagen: (n) => `${n} jours`,
    droger: "Déshumidificateur de chantier",
    ventilator: "Ventilateur",
    verwarming: "Chauffage",
    totaal: "Total",
    bespaart: (bedrag) => `Vous économisez ${bedrag} grâce à la remise de durée`,
    perDag: "/jour",
    geenPakket: "Aucun pack sélectionné. Vous pouvez aussi demander un devis sans engagement.",
    voordelen: [
      "Mesure d'humidité gratuite à la livraison",
      "Livraison gratuite à partir de 2 semaines",
      "Réponse sous 24 h"
    ]
  },
  en: {
    verplicht: "Please fill in all required fields",
    fout: "Something went wrong",
    foutUitleg: "Please try again or contact us.",
    terug: "Back",
    h1: "Request a booking",
    intro: "Fill in your details and we will contact you within 24 hours.",
    typeKlant: "Customer type",
    particulier: "Private",
    particulierSub: "Private individual",
    zakelijk: "Business",
    zakelijkSub: "Company / Contractor",
    bedrijfsnaam: "Company name *",
    btwNummer: "VAT number",
    contact: "Contact details",
    voornaam: "First name *",
    achternaam: "Last name *",
    email: "Email *",
    telefoon: "Phone *",
    adresKop: "Delivery address",
    straat: "Street + house number *",
    postcode: "Postcode",
    gemeente: "Town",
    opmerkingen: "Comments (optional)",
    opmerkingenPh: "E.g. access information, specific requests...",
    bezig: "Sending...",
    versturen: "Request a booking",
    selectie: "Your selection",
    pakket: (label) => `${label} package`,
    oppervlakte: "Floor area",
    type: "Type",
    duur: "Duration",
    dagen: (n) => `${n} days`,
    droger: "Construction dehumidifier",
    ventilator: "Fan",
    verwarming: "Heating",
    totaal: "Total",
    bespaart: (bedrag) => `You save ${bedrag} with the duration discount`,
    perDag: "/day",
    geenPakket: "No package selected. You can also request a no-obligation quote.",
    voordelen: ["Free moisture reading on delivery", "Free delivery from 2 weeks", "Reply within 24h"]
  }
};
const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const [selection, setSelection] = useState(null);
  const [productId, setProductId] = useState(null);
  const [customerType, setCustomerType] = useState("particulier");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  useEffect(() => {
    const stored = localStorage.getItem("vernast_booking_selection");
    if (stored) {
      try {
        setSelection(JSON.parse(stored));
      } catch {
        localStorage.removeItem("vernast_booking_selection");
      }
    }
    const state = location.state;
    if (state?.productId) {
      setProductId(state.productId);
    }
  }, [location.state]);
  const gevonden = productId ? products.find((p) => p.id === productId) : null;
  const selectedProduct = gevonden ? productInTaal(gevonden, taal) : null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !firstName || !lastName || !phone || !address) {
      toast({ title: t.verplicht, variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const year = (/* @__PURE__ */ new Date()).getFullYear();
      const random = Math.floor(1e4 + Math.random() * 9e4);
      const bookingNumber = `BDR-${year}-${random}`;
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
        // Package info
        sqm: selection?.sqm || null,
        room_type: selection?.roomType || null,
        package_tier: selection?.package?.tier || null,
        duration_days: selection?.durationDays || null,
        rental_start_date: selection?.startDate ? selection.startDate.split("T")[0] : null,
        rental_end_date: selection?.endDate ? selection.endDate.split("T")[0] : null,
        total_price: selection?.package?.totalPrice || selectedProduct?.pricePerDay || null,
        product_id: productId || null,
        equipment_drogers: selection?.package?.equipment?.drogers || null,
        equipment_ventilatoren: selection?.package?.equipment?.ventilatoren || null,
        equipment_verwarming: selection?.package?.equipment?.verwarming || null
      };
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "booking", data: bookingData })
      });
      if (!response.ok) {
        console.error("Booking error:", await response.text().catch(() => response.status));
        toast({ title: t.fout, description: t.foutUitleg, variant: "destructive" });
        setIsSubmitting(false);
        return;
      }
      localStorage.removeItem("vernast_booking_selection");
      navigate(lp("/booking/success"), {
        state: {
          bookingNumber,
          firstName,
          email,
          package: selection?.package
        }
      });
    } catch (err) {
      console.error(err);
      toast({ title: t.fout, variant: "destructive" });
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx(PageMeta, { ...useSeo("booking") }),
    /* @__PURE__ */ jsx(TopBar, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxs(Button, { variant: "ghost", onClick: () => navigate(-1), className: "gap-2 mb-6", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        " ",
        t.terug
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "lg:col-span-2",
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-3xl font-black mb-2", children: t.h1 }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: t.intro }),
              /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx(Label, { className: "font-bold text-base", children: t.typeKlant }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setCustomerType("particulier"),
                        className: `flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${customerType === "particulier" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`,
                        children: [
                          /* @__PURE__ */ jsx(User, { className: `h-5 w-5 ${customerType === "particulier" ? "text-primary" : "text-muted-foreground"}` }),
                          /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                            /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: t.particulier }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: t.particulierSub })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setCustomerType("zakelijk"),
                        className: `flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${customerType === "zakelijk" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`,
                        children: [
                          /* @__PURE__ */ jsx(Building2, { className: `h-5 w-5 ${customerType === "zakelijk" ? "text-primary" : "text-muted-foreground"}` }),
                          /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                            /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: t.zakelijk }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: t.zakelijkSub })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                customerType === "zakelijk" && /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "grid sm:grid-cols-2 gap-4",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx(Label, { htmlFor: "companyName", className: "font-semibold", children: t.bedrijfsnaam }),
                        /* @__PURE__ */ jsx(Input, { id: "companyName", value: companyName, onChange: (e) => setCompanyName(e.target.value), required: true })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx(Label, { htmlFor: "vatNumber", className: "font-semibold", children: t.btwNummer }),
                        /* @__PURE__ */ jsx(Input, { id: "vatNumber", value: vatNumber, onChange: (e) => setVatNumber(e.target.value), placeholder: "BE0123.456.789" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: t.contact }),
                  /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx(Label, { htmlFor: "firstName", className: "font-semibold", children: t.voornaam }),
                      /* @__PURE__ */ jsx(Input, { id: "firstName", value: firstName, onChange: (e) => setFirstName(e.target.value), required: true })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx(Label, { htmlFor: "lastName", className: "font-semibold", children: t.achternaam }),
                      /* @__PURE__ */ jsx(Input, { id: "lastName", value: lastName, onChange: (e) => setLastName(e.target.value), required: true })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "font-semibold", children: t.email }),
                      /* @__PURE__ */ jsx(Input, { id: "email", type: "email", inputMode: "email", autoComplete: "email", autoCapitalize: "none", spellCheck: false, value: email, onChange: (e) => setEmail(maskEmail(e.target.value)), required: true })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx(Label, { htmlFor: "phone", className: "font-semibold", children: t.telefoon }),
                      /* @__PURE__ */ jsx(Input, { id: "phone", type: "tel", inputMode: "tel", autoComplete: "tel", placeholder: "0470 00 00 00", value: phone, onChange: (e) => setPhone(maskPhone(e.target.value)), required: true })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: t.adresKop }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx(Label, { htmlFor: "address", className: "font-semibold", children: t.straat }),
                    /* @__PURE__ */ jsx(Input, { id: "address", value: address, onChange: (e) => setAddress(e.target.value), required: true })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx(Label, { htmlFor: "postalCode", className: "font-semibold", children: t.postcode }),
                      /* @__PURE__ */ jsx(Input, { id: "postalCode", value: postalCode, onChange: (e) => setPostalCode(e.target.value) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx(Label, { htmlFor: "city", className: "font-semibold", children: t.gemeente }),
                      /* @__PURE__ */ jsx(Input, { id: "city", value: city, onChange: (e) => setCity(e.target.value) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "notes", className: "font-semibold", children: t.opmerkingen }),
                  /* @__PURE__ */ jsx(
                    Textarea,
                    {
                      id: "notes",
                      value: notes,
                      onChange: (e) => setNotes(e.target.value),
                      placeholder: t.opmerkingenPh,
                      rows: 3
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", className: "w-full sm:w-auto font-bold text-base", disabled: isSubmitting, children: isSubmitting ? t.bezig : t.versturen })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "lg:sticky lg:top-28",
            children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: t.selectie }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                selection ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Badge, { className: "bg-primary text-primary-foreground", children: t.pakket(selection.package.label) }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: t.oppervlakte }),
                      /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                        selection.sqm,
                        " m²"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: t.type }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: selection.roomTypeLabel })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: t.duur }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: t.dagen(selection.durationDays) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-3 space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Droplets, { className: "h-4 w-4 text-primary" }),
                      /* @__PURE__ */ jsxs("span", { children: [
                        selection.package.equipment.drogers,
                        "x ",
                        t.droger
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Wind, { className: "h-4 w-4 text-primary" }),
                      /* @__PURE__ */ jsxs("span", { children: [
                        selection.package.equipment.ventilatoren,
                        "x ",
                        t.ventilator
                      ] })
                    ] }),
                    selection.package.equipment.verwarming > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Flame, { className: "h-4 w-4 text-primary" }),
                      /* @__PURE__ */ jsxs("span", { children: [
                        selection.package.equipment.verwarming,
                        "x ",
                        t.verwarming
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-lg font-black", children: [
                      /* @__PURE__ */ jsx("span", { children: t.totaal }),
                      /* @__PURE__ */ jsx("span", { className: "text-primary", children: toon(selection.package.totalPrice).tekst })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: toon(selection.package.totalPrice).label }),
                    selection.package.discount > 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-primary mt-1", children: t.bespaart(toon(selection.package.discount).tekst) })
                  ] })
                ] }) : selectedProduct ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-secondary rounded-lg p-4 flex items-center justify-center", children: /* @__PURE__ */ jsx("img", { src: selectedProduct.image, alt: selectedProduct.imageAlt, className: "h-24 object-contain", loading: "lazy", decoding: "async" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "font-bold", children: selectedProduct.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: selectedProduct.capacity }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-primary", children: toon(selectedProduct.pricePerDay).tekst }),
                    /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
                      t.perDag,
                      " ",
                      toon(selectedProduct.pricePerDay).label
                    ] })
                  ] })
                ] }) : /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: t.geenPakket }),
                /* @__PURE__ */ jsx("div", { className: "border-t border-border pt-3 space-y-2", children: t.voordelen.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-primary flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: item })
                ] }, item)) })
              ] })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  BookingPage as default
};
