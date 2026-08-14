import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import {
  ArrowRightIcon,
  ChatIcon,
  CheckIcon,
  DropletPinIcon,
  FileCheckIcon,
  RefreshIcon,
  TruckIcon,
} from "@/components/verhuur/icons";
import { CAT, ROLE, SPECS } from "@/data/verhuur";
import {
  allItems,
  configToQuery,
  deviceCount,
  dryingDays,
  euro,
  packageGallery,
  packageImage,
  configPrice,
  configWeeks,
  packageSpecLine,
  parseConfig,
  totalAirflow,
  totalCapacity,
} from "@/lib/verhuur";
import { breadcrumbSchema } from "@/lib/schema";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

const VerhuurPakketPage = () => {
  const [searchParams] = useSearchParams();
  const config = useMemo(() => parseConfig(searchParams), [searchParams]);

  const items = useMemo(() => allItems(config), [config]);
  const lead = packageImage(config, items);
  const gallery = packageGallery(config, items);

  const [shot, setShot] = useState(0);
  const [tab, setTab] = useState(SPECS[0].k);

  const cap = totalCapacity(items);
  const air = totalAirflow(items);
  const days = dryingDays(config);
  /*
    De huurtermijn komt uit het pakket, niet uit de querystring: de shop verkoopt
    elk pakket voor één termijn en leidt die af uit de materiaaldikte. Stond hier
    nog `config.weeks`, dan toonde een pakket van vier weken de prijs van twee.
  */
  const weeks = configWeeks(config);
  const total = configPrice(config, items);
  const bookingHref = `/verhuur/boeking?${configToQuery(config)}`;

  return (
    <div className="vh-pkg">
      <PageMeta
        title="Uw droogpakket: toestellen, droogtijd en prijs | Vernast"
        description="Alles-in-één droogpakket op maat van uw woning: de juiste bouwdrogers, ventilatoren en kachels, met verwachte droogtijd en totaalprijs, geleverd binnen 24 uur."
        // Het pakket wordt bepaald door de querystring; die varianten zijn
        // configuratie van dezelfde pagina, geen aparte URL's om te indexeren.
        path="/verhuur/pakket"
        image={lead}
        ogType="product"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Bouwdroging", path: "/verhuur/calculator" },
          { name: "Uw droogpakket", path: "/verhuur/pakket" },
        ])}
      />
      <V3Header lightAfter={-1} />

      <section className="lead">
        <div className="shell">
          <div className="crumb">
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/verhuur/calculator">Bouwdroging</Link> <span>/</span>
            <span className="cur">Volledig droogpakket</span>
          </div>
          <div className="lead-in">
            <span className="chip">Alles in één Droogservice</span>
            <h1>Volledig droogpakket</h1>
            <p className="lead-sub">{packageSpecLine(config)}</p>
            <div className="lead-facts">
              <div className="lf">
                <b>{deviceCount(items)}</b>
                <span>toestellen in dit pakket</span>
              </div>
              <div className="lf">
                <b>{cap} L</b>
                <span>vochtafvoer per 24 uur</span>
              </div>
              <div className="lf">
                <b>{days}</b>
                <span>dagen verwachte droogtijd</span>
              </div>
              <div className="lf">
                <b>24 u</b>
                <span>geleverd én geïnstalleerd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="phero">
        <div className="shell">
          <div className="pgrid">
            <div className="gal">
              <div className="gmain">
                <span className="gtag">Alles in één Droogservice</span>
                <img src={gallery[shot]} alt="Vernast droogpakket" loading="lazy" decoding="async" />
              </div>
              <div className="gth">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className={i === shot ? "on" : undefined}
                    onClick={() => setShot(i)}
                    aria-label={`Afbeelding ${i + 1}`}
                  >
                    <img src={src} alt="" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pinfo">
              <div className="ptag">Categorie: Levering</div>
              <h2>Volledig droogpakket, woning tot {config.size} m²</h2>
              <div className="usp">
                <div>
                  <CheckIcon />
                  <span>
                    <b>Gratis levering</b> bij bestelling, geplaatst en afgesteld door onze
                    technicus
                  </span>
                </div>
                <div>
                  <CheckIcon />
                  <span>
                    <b>Transparante prijzen</b> zonder verrassingen, u ziet het totaal vooraf
                  </span>
                </div>
                <div>
                  <CheckIcon />
                  <span>
                    <b>Advies op maat</b> door een bouwkundige expert, ook tijdens de droging
                  </span>
                </div>
                <div>
                  <CheckIcon />
                  <span>
                    <b>Energiezuinige ECO-toestellen</b>, lager verbruik per liter onttrokken vocht
                  </span>
                </div>
                <div>
                  <CheckIcon />
                  <span>
                    <b>Gratis voor- en na-vochtmeting</b> bij elk pakket, u ziet het resultaat zwart
                    op wit
                  </span>
                </div>
              </div>
              <div className="avail">
                <span className="d" /> Direct beschikbaar, levering binnen 24 uur
              </div>
              <div className="pprice">
                <div>
                  <div className="pv">{euro(total)}</div>
                  <div className="pl">
                    voor {weeks} {weeks === 1 ? "week" : "weken"} · alles inbegrepen
                  </div>
                </div>
              </div>
              <div className="jump">
                <Link className="btn btn-d" to={bookingHref}>
                  Doorgaan naar samenstellen
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="build" id="afrekenen">
        <div className="shell">
          <div className="bgrid">
            <div className="bcol">
              <div className="blk">
                <div className="blkh">
                  <h2>Uw pakket</h2>
                  <span className="step">Inbegrepen toestellen</span>
                </div>
                <p className="bsub">
                  Automatisch berekend op basis van uw oppervlakte, pleister- en chapedikte. Een
                  kant-en-klaar pakket: exact wat uw droging nodig heeft, niets meer.
                </p>
                <div>
                  {items.map((it) => (
                    <div className="dev" key={it.k}>
                      <span className="dq">{it.q}×</span>
                      <img src={CAT[it.k].img} alt={CAT[it.k].name} loading="lazy" decoding="async" />
                      <span className="dn">
                        <b>{CAT[it.k].name}</b>
                        <small>{CAT[it.k].sub}</small>
                      </span>
                      <span className="dp">{euro(CAT[it.k].w2 * it.q)} / 2 wk</span>
                    </div>
                  ))}
                </div>
                <div className="spx">
                  <div className="s">
                    <div className="n">
                      {cap}
                      <small> L</small>
                    </div>
                    <div className="l">Vochtafvoer per 24 u</div>
                  </div>
                  <div className="s">
                    <div className="n">
                      {(air / 1000).toFixed(1).replace(".", ",")}
                      <small>k</small>
                    </div>
                    <div className="l">m³/u luchtverzet</div>
                  </div>
                  <div className="s">
                    <div className="n">{days}</div>
                    <div className="l">Dagen verwachte droogtijd</div>
                  </div>
                </div>
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>Wat doet elk toestel?</h2>
                  <span className="step">Uw pakket uitgelegd</span>
                </div>
                <p className="bsub">
                  Drogen is een samenspel van capaciteit, circulatie en temperatuur. Ontbreekt er
                  één, dan loopt de droogtijd op — daarom stellen wij pakketten samen in plaats van
                  losse toestellen te verhuren.
                </p>
                <div className="role">
                  {items.map((it) => (
                    <div className="rrow" key={it.k}>
                      <span className="ri">
                        <img src={CAT[it.k].img} alt={CAT[it.k].name} loading="lazy" decoding="async" />
                      </span>
                      <span className="rc2">
                        <span className="rtag">
                          {ROLE[it.k].tag} · {it.q}× in uw pakket
                        </span>
                        <h3>{CAT[it.k].name}</h3>
                        <p>{ROLE[it.k].txt}</p>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="incsec">
        <div className="shell">
          <div className="incwrap">
            <div className="ih">
              <h2>Bij levering inbegrepen</h2>
              <span>Zonder meerkost</span>
            </div>
            <p>
              De huurprijs is een alles-in-prijs. Dit zit standaard bij elk pakket, zonder dat u er
              iets voor moet aanvragen.
            </p>
            <div className="inclist">
              <div className="ii wide">
                <span className="ic2">
                  <DropletPinIcon />
                </span>
                <div>
                  <b>Gratis vochtmeting bij levering én ophaling</b>
                  <p>
                    Onze technicus meet bij plaatsing de vochtwaarden van chape, pleisterwerk en
                    lucht, en meet opnieuw bij ophaling. Zo weet u zwart op wit dat de ruimte droog
                    is voor u afwerkt. Altijd inbegrepen — een ondertekend meetrapport voor uw
                    verzekeraar of dossier kunt u optioneel bijnemen.
                  </p>
                </div>
              </div>
              <div className="ii">
                <span className="ic2">
                  <TruckIcon />
                </span>
                <div>
                  <b>Levering binnen 24 uur en ophaling achteraf</b>
                  <p>
                    Wij brengen alle toestellen naar de werf in het gekozen tijdslot en halen ze weer
                    op zodra de droging klaar is. Gratis in onze regio; daarbuiten een beperkte
                    kilometervergoeding die u vooraf ziet.
                  </p>
                </div>
              </div>
              <div className="ii">
                <span className="ic2">
                  <FileCheckIcon />
                </span>
                <div>
                  <b>Plaatsing, aansluiting en afstelling</b>
                  <p>
                    Elk toestel komt op de juiste positie, de condensafvoer wordt aangesloten en de
                    streefvochtigheid ingesteld. U hoeft niets te sjouwen of te programmeren.
                  </p>
                </div>
              </div>
              <div className="ii">
                <span className="ic2">
                  <ChatIcon />
                </span>
                <div>
                  <b>Uitleg ter plaatse en bereikbare helpdesk</b>
                  <p>
                    De technicus legt uit hoe de toestellen werken en welke streefwaarde u mag
                    verwachten. Tijdens de volledige huurperiode zijn onze vochtexperts telefonisch
                    bereikbaar.
                  </p>
                </div>
              </div>
              <div className="ii">
                <span className="ic2">
                  <RefreshIcon />
                </span>
                <div>
                  <b>Flexibel verlengen of vroeger stoppen</b>
                  <p>
                    Duurt de droging langer, dan verlengt u online met één klik. Bent u vroeger
                    klaar, dan stopt u de huur en betaalt u enkel de dagen die u effectief gebruikt
                    hebt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="redband">
        <div className="shell">
          <div className="rb">
            <span className="rb-lz1" />
            <span className="rb-lz2" />
            <div className="rb-in">
              <div className="rb-head">
                <span className="rb-chip">Waarom een pakket werkt</span>
                <h2>Drogen is capaciteit, circulatie én temperatuur.</h2>
                <p>
                  Ontbreekt er één van de drie, dan loopt de droogtijd op — of stopt het proces zelfs
                  helemaal. Daarom stellen wij complete pakketten samen in plaats van losse
                  toestellen te verhuren.
                </p>
              </div>
              <div className="rb-grid">
                <div className="rb-c">
                  <div className="rb-n">01</div>
                  <h3>Capaciteit</h3>
                  <p>
                    De bouwdrogers bepalen hoeveel liter vocht er per dag uit de lucht kan. Wij
                    dimensioneren op uw werkelijke volume — niet te klein, niet te groot.
                  </p>
                </div>
                <div className="rb-c">
                  <div className="rb-n">02</div>
                  <h3>Circulatie</h3>
                  <p>
                    Zonder luchtbeweging vormt zich een verzadigd laagje tegen chape en muur — daar
                    stopt de droging. De ventilatoren doorbreken dat en winnen dagen.
                  </p>
                </div>
                <div className="rb-c">
                  <div className="rb-n">03</div>
                  <h3>Temperatuur</h3>
                  <p>
                    Onder 15 °C neemt lucht nauwelijks vocht op. De kachel brengt koude ruimtes op
                    werkingstemperatuur, zodat de drogers op volle kracht werken.
                  </p>
                </div>
              </div>
              <div className="rb-stats">
                <div className="rb-s">
                  <b>60 %</b>
                  <span>sneller droog dan natuurlijke droging</span>
                </div>
                <div className="rb-s">
                  <b>48 u</b>
                  <span>voor schimmel begint te groeien — snel starten loont</span>
                </div>
                <div className="rb-s">
                  <b>≤ 2 %</b>
                  <span>restvocht vereist voor u mag afwerken</span>
                </div>
                <div className="rb-s">
                  <b>24 u</b>
                  <span>geleverd, geplaatst en afgesteld</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="specs">
        <div className="shell">
          <div className="stabs">
            {SPECS.map((s) => (
              <button
                key={s.k}
                type="button"
                className={`stab${s.k === tab ? " on" : ""}`}
                onClick={() => setTab(s.k)}
              >
                {s.tab}
              </button>
            ))}
          </div>
          <div>
            {SPECS.map((s) => (
              <div className={`spane${s.k === tab ? " on" : ""}`} key={s.k}>
                <div>
                  <h3>{s.h}</h3>
                  {s.p.map((paragraph, i) => (
                    <div key={paragraph.slice(0, 24)}>
                      {i === 1 && <div className="sh4">{s.h4}</div>}
                      {/* Vaste designtekst met <b>-accenten — geen invoer van buitenaf. */}
                      <p className="sp" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    </div>
                  ))}
                  <div className="sbtns">
                    <a className="btn btn-r" href="#afrekenen">
                      Wat is inbegrepen?
                    </a>
                    <a className="btn btn-r" href="tel:+3236899065">
                      Hulp nodig? Bel ons
                    </a>
                  </div>
                </div>
                <div className="sgrid">
                  {s.g.map(([groupName, rows]) => (
                    <div className="sgrp2" key={groupName}>
                      <h4>{groupName}</h4>
                      <div className="stbl">
                        {rows.map(([label, value]) => (
                          <div key={label}>
                            <span>{label}</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default VerhuurPakketPage;
