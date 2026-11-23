# Naadloze materiaaltegels voor de 3D-droogsimulator, gerenderd in Blender (Cycles, recht
# van boven, orthografisch). Elke tegel is periodiek gebouwd: wat over de rand valt staat
# er een periode verder nog eens, met dezelfde willekeur, zodat de tegel naadloos herhaalt.
#
#   Blender -b -P scripts/simulator-3d/texturen.py -- <uitmap> [naam ...]
#
# Zonder namen worden alle tegels gemaakt. Uitvoer: <naam>.png. Daarna naar webp:
#   scripts/simulator-3d/normaliseer.sh <uitmap>   (helderheid en contrast op doel, dan -v2.webp)
# baksteen.webp komt uit de keldersimulator van Vernast (bricks.webp, zelfde Blender-reeks).
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


def detail(naam, T, schaal, laag, hoog, px=256, ribbels=0.0, band=(0.0, 1.0), grijs=False):
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
    # Noise sits around 0.5: a narrow band turns it into distinct patches.
    ramp.color_ramp.elements[0].position, ramp.color_ramp.elements[1].position = band
    l.new(grof.outputs['Fac'], ramp.inputs[0])
    # Grove vlekken plus fijne korrel: de korrel draagt ook het reliëf (bumpMap in three).
    fijn = torus_ruis(n, l, tc.outputs['Object'], T, T, schaal * 8, detail=4)
    korrel = n.new('ShaderNodeMix'); korrel.data_type = 'RGBA'; korrel.blend_type = 'OVERLAY'
    korrel.inputs['Factor'].default_value = 0.35 + ribbels
    l.new(ramp.outputs['Color'], rgba(korrel.inputs, 'A')); l.new(fijn.outputs['Fac' if grijs else 'Color'], rgba(korrel.inputs, 'B'))
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


def tegelvloer():
    """Grijze keramische vloertegels van 60 × 60 cm met een voeg van 3 mm, recht gelegd.
    Elke tegel een tikje anders van tint, zoals een echte partij."""
    TB, N = 0.6, 4
    P = TB * N
    sc = nieuwe_scene(P, P, 200, samples=32)
    vlak(sc, P, P, mat('voeg', (0.32, 0.32, 0.31), 0.9)).location.z = -0.004
    tegel = mat('tegel', (0.56, 0.57, 0.58), rough=0.3, coat=0.15)
    n = tegel.node_tree.nodes; l = tegel.node_tree.links
    b = n['Principled BSDF']
    tc = n.new('ShaderNodeTexCoord')
    wolk = torus_ruis(n, l, tc.outputs['Object'], P, P, 3, detail=5)
    ramp = n.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].color = (0.5, 0.51, 0.52, 1)
    ramp.color_ramp.elements[1].color = (0.6, 0.61, 0.62, 1)
    l.new(wolk.outputs['Fac'], ramp.inputs[0]); l.new(ramp.outputs['Color'], b.inputs['Base Color'])
    object_variatie(tegel, 0.05)
    rnd = random.Random(7)
    tint = {(c, r): rnd.random() for c in range(N) for r in range(N)}

    def maak(dx, dy):
        for c in range(N):
            for r in range(N):
                ob = blok(f't-{c}-{r}', dx + c * TB + TB / 2, dy + r * TB + TB / 2, 0, TB - 0.003, TB - 0.003, 0.008, tegel, bevel=0.0012)
                ob['v'] = tint[(c, r)]
    periodiek(sc, P, P, maak)
    render(sc, 'tegelvloer')



# ─────────────────────── tweede reeks (23-11-2026) ───────────────────────
# De eerste detailtegels waren bijna effen (chape, pleister, verf: standaardafwijking
# onder 0,5 %) en de natte tegels toonden één grote wolk per periode, die je in de woning
# als camouflage zag herhalen. Deze reeks heeft hoogte (korrel, spaansporen, granulaat)
# onder strijklicht, en kleinere, zachtere vlekken. Helderheid en contrast worden daarna
# op hun doel gezet (normaliseer.sh), zodat three.js ze met dezelfde kleuren
# uit materiaal.ts kan blijven vermenigvuldigen.

def ruis(n, l, tc, T, schaal, detail=4, rough=0.55, vervorm=0.0):
    # Wereldpositie, niet Object: `vlak()` schaalt een vlak van 1 m op, dus in objectruimte
    # is de tegel 1/T lang en loopt de torus niet rond (zichtbare naad, ook in de eerste reeks).
    pos = n.new('ShaderNodeNewGeometry')
    nz = torus_ruis(n, l, pos.outputs['Position'], T, T, schaal, detail=detail, rough=rough)
    nz.inputs['Distortion'].default_value = vervorm
    return nz.outputs['Fac']


def som(n, l, delen):
    """Σ gewicht × invoer; `delen` = [(socket, gewicht), ...]."""
    acc = None
    for s_, w in delen:
        m = n.new('ShaderNodeMath'); m.operation = 'MULTIPLY'; m.inputs[1].default_value = w
        l.new(s_, m.inputs[0])
        if acc is None:
            acc = m.outputs[0]
        else:
            a = n.new('ShaderNodeMath'); a.operation = 'ADD'
            l.new(acc, a.inputs[0]); l.new(m.outputs[0], a.inputs[1]); acc = a.outputs[0]
    return acc


def strijklicht(sc, energie=1.6):
    """Een lage zon over het vlak: korrel en spaansporen krijgen schaduw. De richting
    verdwijnt in de normalisatie grotendeels; wat blijft is reliëf."""
    for o in [o for o in sc.objects if o.type == 'LIGHT']:
        bpy.data.objects.remove(o)
    zon = bpy.data.lights.new('strijk', 'SUN'); zon.energy = energie; zon.angle = math.radians(6)
    so = bpy.data.objects.new('strijk', zon); sc.collection.objects.link(so)
    so.rotation_euler = (math.radians(64), 0, math.radians(35))
    sc.world.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.35


def oppervlak(naam, T, px, kleur, hoogte, bump=0.5, afstand=0.004, rough=0.85, samples=64):
    """Vlakke tegel met een albedo-socket `kleur` en een hoogte-socket `hoogte`."""
    sc = nieuwe_scene(T, T, px, samples=samples)
    m = mat(naam, (0.8, 0.8, 0.8), rough=rough)
    n = m.node_tree.nodes; l = m.node_tree.links; b = n['Principled BSDF']
    tc = n.new('ShaderNodeTexCoord')
    l.new(kleur(n, l, tc), b.inputs['Base Color'])
    bp = n.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = bump; bp.inputs['Distance'].default_value = afstand
    l.new(hoogte(n, l, tc), bp.inputs['Height']); l.new(bp.outputs['Normal'], b.inputs['Normal'])
    vlak(sc, T, T, m)
    strijklicht(sc)
    render(sc, naam)


def grijs_ramp(n, l, fac, laag, hoog, pos=(0.3, 0.7)):
    r = n.new('ShaderNodeValToRGB')
    r.color_ramp.elements[0].position, r.color_ramp.elements[1].position = pos
    r.color_ramp.elements[0].color = (laag, laag, laag, 1); r.color_ramp.elements[1].color = (hoog, hoog, hoog, 1)
    l.new(fac, r.inputs[0])
    return r.outputs['Color']


def chape2():
    """Zandcementchape, afgereid: fijne zandkorrel, de bogen van de spaan, een paar
    plekken die iets langer nat bleven."""
    T = 1.0
    oppervlak('chape', T, 768,
              lambda n, l, tc: grijs_ramp(n, l, som(n, l, [(ruis(n, l, tc, T, 2.5, 5), 0.6), (ruis(n, l, tc, T, 260, 2), 0.4)]), 0.62, 0.9),
              lambda n, l, tc: som(n, l, [(ruis(n, l, tc, T, 260, 2, 0.7), 1.0), (ruis(n, l, tc, T, 4, 3, 0.5, 3.0), 0.6)]),
              bump=0.45, afstand=0.003)


def pleister2():
    """Gipspleister, gesmoord: haast wit, alleen de zachte zwaai van de spaan en een
    fijne korrel (zelfde opbouw als pleister.py van de vochtsimulator)."""
    T = 1.5
    oppervlak('pleister', T, 512,
              lambda n, l, tc: grijs_ramp(n, l, ruis(n, l, tc, T, 2, 4), 0.86, 0.95),
              lambda n, l, tc: som(n, l, [(ruis(n, l, tc, T, 1.8, 4, 0.55, 1.2), 0.35), (ruis(n, l, tc, T, 70, 3, 0.6), 1.0)]),
              bump=0.5, afstand=0.006, rough=0.92)


def verf2():
    """Muurverf met de rol: een fijne sinaasappelhuid, verder egaal."""
    T = 1.0
    oppervlak('verf', T, 512,
              lambda n, l, tc: grijs_ramp(n, l, ruis(n, l, tc, T, 3, 3), 0.9, 0.96),
              lambda n, l, tc: ruis(n, l, tc, T, 160, 2, 0.5),
              bump=0.25, afstand=0.002, rough=0.7)


def pleisternat2():
    """Pas gepleisterd: donkere natte vlekken die van de randen af opdrogen, kleiner en
    zachter dan de eerste reeks, met de korrel van het pleister erdoor."""
    T = 2.0

    def kleur(n, l, tc):
        vlek = som(n, l, [(ruis(n, l, tc, T, 1.6, 5, 0.6, 0.6), 0.75), (ruis(n, l, tc, T, 5, 3), 0.25)])
        return grijs_ramp(n, l, vlek, 0.55, 0.95, pos=(0.3, 0.7))
    oppervlak('pleisternat', T, 384, kleur,
              lambda n, l, tc: som(n, l, [(ruis(n, l, tc, T, 1.8, 4, 0.55, 1.2), 0.35), (ruis(n, l, tc, T, 60, 3, 0.6), 1.0)]),
              bump=0.45, afstand=0.006, rough=0.9)


def vloerplaat2():
    """Ruwe betonnen vloerplaat in de ruwbouw: granulaat in het oppervlak, een wolkerige
    grijstint en plassen regenwater die langzaam opdrogen."""
    T = 2.0

    def kleur(n, l, tc):
        beton = grijs_ramp(n, l, som(n, l, [(ruis(n, l, tc, T, 3, 5), 0.7), (ruis(n, l, tc, T, 120, 2), 0.5)]), 0.55, 0.92)
        nat = grijs_ramp(n, l, som(n, l, [(ruis(n, l, tc, T, 1.5, 6, 0.6, 0.3), 0.8), (ruis(n, l, tc, T, 8, 3), 0.2)]), 0, 1, pos=(0.36, 0.66))
        mix = n.new('ShaderNodeMix'); mix.data_type = 'RGBA'; mix.blend_type = 'MULTIPLY'
        l.new(beton, rgba(mix.inputs, 'A')); rgba(mix.inputs, 'B').default_value = (0.68, 0.68, 0.68, 1)
        # Waar de ruis laag is staat er nog water: daar de ramp gekeerd als factor.
        inv = n.new('ShaderNodeInvert'); l.new(nat, inv.inputs['Color'])
        l.new(inv.outputs[0], mix.inputs['Factor'])
        return rgba(mix.outputs, 'Result')
    oppervlak('vloerplaat', T, 384, kleur,
              lambda n, l, tc: som(n, l, [(ruis(n, l, tc, T, 120, 2, 0.7), 1.0), (ruis(n, l, tc, T, 6, 3), 0.4)]),
              bump=0.5, afstand=0.004, rough=0.9)


def grind2():
    """Dakgrind 8/16, dicht gestort: twee lagen kiezels zodat de bodem nergens doorschijnt,
    elke kiezel een eigen tint."""
    T = 0.5
    sc = nieuwe_scene(T, T, 1024, samples=48)
    vlak(sc, T, T, mat('bodem', (0.2, 0.19, 0.18), 0.9))
    rnd = random.Random(31)
    kleuren = ((0.36, 0.35, 0.33), (0.47, 0.45, 0.42), (0.27, 0.26, 0.25), (0.55, 0.52, 0.47), (0.42, 0.38, 0.33))
    tinten = []
    for i, c in enumerate(kleuren):
        k = mat(f'k{i}', c, 0.6)
        object_variatie(k, 0.18)
        tinten.append(k)
    vormen = []
    for i in range(6):
        me = bpy.data.meshes.new(f'kiezel-{i}')
        bm = bmesh.new(); bmesh.ops.create_icosphere(bm, subdivisions=3, radius=1)
        for v in bm.verts:
            v.co *= rnd.uniform(0.85, 1.15)
        bm.to_mesh(me); bm.free()
        for p in me.polygons:
            p.use_smooth = True
        vormen.append(me)
    kiezels = []
    for laag, aantal in ((0, 2600), (1, 2200)):
        for _ in range(aantal):
            r = rnd.uniform(0.004, 0.0075)
            kiezels.append((rnd.uniform(0, T), rnd.uniform(0, T), r, laag, rnd.randrange(len(vormen)), rnd.randrange(len(tinten)), rnd.random(), rnd.uniform(0, 6.28), rnd.uniform(-0.4, 0.4)))

    def maak(dx, dy):
        for i, (x, y, r, laag, v, t, var, a, kant) in enumerate(kiezels):
            if not (-0.02 < x + dx < T + 0.02 and -0.02 < y + dy < T + 0.02):
                continue
            me = vormen[v].copy(); me.materials.append(tinten[t])
            ob = bpy.data.objects.new(f'kiezel-{i}', me); sc.collection.objects.link(ob)
            ob['v'] = var
            ob.location = (x + dx, y + dy, r * 0.35 + laag * 0.004)
            ob.scale = (r * 1.35, r, r * 0.65); ob.rotation_euler = (kant, 0, a)
    periodiek(sc, T, T, maak)
    render(sc, 'grind')


def parket2():
    """Eiken planken met de houttekening van parket.py uit de vochtsimulator: lange
    draad, poriën en een zachte vlam, in wild verband."""
    PB, COLS, PL = 0.18, 8, 1.2
    PW, PH = PB * COLS, PL * 2
    sc = nieuwe_scene(PW, PH, 480, samples=48)
    vlak(sc, PW, PH, mat('voeg', (0.1, 0.07, 0.045), 0.7)).location.z = -0.01
    rnd = random.Random(5)

    def lin(*c):
        return tuple(v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c)

    def eik(k):
        m = bpy.data.materials.new(f'eik-{k}'); m.use_nodes = True
        n = m.node_tree.nodes; l = m.node_tree.links; b = n['Principled BSDF']
        toon = rnd.uniform(0.92, 1.06)
        licht = lin(*(min(1, c * toon) for c in (0.78, 0.62, 0.44)))
        donker = lin(*(c * toon for c in (0.52, 0.38, 0.25)))
        tc = n.new('ShaderNodeTexCoord')
        mp = n.new('ShaderNodeMapping'); mp.inputs['Scale'].default_value = (70, 2.2, 1)
        mp.inputs['Location'].default_value = (rnd.uniform(0, 50), rnd.uniform(0, 50), 0)
        l.new(tc.outputs['Object'], mp.inputs['Vector'])
        draad = n.new('ShaderNodeTexNoise'); draad.inputs['Scale'].default_value = 1.0; draad.inputs['Detail'].default_value = 6
        draad.inputs['Roughness'].default_value = 0.62; draad.inputs['Distortion'].default_value = 0.4
        l.new(mp.outputs[0], draad.inputs['Vector'])
        pm = n.new('ShaderNodeMapping'); pm.inputs['Scale'].default_value = (300, 40, 1)
        l.new(mp.outputs[0], pm.inputs['Vector'])
        porie = n.new('ShaderNodeTexNoise'); porie.inputs['Scale'].default_value = 1; porie.inputs['Detail'].default_value = 2
        l.new(pm.outputs[0], porie.inputs['Vector'])
        vlam = n.new('ShaderNodeTexNoise'); vlam.inputs['Scale'].default_value = 3; vlam.inputs['Detail'].default_value = 3
        l.new(mp.outputs[0], vlam.inputs['Vector'])
        h = som(n, l, [(draad.outputs['Fac'], 0.6), (vlam.outputs['Fac'], 0.16), (porie.outputs['Fac'], 0.25)])
        cr = n.new('ShaderNodeValToRGB')
        cr.color_ramp.elements[0].position = 0.38; cr.color_ramp.elements[0].color = (*licht, 1)
        cr.color_ramp.elements[1].position = 0.78; cr.color_ramp.elements[1].color = (*donker, 1)
        l.new(h, cr.inputs[0]); l.new(cr.outputs[0], b.inputs['Base Color'])
        b.inputs['Roughness'].default_value = 0.42; b.inputs['Coat Weight'].default_value = 0.2
        bp = n.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = 0.15; bp.inputs['Distance'].default_value = 0.001
        l.new(h, bp.inputs['Height']); l.new(bp.outputs[0], b.inputs['Normal'])
        return m

    # Planken van 0,8 tot 1,6 m, per kolom vanaf een eigen start tot de periode vol is. Twee
    # planken per kolom op een halve verschuiving las in de woning als een visgraat die elke
    # 1,4 m terugkwam. Een plank die over de rand loopt staat er via `periodiek` een periode
    # verder nog eens; binnen een kolom raken de planken elkaar nooit dubbel.
    planken = []
    for c in range(COLS):
        y = rnd.uniform(0, PH); eind = y + PH
        while y < eind - 0.05:
            L = min(rnd.choice((0.8, 1.2, 1.6)), eind - y)
            planken.append((c, (y + L / 2) % PH, L))
            y += L
    # Tien houtsoorten: elk een eigen stuk stam (de Location-verschuiving in de mapping).
    hout = [eik(k) for k in range(10)]
    keuze = [rnd.randrange(len(hout)) for _ in planken]

    def maak(dx, dy):
        for i, (c, yc, L) in enumerate(planken):
            blok(f'plank-{i}', dx + c * PB + PB / 2, dy + yc, 0, PB - 0.002, L - 0.002, 0.01, hout[keuze[i]], bevel=0.0015)
    periodiek(sc, PW, PH, maak)
    render(sc, 'parket')


def tegelvloer2():
    """Grijze keramische tegels 60 × 60 cm zoals de eerste reeks, nu met een steenachtige
    wolk en spikkel per tegel, een afgeronde rand en een fractie van een millimeter
    hoogteverschil (zoals tegelvloer.py van de vochtsimulator)."""
    TB, N = 0.6, 4
    P = TB * N
    sc = nieuwe_scene(P, P, 320, samples=48)
    vlak(sc, P, P, mat('voeg', (0.3, 0.3, 0.29), 0.95)).location.z = -0.004
    rnd = random.Random(7)

    def tegel(k):
        t = rnd.uniform(0.95, 1.05)
        basis = tuple(c * t for c in (0.5, 0.51, 0.52))
        m = mat(f'tegel-{k}', basis, rough=0.3, coat=0.15)
        n = m.node_tree.nodes; l = m.node_tree.links; b = n['Principled BSDF']
        tc = n.new('ShaderNodeTexCoord')
        mp = n.new('ShaderNodeMapping'); mp.inputs['Location'].default_value = (rnd.uniform(0, 40), rnd.uniform(0, 40), 0)
        l.new(tc.outputs['Object'], mp.inputs['Vector'])
        wolk = n.new('ShaderNodeTexNoise'); wolk.inputs['Scale'].default_value = 4; wolk.inputs['Detail'].default_value = 8
        wolk.inputs['Roughness'].default_value = 0.6; l.new(mp.outputs[0], wolk.inputs['Vector'])
        spik = n.new('ShaderNodeTexNoise'); spik.inputs['Scale'].default_value = 90; spik.inputs['Detail'].default_value = 2
        l.new(mp.outputs[0], spik.inputs['Vector'])
        h = som(n, l, [(wolk.outputs['Fac'], 1.0), (spik.outputs['Fac'], 0.3)])
        cr = n.new('ShaderNodeValToRGB')
        cr.color_ramp.elements[0].position = 0.45; cr.color_ramp.elements[0].color = (*[c * 0.9 for c in basis], 1)
        cr.color_ramp.elements[1].position = 0.95; cr.color_ramp.elements[1].color = (*[min(1, c * 1.1) for c in basis], 1)
        l.new(h, cr.inputs[0]); l.new(cr.outputs[0], b.inputs['Base Color'])
        return m

    mats = [tegel(k) for k in range(6)]
    keuze = {(c, r): (rnd.randrange(len(mats)), rnd.uniform(-0.0012, 0.0012), rnd.uniform(-0.0012, 0.0012)) for c in range(N) for r in range(N)}

    def maak(dx, dy):
        for c in range(N):
            for r in range(N):
                k, tx, ty = keuze[(c, r)]
                blok(f't-{c}-{r}', dx + c * TB + TB / 2, dy + r * TB + TB / 2, 0, TB - 0.004, TB - 0.004, 0.008, mats[k], rot=(tx, ty, 0), bevel=0.0025)
    periodiek(sc, P, P, maak)
    render(sc, 'tegelvloer')


TEGELS = {
    'dakpannen': dakpannen,
    'arduin': arduin,
    'pleister': pleister2,
    'chape': chape2,
    'parket': parket2,
    'grind': grind2,
    # Bouwfasen (stap 4): dezelfde detailtegel-aanpak, three.js kleurt ze per fase.
    # Ruwe vloerplaat: grote natte vlekken van regenwater.
    'vloerplaat': vloerplaat2,
    # Vers pleisterwerk: natte en drogere plekken door elkaar.
    'pleisternat': pleisternat2,
    # Geschilderd: bijna egaal, met de korrel van de rol.
    'verf': verf2,
    'tegelvloer': tegelvloer2,
}
for naam, f in TEGELS.items():
    if not WANT or naam in WANT:
        f()
print('TEXTUREN OK')
