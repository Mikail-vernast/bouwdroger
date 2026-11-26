#!/bin/zsh
# Renders the street around the shared 3D house (src/huis3d) and writes the webp files
# into public/simulator/straat. One street picture serves both the drying simulator
# (bouwdroger) and the damp simulator (Vernast-v2.0, via `npm run huis3d:sync`).
#
#   scripts/simulator-3d/render-straat.sh rijwoning 7.5            # 1950–1990
#   scripts/simulator-3d/render-straat.sh rijwoning 7.5 voor1950   # with neighbours of that period
#   scripts/simulator-3d/render-straat.sh alles                    # every type, width and period
#
# Needs Blender (/Applications/Blender.app) and ImageMagick (magick). Poly Haven assets and
# the PNG output live outside the repo, in ~/Blender/huis3d (see ~/Blender/LEESMIJ.md).
# One render takes 4–10 minutes at 2800×2000 with 40 samples.
set -u
REPO=${0:A:h:h:h}
BLENDER=${BLENDER:-/Applications/Blender.app/Contents/MacOS/Blender}
ASSETS=${ASSETS:-$HOME/Blender/huis3d/polyhaven}
PNG=${PNG:-$HOME/Blender/huis3d/renders}
WEBP=$REPO/public/simulator/straat
mkdir -p $PNG/logs

render() { # woning breedte [periode]
  local woning=$1 breedte=$2 periode=${3:-}
  local naam=$woning-b$(python3 -c "print(round($breedte*10))")${periode:+-$periode}
  local t0=$(date +%s)
  ASSETS=$ASSETS OUT=$PNG WONING=$woning BREEDTE=$breedte PERIODE=$periode RESX=2800 RESY=2000 SAMPLES=40 \
    $BLENDER -b -P $REPO/scripts/simulator-3d/straat.py > $PNG/logs/$naam.log 2>&1
  if ! grep -q "KLAAR" $PNG/logs/$naam.log; then echo "FOUT $naam (zie $PNG/logs/$naam.log)"; return 1; fi
  for laag in achter voor; do
    magick $PNG/$naam-$laag.png -quality 80 -define webp:alpha-quality=82 $WEBP/$naam-$laag.webp
    magick $PNG/$naam-$laag.png -resize 1750x1250 -quality 78 -define webp:alpha-quality=80 $WEBP/$naam-$laag-klein.webp
    magick $PNG/$naam-$laag.png -resize 875x625 -quality 72 -define webp:alpha-quality=75 $WEBP/$naam-$laag-mini.webp
  done
  echo "KLAAR $naam in $(( $(date +%s) - t0 ))s"
}

if [[ ${1:-} == alles ]]; then
  # Every width (BREEDTES in src/huis3d/woning.ts) at 1950–1990; the other periods only at
  # the width the damp simulator draws (src/components/vocht3d/huisPlan.ts in Vernast-v2.0).
  for b in 5 5.5 6 6.5 7 7.5 8 8.5 9; do render rijwoning $b; done
  for b in 6 6.5 7 7.5 8 8.5 9 9.5 10; do render halfopen $b; done
  for b in 8 8.5 9 9.5 10 10.5 11 11.5 12; do render open $b; done
  for p in voor1950 na1990; do render rijwoning 7.5 $p; render rijwoning 6 $p; render halfopen 8 $p; render open 10 $p; done
  echo "ALLES KLAAR (appartementen: WONING=appartement BOUWLAGEN=1|2, zie straat.py)"
else
  render "$@"
fi
