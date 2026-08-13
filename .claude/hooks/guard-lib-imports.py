#!/usr/bin/env python3
"""Blokkeert `@/`-imports in api/ en src/lib/.

Die twee mappen worden ook door de serverless functies geladen, buiten de
Vite-alias om. Een `@/`-import blijft daardoor werken onder `npm run dev` en
faalt pas bij de deploy — de duurste plek om erachter te komen. Zie CLAUDE.md,
"src/lib/ draait aan beide kanten".
"""
import json
import re
import sys

# `from '@/...'`, `import '@/...'`, en dynamische `import('@/...')`
ALIAS_IMPORT = re.compile(r"""(?:from|import)\s*\(?\s*['"]@/""")

GUARDED = ("api/", "src/lib/")


def main() -> int:
    try:
        payload = json.load(sys.stdin)
    except (json.JSONDecodeError, ValueError):
        return 0  # onleesbare input is geen reden om de edit tegen te houden

    tool_input = payload.get("tool_input") or {}
    path = tool_input.get("file_path") or ""

    rel = path.split("/bouwdroger/", 1)[-1]
    if not rel.startswith(GUARDED):
        return 0
    if not rel.endswith((".ts", ".tsx", ".js", ".mjs")):
        return 0

    # Edit levert new_string, Write levert content
    written = tool_input.get("new_string") or tool_input.get("content") or ""
    offending = [ln for ln in written.splitlines() if ALIAS_IMPORT.search(ln)]
    if not offending:
        return 0

    print(
        f"Geblokkeerd: `@/`-import in {rel}.\n"
        f"{chr(10).join('  ' + ln.strip() for ln in offending[:5])}\n\n"
        "api/ en src/lib/ draaien ook buiten de Vite-alias. Gebruik een relatief "
        "pad met expliciete .js-extensie, bv. `../src/lib/booking.js`.",
        file=sys.stderr,
    )
    return 2  # exit 2 = blokkeer en geef de stderr terug aan Claude


if __name__ == "__main__":
    sys.exit(main())
