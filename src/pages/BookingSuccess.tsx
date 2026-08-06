import { useLocation, Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageMeta from "@/components/PageMeta";
import { SEO } from "@/data/seo";
import { enterInitial } from "@/lib/firstPaint";

const BookingSuccess = () => {
  const location = useLocation();
  const state = location.state as {
    bookingNumber?: string;
    firstName?: string;
    email?: string;
  } | null;

  return (
    <div className="min-h-screen bg-background">
      <PageMeta {...SEO.bookingSuccess} />
      <TopBar />
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={enterInitial({ opacity: 0, scale: 0.95 })}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Bedankt{state?.firstName ? `, ${state.firstName}` : ""}!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Uw boekingsaanvraag is succesvol ontvangen. Wij nemen zo snel mogelijk contact met u op.
          </p>

          {state?.bookingNumber && (
            <Card className="mb-8">
              <CardContent className="py-6 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Uw boekingsnummer</p>
                  <p className="text-2xl font-black text-primary">{state.bookingNumber}</p>
                </div>
                {state.email && (
                  <p className="text-sm text-muted-foreground">
                    Een bevestiging wordt verzonden naar <strong>{state.email}</strong>
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          <Card className="mb-8 text-left">
            <CardContent className="py-6">
              <h3 className="font-bold mb-4">Wat gebeurt er nu?</h3>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Wij bekijken uw aanvraag en checken beschikbaarheid" },
                  { step: "2", text: "U ontvangt een bevestiging met definitieve prijs en leverdatum" },
                  { step: "3", text: "Wij leveren op de afgesproken datum met gratis vochtmeting" },
                ].map((item) => (
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
              <Link to="/">
                Terug naar home <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="tel:+3236899065">
                <Phone className="h-4 w-4" /> Bel ons
              </a>
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingSuccess;
