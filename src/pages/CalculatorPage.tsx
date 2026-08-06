import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { calculatePackages, getRoomTypeLabel, type RoomType, type PackageResult } from "@/lib/pricing";
import PageMeta from "@/components/PageMeta";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const SIZE_OPTIONS = [
  { label: "Tot 50 m²", value: 50 },
  { label: "51 – 100 m²", value: 100 },
  { label: "101 – 150 m²", value: 150 },
  { label: "151 – 200 m²", value: 200 },
  { label: "201 – 250 m²", value: 250 },
  { label: "251 – 300 m²", value: 300 },
  { label: "301 – 400 m²", value: 400 },
  { label: "401 – 500 m²", value: 500 },
  { label: "Meer dan 500 m²", value: 600 },
];

/**
 * Vragen die bezoekers stellen vóór ze de rekenhulp vertrouwen. Ze staan
 * zichtbaar onderaan de pagina én als FAQ-schema in de head — dat laatste mag
 * alleen zolang beide uit deze ene lijst komen.
 */
const CALCULATOR_FAQ = [
  {
    question: "Hoeveel liter vochtafvoer heb ik per dag nodig?",
    answer:
      "Voor een gewone nieuwbouwwoning rekenen wij met ongeveer 0,5 liter per m² per dag tijdens de eerste week, daarna minder. Een woning van 150 m² zit dus rond de 70 tot 90 liter per dag — dat is één toestel van 90 l/dag of twee kleinere. Bij waterschade ligt dat de eerste dagen twee tot drie keer hoger.",
  },
  {
    question: "Hoe lang moet een bouwdroger blijven staan?",
    answer:
      "Pleisterwerk is doorgaans na 7 tot 10 dagen droog, een chape van 6 cm na 2 tot 3 weken. Wij meten bij levering en bij ophaling het vochtgehalte, zodat u niet op gevoel hoeft te beslissen wanneer het toestel weg mag.",
  },
  {
    question: "Heb ik ook ventilatoren nodig?",
    answer:
      "Meestal wel. Een bouwdroger haalt het vocht uit de lucht, maar hij verplaatst die lucht nauwelijks. Zonder ventilatoren droogt de ruimte rond het toestel en blijft de verste hoek nat. Reken op één ventilator per 40 tot 50 m².",
  },
  {
    question: "Werkt een bouwdroger in een onverwarmde ruimte?",
    answer:
      "Onder 15 °C valt de opbrengst van een condensontvochtiger sterk terug en onder 5 °C stopt hij vrijwel. In een onverwarmde woning of kelder in de winter zet u er daarom een elektrische bouwkachel bij; die zit standaard in onze chape- en waterschadepakketten.",
  },
  {
    question: "Hoeveel stroom verbruikt een bouwdroger?",
    answer:
      "Een toestel van 50 l/dag verbruikt ongeveer 0,7 kW, een van 90 l/dag ongeveer 1,3 kW. Over twee weken continu draaien komt dat neer op grofweg 230 tot 440 kWh. Dat verbruik is voor uw rekening en zit niet in de huurprijs.",
  },
];

const DRYING_OPTIONS: { label: string; value: RoomType }[] = [
  { label: "Pleisterwerk", value: "pleisterwerk" },
  { label: "Chape", value: "chape" },
  { label: "Pleisterwerk & Chape", value: "beide" },
  { label: "Waterschade", value: "waterschade" },
];

// Map sqm + roomType to the correct package image
function getPackageImage(sqm: number, roomType: RoomType): string {
  const needsHeating = roomType === "chape" || roomType === "beide" || roomType === "waterschade";
  const prefix = needsHeating ? "/products/pakket-" : "/products/chape-pakket-";

  if (sqm <= 50) return `${prefix}1.jpg`;
  if (sqm <= 100) return `${prefix}2.jpg`;
  if (sqm <= 150) return `${prefix}3.jpg`;
  if (sqm <= 200) return `${prefix}4.jpg`;
  if (sqm <= 250) return `${prefix}5.jpg`;
  if (sqm <= 300) return `${prefix}6.jpg`;
  if (sqm <= 400) return `${prefix}7.jpg`;
  if (sqm <= 500) return `${prefix}8.jpg`;
  return `${prefix}9.jpg`;
}

const CalculatorPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [sqm, setSqm] = useState<number | null>(null);
  const [roomType, setRoomType] = useState<RoomType | null>(null);

  const handleSizeSelect = (value: number) => {
    setSqm(value);
    setTimeout(() => setStep(1), 300);
  };

  const handleTypeSelect = (value: RoomType) => {
    setRoomType(value);
    setTimeout(() => setStep(2), 300);
  };

  const pkg: PackageResult | null =
    sqm && roomType ? calculatePackages(sqm, roomType, 14)[1] : null; // comfort = recommended

  const handleBook = () => {
    if (!pkg || !sqm || !roomType) return;
    const selection = {
      sqm,
      roomType,
      roomTypeLabel: getRoomTypeLabel(roomType),
      startDate: null,
      endDate: null,
      durationDays: 14,
      package: pkg,
    };
    localStorage.setItem("vernast_booking_selection", JSON.stringify(selection));
    navigate("/booking");
  };

  const slideVariants = {
    enter: { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--primary))] text-white flex flex-col">
      <PageMeta
        {...SEO.calculator}
        jsonLd={[
          faqSchema(CALCULATOR_FAQ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Capaciteit berekenen", path: "/calculator" },
          ]),
        ]}
      />
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <Home className="h-5 w-5" />
          <span className="text-sm font-semibold hidden sm:inline">Vernast</span>
        </button>
        {/* Progress dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i <= step ? "w-8 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
        <div className="w-16" />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          {/* Step 0: Size */}
          {step === 0 && (
            <motion.div
              key="step-size"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="w-full max-w-lg"
            >
              <h1 className="text-2xl md:text-4xl font-black mb-2">
                <span className="text-white/50 mr-2">1</span>
                Hoe groot is uw woning?
              </h1>
              <p className="text-white/60 mb-8">Selecteer de oppervlakte van de te drogen ruimte</p>
              <div className="space-y-3">
                {SIZE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSizeSelect(opt.value)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                      sqm === opt.value
                        ? "bg-white text-primary border-white font-bold"
                        : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Type */}
          {step === 1 && (
            <motion.div
              key="step-type"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="w-full max-w-lg"
            >
              <button onClick={() => setStep(0)} className="flex items-center gap-1 text-white/60 hover:text-white mb-6 text-sm transition-colors">
                <ArrowLeft className="h-4 w-4" /> Terug
              </button>
              <h1 className="text-2xl md:text-4xl font-black mb-2">
                <span className="text-white/50 mr-2">2</span>
                Wat wilt u drogen?
              </h1>
              <p className="text-white/60 mb-8">Kies het type werk dat gedroogd moet worden</p>
              <div className="space-y-3">
                {DRYING_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleTypeSelect(opt.value)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                      roomType === opt.value
                        ? "bg-white text-primary border-white font-bold"
                        : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Result */}
          {step === 2 && pkg && sqm && roomType && (
            <motion.div
              key="step-result"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl"
            >
              <button onClick={() => setStep(1)} className="flex items-center gap-1 text-white/60 hover:text-white mb-6 text-sm transition-colors">
                <ArrowLeft className="h-4 w-4" /> Terug
              </button>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  {/*
                    De bron wisselt met de gekozen oppervlakte, maar het zijn
                    allemaal vierkanten. `aspect-square` houdt de plek dus vrij
                    ongeacht welke er geladen wordt — met vaste width/height
                    zou een enkele afwijkende foto scheefgetrokken worden.
                  */}
                  <img
                    src={getPackageImage(sqm, roomType)}
                    alt="Aanbevolen pakket"
                    className="w-full aspect-square object-cover" loading="lazy" decoding="async" />
                </div>

                {/* Details */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                    <CheckCircle2 className="h-4 w-4" />
                    Aanbevolen pakket
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-2">
                    {pkg.label} Pakket
                  </h2>
                  <p className="text-white/70 mb-6">
                    {getRoomTypeLabel(roomType)} · {sqm} m²
                  </p>

                  <div className="bg-white/10 rounded-xl p-5 space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white/70">Bouwdrogers</span>
                      <span className="font-bold">{pkg.equipment.drogers}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Ventilatoren</span>
                      <span className="font-bold">{pkg.equipment.ventilatoren}x</span>
                    </div>
                    {pkg.equipment.verwarming > 0 && (
                      <div className="flex justify-between">
                        <span className="text-white/70">Verwarming</span>
                        <span className="font-bold">{pkg.equipment.verwarming}x</span>
                      </div>
                    )}
                    <hr className="border-white/20" />
                    <div className="flex justify-between">
                      <span className="text-white/70">Prijs per dag</span>
                      <span className="font-bold">€{pkg.pricePerDay.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Totaal (14 dagen)</span>
                      <span className="font-black text-xl">€{pkg.totalPrice.toFixed(2)}</span>
                    </div>
                    {pkg.discountPercentage > 0 && (
                      <div className="text-sm text-green-300">
                        ✓ {pkg.discountPercentage}% korting inbegrepen
                      </div>
                    )}
                    <div className="text-sm text-green-300">
                      ✓ Gratis levering & ophaling
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 font-bold flex-1"
                      onClick={handleBook}
                    >
                      Direct boeken <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 font-bold"
                      onClick={() => navigate("/calculator/detail")}
                    >
                      Meer opties
                    </Button>
                  </div>
                  <p className="text-xs text-white/50 mt-4">
                    Alle prijzen excl. 21% BTW. Gratis vochtmeting bij elke levering.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*
        De rekenhulp zelf toont per stap maar één vraag, dus een crawler ziet
        vrijwel geen tekst. Deze uitleg staat er voor de bezoeker die eerst wil
        begrijpen waarop de berekening stoelt — en zorgt er meteen voor dat de
        pagina genoeg inhoud heeft om op "welke bouwdroger heb ik nodig"
        gevonden en geciteerd te worden. Dezelfde vragen en antwoorden zitten
        in de FAQ-schema hierboven; die twee moeten gelijk blijven lopen.
      */}
      <section className="bg-white text-foreground py-16 px-4">
        <div className="max-w-3xl mx-auto prose-sm">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Waarop is deze berekening gebaseerd?
          </h2>
          <p className="text-muted-foreground mb-8">
            De capaciteit van een bouwdroger wordt uitgedrukt in liter vochtafvoer per dag. Hoeveel
            u nodig heeft hangt af van drie dingen: het volume van de ruimte (oppervlakte maal
            plafondhoogte), hoeveel vocht er in het bouwmateriaal zit, en de temperatuur. Een
            condensontvochtiger werkt namelijk pas goed vanaf zo'n 15 °C — daaronder daalt de
            opbrengst snel, en dan zet u er beter een bouwkachel bij.
          </p>

          {CALCULATOR_FAQ.map((item) => (
            <div key={item.question} className="mb-6">
              <h3 className="font-bold mb-1">{item.question}</h3>
              <p className="text-muted-foreground text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;
