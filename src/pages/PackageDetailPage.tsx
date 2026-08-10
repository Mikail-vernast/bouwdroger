import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Star,
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
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { format, addDays, differenceInDays } from "date-fns";
import { nl } from "date-fns/locale";
import { cn } from "@/lib/utils";
import PageMeta from "@/components/PageMeta";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { maskEmail, maskPhone } from "@/lib/inputMask";

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

const PackageDetailPage = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
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
        <PageMeta {...SEO.notFound} />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Pakket niet gevonden</h1>
          <Button onClick={() => navigate("/levering")} className="rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" /> Terug naar configurator
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Beheerd in het Vernast-portaal; publiceerde nog niemand een galerij voor dit
  // pakket, dan de vaste lijst per werksoort van vroeger.
  const gallery = pkg.images.length ? pkg.images : categoryImages[pkg.category] || defaultGallery;

  // Duration calculation
  const rentalDays = startDate && endDate ? Math.max(1, differenceInDays(endDate, startDate)) : 14;
  const rentalWeeks = Math.ceil(rentalDays / 7);

  // Pricing
  const baseTotal = pkg.pricePerDay * rentalDays;
  const durationDiscount = rentalDays >= 28 ? 15 : rentalDays >= 21 ? 10 : rentalDays >= 14 ? 5 : 0;
  const extraEquipmentDaily = extraDrogers * 12 + extraVentilatoren * 5;
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
      toast({ title: "Vul alle verplichte velden in", variant: "destructive" });
      return;
    }
    if (!startDate || !endDate) {
      toast({ title: "Selecteer een start- en einddatum", variant: "destructive" });
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
        toast({ title: "Er ging iets mis", description: "Probeer het opnieuw.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }
      navigate("/booking/success", { state: { bookingNumber, firstName, email } });
    } catch {
      toast({ title: "Er ging iets mis", variant: "destructive" });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        /*
         * De titel moet de variant benoemen, niet alleen de oppervlakte: drie
         * pakketten voor dezelfde woning verschillen enkel in laagdikte, en met
         * `shortTitle` kregen ze alle drie dezelfde titel — drie pagina's die
         * op precies dezelfde zoekopdracht mikken.
         */
        title={`${packageMetaTitle(pkg)} | Vernast`}
        description={`${pkg.shortTitle} droogpakket met ${equipmentSummary(pkg)}. € ${pkg.pricePerTwoWeeks} per 2 weken, inclusief levering, installatie en ophaling.`}
        path={`/levering/pakket/${pkg.id}`}
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
            name: pkg.title,
            description: pkg.description,
            image: gallery[0],
            path: `/levering/pakket/${pkg.id}`,
            pricePerDay: pkg.pricePerDay,
            category: pkg.category,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Levering", path: "/levering" },
            { name: pkg.shortTitle, path: `/levering/pakket/${pkg.id}` },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/levering" className="hover:text-foreground transition-colors">Levering</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium truncate">{pkg.shortTitle}</span>
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
                <div className="relative rounded-2xl overflow-hidden bg-muted/30 aspect-[4/3] mb-3">
                  <img
                    src={gallery[activeImg]}
                    alt={pkg.title}
                    className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  {/* USP badges overlay */}
                  <div className="absolute bottom-4 left-4 space-y-2">
                    {[
                      { icon: CheckCircle2, text: "Inclusief vochtmeting" },
                      { icon: Shield, text: "Bouwnorm proof" },
                      { icon: Check, text: "Altijd inbegrepen" },
                    ].map((b) => (
                      <div key={b.text} className="flex items-center gap-2 bg-accent/90 text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-semibold backdrop-blur-sm">
                        <b.icon className="h-4 w-4" />
                        <span>{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Thumbnails */}
                <div className="grid grid-cols-5 gap-2">
                  {gallery.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActiveImg(i)}
                      className={cn(
                        "rounded-lg overflow-hidden aspect-video border-2 transition-all",
                        i === activeImg ? "border-primary shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                      <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT: Title, Date, Equipment, Price */}
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2 leading-tight">
                  {pkg.title}
                </h1>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>

                {/* Date pickers */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div>
                    <Label className="text-xs font-semibold text-muted-foreground mb-1 block">Uitgifte datum</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "d MMM yyyy", { locale: nl }) : "Kies datum"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={handleStartDateSelect}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label className="text-xs font-semibold text-muted-foreground mb-1 block">Retour datum</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "d MMM yyyy", { locale: nl }) : "Kies datum"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
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
                          <img src={img} alt={item.name} className="w-10 h-10 object-contain rounded" loading="lazy" decoding="async" />
                        ) : (
                          <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                            {(() => { const Icon = equipmentIcons[item.type] || Droplets; return <Icon className="h-5 w-5 text-primary" />; })()}
                          </div>
                        )}
                        <div className="flex-1">
                          <span className="text-sm font-medium">{item.count}× {item.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Duration info */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>{rentalWeeks} {rentalWeeks === 1 ? "week" : "weken"} ({rentalDays} dagen)</span>
                  {durationDiscount > 0 && (
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">-{durationDiscount}% duurkorting</Badge>
                  )}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-foreground">€{totalPrice.toFixed(0)}</span>
                    <span className="text-muted-foreground text-sm">excl. BTW</span>
                  </div>
                  {discount > 0 && (
                    <p className="text-sm text-primary font-medium">U bespaart €{discount} dankzij duurkorting</p>
                  )}
                </div>

                {/* Extra equipment upsell */}
                <div className="bg-muted/50 rounded-xl p-4 mb-6 space-y-3">
                  <p className="text-sm font-bold">Extra apparatuur toevoegen?</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Extra bouwdroger</p>
                      <p className="text-xs text-muted-foreground">+€12/dag</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setExtraDrogers(Math.max(0, extraDrogers - 1))} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background"><Minus className="h-3 w-3" /></button>
                      <span className="text-sm font-bold w-5 text-center">{extraDrogers}</span>
                      <button type="button" onClick={() => setExtraDrogers(extraDrogers + 1)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-background"><Plus className="h-3 w-3" /></button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Extra ventilator</p>
                      <p className="text-xs text-muted-foreground">+€5/dag</p>
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
                  Direct Boeken <ArrowRight className="h-4 w-4" />
                </Button>

                {/* Trust row */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { icon: Truck, text: "Gratis levering & ophaling" },
                    { icon: Shield, text: "Vochtmeting inbegrepen" },
                    { icon: Clock, text: "Levering binnen 24u" },
                    { icon: MapPin, text: "Heel België" },
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
                  {pkg.equipment.map((item) => (
                    <TabsTrigger
                      key={item.name}
                      value={item.name}
                      className="rounded-full border border-border data-[state=active]:bg-accent data-[state=active]:text-primary-foreground data-[state=active]:border-accent px-5 py-2.5 text-sm font-semibold"
                    >
                      {item.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {pkg.equipment.map((item) => {
                  const img = equipmentImages[item.name];
                  return (
                    <TabsContent key={item.name} value={item.name}>
                      <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left: description */}
                        <div>
                          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                            Slim formaat met robuuste prestaties
                          </h2>
                          <p className="text-muted-foreground mb-6">
                            {item.count}× inbegrepen in uw pakket. Professionele kwaliteit, getest en onderhouden door onze technici.
                          </p>
                          <div className="flex flex-col gap-3">
                            <Button variant="default" className="rounded-full w-fit" onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}>
                              Wat Is Inbegrepen?
                            </Button>
                            <Button variant="outline" className="rounded-full w-fit" onClick={() => navigate("/contact")}>
                              <Phone className="h-4 w-4 mr-2" /> Hulp Nodig? Bel Ons
                            </Button>
                          </div>
                        </div>
                        {/* Right: specs tables */}
                        <div className="space-y-6">
                          {Object.entries(item.specs).length > 0 && (
                            <div>
                              <h3 className="font-bold text-foreground mb-3">Specificaties</h3>
                              <div className="border border-border rounded-xl overflow-hidden">
                                {Object.entries(item.specs).map(([key, val], idx) => (
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
                <h2 className="text-2xl font-black mb-1">Boek nu</h2>
                <p className="text-muted-foreground text-sm mb-6">Wij bevestigen uw boeking binnen 24 uur.</p>

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
                        <span className="font-semibold text-sm capitalize">{type}</span>
                      </button>
                    ))}
                  </div>

                  {customerType === "zakelijk" && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">Bedrijfsnaam *</Label>
                        <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">BTW-nummer</Label>
                        <Input value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} placeholder="BE0123.456.789" />
                      </div>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">Voornaam *</Label>
                      <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">Achternaam *</Label>
                      <Input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">E-mail *</Label>
                      <Input type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} value={email} onChange={(e) => setEmail(maskEmail(e.target.value))} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">Telefoon *</Label>
                      <Input type="tel" inputMode="tel" autoComplete="tel" placeholder="0470 00 00 00" value={phone} onChange={(e) => setPhone(maskPhone(e.target.value))} required />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm font-semibold">Straat + huisnummer *</Label>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">Postcode</Label>
                      <Input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">Gemeente</Label>
                      <Input value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm font-semibold">Opmerkingen (optioneel)</Label>
                    <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Bijv. toegangsinformatie, specifieke wensen..." rows={3} />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-bold text-base rounded-xl" disabled={isSubmitting}>
                    {isSubmitting ? "Bezig met verzenden..." : `Boek Nu — €${totalPrice.toFixed(0)} excl. BTW`}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">Geen betaling vereist. Wij bevestigen binnen 24 uur.</p>
                </form>
              </div>

              {/* Sticky sidebar summary */}
              <div className="lg:sticky lg:top-24 space-y-5">
                {/* Price recap */}
                <div className="bg-accent text-primary-foreground rounded-2xl p-5">
                  <h3 className="font-bold text-sm mb-3 opacity-80">Prijsoverzicht</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="opacity-80">Pakket ({rentalDays}d)</span>
                      <span>€{baseTotal.toFixed(0)}</span>
                    </div>
                    {extraEquipmentTotal > 0 && (
                      <div className="flex justify-between">
                        <span className="opacity-80">Extra apparatuur</span>
                        <span>€{extraEquipmentTotal.toFixed(0)}</span>
                      </div>
                    )}
                    {discount > 0 && (
                      <div className="flex justify-between text-primary-foreground/80">
                        <span>Duurkorting (-{durationDiscount}%)</span>
                        <span>-€{discount}</span>
                      </div>
                    )}
                    <div className="border-t border-primary-foreground/20 pt-2 flex justify-between text-lg font-black">
                      <span>Totaal</span>
                      <span>€{totalPrice.toFixed(0)}</span>
                    </div>
                    <p className="text-xs opacity-60">excl. 21% BTW</p>
                  </div>
                </div>

                {/* Social proof */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                    <span className="text-sm font-bold ml-1">4.9/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-2">"Snelle levering, alles perfect geïnstalleerd."</p>
                  <p className="text-xs font-semibold">— Pieter D.</p>
                  <div className="border-t border-border mt-4 pt-4 space-y-2">
                    {["Gratis levering & ophaling", "500+ projecten afgerond", "Vochtmeting inbegrepen", "Binnen 24u antwoord"].map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="ghost" onClick={() => navigate("/levering")} className="w-full gap-2 text-sm">
                  <ArrowLeft className="h-4 w-4" /> Opnieuw configureren
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-3 flex items-center justify-between lg:hidden z-50">
          <div>
            <div className="text-lg font-black text-foreground">€{totalPrice.toFixed(0)}</div>
            <div className="text-xs text-muted-foreground">{rentalWeeks}w • {pkg.equipment.reduce((s, e) => s + e.count, 0) + extraDrogers + extraVentilatoren} apparaten</div>
          </div>
          <Button size="sm" className="rounded-xl font-bold gap-1" onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}>
            Boek nu <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackageDetailPage;
