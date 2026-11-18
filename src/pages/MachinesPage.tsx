import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import FaqBlok from "@/components/content/FaqBlok";
import VerderLezen from "@/components/VerderLezen";
import ContactBlok from "@/components/content/ContactBlok";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  DropIcon,
  PhoneIcon,
} from "@/components/home-v3/icons";
import {
  KeuringIcon,
  ThermoIcon,
  WereldIcon,
  WerfIcon,
  WindIcon,
} from "@/components/content/icons";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { useSeo } from "@/data/seo";
import { PRODUCT_ADDONS, PRODUCT_ORDER, productImageAlt, PRODUCTS, PUMP, toestelPad } from "@/data/verhuur";
import { productInTaal, toestelChipsInTaal } from "@/data/verhuur.fr";
import { CONDENSPOMP } from "@/data/toebehoren";
import { toebehorenInTaal } from "@/data/toebehoren.fr";
import { DROGERS, tariefInTaal } from "@/data/tarieflijst";
import { CONTACT } from "@/lib/site";
import { formatEuro, useCopy, useLokaalPad, useTaal, useToonBedrag } from "@/i18n/useTaal";
import type { Taal } from "@/i18n/taal";
import { COPY } from "./MachinesPage.copy";
import "@/styles/v3-content.css";
import "@/styles/machines.css";

/**
 * Het gamma: drogers, ventilatoren en kachels. Stond tot november 2026 op de
 * oude shadcn-schil met de `Navbar`; nu in de v3-vormtaal, met <V3Header> en
 * de gedeelde opmaak uit src/styles/v3-content.css.
 *
 * De bannerhero met tekst in de afbeelding is vervangen door de gewone
 * v3-hero. Die banner was de grootste afbeelding boven de vouw van de hele
 * site, en de tekst erin moest telkens opnieuw tegen een foto uitgelijnd
 * worden; de v3-hero zet de kop in echte tekst naast een uitgesneden beeld.
 *
 * Volgorde sinds november 2026: hero, dan meteen het volledige gamma, dan pas
 * de uitleg. De pagina begon daarvoor met een keuzehulp en een capaciteitsles,
 * en de toestellen zelf stonden drie schermen lager. Wie op /machines landt
 * wil eerst zien wat er te huur is.
 *
 * De drie groepen staan samen in één witte sectie. Ze wisselden eerder wit en
 * rood af, waardoor dezelfde kaart op dezelfde pagina twee keer anders oogde.
 */

/*
  Keuzehulp en vergelijking. Alle cijfers komen uit PRODUCTS (de toestelpagina's
  en het portaal): /machines en /verhuur/toestel/* spraken elkaar eerder tegen
  over liters en kubieke meters, en dat mag niet terugkomen via een tabel die
  hier met de hand bijgehouden wordt.
*/

/**
 * Een waarde uit de kerngegevens van een toestel, bv. "Verbruik" → "1,1 kW".
 * Gezocht op het Nederlandse label; de waarde komt uit de vertaalde rij op
 * dezelfde plaats, zodat "L/dag" in het Frans "L/jour" wordt.
 */
function kerngegeven(key: string, label: string, taal: Taal): string | null {
  const i = PRODUCTS[key]?.key.findIndex(([l]) => l === label) ?? -1;
  const rij = i >= 0 ? productInTaal(key, taal).key[i] : undefined;
  return rij ? `${rij[1]}${rij[2] ? ` ${rij[2]}` : ""}` : null;
}

/**
 * Een catalogusbedrag zoals deze bezoeker het moet zien (incl. of excl. btw),
 * zonder centen wanneer er geen zijn: "€ 9" voor een bedrijf, zoals hier
 * altijd stond, en "€ 10,89" incl. btw.
 */
function useBedrag(): (excl: number) => { tekst: string; label: string } {
  const toon = useToonBedrag();
  const taal = useTaal();
  return (excl) => {
    const { bedrag, label } = toon(excl);
    return { tekst: formatEuro(bedrag, taal, Number.isInteger(bedrag) ? 0 : 2), label };
  };
}

/**
 * De meetconditie van de vochtafvoer, uit het speclabel van de middelste
 * droger ("Vochtafvoer (30 °C / 80 % RV)"). Staat er geen, dan zegt de tekst
 * enkel dat het om een labowaarde gaat.
 */
const MEETCONDITIE = (() => {
  const key = DROGERS[Math.floor(DROGERS.length / 2)]?.key;
  const label = key ? PRODUCTS[key]?.specs.find(([l]) => l.startsWith("Vochtafvoer ("))?.[0] : undefined;
  return label?.match(/\(([^)]+)\)/)?.[1] ?? null;
})();

/** "30 °C / 80 % RV" in de taal van de pagina (HR = humidité relative). */
const meetconditieIn = (taal: Taal) =>
  MEETCONDITIE && taal === "fr" ? MEETCONDITIE.replace(/\bRV\b/, "HR") : MEETCONDITIE;

const KLEINSTE = DROGERS[0];
const GROOTSTE = DROGERS[DROGERS.length - 1];

/** Per toesteltype: wanneer kiest u het (tekst in de copy). Enkel wat het portaal verhuurt. */
const KEUZE_KEYS = ["ttk350", "revolution", "ttv4500", "radiaal2250", "teddh30"].filter(
  (k) => PRODUCTS[k],
);

/**
 * De combinaties die op de toestelpagina's als aanvulling voorgesteld worden,
 * voor de drie ontvochtigers. Uit `PRODUCT_ADDONS`, dus dezelfde suggestie als
 * wie op de toestelpagina iets bijboekt.
 */
const combinaties = DROGERS.map((t) => ({
  droger: t,
  erbij: (PRODUCT_ADDONS[t.key] ?? []).map((k) => PRODUCTS[k]).filter(Boolean),
})).filter((c) => c.erbij.length > 0);

/**
 * Het gamma zoals het portaal het publiceert, gegroepeerd per soort.
 *
 * Hier stond tot november 2026 een tweede lijst: acht toestellen (Turbo Axiaal
 * 8500, Turbo Radiaal 7000, elektrische kachels van 5/9/18 kW, dieselheaters
 * van 118 en 236 kW) met hun dagprijs met de hand ingetypt en zonder foto. Die
 * toestellen staan niet in de verhuurcatalogus, de prijzen klopten niet, en ze
 * stonden naast de echte kaarten alsof ze te huur waren. Weg dus: wat het
 * portaal niet publiceert, bestaat op deze pagina niet. Zie ook de regel in
 * CLAUDE.md — nooit een bedrag overtypen in een pagina.
 */
const GAMMA = [
  {
    id: "bouwdrogers",
    Icon: DropIcon,
    keys: PRODUCT_ORDER.filter((k) =>
      /Condensontvochtiger|Adsorptiedroger/.test(PRODUCTS[k].type)
    ),
  },
  {
    id: "ventilatoren",
    Icon: WindIcon,
    keys: PRODUCT_ORDER.filter((k) => /Bouwventilator/.test(PRODUCTS[k].type)),
  },
  {
    id: "verwarming",
    Icon: ThermoIcon,
    keys: PRODUCT_ORDER.filter((k) => /bouwkachel/i.test(PRODUCTS[k].type)),
  },
].filter((g) => g.keys.length > 0);

/*
  De bouwdrogers vullen een rij van vier; ventilatoren en verwarming hebben er
  elk twee en staan daarom naast elkaar, samen opnieuw een rij van vier. Elk
  onder elkaar liet twee halve rijen leeg staan, en dat las als een gamma met
  gaten erin. Valt er een groep weg omdat het portaal dat soort niet meer
  verhuurt, dan krijgt wat overblijft gewoon de brede rij.
*/
const [eersteGroep, ...restGroepen] = GAMMA;

/** Waarom hier acht toestellen staan en niet de catalogus van een leverancier; tekst in de copy. */
const ONDERZOEK_ICONEN = [WereldIcon, WerfIcon, KeuringIcon];

/** Wat er bij een droger hoort; tekst in de copy. */
const toebehoren = [
  { Icon: BoltIcon, gratis: true },
  { Icon: DropIcon, gratis: true },
  { Icon: ThermoIcon, gratis: false },
];

/**
 * Eén toestel uit de catalogus als kaart.
 *
 * De kop is de naam waaronder het toestel verhuurd wordt ("Boost"), niet
 * het typenummer: niemand huurt een "Ontvochtiger TTK 170 S". Dat nummer staat
 * er klein onder, voor wie offertes vergelijkt. Foto, prijs en specs komen
 * allemaal uit het portaal.
 *
 * De vorm is die van de productkaart op de homepage (`.pc`): vierkante foto
 * met labelpil, de kerncijfers als pillen en onderaan een rode knop met de
 * dagprijs ernaast. Het zijn dezelfde acht toestellen als daar, en ze hoorden
 * niet op twee pagina's verschillend te ogen. De hele kaart is de link, zodat
 * de knop niet het enige klikbare stuk is.
 */
const Toestelkaart = ({ sleutel, index }: { sleutel: string; index: number }) => {
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const bedrag = useBedrag();
  // Logica op het Nederlandse product (badge, type), tekst uit de vertaalde.
  const nl = PRODUCTS[sleutel];
  const p = productInTaal(sleutel, taal);
  const dag = bedrag(p.day);
  return (
    <Reveal
      as={Link}
      to={lp(toestelPad(sleutel))}
      from="up"
      delay={(index % 4) * 0.06}
      className={`pc${nl.badge === "Meest gehuurd" ? " hot" : ""}`}
    >
      <div className="pm">
        {p.badge && <span className="pt">{p.badge}</span>}
        <img
          src={p.img[0]}
          alt={productImageAlt(p, 0)}
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="pb">
        <h3>{p.short}</h3>
        <span className="ptype">{p.name}</span>
        <p className="pdesc">{p.sum}</p>
        <div className="chips">
          {/*
            Het blaadje staat op de condensdrogers van de eco-lijn, niet op de
            adsorptiedroger: die is geen eco-toestel en droeg het label hier
            ooit wel. Als afbeelding en niet als lijnicoon, net als op de
            homepage — het draagt zijn eigen groen.
          */}
          {nl.type.startsWith("Condensontvochtiger") && (
            <span className="chip eco">
              <img src="/vernast/icoon-eco.webp" alt="" width={96} height={96} loading="lazy" /> Eco
            </span>
          )}
          {toestelChipsInTaal(sleutel, taal).map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <div className="pf">
          <span className="bekijk">
            {t.kaartBekijken}
            <ArrowRightIcon size={13} strokeWidth={2.6} />
          </span>
          <span className="pr">
            {t.kaartVanaf}<b>{dag.tekst}</b>
            <small>{t.kaartPerDag} {dag.label}</small>
          </span>
        </div>
      </div>
    </Reveal>
  );
};

/**
 * Eén soort toestel binnen het overzicht: een kop met pictogram, één regel
 * uitleg en de kaarten eronder.
 *
 * De kop is een `h3` en geen `h2` meer: de drie groepen stonden eerder elk in
 * een eigen sectie met een eigen `h2`, en de pagina had daardoor drie koppen
 * van hetzelfde gewicht voor wat samen één overzicht is. `breed` zet de rij op
 * vier kolommen, zonder op twee.
 */
const Gammagroep = ({
  groep,
  breed = false,
}: {
  groep: (typeof GAMMA)[number];
  breed?: boolean;
}) => {
  const tekst = useCopy(COPY).groepen[groep.id];
  return (
    <div className="pcat" id={groep.id}>
      <div className="pcat-kop">
        <span className="ci"><groep.Icon size={19} /></span>
        <h3>{tekst.kop}</h3>
      </div>
      <p className="pcat-lede">{tekst.lede}</p>
      <div className={breed ? "pgrid" : "pgrid twee"}>
        {groep.keys.map((k, j) => (
          <Toestelkaart sleutel={k} index={j} key={k} />
        ))}
      </div>
    </div>
  );
};

const MachinesPage = () => {
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const bedrag = useBedrag();
  const drogers = DROGERS.map((d) => tariefInTaal(d, taal));
  const faqs = t.faqs({ kleinste: KLEINSTE, grootste: GROOTSTE });
  const pomp = toebehorenInTaal(CONDENSPOMP, taal);
  const pompPrijs = bedrag(PUMP.price);
  const btwLabel = bedrag(0).label;
  /*
    De combinaties die op de toestelpagina's als aanvulling voorgesteld worden,
    voor de drie ontvochtigers. Uit `PRODUCT_ADDONS`, dus dezelfde suggestie als
    wie op de toestelpagina iets bijboekt.
  */
  const combinaties = drogers
    .map((d) => ({
      droger: d,
      erbij: (PRODUCT_ADDONS[d.key] ?? []).filter((k) => PRODUCTS[k]).map((k) => productInTaal(k, taal)),
    }))
    .filter((c) => c.erbij.length > 0);

  return (
    <div className="v3c mc-page">
      <PageMeta
        {...useSeo("machines")}
        jsonLd={[
          itemListSchema(
            t.itemList,
            PRODUCT_ORDER.map((k) => ({
              name: productInTaal(k, taal).name,
              path: lp(toestelPad(k)),
            }))
          ),
          faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.machines, path: lp("/machines") },
          ]),
        ]}
      />

      <V3Header lightAfter={420} darkUntil=".redtop" />

      <main>

      {/* ================= HERO ================= */}
      <div className="redtop">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="kick">{t.heroKick}</span>
              <h1>{t.heroH1}</h1>
              <p>{t.heroP}</p>
              <div className="jump">
                <a href="#bouwdrogers"><DropIcon size={15} /> {t.groepen.bouwdrogers.kop}</a>
                <a href="#ventilatoren"><WindIcon size={15} /> {t.groepen.ventilatoren.kop}</a>
                <a href="#verwarming"><ThermoIcon size={15} /> {t.groepen.verwarming.kop}</a>
              </div>
            </div>
            {/*
              De uitgesneden ploeg in plaats van de drie drogers die hier
              stonden. Die foto zweefde boven de onderrand van het rode blok
              alsof de toestellen vlogen; de mannen staan op die rand, zoals op
              /hoe-drogen-werkt. Het gamma zelf staat een schermhoogte lager,
              waar de kaarten het beter doen dan één productfoto.
            */}
            <div className="hero-vis">
              <img
                src="/vernast/team-tools.webp"
                alt={t.heroAlt}
                width={1400}
                height={859}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ width: "min(100%,560px)" }}
              />
              <div className="fbadge rd" style={{ top: "-10px", left: "0" }}>
                <span className="ic"><WereldIcon size={15} /></span>
                <div>
                  {t.heroBadge}
                  <small>{t.heroBadgeSub}</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= HET GAMMA =================
          Staat bewust meteen onder de hero: wie op /machines landt wil eerst
          zien wát er te huur is. De keuzehulp die hier stond ("Welk toestel
          kiest u?") was een tussenstap vóór het overzicht, en dat las als een
          formulier voor de etalage. Ze staat nu een sectie lager, als uitleg
          bij wat de bezoeker al gezien heeft.

          Alle drie de groepen in één witte sectie. Ze wisselden eerder wit en
          rood af, waardoor de ventilatoren op een rode achtergrond stonden en
          dezelfde kaart er anders uitzag dan de kaart erboven. Het zijn
          producten: ze horen op één ondergrond. */}
      <section className="sw" id="gamma">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.gammaKick}</span>
            <h2 className="sec">{t.gammaH2}</h2>
            <p className="lede">{t.gammaLede}</p>
          </div>

          {eersteGroep && <Gammagroep groep={eersteGroep} breed />}
          {restGroepen.length > 1 ? (
            <div className="pcols">
              {restGroepen.map((groep) => (
                <Gammagroep groep={groep} key={groep.id} />
              ))}
            </div>
          ) : (
            restGroepen.map((groep) => <Gammagroep groep={groep} breed key={groep.id} />)
          )}

          <div className="note">{t.gammaNote(lp)}</div>
        </div>
      </section>

      {/* ================= WERELDWIJD GEZOCHT ================= */}
      <section className="sr" id="onderzoek">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.onderzoekKick}</span>
            <h2 className="sec">{t.onderzoekH2}</h2>
            <p className="lede">{t.onderzoekLede}</p>
          </div>
          <div className="g3">
            {t.onderzoek.map(({ titel, tekst }, i) => {
              const Icon = ONDERZOEK_ICONEN[i];
              return (
                <Reveal from="up" delay={(i % 3) * 0.08} className="kaart" key={titel}>
                  <div className="ki"><Icon size={20} /></div>
                  <h3>{titel}</h3>
                  <p>{tekst}</p>
                </Reveal>
              );
            })}
          </div>
          <div className="note">{t.onderzoekNote}</div>
        </div>
      </section>

      {/* ================= WAT DOET WELK TOESTEL ================= */}
      <section className="sw" id="verschillen">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.verschilKick}</span>
            <h2 className="sec">{t.verschilH2}</h2>
            <p className="lede">{t.verschilLede}</p>
          </div>
          <div className="g3">
            {KEUZE_KEYS.map((key, i) => {
              const p = productInTaal(key, taal);
              return (
                <Reveal from="up" delay={(i % 3) * 0.08} className="kaart" key={key}>
                  <span className="kick" style={{ marginBottom: "6px" }}>{t.keuzes[key].titel}</span>
                  <h3>{p.name}</h3>
                  <p>{t.keuzes[key].wanneer}</p>
                  <Link
                    className="plink"
                    to={lp(toestelPad(key))}
                    style={{ marginTop: "14px", display: "inline-flex" }}
                  >
                    {t.bekijkDe(p.short)}
                    <ArrowRightIcon size={13} />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CAPACITEIT ================= */}
      <section className="sr">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.capKick}</span>
            <h2 className="sec">{t.capH2}</h2>
            <p className="lede">{t.capLede1(meetconditieIn(taal))}</p>
            <p className="lede">{t.capLede2}</p>
          </div>

          <div className="tblwrap" style={{ marginTop: 0 }}>
            <div className="tblscroll">
              <table className="tbl">
                <caption className="sr-only">{t.capCaption}</caption>
                <thead>
                  <tr>
                    {t.capTh.map((th) => (
                      <th scope="col" key={th}>{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {drogers.map((d) => (
                    <tr key={d.key}>
                      <th scope="row">
                        <Link to={lp(d.path)}>{d.short}</Link>
                        {d.badge && (
                          <span style={{ display: "block", fontWeight: 400, fontSize: "11.5px", color: "var(--txt-dim)" }}>
                            {d.badge}
                          </span>
                        )}
                      </th>
                      <td>{d.litersPerDay} L</td>
                      <td style={{ whiteSpace: "nowrap" }}>{t.tot(d.volume)}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{kerngegeven(d.key, "Verbruik", taal) ?? t.nvt}</td>
                      <td style={{ whiteSpace: "nowrap", fontWeight: 700, color: "var(--txt)" }}>
                        {bedrag(d.perDay).tekst}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="tblnote">{t.capNote(lp, btwLabel)}</p>

          {combinaties.length > 0 && (
            <div className="note">
              <b>{t.combiKop}</b>
              {t.combiTekst}
              <ul style={{ margin: "12px 0 0", paddingLeft: "18px" }}>
                {combinaties.map(({ droger, erbij }) => (
                  <li key={droger.key} style={{ marginBottom: "5px" }}>
                    <Link to={lp(droger.path)}>{droger.short}</Link> {t.met}{" "}
                    {erbij.map((p) => p.name).join(t.en)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ================= TOEBEHOREN ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="sec-head">
            <span className="kick">{t.toebKick}</span>
            <h2 className="sec">{t.toebH2}</h2>
          </div>
          <div className="g3">
            {toebehoren.map(({ Icon, gratis }, i) => (
              <Reveal from="up" delay={i * 0.08} className="kaart" key={t.toebehoren[i].name}>
                <div className="ki"><Icon size={20} /></div>
                <h3>{t.toebehoren[i].name}</h3>
                <p>{t.toebehoren[i].desc}</p>
                {gratis && (
                  <span className="verdict ja" style={{ marginTop: "12px", marginBottom: 0 }}>
                    <CheckIcon size={12} /> {t.gratis}
                  </span>
                )}
              </Reveal>
            ))}
          </div>
          {/*
            De condenspomp staat niet in het raster hierboven maar eronder, over
            de volle breedte: die drie kaarten gaan over wat er gratis bij zit of
            op aanvraag komt, de pomp is het enige toebehoren met een dagprijs én
            een eigen fiche. Als vierde kaart had ze bovendien alleen op een
            tweede rij gehangen.
          */}
          <div className="mc-pomp">
            <img
              src={pomp.img[0][0]}
              alt={pomp.img[0][1]}
              width={1000}
              height={1000}
              loading="lazy"
              decoding="async"
            />
            <div>
              <span className="mbk">{t.pompKick}</span>
              <h3>{t.pompH3(`${pompPrijs.tekst} ${pompPrijs.label}`)}</h3>
              <p>{t.pompP}</p>
              <Link className="btn btn-red" to={lp("/verhuur/toebehoren/condenspomp")}>
                {t.pompBtn}
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqBlok
        titel={t.faqTitel}
        vragen={faqs}
        sleutel="mc-faq"
      />

      {/* ================= SLOT-CTA ================= */}
      <section className="sw">
        <div className="wrap">
          <div className="manband">
            <div className="mb-t">
              <span className="mbk">{t.slotKick}</span>
              <h3>{t.slotH3}</h3>
              <p>{t.slotP}</p>
              <div className="mb-cta">
                <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
                  {t.slotBtn}
                  <ArrowRightIcon />
                </Link>
                <a className="btn btn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                  <PhoneIcon /> {CONTACT.phoneLocal}
                </a>
              </div>
            </div>
            <img
              className="mb-man"
              src="/vernast/man-duim-kabels.webp"
              alt={t.slotAlt}
              width={600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Wit en niet rood, net als op /prijzen: de witte kaarten waren op dat
          rode vlak het enige contrast, en drie kaarten op rood lezen als een
          tweede slotplaat vlak achter de echte. De scheiding komt nu van
          `--bg-alt` (#F4F4F4), dat `.sw .vlcard` op een witte sectie zet. */}
      <VerderLezen
        titel={t.verderTitel}
        groepen={t.verderLezen.map((g) => ({
          ...g,
          links: g.links.map((l) => ({ ...l, to: lp(l.to) })),
        }))}
      />

      <ContactBlok
        achtergrond="wit"
        kicker={t.contactKicker}
        titel={t.contactTitel}
        lede={t.contactLede}
        onderwerpen={t.contactOnderwerpen}
        placeholder={t.contactPlaceholder}
      />

      </main>

      <V3Footer />
    </div>
  );
};

export default MachinesPage;
