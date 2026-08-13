import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, Warehouse, PhoneCall, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "@/components/ui/sonner";
import PageMeta from "@/components/PageMeta";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { SEO } from "@/data/seo";
import Reveal from "@/components/Reveal";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  /*
    Dit formulier deed lang niets: een seconde wachten, "Bericht verzonden!"
    tonen en de tekst weggooien. Alles wat hier ooit ingevuld is, is verloren.
    Nu gaat het naar `/api/contact`, die er een mail van maakt.
  */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          voornaam: data.get("voornaam"),
          achternaam: data.get("achternaam"),
          email: data.get("email"),
          telefoon: data.get("telefoon"),
          onderwerp: data.get("onderwerp"),
          bericht: data.get("bericht"),
          website: data.get("website"),
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        toast.error(body.error ?? "Versturen lukte niet. Bel ons gerust op 03 689 90 65.");
        return;
      }

      toast.success("Bericht verzonden! Wij nemen zo snel mogelijk contact op.");
      form.reset();
    } catch {
      toast.error("Versturen lukte niet. Bel ons gerust op 03 689 90 65.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <PageMeta
        {...SEO.contact}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-accent overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/products/chape-drogen-3.webp"
              alt="Vernast magazijn"
              className="w-full h-full object-cover opacity-20" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/90 to-accent/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
            <div
              className="max-w-2xl"
            >
              <span className="inline-block bg-accent text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                Contact & Afhalen
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-5">
                Bezoek Ons Magazijn of Neem Contact Op
              </h1>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl">
                Vragen over bouwdroging? Een offerte nodig? Of wil je materiaal afhalen? Wij staan voor je klaar.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+3236899065">
                  <Button className="bg-accent text-primary-foreground hover:bg-accent/90 rounded-full px-6 h-12 text-base font-semibold">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Bel Ons Direct
                  </Button>
                </a>
                <a href="mailto:info@vernast-verhuur.be">
                  <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-6 h-12 text-base font-semibold">
                    <Mail className="mr-2 h-5 w-5" />
                    Stuur een E-mail
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map + Overlay */}
        <section className="relative">
          <div className="w-full h-[400px] md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.8!2d4.3836!3d51.1442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f0a5a5a5a5a5%3A0x0!2sBoomsesteenweg%2012%2C%202630%20Aartselaar!5e0!3m2!1snl!2sbe!4v1700000000000!5m2!1snl!2sbe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vernast magazijn locatie"
            />
          </div>

          {/* Overlay card */}
          <Reveal
            from="up"
            className="container mx-auto px-4"
          >
            <div className="relative -mt-20 md:-mt-24 z-10 max-w-md">
              <div className="bg-card border border-border rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500/10 text-green-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-green-500/20">
                    ✓ Afhalen mogelijk!
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-base">Vernast Magazijn</p>
                    <p className="text-sm text-muted-foreground">Boomsesteenweg 12, Unit 11</p>
                    <p className="text-sm text-muted-foreground">2630 Aartselaar</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact cards + Formulier */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Links: contact info kaarten */}
              <div className="lg:col-span-2 space-y-5">
                {/*
                  Deze kolom had geen eigen kop, waardoor de pagina van de h1
                  meteen naar de h3 van "Afhalen bij ons magazijn" sprong. Dat
                  is precies de kop waar contactgegevens onder horen te hangen —
                  ook voor een crawler die de NAP-gegevens wil terugvinden.
                */}
                <h2 className="text-2xl font-extrabold text-foreground mb-1">Zo bereikt u ons</h2>
                {/* Telefoon */}
                <Reveal
                  as="a"
                  from="left"
                  delay={0}
                  href="tel:+3236899065"
                  className="group block bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Phone className="h-5 w-5 text-accent group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-base">Telefoon</p>
                      <p className="text-sm text-muted-foreground">03 689 90 65</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </Reveal>

                {/* E-mail */}
                <Reveal
                  as="a"
                  from="left"
                  delay={0.1}
                  href="mailto:info@vernast-verhuur.be"
                  className="group block bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Mail className="h-5 w-5 text-accent group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-base">E-mail</p>
                      <p className="text-sm text-muted-foreground">info@vernast-verhuur.be</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </Reveal>

                {/* Afhalen bij magazijn */}
                <Reveal
                  from="left"
                  delay={0.2}
                  className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 text-primary-foreground shadow-lg"
                >
                  <Warehouse className="h-8 w-8 mb-3 opacity-80" />
                  <h3 className="font-bold text-lg mb-2">Afhalen bij ons magazijn</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Haal je materiaal zelf op aan ons magazijn in Antwerpen. Snel, eenvoudig en zonder levertijd.
                  </p>
                  <div className="text-sm font-medium text-primary-foreground/90">
                    Boomsesteenweg 12, Unit 11, 2630 Aartselaar
                  </div>
                </Reveal>

                {/* Openingsuren */}
                <Reveal
                  from="left"
                  delay={0.3}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground">Openingsuren</h3>
                  </div>
                  {/*
                    Dezelfde uren als `openingHoursSpecification` in de JSON-LD
                    van deze pagina. Hier stond "Zaterdag 09:00 - 12:00" naast
                    een schema die enkel Ma-Vr aangeeft — een tegenspraak op
                    dezelfde pagina, en precies het soort verschil waar een
                    lokaal bedrijf zijn openingsuur in het zoekresultaat mee
                    kwijtspeelt.
                  */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-foreground font-medium">Maandag - Vrijdag</span>
                      <span className="text-accent font-bold">08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-foreground font-medium">Zaterdag en zondag</span>
                      <span className="text-muted-foreground">Gesloten</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Rechts: formulier */}
              <Reveal
                from="up"
                className="lg:col-span-3"
              >
                <div className="bg-card rounded-2xl border border-border shadow-lg p-7 md:p-10">
                  <h2 className="text-2xl font-extrabold text-foreground mb-2">Stuur ons een bericht</h2>
                  <p className="text-muted-foreground mb-8">Vul het formulier in en wij reageren binnen 24 uur.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-foreground font-semibold">Voornaam *</Label>
                        <Input id="firstName" name="voornaam" required placeholder="Jan" className="h-12 rounded-xl bg-muted/50 border-border focus:border-accent" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-foreground font-semibold">Achternaam *</Label>
                        <Input id="lastName" name="achternaam" required placeholder="Janssens" className="h-12 rounded-xl bg-muted/50 border-border focus:border-accent" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-semibold">E-mail *</Label>
                        <Input id="email" name="email" type="email" required placeholder="jan@voorbeeld.be" className="h-12 rounded-xl bg-muted/50 border-border focus:border-accent" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-semibold">Telefoon</Label>
                        <Input id="phone" name="telefoon" type="tel" placeholder="+32 ..." className="h-12 rounded-xl bg-muted/50 border-border focus:border-accent" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground font-semibold">Onderwerp *</Label>
                      <Input id="subject" name="onderwerp" required placeholder="Offerte, technische vraag, afhaling ..." className="h-12 rounded-xl bg-muted/50 border-border focus:border-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-semibold">Bericht *</Label>
                      <Textarea id="message" name="bericht" required rows={5} placeholder="Beschrijf uw vraag of project..." className="rounded-xl bg-muted/50 border-border focus:border-accent min-h-[140px]" />
                    </div>
                    {/*
                      Honeypot: onzichtbaar voor een bezoeker, ingevuld door een
                      bot. `tabIndex={-1}` en `autoComplete="off"` houden ook
                      toetsenbordnavigatie en wachtwoordmanagers weg; het veld
                      is `aria-hidden` zodat een schermlezer het niet voorleest.
                    */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="bg-accent text-primary-foreground hover:bg-accent/90 font-bold rounded-full px-10 h-13 text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {loading ? "Verzenden..." : (
                        <>Verstuur Bericht <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA Balk */}
        <section className="bg-gradient-to-r from-accent to-accent/80">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-2">
                  Liever direct bellen?
                </h2>
                <p className="text-primary-foreground/70 text-lg">
                  Ons team staat klaar om al uw vragen te beantwoorden.
                </p>
              </div>
              <a href="tel:+3236899065">
                <Button className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 rounded-full px-8 h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  03 689 90 65
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
