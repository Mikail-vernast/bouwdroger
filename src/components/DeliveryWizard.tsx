import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Droplets,
  Waves,
  Home,
  Flame,
  Building2,
  Building,
  Castle,
  Hotel,
  Thermometer,
  ThermometerSun,
  Check,
  CheckCircle2,
} from "lucide-react";
import technicianImg from "@/assets/technician.png";
import { Button } from "@/components/ui/button";
import {
  type BuildingSize,
  type DryingType,
  type PlasterThickness,
  type ScreedThickness,
  type HeatingOption,
  getPackageByAnswers,
} from "@/data/packages";

type BuildingType = "vrijstaand" | "halfopen" | "rijwoning" | "appartement";

interface WizardAnswers {
  buildingType: BuildingType | null;
  size: BuildingSize | null;
  dryingType: DryingType | null;
  plasterThickness: PlasterThickness | null;
  screedThickness: ScreedThickness | null;
  heating: HeatingOption | null;
}

const buildingTypes: {
  value: BuildingType;
  label: string;
  icon: typeof Home;
  desc: string;
  typicalSize: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    value: "vrijstaand",
    label: "Vrijstaande woning",
    icon: Castle,
    desc: "Alleenstaand huis met tuin",
    typicalSize: "180 – 300 m²",
    image: "/products/pakket-1.webp",
    imageAlt: "Vernast droogpakket voor een vrijstaande woning: bouwdroger, ventilator en kachel",
  },
  {
    value: "halfopen",
    label: "Halfopen bebouwing",
    icon: Building,
    desc: "Woning met één gemeenschappelijke muur",
    typicalSize: "140 – 220 m²",
    image: "/products/pakket-2.webp",
    imageAlt: "Vernast droogpakket voor een halfopen bebouwing: bouwdrogers, ventilatoren en kachel",
  },
  {
    value: "rijwoning",
    label: "Rijwoning",
    icon: Hotel,
    desc: "Tussengelegen woning in een rij",
    typicalSize: "100 – 180 m²",
    image: "/products/pakket-3.webp",
    imageAlt: "Vernast droogpakket voor een rijwoning: bouwdroger, ventilatoren en kachel",
  },
  {
    value: "appartement",
    label: "Appartement",
    icon: Building2,
    desc: "Flat of studio in een gebouw",
    typicalSize: "60 – 140 m²",
    image: "/products/pakket-4.webp",
    imageAlt: "Vernast droogpakket voor een appartement: bouwdroger, ventilator en kachel",
  },
];

const sizeOptions: { value: BuildingSize; label: string; sqm: number }[] = [
  { value: "100", label: "Tot 100 m²", sqm: 100 },
  { value: "140", label: "Tot 140 m²", sqm: 140 },
  { value: "180", label: "Tot 180 m²", sqm: 180 },
  { value: "220", label: "Tot 220 m²", sqm: 220 },
  { value: "260", label: "Tot 260 m²", sqm: 260 },
  { value: "300", label: "Tot 300 m²", sqm: 300 },
];

const dryingOptions: {
  value: DryingType;
  label: string;
  icon: typeof Droplets;
  desc: string;
  emoji: string;
}[] = [
  {
    value: "pleisterwerk",
    label: "Pleisterwerk",
    icon: Droplets,
    desc: "Enkel pleisterwerk drogen",
    emoji: "💧",
  },
  {
    value: "chape",
    label: "Chape",
    icon: Waves,
    desc: "Enkel chape drogen",
    emoji: "🧱",
  },
  {
    value: "beide",
    label: "Pleisterwerk & Chape",
    icon: Home,
    desc: "Beide tegelijk drogen",
    emoji: "🏠",
  },
  {
    value: "waterschade",
    label: "Waterschade",
    icon: Flame,
    desc: "Urgent waterschade herstelling",
    emoji: "🚨",
  },
];

const plasterOptions: { value: PlasterThickness; label: string }[] = [
  { value: "1", label: "1 cm" },
  { value: "2", label: "2 cm" },
  { value: "3", label: "3 cm" },
];

const screedOptions: { value: ScreedThickness; label: string }[] = [
  { value: "5", label: "5 cm" },
  { value: "6", label: "6 cm" },
  { value: "7", label: "7 cm" },
];

const uspItems = [
  "Gratis levering bij bestelling",
  "Transparante prijzen zonder verrassingen",
  "Advies op maat door een bouwkundige expert",
  "Energiezuinige ECO-toestellen",
];

const slideVariants = {
  enter: (direction: number) => ({ y: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => ({ y: direction > 0 ? -60 : 60, opacity: 0 }),
};

const DeliveryWizard = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<WizardAnswers>({
    buildingType: null,
    size: null,
    dryingType: null,
    plasterThickness: null,
    screedThickness: null,
    heating: null,
  });

  const needsPlaster =
    answers.dryingType === "pleisterwerk" || answers.dryingType === "beide";
  const needsScreed =
    answers.dryingType === "chape" || answers.dryingType === "beide";
  const isWaterschade = answers.dryingType === "waterschade";

  const getSteps = useCallback(() => {
    const s = ["buildingType", "size", "dryingType"];
    if (needsPlaster) s.push("plasterThickness");
    if (needsScreed) s.push("screedThickness");
    if (!isWaterschade) s.push("heating");
    return s;
  }, [needsPlaster, needsScreed, isWaterschade]);

  const steps = getSteps();
  const totalSteps = steps.length;
  const currentStepKey = steps[step];
  const progress = ((step + 1) / totalSteps) * 100;

  const goNext = () => {
    if (step < totalSteps - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  };

  const goPrev = () => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const handleSelectAndNext = <K extends keyof WizardAnswers>(
    key: K,
    value: WizardAnswers[K]
  ) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setDirection(1);
      setStep((s) => Math.min(s + 1, 99));
    }, 300);
  };

  const handleFinish = () => {
    if (!answers.size || !answers.dryingType) return;
    const pkg = getPackageByAnswers(
      answers.size,
      answers.dryingType,
      answers.plasterThickness,
      answers.screedThickness,
      isWaterschade ? "nee" : answers.heating || "ja"
    );
    if (pkg) {
      navigate(`/levering/pakket/${pkg.id}`);
    } else {
      navigate("/contact");
    }
  };

  // Clamp step
  const clampedStep = Math.min(step, totalSteps - 1);
  if (clampedStep !== step) {
    setTimeout(() => setStep(clampedStep), 0);
  }

  const isLastStep = step >= totalSteps - 1;
  const canProceed = (() => {
    switch (currentStepKey) {
      case "buildingType":
        return !!answers.buildingType;
      case "size":
        return !!answers.size;
      case "dryingType":
        return !!answers.dryingType;
      case "plasterThickness":
        return !!answers.plasterThickness;
      case "screedThickness":
        return !!answers.screedThickness;
      case "heating":
        return !!answers.heating;
      default:
        return false;
    }
  })();

  const stepNumber = step + 1;

  return (
    <div className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-accent" />


      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="h-1 bg-primary-foreground/5">
          <div
            className="h-full bg-gradient-to-r from-primary-foreground/60 to-primary-foreground rounded-r-full"
          />
        </div>
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8 max-w-3xl mx-auto w-full">
        <div className="flex items-center gap-3">
          {step > 0 && (
            <button
              onClick={goPrev}
              className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Vorige
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === step
                  ? "w-8 bg-primary-foreground"
                  : i < step
                  ? "w-2 bg-primary-foreground/50"
                  : "w-2 bg-primary-foreground/15"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-10 max-w-3xl mx-auto w-full px-6 md:px-10 pt-8 md:pt-16 pb-20 min-h-[580px] lg:min-h-[680px] flex items-center">
          <div
            key={currentStepKey}
            className="enter-step w-full"
          >
            {/* ────── STEP: Building Type ────── */}
            {currentStepKey === "buildingType" && (
              <div>
                <div>
                  <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
                    <span className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center text-[10px]">{stepNumber}</span>
                    Woningtype
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-2 leading-[1.1]">
                    Wat voor woning heeft u?
                  </h2>
                  <p className="text-primary-foreground/50 mb-6 text-sm max-w-md">
                    Dit helpt ons de juiste droogoplossing samen te stellen.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {buildingTypes.map((bt, i) => {
                    const Icon = bt.icon;
                    const selected = answers.buildingType === bt.value;
                    return (
                      <button
                        key={bt.value}
                        onClick={() =>
                          handleSelectAndNext("buildingType", bt.value)
                        }
                        className={`group relative overflow-hidden rounded-2xl text-left transition-all duration-300 ${
                          selected
                            ? "ring-2 ring-primary-foreground scale-[1.02] shadow-xl"
                            : "hover:scale-[1.02] hover:shadow-lg"
                        }`}
                      >
                        {/* Card background image */}
                        <div className="absolute inset-0">
                          <img src={bt.image} alt={bt.imageAlt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                          <div className={`absolute inset-0 transition-all duration-300 ${
                            selected
                              ? "bg-gradient-to-t from-accent/90 via-accent/60 to-accent/30"
                              : "bg-gradient-to-t from-accent/90 via-accent/50 to-accent/20 group-hover:from-accent/80 group-hover:via-accent/40 group-hover:to-accent/10"
                          }`} />
                        </div>
                        <div className="relative p-5 pt-12 md:pt-16">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                            selected
                              ? "bg-primary-foreground text-accent"
                              : "bg-primary-foreground/15 text-primary-foreground group-hover:bg-primary-foreground/25"
                          }`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="font-bold text-primary-foreground text-base md:text-lg">
                            {bt.label}
                          </div>
                          <div className="text-xs text-primary-foreground/50 mt-0.5">
                            {bt.typicalSize}
                          </div>
                          {selected && (
                            <div
                              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary-foreground flex items-center justify-center"
                            >
                              <Check className="h-4 w-4 text-accent" />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ────── STEP: Size ────── */}
            {currentStepKey === "size" && (
              <div>
                <div>
                  <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                    <span className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center text-[10px]">{stepNumber}</span>
                    Oppervlakte
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3 leading-[1.1]">
                    Hoeveel m² heeft<br />uw woning?
                  </h2>
                  <p className="text-primary-foreground/50 mb-8 text-base md:text-lg max-w-md">
                    Selecteer de oppervlakte — we berekenen direct uw pakket.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 max-w-md">
                  {sizeOptions.map((opt, i) => {
                    const selected = answers.size === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleSelectAndNext("size", opt.value)}
                        className={`relative rounded-2xl py-5 px-3 text-center transition-all duration-300 ${
                          selected
                            ? "bg-primary-foreground text-accent shadow-lg scale-[1.05]"
                            : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-[1.02]"
                        }`}
                      >
                        <span className={`text-2xl md:text-3xl font-black block ${selected ? "text-accent" : ""}`}>
                          {opt.sqm}
                        </span>
                        <span className={`text-xs font-semibold block mt-1 ${selected ? "text-accent/70" : "text-primary-foreground/40"}`}>
                          m²
                        </span>
                        {selected && (
                          <div
                            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center border-2 border-primary-foreground"
                          >
                            <Check className="h-3 w-3 text-primary-foreground" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ────── STEP: Drying type ────── */}
            {currentStepKey === "dryingType" && (
              <div>
                <div>
                  <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                    <span className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center text-[10px]">{stepNumber}</span>
                    Type droging
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3 leading-[1.1]">
                    Wat wilt u drogen?
                  </h2>
                  <p className="text-primary-foreground/50 mb-8 text-base md:text-lg max-w-md">
                    Kies het type droging dat u nodig heeft.
                  </p>
                </div>

                <div className="space-y-3 max-w-md">
                  {dryingOptions.map((opt, i) => {
                    const Icon = opt.icon;
                    const selected = answers.dryingType === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setAnswers((prev) => ({
                            ...prev,
                            dryingType: opt.value,
                            plasterThickness: null,
                            screedThickness: null,
                            heating: null,
                          }));
                          setTimeout(() => {
                            setDirection(1);
                            setStep((s) => s + 1);
                          }, 300);
                        }}
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                          selected
                            ? "bg-primary-foreground text-accent shadow-lg scale-[1.02]"
                            : "bg-primary-foreground/8 hover:bg-primary-foreground/15 text-primary-foreground"
                        }`}
                      >
                        <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <div className={`font-bold text-base ${selected ? "text-accent" : ""}`}>
                            {opt.label}
                          </div>
                          <div className={`text-xs mt-0.5 ${selected ? "text-accent/60" : "text-primary-foreground/40"}`}>
                            {opt.desc}
                          </div>
                        </div>
                        <ArrowRight className={`h-4 w-4 flex-shrink-0 transition-all ${
                          selected ? "text-accent/60" : "text-primary-foreground/20 group-hover:text-primary-foreground/40"
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ────── STEP: Plaster thickness ────── */}
            {currentStepKey === "plasterThickness" && (
              <div>
                <div>
                  <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                    <span className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center text-[10px]">{stepNumber}</span>
                    Pleisterwerk
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3 leading-[1.1]">
                    Hoe dik is uw<br />pleisterwerk?
                  </h2>
                  <p className="text-primary-foreground/50 mb-10 text-base md:text-lg max-w-md">
                    De dikte bepaalt de hoeveelheid apparatuur die nodig is.
                  </p>
                </div>

                <div className="flex gap-4 max-w-sm">
                  {plasterOptions.map((opt, i) => {
                    const selected = answers.plasterThickness === opt.value;
                    const height = 80 + parseInt(opt.value) * 30;
                    return (
                      <button
                        key={opt.value}
                        onClick={() =>
                          handleSelectAndNext("plasterThickness", opt.value)
                        }
                        className="flex-1 flex flex-col items-center gap-3 group"
                      >
                        <div
                          className={`w-full rounded-2xl transition-all duration-300 relative overflow-hidden ${
                            selected
                              ? "bg-primary-foreground shadow-lg"
                              : "bg-primary-foreground/10 group-hover:bg-primary-foreground/20"
                          }`}
                        >
                          {selected && (
                            <div
                              className="absolute top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent flex items-center justify-center"
                            >
                              <Check className="h-3 w-3 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                        <div className={`text-center transition-colors ${
                          selected ? "text-primary-foreground" : "text-primary-foreground/40 group-hover:text-primary-foreground/70"
                        }`}>
                          <span className="text-3xl font-black block">{opt.value}</span>
                          <span className="text-xs font-bold uppercase tracking-wider">cm</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ────── STEP: Screed thickness ────── */}
            {currentStepKey === "screedThickness" && (
              <div>
                <div>
                  <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                    <span className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center text-[10px]">{stepNumber}</span>
                    Chape
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3 leading-[1.1]">
                    Hoe dik is uw chape?
                  </h2>
                  <p className="text-primary-foreground/50 mb-10 text-base md:text-lg max-w-md">
                    Dikkere chape vereist meer droogcapaciteit.
                  </p>
                </div>

                <div className="flex gap-4 max-w-sm">
                  {screedOptions.map((opt, i) => {
                    const selected = answers.screedThickness === opt.value;
                    const height = 60 + parseInt(opt.value) * 20;
                    return (
                      <button
                        key={opt.value}
                        onClick={() =>
                          handleSelectAndNext("screedThickness", opt.value)
                        }
                        className="flex-1 flex flex-col items-center gap-3 group"
                      >
                        <div
                          className={`w-full rounded-2xl transition-all duration-300 relative overflow-hidden ${
                            selected
                              ? "bg-primary-foreground shadow-lg"
                              : "bg-primary-foreground/10 group-hover:bg-primary-foreground/20"
                          }`}
                        >
                          {selected && (
                            <div
                              className="absolute top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent flex items-center justify-center"
                            >
                              <Check className="h-3 w-3 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                        <div className={`text-center transition-colors ${
                          selected ? "text-primary-foreground" : "text-primary-foreground/40 group-hover:text-primary-foreground/70"
                        }`}>
                          <span className="text-3xl font-black block">{opt.value}</span>
                          <span className="text-xs font-bold uppercase tracking-wider">cm</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ────── STEP: Heating ────── */}
            {currentStepKey === "heating" && (
              <div>
                <div>
                  <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                    <span className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center text-[10px]">{stepNumber}</span>
                    Laatste vraag
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3 leading-[1.1]">
                    Zorgt u zelf voor<br />verwarming?
                  </h2>
                  <p className="text-primary-foreground/50 mb-10 text-base md:text-lg max-w-md">
                    Indien niet, voorzien wij elektrische kachels bij uw pakket.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <button
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, heating: "ja" }));
                      setTimeout(handleFinish, 400);
                    }}
                    className={`relative rounded-2xl p-6 text-center transition-all duration-300 overflow-hidden ${
                      answers.heating === "ja"
                        ? "bg-primary-foreground text-accent shadow-lg scale-[1.02]"
                        : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                    }`}
                  >
                    <ThermometerSun className={`h-10 w-10 mx-auto mb-3 ${answers.heating === "ja" ? "text-accent" : "text-primary-foreground/60"}`} />
                    <div className="font-bold text-lg">Ja</div>
                    <div className={`text-xs mt-1 ${answers.heating === "ja" ? "text-accent/60" : "text-primary-foreground/40"}`}>
                      Ik heb eigen verwarming
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, heating: "nee" }));
                      setTimeout(() => {
                        if (!answers.size || !answers.dryingType) return;
                        const pkg = getPackageByAnswers(
                          answers.size,
                          answers.dryingType,
                          answers.plasterThickness,
                          answers.screedThickness,
                          "nee"
                        );
                        if (pkg) navigate(`/levering/pakket/${pkg.id}`);
                        else navigate("/contact");
                      }, 400);
                    }}
                    className={`relative rounded-2xl p-6 text-center transition-all duration-300 overflow-hidden ${
                      answers.heating === "nee"
                        ? "bg-primary-foreground text-accent shadow-lg scale-[1.02]"
                        : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                    }`}
                  >
                    <Thermometer className={`h-10 w-10 mx-auto mb-3 ${answers.heating === "nee" ? "text-accent" : "text-primary-foreground/60"}`} />
                    <div className="font-bold text-lg">Nee</div>
                    <div className={`text-xs mt-1 ${answers.heating === "nee" ? "text-accent/60" : "text-primary-foreground/40"}`}>
                      Voorzie kachels a.u.b.
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        {canProceed && !isLastStep && (
          <div>
            <Button
              onClick={goNext}
              className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 rounded-full px-8 font-bold gap-2 shadow-xl h-12"
              size="lg"
            >
              Volgende <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
        {isLastStep && canProceed && (
          <div>
            <Button
              onClick={handleFinish}
              className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 rounded-full px-8 font-bold gap-2 shadow-xl h-12"
              size="lg"
            >
              Bekijk Mijn Pakket <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryWizard;
