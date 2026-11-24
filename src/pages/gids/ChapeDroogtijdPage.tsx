import { Fragment, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import GidsShell, { GidsFaqSectie } from "@/components/gids/GidsShell";
import ContactBlok from "@/components/content/ContactBlok";
import Reveal from "@/components/Reveal";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { COPY } from "./ChapeDroogtijdPage.copy";
import { droogtermijnen, natuurlijkeChapeWeken as natuurlijkeWeken } from "@/lib/droogtijden";
import { ClockIcon, GaugeIcon, LayersIcon, ThermoIcon, WindIcon } from "@/components/content/icons";
import { BrushIcon } from "@/components/home-v3/icons";

const PATH = "/gids/hoe-lang-moet-chape-drogen";

/*
  De huurtermijnen per dikte komen uit de catalogus (via droogtijden.ts, dat
  ook de tabel op /nieuwbouw-drogen voedt), en de vuistregel voor natuurlijk drogen
  uit dezelfde module. Niets overgetypt: verandert het portaal een termijn,
  dan zeggen /nieuwbouw-drogen en deze gids samen hetzelfde nieuwe getal.

  `weken` is de langste termijn over alle oppervlaktes: liever een week te
  ruim aankondigen dan een termijn die bij een grotere ruimte niet klopt.
*/
const CHAPE = droogtermijnen("chape").map((r) => ({ cm: r.dikte, weken: r.max }));

const dunste = CHAPE[0];
const dikste = CHAPE[CHAPE.length - 1];

/*
  De langste staaf in de vergelijking: natuurlijk drogen bij de dikste chape
  uit de catalogus. Alle balken worden daartegen geschaald, zodat de lezer de
  verhouding ziet en niet alleen de getallen leest.
*/
const SCHAAL = dikste ? natuurlijkeWeken(dikste.cm) : 10;
const breedte = (n: number) => `${Math.round((n / SCHAAL) * 100)}%`;

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** Het aandachtsteken in de rode "zo gaat het mis"-kaart. */
const Let = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v5" />
    <path d="M12 16h.01" />
  </svg>
);

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/** De waterdruppel die in de doorsnede uit de chape omhoog stijgt. */
const Druppel = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" />
  </svg>
);

/* De pictogrammen bij de vijf factoren, in de volgorde van `factoren` in de copy. */
const FACTOR_ICONEN = [<LayersIcon key="d" />, <ThermoIcon key="t" />, <GaugeIcon key="g" />, <WindIcon key="w" />, <ClockIcon key="c" />];

/*
  Het opstookprotocol, de staart per dikte en de FAQ staan in
  ChapeDroogtijdPage.copy.tsx, per taal. Waarom het protocol geen exacte
  temperaturen noemt: die verschillen per product en per
  vloerverwarmingssysteem, en een getal uit onze mond zou het voorschrift van
  de plaatser overschrijven. De stappen zeggen wél in welke orde het gaat,
  want dat is wat op de werf fout loopt.

  Eén FAQ-vraag per chapedikte: "hoe lang moet chape van 6 cm drogen" is een
  zoekvraag op zich. Voegt het portaal een dikte toe, dan verschijnt de vraag
  mét getallen en een algemene staart, in plaats van niet te verschijnen.
*/

const ChapeDroogtijdPage = () => {
  const lp = useLokaalPad();
  const t = useCopy(COPY)({ lp, chape: CHAPE, dunste, dikste, nat: natuurlijkeWeken });
  const weken = t.weken;

  return (
  <GidsShell
    seo={useSeo("gidsChapeDrogen")}
    path={PATH}
    crumbs={[
      { name: t.crumbHome, path: "/" },
      { name: t.crumbGidsen, path: "/gids" },
      { name: t.crumb, path: PATH },
    ]}
    kick={t.kick}
    h1={t.h1}
    intro={t.intro}
    heroImg={{ src: "/vernast/drie-vakmannen.webp", alt: t.heroAlt }}
    heroBadge={
      <div className="fbadge" style={{ top: "-30px", left: "2%", zIndex: 0 }}>
        <span className="ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </span>
        <div>
          {t.badge}
          <small>{t.badgeSub}</small>
        </div>
      </div>
    }
    articlePublished="2026-09-29"
    articleModified="2026-11-12"
    faq={t.faq}
    faqZelfPlaatsen
  >
    {/* ============ DE DROOGTIJD IN VIER GETALLEN ============ */}
    {dikste && (
      <div className="statrule">
        <div className="wrap">
          <Reveal className="band" from="up">
            {t.stats.map((st, n) => (
              <div className="st" key={n}>
                <div className="n">
                  {st.n}
                  <em>{st.em}</em>
                </div>
                <div className="l">{st.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    )}

    {/* ============ DE VUISTREGEL PER CENTIMETER ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>{t.vuistH2}</h2>
          {t.vuist.map((alinea, n) => (
            <p key={n}>{alinea}</p>
          ))}
        </Reveal>

        <Reveal className="snede" from="right" delay={0.1}>
          <div className="sn-h">
            <b>{t.snedeTitel}</b>
            <span>{t.snedeSub}</span>
          </div>
          <div className="laag lucht">
            <span>{t.lucht}</span>
            <em>{t.luchtSub}</em>
            {/*
              Vocht in de lucht, niet op de vloer: blauwe wolkjes die opstijgen
              en vervagen. Ze stonden eerst als rode druppels in de ruimte, en
              dat las als lekwater boven de chape in plaats van als damp.
            */}
            <i className="damp" style={{ left: "14%" }} aria-hidden="true" />
            <i className="damp" style={{ left: "33%", animationDelay: "0.9s" }} aria-hidden="true" />
            <i className="damp" style={{ left: "52%", animationDelay: "1.8s" }} aria-hidden="true" />
            <i className="damp" style={{ left: "71%", animationDelay: "2.6s" }} aria-hidden="true" />
            <i className="wind" aria-hidden="true" />
            <i className="wind" style={{ top: "80%", animationDelay: "1.4s" }} aria-hidden="true" />
          </div>
          <div className="laag chape">
            <span>{t.chape}</span>
            {/*
              De maatlat hoort bij het cijfer en staat er dus tegenaan, aan de
              rechterkant van de laag: één streepje per centimeter, uit
              dezelfde dikte als het getal ernaast.
            */}
            <span className="sn-dikte">
              <span className="sn-maat" aria-hidden="true">
                {Array.from({ length: dikste?.cm ?? 0 }, (_, i) => (
                  <i key={i} />
                ))}
              </span>
              <b>{dikste?.cm} cm</b>
            </span>
            {/*
              Het water zit in de chape zelf, en het meeste ervan diep: de
              druppels komen onderaan los en halen de bovenkant niet. Dat is
              waarom elke centimeter erbij zoveel zwaarder weegt.
            */}
            <i className="nat" style={{ left: "18%" }} aria-hidden="true">
              <Druppel size={11} />
            </i>
            <i className="nat" style={{ left: "44%", animationDelay: "1.6s" }} aria-hidden="true">
              <Druppel size={11} />
            </i>
            <i className="nat" style={{ left: "68%", animationDelay: "3.1s" }} aria-hidden="true">
              <Druppel size={10} />
            </i>
            <i className="nat" style={{ left: "86%", animationDelay: "2.3s" }} aria-hidden="true">
              <Druppel size={10} />
            </i>
          </div>
          <div className="laag iso">
            <span>{t.iso}</span>
          </div>
          <div className="laag beton">
            <span>{t.beton}</span>
          </div>
          <p className="sn-f">{t.snedeVoet}</p>
        </Reveal>
      </div>
    </section>

    {/* ============ DROOGTIJD PER DIKTE ============ */}
    <section className="lvred">
      <div className="wrap wsplit">
        <Reveal className="sec-head" from="left" style={{ marginBottom: 0 }}>
          <span className="kick">{t.rwKick}</span>
          <h2 className="sec">{t.rwH2}</h2>
          <p className="lede">{t.rwLede}</p>
        </Reveal>

        <Reveal className="vglkaart" from="right" delay={0.1}>
          <div className="vgl">
            {CHAPE.map((r) => (
              <Fragment key={r.cm}>
                <div className="vrow rood">
                  <div className="vl">
                    <span>{t.natLabel(r.cm)}</span>
                    <b>± {weken(natuurlijkeWeken(r.cm))}</b>
                  </div>
                  <div className="vbar">
                    <i style={{ width: breedte(natuurlijkeWeken(r.cm)) }} />
                  </div>
                </div>
                <div className="vrow groen">
                  <div className="vl">
                    <span>{t.pakLabel(r.cm)}</span>
                    <b>{weken(r.weken)}</b>
                  </div>
                  <div className="vbar">
                    <i style={{ width: breedte(r.weken) }} />
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <p className="vglnoot">{t.vglNoot}</p>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="tbl" from="up" delay={0.15}>
          <table>
            <caption>{t.caption}</caption>
            <thead>
              <tr>
                <th scope="col">{t.thDikte}</th>
                <th scope="col">{t.thNat}</th>
                <th scope="col">{t.thPak}</th>
              </tr>
            </thead>
            <tbody>
              {CHAPE.map((r) => (
                <tr key={r.cm}>
                  <td className="num">{r.cm} cm</td>
                  <td className="num">± {weken(natuurlijkeWeken(r.cm))}</td>
                  <td className="num">{weken(r.weken)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="note" from="up" delay={0.2}>
          {t.rwNote}
        </Reveal>
      </div>
    </section>

    {/* ============ EERST UITHARDEN, DAN DROGEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.fKick}</span>
          <h2 className="sec">{t.fH2}</h2>
          <p className="lede">{t.fLede}</p>
        </Reveal>

        <div className="fase2">
          <Reveal className="fs f1" from="left" delay={0.05} style={{ "--w": "26%" } as CSSProperties}>
            <span className="fl">{t.f1Label}</span>
            <h3>{t.f1H3}</h3>
            <p>{t.f1P}</p>
            <div className="bar">
              <b />
            </div>
            <span className="bl">{t.f1Bar}</span>
          </Reveal>

          <Reveal className="fs" from="right" delay={0.1} style={{ "--w": "100%" } as CSSProperties}>
            <span className="fl">{t.f2Label}</span>
            <h3>{t.f2H3}</h3>
            <p>{t.f2P}</p>
            <div className="bar">
              <b />
            </div>
            <span className="bl">{t.f2Bar}</span>
          </Reveal>
        </div>

        <Reveal className="note" from="up" delay={0.15}>
          {t.fNote}
        </Reveal>
      </div>
    </section>

    {/* ============ WAT DE DROOGTIJD BEPAALT ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.prKick}</span>
          <h2 className="sec">{t.prH2}</h2>
          <p className="lede">{t.prLede}</p>
        </Reveal>
        <div className="cyc">
          {t.factoren.map((f, i) => (
            <Reveal className="cy" from="up" delay={i * 0.06} key={f.titel}>
              <i aria-hidden="true">0{i + 1}</i>
              <span className="ci2">{FACTOR_ICONEN[i]}</span>
              <h3>{f.titel}</h3>
              <p>{f.tekst}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ============ CEMENT- OF ANHYDRIETCHAPE ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.soKick}</span>
          <h2 className="sec">{t.soH2}</h2>
          <p className="lede">{t.soLede}</p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs" from="left" delay={0.05}>
            <span className="vt">{t.cemLabel}</span>
            <h3>{t.cemH3}</h3>
            <ul>
              {t.cem.map((x) => (
                <li key={x.b}>
                  <Check />
                  <span>
                    <b>{x.b}</b>{x.rest}
                  </span>
                </li>
              ))}
            </ul>
            <span className="vf">{t.cemVoet}</span>
          </Reveal>

          <Reveal className="vs" from="right" delay={0.1}>
            <span className="vt">{t.anhLabel}</span>
            <h3>{t.anhH3}</h3>
            <ul>
              {t.anh.map((x) => (
                <li key={x.b}>
                  <Let />
                  <span>
                    <b>{x.b}</b>{x.rest}
                  </span>
                </li>
              ))}
            </ul>
            <span className="vf">{t.anhVoet}</span>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ VLOERVERWARMING OPSTOKEN ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head mid" from="up">
          <span className="kick">{t.vvKick}</span>
          <h2 className="sec">{t.vvH2}</h2>
          <p className="lede">{t.vvLede}</p>
        </Reveal>
        <div className="stap8">
          {t.opstook.map((stap, i) => (
            <Reveal className="s8" from="up" delay={i * 0.05} key={i}>
              <i aria-hidden="true" />
              <span>
                <b>{stap.b}</b>{stap.rest}
              </span>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.2}>
          {t.vvNote}
        </Reveal>
      </div>
    </section>

    {/* ============ RESTVOCHT METEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.mKick}</span>
          <h2 className="sec">{t.mH2}</h2>
          <p className="lede">{t.mLede}</p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs groen" from="left" delay={0.05}>
            <span className="vt">{t.zekerLabel}</span>
            <h3>{t.zekerH3}</h3>
            <ul>
              {t.zeker.map((x) => (
                <li key={x.b}>
                  <Check />
                  <span>
                    <b>{x.b}</b>{x.rest}
                  </span>
                </li>
              ))}
            </ul>
            <span className="vf">{t.zekerVoet}</span>
          </Reveal>

          <Reveal className="vs rood" from="right" delay={0.1}>
            <span className="vt">{t.misLabel}</span>
            <h3>{t.misH3}</h3>
            <ul>
              {t.mis.map((x) => (
                <li key={x.b}>
                  <Let />
                  <span>
                    <b>{x.b}</b>{x.rest}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ VEELGESTELDE VRAGEN ============ */}
    <GidsFaqSectie faq={t.faq} titel={t.faqTitel} variant="rood" />

    {/* ============ VERDER LEZEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.vlKick}</span>
          <h2 className="sec">{t.vlH2}</h2>
          <p className="lede">{t.vlLede}</p>
        </Reveal>

        <div className="door">
          <Reveal as={Link} className="dk" from="left" delay={0.05} to={lp("/gids/hoe-lang-moet-pleisterwerk-drogen")}>
            <span className="dki" aria-hidden="true">
              <BrushIcon size={20} />
            </span>
            <h3>{t.dk1H3}</h3>
            <p>{t.dk1P}</p>
            <span className="dkm">{t.dk1Meer}</span>
          </Reveal>

          <Reveal as={Link} className="dk" from="right" delay={0.1} to={lp("/nieuwbouw-drogen")}>
            <span className="dki" aria-hidden="true">
              <LayersIcon size={20} />
            </span>
            <h3>{t.dk2H3}</h3>
            <p>{t.dk2P}</p>
            <span className="dkm">{t.dk2Meer}</span>
          </Reveal>
        </div>

        <Reveal className="lees-verder" from="up" delay={0.15}>
          {t.links.map((l) => (
            <Link key={l.pad} to={lp(l.pad)}>
              {l.label}
            </Link>
          ))}
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="manband" from="up">
          <div className="mb-t">
            <span className="mbk">{t.mbKick}</span>
            <h3>{t.mbH3}</h3>
            <p>{t.mbP}</p>
            <Link className="btn btn-white mb-cta" to={lp("/verhuur/calculator")}>
              {t.mbCta}
              <Arrow />
            </Link>
          </div>
          <img
            className="mb-man"
            src="/vernast/man-duim-kabels.webp"
            alt={t.mbAlt}
            style={{ width: "min(30%,320px)" }}
          />
        </Reveal>
      </div>
    </section>

    {/* ============ FORMULIER ============ */}
    <ContactBlok
      kicker={t.contact.kicker}
      titel={t.contact.titel}
      lede={t.contact.lede}
      onderwerp="droging_op_maat"
      placeholder={t.contact.placeholder}
    />
  </GidsShell>
  );
};

export default ChapeDroogtijdPage;
