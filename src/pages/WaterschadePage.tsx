import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import StappenCarrousel, { type VerloopStap } from "@/components/content/StappenCarrousel";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  PhoneIcon,
  ShieldIcon,
  SupportIcon,
} from "@/components/home-v3/icons";
import {
  DoosIcon,
  DrogerIcon,
  FotoIcon,
  KraanIcon,
  LekIcon,
  PompIcon,
  StroomUitIcon,
  WarnIcon,
  WindIcon,
} from "@/components/content/icons";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { euro } from "@/data/tarieflijst";
import { EXTRAS } from "@/data/verhuur";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { termijnLabel, termijnZonderDikte } from "@/lib/droogtijden";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";
import { WS_COPY, termijnLabelFr, type WsCtx } from "./WaterschadePage.copy";
import { termijnLabelEn } from "./termijnLabelEn";

/**
 * Waterschade — de meest urgente van de drie situatiepagina's, en daarom de
 * enige met een vaste spoedbalk onderaan op een telefoon.
 *
 * Stond tot november 2026 op de oude shadcn-schil met de `Navbar`; nu in de
 * v3-vormtaal, met <V3Header> en de gedeelde opmaak uit
 * src/styles/v3-content.css. De voorzichtige formulering rond de verzekering
 * is bewust ongewijzigd gebleven: hier stond ooit "uw verzekering betaalt dit",
 * en dat kunnen wij niet weten.
 */

/** De huurtermijn van het vaste waterschadepakket, uit de catalogus. */
const WATER_TERMIJN = termijnZonderDikte("waterschade");

/** Het ondertekende vochtrapport is een betalende optie, geen standaard. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");

const WHATSAPP = "https://wa.me/3236899065";

/** WhatsApp staat niet in de v3-iconenset; dit is de enige plek waar hij hoort. */
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.84-.85 2.04s.87 2.37 1 2.53c.12.17 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
  </svg>
);

/*
  Wat iemand zelf doet in de eerste twee dagen, los van ons. De vier stappen
  eronder ("Zo werken wij") gaan over de levering; deze gaan over de schade.
  Wie zoekt op "waterschade drogen" wil eerst weten wat hij nú moet doen.
  De teksten staan per taal in WaterschadePage.copy.tsx, in dezelfde volgorde.
*/
const EERSTE_UREN_ICONEN: ComponentType<{ size?: number }>[] = [
  StroomUitIcon,
  KraanIcon,
  FotoIcon,
  PompIcon,
  DoosIcon,
  DrogerIcon,
];

/**
 * De soorten waterschade die wij in de praktijk tegenkomen, met per soort waar
 * het vocht gaat zitten en wat de aanpak is.
 *
 * Dit stond er niet, en dat was de grootste leemte van de pagina: iemand met
 * een natte vloer weet niet of zijn geval "erg" is. Het verschil tussen een
 * tegelvloer op beton en water onder een zwevende chape bepaalt of het drogen
 * dagen of weken duurt — en of er uitgebroken moet worden.
 *
 * Elke kaart heeft een eigen beeld dat de schade en de bijbehorende aanpak
 * herkenbaar maakt, ook voor iemand die de technische benaming niet kent.
 * De teksten (en de alt) staan per taal in de copy, in dezelfde volgorde.
 */
const SCHADEFOTOS: { foto: string; fotoHd: string }[] = [
  { foto: "/vernast/waterschade-leiding.webp", fotoHd: "/vernast/waterschade-leiding-hd.webp" },
  { foto: "/vernast/waterschade-kelder.webp", fotoHd: "/vernast/waterschade-kelder-hd.webp" },
  { foto: "/vernast/waterschade-vloeropbouw.webp", fotoHd: "/vernast/waterschade-vloeropbouw-hd.webp" },
  { foto: "/vernast/waterschade-van-boven.webp", fotoHd: "/vernast/waterschade-van-boven-hd.webp" },
];

/*
  Het volledige verloop van een schadegeval, van het moment dat de klant het
  ziet tot het rapport, staat in de copy (`verloop`).

  Hier stond een stappenplan dat met "Bel ons" begon. Dat is niet waar een
  schadegeval begint: de klant ziet eerst de schade, belt dan doorgaans zijn
  verzekeraar, en komt pas daarna bij ons. Wie die eerste twee stappen
  weglaat, lijkt te doen alsof de klant al wist dat hij ons nodig had.
  `wie` zegt per stap wie aan zet is, zodat dat zichtbaar blijft.
*/

/** De werven die we als referentie tonen; alle vier waterschadegevallen. */
const REFERENTIES = [
  "kelder-en-kamer-drogen-antwerpen",
  "kelder-drogen-lokeren",
  "badkamer-drogen-brussel",
  "waterschade-drogen-bedrijfsgebouw",
  "berging-drogen-berlare",
  "woning-drogen-brussel",
]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r)
  .slice(0, 3);

/*
  De vragen die iemand met een ondergelopen kelder daadwerkelijk stelt staan
  in de copy (`faqs`).

  Deze pagina had als enige van de vier commerciële landingspagina's geen
  FAQ — terwijl waterschade de meest urgente en meest gezochte situatie is.
  Wie in paniek "hoe lang duurt drogen na waterschade" vraagt aan een
  assistent, kreeg hier niets te citeren; nieuwbouw en renovatie wel.
*/

const WaterschadePage = () => {
  const taal = useTaal();
  const t = useCopy(WS_COPY);
  const lp = useLokaalPad();
  const toon = useToonBedrag();

  /*
    In het Nederlands blijft de prijs staan zoals ze altijd stond (excl. btw);
    in het Frans en het Engels volgt ze de keuze particulier/bedrijf uit de
    keuzepopup. Het voorzetsel staat per taal apart: zonder die keuze kreeg
    het Engels "pour", want alles wat niet Nederlands was, werd Frans.
  */
  let rapportPrijs = "";
  if (RAPPORT) {
    if (taal === "nl") rapportPrijs = ` voor ${euro(RAPPORT.price)} excl. btw`;
    else {
      const b = toon(RAPPORT.price);
      rapportPrijs = `${taal === "en" ? " for" : " pour"} ${b.tekst} ${b.label}`;
    }
  }
  const termijn = WATER_TERMIJN
    ? taal === "nl"
      ? termijnLabel(WATER_TERMIJN)
      : taal === "en"
        ? termijnLabelEn(WATER_TERMIJN)
        : termijnLabelFr(WATER_TERMIJN)
    : null;
  const ctx: WsCtx = { lp, rapportPrijs, termijn };
  const faqs = t.faqs(ctx);
  const verloop: VerloopStap[] = t.verloop;

  return (
  <div className="v3c ws-page heeft-urgbar">
    <PageMeta
      {...useSeo("waterschade")}
      jsonLd={[
        serviceSchema({
          name: t.schemaNaam,
          description: t.schemaBeschrijving,
          path: lp("/waterschade"),
          serviceType: t.schemaType,
        }),
        faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema([
          { name: t.kruimelHome, path: lp("/") },
          { name: t.kruimelPagina, path: lp("/waterschade") },
        ]),
      ]}
    />

    <V3Header lightAfter={420} />

    <main>

    {/* ================= HERO ================= */}
    <div className="redtop">
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="pulse"><i /> {t.pulse}</span>
            <h1>{t.h1}</h1>
            <p>{t.heroP}</p>
            <div className="hcta">
              <a className="btn btn-white" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {t.bel} {CONTACT.phoneLocal}
              </a>
              {/*
                Hier stond "WhatsApp ons". Die knop opende een app die niet
                iedereen heeft en liet de bezoeker de pagina verlaten; wie geen
                zin heeft om te bellen, wil gewoon zijn situatie kunnen
                beschrijven. WhatsApp blijft wel staan in de spoedbalk onderaan
                op een telefoon, waar hij thuishoort.
              */}
              <a className="btn btn-ghost" href="#formulier">
                {t.aanvraag}
                <ArrowRightIcon />
              </a>
            </div>
          </div>
          <div className="hero-vis">
            <img
              className="framed"
              src="/vernast/case-waterschade-v3.webp"
              alt={t.heroAlt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <div className="fbadge rd" style={{ bottom: "60px", left: "-6%" }}>
              <span className="ic"><WarnIcon size={15} /></span>
              <div>
                {t.badgeTitel}
                <small>{t.badgeSub}</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* ================= VERTROUWENSRIJ ================= */}
    <div className="wrap">
      <div className="trust">
        <div><BoltIcon size={19} /> {t.trust[0]}</div>
        <div><ShieldIcon size={19} /> {t.trust[1]}</div>
        <div><SupportIcon size={19} /> {t.trust[2]}</div>
        <div><CheckIcon size={17} strokeWidth={3} /> {t.trust[3]}</div>
      </div>
    </div>

    {/* ================= DE EERSTE 48 UUR ================= */}
    <section className="sw" id="eerste-48-uur">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.eersteKick}</span>
          <h2 className="sec">{t.eersteH2}</h2>
          <p className="lede">{t.eersteLede}</p>
        </div>
        <div className="stapkaarten">
          {t.eersteUren.map((stap, i) => {
            const Icon = EERSTE_UREN_ICONEN[i];
            return (
              <Reveal from="up" delay={(i % 3) * 0.08} className="stk" key={stap.title}>
                <span className="stkic">
                  <Icon size={21} />
                </span>
                <span className="stknr">{String(i + 1).padStart(2, "0")}</span>
                <h3>{stap.title}</h3>
                <p>{stap.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* ================= SOORTEN WATERSCHADE ================= */}
    <section className="sr" id="soorten">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.soortenKick}</span>
          <h2 className="sec">{t.soortenH2}</h2>
          <p className="lede">{t.soortenLede}</p>
        </div>
        <div className="schades">
          {t.schadetypes.map((s, i) => {
            const { foto, fotoHd } = SCHADEFOTOS[i];
            return (
              <Reveal from="up" delay={(i % 2) * 0.08} className="schade" key={s.titel}>
                <div className="sfoto">
                  <img
                    src={foto}
                    srcSet={`${foto} 1672w, ${fotoHd} 3344w`}
                    sizes="(max-width: 860px) calc(100vw - 40px), calc((100vw - 82px) / 2)"
                    alt={s.fotoAlt}
                    width={1672}
                    height={941}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="stekst">
                  <span className="slabel">{s.label}</span>
                  <h3>{s.titel}</h3>
                  <p>{s.tekst}</p>
                  <span className="saanpak">
                    <CheckIcon size={13} strokeWidth={3} />
                    <span>
                      <b>{t.aanpakLabel}</b>
                      {s.aanpak}
                    </span>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="note">{t.elkUur}</div>
      </div>
    </section>

    {/*
      VERZEKERING — voorzichtig geformuleerd. Hier stond "Uw verzekering
      betaalt dit" en "dekt in de meeste gevallen de volledige kost". Dat
      kunnen wij niet weten: het hangt af van de polis en de oorzaak, en een
      belofte die de verzekeraar daarna niet nakomt komt bij ons terug.

      De vorm is een `manband` en niet langer een wit paneel met een foto
      ernaast: de technieker kwam daar tegen de bovenrand van het kader en de
      drie alinea's lazen als een brief. Nu drie korte punten in het rode blok,
      met de rest in de FAQ.
    */}
    <section className="sw">
      <div className="wrap">
        <div className="split boven">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="kick">{t.dossierKick}</span>
            <h2 className="sec">{t.dossierH2}</h2>
            <p className="lede">{t.dossierP1}</p>
            <p className="lede">{t.dossierP2}</p>
          </div>

          <div>
            {/*
              Een nagebouwd dossier dat zichzelf opbouwt. `aria-hidden` omdat het
              beeld is en geen inhoud: de waarden erin zijn een voorbeeld, geen
              echte meting, en een schermlezer zou ze anders als feiten voorlezen.
              De opmaak en de lus staan in v3-content.css.
            */}
            <div className="dossier" aria-hidden="true">
              <div className="dos-kop">
                <div>
                  <span className="dk-l">{t.dos.soort}</span>
                  <b>{t.dos.titel}</b>
                </div>
                <span className="dk-merk">Vernast</span>
              </div>

              <div className="dos-meta">
                <div>
                  <span>{t.dos.ruimteL}</span>
                  <b>{t.dos.ruimte}</b>
                </div>
                <div>
                  <span>{t.dos.oorzaakL}</span>
                  <b>{t.dos.oorzaak}</b>
                </div>
                <div>
                  <span>{t.dos.techniekerL}</span>
                  <b>Vernast</b>
                </div>
                <div>
                  <span>{t.dos.dossierL}</span>
                  <b>WS-0413</b>
                </div>
              </div>

              <div className="dos-body">
                <div className="dos-blok">
                  <div className="dos-t">
                    <i>1</i>
                    <b>{t.dos.vaststelling}</b>
                  </div>
                  <div className="dos-regels">
                    <i /><i /><i />
                  </div>
                </div>

                <div className="dos-blok">
                  <div className="dos-t">
                    <i>2</i>
                    <b>{t.dos.foto}</b>
                  </div>
                  <div className="dos-fotos">
                    <i /><i /><i />
                  </div>
                </div>

                <div className="dos-blok">
                  <div className="dos-t">
                    <i>3</i>
                    <b>{t.dos.metingen}</b>
                  </div>
                  {/* Voorbeeldwaarden; in het Engels met decimale punt en "78%" zonder spatie. */}
                  <div className="dos-meet">
                    <div>
                      <b>{taal === "en" ? "78%" : "78 %"}</b>
                      <span>{t.dos.chape}</span>
                      <em style={{ "--v": "78%" } as React.CSSProperties} />
                    </div>
                    <div>
                      <b>{taal === "en" ? "14.2°" : "14,2°"}</b>
                      <span>{t.dos.oppervlak}</span>
                      <em style={{ "--v": "55%" } as React.CSSProperties} />
                    </div>
                    <div>
                      <b>{taal === "en" ? "82%" : "82 %"}</b>
                      <span>{t.dos.rvLucht}</span>
                      <em style={{ "--v": "82%" } as React.CSSProperties} />
                    </div>
                  </div>
                </div>

                <div className="dos-blok">
                  <div className="dos-t">
                    <i>4</i>
                    <b>{t.dos.aanpak}</b>
                  </div>
                  <div className="dos-regels">
                    <i /><i /><i />
                  </div>
                </div>

                <div className="dos-slot">
                  <span className="dos-label">{t.dos.conclusieL}</span>
                  <p>{t.dos.conclusie}</p>
                  <span className="dos-stempel">
                    {t.dos.stempel1}
                    <br />
                    {t.dos.stempel2}
                  </span>
                </div>
              </div>
            </div>
            <p className="dosbijschrift">{t.dosBijschrift}</p>
          </div>
        </div>
        <div className="manband">
          <div className="mb-t">
            <span className="mbk">{t.krijgtKick}</span>
            <h3>{t.krijgtH3}</h3>
            <p>{t.krijgtP(ctx)}</p>
            <div className="mb-cta">
              <a className="btn btn-white" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {t.bel} {CONTACT.phoneLocal}
              </a>
              <a className="btn btn-ghost" href="#formulier">
                {t.aanvraag}
                <ArrowRightIcon />
              </a>
            </div>
          </div>
          <img
            className="mb-man"
            src="/vernast/man-klembord.webp"
            alt={t.krijgtAlt}
            width={600}
            height={700}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    {/*
      DE DROOGTECHNIEK — één kop, en de uitleg eronder zonder tweede kop.

      Hier stonden een sectiekop ("Zit het vocht in de kamer, of in de vloer?")
      en vlak daaronder een tweede kop boven het adsorptieblok, met vier
      alinea's eronder. Dat las als twee secties die hetzelfde zeggen: de lede
      legde het verschil tussen de twee machines al uit, en de alinea's deden
      het nog eens over. De kop staat er nu één keer; wat eronder staat is het
      geval waarvoor iemand ons belt, in twee alinea's.
    */}
    <section className="sr" id="techniek">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.techKick}</span>
          <h2 className="sec">{t.techH2}</h2>
          <p className="lede">{t.techLede}</p>
        </div>

        <div className="split boven" style={{ marginBottom: "44px" }}>
          <div>
            <p className="lede" style={{ marginTop: 0 }}>{t.techP1}</p>
            <p className="lede">{t.techP2(ctx)}</p>
            <div className="chips">
              {t.techChips.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
          <Reveal from="up" className="split-vis">
            <img
              src="/vernast/eco-revolution.webp"
              alt={t.techAlt}
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
              style={{ background: "#fff" }}
            />
          </Reveal>
        </div>

        <div className="g3">
          {t.kaarten.map((k, i) => {
            const Icon = [LekIcon, BoltIcon, WindIcon][i];
            return (
              <Reveal from="up" delay={i * 0.08} className="kaart" key={k.titel}>
                <div className="ki"><Icon size={20} /></div>
                <h3>{k.titel}</h3>
                <p>{k.p1}</p>
                <p>{k.p2}</p>
              </Reveal>
            );
          })}
        </div>
        <div className="note">{t.techNote}</div>
      </div>
    </section>

    {/* ================= ZO WERKEN WIJ ================= */}
    <section className="sw" id="zo-werken-wij">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.werkKick}</span>
          <h2 className="sec">{t.werkH2}</h2>
          <p className="lede">{t.werkLede}</p>
        </div>
        <StappenCarrousel stappen={verloop} label={t.carrouselLabel} />
      </div>
    </section>

    {/* ================= REFERENTIES ================= */}
    <section className="sr">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">{t.refKick}</span>
          <h2 className="sec">{t.refH2}</h2>
          <p className="lede">{t.refLede}</p>
        </div>
        <div className="refs">
          {REFERENTIES.map((r, i) => (
            <Reveal from="up" delay={(i % 3) * 0.08} key={r.slug}>
              <Link className="rz" to={lp(`/realisaties/${r.slug}`)}>
                <img src={r.kaart} alt={r.kaartAlt} width={640} height={420} loading="lazy" decoding="async" />
                <div className="rzt">
                  <span className="rzl">{r.locatie}</span>
                  <h3>{r.titel}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="tblnote" style={{ textAlign: "center" }}>
          <Link to={lp("/realisaties?soort=waterschade")} style={{ fontWeight: 600 }}>
            {t.refAlle}
          </Link>
        </p>
        <div className="note">{t.refNote(ctx)}</div>
      </div>
    </section>

    <FaqBlok
      titel={t.faqTitel}
      vragen={faqs}
      sleutel="ws-faq"
      variant="wit"
    >
      {/*
        De slotplaat staat binnen de FAQ-sectie: wie de vragen gelezen heeft
        is klaar om te bellen, en een lege witte strook ertussen brak dat
        moment. `bijsnijden` haalt de transparante onderrand van de foto weg,
        zodat de technieker en de bestelwagen op de rand staan in plaats van
        erboven te zweven.
      */}
      <div className="manband">
        <div className="mb-t">
          <span className="mbk">{t.nuKick}</span>
          <h3>{t.nuH3}</h3>
          <p>{t.nuP}</p>
          <div className="mb-cta">
            <a className="btn btn-white" href={`tel:${CONTACT.phoneE164}`}>
              <PhoneIcon /> {t.bel} {CONTACT.phoneLocal}
            </a>
            <a className="btn btn-ghost" href="#formulier">
              {t.aanvraag}
              <ArrowRightIcon />
            </a>
          </div>
        </div>
        <img
          className="mb-man breed bijsnijden tegenrand"
          src="/vernast/man-bestelwagen.webp"
          alt={t.nuAlt}
          width={1440}
          height={800}
          loading="lazy"
          decoding="async"
        />
      </div>
    </FaqBlok>

    <ContactBlok
      kicker={t.contactKicker}
      titel={t.contactTitel}
      lede={t.contactLede}
      onderwerpen={t.contactOnderwerpen}
      placeholder={t.contactPlaceholder}
    />

    </main>

    <V3Footer />

    {/*
      De spoedbalk, alleen op een telefoon. Wie met een ondergelopen kelder op
      zijn gsm staat te zoeken, moet niet eerst terugscrollen naar de hero om
      te kunnen bellen. Staat ná de footer in de DOM zodat de leesvolgorde van
      de pagina klopt; CSS zet hem onderaan het scherm vast.
    */}
    <div className="urgbar">
      <b><WarnIcon size={18} /> {t.urgTitel}</b>
      <div className="ubtns">
        <a className="ubtn" href={`tel:${CONTACT.phoneE164}`} aria-label={`${t.urgBelAria} ${CONTACT.phoneLocal}`}>
          <PhoneIcon size={18} />
        </a>
        <a
          className="ubtn wa"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.urgWhatsApp}
        >
          <WhatsAppIcon size={19} />
        </a>
      </div>
    </div>
  </div>
  );
};

export default WaterschadePage;
