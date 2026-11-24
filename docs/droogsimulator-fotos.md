# Droogsimulator — foto's voor de keuzetegels

## Diktefoto's die meewisselen (20-11-2026)

Gemaakt met de ingebouwde `image_gen`-tool (imagegen-skill). De kaart in stap 3
kiest nu een foto bij de geselecteerde dikte, zowel met de knoppen als de schuif.
`Geen` toont kale baksteen of de isolatie zonder chape; `weet ik niet` gebruikt
de standaarddikte. De illustratieve foto's tonen het dikteverschil; ze zijn geen
meetinstrument.

Opgeslagen in `public/simulator/`:

- `pleister-{0,1,2,3}cm-v3.webp`: dezelfde muur, met een zichtbare pleisterrand.
- `chape-{0,5,6,7}cm-v3.webp`: dezelfde vloeropbouw, met een zichtbare doorsnede.
- Elk bestand heeft een `-360.webp` en `-640.webp` voor kleinere schermen.
  Het origineel is 1024 × 1536. Nieuwe bestandsnamen voorkomen oude cachebeelden.

### Promptset

Basis pleister (2 cm):

> Photorealistic-natural, premium construction thickness selector photograph for a
> Belgian building drying website. Portrait 1024x1536. Close-up of a single neat
> red-orange brick interior wall at a shallow three-quarter angle, pale mortar,
> soft side daylight, realistic textures. On the right half of the same wall a
> smooth off-white gypsum plaster coat exactly 2 cm thick, with a straight vertical
> exposed cut edge at the centre. Left half bare brick. Keep the edge in the middle
> 20% so portrait and landscape centre crops both show the cross section. No tools,
> people, text, labels, ruler or watermarks.

Bewerkingen van het 2 cm-basisbeeld, één generatie per variant:

> Preserve exactly camera, framing, lighting, bricks, mortar lines and material
> colours. For 0 cm: remove all plaster and continue the existing brick courses
> seamlessly across the right half. For 1 cm: change only the plaster thickness
> to half the reference thickness. For 3 cm: change it to one and a half times the
> reference thickness. Keep the brick substrate fixed, white surface texture and
> straight edge near centre. Portrait 1024x1536, photorealistic, no text or tools.

Basis chape (6 cm):

> Photorealistic-natural, premium construction photograph, portrait 1024x1536.
> Close-up of a clean cutaway at a doorway of an unfinished room. Medium grey
> sand-cement screed recedes into a softly blurred plastered room. Straight
> horizontal exposed front edge: 6 cm compact granular screed on 8 cm cream rigid
> insulation on darker structural concrete. Screed cross section between 42 and
> 58 percent of image height, across the full width for landscape centre crops.
> Low three-quarter camera, sharp tactile textures, soft neutral daylight.
> Matte slightly damp screed, no glossy liquid concrete. No straightedge, tools,
> people, writing, labels, ruler or watermarks. One coherent floor assembly.

Bewerkingen van het 6 cm-basisbeeld, één generatie per variant:

> Preserve camera, framing, room, window, walls, light, concrete base and insulation
> thickness and locations. For 0 cm: remove the entire top grey screed layer and
> expose cream insulation with subtle board joints throughout the room. For 5/7 cm:
> change only the top screed layer from 6 cm to 5/7 cm; keep its bottom fixed on the
> insulation and move its top down/up by 1 cm. Keep grey granular texture and matte
> surface. Portrait 1024x1536. No tools, people, text, labels, ruler or watermark.

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

**Lessenaarsdak rechtgezet (16-11-2026).** In `dak-lessenaar`, `huis-lessenaar-1` en
`huis-lessenaar-3` (en hun `breed-*`) liep de achterrand van het dak naar de goot toe:
het dakvlak leek gedraaid, rechts als een half schilddak. Alle zes opnieuw bewerkt met
Codex (prompt "Lessenaar-fix" onderaan). Controle: de achterrand loopt evenwijdig met de
goot; dat is de eerste lijn om na te meten bij een nieuwe dakfoto.
Daarna stak het dak rechts nog 8–12 px voorbij de zijmuur (links liep het gelijk): het
rechter dakeinde en de goot zijn met een pixelverschuiving ingekort tot gelijk met de muur,
niet opnieuw door Codex (die tekende de rand telkens anders). Tweede controle: dakrand rechts =
muurhoek rechts.

**Een foto vervangen = een nieuwe bestandsnaam.** Alles onder `/simulator/` gaat de deur
uit met `cache-control: immutable` voor een jaar. Overschrijf je een bestand, dan blijft
elke bezoeker die het al zag de oude versie zien (16-11-2026: de nieuwe chape- en
lessenaarfoto's waren live, maar niet bij wie de pagina al kende). Hang er een versie aan
(`-v2`) en zet die in `VERSIE` in `fotos.ts`, of in het pad in `LAAG` voor de diktefoto's.

**Diktefoto's (stap 3) zijn staand, 1024×1536** (`dikte-chape-v2`, `dikte-pleister-v2`): de
kaart toont ze als smalle, hoge kolom, en bij één laag als banner over de volle breedte.
De vroegere 900×600 werd daar 2 à 2,5 keer opgeblazen.

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

### Lessenaar-fix

> Fix ONLY the roof: ONE flat rectangular roof plane rising from the gutter on the front
> facade to a higher back wall; no ridge, no hip, no slope down to the right. The back
> edge is a straight line PARALLEL to the gutter. The left side wall is a clean trapezoid;
> the right end of the roof is a straight edge parallel to its left edge. Keep everything
> else (brick, windows, storeys, camera, street, light, image size) the same.
