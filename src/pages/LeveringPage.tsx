import { useEffect, useState } from "react";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { LADDER_FEE, PUMP } from "@/data/verhuur";
import { formatEuro, useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { LEVERING_COPY } from "./LeveringPage.copy";
import { AanvraagError, AanvraagHoneypot } from "@/components/AanvraagForm";
import { useAanvraag } from "@/hooks/useAanvraag";
import "@/styles/levering.css";
import "@/styles/levering-fixes.css";

/**
 * De vijf installatie-tabs. Het design was een vanilla-JS-widget (`id="insTabs"`,
 * `id="insStage"`) die bij de transcriptie statisch bleef: de knoppen kregen geen
 * `onClick` en er draaide geen auto-advance, dus klikken op "Stap 02" deed niets
 * en alleen stap 1 was ooit zichtbaar. De labels staan in `LeveringPage.copy.tsx`
 * (`ins.tabs`) zodat de knoppenrij uit één lijst komt; de panelen zelf blijven
 * inline (elk een eigen mock-animatie).
 */
const INS_TABS_AANTAL = LEVERING_COPY.nl.ins.tabs.length;

/**
 * Hoe lang een tab actief blijft voor de auto-advance doorschuift. Gelijk aan de
 * `tbfill`-animatie (6,5s) in levering.css, zodat het voortgangsbalkje onder de
 * actieve knop precies vol is op het moment dat de volgende stap verschijnt.
 */
const INS_INTERVAL = 6500;

/**
 * Levering & installatie — 1:1 transcription of the Claude Design handoff
 * (Levering En Installatie.html). The design's own header/footer are replaced
 * by the shared <V3Header>/<V3Footer>; everything else is the design's markup,
 * scoped under `.lv-page` (see src/styles/levering.css). Assets resolve from
 * /vernast/*.webp. The design's scroll-reveal (.rv) classes are dropped so the
 * prerendered HTML never carries an opacity:0 begintoestand; the tracker,
 * zones, waves, fan-spin and stap-vinkjes zijn zuivere CSS-animaties en blijven.
 * De installatie-tabs kregen hun eerste knop + paneel de class `active` mee,
 * zodat er zonder JavaScript inhoud zichtbaar is (SSG-vereiste).
 */

/** Het pijltje op de knoppen. */
const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

/** Het vinkje in de rolverdeling- en opstartlijsten. */
const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

/*
 * Het ventilator-icoon van stap 04. Het design tekende drie bladen door
 * dezelfde `<path>` twee keer te herhalen met `transform="rotate(120|240)"`,
 * maar dat draait om het midden van het viewBox terwijl het blad zelf uit het
 * midden begint: de drie vielen half over elkaar en het resultaat was een vlek.
 * Dit is één pad dat de drie bladen zelf beschrijft.
 */
const Fan = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" /><path d="M12 12v.01" /></svg>
);

/** Het kruis in de rode-kaart-blokken. */
const Cross = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

const LeveringPage = () => {
  /*
    De actieve installatie-tab. Start op 0 zodat de geprerenderde HTML stap 1
    toont (SSG-vereiste — de widget mag zonder JavaScript geen lege sectie zijn).
    De auto-advance draait alleen in de browser: de setTimeout hangt aan `insStep`
    en herstart dus bij elke wissel, of die nu vanzelf komt of door een klik. Zo
    krijgt een aangeklikte stap opnieuw de volle 6,5s voor hij doorschuift.
  */
  const [insStep, setInsStep] = useState(0);
  const t = useCopy(LEVERING_COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const linkWit = { color: "#fff", fontWeight: 600 };

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setTimeout(() => setInsStep((s) => (s + 1) % INS_TABS_AANTAL), INS_INTERVAL);
    return () => window.clearTimeout(id);
  }, [insStep]);

  const { status, error, mailto, sending, handleSubmit } = useAanvraag({
    source: "levering",
    messageField: "situatie",
    mailSubject: "Levering & installatie",
  });

  return (
    <div className="lv-page">
      <PageMeta
        {...useSeo("levering")}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.kruimel, path: lp("/levering") },
          ]),
        ]}
      />

      <V3Header lightAfter={420} />

      {/* ================= HERO ================= */}
      <div className="redtop">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="kick">{t.hero.kick}</span>
              <h1>{t.hero.h1}</h1>
              <p>{t.hero.p1}<b style={{ color: "#fff" }}>{t.hero.p2}</b></p>
              <div className="hcta">
                {/* Twee witte knoppen met rode tekst naast elkaar lazen als één
                    blok; de hoofdactie viel niet op. Wit draagt nu de hoofdactie,
                    zwart de verwijzing naar de uitleg. Opmaak in
                    levering-fixes.css, niet inline — anders wint de inline-stijl
                    van elke latere correctie. */}
                <a className="btn btn-licht" href={lp("/verhuur/calculator")}>{t.hero.cta}<Arrow /></a>
                <a className="btn btn-zwart" href="#installatie">{t.hero.ctaUitleg}</a>
              </div>
            </div>
            <div className="hero-vis">
              <img src="/vernast/man-duim-kabels.webp" alt={t.hero.imgAlt} style={{ width: "min(115%,720px)", maxWidth: "none" }} />
              <div className="fbadge" style={{ top: "-30px", right: 0, left: "auto", zIndex: 0 }}><span className="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span><div>{t.hero.badge}<small>{t.hero.badgeSub}</small></div></div>
            </div>
          </div>
        </section>

      </div>

      {/* ================= LEVERDAG-TRACKER ================= */}
      <section className="swx">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.trk.kick}</span>
            <h2 className="sec">{t.trk.h2}</h2>
            <p className="lede">{t.trk.lede}</p>
          </div>
          <div className="trk">
            <div className="trk-route" aria-hidden="true">
              <div className="trk-line"></div>
              <div className="trk-fill"></div>
              <div className="trk-truck"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3V8h11v10H9" /><path d="M14 9h4l3 3v6h-2" /><circle cx="7.5" cy="18.5" r="1.5" /><circle cx="17.5" cy="18.5" r="1.5" /></svg></div>
            </div>
            <div className="trk-stops">
              {t.trk.stops.map((stop, i) => (
                <div className={`tst s${i + 1}`} key={stop.h3}><i>{i === 4 ? "✓" : i + 1}</i><span className="tm">{stop.tm}</span><h3>{stop.h3}</h3><p>{stop.p}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSTALLATIE-TABS ================= */}
      <section className="lvred" id="installatie">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.ins.kick}</span>
            <h2 className="sec">{t.ins.h2}</h2>
            <p className="lede">{t.ins.lede}</p>
          </div>
          <div className="ins-tabs" id="insTabs">
            {t.ins.tabs.map((tab, i) => (
              <button
                key={tab.nr}
                type="button"
                className={insStep === i ? "active" : undefined}
                aria-pressed={insStep === i}
                onClick={() => setInsStep(i)}
              >
                <i>{tab.nr}</i>
                {tab.titel}
                {/* Het voortgangsbalkje: de tbfill-animatie in levering.css draait
                    zolang de knop `.active` is en herstart vanzelf zodra een stap
                    na een ronde opnieuw actief wordt. */}
                <span className="tb">
                  <b></b>
                </span>
              </button>
            ))}
          </div>
          <div className="ins-stage" id="insStage">
            <div className={`ins-p${insStep === 0 ? " active" : ""}`}>
              <div>
                <h3>{t.ins.p1.h3}</h3>
                <p className="pt">{t.ins.p1.pt(lp, linkWit)}</p>
                <div className="pchips">{t.ins.p1.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
              <div className="mockc"><div className="mt">{t.ins.p1.mt}</div><div className="zones"><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="zlab"><span>{t.ins.p1.zones[0]}</span><span>{t.ins.p1.zones[1]}</span></div></div>
            </div>
            <div className={`ins-p${insStep === 1 ? " active" : ""}`}>
              <div>
                <h3>{t.ins.p2.h3}</h3>
                <p className="pt">{t.ins.p2.pt}</p>
                <div className="pchips">{t.ins.p2.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
              <div className="mockc"><div className="mt">{t.ins.p2.mt}</div><div className="airm"><div className="dev"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10H3" /><path d="M21 6H3" /><path d="M21 14H3" /><path d="M21 18H3" /></svg></div><span className="wave"></span><span className="wave w2"></span><span className="wave w3"></span><div className="room"><span>{t.ins.p2.hoek}</span></div></div></div>
            </div>
            <div className={`ins-p${insStep === 2 ? " active" : ""}`}>
              <div>
                <h3>{t.ins.p3.h3}<span style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "6px", background: "#fff", color: "var(--red)", fontFamily: "var(--fm)", fontSize: "10.5px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "6px 12px", borderRadius: "99px" }}>{t.ins.p3.badge}</span></h3>
                <p className="pt">{t.ins.p3.pt(lp, linkWit, `${toon(PUMP.price).tekst} ${toon(PUMP.price).label}`)}</p>
                <div className="pchips">{t.ins.p3.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
              <div className="mockc"><div className="mt">{t.ins.p3.mt}</div><div className="drainm"><div className="dev"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg></div><div className="hose"><b></b><b></b><b></b></div><div className="drain"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M5 12v4" /><path d="M12 12v6" /><path d="M19 12v4" /></svg></div><div className="cap">{t.ins.p3.cap}</div></div></div>
            </div>
            <div className={`ins-p${insStep === 3 ? " active" : ""}`}>
              <div>
                <h3>{t.ins.p4.h3}</h3>
                <p className="pt">{t.ins.p4.pt}</p>
                <div className="pchips">{t.ins.p4.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
              <div className="mockc"><div className="mt">{t.ins.p4.mt}</div><div className="fanm"><div className="fan"><Fan /></div><div className="volt">{t.ins.p4.checks.map((c) => <span key={c}><Check /> {c}</span>)}</div></div></div>
            </div>
            <div className={`ins-p${insStep === 4 ? " active" : ""}`}>
              <div>
                <h3>{t.ins.p5.h3}</h3>
                <p className="pt">{t.ins.p5.pt(lp, linkWit)}</p>
                <div className="pchips">{t.ins.p5.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
              <div className="mockc"><div className="mt">{t.ins.p5.mt}</div><div className="startm play" id="startm">{t.ins.p5.rows.map((r) => <div className="row" key={r}><i><Check /></i>{r}</div>)}</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BEREIKBAARHEID / LADDER ================= */}
      <section className="swx">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.ladder.kick}</span>
            <h2 className="sec">{t.ladder.h2}</h2>
            <p className="lede">{t.ladder.lede}</p>
          </div>
          <div className="ldg">
            <div className="ld"><span className="tag ok">{t.ladder.inbegrepen}</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4v-4h4v-4h4V8h4" /><path d="M4 20V4" /></svg></span><h3>{t.ladder.trap.h3}</h3><p>{t.ladder.trap.p}</p><div className="prc">{formatEuro(0, taal, 0)} <small>{t.ladder.perVerdieping}</small></div></div>
            <div className="ld"><span className="tag ok">{t.ladder.inbegrepen}</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 7v5" /><path d="m9 9 3-2 3 2" /></svg></span><h3>{t.ladder.lift.h3}</h3><p>{t.ladder.lift.p}</p><div className="prc">{formatEuro(0, taal, 0)} <small>{t.ladder.perVerdieping}</small></div></div>
            <div className="ld"><span className="tag pay">{t.ladder.toeslag}</span><span className="si"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21V3h8v18" /><path d="M8 7h8" /><path d="M8 11h8" /><path d="M8 15h8" /></svg></span><h3>{t.ladder.ladder.h3}</h3><p>{t.ladder.ladder.p}</p><div className="prc">{toon(LADDER_FEE).tekst} <small>{toon(LADDER_FEE).label} {t.ladder.perVerdieping}</small></div></div>
          </div>
        </div>
      </section>

      {/* ================= ROLVERDELING ================= */}
      <section className="lvred chkred">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.rol.kick}</span>
            <h2 className="sec">{t.rol.h2}</h2>
          </div>
          <div className="vsg">
            <div className="vs">
              <span className="vt2">{t.rol.u.tag}</span>
              <h3>{t.rol.u.h3}</h3>
              <ul>
                {t.rol.u.li.map((li) => <li key={li}><Check /> <span>{li}</span></li>)}
              </ul>
              <span className="vf">{t.rol.u.vf}</span>
            </div>
            <div className="vs">
              <span className="vt2 red">{t.rol.wij.tag}</span>
              <h3>{t.rol.wij.h3}</h3>
              <ul>
                {t.rol.wij.li.map((li) => <li key={li}><Check /> <span>{li}</span></li>)}
              </ul>
              <span className="vf">{t.rol.wij.vf(lp)}</span>
            </div>
          </div>
          <div className="note note2" style={{ marginTop: "14px" }}>{t.rol.note(lp)}</div>
        </div>
        <img className="chkred-man" src="/vernast/man-bestelwagen.webp" alt={t.rol.imgAlt} />
      </section>

      {/* ================= RODE KAART ================= */}
      <section className="sw rood">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.rood.kick}</span>
            <h2 className="sec">{t.rood.h2}</h2>
            <p className="lede">{t.rood.lede}</p>
          </div>
          <div className="ng">
            {t.rood.kaarten.map((k) => (
              <div className="ngc" key={k.b}><span className="xi"><Cross /></span><div><b>{k.b}</b><p>{k.p}</p></div></div>
            ))}
          </div>
          <div className="note note3" style={{ marginTop: "14px" }}>{t.rood.note(lp)}</div>
        </div>
        <img className="rood-man" src="/vernast/man-rode-kaart.webp" alt={t.rood.imgAlt} />
      </section>

      {/* ================= VRAAGFORMULIER ================= */}
      <section className="oform" id="formulier">
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <span className="kick">{t.form.kick}</span>
            <h2 className="sec">{t.form.h2}</h2>
            <p className="lede" style={{ marginLeft: "auto", marginRight: "auto" }}>{t.form.lede}</p>
          </div>
          <div className="fshell">
            {/* Het vraagformulier gaat via `/api/aanvraag` naar het bouwdrogers-
                portaal (bron `levering`). Na verzenden neemt het `.fdone`-paneel
                uit het design de plaats van het formulier in. */}
            <form id="formBody" onSubmit={handleSubmit} hidden={status === "done"}>
              <div className="frow">
                <div className="fld"><label htmlFor="fVoor">{t.form.voornaam}</label><input type="text" id="fVoor" name="voornaam" placeholder={t.form.voornaam} required /></div>
                <div className="fld"><label htmlFor="fNaam">{t.form.naam}</label><input type="text" id="fNaam" name="naam" placeholder={t.form.naamPh} required /></div>
              </div>
              <div className="frow">
                <div className="fld"><label htmlFor="fMail">{t.form.email}</label><input type="email" id="fMail" name="email" placeholder={t.form.emailPh} required /></div>
                <div className="fld"><label htmlFor="fTel">{t.form.telefoon}</label><input type="tel" id="fTel" name="telefoon" placeholder="04.." /></div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fOnd">{t.form.vraag}</label>
                  <select id="fOnd" name="onderwerp">
                    {t.form.onderwerpen.map((o) => <option key={o.waarde} value={o.waarde}>{o.label}</option>)}
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld"><label htmlFor="fMsg">{t.form.situatie}</label><textarea id="fMsg" name="situatie" rows={5} placeholder={t.form.situatiePh} required></textarea></div>
              </div>
              <div className="fsend">
                <small>{t.form.privacy}</small>
                <button className="btn aanv-btn" id="fSend" type="submit" disabled={sending}>{sending ? t.form.bezig : t.form.versturen}<Arrow /></button>
              </div>
              <AanvraagHoneypot />
              <AanvraagError error={error} mailto={mailto} />
            </form>
            <div className={`fdone${status === "done" ? " on" : ""}`} id="formDone" role="status">
              <div className="ic"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
              <h3>{t.form.klaarTitel}</h3>
              <p>{t.form.klaarTekst}</p>
            </div>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default LeveringPage;
