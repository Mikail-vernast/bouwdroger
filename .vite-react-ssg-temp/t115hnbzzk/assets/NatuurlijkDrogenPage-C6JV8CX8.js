import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Fragment as Fragment$1 } from "react";
import { Link } from "react-router-dom";
import { G as GidsShell, a as GidsFaqSectie } from "./GidsShell-BMzhBGtD.js";
import { C as ContactBlok } from "./ContactBlok-ykYeBJgi.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { N as NUMBER_LOCALE, a as useLokaalPad, u as useCopy } from "../main.mjs";
import { a as natuurlijkePleisterWeken, n as natuurlijkeChapeWeken, d as droogtermijnen, t as termijnZonderDikte } from "./droogtijden-B2lUiF15.js";
import { C as ClockIcon, b as LayersIcon, G as GaugeIcon, T as ThermoIcon, a as WindIcon, W as WarnIcon, c as DrogerIcon } from "./icons-DTi5RvwE.js";
import { p as BrushIcon, o as CellarIcon, q as HouseSmallIcon, n as MoldIcon } from "./V3Header-BeIMcMg7.js";
import "./PageMeta-BXulEWcY.js";
import "vite-react-ssg";
import "./V3Footer-9z4J1I4x.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./FaqBlok-Bkr2MHqW.js";
import "./schema-VJMHyxOJ.js";
import "./verhuur.fr-CrIPL5Eo.js";
/* empty css                                */
import "./AanvraagForm-CNDpbMyw.js";
import "lucide-react";
import "./FontPreload-C6Rzq6ld.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/NatuurlijkDrogenPage.copy.tsx");
const wekenNl = (n) => `${n} ${n === 1 ? "week" : "weken"}`;
const wekenFr = (n) => `${n.toLocaleString(NUMBER_LOCALE.fr)} ${n === 1 ? "semaine" : "semaines"}`;
const enGetal = (n) => n.toLocaleString("en-GB");
const wekenEn = (n) => `${enGetal(n)} ${n === 1 ? "week" : "weeks"}`;
const COPY = {
  nl: ({ lp, gCm, gNat, gWeken, pCm, pMin, dikCm }) => ({
    weken: wekenNl,
    cm: (n) => `${n}`,
    faq: [
      {
        question: "Hoe lang duurt het om een nieuwbouw natuurlijk te laten drogen?",
        answer: `Daar bestaat geen vaste termijn voor, en dat is precies het probleem. Voor de chape, meestal de traagste laag, geldt in de bouwpraktijk ongeveer een week per centimeter voor de eerste vier centimeter en daarna ongeveer twee weken per extra centimeter: bij ${gCm} cm komt dat neer op zo'n ${gNat} weken. Die richtwaarde geldt alleen in een verwarmde en geventileerde ruimte rond 20 graden. In een dichtgemaakte, onverwarmde werf in november loopt ze niet langzamer, ze loopt dan bijna niet. Daarom spreekt niemand zich uit over een einddatum zonder te meten.`
      },
      {
        question: "Kan ik niet gewoon de ramen openzetten en verwarmen?",
        answer: "Dat is de natuurlijke methode, en ze werkt echt, op voorwaarde dat u ze allebei tegelijk doet. Alleen ventileren koelt het gebouw af, en koude lucht draagt weinig vocht weg. Alleen verwarmen duwt het vocht uit de materialen maar laat het in huis, waar het op het eerste koude oppervlak weer neerslaat. De combinatie werkt het best in de winter: buitenlucht van 5 graden met 90 procent vochtigheid wordt, opgewarmd tot 20 graden binnen, lucht van rond de 35 procent, en die neemt gretig water op. Alleen betaalt u dan wel de warmte die met elke ventilatieronde naar buiten verdwijnt."
      },
      {
        question: "Moet ik ramen openzetten als er een bouwdroger draait?",
        answer: "Nee, net niet. Een condensbouwdroger werkt in een gesloten ruimte: hij haalt de lucht binnen, koelt ze af tot het water eruit condenseert, voert dat water af en blaast de lucht droog en licht opgewarmd weer in de kamer. Staan de ramen open, dan voert u voortdurend nieuwe vochtige lucht aan en droogt het toestel in feite de straat. Houd deuren en ramen dus dicht, en laat het toestel dag en nacht doorlopen."
      },
      {
        question: "Wat is het verschil met gewoon wachten, in weken?",
        answer: `Voor een chape van ${gCm} cm staat de richtwaarde voor natuurlijk drogen rond ${gNat} weken bij gunstig weer, tegenover ${gWeken !== null ? wekenNl(gWeken) : "enkele weken"} met een droogpakket. Bij pleisterwerk is het verschil kleiner in weken maar even onvoorspelbaar: een laag van ${pCm} cm is in een verluchte, verwarmde woning in ${wekenNl(pMin)} droog en in een dichte, koude werf na een maand nog niet. Het echte verschil is dus niet alleen de duur, maar dat er bij een droogpakket een datum op staat.`
      },
      {
        question: "Mag ik verhuizen in een huis dat nog niet droog is?",
        answer: "Het kan, maar u neemt dan het vocht mee in uw leven: beslagen ramen, een muffe geur, kasten tegen buitenmuren waar schimmel achter komt en een verwarmingsfactuur die vooral water opwarmt. Vervelender is wat er onder uw vloer en achter uw verf gebeurt, want dat ziet u pas een seizoen later. Wie toch verhuist, blijft best stevig verwarmen en ventileren, en legt gevoelige vloerafwerking zo laat mogelijk."
      },
      {
        question: "Werkt een bouwdroger ook op een koude werf in de winter?",
        answer: "Een condensdroger haalt zijn beste rendement ruwweg tussen 15 en 25 graden; daaronder valt zijn opbrengst terug omdat er minder water in de lucht zit om uit te condenseren. Op een koude werf zetten we er daarom een elektrische bouwkachel met thermostaat bij, of we kiezen een adsorptiedroger, die met een droogmiddel werkt en ook bij lage temperatuur vocht blijft wegnemen. Welk toestel wanneer past, staat in onze gids over condens- en adsorptiedrogers."
      },
      {
        question: "Hoe weet ik of het huis echt droog is?",
        answer: "Door te meten, niet door te kijken. Een chape die hard en licht van kleur is, kan vanbinnen nog nat zijn, en een muur die droog aanvoelt is dat aan de buitenste millimeters. Wij leggen de restvochtigheid vast bij de start en opnieuw bij de oplevering; die twee waarden zijn waar een einddatum op steunt. Heeft uw vloerlegger of uw bouwdossier een ondertekend verslag nodig, dan kan daar een officieel vochtrapport bij."
      },
      {
        question: "Wat kost drogen met een bouwdroger?",
        answer: "Dat hangt af van het volume van uw woning en van wat er moet drogen: die twee bepalen hoeveel toestellen er nodig zijn en hoe lang ze blijven staan. De droogcalculator vraagt uw oppervlakte, de chapedikte en wat u droogt, en toont meteen het pakket met de prijs, inclusief levering, installatie en de metingen. Alle losse dag- en weektarieven staan op onze prijzenpagina."
      }
    ],
    crumbHome: "Home",
    crumbGidsen: "Gidsen",
    crumb: "Natuurlijk drogen of met een bouwdroger?",
    kick: "Gids · nieuwbouw",
    h1: "Nieuwbouw drogen: natuurlijk of met een bouwdroger?",
    intro: "In elke nieuwbouw zit bouwvocht: aanmaakwater uit de chape, de pleisterlaag, het metselwerk en het beton. Dat water moet het gebouw uit voordat de vloerlegger, de schilder en uw verhuiswagen komen. Er zijn twee manieren om dat te doen. U laat het huis op eigen kracht drogen, of u stuurt het binnenklimaat met een bouwdroger. Hieronder wat die eerste manier echt van u vraagt, waarom het seizoen erover beslist, en wat het verschil is in weken.",
    heroAlt: "Bouwdroger aan het werk in een nieuwbouwwoning waar chape en pleisterwerk nog nat zijn",
    badgeTop: gWeken !== null ? wekenNl(gWeken) : "Enkele weken",
    badgeSub: `in plaats van ± ${gNat} weken bij ${gCm} cm chape`,
    stats: [
      { em: "weken", l: `Natuurlijk drogen van ${gCm} cm chape, en dan nog alleen bij gunstig binnenklimaat` },
      { em: "weken", l: "Dezelfde vloer met een droogpakket, met een einddatum erop" },
      { em: "u", l: "Per dag actief. Een natuurlijke droging valt elke nacht stil wanneer het afkoelt" },
      { em: "metingen", l: "Voor en na. Dat is wat het verschil maakt tussen een datum en een inschatting" }
    ],
    lagen: [
      { titel: "De chape", tekst: "Het grootste reservoir, en het traagste. Het water onderin moet door de volle dikte naar boven, want naar beneden sluit de isolatie alles af." },
      { titel: "Het pleisterwerk", tekst: "Dun, maar over elke muur en elk plafond van het huis. Het geeft zijn water snel af, en dat komt allemaal in dezelfde binnenlucht terecht." },
      { titel: "Metselwerk en beton", tekst: "De ruwbouw heeft maanden in weer en wind gestaan. Snelbouwsteen en beton nemen water op en geven het daarna traag weer af aan de ruimte." },
      { titel: "De afwerking", tekst: "Lijmmortel, plamuur, gietvloer en verf brengen opnieuw water binnen, net wanneer het gebouw dicht is en er niets meer uit kan." },
      { titel: "En dan de lucht", tekst: "Alles wat die lagen afgeven, hangt eerst in de binnenlucht. Raakt die lucht het gebouw niet uit, dan trekt het vocht gewoon ergens anders weer in." }
    ],
    voorwaarden: [
      { titel: "Warmte", tekst: "Warme lucht draagt veel meer water dan koude. In een onverwarmde ruwbouw van vijf graden staat een droging zo goed als stil, hoe lang u ook wacht." },
      { titel: "Droge lucht", tekst: "Lucht die al vol vocht zit, neemt niets meer op. Zolang de binnenlucht verzadigd blijft, kan de chape haar water niet kwijt." },
      { titel: "Beweging", tekst: "Vlak boven een vloer en tegen een muur blijft een laag verzadigde lucht hangen. Zonder beweging isoleert die laag het oppervlak van de rest van de kamer." },
      { titel: "Afvoer", tekst: "Het vocht moet het gebouw uit. Blijft het binnen, dan slaat het neer op het koudste oppervlak dat het vindt: het glas, de dorpel, de hoek achter de kast." },
      { titel: "En tijd", tekst: "De vier hierboven bepalen hoeveel tijd u nodig heeft. Werkt er een mee en de rest niet, dan is het de traagste die het tempo zet." }
    ],
    risicos: [
      { titel: "De vloer komt bol te staan", tekst: "Parket, pvc en een gietvloer sluiten de chape af. Zit er dan nog vocht onder, dan kan het nergens heen en komt het terug als bolle planken of loslatende stroken." },
      { titel: "De verf hecht niet", tekst: "Op een pleisterlaag die vanbinnen nog nat is, blijft verf niet zitten. Het resultaat zijn doffe vlekken, blazen of een laag die na een jaar loskomt." },
      { titel: "Schimmel in de koude hoeken", tekst: "Vocht slaat neer waar het koudst is: achter kasten, in de hoek van een buitenmuur, op de dorpels. Daar begint de zwarte aanslag, en die komt niet vanzelf weg." },
      { titel: "Een huis dat blijft zweten", tekst: "Beslagen ramen, een muffe geur en wasgoed dat niet droogt. Wie in een nat huis gaat wonen, verwarmt maandenlang water in plaats van zijn woning." },
      { titel: "Uw planning schuift op", tekst: "De vloerlegger en de schilder hebben een agenda. Wie zijn plaats laat schieten omdat het nog niet droog is, staat achteraan, en dat kost vaak meer weken dan de droging zelf." }
    ],
    vpKick: "Het vertrekpunt",
    vpH2: "Een nieuw huis is een nat huis.",
    vpLede: "Het gaat niet om een plas op de vloer. Een chape van 6 cm over 120 m² is ruim zeven kubieke meter mortel, en het aanmaakwater dat het cement niet chemisch bindt, moet er via het oppervlak weer uit. Daar komen de muren, de ruwbouw en de afwerking nog bij. Al dat water verlaat het gebouw langs één weg: de binnenlucht.",
    vpNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Daarom gaat drogen altijd over lucht." }),
      " Een bouwdroger haalt geen water uit uw vloer, hij haalt het uit de lucht erboven. Pas doordat die lucht droger wordt, kan de vloer weer afgeven. Hoe dat precies werkt, staat in",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "hoe drogen werkt" }),
      "."
    ] }),
    nKick: "Natuurlijk drogen",
    nH2: "Vier dingen moeten kloppen. Tegelijk.",
    nLede: "Natuurlijk drogen is geen afwachten, het is een methode: verwarmen en ventileren, elke dag opnieuw. Ze werkt alleen wanneer deze voorwaarden samen vallen. Ontbreekt er één, dan bepaalt die ene het tempo van het geheel.",
    nNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Verwarmen en ventileren horen bij elkaar." }),
      " Alleen ventileren koelt de woning af, en koude lucht neemt weinig vocht mee naar buiten. Alleen verwarmen drijft het vocht uit de materialen maar houdt het binnen, waar het op het koudste oppervlak weer neerslaat. Wie natuurlijk droogt, doet dus allebei, en betaalt de warmte die bij elke ventilatieronde mee naar buiten gaat."
    ] }),
    sH2: "Waarom de kalender beslist en niet u",
    sP: [
      /* @__PURE__ */ jsx(Fragment, { children: "Lucht kan maar een bepaalde hoeveelheid water dragen, en hoe warmer ze is, hoe meer dat er zijn. Dat ene gegeven verklaart waarom dezelfde woning in januari sneller droogt dan in juli, zolang u maar stookt." }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "In de winter is buitenlucht kurkdroog zodra ze opwarmt." }),
        " Lucht van 5 graden met 90 procent relatieve vochtigheid draagt weinig water. Laat u die binnen en warmt ze op tot 20 graden, dan zakt haar relatieve vochtigheid naar ongeveer 35 procent. Zulke lucht neemt gretig vocht op, en met de volgende ventilatieronde gaat dat vocht mee naar buiten."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "In de zomer werkt datzelfde mechanisme tegen u." }),
        " Buitenlucht van 20 graden met 80 procent vochtigheid zit al goed vol. Binnengelaten in een woning van 22 graden komt ze uit rond 70 procent, en dan is er nog maar weinig ruimte over om vocht op te nemen. Ventileren voelt dan goed aan maar levert nauwelijks droging op."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "En in een dichtgemaakte, onverwarmde ruwbouw gebeurt er niets." }),
        " Binnen en buiten zijn even koud, de lucht staat stil en is verzadigd. De woning droogt niet traag, ze droogt gewoon niet. Dat is de toestand waarin de meeste werven in november staan."
      ] })
    ],
    sCaption: "Hoe dezelfde handeling, ventileren, per seizoen anders uitpakt. De percentages zijn rekenvoorbeelden bij een binnentemperatuur van 20 tot 22 graden, geen meetwaarden van uw woning.",
    sKoppen: ["Situatie", "Binnen na opwarmen", "Wat ventileren oplevert"],
    sRijen: [
      ["Winter, verwarmd", "± 35 %", "Sterke droging, zolang u blijft stoken"],
      ["Lente of herfst", "45 tot 65 %", "Droogt met horten en stoten, een natte week zet terug"],
      ["Zomer, warm en vochtig", "± 70 %", "Weinig tot niets, soms voert u vocht aan"],
      ["Gesloten ruwbouw, geen verwarming", "80 % en meer", "De droging staat zo goed als stil"]
    ],
    vKick: "Het verschil",
    vH2: "Dezelfde vloer, twee tijdlijnen.",
    vLede: "Links wat de chape op eigen kracht nodig heeft bij gunstig binnenklimaat, rechts de huurtermijn die wij voor die dikte in onze pakketten rekenen. Dat verschil is geen belofte over úw vloer, het is het verschil tussen afwachten en sturen.",
    balkNat: (cm) => `${cm} cm, natuurlijk drogen`,
    balkPakket: (cm) => `${cm} cm, met een droogpakket`,
    vglNoot: "De balken staan op dezelfde schaal, met de traagste droging op 100 procent. De richtwaarde volgt de gangbare vuistregel voor zandcementchape in een verluchte ruimte rond 20 graden.",
    tCaption: "Natuurlijk drogen: richtwaarden uit de bouwpraktijk bij gunstig binnenklimaat. Met bouwdroger: de huurtermijn van onze vaste pakketten, inclusief voor- en nameting van de restvochtigheid. Geen van beide kolommen vervangt een meting.",
    tKoppen: ["Wat er droogt", "Natuurlijk (richtwaarde)", "Met een droogpakket"],
    tChape: (cm) => `Chape, ${cm} cm`,
    tPleister: (cm) => `Pleisterwerk, ${cm} cm`,
    tTot: (min, max) => `${min} tot ${max}`,
    tBeide: "Chape en pleisterwerk samen",
    tBeideNat: "De traagste van de twee",
    vNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Let op wat er in de linkerkolom staat." }),
      " Dat zijn richtwaarden bij een verwarmd en geventileerd gebouw, dus bij de beste omstandigheden die natuurlijk drogen kan krijgen. In een koude, dichtgemaakte werf hoort daar geen getal bij, en dat is geen slag om de arm maar de kern van de zaak. En kijk naar de dunne pleisterlaag: daar is het verschil klein tot onbestaand. Op zo'n werf koopt u met een pakket geen weken maar zekerheid, en soms heeft u het gewoon niet nodig. Per materiaal gaan",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "de gids over chape" }),
      " en",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "die over pleisterwerk" }),
      " er dieper op in."
    ] }),
    zKick: "Naast elkaar",
    zH2: "Wat een bouwdroger anders doet dan wachten.",
    zLede: "Het verschil zit niet alleen in snelheid. Een natuurlijke droging hangt af van het weer, van uw stookgedrag en van wie er die dag de ramen openzet. Een droogpakket maakt er een gestuurd en meetbaar proces van.",
    natLabel: "Natuurlijk drogen",
    natH3: "Gratis, maar u heeft het niet in de hand.",
    natLijst: [
      { b: "Het weer bepaalt het tempo.", rest: " Een natte week in het najaar zet de droging terug, en niemand kan u zeggen hoeveel." },
      { b: "'s Nachts valt ze stil.", rest: " Koelt het gebouw af, dan loopt de luchtvochtigheid weer op en trekt het vocht deels terug in vloer en muren." },
      { b: "De warmte gaat mee naar buiten.", rest: " Elke ventilatieronde voert vocht af en uw gestookte warmte erbij." },
      { b: "Er wordt niets gemeten.", rest: " Zonder meting is er geen einddatum, alleen een gevoel dat het wel droog zal zijn." }
    ],
    natVoet: "Kost u geen huur, wel weken en zekerheid.",
    pakLabel: "Met een droogpakket",
    pakH3: "Een gestuurd klimaat, met een datum eraan.",
    pakLijst: [
      { b: "Gesloten ruimte, geen warmteverlies.", rest: " Ramen en deuren blijven dicht; het toestel haalt het water uit de lucht en geeft die lucht droog en licht opgewarmd terug." },
      { b: "Dag en nacht, op een streefwaarde.", rest: " De hygrostaat houdt de luchtvochtigheid laag en schakelt zelf terug zodra ze gehaald is." },
      { b: "Een ventilator over het oppervlak.", rest: " Die veegt de verzadigde laag boven de chape weg, zodat er telkens droge lucht bij de vloer komt." },
      {
        b: "Meting voor en na.",
        rest: /* @__PURE__ */ jsxs(Fragment, { children: [
          " ",
          "Daarop steunt de einddatum, en is de vloer dan niet droog, dan verlengen wij kosteloos. Zie",
          " ",
          /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "de Drooggarantie" }),
          "."
        ] })
      }
    ],
    pakVoet: "Kost u huur, levert u een datum op die u aan uw aannemer kunt doorgeven.",
    rKick: "De rekening achteraf",
    rH2: "Wat er misgaat op een huis dat nog nat is.",
    rLede: "Drogen is geen kwestie van geduld alleen. Zodra er op bouwvocht verder gewerkt wordt, verplaatst het probleem zich naar lagen waar u het pas een seizoen later terugziet.",
    rNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: 'Dit is ook het antwoord op "waarom zou ik betalen om te drogen".' }),
      " Een herstelling van een bolstaande vloer of een schilderbeurt die opnieuw moet, kost een veelvoud van een droogpakket. Welke schade in de praktijk het vaakst terugkomt, staat op",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "waarom bouwdroging" }),
      "."
    ] }),
    wH2: "Wanneer natuurlijk drogen wel volstaat",
    wP1: "Niet elke werf heeft een bouwdroger nodig, en wij zeggen dat liever hier dan nadat u betaald heeft. Natuurlijk drogen is een goede keuze wanneer deze dingen samenvallen.",
    wLijst: [
      { b: "U heeft maanden speling.", rest: " Er staat geen vloerlegger of schilder te wachten, en een uitloop van enkele weken verandert niets aan uw planning." },
      { b: "Het is zomer en u kunt alles openzetten.", rest: " Een huis dat dagenlang in de tocht staat bij warm, droog weer verliest veel vocht vanzelf." },
      { b: "Het gaat alleen om pleisterwerk in een dunne laag.", rest: " Dat is de snelste van de lagen; zonder dikke chape eronder droogt het een stuk sneller weg." },
      { b: "De woning is verwarmd en al bewoond.", rest: " Dan droogt ze elke dag een beetje mee, zolang u blijft ventileren." }
    ],
    wP2: "Valt één van die punten weg, dan koopt u met een droogpakket geen snelheid maar zekerheid: een termijn die u kunt doorgeven en een meting die het bevestigt. Wilt u alleen de toestellen en doet u de opstelling zelf, dan kan dat ook, aan afhaaltarief in ons punt langs de A12.",
    wCaption: "Wat wij zelf zouden doen, per situatie. Twijfelt u, dan is de vraag niet hoe snel het moet maar of iemand een datum van u nodig heeft.",
    wKoppen: ["Uw situatie", "De aanpak die past"],
    wRijen: [
      ["Er staat geen datum op, zomer", "Natuurlijk drogen: verwarmen en ventileren"],
      ["Alleen pleisterwerk, dunne laag", "Vaak natuurlijk, zeker in een bewoond huis"],
      ["De vloerlegger staat geboekt", /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Droogpakket" }),
        " met meting en einddatum"
      ] })],
      [`Dichte ruwbouw, winter, chape van ${dikCm} cm`, "Droogpakket, bij koude werf met bouwkachel"],
      ["U plaatst liever zelf", /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "Losse toestellen" }),
        " aan afhaaltarief"
      ] })]
    ],
    faqTitel: "Natuurlijk drogen of huren, kort beantwoord",
    lKick: "Verder lezen",
    lH2: "Weet u al wat er bij u moet drogen?",
    lLede: "Dan gaan deze twee pagina's verder waar deze gids stopt: met de termijnen per laag en met wat er op uw werf gebeurt.",
    deur1H3: "Hoe lang moet chape drogen?",
    deur1P: "De richtwaarden per centimeter, het verschil tussen cement- en anhydrietchape, het opstookprotocol bij vloerverwarming en wanneer u restvocht meet.",
    deur1Meer: "Lees de gids over chape →",
    deur2H3: "Chape en pleisterwerk samen drogen",
    deur2P: "Wat een droging op een nieuwbouwwerf kost en hoe ze verloopt: één pakket, één huurtermijn en één meting voor en na.",
    deur2Meer: "Bekijk drogen in nieuwbouw →",
    lees: [
      ["/hoe-drogen-werkt", "Hoe drogen werkt"],
      ["/waarom-bouwdroging", "Waarom bouwdroging"],
      ["/gids/hoe-lang-moet-pleisterwerk-drogen", "Droogtijd van pleisterwerk"],
      ["/gids/condensdroger-of-adsorptiedroger", "Condensdroger of adsorptiedroger"],
      ["/gids/stroomverbruik-bouwdroger", "Stroomverbruik van een bouwdroger"],
      ["/prijzen", "Prijzen en tarieven"]
    ],
    mbKick: "Van richtwaarde naar datum",
    mbH3: "Geef ons uw oppervlakte en uw chapedikte, wij geven u een einddatum.",
    mbP: "De Calculator rekent uw volume door naar een pakket met de juiste toestellen en de juiste termijn. Onze technieker plaatst, stelt in en meet bij de start en bij de oplevering. Is het dan niet droog, dan verlengen wij kosteloos.",
    mbCta: "Bereken uw droogpakket",
    mbAlt: "Vernast technieker meet de restvochtigheid van een chape",
    cKick: "Twijfelt u of u moet huren?",
    cTitel: "Leg uw werf even voor aan een droogspecialist.",
    cLede: "Vertel ons wat er droogt, wanneer het klaar moet zijn en hoe uw werf erbij staat. U krijgt binnen één werkdag een eerlijk antwoord, ook als dat is dat u niets nodig heeft.",
    cOnderwerpen: ["Moet ik hier iets voor huren?", "Hoe lang duurt het bij mij?", "Prijs en leverdatum", "Iets anders"],
    cPlaceholder: "Bv. nieuwbouw 140 m², chape van 6 cm gelegd op 3 november, gepleisterd eind oktober, vloerlegger komt half december."
  }),
  fr: ({ lp, gCm, gNat, gWeken, pCm, pMin, dikCm }) => {
    const n = (x) => x.toLocaleString(NUMBER_LOCALE.fr);
    return {
      weken: wekenFr,
      cm: n,
      faq: [
        {
          question: "Combien de temps faut-il pour laisser sécher naturellement une nouvelle construction ?",
          answer: `Il n'existe pas de délai fixe, et c'est précisément le problème. Pour la chape, généralement la couche la plus lente, la pratique du bâtiment retient environ une semaine par centimètre pour les quatre premiers centimètres, puis environ deux semaines par centimètre supplémentaire : pour ${n(gCm)} cm, cela fait quelque ${n(gNat)} semaines. Cette valeur indicative ne vaut que dans une pièce chauffée et ventilée autour de 20 degrés. Sur un chantier fermé et non chauffé en novembre, le séchage ne ralentit pas : il s'arrête presque. C'est pourquoi personne ne s'engage sur une date de fin sans mesurer.`
        },
        {
          question: "Ne puis-je pas simplement ouvrir les fenêtres et chauffer ?",
          answer: "C'est la méthode naturelle, et elle fonctionne vraiment, à condition de faire les deux en même temps. Ventiler seul refroidit le bâtiment, et l'air froid emporte peu d'humidité. Chauffer seul chasse l'humidité des matériaux mais la garde dans la maison, où elle se dépose à nouveau sur la première surface froide. La combinaison fonctionne le mieux en hiver : de l'air extérieur à 5 degrés et 90 pour cent d'humidité devient, réchauffé à 20 degrés à l'intérieur, un air d'environ 35 pour cent, qui absorbe volontiers l'eau. Seulement, vous payez alors la chaleur qui s'échappe à chaque aération."
        },
        {
          question: "Dois-je ouvrir les fenêtres quand un déshumidificateur de chantier fonctionne ?",
          answer: "Non, surtout pas. Un déshumidificateur à condensation travaille dans un espace fermé : il aspire l'air intérieur, le refroidit jusqu'à ce que l'eau s'en condense, évacue cette eau et rejette l'air sec et légèrement réchauffé dans la pièce. Si les fenêtres sont ouvertes, vous amenez sans cesse de l'air humide neuf et l'appareil sèche en fait la rue. Gardez donc portes et fenêtres fermées, et laissez l'appareil tourner jour et nuit."
        },
        {
          question: "Quelle est la différence en semaines avec une simple attente ?",
          answer: `Pour une chape de ${n(gCm)} cm, la valeur indicative du séchage naturel est d'environ ${n(gNat)} semaines par temps favorable, contre ${gWeken !== null ? wekenFr(gWeken) : "quelques semaines"} avec un pack de séchage. Pour le plafonnage, la différence est plus faible en semaines mais tout aussi imprévisible : une couche de ${n(pCm)} cm est sèche en ${wekenFr(pMin)} dans une maison aérée et chauffée, et ne l'est toujours pas après un mois sur un chantier fermé et froid. La vraie différence n'est donc pas seulement la durée, mais qu'un pack de séchage s'accompagne d'une date.`
        },
        {
          question: "Puis-je emménager dans une maison qui n'est pas encore sèche ?",
          answer: "C'est possible, mais vous emportez alors l'humidité dans votre quotidien : fenêtres embuées, odeur de renfermé, armoires contre les murs extérieurs derrière lesquelles apparaissent des moisissures, et une facture de chauffage qui réchauffe surtout de l'eau. Plus ennuyeux encore, ce qui se passe sous votre sol et derrière votre peinture, car vous ne le voyez qu'une saison plus tard. Si vous emménagez malgré tout, continuez à bien chauffer et à ventiler, et posez les revêtements de sol sensibles le plus tard possible."
        },
        {
          question: "Un déshumidificateur de chantier fonctionne-t-il aussi sur un chantier froid en hiver ?",
          answer: "Un déshumidificateur à condensation atteint son meilleur rendement entre 15 et 25 degrés environ ; en dessous, sa production diminue parce qu'il y a moins d'eau dans l'air à condenser. Sur un chantier froid, nous ajoutons donc un chauffage de chantier électrique avec thermostat, ou nous choisissons un déshumidificateur à adsorption, qui fonctionne avec un agent déshydratant et continue à retirer l'humidité même à basse température. Quel appareil convient à quel moment, vous le lirez dans notre guide sur les déshumidificateurs à condensation et à adsorption."
        },
        {
          question: "Comment savoir si la maison est vraiment sèche ?",
          answer: "En mesurant, pas en regardant. Une chape dure et de couleur claire peut encore être humide à l'intérieur, et un mur qui semble sec ne l'est que sur ses derniers millimètres. Nous relevons l'humidité résiduelle au départ et à nouveau à la réception ; c'est sur ces deux valeurs que repose une date de fin. Si votre poseur de sol ou votre dossier de construction a besoin d'un rapport signé, un rapport d'humidité officiel peut s'y ajouter."
        },
        {
          question: "Combien coûte un séchage avec un déshumidificateur de chantier ?",
          answer: "Cela dépend du volume de votre logement et de ce qui doit sécher : ces deux éléments déterminent combien d'appareils il faut et combien de temps ils restent sur place. Le calculateur de séchage vous demande votre surface, l'épaisseur de la chape et ce que vous séchez, et affiche aussitôt le pack avec son prix, livraison, installation et mesures comprises. Tous les tarifs à la journée et à la semaine figurent sur notre page des prix."
        }
      ],
      crumbHome: "Accueil",
      crumbGidsen: "Guides",
      crumb: "Séchage naturel ou déshumidificateur ?",
      kick: "Guide · nouvelle construction",
      h1: "Sécher une nouvelle construction : naturellement ou avec un déshumidificateur ?",
      intro: "Toute nouvelle construction contient de l'humidité de construction : l'eau de gâchage de la chape, du plafonnage, de la maçonnerie et du béton. Cette eau doit quitter le bâtiment avant l'arrivée du poseur de sol, du peintre et de votre camion de déménagement. Il y a deux façons d'y arriver. Vous laissez la maison sécher par elle-même, ou vous pilotez le climat intérieur avec un déshumidificateur de chantier. Voici ce que la première façon exige réellement de vous, pourquoi la saison est déterminante, et quelle est la différence en semaines.",
      heroAlt: "Déshumidificateur de chantier au travail dans une maison neuve dont la chape et le plafonnage sont encore humides",
      badgeTop: gWeken !== null ? wekenFr(gWeken) : "Quelques semaines",
      badgeSub: `au lieu de ± ${n(gNat)} semaines pour une chape de ${n(gCm)} cm`,
      stats: [
        { em: "semaines", l: `Séchage naturel d'une chape de ${n(gCm)} cm, et seulement avec un climat intérieur favorable` },
        { em: "semaines", l: "Le même sol avec un pack de séchage, avec une date de fin" },
        { em: "h", l: "Actif par jour. Un séchage naturel s'arrête chaque nuit quand la température baisse" },
        { em: "mesures", l: "Avant et après. C'est ce qui fait la différence entre une date et une estimation" }
      ],
      lagen: [
        { titel: "La chape", tekst: "Le plus grand réservoir, et le plus lent. L'eau du fond doit remonter à travers toute l'épaisseur, car vers le bas, l'isolation ferme tout." },
        { titel: "Le plafonnage", tekst: "Mince, mais sur chaque mur et chaque plafond de la maison. Il libère son eau rapidement, et tout aboutit dans le même air intérieur." },
        { titel: "Maçonnerie et béton", tekst: "Le gros œuvre est resté des mois exposé aux intempéries. Les blocs et le béton absorbent l'eau puis la restituent lentement à la pièce." },
        { titel: "Les finitions", tekst: "Mortier-colle, enduit de lissage, sol coulé et peinture apportent à nouveau de l'eau, juste au moment où le bâtiment est fermé et que plus rien ne peut sortir." },
        { titel: "Et puis l'air", tekst: "Tout ce que ces couches libèrent se retrouve d'abord dans l'air intérieur. Si cet air ne sort pas du bâtiment, l'humidité se réinstalle tout simplement ailleurs." }
      ],
      voorwaarden: [
        { titel: "Chaleur", tekst: "L'air chaud transporte beaucoup plus d'eau que l'air froid. Dans un gros œuvre non chauffé à cinq degrés, le séchage est pratiquement à l'arrêt, quel que soit le temps que vous attendez." },
        { titel: "Air sec", tekst: "Un air déjà chargé d'humidité n'absorbe plus rien. Tant que l'air intérieur reste saturé, la chape ne peut pas se débarrasser de son eau." },
        { titel: "Mouvement", tekst: "Juste au-dessus d'un sol et contre un mur, une couche d'air saturé reste en place. Sans mouvement, cette couche isole la surface du reste de la pièce." },
        { titel: "Évacuation", tekst: "L'humidité doit sortir du bâtiment. Si elle reste à l'intérieur, elle se dépose sur la surface la plus froide qu'elle trouve : le vitrage, le seuil, le coin derrière l'armoire." },
        { titel: "Et du temps", tekst: "Les quatre facteurs ci-dessus déterminent le temps qu'il vous faut. Si l'un d'eux joue en votre faveur et pas les autres, c'est le plus lent qui donne le rythme." }
      ],
      risicos: [
        { titel: "Le sol se bombe", tekst: "Le parquet, le PVC et un sol coulé ferment la chape. S'il reste de l'humidité dessous, elle ne peut aller nulle part et revient sous forme de lames bombées ou de lés qui se décollent." },
        { titel: "La peinture n'adhère pas", tekst: "Sur un plafonnage encore humide à l'intérieur, la peinture ne tient pas. Résultat : des taches mates, des cloques ou une couche qui se détache après un an." },
        { titel: "Des moisissures dans les coins froids", tekst: "L'humidité se dépose là où il fait le plus froid : derrière les armoires, dans l'angle d'un mur extérieur, sur les seuils. C'est là que commencent les taches noires, et elles ne partent pas d'elles-mêmes." },
        { titel: "Une maison qui continue à transpirer", tekst: "Fenêtres embuées, odeur de renfermé et linge qui ne sèche pas. Qui emménage dans une maison humide chauffe de l'eau pendant des mois au lieu de son logement." },
        { titel: "Votre planning glisse", tekst: "Le poseur de sol et le peintre ont un agenda. Qui laisse passer son tour parce que ce n'est pas encore sec se retrouve en fin de file, et cela coûte souvent plus de semaines que le séchage lui-même." }
      ],
      vpKick: "Le point de départ",
      vpH2: "Une maison neuve est une maison humide.",
      vpLede: "Il ne s'agit pas d'une flaque sur le sol. Une chape de 6 cm sur 120 m², c'est plus de sept mètres cubes de mortier, et l'eau de gâchage que le ciment ne fixe pas chimiquement doit ressortir par la surface. S'y ajoutent les murs, le gros œuvre et les finitions. Toute cette eau quitte le bâtiment par un seul chemin : l'air intérieur.",
      vpNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "C'est pourquoi sécher est toujours une question d'air." }),
        " Un déshumidificateur de chantier ne retire pas l'eau de votre sol, il la retire de l'air au-dessus. C'est parce que cet air devient plus sec que le sol peut à nouveau céder son humidité. Le fonctionnement exact est expliqué dans ",
        /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "comment fonctionne le séchage" }),
        "."
      ] }),
      nKick: "Le séchage naturel",
      nH2: "Quatre conditions doivent être réunies. En même temps.",
      nLede: "Le séchage naturel n'est pas une attente, c'est une méthode : chauffer et ventiler, jour après jour. Elle ne fonctionne que lorsque ces conditions sont réunies. S'il en manque une, c'est celle-là qui fixe le rythme de l'ensemble.",
      nNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Chauffer et ventiler vont ensemble." }),
        " Ventiler seul refroidit la maison, et l'air froid emporte peu d'humidité dehors. Chauffer seul chasse l'humidité des matériaux mais la garde à l'intérieur, où elle se dépose à nouveau sur la surface la plus froide. Qui sèche naturellement fait donc les deux, et paie la chaleur qui part dehors à chaque aération."
      ] }),
      sH2: "Pourquoi c'est le calendrier qui décide, et pas vous",
      sP: [
        /* @__PURE__ */ jsx(Fragment, { children: "L'air ne peut transporter qu'une certaine quantité d'eau, et plus il est chaud, plus cette quantité est grande. Ce seul fait explique pourquoi une même maison sèche plus vite en janvier qu'en juillet, pour autant que vous chauffiez." }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("b", { children: "En hiver, l'air extérieur devient très sec dès qu'il se réchauffe." }),
          " De l'air à 5 degrés et 90 pour cent d'humidité relative contient peu d'eau. Si vous le laissez entrer et le réchauffez à 20 degrés, son humidité relative descend à environ 35 pour cent. Un tel air absorbe volontiers l'humidité, et à l'aération suivante, cette humidité part dehors avec lui."
        ] }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("b", { children: "En été, le même mécanisme joue contre vous." }),
          " De l'air extérieur à 20 degrés et 80 pour cent d'humidité est déjà bien chargé. Entré dans une maison à 22 degrés, il arrive à environ 70 pour cent, et il ne reste alors que peu de marge pour absorber l'humidité. Aérer donne une bonne impression mais ne sèche presque rien."
        ] }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("b", { children: "Et dans un gros œuvre fermé et non chauffé, il ne se passe rien." }),
          " Il fait aussi froid dedans que dehors, l'air est immobile et saturé. La maison ne sèche pas lentement, elle ne sèche pas du tout. C'est l'état de la plupart des chantiers en novembre."
        ] })
      ],
      sCaption: "Comment un même geste, aérer, donne un résultat différent selon la saison. Les pourcentages sont des exemples de calcul pour une température intérieure de 20 à 22 degrés, et non des valeurs mesurées chez vous.",
      sKoppen: ["Situation", "À l'intérieur après réchauffement", "Ce qu'apporte l'aération"],
      sRijen: [
        ["Hiver, chauffé", "± 35 %", "Séchage marqué, tant que vous continuez à chauffer"],
        ["Printemps ou automne", "45 à 65 %", "Sèche par à-coups, une semaine humide fait reculer"],
        ["Été, chaud et humide", "± 70 %", "Peu ou rien, parfois vous faites entrer de l'humidité"],
        ["Gros œuvre fermé, sans chauffage", "80 % et plus", "Le séchage est pratiquement à l'arrêt"]
      ],
      vKick: "La différence",
      vH2: "Le même sol, deux calendriers.",
      vLede: "À gauche, ce dont la chape a besoin par elle-même avec un climat intérieur favorable ; à droite, la durée de location que nous comptons pour cette épaisseur dans nos packs. Cette différence n'est pas une promesse sur votre sol à vous, c'est la différence entre attendre et piloter.",
      balkNat: (cm) => `${cm} cm, séchage naturel`,
      balkPakket: (cm) => `${cm} cm, avec un pack de séchage`,
      vglNoot: "Les barres sont à la même échelle, le séchage le plus lent valant 100 pour cent. La valeur indicative suit la règle empirique courante pour une chape sable-ciment dans une pièce aérée autour de 20 degrés.",
      tCaption: "Séchage naturel : valeurs indicatives de la pratique du bâtiment avec un climat intérieur favorable. Avec déshumidificateur : la durée de location de nos packs fixes, mesure de l'humidité résiduelle avant et après comprise. Aucune des deux colonnes ne remplace une mesure.",
      tKoppen: ["Ce qui sèche", "Naturel (valeur indicative)", "Avec un pack de séchage"],
      tChape: (cm) => `Chape, ${cm} cm`,
      tPleister: (cm) => `Plafonnage, ${cm} cm`,
      tTot: (min, max) => `${n(min)} à ${max}`,
      tBeide: "Chape et plafonnage ensemble",
      tBeideNat: "Le plus lent des deux",
      vNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Regardez bien ce qui figure dans la colonne de gauche." }),
        " Ce sont des valeurs indicatives pour un bâtiment chauffé et ventilé, donc dans les meilleures conditions que puisse avoir un séchage naturel. Sur un chantier froid et fermé, aucun chiffre ne s'applique, et ce n'est pas une précaution oratoire mais le cœur du sujet. Et regardez la fine couche de plafonnage : la différence y est faible, voire inexistante. Sur un tel chantier, un pack ne vous fait pas gagner des semaines mais de la certitude, et parfois vous n'en avez tout simplement pas besoin. Matériau par matériau,",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "le guide sur la chape" }),
        " et",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "celui sur le plafonnage" }),
        " vont plus loin."
      ] }),
      zKick: "Côte à côte",
      zH2: "Ce qu'un déshumidificateur fait autrement qu'attendre.",
      zLede: "La différence ne tient pas qu'à la vitesse. Un séchage naturel dépend de la météo, de votre façon de chauffer et de qui ouvre les fenêtres ce jour-là. Un pack de séchage en fait un processus piloté et mesurable.",
      natLabel: "Séchage naturel",
      natH3: "Gratuit, mais vous ne le maîtrisez pas.",
      natLijst: [
        { b: "La météo fixe le rythme.", rest: " Une semaine humide en automne fait reculer le séchage, et personne ne peut vous dire de combien." },
        { b: "La nuit, il s'arrête.", rest: " Quand le bâtiment refroidit, l'humidité de l'air remonte et l'humidité retourne en partie dans le sol et les murs." },
        { b: "La chaleur part dehors.", rest: " Chaque aération évacue de l'humidité, et la chaleur que vous avez payée avec." },
        { b: "Rien n'est mesuré.", rest: " Sans mesure, pas de date de fin, seulement l'impression que ce sera bien sec." }
      ],
      natVoet: "Ne vous coûte pas de location, mais des semaines et de la certitude.",
      pakLabel: "Avec un pack de séchage",
      pakH3: "Un climat piloté, avec une date.",
      pakLijst: [
        { b: "Espace fermé, aucune perte de chaleur.", rest: " Portes et fenêtres restent fermées ; l'appareil retire l'eau de l'air et restitue cet air sec et légèrement réchauffé." },
        { b: "Jour et nuit, sur une valeur cible.", rest: " L'hygrostat maintient l'humidité de l'air basse et réduit lui-même la puissance dès qu'elle est atteinte." },
        { b: "Un ventilateur sur la surface.", rest: " Il balaie la couche saturée au-dessus de la chape, pour que de l'air sec arrive sans cesse au sol." },
        {
          b: "Mesure avant et après.",
          rest: /* @__PURE__ */ jsxs(Fragment, { children: [
            " ",
            "C'est sur elle que repose la date de fin, et si le sol n'est alors pas sec, nous prolongeons sans frais. Voir",
            " ",
            /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "la garantie de séchage" }),
            "."
          ] })
        }
      ],
      pakVoet: "Vous coûte une location, vous donne une date à communiquer à votre entrepreneur.",
      rKick: "La facture après coup",
      rH2: "Ce qui tourne mal dans une maison encore humide.",
      rLede: "Sécher n'est pas qu'une question de patience. Dès qu'on poursuit les travaux sur de l'humidité de construction, le problème se déplace vers des couches où vous ne le revoyez qu'une saison plus tard.",
      rNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "C'est aussi la réponse à « pourquoi payer pour sécher »." }),
        " La réparation d'un sol bombé ou une peinture à refaire coûte bien plus qu'un pack de séchage. Les dégâts qui reviennent le plus souvent dans la pratique sont décrits sur la page",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "pourquoi sécher son chantier" }),
        "."
      ] }),
      wH2: "Quand le séchage naturel suffit",
      wP1: "Tous les chantiers n'ont pas besoin d'un déshumidificateur, et nous préférons le dire ici plutôt qu'après que vous avez payé. Le séchage naturel est un bon choix quand ces éléments sont réunis.",
      wLijst: [
        { b: "Vous avez des mois de marge.", rest: " Aucun poseur de sol ni peintre n'attend, et un retard de quelques semaines ne change rien à votre planning." },
        { b: "C'est l'été et vous pouvez tout ouvrir.", rest: " Une maison qui reste des jours dans les courants d'air par temps chaud et sec perd beaucoup d'humidité d'elle-même." },
        { b: "Il ne s'agit que d'un plafonnage en couche mince.", rest: " C'est la plus rapide des couches ; sans chape épaisse en dessous, elle sèche nettement plus vite." },
        { b: "Le logement est chauffé et déjà habité.", rest: " Il sèche alors un peu chaque jour, tant que vous continuez à ventiler." }
      ],
      wP2: "Si l'un de ces points manque, un pack de séchage ne vous fait pas gagner de la vitesse mais de la certitude : un délai que vous pouvez communiquer et une mesure qui le confirme. Vous voulez seulement les appareils et vous les installez vous-même ? C'est possible aussi, au tarif d'enlèvement, à notre point le long de l'A12.",
      wCaption: "Ce que nous ferions nous-mêmes, selon la situation. Vous hésitez ? La question n'est pas de savoir à quelle vitesse il faut sécher, mais si quelqu'un attend une date de votre part.",
      wKoppen: ["Votre situation", "L'approche qui convient"],
      wRijen: [
        ["Aucune date imposée, en été", "Séchage naturel : chauffer et ventiler"],
        ["Seulement du plafonnage, couche mince", "Souvent naturel, surtout dans une maison habitée"],
        ["Le poseur de sol est réservé", /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Pack de séchage" }),
          " avec mesure et date de fin"
        ] })],
        [`Gros œuvre fermé, hiver, chape de ${n(dikCm)} cm`, "Pack de séchage, avec chauffage de chantier si le chantier est froid"],
        ["Vous préférez installer vous-même", /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "Appareils seuls" }),
          " au tarif d'enlèvement"
        ] })]
      ],
      faqTitel: "Séchage naturel ou location, en bref",
      lKick: "Pour aller plus loin",
      lH2: "Vous savez déjà ce qui doit sécher chez vous ?",
      lLede: "Ces deux pages reprennent là où ce guide s'arrête : avec les délais par couche et avec ce qui se passe sur votre chantier.",
      deur1H3: "Combien de temps une chape doit-elle sécher ?",
      deur1P: "Les valeurs indicatives par centimètre, la différence entre chape ciment et chape anhydrite, le protocole de mise en chauffe du chauffage par le sol et le moment de mesurer l'humidité résiduelle.",
      deur1Meer: "Lire le guide sur la chape →",
      deur2H3: "Sécher chape et plafonnage ensemble",
      deur2P: "Ce que coûte un séchage sur un chantier de construction neuve et comment il se déroule : un pack, une durée de location et une mesure avant et après.",
      deur2Meer: "Voir le séchage en construction neuve →",
      lees: [
        ["/hoe-drogen-werkt", "Comment fonctionne le séchage"],
        ["/waarom-bouwdroging", "Pourquoi sécher son chantier"],
        ["/gids/hoe-lang-moet-pleisterwerk-drogen", "Temps de séchage du plafonnage"],
        ["/gids/condensdroger-of-adsorptiedroger", "Déshumidificateur à condensation ou à adsorption"],
        ["/gids/stroomverbruik-bouwdroger", "Consommation électrique d'un déshumidificateur"],
        ["/prijzen", "Prix et tarifs"]
      ],
      mbKick: "De la valeur indicative à la date",
      mbH3: "Donnez-nous votre surface et l'épaisseur de votre chape, nous vous donnons une date de fin.",
      mbP: "Le calculateur traduit votre volume en un pack avec les bons appareils et la bonne durée. Notre technicien installe, règle et mesure au départ et à la réception. Si ce n'est alors pas sec, nous prolongeons sans frais.",
      mbCta: "Calculez votre pack de séchage",
      mbAlt: "Un technicien Vernast mesure l'humidité résiduelle d'une chape",
      cKick: "Vous hésitez à louer ?",
      cTitel: "Soumettez votre chantier à un spécialiste du séchage.",
      cLede: "Dites-nous ce qui sèche, quand ce doit être prêt et dans quel état se trouve votre chantier. Vous recevez une réponse honnête dans un délai d'un jour ouvrable, même si c'est pour vous dire que vous n'avez besoin de rien.",
      cOnderwerpen: ["Dois-je louer quelque chose ?", "Combien de temps cela prendra-t-il chez moi ?", "Prix et date de livraison", "Autre chose"],
      cPlaceholder: "P. ex. nouvelle construction de 140 m², chape de 6 cm coulée le 3 novembre, plafonnage fin octobre, le poseur de sol vient mi-décembre."
    };
  },
  en: ({ lp, gCm, gNat, gWeken, pCm, pMin, dikCm }) => {
    const n = enGetal;
    return {
      weken: wekenEn,
      cm: n,
      faq: [
        {
          question: "How long does it take for a new build to dry naturally?",
          answer: `There is no fixed timescale, and that is exactly the problem. For the screed, usually the slowest layer, building practice allows roughly one week per centimetre for the first four centimetres and then roughly two weeks for each extra centimetre: at ${n(gCm)} cm that comes to around ${n(gNat)} weeks. That guide figure only applies in a heated and ventilated space at around 20 degrees. On a closed-up, unheated site in November it does not run more slowly; it barely runs at all. That is why nobody commits to an end date without measuring.`
        },
        {
          question: "Can't I just open the windows and turn the heating on?",
          answer: "That is the natural method, and it really does work, provided you do both at the same time. Ventilating alone cools the building down, and cold air carries little moisture away. Heating alone drives the moisture out of the materials but keeps it in the house, where it condenses again on the first cold surface. The combination works best in winter: outside air at 5 degrees and 90 percent humidity becomes, once warmed to 20 degrees indoors, air at around 35 percent, and that takes up water eagerly. Only then you do pay for the heat that escapes with every round of ventilation."
        },
        {
          question: "Should I open the windows while a construction dehumidifier is running?",
          answer: "No, quite the opposite. A condensation dehumidifier works in a closed space: it draws in the indoor air, cools it until the water condenses out, drains that water away and blows the air back into the room dry and slightly warmed. If the windows are open, you keep bringing in fresh damp air and the unit is effectively drying the street. So keep doors and windows closed, and let the unit run day and night."
        },
        {
          question: "What is the difference compared with just waiting, in weeks?",
          answer: `For a ${n(gCm)} cm screed, the guide figure for natural drying is around ${n(gNat)} weeks in favourable weather, against ${gWeken !== null ? wekenEn(gWeken) : "a few weeks"} with a drying package. With plaster the difference is smaller in weeks but just as unpredictable: a ${n(pCm)} cm coat is dry in ${wekenEn(pMin)} in a ventilated, heated home and still not dry after a month on a closed, cold site. So the real difference is not just the duration, but that a drying package comes with a date.`
        },
        {
          question: "Can I move into a house that is not dry yet?",
          answer: "You can, but you then take the moisture into your daily life: misted-up windows, a musty smell, cupboards against external walls with mould growing behind them, and a heating bill that mainly warms up water. More annoying is what happens under your floor and behind your paint, because you only see that a season later. If you do move in, keep heating and ventilating well, and lay sensitive floor finishes as late as possible."
        },
        {
          question: "Does a construction dehumidifier also work on a cold site in winter?",
          answer: "A condensation dehumidifier performs best roughly between 15 and 25 degrees; below that its output drops because there is less water in the air to condense. On a cold site we therefore add an electric site heater with a thermostat, or we choose a desiccant dehumidifier, which works with a drying agent and keeps removing moisture even at low temperatures. Which unit suits when is explained in our guide to condensation and desiccant dehumidifiers."
        },
        {
          question: "How do I know whether the house is really dry?",
          answer: "By measuring, not by looking. A screed that is hard and light in colour can still be wet inside, and a wall that feels dry is only dry in its outer few millimetres. We record the residual moisture at the start and again at handover; those two values are what an end date rests on. If your floor layer or your building file needs a signed report, an official moisture report can be added."
        },
        {
          question: "What does drying with a construction dehumidifier cost?",
          answer: "That depends on the volume of your home and on what needs drying: those two determine how many units are needed and how long they stay. The drying calculator asks for your floor area, the screed thickness and what you are drying, and immediately shows the package with the price, including delivery, installation and the readings. All individual daily and weekly rates are on our prices page."
        }
      ],
      crumbHome: "Home",
      crumbGidsen: "Guides",
      crumb: "Natural drying or a construction dehumidifier?",
      kick: "Guide · new builds",
      h1: "Drying a new build: naturally or with a construction dehumidifier?",
      intro: "Every new build contains construction moisture: mixing water from the screed, the plaster coat, the masonry and the concrete. That water has to leave the building before the floor layer, the decorator and your removal van arrive. There are two ways to go about it. You let the house dry on its own, or you control the indoor climate with a construction dehumidifier. Below: what the first approach really asks of you, why the season decides, and what the difference is in weeks.",
      heroAlt: "Construction dehumidifier at work in a new-build home where the screed and plaster are still wet",
      badgeTop: gWeken !== null ? wekenEn(gWeken) : "A few weeks",
      badgeSub: `instead of ± ${n(gNat)} weeks for ${n(gCm)} cm of screed`,
      stats: [
        { em: "weeks", l: `Natural drying of ${n(gCm)} cm of screed, and even then only in a favourable indoor climate` },
        { em: "weeks", l: "The same floor with a drying package, with an end date attached" },
        { em: "h", l: "Active per day. Natural drying stalls every night as the building cools down" },
        { em: "readings", l: "Before and after. That is what makes the difference between a date and an estimate" }
      ],
      lagen: [
        { titel: "The screed", tekst: "The biggest reservoir, and the slowest. The water at the bottom has to travel up through the full thickness, because the insulation seals off everything below." },
        { titel: "The plaster", tekst: "Thin, but on every wall and ceiling in the house. It gives up its water quickly, and all of it ends up in the same indoor air." },
        { titel: "Masonry and concrete", tekst: "The shell has stood in wind and rain for months. Clay block and concrete take up water and then slowly release it into the space again." },
        { titel: "The finishing", tekst: "Tile adhesive, filler, poured floors and paint bring in water all over again, just when the building is closed and nothing can get out any more." },
        { titel: "And then the air", tekst: "Everything those layers give off first hangs in the indoor air. If that air does not leave the building, the moisture simply soaks back in somewhere else." }
      ],
      voorwaarden: [
        { titel: "Warmth", tekst: "Warm air carries far more water than cold air. In an unheated shell at five degrees, drying all but stops, however long you wait." },
        { titel: "Dry air", tekst: "Air that is already full of moisture takes up nothing more. As long as the indoor air stays saturated, the screed cannot get rid of its water." },
        { titel: "Movement", tekst: "Just above a floor and against a wall, a layer of saturated air lingers. Without movement, that layer insulates the surface from the rest of the room." },
        { titel: "Extraction", tekst: "The moisture has to leave the building. If it stays inside, it condenses on the coldest surface it can find: the glass, the sill, the corner behind the cupboard." },
        { titel: "And time", tekst: "The four above determine how much time you need. If one cooperates and the rest do not, the slowest sets the pace." }
      ],
      risicos: [
        { titel: "The floor starts to cup", tekst: "Parquet, vinyl and a poured floor seal off the screed. If there is still moisture underneath, it has nowhere to go and comes back as cupped boards or lifting strips." },
        { titel: "The paint does not adhere", tekst: "Paint will not stay put on a plaster coat that is still wet inside. The result is dull patches, blisters or a layer that comes loose after a year." },
        { titel: "Mould in the cold corners", tekst: "Moisture condenses where it is coldest: behind cupboards, in the corner of an external wall, on the sills. That is where the black growth starts, and it does not go away on its own." },
        { titel: "A house that keeps sweating", tekst: "Misted-up windows, a musty smell and washing that will not dry. Anyone who moves into a wet house spends months heating water instead of their home." },
        { titel: "Your schedule slips", tekst: "The floor layer and the decorator have diaries. If you give up your slot because it is not dry yet, you go to the back of the queue, and that often costs more weeks than the drying itself." }
      ],
      vpKick: "The starting point",
      vpH2: "A new house is a wet house.",
      vpLede: "This is not about a puddle on the floor. A 6 cm screed over 120 m² is well over seven cubic metres of mortar, and the mixing water the cement does not bind chemically has to come back out through the surface. Then there are the walls, the shell and the finishing on top of that. All that water leaves the building by one route: the indoor air.",
      vpNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "That is why drying is always about air." }),
        " A construction dehumidifier does not take water out of your floor, it takes it out of the air above it. Only because that air gets drier can the floor give off moisture again. Exactly how that works is explained in",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "how drying works" }),
        "."
      ] }),
      nKick: "Natural drying",
      nH2: "Four things have to be right. At the same time.",
      nLede: "Natural drying is not a matter of waiting, it is a method: heating and ventilating, every day. It only works when these conditions come together. If one is missing, that one sets the pace for the whole.",
      nNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Heating and ventilating go together." }),
        " Ventilating alone cools the home down, and cold air carries little moisture outside. Heating alone drives the moisture out of the materials but keeps it indoors, where it condenses again on the coldest surface. Drying naturally therefore means doing both, and paying for the heat that goes out with every round of ventilation."
      ] }),
      sH2: "Why the calendar decides, not you",
      sP: [
        /* @__PURE__ */ jsx(Fragment, { children: "Air can only carry a certain amount of water, and the warmer it is, the more that can be. That one fact explains why the same home dries faster in January than in July, as long as you keep the heating on." }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("b", { children: "In winter, outside air is bone dry as soon as it warms up." }),
          " Air at 5 degrees with 90 percent relative humidity carries little water. Let it in and warm it to 20 degrees, and its relative humidity drops to around 35 percent. Air like that eagerly takes up moisture, and with the next round of ventilation that moisture goes outside with it."
        ] }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("b", { children: "In summer, the same mechanism works against you." }),
          " Outside air at 20 degrees with 80 percent humidity is already fairly full. Let into a home at 22 degrees, it ends up at around 70 percent, and then there is little room left to take up moisture. Ventilating feels good but achieves hardly any drying."
        ] }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("b", { children: "And in a closed-up, unheated shell, nothing happens." }),
          " Inside and outside are equally cold, the air is still and saturated. The home does not dry slowly, it simply does not dry. That is the state most sites are in in November."
        ] })
      ],
      sCaption: "How the same action, ventilating, plays out differently by season. The percentages are worked examples at an indoor temperature of 20 to 22 degrees, not readings from your home.",
      sKoppen: ["Situation", "Indoors after warming", "What ventilating achieves"],
      sRijen: [
        ["Winter, heated", "± 35%", "Strong drying, as long as you keep heating"],
        ["Spring or autumn", "45 to 65%", "Dries in fits and starts; a wet week sets it back"],
        ["Summer, warm and humid", "± 70%", "Little to nothing; sometimes you bring moisture in"],
        ["Closed shell, no heating", "80% and more", "Drying all but stops"]
      ],
      vKick: "The difference",
      vH2: "The same floor, two timelines.",
      vLede: "On the left, what the screed needs on its own in a favourable indoor climate; on the right, the hire period we allow for that thickness in our packages. That difference is not a promise about your floor, it is the difference between waiting and taking control.",
      balkNat: (cm) => `${cm} cm, natural drying`,
      balkPakket: (cm) => `${cm} cm, with a drying package`,
      vglNoot: "The bars are on the same scale, with the slowest drying at 100 percent. The guide figure follows the usual rule of thumb for sand and cement screed in a ventilated space at around 20 degrees.",
      tCaption: "Natural drying: guide figures from building practice in a favourable indoor climate. With a dehumidifier: the hire period of our standard packages, including residual moisture readings before and after. Neither column replaces a reading.",
      tKoppen: ["What is drying", "Natural (guide figure)", "With a drying package"],
      tChape: (cm) => `Screed, ${cm} cm`,
      tPleister: (cm) => `Plaster, ${cm} cm`,
      tTot: (min, max) => `${n(min)} to ${max}`,
      tBeide: "Screed and plaster together",
      tBeideNat: "The slower of the two",
      vNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: "Note what is in the left-hand column." }),
        " These are guide figures for a heated and ventilated building, so for the best conditions natural drying can get. On a cold, closed-up site there is no figure to go with it, and that is not hedging but the heart of the matter. And look at the thin plaster coat: there the difference is small to non-existent. On a site like that, a package buys you certainty rather than weeks, and sometimes you simply do not need it. By material,",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "the screed guide" }),
        " and",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "the plaster guide" }),
        " go into it in more depth."
      ] }),
      zKick: "Side by side",
      zH2: "What a construction dehumidifier does differently from waiting.",
      zLede: "The difference is not just speed. Natural drying depends on the weather, on how you heat and on who opens the windows that day. A drying package turns it into a controlled, measurable process.",
      natLabel: "Natural drying",
      natH3: "Free, but out of your hands.",
      natLijst: [
        { b: "The weather sets the pace.", rest: " A wet week in autumn sets the drying back, and nobody can tell you by how much." },
        { b: "It stalls at night.", rest: " When the building cools down, the humidity rises again and some of the moisture is drawn back into floors and walls." },
        { b: "The heat goes out with it.", rest: " Every round of ventilation removes moisture, and the heat you paid for along with it." },
        { b: "Nothing is measured.", rest: " Without a reading there is no end date, just a feeling that it will probably be dry." }
      ],
      natVoet: "Costs you no hire, but it does cost weeks and certainty.",
      pakLabel: "With a drying package",
      pakH3: "A controlled climate, with a date attached.",
      pakLijst: [
        { b: "Closed space, no heat loss.", rest: " Windows and doors stay shut; the unit takes the water out of the air and returns that air dry and slightly warmed." },
        { b: "Day and night, to a target value.", rest: " The humidistat keeps the humidity low and throttles back on its own once it is reached." },
        { b: "A fan across the surface.", rest: " It sweeps away the saturated layer above the screed, so dry air keeps reaching the floor." },
        {
          b: "Readings before and after.",
          rest: /* @__PURE__ */ jsxs(Fragment, { children: [
            " ",
            "The end date rests on them, and if the floor is not dry by then, we extend free of charge. See",
            " ",
            /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "the Drying Guarantee" }),
            "."
          ] })
        }
      ],
      pakVoet: "Costs you hire, and gives you a date you can pass on to your contractor.",
      rKick: "The bill afterwards",
      rH2: "What goes wrong in a house that is still wet.",
      rLede: "Drying is not just a question of patience. As soon as work carries on over construction moisture, the problem moves into layers where you only see it again a season later.",
      rNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { children: 'This is also the answer to "why would I pay to dry".' }),
        " Repairing a cupped floor or redoing the decorating costs many times more than a drying package. Which damage comes back most often in practice is described on",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "why construction drying" }),
        "."
      ] }),
      wH2: "When natural drying is enough",
      wP1: "Not every site needs a construction dehumidifier, and we would rather say so here than after you have paid. Natural drying is a good choice when these things come together.",
      wLijst: [
        { b: "You have months to spare.", rest: " No floor layer or decorator is waiting, and a delay of a few weeks changes nothing in your schedule." },
        { b: "It is summer and you can open everything up.", rest: " A house that stands in a draught for days in warm, dry weather loses a lot of moisture by itself." },
        { b: "It is only a thin coat of plaster.", rest: " That is the quickest of the layers; without a thick screed underneath, it dries out a good deal faster." },
        { b: "The home is heated and already lived in.", rest: " Then it dries a little more every day, as long as you keep ventilating." }
      ],
      wP2: "If one of those points does not apply, a drying package buys you certainty rather than speed: a timescale you can pass on and a reading that confirms it. If you only want the units and set them up yourself, that is possible too, at the collection rate from our depot along the A12.",
      wCaption: "What we would do ourselves, by situation. If in doubt, the question is not how fast it has to go, but whether someone needs a date from you.",
      wKoppen: ["Your situation", "The approach that fits"],
      wRijen: [
        ["No date to meet, summer", "Natural drying: heat and ventilate"],
        ["Only plaster, thin coat", "Often natural, certainly in a lived-in house"],
        ["The floor layer is booked", /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Drying package" }),
          " with readings and an end date"
        ] })],
        [`Closed shell, winter, ${n(dikCm)} cm screed`, "Drying package, with a site heater on a cold site"],
        ["You would rather set up yourself", /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "Individual units" }),
          " at the collection rate"
        ] })]
      ],
      faqTitel: "Natural drying or hiring, answered briefly",
      lKick: "Read on",
      lH2: "Already know what needs drying at your place?",
      lLede: "Then these two pages pick up where this guide leaves off: with the timescales per layer and with what happens on your site.",
      deur1H3: "How long does screed take to dry?",
      deur1P: "The guide figures per centimetre, the difference between cement and anhydrite screed, the heating-up protocol for underfloor heating and when to measure residual moisture.",
      deur1Meer: "Read the screed guide →",
      deur2H3: "Drying screed and plaster together",
      deur2P: "What drying on a new-build site costs and how it works: one package, one hire period and one reading before and after.",
      deur2Meer: "See drying in new builds →",
      lees: [
        ["/hoe-drogen-werkt", "How drying works"],
        ["/waarom-bouwdroging", "Why construction drying"],
        ["/gids/hoe-lang-moet-pleisterwerk-drogen", "Plaster drying time"],
        ["/gids/condensdroger-of-adsorptiedroger", "Condensation or desiccant dehumidifier"],
        ["/gids/stroomverbruik-bouwdroger", "Power consumption of a construction dehumidifier"],
        ["/prijzen", "Prices and rates"]
      ],
      mbKick: "From guide figure to date",
      mbH3: "Give us your floor area and your screed thickness, and we will give you an end date.",
      mbP: "The calculator turns your volume into a package with the right units and the right hire period. Our technician sets up, adjusts and measures at the start and at handover. If it is not dry by then, we extend free of charge.",
      mbCta: "Calculate your drying package",
      mbAlt: "Vernast technician measuring the residual moisture of a screed",
      cKick: "Not sure whether you need to hire?",
      cTitel: "Run your site past a drying specialist.",
      cLede: "Tell us what is drying, when it needs to be ready and what state your site is in. You will get an honest answer within one working day, even if that answer is that you do not need anything.",
      cOnderwerpen: ["Do I need to hire anything for this?", "How long will it take in my case?", "Price and delivery date", "Something else"],
      cPlaceholder: "E.g. new build of 140 m², 6 cm screed laid on 3 November, plastered at the end of October, floor layer coming mid-December."
    };
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/NatuurlijkDrogenPage.tsx");
const PATH = "/gids/natuurlijk-drogen-of-bouwdroger";
const CHAPE = droogtermijnen("chape").map((r) => ({ cm: r.dikte, weken: r.max }));
const PLEISTER = droogtermijnen("pleister").map((r) => ({ cm: r.dikte, weken: r.max }));
const BEIDE = termijnZonderDikte("beide");
const dikste = CHAPE[CHAPE.length - 1];
const GANGBAAR = CHAPE.find((r) => r.cm === 6) ?? dikste;
const SCHAAL = dikste ? natuurlijkeChapeWeken(dikste.cm) : 10;
const breedte = (n) => `${Math.round(n / SCHAAL * 100)}%`;
const Arrow = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] });
const Check = () => /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) });
const Kruis = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
  /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
] });
const LAGEN = [
  /* @__PURE__ */ jsx(LayersIcon, {}),
  /* @__PURE__ */ jsx(BrushIcon, { size: 20 }),
  /* @__PURE__ */ jsx(CellarIcon, { size: 20 }),
  /* @__PURE__ */ jsx(HouseSmallIcon, { size: 20 }),
  /* @__PURE__ */ jsx(GaugeIcon, {})
];
const VOORWAARDEN = [
  /* @__PURE__ */ jsx(ThermoIcon, {}),
  /* @__PURE__ */ jsx(GaugeIcon, {}),
  /* @__PURE__ */ jsx(WindIcon, {}),
  /* @__PURE__ */ jsx(ClockIcon, {}),
  /* @__PURE__ */ jsx(WarnIcon, {})
];
const RISICOS = [
  /* @__PURE__ */ jsx(LayersIcon, {}),
  /* @__PURE__ */ jsx(BrushIcon, { size: 20 }),
  /* @__PURE__ */ jsx(MoldIcon, { size: 20 }),
  /* @__PURE__ */ jsx(DrogerIcon, {}),
  /* @__PURE__ */ jsx(ClockIcon, {})
];
const NatuurlijkDrogenPage = () => {
  const lp = useLokaalPad();
  const gCm = GANGBAAR?.cm ?? 6;
  const pCm = PLEISTER[0]?.cm ?? 1;
  const t = useCopy(COPY)({
    lp,
    gCm,
    gNat: natuurlijkeChapeWeken(gCm),
    gWeken: GANGBAAR ? GANGBAAR.weken : null,
    pCm,
    pMin: natuurlijkePleisterWeken(pCm).min,
    dikCm: dikste?.cm ?? 7
  });
  const weken = t.weken;
  return /* @__PURE__ */ jsxs(
    GidsShell,
    {
      seo: useSeo("gidsNatuurlijkDrogen"),
      path: PATH,
      crumbs: [
        { name: t.crumbHome, path: "/" },
        { name: t.crumbGidsen, path: "/gids" },
        { name: t.crumb, path: PATH }
      ],
      kick: t.kick,
      h1: t.h1,
      intro: /* @__PURE__ */ jsx("p", { children: t.intro }),
      heroImg: {
        src: "/vernast/case-nieuwbouw.webp",
        alt: t.heroAlt,
        rond: true
      },
      heroBadge: /* @__PURE__ */ jsxs("div", { className: "fbadge", style: { bottom: "40px", left: "-4%", zIndex: 2 }, children: [
        /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsx(ClockIcon, { size: 16 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          t.badgeTop,
          /* @__PURE__ */ jsx("small", { children: t.badgeSub })
        ] })
      ] }),
      articlePublished: "2026-11-13",
      faq: t.faq,
      faqZelfPlaatsen: true,
      children: [
        /* @__PURE__ */ jsx("div", { className: "statrule", children: /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsxs(Reveal, { className: "band", from: "up", children: [
          /* @__PURE__ */ jsxs("div", { className: "st", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              "±",
              natuurlijkeChapeWeken(gCm),
              /* @__PURE__ */ jsx("em", { children: t.stats[0].em })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.stats[0].l })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "st", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              GANGBAAR?.weken,
              /* @__PURE__ */ jsx("em", { children: t.stats[1].em })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.stats[1].l })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "st", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              "24",
              /* @__PURE__ */ jsx("em", { children: t.stats[2].em })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.stats[2].l })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "st", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              "2",
              /* @__PURE__ */ jsx("em", { children: t.stats[3].em })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.stats[3].l })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "up", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.vpKick }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: t.vpH2 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.vpLede })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "cyc", children: t.lagen.map((l, i) => /* @__PURE__ */ jsxs(Reveal, { className: "cy", from: "up", delay: i * 0.06, children: [
            /* @__PURE__ */ jsxs("i", { "aria-hidden": "true", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsx("span", { className: "ci2", children: LAGEN[i] }),
            /* @__PURE__ */ jsx("h3", { children: l.titel }),
            /* @__PURE__ */ jsx("p", { children: l.tekst })
          ] }, l.titel)) }),
          /* @__PURE__ */ jsx(Reveal, { className: "note", from: "up", delay: 0.15, children: t.vpNote })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "lvred", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "up", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.nKick }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: t.nH2 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.nLede })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "cyc", children: t.voorwaarden.map((v, i) => /* @__PURE__ */ jsxs(Reveal, { className: "cy", from: "up", delay: i * 0.06, children: [
            /* @__PURE__ */ jsxs("i", { "aria-hidden": "true", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsx("span", { className: "ci2", children: VOORWAARDEN[i] }),
            /* @__PURE__ */ jsx("h3", { children: v.titel }),
            /* @__PURE__ */ jsx("p", { children: v.tekst })
          ] }, v.titel)) }),
          /* @__PURE__ */ jsx(Reveal, { className: "note", from: "up", delay: 0.2, children: t.nNote })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap wsplit", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "prose", from: "left", children: [
            /* @__PURE__ */ jsx("h2", { children: t.sH2 }),
            t.sP.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i))
          ] }),
          /* @__PURE__ */ jsx(Reveal, { className: "tbl", from: "right", delay: 0.1, children: /* @__PURE__ */ jsxs("table", { children: [
            /* @__PURE__ */ jsx("caption", { children: t.sCaption }),
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: t.sKoppen.map((k) => /* @__PURE__ */ jsx("th", { scope: "col", children: k }, k)) }) }),
            /* @__PURE__ */ jsx("tbody", { children: t.sRijen.map(([a, b, c]) => /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: a }),
              /* @__PURE__ */ jsx("td", { className: "num", children: b }),
              /* @__PURE__ */ jsx("td", { children: c })
            ] }, a)) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("section", { className: "lvred", children: [
          /* @__PURE__ */ jsxs("div", { className: "wrap wsplit", children: [
            /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "left", style: { marginBottom: 0 }, children: [
              /* @__PURE__ */ jsx("span", { className: "kick", children: t.vKick }),
              /* @__PURE__ */ jsx("h2", { className: "sec", children: t.vH2 }),
              /* @__PURE__ */ jsx("p", { className: "lede", children: t.vLede })
            ] }),
            /* @__PURE__ */ jsxs(Reveal, { className: "vglkaart", from: "right", delay: 0.1, children: [
              /* @__PURE__ */ jsx("div", { className: "vgl", children: CHAPE.map((r) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsxs("div", { className: "vrow rood", children: [
                  /* @__PURE__ */ jsxs("div", { className: "vl", children: [
                    /* @__PURE__ */ jsx("span", { children: t.balkNat(t.cm(r.cm)) }),
                    /* @__PURE__ */ jsxs("b", { children: [
                      "± ",
                      weken(natuurlijkeChapeWeken(r.cm))
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "vbar", children: /* @__PURE__ */ jsx("i", { style: { width: breedte(natuurlijkeChapeWeken(r.cm)) } }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "vrow groen", children: [
                  /* @__PURE__ */ jsxs("div", { className: "vl", children: [
                    /* @__PURE__ */ jsx("span", { children: t.balkPakket(t.cm(r.cm)) }),
                    /* @__PURE__ */ jsx("b", { children: weken(r.weken) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "vbar", children: /* @__PURE__ */ jsx("i", { style: { width: breedte(r.weken) } }) })
                ] })
              ] }, r.cm)) }),
              /* @__PURE__ */ jsx("p", { className: "vglnoot", children: t.vglNoot })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
            /* @__PURE__ */ jsx(Reveal, { className: "tbl", from: "up", delay: 0.15, children: /* @__PURE__ */ jsxs("table", { children: [
              /* @__PURE__ */ jsx("caption", { children: t.tCaption }),
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: t.tKoppen.map((k) => /* @__PURE__ */ jsx("th", { scope: "col", children: k }, k)) }) }),
              /* @__PURE__ */ jsxs("tbody", { children: [
                CHAPE.map((r) => /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { children: t.tChape(t.cm(r.cm)) }),
                  /* @__PURE__ */ jsxs("td", { className: "num", children: [
                    "± ",
                    weken(natuurlijkeChapeWeken(r.cm))
                  ] }),
                  /* @__PURE__ */ jsx("td", { className: "num", children: weken(r.weken) })
                ] }, `chape-${r.cm}`)),
                PLEISTER.map((r) => {
                  const nat = natuurlijkePleisterWeken(r.cm);
                  return /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { children: t.tPleister(t.cm(r.cm)) }),
                    /* @__PURE__ */ jsx("td", { className: "num", children: t.tTot(nat.min, weken(nat.max)) }),
                    /* @__PURE__ */ jsx("td", { className: "num", children: weken(r.weken) })
                  ] }, `pleister-${r.cm}`);
                }),
                BEIDE && /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { children: t.tBeide }),
                  /* @__PURE__ */ jsx("td", { className: "num", children: t.tBeideNat }),
                  /* @__PURE__ */ jsx("td", { className: "num", children: weken(BEIDE.max) })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(Reveal, { className: "note", from: "up", delay: 0.2, children: t.vNote })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "up", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.zKick }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: t.zH2 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.zLede })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "vsg", children: [
            /* @__PURE__ */ jsxs(Reveal, { className: "vs rood", from: "left", delay: 0.05, children: [
              /* @__PURE__ */ jsx("span", { className: "vt", children: t.natLabel }),
              /* @__PURE__ */ jsx("h3", { children: t.natH3 }),
              /* @__PURE__ */ jsx("ul", { children: t.natLijst.map((x) => /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Kruis, {}),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("b", { children: x.b }),
                  x.rest
                ] })
              ] }, x.b)) }),
              /* @__PURE__ */ jsx("span", { className: "vf", children: t.natVoet })
            ] }),
            /* @__PURE__ */ jsxs(Reveal, { className: "vs groen", from: "right", delay: 0.1, children: [
              /* @__PURE__ */ jsx("span", { className: "vt", children: t.pakLabel }),
              /* @__PURE__ */ jsx("h3", { children: t.pakH3 }),
              /* @__PURE__ */ jsx("ul", { children: t.pakLijst.map((x) => /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Check, {}),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("b", { children: x.b }),
                  x.rest
                ] })
              ] }, x.b)) }),
              /* @__PURE__ */ jsx("span", { className: "vf", children: t.pakVoet })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "lvred", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "up", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.rKick }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: t.rH2 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.rLede })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "cyc", children: t.risicos.map((r, i) => /* @__PURE__ */ jsxs(Reveal, { className: "cy", from: "up", delay: i * 0.06, children: [
            /* @__PURE__ */ jsxs("i", { "aria-hidden": "true", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsx("span", { className: "ci2", children: RISICOS[i] }),
            /* @__PURE__ */ jsx("h3", { children: r.titel }),
            /* @__PURE__ */ jsx("p", { children: r.tekst })
          ] }, r.titel)) }),
          /* @__PURE__ */ jsx(Reveal, { className: "note", from: "up", delay: 0.2, children: t.rNote })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap wsplit", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "prose", from: "left", children: [
            /* @__PURE__ */ jsx("h2", { children: t.wH2 }),
            /* @__PURE__ */ jsx("p", { children: t.wP1 }),
            /* @__PURE__ */ jsx("ul", { children: t.wLijst.map((x) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("b", { children: x.b }),
              x.rest
            ] }, x.b)) }),
            /* @__PURE__ */ jsx("p", { children: t.wP2 })
          ] }),
          /* @__PURE__ */ jsx(Reveal, { className: "tbl", from: "right", delay: 0.1, children: /* @__PURE__ */ jsxs("table", { children: [
            /* @__PURE__ */ jsx("caption", { children: t.wCaption }),
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: t.wKoppen.map((k) => /* @__PURE__ */ jsx("th", { scope: "col", children: k }, k)) }) }),
            /* @__PURE__ */ jsx("tbody", { children: t.wRijen.map(([a, b]) => /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: a }),
              /* @__PURE__ */ jsx("td", { children: b })
            ] }, a)) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(
          GidsFaqSectie,
          {
            faq: t.faq,
            titel: t.faqTitel,
            variant: "rood"
          }
        ),
        /* @__PURE__ */ jsxs("section", { className: "sw", children: [
          /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
            /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "up", children: [
              /* @__PURE__ */ jsx("span", { className: "kick", children: t.lKick }),
              /* @__PURE__ */ jsx("h2", { className: "sec", children: t.lH2 }),
              /* @__PURE__ */ jsx("p", { className: "lede", children: t.lLede })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "door", children: [
              /* @__PURE__ */ jsxs(Reveal, { as: Link, className: "dk", from: "left", delay: 0.05, to: lp("/gids/hoe-lang-moet-chape-drogen"), children: [
                /* @__PURE__ */ jsx("span", { className: "dki", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ClockIcon, { size: 20 }) }),
                /* @__PURE__ */ jsx("h3", { children: t.deur1H3 }),
                /* @__PURE__ */ jsx("p", { children: t.deur1P }),
                /* @__PURE__ */ jsx("span", { className: "dkm", children: t.deur1Meer })
              ] }),
              /* @__PURE__ */ jsxs(Reveal, { as: Link, className: "dk", from: "right", delay: 0.1, to: lp("/nieuwbouw-drogen"), children: [
                /* @__PURE__ */ jsx("span", { className: "dki", "aria-hidden": "true", children: /* @__PURE__ */ jsx(LayersIcon, { size: 20 }) }),
                /* @__PURE__ */ jsx("h3", { children: t.deur2H3 }),
                /* @__PURE__ */ jsx("p", { children: t.deur2P }),
                /* @__PURE__ */ jsx("span", { className: "dkm", children: t.deur2Meer })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Reveal, { className: "lees-verder", from: "up", delay: 0.15, children: t.lees.map(([pad, label]) => /* @__PURE__ */ jsx(Link, { to: lp(pad), children: label }, pad)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsxs(Reveal, { className: "manband", from: "up", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
              /* @__PURE__ */ jsx("span", { className: "mbk", children: t.mbKick }),
              /* @__PURE__ */ jsx("h3", { children: t.mbH3 }),
              /* @__PURE__ */ jsx("p", { children: t.mbP }),
              /* @__PURE__ */ jsxs(Link, { className: "btn btn-white mb-cta", to: lp("/verhuur/calculator"), children: [
                t.mbCta,
                /* @__PURE__ */ jsx(Arrow, {})
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "mb-man",
                src: "/vernast/man-vochtmeter.webp",
                alt: t.mbAlt,
                style: { width: "min(30%,320px)" }
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(
          ContactBlok,
          {
            kicker: t.cKick,
            titel: t.cTitel,
            lede: t.cLede,
            onderwerpen: t.cOnderwerpen,
            placeholder: t.cPlaceholder
          }
        )
      ]
    }
  );
};
export {
  NatuurlijkDrogenPage as default
};
