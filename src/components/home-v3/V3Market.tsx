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

const PILLARS_EN: Pillar[] = [
  {
    icon: "/vernast/icon-brain.webp",
    alt: "Brain: calculated instead of guessed",
    title: "No overcapacity",
    body: "A heavy industrial dryer in a terraced house does not dry any faster, it just uses more. Our calculation sizes the package exactly to your volume and drying goal: what you need, nothing more.",
    foot: "Sized exactly",
  },
  {
    icon: "/vernast/icon-leaf.webp",
    alt: "Green leaf: economical drying, lower consumption",
    title: "Economical for you and the environment",
    body: "Our eco units extract more litres of moisture per kilowatt hour, and because we never oversize, you pay for less electricity over the whole hire period. Sustainable drying is simply cheaper drying.",
    foot: "Lower consumption, lower bill",
  },
  {
    icon: "/vernast/icon-shield.webp",
    alt: "Gold shield: drying guarantee",
    title: "100% dry, guaranteed",
    body: "Because we calculate instead of guessing, we dare to promise what nobody else does: your package dries your home within the calculated period. If it does not, you keep hiring at no extra cost.*",
    foot: "Or keep hiring at no extra cost",
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
  en: {
    pillars: PILLARS_EN,
    kick: "Sustainable & calculated",
    h2: "The market places units. We place a calculation.",
    lede: "In this sector, heavy standard dryers are often installed by default, machines sized for large volumes, while most homes today are actually getting more compact. That means unnecessary consumption, unnecessary hire and an unnecessary burden on the environment. We turn it around: calculate first, only then install.",
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
