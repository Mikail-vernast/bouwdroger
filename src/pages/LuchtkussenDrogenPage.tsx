import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import FaqBlok from "@/components/content/FaqBlok";
import ContactBlok from "@/components/content/ContactBlok";
import VerderLezen, { type LeesGroep } from "@/components/VerderLezen";
import { ArrowRightIcon, CheckIcon, ClipboardIcon, HouseIcon, PhoneIcon } from "@/components/home-v3/icons";
import { GaugeIcon, LayersIcon, ThermoIcon, WarnIcon, WindIcon } from "@/components/content/icons";
import { WAAROM_ANIM, WerkingSchema } from "@/components/content/LuchtkussenAnim";
import { useSeo } from "@/data/seo";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { euro } from "@/data/tarieflijst";
import { PRODUCTS, toestelPad } from "@/data/verhuur";
import { toestelLabelIn } from "@/data/navigation";
import { productInTaal } from "@/data/verhuur.fr";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { NUMBER_LOCALE } from "@/i18n/taal";
import { BEELDEN, COPY, LUCHTKUSSEN_PAD, WERKING_BEELD } from "./LuchtkussenDrogenPage.copy";
import "@/styles/v3-content.css";
import "@/styles/luchtkussen.css";

/**
 * Luchtkussen drogen: een techniek, geen aparte dienst.
 *
 * /waterschade verkoopt de droging na een lek; de toestelpagina van de
 * adsorptiedroger verkoopt de huur. Deze pagina beantwoordt de vraag daartussen
 * — "waarom droogt u alleen die wand onder folie, en niet de hele kamer?" — en
 * stuurt dan naar een van die twee door.
 *
 * De eerste versie had een eigen opmaak (`lk-hero`, een herofoto over de volle
 * breedte die de hele eerste schermhoogte vulde, een kruimelpad rood op rood)
 * en was vooral voorbehoud: geen prijs, geen vergelijking, geen dossier, en het
 * waarom van de techniek in één zin. Nu draagt ze dezelfde bouwstenen als
 * /waterschade, wisselen rood en wit elkaar af, en staat de natuurkunde erachter
 * uitgewerkt — dat is de vraag die klanten ons aan de telefoon stellen.
 *
 * Het voorbehoud blijft: een droge bovenkant is geen droge vloeropbouw. Voor
 * vocht ín de constructie verwijst de pagina naar de aanpak op /waterschade.
 */

/* De dagprijs komt uit de gepubliceerde tarieven, nooit overgetypt. Haalt het
   portaal het toestel uit de verhuur, dan valt het huurblok stil weg. */
const DROGER_KEY = "revolution";

/* Rekenvoorbeeld in het techniekblok. Ronde, herkenbare maten; de uitkomst
   wordt berekend zodat tekst en getal in geen enkele taal uit elkaar lopen. */
const KAMER = { l: 5, b: 4, h: 2.5 };
const ZONE = { breed: 4, hoog: 1, bol: 0.1 };
const KAMER_M3 = KAMER.l * KAMER.b * KAMER.h;
const ZONE_M3 = ZONE.breed * ZONE.hoog * ZONE.bol;

/* Iconen in de volgorde van de lijsten in de copy. De vier van het techniekblok
   staan in LuchtkussenAnim: die bewegen, en ze zijn niet rood. */
const STAP_ICONEN = [WarnIcon, GaugeIcon, LayersIcon, WindIcon, ClipboardIcon, CheckIcon];
const POLIS_ICONEN = [WarnIcon, GaugeIcon, ClipboardIcon];

/* Dossiers na waterschade. Geen ervan is specifiek een luchtkussenopstelling;
   de kop zegt dat ook niet. `getRealisatie` geeft undefined zodra een dossier
   uit de lijst verdwijnt; die valt dan stil weg. */
const REFERENTIES = ["kelder-en-kamer-drogen-antwerpen", "badkamer-drogen-brussel", "waterschade-drogen-bocholt"]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r);

/* De doelen van "verder lezen", in de volgorde van de groepen en links in de copy. */
const LEES_DOELEN: { to: string; toestel?: string }[][] = [
  [{ to: "/waterschade" }, { to: "/realisaties?soort=waterschade" }, { to: "/hoe-drogen-werkt" }],
  [{ to: toestelPad("revolution"), toestel: "revolution" }, { to: toestelPad("ttv4500"), toestel: "ttv4500" }],
  [{ to: "/gids/condensdroger-of-adsorptiedroger" }, { to: "/drooggarantie" }],
];

export default function LuchtkussenDrogenPage() {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const seo = useSeo("luchtkussenDrogen");
  const [wand, vloer] = BEELDEN;

  const getal = (n: number) => n.toLocaleString(NUMBER_LOCALE[taal], { maximumFractionDigits: 1 });
  const reken = t.reken({
    l: getal(KAMER.l), b: getal(KAMER.b), h: getal(KAMER.h), kamer: getal(KAMER_M3),
    breed: getal(ZONE.breed), hoog: getal(ZONE.hoog), bol: getal(ZONE.bol * 100), zone: getal(ZONE_M3),
    aandeel: getal((ZONE_M3 / KAMER_M3) * 100),
  });

  /* Nederlands toont de dagprijs excl. btw, zoals de rest van de NL-site; Frans
     en Engels volgen de keuze particulier/bedrijf uit de keuzepopup. */
  const droger = PRODUCTS[DROGER_KEY] ? productInTaal(DROGER_KEY, taal) : undefined;
  const dagprijs = droger
    ? taal === "nl"
      ? { tekst: euro(droger.day), label: "excl. btw" }
      : toon(droger.day)
    : null;

  const verderLezen: LeesGroep[] = t.verderLezen.map((g, gi) => ({
    kop: g.kop,
    links: g.links.map((l, li) => ({ ...l, to: lp(LEES_DOELEN[gi][li].to), toestel: LEES_DOELEN[gi][li].toestel })),
  }));

  return (
    <div className="v3c lk-page">
      <PageMeta
        {...seo}
        path={lp(LUCHTKUSSEN_PAD)}
        image={wand}
        jsonLd={[
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.schade, path: lp("/waterschade") },
            { name: t.naam, path: lp(LUCHTKUSSEN_PAD) },
          ]),
          serviceSchema({ name: t.naam, description: seo.description, path: lp(LUCHTKUSSEN_PAD), serviceType: t.schemaType }),
          faqSchema(t.faq.map(({ q, a }) => ({ question: q, answer: a }))),
        ]}
      />
      <V3Header lightAfter={420} />

      <main>
        {/* ================= HERO ================= */}
        <div className="redtop">
          <section className="hero">
            <div className="wrap hero-grid">
              <div className="hero-copy">
                {/* Een platte kicker, zoals op /drooggarantie. Hier stonden een
                    kruimelpad en een glazen pil (`.pulse`): grijs-doorschijnend
                    op donkerrood, waardoor de bovenkant troebel oogde. Het
                    kruimelpad blijft wél in de JSON-LD hieronder staan. */}
                <span className="kick">{t.heroKick}</span>
                <h1>{t.h1}</h1>
                <p>{t.intro}</p>
                <div className="hcta">
                  <a className="btn btn-white" href={`tel:${CONTACT.phoneE164}`}>
                    <PhoneIcon /> {t.bel} {CONTACT.phoneLocal}
                  </a>
                  <a className="btn btn-ghost" href="#formulier">
                    {t.beschrijf} <ArrowRightIcon />
                  </a>
                </div>
              </div>
              <div className="hero-vis">
                <img className="framed" src={wand} alt={t.alt[0]} width={1536} height={1024} fetchPriority="high" />
                <div className="fbadge" style={{ bottom: "60px", left: "-6%" }}>
                  <span className="ic"><LayersIcon size={15} /></span>
                  <div>
                    {t.badge}
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
            <div><LayersIcon size={19} /> {t.trust[0]}</div>
            <div><ThermoIcon size={19} /> {t.trust[1]}</div>
            <div><HouseIcon size={19} /> {t.trust[2]}</div>
            <div><CheckIcon size={17} strokeWidth={3} /> {t.trust[3]}</div>
          </div>
        </div>

        {/* ================= WERKING ================= */}
        <section className="sw" id="werking">
          <div className="wrap">
            <div className="split boven">
              <div>
                <span className="kick">{t.werkingKick}</span>
                <h2 className="sec">{t.werkingTitel}</h2>
                {t.werking.map((p) => <p className="lede" key={p}>{p}</p>)}
                <div className="chips">
                  {t.chips.map((c) => <span key={c}>{c}</span>)}
                </div>
              </div>
              <Reveal from="up" className="split-vis lk-vis">
                {WERKING_BEELD
                  ? <img src={WERKING_BEELD} alt={t.schema.titel} width={1536} height={1024} loading="lazy" decoding="async" />
                  : <WerkingSchema t={t.schema} />}
                <p className="lk-cap">{t.schema.bijschrift}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= WAAROM NIET DE HELE RUIMTE ================= */}
        <section className="sr" id="techniek">
          <div className="wrap">
            <div className="sec-head">
              <span className="kick">{t.waaromKick}</span>
              <h2 className="sec">{t.waaromTitel}</h2>
              <p className="lede">{t.waaromIntro}</p>
            </div>
            {/* Vier kaarten op één rij, niet drie met een gat ernaast. */}
            <div className="g4">
              {t.waarom.map(({ kop, tekst }, i) => {
                const Anim = WAAROM_ANIM[i];
                return (
                  <Reveal from="up" delay={(i % 4) * 0.08} className="kaart" key={kop}>
                    <div className="ki lka-ki"><Anim /></div>
                    <h3>{kop}</h3>
                    <p>{tekst}</p>
                  </Reveal>
                );
              })}
            </div>
            <div className="note"><b>{t.rekenKop}</b> {reken}</div>
          </div>
        </section>

        {/* ================= KEUZEHULP ================= */}
        <section className="sw" id="vergelijking">
          <div className="wrap">
            <div className="sec-head">
              <span className="kick">{t.vglKick}</span>
              <h2 className="sec">{t.vglTitel}</h2>
              <p className="lede">{t.vglIntro}</p>
            </div>
            <div className="vs">
              <Reveal from="up" className="vscard goed">
                <div className="vshead">
                  <span><LayersIcon size={17} /></span>
                  <h3>{t.vglFolie}</h3>
                </div>
                <p className="vskies">{t.vglKiesBij}:</p>
                <ul>
                  {t.folie.map((item) => <li key={item}><CheckIcon size={14} strokeWidth={3} /><span>{item}</span></li>)}
                </ul>
              </Reveal>
              <Reveal from="up" delay={0.08} className="vscard">
                <div className="vshead">
                  <span><WindIcon size={17} /></span>
                  <h3>{t.vglRuimte}</h3>
                </div>
                <p className="vskies">{t.vglKiesBij}:</p>
                <ul>
                  {t.ruimte.map((item) => <li key={item}><CheckIcon size={14} strokeWidth={3} /><span>{item}</span></li>)}
                </ul>
              </Reveal>
            </div>
            <div className="note">
              <b>{t.constructieKop}</b> {t.constructieVoor}{" "}
              <Link to={lp("/waterschade")}>{t.constructieLink}</Link>
              {t.constructieMidden}{" "}
              <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>{t.gidsLink}</Link>.
            </div>
          </div>
        </section>

        {/* ================= OPSTELLINGEN ================= */}
        <section className="sr" id="toepassingen">
          <div className="wrap">
            <div className="sec-head">
              <span className="kick">{t.opstKick}</span>
              <h2 className="sec">{t.opstTitel}</h2>
              <p className="lede">{t.opstIntro}</p>
            </div>
            <div className="lk-images">
              {[[wand, 0], [vloer, 2]].map(([src, i], n) => (
                <Reveal as="figure" from="up" delay={n * 0.08} key={src}>
                  <img src={src as string} alt={t.alt[i as number]} width={1536} height={1024} loading="lazy" decoding="async" />
                  <figcaption>{t.captions[i as number]}</figcaption>
                </Reveal>
              ))}
            </div>
            <div className="g2 lk-geschikt">
              <Reveal from="up" className="kaart">
                <div className="ki"><CheckIcon size={18} strokeWidth={3} /></div>
                <h3>{t.past}</h3>
                <p>{t.pastTekst}</p>
              </Reveal>
              <Reveal from="up" delay={0.08} className="kaart">
                <div className="ki"><WarnIcon size={20} /></div>
                <h3>{t.onderzoek}</h3>
                <p>{t.onderzoekTekst}</p>
              </Reveal>
            </div>
            <p className="lk-note">{t.note}</p>
          </div>
        </section>

        {/* ================= AANPAK ================= */}
        <section className="sw" id="aanpak">
          <div className="wrap">
            <div className="sec-head">
              <span className="kick">{t.aanpakKick}</span>
              <h2 className="sec">{t.aanpakTitel}</h2>
              <p className="lede">{t.aanpakIntro}</p>
            </div>
            <div className="stapkaarten">
              {t.stappen.map(({ kop, tekst }, i) => {
                const Icon = STAP_ICONEN[i];
                return (
                  <Reveal from="up" delay={(i % 3) * 0.08} className="stk" key={kop}>
                    <span className="stkic"><Icon size={21} /></span>
                    <span className="stknr">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{kop}</h3>
                    <p>{tekst}</p>
                  </Reveal>
                );
              })}
            </div>
            {droger && dagprijs && (
              <div className="lk-related">
                <div>
                  <h3>{t.huurKop}</h3>
                  {/* `toestelLabelIn` en niet `droger.name`: dat laatste is de
                      naam uit het portaal ("Adsorptiedroger Revolution"),
                      terwijl het menu en de toestelpagina "Revolution
                      adsorptiedroger" zeggen. Zie `toestelLabel`. */}
                  <p>{t.huur(toestelLabelIn(DROGER_KEY, taal), dagprijs.tekst, dagprijs.label)}</p>
                </div>
                <Link className="btn btn-red" to={lp(toestelPad(DROGER_KEY))}>
                  {t.huurKnop} <ArrowRightIcon />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ================= VERZEKERING =================
            Na de aanpak, want pas als duidelijk is wát we meten en vastleggen,
            zegt "uw dossier" iets. De formulering blijft voorzichtig: wat een
            polis dekt hangt van die polis af, en dat kunnen wij niet beoordelen
            — dezelfde lijn als op /waterschade. */}
        <section className="sr" id="verzekering">
          <div className="wrap">
            <div className="sec-head">
              <span className="kick">{t.polisKick}</span>
              <h2 className="sec">{t.polisTitel}</h2>
              <p className="lede">{t.polisIntro}</p>
            </div>
            <div className="lk-polis">
              {t.polis.map(({ kop, punten }, i) => {
                const Icon = POLIS_ICONEN[i];
                return (
                  <Reveal from="up" delay={(i % 3) * 0.08} className="kaart" key={kop}>
                    <div className="num">{i + 1}</div>
                    <h3>{kop}</h3>
                    <ul>
                      {punten.map((punt) => (
                        <li key={punt}><CheckIcon size={13} strokeWidth={3} /><span>{punt}</span></li>
                      ))}
                    </ul>
                    <span className="lk-polis-ic" aria-hidden="true"><Icon size={18} /></span>
                  </Reveal>
                );
              })}
            </div>
            <div className="lk-polis-meer">
              <Link className="btn btn-white" to={lp("/waterschade")}>
                {t.polisLink} <ArrowRightIcon />
              </Link>
              <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {t.bel} {CONTACT.phoneLocal}
              </a>
            </div>
            <p className="lk-note">{t.polisNote}</p>
          </div>
        </section>

        {/* ================= FAQ =================
            Wit, want de verzekeringssectie erboven staat op rood en de
            referenties eronder weer. De slotplaat met de bestelwagen stond
            hierin; die is eruit — ze herhaalde het vraagformulier onderaan,
            en haar tweede knop was zwart op zwart. */}
        <FaqBlok titel={t.faqTitel} vragen={t.faq} sleutel="luchtkussen" variant="wit" vraagHref="#formulier" />

        {/* ================= REFERENTIES ================= */}
        {REFERENTIES.length > 0 && (
          <section className="sr" id="referenties">
            <div className="wrap">
              <div className="sec-head mid">
                <span className="kick">{t.refsKick}</span>
                <h2 className="sec">{t.refsTitel}</h2>
                <p className="lede">{t.refsIntro}</p>
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
            </div>
          </section>
        )}

        <VerderLezen titel={t.verderLezenTitel} kicker={t.verderLezenKicker} groepen={verderLezen} achtergrond="sw" />

        {/* Rood, zodat het formulier bij de rest van de pagina hoort in plaats
            van als een losse witte staart te eindigen. Daardoor loopt het ritme
            door: FAQ wit, referenties rood, verder lezen wit, formulier rood. */}
        <ContactBlok
          titel={t.contactTitel}
          lede={t.contactIntro}
          onderwerpen={t.onderwerpen}
          placeholder={t.placeholder}
        />
      </main>
      <V3Footer />
    </div>
  );
}
