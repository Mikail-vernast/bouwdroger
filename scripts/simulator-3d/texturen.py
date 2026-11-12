# Naadloze materiaaltegels voor de 3D-droogsimulator, gerenderd in Blender (Cycles, recht
# van boven, orthografisch). Elke tegel is periodiek gebouwd: wat over de rand valt staat
# er een periode verder nog eens, met dezelfde willekeur, zodat de tegel naadloos herhaalt.
#
#   Blender -b -P scripts/simulator-3d/texturen.py -- <uitmap> [naam ...]
#
# Zonder namen worden alle tegels gemaakt. Uitvoer: <naam>.png. Daarna naar webp:
#   for f in <uitmap>/*.png; do cwebp -q 82 "$f" -o public/simulator/3d/$(basename "${f%.png}").webp; done
# baksteen(-nat).webp en gras.webp komen uit de keldersimulator van Vernast (zelfde Blender-reeks).
#
# De lichtopstelling is bewust vlak (veel hemel, weinig zon): de tegel draagt kleur,
# reliëf en contactschaduw, de richting van het licht komt pas in three.js.
import bpy, bmesh, math, os, random, sys

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
OUT = argv[0] if argv else '/tmp/sim3d'
WANT = set(argv[1:])
os.makedirs(OUT, exist_ok=True)


# ───────────────────────────── scène ─────────────────────────────

def nieuwe_scene(pw, ph, px_per_m, samples=48):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene
    sc.render.engine = 'CYCLES'
    sc.cycles.samples = samples
    sc.cycles.use_denoising = True
    sc.cycles.device = 'CPU'
    sc.render.resolution_x = round(pw * px_per_m)
    sc.render.resolution_y = round(ph * px_per_m)
    sc.render.resolution_percentage = 100
    sc.render.film_transparent = False
    sc.view_settings.view_transform = 'Standard'
    sc.render.image_settings.file_format = 'PNG'
    sc.render.image_settings.color_mode = 'RGB'
    world = bpy.data.worlds.new('w'); world.use_nodes = True; sc.world = world
    bg = world.node_tree.nodes['Background']
    bg.inputs['Color'].default_value = (1, 1, 1, 1); bg.inputs['Strength'].default_value = 0.6
    cam = bpy.data.cameras.new('cam'); cam.type = 'ORTHO'; cam.ortho_scale = max(pw, ph)
    co = bpy.data.objects.new('cam', cam); sc.collection.objects.link(co)
    co.location = (pw / 2, ph / 2, 5); sc.camera = co
    # Een zachte zon schuin van boven: genoeg om reliëf te tonen, niet genoeg om een
    # richting in de tegel te bakken.
    sun = bpy.data.lights.new('zon', 'SUN'); sun.energy = 0.5; sun.angle = math.radians(25)
    so = bpy.data.objects.new('zon', sun); sc.collection.objects.link(so)
    so.rotation_euler = (math.radians(25), 0, math.radians(30))
    return sc


def render(sc, naam):
    sc.render.filepath = os.path.join(OUT, f'{naam}.png')
    bpy.ops.render.render(write_still=True)
    print('GESCHREVEN', sc.render.filepath, sc.render.resolution_x, sc.render.resolution_y)


def mat(naam, kleur, rough=0.6, metal=0.0, coat=0.0):
    m = bpy.data.materials.new(naam); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*kleur, 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    if coat:
        b.inputs['Coat Weight'].default_value = coat
    return m


def rgba(sockets, naam):
    return next(s for s in sockets if s.name == naam and s.type == 'RGBA')


def als_kleur(m, kleur):
    """Toont de kleur zelf, zonder licht (Emission): voor vlakke materialen is dat precies
    het albedo dat three.js nodig heeft — belichting erbij zou alleen overbelichten."""
    n = m.node_tree.nodes; l = m.node_tree.links
    e = n.new('ShaderNodeEmission'); e.inputs['Strength'].default_value = 1.0
    l.new(kleur, e.inputs['Color'])
    l.new(e.outputs[0], n['Material Output'].inputs['Surface'])


def torus_ruis(n, l, coord, pw, ph, schaal, detail=6, rough=0.55):
    """4D-ruis op een torus: x en y lopen elk rond, dus de ruis herhaalt precies per pw × ph.
    `schaal` ≈ het aantal ruisvlekken per meter."""
    sep = n.new('ShaderNodeSeparateXYZ'); l.new(coord, sep.inputs[0])
    uit = []
    for as_, p in (('X', pw), ('Y', ph)):
        ang = n.new('ShaderNodeMath'); ang.operation = 'MULTIPLY'; ang.inputs[1].default_value = 2 * math.pi / p
        l.new(sep.outputs[as_], ang.inputs[0])
        r = p * schaal / (2 * math.pi)
        for op in ('COSINE', 'SINE'):
            f = n.new('ShaderNodeMath'); f.operation = op; l.new(ang.outputs[0], f.inputs[0])
            m = n.new('ShaderNodeMath'); m.operation = 'MULTIPLY'; m.inputs[1].default_value = r
            l.new(f.outputs[0], m.inputs[0]); uit.append(m.outputs[0])
    c = n.new('ShaderNodeCombineXYZ')
    for i, k in enumerate('XYZ'):
        l.new(uit[i], c.inputs[k])
    nz = n.new('ShaderNodeTexNoise'); nz.noise_dimensions = '4D'
    nz.inputs['Scale'].default_value = 1.0
    nz.inputs['Detail'].default_value = detail
    nz.inputs['Roughness'].default_value = rough
    l.new(c.outputs[0], nz.inputs['Vector']); l.new(uit[3], nz.inputs['W'])
    return nz


def vlak(sc, pw, ph, m):
    """Een vlak dat de tegel precies vult, plus een rand erbuiten tegen zwarte randen."""
    bpy.ops.mesh.primitive_plane_add(size=1, location=(pw / 2, ph / 2, 0))
    ob = bpy.context.object; ob.scale = (pw * 1.02, ph * 1.02, 1)
    ob.data.materials.append(m)
    return ob


def periodiek(sc, pw, ph, maak):
    """Roept `maak(dx, dy)` op voor de tegel en zijn acht buren: wat over de rand steekt,
    verschijnt zo aan de overkant."""
    for dx in (-pw, 0, pw):
        for dy in (-ph, 0, ph):
            maak(dx, dy)


def blok(naam, x, y, z, sx, sy, sz, m, rot=(0, 0, 0), bevel=0.0):
    me = bpy.data.meshes.new(naam)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    if bevel:
        bmesh.ops.bevel(bm, geom=list(bm.edges), offset=bevel / max(sx, sy, sz), segments=2, affect='EDGES')
    bm.to_mesh(me); bm.free()
    me.materials.append(m)
    ob = bpy.data.objects.new(naam, me); bpy.context.scene.collection.objects.link(ob)
    ob.location = (x, y, z); ob.scale = (sx, sy, sz); ob.rotation_euler = rot
    for p in me.polygons:
        p.use_smooth = True
    return ob


def object_variatie(m, sterkte):
    """Kleur per object een tikje anders via de eigenschap ob['v'] (0–1). Niet via Object
    Info › Random: die verschilt tussen een object en zijn periodieke kopie, en dan zie je
    de naad toch."""
    n = m.node_tree.nodes; l = m.node_tree.links
    b = n['Principled BSDF']
    bron = b.inputs['Base Color'].links[0].from_socket if b.inputs['Base Color'].is_linked else None
    basis = tuple(b.inputs['Base Color'].default_value)
    attr = n.new('ShaderNodeAttribute'); attr.attribute_type = 'OBJECT'; attr.attribute_name = '["v"]'
    mr = n.new('ShaderNodeMapRange')
    mr.inputs['To Min'].default_value = 1 - sterkte; mr.inputs['To Max'].default_value = 1 + sterkte
    l.new(attr.outputs['Fac'], mr.inputs['Value'])
    mix = n.new('ShaderNodeMix'); mix.data_type = 'RGBA'; mix.blend_type = 'MULTIPLY'
    mix.inputs['Factor'].default_value = 1
    if bron is not None:
        l.new(bron, rgba(mix.inputs, 'A'))
    else:
        rgba(mix.inputs, 'A').default_value = basis
    cmb = n.new('ShaderNodeCombineColor')
    for k in ('Red', 'Green', 'Blue'):
        l.new(mr.outputs[0], cmb.inputs[k])
    l.new(cmb.outputs[0], rgba(mix.inputs, 'B'))
    l.new(rgba(mix.outputs, 'Result'), b.inputs['Base Color'])


# ───────────────────────────── tegels ─────────────────────────────

def dakpannen():
    """Antraciet keramische vlakke pannen (het Vlaamse 'Pottelberg'-type), in rechte
    kolommen. De tegel loopt in de V-richting de helling op: elke rij overlapt de vorige
    en zijn onderkant (de lip) ligt hoger, zodat er een schaduwrand onder elke rij valt."""
    BW, BH, COLS, ROWS = 0.27, 0.36, 8, 6
    PW, PH = COLS * BW, ROWS * BH
    sc = nieuwe_scene(PW, PH, 300)
    onder = vlak(sc, PW, PH, mat('onder', (0.01, 0.01, 0.012), 0.8))
    onder.location.z = -0.05
    rnd = random.Random(11)
    kleuren = {}
    for c in range(COLS):
        for r in range(ROWS):
            kleuren[(c, r)] = rnd.random()
    pan = mat('pan', (0.034, 0.036, 0.04), rough=0.38, coat=0.35)
    object_variatie(pan, 0.22)
    hoek = math.atan2(0.022, BH)          # een pan ligt schuin: lip hoger dan de kop

    def maak(dx, dy):
        for c in range(COLS):
            for r in range(ROWS):
                x = dx + c * BW + BW / 2
                y = dy + r * BH + BH * 0.62
                # Lager in de stapel = dieper: de rij erboven ligt over de kop van deze.
                z = 0.02 + r * 0.0005
                ob = blok(f'pan-{c}-{r}', x, y, z, BW - 0.008, BH * 1.35, 0.018, pan, rot=(-hoek, 0, 0), bevel=0.004)
                ob['v'] = kleuren[(c, r)]
                # Felsrib aan de rechterkant van elke pan.
                rib = blok(f'rib-{c}-{r}', x + BW / 2 - 0.012, y, z + 0.012, 0.012, BH * 1.3, 0.012, pan, rot=(-hoek, 0, 0), bevel=0.003)
                rib['v'] = kleuren[(c, r)]
    periodiek(sc, PW, PH, maak)
    render(sc, 'dakpannen')


def arduin():
    """Belgische blauwe hardsteen, gezoet: blauwgrijs met fijne witte crinoïde-spikkels."""
    T = 1.0
    sc = nieuwe_scene(T, T, 320, samples=24)
    m = mat('arduin', (0.08, 0.09, 0.1), rough=0.55)
    n = m.node_tree.nodes; l = m.node_tree.links
    b = n['Principled BSDF']
    tc = n.new('ShaderNodeTexCoord')
    wolk = torus_ruis(n, l, tc.outputs['Object'], T, T, 3, detail=4)
    spik = torus_ruis(n, l, tc.outputs['Object'], T, T, 90, detail=1, rough=0.3)
    ramp = n.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].position = 0.25; ramp.color_ramp.elements[0].color = (0.055, 0.062, 0.072, 1)
    ramp.color_ramp.elements[1].position = 0.75; ramp.color_ramp.elements[1].color = (0.11, 0.12, 0.135, 1)
    l.new(wolk.outputs['Fac'], ramp.inputs[0])
    sp = n.new('ShaderNodeValToRGB')
    sp.color_ramp.elements[0].position = 0.68; sp.color_ramp.elements[0].color = (0, 0, 0, 1)
    sp.color_ramp.elements[1].position = 0.74; sp.color_ramp.elements[1].color = (1, 1, 1, 1)
    l.new(spik.outputs['Fac'], sp.inputs[0])
    mix = n.new('ShaderNodeMix'); mix.data_type = 'RGBA'
    l.new(sp.outputs['Color'], mix.inputs['Factor'])
    l.new(ramp.outputs['Color'], rgba(mix.inputs, 'A'))
    rgba(mix.inputs, 'B').default_value = (0.32, 0.34, 0.36, 1)
    als_kleur(m, rgba(mix.outputs, 'Result'))
    vlak(sc, T, T, m)
    render(sc, 'arduin')


def detail(naam, T, schaal, laag, hoog, px=256, ribbels=0.0):
    """Bijna-witte detailtegel: three.js vermenigvuldigt hem met de kleur uit materiaal.ts,
    zodat dezelfde tegel nat, droog en geschilderd kan zijn."""
    sc = nieuwe_scene(T, T, px, samples=24)
    m = mat(naam, (0.9, 0.9, 0.9), rough=0.8)
    n = m.node_tree.nodes; l = m.node_tree.links
    b = n['Principled BSDF']
    tc = n.new('ShaderNodeTexCoord')
    grof = torus_ruis(n, l, tc.outputs['Object'], T, T, schaal, detail=8, rough=0.6)
    ramp = n.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].color = (laag, laag, laag, 1)
    ramp.color_ramp.elements[1].color = (hoog, hoog, hoog, 1)
    l.new(grof.outputs['Fac'], ramp.inputs[0])
    # Grove vlekken plus fijne korrel: de korrel draagt ook het reliëf (bumpMap in three).
    fijn = torus_ruis(n, l, tc.outputs['Object'], T, T, schaal * 8, detail=4)
    korrel = n.new('ShaderNodeMix'); korrel.data_type = 'RGBA'; korrel.blend_type = 'OVERLAY'
    korrel.inputs['Factor'].default_value = 0.35 + ribbels
    l.new(ramp.outputs['Color'], rgba(korrel.inputs, 'A')); l.new(fijn.outputs['Color'], rgba(korrel.inputs, 'B'))
    als_kleur(m, rgba(korrel.outputs, 'Result'))
    vlak(sc, T, T, m)
    render(sc, naam)


def parket():
    """Eiken planken van 18 cm, halfsteens verspringend, met draad in de lengte."""
    PB, COLS, PL = 0.18, 8, 1.2
    PW, PH = PB * COLS, PL * 2
    sc = nieuwe_scene(PW, PH, 256, samples=32)
    vlak(sc, PW, PH, mat('voeg', (0.12, 0.08, 0.05), 0.7)).location.z = -0.01
    hout = mat('eik', (0.5, 0.34, 0.19), rough=0.45, coat=0.2)
    n = hout.node_tree.nodes; l = hout.node_tree.links
    b = n['Principled BSDF']
    tc = n.new('ShaderNodeTexCoord')
    golf = n.new('ShaderNodeTexWave'); golf.wave_type = 'BANDS'; golf.bands_direction = 'X'
    golf.inputs['Scale'].default_value = 6; golf.inputs['Distortion'].default_value = 6
    golf.inputs['Detail'].default_value = 3
    # De draad loopt langs Y: X van het object (de plank) uitrekken.
    mp = n.new('ShaderNodeMapping'); mp.inputs['Scale'].default_value = (1, 0.12, 1)
    l.new(tc.outputs['Object'], mp.inputs['Vector']); l.new(mp.outputs[0], golf.inputs['Vector'])
    ramp = n.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].color = (0.40, 0.26, 0.14, 1)
    ramp.color_ramp.elements[1].color = (0.58, 0.41, 0.24, 1)
    l.new(golf.outputs['Fac'], ramp.inputs[0])
    l.new(ramp.outputs['Color'], b.inputs['Base Color'])
    object_variatie(hout, 0.12)

    rnd = random.Random(5)
    offsets = [rnd.uniform(0, PL) for _ in range(COLS)]
    tint = {(c, k): rnd.random() for c in range(COLS) for k in range(2)}

    def maak(dx, dy):
        # Twee planken per kolom = precies één periode; de buren vullen de rest aan.
        # Méér planken zou planken exact op elkaar leggen, en dan blokkeert elke plank het
        # licht van zijn tweeling: de hele tegel wordt zwart.
        for c in range(COLS):
            for k in range(2):
                y = dy + offsets[c] + k * PL
                pl = blok(f'plank-{c}-{k}', dx + c * PB + PB / 2, y + PL / 2, 0, PB - 0.003, PL - 0.003, 0.01, hout, bevel=0.0015)
                pl['v'] = tint[(c, k)]
    periodiek(sc, PW, PH, maak)
    render(sc, 'parket')


def grind():
    """Grijs dakgrind (8/16) op een plat dak."""
    T = 0.5
    sc = nieuwe_scene(T, T, 512, samples=32)
    vlak(sc, T, T, mat('bodem', (0.2, 0.2, 0.2), 0.9))
    rnd = random.Random(3)
    kiezels = []
    for i in range(420):
        kiezels.append((rnd.uniform(0, T), rnd.uniform(0, T), rnd.uniform(0.004, 0.009), rnd.random(), rnd.uniform(0, 6.28)))
    tinten = [mat(f'k{i}', c, 0.7) for i, c in enumerate(((0.36, 0.35, 0.33), (0.45, 0.44, 0.41), (0.28, 0.27, 0.26), (0.52, 0.5, 0.46)))]

    def maak(dx, dy):
        for i, (x, y, r, t, a) in enumerate(kiezels):
            if not (-0.02 < x + dx < T + 0.02 and -0.02 < y + dy < T + 0.02):
                continue
            me = bpy.data.meshes.new(f'kiezel-{i}')
            bm = bmesh.new(); bmesh.ops.create_icosphere(bm, subdivisions=2, radius=1)
            bm.to_mesh(me); bm.free()
            me.materials.append(tinten[int(t * len(tinten)) % len(tinten)])
            for p in me.polygons:
                p.use_smooth = True
            ob = bpy.data.objects.new(f'kiezel-{i}', me); sc.collection.objects.link(ob)
            ob.location = (x + dx, y + dy, r * 0.4); ob.scale = (r * 1.3, r, r * 0.7); ob.rotation_euler = (0, 0, a)
    periodiek(sc, T, T, maak)
    render(sc, 'grind')


TEGELS = {
    'dakpannen': dakpannen,
    'arduin': arduin,
    'pleister': lambda: detail('pleister', 1.5, 2.5, 0.84, 0.97, ribbels=0.2),
    'chape': lambda: detail('chape', 1.0, 4, 0.8, 0.96),
    'parket': parket,
    'grind': grind,
}
for naam, f in TEGELS.items():
    if not WANT or naam in WANT:
        f()
print('TEXTUREN OK')
