# De meubel- en afwerkingskit voor de 3D-woning van de simulators: elk meubel als een
# los object in één GLB, met een manifest erbij dat de code vertelt hoe groot het is,
# hoeveel vrije ruimte het vraagt en welke materialen een kamer mag herkleuren.
#
#   Blender -b -P scripts/simulator-3d/interieur.py -- <uitmap> [--render] [naam ...]
#
# Uitvoer: <uitmap>/interieur.glb, <uitmap>/interieur.json en met --render een
# controlebeeld per object plus <uitmap>/contactsheet.png. Daarna (zie README in de map):
#   npx @gltf-transform/cli quantize interieur.glb interieur.glb   # KHR_mesh_quantization
#   cp interieur.glb interieur.json public/simulator/3d/interieur/
#
# Herkomst: alles in dit bestand is zelf gemodelleerd uit primitieven (blokken,
# cilinders, eigen bladvormen). Er wordt geen enkel extern model, scan of textuur
# geladen; de kit is dus vrij van licenties van derden.
#
# Afspraken met de code (src/components/simulator/3d/interieur/):
#   - meter; oorsprong midden-achteraan op de vloer, de achterkant tegen de muur;
#   - de voorkant kijkt naar Blender -Y (= +Z in three.js, de n-as van inrichting.ts);
#   - naam = <kamer>_<object>_<variant>, bv. slaapkamer_bed_160;
#   - materialen dragen een vaste naam (stof, eik, front, ...): de app kiest per naam de
#     soort (mat, satijn, glans, metaal, licht) en herkleurt de namen uit `kleurbaar`;
#   - geen UV's en geen texturen in de GLB: effen kleuren, het reliëf zit in de vorm.
import bpy, bmesh, json, math, os, random, sys
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
OUT = argv[0] if argv else '/tmp/interieur'
RENDER = '--render' in argv
WANT = {a for a in argv[1:] if not a.startswith('--')}
os.makedirs(OUT, exist_ok=True)


# ───────────────────────────── materialen ─────────────────────────────

def srgb(h):
    h = h.lstrip('#')
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c)


# naam: (kleur, ruwheid, metaal, licht). De namen zijn de afspraak met de app.
MATERIALEN = {
    'stof':        ('#b9ad9c', 0.92, 0.0, None),   # zetel, hoofdbord
    'stof_accent': ('#7d8b6a', 0.9, 0.0, None),    # sierkussens
    'wol':         ('#c98f6b', 0.95, 0.0, None),   # plaid
    'linnen':      ('#ece6dc', 0.9, 0.0, None),    # dekbed
    'linnen_2':    ('#d9cbb8', 0.9, 0.0, None),    # hoofdkussens
    'kleed':       ('#cdbca3', 0.97, 0.0, None),   # vloerkleed
    'kleed_rand':  ('#8f7a62', 0.97, 0.0, None),
    'gordijn':     ('#e7dfd2', 0.9, 0.0, None),
    'leder':       ('#9a5b34', 0.55, 0.0, None),   # cognac
    'eik':         ('#b58a5e', 0.55, 0.0, None),
    'eik_donker':  ('#6e4a33', 0.5, 0.0, None),
    'wit_kast':    ('#efece6', 0.4, 0.0, None),
    'front':       ('#e9e5dc', 0.4, 0.0, None),    # keukenfronten
    'werkblad':    ('#3e3a36', 0.3, 0.0, None),
    'zwart':       ('#1f1f20', 0.45, 0.6, None),   # zwart metaal
    'messing':     ('#b8924a', 0.3, 1.0, None),
    'inox':        ('#c4c8cb', 0.28, 0.9, None),
    'zwart_glas':  ('#111315', 0.1, 0.2, None),
    'keramiek':    ('#f3f1ec', 0.18, 0.0, None),
    'terracotta':  ('#b5653f', 0.8, 0.0, None),
    'blad':        ('#4f6b3a', 0.6, 0.0, None),
    'blad_licht':  ('#6f8a48', 0.6, 0.0, None),
    'aarde':       ('#3a2a20', 0.95, 0.0, None),
    'scherm':      ('#0d0f11', 0.15, 0.3, None),
    'boek_1':      ('#8c3b2e', 0.7, 0.0, None),
    'boek_2':      ('#2f4a5e', 0.7, 0.0, None),
    'boek_3':      ('#d8c9a8', 0.7, 0.0, None),
    'boek_4':      ('#5e6b46', 0.7, 0.0, None),
    'boek_5':      ('#c7a15a', 0.7, 0.0, None),
    'fruit_oranje': ('#e07b24', 0.5, 0.0, None),
    'fruit_groen': ('#8fae3c', 0.5, 0.0, None),
    'fruit_geel':  ('#e9c63a', 0.5, 0.0, None),
    'lampkap':     ('#f4ead8', 0.8, 0.0, '#ffcf8a'),  # licht: brandt warm
    'lamp':        ('#fff2d6', 0.4, 0.0, '#ffd9a0'),
    'spiegel':     ('#c9d2d6', 0.03, 1.0, None),
}
_mats = {}


def M(naam):
    if naam in _mats:
        return _mats[naam]
    kleur, rough, metal, licht = MATERIALEN[naam]
    m = bpy.data.materials.new(naam)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*srgb(kleur), 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    if licht:
        b.inputs['Emission Color'].default_value = (*srgb(licht), 1)
        b.inputs['Emission Strength'].default_value = 1.5
    m.use_backface_culling = False
    _mats[naam] = m
    return m


# ───────────────────────────── vormen ─────────────────────────────

_delen = []


def _ob(bm, m, naam='deel'):
    me = bpy.data.meshes.new(naam)
    bm.to_mesh(me)
    bm.free()
    me.materials.append(M(m))
    ob = bpy.data.objects.new(naam, me)
    bpy.context.scene.collection.objects.link(ob)
    _delen.append(ob)
    return ob


def doos(m, x0, x1, y0, y1, z0, z1, r=0.0, seg=2):
    """Blok tussen twee hoeken (Blender-assen: y = diepte, z = hoogte), met afgeronde randen."""
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector(((x0 + x1) / 2 + v.co.x * (x1 - x0), (y0 + y1) / 2 + v.co.y * (y1 - y0), (z0 + z1) / 2 + v.co.z * (z1 - z0)))
    if r > 0:
        r = min(r, (x1 - x0) / 2.05, (y1 - y0) / 2.05, (z1 - z0) / 2.05)
        bmesh.ops.bevel(bm, geom=list(bm.edges) + list(bm.verts), offset=r, segments=seg, affect='EDGES', profile=0.5)
    return _ob(bm, m)


def kussen(m, x0, x1, y0, y1, z0, z1, r=0.05):
    """Zacht blok: dikke ronding, drie segmenten."""
    return doos(m, x0, x1, y0, y1, z0, z1, r=r, seg=3)


def cil(m, x, y, z0, z1, r, seg=16, r2=None, dicht=True):
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=dicht, cap_tris=False, segments=seg, radius1=r, radius2=r if r2 is None else r2, depth=z1 - z0)
    for v in bm.verts:
        v.co.x += x
        v.co.y += y
        v.co.z += (z0 + z1) / 2
    return _ob(bm, m)


def buis(m, a, b, r=0.012, seg=8):
    a, b = Vector(a), Vector(b)
    d = b - a
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=seg, radius1=r, radius2=r, depth=d.length)
    rot = Vector((0, 0, 1)).rotation_difference(d.normalized()).to_matrix().to_4x4()
    bmesh.ops.transform(bm, matrix=Matrix.Translation((a + b) / 2) @ rot, verts=bm.verts)
    return _ob(bm, m)


def bol(m, x, y, z, r, sub=2, sx=1.0, sy=1.0, sz=1.0):
    bm = bmesh.new()
    bmesh.ops.create_icosphere(bm, subdivisions=sub, radius=r)
    for v in bm.verts:
        v.co = Vector((x + v.co.x * sx, y + v.co.y * sy, z + v.co.z * sz))
    return _ob(bm, m)


def blad(m, basis, richting, lengte, breedte, buiging=0.25, draai=0.0):
    """Een blad: spits ovaal van 7 punten, iets gebogen langs zijn nerf."""
    d = Vector(richting).normalized()
    zij = d.cross(Vector((0, 0, 1)))
    if zij.length < 1e-3:
        zij = Vector((1, 0, 0))
    zij.normalize()
    zij = Matrix.Rotation(draai, 3, d) @ zij
    op = zij.cross(d).normalized()
    b0 = Vector(basis)
    pts = []
    for t, w in ((0, 0), (0.25, 0.8), (0.55, 1.0), (0.8, 0.7), (1, 0)):
        c = b0 + d * (lengte * t) + op * (math.sin(t * math.pi) * buiging * lengte * 0.3)
        pts.append((c, w * breedte / 2))
    bm = bmesh.new()
    vs = []
    for c, w in pts:
        if w == 0:
            vs.append((bm.verts.new(c),))
        else:
            vs.append((bm.verts.new(c - zij * w), bm.verts.new(c + op * 0.004), bm.verts.new(c + zij * w)))
    for i in range(len(vs) - 1):
        a, b = vs[i], vs[i + 1]
        if len(a) == 1:
            bm.faces.new((a[0], b[1], b[0]))
            bm.faces.new((a[0], b[2], b[1]))
        elif len(b) == 1:
            bm.faces.new((a[0], a[1], b[0]))
            bm.faces.new((a[1], a[2], b[0]))
        else:
            bm.faces.new((a[0], a[1], b[1], b[0]))
            bm.faces.new((a[1], a[2], b[2], b[1]))
    return _ob(bm, m)


# ───────────────────────────── kit ─────────────────────────────

KIT = []   # manifest-regels
_gemaakt = {}


def klaar(naam, meta):
    """Voegt de losse delen samen tot één object `naam`, met de oorsprong op (0,0,0)."""
    global _delen
    obs = _delen
    _delen = []
    bpy.ops.object.select_all(action='DESELECT')
    for o in obs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = obs[0]
    if len(obs) > 1:
        bpy.ops.object.join()
    ob = bpy.context.object
    ob.name = naam
    ob.data.name = naam
    bpy.ops.object.shade_smooth_by_angle(angle=math.radians(32))
    # Dubbele materiaalslots (na het samenvoegen) samenvoegen.
    me = ob.data
    eerste = {}
    for i, m in enumerate(me.materials):
        eerste.setdefault(m.name, i)
    for p in me.polygons:
        p.material_index = eerste[me.materials[p.material_index].name]
    bpy.ops.object.material_slot_remove_unused()
    xs = [v.co.x for v in me.vertices]; ys = [v.co.y for v in me.vertices]; zs = [v.co.z for v in me.vertices]
    tris = sum(len(p.vertices) - 2 for p in me.polygons)
    regel = {
        'naam': naam,
        'b': round(max(xs) - min(xs), 3), 'd': round(max(ys) - min(ys), 3), 'h': round(max(zs) - min(zs), 3),
        'tris': tris,
        'materialen': sorted({m.name for m in me.materials}),
    }
    regel.update(meta)
    KIT.append(regel)
    _gemaakt[naam] = ob
    print('KIT', naam, regel['b'], regel['d'], regel['h'], tris)
    return ob


def wil(naam):
    return not WANT or any(naam.startswith(w) for w in WANT)


# Meta-velden in het manifest:
#   muur: staat met de rug tegen een muur (anders vrij in de kamer)
#   hoog: hoger dan een borstwering; alleen tegen een muur die in de opengewerkte
#         laag op volle hoogte blijft (achter- en linkergevel)
#   vrij: vrije vloer die het meubel nodig heeft, in meter: voor (n), zij (u, elke kant), rond
#   schaal: welke assen de code mag schalen om het passend te maken ("x", "xy", "")
#   kleurbaar: materialen die een kamer zelf kleurt
#   boven: hangt of staat op die hoogte (bovenkasten, lampen op een kast); de oorsprong blijft op de vloer
def meta(muur=True, hoog=False, voor=0.0, zij=0.0, rond=0.0, schaal='', kleurbaar=(), **x):
    m = {'muur': muur, 'hoog': hoog, 'vrij': {'voor': voor, 'zij': zij, 'rond': rond}, 'schaal': schaal, 'kleurbaar': list(kleurbaar)}
    m.update(x)
    return m


# ── leefruimte ──────────────────────────────────────────────────────

def zetel(naam, B):
    """Bank met losse zit- en rugkussens, armleuningen, zwarte pootjes, sierkussens en een plaid."""
    D, H, ZH = 0.92, 0.8, 0.44
    arm = 0.16
    doos('stof', -B / 2, B / 2, -D + 0.06, 0, 0.1, 0.3, r=0.03)                       # onderstel
    for s in (-1, 1):
        kussen('stof', s * B / 2 - (arm if s > 0 else 0), s * B / 2 + (0 if s > 0 else arm), -D, 0, 0.1, 0.62, r=0.05)  # armen
    n = 3 if B > 1.9 else 2
    zb = (B - 2 * arm) / n
    for i in range(n):
        x0 = -B / 2 + arm + i * zb
        kussen('stof', x0 + 0.005, x0 + zb - 0.005, -D + 0.02, -0.2, 0.3, ZH, r=0.06)          # zit
        kussen('stof', x0 + 0.01, x0 + zb - 0.01, -0.26, -0.04, ZH - 0.02, H, r=0.07)         # rug
    doos('stof', -B / 2, B / 2, -0.06, 0, 0.1, H - 0.05, r=0.02)                       # rugwand
    for x in (-B / 2 + 0.08, B / 2 - 0.08):
        for y in (-D + 0.1, -0.08):
            cil('zwart', x, y, 0, 0.1, 0.018, seg=8)
    # sierkussens, schuin tegen de rug
    for x, m in ((-B / 2 + arm + 0.22, 'stof_accent'), (B / 2 - arm - 0.22, 'stof_accent'), (B / 2 - arm - 0.55, 'wol')):
        ob = kussen(m, x - 0.21, x + 0.21, -0.36, -0.22, ZH, ZH + 0.4, r=0.06)
        ob.data.transform(Matrix.Translation((x, -0.29, ZH)) @ Matrix.Rotation(math.radians(-14), 4, 'X') @ Matrix.Translation((-x, 0.29, -ZH)))
    # plaid over de linkerarm
    doos('wol', -B / 2 - 0.01, -B / 2 + arm + 0.02, -D + 0.25, -0.35, 0.6, 0.64, r=0.01)
    doos('wol', -B / 2 - 0.02, -B / 2 + 0.005, -D + 0.25, -0.35, 0.3, 0.64, r=0.008)
    klaar(naam, meta(voor=0.45, zij=0.1, kleurbaar=('stof', 'stof_accent', 'wol')))


def salontafel():
    B, D, H = 1.1, 0.6, 0.4
    doos('eik', -B / 2, B / 2, -D, 0, H - 0.035, H, r=0.008)
    for x in (-B / 2 + 0.06, B / 2 - 0.06):
        doos('zwart', x - 0.012, x + 0.012, -D + 0.05, -0.05, 0.02, H - 0.035)
        doos('zwart', x - 0.012, x + 0.012, -D + 0.05, -0.05, 0, 0.02)
        doos('zwart', x - 0.012, x + 0.012, -D + 0.04, -D + 0.07, 0, H - 0.035)
        doos('zwart', x - 0.012, x + 0.012, -0.07, -0.04, 0, H - 0.035)
    doos('eik', -B / 2 + 0.07, B / 2 - 0.07, -D + 0.06, -0.06, 0.12, 0.14)            # onderplank
    # boekenstapel en een vaasje
    for i, (m, w) in enumerate((('boek_3', 0.28), ('boek_2', 0.25), ('boek_1', 0.22))):
        doos(m, -0.32 - w / 2, -0.32 + w / 2, -0.42, -0.42 + w * 0.75, H + i * 0.03, H + (i + 1) * 0.03 - 0.002, r=0.003)
    cil('keramiek', 0.28, -0.3, H, H + 0.16, 0.05, seg=14, r2=0.035)
    klaar('leefruimte_salontafel', meta(muur=False, rond=0.35, kleurbaar=('eik',)))


def tvmeubel(B=1.8):
    D, H = 0.42, 0.48
    doos('eik', -B / 2, B / 2, -D, 0, 0.12, H, r=0.01)
    n = 3
    for i in range(1, n):
        x = -B / 2 + B * i / n
        doos('eik_donker', x - 0.003, x + 0.003, -D - 0.002, -D + 0.01, 0.14, H - 0.02)
    for x in (-B / 2 + 0.1, B / 2 - 0.1):
        for y in (-D + 0.07, -0.07):
            cil('zwart', x, y, 0, 0.12, 0.015, seg=8)
    # tv op een voetje
    TB, TH = 1.23, 0.71
    doos('zwart', -0.18, 0.18, -0.3, -0.12, H, H + 0.012, r=0.004)
    doos('zwart', -0.02, 0.02, -0.2, -0.17, H, H + 0.12)
    doos('scherm', -TB / 2, TB / 2, -0.2, -0.16, H + 0.08, H + 0.08 + TH, r=0.006)
    # een plantje en een speaker
    cil('keramiek', B / 2 - 0.2, -0.2, H, H + 0.12, 0.07, seg=14)
    for a in range(7):
        ang = a / 7 * math.tau
        blad('blad_licht', (B / 2 - 0.2, -0.2, H + 0.11), (math.cos(ang) * 0.5, math.sin(ang) * 0.5, 0.9), 0.16, 0.05, draai=ang)
    doos('zwart', -B / 2 + 0.12, -B / 2 + 0.24, -0.28, -0.14, H, H + 0.2, r=0.02)
    klaar(f'leefruimte_tvmeubel_{round(B * 100)}', meta(voor=1.6, zij=0.05, kleurbaar=('eik',), tv=True))


def boekenkast(B=1.0):
    D, H = 0.36, 2.0
    rnd = random.Random(int(B * 100))
    st = 0.025
    doos('eik', -B / 2, -B / 2 + st, -D, 0, 0, H)
    doos('eik', B / 2 - st, B / 2, -D, 0, 0, H)
    doos('eik', -B / 2, B / 2, -0.015, 0, 0, H)
    legplanken = [0.06, 0.45, 0.83, 1.21, 1.59, H - st]
    for z in legplanken:
        doos('eik', -B / 2 + st, B / 2 - st, -D, -0.015, z, z + st)
    doos('eik', -B / 2 + st, B / 2 - st, -D + 0.02, -0.015, 0, 0.06)
    boeken = ['boek_1', 'boek_2', 'boek_3', 'boek_4', 'boek_5']
    for i, z in enumerate(legplanken[:-1]):
        x = -B / 2 + st + 0.02
        eind = B / 2 - st - 0.02
        vak = i % 3
        while x < eind - 0.03:
            if vak == 1 and x > -0.05 and x < 0.25:
                # een vrij plekje met een object
                if rnd.random() < 0.5:
                    cil('keramiek', x + 0.1, -D / 2, z + st, z + st + 0.2, 0.06, seg=14, r2=0.04)
                else:
                    doos('terracotta', x + 0.03, x + 0.2, -D + 0.08, -0.08, z + st, z + st + 0.1, r=0.01)
                x += 0.3
                continue
            dik = rnd.uniform(0.02, 0.045)
            hoog = rnd.uniform(0.2, 0.3)
            diep = rnd.uniform(0.17, 0.24)
            if x + dik > eind:
                break
            schuin = rnd.random() < 0.06
            ob = doos(rnd.choice(boeken), x, x + dik, -D + 0.04, -D + 0.04 + diep, z + st, z + st + hoog)
            if schuin:
                ob.data.transform(Matrix.Translation((x, 0, z + st)) @ Matrix.Rotation(math.radians(-12), 4, 'Y') @ Matrix.Translation((-x, 0, -(z + st))))
                x += 0.05
            x += dik + 0.001
            if rnd.random() < 0.1:
                x += 0.06
    klaar(f'leefruimte_boekenkast_{round(B * 100)}', meta(hoog=True, voor=0.7, kleurbaar=('eik',)))


def staande_lamp():
    for a in range(3):
        ang = a / 3 * math.tau
        buis('zwart', (0, -0.2, 1.05), (math.cos(ang) * 0.2, -0.2 + math.sin(ang) * 0.2, 0), r=0.01)
    buis('zwart', (0, -0.2, 1.0), (0, -0.2, 1.45), r=0.012)
    cil('lampkap', 0, -0.2, 1.3, 1.62, 0.2, seg=24, r2=0.15, dicht=False)
    cil('lamp', 0, -0.2, 1.38, 1.44, 0.04, seg=10)
    klaar('leefruimte_lamp_staand', meta(muur=False, rond=0.05, licht=True))


def plant_groot():
    rnd = random.Random(11)
    cil('terracotta', 0, -0.25, 0, 0.36, 0.2, seg=20, r2=0.24)
    cil('aarde', 0, -0.25, 0.3, 0.34, 0.22, seg=20)
    buis('eik_donker', (0, -0.25, 0.3), (0.02, -0.25, 1.15), r=0.018)
    for i in range(34):
        h = rnd.uniform(0.55, 1.5)
        ang = rnd.uniform(0, math.tau)
        uit = 0.1 + (1.5 - h) * 0.25
        basis = (math.cos(ang) * 0.05, -0.25 + math.sin(ang) * 0.05, h)
        richting = (math.cos(ang) * uit * 2, math.sin(ang) * uit * 2, rnd.uniform(0.2, 0.9))
        blad('blad' if i % 3 else 'blad_licht', basis, richting, rnd.uniform(0.22, 0.32), rnd.uniform(0.12, 0.17), buiging=0.35, draai=rnd.uniform(-0.6, 0.6))
    klaar('leefruimte_plant_groot', meta(muur=False, rond=0.0))


def vloerkleed(naam, B, D, rand=0.08):
    doos('kleed', -B / 2 + rand, B / 2 - rand, -D + rand, -rand, 0, 0.012)
    doos('kleed_rand', -B / 2, B / 2, -D, 0, 0, 0.01)
    klaar(naam, meta(muur=False, schaal='xy', kleurbaar=('kleed', 'kleed_rand'), plat=True))


# ── keuken ──────────────────────────────────────────────────────────
# Een keukenblok is een reeks modules van 60 cm (onderkast, spoelkast, oven,
# koelkastkolom) met een doorlopend werkblad dat de code op lengte schaalt.

KH = 0.9   # werkbladhoogte

def onderkast(naam, variant='kast'):
    B, D = 0.6, 0.6
    doos('zwart', -B / 2, B / 2, -D + 0.06, 0, 0, 0.1)                          # plint
    doos('wit_kast', -B / 2, B / 2, -D + 0.02, 0, 0.1, KH - 0.04)               # kastlijf
    if variant == 'oven':
        doos('front', -B / 2 + 0.002, B / 2 - 0.002, -D, -D + 0.02, 0.1, 0.24, r=0.003)
        doos('zwart_glas', -B / 2 + 0.01, B / 2 - 0.01, -D - 0.005, -D + 0.01, 0.25, KH - 0.1, r=0.004)
        doos('inox', -B / 2 + 0.06, B / 2 - 0.06, -D - 0.03, -D - 0.012, KH - 0.14, KH - 0.125)
        doos('inox', -B / 2 + 0.01, B / 2 - 0.01, -D - 0.005, -D + 0.01, KH - 0.1, KH - 0.06)
    else:
        doos('front', -B / 2 + 0.002, B / 2 - 0.002, -D, -D + 0.02, 0.1, KH - 0.08, r=0.003)
        if variant == 'lades':
            for z in (0.36, 0.6):
                doos('zwart', -B / 2 + 0.002, B / 2 - 0.002, -D - 0.001, -D + 0.005, z - 0.002, z + 0.002)
    # greeplijst: een zwarte uitsparing onder het werkblad
    doos('zwart', -B / 2, B / 2, -D + 0.005, -D + 0.04, KH - 0.08, KH - 0.04)
    klaar(naam, meta(voor=0.9, kleurbaar=('front',), module=0.6))


def koelkastkolom():
    B, D, H = 0.6, 0.62, 2.18
    doos('zwart', -B / 2, B / 2, -D + 0.06, 0, 0, 0.1)
    doos('wit_kast', -B / 2, B / 2, -D + 0.02, 0, 0.1, H)
    doos('front', -B / 2 + 0.002, B / 2 - 0.002, -D, -D + 0.02, 0.1, 1.3, r=0.003)
    doos('front', -B / 2 + 0.002, B / 2 - 0.002, -D, -D + 0.02, 1.33, H - 0.003, r=0.003)
    doos('zwart', -B / 2 + 0.002, B / 2 - 0.002, -D - 0.001, -D + 0.005, 1.3, 1.33)
    doos('zwart', B / 2 - 0.04, B / 2 - 0.01, -D - 0.025, -D, 0.9, 1.25, r=0.005)
    klaar('keuken_koelkastkolom_60', meta(hoog=True, voor=1.0, kleurbaar=('front',), module=0.6))


def bovenkast():
    B, D = 0.6, 0.35
    Z0, Z1 = 1.45, 2.15
    doos('wit_kast', -B / 2, B / 2, -D + 0.02, 0, Z0, Z1)
    doos('front', -B / 2 + 0.002, B / 2 - 0.002, -D, -D + 0.02, Z0 + 0.02, Z1, r=0.003)
    doos('lamp', -B / 2 + 0.03, B / 2 - 0.03, -D + 0.05, -D + 0.07, Z0 - 0.006, Z0)   # ledstrip
    klaar('keuken_bovenkast_60', meta(hoog=True, kleurbaar=('front',), module=0.6, boven=Z0))


def werkblad():
    # 1 m lang; de code schaalt x tot de lengte van het blok. Steekt 3 cm voor de kasten uit.
    doos('werkblad', -0.5, 0.5, -0.635, 0, KH - 0.04, KH, r=0.003)
    klaar('keuken_werkblad', meta(schaal='x', kleurbaar=('werkblad',)))


def spoelbak():
    B, D = 0.78, 0.46
    y0 = -0.08
    doos('inox', -B / 2, B / 2, y0 - D, y0, KH, KH + 0.004)
    doos('zwart_glas', -B / 2 + 0.04, 0.05, y0 - D + 0.05, y0 - 0.05, KH + 0.004, KH + 0.005)
    doos('inox', 0.09, B / 2 - 0.04, y0 - D + 0.05, y0 - 0.05, KH + 0.004, KH + 0.006)
    # kraan: zuil en zwanenhals
    buis('inox', (-0.14, -0.05, KH), (-0.14, -0.05, KH + 0.32), r=0.016)
    buis('inox', (-0.14, -0.05, KH + 0.32), (-0.14, -0.2, KH + 0.36), r=0.014)
    buis('inox', (-0.14, -0.2, KH + 0.36), (-0.14, -0.27, KH + 0.24), r=0.012)
    doos('inox', -0.12, -0.1, -0.06, -0.04, KH + 0.15, KH + 0.18)
    klaar('keuken_spoelbak', meta(boven=KH))


def kookplaat():
    doos('zwart_glas', -0.29, 0.29, -0.56, -0.05, KH, KH + 0.006, r=0.003)
    for x, y, r in ((-0.15, -0.18, 0.09), (0.15, -0.18, 0.07), (-0.15, -0.42, 0.07), (0.15, -0.42, 0.09)):
        cil('zwart', x, y, KH + 0.006, KH + 0.0072, r, seg=24)
        cil('zwart_glas', x, y, KH + 0.0072, KH + 0.0078, r - 0.006, seg=24)
    klaar('keuken_kookplaat', meta(boven=KH))


def dampkap():
    doos('inox', -0.3, 0.3, -0.5, 0, 1.55, 1.62, r=0.004)
    doos('inox', -0.15, 0.15, -0.26, 0, 1.62, 2.6)
    doos('lamp', -0.2, 0.2, -0.4, -0.3, 1.546, 1.55)
    klaar('keuken_dampkap_60', meta(hoog=True, boven=1.55))


def eiland(B=1.8):
    D = 0.9
    doos('zwart', -B / 2 + 0.04, B / 2 - 0.04, -D + 0.06, -0.06, 0, 0.1)
    doos('front', -B / 2, B / 2, -D + 0.02, -0.02, 0.1, KH - 0.04, r=0.004)
    for i in range(1, 3):
        x = -B / 2 + B * i / 3
        doos('wit_kast', x - 0.002, x + 0.002, -0.022, -0.016, 0.14, KH - 0.06)
    doos('werkblad', -B / 2 - 0.02, B / 2 + 0.02, -D - 0.25, 0.02, KH - 0.04, KH, r=0.003)
    # snijplank en fruitschaal staan er standaard op
    doos('eik', -0.5, -0.12, -0.55, -0.3, KH, KH + 0.025, r=0.006)
    cil('keramiek', 0.4, -0.5, KH, KH + 0.06, 0.15, seg=20, r2=0.11)
    for i, (m, dx, dy) in enumerate((('fruit_oranje', 0.03, 0.02), ('fruit_groen', -0.05, -0.03), ('fruit_geel', 0.06, -0.06), ('fruit_oranje', -0.02, 0.07))):
        bol(m, 0.4 + dx, -0.5 + dy, KH + 0.09 + (0.03 if i == 3 else 0), 0.04, sub=2)
    # drie krukken aan de lange kant
    for x in (-B / 3, 0, B / 3):
        cil('eik', x, -D - 0.25, 0.62, 0.66, 0.17, seg=18)
        for a in range(4):
            ang = a / 4 * math.tau + math.pi / 4
            buis('zwart', (x + math.cos(ang) * 0.1, -D - 0.25 + math.sin(ang) * 0.1, 0.62), (x + math.cos(ang) * 0.16, -D - 0.25 + math.sin(ang) * 0.16, 0), r=0.01)
    klaar(f'keuken_eiland_{round(B * 100)}', meta(muur=False, rond=0.9, kleurbaar=('front', 'werkblad')))


def tafel(B=1.6):
    D, H = 0.9, 0.75
    doos('eik', -B / 2, B / 2, -D, 0, H - 0.035, H, r=0.008)
    for x in (-B / 2 + 0.08, B / 2 - 0.08):
        for y in (-D + 0.08, -0.08):
            doos('zwart', x - 0.02, x + 0.02, y - 0.02, y + 0.02, 0, H - 0.035)
    doos('zwart', -B / 2 + 0.08, B / 2 - 0.08, -D / 2 - 0.015, -D / 2 + 0.015, H - 0.1, H - 0.035)
    # vaas met takken en een kandelaar
    cil('keramiek', 0.1, -D / 2, H, H + 0.22, 0.06, seg=14, r2=0.045)
    for a in range(5):
        ang = a / 5 * math.tau
        blad('blad', (0.1, -D / 2, H + 0.2), (math.cos(ang) * 0.4, math.sin(ang) * 0.4, 1), 0.2, 0.06, buiging=0.2, draai=ang)
    cil('messing', -0.25, -D / 2, H, H + 0.25, 0.012, seg=8)
    cil('messing', -0.25, -D / 2, H, H + 0.012, 0.05, seg=12)
    klaar(f'keuken_tafel_{round(B * 100)}', meta(muur=False, rond=0.75, kleurbaar=('eik',)))


def stoel():
    # Kuipstoel: zitting en rug in één schaal, eiken poten. Voorkant naar -Y.
    kussen('stof', -0.22, 0.22, -0.44, -0.02, 0.43, 0.48, r=0.02)
    kussen('stof', -0.22, 0.22, -0.06, 0.0, 0.46, 0.82, r=0.02)
    for x in (-0.18, 0.18):
        buis('eik', (x, -0.4, 0.44), (x * 1.1, -0.43, 0), r=0.014)
        buis('eik', (x, -0.06, 0.44), (x * 1.1, 0.01, 0), r=0.014)
    klaar('keuken_stoel', meta(muur=False, kleurbaar=('stof',)))


def pendellamp():
    # Hangt aan het plafond (2,6 m); de oorsprong blijft op de vloer.
    buis('zwart', (0, -0.15, 2.6), (0, -0.15, 1.82), r=0.003, seg=6)
    cil('zwart', 0, -0.15, 1.64, 1.82, 0.16, seg=24, r2=0.03, dicht=False)
    bol('lamp', 0, -0.15, 1.69, 0.04, sub=1)
    cil('messing', 0, -0.15, 1.81, 1.84, 0.03, seg=10)
    klaar('keuken_pendellamp', meta(muur=False, boven=1.64, licht=True))


def toestellen_werkblad():
    """Spullen voor op het werkblad: waterkoker, potten en olie, snijplank tegen de wand."""
    doos('eik', -0.24, 0.12, -0.05, -0.025, KH, KH + 0.36, r=0.008)                    # snijplank rechtop
    cil('zwart', 0.3, -0.2, KH, KH + 0.22, 0.08, seg=16, r2=0.07)                      # waterkoker
    cil('keramiek', -0.35, -0.2, KH, KH + 0.16, 0.06, seg=14)                          # pot met lepels
    for a in range(3):
        buis('eik', (-0.35, -0.2, KH + 0.1), (-0.35 + (a - 1) * 0.03, -0.2 + 0.02, KH + 0.32), r=0.008, seg=6)
    for x, m in ((0.05, 'messing'), (0.11, 'zwart_glas')):
        cil(m, x, -0.12, KH, KH + 0.24, 0.025, seg=10)
    klaar('keuken_werkbladspullen', meta(boven=KH))


# ── slaapkamer ──────────────────────────────────────────────────────

def bed(B):
    """Bed met gestoffeerd hoofdbord, dekbed met omslag, hoofdkussens en een plaid aan het voeteneind."""
    L = 2.05 if B > 1 else 1.95
    HB = 1.05 if B > 1 else 0.85
    kussen('stof', -B / 2 - 0.04, B / 2 + 0.04, -0.08, 0, 0.15, HB, r=0.04)                 # hoofdbord
    doos('eik', -B / 2 - 0.02, B / 2 + 0.02, -L - 0.02, -0.06, 0.12, 0.3, r=0.01)            # bedbak
    for x in (-B / 2 + 0.05, B / 2 - 0.05):
        for y in (-L + 0.05, -0.12):
            doos('eik', x - 0.025, x + 0.025, y - 0.025, y + 0.025, 0, 0.12)
    doos('linnen_2', -B / 2 + 0.01, B / 2 - 0.01, -L + 0.01, -0.08, 0.3, 0.5, r=0.04)        # matras
    # dekbed: hangt aan drie kanten wat over, met een omslag bovenaan
    kussen('linnen', -B / 2 - 0.03, B / 2 + 0.03, -L - 0.03, -0.55, 0.36, 0.57, r=0.05)
    kussen('linnen', -B / 2 - 0.02, B / 2 + 0.02, -0.62, -0.5, 0.5, 0.58, r=0.04)
    n = 2 if B > 1 else 1
    kb = (B - 0.12) / n
    for i in range(n):
        x0 = -B / 2 + 0.06 + i * kb
        kussen('linnen_2', x0 + 0.02, x0 + kb - 0.02, -0.5, -0.1, 0.5, 0.66, r=0.06)
        if B > 1:
            ob = kussen('stof_accent', x0 + 0.08, x0 + kb - 0.08, -0.46, -0.32, 0.55, 0.88, r=0.05)
    kussen('wol', -B / 2 - 0.05, B / 2 + 0.05, -L + 0.1, -L + 0.55, 0.555, 0.6, r=0.02)       # plaid
    doos('wol', -B / 2 - 0.06, -B / 2 - 0.04, -L + 0.1, -L + 0.55, 0.3, 0.6)
    doos('wol', B / 2 + 0.04, B / 2 + 0.06, -L + 0.1, -L + 0.55, 0.3, 0.6)
    klaar(f'slaapkamer_bed_{round(B * 100)}', meta(voor=0.6, zij=0.6 if B > 1 else 0.0, kleurbaar=('stof', 'linnen', 'linnen_2', 'wol', 'stof_accent')))


def nachtkast():
    B, D, H = 0.45, 0.38, 0.5
    doos('eik', -B / 2, B / 2, -D, 0, 0.14, H, r=0.006)
    doos('eik_donker', -B / 2 + 0.02, B / 2 - 0.02, -D - 0.002, -D + 0.005, 0.32, 0.325)
    doos('messing', -0.05, 0.05, -D - 0.015, -D, 0.4, 0.41)
    for x in (-B / 2 + 0.04, B / 2 - 0.04):
        for y in (-D + 0.04, -0.04):
            buis('zwart', (x, y, 0.14), (x, y, 0), r=0.01, seg=6)
    # lampje en een boek
    cil('keramiek', 0.08, -0.17, H, H + 0.2, 0.06, seg=14, r2=0.045)
    cil('lampkap', 0.08, -0.17, H + 0.18, H + 0.34, 0.11, seg=20, r2=0.08, dicht=False)
    doos('boek_2', -0.18, -0.02, -0.3, -0.08, H, H + 0.03, r=0.003)
    klaar('slaapkamer_nachtkast', meta(voor=0.0, kleurbaar=('eik',), licht=True))


def kleerkast(B=1.0):
    D, H = 0.6, 2.2
    doos('wit_kast', -B / 2, B / 2, -D + 0.02, 0, 0, H, r=0.004)
    n = 2
    for i in range(n):
        x0 = -B / 2 + i * B / n
        doos('wit_kast', x0 + 0.002, x0 + B / n - 0.002, -D, -D + 0.02, 0.06, H - 0.004, r=0.003)
        hx = x0 + B / n - 0.05 if i == 0 else x0 + 0.05
        doos('messing', hx - 0.006, hx + 0.006, -D - 0.025, -D, 0.85, 1.35)
    doos('zwart', -B / 2 + 0.01, B / 2 - 0.01, -D + 0.03, -0.02, 0, 0.06)
    klaar(f'slaapkamer_kleerkast_{round(B * 100)}', meta(hoog=True, voor=0.7, kleurbaar=('wit_kast',), module=B))


def commode(B=1.2):
    D, H = 0.48, 0.82
    doos('eik', -B / 2, B / 2, -D, 0, 0.12, H, r=0.008)
    for z in (0.34, 0.58):
        doos('eik_donker', -B / 2 + 0.02, B / 2 - 0.02, -D - 0.002, -D + 0.005, z - 0.002, z + 0.002)
    for z in (0.23, 0.46, 0.7):
        for x in (-B / 4, B / 4):
            doos('messing', x - 0.06, x + 0.06, -D - 0.015, -D, z - 0.005, z + 0.005)
    for x in (-B / 2 + 0.05, B / 2 - 0.05):
        for y in (-D + 0.05, -0.05):
            buis('zwart', (x, y, 0.12), (x, y, 0), r=0.012, seg=6)
    # spiegel tegen de muur, een vaasje en een mandje
    doos('messing', -0.3, 0.3, -0.04, -0.02, H, H + 0.7, r=0.01)
    doos('spiegel', -0.28, 0.28, -0.045, -0.035, H + 0.02, H + 0.68)
    cil('keramiek', 0.4, -0.25, H, H + 0.18, 0.05, seg=14, r2=0.035)
    klaar(f'slaapkamer_commode_{round(B * 100)}', meta(voor=0.7, kleurbaar=('eik',)))


def speelkist():
    doos('eik', -0.4, 0.4, -0.4, 0, 0, 0.42, r=0.01)
    doos('stof_accent', -0.38, 0.38, -0.38, -0.02, 0.42, 0.46, r=0.015)
    bol('fruit_geel', 0.2, -0.6, 0.1, 0.1, sub=2)                                       # bal
    klaar('slaapkamer_speelkist', meta(voor=0.4, kleurbaar=('stof_accent',)))


# ── overal ──────────────────────────────────────────────────────────

def gordijn():
    """Eén gordijnpaneel van 40 cm breed, geplooid, van rail tot vloer. Twee per raam."""
    H = 2.5
    n = 8
    bm = bmesh.new()
    rij = []
    for i in range(n + 1):
        x = -0.2 + 0.4 * i / n
        y = -0.03 - (0.035 if i % 2 else 0)
        rij.append((bm.verts.new((x, y, 0.01)), bm.verts.new((x, y, H))))
    for i in range(n):
        a, b = rij[i], rij[i + 1]
        bm.faces.new((a[0], b[0], b[1], a[1]))
    _ob(bm, 'gordijn')
    klaar('algemeen_gordijn', meta(schaal='x', kleurbaar=('gordijn',)))


def gordijnrail():
    buis('zwart', (-0.5, -0.06, 2.52), (0.5, -0.06, 2.52), r=0.01, seg=8)
    for x in (-0.48, 0.48):
        buis('zwart', (x, 0, 2.52), (x, -0.06, 2.52), r=0.008, seg=6)
    klaar('algemeen_gordijnrail', meta(schaal='x'))


def deur(B=0.85):
    """Binnendeur: kader met chambranle aan beide kanten, deurblad (open, 90°) en klink.
    Oorsprong: midden van de opening, op de vloer, in het midden van een muur van 12 cm.
    Het blad hangt aan -x en draait naar -Y (de kamer in); de code spiegelt voor de andere hand."""
    H, T, dag, ch = 2.1, 0.12, 0.02, 0.07
    for s in (-1, 1):
        x0, x1 = (-B / 2, -B / 2 + dag) if s < 0 else (B / 2 - dag, B / 2)
        doos('wit_kast', x0, x1, -T / 2, T / 2, 0, H)                                    # dagkant
        c0, c1 = (-B / 2 - ch, -B / 2) if s < 0 else (B / 2, B / 2 + ch)
        for y in (-T / 2 - 0.012, T / 2):
            doos('wit_kast', c0, c1, y, y + 0.012, 0, H + ch)                             # chambranle
    doos('wit_kast', -B / 2, B / 2, -T / 2, T / 2, H - dag, H)
    for y in (-T / 2 - 0.012, T / 2):
        doos('wit_kast', -B / 2 - ch, B / 2 + ch, y, y + 0.012, H, H + ch)
    hx = -B / 2 + dag
    L = B - 2 * dag - 0.01
    doos('wit_kast', hx, hx + 0.04, -T / 2 - L, -T / 2, 0.01, H - 0.035, r=0.004)          # blad
    for x0, x1 in ((hx - 0.012, hx), (hx + 0.04, hx + 0.052)):
        doos('zwart', x0, x1, -T / 2 - L + 0.05, -T / 2 - L + 0.07, 1.0, 1.06)            # rozet
        doos('zwart', x0, x1, -T / 2 - L + 0.06, -T / 2 - L + 0.19, 1.035, 1.05)         # klink
    klaar(f'algemeen_deur_{round(B * 100)}', meta(muur=False, kleurbaar=('wit_kast',), deur=True))


def plaatjes():
    """Stopcontact en schakelaar: 8 × 8 cm, een tikje uit de muur."""
    doos('keramiek', -0.04, 0.04, -0.012, 0, 0.26, 0.34, r=0.004)
    cil('zwart', 0, -0.012, 0.29, 0.31, 0.018, seg=10)
    klaar('algemeen_stopcontact', meta(boven=0.26))
    doos('keramiek', -0.04, 0.04, -0.012, 0, 1.06, 1.14, r=0.004)
    doos('keramiek', -0.025, 0.025, -0.016, -0.012, 1.08, 1.12, r=0.002)
    klaar('algemeen_schakelaar', meta(boven=1.06))


# ───────────────────────────── uitvoeren ─────────────────────────────

bpy.ops.wm.read_factory_settings(use_empty=True)
MAKERS = [
    ('leefruimte_zetel_3zit', lambda: zetel('leefruimte_zetel_3zit', 2.2)),
    ('leefruimte_zetel_2zit', lambda: zetel('leefruimte_zetel_2zit', 1.65)),
    ('leefruimte_salontafel', salontafel),
    ('leefruimte_tvmeubel_180', lambda: tvmeubel(1.8)),
    ('leefruimte_tvmeubel_140', lambda: tvmeubel(1.4)),
    ('leefruimte_boekenkast_100', lambda: boekenkast(1.0)),
    ('leefruimte_boekenkast_60', lambda: boekenkast(0.6)),
    ('leefruimte_lamp_staand', staande_lamp),
    ('leefruimte_plant_groot', plant_groot),
    ('leefruimte_kleed', lambda: vloerkleed('leefruimte_kleed', 2.0, 1.4)),
    ('keuken_onderkast_60', lambda: onderkast('keuken_onderkast_60')),
    ('keuken_ladekast_60', lambda: onderkast('keuken_ladekast_60', 'lades')),
    ('keuken_ovenkast_60', lambda: onderkast('keuken_ovenkast_60', 'oven')),
    ('keuken_koelkastkolom_60', koelkastkolom),
    ('keuken_bovenkast_60', bovenkast),
    ('keuken_werkblad', werkblad),
    ('keuken_spoelbak', spoelbak),
    ('keuken_kookplaat', kookplaat),
    ('keuken_dampkap_60', dampkap),
    ('keuken_eiland_180', lambda: eiland(1.8)),
    ('keuken_eiland_140', lambda: eiland(1.4)),
    ('keuken_tafel_160', lambda: tafel(1.6)),
    ('keuken_tafel_120', lambda: tafel(1.2)),
    ('keuken_stoel', stoel),
    ('keuken_pendellamp', pendellamp),
    ('keuken_werkbladspullen', toestellen_werkblad),
    ('slaapkamer_bed_160', lambda: bed(1.6)),
    ('slaapkamer_bed_140', lambda: bed(1.4)),
    ('slaapkamer_bed_90', lambda: bed(0.9)),
    ('slaapkamer_nachtkast', nachtkast),
    ('slaapkamer_kleerkast_100', lambda: kleerkast(1.0)),
    ('slaapkamer_kleerkast_150', lambda: kleerkast(1.5)),
    ('slaapkamer_commode_120', lambda: commode(1.2)),
    ('slaapkamer_speelkist', speelkist),
    ('slaapkamer_kleed', lambda: vloerkleed('slaapkamer_kleed', 2.0, 1.4, 0.0)),
    ('algemeen_gordijn', gordijn),
    ('algemeen_gordijnrail', gordijnrail),
    ('algemeen_deur_85', lambda: deur(0.85)),
    ('algemeen_deur_70', lambda: deur(0.7)),
    ('algemeen_stopcontact', plaatjes),
]
for naam, maak in MAKERS:
    if wil(naam):
        maak()


def exporteer():
    bpy.ops.object.select_all(action='DESELECT')
    for ob in _gemaakt.values():
        ob.select_set(True)
    pad = os.path.join(OUT, 'interieur.glb')
    bpy.ops.export_scene.gltf(filepath=pad, export_format='GLB', use_selection=True, export_apply=True, export_yup=True,
                              export_materials='EXPORT', export_cameras=False, export_lights=False,
                              export_texcoords=False, export_normals=True)
    print('GLB', pad, os.path.getsize(pad))
    with open(os.path.join(OUT, 'interieur.json'), 'w') as f:
        json.dump({
            'versie': 1,
            'eenheid': 'meter',
            'as': 'oorsprong midden-achteraan op de vloer; voorkant naar +Z (three.js)',
            'materialen': {k: {'kleur': v[0], 'ruwheid': v[1], 'metaal': v[2], 'licht': v[3]} for k, v in MATERIALEN.items()},
            'objecten': KIT,
        }, f, indent=1, ensure_ascii=False)
    print('TRIS TOTAAL', sum(k['tris'] for k in KIT))


def controle():
    """Een controlebeeld per object, en alles samen in contactsheet.png."""
    import numpy as np
    sc = bpy.context.scene
    sc.render.engine = 'BLENDER_EEVEE'
    sc.render.resolution_x = sc.render.resolution_y = 360
    sc.render.film_transparent = False
    sc.view_settings.view_transform = 'Standard'
    w = bpy.data.worlds.new('w'); w.use_nodes = True
    w.node_tree.nodes['Background'].inputs[0].default_value = (0.93, 0.91, 0.88, 1)
    w.node_tree.nodes['Background'].inputs[1].default_value = 0.55
    sc.world = w
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    sc.collection.objects.link(cam)
    cam.data.type = 'ORTHO'
    sc.camera = cam
    zon = bpy.data.objects.new('zon', bpy.data.lights.new('zon', 'SUN'))
    zon.data.energy = 3.0
    zon.data.angle = math.radians(8)
    zon.rotation_euler = (math.radians(40), math.radians(10), math.radians(35))
    sc.collection.objects.link(zon)
    vloer = bpy.data.objects.new('vloer', bpy.data.meshes.new('vloer'))
    bm = bmesh.new(); bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=8); bm.to_mesh(vloer.data); bm.free()
    vm = bpy.data.materials.new('vloer'); vm.use_nodes = True
    vm.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value = (0.8, 0.78, 0.74, 1)
    vloer.data.materials.append(vm)
    sc.collection.objects.link(vloer)
    txt = bpy.data.objects.new('txt', bpy.data.curves.new('txt', 'FONT'))
    sc.collection.objects.link(txt)
    txt.data.size = 0.1
    tm = bpy.data.materials.new('txt'); tm.use_nodes = True
    tm.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value = (0.1, 0.1, 0.1, 1)
    tm.node_tree.nodes['Principled BSDF'].inputs['Emission Color'].default_value = (0.05, 0.05, 0.05, 1)
    txt.data.materials.append(tm)
    beelden = []
    for naam, ob in _gemaakt.items():
        for o in _gemaakt.values():
            o.hide_render = o is not ob
        meta_ = next(k for k in KIT if k['naam'] == naam)
        bb = [Vector(c) for c in ob.bound_box]
        lo = Vector((min(c.x for c in bb), min(c.y for c in bb), min(c.z for c in bb)))
        hi = Vector((max(c.x for c in bb), max(c.y for c in bb), max(c.z for c in bb)))
        groot = max(meta_['b'], meta_['d'], meta_['h'], 0.3)
        mid = (lo + hi) / 2
        cam.data.ortho_scale = groot * 1.9
        richting = Vector((0.75, -1.0, 0.75)).normalized()
        cam.location = mid + richting * 10
        cam.rotation_euler = (-richting).to_track_quat('-Z', 'Y').to_euler()
        txt.data.body = f"{naam}  {meta_['b']:.2f}×{meta_['d']:.2f}×{meta_['h']:.2f} m  {meta_['tris']} △"
        txt.data.size = groot * 0.055
        txt.location = cam.location + (-richting) * 1 + cam.matrix_world.to_3x3() @ Vector((-groot * 0.9, -groot * 0.88, 0))
        txt.rotation_euler = cam.rotation_euler
        pad = os.path.join(OUT, 'renders', naam + '.png')
        sc.render.filepath = pad
        bpy.ops.render.render(write_still=True)
        beelden.append(pad)
    # contactsheet
    kol = 6
    rijen = math.ceil(len(beelden) / kol)
    S = 360
    blad = np.ones((rijen * S, kol * S, 4), dtype=np.float32)
    for i, pad in enumerate(beelden):
        img = bpy.data.images.load(pad)
        px = np.array(img.pixels[:], dtype=np.float32).reshape(S, S, 4)
        r, c = divmod(i, kol)
        blad[(rijen - 1 - r) * S:(rijen - r) * S, c * S:(c + 1) * S] = px
        bpy.data.images.remove(img)
    out = bpy.data.images.new('contactsheet', kol * S, rijen * S, alpha=True)
    out.pixels = blad.ravel()
    out.filepath_raw = os.path.join(OUT, 'contactsheet.png')
    out.file_format = 'PNG'
    out.save()
    print('CONTACTSHEET', out.filepath_raw)


exporteer()
if RENDER:
    controle()
print('INTERIEUR OK')
