import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Package,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  type BuildingSize,
  type DryingType,
  type PlasterThickness,
  type ScreedThickness,
  type HeatingOption,
  getPackageByAnswers,
} from "@/data/packages";
import { enterInitial } from "@/lib/firstPaint";

type BuildingType = "vrijstaand" | "halfopen" | "rijwoning" | "appartement";
type ServiceType = "afhalen" | "levering" | "allin";

interface WizardAnswers {
  buildingType: BuildingType | null;
  size: BuildingSize | null;
  dryingType: DryingType | null;
  plasterThickness: PlasterThickness | null;
  screedThickness: ScreedThickness | null;
  heating: HeatingOption | null;
  service: ServiceType | null;
}

const buildingTypes: {
  value: BuildingType;
  label: string;
  icon: typeof Home;
  typicalSize: string;
  image: string | null;
}[] = [
  { value: "vrijstaand", label: "Vrijstaande woning", icon: Castle, typicalSize: "180 – 300 m²", image: null },
  { value: "halfopen", label: "Halfopen bebouwing", icon: Building, typicalSize: "140 – 220 m²", image: null },
  { value: "rijwoning", label: "Rijwoning", icon: Hotel, typicalSize: "100 – 180 m²", image: null },
  { value: "appartement", label: "Appartement", icon: Building2, typicalSize: "60 – 140 m²", image: null },
];

const sizeOptions: { value: BuildingSize; label: string; sqm: number }[] = [
  { value: "100", label: "Tot 100 m²", sqm: 100 },
  { value: "140", label: "Tot 140 m²", sqm: 140 },
  { value: "180", label: "Tot 180 m²", sqm: 180 },
  { value: "220", label: "Tot 220 m²", sqm: 220 },
  { value: "260", label: "Tot 260 m²", sqm: 260 },
  { value: "300", label: "Tot 300 m²", sqm: 300 },
];

const dryingOptions: { value: DryingType; label: string; icon: typeof Droplets; desc: string; emoji: string }[] = [
  { value: "pleisterwerk", label: "Pleisterwerk", icon: Droplets, desc: "Enkel pleisterwerk drogen", emoji: "💧" },
  { value: "chape", label: "Chape", icon: Waves, desc: "Enkel chape drogen", emoji: "🧱" },
  { value: "beide", label: "Pleisterwerk & Chape", icon: Home, desc: "Beide tegelijk drogen", emoji: "🏠" },
  { value: "waterschade", label: "Waterschade", icon: Flame, desc: "Urgent waterschade herstelling", emoji: "🚨" },
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

const serviceOptions: {
  value: ServiceType;
  icon: typeof Package;
  title: string;
  subtitle: string;
  features: string[];
  recommended: boolean;
}[] = [
  {
    value: "afhalen",
    icon: Package,
    title: "Afhalen",
    subtitle: "Zelf ophalen in Aartselaar",
    features: ["ECO-machines", "Telefonische support"],
    recommended: false,
  },
  {
    value: "levering",
    icon: Truck,
    title: "Levering",
    subtitle: "Geleverd aan de deur + €0,50/km",
    features: ["ECO-machines", "Levering aan huis", "Telefonische support"],
    recommended: false,
  },
  {
    value: "allin",
    icon: Wrench,
    title: "All-in Service",
    subtitle: "Wij regelen alles + €0,50/km",
    features: ["ECO-machines", "Levering aan huis", "Professionele installatie", "Gratis vochtmeting", "Telefonische support"],
    recommended: true,
  },
];

const slideVariants = {
  enter: (direction: number) => ({ y: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => ({ y: direction > 0 ? -60 : 60, opacity: 0 }),
};

const Configurator = () => {
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
    service: null,
  });

  const needsPlaster = answers.dryingType === "pleisterwerk" || answers.dryingType === "beide";
  const needsScreed = answers.dryingType === "chape" || answers.dryingType === "beide";
  const isWaterschade = answers.dryingType === "waterschade";

  const getSteps = useCallback(() => {
    const s = ["buildingType", "size", "dryingType"];
    if (needsPlaster) s.push("plasterThickness");
    if (needsScreed) s.push("screedThickness");
    if (!isWaterschade) s.push("heating");
    s.push("service");
    return s;
  }, [needsPlaster, needsScreed, isWaterschade]);

  const steps = getSteps();
  const totalSteps = steps.length;
  const currentStepKey = steps[Math.min(step, totalSteps - 1)];
  const progress = ((step + 1) / totalSteps) * 100;

  const goPrev = () => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const handleSelectAndNext = <K extends keyof WizardAnswers>(key: K, value: WizardAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setDirection(1);
      setStep((s) => Math.min(s + 1, totalSteps - 1));
    }, 300);
  };

  const handleFinish = (serviceType: ServiceType) => {
    setAnswers((prev) => ({ ...prev, service: serviceType }));

    if (!answers.size || !answers.dryingType) return;

    const pkg = getPackageByAnswers(
      answers.size,
      answers.dryingType,
      answers.plasterThickness,
      answers.screedThickness,
      isWaterschade ? "nee" : answers.heating || "ja"
    );

    if (pkg) {
      const selection = {
        ...answers,
        service: serviceType,
        packageId: pkg.id,
        packageName: pkg.name,
      };
      localStorage.setItem("vernast_booking_selection", JSON.stringify(selection));
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

  const stepNumber = step + 1;

  return (
    <section id="configurator">
      <div className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-accent" />

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="h-1 bg-primary-foreground/5">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-foreground/60 to-primary-foreground rounded-r-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8 max-w-3xl mx-auto w-full">
          <div className="flex items-center gap-3">
            {step > 0 && (
              <motion.button
                initial={enterInitial({ opacity: 0, x: -10 })}
                animate={{ opacity: 1, x: 0 }}
                onClick={goPrev}
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Vorige
              </motion.button>
            )}
          </div>
          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === step ? "w-8 bg-primary-foreground" : i < step ? "w-2 bg-primary-foreground/50" : "w-2 bg-primary-foreground/15"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="relative z-10 max-w-3xl mx-auto w-full px-6 md:px-10 pt-8 md:pt-16 pb-20 min-h-[580px] lg:min-h-[680px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStepKey}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              {/* STEP: Building Type — Geometric blocks (ready for real photos later) */}
              {currentStepKey === "buildingType" && (
                <div>
                  <motion.div initial={enterInitial({ opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
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
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    {buildingTypes.map((bt, i) => {
                      const selected = answers.buildingType === bt.value;
                      return (
                        <motion.button
                          key={bt.value}
                          initial={enterInitial({ opacity: 0, y: 20 })}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + i * 0.05 }}
                          onClick={() => handleSelectAndNext("buildingType", bt.value)}
                          className={`group relative overflow-hidden rounded-2xl text-center transition-all duration-300 p-5 ${
                            selected
                              ? "bg-primary-foreground/20 ring-2 ring-primary-foreground scale-[1.02] shadow-xl"
                              : "bg-primary-foreground/[0.08] hover:bg-primary-foreground/15 hover:scale-[1.02]"
                          }`}
                        >
                          {bt.image ? (
                            /* When real photos are added, show them */
                            <>
                              <div className="absolute inset-0">
                                <img src={bt.image} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                <div className="absolute inset-0 bg-accent/60" />
                              </div>
                              <div className="relative">
                                <div className="font-bold text-primary-foreground text-base md:text-lg">{bt.label}</div>
                                <div className="text-xs text-primary-foreground/50 mt-1">{bt.typicalSize}</div>
                              </div>
                            </>
                          ) : (
                            /* Geometric block silhouettes */
                            <>
                              <div className="h-20 flex items-end justify-center mb-3">
                                {bt.value === "vrijstaand" && (
                                  <div className="flex flex-col items-center">
                                    <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[20px] border-l-transparent border-r-transparent border-b-primary-foreground/20" />
                                    <div className="w-[80px] h-[44px] bg-primary-foreground/15 rounded-t-sm relative">
                                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[16px] h-[22px] bg-primary-foreground/10 rounded-t-sm" />
                                      <div className="absolute top-2 left-2 w-[12px] h-[10px] bg-primary-foreground/10 rounded-sm" />
                                      <div className="absolute top-2 right-2 w-[12px] h-[10px] bg-primary-foreground/10 rounded-sm" />
                                    </div>
                                  </div>
                                )}
                                {bt.value === "halfopen" && (
                                  <div className="flex items-end">
                                    <div className="flex flex-col items-center">
                                      <div className="w-0 h-0 border-l-[32px] border-r-[32px] border-b-[16px] border-l-transparent border-r-transparent border-b-primary-foreground/20" />
                                      <div className="w-[64px] h-[40px] bg-primary-foreground/15 rounded-t-sm relative">
                                        <div className="absolute top-2 left-2 w-[10px] h-[8px] bg-primary-foreground/10 rounded-sm" />
                                        <div className="absolute bottom-0 right-3 w-[12px] h-[18px] bg-primary-foreground/10 rounded-t-sm" />
                                      </div>
                                    </div>
                                    <div className="w-[28px] h-[30px] bg-primary-foreground/8 -ml-[2px]" />
                                  </div>
                                )}
                                {bt.value === "rijwoning" && (
                                  <div className="flex items-end">
                                    <div className="w-[24px] h-[36px] bg-primary-foreground/8" />
                                    <div className="flex flex-col items-center -mx-[1px]">
                                      <div className="w-0 h-0 border-l-[26px] border-r-[26px] border-b-[13px] border-l-transparent border-r-transparent border-b-primary-foreground/25" />
                                      <div className="w-[52px] h-[38px] bg-primary-foreground/20 rounded-t-sm relative">
                                        <div className="absolute top-2 left-2 w-[8px] h-[7px] bg-primary-foreground/10 rounded-sm" />
                                        <div className="absolute top-2 right-2 w-[8px] h-[7px] bg-primary-foreground/10 rounded-sm" />
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[10px] h-[16px] bg-primary-foreground/10 rounded-t-sm" />
                                      </div>
                                    </div>
                                    <div className="w-[24px] h-[36px] bg-primary-foreground/8" />
                                  </div>
                                )}
                                {bt.value === "appartement" && (
                                  <div className="w-[56px] h-[64px] bg-primary-foreground/15 rounded-sm relative">
                                    <div className="absolute inset-[5px] grid grid-cols-2 gap-[3px]">
                                      {[...Array(8)].map((_, j) => (
                                        <div key={j} className="bg-primary-foreground/10 rounded-[1px]" />
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="font-bold text-primary-foreground text-sm md:text-base">{bt.label}</div>
                              <div className="text-xs text-primary-foreground/40 mt-1">{bt.typicalSize}</div>
                            </>
                          )}
                          {selected && (
                            <motion.div initial={enterInitial({ scale: 0 })} animate={{ scale: 1 }} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary-foreground flex items-center justify-center">
                              <Check className="h-4 w-4 text-accent" />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP: Size */}
              {currentStepKey === "size" && (
                <div>
                  <motion.div initial={enterInitial({ opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                      <span className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center text-[10px]">{stepNumber}</span>
                      Oppervlakte
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3 leading-[1.1]">
                      Hoeveel m² heeft<br />uw woning?
                    </h2>
                    <p className="text-primary-foreground/50 mb-8 text-base md:text-lg max-w-md">
                      Selecteer de oppervlakte, we berekenen direct uw pakket.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-3 gap-3 max-w-md">
                    {sizeOptions.map((opt, i) => {
                      const selected = answers.size === opt.value;
                      return (
                        <motion.button
                          key={opt.value}
                          initial={enterInitial({ opacity: 0, scale: 0.9 })}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.04 }}
                          onClick={() => handleSelectAndNext("size", opt.value)}
                          className={`relative rounded-2xl py-5 px-3 text-center transition-all duration-300 ${
                            selected
                              ? "bg-primary-foreground text-accent shadow-lg scale-[1.05]"
                              : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-[1.02]"
                          }`}
                        >
                          <span className={`text-2xl md:text-3xl font-black block ${selected ? "text-accent" : ""}`}>{opt.sqm}</span>
                          <span className={`text-xs font-semibold block mt-1 ${selected ? "text-accent/70" : "text-primary-foreground/40"}`}>m²</span>
                          {selected && (
                            <motion.div initial={enterInitial({ scale: 0 })} animate={{ scale: 1 }} className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center border-2 border-primary-foreground">
                              <Check className="h-3 w-3 text-primary-foreground" />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP: Drying type */}
              {currentStepKey === "dryingType" && (
                <div>
                  <motion.div initial={enterInitial({ opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
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
                  </motion.div>

                  <div className="space-y-3 max-w-md">
                    {dryingOptions.map((opt, i) => {
                      const selected = answers.dryingType === opt.value;
                      return (
                        <motion.button
                          key={opt.value}
                          initial={enterInitial({ opacity: 0, x: -20 })}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.06 }}
                          onClick={() => {
                            setAnswers((prev) => ({ ...prev, dryingType: opt.value, plasterThickness: null, screedThickness: null, heating: null }));
                            setTimeout(() => { setDirection(1); setStep((s) => s + 1); }, 300);
                          }}
                          className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                            selected
                              ? "bg-primary-foreground text-accent shadow-lg scale-[1.02]"
                              : "bg-primary-foreground/[0.08] hover:bg-primary-foreground/15 text-primary-foreground"
                          }`}
                        >
                          <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <div className={`font-bold text-base ${selected ? "text-accent" : ""}`}>{opt.label}</div>
                            <div className={`text-xs mt-0.5 ${selected ? "text-accent/60" : "text-primary-foreground/40"}`}>{opt.desc}</div>
                          </div>
                          <ArrowRight className={`h-4 w-4 flex-shrink-0 ${selected ? "text-accent/60" : "text-primary-foreground/20"}`} />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP: Plaster thickness */}
              {currentStepKey === "plasterThickness" && (
                <div>
                  <motion.div initial={enterInitial({ opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
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
                  </motion.div>

                  <div className="flex gap-4 max-w-sm">
                    {plasterOptions.map((opt, i) => {
                      const selected = answers.plasterThickness === opt.value;
                      const height = 80 + parseInt(opt.value) * 30;
                      return (
                        <motion.button
                          key={opt.value}
                          initial={enterInitial({ opacity: 0, y: 30 })}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + i * 0.08 }}
                          onClick={() => handleSelectAndNext("plasterThickness", opt.value)}
                          className="flex-1 flex flex-col items-center gap-3 group"
                        >
                          <motion.div
                            initial={enterInitial({ height: 0 })}
                            animate={{ height }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                            className={`w-full rounded-2xl transition-all duration-300 relative overflow-hidden ${
                              selected ? "bg-primary-foreground shadow-lg" : "bg-primary-foreground/10 group-hover:bg-primary-foreground/20"
                            }`}
                          >
                            {selected && (
                              <motion.div initial={enterInitial({ scale: 0 })} animate={{ scale: 1 }} className="absolute top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                <Check className="h-3 w-3 text-primary-foreground" />
                              </motion.div>
                            )}
                          </motion.div>
                          <div className={`text-center transition-colors ${selected ? "text-primary-foreground" : "text-primary-foreground/40 group-hover:text-primary-foreground/70"}`}>
                            <span className="text-3xl font-black block">{opt.value}</span>
                            <span className="text-xs font-bold uppercase tracking-wider">cm</span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP: Screed thickness */}
              {currentStepKey === "screedThickness" && (
                <div>
                  <motion.div initial={enterInitial({ opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
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
                  </motion.div>

                  <div className="flex gap-4 max-w-sm">
                    {screedOptions.map((opt, i) => {
                      const selected = answers.screedThickness === opt.value;
                      const height = 60 + parseInt(opt.value) * 20;
                      return (
                        <motion.button
                          key={opt.value}
                          initial={enterInitial({ opacity: 0, y: 30 })}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + i * 0.08 }}
                          onClick={() => handleSelectAndNext("screedThickness", opt.value)}
                          className="flex-1 flex flex-col items-center gap-3 group"
                        >
                          <motion.div
                            initial={enterInitial({ height: 0 })}
                            animate={{ height }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                            className={`w-full rounded-2xl transition-all duration-300 relative overflow-hidden ${
                              selected ? "bg-primary-foreground shadow-lg" : "bg-primary-foreground/10 group-hover:bg-primary-foreground/20"
                            }`}
                          >
                            {selected && (
                              <motion.div initial={enterInitial({ scale: 0 })} animate={{ scale: 1 }} className="absolute top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                <Check className="h-3 w-3 text-primary-foreground" />
                              </motion.div>
                            )}
                          </motion.div>
                          <div className={`text-center transition-colors ${selected ? "text-primary-foreground" : "text-primary-foreground/40 group-hover:text-primary-foreground/70"}`}>
                            <span className="text-3xl font-black block">{opt.value}</span>
                            <span className="text-xs font-bold uppercase tracking-wider">cm</span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP: Heating */}
              {currentStepKey === "heating" && (
                <div>
                  <motion.div initial={enterInitial({ opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                      <span className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center text-[10px]">{stepNumber}</span>
                      Verwarming
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3 leading-[1.1]">
                      Zorgt u zelf voor<br />verwarming?
                    </h2>
                    <p className="text-primary-foreground/50 mb-10 text-base md:text-lg max-w-md">
                      Indien niet, voorzien wij elektrische kachels bij uw pakket.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    <motion.button
                      initial={enterInitial({ opacity: 0, x: -20 })}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      onClick={() => handleSelectAndNext("heating", "ja")}
                      className={`relative rounded-2xl p-6 text-center transition-all duration-300 ${
                        answers.heating === "ja"
                          ? "bg-primary-foreground text-accent shadow-lg scale-[1.02]"
                          : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                      }`}
                    >
                      <ThermometerSun className={`h-10 w-10 mx-auto mb-3 ${answers.heating === "ja" ? "text-accent" : "text-primary-foreground/60"}`} />
                      <div className="font-bold text-lg">Ja</div>
                      <div className={`text-xs mt-1 ${answers.heating === "ja" ? "text-accent/60" : "text-primary-foreground/40"}`}>Ik heb eigen verwarming</div>
                    </motion.button>
                    <motion.button
                      initial={enterInitial({ opacity: 0, x: 20 })}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      onClick={() => handleSelectAndNext("heating", "nee")}
                      className={`relative rounded-2xl p-6 text-center transition-all duration-300 ${
                        answers.heating === "nee"
                          ? "bg-primary-foreground text-accent shadow-lg scale-[1.02]"
                          : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                      }`}
                    >
                      <Thermometer className={`h-10 w-10 mx-auto mb-3 ${answers.heating === "nee" ? "text-accent" : "text-primary-foreground/60"}`} />
                      <div className="font-bold text-lg">Nee</div>
                      <div className={`text-xs mt-1 ${answers.heating === "nee" ? "text-accent/60" : "text-primary-foreground/40"}`}>Voorzie kachels a.u.b.</div>
                    </motion.button>
                  </div>
                </div>
              )}

              {/* STEP: Service type */}
              {currentStepKey === "service" && (
                <div>
                  <motion.div initial={enterInitial({ opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                      <span className="w-5 h-5 bg-primary-foreground/20 rounded-full flex items-center justify-center text-[10px]">{stepNumber}</span>
                      Laatste stap
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3 leading-[1.1]">
                      Hoe wilt u het<br />ontvangen?
                    </h2>
                    <p className="text-primary-foreground/50 mb-8 text-base md:text-lg max-w-md">
                      Kies uw service-niveau. Wij bevelen all-in aan, alles inbegrepen.
                    </p>
                  </motion.div>

                  <div className="space-y-3 max-w-md">
                    {serviceOptions.map((opt, i) => {
                      const Icon = opt.icon;
                      const selected = answers.service === opt.value;
                      return (
                        <motion.button
                          key={opt.value}
                          initial={enterInitial({ opacity: 0, x: -20 })}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.06 }}
                          onClick={() => handleFinish(opt.value)}
                          className={`w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 relative ${
                            opt.recommended
                              ? selected
                                ? "bg-primary-foreground text-accent shadow-lg scale-[1.02] ring-2 ring-primary-foreground"
                                : "bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 ring-1 ring-primary-foreground/30"
                              : selected
                              ? "bg-primary-foreground text-accent shadow-lg scale-[1.02]"
                              : "bg-primary-foreground/[0.08] hover:bg-primary-foreground/15 text-primary-foreground"
                          }`}
                        >
                          {opt.recommended && (
                            <span className="absolute -top-2.5 left-4 bg-primary-foreground text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                              Aanbevolen
                            </span>
                          )}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            selected ? "bg-accent text-primary-foreground" : opt.recommended ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary-foreground/10 text-primary-foreground/60"
                          }`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`font-bold text-base ${selected ? "text-accent" : ""}`}>{opt.title}</div>
                            <div className={`text-xs mt-0.5 ${selected ? "text-accent/60" : "text-primary-foreground/40"}`}>{opt.subtitle}</div>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {opt.features.map((f) => (
                                <span key={f} className={`text-[10px] px-2 py-0.5 rounded-full ${
                                  selected ? "bg-accent/10 text-accent/80" : "bg-primary-foreground/10 text-primary-foreground/50"
                                }`}>
                                  ✓ {f}
                                </span>
                              ))}
                            </div>
                          </div>
                          <ArrowRight className={`h-4 w-4 flex-shrink-0 ${selected ? "text-accent/60" : "text-primary-foreground/20"}`} />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Configurator;
