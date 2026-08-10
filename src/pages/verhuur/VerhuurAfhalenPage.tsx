import { useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import { CheckIcon, InfoIcon, PinIcon } from "@/components/home-v3/icons";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, offerCatalogSchema } from "@/lib/schema";
import { isValidEmail, isValidPhone, maskEmail, maskPhone } from "@/lib/inputMask";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

/**
 * Zelf afhalen — the pickup checkout from the design handoff (Afhalen.html).
 *
 * Loose devices are only rented for pickup, at lower rates than a delivered
 * package, and nothing is charged up front: the design confirms the booking
 * and invoices after the rental period. There is no backend behind the
 * confirm button yet, exactly as in the design.
 */
interface PickupProduct {
  group: string;
  key: string;
  name: string;
  sub: string;
  specs: string[];
  image?: string;
  icon?: ReactNode;
  /** Pickup day rate, excl. btw. */
  day: number;
}

const PumpIcon = (
  <svg
    width="52"
    height="52"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C8102E"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" />
    <path d="M12 19v3M8 22h8" />
  </svg>
);

const ReelIcon = (
  <svg
    width="52"
    height="52"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C8102E"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M20 12h3" />
  </svg>
);

const PRODUCTS: PickupProduct[] = [
  {
    group: "Bouwdrogers",
    key: "small",
    name: "Small Bouwdroger",
    sub: "Voor één ruimte of kleinere verdieping",
    specs: ["50 l / 24 u", "tot 150 m³", "0,9 kW", "reservoir"],
    image: "/vernast/ttk-170.webp",
    day: 5,
  },
  {
    group: "Bouwdrogers",
    key: "medium",
    name: "Medium Bouwdroger",
    sub: "Voor volledige verdiepingen en hogere vochtbelasting",
    specs: ["80 l / 24 u", "tot 300 m³", "1,1 kW", "pompklaar"],
    image: "/vernast/ttk-350.webp",
    day: 7,
  },
  {
    group: "Bouwdrogers",
    key: "large",
    name: "Large Bouwdroger",
    sub: "Voor grote volumes en zware droogklussen",
    specs: ["150 l / 24 u", "tot 600 m³", "1,4 kW", "pompklaar"],
    image: "/vernast/ttk-650.webp",
    day: 9,
  },
  {
    group: "Bouwdrogers",
    key: "corov",
    name: "Coroventa ECO Revolution",
    sub: "Ons topmodel, maximale vochtafvoer bij minimaal verbruik",
    specs: ["eco-techniek", "laag verbruik", "fluisterstil", "tot 400 m³"],
    image: "/vernast/eco-revolution.webp",
    day: 8,
  },
  {
    group: "Ventilatoren",
    key: "axiaal",
    name: "Turbo Axiaalventilator",
    sub: "Grote luchtverplaatsing door de hele ruimte",
    specs: ["5 300 m³/u", "IP55", "3 standen", "0,25 kW"],
    image: "/vernast/vent-axiaal.webp",
    day: 3,
  },
  {
    group: "Ventilatoren",
    key: "radiaal",
    name: "Turbo Radiaalventilator",
    sub: "Gerichte luchtstroom, onder vloeren en in hoeken",
    specs: ["gericht drogen", "stapelbaar", "0,37 kW"],
    image: "/vernast/vent-radiaal.webp",
    day: 3.5,
  },
  {
    group: "Elektrische kachels",
    key: "kachel20",
    name: "Elektrische kachel 2,0 kW",
    sub: "Compact, houdt kleinere ruimtes op temperatuur",
    specs: ["2,0 kW", "thermostaat", "230 V"],
    image: "/vernast/kachel-20.webp",
    day: 2,
  },
  {
    group: "Elektrische kachels",
    key: "kachel30",
    name: "Elektrische kachel 3,3 kW",
    sub: "Krachtig, gelijkmatige warmte in grotere ruimtes",
    specs: ["3,3 kW", "thermostaat", "230 V"],
    image: "/vernast/kachel-30.webp",
    day: 2.5,
  },
  {
    group: "Toebehoren",
    key: "pomp",
    name: "Condenspomp",
    sub: "Pompt condenswater automatisch weg, geen reservoir legen",
    specs: ["zuiver water", "naar afvoer"],
    icon: PumpIcon,
    day: 2,
  },
  {
    group: "Toebehoren",
    key: "haspel",
    name: "Kabelhaspel 25 m",
    sub: "Veilig aansluiten, ook zonder stopcontact vlakbij",
    specs: ["25 m", "geaard", "3 500 W"],
    icon: ReelIcon,
    day: 1,
  },
];

const GROUPS = [...new Set(PRODUCTS.map((p) => p.group))];

const DAY_OPTIONS = [
  { value: 3, label: "3 dagen" },
  { value: 7, label: "7 dagen (1 week)" },
  { value: 14, label: "14 dagen (2 weken)" },
  { value: 21, label: "21 dagen (3 weken)" },
  { value: 28, label: "28 dagen (4 weken)" },
];

const SLOTS = ["07:30 – 08:00", "08:00 – 10:00", "10:00 – 12:00", "13:00 – 15:00", "15:00 – 17:00"];

/** The design caps a line at eight units of the same device. */
const MAX_PER_PRODUCT = 8;

const euro = (n: number) =>
  `€ ${n.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const shortDate = (d: Date) => d.toLocaleDateString("nl-BE", { day: "numeric", month: "short" });

/** Tomorrow, as the earliest pickup date the date input accepts. */
function tomorrow(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

const VerhuurAfhalenPage = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [days, setDays] = useState(7);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(SLOTS[2]);
  const [customerType, setCustomerType] = useState<"part" | "pro">("part");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [vat, setVat] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  const minDate = useMemo(tomorrow, []);

  const qty = (key: string) => quantities[key] ?? 0;
  const groupCount = (group: string) =>
    PRODUCTS.filter((p) => p.group === group).reduce((total, p) => total + qty(p.key), 0);

  const step = (key: string, delta: number) =>
    setQuantities((current) => ({
      ...current,
      [key]: Math.max(0, Math.min(MAX_PER_PRODUCT, (current[key] ?? 0) + delta)),
    }));

  const chosen = PRODUCTS.filter((p) => qty(p.key) > 0);
  const units = chosen.reduce((total, p) => total + qty(p.key), 0);
  const total = chosen.reduce((sum, p) => sum + p.day * qty(p.key) * days, 0);

  const professionalReady = customerType !== "pro" || (company.trim() !== "" && vat.trim() !== "");
  const canReserve =
    units > 0 &&
    date !== "" &&
    name.trim() !== "" &&
    isValidPhone(phone) &&
    isValidEmail(mail) &&
    professionalReady &&
    agreed;

  const weekSuffix =
    days >= 7 ? ` (${days / 7} ${days === 7 ? "week" : "weken"})` : "";
  const summaryTitle = units
    ? `${units} toestel${units === 1 ? "" : "len"} · ${days} dagen${weekSuffix} · afhalen`
    : "Nog geen toestellen gekozen";

  const returnDate = useMemo(() => {
    if (!date) return null;
    const start = new Date(date);
    const end = new Date(start);
    end.setDate(end.getDate() + days);
    return { start, end };
  }, [date, days]);

  const reserve = () => {
    setReference(`VRN-AF-2026-${Math.floor(Math.random() * 900) + 100}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="vh-pick">
      {/*
        Deze pagina had als enige indexeerbare pagina van de verhuurfunnel
        géén gestructureerde data — geen kruimelpad, geen prijzen. Terwijl ze
        precies het antwoord bevat op "waar kan ik een bouwdroger afhalen":
        een adres, openingsuren en een tarieflijst. De afhaalprijzen hieronder
        zijn die van deze pagina zelf, niet de leverprijzen.
      */}
      <PageMeta
        {...SEO.verhuurAfhalen}
        jsonLd={[
          offerCatalogSchema(
            "Afhaaltarieven losse toestellen, Aartselaar",
            PRODUCTS.map((product) => ({
              name: product.name,
              description: product.sub,
              path: "/verhuur/afhalen",
              pricePerDay: product.day,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Toestellen", path: "/verhuur/afhalen" },
          ]),
        ]}
      />
      <V3Header />

      <header className="top">
        <div className="wrap in">
          <Link to="/">
            <img src="/vernast/logo-horizontal-white.webp" alt="Vernast Verhuur" loading="lazy" decoding="async" />
          </Link>
          <a className="bk" href="/#toestellen">
            ← Terug naar het gamma
          </a>
        </div>
      </header>

      <section className="lead">
        <div className="wrap">
          <span className="chip">Zelf afhalen · Aartselaar</span>
          <h1>Losse toestellen huren en zelf afhalen.</h1>
          <p>
            Stel zelf samen wat u nodig heeft, bouwdrogers, ventilatoren, kachels en toebehoren, en
            haal alles af in ons magazijn. Omdat u zelf haalt en plaatst, betaalt u lagere
            afhaalprijzen.
          </p>
          <div className="note">
            <InfoIcon />
            <span>
              <b>Let op:</b> bij afhalen plaatst en volgt u zelf op, de 100% droog-garantie geldt
              enkel bij onze <Link to="/verhuur/calculator">geleverde en geïnstalleerde pakketten</Link>.
            </span>
          </div>
        </div>
      </section>

      <div className="wrap shell">
        <div className="main" style={reference ? { display: "none" } : undefined}>
          <div className="blk">
            <h2>1. Kies uw toestellen</h2>
            <p className="bs">
              Kies per categorie het aantal dat u nodig heeft. Alle prijzen zijn afhaalprijzen per
              dag, excl. btw.
            </p>
            <div>
              {GROUPS.map((group) => {
                const count = groupCount(group);
                return (
                  <div className="gsec" key={group}>
                    <div className="gsec-h">
                      <span className="gname">{group}</span>
                      <span
                        className={`gst${count > 0 ? " ok" : ""}`}
                        style={count > 0 ? undefined : { display: "none" }}
                      >
                        {count} gekozen
                      </span>
                    </div>
                    <div className="pgrid">
                      {PRODUCTS.filter((p) => p.group === group).map((product) => (
                        <div
                          className={`pcard${qty(product.key) > 0 ? " has" : ""}`}
                          key={product.key}
                        >
                          <span className="ph">
                            {product.image ? (
                              <img src={product.image} alt="" loading="lazy" />
                            ) : (
                              product.icon
                            )}
                          </span>
                          <span className="pi">
                            <b>{product.name}</b>
                            <small>{product.sub}</small>
                            <span className="sp">
                              {product.specs.map((spec) => (
                                <span key={spec}>{spec}</span>
                              ))}
                            </span>
                          </span>
                          <span className="pr">
                            <span className="px">
                              {euro(product.day)} <i>per dag</i>
                            </span>
                            <span className="stp">
                              <button type="button" onClick={() => step(product.key, -1)}>
                                −
                              </button>
                              <span>{qty(product.key)}</span>
                              <button type="button" onClick={() => step(product.key, 1)}>
                                +
                              </button>
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="blk">
            <h2>2. Huurperiode &amp; afhaalmoment</h2>
            <p className="bs">
              U haalt af en brengt terug in ons magazijn, op weekdagen tussen 7:30 en 17:00.
            </p>
            <div className="frow">
              <div className="fld">
                <label htmlFor="aDays">Huurperiode</label>
                <select
                  id="aDays"
                  value={days}
                  onChange={(event) => setDays(Number(event.target.value))}
                >
                  {DAY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="fld">
                <label htmlFor="aDate">Afhaaldatum</label>
                <input
                  type="date"
                  id="aDate"
                  min={minDate}
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div className="fld">
                <label htmlFor="aSlot">Afhaalmoment</label>
                <select id="aSlot" value={slot} onChange={(event) => setSlot(event.target.value)}>
                  {SLOTS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="adres">
              <PinIcon size={17} />
              <span>
                <b>Vernast Verhuur, magazijn</b>
                <br />
                Boomsesteenweg 12, Unit 11 · 2630 Aartselaar
                <br />
                U krijgt bij afhaling korte uitleg over plaatsing en gebruik.
              </span>
            </div>
          </div>

          <div className="blk">
            <h2>3. Uw gegevens</h2>
            <p className="bs">U betaalt niets vooraf, facturatie volgt na de huurperiode.</p>
            <div className="ktype">
              <button
                type="button"
                className={customerType === "part" ? "active" : undefined}
                onClick={() => setCustomerType("part")}
              >
                Particulier
              </button>
              <button
                type="button"
                className={customerType === "pro" ? "active" : undefined}
                onClick={() => setCustomerType("pro")}
              >
                Professioneel
              </button>
            </div>
            <div className="frow two">
              <div className="fld">
                <label htmlFor="cNaam">Naam</label>
                <input
                  type="text"
                  id="cNaam"
                  placeholder="Voor- en achternaam"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="fld">
                <label htmlFor="cTel">Telefoon</label>
                <input
                  type="tel"
                  id="cTel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="0470 00 00 00"
                  value={phone}
                  onChange={(event) => setPhone(maskPhone(event.target.value))}
                />
              </div>
            </div>
            <div className="frow two" style={{ marginTop: 14 }}>
              <div className="fld">
                <label htmlFor="cMail">E-mail</label>
                <input
                  type="email"
                  id="cMail"
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="naam@voorbeeld.be"
                  value={mail}
                  onChange={(event) => setMail(maskEmail(event.target.value))}
                />
              </div>
              <div className="fld">
                <label htmlFor="cAdres">Adres</label>
                <input
                  type="text"
                  id="cAdres"
                  placeholder="Straat, nr, gemeente"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
            </div>
            {customerType === "pro" && (
              <div className="frow two" style={{ marginTop: 14 }}>
                <div className="fld">
                  <label htmlFor="cFirma">Bedrijfsnaam</label>
                  <input
                    type="text"
                    id="cFirma"
                    placeholder="Uw firma bv"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
                <div className="fld">
                  <label htmlFor="cBtw">Btw-nummer</label>
                  <input
                    type="text"
                    id="cBtw"
                    placeholder="BE 0123.456.789"
                    value={vat}
                    onChange={(event) => setVat(event.target.value)}
                  />
                </div>
              </div>
            )}
            <label className="chk">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
              />{" "}
              Ik ga akkoord met de huurvoorwaarden en breng de toestellen proper en onbeschadigd
              terug.
            </label>
          </div>
        </div>

        <div className={`done${reference ? " on" : ""}`}>
          <div className="ic">
            <CheckIcon size={30} />
          </div>
          <h2>Uw afhaalreservatie staat vast</h2>
          <p>
            Alles ligt voor u klaar in ons magazijn in Aartselaar op het gekozen moment. U ontvangt
            zo een bevestiging per e-mail met de afhaalinstructies.
          </p>
          <div className="ref">
            <span>Referentie</span>
            <span>{reference ?? "VRN-AF-2026-000"}</span>
          </div>
        </div>

        <aside className="side">
          <div className="sh">
            <div className="l">Uw afhaalreservatie</div>
            <h3>{summaryTitle}</h3>
          </div>
          <div className="rows">
            {chosen.length === 0 && <div className="srow mut">Kies links uw toestellen</div>}
            {chosen.map((product) => (
              <div className="srow" key={product.key}>
                <span>
                  {qty(product.key)}× {product.name} · {days} d
                </span>
                <b>{euro(product.day * qty(product.key) * days)}</b>
              </div>
            ))}
            {returnDate && (
              <div className="srow">
                <span>
                  Afhalen {shortDate(returnDate.start)} ({slot}) → terug{" "}
                  {shortDate(returnDate.end)}
                </span>
                <b>-</b>
              </div>
            )}
          </div>
          <div className="tot">
            <span className="l">Totaal excl. btw</span>
            <span className="v">
              {euro(total)} <small>excl. btw</small>
            </span>
          </div>
          <div className="bf">
            <button
              className="btn"
              type="button"
              disabled={!canReserve || reference !== null}
              onClick={reserve}
            >
              Reserveer voor afhaling
            </button>
            <div className="nt">Geen voorschot · lagere afhaalprijzen</div>
          </div>
        </aside>
      </div>

      <footer className="site">
        <div className="wrap in">
          <span>© 2026 Vernast Verhuur · Boomsesteenweg 12, Unit 11, Aartselaar</span>
          <span>
            Liever geleverd én geïnstalleerd met droog-garantie?{" "}
            <Link to="/verhuur/calculator">Bereken uw pakket</Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default VerhuurAfhalenPage;
