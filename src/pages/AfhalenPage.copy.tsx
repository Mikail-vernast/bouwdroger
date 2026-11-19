import type { ReactNode } from "react";
import type { Copy } from "@/i18n/useTaal";

/**
 * Teksten van /afhalen per taal. De opmaak, de SVG-pictogrammen en de kaart
 * blijven in `AfhalenPage.tsx`.
 *
 * Bedragen komen als argument binnen (`pomp`, `voorschot`) en worden in de
 * pagina uit `PUMP` en `DEPOSIT_GROSS` opgemaakt: typ er hier geen over.
 */

type Lp = (nlPad: string) => string;

export interface AfhalenTekst {
  kruimel: string;
  pictogram: { rechtop: string; laadruimte: string; tijdslot: string; kaart: string };
  kaart: { tesla: string; carglass: [string, string]; unit: string; vanAntwerpen: string };
  hero: { kick: string; h1: string; p: string; cta: string; ctaUitleg: string; kaartAria: string; kaartCap: string };
  stappen: { kick: string; h2: string; lede: string; lijst: [string, string, string][] };
  transport: {
    kick: string;
    h2: string;
    lede: string;
    regels: { b: string; p: string }[];
    ctaVraag: string;
    cta: string;
    imgAlt: string;
  };
  gamma: {
    kick: string;
    h2: string;
    lede: string;
    kaarten: { alt: string; span: string; h3: string; p: string }[];
    pomp: { alt: string; span: string; h3: (pomp: string) => string; p: string; link: string };
    cta: string;
  };
  locatie: {
    kick: string;
    h2: string;
    lede: string;
    route: [string, string][];
    routeAlt: (titel: string) => string;
    maps: string;
    contact: string;
  };
  faq: {
    kick: string;
    h2: string;
    hulpH3: string;
    hulpP: string;
    bel: string;
    mail: string;
    lijst: (pomp: string, voorschot: string) => [string, string][];
  };
  form: {
    kick: string;
    h2: string;
    lede: (lp: Lp) => ReactNode;
    klaar: string;
    klaarTitel: string;
    voornaam: string;
    naam: string;
    naamPh: string;
    email: string;
    emailPh: string;
    telefoon: string;
    onderwerp: string;
    /** `waarde` gaat als onderwerp naar het portaal en blijft dus Nederlands. */
    onderwerpen: { waarde: string; label: string }[];
    bericht: string;
    berichtPh: string;
    privacy: string;
    versturen: string;
    bezig: string;
  };
}

const ONDERWERPEN = [
  "Afhaling reserveren",
  "Vraag over een toestel of capaciteit",
  "Afhaalmoment verzetten",
  "Terugbrengen of verlengen",
];

export const AFHALEN_STANDAARD_ONDERWERP = ONDERWERPEN[0];

export const AFHALEN_COPY = {
  nl: {
    kruimel: "Zelf afhalen in Aartselaar",
    pictogram: {
      rechtop: "Een bouwdroger hoort rechtop vervoerd te worden, niet liggend",
      laadruimte: "Een bouwdroger die in een ruime koffer wordt geschoven",
      tijdslot: "Een klok waarvan de wijzer stilvalt in het gereserveerde tijdslot",
      kaart: "Route naar het afhaalpunt van Vernast via de N177, Tesla en Carglass",
    },
    kaart: {
      tesla: "u passeert eerst Tesla",
      carglass: ["daarna Carglass,", "hier rechts indraaien"],
      unit: "magazijn + afhaalpoort",
      vanAntwerpen: "van Antwerpen via de N177",
    },
    hero: {
      kick: "Zelf afhalen in Aartselaar",
      h1: "Online reserveren. Klaarzetten. Inladen en vertrekken.",
      p: "Huur losse bouwdrogers, ventilatoren en elektrische kachels aan afhaaltarief. U kiest vooraf uw toestel en tijdslot; wij zetten alles klaar aan onze poort langs de A12.",
      cta: "Bekijk toestellen en reserveer",
      ctaUitleg: "Zo werkt afhalen",
      kaartAria: "Bekijk de route naar het afhaalpunt",
      kaartCap: "Boomsesteenweg 12, Unit 11 · langs de A12",
    },
    stappen: {
      kick: "Van reservatie tot retour",
      h2: "Afhalen zonder wachten, in vier duidelijke stappen.",
      lede: "De reservatie gebeurt volledig online. Daardoor ligt het juiste toestel klaar wanneer u aankomt en weet u vooraf wat u betaalt.",
      lijst: [
        ["01", "Kies en reserveer online", "Selecteer uw bouwdroger, ventilator of kachel, de huurperiode en een vrij afhaalmoment."],
        ["02", "U ontvangt bevestiging", "Na betaling krijgt u uw reservatie, tijdslot en het adres meteen per e-mail."],
        ["03", "Alles staat klaar", "Kom op het afgesproken moment naar unit 11. Wij geven korte uitleg en helpen bij het inladen."],
        ["04", "Breng op afspraak terug", "U brengt de toestellen aan het einde van de gekozen huurperiode terug naar hetzelfde magazijn."],
      ],
    },
    transport: {
      kick: "Goed voorbereid vertrekken",
      h2: "Een droger weegt 25 tot 40 kg. Til hem niet alleen.",
      lede: "Zeker niet op een trap. Met de juiste wagen, een tweede paar handen en een toestel dat rechtop blijft staan, vertrekt u veilig en komt het heel aan.",
      regels: [
        {
          b: "Altijd rechtop vervoeren",
          p: "Leg een condensdroger niet plat: koelmiddel kan uit de compressor lopen. Toch liggend vervoerd? Laat hem vóór gebruik minstens 24 uur rechtop staan.",
        },
        {
          b: "Kom met voldoende laadruimte",
          p: "Een ruime koffer of aanhangwagen is aanbevolen. Kom bij voorkeur met twee; onze medewerker helpt u aan het magazijn met inladen.",
        },
        {
          b: "Uw tijdslot voorkomt wachttijd",
          p: "Afhalen en terugbrengen kan op weekdagen van 08:00 tot 17:00, uitsluitend op het moment uit uw bevestiging. Daardoor staat uw toestel klaar als u aankomt.",
        },
      ],
      ctaVraag: "Liever niets tillen of instellen?",
      cta: "Bekijk levering & installatie",
      imgAlt: "Man met rugpijn na het tillen van een zwaar toestel",
    },
    gamma: {
      kick: "Wat kunt u afhalen?",
      h2: "Losse toestellen voor elke droogopstelling.",
      lede: "U kiest zelf de combinatie. Twijfelt u over capaciteit of aantallen, gebruik dan de Calculator of kies levering met installatie.",
      kaarten: [
        { alt: "Vernast Boost condensbouwdroger, klaar voor afhaling", span: "Bouwdrogers", h3: "50 tot 110 liter per dag", p: "Voor chape, pleisterwerk, renovatie en de meeste waterschade." },
        { alt: "Vernast Revolution adsorptiedroger met slangaansluitingen, klaar voor afhaling", span: "Koude ruimtes", h3: "Adsorptiedroger", p: "Voor lage temperaturen of gerichte droging via luchtslangen." },
        { alt: "Vernast Highflow axiaalventilator, klaar voor afhaling", span: "Luchtcirculatie", h3: "Axiale en radiale ventilatoren", p: "Verspreiden droge lucht langs vloeren, muren en moeilijk bereikbare zones." },
        { alt: "Vernast Heatpower 30 elektrische bouwkachel, klaar voor afhaling", span: "Extra warmte", h3: "Elektrische bouwkachels", p: "Voor koude werven waar een condensdroger anders rendement verliest." },
      ],
      pomp: {
        alt: "Externe condenspomp met opvangbak en afvoerslang, klaar voor afhaling",
        span: "Toebehoren",
        h3: (pomp) => `Condenspomp, ${pomp} per bouwdroger per dag`,
        p: "Zodat u geen reservoir hoeft te legen: de pomp voert het condenswater continu af naar een afvoer, douche of vloerput, tot 3,90 m hoger dan het toestel staat. ",
        link: "Zo werkt de condenspomp",
      },
      cta: "Bekijk beschikbaarheid en afhaalprijzen",
    },
    locatie: {
      kick: "Ons afhaalpunt",
      h2: "Vlak langs de A12, zonder stadsverkeer.",
      lede: "Boomsesteenweg 12, Unit 11 · 2630 Aartselaar. Rijd na Carglass het KMO-park in en volg de units tot nummer 11.",
      route: [
        ["Neem de inrit", "Vlak naast Carglass, met Tesla als herkenningspunt op de hoek."],
        ["Rijd rechtdoor", "Volg de weg het KMO-park in richting het zwarte Arthrex-gebouw."],
        ["Houd rechts aan", "Volg de nummering langs de laadkades tot de units 11–12."],
        ["Parkeer bij unit 11", "Meld u aan bij onze poort; uw reservatie staat daar klaar."],
      ],
      routeAlt: (titel) => `${titel}: route naar het afhaalpunt`,
      maps: "Open in Google Maps",
      contact: "Bekijk alle contactgegevens",
    },
    faq: {
      kick: "Veelgestelde vragen",
      h2: "Praktisch vóór u vertrekt.",
      hulpH3: "Staat uw vraag er niet bij?",
      hulpP: "Onze medewerkers aan het afhaalpunt kennen de toestellen en uw reservatie. Bellen gaat het snelst, op weekdagen tussen 08:00 en 17:00.",
      bel: "Bel 03 689 90 65",
      mail: "Mail uw vraag",
      lijst: (pomp, voorschot) => [
        [
          "Kan ik zonder reservatie langskomen?",
          "Nee. Afhalen en terugbrengen gebeurt enkel op een afgesproken moment. Wij houden geen balie open: de toestellen staan in het magazijn en worden per reservatie klaargezet, gecontroleerd en geladen. Komt u onaangekondigd, dan is de kans groot dat het toestel dat u zoekt net op een werf staat. Met een reservatie weet u vooraf dat het er is en staat het klaar wanneer u aankomt.",
        ],
        [
          "Wanneer kan ik afhalen en terugbrengen?",
          "Op weekdagen, in een van de tijdsloten 07:30–08:00, 08:00–10:00, 10:00–12:00, 13:00–15:00 of 15:00–17:00. U kiest het slot tijdens de online reservatie en u krijgt het samen met het adres in uw bevestiging. Terugbrengen gebeurt op dezelfde manier: op het einde van de gekozen huurperiode, binnen een van diezelfde tijdsloten. In het weekend is het magazijn gesloten.",
        ],
        [
          "Hoe lang kan ik een toestel afhalen, en kan ik verlengen?",
          "U kiest bij de reservatie een periode in hele weken, van 1 tot 8 weken. Vanaf 4 weken zakt de huurprijs met 10%, oplopend tot 15% bij 8 weken. Is de ruimte op het einde nog niet droog, dan verlengt u online, u betaalt dan alleen de extra dagen aan hetzelfde dagtarief. Doe dat liefst vóór de einddatum: dan blijft het toestel voor u gereserveerd in plaats van naar de volgende klant te gaan.",
        ],
        [
          "Moet ik een waarborg betalen?",
          "Nee. Wij vragen geen waarborg, ook niet bij afhalen. U betaalt de huurprijs voor de gereserveerde periode, meer niet. Wat u wel ondertekent is de verplichting om het materieel schoon en in dezelfde staat terug te brengen; schade of vervuiling wordt achteraf doorgerekend, maar er staat vooraf geen bedrag geblokkeerd.",
        ],
        [
          "Wat betaal ik op het moment van reserveren?",
          `Twee mogelijkheden. Betaalt u de volledige huur meteen online, dan krijgt u 5% korting op de huurprijs. Of u betaalt een vaste orderbevestiging van ${voorschot} en het saldo wanneer u de toestellen komt halen, dan rekent u ter plaatse af en vertrekt u met de factuur. Het bedrag staat in beide gevallen op het scherm vóór u bevestigt.`,
        ],
        [
          "Past een bouwdroger in mijn auto?",
          "Een condensbouwdroger weegt 25 tot 40 kg en is ongeveer zo groot als een stevige koffer op wielen. In een break of een ruime kofferbak past hij; in een kleine stadswagen meestal niet, zeker niet samen met een ventilator. Voorzie een aanhangwagen zodra u twee of meer toestellen meeneemt, en kom bij voorkeur met twee personen, onze medewerker helpt bij het inladen, maar thuis staat u er alleen voor.",
        ],
        [
          "Mag ik een bouwdroger liggend vervoeren?",
          "Liever niet. In een condensdroger zit een compressor met koelmiddel en olie; ligt het toestel plat, dan kan die olie uit de compressor lopen. Vervoer hem dus rechtop en zet hem vast zodat hij niet omvalt. Is het toch liggend gegaan, laat het toestel dan minstens 24 uur rechtop staan vóór u het inschakelt, anders riskeert u de compressor.",
        ],
        [
          "Welke stroom heb ik nodig?",
          "De condensbouwdrogers en de ventilatoren draaien op een gewoon stopcontact van 230 V: 0,75 tot 1,4 kW voor een droger, ongeveer 0,2 kW voor een ventilator. De elektrische bouwkachels van 20 en 30 kW zijn iets anders, die vragen een krachtstroomaansluiting van 400 V. Controleer dat vóór u reserveert; zonder 400 V op de werf kunt u de kachel niet gebruiken.",
        ],
        [
          "Moet ik het waterreservoir zelf leegmaken?",
          `Alleen als u geen condenspomp meeneemt. Zonder pomp gaat het toestel mee zoals het is, met zijn reservoir: reken op gemiddeld 2 keer per dag legen, afhankelijk van hoe nat de ruimte is. Loopt het vol, dan schakelt de droger zichzelf uit en staat hij stil tot u hem leegt. Mét pomp (${pomp} per bouwdroger per dag) loopt het condenswater continu weg naar een afvoer, douche of vloerput en hoeft u niets te legen. Vermeld de pomp bij uw reservatie, dan leggen wij hem klaar; aansluiten is een slang in de bak en een stekker in het stopcontact.`,
        ],
        [
          "Krijg ik uitleg bij het afhalen?",
          "Ja. Aan de poort overlopen we kort waar u het toestel best zet, hoe u de streefvochtigheid instelt, wanneer u het reservoir leegt en waar u op let bij ramen en deuren. Dat duurt enkele minuten en volstaat voor een gewone droging. Wat er niet bij zit is de berekening: hoeveel toestellen uw ruimte nodig heeft en hoe lang, dat bepaalt u zelf met de Calculator of u kiest levering met installatie.",
        ],
        [
          "Geldt de Drooggarantie ook als ik zelf afhaal?",
          "Nee. De Drooggarantie geldt uitsluitend voor droogpakketten die via de Calculator berekend en met levering en installatie geboekt zijn. Ze steunt op een vochtmeting bij de start en bij de oplevering door onze technieker, en die meting gebeurt niet bij een afhaling. Huurt u los af te halen toestellen, dan bepaalt u zelf de opstelling en de duur.",
        ],
        [
          "Hoeveel toestellen kan ik in één keer reserveren?",
          "Tot acht per toestelsoort, en nooit meer dan er in de vloot staan, van de adsorptiedroger hebben we er bijvoorbeeld één. De reservatiepagina toont per toestel wat er op uw datum vrij is. Heeft u meer nodig voor een grote werf, bel ons dan: dan kijken we of het logistiek haalbaar is of dat levering de betere oplossing is.",
        ],
        [
          "In welke staat moet ik de toestellen terugbrengen?",
          "Schoon, compleet en in dezelfde staat als bij ontvangst, normale slijtage uitgezonderd, inclusief de slangen, kabels en accessoires die u meekreeg. Een droger die onder het chapestof zit mag u gewoon afvegen; wij controleren en onderhouden hem daarna zelf. Treffen we vervuiling of schade aan, dan laten we dat schriftelijk weten vóór er iets wordt doorgerekend.",
        ],
        [
          "Wat als ik het toestel niet op tijd kan terugbrengen?",
          "Bel of mail ons zodra u het weet. In de meeste gevallen verlengen we gewoon en betaalt u de extra dagen aan hetzelfde tarief. Het probleem is niet de dag zelf maar de planning: staat het toestel al ingepland voor een volgende klant, dan moeten wij dat omgooien. Een telefoontje op voorhand lost dat op; onaangekondigd te laat terugbrengen niet.",
        ],
        [
          "Is afhalen goedkoper dan laten leveren?",
          "Ja, u betaalt geen transport en geen installatie. Daar staat tegenover dat u zelf tilt, zelf de opstelling bepaalt, zelf het reservoir leegt en zelf terugrijdt, en dat er geen vochtmeting en geen Drooggarantie bij zitten. Voor één droger in een garage of kelder is afhalen vaak de logische keuze; voor een volledige chape of een waterschadedossier met verzekering is levering dat meestal.",
        ],
      ],
    },
    form: {
      kick: "Uw afhaling aanvragen",
      h2: "Vertel ons wanneer u langskomt.",
      lede: (lp) => (
        <>
          Laat uw gewenste afhaaldatum en de toestellen weten, dan bevestigen wij uw tijdslot. U
          krijgt binnen één werkdag antwoord. Liever meteen zelf boeken?{" "}
          <a href={lp("/verhuur/afhalen")}>Bekijk de beschikbaarheid online</a>.
        </>
      ),
      klaar: "Bedankt! Wij bevestigen uw afhaalmoment binnen één werkdag.",
      klaarTitel: "Vraag verzonden",
      voornaam: "Voornaam",
      naam: "Naam",
      naamPh: "Achternaam",
      email: "E-mail",
      emailPh: "naam@voorbeeld.be",
      telefoon: "Telefoon",
      onderwerp: "Waarover gaat het?",
      onderwerpen: ONDERWERPEN.map((o) => ({ waarde: o, label: o })),
      bericht: "Gewenste datum en toestellen",
      berichtPh: "Bv. donderdag 14 november in de voormiddag, 1 bouwdroger en 1 ventilator, voor een kelder van 60 m².",
      privacy: "Wij gebruiken uw gegevens enkel om uw afhaling te bevestigen.",
      versturen: "Verstuur aanvraag",
      bezig: "Versturen…",
    },
  },
  fr: {
    kruimel: "Enlèvement à Aartselaar",
    pictogram: {
      rechtop: "Un déshumidificateur de chantier se transporte debout, pas couché",
      laadruimte: "Un déshumidificateur de chantier glissé dans un coffre spacieux",
      tijdslot: "Une horloge dont l'aiguille s'arrête dans le créneau réservé",
      kaart: "Itinéraire vers le point d'enlèvement Vernast via la N177, Tesla et Carglass",
    },
    kaart: {
      tesla: "vous passez d'abord Tesla",
      carglass: ["puis Carglass,", "tournez ici à droite"],
      unit: "entrepôt + porte d'enlèvement",
      vanAntwerpen: "depuis Anvers via la N177",
    },
    hero: {
      kick: "Enlèvement à Aartselaar",
      h1: "Réservez en ligne. Nous préparons. Chargez et repartez.",
      p: "Louez des déshumidificateurs de chantier, ventilateurs et chauffages électriques à l'unité, au tarif enlèvement. Vous choisissez à l'avance votre appareil et votre créneau ; nous préparons tout à notre porte, le long de l'A12.",
      cta: "Voir les appareils et réserver",
      ctaUitleg: "Comment fonctionne l'enlèvement",
      kaartAria: "Voir l'itinéraire vers le point d'enlèvement",
      kaartCap: "Boomsesteenweg 12, Unit 11 · le long de l'A12",
    },
    stappen: {
      kick: "De la réservation au retour",
      h2: "Enlever sans attendre, en quatre étapes claires.",
      lede: "La réservation se fait entièrement en ligne. Le bon appareil est donc prêt à votre arrivée et vous savez à l'avance ce que vous payez.",
      lijst: [
        ["01", "Choisissez et réservez en ligne", "Sélectionnez votre déshumidificateur, ventilateur ou chauffage, la période de location et un moment d'enlèvement libre."],
        ["02", "Vous recevez une confirmation", "Après paiement, vous recevez immédiatement par e-mail votre réservation, votre créneau et l'adresse."],
        ["03", "Tout est prêt", "Présentez-vous à l'unité 11 au moment convenu. Nous vous donnons une brève explication et vous aidons à charger."],
        ["04", "Retour sur rendez-vous", "À la fin de la période de location choisie, vous ramenez les appareils au même entrepôt."],
      ],
    },
    transport: {
      kick: "Partir bien préparé",
      h2: "Un déshumidificateur pèse de 25 à 40 kg. Ne le soulevez pas seul.",
      lede: "Encore moins dans un escalier. Avec le bon véhicule, une deuxième paire de mains et un appareil qui reste debout, vous partez en sécurité et il arrive intact.",
      regels: [
        {
          b: "Toujours transporter debout",
          p: "Ne couchez pas un déshumidificateur à condensation : du fluide frigorigène peut s'échapper du compresseur. Transporté couché malgré tout ? Laissez-le au moins 24 heures debout avant utilisation.",
        },
        {
          b: "Prévoyez assez d'espace de chargement",
          p: "Un coffre spacieux ou une remorque est recommandé. Venez de préférence à deux ; notre collaborateur vous aide à charger à l'entrepôt.",
        },
        {
          b: "Votre créneau vous évite d'attendre",
          p: "L'enlèvement et le retour sont possibles en semaine de 08:00 à 17:00, uniquement au moment indiqué dans votre confirmation. Votre appareil est ainsi prêt à votre arrivée.",
        },
      ],
      ctaVraag: "Vous préférez ne rien soulever ni régler ?",
      cta: "Voir la livraison et l'installation",
      imgAlt: "Homme souffrant du dos après avoir soulevé un appareil lourd",
    },
    gamma: {
      kick: "Que pouvez-vous enlever ?",
      h2: "Des appareils à l'unité pour chaque dispositif de séchage.",
      lede: "Vous composez vous-même la combinaison. Un doute sur la capacité ou le nombre d'appareils ? Utilisez le calculateur ou choisissez la livraison avec installation.",
      kaarten: [
        { alt: "Déshumidificateur de chantier à condensation Vernast Boost, prêt à être enlevé", span: "Déshumidificateurs", h3: "De 50 à 110 litres par jour", p: "Pour la chape, le plafonnage, la rénovation et la plupart des dégâts des eaux." },
        { alt: "Déshumidificateur à adsorption Vernast Revolution avec raccords de gaine, prêt à être enlevé", span: "Pièces froides", h3: "Déshumidificateur à adsorption", p: "Pour les basses températures ou un séchage ciblé via des gaines d'air." },
        { alt: "Ventilateur axial Vernast Highflow, prêt à être enlevé", span: "Circulation d'air", h3: "Ventilateurs axiaux et radiaux", p: "Répartissent l'air sec le long des sols, des murs et dans les zones difficiles d'accès." },
        { alt: "Chauffage de chantier électrique Vernast Heatpower 30, prêt à être enlevé", span: "Chaleur d'appoint", h3: "Chauffages de chantier électriques", p: "Pour les chantiers froids où un déshumidificateur à condensation perdrait sinon en rendement." },
      ],
      pomp: {
        alt: "Pompe à condensats externe avec bac de récupération et tuyau d'évacuation, prête à être enlevée",
        span: "Accessoires",
        h3: (pomp) => `Pompe à condensats, ${pomp} par déshumidificateur par jour`,
        p: "Pour ne plus vider de réservoir : la pompe évacue l'eau de condensation en continu vers un égout, une douche ou un siphon de sol, jusqu'à 3,90 m plus haut que l'appareil. ",
        link: "Comment fonctionne la pompe à condensats",
      },
      cta: "Voir les disponibilités et les prix d'enlèvement",
    },
    locatie: {
      kick: "Notre point d'enlèvement",
      h2: "Juste le long de l'A12, sans circulation urbaine.",
      lede: "Boomsesteenweg 12, Unit 11 · 2630 Aartselaar. Après Carglass, entrez dans le parc PME et suivez les unités jusqu'au numéro 11.",
      route: [
        ["Prenez l'entrée", "Juste à côté de Carglass, avec Tesla comme point de repère au coin."],
        ["Continuez tout droit", "Suivez la route dans le parc PME en direction du bâtiment noir d'Arthrex."],
        ["Serrez à droite", "Suivez la numérotation le long des quais de chargement jusqu'aux unités 11–12."],
        ["Garez-vous à l'unité 11", "Présentez-vous à notre porte ; votre réservation vous y attend."],
      ],
      routeAlt: (titel) => `${titel} : itinéraire vers le point d'enlèvement`,
      maps: "Ouvrir dans Google Maps",
      contact: "Voir toutes les coordonnées",
    },
    faq: {
      kick: "Questions fréquentes",
      h2: "Côté pratique, avant de partir.",
      hulpH3: "Votre question n'y figure pas ?",
      hulpP: "Nos collaborateurs au point d'enlèvement connaissent les appareils et votre réservation. Le plus rapide est d'appeler, en semaine entre 08:00 et 17:00.",
      bel: "Appelez le 03 689 90 65",
      mail: "Envoyez votre question",
      lijst: (pomp, voorschot) => [
        [
          "Puis-je passer sans réservation ?",
          "Non. L'enlèvement et le retour se font uniquement à un moment convenu. Nous n'avons pas de comptoir ouvert : les appareils sont à l'entrepôt et sont préparés, contrôlés et chargés par réservation. Si vous venez à l'improviste, il y a de fortes chances que l'appareil que vous cherchez soit justement sur un chantier. Avec une réservation, vous savez à l'avance qu'il est là et il est prêt à votre arrivée.",
        ],
        [
          "Quand puis-je enlever et ramener un appareil ?",
          "En semaine, dans l'un des créneaux 07:30–08:00, 08:00–10:00, 10:00–12:00, 13:00–15:00 ou 15:00–17:00. Vous choisissez le créneau lors de la réservation en ligne et vous le recevez avec l'adresse dans votre confirmation. Le retour se passe de la même manière : à la fin de la période de location choisie, dans l'un de ces mêmes créneaux. Le week-end, l'entrepôt est fermé.",
        ],
        [
          "Pour combien de temps puis-je enlever un appareil, et puis-je prolonger ?",
          "Lors de la réservation, vous choisissez une période en semaines entières, de 1 à 8 semaines. À partir de 4 semaines, le prix de location baisse de 10 %, jusqu'à 15 % pour 8 semaines. Si la pièce n'est pas encore sèche à la fin, vous prolongez en ligne et ne payez que les jours supplémentaires au même tarif journalier. Faites-le de préférence avant la date de fin : l'appareil reste alors réservé pour vous au lieu de partir chez le client suivant.",
        ],
        [
          "Dois-je payer une caution ?",
          "Non. Nous ne demandons pas de caution, même pas pour un enlèvement. Vous payez le prix de location pour la période réservée, rien de plus. Vous signez en revanche l'engagement de ramener le matériel propre et dans le même état ; les dégâts ou salissures sont facturés après coup, mais aucun montant n'est bloqué à l'avance.",
        ],
        [
          "Que dois-je payer au moment de la réservation ?",
          `Deux possibilités. Si vous payez toute la location directement en ligne, vous recevez 5 % de remise sur le prix de location. Ou vous payez une confirmation de commande fixe de ${voorschot} et le solde lorsque vous venez chercher les appareils\u00a0: vous réglez alors sur place et repartez avec la facture. Dans les deux cas, le montant s'affiche à l'écran avant que vous ne confirmiez.`,
        ],
        [
          "Un déshumidificateur de chantier rentre-t-il dans ma voiture ?",
          "Un déshumidificateur à condensation pèse de 25 à 40 kg et a à peu près la taille d'une grosse valise à roulettes. Il rentre dans un break ou un coffre spacieux ; dans une petite citadine, généralement pas, surtout pas avec un ventilateur. Prévoyez une remorque dès que vous emportez deux appareils ou plus, et venez de préférence à deux : notre collaborateur aide à charger, mais chez vous, vous serez seul.",
        ],
        [
          "Puis-je transporter un déshumidificateur couché ?",
          "Mieux vaut pas. Un déshumidificateur à condensation contient un compresseur avec du fluide frigorigène et de l'huile ; si l'appareil est couché, cette huile peut sortir du compresseur. Transportez-le donc debout et fixez-le pour qu'il ne tombe pas. S'il a malgré tout voyagé couché, laissez-le au moins 24 heures debout avant de l'allumer, sinon vous risquez d'endommager le compresseur.",
        ],
        [
          "De quel courant ai-je besoin ?",
          "Les déshumidificateurs à condensation et les ventilateurs fonctionnent sur une prise ordinaire de 230 V : de 0,75 à 1,4 kW pour un déshumidificateur, environ 0,2 kW pour un ventilateur. Les chauffages de chantier électriques de 20 et 30 kW sont une autre histoire : ils demandent un raccordement triphasé de 400 V. Vérifiez-le avant de réserver ; sans 400 V sur le chantier, vous ne pourrez pas utiliser le chauffage.",
        ],
        [
          "Dois-je vider moi-même le réservoir d'eau ?",
          `Seulement si vous ne prenez pas de pompe à condensats. Sans pompe, l'appareil part tel quel, avec son réservoir\u00a0: comptez 2 à 3 vidanges par jour, selon l'humidité de la pièce. S'il est plein, le déshumidificateur s'arrête de lui-même jusqu'à ce que vous le vidiez. Avec pompe (${pomp} par déshumidificateur par jour), l'eau de condensation s'écoule en continu vers un égout, une douche ou un siphon de sol et vous n'avez rien à vider. Mentionnez la pompe lors de votre réservation et nous la préparons\u00a0; le raccordement, c'est un tuyau dans le bac et une fiche dans la prise.`,
        ],
        [
          "Reçois-je des explications lors de l'enlèvement ?",
          "Oui. À la porte, nous passons brièvement en revue le meilleur emplacement pour l'appareil, le réglage de l'humidité cible, le moment de vider le réservoir et ce à quoi faire attention avec les fenêtres et les portes. Cela prend quelques minutes et suffit pour un séchage ordinaire. Ce qui n'est pas compris, c'est le calcul : combien d'appareils votre pièce demande et pour combien de temps, vous le déterminez vous-même avec le calculateur, ou vous choisissez la livraison avec installation.",
        ],
        [
          "La garantie de séchage s'applique-t-elle aussi si j'enlève moi-même ?",
          "Non. La garantie de séchage s'applique uniquement aux packs de séchage calculés avec le calculateur et réservés avec livraison et installation. Elle repose sur une mesure d'humidité au début et à la fin par notre technicien, et cette mesure n'a pas lieu lors d'un enlèvement. Si vous louez des appareils à enlever, vous déterminez vous-même le dispositif et la durée.",
        ],
        [
          "Combien d'appareils puis-je réserver en une fois ?",
          "Jusqu'à huit par type d'appareil, et jamais plus que ce que compte la flotte : du déshumidificateur à adsorption, nous en avons par exemple un seul. La page de réservation indique par appareil ce qui est libre à votre date. Vous avez besoin de plus pour un grand chantier ? Appelez-nous : nous verrons si c'est faisable sur le plan logistique ou si la livraison est la meilleure solution.",
        ],
        [
          "Dans quel état dois-je ramener les appareils ?",
          "Propres, complets et dans le même état qu'à la réception, usure normale exceptée, y compris les tuyaux, câbles et accessoires que vous avez reçus. Un déshumidificateur couvert de poussière de chape peut simplement être essuyé ; nous le contrôlons et l'entretenons ensuite nous-mêmes. Si nous constatons des salissures ou des dégâts, nous vous en informons par écrit avant de facturer quoi que ce soit.",
        ],
        [
          "Et si je ne peux pas ramener l'appareil à temps ?",
          "Appelez-nous ou envoyez-nous un e-mail dès que vous le savez. Dans la plupart des cas, nous prolongeons simplement et vous payez les jours supplémentaires au même tarif. Le problème n'est pas le jour lui-même mais le planning : si l'appareil est déjà prévu pour un client suivant, nous devons tout réorganiser. Un coup de fil à l'avance règle cela ; un retour tardif sans prévenir, non.",
        ],
        [
          "L'enlèvement est-il moins cher que la livraison ?",
          "Oui, vous ne payez ni transport ni installation. En contrepartie, vous soulevez vous-même, déterminez vous-même le dispositif, videz vous-même le réservoir et faites vous-même le trajet retour, sans mesure d'humidité ni garantie de séchage. Pour un seul déshumidificateur dans un garage ou une cave, l'enlèvement est souvent le choix logique ; pour une chape complète ou un dossier de dégâts des eaux avec assurance, la livraison l'est généralement.",
        ],
      ],
    },
    form: {
      kick: "Demander votre enlèvement",
      h2: "Dites-nous quand vous passez.",
      lede: (lp) => (
        <>
          Indiquez la date d'enlèvement souhaitée et les appareils, et nous confirmons votre créneau. Vous
          recevez une réponse dans un délai d'un jour ouvrable. Vous préférez réserver vous-même tout de suite ?{" "}
          <a href={lp("/verhuur/afhalen")}>Consultez les disponibilités en ligne</a>.
        </>
      ),
      klaar: "Merci ! Nous confirmons votre moment d'enlèvement dans un délai d'un jour ouvrable.",
      klaarTitel: "Demande envoyée",
      voornaam: "Prénom",
      naam: "Nom",
      naamPh: "Nom de famille",
      email: "E-mail",
      emailPh: "nom@exemple.be",
      telefoon: "Téléphone",
      onderwerp: "De quoi s'agit-il ?",
      onderwerpen: [
        { waarde: ONDERWERPEN[0], label: "Réserver un enlèvement" },
        { waarde: ONDERWERPEN[1], label: "Question sur un appareil ou la capacité" },
        { waarde: ONDERWERPEN[2], label: "Déplacer le moment d'enlèvement" },
        { waarde: ONDERWERPEN[3], label: "Retour ou prolongation" },
      ],
      bericht: "Date souhaitée et appareils",
      berichtPh: "P. ex. jeudi 14 novembre dans la matinée, 1 déshumidificateur et 1 ventilateur, pour une cave de 60 m².",
      privacy: "Nous utilisons vos données uniquement pour confirmer votre enlèvement.",
      versturen: "Envoyer la demande",
      bezig: "Envoi…",
    },
  },
  en: {
    kruimel: "Collect it yourself in Aartselaar",
    pictogram: {
      rechtop: "A construction dehumidifier should be transported upright, not lying down",
      laadruimte: "A construction dehumidifier being slid into a roomy boot",
      tijdslot: "A clock whose hand comes to rest in the reserved time slot",
      kaart: "Route to the Vernast collection point via the N177, Tesla and Carglass",
    },
    kaart: {
      tesla: "you pass Tesla first",
      carglass: ["then Carglass,", "turn right here"],
      unit: "warehouse + collection door",
      vanAntwerpen: "from Antwerp via the N177",
    },
    hero: {
      kick: "Collect it yourself in Aartselaar",
      h1: "Book online. We get it ready. Load up and go.",
      p: "Hire individual construction dehumidifiers, fans and electric heaters at the collection rate. You choose your machine and time slot in advance; we have everything ready at our door alongside the A12.",
      cta: "View machines and book",
      ctaUitleg: "How collection works",
      kaartAria: "View the route to the collection point",
      kaartCap: "Boomsesteenweg 12, Unit 11 · alongside the A12",
    },
    stappen: {
      kick: "From booking to return",
      h2: "Collection without waiting, in four clear steps.",
      lede: "Booking is done entirely online. That way the right machine is ready when you arrive and you know in advance what you will pay.",
      lijst: [
        ["01", "Choose and book online", "Select your dehumidifier, fan or heater, the hire period and an available collection time."],
        ["02", "You receive confirmation", "After payment you immediately receive your booking, time slot and the address by email."],
        ["03", "Everything is ready", "Come to unit 11 at the agreed time. We give you a short explanation and help you load up."],
        ["04", "Return by appointment", "At the end of the hire period you chose, you bring the machines back to the same warehouse."],
      ],
    },
    transport: {
      kick: "Set off well prepared",
      h2: "A dehumidifier weighs 25 to 40 kg. Don't lift it on your own.",
      lede: "Certainly not on a staircase. With the right vehicle, a second pair of hands and a machine that stays upright, you set off safely and it arrives in one piece.",
      regels: [
        {
          b: "Always transport upright",
          p: "Do not lay a condensation dehumidifier flat: refrigerant can run out of the compressor. Transported lying down after all? Let it stand upright for at least 24 hours before use.",
        },
        {
          b: "Bring enough loading space",
          p: "A roomy boot or a trailer is recommended. Ideally come with two people; our staff member will help you load up at the warehouse.",
        },
        {
          b: "Your time slot means no waiting",
          p: "Collection and return are possible on weekdays from 08:00 to 17:00, only at the time in your confirmation. That way your machine is ready when you arrive.",
        },
      ],
      ctaVraag: "Rather not lift or set up anything?",
      cta: "View delivery & installation",
      imgAlt: "Man with back pain after lifting a heavy machine",
    },
    gamma: {
      kick: "What can you collect?",
      h2: "Individual machines for every drying set-up.",
      lede: "You choose the combination yourself. Unsure about capacity or numbers? Use the Calculator or choose delivery with installation.",
      kaarten: [
        { alt: "Vernast Boost condensation construction dehumidifier, ready for collection", span: "Construction dehumidifiers", h3: "50 to 110 litres per day", p: "For screed, plaster, renovation and most water damage." },
        { alt: "Vernast Revolution desiccant dehumidifier with hose connections, ready for collection", span: "Cold spaces", h3: "Desiccant dehumidifier", p: "For low temperatures or targeted drying through air hoses." },
        { alt: "Vernast Highflow axial fan, ready for collection", span: "Air circulation", h3: "Axial and radial fans", p: "Spread dry air along floors, walls and hard-to-reach areas." },
        { alt: "Vernast Heatpower 30 electric site heater, ready for collection", span: "Extra heat", h3: "Electric site heaters", p: "For cold sites where a condensation dehumidifier would otherwise lose efficiency." },
      ],
      pomp: {
        alt: "External condensate pump with collection tray and drain hose, ready for collection",
        span: "Accessories",
        h3: (pomp) => `Condensate pump, ${pomp} per dehumidifier per day`,
        p: "So you don't have to empty a tank: the pump drains the condensate continuously to a drain, shower or floor drain, up to 3.90 m higher than the machine. ",
        link: "How the condensate pump works",
      },
      cta: "View availability and collection prices",
    },
    locatie: {
      kick: "Our collection point",
      h2: "Right alongside the A12, no city traffic.",
      lede: "Boomsesteenweg 12, Unit 11 · 2630 Aartselaar. After Carglass, drive into the business park and follow the units to number 11.",
      route: [
        ["Take the entrance", "Right next to Carglass, with Tesla on the corner as a landmark."],
        ["Drive straight on", "Follow the road into the business park towards the black Arthrex building."],
        ["Keep right", "Follow the numbering along the loading bays to units 11–12."],
        ["Park at unit 11", "Report to our door; your booking will be ready for you there."],
      ],
      routeAlt: (titel) => `${titel}: route to the collection point`,
      maps: "Open in Google Maps",
      contact: "View all contact details",
    },
    faq: {
      kick: "Frequently asked questions",
      h2: "Practicalities before you set off.",
      hulpH3: "Your question not listed?",
      hulpP: "Our staff at the collection point know the machines and your booking. Calling is quickest, on weekdays between 08:00 and 17:00.",
      bel: "Call 03 689 90 65",
      mail: "Email your question",
      lijst: (pomp, voorschot) => [
        [
          "Can I come by without a booking?",
          "No. Collection and return only take place at an agreed time. We do not keep a counter open: the machines are in the warehouse and are prepared, checked and loaded per booking. If you turn up unannounced, there is a good chance the machine you are looking for is out on a site. With a booking you know in advance that it is there and it is ready when you arrive.",
        ],
        [
          "When can I collect and return?",
          "On weekdays, in one of the time slots 07:30–08:00, 08:00–10:00, 10:00–12:00, 13:00–15:00 or 15:00–17:00. You choose the slot when booking online and receive it together with the address in your confirmation. Returning works the same way: at the end of the hire period you chose, within one of those same time slots. The warehouse is closed at weekends.",
        ],
        [
          "How long can I collect a machine for, and can I extend?",
          "When booking you choose a period in whole weeks, from 1 to 8 weeks. From 4 weeks the hire price drops by 10%, rising to 15% for 8 weeks. If the room is still not dry at the end, you extend online and only pay for the extra days at the same daily rate. Ideally do that before the end date: the machine then stays reserved for you instead of going to the next customer.",
        ],
        [
          "Do I have to pay a deposit?",
          "No. We do not ask for a deposit, not even for collection. You pay the hire price for the reserved period, nothing more. What you do sign is an undertaking to return the equipment clean and in the same condition; damage or soiling is charged afterwards, but no amount is held in advance.",
        ],
        [
          "What do I pay when I book?",
          `Two options. If you pay the full hire online straight away, you get 5% off the hire price. Or you pay a fixed order confirmation of ${voorschot} and the balance when you come to collect the machines: you then settle up on site and leave with the invoice. In both cases the amount is shown on screen before you confirm.`,
        ],
        [
          "Will a construction dehumidifier fit in my car?",
          "A condensation construction dehumidifier weighs 25 to 40 kg and is roughly the size of a sturdy suitcase on wheels. It fits in an estate car or a roomy boot; in a small city car usually not, certainly not together with a fan. Bring a trailer as soon as you are taking two or more machines, and ideally come with two people: our staff member helps with loading, but at home you are on your own.",
        ],
        [
          "Can I transport a construction dehumidifier lying down?",
          "Better not. A condensation dehumidifier contains a compressor with refrigerant and oil; if the machine lies flat, that oil can run out of the compressor. So transport it upright and secure it so it cannot fall over. If it did travel lying down, let the machine stand upright for at least 24 hours before switching it on, otherwise you risk the compressor.",
        ],
        [
          "What power supply do I need?",
          "The condensation construction dehumidifiers and the fans run on an ordinary 230 V socket: 0.75 to 1.4 kW for a dehumidifier, about 0.2 kW for a fan. The 20 and 30 kW electric site heaters are a different matter: they need a 400 V three-phase connection. Check this before you book; without 400 V on site you cannot use the heater.",
        ],
        [
          "Do I have to empty the water tank myself?",
          `Only if you don't take a condensate pump. Without a pump the machine goes as it is, with its tank: expect to empty it about twice a day, depending on how wet the room is. If it fills up, the dehumidifier switches itself off and stays off until you empty it. With a pump (${pomp} per dehumidifier per day) the condensate drains away continuously to a drain, shower or floor drain and you don't have to empty anything. Mention the pump when you book and we will have it ready; connecting it is a hose in the tray and a plug in the socket.`,
        ],
        [
          "Do I get an explanation when I collect?",
          "Yes. At the door we briefly go over where best to put the machine, how to set the target humidity, when to empty the tank and what to watch out for with windows and doors. That takes a few minutes and is enough for ordinary drying. What is not included is the calculation: how many machines your room needs and for how long, you work that out yourself with the Calculator, or you choose delivery with installation.",
        ],
        [
          "Does the drying guarantee also apply if I collect myself?",
          "No. The drying guarantee only applies to drying packages calculated with the Calculator and booked with delivery and installation. It rests on a moisture reading at the start and at handover by our technician, and that reading does not take place with a collection. If you hire machines to collect, you decide the set-up and the duration yourself.",
        ],
        [
          "How many machines can I book at once?",
          "Up to eight per type of machine, and never more than are in the fleet: we have just one desiccant dehumidifier, for example. The booking page shows for each machine what is available on your date. Need more for a large site? Call us: we will see whether it is logistically feasible or whether delivery is the better solution.",
        ],
        [
          "In what condition should I return the machines?",
          "Clean, complete and in the same condition as when you received them, normal wear and tear excepted, including the hoses, cables and accessories you were given. A dehumidifier covered in screed dust can simply be wiped down; we check and service it ourselves afterwards. If we find soiling or damage, we let you know in writing before anything is charged.",
        ],
        [
          "What if I can't return the machine on time?",
          "Call or email us as soon as you know. In most cases we simply extend and you pay the extra days at the same rate. The problem is not the day itself but the planning: if the machine is already scheduled for the next customer, we have to rearrange that. A phone call in advance solves it; returning it late without warning does not.",
        ],
        [
          "Is collecting cheaper than having it delivered?",
          "Yes, you pay no transport and no installation. On the other hand, you do the lifting yourself, decide the set-up yourself, empty the tank yourself and drive back yourself, and there is no moisture reading and no drying guarantee. For a single dehumidifier in a garage or cellar, collecting is often the logical choice; for a complete screed or a water damage claim with insurance, delivery usually is.",
        ],
      ],
    },
    form: {
      kick: "Request your collection",
      h2: "Tell us when you are coming.",
      lede: (lp) => (
        <>
          Let us know your preferred collection date and the machines, and we will confirm your time
          slot. You will receive a reply within one working day. Rather book yourself straight away?{" "}
          <a href={lp("/verhuur/afhalen")}>Check availability online</a>.
        </>
      ),
      klaar: "Thank you! We will confirm your collection time within one working day.",
      klaarTitel: "Request sent",
      voornaam: "First name",
      naam: "Surname",
      naamPh: "Surname",
      email: "Email",
      emailPh: "name@example.com",
      telefoon: "Phone",
      onderwerp: "What is it about?",
      onderwerpen: [
        { waarde: ONDERWERPEN[0], label: "Book a collection" },
        { waarde: ONDERWERPEN[1], label: "Question about a machine or capacity" },
        { waarde: ONDERWERPEN[2], label: "Change the collection time" },
        { waarde: ONDERWERPEN[3], label: "Return or extension" },
      ],
      bericht: "Preferred date and machines",
      berichtPh: "E.g. Thursday 14 November in the morning, 1 dehumidifier and 1 fan, for a 60 m² cellar.",
      privacy: "We only use your details to confirm your collection.",
      versturen: "Send request",
      bezig: "Sending…",
    },
  },
} satisfies Copy<AfhalenTekst>;
