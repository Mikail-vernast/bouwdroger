#!/usr/bin/env bash
# Zet de tegels van texturen.py op hun helderheid en contrast en schrijft ze als -v2.webp
# naar public/simulator/3d/. three.js vermenigvuldigt de detailtegels met de kleuren uit
# materiaal.ts; die kleuren zijn afgesteld op het gemiddelde van de eerste reeks, dus dat
# gemiddelde blijft gelijk. Alleen het contrast gaat omhoog (de eerste chape, pleister en
# verf hadden een standaardafwijking onder 0,5 % en lazen als effen vlak).
#
#   scripts/simulator-3d/normaliseer.sh <uitmap van texturen.py> [naam ...]
set -euo pipefail
IN=$1; shift
UIT=$(cd "$(dirname "$0")/../.." && pwd)/public/simulator/3d
# naam  gemiddelde  standaardafwijking (grijs), of "kleur": alleen het gemiddelde
DOEL="chape 0.946 0.03
pleister 0.96 0.02
verf 0.985 0.008
pleisternat 0.85 0.06
vloerplaat 0.8 0.075
tegelvloer 0.68 kleur
parket 0.566 kleur
grind 0.45 kleur"
echo "$DOEL" | while read -r f m sd; do
  if [ $# -gt 0 ] && [[ ! " $* " =~ " $f " ]]; then continue; fi
  [ -f "$IN/$f.png" ] || continue
  tmp="$IN/$f.norm.png"
  stat=$(magick "$IN/$f.png" -colorspace gray -format "%[fx:mean] %[fx:standard_deviation]" info:)
  cm=${stat% *}; csd=${stat#* }
  if [ "$sd" = kleur ]; then
    magick "$IN/$f.png" -fx "u*($m/$cm)" -depth 8 "$tmp"
  else
    magick "$IN/$f.png" -colorspace gray -fx "$m + (u - $cm)*($sd/$csd)" -depth 8 "$tmp"
  fi
  cwebp -quiet -q 82 "$tmp" -o "$UIT/$f-v2.webp"
  rm -f "$tmp"
  echo "$f: $cm/$csd -> $(magick "$UIT/$f-v2.webp" -colorspace gray -format '%[fx:mean] %[fx:standard_deviation]' info:)"
done
