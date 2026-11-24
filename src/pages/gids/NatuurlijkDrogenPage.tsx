import { Fragment } from "react";
import { Link } from "react-router-dom";
import GidsShell, { GidsFaqSectie } from "@/components/gids/GidsShell";
import ContactBlok from "@/components/content/ContactBlok";
import Reveal from "@/components/Reveal";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";
import { COPY } from "./NatuurlijkDrogenPage.copy";
import {
  droogtermijnen,
  natuurlijkeChapeWeken,
  natuurlijkePleisterWeken,
  termijnZonderDikte,
} from "@/lib/droogtijden";
import {
  ClockIcon,
  GaugeIcon,
  LayersIcon,
  ThermoIcon,
  WindIcon,
  WarnIcon,
  DrogerIcon,
} from "@/components/content/icons";
import { BrushIcon, CellarIcon, HouseSmallIcon, MoldIcon } from "@/components/home-v3/icons";

const PATH = "/gids/natuurlijk-drogen-of-bouwdroger";

/**
 * De vergelijkende gids: een nieuwbouw op eigen kracht laten drogen, of het
 * binnenklimaat sturen met een bouwdroger.
 *
 * Waarom een eigen pagina naast wat er al stond. /nieuwbouw-drogen verkoopt de
 * dienst, de twee droogtijdgidsen rekenen per materiaal en /hoe-drogen-werkt
 * legt het toestel uit. Niemand beantwoordde de vraag die ervoor komt: moet ik
 * hier eigenlijk iets voor huren, of droogt dat huis vanzelf? Dat is een
 * informatieve zoekvraag ("nieuwbouw laten drogen", "natuurlijk drogen
 * nieuwbouw", "hoe lang duurt bouwvocht"), en ze werd op deze site door geen
 * enkele pagina gedekt.
 *
 * De pagina moet die vraag eerlijk beantwoorden, ook waar het antwoord "dan
 * hoeft u niets te huren" is. Vandaar de sectie "Wanneer natuurlijk drogen wel
 * volstaat": een gids die alleen maar naar de calculator duwt, is geen gids, en
 * een lezer die zich bekocht voelt komt niet terug.
 *
 * Alle weken komen uit `lib/droogtijden.ts`, dezelfde bron als de twee andere
 * droogtijdgidsen en de tabel op /nieuwbouw-drogen. Een termijn die in het
 * portaal verandert, verandert hier mee; niets staat overgetypt.
 */

const CHAPE = droogtermijnen("chape").map((r) => ({ cm: r.dikte, weken: r.max }));
const PLEISTER = droogtermijnen("pleister").map((r) => ({ cm: r.dikte, weken: r.max }));
const BEIDE = termijnZonderDikte("beide");

const dikste = CHAPE[CHAPE.length - 1];
/* 6 cm is de chape die we het vaakst op een werf zien liggen; zij draagt de
   cijfers in de hero en in de statistiekbalk. Valt die dikte ooit uit de
   catalogus, dan neemt de dikste zijn plaats in. */
const GANGBAAR = CHAPE.find((r) => r.cm === 6) ?? dikste;

/*
  De langste staaf in de vergelijking: natuurlijk drogen bij de dikste chape uit
  de catalogus. Alles schaalt daartegen, zodat de lezer de verhouding ziet en
  niet alleen de getallen leest. Dezelfde maatstaf als in de chapegids.
*/
const SCHAAL = dikste ? natuurlijkeChapeWeken(dikste.cm) : 10;
const breedte = (n: number) => `${Math.round((n / SCHAAL) * 100)}%`;

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Kruis = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

/* Waar het bouwvocht zit. Vijf kaarten, want `.cyc` staat op vijf kolommen.
   De pictogrammen staan hier, de teksten per taal in de copy. */
const LAGEN = [
  <LayersIcon />,
  <BrushIcon size={20} />,
  <CellarIcon size={20} />,
  <HouseSmallIcon size={20} />,
  <GaugeIcon />,
];

/* De vier voorwaarden van een natuurlijke droging, plus de vijfde die u niet
   in de hand heeft. In deze volgorde, want zo bouwen ze op elkaar. */
const VOORWAARDEN = [
  <ThermoIcon />,
  <GaugeIcon />,
  <WindIcon />,
  <ClockIcon />,
  <WarnIcon />,
];

/* Wat er misgaat zodra er op een nat huis verder gebouwd wordt. */
const RISICOS = [
  <LayersIcon />,
  <BrushIcon size={20} />,
  <MoldIcon size={20} />,
  <DrogerIcon />,
  <ClockIcon />,
];


const NatuurlijkDrogenPage = () => {
  const lp = useLokaalPad();
  const gCm = GANGBAAR?.cm ?? 6;
  const pCm = PLEISTER[0]?.cm ?? 1;
  const t = useCopy(COPY)({
    lp,
    gCm,
    gNat: natuurlijkeChapeWeken(gCm),
    gWeken: GANGBAAR ? GANGBAAR.weken : null,
    pCm,
    pMin: natuurlijkePleisterWeken(pCm).min,
    dikCm: dikste?.cm ?? 7,
  });
  const weken = t.weken;

  return (
  <GidsShell
    seo={useSeo("gidsNatuurlijkDrogen")}
    path={PATH}
    crumbs={[
      { name: t.crumbHome, path: "/" },
      { name: t.crumbGidsen, path: "/gids" },
      { name: t.crumb, path: PATH },
    ]}
    kick={t.kick}
    h1={t.h1}
    intro={<p>{t.intro}</p>}
    heroImg={{
      src: "/vernast/case-nieuwbouw.webp",
      alt: t.heroAlt,
      rond: true,
    }}
    heroBadge={
      <div className="fbadge" style={{ bottom: "40px", left: "-4%", zIndex: 2 }}>
        <span className="ic">
          <ClockIcon size={16} />
        </span>
        <div>
          {t.badgeTop}
          <small>{t.badgeSub}</small>
        </div>
      </div>
    }
    articlePublished="2026-11-13"
    faq={t.faq}
    faqZelfPlaatsen
  >
    {/* ============ DE VIER GETALLEN ============ */}
    <div className="statrule">
      <div className="wrap">
        <Reveal className="band" from="up">
          <div className="st">
            <div className="n">
              ±{natuurlijkeChapeWeken(gCm)}
              <em>{t.stats[0].em}</em>
            </div>
            <div className="l">{t.stats[0].l}</div>
          </div>
          <div className="st">
            <div className="n">
              {GANGBAAR?.weken}
              <em>{t.stats[1].em}</em>
            </div>
            <div className="l">{t.stats[1].l}</div>
          </div>
          <div className="st">
            <div className="n">
              24<em>{t.stats[2].em}</em>
            </div>
            <div className="l">{t.stats[2].l}</div>
          </div>
          <div className="st">
            <div className="n">
              2<em>{t.stats[3].em}</em>
            </div>
            <div className="l">{t.stats[3].l}</div>
          </div>
        </Reveal>
      </div>
    </div>

    {/* ============ WAAR HET WATER ZIT ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.vpKick}</span>
          <h2 className="sec">{t.vpH2}</h2>
          <p className="lede">{t.vpLede}</p>
        </Reveal>
        <div className="cyc">
          {t.lagen.map((l, i) => (
            <Reveal className="cy" from="up" delay={i * 0.06} key={l.titel}>
              <i aria-hidden="true">0{i + 1}</i>
              <span className="ci2">{LAGEN[i]}</span>
              <h3>{l.titel}</h3>
              <p>{l.tekst}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.15}>
          {t.vpNote}
        </Reveal>
      </div>
    </section>

    {/* ============ WAT NATUURLIJK DROGEN VRAAGT ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.nKick}</span>
          <h2 className="sec">{t.nH2}</h2>
          <p className="lede">{t.nLede}</p>
        </Reveal>
        <div className="cyc">
          {t.voorwaarden.map((v, i) => (
            <Reveal className="cy" from="up" delay={i * 0.06} key={v.titel}>
              <i aria-hidden="true">0{i + 1}</i>
              <span className="ci2">{VOORWAARDEN[i]}</span>
              <h3>{v.titel}</h3>
              <p>{v.tekst}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.2}>
          {t.nNote}
        </Reveal>
      </div>
    </section>

    {/* ============ HET SEIZOEN BESLIST ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>{t.sH2}</h2>
          {t.sP.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="tbl" from="right" delay={0.1}>
          <table>
            <caption>{t.sCaption}</caption>
            <thead>
              <tr>
                {t.sKoppen.map((k) => (
                  <th scope="col" key={k}>{k}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.sRijen.map(([a, b, c]) => (
                <tr key={a}>
                  <td>{a}</td>
                  <td className="num">{b}</td>
                  <td>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>

    {/* ============ HET VERSCHIL IN WEKEN ============ */}
    <section className="lvred">
      <div className="wrap wsplit">
        <Reveal className="sec-head" from="left" style={{ marginBottom: 0 }}>
          <span className="kick">{t.vKick}</span>
          <h2 className="sec">{t.vH2}</h2>
          <p className="lede">{t.vLede}</p>
        </Reveal>

        <Reveal className="vglkaart" from="right" delay={0.1}>
          <div className="vgl">
            {CHAPE.map((r) => (
              <Fragment key={r.cm}>
                <div className="vrow rood">
                  <div className="vl">
                    <span>{t.balkNat(t.cm(r.cm))}</span>
                    <b>± {weken(natuurlijkeChapeWeken(r.cm))}</b>
                  </div>
                  <div className="vbar">
                    <i style={{ width: breedte(natuurlijkeChapeWeken(r.cm)) }} />
                  </div>
                </div>
                <div className="vrow groen">
                  <div className="vl">
                    <span>{t.balkPakket(t.cm(r.cm))}</span>
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
            <caption>{t.tCaption}</caption>
            <thead>
              <tr>
                {t.tKoppen.map((k) => (
                  <th scope="col" key={k}>{k}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CHAPE.map((r) => (
                <tr key={`chape-${r.cm}`}>
                  <td>{t.tChape(t.cm(r.cm))}</td>
                  <td className="num">± {weken(natuurlijkeChapeWeken(r.cm))}</td>
                  <td className="num">{weken(r.weken)}</td>
                </tr>
              ))}
              {PLEISTER.map((r) => {
                const nat = natuurlijkePleisterWeken(r.cm);
                return (
                  <tr key={`pleister-${r.cm}`}>
                    <td>{t.tPleister(t.cm(r.cm))}</td>
                    <td className="num">{t.tTot(nat.min, weken(nat.max))}</td>
                    <td className="num">{weken(r.weken)}</td>
                  </tr>
                );
              })}
              {BEIDE && (
                <tr>
                  <td>{t.tBeide}</td>
                  <td className="num">{t.tBeideNat}</td>
                  <td className="num">{weken(BEIDE.max)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="note" from="up" delay={0.2}>
          {t.vNote}
        </Reveal>
      </div>
    </section>

    {/* ============ WAT EEN BOUWDROGER ANDERS DOET ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.zKick}</span>
          <h2 className="sec">{t.zH2}</h2>
          <p className="lede">{t.zLede}</p>
        </Reveal>

        <div className="vsg">
          <Reveal className="vs rood" from="left" delay={0.05}>
            <span className="vt">{t.natLabel}</span>
            <h3>{t.natH3}</h3>
            <ul>
              {t.natLijst.map((x) => (
                <li key={x.b}>
                  <Kruis />
                  <span>
                    <b>{x.b}</b>{x.rest}
                  </span>
                </li>
              ))}
            </ul>
            <span className="vf">{t.natVoet}</span>
          </Reveal>

          <Reveal className="vs groen" from="right" delay={0.1}>
            <span className="vt">{t.pakLabel}</span>
            <h3>{t.pakH3}</h3>
            <ul>
              {t.pakLijst.map((x) => (
                <li key={x.b}>
                  <Check />
                  <span>
                    <b>{x.b}</b>{x.rest}
                  </span>
                </li>
              ))}
            </ul>
            <span className="vf">{t.pakVoet}</span>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ WAT ER MISGAAT ALS U WACHT ============ */}
    <section className="lvred">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.rKick}</span>
          <h2 className="sec">{t.rH2}</h2>
          <p className="lede">{t.rLede}</p>
        </Reveal>
        <div className="cyc">
          {t.risicos.map((r, i) => (
            <Reveal className="cy" from="up" delay={i * 0.06} key={r.titel}>
              <i aria-hidden="true">0{i + 1}</i>
              <span className="ci2">{RISICOS[i]}</span>
              <h3>{r.titel}</h3>
              <p>{r.tekst}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" from="up" delay={0.2}>
          {t.rNote}
        </Reveal>
      </div>
    </section>

    {/* ============ WANNEER NATUURLIJK VOLSTAAT ============ */}
    <section className="sw">
      <div className="wrap wsplit">
        <Reveal className="prose" from="left">
          <h2>{t.wH2}</h2>
          <p>{t.wP1}</p>
          <ul>
            {t.wLijst.map((x) => (
              <li key={x.b}>
                <b>{x.b}</b>{x.rest}
              </li>
            ))}
          </ul>
          <p>{t.wP2}</p>
        </Reveal>

        {/*
          Hier stonden twee balken van elk 100 %. Een staafdiagram waarin beide
          staven even lang zijn draagt geen informatie, en groen naast rood las
          als goed naast fout terwijl het om twee geldige keuzes gaat. Een
          keuzewijzer zegt wat de lezer hier zoekt: welke situatie welke aanpak
          krijgt.
        */}
        <Reveal className="tbl" from="right" delay={0.1}>
          <table>
            <caption>{t.wCaption}</caption>
            <thead>
              <tr>
                {t.wKoppen.map((k) => (
                  <th scope="col" key={k}>{k}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.wRijen.map(([a, b]) => (
                <tr key={a}>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>

    {/* ============ VEELGESTELDE VRAGEN ============ */}
    <GidsFaqSectie
      faq={t.faq}
      titel={t.faqTitel}
      variant="rood"
    />

    {/* ============ VERDER LEZEN ============ */}
    <section className="sw">
      <div className="wrap">
        <Reveal className="sec-head" from="up">
          <span className="kick">{t.lKick}</span>
          <h2 className="sec">{t.lH2}</h2>
          <p className="lede">{t.lLede}</p>
        </Reveal>

        <div className="door">
          <Reveal as={Link} className="dk" from="left" delay={0.05} to={lp("/gids/hoe-lang-moet-chape-drogen")}>
            <span className="dki" aria-hidden="true">
              <ClockIcon size={20} />
            </span>
            <h3>{t.deur1H3}</h3>
            <p>{t.deur1P}</p>
            <span className="dkm">{t.deur1Meer}</span>
          </Reveal>

          <Reveal as={Link} className="dk" from="right" delay={0.1} to={lp("/nieuwbouw-drogen")}>
            <span className="dki" aria-hidden="true">
              <LayersIcon size={20} />
            </span>
            <h3>{t.deur2H3}</h3>
            <p>{t.deur2P}</p>
            <span className="dkm">{t.deur2Meer}</span>
          </Reveal>
        </div>

        <Reveal className="lees-verder" from="up" delay={0.15}>
          {t.lees.map(([pad, label]) => (
            <Link to={lp(pad)} key={pad}>{label}</Link>
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
            src="/vernast/man-vochtmeter.webp"
            alt={t.mbAlt}
            style={{ width: "min(30%,320px)" }}
          />
        </Reveal>
      </div>
    </section>

    {/* ============ FORMULIER ============ */}
    <ContactBlok
      kicker={t.cKick}
      titel={t.cTitel}
      lede={t.cLede}
      onderwerp="droging_op_maat"
      placeholder={t.cPlaceholder}
    />
  </GidsShell>
  );
};

export default NatuurlijkDrogenPage;
