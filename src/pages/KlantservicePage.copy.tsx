import type { ReactNode } from "react";
import type { Copy } from "@/i18n/useTaal";
import { Link } from "react-router-dom";

/**
 * De teksten van de klantenservicepagina. Vaste bedragen in lopende tekst
 * (€ 50, € 39, 5%) staan er zoals in het Nederlands; het pompbedrag komt uit
 * `PUMP` en wordt per taal geformatteerd.
 */
type Teksten = {
  q1: string;
  fixKick: string;
  verKick: string;
  o2: string;
  o4: string;
  fx1: string;
  fx2: string;
  fx3: string;
  fx4: string;
  fx5: string;
  fx6: string;
  fx7: string;
  callH: string;
  f5p: (lp: (pad: string) => string, prijs: string) => ReactNode;
  done: string;
  versturen: string;
  verstuur: string;
  crumb: string;
  altHero: string;
  altPay: string;
  altTech: string;
  phVraag: string;
  heroKick: string;
  li6: string;
  li5: string;
  li4: string;
  li3: string;
  li2: string;
  li1: string;
  heroH1: string;
  heroP: string;
  q2: string;
  q3: string;
  betH: ReactNode;
  topKick: string;
  topH2: string;
  tp1P: string;
  tgAntw: string;
  tp2H: string;
  tp2P: string;
  tgOpl: string;
  tp3H: string;
  tp3P: string;
  tgWerkt: string;
  levH: ReactNode;
  tp4P: string;
  tgVerloopt: string;
  tp5H: ReactNode;
  tp5P: string;
  tgDekking: string;
  tp6H: ReactNode;
  tp6P: string;
  tgEerst: string;
  payH2: string;
  payLede: string;
  po1L: string;
  po1H: string;
  po1P: ReactNode;
  po2L: string;
  po2H: string;
  po2P: ReactNode;
  prFactuur: ReactNode;
  prZak: ReactNode;
  prVerl: ReactNode;
  fixH2: string;
  fixLede: string;
  f1a: string;
  f1b: string;
  f1c: string;
  f1p: ReactNode;
  f2a: string;
  f2b: string;
  f2p: ReactNode;
  f3a: string;
  f3b: string;
  f3c: string;
  f3p: ReactNode;
  f4a: string;
  f4b: string;
  f4c: string;
  f4p: ReactNode;
  f5a: string;
  f5b: string;
  f6a: string;
  f6b: string;
  f6c: string;
  f6p: ReactNode;
  f7a: string;
  f7b: ReactNode;
  f7p: string;
  callP: string;
  callBtn: string;
  fbH: string;
  fbP: string;
  fbBtn: string;
  levH2: string;
  levLede: string;
  ex1H: string;
  ex1P: string;
  ex2H: string;
  ex2P: string;
  ex3H: string;
  ex3P: string;
  ex4H: string;
  ex4P: string;
  afKick: ReactNode;
  afH2: string;
  afLede: string;
  af1E: string;
  af1H: string;
  af1P: ReactNode;
  af2E: string;
  af2H: string;
  af2P: string;
  af3E: string;
  af3H: string;
  af3P: ReactNode;
  digKick: string;
  digH2: string;
  digLede: string;
  dg1: ReactNode;
  dg2: ReactNode;
  dg3: ReactNode;
  verH2: string;
  verLede: string;
  v1E: string;
  v1H: string;
  v1P: string;
  v2E: string;
  v2H: string;
  v2P: string;
  v3E: string;
  v3H: string;
  v3P: string;
  verNote: string;
  ctaH2: string;
  ctaLede: string;
  ciBel: string;
  ciUren: string;
  ciAntw: string;
  ciAfh: ReactNode;
  ciSpoed: ReactNode;
  formH: string;
  lVoor: string;
  lNaam: string;
  lMail: string;
  lTel: string;
  lOnd: string;
  o1: string;
  o3: string;
  o5: string;
  lVraag: string;
  fnote: string;
};

export const KLANTSERVICE_COPY = {
  nl: {
    q1: "Bel 03 689 90 65",
    fixKick: "Storing aan een toestel",
    verKick: "Verlengen of stoppen",
    o2: "Storing aan een toestel",
    o4: "Verlengen of stoppen",
    fx1: "Bouwdroger start niet of valt uit",
    fx2: "Zekering springt regelmatig",
    fx3: "Bouwdroger overgelopen",
    fx4: "Condenspomp voert geen water af",
    fx5: "Reservoir-lampje brandt",
    fx6: "Het droogt trager dan verwacht",
    fx7: "IJsvorming op het toestel",
    callH: "Toestel defect of beschadigd?",
    f5p: (lp, prijs) => <>Beu om gemiddeld 2 keer per dag te legen? Voeg de <Link to={lp("/verhuur/toebehoren/condenspomp")}>condenspomp</Link> toe ({prijs} per bouwdroger per dag) en het water wordt dag en nacht automatisch afgevoerd.</>,
    done: "Bedankt! We antwoorden dezelfde werkdag. Dringend? Bel 03 689 90 65.",
    versturen: "Versturen…",
    verstuur: "Verstuur uw vraag",
    crumb: "Klantenservice",
    altHero: "Rustige, tevreden klant van Vernast",
    altPay: "Klant betaalt eenvoudig online met kaart en gsm",
    altTech: "Vernast technicus",
    phVraag: "Vermeld indien mogelijk uw boekingsnummer.",
    heroKick: "Klantenservice",
    li6: "Kosteloos annuleren tot 48 u voor levering",
    li5: "Factuur meteen na betaling per e-mail",
    li4: "Saldo via Bancontact of kaart bij onze technicus",
    li3: "Niets meer te regelen bij levering",
    li2: "Bancontact, kredietkaart of overschrijving",
    li1: "Factuur direct na betaling in uw mailbox",
    heroH1: "Hoe kunnen we u helpen?",
    heroP: "Een vraag over uw betaling, een toestel dat niet doet wat het moet, of uw huurperiode verlengen? Hieronder vindt u meteen een antwoord, of u belt ons gewoon.",
    q2: "Mail ons",
    q3: "Storing melden",
    betH: <>Betalingen &amp; facturen</>,
    topKick: "Waarmee kunnen we helpen?",
    topH2: "Kies uw onderwerp.",
    tp1P: "Online betalen met 5% korting, betalen bij levering, en waar uw factuur blijft.",
    tgAntw: "Bekijk antwoorden →",
    tp2H: "Storing aan een toestel",
    tp2P: "Bouwdroger stopt, zekering springt of pomp voert niet af? Los het in 2 minuten zelf op.",
    tgOpl: "Bekijk oplossingen →",
    tp3H: "Verlengen of stoppen",
    tp3P: "Nog niet droog of net vroeger klaar? Zo past u uw huurperiode aan.",
    tgWerkt: "Zo werkt het →",
    levH: <>Levering &amp; installatie</>,
    tp4P: "Wanneer komen we, wat is inbegrepen en wat moet u klaarzetten?",
    tgVerloopt: "Zo verloopt het →",
    tp5H: <>Dekking &amp; eigen risico</>,
    tp5P: "Wat dekt de waarborg, en wat als een toestel beschadigd raakt op de werf?",
    tgDekking: "Naar dekking →",
    tp6H: <>Afhalen &amp; terugbrengen</>,
    tp6P: "Vervoer rechtopstaand, zware toestellen en ons afhaalpunt langs de A12 in Aartselaar.",
    tgEerst: "Lees dit eerst →",
    payH2: "Betalen zoals het u past. Factuur meteen in uw mailbox.",
    payLede: "U kiest zelf hoe u betaalt, volledig online met korting, of een kleine orderbevestiging en de rest bij levering. In beide gevallen zonder voorschotfacturen of verrassingen.",
    po1L: "Meest gekozen · 5% korting",
    po1H: "Alles online betalen",
    po1P: <>Betaal uw volledige pakket meteen online en ontvang <b>5% korting</b> op uw pakketprijs.</>,
    po2L: "Flexibel",
    po2H: "€ 50 nu, de rest bij levering",
    po2P: <>Bevestig uw boeking met <b>€ 50 orderbevestiging</b> en betaal het saldo ter plaatse bij de installatie.</>,
    prFactuur: <><b>Factuur niet ontvangen?</b><span>Kijk eerst in uw spamfolder. Niets gevonden? Mail uw boekingsnummer naar <a href="mailto:administratie@vernast.be" style={{ color: "var(--red)", fontWeight: 700 }}>administratie@vernast.be</a> en u ontvangt ze binnen het uur opnieuw.</span></>,
    prZak: <><b>Zakelijke klant?</b><span>Vul bij het boeken uw btw-nummer in, dan staat het automatisch correct op de factuur. Aanpassen achteraf kan via een mailtje.</span></>,
    prVerl: <><b>Verlenging betalen</b><span>Verlengt u binnen de garantie, dan betaalt u niets. Verlengt u zelf, dan ontvangt u een betaallink per e-mail, geen nieuwe boeking nodig.</span></>,
    fixH2: "Los de meeste problemen in 2 minuten zelf op.",
    fixLede: "Onze toestellen zijn robuust, maar op een werf kan altijd iets gebeuren. Klap de melding open die bij uw situatie past, en u krijgt de oplossing stap voor stap.",
    f1a: "Controleer of het stopcontact werkt (test met een ander toestel).",
    f1b: "Kijk in de zekeringkast en schakel de automaat terug in.",
    f1c: "Wacht 10 minuten: na een stroomonderbreking herstart het toestel automatisch.",
    f1p: <>Blijft het toestel uitvallen? Bel <a href="tel:+3236899065">03 689 90 65</a>, wij wisselen het binnen 24 uur om.</>,
    f2a: "Sluit de bouwdroger aan op een aparte stroomgroep, niet samen met ander zwaar materieel.",
    f2b: "Gebruik geen lichte huishoudverlengkabel: de meegeleverde kabels zijn berekend op het vermogen.",
    f2p: <>Geen (werkende) elektriciteitskast op de werf? Wij verhuren een werfverdeelkast (paddenstoel). Bel <a href="tel:+3236899065">03 689 90 65</a>.</>,
    f3a: "Zet de bouwdroger uit.",
    f3b: "Controleer of het reservoir en de afvoerdarm goed vastzitten en nergens loszitten of knikken.",
    f3c: "Start het toestel terug op.",
    f3p: <>Loopt het opnieuw over? Bel <a href="tel:+3236899065">03 689 90 65</a>, dan vervangen we de pomp of het toestel gratis.</>,
    f4a: "Controleer of de afvoerslang nergens geknikt of geplooid ligt.",
    f4b: "De pomp overbrugt max. 4 m hoogte: leg de slang zo kort en recht mogelijk.",
    f4c: "Koppel de slang even los. Loopt er water uit, dan zit de verstopping in de slang.",
    f4p: <>Het condenswater is zuiver en mag in elke afvoer. Pomp defect? Bel <a href="tel:+3236899065">03 689 90 65</a>, wij vervangen ze gratis.</>,
    f5a: "Leeg het waterreservoir en schuif het correct terug tot het vastklikt.",
    f5b: "Het toestel herneemt automatisch, u hoeft niets te herstarten.",
    f6a: "Houd ramen en deuren gesloten, anders droogt u de buitenlucht mee.",
    f6b: "Hou de temperatuur boven 15 °C. In koude ruimtes werkt condensdroging trager.",
    f6c: "Controleer of het toestel vrij staat: 50 cm ruimte rond de aanzuig- en uitblaaszijde.",
    f6p: <>Twijfelt u? Bel <a href="tel:+3236899065">03 689 90 65</a>, wij meten mee en plaatsen indien nodig extra capaciteit. Binnen de garantie verlengt u kosteloos.*</>,
    f7a: "Zet het toestel uit en laat het 30 minuten ontdooien.",
    f7b: <>IJsvorming wijst op een te koude ruimte (&lt; 8 °C).</>,
    f7p: "In koude kelders of winterse werven is een adsorptiedroger of bijverwarming de juiste oplossing. Bel ons en wij wisselen de opstelling om.",
    callP: "Bel ons meteen. 9 op 10 storingen lossen we telefonisch op; lukt dat niet, dan staat er binnen 24 uur een technicus met een vervangtoestel op uw werf, zonder extra kosten.",
    callBtn: "Bel direct 03 689 90 65",
    fbH: "Storing niet opgelost? Wij wel.",
    fbP: "Bel ons op werkdagen tussen 08:00 en 17:00. Kunnen we het niet telefonisch oplossen, dan staat er binnen 24 uur een technicus met een vervangtoestel op uw werf, zonder extra kosten.",
    fbBtn: "Bel 03 689 90 65",
    levH2: "Geleverd, geplaatst en afgesteld. U hoeft niets te tillen.",
    levLede: "Uw pakket wordt geleverd op het moment dat u bij de boeking koos. Onze technicus doet de volledige installatie en legt kort uit waar u op let.",
    ex1H: "Levering op uw gekozen datum",
    ex1P: "U kiest zelf uw leverdag en dagdeel. Transport, levering én ophaling zijn volledig inbegrepen in uw pakketprijs.",
    ex2H: "Installatie door onze technicus",
    ex2P: "Wij positioneren de toestellen, sluiten de condensafvoer aan, stellen de streefvochtigheid in en doen de startmeting.",
    ex3H: "Wat zet u klaar?",
    ex3P: "Een werkend stopcontact op een aparte stroomgroep en een vrije doorgang naar de te drogen ruimtes. Meer is het niet.",
    ex4H: "Verdieping? Ook goed.",
    ex4P: "Plaatsing op een verdieping via trap of lift is gratis. Enkel wanneer bouwdrogers via een ladder naar boven moeten, rekenen we eenmalig € 39 draagwerk.",
    afKick: <>Zelf afhalen &amp; vervoer</>,
    afH2: "Haalt u zelf af? Lees dit eerst even.",
    afLede: "Losse toestellen haalt u af aan ons afhaalpunt langs de A12 in Aartselaar. Goed vervoeren is belangrijk: zo start uw bouwdroger meteen en zonder schade op.",
    af1E: "Belangrijk",
    af1H: "Vervoer de bouwdroger altijd rechtopstaand",
    af1P: <>Een bouwdroger mag <b>niet plat</b> vervoerd worden: de koelvloeistof loopt dan uit de compressor. Toch plat vervoerd? Zet het toestel <b>24 uur rechtop</b> en wacht vóór u het opstart. Zo voorkomt u schade aan de compressor.</>,
    af2E: "Goed om weten",
    af2H: "De toestellen zijn zwaar",
    af2P: "Reken op 25 tot 40 kg per bouwdroger. Kom met twee, breng een ruime koffer of aanhangwagen mee en til met een recht gedragen rug. Liever niet sleuren? Wij leveren en installeren álles voor u, aan te raden voor oudere klanten.",
    af3E: "Afhaalpunt",
    af3H: "Langs de A12 in Aartselaar",
    af3P: <>U haalt af aan ons magazijn: <b>Boomsesteenweg 12, Unit 11, 2630 Aartselaar</b>, vlot bereikbaar langs de A12. Enkel op afspraak: u kiest uw afhaalmoment bij de reservatie en alles staat klaar. Wij laden mee in en geven korte uitleg.</>,
    digKick: "Volledig digitaal",
    digH2: "Ook na uw boeking regelt u alles online.",
    digLede: "Geen wachtmuziek nodig: verlengen, uw ophaling plannen of een factuur opvragen doet u in enkele klikken. Liever een mens aan de lijn? Bellen kan altijd.",
    dg1: <><b>Verlengen online</b><span>Vraag uw verlenging aan en ontvang meteen een betaallink per e-mail. Binnen de garantie verlengt u kosteloos.</span></>,
    dg2: <><b>Ophaling plannen</b><span>Droog gemeten? Kies zelf de dag en het dagdeel waarop wij de toestellen komen ophalen.</span></>,
    dg3: <><b>Factuur opvragen</b><span>Uw factuur staat direct na betaling in uw mailbox. Kwijt? Eén mailtje naar administratie@vernast.be volstaat.</span></>,
    verH2: "Nog niet droog? Dan verlengt u, vaak kosteloos.",
    verLede: "Uw pakket is berekend op 100% droog binnen de huurperiode. Toont de eindmeting toch nog vocht, dan verlengt u binnen de garantie zonder bij te betalen.*",
    v1E: "01 · Binnen de garantie",
    v1H: "Kosteloos verlengen",
    v1P: "Is uw woning niet droog binnen de berekende periode, dan huurt u kosteloos verder tot ze dat wél is. U belt of mailt ons, wij verlengen meteen, geen nieuwe boeking, geen extra factuur.",
    v2E: "02 · Zelf verlengen",
    v2H: "Langer huren op eigen vraag",
    v2P: "Wilt u de toestellen langer houden (bv. voor een volgende bouwfase)? Eén telefoontje en wij verlengen aan dezelfde dagprijs. U ontvangt een betaallink per e-mail.",
    v3E: "03 · Vroeger klaar",
    v3H: "Vroeger stoppen",
    v3P: "Droog vóór het einde van de huurperiode? Meld het ons en wij plannen de ophaling vroeger in. Bij pakketten met eindmeting bevestigen we eerst samen dat alles op streefwaarde zit.",
    verNote: "* De garantie geldt wanneer de externe omstandigheden voldoen: ramen en deuren gesloten, temperatuur op peil en de toestellen ononderbroken in werking.",
    ctaH2: "Er toch niet uit? We helpen u persoonlijk.",
    ctaLede: "Beschrijf kort uw vraag of probleem en we nemen dezelfde werkdag contact op.",
    ciBel: "Bel ons",
    ciUren: "Ma–Vr 08:00–17:00",
    ciAntw: "antwoord binnen 4 werkuren",
    ciAfh: <><b>Afhaalpunt &amp; magazijn</b><span>Boomsesteenweg 12, Unit 11 · 2630 Aartselaar<br />Afhalen enkel op afspraak</span></>,
    ciSpoed: <><b>Storing met spoed?</b><span>Bel eerst, 9 op 10 storingen lossen we telefonisch op. Anders binnen 24 u een technicus of vervangtoestel.</span></>,
    formH: "Stel uw vraag",
    lVoor: "Voornaam",
    lNaam: "Naam",
    lMail: "E-mailadres",
    lTel: "Telefoon",
    lOnd: "Onderwerp",
    o1: "Betaling of factuur",
    o3: "Levering of ophaling",
    o5: "Iets anders",
    lVraag: "Uw vraag",
    fnote: "We antwoorden dezelfde werkdag. Dringend? Bel 03 689 90 65.",
  },
  fr: {
    q1: "Appelez le 03 689 90 65",
    fixKick: "Panne d'un appareil",
    verKick: "Prolonger ou arrêter",
    o2: "Panne d'un appareil",
    o4: "Prolonger ou arrêter",
    fx1: "Le déshumidificateur ne démarre pas ou s'arrête",
    fx2: "Le fusible saute régulièrement",
    fx3: "Le déshumidificateur a débordé",
    fx4: "La pompe à condensats n'évacue pas l'eau",
    fx5: "Le voyant du réservoir est allumé",
    fx6: "Le séchage est plus lent que prévu",
    fx7: "Formation de givre sur l'appareil",
    callH: "Appareil défectueux ou endommagé ?",
    f5p: (lp, prijs) => <>Marre de vider en moyenne 2 fois par jour ? Ajoutez la <Link to={lp("/verhuur/toebehoren/condenspomp")}>pompe à condensats</Link> ({prijs} par déshumidificateur et par jour) et l'eau est évacuée automatiquement jour et nuit.</>,
    done: "Merci ! Nous répondons le jour ouvrable même. Urgent ? Appelez le 03 689 90 65.",
    versturen: "Envoi…",
    verstuur: "Envoyer votre question",
    crumb: "Service client",
    altHero: "Client de Vernast, serein et satisfait",
    altPay: "Un client paie facilement en ligne par carte et GSM",
    altTech: "Technicien Vernast",
    phVraag: "Mentionnez si possible votre numéro de réservation.",
    heroKick: "Service client",
    li6: "Annulation gratuite jusqu'à 48 h avant la livraison",
    li5: "Facture par e-mail dès le paiement",
    li4: "Solde par Bancontact ou carte auprès de notre technicien",
    li3: "Plus rien à régler à la livraison",
    li2: "Bancontact, carte de crédit ou virement",
    li1: "Facture dans votre boîte mail dès le paiement",
    heroH1: "Comment pouvons-nous vous aider ?",
    heroP: "Une question sur votre paiement, un appareil qui ne fonctionne pas comme il le devrait, ou vous souhaitez prolonger votre location ? Vous trouverez une réponse immédiate ci-dessous, ou appelez-nous simplement.",
    q2: "Écrivez-nous",
    q3: "Signaler une panne",
    betH: <>Paiements &amp; factures</>,
    topKick: "En quoi pouvons-nous vous aider ?",
    topH2: "Choisissez votre sujet.",
    tp1P: "Payer en ligne avec 5 % de remise, payer à la livraison, et où se trouve votre facture.",
    tgAntw: "Voir les réponses →",
    tp2H: "Panne d'un appareil",
    tp2P: "Le déshumidificateur s'arrête, le fusible saute ou la pompe n'évacue pas ? Réglez-le vous-même en 2 minutes.",
    tgOpl: "Voir les solutions →",
    tp3H: "Prolonger ou arrêter",
    tp3P: "Pas encore sec ou terminé plus tôt ? Voici comment adapter votre période de location.",
    tgWerkt: "Comment ça marche →",
    levH: <>Livraison &amp; installation</>,
    tp4P: "Quand venons-nous, qu'est-ce qui est compris et que devez-vous préparer ?",
    tgVerloopt: "Comment ça se passe →",
    tp5H: <>Couverture &amp; franchise</>,
    tp5P: "Que couvre la garantie, et que se passe-t-il si un appareil est endommagé sur le chantier ?",
    tgDekking: "Vers la couverture →",
    tp6H: <>Retrait &amp; retour</>,
    tp6P: "Transport en position verticale, appareils lourds et notre point de retrait le long de l'A12 à Aartselaar.",
    tgEerst: "À lire d'abord →",
    payH2: "Payez comme cela vous convient. Facture directement dans votre boîte mail.",
    payLede: "Vous choisissez vous-même comment payer : entièrement en ligne avec remise, ou une petite confirmation de commande et le reste à la livraison. Dans les deux cas, sans factures d'acompte ni surprises.",
    po1L: "Le plus choisi · 5 % de remise",
    po1H: "Tout payer en ligne",
    po1P: <>Payez votre pack complet directement en ligne et recevez <b>5 % de remise</b> sur le prix de votre pack.</>,
    po2L: "Flexible",
    po2H: "50 € maintenant, le reste à la livraison",
    po2P: <>Confirmez votre réservation avec <b>50 € de confirmation de commande</b> et payez le solde sur place lors de l'installation.</>,
    prFactuur: <><b>Facture non reçue ?</b><span>Vérifiez d'abord votre dossier spam. Rien trouvé ? Envoyez votre numéro de réservation à <a href="mailto:administratie@vernast.be" style={{ color: "var(--red)", fontWeight: 700 }}>administratie@vernast.be</a> et vous la recevrez à nouveau dans l'heure.</span></>,
    prZak: <><b>Client professionnel ?</b><span>Indiquez votre numéro de TVA lors de la réservation, il figurera automatiquement correctement sur la facture. Une modification ultérieure est possible par simple e-mail.</span></>,
    prVerl: <><b>Payer une prolongation</b><span>Si vous prolongez dans le cadre de la garantie, vous ne payez rien. Si vous prolongez de votre propre initiative, vous recevez un lien de paiement par e-mail, sans nouvelle réservation.</span></>,
    fixH2: "Résolvez vous-même la plupart des problèmes en 2 minutes.",
    fixLede: "Nos appareils sont robustes, mais sur un chantier, un incident peut toujours survenir. Ouvrez le message qui correspond à votre situation et vous obtiendrez la solution étape par étape.",
    f1a: "Vérifiez que la prise fonctionne (testez avec un autre appareil).",
    f1b: "Regardez dans le tableau électrique et réenclenchez le disjoncteur.",
    f1c: "Attendez 10 minutes : après une coupure de courant, l'appareil redémarre automatiquement.",
    f1p: <>L'appareil continue de s'arrêter ? Appelez le <a href="tel:+3236899065">03 689 90 65</a>, nous l'échangeons dans les 24 heures.</>,
    f2a: "Branchez le déshumidificateur sur un circuit électrique séparé, pas avec d'autres appareils lourds.",
    f2b: "N'utilisez pas de rallonge domestique légère : les câbles fournis sont dimensionnés pour la puissance.",
    f2p: <>Pas de coffret électrique (qui fonctionne) sur le chantier ? Nous louons un coffret de distribution de chantier. Appelez le <a href="tel:+3236899065">03 689 90 65</a>.</>,
    f3a: "Éteignez le déshumidificateur.",
    f3b: "Vérifiez que le réservoir et le tuyau d'évacuation sont bien fixés, sans jeu ni pli.",
    f3c: "Redémarrez l'appareil.",
    f3p: <>Il déborde à nouveau ? Appelez le <a href="tel:+3236899065">03 689 90 65</a>, nous remplaçons gratuitement la pompe ou l'appareil.</>,
    f4a: "Vérifiez que le tuyau d'évacuation n'est ni plié ni coudé.",
    f4b: "La pompe franchit une hauteur de 4 m max. : posez le tuyau le plus court et le plus droit possible.",
    f4c: "Débranchez un instant le tuyau. Si de l'eau en sort, l'obstruction se trouve dans le tuyau.",
    f4p: <>L'eau de condensation est propre et peut aller dans n'importe quelle évacuation. Pompe défectueuse ? Appelez le <a href="tel:+3236899065">03 689 90 65</a>, nous la remplaçons gratuitement.</>,
    f5a: "Videz le réservoir d'eau et remettez-le correctement en place jusqu'au déclic.",
    f5b: "L'appareil reprend automatiquement, vous n'avez rien à redémarrer.",
    f6a: "Gardez portes et fenêtres fermées, sinon vous séchez aussi l'air extérieur.",
    f6b: "Maintenez la température au-dessus de 15 °C. Dans les pièces froides, le séchage par condensation est plus lent.",
    f6c: "Vérifiez que l'appareil est bien dégagé : 50 cm d'espace autour des côtés d'aspiration et de soufflage.",
    f6p: <>Un doute ? Appelez le <a href="tel:+3236899065">03 689 90 65</a>, nous mesurons avec vous et ajoutons de la capacité si nécessaire. Dans le cadre de la garantie, vous prolongez gratuitement.*</>,
    f7a: "Éteignez l'appareil et laissez-le dégivrer pendant 30 minutes.",
    f7b: <>La formation de givre indique une pièce trop froide (&lt; 8 °C).</>,
    f7p: "Dans les caves froides ou sur les chantiers en hiver, un déshumidificateur à adsorption ou un chauffage d'appoint est la bonne solution. Appelez-nous et nous adaptons l'installation.",
    callP: "Appelez-nous immédiatement. Nous résolvons 9 pannes sur 10 par téléphone ; sinon, un technicien est sur votre chantier dans les 24 heures avec un appareil de remplacement, sans frais supplémentaires.",
    callBtn: "Appelez directement le 03 689 90 65",
    fbH: "Panne non résolue ? Nous, si.",
    fbP: "Appelez-nous les jours ouvrables entre 08:00 et 17:00. Si nous ne pouvons pas résoudre le problème par téléphone, un technicien est sur votre chantier dans les 24 heures avec un appareil de remplacement, sans frais supplémentaires.",
    fbBtn: "Appelez le 03 689 90 65",
    levH2: "Livré, installé et réglé. Vous n'avez rien à porter.",
    levLede: "Votre pack est livré au moment choisi lors de la réservation. Notre technicien se charge de toute l'installation et vous explique brièvement à quoi faire attention.",
    ex1H: "Livraison à la date de votre choix",
    ex1P: "Vous choisissez vous-même le jour et la demi-journée de livraison. Le transport, la livraison et l'enlèvement sont entièrement compris dans le prix de votre pack.",
    ex2H: "Installation par notre technicien",
    ex2P: "Nous positionnons les appareils, raccordons l'évacuation des condensats, réglons l'humidité cible et effectuons la mesure de départ.",
    ex3H: "Que devez-vous préparer ?",
    ex3P: "Une prise qui fonctionne sur un circuit électrique séparé et un passage libre vers les pièces à sécher. C'est tout.",
    ex4H: "À l'étage ? Pas de souci.",
    ex4P: "L'installation à l'étage par l'escalier ou l'ascenseur est gratuite. Ce n'est que lorsque les déshumidificateurs doivent être montés par une échelle que nous facturons une fois 39 € de manutention.",
    afKick: <>Retrait sur place &amp; transport</>,
    afH2: "Vous venez chercher vous-même ? Lisez d'abord ceci.",
    afLede: "Les appareils séparés se retirent à notre point de retrait le long de l'A12 à Aartselaar. Bien les transporter est important : ainsi, votre déshumidificateur démarre tout de suite et sans dommage.",
    af1E: "Important",
    af1H: "Transportez toujours le déshumidificateur en position verticale",
    af1P: <>Un déshumidificateur de chantier ne peut <b>pas être transporté à plat</b> : le fluide frigorigène s'écoule alors hors du compresseur. Transporté à plat malgré tout ? Placez l'appareil <b>24 heures debout</b> et attendez avant de le démarrer. Vous évitez ainsi d'endommager le compresseur.</>,
    af2E: "Bon à savoir",
    af2H: "Les appareils sont lourds",
    af2P: "Comptez 25 à 40 kg par déshumidificateur. Venez à deux, prévoyez un grand coffre ou une remorque et soulevez en gardant le dos droit. Vous préférez ne pas porter ? Nous livrons et installons tout pour vous, ce que nous recommandons aux clients plus âgés.",
    af3E: "Point de retrait",
    af3H: "Le long de l'A12 à Aartselaar",
    af3P: <>Vous retirez le matériel à notre entrepôt : <b>Boomsesteenweg 12, Unit 11, 2630 Aartselaar</b>, facilement accessible par l'A12. Uniquement sur rendez-vous : vous choisissez votre moment de retrait lors de la réservation et tout est prêt. Nous vous aidons à charger et vous donnons de brèves explications.</>,
    digKick: "Entièrement numérique",
    digH2: "Même après votre réservation, vous gérez tout en ligne.",
    digLede: "Pas de musique d'attente : prolonger, planifier votre enlèvement ou demander une facture se fait en quelques clics. Vous préférez parler à quelqu'un ? Vous pouvez toujours appeler.",
    dg1: <><b>Prolonger en ligne</b><span>Demandez votre prolongation et recevez immédiatement un lien de paiement par e-mail. Dans le cadre de la garantie, vous prolongez gratuitement.</span></>,
    dg2: <><b>Planifier l'enlèvement</b><span>Mesuré sec ? Choisissez vous-même le jour et la demi-journée où nous venons chercher les appareils.</span></>,
    dg3: <><b>Demander une facture</b><span>Votre facture arrive dans votre boîte mail dès le paiement. Perdue ? Un simple e-mail à administratie@vernast.be suffit.</span></>,
    verH2: "Pas encore sec ? Vous prolongez, souvent gratuitement.",
    verLede: "Votre pack est calculé pour un résultat 100 % sec dans la période de location. Si la mesure finale indique encore de l'humidité, vous prolongez dans le cadre de la garantie sans supplément.*",
    v1E: "01 · Dans le cadre de la garantie",
    v1H: "Prolonger gratuitement",
    v1P: "Si votre habitation n'est pas sèche dans la période calculée, vous continuez à louer gratuitement jusqu'à ce qu'elle le soit. Vous nous appelez ou nous écrivez, nous prolongeons immédiatement, sans nouvelle réservation ni facture supplémentaire.",
    v2E: "02 · Prolonger vous-même",
    v2H: "Louer plus longtemps à votre demande",
    v2P: "Vous souhaitez garder les appareils plus longtemps (p. ex. pour une phase de chantier suivante) ? Un coup de fil suffit et nous prolongeons au même prix journalier. Vous recevez un lien de paiement par e-mail.",
    v3E: "03 · Terminé plus tôt",
    v3H: "Arrêter plus tôt",
    v3P: "Sec avant la fin de la période de location ? Prévenez-nous et nous avançons l'enlèvement. Pour les packs avec mesure finale, nous confirmons d'abord ensemble que tout a atteint la valeur cible.",
    verNote: "* La garantie s'applique lorsque les conditions extérieures sont remplies : portes et fenêtres fermées, température suffisante et appareils en fonctionnement ininterrompu.",
    ctaH2: "Vous ne trouvez pas la solution ? Nous vous aidons personnellement.",
    ctaLede: "Décrivez brièvement votre question ou votre problème et nous vous recontactons le jour ouvrable même.",
    ciBel: "Appelez-nous",
    ciUren: "Lu–Ve 08:00–17:00",
    ciAntw: "réponse dans les 4 heures ouvrables",
    ciAfh: <><b>Point de retrait &amp; entrepôt</b><span>Boomsesteenweg 12, Unit 11 · 2630 Aartselaar<br />Retrait uniquement sur rendez-vous</span></>,
    ciSpoed: <><b>Panne urgente ?</b><span>Appelez d'abord : nous résolvons 9 pannes sur 10 par téléphone. Sinon, un technicien ou un appareil de remplacement dans les 24 h.</span></>,
    formH: "Posez votre question",
    lVoor: "Prénom",
    lNaam: "Nom",
    lMail: "Adresse e-mail",
    lTel: "Téléphone",
    lOnd: "Sujet",
    o1: "Paiement ou facture",
    o3: "Livraison ou enlèvement",
    o5: "Autre chose",
    lVraag: "Votre question",
    fnote: "Nous répondons le jour ouvrable même. Urgent ? Appelez le 03 689 90 65.",
  },
  en: {
    q1: "Call 03 689 90 65",
    fixKick: "Machine breakdown",
    verKick: "Extend or stop",
    o2: "Machine breakdown",
    o4: "Extend or stop",
    fx1: "Dehumidifier won't start or cuts out",
    fx2: "Fuse trips regularly",
    fx3: "Dehumidifier has overflowed",
    fx4: "Condensate pump isn't draining water",
    fx5: "Tank light is on",
    fx6: "Drying is slower than expected",
    fx7: "Ice forming on the machine",
    callH: "Machine faulty or damaged?",
    f5p: (lp, prijs) => <>Tired of emptying it about twice a day? Add the <Link to={lp("/verhuur/toebehoren/condenspomp")}>condensate pump</Link> ({prijs} per dehumidifier per day) and the water is drained automatically day and night.</>,
    done: "Thank you! We will reply the same working day. Urgent? Call 03 689 90 65.",
    versturen: "Sending…",
    verstuur: "Send your question",
    crumb: "Customer service",
    altHero: "Calm, satisfied Vernast customer",
    altPay: "Customer paying easily online by card and mobile phone",
    altTech: "Vernast technician",
    phVraag: "If possible, please state your booking number.",
    heroKick: "Customer service",
    li6: "Free cancellation up to 48 hours before delivery",
    li5: "Invoice by email straight after payment",
    li4: "Balance by Bancontact or card with our technician",
    li3: "Nothing left to arrange on delivery",
    li2: "Bancontact, credit card or bank transfer",
    li1: "Invoice in your inbox straight after payment",
    heroH1: "How can we help you?",
    heroP: "A question about your payment, a machine that isn't doing what it should, or extending your hire period? You will find an answer straight away below, or simply give us a call.",
    q2: "Email us",
    q3: "Report a breakdown",
    betH: <>Payments &amp; invoices</>,
    topKick: "What can we help you with?",
    topH2: "Choose your topic.",
    tp1P: "Paying online with a 5% discount, paying on delivery, and where your invoice has got to.",
    tgAntw: "See answers →",
    tp2H: "Machine breakdown",
    tp2P: "Dehumidifier stops, fuse trips or pump won't drain? Fix it yourself in 2 minutes.",
    tgOpl: "See solutions →",
    tp3H: "Extend or stop",
    tp3P: "Not dry yet, or finished early? This is how you adjust your hire period.",
    tgWerkt: "How it works →",
    levH: <>Delivery &amp; installation</>,
    tp4P: "When do we come, what is included and what do you need to have ready?",
    tgVerloopt: "How it goes →",
    tp5H: <>Cover &amp; excess</>,
    tp5P: "What does the deposit cover, and what if a machine gets damaged on site?",
    tgDekking: "To cover →",
    tp6H: <>Collection &amp; return</>,
    tp6P: "Transporting upright, heavy machines and our collection point along the A12 in Aartselaar.",
    tgEerst: "Read this first →",
    payH2: "Pay the way that suits you. Invoice straight to your inbox.",
    payLede: "You choose how you pay: fully online with a discount, or a small order confirmation and the rest on delivery. Either way, with no advance invoices or surprises.",
    po1L: "Most popular · 5% discount",
    po1H: "Pay everything online",
    po1P: <>Pay for your full package online straight away and get <b>5% off</b> your package price.</>,
    po2L: "Flexible",
    po2H: "€50 now, the rest on delivery",
    po2P: <>Confirm your booking with a <b>€50 order confirmation</b> and pay the balance on site at installation.</>,
    prFactuur: <><b>Invoice not received?</b><span>Check your spam folder first. Nothing there? Email your booking number to <a href="mailto:administratie@vernast.be" style={{ color: "var(--red)", fontWeight: 700 }}>administratie@vernast.be</a> and you will receive it again within the hour.</span></>,
    prZak: <><b>Business customer?</b><span>Enter your VAT number when booking and it will automatically appear correctly on the invoice. You can change it afterwards with a quick email.</span></>,
    prVerl: <><b>Paying for an extension</b><span>If you extend within the guarantee, you pay nothing. If you extend yourself, you receive a payment link by email, no new booking needed.</span></>,
    fixH2: "Fix most problems yourself in 2 minutes.",
    fixLede: "Our machines are robust, but on a building site something can always happen. Open the message that matches your situation and you get the solution step by step.",
    f1a: "Check that the socket works (test it with another appliance).",
    f1b: "Look in the fuse box and switch the circuit breaker back on.",
    f1c: "Wait 10 minutes: after a power cut, the machine restarts automatically.",
    f1p: <>Does the machine keep cutting out? Call <a href="tel:+3236899065">03 689 90 65</a> and we will swap it within 24 hours.</>,
    f2a: "Connect the dehumidifier to a separate circuit, not together with other heavy equipment.",
    f2b: "Don't use a light household extension lead: the cables supplied are rated for the power.",
    f2p: <>No (working) electrical board on site? We hire out a site distribution board. Call <a href="tel:+3236899065">03 689 90 65</a>.</>,
    f3a: "Switch the dehumidifier off.",
    f3b: "Check that the tank and the drain hose are properly attached and not loose or kinked anywhere.",
    f3c: "Start the machine up again.",
    f3p: <>Does it overflow again? Call <a href="tel:+3236899065">03 689 90 65</a> and we will replace the pump or the machine free of charge.</>,
    f4a: "Check that the drain hose isn't kinked or folded anywhere.",
    f4b: "The pump lifts to a max. height of 4 m: keep the hose as short and straight as possible.",
    f4c: "Disconnect the hose briefly. If water runs out, the blockage is in the hose.",
    f4p: <>The condensate is clean and can go down any drain. Pump faulty? Call <a href="tel:+3236899065">03 689 90 65</a> and we will replace it free of charge.</>,
    f5a: "Empty the water tank and slide it back in correctly until it clicks into place.",
    f5b: "The machine resumes automatically, you don't need to restart anything.",
    f6a: "Keep windows and doors closed, otherwise you are drying the outside air too.",
    f6b: "Keep the temperature above 15 °C. In cold rooms, condensation drying works more slowly.",
    f6c: "Check that the machine stands clear: 50 cm of space around the intake and outlet sides.",
    f6p: <>Not sure? Call <a href="tel:+3236899065">03 689 90 65</a>, we will take readings with you and add extra capacity if needed. Within the guarantee you extend free of charge.*</>,
    f7a: "Switch the machine off and let it defrost for 30 minutes.",
    f7b: <>Ice forming points to a room that is too cold (&lt; 8 °C).</>,
    f7p: "In cold basements or on winter sites, a desiccant dehumidifier or extra heating is the right solution. Call us and we will change the set-up.",
    callP: "Call us straight away. We solve 9 out of 10 breakdowns over the phone; if that doesn't work, a technician with a replacement machine will be on your site within 24 hours, at no extra cost.",
    callBtn: "Call 03 689 90 65 now",
    fbH: "Breakdown not solved? We'll solve it.",
    fbP: "Call us on working days between 08:00 and 17:00. If we can't solve it over the phone, a technician with a replacement machine will be on your site within 24 hours, at no extra cost.",
    fbBtn: "Call 03 689 90 65",
    levH2: "Delivered, placed and set up. You don't have to lift a thing.",
    levLede: "Your package is delivered at the time you chose when booking. Our technician does the full installation and briefly explains what to look out for.",
    ex1H: "Delivery on your chosen date",
    ex1P: "You choose your delivery day and part of the day. Transport, delivery and collection are fully included in your package price.",
    ex2H: "Installation by our technician",
    ex2P: "We position the machines, connect the condensate drain, set the target humidity and take the starting reading.",
    ex3H: "What do you need to have ready?",
    ex3P: "A working socket on a separate circuit and clear access to the rooms to be dried. That's all.",
    ex4H: "Upstairs? No problem.",
    ex4P: "Placement on an upper floor via stairs or lift is free. Only when dehumidifiers have to go up by ladder do we charge a one-off €39 for carrying.",
    afKick: <>Self-collection &amp; transport</>,
    afH2: "Collecting yourself? Read this first.",
    afLede: "You collect individual machines from our collection point along the A12 in Aartselaar. Transporting them properly matters: that way your dehumidifier starts straight away and without damage.",
    af1E: "Important",
    af1H: "Always transport the dehumidifier upright",
    af1P: <>A construction dehumidifier must <b>not be transported lying flat</b>: the refrigerant then runs out of the compressor. Transported flat anyway? Stand the machine <b>upright for 24 hours</b> and wait before starting it. This prevents damage to the compressor.</>,
    af2E: "Good to know",
    af2H: "The machines are heavy",
    af2P: "Allow 25 to 40 kg per dehumidifier. Come with two people, bring a large boot or a trailer and lift with a straight back. Rather not haul them? We deliver and install everything for you, recommended for older customers.",
    af3E: "Collection point",
    af3H: "Along the A12 in Aartselaar",
    af3P: <>You collect from our warehouse: <b>Boomsesteenweg 12, Unit 11, 2630 Aartselaar</b>, easily reached via the A12. By appointment only: you choose your collection time when booking and everything is ready. We help you load and give a short explanation.</>,
    digKick: "Fully digital",
    digH2: "Even after booking, you arrange everything online.",
    digLede: "No hold music needed: extending, scheduling your collection or requesting an invoice takes just a few clicks. Prefer a person on the line? You can always call.",
    dg1: <><b>Extend online</b><span>Request your extension and receive a payment link by email straight away. Within the guarantee you extend free of charge.</span></>,
    dg2: <><b>Schedule collection</b><span>Measured dry? Choose the day and part of the day when we come to collect the machines.</span></>,
    dg3: <><b>Request an invoice</b><span>Your invoice is in your inbox straight after payment. Lost it? One email to administratie@vernast.be is enough.</span></>,
    verH2: "Not dry yet? Then you extend, often free of charge.",
    verLede: "Your package is calculated to be 100% dry within the hire period. If the final reading still shows moisture, you extend within the guarantee without paying extra.*",
    v1E: "01 · Within the guarantee",
    v1H: "Extend free of charge",
    v1P: "If your home isn't dry within the calculated period, you keep hiring free of charge until it is. You call or email us, we extend straight away, no new booking, no extra invoice.",
    v2E: "02 · Extend yourself",
    v2H: "Hire for longer at your request",
    v2P: "Want to keep the machines longer (e.g. for a next construction phase)? One phone call and we extend at the same daily rate. You receive a payment link by email.",
    v3E: "03 · Finished early",
    v3H: "Stop early",
    v3P: "Dry before the end of the hire period? Let us know and we will bring the collection forward. For packages with a final reading, we first confirm together that everything is at target value.",
    verNote: "* The guarantee applies when the external conditions are met: windows and doors closed, temperature at the right level and the machines running without interruption.",
    ctaH2: "Still stuck? We'll help you personally.",
    ctaLede: "Briefly describe your question or problem and we will get in touch the same working day.",
    ciBel: "Call us",
    ciUren: "Mon–Fri 08:00–17:00",
    ciAntw: "answer within 4 working hours",
    ciAfh: <><b>Collection point &amp; warehouse</b><span>Boomsesteenweg 12, Unit 11 · 2630 Aartselaar<br />Collection by appointment only</span></>,
    ciSpoed: <><b>Urgent breakdown?</b><span>Call first, we solve 9 out of 10 breakdowns over the phone. Otherwise a technician or replacement machine within 24 hours.</span></>,
    formH: "Ask your question",
    lVoor: "First name",
    lNaam: "Surname",
    lMail: "Email address",
    lTel: "Phone",
    lOnd: "Subject",
    o1: "Payment or invoice",
    o3: "Delivery or collection",
    o5: "Something else",
    lVraag: "Your question",
    fnote: "We reply the same working day. Urgent? Call 03 689 90 65.",
  },
} satisfies Copy<Teksten>;
