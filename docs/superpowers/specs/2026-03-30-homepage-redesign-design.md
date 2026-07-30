# Vernast Bouwdrogers — Homepage Redesign Spec

## Doel
Homepage herontwerpen op marktleider-niveau voor de Belgische bouwdroger-verhuurmarkt. De site moet informeren, overtuigen en converteren — beter dan alle 9 geanalyseerde concurrenten.

## Branding
- **Primary**: `hsl(0, 85%, 30%)` → #8E0B0B (donkerrood)
- **Accent**: `hsl(0, 85%, 20%)` → #5E0707 (bordeaux, navbar)
- **Accent dark**: #3B0404
- **Background**: #FFFFFF (light) / #0D0D0D (dark)
- **Text**: #141414 / #6B7280 (muted)
- **Fonts**: Inter (body), Playfair Display (headings)
- **Geen oranje, geen blauw**

## Magazijn & Leveringen
- Adres: Boomsesteenweg 12/Unit 11, 2630 Aartselaar
- Km-vergoeding: vast tarief per km (niet duur, verdienste zit op droger-verhuur)

## 3 Service-opties (Calculator)
1. **Afhalen** — Klant haalt zelf op in Aartselaar. Laagste prijs. Geen levering, geen installatie, geen vochtmeting.
2. **Levering** — Toestellen geleverd en afgezet aan de deur. Km-vergoeding. Geen installatie, geen vochtmeting.
3. **All-in (aanbevolen)** — Levering + professionele installatie + gratis vochtmeting + telefonische support. Km-vergoeding. Alles inbegrepen.

## Homepage Sectie-volgorde (12 secties)

### 1. Navigatie
- Donker bordeaux achtergrond (#3B0404)
- Logo links, CTA rechts: "Bereken je prijs →" (witte knop)
- Links: **Diensten ▾** | Onze Aanpak | Machines | Realisaties | Over Ons | Contact
- Diensten dropdown met 4 kaarten: Nieuwbouw / Renovatie / Waterschade / Aannemers
- Mobile: hamburger menu

### 2. Hero
- Donker bordeaux achtergrond
- Headline (Playfair Display): **"Eén prijs. Alles erin. Geen gedoe."**
- Subtekst: "Huur bouwdrogers met levering, installatie en vochtmeting inbegrepen. Je betaalt voor wat je nodig hebt — niet meer."
- Google Reviews badge: 4.8/5 sterren
- Dubbele CTA: "Bereken je prijs →" (primary) + "Zelf afhalen" (secondary/ghost)
- Rechts: hero visual (truck/machines/technici)

### 3. Trust Bar
- Horizontale strip met 4 cijfers: 500+ klanten | 15+ jaar | 50+ machines | 24u levering

### 4. Hoe het werkt
- 3 stappen visueel: Bereken online → Kies je service → Wij regelen de rest
- Geplaatst VOOR calculator zodat klant eerst begrijpt hoe simpel het is

### 5. Interactieve Calculator (kernfeature)
- **Stap 1**: Project gegevens (m², type werk, start/einddatum)
- **Stap 2**: 3 service-kaarten naast elkaar (Afhalen / Levering / All-in)
  - All-in = aanbevolen badge + bordeaux highlight
  - Elke kaart toont: prijs, wat erin zit (✓/✗), korte beschrijving
  - Km-vergoeding getoond bij levering & all-in
- **Stap 3**: Overzicht + direct online boeken

### 6. Vergelijkingstabel (USP differentiator)
- Titel: "Onze aanpak vs. de rest"
- Tabel met rijen:
  - Strategie: 1× groot industrieel vs meerdere ECO-units per ruimte
  - Voorbeeld (3 kamers): DF800 in gang vs 3× ECO Boost per kamer
  - Vermogen: 2100W continu vs 3×500W gedimensioneerd
  - Droogresultaat: ongelijkmatig vs gelijkmatig
  - Geluid: 59dB 1 punt vs 52dB verspreid
  - Flexibiliteit: draait door vs per kamer stopbaar
  - Risico: 1 defect = alles stil vs rest draait door
- Visueel idee: interactieve plattegrond (links rood/niet bereikt, rechts groen/optimaal)

### 7. Diensten
- 4 kaarten met link naar subpagina's:
  - Nieuwbouw (pleisterwerk & chape)
  - Renovatie (vocht & schimmel)
  - Waterschade (24u noodservice) — highlight
  - Aannemers (B2B)

### 8. Onze Machines (ECO Fleet)
- 4 machine-kaarten: ECO Boost (50L, 500W, €9/dag) | ECO Performance (80L, 900W, €12/dag) | ECO Ultimate (150L, €16/dag) | ECO Revolution (absorptie, €25/dag)
- Link naar volledige machine-pagina

### 9. Realisaties
- 3-4 case studies: locatie, m², type, duur, resultaat (voor/na vochtpercentage)
- Link naar volledige portfolio

### 10. Reviews
- Google Reviews score prominent: 4.8/5
- Carousel met echte reviews
- Naam + korte quote

### 11. FAQ
- Accordion met top vragen:
  - Wat kost huren? (vanaf €9/dag + calculator link)
  - Hoe lang duurt droging? (2-4w pleister, 4-8w chape)
  - Vochtmeting nodig? (ja, gratis bij all-in)
  - Levering heel België? (ja, vaste km-prijs vanaf Aartselaar)

### 12. CTA Banner
- Donker bordeaux achtergrond
- "Klaar om te starten?" + "Bereken in 30 seconden wat jouw bouwdroging kost."
- CTA: "Bereken je prijs →" + telefoonnummer

## Concurrentie-analyse (samenvatting)
9 concurrenten geanalyseerd. Geen enkele biedt:
- Smart calculator met instant prijs
- Online boeken (allemaal bellen/WhatsApp/email)
- Service-niveau keuze (afhalen/levering/all-in)
- Vergelijkingstabel toestel-strategie
- Modern React platform (allemaal WordPress/Wix/Divi)

## Vernast ECO Fleet specs
| Model | Capaciteit | Vermogen | Bereik | Prijs/dag |
|-------|-----------|---------|--------|-----------|
| ECO Boost | 50L/dag | ~500W | 450m³ | €9 |
| ECO Performance | 80L/dag | ~900W | 1000m³ | €12 |
| ECO Ultimate | 150L/dag | - | 1470m³ | €16 |
| ECO Revolution | Absorptie | - | Specialist | €25 |

## Dryfast concurrent-specs (referentie)
| Model | Capaciteit | Vermogen | kWh/dag | Geluid |
|-------|-----------|---------|---------|--------|
| DF200 | 35L/dag | 590W | ~14.2 | 54dB |
| DF400F | 75L/dag | 1200W | ~28.8 | 56dB |
| DF800F | 150L/dag | 2100W | ~31.2 | 59dB |

## Pricing filosofie
- Eerlijk: prijs gebaseerd op wat klant nodig heeft
- Transparant: alles zichtbaar, geen verborgen kosten
- Km-vergoeding: vast tarief per km, niet duur (verdienste op droger)
- Volume korting: 14d=10%, 28d=15%, 56d=20%
