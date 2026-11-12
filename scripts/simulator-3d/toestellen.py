# De toestellen uit het droogpakket als lichte 3D-modellen voor de droogsimulator,
# naar de productfoto's in public/verhuur (ttk-170, ttk-350, ttv-4500, teddh-30).
#
#   Blender -b -P scripts/simulator-3d/toestellen.py -- <uitmap> [--render]
#
# Uitvoer: <uitmap>/<naam>.glb (droger-small, droger-medium, ventilator, kachel) en met
# --render ook een controlebeeld <naam>.png. Daarna naar public/simulator/3d/.
#
# Afspraken met IsoHouse3D/onderdelen.tsx:
#   - meter, oorsprong midden onderaan, voorkant naar Blender -Y (= +Z in three.js);
#   - "romp" is alles wat stilstaat, in één object met meerdere materialen;
#   - "wieken" (ventilator) draait om zijn eigen as (Blender Y = three.js Z);
#   - "led" en "gloed" hebben een eigen materiaal dat de app aan- en uitzet.
import bpy, bmesh, math, os, sys
from mathutils import Vector

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
OUT = argv[0] if argv else '/tmp/toestellen'
RENDER = '--render' in argv
os.makedirs(OUT, exist_ok=True)


_mats = {}


def leeg():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    _mats.clear()  # een nieuwe scène wist ook de materialen


def mat(naam, kleur, rough=0.5, metal=0.0, emit=None):
    if naam in _mats:
        return _mats[naam]
    m = bpy.data.materials.new(naam)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*kleur, 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    if emit:
        b.inputs['Emission Color'].default_value = (*emit, 1)
        b.inputs['Emission Strength'].default_value = 1.0
    _mats[naam] = m
    return m


def srgb(h):
    h = h.lstrip('#')
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c)


WIT = lambda: mat('wit', srgb('#f2f1ee'), 0.38)
ZWART = lambda: mat('zwart', srgb('#1d1d1f'), 0.55)
ROOSTER = lambda: mat('rooster', srgb('#2a2a2c'), 0.7)
ROOD = lambda: mat('rood', srgb('#c8102e'), 0.4)
BUIS = lambda: mat('buis', srgb('#151516'), 0.35, 0.4)
RUBBER = lambda: mat('rubber', srgb('#202020'), 0.85)
NAAF = lambda: mat('naaf', srgb('#9a9a9a'), 0.3, 0.8)
SCHERM = lambda: mat('scherm', srgb('#0f1418'), 0.2)


def toewijzen(ob, m):
    ob.data.materials.clear()
    ob.data.materials.append(m)
    return ob


def blok(m, x0, x1, y0, y1, z0, z1, bevel=0.0):
    bpy.ops.mesh.primitive_cube_add(size=1, location=((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2))
    ob = bpy.context.object
    ob.scale = (x1 - x0, y1 - y0, z1 - z0)
    bpy.ops.object.transform_apply(scale=True)
    if bevel:
        mod = ob.modifiers.new('bevel', 'BEVEL')
        mod.width = bevel
        mod.segments = 2
        bpy.ops.object.modifier_apply(modifier=mod.name)
    return toewijzen(ob, m)


def buis(m, a, b, r=0.012, seg=10):
    a, b = Vector(a), Vector(b)
    d = b - a
    bpy.ops.mesh.primitive_cylinder_add(vertices=seg, radius=r, depth=d.length, location=(a + b) / 2)
    ob = bpy.context.object
    ob.rotation_mode = 'QUATERNION'
    ob.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(d.normalized())
    bpy.ops.object.transform_apply(rotation=True)
    return toewijzen(ob, m)


def wiel(m, x, y, z, r, breed, as_='x', seg=20):
    bpy.ops.mesh.primitive_cylinder_add(vertices=seg, radius=r, depth=breed, location=(x, y, z))
    ob = bpy.context.object
    if as_ == 'x':
        ob.rotation_euler = (0, math.pi / 2, 0)
    else:
        ob.rotation_euler = (math.pi / 2, 0, 0)
    bpy.ops.object.transform_apply(rotation=True)
    return toewijzen(ob, m)


def samen(obs, naam):
    bpy.ops.object.select_all(action='DESELECT')
    for o in obs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = obs[0]
    if len(obs) > 1:
        bpy.ops.object.join()
    ob = bpy.context.object
    ob.name = naam
    ob.data.name = naam
    bpy.ops.object.shade_flat()
    return ob


def exporteer(naam):
    pad = os.path.join(OUT, naam + '.glb')
    bpy.ops.export_scene.gltf(filepath=pad, export_format='GLB', export_apply=True, export_yup=True,
                              export_materials='EXPORT', export_cameras=False, export_lights=False)
    print('GLB', pad, os.path.getsize(pad))
    if RENDER:
        controle(naam)


def controle(naam):
    sc = bpy.context.scene
    sc.render.engine = 'BLENDER_EEVEE_NEXT' if 'BLENDER_EEVEE_NEXT' in [e.identifier for e in bpy.types.RenderSettings.bl_rna.properties['engine'].enum_items] else 'BLENDER_EEVEE'
    sc.render.resolution_x = sc.render.resolution_y = 520
    w = bpy.data.worlds.new('w'); w.use_nodes = True
    w.node_tree.nodes['Background'].inputs[0].default_value = (0.95, 0.94, 0.92, 1)
    sc.world = w
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    sc.collection.objects.link(cam)
    cam.data.type = 'ORTHO'
    cam.data.ortho_scale = 1.6
    cam.location = (2.2, -2.2, 2.0)
    cam.rotation_euler = (math.radians(60), 0, math.radians(45))
    sc.camera = cam
    zon = bpy.data.objects.new('zon', bpy.data.lights.new('zon', 'SUN'))
    zon.data.energy = 3.5
    zon.rotation_euler = (math.radians(45), math.radians(15), math.radians(30))
    sc.collection.objects.link(zon)
    sc.render.filepath = os.path.join(OUT, naam + '.png')
    bpy.ops.render.render(write_still=True)


# ───────────────────────────── bouwdroger ─────────────────────────────
# Witte kast op een zwart buizenframe met twee grote wielen achteraan; voorkant met
# bedieningspaneel, logo, zwart rooster rechts en de opvangbak onderaan.
def droger(naam, s):
    leeg()
    B, D, Hk = 0.40 * s, 0.36 * s, 0.62 * s     # kast
    z0 = 0.14                                   # onderkant kast
    delen = []
    delen.append(blok(WIT(), -B / 2, B / 2, -D / 2, D / 2, z0, z0 + Hk, bevel=0.012))
    # voorkant (-Y): paneel, logo, rooster, bak
    yv = -D / 2 - 0.004
    delen.append(blok(SCHERM(), -B / 2 + 0.03, -B / 2 + 0.03 + 0.12 * s, yv, yv + 0.006, z0 + Hk - 0.13, z0 + Hk - 0.06))
    delen.append(blok(ROOD(), -0.035 * s, 0.035 * s, yv - 0.001, yv + 0.005, z0 + Hk - 0.05, z0 + Hk - 0.025))
    delen.append(blok(ROOSTER(), -B / 2 + 0.17 * s, B / 2 - 0.025, yv, yv + 0.01, z0 + Hk * 0.42, z0 + Hk - 0.04))
    for i in range(7):
        z = z0 + Hk * 0.42 + 0.02 + i * (Hk * 0.5 - 0.06) / 6
        delen.append(blok(ZWART(), -B / 2 + 0.17 * s, B / 2 - 0.025, yv - 0.006, yv, z - 0.004, z + 0.004))
    delen.append(blok(ZWART(), -B / 2 + 0.03, B / 2 - 0.03, yv, yv + 0.012, z0 + 0.03, z0 + Hk * 0.38))
    delen.append(blok(ROOSTER(), -B / 2 + 0.05, B / 2 - 0.05, yv - 0.004, yv, z0 + Hk * 0.3, z0 + Hk * 0.33))
    # zijrooster (rechterzijde, +X)
    delen.append(blok(ROOSTER(), B / 2, B / 2 + 0.006, -D / 2 + 0.05, D / 2 - 0.05, z0 + Hk * 0.45, z0 + Hk - 0.06))
    # buizenframe: twee staanders achteraan met handgreep, onderframe
    r = 0.013
    yb = D / 2 + 0.03
    for x in (-B / 2 - 0.02, B / 2 + 0.02):
        delen.append(buis(BUIS(), (x, yb, 0.10), (x, yb, z0 + Hk + 0.32 * s), r))
        delen.append(buis(BUIS(), (x, yb, 0.10), (x, -D / 2 + 0.02, 0.08), r))
        delen.append(buis(BUIS(), (x, -D / 2 + 0.02, 0.08), (x, -D / 2 + 0.02, z0 + 0.04), r))
    delen.append(buis(BUIS(), (-B / 2 - 0.02, yb, z0 + Hk + 0.32 * s), (B / 2 + 0.02, yb, z0 + Hk + 0.32 * s), r * 1.3))
    delen.append(buis(BUIS(), (-B / 2 - 0.02, -D / 2 + 0.02, 0.08), (B / 2 + 0.02, -D / 2 + 0.02, 0.08), r))
    # wielen achteraan, voetjes vooraan
    rw = 0.11 * min(s, 1.1)
    for x in (-B / 2 - 0.06, B / 2 + 0.06):
        delen.append(wiel(RUBBER(), x, yb - 0.02, rw, rw, 0.05))
        delen.append(wiel(NAAF(), x + (0.027 if x > 0 else -0.027), yb - 0.02, rw, rw * 0.45, 0.006))
    delen.append(buis(BUIS(), (-B / 2 - 0.06, yb - 0.02, rw), (B / 2 + 0.06, yb - 0.02, rw), 0.009))
    for x in (-B / 2 + 0.04, B / 2 - 0.04):
        delen.append(blok(RUBBER(), x - 0.02, x + 0.02, -D / 2 + 0.0, -D / 2 + 0.05, 0.0, 0.08))
    samen(delen, 'romp')
    # LED op het paneel: eigen object, de app laat hem branden
    led = blok(mat('led', srgb('#2bd46a'), 0.3, emit=srgb('#2bd46a')), -B / 2 + 0.03 + 0.13 * s, -B / 2 + 0.03 + 0.15 * s, yv - 0.004, yv, z0 + Hk - 0.11, z0 + Hk - 0.09)
    led.name = 'led'
    exporteer(naam)


# ───────────────────────────── ventilator ─────────────────────────────
# Vierkante witte behuizing met een rond gat, rooster met ringen en spaken,
# zes zwarte wieken met een rode naaf, op een zwart buizenonderstel.
def ventilator():
    leeg()
    Z = 0.46            # middelpunt van de schijf
    Wd, Dd = 0.56, 0.22
    R = 0.245
    delen = []
    # behuizing = blok min cilinder
    kast = blok(WIT(), -Wd / 2, Wd / 2, -Dd / 2, Dd / 2, Z - Wd / 2, Z + Wd / 2, bevel=0.02)
    bpy.ops.mesh.primitive_cylinder_add(vertices=48, radius=R, depth=Dd * 2, location=(0, 0, Z), rotation=(math.pi / 2, 0, 0))
    gat = bpy.context.object
    mod = kast.modifiers.new('gat', 'BOOLEAN')
    mod.object = gat
    mod.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = kast
    bpy.ops.object.modifier_apply(modifier=mod.name)
    bpy.data.objects.remove(gat)
    delen.append(kast)
    # binnenring (zwart) zodat het gat diepte heeft
    bpy.ops.mesh.primitive_cylinder_add(vertices=48, radius=R, depth=Dd * 0.96, location=(0, 0, Z), rotation=(math.pi / 2, 0, 0))
    ring = bpy.context.object
    bm = bmesh.new(); bm.from_mesh(ring.data)
    # de rotatie is nog niet toegepast: de deksels liggen in lokale Z
    for f in [f for f in bm.faces if abs(f.normal.z) > 0.9]:
        bm.faces.remove(f)
    bmesh.ops.reverse_faces(bm, faces=bm.faces[:])
    bm.to_mesh(ring.data); bm.free()
    delen.append(toewijzen(ring, mat('binnen', srgb('#cfcdc8'), 0.6)))
    # roosters voor en achter: ringen + spaken
    for y in (-Dd / 2 + 0.01, Dd / 2 - 0.01):
        for rr in (R * 0.33, R * 0.55, R * 0.77, R * 0.98):
            bpy.ops.mesh.primitive_torus_add(major_radius=rr, minor_radius=0.0035, major_segments=32, minor_segments=4,
                                             location=(0, y, Z), rotation=(math.pi / 2, 0, 0))
            delen.append(toewijzen(bpy.context.object, ROOSTER()))
        for i in range(12):
            a = i * math.pi / 6
            delen.append(buis(ROOSTER(), (math.cos(a) * R * 0.12, y, Z + math.sin(a) * R * 0.12),
                              (math.cos(a) * R * 0.99, y, Z + math.sin(a) * R * 0.99), 0.003, 6))
    # logo bovenaan en draagbeugel
    delen.append(blok(ROOD(), -Wd / 2 + 0.03, -Wd / 2 + 0.07, -Dd / 2 - 0.004, -Dd / 2, Z + Wd / 2 - 0.055, Z + Wd / 2 - 0.03))
    delen.append(buis(BUIS(), (-0.09, 0, Z + Wd / 2 + 0.04), (0.09, 0, Z + Wd / 2 + 0.04), 0.012))
    for x in (-0.09, 0.09):
        delen.append(buis(BUIS(), (x, 0, Z + Wd / 2), (x, 0, Z + Wd / 2 + 0.04), 0.012))
    # onderstel: twee poten die schuin uitlopen, met voetbuis
    for x in (-Wd / 2 - 0.015, Wd / 2 + 0.015):
        delen.append(buis(BUIS(), (x, 0, Z), (x, -0.13, 0.015), 0.013))
        delen.append(buis(BUIS(), (x, 0, Z), (x, 0.13, 0.015), 0.013))
        delen.append(buis(BUIS(), (x, -0.15, 0.015), (x, 0.15, 0.015), 0.013))
        delen.append(wiel(NAAF(), x, 0, Z, 0.03, 0.03))
    samen(delen, 'romp')
    # wieken: eigen object rond de as
    w = []
    for i in range(6):
        a = i * math.pi / 3
        bpy.ops.mesh.primitive_cube_add(size=1)
        bl = bpy.context.object
        bl.scale = (R * 0.78, 0.008, 0.075)
        bl.location = (math.cos(a) * R * 0.5, 0, math.sin(a) * R * 0.5)
        bl.rotation_euler = (0, -a, 0)
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        # wiek iets gedraaid voor een propellerprofiel
        bl.rotation_euler = (0, 0, 0)
        w.append(toewijzen(bl, ZWART()))
    bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=0.05, depth=0.05, location=(0, 0, 0), rotation=(math.pi / 2, 0, 0))
    w.append(toewijzen(bpy.context.object, ROOD()))
    wieken = samen(w, 'wieken')
    wieken.location = (0, -0.01, Z)
    exporteer('ventilator')


# ───────────────────────────── kachel ─────────────────────────────
# Witte kubus met een zwarte bovenkap en een rond zwart rooster vooraan; achter het
# rooster een gloeiende schijf ("gloed").
def kachel():
    leeg()
    B, H = 0.36, 0.42
    delen = [blok(WIT(), -B / 2, B / 2, -B / 2, B / 2, 0.03, H, bevel=0.015)]
    delen.append(blok(ZWART(), -B / 2 - 0.004, B / 2 + 0.004, -B / 2 - 0.004, B / 2 + 0.004, H - 0.06, H + 0.01, bevel=0.01))
    delen.append(blok(ZWART(), -0.1, 0.1, -0.05, 0.05, H + 0.01, H + 0.04, bevel=0.008))
    bpy.ops.mesh.primitive_cylinder_add(vertices=40, radius=0.13, depth=0.06, location=(0.02, -B / 2 - 0.02, 0.2), rotation=(math.pi / 2, 0, 0))
    delen.append(toewijzen(bpy.context.object, ZWART()))
    for i in range(-3, 4):
        delen.append(blok(ROOSTER(), 0.02 + i * 0.034 - 0.003, 0.02 + i * 0.034 + 0.003, -B / 2 - 0.056, -B / 2 - 0.05, 0.09, 0.31))
        delen.append(blok(ROOSTER(), -0.11, 0.15, -B / 2 - 0.056, -B / 2 - 0.05, 0.2 + i * 0.034 - 0.003, 0.2 + i * 0.034 + 0.003))
    delen.append(blok(ROOD(), -B / 2 + 0.03, -B / 2 + 0.09, -B / 2 - 0.004, -B / 2, H - 0.13, H - 0.09))
    for x in (-B / 2 + 0.04, B / 2 - 0.04):
        for y in (-B / 2 + 0.04, B / 2 - 0.04):
            delen.append(blok(RUBBER(), x - 0.015, x + 0.015, y - 0.015, y + 0.015, 0, 0.03))
    samen(delen, 'romp')
    bpy.ops.mesh.primitive_cylinder_add(vertices=40, radius=0.115, depth=0.004, location=(0.02, -B / 2 - 0.045, 0.2), rotation=(math.pi / 2, 0, 0))
    g = toewijzen(bpy.context.object, mat('gloed', srgb('#3a1a10'), 0.6, emit=srgb('#ff6a1a')))
    g.name = 'gloed'
    exporteer('kachel')


droger('droger-small', 1.0)
droger('droger-medium', 1.18)
ventilator()
kachel()
