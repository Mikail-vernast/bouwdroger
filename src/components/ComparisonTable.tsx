import { Check, X, Zap, Volume2, Shield, Thermometer, BatteryCharging, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const rows = [
  {
    label: "Energieverbruik",
    icon: Zap,
    competitor: "2100W continu — draait door, ook als ruimte al droog is",
    vernast: "500W per unit — per kamer stopbaar zodra droog",
  },
  {
    label: "Droogresultaat",
    icon: Thermometer,
    competitor: "Ongelijkmatig — dichtbij de droger is het droog, verderop blijft het nat",
    vernast: "Gelijkmatig — elk vertrek heeft een eigen droogcircuit",
  },
  {
    label: "Geluid",
    icon: Volume2,
    competitor: "59 dB geconcentreerd op 1 punt — vergelijkbaar met een draaiende wasmachine",
    vernast: "52 dB per unit, verspreid over meerdere kamers — merkbaar stiller",
  },
  {
    label: "Flexibiliteit",
    icon: BatteryCharging,
    competitor: "Kamer droog? Machine draait op vol vermogen door — geen controle per ruimte",
    vernast: "Kamer droog? Die unit stoppen en direct besparen op energie",
  },
  {
    label: "Uitvalrisico",
    icon: Shield,
    competitor: "1 toestel defect = volledige droging ligt stil tot reparatie",
    vernast: "1 unit defect = de rest draait gewoon door, minimale vertraging",
  },
];

const scoreStats = [
  { label: "Energie", bad: "2100W", good: "1500W", icon: Zap },
  { label: "Geluid", bad: "59 dB", good: "52 dB", icon: Volume2 },
  { label: "Dekking", bad: "33%", good: "100%", icon: Thermometer },
  { label: "Risico", bad: "Hoog", good: "Laag", icon: Shield },
];

const ComparisonTable = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5">
            Waarom wij anders zijn
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Onze aanpak vs. de rest
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wij zetten het juiste toestel op de juiste plek — in plaats van één
            grote droger in de gang.
          </p>
        </motion.div>

        {/* Floorplan visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8">
            Voorbeeld: 3 kamers, elk 40m²
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dryfast side */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border-2 border-red-200 bg-gradient-to-b from-red-50/80 to-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <h3 className="text-sm font-bold text-red-700 uppercase tracking-wider">
                  Traditionele aanpak
                </h3>
              </div>

              <div className="bg-red-100/80 border border-red-200 rounded-xl p-3 text-center mb-3">
                <div className="text-xs font-bold text-red-800 mb-1">Gang</div>
                <div className="inline-flex items-center gap-2 bg-red-600 text-white rounded-lg px-3 py-2 shadow-md">
                  <span className="text-lg">🏭</span>
                  <div className="text-left">
                    <div className="text-xs font-black">Dryfast DF800</div>
                    <div className="text-[10px] opacity-80">2100W • 59 dB • 71 kg</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-3 text-center">
                  <div className="text-lg mb-1">⚠️</div>
                  <div className="text-xs font-bold text-yellow-800">Kamer 1</div>
                  <div className="text-[10px] text-yellow-600">Deels droog</div>
                </div>
                <div className="bg-red-50 border border-red-300 rounded-xl p-3 text-center">
                  <div className="text-lg mb-1">❌</div>
                  <div className="text-xs font-bold text-red-800">Kamer 2</div>
                  <div className="text-[10px] text-red-600">Nog nat</div>
                </div>
                <div className="bg-red-50 border border-red-300 rounded-xl p-3 text-center">
                  <div className="text-lg mb-1">❌</div>
                  <div className="text-xs font-bold text-red-800">Kamer 3</div>
                  <div className="text-[10px] text-red-600">Nog nat</div>
                </div>
              </div>

              <p className="text-xs text-red-600 text-center font-medium">
                Vocht bereikt niet alle kamers vanuit de gang
              </p>
            </motion.div>

            {/* Vernast side */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border-2 border-green-300 bg-gradient-to-b from-green-50/80 to-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <h3 className="text-sm font-bold text-green-700 uppercase tracking-wider">
                  Vernast aanpak
                </h3>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center mb-3">
                <div className="text-xs font-bold text-green-800 mb-1">Gang</div>
                <div className="text-[10px] text-green-600">Vrij — toestellen staan in de kamers</div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-green-100 border border-green-300 rounded-xl p-3 text-center">
                  <div className="text-lg mb-1">✅</div>
                  <div className="text-xs font-bold text-green-800">Kamer 1</div>
                  <div className="inline-block bg-green-600 text-white rounded px-1.5 py-0.5 mt-1">
                    <span className="text-[9px] font-bold">ECO Boost</span>
                  </div>
                </div>
                <div className="bg-green-100 border border-green-300 rounded-xl p-3 text-center">
                  <div className="text-lg mb-1">✅</div>
                  <div className="text-xs font-bold text-green-800">Kamer 2</div>
                  <div className="inline-block bg-green-600 text-white rounded px-1.5 py-0.5 mt-1">
                    <span className="text-[9px] font-bold">ECO Boost</span>
                  </div>
                </div>
                <div className="bg-green-100 border border-green-300 rounded-xl p-3 text-center">
                  <div className="text-lg mb-1">✅</div>
                  <div className="text-xs font-bold text-green-800">Kamer 3</div>
                  <div className="inline-block bg-green-600 text-white rounded px-1.5 py-0.5 mt-1">
                    <span className="text-[9px] font-bold">ECO Boost</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-green-600 text-center font-medium">
                Elke ruimte optimaal gedroogd met eigen toestel
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Detailed comparison list */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground/40 mx-auto animate-bounce" />
          </motion.div>

          <div className="space-y-4">
            {rows.map((row, index) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {/* Competitor */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex items-start gap-3 bg-red-50/60 border border-red-100 rounded-xl p-5 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 flex-shrink-0 mt-0.5">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <row.icon className="h-3.5 w-3.5 text-red-400" />
                      <span className="text-xs font-bold text-red-800 uppercase tracking-wide">
                        {row.label}
                      </span>
                    </div>
                    <p className="text-sm text-red-700/80 leading-relaxed">{row.competitor}</p>
                  </div>
                </motion.div>

                {/* Vernast */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex items-start gap-3 bg-green-50/60 border border-green-200 rounded-xl p-5 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 flex-shrink-0 mt-0.5">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <row.icon className="h-3.5 w-3.5 text-green-500" />
                      <span className="text-xs font-bold text-green-800 uppercase tracking-wide">
                        {row.label}
                      </span>
                    </div>
                    <p className="text-sm text-green-700/80 leading-relaxed">{row.vernast}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Score summary — premium infographic blocks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scoreStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ y: -4 }}
                className="relative bg-gradient-to-b from-secondary to-white rounded-2xl p-5 text-center border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-black text-red-400 line-through opacity-60">
                    {stat.bad}
                  </span>
                  <span className="text-muted-foreground/30 font-bold">→</span>
                  <span className="text-xl font-black text-green-600">
                    {stat.good}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
