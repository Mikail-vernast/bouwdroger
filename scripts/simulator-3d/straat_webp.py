"""
Zet een straatrender (straat.py) om naar de webp-sets in public/simulator/straat.

  python3 scripts/simulator-3d/straat_webp.py PNG_MAP WONING BREEDTE HOEK [DOEL_MAP]

Leest {WONING}-b{BREEDTE*10}-{HOEK}-achter.png en -voor.png (HOEK = vl | ar | al) en
schrijft drie maten per laag: groot (2800x2000, zonder achtervoegsel), -klein
(1750x1250) en -mini (875x625). Zelfde codering als de rechtsvoor-sets: achter met
cwebp -m 6 -size (750 / 240 / 68 kB), voor met -q 80 -alpha_q 90 -exact.

De voorlaag wordt eerst bijgeknipt tot de schermomtrek van de hoogste live woning
(dezelfde doos als sorteer_voor in straat.py, plus 1 m marge). Daarbuiten kan de
woning nooit staan en toont de achterlaag exact dezelfde pixels. Uit een achterhoek
staan hele bomen uit de achtertuinen in de voorlaag; zonder deze knip woog het
mini-paar 130 tot 160 kB in plaats van de ~75 kB van de andere sets.

Vereist Pillow en cwebp.
"""
import math
import os
import subprocess
import sys
import tempfile

from PIL import Image, ImageChops, ImageDraw

T, FH, MARGE, SCHAAL = 0.24, 2.9, 1.0, 56.0
WONINGEN = {"rijwoning": 10, "halfopen": 10, "open": 11}  # diepte l, zoals straat.py
HOEKEN = {"vl": -90, "ar": 90, "al": 180}
MATEN = {"": (2800, 2000), "-klein": (1750, 1250), "-mini": (875, 625)}
ACHTER_BUDGET = {"": 750000, "-klein": 240000, "-mini": 68000}


def draai(v, hoek):
    c, s = round(math.cos(hoek), 9), round(math.sin(hoek), 9)
    x, y, z = v
    return (x * c + z * s, y, -x * s + z * c)


def eenheid(v):
    n = math.sqrt(sum(t * t for t in v))
    return tuple(t / n for t in v)


def omhulsel(pts):
    pts = sorted(set(pts))

    def kruis(o, a, b):
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])

    onder, boven = [], []
    for p in pts:
        while len(onder) > 1 and kruis(onder[-2], onder[-1], p) <= 0:
            onder.pop()
        onder.append(p)
    for p in reversed(pts):
        while len(boven) > 1 and kruis(boven[-2], boven[-1], p) <= 0:
            boven.pop()
        boven.append(p)
    return onder[:-1] + boven[:-1]


def knip_voor(im, w, l, hoek):
    """Alles buiten de schermomtrek van de live woning doorzichtig (en zwart)."""
    a = math.radians(HOEKEN[hoek])
    rechts, op = eenheid(draai((1, 0, -1), a)), eenheid(draai((-1, 2, -1), a))
    doel = (w / 2, 0, l / 2 + 3)
    hoog = 4 * FH + 4.2 + 1.2  # sorteer_voor: vier bouwlagen plus nok en schouw
    bw, bh = im.size
    px = bw / SCHAAL
    pts = []
    for x in (-T - MARGE, w + T + MARGE):
        for y in (-MARGE, hoog + MARGE):
            for z in (-T - MARGE, l + T + MARGE):
                d = (x - doel[0], y - doel[1], z - doel[2])
                pts.append((bw / 2 + sum(p * q for p, q in zip(d, rechts)) * px,
                            bh / 2 - sum(p * q for p, q in zip(d, op)) * px))
    masker = Image.new("L", im.size, 0)
    ImageDraw.Draw(masker).polygon(omhulsel(pts), fill=255)
    uit = im.copy()
    uit.putalpha(ImageChops.multiply(im.getchannel("A"), masker))
    return Image.composite(uit, Image.new("RGBA", im.size, (0, 0, 0, 0)), masker)


def main():
    bron, woning, breedte, hoek = sys.argv[1:5]
    repo = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    doelmap = sys.argv[5] if len(sys.argv) > 5 else f"{repo}/public/simulator/straat"
    w = float(breedte)
    naam = f"{woning}-b{round(w * 10)}-{hoek}"
    achter = Image.open(f"{bron}/{naam}-achter.png").convert("RGB")
    voor = knip_voor(Image.open(f"{bron}/{naam}-voor.png").convert("RGBA"), w, WONINGEN[woning], hoek)
    with tempfile.TemporaryDirectory() as tmp:
        for maat, wh in MATEN.items():
            a, v = f"{tmp}/a{maat}.png", f"{tmp}/v{maat}.png"
            achter.resize(wh, Image.LANCZOS).save(a)
            voor.resize(wh, Image.LANCZOS).save(v)
            subprocess.run(["cwebp", "-quiet", "-m", "6", "-size", str(ACHTER_BUDGET[maat]), a,
                            "-o", f"{doelmap}/{naam}-achter{maat}.webp"], check=True)
            subprocess.run(["cwebp", "-quiet", "-m", "6", "-q", "80", "-alpha_q", "90", "-exact", v,
                            "-o", f"{doelmap}/{naam}-voor{maat}.webp"], check=True)
    print("klaar", naam)


if __name__ == "__main__":
    main()
