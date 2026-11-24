import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import Pakketkaarten from "@/components/content/Pakketkaarten";
import ContactBlok from "@/components/content/ContactBlok";
import FaqBlok from "@/components/content/FaqBlok";
import VerderLezen from "@/components/VerderLezen";
import {
  ArrowRightIcon,
  BrushIcon,
  CardIcon,
  CellarIcon,
  CheckIcon,
  ChecklistIcon,
  DropIcon,
  HouseIcon,
  MoldIcon,
  PhoneIcon,
  RefreshIcon,
  SupportIcon,
  TruckIcon,
} from "@/components/home-v3/icons";
import {
  DoosIcon,
  DrogerIcon,
  GaugeIcon,
  ThermoIcon,
  WindIcon,
} from "@/components/content/icons";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getRealisatie, type Realisatie } from "@/data/realisaties";
import { CONTACT } from "@/lib/site";
import "@/styles/v3-content.css";
import "@/styles/renovatie.css";
import { EXTRAS } from "@/data/verhuur";
import { RN_COPY } from "./RenovatiePage.copy";

/** Het ondertekende meetrapport, voor de Franse en Engelse chip; zie RenovatiePage.copy.tsx. */
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");

/**
 * Vochtige kelders en renovatievocht. Deze pagina stond tot november 2026 nog
 * op de oude shadcn-schil met de `Navbar`: wie uit het v3-menu op "renovatie"
 * klikte, belandde op een pagina die eruitzag als een andere site. Zelfde
 * inhoud, nu in de vormtaal van /hoe-drogen-werkt en /waarom-bouwdroging, met
 * <V3Header> en de gedeelde opmaak uit src/styles/v3-content.css.
 *
 * De kern van de pagina blijft ongewijzigd: wie "kelder drogen bouwdroger"
 * zoekt, moet weten dat een ontvochtiger opstijgend of doorslaand vocht niet
 * stopt. Een pagina die dat verzwijgt, verhuurt een toestel dat na de ophaling
 * niets heeft opgelost. Daarom staat die scheiding niet in een grijze kaart
 * onderaan, maar in een eigen sectie met een verdict per oorzaak.
 *
 * In november 2026 is de vorm bijgetrokken naar die van /waterschade, de
 * jongste van de drie situatiepagina's:
 *
 *   - de drie witte pillen in de hero zijn de vertrouwensrij eronder geworden
 *     (`.trust`). Ze zweefden los op het rood, en de header schoof er bij het
 *     scrollen half overheen;
 *   - de vijf oorzaken stonden als vijf kaarten in een raster van drie, met
 *     twee weesjes op de tweede rij. Nu een doorsnede van een keldermuur met
 *     genummerde bronnen, en de lijst ernaast met diezelfde nummers;
 *   - het stappenplan draagt de kaartvorm met pictogram (`.stapkaarten`);
 *   - de FAQ klapt uit zonder JavaScript (`.faq.uitklap`), zoals daar;
 *   - de kelders die we droogden staan als realisatiekaarten mét foto in
 *     plaats van als drie regels in een linkkolom.
 */

/*
  De teksten staan per taal in RenovatiePage.copy.tsx; hier alleen wat niet
  vertaald wordt, in dezelfde volgorde als de lijsten daar.
*/

/** Wat vocht met een woning en met de mensen erin doet. */
const GEVAAR_ICONEN = [MoldIcon, HouseIcon, CardIcon];

/**
 * Waar vocht in een kelder of muur vandaan komt — en of een bouwdroger het
 * oplost. `helpt: false` betekent niet "wij kunnen niets voor u doen", maar
 * "eerst de oorzaak, dan drogen".
 *
 * De volgorde is die van de nummers in de doorsnede hiernaast: van het koude
 * oppervlak binnen naar het vocht dat van buiten komt. Verander je de
 * volgorde, verzet dan ook `.vb-nr` in src/styles/renovatie.css — en de
 * volgorde van `oorzaken` in de copy.
 */
const OORZAAK_ICONEN = [DropIcon, BrushIcon, RefreshIcon, CellarIcon, HouseIcon];
const OORZAAK_HELPT = [true, true, true, false, false];

/** Zo pakt u een vochtige kelder aan, in deze volgorde. */
const STAP_ICONEN: ComponentType<{ size?: number }>[] = [
  GaugeIcon,
  ChecklistIcon,
  DoosIcon,
  DrogerIcon,
  ThermoIcon,
  WindIcon,
];

/** Na het drogen: wat voorkomt dat het terugkomt. */
const TIP_ICONEN = [ChecklistIcon, RefreshIcon, DropIcon];

/**
 * De kelders die we zelf drooglegden, als kaart met foto in plaats van als
 * drie regels in een linklijst. Wie twijfelt of drogen bij hém werkt, kijkt
 * naar een kelder die op de zijne lijkt, niet naar een linktekst.
 */
const REFERENTIES = ["kelder-drogen-brugge", "kelder-drogen-antwerpen", "schimmelsanering-winkelkelder"]
  .map(getRealisatie)
  .filter((r): r is Realisatie => !!r);

/**
 * De doorsnede van een keldermuur: grond buiten, metselwerk, de ruimte met de
 * droger erin. De vijf bronnen bewegen, de nummers verwijzen naar de lijst
 * ernaast.
 *
 * `aria-hidden`, en dat is geen slordigheid: alles wat de tekening zegt staat
 * voluit in die lijst. Deze pagina wordt geprerenderd voor lezers die geen
 * JavaScript en soms geen CSS uitvoeren (zie CLAUDE.md), en een blok dat
 * alleen in beweging iets zegt, zegt hun niets. De deeltjes zijn daarom
 * versiering bovenop tekst die er sowieso staat.
 */
const Muurdoorsnede = ({ grond, kelder }: { grond: string; kelder: string }) => (
  <div className="vbron" aria-hidden="true">
    <span className="vb-grond" />
    <span className="vb-muur" />
    <span className="vb-plafond" />
    <span className="vb-ruimte" />
    <span className="vb-vloer" />
    <span className="vb-droger" />
    <span className="vb-zuig" />
    <span className="vb-zuig" style={{ "--d": "1.5s" } as React.CSSProperties} />
    <span className="vb-zuig" style={{ "--d": "3s" } as React.CSSProperties} />

    <span className="vb-tag buiten">{grond}</span>
    <span className="vb-tag binnen">{kelder}</span>

    {/* 1 · condens op het koude muuroppervlak */}
    <span className="vb-p cond" />
    <span className="vb-p cond" style={{ "--d": "1.2s" } as React.CSSProperties} />
    <span className="vb-p cond" style={{ "--d": "2.4s" } as React.CSSProperties} />

    {/* 2 · bouwvocht uit de chape */}
    <span className="vb-p bouw" style={{ left: "52%", "--d": ".4s" } as React.CSSProperties} />
    <span className="vb-p bouw" style={{ left: "63%", "--d": "1.6s" } as React.CSSProperties} />
    <span className="vb-p bouw" style={{ left: "72%", "--d": "2.8s" } as React.CSSProperties} />

    {/* 3 · een druppel van bovenaf */}
    <span className="vb-p lek" style={{ right: "12%", "--d": ".8s" } as React.CSSProperties} />

    {/* 4 · opstijgend vocht in de muur zelf */}
    <span className="vb-p op" style={{ left: "27%" } as React.CSSProperties} />
    <span className="vb-p op" style={{ left: "31%", "--d": "1.4s" } as React.CSSProperties} />
    <span className="vb-p op" style={{ left: "34%", "--d": "2.6s" } as React.CSSProperties} />

    {/* 5 · doorslaand vocht, dwars door de muur */}
    <span className="vb-p door" style={{ top: "44%", "--d": ".2s" } as React.CSSProperties} />
    <span className="vb-p door" style={{ top: "56%", "--d": "2.3s" } as React.CSSProperties} />

    <span className="vb-nr n1">1</span>
    <span className="vb-nr n2">2</span>
    <span className="vb-nr n3">3</span>
    <span className="vb-nr n4">4</span>
    <span className="vb-nr n5">5</span>
  </div>
);

const RenovatiePage = () => {
  const taal = useTaal();
  const t = useCopy(RN_COPY);
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  /* Alleen het Frans en het Engels lezen de rapportprijs uit de catalogus; het
     Nederlands houdt zijn chips zoals ze stonden. */
  const rapportBedrag = RAPPORT ? toon(RAPPORT.price) : null;
  const rvChips = t.rvChips(
    taal !== "nl" && rapportBedrag ? `${rapportBedrag.tekst} ${rapportBedrag.label}` : "",
  );

  return (
  <div className="v3c rn-page">
    <PageMeta
      {...useSeo("renovatie")}
      jsonLd={[
        serviceSchema({
          name: t.schemaNaam,
          description: t.schemaBeschrijving,
          path: lp("/renovatie"),
          serviceType: t.schemaType,
        }),
        /*
          De vragen onderaan deze pagina, ook machineleesbaar. Ze stonden
          enkel zichtbaar op de pagina; daardoor kon een AI-antwoord er wel
          uit citeren, maar moest het de vraag-antwoordparen zelf uit de
          HTML afleiden. Zelfde tekst, dus schema en pagina blijven gelijk.
        */
        faqSchema(t.faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema([
          { name: t.kruimelHome, path: lp("/") },
          { name: t.kruimelPagina, path: lp("/renovatie") },
        ]),
      ]}
    />

    {/*
      De balk wisselt naar zijn lichte variant zodra `.redtop` onder hem
      ophoudt, en niet op een vast aantal pixels. Hij stond op 420: dan
      wisselde hij al terwijl hij nog boven het rood zweefde, en schoof als
      een melkwit vlak over de hero-tekst. Wie terugscrolde zag een menu dat
      je niet kon lezen. Een ander vast getal lost dat niet op: het rood is
      705 px hoog op een laptop en 1120 px op een telefoon.
    */}
    <V3Header lightAfter={660} darkUntil=".redtop" />

    <main>

    {/* ================= HERO ================= */}
    <div className="redtop">
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="kick">{t.heroKick}</span>
            <h1>{t.h1}</h1>
            <p>{t.heroP}</p>
            <div className="hcta">
              <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
                {t.cta}
                <ArrowRightIcon />
              </Link>
              <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                <PhoneIcon /> {CONTACT.phoneLocal}
              </a>
            </div>
          </div>
          <div className="hero-vis">
            <img
              className="framed"
              src="/vernast/case-kelder.webp"
              alt={t.heroAlt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <div className="fbadge rd" style={{ bottom: "60px", left: "-6%" }}>
              <span className="ic"><DropIcon size={15} /></span>
              <div>
                {t.badgeTitel}
                <small>{t.badgeSub}</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* ================= VERTROUWENSRIJ =================
        Deze vier beloftes stonden als witte pillen in de hero zelf. Daar
        zweefden ze los op het rood, en de header schoof er bij het scrollen
        half overheen. Op wit, onder de vouw van de hero, horen ze bij de
        pagina in plaats van bij het beeld. */}
    <div className="wrap">
      <div className="trust">
        <div><GaugeIcon size={19} /> {t.trust[0]}</div>
        <div><TruckIcon size={19} /> {t.trust[1]}</div>
        <div><ChecklistIcon size={19} /> {t.trust[2]}</div>
        <div><SupportIcon size={19} /> {t.trust[3]}</div>
      </div>
    </div>

    {/* ================= WAAROM NIET WACHTEN ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.gevarenKick}</span>
          <h2 className="sec">{t.gevarenH2}</h2>
          <p className="lede">{t.gevarenLede}</p>
        </div>
        <div className="g3">
          {t.gevaren.map(({ title, desc }, i) => {
            const Icon = GEVAAR_ICONEN[i];
            return (
              <Reveal from="up" delay={i * 0.08} className="kaart" key={title}>
                <div className="ki"><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* ================= HERKENT U DIT ================= */}
    <section className="sr">
      <div className="wrap split">
        <div>
          <span className="kick">{t.checkKick}</span>
          <h2 className="sec">{t.checkH2}</h2>
          <p className="lede">{t.checkP1}</p>
          <p className="lede">{t.checkP2(lp)}</p>
        </div>
        <Reveal from="right" className="checkcard">
          <ul>
            {t.checklist.map((item) => (
              <li key={item}>
                <CheckIcon size={16} strokeWidth={3} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="cfoot">
            <p>{t.checkFoot}</p>
            <a className="btn" href={`tel:${CONTACT.phoneE164}`}>
              <PhoneIcon /> {t.belOns}
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ================= OORZAAK OF SYMPTOOM ================= */}
    <section className="sw" id="oorzaken">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.oorzKick}</span>
          <h2 className="sec">{t.oorzH2}</h2>
          <p className="lede">{t.oorzLede}</p>
        </div>
        <div className="split boven">
          <Reveal from="left" className="vbron-kolom">
            <Muurdoorsnede grond={t.doorsnedeGrond} kelder={t.doorsnedeKelder} />
            <p className="vbijschrift">{t.doorsnedeBijschrift}</p>
          </Reveal>
          <div className="oorzlijst">
            {t.oorzaken.map(({ title, desc }, i) => {
              const Icon = OORZAAK_ICONEN[i];
              const helpt = OORZAAK_HELPT[i];
              return (
                <Reveal from="up" delay={i * 0.06} className="oorz" key={title}>
                  <span className="oic">
                    <Icon size={19} />
                    {/* Hetzelfde nummer als in de doorsnede hiernaast. */}
                    <i>{i + 1}</i>
                  </span>
                  <div>
                    <div className="okop">
                      <h3>{title}</h3>
                      <span className={`verdict ${helpt ? "ja" : "nee"}`}>
                        {helpt ? <CheckIcon size={12} /> : <DropIcon size={12} />}
                        {helpt ? t.helptJa : t.helptNee}
                      </span>
                    </div>
                    <p>{desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="note">{t.oorzNote}</div>
      </div>
    </section>

    {/* ================= LUCHTVOCHTIGHEID ================= */}
    <section className="sr">
      <div className="wrap split">
        <div>
          <span className="kick">{t.rvKick}</span>
          <h2 className="sec">{t.rvH2}</h2>
          <p className="lede">{t.rvP1}</p>
          <p className="lede">{t.rvP2}</p>
          <div className="chips">
            {rvChips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
        <Reveal from="right" className="split-vis">
          {/* `wandelt`: het streepje loopt van een verzadigde kelder naar de
              streefzone, zodat de meter toont wat drogen met hem doet. */}
          <div className="meter wandelt">
            <div className="t">{t.meterTitel}</div>
            <div className="big">40 – 60<small>{t.meterEenheid}</small></div>
            <div className="scale" style={{ "--at": "50%" } as React.CSSProperties}>
              <b />
            </div>
            <div className="legend">
              <span>{t.meterTeDroog}</span>
              <span>{t.meterSchimmel}</span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--txt-mid)", margin: "16px 0 0", lineHeight: 1.6 }}>
              {t.meterUitleg}
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ================= SCHIMMEL ================= */}
    <section className="sw">
      <div className="wrap split rev">
        <Reveal from="left" className="split-vis">
          <img
            src="/vernast/schimmel-muur.webp"
            alt={t.schimmelAlt}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </Reveal>
        <div>
          <span className="kick">{t.schimmelKick}</span>
          <h2 className="sec">{t.schimmelH2}</h2>
          <p className="lede">{t.schimmelP1}</p>
          <p className="lede">{t.schimmelP2(lp)}</p>
        </div>
      </div>
    </section>

    {/* ================= STAPPENPLAN ================= */}
    <section className="sr" id="stappenplan">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.stapKick}</span>
          <h2 className="sec">{t.stapH2}</h2>
          <p className="lede">{t.stapLede}</p>
        </div>
        <div className="stapkaarten">
          {t.kelderStappen.map(({ title, desc }, i) => {
            const Icon = STAP_ICONEN[i];
            return (
              <Reveal from="up" delay={(i % 3) * 0.08} className="stk" key={title}>
                <div className="stkic"><Icon size={20} /></div>
                <span className="stknr">{t.stap} {i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* ================= PAKKETTEN ================= */}
    <section className="sw" id="pakketten">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">{t.pakKick}</span>
          <h2 className="sec">{t.pakH2}</h2>
          <p className="lede">{t.pakLede}</p>
        </div>
        <Pakketkaarten />
      </div>
    </section>

    {/* ================= KELDERS DIE WE DROOGDEN ================= */}
    <section className="sr" id="realisaties">
      <div className="wrap">
        <div className="sec-head">
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
      </div>
    </section>

    {/* ================= DROOG HOUDEN ================= */}
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.tipsKick}</span>
          <h2 className="sec">{t.tipsH2}</h2>
          <p className="lede">{t.tipsLede}</p>
        </div>
        <div className="g3">
          {t.tips.map(({ title, desc }, i) => {
            const Icon = TIP_ICONEN[i];
            return (
              <Reveal from="up" delay={i * 0.08} className="kaart" key={title}>
                <div className="ki"><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/*
      De vragen in de vorm van de homepage: links de titel met het
      hulpkaartje, rechts de vragen. Ze stonden hier als een raster van open
      kaarten, en daarna kort als een eigen accordeon; dat waren drie vormen
      van hetzelfde blok op één site. Zie src/components/content/FaqBlok.tsx.
    */}
    <FaqBlok
      titel={t.faqTitel}
      vragen={t.faqs}
      sleutel="rn-faq"
    />

    {/* ================= VERDER LEZEN + SLOT-CTA =================
      Eén witte sectie onder de vragen, geen twee.

      De leeskaarten stonden boven de FAQ en de slotplaat eronder: twee witte
      stroken met de rode vragen ertussen, en allebei met hun eigen lucht
      erboven. Wie de vragen uit had, kreeg eerst een lege strook en dan pas
      het aanbod. Nu staan ze samen, in de volgorde waarin ze gelezen worden:
      eerst waar u verder kunt lezen, dan wat u kunt doen. De rode kop "Verder
      lezen" valt daarbij weg — de sectie gaat niet meer over één ding.
    */}
    <VerderLezen
      titel={t.verderTitel}
      groepen={t.verderLezen(lp)}
      kicker={null}
    >
      <div className="manband">
        <div className="mb-t">
          <span className="mbk">{t.slotKick}</span>
          <h3>{t.slotH3}</h3>
          <p>{t.slotP}</p>
          <div className="mb-cta">
            <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
              {t.cta}
              <ArrowRightIcon />
            </Link>
            <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
              <PhoneIcon /> {CONTACT.phoneLocal}
            </a>
          </div>
        </div>
        <img
          className="mb-man"
          src="/vernast/man-vochtmeter.webp"
          alt={t.slotAlt}
          width={600}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </div>
    </VerderLezen>

    <ContactBlok
      kicker={t.contactKicker}
      titel={t.contactTitel}
      lede={t.contactLede}
      onderwerp="droging_op_maat"
      placeholder={t.contactPlaceholder}
    />

    </main>

    <V3Footer />
  </div>
  );
};

export default RenovatiePage;
