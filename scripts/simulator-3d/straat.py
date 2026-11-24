"""
De straat rond de droogsimulator-woning, gerenderd in Blender (Cycles).

Waarom een render en geen live 3D: gras, een beukenhaag en bomen zien er pas echt
uit met gescande modellen, echte blaadjes en echt licht, en dat is op een gsm in
three.js niet te betalen. De camera van de simulator is orthografisch en kijkt
altijd uit dezelfde hoek (KIJK = (1,1,1) in three.js), dus een render uit exact
die hoek past pixel op pixel achter de live woning. IsoHouse3D zet het beeld op
een vlak loodrecht op de kijkrichting; zoomen en schuiven doet het dan vanzelf mee.

De straat is opgebouwd uit percelen, zoals een echte verkaveling: elk huis heeft
een voortuin met pad, haag en (behalve bij rijwoningen) een oprit, en een
achtertuin met terras, tuinschermen, een achterhaag, een tuinhuis en een boom.
Op ongeveer twee op drie opritten staat een auto, procedureel gebouwd (Poly Haven heeft
geen auto's), net als de struiken in de borders.
Daarachter ligt weiland met een bomenrij. Alle buren delen één bouwstijl met de
live woning: dezelfde baksteen in nauwe tinten, donkere pannen, witte ramen en
dezelfde goot- en nokhoogte, zodat de rij leest als één straat.

Twee lagen per woningtype en breedte:
  achter: alles. Komt achter de woning.
  voor:   alleen wat de woning kan overlappen (zie `sorteer_voor`). De rest is
          holdout, dus doorzichtig. Komt vóór de woning en vervaagt als ze opengaat.

Gebruik (assets van Poly Haven, CC0, buiten de repo):
  ASSETS=/pad/naar/polyhaven OUT=/pad/uit WONING=halfopen BREEDTE=8 \\
    blender -b -P scripts/simulator-3d/straat.py

BREEDTE is de gevelbreedte van de live woning (droogSimulator.ts: BREEDTES); de
uitvoer heet {WONING}-b{BREEDTE*10}-achter.png en -voor.png.

Assen: three.js (x, y omhoog, z naar de straat) = Blender (x, -z, y). De woning
staat op x 0..w, z 0..l; de voorgevel kijkt naar +z.
"""
import math
import os
import random

import bpy
from mathutils import Vector

ASSETS = os.environ["ASSETS"]
OUT = os.environ["OUT"]
WONING = os.environ.get("WONING", "halfopen")
SAMPLES = int(os.environ.get("SAMPLES", "64"))
RES = (int(os.environ.get("RESX", "3500")), int(os.environ.get("RESY", "2500")))
SCHAAL = float(os.environ.get("SCHAAL", "56"))  # ortho breedte in meter
REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Zelfde maten als src/lib/droogSimulator.ts (WONING) en maten.ts.
WONINGEN = {"rijwoning": (6, 10, 2), "halfopen": (8, 10, 1), "open": (10, 11, 0)}
W, L, BUREN = WONINGEN[WONING]
if os.environ.get("BREEDTE"):
    W = float(os.environ["BREEDTE"])
NAAM = f"{WONING}-b{round(W * 10)}"
T, FH = 0.24, 2.9
OV = 0.35  # dakoversteek, zoals IsoHouse3D
NOK = min(L * 0.38, 4.2)  # maten.ts: nokHoogte("zadeldak", l)
D = L + 2 * T  # diepte van een huis, buitenwerks
LAGEN = 2

# Straatprofiel vanaf de voorgevel.
F = L + T
# Een rijwoning parkeert in de voortuin (geen zijstrook), dus die is diep genoeg voor een auto.
TUIN = 5.6 if BUREN == 2 else 4.2
VOETPAD, BOORD, FIETS, RIJWEG = 1.6, 0.15, 1.3, 5.6
ACHTER = 15.0  # diepte van de achtertuin
PAD0 = F + TUIN
BOORD0 = PAD0 + VOETPAD
FIETS0 = BOORD0 + BOORD
WEG0 = FIETS0 + FIETS
WEG1 = WEG0 + RIJWEG
FIETS1 = WEG1 + FIETS
BOORD1 = FIETS1 + BOORD
PAD1 = BOORD1 + VOETPAD
EIND = TUIN + D + ACHTER  # van de rand van het voetpad tot de achterhaag
X0, X1, Z0, Z1 = -80, W + 80, -70, PAD1 + 70
DEUR = 0.7  # midden van de voordeur langs x (droogSimulator: 0.25..1.15)
OPRIT_B, ZIJ = 3.0, 3.6
OPRIT_R = 2.7  # parkeerplek in de voortuin van een rijwoning  # breedte van een oprit, en de strook naast het huis waarin ze ligt

random.seed(4)


def V(x, y, z):
    return Vector((x, -z, y))


def zs(kant, s):
    """Afstand `s` vanaf de rand van het voetpad, het perceel in, naar z.
    kant +1 is de kant van de live woning, -1 de overkant."""
    return PAD0 - s if kant > 0 else PAD1 + s


def zr(kant, s0, s1):
    a, b = zs(kant, s0), zs(kant, s1)
    return min(a, b), max(a, b)


# ───────────────────────── scène ─────────────────────────

bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.engine = "CYCLES"
sc.cycles.samples = SAMPLES
sc.cycles.use_denoising = True
sc.render.film_transparent = True
sc.render.resolution_x, sc.render.resolution_y = RES
sc.render.image_settings.file_format = "PNG"
sc.render.image_settings.color_mode = "RGBA"
sc.view_settings.view_transform = "AgX"
for look in ("AgX - Medium High Contrast", "Medium High Contrast", "AgX - Punchy"):
    try:
        sc.view_settings.look = look
        break
    except TypeError:
        pass
try:
    prefs = bpy.context.preferences.addons["cycles"].preferences
    prefs.compute_device_type = "METAL"
    prefs.get_devices()
    for d in prefs.devices:
        d.use = True
    sc.cycles.device = "GPU"
except Exception as e:  # noqa: BLE001
    print("geen GPU:", e)

col_achter = bpy.data.collections.new("achter")
col_voor = bpy.data.collections.new("voor")
sc.collection.children.link(col_achter)
sc.collection.children.link(col_voor)


def link(o, voor=False):
    for c in o.users_collection:
        c.objects.unlink(o)
    (col_voor if voor else col_achter).objects.link(o)
    return o


# ───────────────────────── materialen ─────────────────────────

def img(path, data=False):
    im = bpy.data.images.load(path, check_existing=True)
    if data:
        im.colorspace_settings.name = "Non-Color"
    return im


def srgb(h):
    h = h.lstrip("#")
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c)


def vermenigvuldig(nt, kleur_, tint):
    mix = nt.nodes.new("ShaderNodeMix")
    mix.data_type = "RGBA"
    mix.blend_type = "MULTIPLY"
    mix.inputs["Factor"].default_value = 1.0
    nt.links.new(kleur_, mix.inputs[6])
    mix.inputs[7].default_value = (*tint, 1)
    return mix.outputs[2]


def pbr(naam, map_, maat, tint=None):
    """Poly Haven-materiaal, `maat` meter per tegel, op objectcoördinaten."""
    m = bpy.data.materials.new(naam)
    m.use_nodes = True
    nt = m.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    tc = nt.nodes.new("ShaderNodeTexCoord")
    mp = nt.nodes.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = (1 / maat, 1 / maat, 1 / maat)
    nt.links.new(tc.outputs["Object"], mp.inputs["Vector"])
    d = nt.nodes.new("ShaderNodeTexImage")
    d.image = img(f"{ASSETS}/{map_}/Diffuse.jpg")
    nt.links.new(mp.outputs["Vector"], d.inputs["Vector"])
    kleur_ = d.outputs["Color"]
    if tint:
        kleur_ = vermenigvuldig(nt, kleur_, tint)
    nt.links.new(kleur_, bsdf.inputs["Base Color"])
    r = nt.nodes.new("ShaderNodeTexImage")
    r.image = img(f"{ASSETS}/{map_}/Rough.jpg", True)
    nt.links.new(mp.outputs["Vector"], r.inputs["Vector"])
    nt.links.new(r.outputs["Color"], bsdf.inputs["Roughness"])
    # Reliëf via bump op de diffuse, niet via de normal map: deze vlakken hebben geen
    # UV-map, dus een tangent-space normal map heeft geen raaklijnen, en een deel van
    # de rijweg renderde pikzwart.
    bw = nt.nodes.new("ShaderNodeRGBToBW")
    nt.links.new(d.outputs["Color"], bw.inputs["Color"])
    bp = nt.nodes.new("ShaderNodeBump")
    bp.inputs["Strength"].default_value = 0.35
    bp.inputs["Distance"].default_value = 0.02
    nt.links.new(bw.outputs["Val"], bp.inputs["Height"])
    nt.links.new(bp.outputs["Normal"], bsdf.inputs["Normal"])
    return m


def tegel(naam, pad, rough=0.85, tint=None):
    """Een tegel uit de simulator zelf (public/simulator/3d), op UV in meter, met reliëf."""
    m = bpy.data.materials.new(naam)
    m.use_nodes = True
    nt = m.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    t = nt.nodes.new("ShaderNodeTexImage")
    t.image = img(pad)
    kleur_ = t.outputs["Color"]
    if tint:
        kleur_ = vermenigvuldig(nt, kleur_, tint)
    nt.links.new(kleur_, bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = rough
    bw = nt.nodes.new("ShaderNodeRGBToBW")
    nt.links.new(t.outputs["Color"], bw.inputs["Color"])
    bump = nt.nodes.new("ShaderNodeBump")
    bump.inputs["Strength"].default_value = 0.5
    bump.inputs["Distance"].default_value = 0.01
    nt.links.new(bw.outputs["Val"], bump.inputs["Height"])
    nt.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    return m


def kleur(naam, rgb, rough=0.6, metal=0.0):
    m = bpy.data.materials.new(naam)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*rgb, 1)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metal
    return m


def stenen(naam, breed, hoog, kleuren, voeg, offset=0.5, voegmaat=0.006, ruis=0.25, bump=0.6):
    """Bestrating of planken met de brick-node: tegels, klinkers, tuinschermen."""
    m = bpy.data.materials.new(naam)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    tc = nt.nodes.new("ShaderNodeTexCoord")
    br = nt.nodes.new("ShaderNodeTexBrick")
    br.offset = offset
    br.inputs["Scale"].default_value = 1.0
    br.inputs["Brick Width"].default_value = breed
    br.inputs["Row Height"].default_value = hoog
    br.inputs["Mortar Size"].default_value = voegmaat
    br.inputs["Color1"].default_value = (*srgb(kleuren[0]), 1)
    br.inputs["Color2"].default_value = (*srgb(kleuren[1]), 1)
    br.inputs["Mortar"].default_value = (*srgb(voeg), 1)
    nt.links.new(tc.outputs["Object"], br.inputs["Vector"])
    nz = nt.nodes.new("ShaderNodeTexNoise")
    nz.inputs["Scale"].default_value = 30
    nz.inputs["Detail"].default_value = 8
    mix = nt.nodes.new("ShaderNodeMix")
    mix.data_type = "RGBA"
    mix.blend_type = "OVERLAY"
    mix.inputs["Factor"].default_value = ruis
    nt.links.new(br.outputs["Color"], mix.inputs[6])
    nt.links.new(nz.outputs["Color"], mix.inputs[7])
    nt.links.new(mix.outputs[2], b.inputs["Base Color"])
    b.inputs["Roughness"].default_value = 0.85
    bp = nt.nodes.new("ShaderNodeBump")
    bp.inputs["Strength"].default_value = bump
    bp.inputs["Distance"].default_value = 0.01
    nt.links.new(br.outputs["Fac"], bp.inputs["Height"])
    nt.links.new(bp.outputs["Normal"], b.inputs["Normal"])
    return m


def ruw(naam, kleuren, schaal=8.0, bump=0.4):
    """Effen oppervlak met vlekken: houtschors in een border, EPDM op een tuinhuis."""
    m = bpy.data.materials.new(naam)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    nz = nt.nodes.new("ShaderNodeTexNoise")
    nz.inputs["Scale"].default_value = schaal
    nz.inputs["Detail"].default_value = 10
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].color = (*srgb(kleuren[0]), 1)
    ramp.color_ramp.elements[1].color = (*srgb(kleuren[1]), 1)
    nt.links.new(nz.outputs["Fac"], ramp.inputs["Fac"])
    nt.links.new(ramp.outputs["Color"], b.inputs["Base Color"])
    b.inputs["Roughness"].default_value = 0.95
    bp = nt.nodes.new("ShaderNodeBump")
    bp.inputs["Strength"].default_value = bump
    nt.links.new(nz.outputs["Fac"], bp.inputs["Height"])
    nt.links.new(bp.outputs["Normal"], b.inputs["Normal"])
    return m


BAKSTEEN = f"{REPO}/public/simulator/3d/baksteen.webp"
M = {
    "gras": pbr("gras", "leafy_grass", 2.0, tint=srgb("#6d8650")),
    "asfalt": pbr("asfalt", "asphalt_02", 4.0, tint=srgb("#8a8a8a")),
    "fietspad": pbr("fietspad", "asphalt_02", 4.0, tint=srgb("#d4705f")),
    "voetpad": stenen("voetpad", 0.3, 0.3, ("#9a958c", "#8a857d"), "#6c6862", offset=0.0, ruis=0.4),
    "pad": stenen("pad", 0.6, 0.6, ("#8a8b8b", "#7d7e7e"), "#5f6060", offset=0.0),
    "terras": stenen("terras", 0.6, 0.6, ("#cfc9bd", "#c3bdb1"), "#a19c92", offset=0.0),
    # Betonklinkers in halfsteens verband, zoals op bijna elke Vlaamse oprit.
    "oprit": stenen("oprit", 0.22, 0.11, ("#8e8b86", "#7f7c77"), "#62605c", voegmaat=0.004, ruis=0.35),
    "boord": kleur("boord", srgb("#a9a59e"), 0.8),
    "streep": kleur("streep", srgb("#eeede8"), 0.5),
    # Dezelfde baksteen als de live woning (IsoHouse3D: #f3e2d8 op baksteen.webp),
    # met drie nauwe tinten: een verkaveling uit één periode, niet vier bouwstijlen.
    "steen0": tegel("steen0", BAKSTEEN, 0.9, tint=srgb("#f2e6e0")),
    "steen1": tegel("steen1", BAKSTEEN, 0.9, tint=srgb("#e6d8d0")),
    "steen2": tegel("steen2", BAKSTEEN, 0.9, tint=srgb("#ecdcd0")),
    "steen3": tegel("steen3", BAKSTEEN, 0.9, tint=srgb("#ddd2cc")),
    "pannen": tegel("pannen", f"{REPO}/public/simulator/3d/dakpannen.webp", 0.5, tint=srgb("#b4b4b8")),
    "boei": kleur("boei", srgb("#2c2e31"), 0.6),
    "nokpan": kleur("nokpan", srgb("#26282b"), 0.5),
    "glas": kleur("glas", srgb("#33454f"), 0.05, 0.15),
    "kader": kleur("kader", srgb("#f4f1ec"), 0.32),
    "arduin": kleur("arduin", srgb("#4a4c4e"), 0.5),
    "deur": kleur("deur", srgb("#3b2a22"), 0.45),
    "paal": kleur("paal", srgb("#5d6266"), 0.45, 0.6),
    "bus": kleur("bus", srgb("#2d3034"), 0.4, 0.3),
    "lamp": kleur("lamp", srgb("#f3f0e6"), 0.15),
    "zink": kleur("zink", srgb("#a7adb1"), 0.32, 0.75),
    "scherm": stenen("scherm", 1.8, 0.145, ("#5b4737", "#544132"), "#2f251d", offset=0.0, voegmaat=0.004, ruis=0.3, bump=0.3),
    "paaltje": kleur("paaltje", srgb("#47382c"), 0.8),
    "tuinhuis": stenen("tuinhuis", 3.0, 0.14, ("#4a3d33", "#43372e"), "#251e18", offset=0.0, voegmaat=0.003, ruis=0.3, bump=0.3),
    "epdm": ruw("epdm", ("#26272a", "#2f3034"), 4.0, 0.1),
    "schors": ruw("schors", ("#3a2a1f", "#5a4130"), 22.0, 0.8),
}
STENEN = ["steen1", "steen0", "steen2", "steen3", "steen0", "steen2"]


# ───────────────────────── geometrie ─────────────────────────

def mesh(naam, verts, faces, mat, uvs=None):
    me = bpy.data.meshes.new(naam)
    me.from_pydata([tuple(v) for v in verts], [], faces)
    if uvs:
        uvl = me.uv_layers.new()
        i = 0
        for f in me.polygons:
            for li in f.loop_indices:
                uvl.data[li].uv = uvs[i]
                i += 1
    me.materials.append(mat)
    o = bpy.data.objects.new(naam, me)
    sc.collection.objects.link(o)
    return link(o)


def vlak(naam, x0, z0, x1, z1, mat, y=0.0):
    x0, x1 = sorted((x0, x1))
    z0, z1 = sorted((z0, z1))
    return mesh(naam, [V(x0, y, z0), V(x1, y, z0), V(x1, y, z1), V(x0, y, z1)], [(0, 3, 2, 1)], mat)


BLOK_VLAKKEN = [(0, 3, 2, 1), (4, 5, 6, 7), (0, 1, 5, 4), (2, 3, 7, 6), (0, 4, 7, 3), (1, 2, 6, 5)]


def blok(naam, x0, x1, y0, y1, z0, z1, mat, bevel=0.0):
    """Een balk via de data-API: bpy.ops kost per aanroep een scène-update, en met
    een paar duizend blokken (ramen, palen, schermen) was dat minuten opbouwtijd."""
    x0, x1 = sorted((x0, x1))
    z0, z1 = sorted((z0, z1))
    bx, by, bz = (x0, x1), (-z1, -z0), (y0, y1)
    vs = [(bx[i & 1 ^ (i >> 1 & 1)], by[i >> 1 & 1], bz[i >> 2]) for i in range(8)]
    # UV per vlak uit de twee assen die het vlak opspannen, in baksteenperiodes.
    uvs = []
    for f in BLOK_VLAKKEN:
        a = [Vector(vs[k]) for k in f]
        nrm = (a[1] - a[0]).cross(a[2] - a[0])
        ax = max(range(3), key=lambda k: abs(nrm[k]))
        u_as, v_as = [k for k in range(3) if k != ax]
        uvs += [(p[u_as] / 3.232, p[v_as] / 1.984) for p in a]
    o = mesh(naam, vs, BLOK_VLAKKEN, mat, uvs=uvs)
    if bevel:
        b = o.modifiers.new("bevel", "BEVEL")
        b.width = bevel
        b.segments = 3
    return link(o)


def muur(naam, a, b, y0, y1, mat, per=(3.232, 1.984)):
    """Verticale muur van punt a (x,z) naar b (x,z), met UV in tegelperiodes."""
    (ax, az), (bx, bz) = a, b
    lng = math.hypot(bx - ax, bz - az)
    vs = [V(ax, y0, az), V(bx, y0, bz), V(bx, y1, bz), V(ax, y1, az)]
    u1, v0, v1 = lng / per[0], y0 / per[1], y1 / per[1]
    return mesh(naam, vs, [(0, 1, 2, 3)], mat, uvs=[(0, v0), (u1, v0), (u1, v1), (0, v1)])


def cilinder(naam, a, b, r, mat, n=16):
    """Cilinder van punt a naar punt b (three.js-coördinaten): goot, nok, lantaarnpaal."""
    pa, pb = V(*a), V(*b)
    rich = pb - pa
    bpy.ops.mesh.primitive_cylinder_add(vertices=n, radius=r, depth=rich.length, location=(pa + pb) / 2)
    o = bpy.context.active_object
    o.name = naam
    o.rotation_euler = rich.to_track_quat("Z", "Y").to_euler()
    o.data.materials.append(mat)
    bpy.ops.object.shade_smooth()
    return link(o)


class Gevel:
    """Een gevelvlak om ramen op te zetten: u loopt langs de gevel, d naar buiten."""

    def __init__(self, as_, vast, n):
        self.as_, self.vast, self.n = as_, vast, n

    def blok(self, naam, u0, u1, y0, y1, d0, d1, mat):
        a, b = self.vast + self.n * d0, self.vast + self.n * d1
        if self.as_ == "z":  # gevel evenwijdig met x, op z = vast
            return blok(naam, u0, u1, y0, y1, a, b, mat)
        return blok(naam, a, b, y0, y1, u0, u1, mat)

    def raam(self, u0, u1, y0, y1, dorpel=True):
        self.blok("glas", u0, u1, y0, y1, 0, 0.015, M["glas"])
        k = 0.07
        for a0, a1, b0, b1 in ((u0, u0 + k, y0, y1), (u1 - k, u1, y0, y1), (u0, u1, y0, y0 + k), (u0, u1, y1 - k, y1)):
            self.blok("kader", a0, a1, b0, b1, 0, 0.05, M["kader"])
        if u1 - u0 > 1.1:  # middenstijl zoals bij een draai-kipraam
            um = (u0 + u1) / 2
            self.blok("kader", um - 0.035, um + 0.035, y0, y1, 0, 0.05, M["kader"])
        if dorpel:
            self.blok("dorpel", u0 - 0.07, u1 + 0.07, y0 - 0.06, y0, 0, 0.09, M["arduin"])

    def deur(self, u0, u1):
        y0, y1 = 0.3, 2.45
        self.blok("deur", u0, u1, y0, y1, 0, 0.03, M["deur"])
        for a0, a1, b0, b1 in ((u0 - 0.06, u0, y0, y1 + 0.06), (u1, u1 + 0.06, y0, y1 + 0.06), (u0 - 0.06, u1 + 0.06, y1, y1 + 0.06)):
            self.blok("deurkader", a0, a1, b0, b1, 0, 0.05, M["boei"])
        self.blok("stoep", u0 - 0.15, u1 + 0.15, 0, y0, 0, 0.4, M["arduin"])


def voorgevel_ramen(bw, van, tot, v, variant=0):
    """De ramen van een voorgevel van `bw` breed, met de voordeur van `van` tot `tot`
    (vanaf de linkerhoek): een port van voorgevelGaten in src/components/simulator/gevel.ts.
    Geeft (a0, a1, borstwering) per raam; de latei ligt voor alle ramen even hoog."""
    rechts = bw - tot >= van
    dc = (van + tot) / 2
    gaten = []
    if v == 0:
        z0 = tot + 0.18 if rechts else van - 0.18 - 0.36
        if (bw - (z0 + 0.36) if rechts else z0) >= 3.0:
            gaten.append((z0, z0 + 0.36, 0.25))
        rand = max([tot] + [g[1] for g in gaten]) if rechts else min([van] + [g[0] for g in gaten])
    else:
        gaten.append((dc - 0.3, dc + 0.3, 1.0))
        rand = dc + 0.3 if rechts else dc - 0.3
    s0, s1 = (rand + 0.5, bw - 0.4) if rechts else (0.4, rand - 0.5)
    span = s1 - s0
    if span < 0.8:
        return gaten
    if v == 0:
        tweede = span >= 5.4
        deel = span * 0.6 if tweede else span
        rb = min(2.6, max(min(2.0, deel - 0.4), deel * 0.7))
        c = s0 + deel / 2 if rechts else s1 - deel / 2
        gaten.append((c - rb / 2, c + rb / 2, 0.5))
        if tweede:
            c2 = s1 - (span - deel) / 2 if rechts else s0 + (span - deel) / 2
            gaten.append((c2 - 0.55, c2 + 0.55, 0.9))
        return gaten
    n = 1 if span < 3.0 else 2 if span < 6.4 else 3
    for k in range(n):
        c = s0 + span * (k + 0.5) / n
        rb = min((1.3, 1.0, 1.2)[(k + v - 1 + variant) % 3], span / n - 0.5)
        gaten.append((c - rb / 2, c + rb / 2, 0.9))
    return gaten


def huis(naam, x0, x1, kant, vrij_l, vrij_r, steen, deur_rechts, schouw, variant=0):
    """Een buurhuis van twee bouwlagen met zadeldak, in de bouwstijl van de live woning.
    Geeft het midden van de voordeur terug (langs x)."""
    z0, z1 = zr(kant, TUIN, TUIN + D)
    h = LAGEN * FH
    zm = (z0 + z1) / 2
    mat = M[steen]
    for i, (a, b) in enumerate([((x0, z1), (x1, z1)), ((x1, z1), (x1, z0)), ((x1, z0), (x0, z0)), ((x0, z0), (x0, z1))]):
        muur(f"{naam}-muur{i}", a, b, 0, h, mat)
    for gx in (x0, x1):
        vs = [V(gx, h, z0), V(gx, h, z1), V(gx, h + NOK, zm)]
        mesh(f"{naam}-puntgevel", vs, [(0, 1, 2)], mat, uvs=[(0, h / 1.984), ((z1 - z0) / 3.232, h / 1.984), ((zm - z0) / 3.232, (h + NOK) / 1.984)])
    # Dak: zelfde goot- (h - 0.05) en nokhoogte als de live woning, overstek aan vrije gevels.
    xa = x0 - (0.15 if vrij_l else 0.0)
    xb = x1 + (0.15 if vrij_r else 0.0)
    yE, yR = h - 0.05, h + NOK
    for zE in (z1 + OV, z0 - OV):
        sl = math.hypot(zE - zm, yR - yE)
        mesh(f"{naam}-dak", [V(xa, yE, zE), V(xb, yE, zE), V(xb, yR, zm), V(xa, yR, zm)], [(0, 1, 2, 3)], M["pannen"],
             uvs=[(0, 0), ((xb - xa) / 2.16, 0), ((xb - xa) / 2.16, sl / 2.16), (0, sl / 2.16)])
        blok(f"{naam}-boei", xa, xb, yE - 0.24, yE + 0.01, zE - 0.03, zE + 0.03, M["boei"])
        zg = zE + (0.08 if zE > zm else -0.08)
        cilinder(f"{naam}-goot", (xa, yE - 0.14, zg), (xb, yE - 0.14, zg), 0.07, M["zink"], 12)
        for xw, vrij in ((xa, vrij_l), (xb, vrij_r)):
            if vrij:  # windveer langs de schuine dakrand
                mesh(f"{naam}-windveer", [V(xw, yE - 0.22, zE), V(xw, yR - 0.22, zm), V(xw, yR + 0.04, zm), V(xw, yE + 0.04, zE)], [(0, 1, 2, 3)], M["boei"])
    cilinder(f"{naam}-nok", (xa, yR + 0.02, zm), (xb, yR + 0.02, zm), 0.11, M["nokpan"], 14)
    if schouw:
        sx = x0 + (x1 - x0) * 0.66
        zc = zm - kant * 1.0  # op het achterste dakvlak
        blok(f"{naam}-schouw", sx, sx + 0.6, h + NOK * 0.5, h + NOK + 0.75, zc - 0.3, zc + 0.3, mat)
        blok(f"{naam}-schouwkap", sx - 0.06, sx + 0.66, h + NOK + 0.75, h + NOK + 0.85, zc - 0.36, zc + 0.36, M["arduin"])

    # Arduinen plint rondom en een regenpijp op elke hoek onder de goot, zoals bij de live woning.
    blok(f"{naam}-plint", x0 - 0.03, x1 + 0.03, 0, 0.32, z0 - 0.03, z1 + 0.03, M["arduin"])
    for px in ((x0 + 0.12,) if vrij_l else ()) + ((x1 - 0.12,) if vrij_r else ()) or (x0 + 0.12,):
        for pz in (z1 + 0.08, z0 - 0.08):
            cilinder(f"{naam}-afvoer", (px, 0.05, pz), (px, yE - 0.14, pz), 0.045, M["zink"], 10)
    voor = Gevel("z", z1 if kant > 0 else z0, kant)
    achter = Gevel("z", z0 if kant > 0 else z1, -kant)
    bw = x1 - x0
    # Voorgevel zoals de live woning (src/components/simulator/gevel.ts): beneden de deur
    # met een zijlicht en een breed leefruimteraam, boven een overloopraam en
    # slaapkamerramen op hun eigen verdeling. Geen kolomraster: echte ramen staan zelden
    # recht boven elkaar. `variant` laat de slaapkamerramen per huis anders afwisselen.
    dc = x1 - 1.1 if deur_rechts else x0 + 1.1
    voor.deur(dc - 0.5, dc + 0.5)
    for v in range(LAGEN):
        for a0, a1, b0 in voorgevel_ramen(bw, dc - 0.5 - x0, dc + 0.5 - x0, v, variant):
            voor.raam(x0 + a0, x0 + a1, v * FH + 0.3 + b0, v * FH + 2.55)
    # Achtergevel: schuifraam naar het terras en een raam ernaast; boven een
    # badkamerraam hoog in de muur en slaapkamerramen, niet recht boven de ramen beneden.
    achter.raam(x0 + bw * 0.3 - 1.2, x0 + bw * 0.3 + 1.2, 0.3, 2.55, dorpel=False)
    if bw > 6:
        achter.raam(x0 + bw * 0.78 - 0.6, x0 + bw * 0.78 + 0.6, 1.15, 2.55)
    for f, rb, y0 in ((0.18, 1.2, 1.15), (0.55, 0.7, 1.75)) + (((0.84, 1.1, 1.15),) if bw >= 7.5 else ()):
        cx = x0 + bw * f
        achter.raam(cx - rb / 2, cx + rb / 2, FH + y0, FH + 2.55)
    # Zijgevels: alleen aan een vrije kant, zoals zijgevelGaten in gevel.ts.
    zachter, zvoor = (z0, z1) if kant > 0 else (z1, z0)
    for vrij, xg, nx in ((vrij_l, x0, -1), (vrij_r, x1, 1)):
        if not vrij:
            continue
        g = Gevel("x", xg, nx)
        ramen = [(0, 0.3, 1.2), (1, 0.55, 1.0)] + ([(0, 0.78, 0.9)] if L > 10.5 else [])
        for v, f, rb in ramen:
            cz = zachter + (zvoor - zachter) * f
            g.raam(cz - rb / 2, cz + rb / 2, v * FH + 1.2, v * FH + 2.55)
    return dc


# ───────────────────────── planten ─────────────────────────

def importeer(naam):
    """Een Poly Haven-model als één verborgen mesh (stam en blad samen), om te kopiëren."""
    voor_obj = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=f"{ASSETS}/{naam}/{naam}.gltf")
    nieuw = [o for o in bpy.data.objects if o not in voor_obj]
    namen = [o.name for o in nieuw]  # join() removes objects; keep names, not references
    meshes = [o for o in nieuw if o.type == "MESH"]
    bpy.ops.object.select_all(action="DESELECT")
    for o in meshes:
        mw = o.matrix_world.copy()
        o.parent = None
        o.matrix_world = mw
        o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    if len(meshes) > 1:
        bpy.ops.object.join()
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
    bron = bpy.context.view_layer.objects.active
    for nm in namen:
        o = bpy.data.objects.get(nm)
        if o is not None and o != bron:
            bpy.data.objects.remove(o)
    bron.hide_render = True
    bron.hide_viewport = True
    bron.name = naam
    return bron


def plaats(bron, x, z, hoogte, hoek=None, y=0.0):
    """Een linked duplicate van `bron`, met de onderkant op de grond en `hoogte` hoog."""
    lo = Vector([min(c[i] for c in bron.bound_box) for i in range(3)])
    hi = Vector([max(c[i] for c in bron.bound_box) for i in range(3)])
    f = hoogte / (hi.z - lo.z)
    o = bron.copy()
    sc.collection.objects.link(o)
    o.hide_render = False
    o.hide_viewport = False
    o.scale = (f, f, f)
    o.rotation_euler = (0, 0, random.random() * math.tau if hoek is None else hoek)
    mid = Vector(((lo.x + hi.x) / 2, (lo.y + hi.y) / 2, lo.z)) * f
    mid.rotate(o.rotation_euler)
    o.location = V(x, y, z) - mid
    return link(o)


BOMEN = [importeer(n) for n in ("island_tree_01", "island_tree_02", "island_tree_03", "tree_small_02")]
TUINSET = importeer("outdoor_table_chair_set_01")


def boom(x, z, hoogte):
    return plaats(random.choice(BOMEN), x, z, hoogte)


def bladmat(naam, kleuren, rough=0.45, sss=0.0):
    """Groen dat per spriet/blad varieert via Object Info > Random (werkt per instance)."""
    m = bpy.data.materials.new(naam)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    oi = nt.nodes.new("ShaderNodeObjectInfo")
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    els = ramp.color_ramp.elements
    els[0].color = (*srgb(kleuren[0]), 1)
    els[1].color = (*srgb(kleuren[-1]), 1)
    for i, k in enumerate(kleuren[1:-1], start=1):
        e = els.new(i / (len(kleuren) - 1))
        e.color = (*srgb(k), 1)
    nt.links.new(oi.outputs["Random"], ramp.inputs["Fac"])
    nt.links.new(ramp.outputs["Color"], b.inputs["Base Color"])
    b.inputs["Roughness"].default_value = rough
    if sss:
        b.inputs["Subsurface Weight"].default_value = sss
    return m


def maak_mesh(naam, verts, faces, mat):
    me = bpy.data.meshes.new(naam)
    me.from_pydata(verts, [], faces)
    me.materials.append(mat)
    o = bpy.data.objects.new(naam, me)
    sc.collection.objects.link(o)
    o.hide_render = True
    o.hide_viewport = True
    return o


def graspol(naam, sprieten, h0, h1, breed, kleuren, seed):
    """Een pol sprieten, licht gebogen, in alle richtingen."""
    rnd = random.Random(seed)
    vs, fs = [], []
    for _ in range(sprieten):
        a = rnd.random() * math.tau
        h = h0 + rnd.random() * (h1 - h0)
        lean = 0.15 + rnd.random() * 0.4
        dx, dy = math.cos(a), math.sin(a)
        px, py = -dy * breed, dx * breed
        ox, oy = rnd.uniform(-0.03, 0.03), rnd.uniform(-0.03, 0.03)
        i = len(vs)
        for t, w in ((0, 1.0), (0.5, 0.75), (1, 0.0)):
            cx, cy, cz = ox + dx * lean * h * t * t, oy + dy * lean * h * t * t, h * t
            vs += [(cx - px * w, cy - py * w, cz), (cx + px * w, cy + py * w, cz)]
        fs += [(i, i + 1, i + 3, i + 2), (i + 2, i + 3, i + 5, i + 4)]
    return maak_mesh(naam, vs, fs, bladmat(naam, kleuren, 0.5, 0.15))


def beukblad():
    """Een beukenblad van 5 x 3 cm, licht gebold."""
    vs = [(0, 0, 0)]
    for k in range(10):
        a = k / 10 * math.tau
        vs.append((math.cos(a) * 0.025, math.sin(a) * 0.015, 0.004 * (1 - abs(math.cos(a)))))
    fs = [(0, 1 + k, 1 + (k + 1) % 10) for k in range(10)]
    return maak_mesh("beukblad", vs, fs, bladmat("blad", ["#2c4a16", "#3d5e1d", "#507326", "#678a31"], 0.4, 0.1))


# Gemaaid gazon: korte, dichte pollen met een paar gelige toppen.
GAZON = graspol("gazonpol", 14, 0.05, 0.11, 0.0028, ["#36511d", "#425f24", "#4f6c2a", "#5f7a31", "#72863c", "#868b4a"], 1)
# Weiland: lang gras.
WEIDE = graspol("weidepol", 18, 0.18, 0.42, 0.003, ["#4a6226", "#5a722f", "#6f8238", "#8a8f4a", "#9c9658"], 2)
BLAD = beukblad()
# Onderlaag van een haag: donker groen, zodat gaten tussen de blaadjes als schaduw lezen.
M["haag"] = ruw("haag", ("#1c2e10", "#34501c"), 14.0, 1.0)


def verspreid(o, bron, dichtheid, schaal=(0.7, 1.3), uitsparen=(), hou_basis=True, rechtop=False):
    """Geometry nodes: instances van `bron` over de vlakken van `o`, behalve in `uitsparen`
    (rechthoeken in three.js-coördinaten x0, x1, z0, z1)."""
    ng = bpy.data.node_groups.new(f"verspreid-{o.name}", "GeometryNodeTree")
    ng.interface.new_socket(name="Geometry", in_out="INPUT", socket_type="NodeSocketGeometry")
    ng.interface.new_socket(name="Geometry", in_out="OUTPUT", socket_type="NodeSocketGeometry")
    N, Lk = ng.nodes, ng.links
    gi, go = N.new("NodeGroupInput"), N.new("NodeGroupOutput")
    dist = N.new("GeometryNodeDistributePointsOnFaces")
    dist.inputs["Density"].default_value = dichtheid
    Lk.new(gi.outputs[0], dist.inputs["Mesh"])
    punten = dist.outputs["Points"]
    if uitsparen:
        pos = N.new("GeometryNodeInputPosition")
        sep = N.new("ShaderNodeSeparateXYZ")
        Lk.new(pos.outputs[0], sep.inputs[0])
        weg = None
        for x0, x1, z0, z1 in uitsparen:
            conds = []
            for sock, val, op in ((0, x0, "GREATER_THAN"), (0, x1, "LESS_THAN"), (1, -z1, "GREATER_THAN"), (1, -z0, "LESS_THAN")):
                c = N.new("FunctionNodeCompare")
                c.data_type = "FLOAT"
                c.operation = op
                Lk.new(sep.outputs[sock], c.inputs[0])
                c.inputs[1].default_value = val
                conds.append(c.outputs[0])
            acc = conds[0]
            for c in conds[1:]:
                bm = N.new("FunctionNodeBooleanMath")
                bm.operation = "AND"
                Lk.new(acc, bm.inputs[0])
                Lk.new(c, bm.inputs[1])
                acc = bm.outputs[0]
            if weg is None:
                weg = acc
            else:
                bm = N.new("FunctionNodeBooleanMath")
                bm.operation = "OR"
                Lk.new(weg, bm.inputs[0])
                Lk.new(acc, bm.inputs[1])
                weg = bm.outputs[0]
        dg = N.new("GeometryNodeDeleteGeometry")
        dg.domain = "POINT"
        Lk.new(punten, dg.inputs["Geometry"])
        Lk.new(weg, dg.inputs["Selection"])
        punten = dg.outputs[0]
    info = N.new("GeometryNodeObjectInfo")
    info.transform_space = "ORIGINAL"
    info.inputs["Object"].default_value = bron
    rot = N.new("FunctionNodeRandomValue")
    rot.data_type = "FLOAT_VECTOR"
    vmax = next(i for i in rot.inputs if i.type == "VECTOR" and i.name == "Max")
    vmax.default_value = (0.25, 0.25, math.tau) if rechtop else (math.tau, math.tau, math.tau)
    rot_uit = next(o for o in rot.outputs if o.type == "VECTOR")
    sch = N.new("FunctionNodeRandomValue")
    sch.data_type = "FLOAT"
    fl = [i for i in sch.inputs if i.type == "VALUE" and i.name in ("Min", "Max")]
    fl[0].default_value, fl[1].default_value = schaal
    sch_uit = next(o for o in sch.outputs if o.type == "VALUE")
    inst = N.new("GeometryNodeInstanceOnPoints")
    Lk.new(punten, inst.inputs["Points"])
    Lk.new(info.outputs["Geometry"], inst.inputs["Instance"])
    Lk.new(rot_uit, inst.inputs["Rotation"])
    Lk.new(sch_uit, inst.inputs["Scale"])
    if hou_basis:
        j = N.new("GeometryNodeJoinGeometry")
        Lk.new(inst.outputs[0], j.inputs[0])
        Lk.new(gi.outputs[0], j.inputs[0])
        Lk.new(j.outputs[0], go.inputs[0])
    else:
        Lk.new(inst.outputs[0], go.inputs[0])
    mod = o.modifiers.new("verspreid", "NODES")
    mod.node_group = ng
    return o


ruis = bpy.data.textures.new("haagruis", "CLOUDS")
ruis.noise_scale = 0.12
ruis.noise_depth = 2


def haag(x0, x1, z0, z1, hoogte, dicht=2200):
    """Geschoren beukenhaag: onderverdeeld blok met golving en losse blaadjes erop."""
    if abs(x1 - x0) < 0.3 or abs(z1 - z0) < 0.3:
        return None
    o = blok("haag", x0, x1, 0.0, hoogte, z0, z1, M["haag"])
    sub = o.modifiers.new("sub", "SUBSURF")
    sub.subdivision_type = "SIMPLE"
    sub.levels = sub.render_levels = 4
    dp = o.modifiers.new("golf", "DISPLACE")
    dp.texture = ruis
    dp.texture_coords = "GLOBAL"
    dp.strength = 0.08
    dp.mid_level = 0.5
    sm = o.modifiers.new("zacht", "SMOOTH")
    sm.factor = 0.6
    sm.iterations = 4
    verspreid(o, BLAD, dicht, (0.8, 1.35))
    return o


def struik(x, z, hoogte, breed):
    """Een gesnoeide tuinstruik (buxus, hortensia), gebouwd zoals de haag: een afgeronde
    bol met blaadjes. Niet van Poly Haven: shrub_01 tot 04 zijn rijen kruidachtige plantjes
    en jonge boompjes in één model. Samengevoegd en opgeschaald tot struikhoogte lagen ze
    als dorre takjes tot meters buiten de border, op opritten en paden."""
    r = min(breed, hoogte * 1.3) / 2 * random.uniform(0.85, 1.0)
    o = blok("struik", x - r, x + r, -0.08, hoogte, z - r, z + r, M["haag"])
    sub = o.modifiers.new("sub", "SUBSURF")
    sub.levels = sub.render_levels = 3
    dp = o.modifiers.new("golf", "DISPLACE")
    dp.texture = ruis
    dp.texture_coords = "GLOBAL"
    dp.strength = 0.06
    dp.mid_level = 0.5
    verspreid(o, BLAD, 2000, (0.8, 1.35))
    return o


# ───────────────────────── tuinonderdelen ─────────────────────────

UIT = [(-T - 0.05, W + T + 0.05, -T - 0.05, F + 0.05)]  # geen gras onder de live woning

# Wat de camera ziet, in schermcoördinaten (zelfde assen als three.js).
_R = Vector((1, 0, -1)).normalized()
_O = Vector((-1, 2, -1)).normalized()
_DOEL = Vector((W / 2, 0, L / 2 + 3))
_HALF = (SCHAAL / 2, SCHAAL * RES[1] / RES[0] / 2)


def in_beeld(x0, x1, z0, z1, hoog=10.0, marge=2.0):
    """Valt een doos (three.js x/z, hoogte `hoog`) op het scherm? Wat er buiten valt,
    bouwen we niet: elke haag en elke boom kost opbouw- en rendertijd."""
    us, vs = [], []
    for x in (x0, x1):
        for z in (z0, z1):
            for y in (0.0, hoog):
                p = Vector((x, y, z)) - _DOEL
                us.append(p.dot(_R))
                vs.append(p.dot(_O))
    return max(us) > -_HALF[0] - marge and min(us) < _HALF[0] + marge and max(vs) > -_HALF[1] - marge and min(vs) < _HALF[1] + marge


def gazon(naam, x0, x1, z0, z1, uit):
    """Een gazonvlak met gaten waar verharding, huizen en borders liggen.

    Eerder werden de sprieten op die plekken achteraf weggefilterd in geometry nodes:
    met honderd rechthoeken waren dat honderden vergelijkingen per spriet, voor
    miljoenen sprieten. Een raster op de randen van de rechthoeken doet het één keer."""
    rel = [r for r in uit if r[1] > x0 and r[0] < x1 and r[3] > z0 and r[2] < z1]
    xs = sorted({x0, x1, *(min(max(v, x0), x1) for r in rel for v in r[:2])})
    zs_ = sorted({z0, z1, *(min(max(v, z0), z1) for r in rel for v in r[2:])})
    verts, faces, idx = [], [], {}

    def vi(i, j):
        if (i, j) not in idx:
            idx[(i, j)] = len(verts)
            verts.append(V(xs[i], 0.0, zs_[j]))
        return idx[(i, j)]

    for j in range(len(zs_) - 1):
        cz = (zs_[j] + zs_[j + 1]) / 2
        rij_ = [r for r in rel if r[2] < cz < r[3]]
        for i in range(len(xs) - 1):
            cx = (xs[i] + xs[i + 1]) / 2
            if any(r[0] < cx < r[1] for r in rij_):
                continue
            if not in_beeld(xs[i], xs[i + 1], zs_[j], zs_[j + 1], 0.2):
                continue
            faces.append((vi(i, j), vi(i, j + 1), vi(i + 1, j + 1), vi(i + 1, j)))
    return mesh(naam, verts, faces, M["gras"])


def verhard(naam, x0, x1, z0, z1, mat, y=0.015):
    x0, x1 = sorted((x0, x1))
    z0, z1 = sorted((z0, z1))
    UIT.append((x0 - 0.03, x1 + 0.03, z0 - 0.03, z1 + 0.03))
    return vlak(naam, x0, z0, x1, z1, mat, y)


def scherm_x(x0, x1, z, hoogte=1.8):
    """Tuinschermen evenwijdig met x: houten planken tussen palen om de 1,8 m."""
    x0, x1 = sorted((x0, x1))
    blok("scherm", x0, x1, 0.05, hoogte, z - 0.02, z + 0.02, M["scherm"])
    n = max(1, round((x1 - x0) / 1.8))
    for k in range(n + 1):
        px = x0 + (x1 - x0) * k / n
        blok("schermpaal", px - 0.045, px + 0.045, 0, hoogte + 0.05, z - 0.045, z + 0.045, M["paaltje"])


def scherm_z(x, z0, z1, hoogte=1.8):
    z0, z1 = sorted((z0, z1))
    blok("scherm", x - 0.02, x + 0.02, 0.05, hoogte, z0, z1, M["scherm"])
    n = max(1, round((z1 - z0) / 1.8))
    for k in range(n + 1):
        pz = z0 + (z1 - z0) * k / n
        blok("schermpaal", x - 0.045, x + 0.045, 0, hoogte + 0.05, pz - 0.045, pz + 0.045, M["paaltje"])


def tuinhuis(x0, x1, z0, z1):
    """Houten tuinhuis met plat EPDM-dak."""
    UIT.append((x0 - 0.2, x1 + 0.2, z0 - 0.2, z1 + 0.2))
    blok("tuinhuis", x0, x1, 0, 2.2, z0, z1, M["tuinhuis"])
    blok("tuinhuisdak", x0 - 0.15, x1 + 0.15, 2.2, 2.32, z0 - 0.15, z1 + 0.15, M["epdm"])
    blok("tuinhuisboord", x0 - 0.17, x1 + 0.17, 2.28, 2.36, z0 - 0.17, z1 + 0.17, M["boei"])


def border(x0, x1, z0, z1, n, hoog=(0.7, 1.4)):
    """Strook houtschors met struiken, zoals langs elke tuinafsluiting. Een struik is
    hooguit zo breed als zijn plek in de strook, plus wat hij over de rand mag hangen."""
    verhard("border", x0, x1, z0, z1, M["schors"], 0.02)
    langs_z = abs(x1 - x0) < abs(z1 - z0)
    diep, lang = sorted((abs(x1 - x0), abs(z1 - z0)))
    breed = min(diep + 0.4, lang / n + 0.3)
    for k in range(n):
        t = (k + 0.5) / n
        struik(x0 + (x1 - x0) * (0.5 if langs_z else t), z0 + (z1 - z0) * (t if langs_z else 0.5), random.uniform(*hoog), breed)


# ───────────────────────── auto's ─────────────────────────

def lak(naam, hexkleur, metaal):
    """Autolak: een basislaag met metaalschilfers onder een blanke laklaag. De schilfers
    zijn fijne ruis op de normaal van de basislaag; de laklaag erboven blijft spiegelglad."""
    m = bpy.data.materials.new(naam)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*srgb(hexkleur), 1)
    b.inputs["Metallic"].default_value = metaal
    b.inputs["Roughness"].default_value = 0.32
    b.inputs["Coat Weight"].default_value = 1.0
    b.inputs["Coat Roughness"].default_value = 0.03
    b.inputs["Coat IOR"].default_value = 1.5
    nz = nt.nodes.new("ShaderNodeTexNoise")
    nz.inputs["Scale"].default_value = 2200.0
    nz.inputs["Detail"].default_value = 1.0
    bp = nt.nodes.new("ShaderNodeBump")
    bp.inputs["Strength"].default_value = 0.12 * metaal
    bp.inputs["Distance"].default_value = 0.001
    nt.links.new(nz.outputs["Fac"], bp.inputs["Height"])
    nt.links.new(bp.outputs["Normal"], b.inputs["Normal"])
    return m


def autoglas():
    """Getint autoglas: donker, spiegelt de lucht, en de interieurschaduw erachter."""
    m = bpy.data.materials.new("ruit")
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*srgb("#0d1317"), 1)
    b.inputs["Roughness"].default_value = 0.02
    b.inputs["Specular IOR Level"].default_value = 0.7
    b.inputs["Coat Weight"].default_value = 1.0
    b.inputs["Coat Roughness"].default_value = 0.0
    return m


def lichtmat(naam, hexkleur, gloed):
    """Lamp achter helder glas: spiegelend, met een zwakke eigen gloed."""
    m = kleur(naam, srgb(hexkleur), 0.05)
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Coat Weight"].default_value = 1.0
    b.inputs["Emission Color"].default_value = (*srgb(hexkleur), 1)
    b.inputs["Emission Strength"].default_value = gloed
    return m


M.update({
    "band": kleur("band", srgb("#161718"), 0.9),
    "flank": kleur("flank", srgb("#232426"), 0.75),
    "velg": kleur("velg", srgb("#c4c7ca"), 0.18, 1.0),
    "velgdonker": kleur("velgdonker", srgb("#3a3d40"), 0.4, 0.8),
    "kunststof": kleur("kunststof", srgb("#1e1f21"), 0.55),
    "chroom": kleur("chroom", srgb("#d9dcdf"), 0.08, 1.0),
    "ruit": autoglas(),
    "koplamp": lichtmat("koplamp", "#f4f6f8", 0.4),
    "achterlicht": lichtmat("achterlicht", "#a5100f", 0.6),
    "plaat": kleur("plaat", srgb("#f3f3ef"), 0.45),
    "plaattekst": kleur("plaattekst", srgb("#9b1b1b"), 0.5),
})
# Grijs metallic, zwart, parelwit en donkerblauw metallic: de kleuren van de meeste
# Vlaamse opritten. Zwart en wit met weinig metaal, zoals uni- en parelmoerlak.
LAKKEN = [lak("lak-grijs", "#6f757b", 0.75), lak("lak-zwart", "#0b0c0e", 0.35),
          lak("lak-wit", "#e6e7e6", 0.12), lak("lak-blauw", "#182540", 0.7)]

# Echte maten (m): lengte, breedte, gordellijn, dak, bodemvrijheid, wielstraal,
# overbouw achter en voor, en de ruiten als (achter, voor) vanaf de achterkant:
# onderaan op de gordellijn en bovenaan onder het dak.
MODELLEN = {
    "hatchback": dict(L=4.10, B=1.78, gordel=0.93, dak=1.46, vrij=0.15, r=0.31, oa=0.62, ov=0.82, onder=(0.22, 2.86), boven=(0.46, 2.06), rails=False),
    "break": dict(L=4.65, B=1.80, gordel=0.94, dak=1.47, vrij=0.15, r=0.32, oa=0.92, ov=0.88, onder=(0.18, 3.16), boven=(0.30, 2.36), rails=True),
    "suv": dict(L=4.45, B=1.86, gordel=1.06, dak=1.68, vrij=0.21, r=0.36, oa=0.78, ov=0.86, onder=(0.24, 3.02), boven=(0.40, 2.32), rails=True),
}


def auto(cx, zn, d, model, lakmat):
    """Een personenwagen in de lengte van z, met de neus op z = `zn` en in richting
    `d` (+1/-1 langs z). Een carrosserie met zijprofiel en wielkasten, een cabine van
    getint glas met zwarte stijlen, wielen met band, flank en spaakvelg, deurnaden en
    handgrepen, lichten, nummerplaten en (break, SUV) dakrails."""
    m = MODELLEN[model]
    L, B, r = m["L"], m["B"], m["r"]
    za = zn - d * L  # achterkant

    def z(u):
        return za + d * u

    def stuk(naam, u0, u1, y0, y1, b, mat, bevel=0.0):
        return blok(naam, cx - b / 2, cx + b / 2, y0, y1, z(u0), z(u1), mat, bevel=bevel)

    def profiel(naam, pts, b, mat, bevel):
        """Een zijprofiel (u, y) over de breedte `b` getrokken, met afgeronde randen."""
        n = len(pts)
        vs = [V(cx + k * b / 2, y, z(u)) for k in (-1, 1) for u, y in pts]
        vlakken = [tuple(range(n)), tuple(range(2 * n - 1, n - 1, -1))]
        vlakken += [(i, (i + 1) % n, n + (i + 1) % n, n + i) for i in range(n)]
        if d > 0:
            vlakken = [tuple(reversed(f)) for f in vlakken]
        o = mesh(naam, vs, vlakken, mat)
        bv = o.modifiers.new("bevel", "BEVEL")
        bv.width = bevel
        bv.segments = 5
        bv.limit_method = "NONE"
        o.data.shade_smooth()
        return o

    ua, uv = m["oa"], L - m["ov"]  # assen
    wk = r + 0.06  # halve breedte van een wielkast
    yk = 2 * r * 0.82  # bovenkant van de wielkasten
    g = m["gordel"]
    (o0, o1), (b0, b1) = m["onder"], m["boven"]
    # Bovenbak: achteraan op gordelhoogte, de motorkap loopt vanaf de voorruit af naar
    # een lagere, afgeronde neus. Daaronder bumpers en dorpel tussen de wielkasten.
    profiel("auto-bak", [(0, yk), (L, yk), (L, g - 0.26), (L - 0.12, g - 0.13), (o1 + 0.1, g - 0.01), (o1, g), (0.05, g), (0, g - 0.04)], B, lakmat, 0.11)
    stuk("auto-bumper", 0, ua - wk, m["vrij"] + 0.06, yk + 0.05, B - 0.02, lakmat, 0.07)
    stuk("auto-bumper", uv + wk, L, m["vrij"] + 0.06, yk + 0.05, B - 0.02, lakmat, 0.07)
    stuk("auto-dorpel", ua + wk, uv - wk, m["vrij"] + 0.06, yk + 0.05, B - 0.04, lakmat, 0.05)
    # Zwarte kunststof: onderrand, wielkastranden, dorpelstrip en onderbumpers.
    stuk("auto-onder", 0.1, L - 0.1, m["vrij"], m["vrij"] + 0.08, B - 0.3, M["kunststof"])
    stuk("auto-strip", ua + wk, uv - wk, m["vrij"] + 0.02, m["vrij"] + 0.12, B + 0.01, M["kunststof"], 0.03)
    stuk("auto-spoiler", -0.01, ua - wk, m["vrij"], m["vrij"] + 0.12, B - 0.04, M["kunststof"], 0.03)
    stuk("auto-spoiler", uv + wk, L + 0.01, m["vrij"], m["vrij"] + 0.12, B - 0.04, M["kunststof"], 0.03)
    for u in (ua, uv):  # wielkastrand: een dunne zwarte boog boven elk wiel
        for a in range(5):
            h0, h1 = math.radians(20 + a * 28), math.radians(20 + (a + 1) * 28)
            p0 = (u + math.cos(h0) * (r + 0.07), r + math.sin(h0) * (r + 0.07))
            p1 = (u + math.cos(h1) * (r + 0.07), r + math.sin(h1) * (r + 0.07))
            for k in (-1, 1):
                xw = cx + k * (B / 2 + 0.004)
                cilinder("auto-kastrand", (xw, p0[1], z(p0[0])), (xw, p1[1], z(p1[0])), 0.025, M["kunststof"], 8)

    # Cabine: ruiten als schuine afgeknotte piramide met afgeronde randen, het dak erop
    # in de lakkleur, zwarte stijlen ertussen.
    yg, yd = g - 0.02, m["dak"] - 0.06
    bo, bb = B / 2 - 0.08, B / 2 - 0.2

    def afgeknot(naam, onder, boven, ho, hb, mat, bevel=0.0):
        """Een doos die van onder (u-bereik, halve breedte ho) naar boven versmalt."""
        vs = [V(cx - ho, yg, z(onder[0])), V(cx + ho, yg, z(onder[0])), V(cx + ho, yg, z(onder[1])), V(cx - ho, yg, z(onder[1])),
              V(cx - hb, yd, z(boven[0])), V(cx + hb, yd, z(boven[0])), V(cx + hb, yd, z(boven[1])), V(cx - hb, yd, z(boven[1]))]
        # Zelfde volgorde als blok(); gespiegeld langs z keren de vlakken om.
        vlakken = BLOK_VLAKKEN if d < 0 else [tuple(reversed(f)) for f in BLOK_VLAKKEN]
        o = mesh(naam, vs, vlakken, mat)
        if bevel:
            bv = o.modifiers.new("bevel", "BEVEL")
            bv.width = bevel
            bv.segments = 4
            bv.limit_method = "NONE"
            o.data.shade_smooth()
        return o

    afgeknot("auto-ruit", (o0, o1), (b0, b1), bo, bb, M["ruit"], 0.06)
    stuk("auto-dak", b0 - 0.04, b1 + 0.04, yd - 0.02, m["dak"], 2 * bb + 0.06, lakmat, 0.06)
    # B- en C-stijl in zwart glanzend, net buiten de ruit; een chroomlijst onder de ruiten.
    s_ = 0.004
    um = (o0 + o1) / 2 + 0.12
    afgeknot("auto-stijl", (um - 0.06, um + 0.06), (um - 0.06, um + 0.06), bo + s_, bb + s_, M["kunststof"])
    uc = o0 + 0.55
    afgeknot("auto-stijl", (uc - 0.1, uc + 0.12), (b0 + 0.18, b0 + 0.36), bo + s_, bb + s_, lakmat)
    for k in (-1, 1):
        xl = cx + k * (bo + 0.01)
        blok("auto-lijst", xl - 0.01, xl + 0.01, yg + 0.01, yg + 0.035, z(o0 + 0.1), z(o1 - 0.05), M["chroom"])
    # Deurnaden en handgrepen op beide flanken.
    for k in (-1, 1):
        xf = cx + k * (B / 2 + 0.002)
        for un in (um - 0.02, o1 - 0.02, uc - 0.12):
            blok("auto-naad", xf - 0.004, xf + 0.004, yk - 0.06, g - 0.03, z(un - 0.008), z(un + 0.008), M["kunststof"])
        for uh in (um - 0.35, o1 - 0.38):
            blok("auto-greep", xf - 0.012, xf + 0.012, g - 0.17, g - 0.13, z(uh - 0.13), z(uh + 0.01), M["chroom"])
    if m["rails"]:
        for k in (-1, 1):
            xr = cx + k * (bb - 0.06)
            cilinder("auto-rail", (xr, m["dak"] + 0.05, z(b0 + 0.08)), (xr, m["dak"] + 0.05, z(b1 - 0.1)), 0.022, M["kunststof"], 8)
            for ur in (b0 + 0.1, b1 - 0.12):
                blok("auto-railvoet", xr - 0.025, xr + 0.025, m["dak"] - 0.01, m["dak"] + 0.06, z(ur - 0.05), z(ur + 0.05), M["kunststof"])
    # Wielen: band met een iets lichtere flank, een spaakvelg met donkere naaf erachter.
    for u in (ua, uv):
        for k in (-1, 1):
            xb = cx + k * (B / 2 - 0.14)
            cilinder("auto-band", (xb - 0.115, r, z(u)), (xb + 0.115, r, z(u)), r, M["band"], 32)
            xf = xb + k * 0.105
            cilinder("auto-flank", (xf - 0.012, r, z(u)), (xf + 0.012, r, z(u)), r * 0.92, M["flank"], 32)
            xv = xb + k * 0.115
            cilinder("auto-velgbak", (xv - 0.012, r, z(u)), (xv + 0.012, r, z(u)), r * 0.66, M["velgdonker"], 28)
            cilinder("auto-velgrand", (xv - 0.016, r, z(u)), (xv + 0.016, r, z(u)), r * 0.68, M["velg"], 28)
            cilinder("auto-naaf", (xv, r, z(u)), (xv + k * 0.03, r, z(u)), r * 0.16, M["velg"], 16)
            for a in range(5):
                h = a * math.tau / 5 + 0.3
                cilinder("auto-spaak", (xv + k * 0.02, r, z(u)), (xv + k * 0.02, r + math.sin(h) * r * 0.62, z(u + math.cos(h) * r * 0.62)), 0.03, M["velg"], 8)
    # Spiegels aan de voet van de voorruit: kap in de lakkleur, voet in zwart.
    for k in (-1, 1):
        xs = cx + k * (B / 2 + 0.07)
        blok("auto-spiegel", xs - 0.08, xs + 0.08, yg + 0.04, yg + 0.17, z(o1 - 0.14), z(o1 - 0.03), lakmat, bevel=0.03)
        blok("auto-spiegelvoet", cx + k * (B / 2 - 0.02) - 0.03, cx + k * (B / 2 - 0.02) + 0.03, yg - 0.01, yg + 0.06, z(o1 - 0.12), z(o1 - 0.04), M["kunststof"])
    # Koplampen (smal, naar de flank toe getrokken), grille, achterlichten en platen.
    for k in (-1, 1):
        xl = cx + k * (B / 2 - 0.27)
        blok("auto-koplamp", xl - 0.22, xl + 0.22, g - 0.42, g - 0.33, z(L - 0.06), z(L + 0.008), M["koplamp"], bevel=0.02)
        blok("auto-koplamphuis", xl - 0.24, xl + 0.24, g - 0.44, g - 0.31, z(L - 0.07), z(L + 0.002), M["kunststof"], bevel=0.02)
        blok("auto-achterlicht", xl - 0.2, xl + 0.2, g - 0.17, g - 0.05, z(-0.012), z(0.06), M["achterlicht"], bevel=0.02)
    stuk("auto-grille", L - 0.05, L + 0.008, g - 0.58, g - 0.36, 0.74, M["kunststof"], 0.02)
    stuk("auto-grillelijst", L + 0.004, L + 0.012, g - 0.38, g - 0.36, 0.7, M["chroom"])
    stuk("auto-plaat", L, L + 0.02, g - 0.72, g - 0.61, 0.52, M["plaat"])
    stuk("auto-plaat", -0.02, 0, g - 0.42, g - 0.31, 0.52, M["plaat"])
    stuk("auto-plaattekst", L + 0.02, L + 0.024, g - 0.69, g - 0.64, 0.38, M["plaattekst"])
    stuk("auto-plaattekst", -0.024, -0.02, g - 0.39, g - 0.34, 0.38, M["plaattekst"])


AUTOS = {"n": 0}


def parkeer(cx, s_neus, kant):
    """Zet op ongeveer twee op drie opritten een auto, met de neus naar het huis op
    `s_neus` (vanaf de rand van het voetpad). Kleur en model wisselen af."""
    n = AUTOS["n"]
    AUTOS["n"] += 1
    if n % 3 == 2:
        return
    model = ("hatchback", "break", "suv", "break", "hatchback")[n % 5]
    auto(cx, zs(kant, s_neus), -kant, model, LAKKEN[(n * 3 + n // 4) % len(LAKKEN)])


def kavel(i, kant, x0, x1, hx0, hx1, oprit=None, eigen=False, vrij_l=False, vrij_r=False,
          deur_rechts=False, links_af=False):
    """Eén perceel: huis (behalve de live woning), voortuin, oprit en achtertuin.
    x0..x1 is het perceel, hx0..hx1 het huis buitenwerks. `links_af` = bouw ook de
    linker perceelgrens (alleen het eerste perceel van een rij)."""
    if not in_beeld(x0, x1, *zr(kant, 0, EIND), 12.0):
        return
    if eigen:
        dc = DEUR
    else:
        dc = huis(f"huis{kant}-{i}", hx0, hx1, kant, vrij_l, vrij_r, STENEN[i % len(STENEN)], deur_rechts, i % 3 != 1, i)
        UIT.append((hx0 - 0.1, hx1 + 0.1, *zr(kant, TUIN - 0.45, TUIN + D + 0.1)))
    gevel_v = TUIN
    gevel_a = TUIN + D

    # Voortuin: pad naar de voordeur, oprit, lage haag langs het voetpad.
    verhard("voorpad", dc - 0.6, dc + 0.6, *zr(kant, 0, gevel_v - 0.35), M["pad"])
    gaten = [(dc - 0.6, dc + 0.6)]
    if oprit:
        zijstrook = oprit[0] >= hx1 - 0.05 or oprit[1] <= hx0 + 0.05
        verhard("oprit", oprit[0], oprit[1], *zr(kant, 0, (gevel_a - 1.0) if zijstrook else (gevel_v - 0.05)), M["oprit"])
        gaten.append(oprit)
        # Een auto: op de zijstrook naast de voorgevel, of op de parkeerplek in de
        # voortuin van een rijwoning. Niet voor de gevel van de live woning, waar hij
        # deur en leefruimteraam zou bedekken.
        if in_beeld(oprit[0], oprit[1], *zr(kant, 0, gevel_v), 2.0) and (zijstrook or not eigen):
            parkeer((oprit[0] + oprit[1]) / 2, gevel_v + 1.8 if zijstrook else gevel_v - 0.35, kant)
    a = x0 + 0.05
    for g0, g1 in sorted(gaten):
        haag(a, g0 - 0.05, *zr(kant, 0.1, 0.6), 0.85)
        a = g1 + 0.05
    haag(a, x1 - 0.05, *zr(kant, 0.1, 0.6), 0.85)
    # Plantvak onder het voorraam.
    rv0, rv1 = (hx0 + 0.6, dc - 1.2) if deur_rechts else (dc + 1.2, hx1 - 0.6)  # naast het zijlicht
    if oprit and oprit[0] < rv1 and oprit[1] > rv0:
        rv1 = rv0  # de oprit ligt voor het raam
    if rv1 - rv0 > 1.2:
        # Laag gehouden: het leefruimteraam heeft een lage borstwering.
        border(rv0, rv1, *zr(kant, gevel_v - 1.1, gevel_v - 0.45), max(2, round((rv1 - rv0) / 1.3)), (0.5, 0.8))
    # Een kleine sierboom in de voortuin, aan de kant weg van pad en oprit. Niet bij elk
    # huis: een straat waar elke voortuin hetzelfde staat, leest als een maquette.
    if not eigen and i % 3 != 2:
        vrij0, vrij1 = (x0 + 0.8, dc - 1.2) if deur_rechts else (dc + 1.2, x1 - 0.8)
        if oprit:
            vrij0, vrij1 = (max(vrij0, oprit[1] + 0.8), vrij1) if oprit[0] < dc else (vrij0, min(vrij1, oprit[0] - 0.8))
        if vrij1 - vrij0 > 1.0:
            plaats(BOMEN[3], random.uniform(vrij0, vrij1), zs(kant, random.uniform(1.6, 2.4)), random.uniform(3.2, 4.4))
    # Lage haag op de grens tussen twee voortuinen, als daar geen oprit ligt.
    if not oprit or oprit[1] < x1 - 0.5:
        haag(x1 - 0.25, x1 + 0.25, *zr(kant, 0.65, gevel_v - (0.0 if hx1 < x1 - 0.5 else 0.45)), 0.85, 1600)

    # Achtertuin.
    verhard("terras", hx0 + 0.05, hx1 - 0.05, *zr(kant, gevel_a, gevel_a + 3.2), M["terras"])
    if i % 3 == 0 and not eigen:
        plaats(TUINSET, (hx0 + hx1) / 2, zs(kant, gevel_a + 1.7), 0.95, hoek=random.random() * 0.6)
    s_poort = gevel_a - 1.0
    # De zijstroken naast het huis sluiten met een poort ter hoogte van de achtergevel.
    if hx0 - x0 > 0.5:
        scherm_x(x0, hx0, zs(kant, s_poort))
    if x1 - hx1 > 0.5:
        scherm_x(hx1, x1, zs(kant, s_poort))
    # Perceelgrenzen: tuinschermen bij het terras, daarna een hoge haag tot achteraan.
    grenzen = [(x1, x1 - hx1 > 0.5)] + ([(x0, hx0 - x0 > 0.5)] if links_af else [])
    for gx, strook in grenzen:
        s0 = s_poort if strook else gevel_a
        scherm_z(gx, *zr(kant, s0, gevel_a + 5.0))
        haag(gx - 0.3, gx + 0.3, *zr(kant, gevel_a + 5.0, EIND - 0.7), 1.7, 1300)
    haag(x0, x1, *zr(kant, EIND - 0.7, EIND), 1.9, 1300)
    breed = x1 - x0
    # Border langs de linkergrens, tuinhuis achteraan rechts, een boom.
    border(x0 + 0.35, x0 + 1.25, *zr(kant, gevel_a + 5.4, EIND - 1.2), max(2, round((EIND - gevel_a - 6.6) / 2.4)))
    if i % 2 == 0 and breed > 5.2:
        tuinhuis(x1 - 3.0, x1 - 0.6, *zr(kant, EIND - 4.0, EIND - 1.0))
    if breed > 7 or i % 2 == 1:
        boom(x0 + breed * random.uniform(0.35, 0.6), zs(kant, EIND - random.uniform(3.5, 6.0)), random.uniform(6.0, 9.0))


# ───────────────────────── straat ─────────────────────────

def straat():
    vlak("gras", X0, Z0, X1, Z1, M["gras"], 0.0)
    for naam, za, zb in (("voetpad", PAD0, BOORD0), ("voetpad2", BOORD1, PAD1)):
        blok(naam, X0, X1, 0.0, 0.12, za, zb, M["voetpad"])
    # Een centimeter boven het grasvlak: op exact dezelfde hoogte weet Cycles niet welk
    # vlak het raakt, en grote stukken rijweg renderden pikzwart.
    vlak("fietspad", X0, FIETS0, X1, WEG0, M["fietspad"], 0.01)
    vlak("fietspad2", X0, WEG1, X1, FIETS1, M["fietspad"], 0.01)
    vlak("weg", X0, WEG0, X1, WEG1, M["asfalt"], 0.01)
    blok("boord", X0, X1, 0.0, 0.14, BOORD0, FIETS0, M["boord"], bevel=0.02)
    blok("boord2", X0, X1, 0.0, 0.14, FIETS1, BOORD1, M["boord"], bevel=0.02)
    x = X0
    while x < X1:
        vlak("streep", x, WEG0 - 0.05, x + 1.0, WEG0 + 0.05, M["streep"], 0.016)
        vlak("streep", x, WEG1 - 0.05, x + 1.0, WEG1 + 0.05, M["streep"], 0.016)
        x += 2.0


def rij(kant, start, richting, eind, breedtes, soort):
    """Percelen langs één kant van de straat, vanaf x = start in `richting` (+1/-1)."""
    x = start
    i = 0
    while (x < eind) if richting > 0 else (x > eind):
        bw = breedtes[i % len(breedtes)] + 2 * T
        if soort == "rij":
            lo, hi = (x, x + bw) if richting > 0 else (x - bw, x)
            dr = i % 2 == 1
            op = (lo + 0.25, lo + 0.25 + OPRIT_R) if dr else (hi - 0.25 - OPRIT_R, hi - 0.25)
            kavel(i, kant, lo, hi, lo, hi, oprit=op, deur_rechts=dr)
            x = hi if richting > 0 else lo
        elif soort == "half":
            # Twee huizen onder één kap, elk met een oprit aan de vrije kant.
            bw2 = breedtes[(i + 1) % len(breedtes)] + 2 * T
            lo = x if richting > 0 else x - (ZIJ + bw + bw2 + ZIJ)
            m = lo + ZIJ + bw
            hi = m + bw2 + ZIJ
            kavel(i, kant, lo, m, lo + ZIJ, m, oprit=(lo + 0.3, lo + 0.3 + OPRIT_B), vrij_l=True)
            kavel(i + 1, kant, m, hi, m, m + bw2, oprit=(hi - 0.3 - OPRIT_B, hi - 0.3), vrij_r=True, deur_rechts=True)
            x = hi if richting > 0 else lo
            i += 1
        else:  # open bebouwing
            lo = x if richting > 0 else x - (3.0 + bw + ZIJ)
            hi = lo + 3.0 + bw + ZIJ
            kavel(i, kant, lo, hi, lo + 3.0, lo + 3.0 + bw, oprit=(hi - 0.3 - OPRIT_B, hi - 0.3), vrij_l=True, vrij_r=True, deur_rechts=i % 2 == 1)
            x = hi if richting > 0 else lo
        i += 1


def omgeving():
    straat()
    var = [W, W + 0.5, W - 0.5, W + 1.0, W]
    soort = {2: "rij", 1: "half", 0: "open"}[BUREN]
    reik = 52
    if BUREN == 2:
        # De voordeur van de live woning zit links (DEUR), dus de parkeerplek rechts.
        kavel(0, 1, -T, W + T, -T, W + T, oprit=(W + T - 0.25 - OPRIT_R, W + T - 0.25), eigen=True)
        rij(1, W + T, 1, W + reik, var[1:], "rij")
        rij(1, -T, -1, -reik, var[2:] + var[:2], "rij")
    elif BUREN == 1:
        # De live woning is de rechterhelft van een paar; haar partner staat links.
        lot1 = W + T + ZIJ
        kavel(0, 1, -T, lot1, -T, W + T, oprit=(lot1 - 0.3 - OPRIT_B, lot1 - 0.3), eigen=True, vrij_r=True)
        bwp = W + 2 * T
        lo = -T - bwp - ZIJ
        kavel(1, 1, lo, -T, lo + ZIJ, -T, oprit=(lo + 0.3, lo + 0.3 + OPRIT_B), vrij_l=True)
        rij(1, lot1, 1, W + reik, var[1:], "half")
        rij(1, lo, -1, -reik, var[2:] + var[:2], "half")
    else:
        lo, hi = -T - 3.0, W + T + ZIJ
        kavel(0, 1, lo, hi, -T, W + T, oprit=(hi - 0.3 - OPRIT_B, hi - 0.3), eigen=True, vrij_l=True, vrij_r=True)
        rij(1, hi, 1, W + reik, var[1:], "open")
        rij(1, lo, -1, -reik, var[2:] + var[:2], "open")
    # De overkant: dezelfde verkaveling, iets verschoven zodat de rijen niet spiegelen.
    rij(-1, -reik - 4.0, 1, W + reik + 8, var[3:] + var[:3], soort)

    # Bomenrij op de perceelgrens achteraan, aan beide kanten.
    for kant in (1, -1):
        x = -reik
        while x < W + reik:
            bx_, bz_ = x + random.uniform(-1.5, 1.5), zs(kant, EIND + 3.5 + random.uniform(-1, 1))
            if in_beeld(bx_ - 4, bx_ + 4, bz_ - 4, bz_ + 4, 14):
                boom(bx_, bz_, random.uniform(10, 14))
            x += random.uniform(7, 10)

    # Lantaarns op het voetpad, en de brievenbus van de live woning.
    for lx in (W + T + ZIJ + 0.6, -13.0, W + 22.0):
        lz = BOORD0 - 0.3
        cilinder("lantaarn", (lx, 0.12, lz), (lx, 6.2, lz), 0.08, M["paal"], 16)
        blok("lantaarn-arm", lx - 0.04, lx + 0.04, 6.05, 6.13, lz, lz + 1.0, M["paal"])
        blok("lantaarn-kop", lx - 0.16, lx + 0.16, 5.95, 6.12, lz + 0.8, lz + 1.4, M["paal"], bevel=0.04)
        blok("lantaarn-glas", lx - 0.13, lx + 0.13, 5.93, 5.96, lz + 0.85, lz + 1.35, M["lamp"])
    bx, bz = DEUR + 1.1, PAD0 - 0.9
    blok("bus-paal", bx - 0.04, bx + 0.04, 0, 1.0, bz - 0.04, bz + 0.04, M["bus"])
    blok("bus", bx - 0.2, bx + 0.2, 0.95, 1.4, bz - 0.17, bz + 0.17, M["bus"], bevel=0.03)

    # Gazon met echte sprieten in het stuk dat in beeld kan komen, weiland erachter.
    gz = gazon("gazon", -reik, W + reik, zs(1, EIND), PAD0 - 0.02, UIT)
    verspreid(gz, GAZON, 1300, (0.7, 1.35), hou_basis=False, rechtop=True)
    gz2 = gazon("gazon-over", -reik, W + reik, PAD1 + 0.02, zs(-1, EIND), UIT)
    verspreid(gz2, GAZON, 1300, (0.7, 1.35), hou_basis=False, rechtop=True)
    for kant in (1, -1):
        wd = gazon("weide", -reik, W + reik, *zr(kant, EIND, EIND + 16), [])
        verspreid(wd, WEIDE, 260, (0.7, 1.4), hou_basis=False, rechtop=True)


omgeving()


# ───────────────────────── licht en camera ─────────────────────────

w = bpy.data.worlds.new("lucht")
sc.world = w
w.use_nodes = True
bg = w.node_tree.nodes["Background"]
bg.inputs["Color"].default_value = (*srgb("#b7cbe2"), 1)
bg.inputs["Strength"].default_value = 1.05
# In spiegelingen (autolak, ruiten) een echte lucht: lichte horizon, blauwer zenit en
# een donkere grond eronder. Een effen lucht gaf vlakke, plastieken auto's. Alleen voor
# glossy-stralen, zodat de belichting van de scène dezelfde blijft.
wn, wl = w.node_tree.nodes, w.node_tree.links
tc = wn.new("ShaderNodeTexCoord")
sep = wn.new("ShaderNodeSeparateXYZ")
wl.new(tc.outputs["Generated"], sep.inputs[0])
ramp = wn.new("ShaderNodeValToRGB")
ramp.color_ramp.interpolation = "EASE"
els = ramp.color_ramp.elements
els[0].position, els[0].color = 0.44, (*srgb("#3d4238"), 1)
els[1].position, els[1].color = 1.0, (*srgb("#5f8ac0"), 1)
for pos, kl in ((0.495, "#7d8577"), (0.505, "#eef2f4"), (0.6, "#c7d8ea")):
    e = els.new(pos)
    e.color = (*srgb(kl), 1)
mapr = wn.new("ShaderNodeMapRange")
mapr.inputs["From Min"].default_value = -1.0
wl.new(sep.outputs["Z"], mapr.inputs["Value"])
wl.new(mapr.outputs["Result"], ramp.inputs["Fac"])
lp = wn.new("ShaderNodeLightPath")
mix = wn.new("ShaderNodeMix")
mix.data_type = "RGBA"
mix.inputs[6].default_value = (*srgb("#b7cbe2"), 1)
wl.new(ramp.outputs["Color"], mix.inputs[7])
wl.new(lp.outputs["Is Glossy Ray"], mix.inputs["Factor"])
wl.new(mix.outputs[2], bg.inputs["Color"])

# Zelfde zon als IsoHouse3D: rechtsvoor en hoog, richting (11, 24, 6) in three.js.
zon = bpy.data.lights.new("zon", "SUN")
zon.energy = 4.6
zon.angle = math.radians(2.5)
zon.color = srgb("#fff3e2")
zo = bpy.data.objects.new("zon", zon)
sc.collection.objects.link(zo)
zo.rotation_euler = V(11, 24, 6).to_track_quat("Z", "Y").to_euler()

KIJK = V(1, 1, 1).normalized()
RECHTS = V(1, 0, -1).normalized()
OP = V(-1, 2, -1).normalized()
DOEL = V(W / 2, 0, L / 2 + 3)
cam = bpy.data.cameras.new("cam")
cam.type = "ORTHO"
cam.ortho_scale = SCHAAL
cam.clip_end = 300
co = bpy.data.objects.new("cam", cam)
sc.collection.objects.link(co)
co.location = DOEL + KIJK * 80
co.rotation_euler = (-KIJK).to_track_quat("-Z", "Y").to_euler()
sc.camera = co


def sorteer_voor():
    """Zet in de collectie 'voor' wat de live woning kan overlappen.

    De camera kijkt van +x, +y en +z. Een object dat helemaal rechts van de woning
    (x > w + T) of vóór haar voorgevel (z > F) staat, kan nooit achter haar zitten:
    elke kijkstraal naar de camera blijft aan die kant van het gevelvlak. Staat zo'n
    object op het scherm over de woning, dan hoort het in de voorlaag. Wat plat op
    de grond ligt (oprit, gazon) kan de woning niet bedekken en blijft achter, anders
    zou de voorlaag de live schaduw van de woning op de oprit overschilderen."""
    hoog = 4 * FH + 4.2 + 1.2  # hoogste live woning: vier bouwlagen plus nok en schouw
    hoeken = [V(x, y, z) for x in (-T, W + T) for y in (0, hoog) for z in (-T, F)]

    def scherm(pts):
        us = [p.dot(RECHTS) for p in pts]
        vs = [p.dot(OP) for p in pts]
        return min(us), max(us), min(vs), max(vs)

    hu0, hu1, hv0, hv1 = scherm(hoeken)
    dg = bpy.context.evaluated_depsgraph_get()
    n = 0
    for o in list(col_achter.objects):
        if o.type != "MESH" or o.hide_render:
            continue
        ev = o.evaluated_get(dg)
        pts = [ev.matrix_world @ Vector(c) for c in ev.bound_box]
        xs = [p.x for p in pts]
        zs_ = [-p.y for p in pts]
        ys = [p.z for p in pts]
        if max(ys) < 0.3:
            continue
        # Helemaal links van de woning (x <= -T) kan nooit vóór haar staan: de camera kijkt
        # van +x, dus elke kijkstraal vanaf zo'n object gaat de woning in of erlangs, nooit
        # ervoor. De gevel van de buur aan de gemene muur ligt precies in het vlak van de
        # voorgevel (z = F) en kwam door de test hieronder in de voorlaag; daar schilderde
        # hij een strook baksteen over de oversteek van het live dak.
        if max(xs) < -T + 0.01:
            continue
        # Met marge: een buur die precies tegen de zijgevel staat begint op x = W + T. Met
        # een strikte vergelijking viel zijn dak in de achterlaag en zijn puntgevel in de
        # voorlaag, en stak er een driehoek baksteen door het dak van de woning.
        if not (min(xs) > W + T - 0.05 or min(zs_) > F - 0.05):
            continue
        u0, u1, v0, v1 = scherm(pts)
        if u1 < hu0 or u0 > hu1 or v1 < hv0 or v0 > hv1:
            continue
        link(o, voor=True)
        n += 1
    print("voor:", n, "objecten")


sorteer_voor()

os.makedirs(OUT, exist_ok=True)
if os.environ.get("NORENDER"):
    print("objecten:", len(bpy.data.objects), "voor:", sorted({o.name.split(".")[0] for o in col_voor.objects}))
    raise SystemExit

# Laag 1: alles.
sc.render.filepath = f"{OUT}/{NAAM}-achter.png"
bpy.ops.render.render(write_still=True)

# Laag 2: enkel wat vóór de woning staat; de rest is holdout (doorzichtig, maar
# blijft schaduw werpen en licht weerkaatsen).
# Holdout op de collectie: per object (is_holdout) pakte Blender 5 enkel het eerste vlak.
bpy.context.view_layer.layer_collection.children["achter"].holdout = True
sc.render.filepath = f"{OUT}/{NAAM}-voor.png"
bpy.ops.render.render(write_still=True)
print("KLAAR", NAAM)
