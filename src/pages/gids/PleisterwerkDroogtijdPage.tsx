import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import GidsShell, { GidsFaqSectie } from "@/components/gids/GidsShell";
import ContactBlok from "@/components/content/ContactBlok";
import Reveal from "@/components/Reveal";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { COPY } from "./PleisterwerkDroogtijdPage.copy";
import { droogtermijnen, termijnZonderDikte } from "@/lib/droogtijden";
import { ClockIcon, GaugeIcon, GridIcon, LayersIcon, ThermoIcon, WindIcon } from "@/components/content/icons";

const PATH = "/gids/hoe-lang-moet-pleisterwerk-drogen";

/*
  Dezelfde bron als de chapegids en /nieuwbouw-drogen: de huurtermijnen komen uit de
  pakketten in de catalogus, niet uit een tabel in deze pagina. Verandert het
  portaal een termijn, dan verandert hij hier mee.

  `BEIDE` is het pakket voor chape én pleisterwerk samen; dat bestaat zonder
  dikte, want het droogt het hele gebouw.
*/
const PLEISTER = droogtermijnen("pleister").map((r) => ({ cm: r.dikte, weken: r.max }));
const BEIDE = termijnZonderDikte("beide");

const dunste = PLEISTER[0];
const dikste = PLEISTER[PLEISTER.length - 1];

/* De langste balk: de zwaarste laag, of het combipakket als dat langer loopt. */
/* De paden onder "lees verder"; de ankertekst staat in de copy, in dezelfde volgorde. */
const LEES_VERDER = [
  "/hoe-drogen-werkt",
  "/gids/condensdroger-of-adsorptiedroger",
  "/gids/stroomverbruik-bouwdroger",
  "/realisaties/pleisterwerk-drogen-merksem",
  "/prijzen",
];

const SCHAAL = Math.max(dikste?.weken ?? 4, BEIDE?.max ?? 0);
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

/* De vijf dingen die een pleisterdroging korter of langer maken. */
/* De iconen bij de vijf factoren; de teksten staan in de copy, in dezelfde volgorde. */
const FACTOR_ICONEN = [<LayersIcon key="1" />, <GridIcon key="2" />, <ThermoIcon key="3" />, <GaugeIcon key="4" />, <WindIcon key="5" />];

const PleisterwerkDroogtijdPage = () => {
  const lp = useLokaalPad();
  const t = useCopy(COPY)({ lp, pleister: PLEISTER, dunste, dikste, beide: BEIDE?.max });
  const weken = t.weken;

  return (
  <GidsShell
    seo={useSeo("gidsPleisterDrogen")}
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
    articlePublished="2026-11-12"
    faq={t.faq}
    faqZelfPlaatsen
  >
    {/* ============ DE TERMIJNEN IN VIER GETALLEN ============ */}
    <div className="statrule">
      <div className="wrap">
        <Reveal className="band" from="up">
          <div className="st">
            <div className="n">
              {dunste?.weken}
              <em>{t.emWeken}</em>
            </div>
            <div className="l">{t.statDun}</div>
          </div>
          <div className="st">
            <div className="n">
              {dikste?.weken}
              <em>{t.emWeken}</em>
            </div>
            <div className="l">{t.statDik}</div>
          </div>
          {BEIDE && (
            <div className="st">
              <div className="n">
                {BEIDE.max}
                <em>{t.emWeken}</em>
              </div>
              <div className="l">{t.statBeide}</div>
            </div>
          )}
          <div className="st">
            <div className="n">
              24<em>{t.emUur}</em>
            </div>
            <div className="l">{t.statUur}</div>
          </div>
        </Reveal>
      </div>
    </div>

    {/* ============ HET VOCHT KOMT ERUIT, EN DAN? ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>{t.muurH2}</h2>
          {t.muurP.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="muur" from="right" delay={0.1}>
          <div className="mu-h">
            <b>{t.muH}</b>
            <span>{t.muSub}</span>
          </div>
          <div className="mu-vlak">
            <div className="mu-kamer">
              <span className="mu-lab">{t.muKamer}</span>
              {/*
                Damp die aan het oppervlak ontsnapt. Ze stijgt en vervaagt,
                want het is waterdamp en geen lekwater.
              */}
              <i className="mu-damp" style={{ bottom: "22%" }} aria-hidden="true" />
              <i className="mu-damp" style={{ bottom: "44%", animationDelay: "1.4s" }} aria-hidden="true" />
              <i className="mu-damp" style={{ bottom: "63%", animationDelay: "2.9s" }} aria-hidden="true" />
              <i className="mu-damp" style={{ bottom: "82%", animationDelay: "4.1s" }} aria-hidden="true" />
            </div>
            <div className="mu-pleister">
              <i className="mu-front" aria-hidden="true" />
              <span className="mu-lab">{t.muPleister}</span>
            </div>
            <div className="mu-steen">
              {Array.from({ length: 9 }, (_, i) => (
                <i className="rij" key={i} />
              ))}
              <span className="mu-lab">{t.muSteen}</span>
            </div>
          </div>
          <div className="mu-leg">
            <span>
              <i className="l-droog" aria-hidden="true" />
              <b>{t.legDroog[0]}</b>{t.legDroog[1]}
            </span>
            <span>
              <i className="l-nat" aria-hidden="true" />
              <b>{t.legNat[0]}</b>{t.legNat[1]}
            </span>
            <span>
              <i className="l-steen" aria-hidden="true" />
              <b>{t.legSteen[0]}</b>{t.legSteen[1]}
            </span>
          </div>
          <p className="mu-f">{t.muF}</p>
        </Reveal>
      </div>
    </section>

    {/* ============ TERMIJNEN PER LAAGDIKTE ============ */}
    <section className="lvred">
      <div className="wrap wsplit">
        <Reveal className="sec-head" from="left" style={{ marginBottom: 0 }}>
          <span className="kick">{t.rwKick}</span>
          <h2 className="sec">{t.rwH2}</h2>
          <p className="lede">{t.rwLede}</p>
        </Reveal>

        <Reveal className="vglkaart" from="right" delay={0.1}>
          <div className="vgl">
            {PLEISTER.map((r) => (
              <div className="vrow groen" key={r.cm}>
                <div className="vl">
                  <span>{t.rijLabel(r.cm)}</span>
                  <b>{weken(r.weken)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: breedte(r.weken) }} />
                </div>
              </div>
            ))}
            {BEIDE && (
              <div className="vrow huur">
                <div className="vl">
                  <span>{t.beideLabel}</span>
                  <b>{weken(BEIDE.max)}</b>
                </div>
                <div className="vbar">
                  <i style={{ width: breedte(BEIDE.max) }} />
                </div>
              </div>
            )}
          </div>
          <p className="vglnoot">{t.vglnoot}</p>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="tbl" from="up" delay={0.15}>
          <table>
            <caption>{t.caption}</caption>
            <thead>
              <tr>
                <th scope="col">{t.thDikte}</th>
                <th scope="col">{t.thMet}</th>
                <th scope="col">{t.thWaar}</th>
              </tr>
            </thead>
            <tbody>
              {PLEISTER.map((r) => (
                <tr key={r.cm}>
                  <td className="num">{r.cm} cm</td>
                  <td className="num">{weken(r.weken)}</td>
                  <td>{t.waar[r.cm] ?? t.waarAnders}</td>
                </tr>
              ))}
              {BEIDE && (
                <tr>
                  <td className="num">{t.beideCel}</td>
                  <td className="num">{weken(BEIDE.max)}</td>
                  <td>{t.beideWaar}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="note" from="up" delay={0.2}>
          {t.rwNote}
        </Reveal>
      </div>
    </section>

    {/* ============ ZONDER EN MET AFVOER ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>{t.dichtH2}</h2>
          {t.dichtP.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="kaart materiaalkaart" from="right" delay={0.1}>
          <img
            className="materiaalfoto"
            src="/vernast/droogproces-nat-pleister.webp"
            alt={t.fotoAlt}
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
          />
          <div className="materiaaltekst">
            <h3>{t.fotoH3}</h3>
            <p>{t.fotoP}</p>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <div className="fase2">
          <Reveal className="fs" from="left" delay={0.05} style={{ "--w": "22%" } as CSSProperties}>
            <span className="fl">{t.f1Label}</span>
            <h3>{t.f1H3}</h3>
            <p>{t.f1P}</p>
            <div className="bar">
              <b />
            </div>
            <span className="bl">{t.f1Bar}</span>
          </Reveal>

          <Reveal className="fs f1" from="right" delay={0.1} style={{ "--w": "100%" } as CSSProperties}>
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
          {t.nachtNote}
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

    {/* ============ GIPS OF CEMENT ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.gcKick}</span>
          <h2 className="sec">{t.gcH2}</h2>
          <p className="lede">{t.gcLede}</p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs" from="left" delay={0.05}>
            <span className="vt">{t.gips.vt}</span>
            <h3>{t.gips.h3}</h3>
            <ul>
              {t.gips.lijst.map(([kop, rest]) => (
                <li key={kop}>
                  <Check />
                  <span>
                    <b>{kop}</b>{rest}
                  </span>
                </li>
              ))}
            </ul>
            <span className="vf">{t.gips.vf}</span>
          </Reveal>

          <Reveal className="vs" from="right" delay={0.1}>
            <span className="vt">{t.cement.vt}</span>
            <h3>{t.cement.h3}</h3>
            <ul>
              {t.cement.lijst.map(([kop, rest]) => (
                <li key={kop}>
                  <Let />
                  <span>
                    <b>{kop}</b>{rest}
                  </span>
                </li>
              ))}
            </ul>
            <span className="vf">{t.cement.vf}</span>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ ZO DROOGT U PLEISTERWERK ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head mid" from="up">
          <span className="kick">{t.stKick}</span>
          <h2 className="sec">{t.stH2}</h2>
          <p className="lede">{t.stLede}</p>
        </Reveal>
        <div className="stap8">
          {t.stappen.map(([kop, rest], i) => (
            <Reveal className="s8" from="up" delay={i * 0.05} key={i}>
              <i aria-hidden="true" />
              <span>
                <b>{kop}</b>{rest}
              </span>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.2}>
          {t.stNote}
        </Reveal>
      </div>
    </section>

    {/* ============ WANNEER MAG DE SCHILDER KOMEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.scKick}</span>
          <h2 className="sec">{t.scH2}</h2>
          <p className="lede">{t.scLede}</p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs groen" from="left" delay={0.05}>
            <span className="vt">{t.zeker.vt}</span>
            <h3>{t.zeker.h3}</h3>
            <ul>
              {t.zeker.lijst.map(([kop, rest]) => (
                <li key={kop}>
                  <Check />
                  <span>
                    <b>{kop}</b>{rest}
                  </span>
                </li>
              ))}
            </ul>
            <span className="vf">{t.zeker.vf}</span>
          </Reveal>

          <Reveal className="vs rood" from="right" delay={0.1}>
            <span className="vt">{t.mis.vt}</span>
            <h3>{t.mis.h3}</h3>
            <ul>
              {t.mis.lijst.map(([kop, rest]) => (
                <li key={kop}>
                  <Let />
                  <span>
                    <b>{kop}</b>{rest}
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
          <span className="kick">{t.lvKick}</span>
          <h2 className="sec">{t.lvH2}</h2>
          <p className="lede">{t.lvLede}</p>
        </Reveal>

        <div className="door">
          <Reveal as={Link} className="dk" from="left" delay={0.05} to={lp("/gids/hoe-lang-moet-chape-drogen")}>
            <span className="dki" aria-hidden="true">
              <ClockIcon size={20} />
            </span>
            <h3>{t.door[0].h3}</h3>
            <p>{t.door[0].p}</p>
            <span className="dkm">{t.door[0].meer}</span>
          </Reveal>

          <Reveal as={Link} className="dk" from="right" delay={0.1} to={lp("/nieuwbouw-drogen")}>
            <span className="dki" aria-hidden="true">
              <LayersIcon size={20} />
            </span>
            <h3>{t.door[1].h3}</h3>
            <p>{t.door[1].p}</p>
            <span className="dkm">{t.door[1].meer}</span>
          </Reveal>
        </div>

        <Reveal className="lees-verder" from="up" delay={0.15}>
          {LEES_VERDER.map((pad, i) => (
            <Link key={pad} to={lp(pad)}>
              {t.leesVerder[i]}
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

export default PleisterwerkDroogtijdPage;
