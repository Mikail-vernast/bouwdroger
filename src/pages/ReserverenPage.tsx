import { useState } from "react";
import PageMeta from "@/components/PageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  Check,
  CheckCircle2,
  Phone,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";

const situations = [
  { id: "nieuwbouw", icon: "🏗️", title: "Nieuwbouw / chape drogen", badge: null },
  { id: "waterschade", icon: "🌊", title: "Waterschade / noodgeval", badge: "Spoed beschikbaar" },
  { id: "renovatie", icon: "🔨", title: "Renovatie / vochtige kelder", badge: null },
];

const machines = [
  { id: "DF 200", volume: "Tot 200 m³", price: 0, badge: null, highlight: false },
  { id: "DF 400", volume: "Tot 400 m³", price: 0, badge: "Meest gekozen", highlight: true },
  { id: "DF 800", volume: "Tot 800 m³", price: 0, badge: null, highlight: false },
];

const durations = [
  { value: "1 week", label: "1 week" },
  { value: "2 weken", label: "2 weken" },
  { value: "3 weken", label: "3 weken" },
  { value: "4 weken", label: "4 weken" },
  { value: "langer", label: "Langer (bel ons)" },
];

const stepLabels = ["Situatie & machine", "Leveringsgegevens", "Bevestiging"];

const ReserverenPage = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Step 1 — pre-select DF 400 by default, and read URL params
  const [situatie, setSituatie] = useState(searchParams.get("situatie") || "");
  const [machine, setMachine] = useState(searchParams.get("machine") || "DF 400");
  const [duur, setDuur] = useState("");

  // Step 2
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [adres, setAdres] = useState("");
  const [gemeente, setGemeente] = useState("");
  const [postcode, setPostcode] = useState("");
  const [leveringsdatum, setLeveringsdatum] = useState<Date>();
  const [bericht, setBericht] = useState("");

  const step1Valid = situatie && machine && duur;
  const step2Valid = voornaam && achternaam && telefoon && email && adres && gemeente && postcode && leveringsdatum;

  const handleSubmit = async () => {
    if (!step2Valid || !step1Valid) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("reserveringen" as any).insert({
        situatie,
        machine,
        duur,
        voornaam,
        achternaam,
        telefoon,
        email,
        adres,
        gemeente,
        postcode,
        leveringsdatum: format(leveringsdatum!, "yyyy-MM-dd"),
        bericht: bericht || null,
      } as any);

      if (error) {
        toast({ title: "Er ging iets mis", description: "Controleer uw verbinding en probeer het opnieuw.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }
      setIsDone(true);
    } catch (err) {
      toast({ title: "Er ging iets mis", description: "Controleer uw internetverbinding en probeer het opnieuw.", variant: "destructive" });
      setIsSubmitting(false);
    }
  };

  const OrderSummary = ({ compact = false }: { compact?: boolean }) => (
    <div className={cn("bg-card border border-border rounded-2xl p-5 space-y-3", compact && "text-sm")}>
      <h3 className="font-bold text-foreground">Uw reservering</h3>
      <div className="space-y-2 text-sm">
        {machine && <div className="flex justify-between"><span className="text-muted-foreground">Machine</span><span className="font-semibold">{machine}</span></div>}
        {situatie && <div className="flex justify-between"><span className="text-muted-foreground">Situatie</span><span className="font-semibold capitalize">{situations.find(s => s.id === situatie)?.title}</span></div>}
        {duur && <div className="flex justify-between"><span className="text-muted-foreground">Duur</span><span className="font-semibold">{duur}</span></div>}
        {leveringsdatum && <div className="flex justify-between"><span className="text-muted-foreground">Levering</span><span className="font-semibold">{format(leveringsdatum, "d MMMM yyyy", { locale: nl })}</span></div>}
        {(voornaam || achternaam) && <div className="flex justify-between"><span className="text-muted-foreground">Naam</span><span className="font-semibold">{voornaam} {achternaam}</span></div>}
        {adres && <div className="flex justify-between"><span className="text-muted-foreground">Adres</span><span className="font-semibold">{adres}, {postcode} {gemeente}</span></div>}
      </div>
      <div className="border-t border-border pt-3 space-y-1.5">
        <div className="flex justify-between font-bold"><span>Prijs</span><span>€XX excl. BTW</span></div>
        <p className="text-xs text-muted-foreground">€XX incl. 21% BTW</p>
      </div>
      <div className="border-t border-border pt-3 space-y-1.5">
        {["Levering & ophaling", "Gratis vochtmeting", "Gratis verlengsnoer 10m", "Uitleg bij plaatsing"].map(t => (
          <div key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
            <Check className="h-3 w-3 text-primary flex-shrink-0" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (isDone) {
    return (
      <div className="min-h-screen bg-background">
        <PageMeta title="Reserveer uw bouwdroger online | Vernast" description="Reserveer uw bouwdroger in 3 stappen. Kies machine, vul uw gegevens in en bevestig. Levering binnen 24 uur." />
        <Navbar />
        <main className="container mx-auto px-4 py-20 text-center max-w-lg">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div className="w-20 h-20 bg-[hsl(142,76%,96%)] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-[hsl(142,71%,35%)]" />
            </div>
            <h1 className="text-3xl font-black text-foreground mb-3">Bedankt!</h1>
            <p className="text-muted-foreground text-lg mb-6">Wij contacteren u zo snel mogelijk om de levering te bevestigen.</p>
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <p className="text-sm text-muted-foreground">Bel ons als het urgent is:</p>
              <a href="tel:0499000000" className="text-lg font-bold text-primary hover:underline">0499 XX XX XX</a>
            </div>
            <OrderSummary />
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageMeta title="Reserveer uw bouwdroger online | Vernast" description="Reserveer uw bouwdroger in 3 stappen. Kies machine, vul uw gegevens in en bevestig. Levering binnen 24 uur." />
      <Navbar />
      <main className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="flex items-center justify-center gap-3 mb-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                  s < step ? "bg-primary text-primary-foreground" :
                  s === step ? "bg-primary text-primary-foreground ring-4 ring-primary/20" :
                  "border-2 border-border text-muted-foreground"
                )}>
                  {s < step ? <Check className="h-4 w-4" /> : s}
                </div>
                {s < 3 && <div className={cn("w-12 h-0.5", s < step ? "bg-primary" : "bg-border")} />}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mb-8">Stap {step} van 3 — {stepLabels[step - 1]}</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                    <div>
                      <h2 className="text-xl font-black mb-1">Wat is uw situatie?</h2>
                      <p className="text-sm text-muted-foreground mb-4">Selecteer wat het beste past.</p>
                      <div className="grid gap-3">
                        {situations.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setSituatie(s.id)}
                            className={cn(
                              "relative flex items-center gap-4 p-4 min-h-[56px] rounded-xl border-2 text-left transition-all w-full",
                              situatie === s.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                            )}
                          >
                            <span className="text-2xl">{s.icon}</span>
                            <span className="font-semibold text-foreground">{s.title}</span>
                            {s.badge && <Badge className="absolute top-3 right-3 bg-[hsl(0,72%,51%)] text-white text-xs">{s.badge}</Badge>}
                          </button>
                        ))}
                      </div>
                    </div>

                    {situatie && (
                      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="text-xl font-black mb-1">Welke machine?</h2>
                        <p className="text-sm text-muted-foreground mb-4">Niet zeker? Bel ons voor advies.</p>
                        <div className="grid gap-3">
                          {machines.map((m) => (
                            <button
                              key={m.id}
                              type="button"
                              onClick={() => setMachine(m.id)}
                              className={cn(
                                "relative flex items-center gap-4 p-4 min-h-[56px] rounded-xl border-2 text-left transition-all w-full",
                                machine === m.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30",
                                m.highlight && machine !== m.id && "border-primary/30"
                              )}
                            >
                              <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                                <Zap className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <span className="font-bold text-foreground">{m.id}</span>
                                <span className="text-sm text-muted-foreground ml-2">{m.volume}</span>
                              </div>
                              <span className="font-bold text-foreground">€XX/week</span>
                              {m.badge && <Badge className="absolute -top-2 right-4 bg-primary text-primary-foreground text-xs">{m.badge}</Badge>}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {machine && (
                      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="text-xl font-black mb-1">Hoe lang?</h2>
                        <Select value={duur} onValueChange={setDuur}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Kies huurperiode" />
                          </SelectTrigger>
                          <SelectContent>
                            {durations.map((d) => (
                              <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>
                    )}

                    {step1Valid && (
                      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="bg-muted/50 rounded-xl p-4 text-sm">
                        <p className="font-bold text-foreground mb-1">Geselecteerd: {machine} — {duur} — €XX excl. BTW</p>
                        <p className="text-muted-foreground">Levering & ophaling: Inbegrepen | Vochtmeting: Gratis</p>
                      </motion.div>
                    )}

                    <Button size="lg" className="w-full rounded-xl font-bold gap-2" disabled={!step1Valid} onClick={() => setStep(2)}>
                      Volgende stap <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                    <h2 className="text-xl font-black mb-1">Uw leveringsgegevens</h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">Voornaam *</Label>
                        <Input value={voornaam} onChange={(e) => setVoornaam(e.target.value)} required />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">Achternaam *</Label>
                        <Input value={achternaam} onChange={(e) => setAchternaam(e.target.value)} required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">Telefoonnummer *</Label>
                        <Input value={telefoon} onChange={(e) => setTelefoon(e.target.value)} placeholder="04XX XX XX XX" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">E-mailadres *</Label>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">Straat + nummer *</Label>
                      <Input value={adres} onChange={(e) => setAdres(e.target.value)} required />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">Gemeente *</Label>
                        <Input value={gemeente} onChange={(e) => setGemeente(e.target.value)} required />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold">Postcode *</Label>
                        <Input value={postcode} onChange={(e) => setPostcode(e.target.value)} required />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">Gewenste leveringsdatum *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !leveringsdatum && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {leveringsdatum ? format(leveringsdatum, "d MMMM yyyy", { locale: nl }) : "Kies een datum"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={leveringsdatum}
                            onSelect={setLeveringsdatum}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-semibold">Extra bericht (optioneel)</Label>
                      <Textarea value={bericht} onChange={(e) => setBericht(e.target.value)} placeholder="Bijv. toegangsinformatie, specifieke wensen..." rows={3} />
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="lg" className="rounded-xl font-bold gap-2" onClick={() => setStep(1)}>
                        <ArrowLeft className="h-4 w-4" /> Vorige
                      </Button>
                      <Button size="lg" className="flex-1 rounded-xl font-bold gap-2" disabled={!step2Valid} onClick={() => setStep(3)}>
                        Volgende stap <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="text-xl font-black mb-1">Bevestig uw reservering</h2>

                    <OrderSummary />

                    <div className="bg-[hsl(210,100%,96%)] border border-[hsl(210,80%,85%)] rounded-xl p-4 text-sm text-foreground">
                      <p>📧 U ontvangt een bevestigingsmail. Wij nemen contact op om de levering te bevestigen.</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>U sluit zich aan bij <strong className="text-foreground">2.400+ tevreden klanten</strong></span>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="lg" className="rounded-xl font-bold gap-2" onClick={() => setStep(2)}>
                        <ArrowLeft className="h-4 w-4" /> Pas aan
                      </Button>
                      <Button size="lg" className="flex-1 rounded-xl font-bold gap-2" disabled={isSubmitting} onClick={handleSubmit}>
                        {isSubmitting ? "Bezig..." : "✓ Reservering bevestigen"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar — visible on step 2 and 3 desktop */}
            {step >= 2 && (
              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <OrderSummary compact />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReserverenPage;
