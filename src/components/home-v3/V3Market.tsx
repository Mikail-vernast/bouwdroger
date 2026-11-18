import { useCopy, type Copy } from "@/i18n/useTaal";

type Pillar = { icon: string; alt: string; title: string; body: string; foot: string };

const PILLARS_NL: Pillar[] = [
  {
    icon: "/vernast/icon-brain.webp",
    alt: "Hersenen: berekend in plaats van gegokt",
    title: "Geen overcapaciteit",
    body: "Een zware industriële droger in een rijwoning droogt niet sneller, hij verbruikt alleen meer. Onze calculatie dimensioneert het pakket exact op uw volume en droogdoel: wat u nodig heeft, niets meer.",
    foot: "Exact gedimensioneerd",
  },
  {
    icon: "/vernast/icon-leaf.webp",
    alt: "Groen blad: zuinig drogen, lager verbruik",
    title: "Zuinig voor u én het milieu",
    body: "Onze eco-toestellen halen meer liters vocht per kilowattuur, en doordat wij nooit overdimensioneren betaalt u minder stroom tijdens de volledige huurperiode. Duurzaam drogen is gewoon goedkoper drogen.",
    foot: "Lager verbruik, lagere factuur",
  },
  {
    icon: "/vernast/icon-shield.webp",
    alt: "Gouden schild: drooggarantie",
    title: "100% droog, gegarandeerd",
    body: "Omdat wij berekenen in plaats van gokken, durven wij beloven wat niemand anders belooft: uw pakket droogt uw woning binnen de berekende periode. Lukt dat niet, dan huurt u kosteloos verder.*",
    foot: "Of u huurt kosteloos verder",
  },
];

const PILLARS_FR: Pillar[] = [
  {
    icon: "/vernast/icon-brain.webp",
    alt: "Cerveau : calculé plutôt que deviné",
    title: "Pas de surcapacité",
    body: "Un lourd déshumidificateur industriel dans une maison mitoyenne ne sèche pas plus vite, il consomme seulement davantage. Notre calcul dimensionne le pack exactement selon votre volume et votre objectif de séchage : ce dont vous avez besoin, rien de plus.",
    foot: "Dimensionné avec précision",
  },
  {
    icon: "/vernast/icon-leaf.webp",
    alt: "Feuille verte : séchage économe, consommation réduite",
    title: "Économe pour vous et pour l'environnement",
    body: "Nos appareils éco extraient plus de litres d'humidité par kilowattheure, et comme nous ne surdimensionnons jamais, vous payez moins d'électricité pendant toute la durée de location. Sécher durablement, c'est tout simplement sécher moins cher.",
    foot: "Moins de consommation, facture plus basse",
  },
  {
    icon: "/vernast/icon-shield.webp",
    alt: "Bouclier doré : garantie de séchage",
    title: "Sec à 100 %, garanti",
    body: "Parce que nous calculons au lieu de deviner, nous osons promettre ce que personne d'autre ne promet : votre pack sèche votre habitation dans la période calculée. Si ce n'est pas le cas, vous continuez à louer sans frais.*",
    foot: "Ou vous continuez à louer sans frais",
  },
];

const COPY = {
  nl: {
    pillars: PILLARS_NL,
    kick: "Duurzaam & berekend",
    h2: "De markt zet toestellen. Wij zetten berekening.",
    lede: "In de sector worden vaak standaard zware drogers geplaatst, machines gedimensioneerd op grote volumes, terwijl de meeste woningen vandaag net compacter worden. Dat betekent onnodig verbruik, onnodige huur en onnodige belasting van het milieu. Wij draaien het om: eerst berekenen, dan pas plaatsen.",
  },
  fr: {
    pillars: PILLARS_FR,
    kick: "Durable et calculé",
    h2: "Le marché place des appareils. Nous plaçons un calcul.",
    lede: "Dans le secteur, on installe souvent par défaut de lourds déshumidificateurs, des machines dimensionnées pour de grands volumes, alors que la plupart des habitations sont aujourd'hui justement plus compactes. Résultat : une consommation inutile, une location inutile et une charge inutile pour l'environnement. Nous faisons l'inverse : d'abord calculer, ensuite seulement installer.",
  },
} satisfies Copy<{ pillars: Pillar[]; kick: string; h2: string; lede: string }>;

const V3Market = () => {
  const t = useCopy(COPY);
  return (
  <section className="mkt" id="duurzaam">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">{t.kick}</span>
        <h2 className="sec">{t.h2}</h2>
        <p className="lede">{t.lede}</p>
      </div>
      <div className="mkt-grid">
        {t.pillars.map((pillar) => (
          <div className="mk" key={pillar.title}>
            <div className="mki">
              <img src={pillar.icon} alt={pillar.alt} loading="lazy" />
            </div>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
            <div className="mkf">{pillar.foot}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default V3Market;
