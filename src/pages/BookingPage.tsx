import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Droplets, Wind, Flame, ArrowLeft, Building2, User, Check } from "lucide-react";
import { products } from "@/data/products";
import type { PackageResult } from "@/lib/pricing";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import PageMeta from "@/components/PageMeta";
import { SEO } from "@/data/seo";
import { maskEmail, maskPhone } from "@/lib/inputMask";

type CustomerType = "particulier" | "zakelijk";

interface BookingSelection {
  sqm: number;
  roomType: string;
  roomTypeLabel: string;
  startDate: string;
  endDate: string;
  durationDays: number;
  package: PackageResult;
}

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const [selection, setSelection] = useState<BookingSelection | null>(null);
  const [productId, setProductId] = useState<string | null>(null);
  const [customerType, setCustomerType] = useState<CustomerType>("particulier");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  // Zakelijk fields
  const [companyName, setCompanyName] = useState("");
  const [vatNumber, setVatNumber] = useState("");

  useEffect(() => {
    // Check for package selection from configurator
    const stored = localStorage.getItem("vernast_booking_selection");
    if (stored) {
      try {
        setSelection(JSON.parse(stored));
      } catch {
        // Onleesbare selectie uit een oudere versie: weggooien en opnieuw laten kiezen.
        localStorage.removeItem("vernast_booking_selection");
      }
    }

    // Check for direct product booking
    const state = location.state as { productId?: string } | null;
    if (state?.productId) {
      setProductId(state.productId);
    }
  }, [location.state]);

  const selectedProduct = productId ? products.find((p) => p.id === productId) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !firstName || !lastName || !phone || !address) {
      toast({ title: "Vul alle verplichte velden in", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate booking number
      const year = new Date().getFullYear();
      const random = Math.floor(10000 + Math.random() * 90000);
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
        status: "pending" as const,
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
        equipment_verwarming: selection?.package?.equipment?.verwarming || null,
      };

      // Loopt via /api/order zodat de boeking meteen ook in het bouwdrogers-
      // portaal van Vernast belandt. Rechtstreeks naar Supabase schrijven zou
      // die stap overslaan.
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "booking", data: bookingData }),
      });

      if (!response.ok) {
        console.error("Booking error:", await response.text().catch(() => response.status));
        toast({ title: "Er ging iets mis", description: "Probeer het opnieuw of contacteer ons.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }

      // Clear selection
      localStorage.removeItem("vernast_booking_selection");

      // Navigate to success
      navigate("/booking/success", {
        state: {
          bookingNumber,
          firstName,
          email,
          package: selection?.package,
        },
      });
    } catch (err) {
      console.error(err);
      toast({ title: "Er ging iets mis", variant: "destructive" });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <PageMeta {...SEO.booking} />
      <TopBar />
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" /> Terug
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div
            className="lg:col-span-2"
          >
            <h1 className="text-3xl font-black mb-2">Boeking aanvragen</h1>
            <p className="text-muted-foreground mb-8">
              Vul uw gegevens in en wij nemen binnen 24 uur contact met u op.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Customer type toggle */}
              <div className="space-y-3">
                <Label className="font-bold text-base">Type klant</Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCustomerType("particulier")}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      customerType === "particulier"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <User className={`h-5 w-5 ${customerType === "particulier" ? "text-primary" : "text-muted-foreground"}`} />
                    <div className="text-left">
                      <p className="font-semibold text-sm">Particulier</p>
                      <p className="text-xs text-muted-foreground">Privépersoon</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomerType("zakelijk")}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      customerType === "zakelijk"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <Building2 className={`h-5 w-5 ${customerType === "zakelijk" ? "text-primary" : "text-muted-foreground"}`} />
                    <div className="text-left">
                      <p className="font-semibold text-sm">Zakelijk</p>
                      <p className="text-xs text-muted-foreground">Bedrijf / Aannemer</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Company fields */}
              {customerType === "zakelijk" && (
                <div
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="font-semibold">Bedrijfsnaam *</Label>
                    <Input id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vatNumber" className="font-semibold">BTW-nummer</Label>
                    <Input id="vatNumber" value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} placeholder="BE0123.456.789" />
                  </div>
                </div>
              )}

              {/* Personal info */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Contactgegevens</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-semibold">Voornaam *</Label>
                    <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-semibold">Achternaam *</Label>
                    <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">E-mail *</Label>
                    <Input id="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} value={email} onChange={(e) => setEmail(maskEmail(e.target.value))} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-semibold">Telefoon *</Label>
                    <Input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="0470 00 00 00" value={phone} onChange={(e) => setPhone(maskPhone(e.target.value))} required />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Afleveradres</h3>
                <div className="space-y-2">
                  <Label htmlFor="address" className="font-semibold">Straat + huisnummer *</Label>
                  <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="postalCode" className="font-semibold">Postcode</Label>
                    <Input id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="font-semibold">Gemeente</Label>
                    <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="font-semibold">Opmerkingen (optioneel)</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Bijv. toegangsinformatie, specifieke wensen..."
                  rows={3}
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto font-bold text-base" disabled={isSubmitting}>
                {isSubmitting ? "Bezig met verzenden..." : "Boeking aanvragen"}
              </Button>
            </form>
          </div>

          {/* Sidebar summary */}
          <div
            className="lg:sticky lg:top-28"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Uw selectie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selection ? (
                  <>
                    <Badge className="bg-primary text-primary-foreground">
                      {selection.package.label} pakket
                    </Badge>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Oppervlakte</span>
                        <span className="font-semibold">{selection.sqm} m²</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type</span>
                        <span className="font-semibold">{selection.roomTypeLabel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duur</span>
                        <span className="font-semibold">{selection.durationDays} dagen</span>
                      </div>
                    </div>

                    <div className="border-t border-border pt-3 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-primary" />
                        <span>{selection.package.equipment.drogers}x Bouwdroger</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wind className="h-4 w-4 text-primary" />
                        <span>{selection.package.equipment.ventilatoren}x Ventilator</span>
                      </div>
                      {selection.package.equipment.verwarming > 0 && (
                        <div className="flex items-center gap-2">
                          <Flame className="h-4 w-4 text-primary" />
                          <span>{selection.package.equipment.verwarming}x Verwarming</span>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg font-black">
                        <span>Totaal</span>
                        <span className="text-primary">€{selection.package.totalPrice.toFixed(0)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">excl. 21% BTW</p>
                      {selection.package.discount > 0 && (
                        <p className="text-xs text-primary mt-1">
                          U bespaart €{selection.package.discount.toFixed(0)} dankzij duurkorting
                        </p>
                      )}
                    </div>
                  </>
                ) : selectedProduct ? (
                  <>
                    <div className="bg-secondary rounded-lg p-4 flex items-center justify-center">
                      <img src={selectedProduct.image} alt={selectedProduct.imageAlt} className="h-24 object-contain" loading="lazy" decoding="async" />
                    </div>
                    <h3 className="font-bold">{selectedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedProduct.capacity}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-primary">€{selectedProduct.pricePerDay.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground">/dag</span>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Geen pakket geselecteerd. U kunt ook een vrijblijvende offerte aanvragen.
                  </p>
                )}

                <div className="border-t border-border pt-3 space-y-2">
                  {["Gratis vochtmeting bij levering", "Gratis levering vanaf 2 weken", "Binnen 24u antwoord"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <V3Footer />
    </div>
  );
};

export default BookingPage;
