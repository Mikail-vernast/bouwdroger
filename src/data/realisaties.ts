// De uitgevoerde droogprojecten, overgenomen uit de realisaties van
// vernast-vochtbestrijding.be en beperkt tot de projecten waar bouwdroging het
// werk was — kelderbekuiping en muurinjectie horen niet op deze site.
//
// Opzet, teksten en foto's volgen die site één op één, inclusief de
// projectfiche, het fotoalbum met bijschriften en de gerelateerde projecten.
// Alleen de bedrijfsnaam is genormaliseerd: de bron schreef "Bouwdrogerservice",
// "Vernast Bouwdroging", "Vernast Verhuur" en één keer "Bouwdrogiing" door
// elkaar.
//
// Gegenereerd uit de bronpagina's; met de hand bijwerken loopt bij de volgende
// overname weer weg.

export type RealisatieSoort = "bouwvocht" | "waterschade" | "vochtbeheersing";

/** De zijfilter van het overzicht. */
export const REALISATIE_SOORTEN: { key: RealisatieSoort; label: string }[] = [
  { key: "bouwvocht", label: "Bouwvocht" },
  { key: "waterschade", label: "Waterschade" },
  { key: "vochtbeheersing", label: "Vochtbeheersing" },
];

export interface RealisatieFact {
  label: string;
  waarde: string;
  detail: string;
}

export interface RealisatieFoto {
  src: string;
  alt: string;
  bijschrift: string;
  /** Kort label onder de carrousel. */
  thumb: string;
}

export interface RealisatieBlok {
  kop: string;
  /** Mag <b> en <em> bevatten — de bron zet de stap-namen vet. */
  alineas: string[];
}

export interface Realisatie {
  slug: string;
  titel: string;
  /** "Bouwdroging · Boom", zoals op de kaart en bij de locatie. */
  chip: string;
  soort: RealisatieSoort;
  locatie: string;
  lede: string;
  tags: string[];
  hero: string;
  heroAlt: string;
  kaart: string;
  kaartAlt: string;
  facts: RealisatieFact[];
  verhaal: {
    eyebrow: string;
    kop: string;
    lead: string;
    problemen: string[];
    blokken: RealisatieBlok[];
  };
  fiche: { label: string; waarde: string }[];
  album: {
    eyebrow: string;
    kop: string;
    intro: string;
    fotos: RealisatieFoto[];
  };
  resultaat: {
    eyebrow: string;
    kop: string;
    kolommen: { label: string; kop: string; tekst: string }[];
  };
  meer: {
    eyebrow: string;
    kop: string;
    intro: string;
    slugs: string[];
  };
}

export const REALISATIES: Realisatie[] = [
  {
    slug: "vernissage-boom",
    titel: "Expositieruimte vochtvrij gemaakt met gerichte bouwdroging",
    chip: "Bouwdroging · Boom",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Boom",
    lede: "In deze commerciële ruimte in Boom, bestemd als vernissage- en eventlocatie, werd na de pleisterwerken een te hoog vochtgehalte gemeten. Vernast bracht het binnenklimaat met gerichte bouwdroging en nauwkeurige metingen snel terug tot een veilig niveau, zodat de verdere afwerking en inrichting zonder risico kon doorgaan.",
    tags: ["Bouwdroging", "Vochtmeting", "Klimaatbeheersing"],
    hero: "/realisaties/vernissage-boom/hero.webp",
    heroAlt: "De nieuwe expositieruimte in Boom waar Vernast de bouwdroging uitvoerde",
    kaart: "/realisaties/vernissage-boom/hero.webp",
    kaartAlt: "Realisatie: Expositieruimte vochtvrij gemaakt met gerichte bouwdroging",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "na de pleisterwerken" },
      { label: "Analyse & oplossing", waarde: "24 uur", detail: "vochtmeting + droogplan" },
      { label: "Schimmelsanering", waarde: "3 werkdagen", detail: "preventieve behandeling" },
      { label: "Klimaatherstel", waarde: "4 werkdagen", detail: "gecontroleerd drogen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "De ruimte in Boom werd klaargemaakt als sfeervolle vernissage- en eventlocatie waar kunst en beleving centraal staan. Vlak na de pleisterwerken bleek het vochtgehalte in de wanden en de lucht echter te hoog. Zolang dat bouwvocht niet onder controle was, dreigde vertraging van de planning en risico op schade aan de afwerking, de installaties en de tentoongestelde werken.",
      problemen: [
        "Te hoog vochtgehalte in het verse pleisterwerk",
        "Verhoogde relatieve luchtvochtigheid in de volledige ruimte",
        "Risico op schade aan afwerking, installaties en kunstwerken",
        "Dreigende vertraging van de afwerking en de inrichting",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met vochtmetingen op verschillende plaatsen stelden we vast dat het om <b>bouwvocht na de pleisterwerken</b> ging: het verse pleister en de lucht bevatten nog te veel restvocht. Bij een commerciële ruimte met een strakke opleveringsdatum is natuurlijk drogen te traag en te onvoorspelbaar. Om schade en uitstel te vermijden was een gerichte bouwdroging met continue opvolging nodig.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse en droogplan (24 u).</b> We brachten het vochtgehalte in kaart met metingen doorheen de ruimte en stelden op basis daarvan een gericht droogplan op, met de juiste toestellen op de juiste plaatsen.",
            "<b>Bouwdroging.</b> Vernast plaatste professionele bouwdrogers en luchtontvochtigers strategisch in de ruimte. Door de continue werking en monitoring werd het vocht stap voor stap uit de wanden en de lucht onttrokken.",
            "<b>Preventieve schimmelsanering (3 werkdagen).</b> Om te vermijden dat het aanwezige vocht tot schimmelvorming zou leiden, voerden we een preventieve behandeling uit terwijl de ruimte verder droogde.",
            "<b>Klimaatherstel (4 werkdagen).</b> De ruimte werd gecontroleerd drooggezet tot veilige waarden, opgevolgd met klimaat- en vochtmetingen. Zo kreeg de eventlocatie een droge, stabiele basis waarop de afwerking en inrichting zonder risico verder konden.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Boom" },
      { label: "Type", waarde: "Commercieel pand · expositieruimte" },
      { label: "Probleem", waarde: "Bouwvocht na pleisterwerken" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Analyse & oplossing", waarde: "24 uur" },
      { label: "Schimmelsanering", waarde: "3 werkdagen" },
      { label: "Klimaatherstel", waarde: "4 werkdagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vochtmeting tot de drooggezette eventruimte in Boom. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/vernissage-boom/a1.webp", alt: "Expositieruimte in Boom bij aanvang van de bouwdroging", bijschrift: "De expositieruimte bij aanvang van de bouwdroging", thumb: "Bij aanvang" },
        { src: "/realisaties/vernissage-boom/a2.webp", alt: "Vers pleisterwerk met een verhoogd vochtgehalte in Boom", bijschrift: "Vers pleisterwerk met een verhoogd vochtgehalte", thumb: "Vers pleisterwerk" },
        { src: "/realisaties/vernissage-boom/a3.webp", alt: "Vochtmeting van de gepleisterde wanden", bijschrift: "Vochtmeting van de gepleisterde wanden", thumb: "Vochtmeting" },
        { src: "/realisaties/vernissage-boom/a4.webp", alt: "Overzicht van de ruimte vóór de klimaatstabilisatie", bijschrift: "Overzicht van de ruimte vóór de klimaatstabilisatie", thumb: "Ruimte vooraf" },
        { src: "/realisaties/vernissage-boom/a5.webp", alt: "Bouwdroger opgesteld in de expositieruimte", bijschrift: "Bouwdroger opgesteld in de expositieruimte", thumb: "Bouwdroger geplaatst" },
        { src: "/realisaties/vernissage-boom/a6.webp", alt: "Continue luchtontvochtiging tijdens de droogfase", bijschrift: "Continue luchtontvochtiging tijdens de droogfase", thumb: "Luchtontvochtiging" },
        { src: "/realisaties/vernissage-boom/a7.webp", alt: "Droogtoestellen strategisch geplaatst in de ruimte", bijschrift: "Droogtoestellen strategisch geplaatst in de ruimte", thumb: "Droogtoestellen" },
        { src: "/realisaties/vernissage-boom/a8.webp", alt: "Controle van de relatieve luchtvochtigheid", bijschrift: "Controle van de relatieve luchtvochtigheid", thumb: "Luchtvochtigheid" },
        { src: "/realisaties/vernissage-boom/a9.webp", alt: "Gerichte droging langs de gepleisterde wanden", bijschrift: "Gerichte droging langs de gepleisterde wanden", thumb: "Droging wanden" },
        { src: "/realisaties/vernissage-boom/a10.webp", alt: "Opvolging van het droogproces in Boom", bijschrift: "Opvolging van het droogproces", thumb: "Opvolging droogproces" },
        { src: "/realisaties/vernissage-boom/a11.webp", alt: "Vochtwaarden geleidelijk onder controle gebracht", bijschrift: "Vochtwaarden geleidelijk onder controle", thumb: "Vochtwaarden" },
        { src: "/realisaties/vernissage-boom/a12.webp", alt: "Overzicht van de volledige droogopstelling", bijschrift: "Overzicht van de volledige droogopstelling", thumb: "Droogopstelling" },
        { src: "/realisaties/vernissage-boom/a13.webp", alt: "Nazicht van het pleisterwerk tijdens het drogen", bijschrift: "Nazicht van het pleisterwerk tijdens het drogen", thumb: "Nazicht pleister" },
        { src: "/realisaties/vernissage-boom/a14.webp", alt: "Stabilisatie van het binnenklimaat", bijschrift: "Stabilisatie van het binnenklimaat", thumb: "Klimaatstabilisatie" },
        { src: "/realisaties/vernissage-boom/a15.webp", alt: "Meting van de restvochtigheid in de wanden", bijschrift: "Meting van de restvochtigheid in de wanden", thumb: "Restvochtigheid" },
        { src: "/realisaties/vernissage-boom/a16.webp", alt: "De ruimte klaar voor de verdere afwerking", bijschrift: "De ruimte klaar voor de verdere afwerking", thumb: "Klaar voor afwerking" },
        { src: "/realisaties/vernissage-boom/a17.webp", alt: "Droge wanden na de bouwdroging", bijschrift: "Droge wanden na de bouwdroging", thumb: "Droge wanden" },
        { src: "/realisaties/vernissage-boom/a18.webp", alt: "Eindcontrole van het vochtgehalte", bijschrift: "Eindcontrole van het vochtgehalte", thumb: "Eindcontrole" },
        { src: "/realisaties/vernissage-boom/a19.webp", alt: "Klimaatmeting vóór de inrichting van de ruimte", bijschrift: "Klimaatmeting vóór de inrichting", thumb: "Klimaatmeting" },
        { src: "/realisaties/vernissage-boom/a20.webp", alt: "De expositieruimte na de bouwdroging", bijschrift: "De expositieruimte na de bouwdroging", thumb: "Na de bouwdroging" },
        { src: "/realisaties/vernissage-boom/a21.webp", alt: "Detailopname van de afgewerkte, droge wand", bijschrift: "Detailopname van de afgewerkte, droge wand", thumb: "Afgewerkte wand" },
        { src: "/realisaties/vernissage-boom/a22.webp", alt: "De vernissageruimte in Boom klaar voor gebruik", bijschrift: "De vernissageruimte klaar voor gebruik", thumb: "Klaar voor gebruik" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van bouwvocht naar een droge, presentatieklare ruimte",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel schakelen zonder de planning te verstoren", tekst: "Bij een commerciële ruimte telt elke dag. Vernast combineert een snelle diagnose met een gericht droogplan, uitgevoerd door ons eigen team van gecertificeerde vochtexperten en de bouwdrogers van Vernast Bouwdrogers. Zo blijft de opleveringsdatum haalbaar en betaalt u nooit twee keer voor hetzelfde probleem." },
        { label: "Na de werken", kop: "Een stabiele basis voor kunst en beleving", tekst: "Met het vochtgehalte teruggebracht tot veilige waarden en het binnenklimaat gestabiliseerd, kon de afwerking en inrichting van de expositieruimte in Boom zonder risico doorgaan. Dit project toont hoe een correcte meting en een grondige bouwdroging de basis leggen voor een ruimte waar esthetiek centraal staat." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elk pand is anders. Bekijk hoe wij vocht in andere commerciële ruimtes aanpakten.",
      slugs: ["bang-olufsen", "mnr-erdem-bedrijfsgebouw", "mancave-brugge"],
    },
  },
  {
    slug: "mnr-w-antwerpen",
    titel: "Kelder en leefruimte drooggelegd na waterschade",
    chip: "Bouwdroging · Antwerpen",
    soort: "waterschade",
    locatie: "Waterschade · Antwerpen",
    lede: "In deze Antwerpse woning zorgde een lek voor ernstige waterschade in zowel de kelder als de aangrenzende kamer. Vernast greep meteen in met professionele droogapparatuur en een doordachte opstelling. Door nauwkeurige opvolging kon het vochtgehalte veilig worden teruggebracht, zodat verdere schade aan muren en vloer werd voorkomen.",
    tags: ["Bouwdroging", "Waterschade", "Klimaatherstel"],
    hero: "/realisaties/mnr-w-antwerpen/hero.webp",
    heroAlt: "De Antwerpse woning waar Vernast na waterschade een bouwdroging uitvoerde",
    kaart: "/realisaties/mnr-w-antwerpen/hero.webp",
    kaartAlt: "Realisatie: Kelder en leefruimte drooggelegd na waterschade",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "na waterschade" },
      { label: "Analyse & oplossing", waarde: "24 u", detail: "snelle interventie" },
      { label: "Schimmelsanering", waarde: "3 dagen", detail: "preventief drooghouden" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "tot een veilig vochtgehalte" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "Toen wij ter plaatse kwamen, stond het vochtgehalte in de Antwerpse woning sterk verhoogd. Een lek had water in de kelder gebracht, dat ook de aangrenzende kamer had aangetast. Zonder snelle actie dreigde blijvende schade aan de vloeropbouw, het pleisterwerk en de afwerking, met kans op schimmel en muffe geuren als gevolg.",
      problemen: [
        "Waterschade in de kelder na een lek in de woning",
        "Doorgeslagen vocht in de aangrenzende leefruimte",
        "Sterk verhoogde vochtwaarden in vloer en muren",
        "Dreigende schimmelvorming en aantasting van de afwerking",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met vochtmetingen op verschillende plaatsen brachten we de omvang van de schade in kaart. Het beeld was duidelijk: <b>plotse waterschade</b> door een lek, waarbij het water zich via kelder en vloer naar de aangrenzende kamer had verspreid. Hier is geen bronbehandeling nodig, maar een snelle en beheerste droging voor de vochtige materialen blijvend aangetast raken.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Meteen, analyse en opstelling.</b> Binnen de eerste 24 uur bepaalden we de aanpak en plaatsten we professionele bouwdrogers, condensdrogers en ventilatoren op de juiste plaatsen in kelder en kamer.",
            "<b>De droogfase.</b> Door de apparatuur doelgericht op te stellen en de luchtcirculatie te sturen, werd het vocht gelijkmatig uit vloer, muren en lucht getrokken, zonder schade aan het interieur.",
            "<b>Continue opvolging.</b> Tijdens het droogproces volgden we het vochtgehalte en het binnenklimaat nauwkeurig op, zodat de opstelling telkens bijgestuurd kon worden voor een optimaal resultaat.",
            "<b>Klimaatherstel.</b> Na vier dagen was het vochtgehalte teruggebracht tot een veilig niveau en kon de ruimte opnieuw veilig en bruikbaar worden gebruikt, met behoud van de woningwaarde.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Antwerpen" },
      { label: "Type woning", waarde: "Woning" },
      { label: "Probleem", waarde: "Waterschade in kelder + kamer" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Analyse & oplossing", waarde: "24 u" },
      { label: "Schimmelsanering", waarde: "3 dagen" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de opstelling van de droogapparatuur tot het herstelde binnenklimaat in Antwerpen. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mnr-w-antwerpen/a1.webp", alt: "Droogapparatuur opgesteld in de aangetaste ruimte te Antwerpen", bijschrift: "Droogapparatuur klaargezet in de aangetaste ruimte", thumb: "Droogapparatuur klaargezet" },
        { src: "/realisaties/mnr-w-antwerpen/a2.webp", alt: "Bouwdroger aan het werk in de Antwerpse woning", bijschrift: "Bouwdroger in werking na de waterschade", thumb: "Bouwdroger in werking" },
        { src: "/realisaties/mnr-w-antwerpen/a3.webp", alt: "Opstelling van de droogunits in de kelder", bijschrift: "Doordachte opstelling van de droogunits", thumb: "Opstelling droogunits" },
        { src: "/realisaties/mnr-w-antwerpen/a4.webp", alt: "Condensdroger trekt het vocht uit de lucht", bijschrift: "Condensdroger trekt het vocht uit de lucht", thumb: "Condensdroger" },
        { src: "/realisaties/mnr-w-antwerpen/a5.webp", alt: "Ventilatoren gericht op de vochtige muren", bijschrift: "Ventilatoren sturen de luchtcirculatie", thumb: "Ventilatoren" },
        { src: "/realisaties/mnr-w-antwerpen/a6.webp", alt: "Droogproces in de aangrenzende kamer", bijschrift: "Droogproces in de aangrenzende kamer", thumb: "Droging in de kamer" },
        { src: "/realisaties/mnr-w-antwerpen/a7.webp", alt: "Apparatuur gericht op de aangetaste vloeropbouw", bijschrift: "Gericht drogen van de aangetaste vloer", thumb: "Drogen van de vloer" },
        { src: "/realisaties/mnr-w-antwerpen/a8.webp", alt: "Vochtige muur onder behandeling met droogapparatuur", bijschrift: "Vochtige muur onder behandeling", thumb: "Muur onder behandeling" },
        { src: "/realisaties/mnr-w-antwerpen/a9.webp", alt: "Overzicht van de droogopstelling in de kelder", bijschrift: "Overzicht van de droogopstelling", thumb: "Overzicht opstelling" },
        { src: "/realisaties/mnr-w-antwerpen/a10.webp", alt: "Controle van het droogverloop in de woning", bijschrift: "Controle van het droogverloop", thumb: "Controle droogverloop" },
        { src: "/realisaties/mnr-w-antwerpen/a11.webp", alt: "Vochtmeting tijdens de bouwdroging", bijschrift: "Vochtmeting tijdens de droging", thumb: "Vochtmeting" },
        { src: "/realisaties/mnr-w-antwerpen/a12.webp", alt: "Opvolging van het vochtgehalte in de ruimte", bijschrift: "Nauwkeurige opvolging van het vochtgehalte", thumb: "Opvolging vochtgehalte" },
        { src: "/realisaties/mnr-w-antwerpen/a13.webp", alt: "Bijsturen van de droogapparatuur voor optimaal resultaat", bijschrift: "Bijsturen van de opstelling voor een optimaal resultaat", thumb: "Opstelling bijsturen" },
        { src: "/realisaties/mnr-w-antwerpen/a14.webp", alt: "De ruimte in de laatste fase van het droogproces", bijschrift: "De ruimte in de laatste droogfase", thumb: "Laatste droogfase" },
        { src: "/realisaties/mnr-w-antwerpen/a15.webp", alt: "Herstelde en drooggemaakte ruimte in de Antwerpse woning", bijschrift: "De drooggemaakte ruimte na de werken", thumb: "Drooggemaakte ruimte" },
        { src: "/realisaties/mnr-w-antwerpen/a16.webp", alt: "Veilig vochtgehalte bereikt na het klimaatherstel", bijschrift: "Veilig vochtgehalte na het klimaatherstel", thumb: "Veilig vochtgehalte" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van waterschade naar een gezonde, droge basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel ter plaatse, blijvend resultaat", tekst: "Bij waterschade telt elk uur. Ons eigen team van Vernast-gecertificeerde vochtexperten schakelt meteen en zet de juiste droogapparatuur gericht in. Zo beperken we de schade en voorkomen we dat u later opnieuw moet ingrijpen." },
        { label: "Na de werken", kop: "Een veilig en bruikbaar interieur", tekst: "Met het vocht teruggebracht tot een veilig niveau kon de ruimte in Antwerpen opnieuw veilig gebruikt worden. Verdere schade aan vloer, muren en interieur werd vermeden, waardoor herstelkosten beperkt bleven en de woning haar waarde behield." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders, bekijk hoe wij gelijkaardige vocht- en waterproblemen elders aanpakten.",
      slugs: ["dhr-v-antwerpen", "bang-olufsen", "dhr-b-brussel"],
    },
  },
  {
    slug: "mnr-s-brussel",
    titel: "Waterschade in de badkamer gericht gedroogd",
    chip: "Bouwdroging · Brussel",
    soort: "waterschade",
    locatie: "Waterschade · Brussel",
    lede: "Na een waterincident in de badkamer had het vocht zich verspreid naar het tegelwerk, de vloeropbouw en de aangrenzende muren. Vernast legde de natte zones bloot, plaatste professionele bouwdrogers en volgde de droging op met vochtmetingen — zodat schimmel en blijvende schade werden voorkomen.",
    tags: ["Waterschade", "Bouwdroging", "Schimmelsanering"],
    hero: "/realisaties/mnr-s-brussel/hero.webp",
    heroAlt: "Het gebouw in Brussel waar Vernast de waterschade in de badkamer aanpakte",
    kaart: "/realisaties/mnr-s-brussel/hero.webp",
    kaartAlt: "Realisatie: Waterschade in de badkamer gericht gedroogd",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ schimmelsanering" },
      { label: "Diagnose", waarde: "Waterschade", detail: "badkamer, vocht verspreid" },
      { label: "Reactietijd", waarde: "24 uur", detail: "analyse & aanpak" },
      { label: "Droog- & klimaatherstel", waarde: "3–4 dagen", detail: "opvolging met metingen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "Bij dit appartement in Brussel was er acute waterschade ontstaan in de badkamer. Het water had de kans gekregen om zich onder het tegelwerk, doorheen de vloeropbouw en tot in de aangrenzende slaapkamer te verspreiden. Snel en gericht handelen was cruciaal om schimmelvorming en structurele schade te vermijden.",
      problemen: [
        "Waterinsijpeling vanuit de badkamer met sterk verhoogde vochtwaarden",
        "Vocht doorgedrongen tot in de vloeropbouw, de leidingzones en het plafond eronder",
        "Loskomend pleisterwerk en tegelwerk rond de natte zones",
        "Reëel risico op schimmel en blijvende schade bij een trage, natuurlijke droging",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Onze inspecteur bracht met een <b>vochtmeter op verschillende hoogtes en dieptes</b> de omvang van de schade in kaart. De metingen toonden een sterk verzadigde vloeropbouw en aangetaste muurvoeten — het gevolg van <b>acute waterschade</b>, niet van een structureel vochtprobleem. De uitdaging lag dus niet in het injecteren van een waterkering, maar in het <b>zo snel mogelijk en gecontroleerd terugbrengen van het vochtgehalte</b> vóór schimmel kans kreeg.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Binnen 24 uur, analyse en vrijleggen.</b> Meteen na de melding werd de badkamer geïnspecteerd en werden de natte zones vrijgelegd: aangetast pleister- en tegelwerk verwijderd en de vloeropbouw met de sanitaire leidingen blootgelegd.",
            "<b>Gerichte bouwdroging.</b> Vernast plaatste krachtige bouwdrogers en ventilatoren in de badkamer én in de aangrenzende slaapkamer, zodat het vocht ook uit de moeilijk bereikbare vloer- en muurzones werd getrokken.",
            "<b>Continue opvolging met vochtmetingen.</b> Tijdens de droogperiode werden de waarden nauwgezet opgevolgd tot alle zones terug op een veilig niveau zaten, met een lokale ontschimmelingsbehandeling waar nodig.",
            "<b>Klimaatherstel.</b> Na drie tot vier dagen was de ruimte droog en veilig gesteld, klaar voor een vlot herstel zonder bijkomende schade aan muren, vloer of afwerking.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Brussel" },
      { label: "Type pand", waarde: "Appartement, badkamer" },
      { label: "Probleem", waarde: "Waterschade + vochtverspreiding" },
      { label: "Behandeling", waarde: "Bouwdroging + schimmelsanering" },
      { label: "Analyse & aanpak", waarde: "Binnen 24 uur" },
      { label: "Droog- & klimaatherstel", waarde: "3–4 werkdagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de vochtmetingen in de badkamer tot de bouwdrogers in de aangrenzende kamer. Blader met de pijlen of kies een stap hieronder.",
      fotos: [
        { src: "/realisaties/mnr-s-brussel/a1.webp", alt: "Vochtmeting achter het weggekapte tegelwerk in de badkamer te Brussel", bijschrift: "Vochtmeting achter het weggekapte tegelwerk: sterk verhoogde waarde", thumb: "Vochtmeting achter tegels" },
        { src: "/realisaties/mnr-s-brussel/a2.webp", alt: "Controlemeting aan de vloer-muuraansluiting naast het parket", bijschrift: "Controlemeting aan de vloer-muuraansluiting naast het parket", thumb: "Meting bij het parket" },
        { src: "/realisaties/mnr-s-brussel/a3.webp", alt: "Blootgelegde vloeropbouw met sanitaire leidingen, meting van het restvocht", bijschrift: "Blootgelegde vloeropbouw met leidingen, meting van het restvocht", thumb: "Vloeropbouw vrijgelegd" },
        { src: "/realisaties/mnr-s-brussel/a4.webp", alt: "Vochtmeting in de uitgekapte dorpel met de sanitaire leidingen", bijschrift: "Vochtmeting in de uitgekapte dorpel met de sanitaire leidingen", thumb: "Meting in de dorpel" },
        { src: "/realisaties/mnr-s-brussel/a5.webp", alt: "Weggekapt pleisterwerk tot op de baksteen met controle van het muurvocht", bijschrift: "Weggekapt pleisterwerk tot op de baksteen, meting van het muurvocht", thumb: "Pleister tot op baksteen" },
        { src: "/realisaties/mnr-s-brussel/a6.webp", alt: "Bouwdroger en ventilator ingezet in de slaapkamer naast de badkamer", bijschrift: "Bouwdroger en ventilator ingezet in de aangrenzende slaapkamer", thumb: "Bouwdroger geplaatst" },
        { src: "/realisaties/mnr-s-brussel/a7.webp", alt: "Vochtmeting aan het plafond waar de pleister loskwam van de baksteen", bijschrift: "Vochtmeting aan het plafond waar de pleister loskwam", thumb: "Meting aan het plafond" },
        { src: "/realisaties/mnr-s-brussel/a8.webp", alt: "Weggekapte plint langs de muur met controle van het vochtniveau", bijschrift: "Weggekapte plint langs de muur, controle van het vochtniveau", thumb: "Weggekapte plint" },
        { src: "/realisaties/mnr-s-brussel/a9.webp", alt: "Meting in de tegelhoek van de badkamer boven de vrijgelegde leidingen", bijschrift: "Meting in de tegelhoek boven de vrijgelegde leidingen", thumb: "Meting in de tegelhoek" },
        { src: "/realisaties/mnr-s-brussel/a10.webp", alt: "Uitgekapte tegelvoeg in de badkamer met vochtige ondergrond", bijschrift: "Uitgekapte tegelvoeg in de badkamer met vochtige ondergrond", thumb: "Uitgekapte tegelvoeg" },
        { src: "/realisaties/mnr-s-brussel/a11.webp", alt: "Vrijgelegde leidingen in de vloer onder het tegelwerk van de badkamer", bijschrift: "Vrijgelegde leidingen in de vloer onder het tegelwerk", thumb: "Vrijgelegde leidingen" },
        { src: "/realisaties/mnr-s-brussel/a12.webp", alt: "De woning in Brussel waar de vochtwerken werden uitgevoerd", bijschrift: "De woning in Brussel waar de werken werden uitgevoerd", thumb: "De woning in Brussel" },
        { src: "/realisaties/mnr-s-brussel/a13.webp", alt: "Straatbeeld van het gebouw in Brussel", bijschrift: "Straatbeeld van het gebouw in Brussel", thumb: "Straatbeeld" },
        { src: "/realisaties/mnr-s-brussel/a14.webp", alt: "Resultaat na de gecontroleerde droging en vochtaanpak", bijschrift: "Een droge, gezonde basis na de gecontroleerde droging", thumb: "Droge, gezonde basis" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van acute waterschade naar een droge, gezonde basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel ter plaatse, met eigen droogtechniek", tekst: "Bij waterschade telt elk uur. Ons eigen team van Vernast-gecertificeerde vochtexperten stond binnen de dag ter plaatse met professionele bouwdrogers en meetapparatuur. Zo blijft de schade beperkt en betaalt u nooit twee keer voor hetzelfde probleem." },
        { label: "Na de werken", kop: "Droog, veilig en schimmelvrij", tekst: "Door de natte zones bloot te leggen en gericht te drogen, werd het vocht bij de bron aangepakt en schimmel voorkomen. Dit project in Brussel toont hoe een snelle diagnose en de juiste droogtechniek de basis vormen voor een vlot herstel zonder blijvende gevolgen." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders — bekijk hoe wij gelijkaardige vochtproblemen elders aanpakten.",
      slugs: ["mnr-w-antwerpen", "vernissage-boom", "bang-olufsen"],
    },
  },
  {
    slug: "mnr-n-v-oostende",
    titel: "Bouwvocht na het pleisterwerk drooggelegd in een villa",
    chip: "Bouwdroging · Oostende",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Oostende",
    lede: "In deze ruime villa aan de kust bleef na de pleisterwerken een verhoogd bouwvocht in de muren achter. Vernast pakte dit snel en gecontroleerd aan: dankzij nauwkeurige vochtmetingen en professionele droogapparatuur kon de afwerking zonder vertraging en zonder risico verdergaan.",
    tags: ["Bouwdroging", "Pleisterwerk", "Klimaatherstel"],
    hero: "/realisaties/mnr-n-v-oostende/hero.webp",
    heroAlt: "Villawoning te Oostende waar Vernast het bouwvocht na de pleisterwerken droogde",
    kaart: "/realisaties/mnr-n-v-oostende/hero.webp",
    kaartAlt: "Realisatie: Bouwvocht na het pleisterwerk drooggelegd in een villa",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ klimaatopvolging" },
      { label: "Analyse & oplossing", waarde: "24 u", detail: "vochtmeting en plan van aanpak" },
      { label: "Schimmelsanering", waarde: "3 dagen", detail: "preventieve behandeling" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "tot een stabiel, droog klimaat" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "In deze hedendaagse villawoning te Oostende was de ruwbouw af en het pleisterwerk net aangebracht. Bij oplevering van die fase werd een sterk verhoogd vochtgehalte in de muren gemeten. Vers pleisterwerk brengt veel water in de woning en aan de kust ligt de luchtvochtigheid van nature hoger, waardoor de ruimtes op eigen kracht te traag droogden om de afwerking veilig te kunnen starten.",
      problemen: [
        "Sterk verhoogd bouwvocht in het verse pleisterwerk",
        "Hoge luchtvochtigheid door het kustklimaat van Oostende",
        "Te trage natuurlijke droging voor de geplande afwerkingsfase",
        "Risico op schimmel en spanningsscheuren bij te snel afwerken op een vochtige ondergrond",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met vochtmetingen op verschillende hoogtes bracht Vernast het vochtgehalte in kaart. De conclusie was duidelijk: het ging om <b>bouwvocht</b> uit de pleister- en ruwbouwfase, niet om een structureel vochtprobleem. Zonder gerichte droging zou de restvocht maandenlang in de muren blijven zitten, met kans op schimmelvorming, geurhinder en schade aan verf en vloeren. De oplossing was dan ook een gecontroleerd droogproces in plaats van een bouwtechnische ingreep.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse en plan van aanpak.</b> Binnen de eerste 24 uur werden alle ruimtes gemeten en werd de droogapparatuur strategisch opgesteld, afgestemd op het volume en de vochtbelasting van de villa.",
            "<b>Professionele bouwdroging.</b> Bouwdrogers en ventilatoren zorgden voor continue luchtcirculatie, terwijl luchtontvochtigers het vrijgekomen vocht uit de lucht haalden. Zo daalde het vochtgehalte snel en gelijkmatig, zonder spanning op het verse pleisterwerk.",
            "<b>Preventieve schimmelsanering.</b> Om te vermijden dat de tijdelijk hoge vochtigheid schimmel zou uitlokken, werd een preventieve behandeling voorzien over een drietal dagen.",
            "<b>Klimaatherstel en opvolging.</b> Met dagelijkse klimaat- en luchtmetingen werd het binnenklimaat in ongeveer vier dagen naar een stabiel, droog niveau gebracht. Daarna kon de schilder- en vloerafwerking veilig van start gaan.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Oostende" },
      { label: "Type", waarde: "Moderne villawoning" },
      { label: "Probleem", waarde: "Bouwvocht na pleisterwerk" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Extra", waarde: "Preventieve schimmelsanering" },
      { label: "Analyse & oplossing", waarde: "24 u" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de opstelling van de droogapparatuur tot het stabiele eindklimaat in de villa te Oostende. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mnr-n-v-oostende/a1.webp", alt: "Droogapparatuur opgesteld in de villawoning te Oostende", bijschrift: "Droogapparatuur opgesteld in de villawoning", thumb: "Droogapparatuur opgesteld" },
        { src: "/realisaties/mnr-n-v-oostende/a2.webp", alt: "Bouwdroger aan het werk na de pleisterwerken", bijschrift: "Bouwdroger aan het werk na het pleisteren", thumb: "Bouwdroger aan het werk" },
        { src: "/realisaties/mnr-n-v-oostende/a3.webp", alt: "Overzicht van de te drogen leefruimte in de villa", bijschrift: "Overzicht van de te drogen leefruimte", thumb: "Overzicht leefruimte" },
        { src: "/realisaties/mnr-n-v-oostende/a4.webp", alt: "Luchtontvochtiger bij het verse pleisterwerk", bijschrift: "Luchtontvochtiger bij het verse pleisterwerk", thumb: "Luchtontvochtiger" },
        { src: "/realisaties/mnr-n-v-oostende/a5.webp", alt: "Continue luchtcirculatie in de ruimte", bijschrift: "Continue luchtcirculatie in de ruimte", thumb: "Luchtcirculatie" },
        { src: "/realisaties/mnr-n-v-oostende/a6.webp", alt: "Vochtige pleisterwand in de droogfase", bijschrift: "Pleisterwand in de droogfase", thumb: "Pleisterwand drogen" },
        { src: "/realisaties/mnr-n-v-oostende/a7.webp", alt: "Meetpunt voor het opvolgen van het vochtgehalte", bijschrift: "Meetpunt voor het vochtgehalte", thumb: "Meetpunt vochtgehalte" },
        { src: "/realisaties/mnr-n-v-oostende/a8.webp", alt: "Gecontroleerde droging van de binnenmuren", bijschrift: "Gecontroleerde droging van de binnenmuren", thumb: "Droging binnenmuren" },
        { src: "/realisaties/mnr-n-v-oostende/a9.webp", alt: "Bouwdroger centraal geplaatst voor maximaal rendement", bijschrift: "Bouwdroger centraal voor maximaal rendement", thumb: "Bouwdroger centraal" },
        { src: "/realisaties/mnr-n-v-oostende/a10.webp", alt: "Opvolging van het binnenklimaat tijdens de droging", bijschrift: "Opvolging van het binnenklimaat", thumb: "Klimaatopvolging" },
        { src: "/realisaties/mnr-n-v-oostende/a11.webp", alt: "Droogproces in de afgewerkte ruimte", bijschrift: "Droogproces in de ruimte", thumb: "Droogproces ruimte" },
        { src: "/realisaties/mnr-n-v-oostende/a12.webp", alt: "Ventilatie voor een egale droging van het pleisterwerk", bijschrift: "Ventilatie voor een egale droging", thumb: "Egale ventilatie" },
        { src: "/realisaties/mnr-n-v-oostende/a13.webp", alt: "Brede opname van de droogopstelling in de villa", bijschrift: "Brede opname van de droogopstelling", thumb: "Droogopstelling breed" },
        { src: "/realisaties/mnr-n-v-oostende/a14.webp", alt: "Detail van het drogende pleisteroppervlak", bijschrift: "Detail van het drogende pleisteroppervlak", thumb: "Detail pleisteroppervlak" },
        { src: "/realisaties/mnr-n-v-oostende/a15.webp", alt: "Klimaatherstel in de villawoning te Oostende", bijschrift: "Klimaatherstel in de villawoning", thumb: "Klimaatherstel" },
        { src: "/realisaties/mnr-n-v-oostende/a16.webp", alt: "Nazicht van de vochtwaarden na enkele dagen droging", bijschrift: "Nazicht van de vochtwaarden", thumb: "Nazicht vochtwaarden" },
        { src: "/realisaties/mnr-n-v-oostende/a17.webp", alt: "Droge, stabiele ondergrond klaar voor afwerking", bijschrift: "Droge ondergrond klaar voor afwerking", thumb: "Droge ondergrond" },
        { src: "/realisaties/mnr-n-v-oostende/a18.webp", alt: "Eindcontrole van het binnenklimaat in de villa", bijschrift: "Eindcontrole van het binnenklimaat", thumb: "Eindcontrole klimaat" },
        { src: "/realisaties/mnr-n-v-oostende/a19.webp", alt: "Afgewerkte ruimte na de bouwdroging", bijschrift: "Afgewerkte ruimte na de bouwdroging", thumb: "Afgewerkte ruimte" },
        { src: "/realisaties/mnr-n-v-oostende/a20.webp", alt: "Gezond, droog resultaat klaar voor bewoning", bijschrift: "Droog resultaat klaar voor bewoning", thumb: "Droog resultaat" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van bouwvocht naar een droge, gezonde basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snelheid zonder in te boeten op kwaliteit", tekst: "Met eigen droogapparatuur en Vernast-gecertificeerde vochtexperten brengen we het bouwvocht gecontroleerd omlaag. Zo verliest u geen weken wachttijd en start de afwerking op een ondergrond die écht droog is — geen risico op schimmel of terugkerende problemen achteraf." },
        { label: "Na de werken", kop: "Een stabiel binnenklimaat, klaar om af te werken", tekst: "Na vier dagen was het vochtgehalte in de villa te Oostende teruggebracht tot een stabiel, droog niveau. De schilder- en vloerafwerking kon meteen veilig doorgaan. Dit project toont hoe een correcte diagnose en gerichte bouwdroging de basis leggen voor een gezonde, comfortabele woning aan de kust." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elk pand is anders, bekijk hoe wij bouwvocht en vochtproblemen elders aanpakten.",
      slugs: ["mnr-erdem-bedrijfsgebouw", "mancave-brugge", "levis"],
    },
  },
  {
    slug: "mnr-l-hasselt",
    titel: "Pleister- en chapewerken versneld gedroogd",
    chip: "Bouwdroging · Hasselt",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Hasselt",
    lede: "Na het pleisteren en chapen zat er nog veel bouwvocht in de woning in Hasselt. Vernast Bouwdrogers bracht de luchtvochtigheid met professionele drogers en ventilatoren gecontroleerd omlaag en volgde het droogproces op met vochtmetingen, zodat de verdere afwerking zonder risico kon starten.",
    tags: ["Bouwdroging", "Bouwvocht", "Ventilatie"],
    hero: "/realisaties/mnr-l-hasselt/hero.webp",
    heroAlt: "Bouwdroger en ventilator aan het werk in de woning in Hasselt na de pleister- en chapewerken",
    kaart: "/realisaties/mnr-l-hasselt/hero.webp",
    kaartAlt: "Realisatie: Pleister- en chapewerken versneld gedroogd",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "na pleister & chape" },
      { label: "Diagnose", waarde: "Bouwvocht", detail: "verhoogde luchtvochtigheid" },
      { label: "Aanpak", waarde: "Drogers + ventilatie", detail: "gecontroleerd droogproces" },
      { label: "Opvolging", waarde: "Vochtmetingen", detail: "tot een veilig niveau" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "Veel bouwvocht na de ruwbouwafwerking",
      lead: "In deze woning in Hasselt waren de pleister- en chapewerken net afgerond. Verse pleisterlagen en een nieuwe chape brengen samen honderden liters water in het gebouw. Zolang dat bouwvocht in de muren en de vloeropbouw zit, blijft de luchtvochtigheid te hoog om veilig verder af te werken. Vernast Bouwdrogers werd ingeschakeld om dat vocht snel en gecontroleerd af te voeren.",
      problemen: [
        "Hoog vochtgehalte in de muren en de chape na het pleister- en chapewerk",
        "Verhoogde luchtvochtigheid die de verdere afwerking zou vertragen",
        "Risico op schimmel en vochtschade zonder gerichte droging",
        "Onvoldoende natuurlijke verluchting om het bouwvocht af te voeren",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met vochtmetingen op verschillende plaatsen brachten we het vochtgehalte in de woning in kaart. De oorzaak was duidelijk <b>bouwvocht</b>: het overtollige water uit het verse pleisterwerk en de chape verdampt traag en houdt de luchtvochtigheid kunstmatig hoog. Zonder een gestuurd droogproces zou de afwerking maanden vertraging oplopen en zou er risico ontstaan op schimmelvorming en vochtplekken.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Opstelling van de droogtechniek.</b> In de leefruimtes en de kamers onder het dak plaatsten we professionele condensdrogers die het vocht rechtstreeks uit de lucht onttrekken.",
            "<b>Luchtcirculatie op gang brengen.</b> Krachtige ventilatoren stuwden de vochtige lucht langs muren en chape, zodat het vocht gelijkmatig en tot in de hoeken werd afgevoerd in plaats van lokaal te blijven hangen.",
            "<b>Opvolging met vochtmetingen.</b> Tijdens het droogproces controleerden we de vochtwaarden aan de gevel en op de ondergrond, zodat de drogers pas werden weggehaald wanneer de woning een veilig, afwerkingsklaar niveau bereikte.",
            "<b>Klaar voor de verdere afwerking.</b> Met het bouwvocht weggewerkt kon de ploeg zonder risico verder met de afwerking: een droge, stabiele basis zonder kans op latere vochtproblemen.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Hasselt" },
      { label: "Type woning", waarde: "Woning in afwerkingsfase" },
      { label: "Probleem", waarde: "Bouwvocht na pleister & chape" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Aanpak", waarde: "Condensdrogers + ventilatoren" },
      { label: "Opvolging", waarde: "Vochtmetingen & klimaatcontrole" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de opgestelde drogers tot de controlemetingen: zo verliep de bouwdroging in Hasselt. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mnr-l-hasselt/a1.webp", alt: "Ruime leefruimte in Hasselt na de pleister- en chapewerken, klaar voor het droogproces", bijschrift: "Open leefruimte klaar voor het droogproces", thumb: "Leefruimte klaar" },
        { src: "/realisaties/mnr-l-hasselt/a2.webp", alt: "Bouwdroger en ventilator opgesteld naast de trappenhal", bijschrift: "Droger en ventilator aan het werk bij de trap", thumb: "Droger bij de trap" },
        { src: "/realisaties/mnr-l-hasselt/a3.webp", alt: "Krachtige ventilator stuwt de vochtige lucht door de gang in het ruwe metselwerk", bijschrift: "Ventilator stuwt de vochtige lucht door de gang", thumb: "Ventilatie in de gang" },
        { src: "/realisaties/mnr-l-hasselt/a4.webp", alt: "Condensdroger onttrekt bouwvocht in de kamer onder het dak", bijschrift: "Condensdroger in de kamer onder het dak", thumb: "Droger dakkamer" },
        { src: "/realisaties/mnr-l-hasselt/a5.webp", alt: "Condensdroger in werking tegen het bouwvocht in de gepleisterde muren", bijschrift: "Droger in werking tegen het bouwvocht in de muren", thumb: "Droger tegen bouwvocht" },
        { src: "/realisaties/mnr-l-hasselt/a6.webp", alt: "Droog- en meetopstelling in de slaapkamer op de bovenverdieping", bijschrift: "Droog- en meetopstelling op de bovenverdieping", thumb: "Droog- & meetopstelling" },
        { src: "/realisaties/mnr-l-hasselt/a7.webp", alt: "Zicht op de open verdieping met chapevloer tijdens de droogperiode", bijschrift: "De open verdieping tijdens de droogperiode", thumb: "Open verdieping" },
        { src: "/realisaties/mnr-l-hasselt/a8.webp", alt: "Dakkamer met dakvenster wordt gecontroleerd gedroogd", bijschrift: "Dakkamer met dakvenster in droging", thumb: "Dakkamer" },
        { src: "/realisaties/mnr-l-hasselt/a9.webp", alt: "Gelijkmatige droging tot in de hoeken van de dakkamer", bijschrift: "Gelijkmatige droging tot in de hoeken", thumb: "Droging tot in de hoeken" },
        { src: "/realisaties/mnr-l-hasselt/a10.webp", alt: "Vooraanzicht van de woning in Hasselt bij valavond", bijschrift: "De woning in Hasselt bij valavond", thumb: "Vooraanzicht woning" },
        { src: "/realisaties/mnr-l-hasselt/a11.webp", alt: "Vochtmeting aan de gevel om het vochtgehalte te bepalen", bijschrift: "Vochtmeting aan de gevel", thumb: "Vochtmeting gevel" },
        { src: "/realisaties/mnr-l-hasselt/a12.webp", alt: "Controlemeting op de ondergrond tijdens het droogproces", bijschrift: "Controlemeting op de ondergrond", thumb: "Controlemeting" },
        { src: "/realisaties/mnr-l-hasselt/a13.webp", alt: "Inkomhal en trap na afronding van de pleisterwerken", bijschrift: "Inkomhal en trap na de pleisterwerken", thumb: "Inkomhal & trap" },
        { src: "/realisaties/mnr-l-hasselt/a14.webp", alt: "Vernast Bouwdrogers is ook inzetbaar bij handels- en winkelpanden", bijschrift: "Bouwdroging, ook voor handelspanden", thumb: "Handelspanden" },
        { src: "/realisaties/mnr-l-hasselt/a15.webp", alt: "Woning met klassieke gevel binnen het werkgebied van Vernast", bijschrift: "Woning met klassieke gevel in ons werkgebied", thumb: "Klassieke gevel" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van bouwvocht naar een droge, afwerkingsklare woning",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel drogen zonder de afwerking te riskeren", tekst: "Wij versnellen het droogproces met de juiste combinatie van condensdrogers en ventilatie, en meten mee tot het vocht echt weg is. Uitgevoerd door ons eigen team van Vernast-experten, zodat u geen tijd verliest en niet twee keer voor hetzelfde probleem betaalt." },
        { label: "Na de werken", kop: "Klaar voor een gezonde afwerking", tekst: "Met het bouwvocht gecontroleerd afgevoerd en de vochtwaarden op een veilig niveau kan de woning zonder risico verder worden afgewerkt. Dit project toont hoe een gerichte bouwdroging het verschil maakt tussen maanden vertraging en een vlotte, gezonde oplevering." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elk pand is anders, bekijk hoe wij vocht elders bij de bron aanpakten.",
      slugs: ["mnr-n-v-oostende", "mnr-s-brussel", "mnr-w-antwerpen"],
    },
  },
  {
    slug: "mnr-k-putte",
    titel: "Bouwvocht gecontroleerd weggedroogd in een nieuwbouw",
    chip: "Bouwdroging · Putte",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Putte",
    lede: "Na de pleister- en chapewerken zat er nog volop bouwvocht in de nieuwbouw, met een sterk verhoogde luchtvochtigheid tot gevolg. Vernast bracht dat vocht met professionele bouwdrogers en ventilatoren snel en gecontroleerd naar een veilig niveau, zodat de afwerking zonder risico op schimmel of scheurvorming kon starten.",
    tags: ["Bouwdroging", "Vochtmeting", "Ventilatie"],
    hero: "/realisaties/mnr-k-putte/hero.webp",
    heroAlt: "De nieuwbouwwoning in Putte waar Vernast het bouwvocht wegdroogde",
    kaart: "/realisaties/mnr-k-putte/hero.webp",
    kaartAlt: "Realisatie: Bouwvocht gecontroleerd weggedroogd in een nieuwbouw",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ vochtcontrole" },
      { label: "Diagnose", waarde: "Bouwvocht", detail: "na pleister- en chapewerken" },
      { label: "Actieve droging", waarde: "3 dagen", detail: "bouwdrogers + ventilatoren" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "gecontroleerd naar streefwaarde" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst in Putte",
      lead: "In deze pas gebouwde woning in Putte waren de pleister- en chapewerken net afgerond. Zulke natte werken brengen honderden liters water in het gebouw, waardoor de luchtvochtigheid fors oploopt. Zonder tijdige aanpak dreigt dat bouwvocht schimmel, scheurvorming en vertraging in de verdere afwerking te veroorzaken.",
      problemen: [
        "Sterk verhoogde luchtvochtigheid door de pleister- en chapewerken",
        "Hoge vochtwaarden in de dekvloer, muren en plafonds",
        "Risico op schimmelvorming en scheuren bij te snel afwerken",
        "Een strakke bouwplanning die op een droge basis wachtte",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Bij aankomst voerde Vernast op verschillende plaatsen vochtmetingen uit: op de dekvloer, in de muren en tegen de plafonds. Die metingen bevestigden het beeld van klassiek <b>bouwvocht na natte werken</b>. Het gaat niet om een structureel vochtprobleem, maar om overtollig water dat het gebouw nog moet verlaten. De uitdaging is dat vocht snél én gecontroleerd af te voeren, zodat de woning geen schade oploopt en de planning niet in gevaar komt.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse en advies, dag 1.</b> Op basis van de vochtmetingen en het bouwvolume bepaalde Vernast de juiste combinatie en plaatsing van bouwdrogers en ventilatoren. Zo droogt elke ruimte gelijkmatig, zonder vochtnesten.",
            "<b>Actieve droging, 3 dagen.</b> Professionele bouwdrogers onttrekken het vocht aan de lucht, terwijl ventilatoren de lucht doorheen de woning in beweging houden. Het vochtgehalte in chape, muren en plafonds daalde zo snel en beheerst richting een veilig niveau.",
            "<b>Klimaatherstel, 4 dagen.</b> Nadien werd het binnenklimaat verder gestabiliseerd en opgevolgd met controlemetingen, tot de streefwaarden bereikt waren. Pas dan is de woning klaar om zonder risico af te werken.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Putte" },
      { label: "Type", waarde: "Nieuwbouwwoning" },
      { label: "Probleem", waarde: "Bouwvocht na natte werken" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Extra", waarde: "Vochtcontrole & ventilatie" },
      { label: "Actieve droging", waarde: "3 dagen" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vochtmetingen tot de draaiende bouwdrogers en het afgewerkte klimaat. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mnr-k-putte/a1.webp", alt: "De nieuwbouwwoning in Putte bij de start van de bouwdroging", bijschrift: "De nieuwbouwwoning in Putte bij de start van de bouwdroging", thumb: "Woning bij start" },
        { src: "/realisaties/mnr-k-putte/a2.webp", alt: "Bouwdrogers en ventilatoren opgesteld in de leegstaande leefruimte", bijschrift: "Bouwdrogers en ventilatoren opgesteld in de leegstaande leefruimte", thumb: "Bouwdrogers opgesteld" },
        { src: "/realisaties/mnr-k-putte/a3.webp", alt: "Ruwe chape en grote raampartij, klaar om te drogen", bijschrift: "Ruwe chape en grote raampartij, klaar om te drogen", thumb: "Ruwe chape" },
        { src: "/realisaties/mnr-k-putte/a4.webp", alt: "Vers pleisterwerk met een vochtrand tegen het plafond", bijschrift: "Vers pleisterwerk met een vochtrand tegen het plafond", thumb: "Vochtrand plafond" },
        { src: "/realisaties/mnr-k-putte/a5.webp", alt: "Vochtplekken in het pleisterwerk vlak na de natte werken", bijschrift: "Vochtplekken in het pleisterwerk vlak na de natte werken", thumb: "Vochtplekken pleister" },
        { src: "/realisaties/mnr-k-putte/a6.webp", alt: "De bouwdroger draait gecontroleerd door tijdens de avonduren", bijschrift: "De bouwdroger draait gecontroleerd door tijdens de avonduren", thumb: "Bouwdroger ’s avonds" },
        { src: "/realisaties/mnr-k-putte/a7.webp", alt: "Gepleisterde leefruimte, klaar voor het droogproces", bijschrift: "Gepleisterde leefruimte, klaar voor het droogproces", thumb: "Klaar voor droging" },
        { src: "/realisaties/mnr-k-putte/a8.webp", alt: "Vochtmeting op de muur met een sterk verhoogde beginwaarde", bijschrift: "Vochtmeting op de muur: sterk verhoogde beginwaarde", thumb: "Vochtmeting muur" },
        { src: "/realisaties/mnr-k-putte/a9.webp", alt: "Droogopstelling met bouwdroger en extra luchtcirculatie", bijschrift: "Droogopstelling met bouwdroger en extra luchtcirculatie", thumb: "Droogopstelling" },
        { src: "/realisaties/mnr-k-putte/a10.webp", alt: "Witte bouwdroger aan het werk in de open leefruimte", bijschrift: "Witte bouwdroger aan het werk in de open leefruimte", thumb: "Bouwdroger aan het werk" },
        { src: "/realisaties/mnr-k-putte/a11.webp", alt: "Vochtmeting van de chape aan de raamopening", bijschrift: "Vochtmeting van de chape aan de raamopening", thumb: "Vochtmeting chape" },
        { src: "/realisaties/mnr-k-putte/a12.webp", alt: "Controle van het vochtgehalte in de dekvloer", bijschrift: "Controle van het vochtgehalte in de dekvloer", thumb: "Controle dekvloer" },
        { src: "/realisaties/mnr-k-putte/a13.webp", alt: "Hoge vochtwaarde gemeten in een ruwbouwuitsparing", bijschrift: "Hoge vochtwaarde gemeten in een ruwbouwuitsparing", thumb: "Meting ruwbouw" },
        { src: "/realisaties/mnr-k-putte/a14.webp", alt: "Meting in de muuruitsparing die het resterende bouwvocht toont", bijschrift: "Meting in de muuruitsparing toont het resterende bouwvocht", thumb: "Muuruitsparing" },
        { src: "/realisaties/mnr-k-putte/a15.webp", alt: "Controle van het plafondvocht na enkele droogdagen", bijschrift: "Controle van het plafondvocht na enkele droogdagen", thumb: "Plafondvocht" },
        { src: "/realisaties/mnr-k-putte/a16.webp", alt: "Dalende vochtwaarde aan het plafond tijdens de droging", bijschrift: "Dalende vochtwaarde aan het plafond tijdens de droging", thumb: "Dalende vochtwaarde" },
        { src: "/realisaties/mnr-k-putte/a17.webp", alt: "Gepleisterde leefruimte met boograam, gereed voor afwerking", bijschrift: "Gepleisterde leefruimte met boograam, gereed voor afwerking", thumb: "Boograam leefruimte" },
        { src: "/realisaties/mnr-k-putte/a18.webp", alt: "De afgewerkte gevel van de nieuwbouw in Putte", bijschrift: "De afgewerkte gevel van de nieuwbouw in Putte", thumb: "Afgewerkte gevel" },
        { src: "/realisaties/mnr-k-putte/a19.webp", alt: "De achterzijde van de woning tijdens de laatste werfdagen", bijschrift: "De achterzijde van de woning tijdens de laatste werfdagen", thumb: "Achtergevel" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van vochtige ruwbouw naar een droge basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snelheid en controle in één aanpak", tekst: "Bouwdroging draait om timing. Wij combineren de juiste drogers en ventilatie met opvolging via vochtmetingen, uitgevoerd door ons eigen team van Vernast-gecertificeerde vochtexperten. Zo verliest u geen kostbare bouwweken en vermijdt u schade achteraf." },
        { label: "Na de werken", kop: "Klaar om zonder risico af te werken", tekst: "Met het bouwvocht teruggebracht tot de streefwaarden kon de woning in Putte veilig verder afgewerkt worden, zonder gevaar op schimmel of scheurvorming. Dit project toont hoe een tijdige, gecontroleerde droging de basis legt voor een duurzaam en gezond eindresultaat." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders — bekijk hoe wij gelijkaardige vochtproblemen elders aanpakten.",
      slugs: ["mnr-l-hasselt", "mnr-n-v-oostende", "mnr-s-brussel"],
    },
  },
  {
    slug: "mnr-j-bocholt",
    titel: "Waterschade drooggelegd en schimmel gesaneerd",
    chip: "Bouwdroging · Bocholt",
    soort: "waterschade",
    locatie: "Waterschade · Bocholt",
    lede: "In deze woning in Bocholt had binnengedrongen water muren en vloer verzadigd, met vochtplekken en beginnende schimmel als gevolg. Vernast zette snel professionele bouwdrogers in, saneerde de aangetaste zones en herstelde het binnenklimaat. Zo droogde de woning gecontroleerd uit en verdween het risico op blijvende schade.",
    tags: ["Schimmelsanering", "Bouwdroging", "Ventilatie"],
    hero: "/realisaties/mnr-j-bocholt/hero.webp",
    heroAlt: "Woning in Bocholt waar Vernast na waterschade het vocht met bouwdroging en schimmelsanering aanpakte",
    kaart: "/realisaties/mnr-j-bocholt/hero.webp",
    kaartAlt: "Realisatie: Waterschade drooggelegd en schimmel gesaneerd",
    facts: [
      { label: "Behandeling", waarde: "Schimmelsanering", detail: "+ professionele bouwdroging" },
      { label: "Analyse & oplossing", waarde: "24 uur", detail: "snelle interventie ter plaatse" },
      { label: "Schimmelsanering", waarde: "3 werkdagen", detail: "aangetaste zones behandeld" },
      { label: "Klimaatherstel", waarde: "4 werkdagen", detail: "gecontroleerd drogen & ventileren" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "Bij aankomst in Bocholt was de situatie duidelijk: binnengedrongen water had de muren en de vloer sterk verzadigd. Zonder snelle drooglegging dreigde het vocht dieper in de constructie te trekken, met schimmelvorming en muffe geuren tot gevolg. Om die schade te stoppen, moest het achtergebleven water snel en gericht uit de woning verdwijnen.",
      problemen: [
        "Binnengedrongen water had muren en vloer sterk verzadigd",
        "Vochtplekken en verkleuring op het aangetaste pleisterwerk",
        "Beginnende schimmelvorming door het achtergebleven vocht",
        "Een muf, ongezond binnenklimaat in de getroffen ruimtes",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met vochtmetingen op muren en vloer brachten we de omvang van de <b>waterschade</b> in kaart. De metingen bevestigden een sterk verhoogd vochtgehalte in het metselwerk en de ondergrond. De prioriteit lag daarom bij een snelle, gecontroleerde drooglegging: pas wanneer het vocht onder controle is, kan de schimmel duurzaam worden gesaneerd en het binnenklimaat hersteld.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Meteen na de vaststelling.</b> Binnen de dag plaatste Vernast professionele bouwdrogers en ventilatoren, zodat het achtergebleven water gericht en snel uit de woning werd onttrokken.",
            "<b>Constante monitoring.</b> Tijdens het drogen volgden we het vochtgehalte continu op. Zo bleef het drogingsproces beheersbaar en kon het team op tijd bijsturen waar nodig.",
            "<b>Schimmelsanering.</b> Zodra de vochtwaarden daalden, werden de aangetaste oppervlakken grondig gesaneerd en gereinigd, zodat schimmel en geurhinder geen kans meer kregen.",
            "<b>Klimaatherstel.</b> Met ventilatie en gecontroleerde droging werd het binnenklimaat hersteld tot een droge, gezonde basis waarop de herstellingswerken veilig konden starten.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Bocholt" },
      { label: "Type woning", waarde: "Woning" },
      { label: "Probleem", waarde: "Waterschade + schimmel" },
      { label: "Behandeling", waarde: "Bouwdroging + schimmelsanering" },
      { label: "Analyse & oplossing", waarde: "24 uur" },
      { label: "Schimmelsanering", waarde: "3 werkdagen" },
      { label: "Klimaatherstel", waarde: "4 werkdagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vaststelling van de waterschade tot de droge, gesaneerde woning in Bocholt. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mnr-j-bocholt/a1.webp", alt: "De woning in Bocholt bij aanvang van de droog- en saneringswerken", bijschrift: "De woning in Bocholt bij aanvang van de werken", thumb: "Bij aanvang" },
        { src: "/realisaties/mnr-j-bocholt/a2.webp", alt: "Waterschade zichtbaar op de aangetaste muur", bijschrift: "Waterschade zichtbaar op de aangetaste muur", thumb: "Waterschade muur" },
        { src: "/realisaties/mnr-j-bocholt/a3.webp", alt: "Vochtplekken en verkleuring op het pleisterwerk", bijschrift: "Vochtplekken en verkleuring op het pleisterwerk", thumb: "Vochtplekken" },
        { src: "/realisaties/mnr-j-bocholt/a4.webp", alt: "Beginnende schimmelvorming door het achtergebleven vocht", bijschrift: "Schimmelvorming door het achtergebleven vocht", thumb: "Schimmelvorming" },
        { src: "/realisaties/mnr-j-bocholt/a5.webp", alt: "Vochtmeting in het aangetaste metselwerk", bijschrift: "Vochtmeting in het aangetaste metselwerk", thumb: "Vochtmeting" },
        { src: "/realisaties/mnr-j-bocholt/a6.webp", alt: "Inspectie van de vochtschade aan de vloer", bijschrift: "Inspectie van de vochtschade aan de vloer", thumb: "Vloerinspectie" },
        { src: "/realisaties/mnr-j-bocholt/a7.webp", alt: "Loskomend materiaal door het binnengedrongen water", bijschrift: "Loskomend materiaal door het binnengedrongen water", thumb: "Loskomend materiaal" },
        { src: "/realisaties/mnr-j-bocholt/a8.webp", alt: "Aangetaste zone afgebakend voor behandeling", bijschrift: "Aangetaste zone afgebakend voor behandeling", thumb: "Zone afgebakend" },
        { src: "/realisaties/mnr-j-bocholt/a9.webp", alt: "Voorbereiding van de ruimte voor de bouwdroging", bijschrift: "Voorbereiding van de ruimte voor de bouwdroging", thumb: "Voorbereiding" },
        { src: "/realisaties/mnr-j-bocholt/a10.webp", alt: "Professionele bouwdrogers geplaatst in de woning", bijschrift: "Professionele bouwdrogers geplaatst in de woning", thumb: "Bouwdrogers geplaatst" },
        { src: "/realisaties/mnr-j-bocholt/a11.webp", alt: "Ventilatoren zorgen voor een constante luchtcirculatie", bijschrift: "Ventilatoren zorgen voor een constante luchtcirculatie", thumb: "Luchtcirculatie" },
        { src: "/realisaties/mnr-j-bocholt/a12.webp", alt: "Het drogingsproces in volle gang", bijschrift: "Het drogingsproces in volle gang", thumb: "Droging in gang" },
        { src: "/realisaties/mnr-j-bocholt/a13.webp", alt: "Opvolging van het vochtgehalte tijdens het drogen", bijschrift: "Opvolging van het vochtgehalte tijdens het drogen", thumb: "Vochtopvolging" },
        { src: "/realisaties/mnr-j-bocholt/a14.webp", alt: "Behandeling van de schimmel op de muren", bijschrift: "Behandeling van de schimmel op de muren", thumb: "Schimmelbehandeling" },
        { src: "/realisaties/mnr-j-bocholt/a15.webp", alt: "Schimmelsanering van het aangetaste oppervlak", bijschrift: "Schimmelsanering van het aangetaste oppervlak", thumb: "Sanering oppervlak" },
        { src: "/realisaties/mnr-j-bocholt/a16.webp", alt: "Grondige reiniging na de saneringswerken", bijschrift: "Grondige reiniging na de saneringswerken", thumb: "Reiniging" },
        { src: "/realisaties/mnr-j-bocholt/a17.webp", alt: "Behandelde zone klaar voor verder herstel", bijschrift: "Behandelde zone klaar voor verder herstel", thumb: "Klaar voor herstel" },
        { src: "/realisaties/mnr-j-bocholt/a18.webp", alt: "Controle van de behandelde muurdelen", bijschrift: "Controle van de behandelde muurdelen", thumb: "Controle muren" },
        { src: "/realisaties/mnr-j-bocholt/a19.webp", alt: "Meting bevestigt de dalende vochtwaarden", bijschrift: "Meting bevestigt de dalende vochtwaarden", thumb: "Dalende waarden" },
        { src: "/realisaties/mnr-j-bocholt/a20.webp", alt: "Klimaatherstel met gecontroleerde droging", bijschrift: "Klimaatherstel met gecontroleerde droging", thumb: "Klimaatherstel" },
        { src: "/realisaties/mnr-j-bocholt/a21.webp", alt: "De ruimte stabiliseert na de interventie", bijschrift: "De ruimte stabiliseert na de interventie", thumb: "Ruimte stabiliseert" },
        { src: "/realisaties/mnr-j-bocholt/a22.webp", alt: "Detail van het herstelde muuroppervlak", bijschrift: "Detail van het herstelde muuroppervlak", thumb: "Hersteld oppervlak" },
        { src: "/realisaties/mnr-j-bocholt/a23.webp", alt: "Aangepakte hoek zonder vocht of schimmel", bijschrift: "Aangepakte hoek zonder vocht of schimmel", thumb: "Hoek aangepakt" },
        { src: "/realisaties/mnr-j-bocholt/a24.webp", alt: "Droge, gezonde basis na de werken", bijschrift: "Droge, gezonde basis na de werken", thumb: "Droge basis" },
        { src: "/realisaties/mnr-j-bocholt/a25.webp", alt: "Overzicht van de behandelde ruimte", bijschrift: "Overzicht van de behandelde ruimte", thumb: "Overzicht ruimte" },
        { src: "/realisaties/mnr-j-bocholt/a26.webp", alt: "Bijkomende zone in de woning behandeld", bijschrift: "Bijkomende zone in de woning behandeld", thumb: "Bijkomende zone" },
        { src: "/realisaties/mnr-j-bocholt/a27.webp", alt: "Nazicht van de vloer na de droging", bijschrift: "Nazicht van de vloer na de droging", thumb: "Nazicht vloer" },
        { src: "/realisaties/mnr-j-bocholt/a28.webp", alt: "Resultaat van de schimmelsanering in beeld", bijschrift: "Resultaat van de schimmelsanering in beeld", thumb: "Resultaat sanering" },
        { src: "/realisaties/mnr-j-bocholt/a29.webp", alt: "Afgewerkte muur klaar voor verdere afwerking", bijschrift: "Afgewerkte muur klaar voor verdere afwerking", thumb: "Klaar voor afwerking" },
        { src: "/realisaties/mnr-j-bocholt/a30.webp", alt: "De woning opnieuw droog en veilig in gebruik", bijschrift: "De woning opnieuw droog en veilig in gebruik", thumb: "Opnieuw veilig" },
        { src: "/realisaties/mnr-j-bocholt/a31.webp", alt: "Eindcontrole van het binnenklimaat", bijschrift: "Eindcontrole van het binnenklimaat", thumb: "Eindcontrole" },
        { src: "/realisaties/mnr-j-bocholt/a32.webp", alt: "Detailopname van het gezonde eindresultaat", bijschrift: "Detailopname van het gezonde eindresultaat", thumb: "Eindresultaat" },
        { src: "/realisaties/mnr-j-bocholt/a33.webp", alt: "Opgeleverde ruimte na de vochtaanpak in Bocholt", bijschrift: "Opgeleverde ruimte na de vochtaanpak in Bocholt", thumb: "Opgeleverd" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van waterschade naar een droge, gezonde basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel ter plaatse, oorzaak én gevolg aangepakt", tekst: "Bij waterschade telt elk uur. Ons eigen team van Vernast-gecertificeerde vochtexperten stond snel op locatie in Bocholt, legde het vocht gecontroleerd droog en saneerde meteen de aangetaste zones. Zo blijft het niet bij symptoombestrijding en betaalt u nooit twee keer voor hetzelfde probleem." },
        { label: "Na de werken", kop: "Klaar voor een gezond eindresultaat", tekst: "Met het vocht onttrokken, de schimmel gesaneerd en het binnenklimaat hersteld, kon de woning veilig verder herstellen. Dit project toont hoe een snelle interventie en een grondige aanpak de basis leggen voor een blijvend droge en gezonde leefomgeving." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders, bekijk hoe wij gelijkaardige vochtproblemen elders aanpakten.",
      slugs: ["mnr-k-putte", "mnr-l-hasselt", "mnr-n-v-oostende"],
    },
  },
  {
    slug: "mnr-erdem-bedrijfsgebouw",
    titel: "Waterschade in een bedrijfsgebouw professioneel gedroogd",
    chip: "Bouwdroging · bedrijfsgebouw",
    soort: "waterschade",
    locatie: "Waterschade · bedrijfsgebouw",
    lede: "Na een waterlek liep het bedrijfsgebouw van mnr. Erdem stevige waterschade op in muren en vloerconstructies. Vernast zette onmiddellijk professionele bouwdrogers en ventilatoren in om het vocht gecontroleerd af te voeren. Dankzij de snelle interventie werd schimmelvorming voorkomen en kon het pand in korte tijd opnieuw veilig in gebruik worden genomen.",
    tags: ["Bouwdroging", "Schimmelsanering", "Ventilatie"],
    hero: "/realisaties/mnr-erdem-bedrijfsgebouw/hero.webp",
    heroAlt: "Bedrijfsgebouw van mnr. Erdem waar Vernast de waterschade droogde en saneerde",
    kaart: "/realisaties/mnr-erdem-bedrijfsgebouw/hero.webp",
    kaartAlt: "Realisatie: Waterschade in een bedrijfsgebouw professioneel gedroogd",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ schimmelsanering" },
      { label: "Analyse & oplossing", waarde: "24 u", detail: "diagnose en droogplan" },
      { label: "Schimmelsanering", waarde: "3 dagen", detail: "preventief behandeld" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "gecontroleerd drogen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "In dit bedrijfsgebouw telde elke dag: een waterlek had zich onopgemerkt verspreid en het water was diep in de muren en vloerconstructies getrokken. De ondernemer stond voor een dringende keuze — snel en gericht ingrijpen, of het risico lopen op langdurige stilstand, schimmel en blijvende structurele schade.",
      problemen: [
        "Ernstige waterschade na een lek, verspreid over muren en vloeren",
        "Sterk verhoogde vochtwaarden in metselwerk en vloerconstructie",
        "Acuut risico op schimmelvorming en een muffe geur in het pand",
        "Dreigende stilstand van de bedrijfsactiviteit zolang de ruimte nat bleef",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Bij aankomst brachten onze technici met vochtmetingen op verschillende hoogtes en dieptes de omvang van de schade in kaart. Het beeld was duidelijk: <b>een acute waterinsijpeling na een lek</b>, geen structureel opstijgend vocht. Het overtollige water zat opgesloten in de muren en de vloeropbouw. Zonder snelle, gecontroleerde droging zou dat vocht schimmel voeden en de constructie verder aantasten — daarom moest de droogopstelling nog dezelfde dag draaien.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse en droogplan, binnen 24 uur.</b> Op basis van de vochtmetingen stelden we een gericht droogplan op en plaatsten we de eerste bouwdrogers en ventilatoren op de zwaarst getroffen zones.",
            "<b>Gecontroleerde droging met monitoring.</b> De bouwdrogers voerden het vocht uit muren en vloeren gecontroleerd af, terwijl ventilatoren de vochtige lucht in beweging hielden. Met terugkerende klimaat- en vochtmetingen volgden we het droogverloop nauwgezet op.",
            "<b>Preventieve schimmelsanering.</b> Op de risicozones voerden we een gerichte behandeling uit zodat schimmel geen kans kreeg om zich te ontwikkelen tijdens het drogen.",
            "<b>Klimaatherstel en oplevering.</b> Zodra het vochtgehalte terug op een veilig niveau stond, werd het binnenklimaat gestabiliseerd en kon de bedrijfsactiviteit zonder blijvende schade hervat worden in een droge, gezonde werkomgeving.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Bedrijfsgebouw" },
      { label: "Type", waarde: "Commercieel pand" },
      { label: "Probleem", waarde: "Waterschade na lek" },
      { label: "Behandeling", waarde: "Bouwdroging + schimmelsanering" },
      { label: "Extra", waarde: "Ventilatie & monitoring" },
      { label: "Analyse & oplossing", waarde: "24 uur" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vaststelling van de waterschade tot de draaiende droogopstelling. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a1.webp", alt: "Het bedrijfsgebouw met waterschade bij aanvang van de werken", bijschrift: "Het bedrijfsgebouw bij aanvang van de werken", thumb: "Bij aanvang" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a2.webp", alt: "Vochtsporen op de muur na het waterlek in het bedrijfspand", bijschrift: "Vochtsporen op de muur na het lek", thumb: "Vochtsporen op de muur" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a3.webp", alt: "Doorgeslagen vocht in het metselwerk van het bedrijfsgebouw", bijschrift: "Doorgeslagen vocht in het metselwerk", thumb: "Doorgeslagen vocht" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a4.webp", alt: "Overzicht van de getroffen ruimte voor de droging", bijschrift: "Overzicht van de getroffen ruimte", thumb: "Getroffen ruimte" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a5.webp", alt: "Vochtmeting op de muur om de omvang van de schade te bepalen", bijschrift: "Vochtmeting om de schade in kaart te brengen", thumb: "Vochtmeting" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a6.webp", alt: "Getroffen vloerconstructie klaar voor de droogopstelling", bijschrift: "Vloerconstructie klaar voor de droging", thumb: "Vloerconstructie" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a7.webp", alt: "Bouwdrogers opgesteld in het bedrijfsgebouw", bijschrift: "Bouwdrogers opgesteld in de ruimte", thumb: "Bouwdrogers opgesteld" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a8.webp", alt: "Ventilator die de vochtige lucht in beweging houdt tijdens de droging", bijschrift: "Ventilator houdt de vochtige lucht in beweging", thumb: "Ventilator in werking" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a9.webp", alt: "Droogtoestellen gericht op de zwaarst getroffen muurzone", bijschrift: "Droogtoestellen op de zwaarst getroffen zone", thumb: "Droogtoestellen" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a10.webp", alt: "Opstelling van bouwdrogers en ventilatie langs de wand", bijschrift: "Droog- en ventilatieopstelling langs de wand", thumb: "Opstelling langs de wand" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a11.webp", alt: "Controle van het droogverloop met een klimaatmeting", bijschrift: "Controle van het droogverloop", thumb: "Droogverloop gecontroleerd" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a12.webp", alt: "De ruimte tijdens het gecontroleerd drogen", bijschrift: "De ruimte tijdens het gecontroleerd drogen", thumb: "Gecontroleerd drogen" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a13.webp", alt: "Zicht op het bedrijfsgebouw met de droogopstelling in werking", bijschrift: "Droogopstelling in werking in het pand", thumb: "Droogopstelling in werking" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a14.webp", alt: "Nameting van het vochtgehalte na enkele dagen drogen", bijschrift: "Nameting van het vochtgehalte", thumb: "Nameting vochtgehalte" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a15.webp", alt: "Gedroogde muur na de behandeling in het bedrijfsgebouw", bijschrift: "Gedroogde muur na de behandeling", thumb: "Gedroogde muur" },
        { src: "/realisaties/mnr-erdem-bedrijfsgebouw/a16.webp", alt: "Het herstelde bedrijfspand, opnieuw klaar voor gebruik", bijschrift: "Het pand opnieuw klaar voor gebruik", thumb: "Klaar voor gebruik" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van waterschade naar een droog en veilig pand",
      kolommen: [
        { label: "Waarom bedrijven voor ons kiezen", kop: "Snel ter plaatse, minimale stilstand", tekst: "Bij waterschade in een bedrijfspand telt elke dag. Ons eigen team van Vernast-vochtexperten stelt binnen 24 uur een droogplan op en zet meteen professionele bouwdrogers en ventilatie in. Zo blijft de stilstand beperkt en voorkomen we dat schimmel en gevolgschade zich kunnen ontwikkelen." },
        { label: "Na de werken", kop: "Droog, gezond en weer in gebruik", tekst: "Met het vocht gecontroleerd afgevoerd en het binnenklimaat gestabiliseerd, kon het bedrijfsgebouw zonder blijvende schade opnieuw in gebruik worden genomen. Dit project toont hoe een snelle interventie met de juiste droog- en ventilatietechniek een acuut waterincident indamt voor het uitgroeit tot een structureel vochtprobleem." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elk pand is anders — bekijk hoe wij vocht- en waterschade elders aanpakten.",
      slugs: ["bang-olufsen", "mnr-j-bocholt", "mnr-l-hasselt"],
    },
  },
  {
    slug: "mevr-k-wintam",
    titel: "Bouwvocht snel en veilig weggedroogd",
    chip: "Bouwdroging · Wintam",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Wintam",
    lede: "Na de pleister- en chapewerken zat er in deze woning te Wintam veel bouwvocht in muren en vloeren. Vernast zette professionele bouwdrogers en ventilatoren in en volgde het droogproces op met vochtmetingen, zodat de woning gecontroleerd en zonder vertraging droog kwam voor de verdere afwerking.",
    tags: ["Bouwdroging", "Vochtmeting", "Ventilatie"],
    hero: "/realisaties/mevr-k-wintam/hero.webp",
    heroAlt: "De woning in Wintam waar Vernast het bouwvocht gecontroleerd liet drogen",
    kaart: "/realisaties/mevr-k-wintam/hero.webp",
    kaartAlt: "Realisatie: Bouwvocht snel en veilig weggedroogd",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ mechanische ventilatie" },
      { label: "Diagnose", waarde: "Bouwvocht", detail: "na pleister- en chapewerken" },
      { label: "Analyse & vochtmeting", waarde: "24 uur", detail: "meting op meerdere plaatsen" },
      { label: "Klimaatherstel", waarde: "4 werkdagen", detail: "gecontroleerd drogen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "De woning in Wintam was net voorzien van nieuw pleisterwerk en een verse chape. Die natte werken brengen samen honderden liters water in het gebouw, wat de luchtvochtigheid fors doet oplopen. Zonder gerichte aanpak zou dat bouwvocht wekenlang in de constructie blijven zitten, met risico op condens, schimmel en vertraging in de planning.",
      problemen: [
        "Sterk verhoogde luchtvochtigheid na de pleister- en chapewerken",
        "Hoge vochtwaarden in de verse chape en het pleisterwerk",
        "Kans op condens en schimmel zolang het vocht niet wordt afgevoerd",
        "Dreigende vertraging voor het plaatsen van vloeren en afwerking",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met een vochtmeter controleerden we de vochtwaarden op verschillende plaatsen: in de chape lazen we nog hoge waarden af en het verse pleisterwerk gaf pieken tot boven de 80. Het beeld was duidelijk: dit is <b>bouwvocht na natte werken</b>, geen structureel vochtprobleem. De constructie moet dat overtollige water gewoon gecontroleerd kunnen afgeven vooraleer de afwerking start.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Opstelling van de droogunits.</b> In elke ruimte plaatste Vernast krachtige condens-bouwdrogers, aangevuld met ventilatoren die de vochtige lucht in beweging houden en over alle oppervlakken sturen.",
            "<b>Gecontroleerd drogen.</b> De bouwdrogers onttrekken het water continu aan de lucht, terwijl de ventilatoren de droging in muren, chape en onder het dak versnellen. Zo daalt de luchtvochtigheid gelijkmatig, zonder scheurvorming door te snel opdrogen.",
            "<b>Opvolging met vochtmetingen.</b> Tijdens de vier dagen klimaatherstel volgden we de vochtwaarden op tot een stabiel, veilig niveau bereikt was in de hele woning.",
            "<b>Klaar voor afwerking.</b> Met het bouwvocht weggewerkt kon de verdere afwerking zonder uitstel doorgaan, en werd het risico op latere condens- en schimmelproblemen uitgesloten.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Wintam" },
      { label: "Type", waarde: "Woning in afwerkingsfase" },
      { label: "Probleem", waarde: "Bouwvocht na natte werken" },
      { label: "Behandeling", waarde: "Bouwdroging + ventilatie" },
      { label: "Analyse & vochtmeting", waarde: "24 uur" },
      { label: "Klimaatherstel", waarde: "4 werkdagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vochtmetingen tot de volledige droogopstelling met bouwdrogers en ventilatoren. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mevr-k-wintam/a1.webp", alt: "Bouwdroger en ventilator opgesteld in de leefruimte met zicht op de tuin", bijschrift: "Bouwdrogers en ventilatoren opgesteld in de leefruimte", thumb: "Droogopstelling leefruimte" },
        { src: "/realisaties/mevr-k-wintam/a2.webp", alt: "Ventilator aan het werk onder het hellende dak met isolatiefolie", bijschrift: "Ventilator aan het werk onder het hellende dak", thumb: "Ventilator onder het dak" },
        { src: "/realisaties/mevr-k-wintam/a3.webp", alt: "Materiaal klaargezet in de pas afgewerkte ruwbouw in Wintam", bijschrift: "Materiaal klaargezet in de pas afgewerkte ruwbouw", thumb: "Ruwbouw klaar" },
        { src: "/realisaties/mevr-k-wintam/a4.webp", alt: "Afgewerkte binnenmuur rond de bakstenen schouwpartij", bijschrift: "Afgewerkte binnenmuur rond de schouwpartij", thumb: "Muur rond de schouw" },
        { src: "/realisaties/mevr-k-wintam/a5.webp", alt: "Bouwdroger opgesteld in de centrale gang van de woning", bijschrift: "Bouwdroger opgesteld in de centrale gang", thumb: "Bouwdroger in de gang" },
        { src: "/realisaties/mevr-k-wintam/a6.webp", alt: "Vochtmeting van de chape met een digitale vochtmeter", bijschrift: "Vochtmeting van de chape na het uitharden", thumb: "Vochtmeting chape" },
        { src: "/realisaties/mevr-k-wintam/a7.webp", alt: "Vochtmeter toont een hoge waarde op het verse pleisterwerk", bijschrift: "Vochtmeting van het verse pleisterwerk", thumb: "Vochtmeting pleister" },
        { src: "/realisaties/mevr-k-wintam/a8.webp", alt: "Krachtige condens-bouwdroger tegen de drogende muur", bijschrift: "Krachtige condensdroger tegen de drogende muur", thumb: "Condensdroger" },
        { src: "/realisaties/mevr-k-wintam/a9.webp", alt: "Droging van de woonkamer met bouwdroger en zicht op de tuin", bijschrift: "Droging van de woonkamer met zicht op de tuin", thumb: "Woonkamer drogen" },
        { src: "/realisaties/mevr-k-wintam/a10.webp", alt: "Bouwdroger onderaan de traphal in de woning", bijschrift: "Bouwdroger onderaan de traphal", thumb: "Traphal" },
        { src: "/realisaties/mevr-k-wintam/a11.webp", alt: "Condensdroger en ladder in de te drogen kamer", bijschrift: "Condensdroger opgesteld in de te drogen kamer", thumb: "Kamer drogen" },
        { src: "/realisaties/mevr-k-wintam/a12.webp", alt: "Ventilator zorgt voor luchtbeweging onder het dak", bijschrift: "Luchtbeweging onder het dak met een ventilator", thumb: "Ventilatie onder dak" },
        { src: "/realisaties/mevr-k-wintam/a13.webp", alt: "Continue ontvochtiging van de woonkamer met een bouwdroger", bijschrift: "Continue ontvochtiging in de woonkamer", thumb: "Woonkamer ontvochtigen" },
        { src: "/realisaties/mevr-k-wintam/a14.webp", alt: "Ventilator zorgt voor luchtcirculatie tussen de vertrekken", bijschrift: "Luchtcirculatie tussen de vertrekken", thumb: "Luchtcirculatie" },
        { src: "/realisaties/mevr-k-wintam/a15.webp", alt: "Bouwdroger die het verse pleisterwerk ontvochtigt", bijschrift: "Ontvochtiging van het verse pleisterwerk", thumb: "Vers pleisterwerk" },
        { src: "/realisaties/mevr-k-wintam/a16.webp", alt: "Zicht op de woning in Wintam vanaf de oprit", bijschrift: "Zicht op de woning in Wintam", thumb: "Woning in Wintam" },
        { src: "/realisaties/mevr-k-wintam/a17.webp", alt: "De afgewerkte bakstenen gevel van de woning in Wintam", bijschrift: "De afgewerkte gevel van de woning in Wintam", thumb: "Afgewerkte gevel" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van verzadigde ruwbouw naar een droge, stabiele woning",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snelheid zonder de constructie te forceren", tekst: "Met professioneel drogingsmateriaal en de juiste opvolging krijgen we bouwvocht snel weg, maar altijd gecontroleerd. Zo vermijdt u vertraging in de planning én scheurvorming of schimmel door te bruusk of te traag drogen — uitgevoerd door ons eigen team van Vernast-experten." },
        { label: "Na de werken", kop: "Klaar voor de verdere afwerking", tekst: "Bij oplevering waren muren, chape en dakruimte teruggebracht naar een stabiel vochtniveau, bevestigd met vochtmetingen. De woning in Wintam kon meteen verder afgewerkt worden, met een gezond binnenklimaat als vertrekpunt." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders — bekijk hoe wij gelijkaardige vocht- en klimaatproblemen elders aanpakten.",
      slugs: ["mevr-v-mechelen", "mevr-v-brussel", "mnr-erdem-bedrijfsgebouw"],
    },
  },
  {
    slug: "mevr-j-j-kontich",
    titel: "Bouwvocht drooggelegd in een nieuwbouwwoning",
    chip: "Bouwdroging · Kontich",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Kontich",
    lede: "In deze nieuwbouwwoning in Kontich zorgden verse pleister- en chapewerken voor een sterk verhoogde luchtvochtigheid. Vernast bracht het bouwvocht snel en gecontroleerd omlaag met professionele bouwdrogers en ventilatie, aangevuld met een schimmelsanering, zodat de afwerking zonder risico kon starten.",
    tags: ["Bouwdroging", "Schimmelsanering", "Ventilatie"],
    hero: "/realisaties/mevr-j-j-kontich/hero.webp",
    heroAlt: "Nieuwbouwwoning in Kontich waar Vernast het bouwvocht droogde",
    kaart: "/realisaties/mevr-j-j-kontich/hero.webp",
    kaartAlt: "Realisatie: Bouwvocht drooggelegd in een nieuwbouwwoning",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ schimmelsanering" },
      { label: "Analyse & oplossing", waarde: "24 u", detail: "meting en droogplan" },
      { label: "Schimmelsanering", waarde: "3 dagen", detail: "aangetaste zones behandeld" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "drogen tot veilig niveau" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie na de ruwbouw",
      lead: "Toen de ruwbouw in Kontich klaar was, zat er nog volop bouwvocht in de woning. Vers pleisterwerk en een pas gegoten chape geven maandenlang vocht af, en zolang de ventilatie beperkt is, blijft dat vocht in de lucht hangen. Het gevolg is een hoge luchtvochtigheid die de verdere afwerking vertraagt en het risico op schimmel doet toenemen.",
      problemen: [
        "Sterk verhoogde luchtvochtigheid door vers pleister- en chapewerk",
        "Trage natuurlijke droging door nog beperkte ventilatie",
        "Verhoogd risico op schimmelvorming vóór de afwerking",
        "Vochtige chape die het plaatsen van vloeren zou uitstellen",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Bij aankomst brachten we het binnenklimaat in kaart met metingen van de luchtvochtigheid en het vochtgehalte in de chape, op verschillende plaatsen in de woning. Het beeld was duidelijk: geen structureel vochtprobleem, maar <b>bouwvocht</b> dat nog moest uittreden. Zonder gerichte droging duurt dat proces te lang en krijgt schimmel de kans om zich te nestelen. De oplossing lag dus in een gecontroleerd droog- en ventilatieplan.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse en droogplan.</b> Binnen 24 uur legden we de meetwaarden vast en stelden we een droogplan op met de juiste plaatsing van bouwdrogers en ventilatoren per ruimte.",
            "<b>Schimmelsanering, 3 dagen.</b> De zones waar zich al schimmel begon te vormen, werden grondig behandeld zodat de woning met een schone basis kon verder drogen.",
            "<b>Bouwdroging en ventilatie.</b> Met professionele bouwdrogers en ventilatoren werd de vochtige lucht continu afgevoerd en het vochtgehalte gestaag teruggebracht naar een veilig niveau.",
            "<b>Klimaatherstel, 4 dagen.</b> Tijdens de droogperiode volgden we de luchtvochtigheid op tot de woning droog en stabiel was — klaar voor een afwerking zonder risico op vochtproblemen.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Kontich" },
      { label: "Type", waarde: "Nieuwbouwwoning" },
      { label: "Probleem", waarde: "Bouwvocht + schimmelrisico" },
      { label: "Behandeling", waarde: "Bouwdroging + schimmelsanering" },
      { label: "Analyse & oplossing", waarde: "24 u" },
      { label: "Schimmelsanering", waarde: "3 dagen" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de vochtige ruwbouw en de metingen tot de drogende leefruimtes. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mevr-j-j-kontich/a1.webp", alt: "Ruwe leefruimte in Kontich met verse chape en pleisterwerk", bijschrift: "Ruwe leefruimte met verse chape, klaar om te drogen", thumb: "Leefruimte in ruwbouw" },
        { src: "/realisaties/mevr-j-j-kontich/a2.webp", alt: "Verdieping onder het hellend dak na de pleisterwerken", bijschrift: "Verdieping onder het hellend dak na de pleisterwerken", thumb: "Verdieping onder het dak" },
        { src: "/realisaties/mevr-j-j-kontich/a3.webp", alt: "Kamer onder het dak met dakvenster in de nieuwbouwwoning", bijschrift: "Kamer onder het dak met dakvenster", thumb: "Kamer met dakvenster" },
        { src: "/realisaties/mevr-j-j-kontich/a4.webp", alt: "Vochtmeting van de lucht met de hygrometer", bijschrift: "Vochtmeting van de lucht met de hygrometer", thumb: "Vochtmeting lucht" },
        { src: "/realisaties/mevr-j-j-kontich/a5.webp", alt: "Blootliggende dakisolatie tijdens de ruwbouwfase", bijschrift: "Blootliggende dakisolatie tijdens de ruwbouwfase", thumb: "Blootliggende dakisolatie" },
        { src: "/realisaties/mevr-j-j-kontich/a6.webp", alt: "Lichte kamer met vers pleisterwerk en drogende chape", bijschrift: "Lichte kamer met vers pleisterwerk en drogende chape", thumb: "Kamer met pleisterwerk" },
        { src: "/realisaties/mevr-j-j-kontich/a7.webp", alt: "Ventilatiekanalen in de centrale hal van de woning", bijschrift: "Ventilatiekanalen in de centrale hal", thumb: "Ventilatiekanalen in de hal" },
        { src: "/realisaties/mevr-j-j-kontich/a8.webp", alt: "Technische ruimte met ventilatie-aansluiting", bijschrift: "Technische ruimte met ventilatie-aansluiting", thumb: "Technische ruimte" },
        { src: "/realisaties/mevr-j-j-kontich/a9.webp", alt: "Ruwbouwdetail met betonnen element in de kamer", bijschrift: "Ruwbouwdetail met betonnen element", thumb: "Ruwbouwdetail" },
        { src: "/realisaties/mevr-j-j-kontich/a10.webp", alt: "Controle van het vochtgehalte in de ruimte", bijschrift: "Controle van het vochtgehalte in de ruimte", thumb: "Controle vochtgehalte" },
        { src: "/realisaties/mevr-j-j-kontich/a11.webp", alt: "Leefruimte met zichtbare dakspanten en grote raampartij", bijschrift: "Leefruimte met zichtbare dakspanten en grote raampartij", thumb: "Leefruimte met dakspanten" },
        { src: "/realisaties/mevr-j-j-kontich/a12.webp", alt: "Doorgang naar de aangrenzende kamer tijdens het drogen", bijschrift: "Doorgang naar de aangrenzende kamer", thumb: "Doorgang tussen kamers" },
        { src: "/realisaties/mevr-j-j-kontich/a13.webp", alt: "De nieuwbouwwoning in Kontich van buiten tijdens de werken", bijschrift: "De woning van buiten tijdens de werken", thumb: "Woning van buiten" },
        { src: "/realisaties/mevr-j-j-kontich/a14.webp", alt: "Vooraanzicht van de nieuwbouwwoning in Kontich", bijschrift: "Vooraanzicht van de woning in Kontich", thumb: "Vooraanzicht woning" },
        { src: "/realisaties/mevr-j-j-kontich/a15.webp", alt: "Zijgevel van de woning bij valavond", bijschrift: "Zijgevel van de woning bij valavond", thumb: "Zijgevel bij valavond" },
        { src: "/realisaties/mevr-j-j-kontich/a16.webp", alt: "Afgewerkte woning bij zonsondergang", bijschrift: "De woning bij zonsondergang na de werken", thumb: "Woning na de werken" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van vochtige ruwbouw naar een droge, gezonde basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel droog, zonder bouwvertraging", tekst: "Met een gericht droog- en ventilatieplan brengen we het bouwvocht veel sneller omlaag dan bij natuurlijke droging. Zo blijft de planning van uw afwerking op schema en voorkomt u schimmel nog vóór die kan ontstaan — uitgevoerd door ons eigen team van Vernast-gecertificeerde vochtexperten." },
        { label: "Na de werken", kop: "Klaar voor een gezonde afwerking", tekst: "Met het bouwvocht op een veilig niveau en de aangetaste zones gesaneerd, kan de woning in Kontich zonder zorgen verder afgewerkt worden. Dit project toont hoe tijdige metingen en gerichte bouwdroging de basis leggen voor een blijvend droog en gezond binnenklimaat." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders — bekijk hoe wij gelijkaardige vocht- en schimmelproblemen elders aanpakten.",
      slugs: ["mevr-k-wintam", "mevr-v-brussel", "mevr-v-mechelen"],
    },
  },
  {
    slug: "mevr-j-berchem",
    titel: "Verhoogd bouwvocht na pleisterwerk weggedroogd",
    chip: "Bouwdroging · Berchem",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Berchem",
    lede: "Na de pleisterwerken bleef er in deze Berchemse woning te veel restvocht in de wanden achter. Wij zetten meteen gerichte bouwdroging in, combineerden dat met een schimmelsanering en volgden het binnenklimaat op de voet op. Zo verdween het vocht veilig, zonder schade aan de afwerking of vertraging in de planning.",
    tags: ["Bouwdroging", "Schimmelsanering", "Pleisterwerk"],
    hero: "/realisaties/mevr-j-berchem/hero.webp",
    heroAlt: "Stadswoning in Berchem waar Vernast het vocht na de pleisterwerken behandelde",
    kaart: "/realisaties/mevr-j-berchem/hero.webp",
    kaartAlt: "Realisatie: Verhoogd bouwvocht na pleisterwerk weggedroogd",
    facts: [
      { label: "Behandeling", waarde: "Schimmelsanering", detail: "+ gerichte bouwdroging" },
      { label: "Analyse & oplossing", waarde: "24 uur", detail: "vochtmeting en aanpak bepaald" },
      { label: "Schimmelsanering", waarde: "3 werkdagen", detail: "vochtgevoelige zones behandeld" },
      { label: "Klimaatherstel", waarde: "4 werkdagen", detail: "gecontroleerd drogen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst in Berchem",
      lead: "In deze karaktervolle stadswoning waren de pleisterwerken net afgerond toen bij controle een verhoogd vochtgehalte in de wanden werd vastgesteld. Vers pleisterwerk brengt veel bouwvocht binnen, en zonder gerichte opvolging drijft dat restvocht de afwerking én de planning in de problemen. Snelheid was hier de sleutel.",
      problemen: [
        "Verhoogd vochtgehalte in het verse pleisterwerk na de werken",
        "Reëel risico op schimmelvorming op de vochtige wandzones",
        "Dreigende vertraging voor de verdere afwerking van de woning",
        "Ongecontroleerde droging met kans op scheuren en vochtschade",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Een grondige inspectie met vochtmetingen op verschillende hoogtes bevestigde het beeld: <b>bouwvocht uit het verse pleisterwerk</b> dat niet snel genoeg wegtrok. Zolang dat restvocht in de muren blijft, ontstaat een ideale voedingsbodem voor schimmel en dreigt de afwerking te vroeg over vochtige ondergrond te worden aangebracht. De oplossing lag dus niet in wachten, maar in gecontroleerd en gemeten drogen.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse & oplossing, binnen 24 uur.</b> Meteen na de vaststelling brachten we het vochtgehalte in kaart en bepaalden we de juiste opstelling van bouwdrogers en luchtcirculatie voor deze ruimte.",
            "<b>Schimmelsanering, 3 werkdagen.</b> De vochtgevoelige zones werden behandeld en gesaneerd, zodat beginnende schimmel geen kans kreeg en de wanden gezond konden verder drogen.",
            "<b>Klimaatherstel, 4 werkdagen.</b> Met een doordachte opstelling van bouwdrogers en luchtcirculatie werd het vochtgehalte gecontroleerd teruggebracht naar een gezond niveau, telkens opgevolgd met klimaat- en vochtmetingen.",
            "<b>Zorgeloze overgang naar de afwerking.</b> Zodra de metingen groen licht gaven, kon de woning veilig verder worden afgewerkt, zonder risico op scheuren of schimmelvorming en zonder verlies van kostbare bouwtijd.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Berchem" },
      { label: "Type", waarde: "Stadswoning" },
      { label: "Probleem", waarde: "Verhoogd vochtgehalte na pleisterwerk" },
      { label: "Behandeling", waarde: "Schimmelsanering + bouwdroging" },
      { label: "Analyse & oplossing", waarde: "24 uur" },
      { label: "Schimmelsanering", waarde: "3 werkdagen" },
      { label: "Klimaatherstel", waarde: "4 werkdagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vochtmeting tot een drooggelegde, gezonde basis. Blader met de pijlen of kies een stap hieronder.",
      fotos: [
        { src: "/realisaties/mevr-j-berchem/a1.webp", alt: "Stadswoning in Berchem bij aanvang van de droogwerken", bijschrift: "De woning in Berchem bij aanvang van de droogwerken", thumb: "Woning bij aanvang" },
        { src: "/realisaties/mevr-j-berchem/a2.webp", alt: "Vers pleisterwerk met verhoogd restvocht", bijschrift: "Vers pleisterwerk met een verhoogd restvocht", thumb: "Vers pleisterwerk" },
        { src: "/realisaties/mevr-j-berchem/a3.webp", alt: "Vochtmeting op verschillende hoogtes in de wand", bijschrift: "Vochtmeting op verschillende hoogtes in de wand", thumb: "Vochtmeting" },
        { src: "/realisaties/mevr-j-berchem/a4.webp", alt: "Zichtbare vochtplekken op het nieuwe pleisterwerk", bijschrift: "Zichtbare vochtplekken op het nieuwe pleisterwerk", thumb: "Vochtplekken" },
        { src: "/realisaties/mevr-j-berchem/a5.webp", alt: "Inspectie van de vochtgevoelige wandzones", bijschrift: "Inspectie van de vochtgevoelige wandzones", thumb: "Inspectie wandzones" },
        { src: "/realisaties/mevr-j-berchem/a6.webp", alt: "Overzicht van de ruimte vóór de actieve droging", bijschrift: "Overzicht van de ruimte vóór de actieve droging", thumb: "Ruimte vóór droging" },
        { src: "/realisaties/mevr-j-berchem/a7.webp", alt: "Opstelling van de bouwdrogers in de woonruimte", bijschrift: "Opstelling van de bouwdrogers in de woonruimte", thumb: "Bouwdrogers geplaatst" },
        { src: "/realisaties/mevr-j-berchem/a8.webp", alt: "Luchtontvochtiger geplaatst voor gecontroleerde droging", bijschrift: "Luchtontvochtiger geplaatst voor gecontroleerde droging", thumb: "Luchtontvochtiger" },
        { src: "/realisaties/mevr-j-berchem/a9.webp", alt: "Bouwdroger in werking tegen het restvocht", bijschrift: "Bouwdroger in werking tegen het restvocht", thumb: "Bouwdroger in werking" },
        { src: "/realisaties/mevr-j-berchem/a10.webp", alt: "Luchtcirculatie op gang gebracht in de ruimte", bijschrift: "Luchtcirculatie op gang gebracht in de ruimte", thumb: "Luchtcirculatie" },
        { src: "/realisaties/mevr-j-berchem/a11.webp", alt: "Controle van het droogproces met meetapparatuur", bijschrift: "Controle van het droogproces met meetapparatuur", thumb: "Droogproces gemeten" },
        { src: "/realisaties/mevr-j-berchem/a12.webp", alt: "Behandeling van de schimmelgevoelige zones", bijschrift: "Behandeling van de schimmelgevoelige zones", thumb: "Schimmelgevoelige zones" },
        { src: "/realisaties/mevr-j-berchem/a13.webp", alt: "Schimmelsanering van de vochtige wanddelen", bijschrift: "Schimmelsanering van de vochtige wanddelen", thumb: "Schimmelsanering" },
        { src: "/realisaties/mevr-j-berchem/a14.webp", alt: "Nabehandeling van het gesaneerde oppervlak", bijschrift: "Nabehandeling van het gesaneerde oppervlak", thumb: "Nabehandeling" },
        { src: "/realisaties/mevr-j-berchem/a15.webp", alt: "Opvolging van het vochtgehalte tijdens de droging", bijschrift: "Opvolging van het vochtgehalte tijdens de droging", thumb: "Vochtopvolging" },
        { src: "/realisaties/mevr-j-berchem/a16.webp", alt: "Klimaatmeting tijdens het herstel van het binnenklimaat", bijschrift: "Klimaatmeting tijdens het herstel van het binnenklimaat", thumb: "Klimaatmeting" },
        { src: "/realisaties/mevr-j-berchem/a17.webp", alt: "De ruimte na de schimmelsanering", bijschrift: "De ruimte na de schimmelsanering", thumb: "Na de sanering" },
        { src: "/realisaties/mevr-j-berchem/a18.webp", alt: "Drooggelegd pleisterwerk klaar voor afwerking", bijschrift: "Drooggelegd pleisterwerk, klaar voor de afwerking", thumb: "Drooggelegd pleisterwerk" },
        { src: "/realisaties/mevr-j-berchem/a19.webp", alt: "Gezonde, droge basis na afronding van de werken", bijschrift: "Een gezonde, droge basis na afronding van de werken", thumb: "Droge basis" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van vochtig pleisterwerk naar een droge, gezonde basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel schakelen, met eigen materieel en meetwerk", tekst: "Doordat we meteen konden ingrijpen met onze eigen bouwdrogers en meetapparatuur, bleef het vochtprobleem beperkt tot een korte fase. Onze Vernast-gecertificeerde vochtexperten combineerden droging en schimmelsanering in één vlotte aanpak, zodat de klant nooit twee keer voor hetzelfde probleem betaalt." },
        { label: "Na de werken", kop: "Klaar om zorgeloos verder af te werken", tekst: "Met het restvocht gecontroleerd afgevoerd en de schimmelgevoelige zones gesaneerd, kon de woning in Berchem veilig verder worden afgewerkt. Dit project toont hoe een snelle diagnose en gemeten droging schade én vertraging voorkomen en de basis leggen voor een blijvend gezond binnenklimaat." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders, bekijk hoe wij gelijkaardige vochtproblemen elders aanpakten.",
      slugs: ["mevr-j-j-kontich", "mevr-k-wintam", "mevr-v-brussel"],
    },
  },
  {
    slug: "mevr-g-b-sint-pieters-woluwe",
    titel: "Restvocht na pleisterwerken gecontroleerd gedroogd",
    chip: "Bouwdroging · Sint-Pieters-Woluwe",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Sint-Pieters-Woluwe",
    lede: "Na de pleisterwerken bleef het vochtgehalte in deze stadswoning in Sint-Pieters-Woluwe te hoog om zonder risico verder af te werken. Vernast plaatste bouwdrogers en luchtcirculatie en volgde het droogproces op met nauwkeurige metingen, zodat de woning gecontroleerd naar een schilderklare, stabiele basis droogde.",
    tags: ["Bouwdroging", "Pleisterwerk", "Vochtmeting"],
    hero: "/realisaties/mevr-g-b-sint-pieters-woluwe/hero.webp",
    heroAlt: "De stadswoning in Sint-Pieters-Woluwe waar Vernast de bouwdroging uitvoerde",
    kaart: "/realisaties/mevr-g-b-sint-pieters-woluwe/hero.webp",
    kaartAlt: "Realisatie: Restvocht na pleisterwerken gecontroleerd gedroogd",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "na pleisterwerken" },
      { label: "Analyse & opstelling", waarde: "24 u", detail: "metingen en drogers geplaatst" },
      { label: "Actieve droging", waarde: "4 dagen", detail: "met continue opvolging" },
      { label: "Diagnose", waarde: "Restvocht", detail: "uit vers pleisterwerk" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "In deze karaktervolle stadswoning in Sint-Pieters-Woluwe was de ruwbouw net voorzien van nieuw pleisterwerk. Bij controle bleek het vochtgehalte in de wanden en plafonds nog duidelijk te hoog: het verse pleister gaf zijn aanmaakwater maar traag af en de natuurlijke droging verliep te langzaam om de schilder- en vloerafwerking veilig te laten starten.",
      problemen: [
        "Verhoogd vochtgehalte in wanden en plafonds na het pleisteren",
        "Trage natuurlijke droging in de gesloten stadswoning",
        "Risico op scheuren en vochtplekken bij te vroeg afwerken",
        "Schilder- en vloerafwerking kon nog niet veilig van start",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met een geijkte Trotec-vochtmeter werd op verschillende hoogtes en in elke ruimte gemeten. De meetwaarden bleven hoog, tussen ongeveer <b>172 en 177</b> op de meterschaal, wat wees op <b>restvocht uit het verse pleisterwerk</b> en niet op een structureel vochtprobleem. De oorzaak was dus tijdelijk, maar zonder ingreep zou de woning te traag drogen en de verdere planning in het gedrang komen.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Dag 1, analyse en opstelling.</b> Binnen het eerste etmaal werden de vochtwaarden in kaart gebracht en de bouwdrogers strategisch geplaatst, aangevuld met ventilatoren voor een gelijkmatige luchtcirculatie doorheen alle ruimtes.",
            "<b>Gecontroleerd drogen.</b> De condensdrogers onttrokken continu vocht aan de lucht, terwijl de ventilatoren het vocht uit het pleisterwerk bleven aandrijven. Openingen werden met folie afgeschermd zodat de droogcapaciteit gericht werd ingezet.",
            "<b>Opvolging met metingen.</b> Tijdens de droogfase werd het vochtgehalte herhaaldelijk gecontroleerd tot de waarden op een gezond, stabiel niveau lagen in de volledige woning.",
            "<b>Schilderklare basis.</b> Na circa vier dagen actieve droging was de ondergrond klaar om de schilder- en vloerafwerking veilig en zonder risico op vochtschade aan te vatten.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Sint-Pieters-Woluwe" },
      { label: "Type woning", waarde: "Stadswoning" },
      { label: "Probleem", waarde: "Restvocht na pleisterwerk" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Extra", waarde: "Vochtmetingen & opvolging" },
      { label: "Analyse & opstelling", waarde: "24 u" },
      { label: "Actieve droging", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de droogopstelling tot de opgevolgde vochtmetingen in Sint-Pieters-Woluwe. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a1.webp", alt: "Bouwdroger en ventilator opgesteld in de gepleisterde ruimte", bijschrift: "Bouwdroger en ventilator opgesteld in de werfruimte", thumb: "Droogopstelling" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a2.webp", alt: "Vochtmeting op het plafond met een Trotec-meter, waarde 175,8", bijschrift: "Vochtmeting op het plafond: 175,8 op de meterschaal", thumb: "Meting plafond 175,8" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a3.webp", alt: "Condensdroger opgesteld tegen de gepleisterde muur naast de stelling", bijschrift: "Condensdroger tegen de vers gepleisterde muur", thumb: "Condensdroger aan de muur" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a4.webp", alt: "Droger en ventilator naast een met folie afgeschermde opening", bijschrift: "Droger en ventilator bij de afgeschermde opening", thumb: "Droger en ventilator" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a5.webp", alt: "Overzicht van de droogopstelling met droger, ventilator en stelling", bijschrift: "Overzicht van de volledige droogopstelling", thumb: "Overzicht opstelling" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a6.webp", alt: "Controlemeting aan het plafond met een Trotec-meter, waarde 177,2", bijschrift: "Controlemeting aan het plafond: 177,2", thumb: "Controlemeting 177,2" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a7.webp", alt: "Technicus van Vernast meet het vochtgehalte van de wand", bijschrift: "Onze technicus meet het vochtgehalte van de wand", thumb: "Meting van de wand" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a8.webp", alt: "Vochtmeting aan het plafond met waarde 172,3 tijdens de opvolging", bijschrift: "Meting aan het plafond: 172,3 tijdens de opvolging", thumb: "Meting plafond 172,3" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a9.webp", alt: "Opgevolgde vochtmeting van de wand met dalende waarde 172,3", bijschrift: "Opgevolgde meting van de wand: 172,3", thumb: "Opgevolgde meting" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a10.webp", alt: "Voorgevel van de stadswoning in Sint-Pieters-Woluwe", bijschrift: "De stadswoning in Sint-Pieters-Woluwe", thumb: "De stadswoning" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a11.webp", alt: "Nieuw metselwerk aan de buitenzijde klaar voor verdere afwerking", bijschrift: "Nieuw metselwerk, klaar voor verdere afwerking", thumb: "Nieuw metselwerk" },
        { src: "/realisaties/mevr-g-b-sint-pieters-woluwe/a12.webp", alt: "Historische kapconstructie met houten spanten en metselwerk", bijschrift: "Historische kapconstructie op de bovenverdieping", thumb: "Historische kap" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van te vochtig pleisterwerk naar een schilderklare basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel schakelen zonder de kwaliteit los te laten", tekst: "Met eigen bouwdrogers en meetapparatuur konden we meteen ingrijpen en het droogproces sturen op basis van echte cijfers. Zo verliest de planning geen tijd en start de afwerking pas wanneer de ondergrond er klaar voor is, uitgevoerd door ons eigen Vernast-team." },
        { label: "Na de werken", kop: "Klaar voor een duurzame afwerking", tekst: "Met het restvocht weggewerkt en het vochtgehalte teruggebracht naar een gezond niveau, kon de schilder- en vloerafwerking veilig van start. Dit project in Sint-Pieters-Woluwe toont hoe gerichte bouwdroging scheuren en vochtschade voorkomt en zorgt voor een stabiel eindresultaat." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders, bekijk hoe wij vocht in andere Brusselse panden aanpakten.",
      slugs: ["mevr-v-brussel", "dhr-h-brussel", "mnr-s-brussel"],
    },
  },
  {
    slug: "mevr-b-a-lokeren",
    titel: "Waterschade na een keldermuurlek snel gedroogd",
    chip: "Bouwdroging · Lokeren",
    soort: "waterschade",
    locatie: "Waterschade · Lokeren",
    lede: "In deze woning in Lokeren zorgde een lek in de keldermuur voor ernstige waterschade aan vloer en onderste muurzones. Vernast greep snel in met professionele bouwdrogers en nauwkeurige vochtmetingen. Zo werd het vochtgehalte gecontroleerd teruggebracht en bleef blijvende schade en schimmelvorming uit.",
    tags: ["Bouwdroging", "Schimmelsanering", "Kelderdichting"],
    hero: "/realisaties/mevr-b-a-lokeren/hero.webp",
    heroAlt: "Woning in Lokeren waar Vernast de waterschade na een keldermuurlek behandelde",
    kaart: "/realisaties/mevr-b-a-lokeren/hero.webp",
    kaartAlt: "Realisatie: Waterschade na een keldermuurlek snel gedroogd",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ schimmelsanering" },
      { label: "Analyse & meting", waarde: "24 u", detail: "diagnose en vochtmeting" },
      { label: "Bouwdroging", waarde: "3 dagen", detail: "gecontroleerd drogen" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "opvolging met metingen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "Bij ons bezoek in Lokeren was de schade duidelijk: via een lek in de keldermuur was water binnengedrongen en had zich verspreid over de vloer en de onderste muurzones. Het metselwerk was verzadigd, de lucht voelde klam en er hing een muffe geur — het begin van een klassiek vochtprobleem als er niet snel wordt ingegrepen.",
      problemen: [
        "Water uit een lek in de keldermuur, verspreid over vloer en onderste muren",
        "Sterk verhoogde vochtwaarden in metselwerk en dekvloer",
        "Beginnende schimmelvorming en een aanhoudend muffe, vochtige geur",
        "Risico op blijvende schade aan vloer, muren en afwerking",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Een grondige inspectie met vochtmetingen op verschillende hoogtes bracht de oorzaak snel in kaart: een <b>lek in de keldermuur</b> waardoor water het metselwerk binnentrok. De vochtwaarden lagen ver boven normaal. Zonder snelle droging en het dichten van de bron zou het vocht verder in de constructie trekken en schimmel definitief de kans geven zich te ontwikkelen.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Bron lokaliseren en dichten.</b> Eerst werd het lek in de keldermuur opgespoord en waterdicht afgedicht, zodat er geen nieuw water meer kon binnendringen.",
            "<b>Snelle bouwdroging.</b> Vervolgens plaatste Vernast professionele bouwdrogers in de ruimte. Muren, vloer en lucht werden gecontroleerd gedroogd tot het vochtgehalte terug op een veilig niveau stond.",
            "<b>Opvolging met metingen.</b> Tijdens het droogproces volgden we de vochtwaarden nauwkeurig op, zodat we konden bijsturen en de droging pas afsloten wanneer de waarden effectief in orde waren.",
            "<b>Schimmelsanering en nabehandeling.</b> De aangetaste oppervlakken werden gesaneerd en nabehandeld, waardoor de beginnende schimmel werd verwijderd en de ruimte opnieuw gezond en droog werd opgeleverd.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Lokeren" },
      { label: "Type woning", waarde: "Woning" },
      { label: "Probleem", waarde: "Lek in keldermuur + waterschade" },
      { label: "Behandeling", waarde: "Bouwdroging + schimmelsanering" },
      { label: "Extra", waarde: "Kelderdichting" },
      { label: "Analyse & meting", waarde: "24 u" },
      { label: "Bouwdroging", waarde: "3 dagen" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vaststelling van de waterschade tot de droge, gesaneerde ruimte. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mevr-b-a-lokeren/a1.webp", alt: "De aangetaste ruimte in de woning te Lokeren bij aanvang van de werken", bijschrift: "De aangetaste ruimte bij aanvang van de werken", thumb: "Ruimte bij aanvang" },
        { src: "/realisaties/mevr-b-a-lokeren/a2.webp", alt: "Waterschade zichtbaar op de onderste muurzone in Lokeren", bijschrift: "Waterschade op de onderste muurzone", thumb: "Waterschade muurzone" },
        { src: "/realisaties/mevr-b-a-lokeren/a3.webp", alt: "Vochtsporen rond de keldermuur na het lek", bijschrift: "Vochtsporen rond de keldermuur", thumb: "Vochtsporen keldermuur" },
        { src: "/realisaties/mevr-b-a-lokeren/a4.webp", alt: "Detail van het binnengedrongen vocht in het metselwerk", bijschrift: "Binnengedrongen vocht in het metselwerk", thumb: "Vocht in metselwerk" },
        { src: "/realisaties/mevr-b-a-lokeren/a5.webp", alt: "Inspectie van de vochtige oppervlakken vóór behandeling", bijschrift: "Inspectie van de vochtige oppervlakken", thumb: "Inspectie oppervlakken" },
        { src: "/realisaties/mevr-b-a-lokeren/a6.webp", alt: "Beoordeling van de schade vóór de droging start", bijschrift: "Beoordeling van de schade vóór de droging", thumb: "Schade beoordeeld" },
        { src: "/realisaties/mevr-b-a-lokeren/a7.webp", alt: "Vochtmeting om het vochtgehalte in de muur te bepalen", bijschrift: "Vochtmeting om het vochtgehalte te bepalen", thumb: "Vochtmeting" },
        { src: "/realisaties/mevr-b-a-lokeren/a8.webp", alt: "De zone vrijgemaakt en klaar voor de droging", bijschrift: "De zone vrijgemaakt en klaar voor droging", thumb: "Klaar voor droging" },
        { src: "/realisaties/mevr-b-a-lokeren/a9.webp", alt: "Professionele bouwdroger geplaatst in de ruimte in Lokeren", bijschrift: "Professionele bouwdroger geplaatst in de ruimte", thumb: "Bouwdroger geplaatst" },
        { src: "/realisaties/mevr-b-a-lokeren/a10.webp", alt: "Gecontroleerde droging van muren en vloer", bijschrift: "Gecontroleerde droging van muren en vloer", thumb: "Gecontroleerd drogen" },
        { src: "/realisaties/mevr-b-a-lokeren/a11.webp", alt: "Opvolging van het droogproces met vochtmetingen", bijschrift: "Opvolging van het droogproces met metingen", thumb: "Opvolging metingen" },
        { src: "/realisaties/mevr-b-a-lokeren/a12.webp", alt: "Behandelde muurzone tijdens het herstel", bijschrift: "Behandelde muurzone tijdens het herstel", thumb: "Behandelde muurzone" },
        { src: "/realisaties/mevr-b-a-lokeren/a13.webp", alt: "De ruimte na de schimmelsanering in Lokeren", bijschrift: "De ruimte na de schimmelsanering", thumb: "Na de schimmelsanering" },
        { src: "/realisaties/mevr-b-a-lokeren/a14.webp", alt: "Resultaat na droging en behandeling", bijschrift: "Resultaat na droging en behandeling", thumb: "Resultaat na behandeling" },
        { src: "/realisaties/mevr-b-a-lokeren/a15.webp", alt: "De woning opnieuw droog en klaar voor afwerking", bijschrift: "Opnieuw droog en klaar voor afwerking", thumb: "Opnieuw droog" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van waterschade naar een droge, gezonde basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel ingrijpen beperkt de schade", tekst: "Bij waterschade telt elke dag. Door meteen de bron te dichten en professioneel te drogen, hielden we in Lokeren de schade aan vloer en muren beperkt — uitgevoerd door ons eigen team van Vernast-gecertificeerde vochtexperten. Zo betaalt u nooit twee keer voor hetzelfde probleem." },
        { label: "Na de werken", kop: "Droog, schimmelvrij en klaar voor afwerking", tekst: "Met het lek gedicht, het vocht gecontroleerd weggedroogd en de oppervlakken gesaneerd, kon de ruimte opnieuw droog en veilig worden opgeleverd. Dit project toont hoe een snelle diagnose en een grondige aanpak blijvende vochtproblemen voorkomen." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders, bekijk hoe wij gelijkaardige vochtproblemen elders aanpakten.",
      slugs: ["mevr-c-leuven", "mevr-g-b-sint-pieters-woluwe", "mevr-j-berchem"],
    },
  },
  {
    slug: "mevr-arlette",
    titel: "Woning grondig gedroogd na waterschade",
    chip: "Bouwdroging · woning",
    soort: "waterschade",
    locatie: "Waterschade · woning",
    lede: "Na waterschade was het vochtgehalte in de muren en de vloeropbouw sterk verhoogd, met een reëel risico op blijvende schade aan afwerking en pleisterwerk. Vernast pakte dit gericht aan met bouwdrogers, ventilatie en continue vochtmeting, zodat het binnenklimaat opnieuw werd gestabiliseerd.",
    tags: ["Bouwdroging", "Vochtmeting", "Ventilatie"],
    hero: "/realisaties/mevr-arlette/hero.webp",
    heroAlt: "Bouwdroger aan het werk in een woning na waterschade",
    kaart: "/realisaties/mevr-arlette/hero.webp",
    kaartAlt: "Realisatie: Woning grondig gedroogd na waterschade",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "met continue vochtmeting" },
      { label: "Analyse & oplossing", waarde: "24 uur", detail: "metingen op elke plaats" },
      { label: "Schimmelsanering", waarde: "3 dagen", detail: "preventief behandeld" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "gecontroleerd drogen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "Toen wij ter plaatse kwamen, was de woning getroffen door waterschade. Het vocht had zich verspreid door de vloeropbouw en de onderste muurzones, tot in de kruipruimte. Zonder snelle, gerichte droging dreigde blijvende schade aan het pleisterwerk en een klam, ongezond binnenklimaat.",
      problemen: [
        "Sterk verhoogd vochtgehalte in muren en vloeropbouw na waterschade",
        "Verhoogde vochtwaarden tot in de kruipruimte en het onderliggende metselwerk",
        "Risico op schade aan muurafwerking en pleisterwerk",
        "Klam binnenklimaat met kans op schimmelvorming",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "We startten met een grondige analyse: op verschillende hoogtes en plaatsen werden vochtmetingen uitgevoerd, van de muur-vloeraansluiting tot diep in de kruipruimte. Het beeld was eenduidig: de <b>waterschade</b> had het vochtgehalte in de bouwmassa fors doen oplopen. Zolang dat vocht in de constructie zit, blijven schade en schimmel op de loer liggen, hoe droog de ruimte ook oogt aan de oppervlakte.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse en oplossing, binnen 24 uur.</b> Snel schakelen is bij waterschade cruciaal. Binnen een dag brachten we met vochtmetingen de volledige omvang in kaart en bepaalden we het droogplan voor muren, vloer en kruipruimte.",
            "<b>Plaatsing van de bouwdrogers.</b> In de inkomhal en de gang werden bouwdrogers strategisch opgesteld. Door de toestellen doordacht te positioneren en te koppelen aan luchtcirculatie werd het vocht efficiënt uit de constructie getrokken, zonder de bewoners onnodig te storen.",
            "<b>Ventilatie en schimmelsanering.</b> Aanvullend zorgde gerichte ventilatie voor een constante luchtverversing, terwijl een preventieve schimmelsanering van drie dagen elk risico op schimmel in de kiem smoorde.",
            "<b>Klimaatherstel en opvolging.</b> Over een periode van vier dagen liet Vernast de woning gecontroleerd drogen, telkens gestaafd met herhaalde vochtmetingen. Zo stabiliseerde het binnenklimaat en kwam de woning droog en veilig klaar voor verdere afwerking.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Type woning", waarde: "Bewoonde woning" },
      { label: "Probleem", waarde: "Waterschade + verhoogd vocht" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Extra", waarde: "Ventilatie & schimmelsanering" },
      { label: "Analyse & oplossing", waarde: "24 uur" },
      { label: "Schimmelsanering", waarde: "3 dagen" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de geplaatste bouwdrogers tot de vochtmetingen tot in de kruipruimte. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mevr-arlette/a1.webp", alt: "Bouwdroger geplaatst in de inkomhal van de woning", bijschrift: "Bouwdroger geplaatst in de inkomhal", thumb: "Bouwdroger in de hal" },
        { src: "/realisaties/mevr-arlette/a2.webp", alt: "Bouwdroger aan het werk in de gang met tegelvloer", bijschrift: "Bouwdroger aan het werk in de gang", thumb: "Droger in de gang" },
        { src: "/realisaties/mevr-arlette/a3.webp", alt: "Vooraanzicht van de woning waar de bouwdroging plaatsvond", bijschrift: "Vooraanzicht van de woning", thumb: "Vooraanzicht woning" },
        { src: "/realisaties/mevr-arlette/a4.webp", alt: "Tweede bouwdroger aangesloten in de hal", bijschrift: "Tweede bouwdroger aangesloten in de hal", thumb: "Tweede bouwdroger" },
        { src: "/realisaties/mevr-arlette/a5.webp", alt: "Vochtmeting aan de aansluiting van vloer en muur", bijschrift: "Vochtmeting aan de vloer-muuraansluiting", thumb: "Meting vloer-muur" },
        { src: "/realisaties/mevr-arlette/a6.webp", alt: "Vochtmeting in de hoek naast de droogunit", bijschrift: "Vochtmeting in de hoek naast de droogunit", thumb: "Meting in de hoek" },
        { src: "/realisaties/mevr-arlette/a7.webp", alt: "Vochtmeting bij een leidingdoorvoer aan de vloer", bijschrift: "Vochtmeting bij de leidingdoorvoer aan de vloer", thumb: "Meting bij leiding" },
        { src: "/realisaties/mevr-arlette/a8.webp", alt: "Vochtmeting hoog tegen de muur bij het plafond", bijschrift: "Vochtmeting hoog tegen de muur", thumb: "Vochtmeting muur" },
        { src: "/realisaties/mevr-arlette/a9.webp", alt: "Vochtmeting op de witgepleisterde wand", bijschrift: "Vochtmeting op de witgepleisterde wand", thumb: "Meting op de wand" },
        { src: "/realisaties/mevr-arlette/a10.webp", alt: "Vochtmeting in het onderliggende metselwerk", bijschrift: "Vochtmeting in het onderliggende metselwerk", thumb: "Meting metselwerk" },
        { src: "/realisaties/mevr-arlette/a11.webp", alt: "Vochtmeting in de ruwe steenstructuur", bijschrift: "Vochtmeting in de ruwe steenstructuur", thumb: "Meting steenstructuur" },
        { src: "/realisaties/mevr-arlette/a12.webp", alt: "Vochtmeting in de kruipruimte onder de woning", bijschrift: "Meting in de kruipruimte onder de woning", thumb: "Kruipruimte" },
        { src: "/realisaties/mevr-arlette/a13.webp", alt: "Vochtcontrole in de donkere kruipruimte", bijschrift: "Vochtcontrole in de donkere kruipruimte", thumb: "Controle kruipruimte" },
        { src: "/realisaties/mevr-arlette/a14.webp", alt: "Meting van de vloeropbouw vanuit de kruipruimte", bijschrift: "Meting van de vloeropbouw van onderaf", thumb: "Vloeropbouw" },
        { src: "/realisaties/mevr-arlette/a15.webp", alt: "De woning tijdens de werken met buitenaanleg", bijschrift: "De woning tijdens de werken", thumb: "Woning tijdens werken" },
        { src: "/realisaties/mevr-arlette/a16.webp", alt: "De woning bij schemering na de droging", bijschrift: "De woning na de droging", thumb: "Woning na droging" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van waterschade naar een droge, stabiele woning",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel schakelen én grondig meten", tekst: "Bij waterschade telt elke dag. Vernast bracht binnen 24 uur de volledige vochtomvang in kaart en zette meteen de juiste bouwdrogers in — uitgevoerd door ons eigen team van gecertificeerde vochtexperten, met metingen die geen enkele hoek onbekeken laten." },
        { label: "Na de werken", kop: "Droog en klaar voor afwerking", tekst: "Met het vochtgehalte terug op peil en de kruipruimte gecontroleerd, staat de woning er opnieuw droog en gezond bij. Dit project toont hoe een snelle diagnose en een gerichte droogaanpak blijvende schade voorkomen en een veilige basis leggen voor de verdere afwerking." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders — bekijk hoe wij gelijkaardige vochtproblemen elders aanpakten.",
      slugs: ["mevr-b-a-lokeren", "mevr-c-leuven", "mevr-g-b-sint-pieters-woluwe"],
    },
  },
  {
    slug: "mevr-a-r-berlare",
    titel: "Berging drooggelegd na een waterlek",
    chip: "Bouwdroging · Berlare",
    soort: "waterschade",
    locatie: "Waterschade · Berlare",
    lede: "Na een lekkage in de berging werd ernstige waterschade vastgesteld. Dankzij een snelle vochtmeting en de gerichte inzet van professionele droogtoestellen werd het vochtgehalte snel onder controle gebracht. Zo kon verdere schade aan muren, vloer en opgeslagen materiaal worden voorkomen.",
    tags: ["Bouwdroging", "Waterschade", "Schimmelsanering"],
    hero: "/realisaties/mevr-a-r-berlare/hero.webp",
    heroAlt: "De berging in Berlare waar Vernast na waterschade een bouwdroging uitvoerde",
    kaart: "/realisaties/mevr-a-r-berlare/hero.webp",
    kaartAlt: "Realisatie: Berging drooggelegd na een waterlek",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "na waterschade" },
      { label: "Analyse & oplossing", waarde: "24 u", detail: "vochtmeting en opstart" },
      { label: "Schimmelsanering", waarde: "3 dagen", detail: "preventief behandeld" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "gecontroleerd drogen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst in Berlare",
      lead: "In deze berging in Berlare was de situatie na een waterlek dringend. Het water had zich diep in de muren en de vloer gezet, met sterk verhoogde vochtwaarden tot gevolg. Zonder snelle reactie dreigden schimmelvorming, een muffe geur en blijvende schade aan de opgeslagen spullen.",
      problemen: [
        "Ernstige waterschade na een lek in de berging",
        "Sterk verhoogde vochtwaarden in muren en vloer",
        "Reëel risico op schimmelvorming en muffe geur",
        "Opgeslagen materiaal en interieur bedreigd door het vocht",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Een grondige vochtmeting bracht meteen duidelijkheid: het lek had het metselwerk en de vloeropbouw verzadigd met water. Zolang dat vocht in de constructie blijft zitten, krijgen schimmel en geurhinder vrij spel. De oplossing lag niet in oppervlakkig afvegen, maar in het volledig en gecontroleerd terugdrogen van de ruimte.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse en opstart, binnen 24 u.</b> Na de vochtmeting werd meteen de aanpak bepaald en werden professionele bouwdrogers in de berging geplaatst, gericht op de meest verzadigde zones.",
            "<b>Gerichte bouwdroging.</b> De droogtoestellen onttrokken continu vocht aan muren en vloer. Tijdens het traject werden de vochtwaarden nauwgezet opgevolgd, zodat het droogproces zonder risico kon doorlopen.",
            "<b>Schimmelsanering.</b> Om te vermijden dat het achtergebleven vocht zou uitmonden in schimmel, werd de ruimte preventief gesaneerd en behandeld.",
            "<b>Klimaatherstel.</b> Na circa vier dagen gecontroleerd drogen was het binnenklimaat hersteld en waren de vochtwaarden terug op een veilig niveau, klaar voor verder gebruik van de berging.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Berlare" },
      { label: "Type ruimte", waarde: "Berging" },
      { label: "Probleem", waarde: "Waterschade na lek" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Extra", waarde: "Schimmelsanering" },
      { label: "Analyse & oplossing", waarde: "24 u" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vaststelling van de waterschade tot de volledige bouwdroging van de berging. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mevr-a-r-berlare/a1.webp", alt: "De berging in Berlare bij aanvang na de waterschade", bijschrift: "De berging bij aanvang na de waterschade", thumb: "Berging bij aanvang" },
        { src: "/realisaties/mevr-a-r-berlare/a2.webp", alt: "Vochtmeting van muren en vloer in de berging", bijschrift: "Vochtmeting van muren en vloer", thumb: "Vochtmeting" },
        { src: "/realisaties/mevr-a-r-berlare/a3.webp", alt: "Professionele bouwdroger geplaatst in de berging", bijschrift: "Professionele bouwdroger geplaatst", thumb: "Bouwdroger geplaatst" },
        { src: "/realisaties/mevr-a-r-berlare/a4.webp", alt: "Droogtoestel in werking tegen het vocht", bijschrift: "Droogtoestel in werking tegen het vocht", thumb: "Droogtoestel in werking" },
        { src: "/realisaties/mevr-a-r-berlare/a5.webp", alt: "Continue droging van muur en vloer in de berging", bijschrift: "Continue droging van muur en vloer", thumb: "Continue droging" },
        { src: "/realisaties/mevr-a-r-berlare/a6.webp", alt: "Opvolging van de vochtwaarden tijdens het droogtraject", bijschrift: "Opvolging van de vochtwaarden", thumb: "Vochtwaarden opgevolgd" },
        { src: "/realisaties/mevr-a-r-berlare/a7.webp", alt: "Bouwdroger gericht op de meest verzadigde zone", bijschrift: "Bouwdroger gericht op de verzadigde zone", thumb: "Gericht op de zone" },
        { src: "/realisaties/mevr-a-r-berlare/a8.webp", alt: "Droogproces in de volledige ruimte van de berging", bijschrift: "Droogproces in de volledige ruimte", thumb: "Volledige ruimte" },
        { src: "/realisaties/mevr-a-r-berlare/a9.webp", alt: "Controle van het binnenklimaat tijdens de droging", bijschrift: "Controle van het binnenklimaat", thumb: "Binnenklimaat" },
        { src: "/realisaties/mevr-a-r-berlare/a10.webp", alt: "Vochtafvoer tijdens de bouwdroging in de berging", bijschrift: "Vochtafvoer tijdens de bouwdroging", thumb: "Vochtafvoer" },
        { src: "/realisaties/mevr-a-r-berlare/a11.webp", alt: "De berging in Berlare tijdens het droogtraject", bijschrift: "De berging tijdens het droogtraject", thumb: "Tijdens droogtraject" },
        { src: "/realisaties/mevr-a-r-berlare/a12.webp", alt: "Overzicht van de drooginstallatie in de berging", bijschrift: "Overzicht van de drooginstallatie", thumb: "Drooginstallatie" },
        { src: "/realisaties/mevr-a-r-berlare/a13.webp", alt: "Resultaat na de bouwdroging in Berlare", bijschrift: "Resultaat na de bouwdroging", thumb: "Resultaat" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van acute waterschade naar een droge, gezonde berging",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel ter plaatse, meten voor we drogen", tekst: "Bij waterschade telt elk uur. Ons eigen team van Vernast-gecertificeerde vochtexperten start binnen de dag met een nauwkeurige vochtmeting, zodat de bouwdroging gericht en zonder gokwerk verloopt. Zo blijft de schade beperkt en betaalt u niet voor werk dat niet nodig is." },
        { label: "Na de werken", kop: "Een berging die terug bruikbaar is", tekst: "Met het vocht uit muren en vloer getrokken en de ruimte preventief gesaneerd, is de berging in Berlare terug klaar voor gebruik. Dit project toont hoe een snelle reactie en een gecontroleerd droogproces gevolgschade en schimmel voorkomen." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders, bekijk hoe wij gelijkaardige vochtproblemen elders aanpakten.",
      slugs: ["mevr-arlette", "mevr-b-a-lokeren", "mevr-c-leuven"],
    },
  },
  {
    slug: "mancave-brugge",
    titel: "Kelder-mancave weer droog en schimmelvrij",
    chip: "Bouwdroging · Brugge",
    soort: "vochtbeheersing",
    locatie: "Schimmelsanering · Brugge",
    lede: "Deze sfeervolle mancave in een gewelfde kelder in Brugge kampte met een te hoge luchtvochtigheid. Vochtmetingen bevestigden het risico op schimmel en muffe geuren. Met gerichte bouwdroging, een schimmelsanering en betere ventilatie kreeg de ruimte haar droge, gezonde klimaat terug.",
    tags: ["Bouwdroging", "Schimmelsanering", "Kelderventilatie"],
    hero: "/realisaties/mancave-brugge/hero.webp",
    heroAlt: "De afgewerkte mancave in Brugge onder een wit tongewelf, met biljart en fitnesshoek",
    kaart: "/realisaties/mancave-brugge/kaart.webp",
    kaartAlt: "Realisatie: Kelder-mancave weer droog en schimmelvrij",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ schimmelsanering" },
      { label: "Diagnose", waarde: "Te hoge luchtvochtigheid", detail: "in de gesloten kelder" },
      { label: "Bouwdroging", waarde: "3 werkdagen", detail: "met dagelijkse opvolging" },
      { label: "Klimaatherstel", waarde: "4 werkdagen", detail: "tot een gezond klimaat" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "De mancave was prachtig afgewerkt onder een wit tongewelf, maar de lucht voelde klam en zwaar aan. Onze inspecteur mat op verschillende plaatsen te hoge relatieve vochtwaarden en zag de eerste vochtstrepen op het gewelf verschijnen — een duidelijk signaal dat ingrijpen nodig was voordat schimmel de dure afwerking zou aantasten.",
      problemen: [
        "Te hoge luchtvochtigheid in de ondergrondse mancave",
        "Vochtstrepen en verkleuring op het witte tongewelf",
        "Beginnende schimmelgeur die het comfort aantastte",
        "Onvoldoende luchtafvoer om het kelderklimaat droog te houden",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met een professionele vochtmeter registreerden we op verschillende hoogtes waarden tot boven de 70. Het beeld was duidelijk: in de gesloten kelderruimte kon het aanwezige vocht onvoldoende weg, waardoor de <b>relatieve luchtvochtigheid structureel te hoog</b> opliep. Zonder gerichte droging en betere luchtverversing zou schimmel op de afwerking en de meubelen onvermijdelijk zijn.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse en meting.</b> We legden de vochtwaarden en het volledige kelderklimaat vast, zodat de aanpak precies op de situatie in Brugge was afgestemd.",
            "<b>Bouwdroging.</b> Professionele bouwdrogers trokken het overtollige vocht gecontroleerd uit de lucht en de materialen, terwijl de waarden dag na dag werden opgevolgd.",
            "<b>Schimmelsanering.</b> De zones met beginnende aantasting werden behandeld en ontsmet, zodat er geen sporen of geurhinder achterbleven in de mancave.",
            "<b>Klimaatherstel en ventilatie.</b> Tot slot verbeterden we de luchtverversing van de ruimte, zodat het vocht voortaan weg kan en de mancave blijvend droog en gezond blijft.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Brugge" },
      { label: "Type", waarde: "Mancave in gewelfde kelder" },
      { label: "Probleem", waarde: "Te hoge luchtvochtigheid" },
      { label: "Behandeling", waarde: "Bouwdroging + schimmelsanering" },
      { label: "Extra", waarde: "Kelderventilatie" },
      { label: "Bouwdroging", waarde: "3 werkdagen" },
      { label: "Klimaatherstel", waarde: "4 werkdagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de vochtmeting en de bouwdroging tot de afgewerkte mancave in Brugge. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/mancave-brugge/a1.webp", alt: "De afgewerkte mancave in Brugge met biljart, piano en fitnesstoestel onder een wit tongewelf", bijschrift: "De afgewerkte mancave onder het witte tongewelf", thumb: "Afgewerkte mancave" },
        { src: "/realisaties/mancave-brugge/a2.webp", alt: "Zit- en fitnesshoek van de mancave met een mobiel luchtontvochtigingstoestel tegen de gewelfde muur", bijschrift: "Zit- en fitnesshoek met mobiele ontvochtiger", thumb: "Zit- en fitnesshoek" },
        { src: "/realisaties/mancave-brugge/a3.webp", alt: "Vochtmeting op het gewelf met een waarde van 61,9 op de meter", bijschrift: "Vochtmeting op het gewelf: 61,9 op de meter", thumb: "Vochtmeting op het gewelf" },
        { src: "/realisaties/mancave-brugge/a4.webp", alt: "Meting in de kelderhoek met verhoogde waarde 70,4 en zichtbare vochtverkleuring", bijschrift: "Verhoogde waarde (70,4) in de vochtige hoek", thumb: "Meting in de hoek" },
        { src: "/realisaties/mancave-brugge/a5.webp", alt: "Vochtstrepen op de muur, de vochtmeter toont 70,8", bijschrift: "Vochtstrepen op de muur, meting 70,8", thumb: "Vochtstrepen op de muur" },
        { src: "/realisaties/mancave-brugge/a6.webp", alt: "Controlemeting laag bij de vloer met een waarde van 62,5", bijschrift: "Controlemeting laag bij de vloer: 62,5", thumb: "Controlemeting bij de vloer" },
        { src: "/realisaties/mancave-brugge/a7.webp", alt: "Het pand in Brugge met witgeschilderde gevel en terras boven de mancave", bijschrift: "Het pand in Brugge met witgeschilderde gevel", thumb: "Het pand in Brugge" },
        { src: "/realisaties/mancave-brugge/a8.webp", alt: "Ruim binnenterras van de woning in Brugge boven de kelderruimte", bijschrift: "Het binnenterras boven de kelderruimte", thumb: "Binnenterras" },
        { src: "/realisaties/mancave-brugge/a9.webp", alt: "Bouwdroger met ventilator aan het werk aan de straatgevel", bijschrift: "Bouwdroger in werking aan de gevel", thumb: "Bouwdroger in werking" },
        { src: "/realisaties/mancave-brugge/a10.webp", alt: "Ventilatieleidingen aangelegd in het plafond tijdens de ruwbouwfase", bijschrift: "Ventilatieleidingen aangelegd voor blijvende luchtverversing", thumb: "Ventilatieleidingen" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van klamme kelder naar een droge, gezonde mancave",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Oorzaak én comfort in één aanpak", tekst: "Wij drogen niet alleen de lucht, maar pakken de reden van de vochtophoping aan met betere ventilatie — uitgevoerd door ons eigen team van Vernast-gecertificeerde vochtexperten. Zo blijft de mancave droog en betaalt u nooit twee keer voor hetzelfde probleem." },
        { label: "Na de werken", kop: "Klaar voor jarenlang zorgeloos gebruik", tekst: "Met de luchtvochtigheid onder controle en de schimmelrisico’s weggewerkt, kan de kelderruimte in Brugge weer volop dienstdoen. Dit project toont hoe een correcte diagnose en een grondige aanpak de basis leggen voor een blijvend gezond binnenklimaat." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke ruimte is anders, bekijk hoe wij gelijkaardige vochtproblemen elders aanpakten.",
      slugs: ["mevr-a-r-berlare", "mevr-arlette", "mevr-b-a-lokeren"],
    },
  },
  {
    slug: "levis",
    titel: "Schimmel in de kelderopslag gesaneerd bij Levi’s&reg;",
    chip: "Bouwdroging · winkelpand",
    soort: "vochtbeheersing",
    locatie: "Schimmelsanering · winkelpand",
    lede: "In de stockageruimte onder een Levi’s®-winkel tastte schimmel de opgeslagen collectie aan. De oorzaak was een jarenlange, onopgemerkte lekkage aan een versleten waterleiding. Vernast saneerde de schimmel en herstelde het binnenklimaat — volledig ingepland zodat de winkel gewoon open bleef.",
    tags: ["Schimmelsanering", "Luchtontvochtiging", "Geurneutralisatie"],
    hero: "/realisaties/levis/hero.webp",
    heroAlt: "Kelderopslag van de Levi’s®-winkel waar Vernast de schimmel- en vochtproblemen aanpakte",
    kaart: "/realisaties/levis/hero.webp",
    kaartAlt: "Realisatie: Schimmel in de kelderopslag gesaneerd bij Levi’s&reg;",
    facts: [
      { label: "Behandeling", waarde: "Schimmelsanering", detail: "+ luchtontvochtiging" },
      { label: "Analyse & oplossing", waarde: "24 uur", detail: "oorzaak vastgesteld" },
      { label: "Schimmelsanering", waarde: "3 dagen", detail: "wanden en oppervlakken" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "van 88% naar 49% RV" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "De opslagruimte in de kelder onder de Levi’s®-winkel was niet langer geschikt om voorraad te bewaren. Op de wanden had zich schimmel gevormd, de lucht voelde klam en er hing een muffe geur. Voor een retailpand is dat een reëel risico: vochtige lucht en schimmelsporen tasten textiel aan en bedreigen de kwaliteit van de gestockeerde collectie.",
      problemen: [
        "Schimmelvorming op de wanden van de kelderopslag",
        "Sterk verhoogde luchtvochtigheid tot 88% in de ruimte",
        "Muffe geurhinder en risico op beschadiging van de voorraad",
        "Een lekkage die jarenlang onopgemerkt was gebleven",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Een grondige inspectie met vochtmetingen bracht de bron snel aan het licht: een <b>versleten waterleiding die al jaren onopgemerkt lekte</b>. Het vrijkomende vocht liet de luchtvochtigheid oplopen tot 88%, precies het klimaat waarin schimmel zich vestigt en geurhinder ontstaat. Zolang die bron blijft, keren schimmel en muffe lucht telkens terug — hoe vaak de ruimte ook wordt schoongemaakt.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Dag 1, analyse en oplossing.</b> Binnen 24 uur werd de oorzaak vastgesteld en de lekkende leiding aangepakt, zodat er geen nieuw vocht meer bij kon komen.",
            "<b>Schimmelsanering.</b> Gedurende drie dagen behandelde Vernast alle aangetaste wanden en oppervlakken met professionele schimmelsaneringstechnieken, tot de ruimte volledig schimmelvrij en gereinigd was.",
            "<b>Klimaatherstel.</b> Vervolgens plaatsten we een krachtige luchtontvochtiger. Onder continue klimaatcontrole daalde de relatieve luchtvochtigheid van 88% naar een gezonde 49%.",
            "<b>Zonder de winkel te verstoren.</b> De hele ingreep werd zo ingepland dat de commerciële werking gewoon doorliep — de winkel bleef open terwijl de kelderopslag opnieuw droog, veilig en geurvrij werd gemaakt.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Levi’s®-retailpand" },
      { label: "Type", waarde: "Commercieel · kelderopslag" },
      { label: "Probleem", waarde: "Schimmel + hoge luchtvochtigheid" },
      { label: "Oorzaak", waarde: "Lekkende waterleiding" },
      { label: "Behandeling", waarde: "Schimmelsanering" },
      { label: "Extra", waarde: "Luchtontvochtiging (88% → 49%)" },
      { label: "Schimmelsanering", waarde: "3 dagen" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vaststelling tot de gesaneerde, droge opslagruimte. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/levis/a1.webp", alt: "Kelderopslag bij Levi’s® bij aankomst met schimmel op de wanden", bijschrift: "De opslagruimte bij aankomst", thumb: "Bij aankomst" },
        { src: "/realisaties/levis/a2.webp", alt: "Schimmelaanslag op het metselwerk van de stockageruimte bij Levi’s®", bijschrift: "Schimmelaanslag op de kelderwand", thumb: "Schimmel op de wand" },
        { src: "/realisaties/levis/a3.webp", alt: "Vochtplekken en schimmel achter de opslagrekken bij Levi’s®", bijschrift: "Schimmel achter de opslagrekken", thumb: "Achter de rekken" },
        { src: "/realisaties/levis/a4.webp", alt: "Detail van de aangetaste wand in de kelderopslag bij Levi’s®", bijschrift: "Detail van de aangetaste wand", thumb: "Aangetaste wand" },
        { src: "/realisaties/levis/a5.webp", alt: "Sporen van vocht rond de leidingdoorvoer in de kelder bij Levi’s®", bijschrift: "Vochtsporen rond de leidingdoorvoer", thumb: "Vochtsporen leiding" },
        { src: "/realisaties/levis/a6.webp", alt: "De versleten, lekkende waterleiding als bron van het vochtprobleem bij Levi’s®", bijschrift: "De lekkende waterleiding blootgelegd", thumb: "Lekkende leiding" },
        { src: "/realisaties/levis/a7.webp", alt: "Vochtmeting met sterk verhoogde luchtvochtigheid in de opslagruimte bij Levi’s®", bijschrift: "Vochtmeting: luchtvochtigheid tot 88%", thumb: "Vochtmeting 88%" },
        { src: "/realisaties/levis/a8.webp", alt: "Start van de schimmelsanering op de wanden van de kelderopslag bij Levi’s®", bijschrift: "Start van de schimmelsanering", thumb: "Sanering gestart" },
        { src: "/realisaties/levis/a9.webp", alt: "Professionele behandeling van de aangetaste oppervlakken bij Levi’s®", bijschrift: "Behandeling van wanden en oppervlakken", thumb: "Behandeling wanden" },
        { src: "/realisaties/levis/a10.webp", alt: "Gereinigde en gesaneerde kelderwand in de opslagruimte bij Levi’s®", bijschrift: "Gereinigde, schimmelvrije wand", thumb: "Gereinigde wand" },
        { src: "/realisaties/levis/a11.webp", alt: "Krachtige luchtontvochtiger geplaatst in de kelderopslag bij Levi’s®", bijschrift: "Luchtontvochtiger geplaatst", thumb: "Luchtontvochtiger" },
        { src: "/realisaties/levis/a12.webp", alt: "Klimaatcontrole tijdens het drogingsproces in de opslagruimte bij Levi’s®", bijschrift: "Klimaatcontrole tijdens het drogen", thumb: "Klimaatcontrole" },
        { src: "/realisaties/levis/a13.webp", alt: "Droge en geurvrije kelderopslag na de werken bij Levi’s®", bijschrift: "Droge, geurvrije opslagruimte", thumb: "Droge opslagruimte" },
        { src: "/realisaties/levis/a14.webp", alt: "Herstelde opslagruimte klaar voor stockopslag bij Levi’s®", bijschrift: "Klaar voor betrouwbare stockopslag", thumb: "Klaar voor stock" },
        { src: "/realisaties/levis/a15.webp", alt: "Eindresultaat met gezonde luchtvochtigheid in de kelderopslag bij Levi’s®", bijschrift: "Eindresultaat: gezonde 49% RV", thumb: "Resultaat 49%" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van schimmel en muffe lucht naar een gezonde opslagruimte",
      kolommen: [
        { label: "Waarom bedrijven voor ons kiezen", kop: "Oorzaak aangepakt, winkel bleef open", tekst: "Wij bestrijden niet alleen de zichtbare schimmel, maar de bron: de lekkende leiding en het klimaat dat het probleem voedde. Alles uitgevoerd door ons eigen team van Vernast-gecertificeerde vochtexperten en zo gepland dat de commerciële werking van de winkel ongestoord doorliep." },
        { label: "Na de werken", kop: "Droog, geurvrij en klaar voor stock", tekst: "Met de lekkage verholpen, de schimmel gesaneerd en de luchtvochtigheid teruggebracht van 88% naar 49%, is de kelderopslag opnieuw een betrouwbare stockageruimte. Dit project toont hoe een correcte diagnose en een grondige aanpak de basis leggen voor een blijvend gezond binnenklimaat." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elk pand is anders, bekijk hoe wij vocht en schimmel aanpakten in andere commerciële ruimtes.",
      slugs: ["bang-olufsen", "mnr-erdem-bedrijfsgebouw", "vernissage-boom"],
    },
  },
  {
    slug: "dhr-p-merksem",
    titel: "Vers pleisterwerk gecontroleerd drooggelegd",
    chip: "Bouwdroging · Merksem",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Merksem",
    lede: "Na het pleisteren zit er nog veel bouwvocht in de muren. In deze woning te Merksem schakelde de bouwheer Vernast in om dat vocht snel en veilig af te voeren met professionele bouwdrogers en gerichte ventilatie. Zo bleef scheurvorming en schimmel uit en kon de afwerking meteen verder.",
    tags: ["Bouwdroging", "Pleisterwerk drogen", "Schimmelpreventie"],
    hero: "/realisaties/dhr-p-merksem/hero.webp",
    heroAlt: "De woning in Merksem waar Vernast het verse pleisterwerk gecontroleerd liet drogen",
    kaart: "/realisaties/dhr-p-merksem/hero.webp",
    kaartAlt: "Realisatie: Vers pleisterwerk gecontroleerd drooggelegd",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ schimmelpreventie" },
      { label: "Analyse & aanpak", waarde: "24 uur", detail: "vochtmeting op locatie" },
      { label: "Droogfase", waarde: "3 dagen", detail: "krachtige bouwdrogers" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "gecontroleerde droging" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "Vers pleisterwerk veilig gedroogd in Merksem",
      lead: "In deze woning in Merksem was het volledige binnenpleisterwerk net aangebracht. Vers pleister bevat een grote hoeveelheid bouwvocht dat gecontroleerd moet verdampen. Droogt zo'n woning te snel of te ongelijk, dan ontstaan scheuren; droogt ze te traag, dan krijgen schimmel en muffe geuren vrij spel. Vernast werd ingeschakeld om die droogfase strak op te volgen.",
      problemen: [
        "Hoog restvochtgehalte in het pas aangebrachte pleisterwerk",
        "Sterk verhoogde luchtvochtigheid in de gesloten ruimtes",
        "Risico op scheurvorming en schimmel bij ongecontroleerd drogen",
        "De verdere afwerking kon pas starten na volledige droging",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met vochtmetingen op verschillende plaatsen brachten we het restvocht in de wanden en de luchtvochtigheid in de woning in kaart. De waarden lagen, zoals verwacht na een verse pleisterbeurt, ver boven het gewenste niveau. De conclusie was duidelijk: hier ging het niet om een structureel vochtprobleem, maar om <b>bouwvocht</b> dat er op een beheerste manier uit moest. Zonder actieve droging zou de natuurlijke verdamping wekenlang aanslepen, met scheur- en schimmelrisico tot gevolg.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Meten en opstellen.</b> Op basis van het volume en de vochtwaarden bepaalden we het aantal en de plaatsing van de bouwdrogers en ventilatoren, zodat de vochtige lucht overal werd afgevoerd en de luchtstroom elke wand bereikte.",
            "<b>Gecontroleerd drogen.</b> De krachtige bouwdrogers onttrokken het overtollige vocht aan de lucht, terwijl de ventilatie voor een gelijkmatige circulatie zorgde. Zo daalde het vochtgehalte snel én zonder spanningen in het pleisterwerk.",
            "<b>Opvolgen en bijsturen.</b> Tijdens de droogfase controleerden we de klimaat- en vochtwaarden en stuurden we de opstelling bij waar nodig, tot een stabiel en veilig niveau bereikt was.",
            "<b>Klaar voor de afwerking.</b> Met een droge, stabiele ondergrond kon het schilder- en afwerkingswerk zonder vertraging verder. Geen scheuren, geen schimmel, geen muffe geur, maar een gezonde basis om op te bouwen.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Merksem" },
      { label: "Type", waarde: "Woning in afwerkingsfase" },
      { label: "Probleem", waarde: "Bouwvocht in vers pleisterwerk" },
      { label: "Behandeling", waarde: "Bouwdroging + ventilatie" },
      { label: "Extra", waarde: "Schimmelpreventie" },
      { label: "Analyse & aanpak", waarde: "24 uur" },
      { label: "Droogfase", waarde: "3 dagen" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de woning in Merksem tot het verse pleisterwerk dat gecontroleerd droogt. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/dhr-p-merksem/a1.webp", alt: "De woning in Merksem met materiaallift tijdens de werken", bijschrift: "De woning in Merksem met materiaallift tijdens de werken", thumb: "De woning in Merksem" },
        { src: "/realisaties/dhr-p-merksem/a2.webp", alt: "Kelderwand met verse cementering, klaar om te drogen", bijschrift: "Kelderwand met verse cementering, klaar om te drogen", thumb: "Verse cementering kelder" },
        { src: "/realisaties/dhr-p-merksem/a3.webp", alt: "Vers gepleisterde leefruimte op de dekvloer in Merksem", bijschrift: "Vers gepleisterde leefruimte op de dekvloer", thumb: "Gepleisterde leefruimte" },
        { src: "/realisaties/dhr-p-merksem/a4.webp", alt: "Gepleisterde wanden die wachten op de gecontroleerde droging", bijschrift: "Gepleisterde wanden wachten op de droogbehandeling", thumb: "Gepleisterde wanden" },
        { src: "/realisaties/dhr-p-merksem/a5.webp", alt: "Zicht op de woning in Merksem met opstelling voor de bouwdroging", bijschrift: "Zicht op de woning met opstelling voor de bouwdroging", thumb: "Opstelling bouwdroging" },
        { src: "/realisaties/dhr-p-merksem/a6.webp", alt: "Ruime leefruimte met vers pleisterwerk en dekvloer", bijschrift: "Ruime leefruimte met vers pleisterwerk en dekvloer", thumb: "Vers pleisterwerk" },
        { src: "/realisaties/dhr-p-merksem/a7.webp", alt: "Frisse pleisterlaag over de volledige verdieping", bijschrift: "Frisse pleisterlaag over de volledige verdieping", thumb: "Frisse pleisterlaag" },
        { src: "/realisaties/dhr-p-merksem/a8.webp", alt: "Interieur in Merksem tijdens de droogfase van het pleisterwerk", bijschrift: "Interieur tijdens de droogfase van het pleisterwerk", thumb: "Droogfase interieur" },
        { src: "/realisaties/dhr-p-merksem/a9.webp", alt: "Pleisterwerk dat gelijkmatig droogt in de woning", bijschrift: "Pleisterwerk droogt gelijkmatig in de woning", thumb: "Gelijkmatige droging" },
        { src: "/realisaties/dhr-p-merksem/a10.webp", alt: "Ruwbouwfase met technieken vóór de afwerking", bijschrift: "Ruwbouwfase met technieken vóór de afwerking", thumb: "Ruwbouwfase technieken" },
        { src: "/realisaties/dhr-p-merksem/a11.webp", alt: "De woning in Merksem, klaar voor de verdere afwerking", bijschrift: "De woning in Merksem, klaar voor verdere afwerking", thumb: "Klaar voor afwerking" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van klam bouwvocht naar een droge, stabiele basis",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel drogen zonder schade of vertraging", tekst: "Onze bouwdrogers en ventilatie zijn afgestemd op het volume en het vochtgehalte van elke woning. Zo halen we het bouwvocht er beheerst uit, zonder scheuren te forceren en zonder dat de planning van uw bouwproject uitloopt." },
        { label: "Na de werken", kop: "Meteen klaar voor de afwerking", tekst: "Met het pleisterwerk droog en het binnenklimaat stabiel kon de woning in Merksem zonder risico verder afgewerkt worden. Dit project toont hoe een correcte diagnose en actieve droging schimmel, geurhinder en herstelkosten voorkomen." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders, bekijk hoe wij vocht en schimmel elders bij de bron aanpakten.",
      slugs: ["dhr-v-antwerpen", "dhr-w-sint-jansteen", "levis"],
    },
  },
  {
    slug: "dhr-h-brussel",
    titel: "Woning gedroogd en schimmelvrij na een lekkage",
    chip: "Bouwdroging · Brussel",
    soort: "waterschade",
    locatie: "Waterschade · Brussel",
    lede: "Na een lekkage in deze woning in Brussel had het binnendringende water het vochtgehalte fors opgedreven. Vernast bracht de schade in kaart met vochtmetingen en zette meteen bouwdroging in. Zo werd verdere schade voorkomen, de schimmel gesaneerd en het binnenklimaat volledig hersteld.",
    tags: ["Bouwdroging", "Schimmelsanering", "Ventilatie"],
    hero: "/realisaties/dhr-h-brussel/hero.webp",
    heroAlt: "Woning in Brussel waar Vernast na waterschade de bouwdroging en schimmelsanering uitvoerde",
    kaart: "/realisaties/dhr-h-brussel/hero.webp",
    kaartAlt: "Realisatie: Woning gedroogd en schimmelvrij na een lekkage",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ schimmelsanering" },
      { label: "Diagnose", waarde: "Waterschade", detail: "na een lekkage" },
      { label: "Analyse & droogplan", waarde: "24 u", detail: "vochtmeting + toestellen geplaatst" },
      { label: "Klimaatherstel", waarde: "4 werkdagen", detail: "gecontroleerd terugdrogen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "Toen Vernast in deze Brusselse woning arriveerde, was de situatie dringend. Een lekkage had water diep in de constructie gebracht, waardoor het vochtgehalte in muren en vloer sterk was opgelopen. Zonder snelle interventie dreigden schimmelvorming en blijvende schade aan de afwerking en het metselwerk.",
      problemen: [
        "Binnendringend water door een lekkage in de woning",
        "Sterk verhoogde vochtwaarden in muren en vloer",
        "Beginnende schimmelvorming op de vochtige oppervlakken",
        "Risico op structurele schade als het vocht bleef zitten",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met vochtmetingen op verschillende plaatsen brachten we de omvang van de schade nauwkeurig in kaart. Het beeld was duidelijk: <b>waterschade na een lekkage</b>. Het overtollige water had zich in de bouwmaterialen genesteld. Zolang dat vocht niet gecontroleerd wordt afgevoerd, blijven schimmel en geurhinder terugkomen en tast het vocht de constructie verder aan.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Binnen 24 u, analyse en droogplan.</b> Direct na de vaststelling maakten we een droogplan op en plaatsten we de eerste bouwdrogers en ventilatoren op de strategische punten in de woning.",
            "<b>Bouwdroging met professionele toestellen.</b> Door de doordachte opstelling van bouwdrogers en ventilatoren werd het vochtgehalte snel tot een veilig niveau herleid, zonder de bewoning onnodig te verstoren.",
            "<b>Schimmelsanering, 3 dagen.</b> De door vocht aangetaste zones werden grondig gesaneerd, zodat elke schimmelbron verdween en de oppervlakken opnieuw gezond werden.",
            "<b>Klimaatherstel, 4 dagen.</b> De woning kreeg de kans om gecontroleerd terug te drogen, opgevolgd met klimaat- en luchtmetingen tot een stabiel, gezond binnenklimaat bereikt was.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Brussel" },
      { label: "Type", waarde: "Woning" },
      { label: "Probleem", waarde: "Waterschade na lekkage" },
      { label: "Behandeling", waarde: "Bouwdroging + schimmelsanering" },
      { label: "Analyse & droogplan", waarde: "24 u" },
      { label: "Schimmelsanering", waarde: "3 werkdagen" },
      { label: "Klimaatherstel", waarde: "4 werkdagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vaststelling van de waterschade tot de droge, gesaneerde woning. Blader met de pijlen of kies een stap hieronder.",
      fotos: [
        { src: "/realisaties/dhr-h-brussel/a1.webp", alt: "Waterschade in de Brusselse woning bij aanvang van de werken", bijschrift: "Waterschade in de woning bij aanvang", thumb: "Waterschade bij aanvang" },
        { src: "/realisaties/dhr-h-brussel/a2.webp", alt: "Vochtplekken op muur en plafond in kaart gebracht", bijschrift: "Vochtplekken op muur en plafond in kaart gebracht", thumb: "Vochtplekken in kaart" },
        { src: "/realisaties/dhr-h-brussel/a3.webp", alt: "Vochtmeting op de aangetaste muur", bijschrift: "Vochtmeting op de aangetaste muur", thumb: "Vochtmeting" },
        { src: "/realisaties/dhr-h-brussel/a4.webp", alt: "Door vocht aangetast oppervlak van dichtbij", bijschrift: "Aangetast oppervlak van dichtbij", thumb: "Aangetast oppervlak" },
        { src: "/realisaties/dhr-h-brussel/a5.webp", alt: "Vochtschade langs de wandaansluiting", bijschrift: "Vochtschade langs de wandaansluiting", thumb: "Wandaansluiting" },
        { src: "/realisaties/dhr-h-brussel/a6.webp", alt: "Zichtbare sporen van binnendringend vocht", bijschrift: "Sporen van binnendringend vocht", thumb: "Binnendringend vocht" },
        { src: "/realisaties/dhr-h-brussel/a7.webp", alt: "Loskomende afwerking door het vocht", bijschrift: "Loskomende afwerking door het vocht", thumb: "Loskomende afwerking" },
        { src: "/realisaties/dhr-h-brussel/a8.webp", alt: "Beoordeling van de vochtige zone voor de sanering", bijschrift: "Beoordeling van de vochtige zone", thumb: "Vochtige zone" },
        { src: "/realisaties/dhr-h-brussel/a9.webp", alt: "Voorbereiding voor de schimmelsanering", bijschrift: "Voorbereiding voor de schimmelsanering", thumb: "Voorbereiding sanering" },
        { src: "/realisaties/dhr-h-brussel/a10.webp", alt: "Behandeling van de aangetaste oppervlakken", bijschrift: "Behandeling van de aangetaste oppervlakken", thumb: "Oppervlakken behandeld" },
        { src: "/realisaties/dhr-h-brussel/a11.webp", alt: "Sanering van de schimmelplekken in de woning", bijschrift: "Sanering van de schimmelplekken", thumb: "Schimmelsanering" },
        { src: "/realisaties/dhr-h-brussel/a12.webp", alt: "Gereinigde zone na de schimmelbehandeling", bijschrift: "Gereinigde zone na de behandeling", thumb: "Gereinigde zone" },
        { src: "/realisaties/dhr-h-brussel/a13.webp", alt: "Bouwdroger geplaatst in de ruimte", bijschrift: "Bouwdroger geplaatst in de ruimte", thumb: "Bouwdroger geplaatst" },
        { src: "/realisaties/dhr-h-brussel/a14.webp", alt: "Ventilatie ingezet voor een gecontroleerde droging", bijschrift: "Ventilatie ingezet voor gecontroleerde droging", thumb: "Ventilatie ingezet" },
        { src: "/realisaties/dhr-h-brussel/a15.webp", alt: "Droogopstelling met toestellen in de woning", bijschrift: "Droogopstelling in de woning", thumb: "Droogopstelling" },
        { src: "/realisaties/dhr-h-brussel/a16.webp", alt: "Opvolging van het vochtniveau tijdens het drogen", bijschrift: "Opvolging van het vochtniveau tijdens het drogen", thumb: "Vochtopvolging" },
        { src: "/realisaties/dhr-h-brussel/a17.webp", alt: "Ruimte klaar voor het klimaatherstel", bijschrift: "Ruimte klaar voor klimaatherstel", thumb: "Klaar voor herstel" },
        { src: "/realisaties/dhr-h-brussel/a18.webp", alt: "Droge, gezonde basis na de werken in Brussel", bijschrift: "Droge, gezonde basis na de werken", thumb: "Droge basis" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van waterschade naar een droge, gezonde woning",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel ter plaatse, blijvend resultaat", tekst: "Bij waterschade telt elke dag. Ons eigen team van Vernast-gecertificeerde vochtexperten reageert meteen, met een droogplan en professionele toestellen die de schade beperken. Zo pakken we niet alleen het water aan, maar ook de schimmel die erop volgt." },
        { label: "Na de werken", kop: "Een droge basis, klaar voor afwerking", tekst: "Met het vocht afgevoerd, de schimmel gesaneerd en het binnenklimaat hersteld, is de woning opnieuw droog en gezond. Dit project in Brussel toont hoe een snelle diagnose en een grondige aanpak structurele schade en schimmel definitief voorkomen." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders — bekijk hoe wij gelijkaardige vochtproblemen elders aanpakten.",
      slugs: ["dhr-m-brussel", "dhr-m-grimbergen", "dhr-p-merksem"],
    },
  },
  {
    slug: "dhr-e-schilde",
    titel: "Bouwvocht gecontroleerd weggedroogd in een nieuwbouwvilla",
    chip: "Bouwdroging · Schilde",
    soort: "bouwvocht",
    locatie: "Bouwdroging · Schilde",
    lede: "In deze nieuwbouwvilla in Schilde zorgde het verse pleisterwerk voor een hoog bouwvochtgehalte. Vernast bracht met professionele bouwdroging en gerichte luchtcirculatie het vocht snel omlaag, zodat de schilder- en vloerafwerking zonder risico op vlekken of krimpscheuren kon starten — en de bouwplanning perfect op schema bleef.",
    tags: ["Bouwdroging", "Pleisterwerk", "Schimmelsanering"],
    hero: "/realisaties/dhr-e-schilde/hero.webp",
    heroAlt: "Nieuwbouwvilla in Schilde waar Vernast het bouwvocht met professionele bouwdroging aanpakte",
    kaart: "/realisaties/dhr-e-schilde/hero.webp",
    kaartAlt: "Realisatie: Bouwvocht gecontroleerd weggedroogd in een nieuwbouwvilla",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "na het pleisterwerk" },
      { label: "Analyse & Oplossing", waarde: "24 u", detail: "vochtmeting en plan" },
      { label: "Schimmelsanering", waarde: "3 d", detail: "preventief drooghouden" },
      { label: "Klimaatherstel", waarde: "4 d", detail: "gezond binnenklimaat" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie na het pleisterwerk",
      lead: "In een nieuwbouwwoning brengt vers pleisterwerk grote hoeveelheden water in de constructie. In deze villa in Schilde lag het vochtgehalte na het pleisteren te hoog om meteen verder af te werken. Zonder ingrijpen zou het natuurlijke drogen weken duren en de strakke bouwplanning in de war sturen.",
      problemen: [
        "Sterk verhoogd bouwvocht in het verse pleisterwerk",
        "Risico op krimpscheuren en vlekken bij te snel schilderen",
        "Onvoldoende natuurlijke ventilatie om het vocht af te voeren",
        "Een strakke bouwplanning die geen tijd liet voor traag drogen",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Vochtmetingen op verschillende hoogtes bevestigden het beeld: hier ging het niet om opstijgend of infiltrerend vocht, maar om <b>bouwvocht</b>. Dat is het overtollige aanmaakwater uit pleister, chape en beton dat na de ruwbouw nog uit de constructie moet. In een goed geïsoleerde, luchtdichte nieuwbouwvilla verdwijnt dat vocht niet vanzelf: zonder actieve droging blijft het in de wanden hangen en vertraagt het de hele afwerking.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse en plan (24 u).</b> Na een grondige vochtmeting bepaalde Vernast het aantal en de opstelling van de bouwdrogers, afgestemd op het volume en de indeling van de villa.",
            "<b>Bouwdroging.</b> Krachtige luchtontvochtigers en ventilatoren werden strategisch verdeeld over de ruimtes. Zo werd het vocht uit het pleisterwerk onttrokken en de vochtige lucht continu afgevoerd, met dagelijkse opvolging van de meetwaarden.",
            "<b>Schimmelsanering (3 d).</b> Door de ruimtes drooghoudend te behandelen kreeg schimmel geen kans om zich in het vochtige pleisterwerk te vestigen — een preventieve stap die latere problemen voorkomt.",
            "<b>Klimaatherstel (4 d).</b> Toen het vochtgehalte op een gezond niveau lag, werd het binnenklimaat gestabiliseerd. De wanden waren droog en egaal, klaar voor een vlekkeloze schilder- en vloerafwerking.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Schilde" },
      { label: "Type woning", waarde: "Nieuwbouwvilla" },
      { label: "Probleem", waarde: "Bouwvocht na pleisterwerk" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Extra", waarde: "Preventieve schimmelsanering" },
      { label: "Analyse & Oplossing", waarde: "24 u" },
      { label: "Klimaatherstel", waarde: "4 werkdagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de eerste vochtmeting tot een droge, afwerkingsklare villa in Schilde. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/dhr-e-schilde/a1.webp", alt: "Nieuwbouwvilla in Schilde klaar voor de droogfase", bijschrift: "De nieuwbouwvilla klaar voor de droogfase", thumb: "Villa bij aanvang" },
        { src: "/realisaties/dhr-e-schilde/a2.webp", alt: "Vers pleisterwerk met een hoog bouwvochtgehalte", bijschrift: "Vers pleisterwerk met een hoog bouwvochtgehalte", thumb: "Vers pleisterwerk" },
        { src: "/realisaties/dhr-e-schilde/a3.webp", alt: "Bouwdroger opgesteld in de leefruimte van de villa", bijschrift: "Bouwdroger opgesteld in de leefruimte", thumb: "Bouwdroger geplaatst" },
        { src: "/realisaties/dhr-e-schilde/a4.webp", alt: "Luchtontvochtiger in werking tijdens de bouwdroging", bijschrift: "Luchtontvochtiger in werking", thumb: "Luchtontvochtiger" },
        { src: "/realisaties/dhr-e-schilde/a5.webp", alt: "Gerichte luchtcirculatie langs de pleisterwanden", bijschrift: "Gerichte luchtcirculatie langs de wanden", thumb: "Luchtcirculatie" },
        { src: "/realisaties/dhr-e-schilde/a6.webp", alt: "Vochtmeting van het pleisterwerk in de villa", bijschrift: "Vochtmeting van het pleisterwerk", thumb: "Vochtmeting" },
        { src: "/realisaties/dhr-e-schilde/a7.webp", alt: "Dagelijkse opvolging van het vochtgehalte", bijschrift: "Dagelijkse opvolging van het vochtgehalte", thumb: "Vochtopvolging" },
        { src: "/realisaties/dhr-e-schilde/a8.webp", alt: "Droging van de pleisterwanden op het gelijkvloers", bijschrift: "Droging van de pleisterwanden", thumb: "Pleisterwanden drogen" },
        { src: "/realisaties/dhr-e-schilde/a9.webp", alt: "Bouwdrogers verdeeld over de verschillende ruimtes", bijschrift: "Bouwdrogers verdeeld over de ruimtes", thumb: "Drogers verdeeld" },
        { src: "/realisaties/dhr-e-schilde/a10.webp", alt: "Controle van het binnenklimaat tijdens de droging", bijschrift: "Controle van het binnenklimaat", thumb: "Klimaatcontrole" },
        { src: "/realisaties/dhr-e-schilde/a11.webp", alt: "Vochtige lucht wordt continu uit de constructie afgevoerd", bijschrift: "Vochtafvoer uit de constructie", thumb: "Vochtafvoer" },
        { src: "/realisaties/dhr-e-schilde/a12.webp", alt: "Droge, egale pleisterwanden na de behandeling", bijschrift: "Droge, egale wanden na behandeling", thumb: "Egale wanden" },
        { src: "/realisaties/dhr-e-schilde/a13.webp", alt: "Nazicht van hoeken en aansluitingen op restvocht", bijschrift: "Nazicht van hoeken en aansluitingen", thumb: "Hoeken nagekeken" },
        { src: "/realisaties/dhr-e-schilde/a14.webp", alt: "Meting bevestigt het dalende vochtgehalte", bijschrift: "Meting bevestigt het dalende vochtgehalte", thumb: "Dalend vocht" },
        { src: "/realisaties/dhr-e-schilde/a15.webp", alt: "Ruimte klaar voor de verdere afwerking", bijschrift: "Ruimte klaar voor de afwerking", thumb: "Klaar voor afwerking" },
        { src: "/realisaties/dhr-e-schilde/a16.webp", alt: "Overzicht van de behandelde leefruimte in de villa", bijschrift: "Overzicht van de behandelde leefruimte", thumb: "Overzicht leefruimte" },
        { src: "/realisaties/dhr-e-schilde/a17.webp", alt: "Detail van het gedroogde pleisterwerk", bijschrift: "Detail van het gedroogde pleisterwerk", thumb: "Gedroogd pleisterwerk" },
        { src: "/realisaties/dhr-e-schilde/a18.webp", alt: "Resultaat: een gezond en droog binnenklimaat in Schilde", bijschrift: "Een gezond en droog binnenklimaat", thumb: "Gezond binnenklimaat" },
        { src: "/realisaties/dhr-e-schilde/a19.webp", alt: "Afgewerkte ruimte na de droogperiode", bijschrift: "Afgewerkte ruimte na de droogperiode", thumb: "Na de droging" },
        { src: "/realisaties/dhr-e-schilde/a20.webp", alt: "Eindresultaat van de bouwdroging, klaar voor bewoning", bijschrift: "Eindresultaat, klaar voor bewoning", thumb: "Eindresultaat" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van nat bouwvocht naar een afwerkingsklare villa",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snelheid zonder in te boeten op kwaliteit", tekst: "Met professionele bouwdroging halen we het vocht uit de constructie in dagen in plaats van weken, uitgevoerd door ons eigen team van Vernast-gecertificeerde vochtexperten. Zo blijft de bouwplanning op schema en start de afwerking op een droge, betrouwbare ondergrond." },
        { label: "Na de werken", kop: "Klaar voor een vlekkeloze afwerking", tekst: "Met het bouwvocht op een gezond niveau en het binnenklimaat gestabiliseerd kon de schilder- en vloerafwerking meteen van start. Dit project in Schilde toont hoe een correcte diagnose en een doordachte droogaanpak de basis leggen voor een duurzaam en vlekkeloos eindresultaat." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders — bekijk hoe wij gelijkaardige vocht- en droogproblemen elders aanpakten.",
      slugs: ["dhr-g-aartselaar", "dhr-h-brussel", "dhr-m-brussel"],
    },
  },
  {
    slug: "dhr-d-c-antwerpen",
    titel: "Kelder met waterschade weer droog gemaakt",
    chip: "Bouwdroging · Antwerpen",
    soort: "waterschade",
    locatie: "Kelderdroging · Antwerpen",
    lede: "In deze Antwerpse woning zorgde waterindringing voor een doorweekte, muffe kelder met beginnende schimmel. Vernast bracht het vochtgehalte met professionele bouwdrogers gecontroleerd naar beneden, saneerde de schimmel en dichtte de kelder af — zodat de ruimte weer droog, gezond en bruikbaar werd.",
    tags: ["Bouwdroging", "Schimmelsanering", "Kelderdichting"],
    hero: "/realisaties/dhr-d-c-antwerpen/hero.webp",
    heroAlt: "Kelder in Antwerpen na de vochtbehandeling door Vernast",
    kaart: "/realisaties/dhr-d-c-antwerpen/hero.webp",
    kaartAlt: "Realisatie: Kelder met waterschade weer droog gemaakt",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "+ schimmelsanering" },
      { label: "Analyse & oplossing", waarde: "24 u", detail: "inspectie en vochtmeting" },
      { label: "Schimmelsanering", waarde: "3 dagen", detail: "kelder gereinigd" },
      { label: "Klimaatherstel", waarde: "4 dagen", detail: "gecontroleerd drogen" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "De situatie bij aankomst",
      lead: "Toen Vernast bij deze woning in Antwerpen aankwam, stond de kelder onder invloed van waterschade. Het metselwerk en de vloer waren verzadigd met vocht, de lucht was klam en muf, en op de kelderwanden tekende zich al schimmel af. Zonder ingrijpen dreigde de schade zich verder te verspreiden naar de bovenliggende ruimtes.",
      problemen: [
        "Waterschade met een sterk verhoogd vochtgehalte in kelderwanden en vloer",
        "Beginnende schimmelvorming op de kelderwanden",
        "Een klamme, muffe geur en een ongezond binnenklimaat in de kelder",
        "Risico op blijvende vochtschade zonder snelle, gerichte droging",
      ],
      blokken: [
        {
          kop: "Onze diagnose",
          alineas: [
            "Met vochtmetingen op verschillende plaatsen brachten we de omvang van de <b>waterschade</b> in kaart. De ruimte was zo verzadigd dat schimmel en geurhinder onvermijdelijk terugkeren zolang het vocht niet volledig uit de bouwmaterialen verdwijnt. Enkel oppervlakkig reinigen zou hier geen blijvend resultaat geven — de kelder moest eerst tot in de kern gedroogd worden.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Analyse & oplossing.</b> Binnen 24 uur werd de kelder geïnspecteerd en het dryplan bepaald: professionele bouwdrogers en luchtontvochtigers werden strategisch geplaatst om de vochtige lucht en het bouwvocht af te voeren.",
            "<b>Schimmelsanering.</b> De aangetaste kelderwanden werden grondig gesaneerd, zodat de schimmel bij de bron werd verwijderd en zich niet opnieuw kon vestigen.",
            "<b>Kelderdichting.</b> Om nieuwe waterindringing tegen te gaan, werd de kelder afgedicht, zodat het vocht van buitenaf geen kans meer krijgt.",
            "<b>Klimaatherstel.</b> Tijdens het gecontroleerd drogen volgden we het vochtgehalte met continue metingen op, tot de kelder een stabiel en veilig klimaat bereikte.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Locatie", waarde: "Antwerpen" },
      { label: "Type", waarde: "Woning met kelder" },
      { label: "Probleem", waarde: "Waterschade + schimmel" },
      { label: "Behandeling", waarde: "Bouwdroging + schimmelsanering" },
      { label: "Extra", waarde: "Kelderdichting" },
      { label: "Analyse & oplossing", waarde: "24 u" },
      { label: "Schimmelsanering", waarde: "3 dagen" },
      { label: "Klimaatherstel", waarde: "4 dagen" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Beelden van de bouwdroging en schimmelsanering in de kelder in Antwerpen. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/dhr-d-c-antwerpen/a1.webp", alt: "Kelderwand met waterschade en schimmel bij aanvang van de werken in Antwerpen", bijschrift: "Kelderwand met waterschade bij aanvang", thumb: "Waterschade bij aanvang" },
        { src: "/realisaties/dhr-d-c-antwerpen/a2.webp", alt: "Vochtige kelder met beginnende schimmelvorming voor de behandeling", bijschrift: "Beginnende schimmel op de kelderwand", thumb: "Beginnende schimmel" },
        { src: "/realisaties/dhr-d-c-antwerpen/a3.webp", alt: "Inspectie van de vochtschade in de kelder in Antwerpen", bijschrift: "Inspectie van de vochtschade", thumb: "Inspectie vochtschade" },
        { src: "/realisaties/dhr-d-c-antwerpen/a4.webp", alt: "Doorweekt metselwerk in de kelder voor de bouwdroging", bijschrift: "Doorweekt metselwerk in de kelder", thumb: "Doorweekt metselwerk" },
        { src: "/realisaties/dhr-d-c-antwerpen/a5.webp", alt: "Aangetaste kelderwand klaar voor schimmelsanering", bijschrift: "Kelderwand klaar voor sanering", thumb: "Klaar voor sanering" },
        { src: "/realisaties/dhr-d-c-antwerpen/a6.webp", alt: "Schimmelsanering van de kelderwanden in Antwerpen", bijschrift: "Schimmelsanering van de wanden", thumb: "Schimmelsanering" },
        { src: "/realisaties/dhr-d-c-antwerpen/a7.webp", alt: "Gereinigde kelderwand na de schimmelsanering", bijschrift: "Gereinigde wand na de sanering", thumb: "Gereinigde wand" },
        { src: "/realisaties/dhr-d-c-antwerpen/a8.webp", alt: "Kelderdichting aangebracht tegen nieuwe waterindringing", bijschrift: "Kelderdichting aangebracht", thumb: "Kelderdichting" },
        { src: "/realisaties/dhr-d-c-antwerpen/a9.webp", alt: "Afgedichte kelderwand tijdens de werken in Antwerpen", bijschrift: "Afgedichte kelderwand", thumb: "Afgedichte wand" },
        { src: "/realisaties/dhr-d-c-antwerpen/a10.webp", alt: "Bouwdroger geplaatst in de kelder voor gecontroleerd drogen", bijschrift: "Bouwdroger geplaatst voor het drogen", thumb: "Bouwdroger geplaatst" },
        { src: "/realisaties/dhr-d-c-antwerpen/a11.webp", alt: "Gecontroleerd drogen van de kelder met vochtopvolging", bijschrift: "Gecontroleerd drogen met vochtopvolging", thumb: "Gecontroleerd drogen" },
        { src: "/realisaties/dhr-d-c-antwerpen/a12.webp", alt: "Droge kelder na de behandeling door Vernast in Antwerpen", bijschrift: "Droge kelder na de behandeling", thumb: "Droge kelder" },
        { src: "/realisaties/dhr-d-c-antwerpen/a13.webp", alt: "Herstelde, gezonde kelder als eindresultaat in Antwerpen", bijschrift: "Herstelde, gezonde kelder als resultaat", thumb: "Gezond eindresultaat" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Van doorweekte kelder naar een droge, gezonde ruimte",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snel ter plaatse, oorzaak én gevolg aangepakt", tekst: "Bij waterschade telt elke dag. Ons eigen team van Vernast-gecertificeerde vochtexperten stond snel op locatie in Antwerpen en combineerde bouwdroging, schimmelsanering en kelderdichting in één sluitende aanpak. Zo betaalt u nooit twee keer voor hetzelfde probleem." },
        { label: "Na de werken", kop: "Een kelder die weer bruikbaar is", tekst: "Met het vocht uit de bouwmaterialen, de schimmel gesaneerd en de kelder afgedicht, bereikte de ruimte opnieuw een stabiel en gezond klimaat. Dit project toont hoe een snelle diagnose en een grondige uitvoering blijvende vochtschade voorkomen." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elke woning is anders, bekijk hoe wij gelijkaardige vocht- en droogproblemen elders aanpakten.",
      slugs: ["mevr-j-berchem", "dhr-e-schilde", "dhr-g-aartselaar"],
    },
  },
  {
    slug: "bang-olufsen",
    titel: "Versnelde bouwdroging binnen een strak bouwschema bij Bang & Olufsen",
    chip: "Bouwdroging · winkelpand",
    soort: "bouwvocht",
    locatie: "Bouwdroging · winkelpand",
    lede: "Bij de renovatie van deze Bang & Olufsen-winkel stond de planning strak. Een verkooppand mag niet langer dan nodig gesloten blijven, en toch moesten vers pleister- en chapewerk gecontroleerd kunnen uitharden. Vernast koos daarom voor een doelgerichte bouwdroging die het volledige bouwschema haalbaar maakte, zonder de werking van de winkel onnodig te verstoren.",
    tags: ["Bouwdroging", "Totale renovatie", "Commercieel pand"],
    hero: "/realisaties/bang-olufsen/hero.webp",
    heroAlt: "De gevel van de Bang & Olufsen-winkel waar Vernast een versnelde bouwdroging uitvoerde",
    kaart: "/realisaties/bang-olufsen/hero.webp",
    kaartAlt: "Realisatie: Versnelde bouwdroging binnen een strak bouwschema bij Bang & Olufsen",
    facts: [
      { label: "Behandeling", waarde: "Bouwdroging", detail: "snel & doelgericht" },
      { label: "Voorbereiding", waarde: "24 uur", detail: "werf drooggezet" },
      { label: "Werkzaamheden", waarde: "3 dagen", detail: "pleister- & chapewerk" },
      { label: "Droogtijd", waarde: "4 dagen", detail: "afgestemd op de planning" },
    ],
    verhaal: {
      eyebrow: "Het project",
      kop: "Snelheid winnen zonder in te boeten op kwaliteit",
      lead: "In een commercieel pand telt elke dag: hoe korter de werf duurt, hoe sneller de winkel weer open kan. Tegelijk mag die tijdsdruk nooit ten koste gaan van de bouwkwaliteit. Om beide te verzoenen bij deze Bang & Olufsen-winkel, stemde Vernast het volledige droogproces af op de korte doorlooptijd, zodat elke volgende fase zonder wachttijd kon starten.",
      problemen: [
        "Strak bouwschema met nauwelijks marge voor natuurlijke droogtijd",
        "Vers pleister- en chapewerk dat gecontroleerd moest uitharden",
        "Een winkelpand dat zo snel mogelijk weer klantklaar moest zijn",
        "Bouwvocht dat elke volgende afwerkingsfase dreigde te vertragen",
      ],
      blokken: [
        {
          kop: "Onze aanpak",
          alineas: [
            "Op basis van de vochtwaarden en de bouwplanning stelden we een gerichte droogopstelling samen: professionele bouwdrogers, gecombineerd met ventilatoren die het vrijgekomen vocht continu afvoeren. Binnen <b>24 uur</b> stond de werf drooggezet, zodat het binnenklimaat meteen onder controle kwam en het droogproces vanaf dag één op de korte doorlooptijd was afgestemd.",
          ],
        },
        {
          kop: "De uitvoering, stap voor stap",
          alineas: [
            "<b>Voorbereiding, 24 uur.</b> De ruimtes werden afgeschermd en de bouwdrogers en ventilatoren opgesteld en aangesloten, zodat het vochtgehalte in het volledige pand snel begon te dalen.",
            "<b>Pleisterwerk zonder wachttijd.</b> Zodra de ondergrond voldoende droog was, kon het bepleisteringswerk vrijwel onmiddellijk starten op een egale, stabiele basis, wat een strak en consistent resultaat opleverde.",
            "<b>Chapewerk onder ideale omstandigheden.</b> Kort daarna volgden de chapewerken. Dankzij het gestuurde binnenklimaat kon de chape snel en gelijkmatig uitharden tot een vlakke, draagkrachtige ondergrond.",
            "<b>Continue opvolging.</b> Tijdens de volledige droogtijd van vier dagen volgden we de vochtwaarden op de voet, zodat elke fase naadloos op de volgende aansloot en de deadline gehaald werd.",
          ],
        },
      ],
    },
    fiche: [
      { label: "Type", waarde: "Commercieel pand" },
      { label: "Opdracht", waarde: "Totale renovatie" },
      { label: "Behandeling", waarde: "Bouwdroging" },
      { label: "Voorbereiding", waarde: "24 uur" },
      { label: "Werkzaamheden", waarde: "3 dagen" },
      { label: "Droogtijd", waarde: "4 dagen" },
      { label: "Vervolg", waarde: "Pleister- + chapewerk" },
    ],
    album: {
      eyebrow: "Achter de schermen",
      kop: "Het project in beeld",
      intro: "Van de afbraakfase tot de afgewerkte showroom, met de bouwdrogers volop aan het werk. Blader met de pijlen of kies een beeld hieronder.",
      fotos: [
        { src: "/realisaties/bang-olufsen/a1.webp", alt: "Afgewerkte Bang & Olufsen-showroom met nieuw geplaatste zwarte railverlichting", bijschrift: "Afgewerkte showroom met nieuw geplaatste railverlichting", thumb: "Afgewerkte showroom" },
        { src: "/realisaties/bang-olufsen/a2.webp", alt: "Afbraakfase bij Bang & Olufsen met gestript plafond en blootgelegde ondergrond", bijschrift: "Afbraakfase: gestript plafond en blootgelegde ondergrond", thumb: "Afbraakfase" },
        { src: "/realisaties/bang-olufsen/a3.webp", alt: "Strak bepleisterde ruimte in het Bang & Olufsen-pand, klaar voor afwerking", bijschrift: "Strak bepleisterde ruimte, klaar voor de afwerking", thumb: "Bepleisterde ruimte" },
        { src: "/realisaties/bang-olufsen/a4.webp", alt: "Pleisterwerk in uitvoering met rolsteiger in het Bang & Olufsen-pand", bijschrift: "Pleisterwerk in uitvoering met rolsteiger", thumb: "Pleisterwerk met rolsteiger" },
        { src: "/realisaties/bang-olufsen/a5.webp", alt: "Bouwdroging bij de afgeschermde etalage van de Bang & Olufsen-winkel", bijschrift: "Droging bij de afgeschermde etalage", thumb: "Droging bij de etalage" },
        { src: "/realisaties/bang-olufsen/a6.webp", alt: "Bouwdrogers en ventilatoren zetten de Bang & Olufsen-ruimte versneld droog", bijschrift: "Bouwdrogers en ventilatoren zetten de ruimte versneld droog", thumb: "Versnelde droging" },
        { src: "/realisaties/bang-olufsen/a7.webp", alt: "Bouwdroger aan het werk met zicht op de winkelpui van Bang & Olufsen", bijschrift: "Bouwdroger aan het werk met zicht op de winkelpui", thumb: "Bouwdroger aan de pui" },
        { src: "/realisaties/bang-olufsen/a8.webp", alt: "Droogopstelling bij de ingang tijdens de renovatie van het Bang & Olufsen-pand", bijschrift: "Droogopstelling bij de ingang tijdens de renovatie", thumb: "Droogopstelling ingang" },
        { src: "/realisaties/bang-olufsen/a9.webp", alt: "Opvolging van het droogproces in het ruwe, bepleisterde Bang & Olufsen-pand", bijschrift: "Opvolging van het droogproces in de ruwe ruimte", thumb: "Opvolging droogproces" },
        { src: "/realisaties/bang-olufsen/a10.webp", alt: "Vernast-team plaatst de bouwdrogers op de werf bij Bang & Olufsen", bijschrift: "Ons team plaatst de bouwdrogers op de werf", thumb: "Team plaatst bouwdrogers" },
      ],
    },
    resultaat: {
      eyebrow: "Het resultaat",
      kop: "Op tijd opgeleverd, zonder compromissen",
      kolommen: [
        { label: "Waarom klanten voor ons kiezen", kop: "Snelheid en kwaliteit hand in hand", tekst: "Door de bouwdroging exact op de planning af te stemmen, konden pleister- en chapewerk elkaar zonder wachttijd opvolgen. Zo bewaakten we tegelijk de strakke deadline én de bouwkwaliteit, met eigen materieel en ons eigen Vernast-team. Een commercieel pand hoeft daardoor niet langer gesloten te blijven dan strikt nodig." },
        { label: "Na de werken", kop: "Een droge, egale basis", tekst: "Het resultaat is een droge, stabiele en vlakke ondergrond, perfect klaar voor de verdere afwerking en inrichting van de winkel. Dit project laat zien hoe een doelgerichte bouwdroging kostbare bouwtijd wint zonder in te leveren op het eindresultaat." },
      ],
    },
    meer: {
      eyebrow: "Meer projecten",
      kop: "Bekijk ook deze realisaties",
      intro: "Elk pand is anders — bekijk hoe wij gelijkaardige uitdagingen elders aanpakten.",
      slugs: ["mnr-erdem-bedrijfsgebouw", "levis", "dhr-b-brussel"],
    },
  },
];

export const telPerSoort = (soort: RealisatieSoort): number =>
  REALISATIES.filter((r) => r.soort === soort).length;

export const getRealisatie = (slug: string): Realisatie | undefined =>
  REALISATIES.find((r) => r.slug === slug);

/** De gemeente uit "Bouwdroging · Boom"; niet elk project noemt er een. */
export const plaatsVan = (r: Realisatie): string | null => {
  const deel = r.chip.split("·")[1]?.trim();
  return deel && !/^(bedrijfsgebouw|winkelpand)$/i.test(deel) ? deel : null;
};

/**
 * Titel en beschrijving van een projectpagina.
 *
 * Staat hier en niet in `src/data/seo.ts` omdat er 22 varianten van dezelfde
 * route zijn — hetzelfde patroon als `packageMetaTitle` in `data/packages.ts`.
 *
 * De titel wordt op het geheel afgekapt, niet op de projecttitel alleen: met
 * " in Sint-Pieters-Woluwe | Vernast" erachter liep hij anders tot 75 tekens.
 */
const TITEL_MAX = 60;

export function realisatieMeta(r: Realisatie): { title: string; description: string } {
  const plaats = plaatsVan(r);
  const staart = `${plaats ? ` in ${plaats}` : ""} | Vernast`;
  const ruimte = TITEL_MAX - staart.length;
  const kop = r.titel.length > ruimte ? `${r.titel.slice(0, Math.max(0, ruimte - 1)).trimEnd()}…` : r.titel;
  return {
    title: `${kop}${staart}`,
    description: r.lede.length > 158 ? `${r.lede.slice(0, 155).trimEnd()}…` : r.lede,
  };
}
