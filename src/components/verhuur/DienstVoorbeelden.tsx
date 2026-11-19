import { useState } from "react";
import { useCopy } from "@/i18n/useTaal";
import "@/styles/dienst-voorbeelden.css";

import { COPY, PROCES_INDEXEN, dienstBeeldPad } from "@/data/dienstbeelden";

export default function DienstVoorbeelden({ toonOpstellingen = false }: { toonOpstellingen?: boolean }) {
  const t = useCopy(COPY);
  const [actief, setActief] = useState(0);
  const beeldIndex = PROCES_INDEXEN[actief];
  return <section className="dv" id="praktijkvoorbeelden">
    <div className="shell">
      <div className="dv-head"><span>{t.kick}</span><h2>{t.title}</h2><p>{t.intro}</p></div>
      <figure className="dv-main"><img src={dienstBeeldPad(beeldIndex)} alt={t.captions[beeldIndex]} width={1536} height={1024} loading="lazy" decoding="async" />
        <figcaption aria-live="polite"><div><strong>{t.labels[beeldIndex]}</strong><p>{t.captions[beeldIndex]}</p></div><div className="dv-arrows"><button type="button" aria-label={t.previous} onClick={()=>setActief((actief+5)%6)}>←</button><span>{actief+1} / 6</span><button type="button" aria-label={t.next} onClick={()=>setActief((actief+1)%6)}>→</button></div></figcaption>
      </figure>
      <div className="dv-thumbs">{PROCES_INDEXEN.map((b,i)=><button type="button" key={b} aria-pressed={actief===i} onClick={()=>setActief(i)}><img src={dienstBeeldPad(b)} alt="" width={1536} height={1024} loading="lazy" decoding="async" /><span>{t.labels[b]}</span></button>)}</div>
      {toonOpstellingen && <div className="dv-setups">{[4,5].map(i=><figure key={i}><img src={dienstBeeldPad(i)} alt={t.captions[i]} width={1536} height={1024} loading="lazy" /><figcaption><strong>{t.labels[i]}</strong><p>{t.captions[i]}</p></figcaption></figure>)}</div>}
      <p className="dv-note">{t.note}</p>
    </div>
  </section>;
}
