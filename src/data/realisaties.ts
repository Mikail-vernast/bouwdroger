// Uitgevoerde droogprojecten. Overgenomen uit de realisaties van
// vernast-vochtbestrijding.be, gefilterd op de projecten waar bouwdroging het werk
// was — de kelderbekuipingen en muurinjecties horen niet op deze site thuis.
//
// De teksten en foto's komen van de werven zelf; er staat hier niets bij dat wij
// niet uit het projectdossier konden halen. Vandaar ook geen droogtijden of
// toestellenlijst per project: die stonden in de bron niet vermeld.

export type RealisatieSoort = "bouwvocht" | "waterschade" | "vochtbeheersing";

export interface RealisatieBlok {
  kop: string;
  tekst: string;
}

export interface Realisatie {
  slug: string;
  titel: string;
  /** Gemeente, voor zover de bron die noemde. */
  plaats: string | null;
  soort: RealisatieSoort;
  heroTitel: string;
  heroLead: string;
  /** Telkens twee: de aanpak en het resultaat. */
  blokken: RealisatieBlok[];
  cover: string;
  fotos: string[];
}

export const REALISATIE_SOORTEN: { key: RealisatieSoort; label: string }[] = [
  { key: "bouwvocht", label: "Bouwvocht" },
  { key: "waterschade", label: "Waterschade" },
  { key: "vochtbeheersing", label: "Vochtbeheersing" },
];

export const REALISATIES: Realisatie[] = [
  {
    slug: "vernissage-boom",
    titel: "Vernissage – Boom",
    plaats: "Boom",
    soort: "bouwvocht",
    heroTitel: "Voorbereid op perfectie: gecontroleerde droging voor kunst- en expositieruimte",
    heroLead: "In deze toekomstige expositieruimte werd na de pleisterwerken een te hoog vochtgehalte vastgesteld. Dankzij gerichte bouwdroging en nauwkeurige metingen werd het binnenklimaat snel gestabiliseerd, zodat verdere afwerking en inrichting zonder risico kon doorgaan. Een droge basis voor een ruimte waar esthetiek centraal staat.",
    blokken: [
      { kop: "Zorgvuldige bouwdroging voor tijdelijke tentoonstelling", tekst: "In deze unieke tentoonstellingsruimte werd door vochtige omstandigheden een verhoogd risico vastgesteld op schade aan de werken en installaties. Door snelle en gerichte inzet van professionele bouwdrogers werd het klimaat gestabiliseerd en het vochtgehalte teruggebracht tot een veilig niveau." },
      { kop: "Stabiele omgeving voor bezoekers en kunstwerken", tekst: "Dankzij de continue monitoring en strategische plaatsing van droogtoestellen kon de vernissage zonder zorgen doorgaan in een droge, comfortabele en veilige omgeving voor bezoekers en kunstwerken." },
    ],
    cover: "/realisaties/vernissage-boom/cover.webp",
    fotos: [
      "/realisaties/vernissage-boom/1.webp",
      "/realisaties/vernissage-boom/2.webp",
      "/realisaties/vernissage-boom/3.webp",
      "/realisaties/vernissage-boom/4.webp",
      "/realisaties/vernissage-boom/5.webp",
      "/realisaties/vernissage-boom/6.webp",
      "/realisaties/vernissage-boom/7.webp",
    ],
  },
  {
    slug: "mnr-w-antwerpen",
    titel: "Mnr. W. – Antwerpen",
    plaats: "Antwerpen",
    soort: "waterschade",
    heroTitel: "Grondige droging na waterschade in kelder en leefruimte",
    heroLead: "Na een ernstige waterschade in zowel de kelder als de aangrenzende kamer werd snel ingegrepen met professionele droogapparatuur. Dankzij een doordachte opstelling en nauwkeurige opvolging kon het vochtgehalte veilig worden teruggebracht, waardoor verdere schade aan muren en vloer werd voorkomen.",
    blokken: [
      { kop: "Grondige bouwdroging na waterschade in kelder en kamer", tekst: "In deze woning veroorzaakte een lek een verhoogd vochtgehalte in zowel de kelder als de aangrenzende kamer. Zonder snelle actie dreigde schade aan materialen en afwerking. Door doelgerichte plaatsing van professionele bouwdrogers en continue monitoring kon het vochtprobleem onder controle worden gebracht." },
      { kop: "Veilige omgeving en behoud van woningwaarde", tekst: "Dankzij een efficiënte droogstrategie werd de ruimte opnieuw veilig en bruikbaar gemaakt. Verdere schade aan vloer, muren en interieur werd vermeden, waardoor renovatie of herstelkosten beperkt bleven en de woning haar waarde behield." },
    ],
    cover: "/realisaties/mnr-w-antwerpen/cover.webp",
    fotos: [
      "/realisaties/mnr-w-antwerpen/1.webp",
      "/realisaties/mnr-w-antwerpen/2.webp",
      "/realisaties/mnr-w-antwerpen/3.webp",
      "/realisaties/mnr-w-antwerpen/4.webp",
      "/realisaties/mnr-w-antwerpen/5.webp",
      "/realisaties/mnr-w-antwerpen/6.webp",
      "/realisaties/mnr-w-antwerpen/7.webp",
    ],
  },
  {
    slug: "mnr-s-brussel",
    titel: "Mnr. S. – Brussel",
    plaats: "Brussel",
    soort: "waterschade",
    heroTitel: "Gerichte droging na waterschade in badkamer",
    heroLead: "Na een waterincident in deze badkamer werd met professionele bouwdrogers snel ingegrepen om vochtproblemen te voorkomen. Dankzij gecontroleerde droging kon schade aan muren en afwerking beperkt blijven, met een optimaal resultaat voor een herstelling zonder vertraging.",
    blokken: [
      { kop: "Snelle droging na waterschade in badkamer", tekst: "Bij een ernstige vochtinfiltratie in deze badkamer werd meteen een verhoogd risico vastgesteld op schimmelvorming en structurele schade. Dankzij een snelle diagnose en de inzet van krachtige drogers kon het vochtgehalte doelgericht worden teruggebracht." },
      { kop: "Herstel zonder bijkomende schade", tekst: "Door nauwkeurige metingen en continue opvolging werd de ruimte snel veilig gesteld. Zo kon het verdere herstel vlot verlopen, zonder bijkomende schade aan muren, vloer of meubels." },
    ],
    cover: "/realisaties/mnr-s-brussel/cover.webp",
    fotos: [
      "/realisaties/mnr-s-brussel/1.webp",
      "/realisaties/mnr-s-brussel/2.webp",
      "/realisaties/mnr-s-brussel/3.webp",
      "/realisaties/mnr-s-brussel/4.webp",
      "/realisaties/mnr-s-brussel/5.webp",
      "/realisaties/mnr-s-brussel/6.webp",
      "/realisaties/mnr-s-brussel/7.webp",
    ],
  },
  {
    slug: "mnr-n-v-oostende",
    titel: "Mnr. N.V. – Oostende",
    plaats: "Oostende",
    soort: "bouwvocht",
    heroTitel: "Zorgeloze droging van pleisterwerken in moderne villawoning",
    heroLead: "In deze ruime villawoning werd het verhoogde vochtgehalte na de pleisterwerken snel en gecontroleerd aangepakt. Dankzij een nauwkeurige meting en professionele droging kon de afwerking zonder vertraging en risico van start gaan.",
    blokken: [
      { kop: "Efficiënte bouwdroging in moderne villawoning", tekst: "In deze hedendaagse villa werd na de pleisterwerken een verhoogd vochtgehalte vastgesteld. Dankzij nauwkeurige metingen en een snelle inzet van droogapparatuur kon het vochtgehalte gecontroleerd worden verlaagd zonder risico op schade of vertraging van de afwerkingsfase." },
      { kop: "Perfect binnenklimaat voor verdere afwerking", tekst: "Door een strategische opstelling van bouwdrogers en continue luchtcirculatie werd het klimaat snel op peil gebracht. Zo kon de schilder- en vloerafwerking veilig doorgaan in een stabiele, droge omgeving." },
    ],
    cover: "/realisaties/mnr-n-v-oostende/cover.webp",
    fotos: [
      "/realisaties/mnr-n-v-oostende/1.webp",
      "/realisaties/mnr-n-v-oostende/2.webp",
      "/realisaties/mnr-n-v-oostende/3.webp",
      "/realisaties/mnr-n-v-oostende/4.webp",
      "/realisaties/mnr-n-v-oostende/5.webp",
      "/realisaties/mnr-n-v-oostende/6.webp",
      "/realisaties/mnr-n-v-oostende/7.webp",
    ],
  },
  {
    slug: "mnr-l-hasselt",
    titel: "Mnr. L. – Hasselt",
    plaats: "Hasselt",
    soort: "bouwvocht",
    heroTitel: "Project in Hasselt",
    heroLead: "In Hasselt zorgde Vernast Bouwdrogers voor een snelle en gecontroleerde droging na pleister- en chapewerken. Met professionele toestellen werd het bouwvocht veilig verwijderd, zodat de afwerking zonder risico op vochtproblemen kon doorgaan.",
    blokken: [
      { kop: "Veilige bouwdroging na pleister- en chapewerken in Hasselt", tekst: "In Hasselt werd Vernast Bouwdrogers ingeschakeld om na het pleisteren en chapen het overtollige bouwvocht gecontroleerd te verwijderen. Door de combinatie van pleisterwerk en chape ontstaat er vaak een hoog vochtgehalte in de woning. Snelle en nauwkeurige droging is hierbij cruciaal om de verdere afwerkingswerken zonder vertraging te kunnen starten." },
      { kop: "Efficiënt droogproces met betrouwbaar eindresultaat", tekst: "Met de inzet van professionele bouwdrogers en ventilatoren werd de luchtvochtigheid vakkundig teruggebracht naar een veilig niveau. Hierdoor kon het verdere bouwproces probleemloos worden voortgezet, en werd het risico op schimmelvorming of vochtproblemen volledig uitgesloten. Het resultaat: een droge, stabiele ondergrond voor verdere afwerking." },
    ],
    cover: "/realisaties/mnr-l-hasselt/cover.webp",
    fotos: [
      "/realisaties/mnr-l-hasselt/1.webp",
      "/realisaties/mnr-l-hasselt/2.webp",
      "/realisaties/mnr-l-hasselt/3.webp",
      "/realisaties/mnr-l-hasselt/4.webp",
      "/realisaties/mnr-l-hasselt/5.webp",
      "/realisaties/mnr-l-hasselt/6.webp",
      "/realisaties/mnr-l-hasselt/7.webp",
    ],
  },
  {
    slug: "mnr-k-putte",
    titel: "Mnr. K. – Putte",
    plaats: "Putte",
    soort: "bouwvocht",
    heroTitel: "Bouwdroging in Putte",
    heroLead: "Dankzij de juiste combinatie van bouwdrogers verliep het droogproces niet alleen sneller, maar ook volledig gecontroleerd. Zo werd de woning in Putte veilig voorbereid op een probleemloze afwerking.",
    blokken: [
      { kop: "Veilige bouwdroging in Putte", tekst: "In Putte werd Vernast Bouwdrogers ingeschakeld om het aanwezige bouwvocht na pleister- en chapewerken gecontroleerd te verwijderen. Door de combinatie van natte werken ontstaat er vaak een verhoogde luchtvochtigheid in de woning. Tijdige bouwdroging is noodzakelijk om schade, schimmelvorming en vertraging in het verdere afwerkingsproces te voorkomen." },
      { kop: "Efficiënt droogproces met betrouwbaar eindresultaat", tekst: "Met professionele bouwdrogers en ventilatoren werd het vochtgehalte in de woning snel en gecontroleerd teruggebracht naar een veilig niveau. Hierdoor kon de verdere afwerking probleemloos doorgaan, zonder risico op vochtproblemen of scheurvorming. Het resultaat: een stabiele, droge woning klaar voor afwerking." },
    ],
    cover: "/realisaties/mnr-k-putte/cover.webp",
    fotos: [
      "/realisaties/mnr-k-putte/1.webp",
      "/realisaties/mnr-k-putte/2.webp",
      "/realisaties/mnr-k-putte/3.webp",
      "/realisaties/mnr-k-putte/4.webp",
      "/realisaties/mnr-k-putte/5.webp",
      "/realisaties/mnr-k-putte/6.webp",
      "/realisaties/mnr-k-putte/7.webp",
    ],
  },
  {
    slug: "mnr-j-bocholt",
    titel: "Mnr. J. – Bocholt",
    plaats: "Bocholt",
    soort: "waterschade",
    heroTitel: "Gerichte bouwdroging na waterschade in Bocholt",
    heroLead: "Bij een woning in Bocholt zorgde binnengedrongen water voor schade aan vloer en muren. Dankzij de snelle inzet van onze bouwdrogers werd het vocht efficiënt verwijderd en verdere schade voorkomen. Zo kon de woning snel opnieuw comfortabel en veilig gebruikt worden.",
    blokken: [
      { kop: "Zorgvuldige bouwdroging na waterschade in Bocholt", tekst: "Bij deze woning in Bocholt leidde binnengedrongen water tot schade aan muren en vloer. Om verdere problemen te voorkomen, werd onze bouwdroging snel en gericht ingezet. Met constante monitoring werd het vochtgehalte onder controle gebracht en konden de herstellingswerken veilig starten." },
      { kop: "Snelle interventie, blijvend resultaat", tekst: "Door het inzetten van professionele drogers en ventilatoren kon de woning weer snel stabiliseren. Zo werd de basis gelegd voor een droge, gezonde woonomgeving zonder risico op schimmel of structurele schade." },
    ],
    cover: "/realisaties/mnr-j-bocholt/cover.webp",
    fotos: [
      "/realisaties/mnr-j-bocholt/1.webp",
      "/realisaties/mnr-j-bocholt/2.webp",
      "/realisaties/mnr-j-bocholt/3.webp",
      "/realisaties/mnr-j-bocholt/4.webp",
      "/realisaties/mnr-j-bocholt/5.webp",
      "/realisaties/mnr-j-bocholt/6.webp",
      "/realisaties/mnr-j-bocholt/7.webp",
    ],
  },
  {
    slug: "mnr-erdem-bedrijfsgebouw",
    titel: "Mnr. Erdem – Bedrijfsgebouw",
    plaats: null,
    soort: "waterschade",
    heroTitel: "Herstel waterschade Erdem",
    heroLead: "Onze bouwdrogers en ventilatoren werden strategisch ingezet om de vochtigheid in muren en vloeren gecontroleerd af te voeren. Dankzij de snelle interventie werd schimmelvorming voorkomen en kon de ruimte in korte tijd opnieuw veilig gebruikt worden.",
    blokken: [
      { kop: "Snelle en gerichte droging na waterincident", tekst: "Na een waterlek in het bedrijfsgebouw van Erdem ontstond er ernstige waterschade in de muren en vloerconstructies. Om verdere schade en stilstand te voorkomen, werd snel ingegrepen met professionele bouwdrogers." },
      { kop: "Herstel in optimale omstandigheden", tekst: "Dankzij een gecontroleerde droogopstelling met constante monitoring werd het vochtgehalte binnen enkele dagen teruggebracht naar een veilig niveau. Hierdoor kon de bedrijfsactiviteit zonder blijvende schade hervat worden in een droge, stabiele werkomgeving." },
    ],
    cover: "/realisaties/mnr-erdem-bedrijfsgebouw/cover.webp",
    fotos: [
      "/realisaties/mnr-erdem-bedrijfsgebouw/1.webp",
      "/realisaties/mnr-erdem-bedrijfsgebouw/2.webp",
      "/realisaties/mnr-erdem-bedrijfsgebouw/3.webp",
      "/realisaties/mnr-erdem-bedrijfsgebouw/4.webp",
      "/realisaties/mnr-erdem-bedrijfsgebouw/5.webp",
      "/realisaties/mnr-erdem-bedrijfsgebouw/6.webp",
      "/realisaties/mnr-erdem-bedrijfsgebouw/7.webp",
    ],
  },
  {
    slug: "mevr-k-wintam",
    titel: "Mevr. K. – Wintam",
    plaats: "Wintam",
    soort: "bouwvocht",
    heroTitel: "Veilige bouwdroging in Wintam",
    heroLead: "In Wintam werd Vernast Bouwdrogers ingeschakeld voor het gecontroleerd drogen van de woning na pleister- en chapewerken. Door het inzetten van professionele bouwdrogers en ventilatoren werd het overtollige vocht snel verwijderd, zodat de verdere afwerking zonder vertraging kon doorgaan en vochtproblemen werden voorkomen.",
    blokken: [
      { kop: "Veilige bouwdroging in Wintam", tekst: "In Wintam werd Vernast Bouwdrogers ingeschakeld om het aanwezige bouwvocht na pleister- en chapewerken gecontroleerd te verwijderen. Door de combinatie van natte werken ontstaat vaak een verhoogde luchtvochtigheid in de woning. Tijdige en gecontroleerde bouwdroging is essentieel om schade, schimmelvorming en vertraging in het verdere bouwproces te voorkomen." },
      { kop: "Efficiënt droogproces met betrouwbaar eindresultaat", tekst: "Met professionele bouwdrogers en ventilatoren werd het vochtgehalte snel en veilig teruggebracht naar een stabiel niveau. Zo kon de verdere afwerking zonder problemen plaatsvinden, met als resultaat een droge, stabiele woning klaar voor afwerking en langdurig gebruik." },
    ],
    cover: "/realisaties/mevr-k-wintam/cover.webp",
    fotos: [
      "/realisaties/mevr-k-wintam/1.webp",
      "/realisaties/mevr-k-wintam/2.webp",
      "/realisaties/mevr-k-wintam/3.webp",
      "/realisaties/mevr-k-wintam/4.webp",
      "/realisaties/mevr-k-wintam/5.webp",
      "/realisaties/mevr-k-wintam/6.webp",
      "/realisaties/mevr-k-wintam/7.webp",
    ],
  },
  {
    slug: "mevr-j-j-kontich",
    titel: "Mevr. J.J. – Kontich",
    plaats: "Kontich",
    soort: "bouwvocht",
    heroTitel: "Particulier woonhuis",
    heroLead: "Vernast Bouwdrogers verwijderde het bouwvocht snel en gecontroleerd, zodat de afwerking zonder risico op vochtproblemen kon doorgaan.",
    blokken: [
      { kop: "Veilige bouwdroging in particuliere woning", tekst: "Bij deze particuliere woning werd Vernast Bouwdrogers ingeschakeld om het aanwezige bouwvocht na pleister- en chapewerken gecontroleerd te verwijderen. In woonhuizen kan de combinatie van pleisterwerk, chape en beperkte ventilatie snel leiden tot een verhoogde luchtvochtigheid. Tijdig drogen is cruciaal om schade en vertraging in het verdere bouwproces te voorkomen." },
      { kop: "Efficiënt droogproces met betrouwbaar eindresultaat", tekst: "Met de inzet van professionele bouwdrogers en ventilatoren werd het vochtgehalte in de woning snel teruggebracht naar een veilig niveau. Hierdoor kon de verdere afwerking tijdig plaatsvinden zonder risico op schimmelvorming of vochtproblemen. Het resultaat: een droge, stabiele en gezonde leefomgeving." },
    ],
    cover: "/realisaties/mevr-j-j-kontich/cover.webp",
    fotos: [
      "/realisaties/mevr-j-j-kontich/1.webp",
      "/realisaties/mevr-j-j-kontich/2.webp",
      "/realisaties/mevr-j-j-kontich/3.webp",
      "/realisaties/mevr-j-j-kontich/4.webp",
      "/realisaties/mevr-j-j-kontich/5.webp",
      "/realisaties/mevr-j-j-kontich/6.webp",
      "/realisaties/mevr-j-j-kontich/7.webp",
    ],
  },
  {
    slug: "mevr-j-berchem",
    titel: "Mevr. J. – Berchem",
    plaats: "Berchem",
    soort: "bouwvocht",
    heroTitel: "Veilige en gecontroleerde droging van pleisterwerken bij Mevr. J",
    heroLead: "Bij Mevr. J. werd na het pleisterwerk een verhoogd vochtgehalte vastgesteld. Dankzij een snelle en gecontroleerde inzet van bouwdrogers kon het vocht veilig worden verwijderd, waardoor schade en vertraging in de verdere afwerking vermeden werden.",
    blokken: [
      { kop: "Nauwkeurige bouwdroging na pleisterwerken in stadswoning", tekst: "In deze karaktervolle woning werd na de pleisterwerken een verhoogd vochtgehalte vastgesteld. Door tijdige opvolging en een nauwkeurige meting kon het droogproces gecontroleerd en zonder risico’s verlopen. Zo werd schade aan afwerkingen of materiaal vermeden." },
      { kop: "Zorgeloze overgang naar afwerkingsfase", tekst: "Met een doordachte opstelling van bouwdrogers en luchtcirculatie werd het vochtgehalte snel teruggebracht naar een gezond niveau. Hierdoor kon de woning veilig verder worden afgewerkt zonder risico op scheuren of schimmelvorming." },
    ],
    cover: "/realisaties/mevr-j-berchem/cover.webp",
    fotos: [
      "/realisaties/mevr-j-berchem/1.webp",
      "/realisaties/mevr-j-berchem/2.webp",
      "/realisaties/mevr-j-berchem/3.webp",
      "/realisaties/mevr-j-berchem/4.webp",
      "/realisaties/mevr-j-berchem/5.webp",
      "/realisaties/mevr-j-berchem/6.webp",
      "/realisaties/mevr-j-berchem/7.webp",
    ],
  },
  {
    slug: "mevr-g-b-sint-pieters-woluwe",
    titel: "Mevr. G.B. – Sint-Pieters-Woluwe",
    plaats: "Sint-Pieters-Woluwe",
    soort: "bouwvocht",
    heroTitel: "Professionele bouwdroging na pleisterwerken in Sint-Pieters-Woluwe",
    heroLead: "In deze stijlvolle woning in Sint-Pieters-Woluwe werd na de pleisterwerken een verhoogd vochtgehalte vastgesteld. Dankzij een snelle en nauwkeurige aanpak kon het droogproces gecontroleerd verlopen, wat zorgde voor een stabiele basis voor verdere afwerking zonder risico op schade of vertraging.",
    blokken: [
      { kop: "Nauwkeurige bouwdroging voor schilderklare afwerking in stadswoning", tekst: "In deze karaktervolle woning in Sint-Pieters-Woluwe werd tijdens de renovatiefase een verhoogd vochtgehalte vastgesteld na pleisterwerken. Door een snelle interventie met nauwkeurige metingen en een doordachte plaatsing van bouwdrogers kon het droogproces optimaal verlopen zonder risico op scheuren of vertraging." },
      { kop: "Optimale voorbereiding voor eindafwerking", tekst: "Dankzij de gerichte luchtcirculatie en constante monitoring werd het vochtgehalte snel teruggebracht naar een gezond niveau. Hierdoor kon de schilder- en vloerafwerking veilig van start gaan met een duurzaam resultaat als gevolg." },
    ],
    cover: "/realisaties/mevr-g-b-sint-pieters-woluwe/cover.webp",
    fotos: [
      "/realisaties/mevr-g-b-sint-pieters-woluwe/1.webp",
      "/realisaties/mevr-g-b-sint-pieters-woluwe/2.webp",
      "/realisaties/mevr-g-b-sint-pieters-woluwe/3.webp",
      "/realisaties/mevr-g-b-sint-pieters-woluwe/4.webp",
      "/realisaties/mevr-g-b-sint-pieters-woluwe/5.webp",
      "/realisaties/mevr-g-b-sint-pieters-woluwe/6.webp",
      "/realisaties/mevr-g-b-sint-pieters-woluwe/7.webp",
    ],
  },
  {
    slug: "mevr-b-a-lokeren",
    titel: "Mevr. B.A. – Lokeren",
    plaats: "Lokeren",
    soort: "waterschade",
    heroTitel: "Snel ingrijpen bij waterschade in woning te Lokeren",
    heroLead: "In deze woning in Lokeren veroorzaakte een lek in de keldermuur ernstige vochtschade. Dankzij een snelle interventie met professionele bouwdrogers en nauwkeurige metingen werd het vochtprobleem doeltreffend aangepakt. Zo kon verdere schade aan vloer en muren worden voorkomen.",
    blokken: [
      { kop: "Grondige waterschadedroging in woning te Lokeren", tekst: "Na een waterlek in deze woning in Lokeren werd Vernast Bouwdrogers ingeschakeld om het binnengedrongen vocht snel en efficiënt te verwijderen. Dankzij een combinatie van onze professionele droogapparatuur en nauwkeurige metingen werd het vochtgehalte gecontroleerd teruggebracht tot een veilig niveau." },
      { kop: "Snelle herstelling van schade en behoud van afwerking", tekst: "Door tijdig in te grijpen kon verdere schade aan vloer, muren en interieur worden voorkomen. De ruimte werd opnieuw veilig en droog verklaard, klaar voor renovatie of herinrichting zonder risico op schimmelvorming of langdurige vochtproblemen." },
    ],
    cover: "/realisaties/mevr-b-a-lokeren/cover.webp",
    fotos: [
      "/realisaties/mevr-b-a-lokeren/1.webp",
      "/realisaties/mevr-b-a-lokeren/2.webp",
      "/realisaties/mevr-b-a-lokeren/3.webp",
      "/realisaties/mevr-b-a-lokeren/4.webp",
      "/realisaties/mevr-b-a-lokeren/5.webp",
      "/realisaties/mevr-b-a-lokeren/6.webp",
      "/realisaties/mevr-b-a-lokeren/7.webp",
    ],
  },
  {
    slug: "mevr-arlette",
    titel: "Mevr. Arlette",
    plaats: null,
    soort: "waterschade",
    heroTitel: "Grondige droging na waterschade",
    heroLead: "In deze woning werd een verhoogd vochtgehalte vastgesteld, met risico op schade aan muren en afwerking. Dankzij een snelle en gerichte aanpak met bouwdrogers en ventilatie werd het binnenklimaat opnieuw gestabiliseerd en veilig gemaakt voor verdere afwerking en dagelijks gebruik.",
    blokken: [
      { kop: "Grondige bouwdroging in bewoonde woning", tekst: "In deze woning werd na waterschade zorgvuldig ingegrepen om het verhoogde vochtgehalte onder controle te krijgen. Dankzij een snelle inzet van bouwdrogers werd verdere schade aan vloer en muurafwerking voorkomen." },
      { kop: "Veilige en duurzame oplossing met minimale hinder", tekst: "Door strategische plaatsing van de toestellen en continue opvolging kon het droogproces efficiënt verlopen, zonder overlast voor de bewoners. Het resultaat: een stabiele en droge woning, klaar voor zorgeloze verdere afwerking." },
    ],
    cover: "/realisaties/mevr-arlette/cover.webp",
    fotos: [
      "/realisaties/mevr-arlette/1.webp",
      "/realisaties/mevr-arlette/2.webp",
      "/realisaties/mevr-arlette/3.webp",
      "/realisaties/mevr-arlette/4.webp",
      "/realisaties/mevr-arlette/5.webp",
      "/realisaties/mevr-arlette/6.webp",
      "/realisaties/mevr-arlette/7.webp",
    ],
  },
  {
    slug: "mevr-a-r-berlare",
    titel: "Mevr. A.R. – Berlare",
    plaats: "Berlare",
    soort: "waterschade",
    heroTitel: "Doelgerichte droging na waterschade in berging",
    heroLead: "Na een lekkage in de berging werd ernstige waterschade vastgesteld. Dankzij een snelle vochtmeting en de gerichte inzet van professionele droogtoestellen werd het vochtgehalte snel onder controle gebracht. Zo kon verdere schade aan muren, vloer en opgeslagen materiaal worden voorkomen.",
    blokken: [
      { kop: "Snelle bouwdroging na waterschade in berging", tekst: "In deze berging werd ernstige waterschade vastgesteld na een lek. De hoge vochtwaarden bedreigden niet alleen de muren, maar ook aanwezige toestellen en interieur. Dankzij een snelle reactie en nauwkeurige metingen kon het droogproces gericht en zonder risico worden opgestart." },
      { kop: "Herstel zonder gevolgschade", tekst: "Met de inzet van professionele bouwdrogers en continue opvolging werd het vochtgehalte teruggebracht tot een veilig niveau. Zo kon verdere schade worden vermeden en werd een gezonde omgeving hersteld." },
    ],
    cover: "/realisaties/mevr-a-r-berlare/cover.webp",
    fotos: [
      "/realisaties/mevr-a-r-berlare/1.webp",
      "/realisaties/mevr-a-r-berlare/2.webp",
      "/realisaties/mevr-a-r-berlare/3.webp",
      "/realisaties/mevr-a-r-berlare/4.webp",
      "/realisaties/mevr-a-r-berlare/5.webp",
      "/realisaties/mevr-a-r-berlare/6.webp",
      "/realisaties/mevr-a-r-berlare/7.webp",
    ],
  },
  {
    slug: "mancave-brugge",
    titel: "Mancave – Brugge",
    plaats: "Brugge",
    soort: "vochtbeheersing",
    heroTitel: "Vochtvrije mancave in hartje Brugge",
    heroLead: "In deze stijlvolle kelderruimte werd een verhoogde luchtvochtigheid vastgesteld, wat risico’s inhield voor afwerking en comfort. Dankzij een gerichte drooginterventie is de mancave nu volledig droog en klaar voor jarenlang zorgeloos gebruik, zonder schimmelvorming of muffe geurtjes.",
    blokken: [
      { kop: "Gerichte droging voor duurzame leefruimte in Brugge", tekst: "In een sfeervolle mancave in Brugge werd een te hoog vochtgehalte vastgesteld. Dankzij een nauwkeurige meting en snelle inzet van professionele bouwdrogers kon het klimaat gecontroleerd en veilig worden genormaliseerd." },
      { kop: "Efficiënt herstel met blijvend comfort", tekst: "Met behulp van gerichte luchtcirculatie en continue monitoring werd de luchtvochtigheid binnen enkele dagen teruggebracht naar een gezond niveau. Zo werd schade voorkomen en blijft de ruimte optimaal bruikbaar voor ontspanning en langdurig gebruik." },
    ],
    cover: "/realisaties/mancave-brugge/cover.webp",
    fotos: [
      "/realisaties/mancave-brugge/1.webp",
      "/realisaties/mancave-brugge/2.webp",
      "/realisaties/mancave-brugge/3.webp",
      "/realisaties/mancave-brugge/4.webp",
      "/realisaties/mancave-brugge/5.webp",
      "/realisaties/mancave-brugge/6.webp",
      "/realisaties/mancave-brugge/7.webp",
    ],
  },
  {
    slug: "levis",
    titel: "Levi’s®",
    plaats: null,
    soort: "vochtbeheersing",
    heroTitel: "Project Levi’s®: Schimmelsanering & Luchtontvochtiging",
    heroLead: "Herstel van gezonde luchtkwaliteit in de opslagruimte na vocht- en schimmelproblemen",
    blokken: [
      { kop: "Herstel van luchtkwaliteit in de opslagruimte", tekst: "Bij Levi’s® werd schimmel vastgesteld in de kelderopslag, veroorzaakt door een jarenlange, onopgemerkte lekkage aan een versleten waterleiding. Hierdoor steeg de luchtvochtigheid aanzienlijk, wat geurhinder en risico op productbeschadiging met zich meebracht." },
      { kop: "Efficiënte sanering met meetbaar resultaat", tekst: "Na een grondige analyse werd de ruimte behandeld met professionele schimmelsaneringstechnieken en een krachtige luchtontvochtiger. Dankzij deze aanpak daalde de luchtvochtigheid van 88% naar een gezonde 49%. De opslagruimte is opnieuw veilig, droog en geurvrij klaar voor een betrouwbare en kwaliteitsvolle stockopslag." },
    ],
    cover: "/realisaties/levis/cover.webp",
    fotos: [
      "/realisaties/levis/1.webp",
      "/realisaties/levis/2.webp",
      "/realisaties/levis/3.webp",
      "/realisaties/levis/4.webp",
      "/realisaties/levis/5.webp",
      "/realisaties/levis/6.webp",
      "/realisaties/levis/7.webp",
    ],
  },
  {
    slug: "dhr-p-merksem",
    titel: "Dhr. P – Merksem",
    plaats: "Merksem",
    soort: "bouwvocht",
    heroTitel: "Drogen van bepleistering bij Dhr. P",
    heroLead: "Na het aanbrengen van het pleisterwerk zorgden we voor een gecontroleerde en veilige droging met professionele bouwdrogers. Zo werd het risico op scheuren en schimmelvorming vermeden, en kon de verdere afwerking van de woning vlot worden ingepland.",
    blokken: [
      { kop: "Droging van pleisterwerken bij Dhr. P", tekst: "In deze woning werd Vernast Bouwdrogers ingeschakeld om het recente pleisterwerk snel en gecontroleerd te drogen. Na het pleisteren is het essentieel dat het resterende vocht op een veilige manier wordt afgevoerd om schimmelvorming, geurhinder en vertraging in de verdere afwerking te voorkomen." },
      { kop: "Stabiel binnenklimaat voor een vlekkeloos vervolg", tekst: "Door het strategisch inzetten van krachtige bouwdrogers en ventilatoren werd het vochtgehalte snel teruggebracht naar een stabiel niveau. Zo kon de afwerkingsfase zonder vertraging hervat worden, met een droog en gezond resultaat als einddoel." },
    ],
    cover: "/realisaties/dhr-p-merksem/cover.webp",
    fotos: [
      "/realisaties/dhr-p-merksem/1.webp",
      "/realisaties/dhr-p-merksem/2.webp",
      "/realisaties/dhr-p-merksem/3.webp",
      "/realisaties/dhr-p-merksem/4.webp",
      "/realisaties/dhr-p-merksem/5.webp",
      "/realisaties/dhr-p-merksem/6.webp",
      "/realisaties/dhr-p-merksem/7.webp",
    ],
  },
  {
    slug: "dhr-h-brussel",
    titel: "Dhr. H. – Brussel",
    plaats: "Brussel",
    soort: "waterschade",
    heroTitel: "Doeltreffende droging na waterschade",
    heroLead: "Na een lekkage in de woning van Dhr. H werd Vernast Bouwdrogers ingeschakeld om het overtollige vocht snel en efficiënt te verwijderen. Dankzij een gerichte aanpak met professionele apparatuur werd verdere schade voorkomen en het comfort in huis hersteld.",
    blokken: [
      { kop: "Veilige bouwdroging na waterschade", tekst: "Bij Dhr. H. werd Vernast Bouwdrogers ingeschakeld na een vochtprobleem veroorzaakt door binnendringend water. De schade werd nauwkeurig in kaart gebracht met vochtmetingen en aangepaste toestellen zorgden voor een gecontroleerde droging. Zo kon verdere schade worden vermeden en werd het gebouw snel opnieuw bruikbaar gemaakt." },
      { kop: "Snelle interventie met professionele toestellen", tekst: "Dankzij onze snelle reactie en strategische plaatsing van bouwdrogers en ventilatoren werd het vochtgehalte snel tot een veilig niveau herleid. De woning werd in korte tijd opnieuw droog en klaar voor verdere afwerking zonder risico op schimmelvorming of structurele schade." },
    ],
    cover: "/realisaties/dhr-h-brussel/cover.webp",
    fotos: [
      "/realisaties/dhr-h-brussel/1.webp",
      "/realisaties/dhr-h-brussel/2.webp",
      "/realisaties/dhr-h-brussel/3.webp",
      "/realisaties/dhr-h-brussel/4.webp",
      "/realisaties/dhr-h-brussel/5.webp",
      "/realisaties/dhr-h-brussel/6.webp",
      "/realisaties/dhr-h-brussel/7.webp",
    ],
  },
  {
    slug: "dhr-e-schilde",
    titel: "Dhr. E. – Schilde",
    plaats: "Schilde",
    soort: "bouwvocht",
    heroTitel: "Veilige en gecontroleerde droging van pleister in nieuwbouwvilla",
    heroLead: "In deze nieuwbouwvilla werd na het pleisterwerk gericht ingegrepen om het bouwvocht gecontroleerd te verwijderen. Dankzij een snelle en professionele droging kon schade aan het pleisterwerk worden voorkomen en bleef het bouwproces perfect op schema.",
    blokken: [
      { kop: "Efficiënte bouwdroging voor vlekkeloze afwerking", tekst: "In deze moderne villa werd na de pleisterwerken een verhoogd vochtgehalte vastgesteld. Dankzij een snelle en nauwkeurige aanpak kon het droogproces gecontroleerd verlopen, zonder risico op schade of vertraging." },
      { kop: "Stabiele basis voor volgende bouwfase", tekst: "Met een strategische plaatsing van bouwdrogers en doordachte luchtcirculatie werd het vochtgehalte snel teruggebracht naar een gezond niveau. Zo kon de schilder- en vloerafwerking perfect van start gaan, met een duurzaam eindresultaat als gevolg." },
    ],
    cover: "/realisaties/dhr-e-schilde/cover.webp",
    fotos: [
      "/realisaties/dhr-e-schilde/1.webp",
      "/realisaties/dhr-e-schilde/2.webp",
      "/realisaties/dhr-e-schilde/3.webp",
      "/realisaties/dhr-e-schilde/4.webp",
      "/realisaties/dhr-e-schilde/5.webp",
      "/realisaties/dhr-e-schilde/6.webp",
      "/realisaties/dhr-e-schilde/7.webp",
    ],
  },
  {
    slug: "dhr-d-c-antwerpen",
    titel: "Dhr. D.C. – Antwerpen",
    plaats: "Antwerpen",
    soort: "waterschade",
    heroTitel: "Effectieve kelderdroging na waterschade in Antwerpen",
    heroLead: "Bij een woning in Antwerpen werd ernstige waterschade vastgesteld in de kelder. Dankzij een snelle inzet van professionele bouwdrogers kon de ruimte efficiënt worden gedroogd. Zo werd verdere schade voorkomen en de kelder opnieuw veilig en bruikbaar gemaakt.",
    blokken: [
      { kop: "Gerichte bouwdroging na waterinfiltratie in kelder", tekst: "In deze Antwerpse woning werd de kelder getroffen door ernstige waterschade, met een verhoogd risico op blijvende vochtproblemen. Door snel in te grijpen met professionele bouwdrogers en nauwkeurige vochtmetingen kon het klimaat gecontroleerd worden en het vochtgehalte teruggebracht tot een veilig niveau." },
      { kop: "Beschermde structuur en herbruikbare ruimte", tekst: "Dankzij de continue monitoring en strategische plaatsing van droogtoestellen werd verdere schade aan muren en vloeren voorkomen. De kelder kon zo opnieuw veilig, droog en functioneel worden hersteld – zonder risico op schimmelvorming of geurhinder." },
    ],
    cover: "/realisaties/dhr-d-c-antwerpen/cover.webp",
    fotos: [
      "/realisaties/dhr-d-c-antwerpen/1.webp",
      "/realisaties/dhr-d-c-antwerpen/2.webp",
      "/realisaties/dhr-d-c-antwerpen/3.webp",
      "/realisaties/dhr-d-c-antwerpen/4.webp",
      "/realisaties/dhr-d-c-antwerpen/5.webp",
      "/realisaties/dhr-d-c-antwerpen/6.webp",
      "/realisaties/dhr-d-c-antwerpen/7.webp",
    ],
  },
  {
    slug: "bang-olufsen",
    titel: "Bang & Olufsen",
    plaats: null,
    soort: "bouwvocht",
    heroTitel: "Project Bang & Olufsen",
    heroLead: "Om het strakke bouwschema te respecteren, werd gekozen voor een snelle en doelgerichte bouwdroging. Het droogproces werd optimaal afgestemd op de korte doorlooptijd, zodat de afwerking zonder vertraging kon starten en de bouwkwaliteit behouden bleef.",
    blokken: [
      { kop: "Vlotte afwerking dankzij snelle voorbereiding", tekst: "Na de versnelde bouwdroging kon het bepleisteringswerk vrijwel onmiddellijk van start gaan. Een egale basis werd snel en efficiënt klaargemaakt, zodat de pleisterlaag zonder vertraging kon worden aangebracht. Dit zorgde voor een strak en consistent resultaat binnen de krappe planning." },
      { kop: "Stabiele basis in recordtijd", tekst: "Ook de chapewerken volgden kort daarop, onder ideale omstandigheden die een snelle uitharding mogelijk maakten. Door de vlotte opeenvolging van de werken ontstond een stabiele en egale ondergrond, perfect geschikt voor de verdere afwerking, zonder verlies van kwaliteit of kostbare tijd." },
    ],
    cover: "/realisaties/bang-olufsen/cover.webp",
    fotos: [
      "/realisaties/bang-olufsen/1.webp",
      "/realisaties/bang-olufsen/2.webp",
      "/realisaties/bang-olufsen/3.webp",
      "/realisaties/bang-olufsen/4.webp",
      "/realisaties/bang-olufsen/5.webp",
      "/realisaties/bang-olufsen/6.webp",
      "/realisaties/bang-olufsen/7.webp",
    ],
  },
];

export const getRealisatie = (slug: string): Realisatie | undefined =>
  REALISATIES.find((r) => r.slug === slug);

export const telPerSoort = (soort: RealisatieSoort): number =>
  REALISATIES.filter((r) => r.soort === soort).length;

export const soortLabel = (soort: RealisatieSoort): string =>
  REALISATIE_SOORTEN.find((s) => s.key === soort)?.label ?? soort;

/**
 * Titel en beschrijving van een projectpagina.
 *
 * Staat hier en niet in `src/data/seo.ts` omdat er 22 varianten van dezelfde
 * route zijn — hetzelfde patroon als `packageMetaTitle` in `data/packages.ts`.
 * De projectkop van de bron is soms nietszeggend ("Project in Hasselt"), dus de
 * plaats en het soort werk komen er los bij; anders staan er straks vier titels
 * die met "Project" beginnen en niet uit elkaar te houden zijn.
 */
export function realisatieMeta(r: Realisatie): { title: string; description: string } {
  // Bij "Mevr. G.B. – Sint-Pieters-Woluwe" stond de gemeente er anders twee keer
  // in en liep de titel tegen de 79 tekens.
  const waar = r.plaats && !r.titel.includes(r.plaats) ? ` in ${r.plaats}` : "";

  // Eén bron gaf maar 84 tekens lead mee; de eerste alinea vult dat aan tot een
  // beschrijving die in een zoekresultaat nog iets zegt.
  const lead = r.heroLead.length < 110 ? `${r.heroLead}. ${r.blokken[0]?.tekst ?? ""}` : r.heroLead;

  return {
    title: `${r.titel} — bouwdroging${waar} | Vernast`,
    description: lead.length > 158 ? `${lead.slice(0, 155).trimEnd()}…` : lead,
  };
}
