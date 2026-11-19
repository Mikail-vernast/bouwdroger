import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Head } from "vite-react-ssg";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import {
  ArrowRightIcon,
  ChatIcon,
  CheckIcon,
  DropletPinIcon,
  FileCheckIcon,
  RefreshIcon,
  TruckIcon,
} from "@/components/verhuur/icons";
import { catInTaal, packageGalleryAltsInTaal, packageSpecLineInTaal, roleInTaal, specsInTaal } from "@/data/verhuur.fr";
import { useCopy, useLokaalPad, useTaal, useToonBedrag, type Copy } from "@/i18n/useTaal";
import { extraNaarQuery, extraUitQuery } from "@/lib/booking";
import {
  allItems,
  configToQuery,
  deviceCount,
  dryingDays,
  packageGallery,
  packageImage,
  configPrice,
  configWeeks,
  parseConfig,
  totalAirflow,
  totalCapacity,
} from "@/lib/verhuur";
import { breadcrumbSchema } from "@/lib/schema";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

type Usp = [vet: string, rest: string];
type Kaart = [titel: string, tekst: string];

interface PakketCopy {
  title: string;
  description: string;
  home: string;
  crumbDroging: string;
  crumbPakket: string;
  cur: string;
  chip: string;
  h1: string;
  factToestellen: string;
  factAfvoer: string;
  factDagen: string;
  fact24: string;
  fact24Label: string;
  afbeelding: (n: number) => string;
  ptag: string;
  h2: (size: string) => string;
  usps: Usp[];
  avail: string;
  voor: (weeks: number) => string;
  inbegrepen: string;
  doorgaan: string;
  uwPakket: string;
  inbegrepenToestellen: string;
  uwPakketSub: string;
  perTweeWeken: string;
  spxAfvoer: string;
  spxLucht: string;
  spxDagen: string;
  rolH: string;
  rolStep: string;
  rolSub: string;
  inUwPakket: (q: number) => string;
  incH: string;
  incSpan: string;
  incP: string;
  inc: Kaart[];
  rbChip: string;
  rbH: string;
  rbP: string;
  rb: Kaart[];
  stats: [string, string][];
  watInbegrepen: string;
  hulp: string;
}

const COPY = {
  nl: {
    title: "Uw droogpakket: toestellen, droogtijd en prijs | Vernast",
    description:
      "Droogpakket op maat van uw woning: de juiste bouwdrogers, ventilatoren en kachels, met verwachte droogtijd en totaalprijs, geleverd binnen 24 uur.",
    home: "Home",
    crumbDroging: "Bouwdroging",
    crumbPakket: "Uw droogpakket",
    cur: "Volledig droogpakket",
    chip: "Alles in één Droogservice",
    h1: "Volledig droogpakket",
    factToestellen: "toestellen in dit pakket",
    factAfvoer: "vochtafvoer per 24 uur",
    factDagen: "dagen verwachte droogtijd",
    fact24: "24 u",
    fact24Label: "geleverd én geïnstalleerd",
    afbeelding: (n) => `Afbeelding ${n}`,
    ptag: "Categorie: Levering",
    h2: (size) => `Volledig droogpakket, woning tot ${size} m²`,
    usps: [
      ["Gratis levering", " bij bestelling, geplaatst en afgesteld door onze technicus"],
      ["Transparante prijzen", " zonder verrassingen, u ziet het totaal vooraf"],
      ["Advies op maat", " door een bouwkundige expert, ook tijdens de droging"],
      ["Energiezuinige ECO-toestellen", ", lager verbruik per liter onttrokken vocht"],
      ["Gratis voor- en na-vochtmeting", " bij elk pakket, u ziet het resultaat zwart op wit"],
    ],
    avail: "Direct beschikbaar, levering binnen 24 uur",
    voor: (weeks) => `voor ${weeks} ${weeks === 1 ? "week" : "weken"}`,
    inbegrepen: "alles inbegrepen",
    doorgaan: "Doorgaan naar samenstellen",
    uwPakket: "Uw pakket",
    inbegrepenToestellen: "Inbegrepen toestellen",
    uwPakketSub:
      "Automatisch berekend op basis van uw oppervlakte, pleister- en chapedikte. Een kant-en-klaar pakket: exact wat uw droging nodig heeft, niets meer.",
    perTweeWeken: "/ 2 wk",
    spxAfvoer: "Vochtafvoer per 24 u",
    spxLucht: "m³/u luchtverzet",
    spxDagen: "Dagen verwachte droogtijd",
    rolH: "Wat doet elk toestel?",
    rolStep: "Uw pakket uitgelegd",
    rolSub:
      "Drogen is een samenspel van capaciteit, circulatie en temperatuur. Ontbreekt er één, dan loopt de droogtijd op, daarom stellen wij pakketten samen in plaats van losse toestellen te verhuren.",
    inUwPakket: (q) => `${q}× in uw pakket`,
    incH: "Bij levering inbegrepen",
    incSpan: "Zonder meerkost",
    incP: "De huurprijs is een alles-in-prijs. Dit zit standaard bij elk pakket, zonder dat u er iets voor moet aanvragen.",
    inc: [
      [
        "Gratis vochtmeting bij levering én ophaling",
        "Onze technicus meet bij plaatsing de vochtwaarden van chape, pleisterwerk en lucht, en meet opnieuw bij ophaling. Zo weet u zwart op wit dat de ruimte droog is voor u afwerkt. Altijd inbegrepen, een ondertekend meetrapport voor uw verzekeraar of dossier kunt u optioneel bijnemen.",
      ],
      [
        "Levering binnen 24 uur en ophaling achteraf",
        "Wij brengen alle toestellen naar de werf in het gekozen tijdslot en halen ze weer op zodra de droging klaar is. Gratis in onze regio; daarbuiten een beperkte kilometervergoeding die u vooraf ziet.",
      ],
      [
        "Plaatsing, aansluiting en afstelling",
        "Elk toestel komt op de juiste positie, de condensafvoer wordt aangesloten en de streefvochtigheid ingesteld. U hoeft niets te sjouwen of te programmeren.",
      ],
      [
        "Uitleg ter plaatse en bereikbare helpdesk",
        "De technicus legt uit hoe de toestellen werken en welke streefwaarde u mag verwachten. Tijdens de volledige huurperiode zijn onze vochtexperts telefonisch bereikbaar.",
      ],
      [
        "Flexibel verlengen of vroeger stoppen",
        "Duurt de droging langer, dan verlengt u online met één klik. Bent u vroeger klaar, dan stopt u de huur en betaalt u enkel de dagen die u effectief gebruikt hebt.",
      ],
    ],
    rbChip: "Waarom een pakket werkt",
    rbH: "Drogen is capaciteit, circulatie én temperatuur.",
    rbP: "Ontbreekt er één van de drie, dan loopt de droogtijd op, of stopt het proces zelfs helemaal. Daarom stellen wij complete pakketten samen in plaats van losse toestellen te verhuren.",
    rb: [
      [
        "Capaciteit",
        "De bouwdrogers bepalen hoeveel liter vocht er per dag uit de lucht kan. Wij dimensioneren op uw werkelijke volume, niet te klein, niet te groot.",
      ],
      [
        "Circulatie",
        "Zonder luchtbeweging vormt zich een verzadigd laagje tegen chape en muur, daar stopt de droging. De ventilatoren doorbreken dat en winnen dagen.",
      ],
      [
        "Temperatuur",
        "Onder 15 °C neemt lucht nauwelijks vocht op. De kachel brengt koude ruimtes op werkingstemperatuur, zodat de drogers op volle kracht werken.",
      ],
    ],
    stats: [
      ["60 %", "sneller droog dan natuurlijke droging"],
      ["48 u", "voor schimmel begint te groeien, snel starten loont"],
      ["≤ 2 %", "restvocht vereist voor u mag afwerken"],
      ["24 u", "geleverd, geplaatst en afgesteld"],
    ],
    watInbegrepen: "Wat is inbegrepen?",
    hulp: "Hulp nodig? Bel ons",
  },
  fr: {
    title: "Votre pack de séchage : appareils, durée et prix | Vernast",
    description:
      "Pack de séchage sur mesure pour votre habitation : les bons déshumidificateurs, ventilateurs et chauffages, avec durée de séchage prévue et prix total, livré sous 24 heures.",
    home: "Accueil",
    crumbDroging: "Séchage de chantier",
    crumbPakket: "Votre pack de séchage",
    cur: "Pack de séchage complet",
    chip: "Service de séchage tout compris",
    h1: "Pack de séchage complet",
    factToestellen: "appareils dans ce pack",
    factAfvoer: "d'humidité évacuée par 24 heures",
    factDagen: "jours de séchage prévus",
    fact24: "24 h",
    fact24Label: "livré et installé",
    afbeelding: (n) => `Image ${n}`,
    ptag: "Catégorie : livraison",
    h2: (size) => `Pack de séchage complet, habitation jusqu'à ${size} m²`,
    usps: [
      ["Livraison gratuite", " à la commande, installation et réglage par notre technicien"],
      ["Prix transparents", " sans surprise, vous voyez le total à l'avance"],
      ["Conseil sur mesure", " par un expert en construction, également pendant le séchage"],
      ["Appareils ÉCO économes en énergie", ", consommation réduite par litre d'humidité extrait"],
      ["Mesure d'humidité gratuite avant et après", " avec chaque pack, vous voyez le résultat noir sur blanc"],
    ],
    avail: "Disponible immédiatement, livraison sous 24 heures",
    voor: (weeks) => `pour ${weeks} ${weeks === 1 ? "semaine" : "semaines"}`,
    inbegrepen: "tout compris",
    doorgaan: "Passer à la composition",
    uwPakket: "Votre pack",
    inbegrepenToestellen: "Appareils inclus",
    uwPakketSub:
      "Calculé automatiquement selon votre superficie et l'épaisseur du plafonnage et de la chape. Un pack clé en main : exactement ce dont votre séchage a besoin, rien de plus.",
    perTweeWeken: "/ 2 sem.",
    spxAfvoer: "Humidité évacuée par 24 h",
    spxLucht: "m³/h de débit d'air",
    spxDagen: "Jours de séchage prévus",
    rolH: "Que fait chaque appareil ?",
    rolStep: "Votre pack expliqué",
    rolSub:
      "Sécher, c'est une combinaison de capacité, de circulation et de température. S'il en manque une, le temps de séchage s'allonge ; c'est pourquoi nous composons des packs au lieu de louer des appareils séparés.",
    inUwPakket: (q) => `${q}× dans votre pack`,
    incH: "Compris à la livraison",
    incSpan: "Sans supplément",
    incP: "Le prix de location est un prix tout compris. Tout ceci est inclus d'office dans chaque pack, sans que vous deviez le demander.",
    inc: [
      [
        "Mesure d'humidité gratuite à la livraison et à la reprise",
        "Lors du placement, notre technicien mesure l'humidité de la chape, du plafonnage et de l'air, puis il mesure à nouveau à la reprise. Vous savez ainsi noir sur blanc que la pièce est sèche avant la finition. Toujours compris ; un rapport de mesure signé pour votre assureur ou votre dossier est disponible en option.",
      ],
      [
        "Livraison sous 24 heures et reprise ensuite",
        "Nous apportons tous les appareils sur le chantier dans le créneau choisi et les reprenons dès que le séchage est terminé. Gratuit dans notre région ; au-delà, une indemnité kilométrique limitée que vous voyez à l'avance.",
      ],
      [
        "Placement, raccordement et réglage",
        "Chaque appareil est placé au bon endroit, l'évacuation des condensats est raccordée et l'humidité visée est réglée. Vous n'avez rien à porter ni à programmer.",
      ],
      [
        "Explications sur place et assistance joignable",
        "Le technicien vous explique le fonctionnement des appareils et la valeur cible à laquelle vous pouvez vous attendre. Pendant toute la période de location, nos experts en humidité sont joignables par téléphone.",
      ],
      [
        "Prolonger ou arrêter plus tôt en toute souplesse",
        "Le séchage prend plus de temps ? Vous prolongez en ligne en un clic. Vous avez terminé plus tôt ? Vous arrêtez la location et ne payez que les jours réellement utilisés.",
      ],
    ],
    rbChip: "Pourquoi un pack fonctionne",
    rbH: "Sécher, c'est capacité, circulation et température.",
    rbP: "S'il manque l'une des trois, le temps de séchage s'allonge, voire le processus s'arrête complètement. C'est pourquoi nous composons des packs complets au lieu de louer des appareils séparés.",
    rb: [
      [
        "Capacité",
        "Les déshumidificateurs déterminent combien de litres d'humidité peuvent être retirés de l'air chaque jour. Nous dimensionnons selon votre volume réel, ni trop petit, ni trop grand.",
      ],
      [
        "Circulation",
        "Sans mouvement d'air, une fine couche saturée se forme contre la chape et le mur, et le séchage s'y arrête. Les ventilateurs la brisent et font gagner des jours.",
      ],
      [
        "Température",
        "Sous 15 °C, l'air n'absorbe presque pas d'humidité. Le chauffage amène les pièces froides à température de fonctionnement, pour que les déshumidificateurs travaillent à pleine puissance.",
      ],
    ],
    stats: [
      ["60 %", "plus rapide que le séchage naturel"],
      ["48 h", "avant que les moisissures commencent à se développer : démarrer vite, ça paie"],
      ["≤ 2 %", "d'humidité résiduelle requise avant la finition"],
      ["24 h", "livré, placé et réglé"],
    ],
    watInbegrepen: "Qu'est-ce qui est compris ?",
    hulp: "Besoin d'aide ? Appelez-nous",
  },
  en: {
    title: "Your drying package: units, drying time and price | Vernast",
    description:
      "A drying package tailored to your home: the right construction dehumidifiers, fans and heaters, with expected drying time and total price, delivered within 24 hours.",
    home: "Home",
    crumbDroging: "Construction drying",
    crumbPakket: "Your drying package",
    cur: "Complete drying package",
    chip: "All-in-one drying service",
    h1: "Complete drying package",
    factToestellen: "units in this package",
    factAfvoer: "moisture extraction per 24 hours",
    factDagen: "days expected drying time",
    fact24: "24 h",
    fact24Label: "delivered and installed",
    afbeelding: (n) => `Image ${n}`,
    ptag: "Category: Delivery",
    h2: (size) => `Complete drying package, home up to ${size} m²`,
    usps: [
      ["Free delivery", " with your order, set up and adjusted by our technician"],
      ["Transparent prices", " with no surprises, you see the total up front"],
      ["Tailored advice", " from a building expert, during the drying as well"],
      ["Energy-efficient ECO units", ", lower consumption per litre of moisture extracted"],
      ["Free moisture reading before and after", " with every package, you see the result in black and white"],
    ],
    avail: "Available now, delivery within 24 hours",
    voor: (weeks) => `for ${weeks} ${weeks === 1 ? "week" : "weeks"}`,
    inbegrepen: "all included",
    doorgaan: "Continue to build your package",
    uwPakket: "Your package",
    inbegrepenToestellen: "Included units",
    uwPakketSub:
      "Calculated automatically from your floor area and plaster and screed thickness. A ready-made package: exactly what your drying needs, nothing more.",
    perTweeWeken: "/ 2 wks",
    spxAfvoer: "Moisture extraction per 24 h",
    spxLucht: "m³/h airflow",
    spxDagen: "Days expected drying time",
    rolH: "What does each unit do?",
    rolStep: "Your package explained",
    rolSub:
      "Drying is an interplay of capacity, circulation and temperature. If one is missing, the drying time goes up, which is why we put together packages instead of hiring out individual units.",
    inUwPakket: (q) => `${q}× in your package`,
    incH: "Included with delivery",
    incSpan: "At no extra cost",
    incP: "The hire price is an all-in price. All of this comes as standard with every package, without you having to ask for it.",
    inc: [
      [
        "Free moisture reading at delivery and collection",
        "When setting up, our technician measures the moisture levels of the screed, plaster and air, and measures again at collection. That way you know in black and white that the room is dry before you finish it. Always included; a signed measurement report for your insurer or file is available as an option.",
      ],
      [
        "Delivery within 24 hours and collection afterwards",
        "We bring all the units to the site in the time slot you choose and collect them again as soon as the drying is done. Free in our region; beyond it, a limited mileage charge that you see in advance.",
      ],
      [
        "Positioning, connection and adjustment",
        "Every unit goes in the right position, the condensate drain is connected and the target humidity is set. You don't have to carry or programme anything.",
      ],
      [
        "On-site explanation and a helpdesk you can reach",
        "The technician explains how the units work and what target value you can expect. Throughout the hire period, our moisture experts are available by phone.",
      ],
      [
        "Extend or stop early, flexibly",
        "If the drying takes longer, you extend online with one click. If you're done sooner, you stop the hire and only pay for the days you actually used.",
      ],
    ],
    rbChip: "Why a package works",
    rbH: "Drying is capacity, circulation and temperature.",
    rbP: "If one of the three is missing, the drying time goes up, or the process even stops altogether. That's why we put together complete packages instead of hiring out individual units.",
    rb: [
      [
        "Capacity",
        "The construction dehumidifiers determine how many litres of moisture can be taken out of the air each day. We size to your actual volume, not too small, not too big.",
      ],
      [
        "Circulation",
        "Without air movement, a saturated layer forms against the screed and walls, and that's where the drying stops. The fans break it up and win you days.",
      ],
      [
        "Temperature",
        "Below 15 °C, air barely absorbs any moisture. The heater brings cold rooms up to working temperature, so the dehumidifiers run at full power.",
      ],
    ],
    stats: [
      ["60%", "faster drying than natural drying"],
      ["48 h", "before mould starts to grow, so starting quickly pays off"],
      ["≤ 2%", "residual moisture required before you can finish"],
      ["24 h", "delivered, positioned and adjusted"],
    ],
    watInbegrepen: "What's included?",
    hulp: "Need help? Call us",
  },
} satisfies Copy<PakketCopy>;

const INC_ICONS = [DropletPinIcon, TruckIcon, FileCheckIcon, ChatIcon, RefreshIcon];

const VerhuurPakketPage = () => {
  const t = useCopy(COPY);
  const taal = useTaal();
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  const CAT = catInTaal(taal);
  const ROLE = roleInTaal(taal);
  const SPECS = specsInTaal(taal);
  const [searchParams] = useSearchParams();
  const config = useMemo(() => parseConfig(searchParams), [searchParams]);

  // Extra toestellen uit de droogsimulator (bv. een droger extra bij "snel"):
  // ze tellen hier mee in prijs en lijst, en gaan door naar de boeking.
  const extra = useMemo(() => extraUitQuery(searchParams), [searchParams]);
  const items = useMemo(() => allItems(config, extra), [config, extra]);
  const lead = packageImage(config, items);
  const gallery = packageGallery(config, items);
  const galleryAlts = packageGalleryAltsInTaal(config, items, gallery, taal);

  const [shot, setShot] = useState(0);
  const [tab, setTab] = useState(SPECS[0].k);

  const cap = totalCapacity(items);
  const air = totalAirflow(items);
  const days = dryingDays(config);
  /*
    De huurtermijn komt uit het pakket, niet uit de querystring: de shop verkoopt
    elk pakket voor één termijn en leidt die af uit de materiaaldikte. Stond hier
    nog `config.weeks`, dan toonde een pakket van vier weken de prijs van twee.
  */
  const weeks = configWeeks(config);
  const total = configPrice(config, items);
  const bookingHref = `${lp("/verhuur/boeking")}?${configToQuery(config)}${extraNaarQuery(extra)}`;

  return (
    <div className="vh-pkg">
      <PageMeta
        title={t.title}
        description={t.description}
        // Het pakket wordt bepaald door de querystring; die varianten zijn
        // configuratie van dezelfde pagina, geen aparte URL's om te indexeren.
        path={lp("/verhuur/pakket")}
        image={lead}
        ogType="product"
        jsonLd={breadcrumbSchema([
          { name: t.home, path: lp("/") },
          { name: t.crumbDroging, path: lp("/verhuur/calculator") },
          { name: t.crumbPakket, path: lp("/verhuur/pakket") },
        ])}
      />
      <V3Header lightAfter={-1} />

      <section className="lead">
        <div className="shell">
          <div className="crumb">
            <Link to={lp("/")}>{t.home}</Link> <span>/</span>
            <Link to={lp("/verhuur/calculator")}>{t.crumbDroging}</Link> <span>/</span>
            <span className="cur">{t.cur}</span>
          </div>
          <div className="lead-in">
            <span className="chip">{t.chip}</span>
            <h1>{t.h1}</h1>
            <p className="lead-sub">{packageSpecLineInTaal(config, taal)}</p>
            <div className="lead-facts">
              <div className="lf">
                <b>{deviceCount(items)}</b>
                <span>{t.factToestellen}</span>
              </div>
              <div className="lf">
                <b>{cap} L</b>
                <span>{t.factAfvoer}</span>
              </div>
              <div className="lf">
                <b>{days}</b>
                <span>{t.factDagen}</span>
              </div>
              <div className="lf">
                <b>{t.fact24}</b>
                <span>{t.fact24Label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="phero">
        <div className="shell">
          <div className="pgrid">
            <div className="gal">
              <div className="gmain">
                <span className="gtag">{t.chip}</span>
                {/* LCP-beeld: eager en met voorrang. Op lazy stond het achteraan in de rij — 9,2 s op mobiel (Lighthouse, 02-11-2026). */}
                <Head>
                  {/* De foto's staan op Supabase Storage: de verbinding daarheen vooraf openen. */}
                  <link rel="preconnect" href="https://zqzrdzpfxqlwrojxsqdl.supabase.co" />
                  <link rel="preload" href={gallery[0]} as="image" fetchPriority="high" />
                </Head>
                <img src={gallery[shot]} alt={galleryAlts[shot]} fetchPriority="high" decoding="async" />
              </div>
              <div className="gth">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className={i === shot ? "on" : undefined}
                    onClick={() => setShot(i)}
                    aria-label={t.afbeelding(i + 1)}
                  >
                    <img src={src} alt={galleryAlts[i]} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pinfo">
              <div className="ptag">{t.ptag}</div>
              <h2>{t.h2(config.size)}</h2>
              <div className="usp">
                {t.usps.map(([vet, rest]) => (
                  <div key={vet}>
                    <CheckIcon />
                    <span>
                      <b>{vet}</b>
                      {rest}
                    </span>
                  </div>
                ))}
              </div>
              <div className="avail">
                <span className="d" /> {t.avail}
              </div>
              <div className="pprice">
                <div>
                  <div className="pv">{toon(total).tekst}</div>
                  <div className="pl">
                    {t.voor(weeks)} · {t.inbegrepen} · {toon(total).label}
                  </div>
                </div>
              </div>
              <div className="jump">
                <Link className="btn btn-d" to={bookingHref}>
                  {t.doorgaan}
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="build" id="afrekenen">
        <div className="shell">
          <div className="bgrid">
            <div className="bcol">
              <div className="blk">
                <div className="blkh">
                  <h2>{t.uwPakket}</h2>
                  <span className="step">{t.inbegrepenToestellen}</span>
                </div>
                <p className="bsub">{t.uwPakketSub}</p>
                <div>
                  {items.map((it) => (
                    <div className="dev" key={it.k}>
                      <span className="dq">{it.q}×</span>
                      <img src={CAT[it.k].img} alt={CAT[it.k].name} loading="lazy" decoding="async" />
                      <span className="dn">
                        <b>{CAT[it.k].name}</b>
                        <small>{CAT[it.k].sub}</small>
                      </span>
                      <span className="dp">
                        {toon(CAT[it.k].w2 * it.q).tekst} {t.perTweeWeken}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="spx">
                  <div className="s">
                    <div className="n">
                      {cap}
                      <small> L</small>
                    </div>
                    <div className="l">{t.spxAfvoer}</div>
                  </div>
                  <div className="s">
                    <div className="n">
                      {/* Engels schrijft een decimale punt; Nederlands en Frans een komma. */}
                      {taal === "en" ? (air / 1000).toFixed(1) : (air / 1000).toFixed(1).replace(".", ",")}
                      <small>k</small>
                    </div>
                    <div className="l">{t.spxLucht}</div>
                  </div>
                  <div className="s">
                    <div className="n">{days}</div>
                    <div className="l">{t.spxDagen}</div>
                  </div>
                </div>
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>{t.rolH}</h2>
                  <span className="step">{t.rolStep}</span>
                </div>
                <p className="bsub">{t.rolSub}</p>
                <div className="role">
                  {items.map((it) => (
                    <div className="rrow" key={it.k}>
                      <span className="ri">
                        <img src={CAT[it.k].img} alt={CAT[it.k].name} loading="lazy" decoding="async" />
                      </span>
                      <span className="rc2">
                        <span className="rtag">
                          {ROLE[it.k].tag} · {t.inUwPakket(it.q)}
                        </span>
                        <h3>{CAT[it.k].name}</h3>
                        <p>{ROLE[it.k].txt}</p>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="incsec">
        <div className="shell">
          <div className="incwrap">
            <div className="ih">
              <h2>{t.incH}</h2>
              <span>{t.incSpan}</span>
            </div>
            <p>{t.incP}</p>
            <div className="inclist">
              {t.inc.map(([titel, tekst], i) => {
                const Icon = INC_ICONS[i];
                return (
                  <div className={i === 0 ? "ii wide" : "ii"} key={titel}>
                    <span className="ic2">
                      <Icon />
                    </span>
                    <div>
                      <b>{titel}</b>
                      <p>{tekst}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="redband">
        <div className="shell">
          <div className="rb">
            <span className="rb-lz1" />
            <span className="rb-lz2" />
            <div className="rb-in">
              <div className="rb-head">
                <span className="rb-chip">{t.rbChip}</span>
                <h2>{t.rbH}</h2>
                <p>{t.rbP}</p>
              </div>
              <div className="rb-grid">
                {t.rb.map(([titel, tekst], i) => (
                  <div className="rb-c" key={titel}>
                    <div className="rb-n">{String(i + 1).padStart(2, "0")}</div>
                    <h3>{titel}</h3>
                    <p>{tekst}</p>
                  </div>
                ))}
              </div>
              <div className="rb-stats">
                {t.stats.map(([cijfer, tekst]) => (
                  <div className="rb-s" key={cijfer}>
                    <b>{cijfer}</b>
                    <span>{tekst}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="specs">
        <div className="shell">
          <div className="stabs">
            {SPECS.map((s) => (
              <button
                key={s.k}
                type="button"
                className={`stab${s.k === tab ? " on" : ""}`}
                onClick={() => setTab(s.k)}
              >
                {s.tab}
              </button>
            ))}
          </div>
          <div>
            {SPECS.map((s) => (
              <div className={`spane${s.k === tab ? " on" : ""}`} key={s.k}>
                <div>
                  <h3>{s.h}</h3>
                  {s.p.map((paragraph, i) => (
                    <div key={paragraph.slice(0, 24)}>
                      {i === 1 && <div className="sh4">{s.h4}</div>}
                      {/* Vaste designtekst met <b>-accenten — geen invoer van buitenaf. */}
                      <p className="sp" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    </div>
                  ))}
                  <div className="sbtns">
                    <a className="btn btn-r" href="#afrekenen">
                      {t.watInbegrepen}
                    </a>
                    <a className="btn btn-r" href="tel:+3236899065">
                      {t.hulp}
                    </a>
                  </div>
                </div>
                <div className="sgrid">
                  {s.g.map(([groupName, rows]) => (
                    <div className="sgrp2" key={groupName}>
                      <h4>{groupName}</h4>
                      <div className="stbl">
                        {rows.map(([label, value]) => (
                          <div key={label}>
                            <span>{label}</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default VerhuurPakketPage;
