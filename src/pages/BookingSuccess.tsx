import { useLocation, Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import V3Footer from "@/components/home-v3/V3Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";

const COPY = {
  nl: {
    bedankt: "Bedankt",
    intro: "Uw boekingsaanvraag is succesvol ontvangen. Wij nemen zo snel mogelijk contact met u op.",
    nummer: "Uw boekingsnummer",
    bevestiging: "Een bevestiging wordt verzonden naar",
    watNu: "Wat gebeurt er nu?",
    stappen: [
      "Wij bekijken uw aanvraag en checken beschikbaarheid",
      "U ontvangt een bevestiging met definitieve prijs en leverdatum",
      "Wij leveren op de afgesproken datum met gratis vochtmeting",
    ],
    home: "Terug naar home",
    bel: "Bel ons",
  },
  fr: {
    bedankt: "Merci",
    intro: "Votre demande de réservation a bien été reçue. Nous vous contactons dans les plus brefs délais.",
    nummer: "Votre numéro de réservation",
    bevestiging: "Une confirmation sera envoyée à",
    watNu: "Et maintenant ?",
    stappen: [
      "Nous examinons votre demande et vérifions la disponibilité",
      "Vous recevez une confirmation avec le prix définitif et la date de livraison",
      "Nous livrons à la date convenue, mesure d'humidité gratuite comprise",
    ],
    home: "Retour à l'accueil",
    bel: "Appelez-nous",
  },
} satisfies Copy<{
  bedankt: string;
  intro: string;
  nummer: string;
  bevestiging: string;
  watNu: string;
  stappen: string[];
  home: string;
  bel: string;
}>;

const BookingSuccess = () => {
  const location = useLocation();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const state = location.state as {
    bookingNumber?: string;
    firstName?: string;
    email?: string;
  } | null;

  return (
    <div className="min-h-screen bg-background">
      <PageMeta {...useSeo("bookingSuccess")} />
      <TopBar />
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4">
            {t.bedankt}{state?.firstName ? `, ${state.firstName}` : ""}!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t.intro}
          </p>

          {state?.bookingNumber && (
            <Card className="mb-8">
              <CardContent className="py-6 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t.nummer}</p>
                  <p className="text-2xl font-black text-primary">{state.bookingNumber}</p>
                </div>
                {state.email && (
                  <p className="text-sm text-muted-foreground">
                    {t.bevestiging} <strong>{state.email}</strong>
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          <Card className="mb-8 text-left">
            <CardContent className="py-6">
              <h3 className="font-bold mb-4">{t.watNu}</h3>
              <div className="space-y-4">
                {t.stappen.map((text, i) => ({ step: String(i + 1), text })).map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <p className="text-sm text-foreground pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="font-bold gap-2">
              <Link to={lp("/")}>
                {t.home} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="tel:+3236899065">
                <Phone className="h-4 w-4" /> {t.bel}
              </a>
            </Button>
          </div>
        </div>
      </main>
      <V3Footer />
    </div>
  );
};

export default BookingSuccess;
