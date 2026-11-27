import { useEffect, useState, type ChangeEvent, type ReactNode } from "react";
import { isValidEmail, maskEmail, maskPhone } from "@/lib/inputMask";
import { MAX_FILES, filterAcceptable, uploadFormFiles } from "@/lib/formUploads";
import { CONTACT } from "@/lib/site";
import { useCopy, useTaal } from "@/i18n/useTaal";
import { COPY, type Antwoorden, type Keuze } from "./WaterschadeAanvraag.copy";
import { berichtVoorPortaal } from "./waterschadeBericht";

/**
 * De aanvraag bij waterschade, in het paneel van de droogsimulator.
 *
 * Wie waterschade heeft, wil niet simuleren maar hulp. Daarom geen woningtype, dak of
 * bouwlagen (dat ziet de technieker ter plaatse) maar de vragen die bepalen wat er mee
 * moet: staat er nog water (dan eerst een pomp), is de oorzaak hersteld (anders heeft
 * drogen geen zin), zit het water onder de vloer of in de vloerverwarming (een andere
 * techniek), en is er stroom.
 *
 * Versturen loopt via `/api/vraag` met onderwerp `waterschade`, zoals het vraagformulier
 * op de homepage: zelfde allowlist, rate limit, mail-vangnet en foto-upload via signed
 * URL's. Het bericht zelf is gestructureerde tekst in het Nederlands, want het team leest
 * het in het portaal, ongeacht de taal van de bezoeker.
 *
 * Alles wat de bezoeker invulde blijft staan als verzenden mislukt (zoals in V3Cta).
 */

type Scherm = 0 | 1 | 2 | 3 | 4;
const AANTAL_SCHERMEN = 4;

const LEEG: Antwoorden = {
  oorzaak: null,
  waterStaat: null,
  hersteld: null,
  plekken: [],
  ruimtes: null,
  nat: [],
  sinds: null,
  schimmel: false,
  straat: "",
  nr: "",
  postcode: "",
  gemeente: "",
  levering: null,
  verzekering: null,
  dossier: "",
  stroom: null,
  voornaam: "",
  achternaam: "",
  telefoon: "",
  email: "",
  klant: "particulier",
  btw: "",
  opmerking: "",
};

/** Foto's bij de oorzaken; "anders" heeft er geen en staat als link onder de kaarten. */
const OORZAAK_FOTO: Record<Exclude<Keuze["oorzaak"], "anders">, string> = {
  lek: "/simulator/ws-lek.webp",
  overstroming: "/simulator/ws-overstroming.webp",
  dak: "/simulator/ws-dak.webp",
  bluswater: "/simulator/ws-bluswater.webp",
};

interface Props {
  /** Terug vanaf de eerste vraag: de simulator verlaten. */
  onTerug: () => void;
  /** "Naar het begin" na het versturen: opnieuw beginnen. Zonder deze prop: onTerug. */
  onOpnieuw?: () => void;
  /** Meldt elke wijziging, zodat het 3D-huis de natte verdiepingen kan tonen. */
  onWijzig?: (antwoorden: Antwoorden) => void;
}

export default function WaterschadeAanvraag({ onTerug, onOpnieuw, onWijzig }: Props) {
  const t = useCopy(COPY);
  const taal = useTaal();
  const [scherm, setScherm] = useState<Scherm>(0);
  const [a, setA] = useState<Antwoorden>(LEEG);
  const [fotos, setFotos] = useState<File[]>([]);
  const [geweigerd, setGeweigerd] = useState<string[]>([]);
  const [honeypot, setHoneypot] = useState("");
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState<string | null>(null);
  // Alleen bij een nieuw antwoord, niet bij een nieuwe callback van de ouder (die verandert elke render).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onWijzig?.(a), [a]);

  const zet = <K extends keyof Antwoorden>(k: K, v: Antwoorden[K]) => setA((p) => ({ ...p, [k]: v }));
  const wissel = <K extends "plekken" | "nat">(k: K, v: Antwoorden[K][number]) =>
    setA((p) => {
      const huidig = p[k] as string[];
      return { ...p, [k]: huidig.includes(v) ? huidig.filter((x) => x !== v) : [...huidig, v] };
    });
  const tekst = (k: "straat" | "nr" | "postcode" | "gemeente" | "dossier" | "voornaam" | "achternaam" | "telefoon" | "email" | "btw", masker?: (v: string) => string) =>
    (e: ChangeEvent<HTMLInputElement>) => zet(k, masker ? masker(e.target.value) : e.target.value);

  /* Per scherm wat minstens nodig is om verder te mogen. */
  const klaar: Record<0 | 1 | 2 | 3, boolean> = {
    0: !!a.oorzaak && !!a.waterStaat && !!a.hersteld,
    1: a.plekken.length > 0 && !!a.ruimtes && a.nat.length > 0 && !!a.sinds,
    2: a.postcode.trim().length > 3 && a.gemeente.trim().length > 1 && !!a.levering && !!a.verzekering && !!a.stroom,
    // Telefoon is hier verplicht: bij waterschade bellen we terug. Mail eist het portaal.
    3: a.voornaam.trim().length > 1 && a.achternaam.trim().length > 1 && a.telefoon.replace(/\D/g, "").length >= 9 && isValidEmail(a.email),
  };

  const fotosErbij = (e: ChangeEvent<HTMLInputElement>) => {
    const { accepted, rejected } = filterAcceptable(Array.from(e.target.files ?? []));
    setGeweigerd(rejected);
    setFotos((huidig) => [...huidig, ...accepted].slice(0, MAX_FILES));
    e.target.value = "";
  };

  const verstuur = async () => {
    setBezig(true);
    setFout(null);
    try {
      const { paths, failed } = await uploadFormFiles(fotos);
      const bericht = berichtVoorPortaal(a) + (failed.length ? `\n\nFoto's die niet meekonden: ${failed.join(", ")}` : "");
      const response = await fetch("/api/vraag", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          voornaam: a.voornaam,
          achternaam: a.achternaam,
          email: a.email,
          telefoon: a.telefoon,
          straat: a.straat,
          nummer: a.nr,
          postcode: a.postcode,
          gemeente: a.gemeente,
          onderwerp: "waterschade",
          bericht,
          attachments: paths,
          page_url: typeof window === "undefined" ? null : window.location.href,
          website: honeypot,
        }),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        // De melding van api/vraag.ts is Nederlands; in een andere taal de eigen melding.
        setFout((taal === "nl" ? data.error : undefined) ?? t.fout(CONTACT.phoneLocal));
        return;
      }
      setScherm(4);
    } catch {
      setFout(t.fout(CONTACT.phoneLocal));
    } finally {
      setBezig(false);
    }
  };

  const terug = () => (scherm === 0 ? onTerug() : setScherm((s) => (s - 1) as Scherm));
  const verder = () => (scherm === 3 ? void verstuur() : setScherm((s) => (s + 1) as Scherm));

  if (scherm === 4) {
    return (
      <>
        <div className="ds-body ds-ws" key="klaar">
          <h2>{t.klaarKop(a.voornaam.trim())}</h2>
          <p className="ds-sub">{t.klaarTekst}</p>
          <div className="ds-kaart ds-ws-klaar">
            <b>{t.klaarDringend}</b>
            <a className="ds-ws-bel" href={`tel:${CONTACT.phoneE164}`}>{t.bel(CONTACT.phoneLocal)}</a>
          </div>
        </div>
        <div className="ds-foot">
          <button type="button" className="ds-back" onClick={onOpnieuw ?? onTerug}>{t.naarBegin}</button>
        </div>
      </>
    );
  }

  const keuzes = <K extends string>(opties: Record<K, string>, gekozen: K | null, kies: (k: K) => void, label: string, klein?: Partial<Record<K, string>>) => (
    <div className="ds-ws-seg" role="radiogroup" aria-label={label}>
      {(Object.keys(opties) as K[]).map((k) => (
        <button key={k} type="button" role="radio" aria-checked={gekozen === k} className={gekozen === k ? "on" : undefined} onClick={() => kies(k)}>
          {opties[k]}
          {klein?.[k] && <small>{klein[k]}</small>}
        </button>
      ))}
    </div>
  );
  const vinkjes = <K extends string>(opties: Record<K, string>, gekozen: K[], wis: (k: K) => void, label: string) => (
    <div className="ds-ws-vink" role="group" aria-label={label}>
      {(Object.keys(opties) as K[]).map((k) => (
        <button key={k} type="button" role="checkbox" aria-checked={gekozen.includes(k)} className={gekozen.includes(k) ? "on" : undefined} onClick={() => wis(k)}>
          <span className="cb" aria-hidden="true">✓</span>
          {opties[k]}
        </button>
      ))}
    </div>
  );
  const veld = (label: string, input: ReactNode, breed = false) => (
    <label className={`ds-ws-veld${breed ? " breed" : ""}`}>
      <span>{label}</span>
      {input}
    </label>
  );

  return (
    <>
      <div className="ds-body ds-ws" key={scherm}>
        {scherm === 0 && (
          <>
            <h2>{t.s0Kop}</h2>
            <div className="ds-kaart">
              <div className="ds-wsfotos" role="radiogroup" aria-label={t.s0Kop}>
                {(Object.keys(OORZAAK_FOTO) as (keyof typeof OORZAAK_FOTO)[]).map((k) => (
                  <button key={k} type="button" role="radio" aria-checked={a.oorzaak === k} className={`ds-wsfoto${a.oorzaak === k ? " on" : ""}`} onClick={() => zet("oorzaak", k)}>
                    <img src={OORZAAK_FOTO[k]} alt="" loading="lazy" decoding="async" />
                    <span>
                      <b>{t.oorzaken[k]}</b>
                      <small>{t.oorzaakSub[k]}</small>
                    </span>
                  </button>
                ))}
              </div>
              <button type="button" role="radio" aria-checked={a.oorzaak === "anders"} className={`ds-wsanders${a.oorzaak === "anders" ? " on" : ""}`} onClick={() => zet("oorzaak", "anders")}>
                {t.andersLink}
              </button>
            </div>
            <div className="ds-kaart ds-ws-rij">
              <b>{t.waterStaatVraag}</b>
              {keuzes(t.jaNee, a.waterStaat, (k) => zet("waterStaat", k), t.waterStaatVraag)}
            </div>
            {a.waterStaat === "ja" && <p className="ds-ws-tip">{t.waterStaatTip}</p>}
            <div className="ds-kaart ds-ws-rij ds-ws-rij--stapel">
              <b>{t.hersteldVraag}</b>
              {keuzes(t.jaNeeWeet, a.hersteld, (k) => zet("hersteld", k), t.hersteldVraag)}
            </div>
            {a.hersteld === "nee" && <p className="ds-ws-tip">{t.hersteldTip}</p>}
          </>
        )}

        {scherm === 1 && (
          <>
            <h2>{t.s1Kop}</h2>
            <div className="ds-kaart">
              <div className="ds-kaart-kop">{t.waarVraag}</div>
              {vinkjes(t.plekken, a.plekken, (k) => wissel("plekken", k), t.waarVraag)}
              <div className="ds-kaart-kop ds-ws-sub">{t.ruimtesVraag}</div>
              {keuzes(t.ruimtes, a.ruimtes, (k) => zet("ruimtes", k), t.ruimtesVraag)}
            </div>
            <div className="ds-kaart">
              <div className="ds-kaart-kop">{t.natVraag}</div>
              {vinkjes(t.natOpties, a.nat, (k) => wissel("nat", k), t.natVraag)}
            </div>
            <div className="ds-kaart">
              <div className="ds-kaart-kop">{t.sindsVraag}</div>
              {keuzes(t.sindsOpties, a.sinds, (k) => zet("sinds", k), t.sindsVraag)}
              <button type="button" role="checkbox" aria-checked={a.schimmel} className={`ds-ws-check${a.schimmel ? " on" : ""}`} onClick={() => zet("schimmel", !a.schimmel)}>
                <span className="cb" aria-hidden="true">✓</span>
                {t.schimmel}
              </button>
              {a.sinds === "48u" && <p className="ds-ws-tip ds-ws-tip--in">{t.snelTip}</p>}
            </div>
          </>
        )}

        {scherm === 2 && (
          <>
            <h2>{t.s2Kop}</h2>
            <div className="ds-kaart ds-ws-velden">
              {veld(t.straat, <input value={a.straat} onChange={tekst("straat")} autoComplete="address-line1" />, true)}
              {veld(t.nr, <input value={a.nr} onChange={tekst("nr")} inputMode="text" />)}
              {veld(t.postcode, <input value={a.postcode} onChange={tekst("postcode")} inputMode="numeric" autoComplete="postal-code" />)}
              {veld(t.gemeente, <input value={a.gemeente} onChange={tekst("gemeente")} autoComplete="address-level2" />, true)}
            </div>
            <div className="ds-kaart">
              <div className="ds-kaart-kop">{t.leveringVraag}</div>
              {keuzes(t.leveringOpties, a.levering, (k) => zet("levering", k), t.leveringVraag)}
            </div>
            <div className="ds-kaart">
              <div className="ds-kaart-kop">{t.verzekeringVraag}</div>
              {keuzes(t.verzekeringOpties, a.verzekering, (k) => zet("verzekering", k), t.verzekeringVraag)}
              {a.verzekering === "ja" && (
                <div className="ds-ws-velden ds-ws-velden--los">{veld(t.dossier, <input value={a.dossier} onChange={tekst("dossier")} />, true)}</div>
              )}
              <p className="ds-ws-noot">{t.rapportNoot}</p>
            </div>
            <div className="ds-kaart ds-ws-rij ds-ws-rij--stapel">
              <b>{t.stroomVraag}</b>
              {keuzes(t.jaNeeWeet, a.stroom, (k) => zet("stroom", k), t.stroomVraag)}
            </div>
            <div className="ds-kaart">
              <div className="ds-kaart-kop ds-kaart-kop--rij">{t.fotosVraag}<span>{t.optioneel}</span></div>
              <label className="ds-ws-upload">
                <input type="file" accept="image/*,application/pdf" multiple onChange={fotosErbij} />
                {fotos.length ? t.fotosGekozen(fotos.length) : t.fotosKies}
              </label>
              {geweigerd.length > 0 && <p className="ds-ws-noot">{t.fotosGeweigerd(geweigerd.join(", "))}</p>}
            </div>
          </>
        )}

        {scherm === 3 && (
          <>
            <h2>{t.s3Kop}</h2>
            <p className="ds-sub">{t.s3Sub}</p>
            <div className="ds-kaart ds-ws-velden">
              {veld(t.voornaam, <input value={a.voornaam} onChange={tekst("voornaam")} autoComplete="given-name" />)}
              {veld(t.achternaam, <input value={a.achternaam} onChange={tekst("achternaam")} autoComplete="family-name" />)}
              {veld(t.telefoon, <input value={a.telefoon} onChange={tekst("telefoon", maskPhone)} inputMode="tel" autoComplete="tel" />, true)}
              {veld(t.email, <input value={a.email} onChange={tekst("email", maskEmail)} inputMode="email" autoComplete="email" />, true)}
            </div>
            <div className="ds-kaart">
              {keuzes(t.klantOpties, a.klant, (k) => zet("klant", k), t.klantOpties.particulier)}
              {a.klant === "bedrijf" && <div className="ds-ws-velden ds-ws-velden--los">{veld(t.btw, <input value={a.btw} onChange={tekst("btw")} />, true)}</div>}
            </div>
            <div className="ds-kaart ds-ws-velden">
              {veld(t.opmerking, <textarea rows={2} value={a.opmerking} onChange={(e) => zet("opmerking", e.target.value)} />, true)}
            </div>
            {/* Honeypot: mensen zien dit veld niet, bots vullen het in (zie api/contact.ts). */}
            <input className="ds-ws-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            {fout && <p className="ds-ws-fout" role="alert">{fout}</p>}
          </>
        )}
      </div>

      <div className="ds-foot">
        <button type="button" className="ds-back" onClick={terug}>{t.terug}</button>
        <ol className="ds-bar" aria-label={t.schermVan(scherm + 1, AANTAL_SCHERMEN)}>
          {Array.from({ length: AANTAL_SCHERMEN }, (_, i) => (
            <li key={i} className={i < scherm ? "done" : i === scherm ? "on" : undefined} aria-current={i === scherm ? "step" : undefined} />
          ))}
        </ol>
        <button type="button" className="ds-next" disabled={!klaar[scherm] || bezig} onClick={verder}>
          {scherm === 3 ? (bezig ? t.bezig : t.verstuur) : t.volgende}
        </button>
      </div>
    </>
  );
}
