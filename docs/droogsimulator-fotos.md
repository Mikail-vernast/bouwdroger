# Droogsimulator — foto's voor de keuzetegels

## Huidige set

Eén reeks gegenereerd met Codex (`image_generation`, 12-11-2026): eerst een basishuis
(halfopen, twee bouwlagen, zadeldak), daarna elke variant als bewerking van dat
basisbeeld — zelfde baksteen, ramen, camera, licht en achtergrond. Zo verschilt per
tegel alleen wat de keuze betekent. Prompt: zie onderaan ("Codex-reeks").
Bestanden in `public/simulator/` (oorspronkelijk; nu de straatversie hieronder).

**Straatversie (12-11-2026).** Daarna is elk beeld nog eens bewerkt naar dezelfde
Vlaamse straat (bomen, stoep, gevels in de verte), 4:3, en zijn er vier hoeken bij
gemaakt zodat stap 2 elke combinatie dak × bouwlagen als één foto kan tonen:
`huis-plat-1`, `huis-plat-3`, `huis-lessenaar-1`, `huis-lessenaar-3`. De rest van de
matrix komt uit de bestaande reeks: `lagen-n` is het zadeldak met n lagen, `dak-x`
heeft twee lagen (`huisFoto()` in `fotos.ts`). Elk beeld bestaat twee keer: `<naam>.webp` op volle grootte (1448×1086, q84) voor de grote foto op retina, en `<naam>-640.webp` (q78) voor de kaartjes; `fotoSrcSet()` laat de browser kiezen.
Prompts: "Straat-edit" en "Hoeken" onderaan.

`dak-lessenaar` kwam de eerste keer terug met een zadeldak; opnieuw gemaakt met de
expliciete eis "één dakvlak, geen nok, zijgevel is een trapezium".

---


Tien foto's, één reeks. Zet de **gemeenschappelijke stijl** telkens vóór de prompt
van de foto zelf, zodat licht, kijkhoek en sfeer overal gelijk zijn.

**Aanleveren:** sla elke foto op met de bestandsnaam hieronder (png of jpg mag) in
één map en geef de map door. Ze worden omgezet naar webp, verkleind, en in
`src/components/simulator/fotos.ts` aangezet. Een foto die er (nog) niet is, toont
gewoon de tekening.

## Gemeenschappelijke stijl

> Photorealistic architectural photograph of a typical Flemish house in Belgium.
> Red-brown hand-moulded brick facade with light mortar, white window frames,
> bluestone (arduin) window sills and plinth, dark anthracite roof tiles, zinc
> gutter. Soft overcast daylight, neutral colours, slight 3/4 view from the
> street at eye level, the whole house in frame with some space around it,
> small front garden with a low hedge. No people, no cars, no text, no logos,
> no watermark. Sharp, natural, not oversaturated, no HDR look.

## De tien foto's

| Bestand | Formaat | Prompt (na de stijl) |
|---|---|---|
| `woning-rijwoning` | 1:1 | A narrow terraced house (rijwoning), 6 m wide, two storeys under a pitched roof, attached to neighbouring houses on both sides (neighbours partly visible at the edges). Front door on the left, one window downstairs, two windows upstairs. |
| `woning-halfopen` | 1:1 | A semi-detached house (halfopen bebouwing), 8 m wide, two storeys under a pitched roof, attached to the neighbouring house on the left only; the right side wall is free and has one window per floor. |
| `woning-open` | 1:1 | A detached family house (open bebouwing, villa-style), 10 m wide, two storeys under a pitched roof, free-standing on its plot with a lawn on both sides. |
| `woning-appartement` | 1:1 | A small modern apartment building of three storeys with a flat roof, brick facade, large windows and a few balconies with glass railings. Focus on one apartment on the middle floor. |
| `dak-zadeldak` | 4:3 | The house has a classic gable roof (zadeldak): two sloping roof planes meeting at a ridge parallel to the street. |
| `dak-plat` | 4:3 | A modern cubic house with a flat roof (plat dak) and a slim aluminium roof edge; no visible roof tiles. |
| `dak-lessenaar` | 4:3 | A contemporary house with a single-pitch mono roof (lessenaarsdak) sloping from back to front, dark standing-seam or anthracite tiles. |
| `lagen-1` | 4:3 | A single-storey bungalow (gelijkvloers only) with a low pitched roof, wide and low. |
| `lagen-2` | 4:3 | A house with a ground floor and one upper floor, pitched roof without dormer windows. |
| `lagen-3` | 4:3 | A house with a ground floor, an upper floor and a habitable attic: pitched roof with a dormer window (dakkapel) and roof windows. |

## Wat de code ervan verwacht

- Bestanden landen als `public/simulator/<bestand>.webp`.
- `woning-*` vullen een kaart van ongeveer 320 × 340 px (`object-fit: cover`, dus het
  huis moet in het midden staan met marge rondom).
- `dak-*` en `lagen-*` zijn kleine duimnagels (52 × 38 px op desktop, 34 × 26 px op
  gsm): het onderscheid (dakvorm, aantal verdiepingen) moet op die grootte nog
  zichtbaar zijn. Liever het hele silhouet dan een detail.

## Codex-reeks (gebruikt)

`codex exec --skip-git-repo-check --sandbox workspace-write - < prompt.txt` — let op:
`-i <beeld>` slikt alles erna als extra beeld, dus de prompt gaat via stdin.

> STYLE: high-end architectural visualisation, photorealistic materials, of ONE typical
> Flemish house: red-brown hand-moulded brick, white window frames with bluestone sills,
> bluestone plinth, dark anthracite roof tiles, zinc gutter, dark wooden front door.
> Isolated on a plain warm off-white background (#f7f3ec) with a soft contact shadow and
> a thin strip of grass under the house only. 3/4 view from the front-left, slightly
> elevated, whole building centred with generous margin. Soft even daylight.
> Every variant = an edit of base.png with only the described change.

### Straat-edit

> Edit each image: keep the house exactly (brick, windows, roof, framing of the house),
> replace the plain background with a quiet Flemish residential street: pavement and
> asphalt at the bottom, two street trees, low hedges, older brick gables far behind,
> soft late-afternoon light. 4:3, whole house and roof visible.

### Hoeken

> huis-plat-1 / huis-plat-3: edit of dak-plat — remove / add one full storey, same flat
> roof with aluminium edge. huis-lessenaar-1 / huis-lessenaar-3: edit of dak-lessenaar —
> remove / add one storey under the same single-pitch roof (one plane, no ridge,
> trapezoid side wall). Street, camera and light unchanged.
