

## Plan: Typeform-stijl Conversie Landing Page na Wizard

### Probleem
De huidige flow is: Wizard → PackageDetailPage (veel info) → aparte BookingPage (contactformulier) → BookingSuccess. Dit is **niet conversiegerichtt**:
- Te veel stappen tussen interesse en boeking
- Geen upsell-mogelijkheden
- Klant wordt naar een losse contactpagina gestuurd — dat voelt als "formulier invullen", niet als "direct boeken"

### Nieuwe flow (Typeform-stijl)
Wizard → **Resultaat & Boekingspagina** (alles-in-één) → BookingSuccess

### Wat verandert

**Bestand: `src/pages/PackageDetailPage.tsx` — volledige herstructurering**

De pagina wordt omgebouwd naar een **conversie-gerichte landing page** met deze secties in volgorde:

1. **Compact resultaat-blok bovenaan** — "Uw pakket op maat" met prijs, equipment-samenvatting en USPs. Geen enorme hero met achtergrondafbeelding, maar een clean overzicht.

2. **Inline boekingsformulier** — Het contactformulier (nu in BookingPage) wordt **direct op deze pagina** geplaatst, onder het resultaat. Geen aparte pagina meer. Particulier/zakelijk toggle, contactgegevens, adres — alles in één flow.

3. **Upsell-sectie naast het formulier** — Sidebar met:
   - "Upgrade naar langer" (3 weken, 4 weken met korting)
   - "Voeg extra apparatuur toe" (extra droger, extra ventilator)
   - Bespaartip / social proof

4. **Compacte trust-elementen** — Reviews, "500+ projecten", gratis levering badges — maar compact, niet als aparte secties.

5. **Sticky prijs-bar op mobiel** — Onderaan het scherm een sticky balk met prijs + "Boek nu" knop.

### Wat verdwijnt
- De aparte **BookingPage** wordt overbodig (formulier zit nu in PackageDetailPage)
- De enorme foto-galerij sectie
- De aparte "Hoe werkt het" sectie (dat staat al in de wizard)
- Technische specificatie-tabs (te veel detail voor conversie)

### Bestanden

| Actie | Bestand |
|-------|---------|
| Herwerken | `src/pages/PackageDetailPage.tsx` — wordt de conversie landing page |
| Verwijderen/cleanup | `src/pages/BookingPage.tsx` — formulier verhuist naar PackageDetailPage |
| Behouden | `src/pages/BookingSuccess.tsx` — blijft als bedankpagina |
| Update | `src/App.tsx` — `/booking` route kan verwijderd worden |

### Layout (desktop)

```text
┌─────────────────────────────────────────────────┐
│  Breadcrumb: Home > Levering > Uw Pakket        │
├─────────────────────────────────────────────────┤
│  ┌──────────────────────┐  ┌──────────────────┐ │
│  │ UW PAKKET OP MAAT    │  │ PRIJS            │ │
│  │ • 2x Bouwdroger      │  │ €XXX / 2 weken   │ │
│  │ • 2x Ventilator      │  │ incl. levering   │ │
│  │ • 1x Kachel          │  │                  │ │
│  │                      │  │ [Direct Boeken ↓]│ │
│  └──────────────────────┘  └──────────────────┘ │
├─────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌───────────────────┐ │
│  │ BOEKINGSFORMULIER   │  │ UPSELL SIDEBAR    │ │
│  │                     │  │                   │ │
│  │ Particulier/Zakelijk│  │ ⬆ Verleng naar    │ │
│  │ Naam, email, tel    │  │   3 weken (-10%)  │ │
│  │ Adres               │  │                   │ │
│  │ Startdatum          │  │ ➕ Extra droger   │ │
│  │ Opmerkingen         │  │   +€XX/week       │ │
│  │                     │  │                   │ │
│  │ [Boek Nu]           │  │ ★★★★★ 4.9/5      │ │
│  │                     │  │ "500+ projecten"  │ │
│  └─────────────────────┘  └───────────────────┘ │
├─────────────────────────────────────────────────┤
│  Trust badges | Reviews compact | FAQ compact   │
└─────────────────────────────────────────────────┘
```

### Technisch
- Boekingsformulier-logica verhuist van BookingPage naar PackageDetailPage
- Supabase insert blijft identiek
- Na submit → navigate naar `/booking/success`
- `/booking` route wordt verwijderd uit App.tsx
- Upsell-opties zijn visueel (geen backend nodig nu) — ze passen de geselecteerde duur/equipment aan in de state

