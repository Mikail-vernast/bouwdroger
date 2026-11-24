import type { ReactNode } from "react";
import type { Copy } from "@/i18n/useTaal";
import { CONTACT } from "@/lib/site";

/**
 * De teksten van de over-onspagina. De Nederlandse staan er letterlijk zoals
 * in de designhandoff; de looptekstband herhaalt zijn items, dus die delen
 * hun sleutels.
 */
type Teksten = {
  capBq: ReactNode;
  academyBtn: string;
  crumb: string;
  altTeam: string;
  altMan: string;
  altTm1: string;
  altTm2: string;
  altTm3: string;
  altTm4: string;
  altVak: string;
  altGr1: string;
  altGr3: string;
  phMsg: string;
  heroKick: string;
  heroH1: ReactNode;
  heroP: string;
  chip1: ReactNode;
  chip2: ReactNode;
  chip3: ReactNode;
  prakKick: string;
  prakH2: string;
  prakP1: ReactNode;
  prakP2: ReactNode;
  prakP3: ReactNode;
  qH: string;
  qSub: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  capKick: string;
  capH2: string;
  capLede: string;
  onderH: string;
  onderP: string;
  overH: string;
  overP: string;
  gemeten: ReactNode;
  teamKick: string;
  teamH2: string;
  teamLede: string;
  tm1H: string;
  tm1P: string;
  tm2H: string;
  tm2P: string;
  tm3H: string;
  tm3P: string;
  tm4H: ReactNode;
  tm4P: string;
  belgH: string;
  belgP: ReactNode;
  faseKick: string;
  faseH2: string;
  faseLede: string;
  fc1: string;
  fc2: ReactNode;
  fc3: ReactNode;
  fc4: string;
  j1H: string;
  j1B: string;
  j1P: string;
  j1L: ReactNode;
  j2H: string;
  j2B: string;
  j2P: string;
  j2L: ReactNode;
  j3H: string;
  j3B: string;
  j3P: string;
  j3L: ReactNode;
  techKick: string;
  techH2: string;
  mq1: string;
  mq2: ReactNode;
  mq3: string;
  mq4: ReactNode;
  mq5: string;
  mq6: string;
  mq7: string;
  mq8: ReactNode;
  mq9: string;
  mq10: string;
  techNote: ReactNode;
  acyKick: ReactNode;
  acyLede: ReactNode;
  st1: string;
  st2B: string;
  st2: string;
  st3B: string;
  st3: string;
  ac1T: string;
  ac1H: string;
  ac1P: string;
  ac2P: string;
  ac2H: string;
  acCert: string;
  ac3H: string;
  ac3P: string;
  mini1: string;
  mini2: string;
  mini3: string;
  groepKick: string;
  groepH2: string;
  groepLede: string;
  gr1P: string;
  gr1L: string;
  gr2P: string;
  gr2L: string;
  gr3P: string;
  gr3L: string;
  formKick: string;
  formH2: string;
  formLede: string;
};

export const OVER_ONS_COPY = {
  nl: {
    capBq: <>De beste oplossing is niet noodzakelijk de grootste installatie. Het is de installatie die technisch klopt. <b>Daarom adviseren wij ook wanneer minder beter is.</b></>,
    academyBtn: "Ontdek de Academy op vernast.be",
    crumb: "Over ons",
    altTeam: "Het Vernast team",
    altMan: "Vernast specialist met vochtmeter",
    altTm1: "Bouwtechniek",
    altTm2: "Productontwikkeling",
    altTm3: "Softwareontwikkeling",
    altTm4: "Marketing en klantbeleving",
    altVak: "Vernast vakmannen",
    altGr1: "Team Vernast BouwDroging",
    altGr3: "Team Vernast Schilderwerken",
    phMsg: "Vertel kort waarmee we u kunnen helpen",
    heroKick: "Over Vernast BouwDroging",
    heroH1: <>Bouwdroging,<br />opnieuw uitgedacht.</>,
    heroP: "Een bouwdroger huren zou eenvoudig moeten zijn. Daarom maken wij bouwdroging eenvoudiger, transparanter en technisch beter onderbouwd: de juiste capaciteit, duidelijke afspraken en zo weinig mogelijk zorgen voor u.",
    chip1: <>Berekend, niet geschat<small>Slimme droogcalculator</small></>,
    chip2: <>100% droog garantie*<small>Of kosteloos verlengen</small></>,
    chip3: <>Volledig digitaal<small>Boeken, betalen &amp; plannen</small></>,
    prakKick: "Van toestelverhuur naar volledige ontzorging",
    prakH2: "Wij leveren geen toestellen af. Wij leveren een droog resultaat.",
    prakP1: <>Bij de meeste verhuurders eindigt het verhaal wanneer het toestel geleverd is. Bij ons begint het daar pas. Uw chape moet klaar zijn voor de vloerder, uw pleisterwerk voor de schilder, uw woning voor de oplevering. <b>Dáár werken wij naartoe.</b></>,
    prakP2: <>Daarom berekenen we eerst wat uw situatie echt nodig heeft. Pleister, chape en beton geven vocht elk op hun eigen tempo af, en <b>temperatuur, luchtcirculatie en laagdikte</b> bepalen mee hoe snel. Wie dat negeert, droogt te traag of verspilt energie.</>,
    prakP3: <>Die kennis halen we niet uit een brochure. Vernast staat dagelijks op werven voor <b>vochtbestrijding, afwerking en isolatie</b>. Wij zien wat er fout loopt wanneer er verkeerd gedroogd wordt, en bouwden onze droogservice om precies dat te vermijden.</>,
    qH: "U weet vooraf waar u aan toe bent",
    qSub: "Zo wordt bouwdroging geen technisch vraagstuk dat u zelf moet oplossen:",
    q1: " Welke oplossing geschikt is voor uw materiaal en situatie.",
    q2: " Welke capaciteit nodig is, berekend op volume en toepassing.",
    q3: " Wat u mag verwachten: droogtijd, verloop en eindresultaat.",
    q4: " Welke kosten eraan verbonden zijn, in één duidelijke prijs.",
    q5: " En hoe het droogproces wordt opgevolgd, tot de eindmeting.",
    capKick: "Onze filosofie",
    capH2: "De juiste capaciteit. Niet de grootste machine.",
    capLede: "Meer vermogen betekent niet automatisch beter drogen. Wij bepalen eerst welke capaciteit technisch zinvol is: niet meer dan noodzakelijk, niet minder dan nodig. Dat betekent een efficiëntere installatie, een lager energieverbruik en minder verspilling. Zo vermijden we twee klassieke problemen:",
    onderH: "Ondercapaciteit",
    onderP: "Een te lichte installatie vertraagt uw project onnodig: materialen blijven te vochtig, de planning schuift mee en de volgende fase blijft wachten.",
    overH: "Overcapaciteit",
    overP: "Onnodig zware toestellen die dagen of weken draaien verhogen het energieverbruik, de kosten en de ecologische impact, zonder dat het resultaat er beter van wordt.",
    gemeten: <>Gemeten, niet geschat<small>Vochtmeting voor én na</small></>,
    teamKick: "Eén team, verschillende disciplines",
    teamH2: "Geen klassiek verhuurbedrijf. Eén team met vier vakgebieden.",
    teamLede: "Onze manier van werken ontstaat door disciplines samen te brengen. Allemaal met hetzelfde doel: de complexiteit achter de schermen oplossen, zodat het voor u eenvoudig wordt.",
    tm1H: "Bouwtechniek",
    tm1P: "Onderzoekt wat er werkelijk in uw constructie gebeurt en welke droogoplossing technisch verantwoord is.",
    tm2H: "Productontwikkeling",
    tm2P: "Stelt apparatuur en configuraties samen die het drogen eenvoudiger, efficiënter en betrouwbaarder maken.",
    tm3H: "Softwareontwikkeling",
    tm3P: "Vertaalt technische processen naar digitale systemen: Calculator, reservatie, planning en opvolging.",
    tm4H: <>Marketing &amp; klantbeleving</>,
    tm4P: "Maakt complexe bouwtechnische informatie begrijpelijk, zodat u precies weet wat er op uw werf gebeurt.",
    belgH: "Ontwikkeld voor de Belgische markt.",
    belgP: <>Onze toestellen en configuraties zijn geselecteerd vanuit wat we dagelijks op Belgische bouw- en renovatieprojecten zien. Een deel van die oplossingen is <b>exclusief via Vernast beschikbaar op de Belgische markt</b>. Maar exclusiviteit is geen doel op zich: een product heeft pas waarde wanneer het een concreet probleem beter oplost.</>,
    faseKick: "Werken bij Vernast",
    faseH2: "Bouw jij mee aan de nieuwe standaard in bouwdroging?",
    faseLede: "Vernast groeit, en dat voel je op de baan. We zoeken collega's met technisch inzicht en goesting om klanten echt te helpen: van installatie en vochtmeting tot ophaling. Ervaring in de bouw is een plus, de rest leer je bij ons.",
    fc1: " Vast contract",
    fc2: <> Interne opleiding &amp; certificering</>,
    fc3: <> Modern materiaal &amp; eigen wagen</>,
    fc4: " Hecht team, korte lijnen",
    j1H: "Technieker bouwdroging",
    j1B: "Voltijds",
    j1P: "Installatie, vochtmeting en ophaling bij klanten in heel Vlaanderen.",
    j1L: <>Aartselaar · rijbewijs B <i>Solliciteer →</i></>,
    j2H: "Magazijnier / afhaalpunt",
    j2B: "Deeltijds kan",
    j2P: "Toestellen klaarzetten, testen en klanten helpen bij afhaling en retour.",
    j2L: <>Aartselaar, langs de A12 <i>Solliciteer →</i></>,
    j3H: "Spontaan solliciteren",
    j3B: "Altijd welkom",
    j3P: "Geen passende rol? Vertel ons wat je goed kan, wij bekijken wat er mogelijk is.",
    j3L: <>Stuur je cv naar {CONTACT.email} <i>Mail ons →</i></>,
    techKick: "Technologie achter de bouwdroging",
    techH2: "Technologie met één functie: complexiteit wegnemen.",
    mq1: " Technische capaciteitsselectie",
    mq2: <> Berekening ruimte &amp; toepassing</>,
    mq3: " Digitale reservatie",
    mq4: <> Planning &amp; logistiek</>,
    mq5: " Projectopvolging",
    mq6: " Technische protocollen",
    mq7: " Kwaliteitscontrole",
    mq8: <> Documentatie &amp; rapportage</>,
    mq9: " Automatisering droogproces",
    mq10: " Digitale monitoring (binnenkort)",
    techNote: <>Technologie is bij ons geen doel op zich. Ze heeft één taak: <b>u werk uit handen nemen</b>. U berekent, boekt, betaalt en plant uw installatie volledig online, en u weet op elk moment wat er op uw werf gebeurt.</>,
    acyKick: <>Kennis &amp; opleiding</>,
    acyLede: <>Goede apparatuur zonder goede uitvoering lost weinig op. Daarom bouwen we aan de Vernast Academy: ons interne opleidingsprogramma met trainingen en certificaten rond de nieuwste droogtechnieken. De Academy wordt nog volop uitgewerkt, maar één ding geldt vandaag al op elke werf: <b style={{ color: "#fff" }}>iedere vakman die bij u installeert, is intern opgeleid en gecertificeerd</b>. Zo krijgt u overal dezelfde aanpak en dezelfde kwaliteit.</>,
    st1: "opgeleide vakmannen",
    st2B: "Intern",
    st2: "gecertificeerd",
    st3B: "In uitbouw",
    st3: "open opleidingen",
    ac1T: "Kerncursus",
    ac1H: "Bouwdroging",
    ac1P: "Dimensionering, correcte plaatsing, condensafvoer en vochtmetingen",
    ac2P: "Diagnostiek, muurinjectie en rapportage",
    ac2H: "Vochtexpert",
    acCert: "Certificaat",
    ac3H: "Kelder Specialist",
    ac3P: "Bekuiping, drainage en waterdichting",
    mini1: "Ventilatie · 5 modules",
    mini2: "Gevel · 6 modules",
    mini3: "Schimmel · 4 modules",
    groepKick: "Onderdeel van Vernast",
    groepH2: "Eén groep. Alles rond uw gebouw.",
    groepLede: "Vernast BouwDroging staat niet alleen. Ziet onze technicus op uw werf geen bouwvocht maar een vochtprobleem? Dan schuift het juiste team meteen mee aan tafel, binnen dezelfde groep.",
    gr1P: "Waar u nu bent: berekende droogpakketten met garantie, losse toestellen en volledig digitale boeking en opvolging.",
    gr1L: "Gratis Calculator →",
    gr2P: "Opstijgend vocht, kelderdichting en gevelbehandeling. Wanneer de oorzaak dieper zit dan bouwvocht, pakken we ze bij de bron aan.",
    gr2L: "Naar vochtbestrijding →",
    gr3P: "Afwerking binnen en buiten. De logische volgende stap zodra uw muren aantoonbaar droog zijn.",
    gr3L: "Naar schilderwerken →",
    formKick: "Vragen of samenwerken?",
    formH2: "Vertel ons waar u mee zit.",
    formLede: "Een vraag over onze aanpak, een project bespreken of solliciteren: u krijgt binnen één werkdag antwoord.",
  },
  fr: {
    capBq: <>La meilleure solution n'est pas forcément la plus grosse installation. C'est l'installation techniquement juste. <b>C'est pourquoi nous conseillons aussi quand moins, c'est mieux.</b></>,
    academyBtn: "Découvrez l'Academy sur vernast.be",
    crumb: "À propos",
    altTeam: "L'équipe Vernast",
    altMan: "Spécialiste Vernast avec un humidimètre",
    altTm1: "Technique du bâtiment",
    altTm2: "Développement produit",
    altTm3: "Développement logiciel",
    altTm4: "Marketing et expérience client",
    altVak: "Professionnels Vernast",
    altGr1: "L'équipe Vernast BouwDroging",
    altGr3: "L'équipe Vernast Schilderwerken",
    phMsg: "Expliquez brièvement en quoi nous pouvons vous aider",
    heroKick: "À propos de Vernast BouwDroging",
    heroH1: <>Le séchage de chantier,<br />repensé.</>,
    heroP: "Louer un déshumidificateur de chantier devrait être simple. C'est pourquoi nous rendons le séchage de chantier plus simple, plus transparent et techniquement mieux étayé : la bonne capacité, des accords clairs et le moins de soucis possible pour vous.",
    chip1: <>Calculé, pas estimé<small>Calculateur de séchage intelligent</small></>,
    chip2: <>Garantie 100 % sec*<small>Ou prolongation gratuite</small></>,
    chip3: <>Entièrement numérique<small>Réserver, payer &amp; planifier</small></>,
    prakKick: "De la location d'appareils à une prise en charge complète",
    prakH2: "Nous ne livrons pas des appareils. Nous livrons un résultat sec.",
    prakP1: <>Chez la plupart des loueurs, l'histoire s'arrête une fois l'appareil livré. Chez nous, c'est là qu'elle commence. Votre chape doit être prête pour le carreleur, votre plafonnage pour le peintre, votre habitation pour la réception. <b>C'est vers cela que nous travaillons.</b></>,
    prakP2: <>C'est pourquoi nous calculons d'abord ce dont votre situation a réellement besoin. Le plafonnage, la chape et le béton libèrent chacun leur humidité à leur propre rythme, et <b>la température, la circulation de l'air et l'épaisseur de la couche</b> déterminent aussi la vitesse. Ignorer cela, c'est sécher trop lentement ou gaspiller de l'énergie.</>,
    prakP3: <>Ce savoir, nous ne le tirons pas d'une brochure. Vernast est chaque jour sur des chantiers de <b>traitement de l'humidité, de finition et d'isolation</b>. Nous voyons ce qui tourne mal lorsque le séchage est mal fait, et nous avons conçu notre service de séchage précisément pour l'éviter.</>,
    qH: "Vous savez d'avance à quoi vous en tenir",
    qSub: "Ainsi, le séchage de chantier ne devient pas une question technique que vous devez résoudre vous-même :",
    q1: " Quelle solution convient à votre matériau et à votre situation.",
    q2: " Quelle capacité est nécessaire, calculée selon le volume et l'application.",
    q3: " Ce que vous pouvez attendre : durée de séchage, déroulement et résultat final.",
    q4: " Quels sont les coûts, en un seul prix clair.",
    q5: " Et comment le processus de séchage est suivi, jusqu'à la mesure finale.",
    capKick: "Notre philosophie",
    capH2: "La bonne capacité. Pas la plus grosse machine.",
    capLede: "Plus de puissance ne signifie pas automatiquement un meilleur séchage. Nous déterminons d'abord quelle capacité a un sens sur le plan technique : pas plus que nécessaire, pas moins que requis. Cela signifie une installation plus efficace, une consommation d'énergie plus faible et moins de gaspillage. Nous évitons ainsi deux problèmes classiques :",
    onderH: "Sous-capacité",
    onderP: "Une installation trop légère retarde inutilement votre projet : les matériaux restent trop humides, le planning glisse et la phase suivante attend.",
    overH: "Surcapacité",
    overP: "Des appareils inutilement lourds qui tournent pendant des jours ou des semaines augmentent la consommation d'énergie, les coûts et l'impact écologique, sans que le résultat s'en trouve amélioré.",
    gemeten: <>Mesuré, pas estimé<small>Mesure d'humidité avant et après</small></>,
    teamKick: "Une équipe, plusieurs disciplines",
    teamH2: "Pas une entreprise de location classique. Une équipe, quatre domaines d'expertise.",
    teamLede: "Notre façon de travailler naît de la réunion de plusieurs disciplines. Toutes avec le même objectif : résoudre la complexité en coulisses, pour que tout reste simple pour vous.",
    tm1H: "Technique du bâtiment",
    tm1P: "Examine ce qui se passe réellement dans votre construction et quelle solution de séchage est techniquement justifiée.",
    tm2H: "Développement produit",
    tm2P: "Compose des équipements et des configurations qui rendent le séchage plus simple, plus efficace et plus fiable.",
    tm3H: "Développement logiciel",
    tm3P: "Traduit les processus techniques en systèmes numériques : Calculateur, réservation, planning et suivi.",
    tm4H: <>Marketing &amp; expérience client</>,
    tm4P: "Rend compréhensibles des informations techniques complexes, pour que vous sachiez exactement ce qui se passe sur votre chantier.",
    belgH: "Développé pour le marché belge.",
    belgP: <>Nos appareils et configurations sont sélectionnés à partir de ce que nous voyons chaque jour sur les chantiers de construction et de rénovation en Belgique. Une partie de ces solutions est <b>disponible exclusivement via Vernast sur le marché belge</b>. Mais l'exclusivité n'est pas un but en soi : un produit n'a de valeur que s'il résout mieux un problème concret.</>,
    faseKick: "Travailler chez Vernast",
    faseH2: "Vous voulez contribuer à la nouvelle référence du séchage de chantier ?",
    faseLede: "Vernast grandit, et cela se ressent sur le terrain. Nous cherchons des collègues avec un sens technique et l'envie d'aider vraiment les clients : de l'installation et de la mesure d'humidité jusqu'à l'enlèvement. Une expérience dans la construction est un plus, le reste, vous l'apprendrez chez nous.",
    fc1: " Contrat à durée indéterminée",
    fc2: <> Formation interne &amp; certification</>,
    fc3: <> Matériel moderne &amp; véhicule de société</>,
    fc4: " Équipe soudée, communication directe",
    j1H: "Technicien séchage de chantier",
    j1B: "Temps plein",
    j1P: "Installation, mesure d'humidité et enlèvement chez des clients dans toute la Flandre.",
    j1L: <>Aartselaar · permis B <i>Postuler →</i></>,
    j2H: "Magasinier / point de retrait",
    j2B: "Temps partiel possible",
    j2P: "Préparer et tester les appareils, et aider les clients lors du retrait et du retour.",
    j2L: <>Aartselaar, le long de l'A12 <i>Postuler →</i></>,
    j3H: "Candidature spontanée",
    j3B: "Toujours bienvenue",
    j3P: "Pas de poste qui vous correspond ? Dites-nous ce que vous savez bien faire, nous verrons ce qui est possible.",
    j3L: <>Envoyez votre CV à {CONTACT.email} <i>Écrivez-nous →</i></>,
    techKick: "La technologie derrière le séchage de chantier",
    techH2: "Une technologie avec une seule fonction : supprimer la complexité.",
    mq1: " Sélection technique de la capacité",
    mq2: <> Calcul de l'espace &amp; de l'application</>,
    mq3: " Réservation numérique",
    mq4: <> Planning &amp; logistique</>,
    mq5: " Suivi de projet",
    mq6: " Protocoles techniques",
    mq7: " Contrôle qualité",
    mq8: <> Documentation &amp; rapports</>,
    mq9: " Automatisation du processus de séchage",
    mq10: " Monitoring numérique (bientôt)",
    techNote: <>Chez nous, la technologie n'est pas un but en soi. Elle a une seule mission : <b>vous décharger du travail</b>. Vous calculez, réservez, payez et planifiez votre installation entièrement en ligne, et vous savez à tout moment ce qui se passe sur votre chantier.</>,
    acyKick: <>Savoir &amp; formation</>,
    acyLede: <>Un bon équipement sans une bonne exécution ne résout pas grand-chose. C'est pourquoi nous développons la Vernast Academy : notre programme de formation interne, avec des formations et des certificats sur les dernières techniques de séchage. L'Academy est encore en plein développement, mais une chose vaut déjà aujourd'hui sur chaque chantier : <b style={{ color: "#fff" }}>chaque professionnel qui installe chez vous est formé et certifié en interne</b>. Vous bénéficiez ainsi partout de la même approche et de la même qualité.</>,
    st1: "de professionnels formés",
    st2B: "En interne",
    st2: "certifiés",
    st3B: "En développement",
    st3: "formations ouvertes",
    ac1T: "Cours de base",
    ac1H: "Séchage de chantier",
    ac1P: "Dimensionnement, placement correct, évacuation des condensats et mesures d'humidité",
    ac2P: "Diagnostic, injection des murs et rapports",
    ac2H: "Expert en humidité",
    acCert: "Certificat",
    ac3H: "Spécialiste caves",
    ac3P: "Cuvelage, drainage et étanchéité",
    mini1: "Ventilation · 5 modules",
    mini2: "Façade · 6 modules",
    mini3: "Moisissures · 4 modules",
    groepKick: "Membre du groupe Vernast",
    groepH2: "Un groupe. Tout autour de votre bâtiment.",
    groepLede: "Vernast BouwDroging n'est pas seule. Notre technicien voit-il sur votre chantier non pas de l'humidité de construction mais un problème d'humidité ? L'équipe adéquate se joint alors directement à la discussion, au sein du même groupe.",
    gr1P: "Là où vous êtes maintenant : des packs de séchage calculés avec garantie, des appareils séparés et une réservation et un suivi entièrement numériques.",
    gr1L: "Calculateur gratuit →",
    gr2P: "Humidité ascensionnelle, étanchéité des caves et traitement des façades. Lorsque la cause est plus profonde que l'humidité de construction, nous la traitons à la source.",
    gr2L: "Vers le traitement de l'humidité →",
    gr3P: "Finitions intérieures et extérieures. L'étape suivante logique dès que vos murs sont secs, mesures à l'appui.",
    gr3L: "Vers les travaux de peinture →",
    formKick: "Des questions ou envie de collaborer ?",
    formH2: "Dites-nous ce qui vous préoccupe.",
    formLede: "Une question sur notre approche, un projet à discuter ou une candidature : vous recevez une réponse dans un délai d'un jour ouvrable.",
  },
  en: {
    capBq: <>The best solution is not necessarily the biggest installation. It is the installation that is technically right. <b>That is why we also advise you when less is better.</b></>,
    academyBtn: "Discover the Academy on vernast.be",
    crumb: "About us",
    altTeam: "The Vernast team",
    altMan: "Vernast specialist with a moisture meter",
    altTm1: "Building technology",
    altTm2: "Product development",
    altTm3: "Software development",
    altTm4: "Marketing and customer experience",
    altVak: "Vernast specialists",
    altGr1: "The Vernast BouwDroging team",
    altGr3: "The Vernast Schilderwerken team",
    phMsg: "Tell us briefly how we can help you",
    heroKick: "About Vernast BouwDroging",
    heroH1: <>Construction drying,<br />rethought.</>,
    heroP: "Hiring a construction dehumidifier should be simple. That is why we make construction drying simpler, more transparent and better founded technically: the right capacity, clear agreements and as few worries as possible for you.",
    chip1: <>Calculated, not estimated<small>Smart drying calculator</small></>,
    chip2: <>100% dry guarantee*<small>Or a free extension</small></>,
    chip3: <>Fully digital<small>Book, pay &amp; schedule</small></>,
    prakKick: "From equipment hire to taking everything off your hands",
    prakH2: "We don't deliver machines. We deliver a dry result.",
    prakP1: <>With most hire companies, the story ends once the machine has been delivered. With us, that is where it begins. Your screed has to be ready for the floor layer, your plaster for the painter, your home for handover. <b>That is what we work towards.</b></>,
    prakP2: <>That is why we first calculate what your situation really needs. Plaster, screed and concrete each release moisture at their own pace, and <b>temperature, air circulation and layer thickness</b> also determine how fast. Ignore that, and you either dry too slowly or waste energy.</>,
    prakP3: <>We don't get that knowledge from a brochure. Vernast is on site every day for <b>damp control, finishing and insulation</b>. We see what goes wrong when drying is done badly, and we built our drying service to avoid exactly that.</>,
    qH: "You know in advance where you stand",
    qSub: "So construction drying doesn't become a technical problem you have to solve yourself:",
    q1: " Which solution suits your material and situation.",
    q2: " What capacity is needed, calculated on volume and application.",
    q3: " What you can expect: drying time, progress and end result.",
    q4: " What it costs, in one clear price.",
    q5: " And how the drying process is monitored, up to the final measurement.",
    capKick: "Our philosophy",
    capH2: "The right capacity. Not the biggest machine.",
    capLede: "More power does not automatically mean better drying. We first determine what capacity makes technical sense: no more than necessary, no less than needed. That means a more efficient installation, lower energy consumption and less waste. This way we avoid two classic problems:",
    onderH: "Undercapacity",
    onderP: "An installation that is too light delays your project needlessly: materials stay too damp, the schedule slips and the next phase is left waiting.",
    overH: "Overcapacity",
    overP: "Needlessly heavy machines running for days or weeks increase energy consumption, costs and environmental impact, without making the result any better.",
    gemeten: <>Measured, not estimated<small>Moisture reading before and after</small></>,
    teamKick: "One team, different disciplines",
    teamH2: "Not a traditional hire company. One team with four fields of expertise.",
    teamLede: "Our way of working comes from bringing disciplines together. All with the same goal: solving the complexity behind the scenes, so that it becomes simple for you.",
    tm1H: "Building technology",
    tm1P: "Investigates what is really happening in your structure and which drying solution is technically sound.",
    tm2H: "Product development",
    tm2P: "Puts together equipment and configurations that make drying simpler, more efficient and more reliable.",
    tm3H: "Software development",
    tm3P: "Translates technical processes into digital systems: Calculator, booking, scheduling and follow-up.",
    tm4H: <>Marketing &amp; customer experience</>,
    tm4P: "Makes complex building information easy to understand, so that you know exactly what is happening on your site.",
    belgH: "Developed for the Belgian market.",
    belgP: <>Our machines and configurations are selected based on what we see every day on Belgian construction and renovation projects. Some of these solutions are <b>available on the Belgian market exclusively through Vernast</b>. But exclusivity is not a goal in itself: a product only has value when it solves a concrete problem better.</>,
    faseKick: "Working at Vernast",
    faseH2: "Will you help build the new standard in construction drying?",
    faseLede: "Vernast is growing, and you can feel it out on the road. We are looking for colleagues with technical insight and the drive to really help customers: from installation and moisture readings to collection. Experience in construction is a plus, the rest you will learn with us.",
    fc1: " Permanent contract",
    fc2: <> In-house training &amp; certification</>,
    fc3: <> Modern equipment &amp; your own van</>,
    fc4: " Close-knit team, short lines",
    j1H: "Construction drying technician",
    j1B: "Full-time",
    j1P: "Installation, moisture readings and collection at customers' sites across Flanders.",
    j1L: <>Aartselaar · driving licence B <i>Apply →</i></>,
    j2H: "Warehouse operative / collection point",
    j2B: "Part-time possible",
    j2P: "Preparing and testing machines, and helping customers with collection and returns.",
    j2L: <>Aartselaar, along the A12 <i>Apply →</i></>,
    j3H: "Speculative application",
    j3B: "Always welcome",
    j3P: "No suitable role? Tell us what you are good at, and we will see what is possible.",
    j3L: <>Send your CV to {CONTACT.email} <i>Email us →</i></>,
    techKick: "The technology behind construction drying",
    techH2: "Technology with one function: removing complexity.",
    mq1: " Technical capacity selection",
    mq2: <> Room &amp; application calculation</>,
    mq3: " Digital booking",
    mq4: <> Scheduling &amp; logistics</>,
    mq5: " Project follow-up",
    mq6: " Technical protocols",
    mq7: " Quality control",
    mq8: <> Documentation &amp; reporting</>,
    mq9: " Drying process automation",
    mq10: " Digital monitoring (coming soon)",
    techNote: <>For us, technology is not a goal in itself. It has one task: <b>taking work off your hands</b>. You calculate, book, pay for and schedule your installation entirely online, and you know at any moment what is happening on your site.</>,
    acyKick: <>Knowledge &amp; training</>,
    acyLede: <>Good equipment without good workmanship solves little. That is why we are building the Vernast Academy: our in-house training programme with courses and certificates in the latest drying techniques. The Academy is still being developed, but one thing already applies on every site today: <b style={{ color: "#fff" }}>every specialist who installs at your property has been trained and certified in-house</b>. So you get the same approach and the same quality everywhere.</>,
    st1: "trained specialists",
    st2B: "In-house",
    st2: "certified",
    st3B: "In development",
    st3: "open courses",
    ac1T: "Core course",
    ac1H: "Construction drying",
    ac1P: "Sizing, correct placement, condensate drainage and moisture readings",
    ac2P: "Diagnostics, damp-proof injection and reporting",
    ac2H: "Damp expert",
    acCert: "Certificate",
    ac3H: "Basement specialist",
    ac3P: "Tanking, drainage and waterproofing",
    mini1: "Ventilation · 5 modules",
    mini2: "Façade · 6 modules",
    mini3: "Mould · 4 modules",
    groepKick: "Part of Vernast",
    groepH2: "One group. Everything around your building.",
    groepLede: "Vernast BouwDroging does not stand alone. Does our technician see not construction moisture on your site, but a damp problem? Then the right team joins the conversation straight away, within the same group.",
    gr1P: "Where you are now: calculated drying packages with a guarantee, individual machines and fully digital booking and follow-up.",
    gr1L: "Free Calculator →",
    gr2P: "Rising damp, basement waterproofing and façade treatment. When the cause runs deeper than construction moisture, we tackle it at the source.",
    gr2L: "To damp control →",
    gr3P: "Interior and exterior finishing. The logical next step as soon as your walls are demonstrably dry.",
    gr3L: "To painting work →",
    formKick: "Questions or want to work together?",
    formH2: "Tell us what's on your mind.",
    formLede: "A question about our approach, a project to discuss or a job application: you will get an answer within one working day.",
  },
} satisfies Copy<Teksten>;
