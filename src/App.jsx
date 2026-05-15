import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardList,
  Compass,
  Factory,
  Fuel,
  Gauge,
  Globe2,
  Headphones,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Package,
  PackageCheck,
  Phone,
  Quote,
  Radar,
  Route,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Timer,
  Truck,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

const WHATSAPP_DIGITS = "919876543210";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(
  "Hi TransVigo, I'd like to discuss fleet / line-haul requirements."
)}`;
const EMAIL = "info@transvigo.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Enquiry — TransVigo Logistics"
)}`;

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Network", href: "#routes" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

const heroStats = [
  ["200+", "GPS-Enabled Vehicles"],
  ["20+", "Years Experience"],
  ["24×7", "Fleet Monitoring"],
  ["Pan-India", "Operational Reach"],
];

const services = [
  {
    title: "Line Haul (FTL) Operations",
    text: "Dedicated full-truckload movement across major industrial corridors with assured placement.",
    Icon: Truck,
  },
  {
    title: "Inter-Hub Transportation",
    text: "Scheduled hub-to-hub linehaul connecting warehouses, DCs and sorting centers.",
    Icon: Route,
  },
  {
    title: "Dedicated Fleet Deployment",
    text: "Captive vehicles on fixed lanes — predictable capacity, consistent crews, your KPIs.",
    Icon: Layers,
  },
  {
    title: "Factory Dispatch Support",
    text: "Plant-side vehicle planning, gate-in/gate-out discipline, and on-time dispatch.",
    Icon: Factory,
  },
  {
    title: "Peak Load Capacity Support",
    text: "Surge fleet on tap during festive, seasonal or end-of-month dispatch peaks.",
    Icon: Zap,
  },
  {
    title: "Feeder Route Operations",
    text: "Short-haul connectivity feeding your line-haul, e-commerce and 3PL networks.",
    Icon: Navigation,
  },
];

const fleet = [
  { type: "32 ft Single Axle", capacity: "9–10 T", body: "Container / SXL", Icon: Truck },
  { type: "32 ft Multi Axle", capacity: "14–18 T", body: "Container / MXL", Icon: Truck },
  { type: "24 ft Container", capacity: "7–8 T", body: "Closed Body", Icon: Truck },
  { type: "20 ft Container", capacity: "6–7 T", body: "Closed Body", Icon: Truck },
  { type: "17 ft Open Body", capacity: "5 T", body: "Open / Tarp", Icon: Truck },
  { type: "14 ft / 1109", capacity: "3.5–4 T", body: "Closed Body", Icon: Truck },
  { type: "Tata Ace / Pickup", capacity: "<1 T", body: "Last Mile", Icon: Truck },
  { type: "Trailer (40 ft)", capacity: "20–25 T", body: "Project Cargo", Icon: Truck },
];

const capabilities = [
  { title: "Live GPS Tracking", text: "Real-time vehicle visibility with geofence & ETA alerts.", Icon: Radar },
  { title: "24×7 Control Tower", text: "Dedicated dispatch desk, exception handling, escalation matrix.", Icon: Headphones },
  { title: "E-Way Bill & Compliance", text: "End-to-end EWB, FASTag, RC/PUC adherence on every trip.", Icon: ShieldCheck },
  { title: "ePOD & Digital Documents", text: "Digital proof-of-delivery, signed challans, instant share.", Icon: ClipboardList },
];

const corridors = [
  // dx, dy from center hub; values are normalized for an 800x800 svg with hub at (400,400)
  { name: "Mumbai", code: "BOM", dx: -180, dy: 220, distance: "1,400 km" },
  { name: "Ahmedabad", code: "AMD", dx: -260, dy: 80, distance: "950 km" },
  { name: "Surat", code: "STV", dx: -230, dy: 170, distance: "1,160 km" },
  { name: "Pune", code: "PNQ", dx: -150, dy: 260, distance: "1,450 km" },
  { name: "Bengaluru", code: "BLR", dx: -60, dy: 320, distance: "2,100 km" },
  { name: "Hyderabad", code: "HYD", dx: 30, dy: 250, distance: "1,500 km" },
  { name: "Kolkata", code: "CCU", dx: 280, dy: 70, distance: "1,500 km" },
  { name: "Lucknow", code: "LKO", dx: 180, dy: -40, distance: "550 km" },
  { name: "Jaipur", code: "JAI", dx: -160, dy: -10, distance: "270 km" },
  { name: "Chandigarh", code: "IXC", dx: 30, dy: -160, distance: "250 km" },
];

const process = [
  { step: "01", title: "Request a Vehicle", text: "Share lane, load type and timeline — get a quote within hours.", Icon: ClipboardList },
  { step: "02", title: "Vehicle Allotted", text: "Verified vehicle + driver assigned with compliant documents.", Icon: Truck },
  { step: "03", title: "Live Tracking", text: "Real-time GPS visibility from pickup to drop with proactive alerts.", Icon: Radar },
  { step: "04", title: "On-Time Delivery", text: "Digital POD, gate-out timestamp and closing checklist on delivery.", Icon: PackageCheck },
];

const industries = [
  { label: "FMCG", Icon: ShoppingBag },
  { label: "Manufacturing", Icon: Factory },
  { label: "E-Commerce", Icon: Boxes },
  { label: "Pharma & Healthcare", Icon: Stethoscope },
  { label: "Automotive", Icon: Wrench },
  { label: "Warehousing & 3PL", Icon: Warehouse },
  { label: "Chemicals & Lubes", Icon: Fuel },
  { label: "Retail & D2C", Icon: Package },
];

const partners = [
  "Reliance",
  "Tata Steel",
  "Asian Paints",
  "Hindustan Unilever",
  "ITC",
  "Maruti Suzuki",
  "Mondelez",
  "Bosch",
  "Castrol",
  "JK Tyre",
  "Dabur",
  "Britannia",
];

function Logo({ inverse = false }) {
  return (
    <a href="#home" className="flex items-center group shrink-0" aria-label="TransVigo Logistics — Home">
      <img
        src="/logo.png"
        alt="TransVigo Logistics"
        className={`h-11 w-auto select-none ${
          inverse
            ? "[filter:brightness(0)_invert(1)]"
            : "[mix-blend-mode:multiply]"
        }`}
        draggable={false}
      />
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const inverse = !scrolled;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(10,34,64,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo inverse={inverse} />
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold tracking-wide transition ${
                inverse ? "text-white/85 hover:text-lime-400" : "text-navy-700 hover:text-teal-600"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 transition text-navy-900 font-bold text-sm px-5 py-2.5 rounded-full shadow-soft"
          >
            Get a Quote <ArrowRight size={16} strokeWidth={2.6} />
          </a>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden h-10 w-10 rounded-lg grid place-items-center border ${
            inverse ? "border-white/30 text-white" : "border-navy-200 text-navy-800"
          }`}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 ${inverse ? "bg-white" : "bg-navy-800"}`} />
            <span className={`block h-0.5 w-5 ${inverse ? "bg-white" : "bg-navy-800"}`} />
            <span className={`block h-0.5 w-5 ${inverse ? "bg-white" : "bg-navy-800"}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-navy-100 px-6 py-5 space-y-3 shadow-lg">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-navy-800 font-semibold py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 bg-lime-500 text-navy-900 font-bold text-sm px-5 py-2.5 rounded-full"
          >
            Get a Quote <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-white pt-10 min-h-[760px]"
    >
      {/* Truck background image */}
      <img
        src="/transvigo%20truck.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
      />
      {/* Dark navy overlay — heavy on left for text legibility, lighter on right so truck shows */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(8,37,68,0.96) 0%, rgba(14,53,89,0.86) 38%, rgba(20,60,97,0.5) 72%, rgba(20,60,97,0.35) 100%)",
        }}
      />
      {/* Subtle grid + brand-color glows preserved on top */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-lime-500/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-xs sm:text-sm font-medium tracking-wide">
            <span className="relative grid place-items-center">
              <span className="absolute inset-0 rounded-full bg-lime-400 animate-ping2" />
              <span className="w-2 h-2 rounded-full bg-lime-400 relative" />
            </span>
            NCR-Based Fleet Operator · Pan-India Linehaul
          </div>
          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] font-extrabold tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            Dedicated Fleet
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-forest-400 to-lime-400 bg-clip-text text-transparent">
              Operations
            </span>{" "}
            Across India
          </h1>
          <p className="mt-7 text-lg sm:text-xl leading-9 text-white/85 max-w-2xl">
            TransVigo Logistics delivers disciplined line-haul movement, fixed-lane fleet deployment,
            inter-hub transportation and time-bound dispatch across major industrial corridors.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 transition text-navy-900 font-bold px-7 py-4 rounded-2xl text-base shadow-2xl"
            >
              Get Freight Quote
              <ArrowRight size={18} strokeWidth={2.6} className="group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href="#fleet"
              className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 backdrop-blur transition px-7 py-4 rounded-2xl text-base font-semibold"
            >
              Attach Your Vehicle
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-lime-400" /> GPS on every trip</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-lime-400" /> EWB &amp; FASTag compliant</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-lime-400" /> On-time placement SLAs</span>
          </div>
        </div>

        {/* Right column — floating trust cards over the truck */}
        <div className="lg:col-span-5 relative min-h-[320px] hidden lg:block">
          <div className="absolute top-4 right-0 bg-white/95 backdrop-blur text-navy-900 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 animate-floaty">
            <div className="h-10 w-10 rounded-xl bg-teal-500/15 text-teal-600 grid place-items-center">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-navy-500">EWB · FASTag</div>
              <div className="text-sm font-bold">100% Compliant</div>
            </div>
          </div>

          <div className="absolute top-32 right-12 bg-white/95 backdrop-blur text-navy-900 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 w-[250px]" style={{ animation: "floaty 5s ease-in-out infinite", animationDelay: "0.6s" }}>
            <div className="h-10 w-10 rounded-xl bg-lime-500/15 text-lime-600 grid place-items-center">
              <Radar size={20} />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-navy-500">Live Tracking</div>
              <div className="text-sm font-bold">NCR → Mumbai · ETA 28h</div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur text-navy-900 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 animate-floaty" style={{ animationDelay: "1.2s" }}>
            <div className="h-10 w-10 rounded-xl bg-navy-100 text-navy-700 grid place-items-center">
              <Truck size={20} />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-navy-500">Owned Fleet</div>
              <div className="text-sm font-bold">HR55AV0024</div>
            </div>
          </div>
        </div>

        {/* Hero stats row */}
        <div className="lg:col-span-12 mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroStats.map(([num, label]) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-xl border border-white/15 px-5 py-5 rounded-2xl"
            >
              <div className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 via-forest-400 to-lime-400 bg-clip-text text-transparent">
                {num}
              </div>
              <div className="mt-1.5 text-sm text-white/75">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersMarquee() {
  return (
    <section className="bg-white border-y border-navy-100 py-7">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-xs uppercase tracking-[0.28em] font-bold text-navy-400 text-center mb-5">
          Trusted by industrial leaders across India
        </div>
        <div className="fade-mask overflow-hidden">
          <div className="flex gap-12 animate-marquee w-max">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="text-navy-700/70 hover:text-navy-800 transition font-bold text-lg tracking-wider whitespace-nowrap"
              >
                {p.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-8 -mt-14 relative z-20">
      <div className="bg-white rounded-[36px] shadow-soft border border-navy-100 p-8 lg:p-12 grid lg:grid-cols-3 gap-10">
        <div>
          <div className="text-teal-600 font-bold uppercase tracking-[0.22em] text-xs">About TransVigo</div>
          <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold leading-tight text-navy-900">
            Reliable Fleet Movement With Operational Discipline
          </h2>
        </div>
        <div className="lg:col-span-2 text-lg text-navy-600 leading-9">
          TransVigo Logistics specializes in line-haul transportation, dedicated fleet deployment, inter-hub
          movement and fixed-route dispatch operations. Our focus is assured vehicle placement, route discipline,
          GPS visibility and scalable fleet execution for factories, warehouses and logistics partners across India.
          <div className="mt-6 flex flex-wrap gap-3">
            {["ISO-aligned SOPs", "Owned + Attached fleet", "Pan-India network", "Digital control tower"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-navy-100"
              >
                <BadgeCheck size={16} className="text-teal-600" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14">
        <div className="max-w-2xl">
          <div className="text-teal-600 font-bold uppercase tracking-[0.22em] text-xs">Services</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-navy-900">
            Core Transport Services
          </h2>
          <p className="mt-4 text-lg text-navy-500 leading-8">
            Purpose-built transport operations for industrial movement, dedicated lanes and high-volume dispatch
            support.
          </p>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-600">
          Discuss a lane <ArrowRight size={18} />
        </a>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map(({ title, text, Icon }, i) => {
          const accent = i % 2 === 0 ? "text-lime-400" : "text-teal-400";
          return (
            <article
              key={title}
              className="group relative overflow-hidden bg-white rounded-3xl p-6 border border-navy-100 hover:border-teal-500/40 hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-teal-500/0 to-lime-500/0 group-hover:from-teal-500/15 group-hover:to-lime-500/15 transition" />
              {/* hover top accent bar */}
              <div className="absolute top-0 left-6 right-6 h-1 rounded-b bg-gradient-to-r from-teal-500 via-forest-500 to-lime-500 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative flex items-start gap-4">
                <div
                  className="shrink-0 h-14 w-14 rounded-2xl grid place-items-center shadow-soft"
                  style={{
                    background:
                      "linear-gradient(135deg, #143C61 0%, #0E3559 100%)",
                  }}
                >
                  <Icon size={24} strokeWidth={2.2} className={accent} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-navy-900 leading-snug">
                    {title}
                  </h3>
                  <p className="mt-2 text-navy-500 text-sm leading-7">{text}</p>
                </div>
              </div>

              <a
                href="#contact"
                className="relative mt-5 inline-flex items-center gap-1 text-sm font-bold text-teal-700 hover:text-teal-600 hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={14} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Fleet() {
  return (
    <section id="fleet" className="relative py-24 bg-navy-50/60 border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-teal-600 font-bold uppercase tracking-[0.22em] text-xs">Fleet</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-navy-900">
            Right Vehicle. Right Lane. Right Time.
          </h2>
          <p className="mt-4 text-lg text-navy-500 leading-8">
            Owned and attached fleet ranging from last-mile pickups to 40 ft trailers — matched to your cargo profile
            and route economics.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fleet.map((v) => (
            <div
              key={v.type}
              className="group relative bg-white rounded-3xl border border-navy-100 p-6 shadow-soft hover:border-lime-300 transition"
            >
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-lime-500/10 text-lime-600 grid place-items-center">
                  <v.Icon size={22} strokeWidth={2.2} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-navy-400">
                  {v.body}
                </span>
              </div>
              <div className="mt-5 text-lg font-extrabold text-navy-900">{v.type}</div>
              <div className="mt-1 inline-flex items-center gap-1.5 text-sm text-navy-500 font-semibold">
                <Gauge size={14} className="text-teal-600" /> Payload {v.capacity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HubSpokeMap() {
  const cx = 400;
  const cy = 400;
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      <svg viewBox="0 0 800 800" className="w-full h-full">
        {/* concentric rings */}
        {[120, 200, 280, 360].map((r) => (
          <circle
            key={r}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="rgba(43,166,183,0.18)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
        ))}

        {/* crosshair */}
        <line x1="60" y1={cy} x2="740" y2={cy} stroke="rgba(255,255,255,0.07)" />
        <line x1={cx} y1="60" x2={cx} y2="740" stroke="rgba(255,255,255,0.07)" />

        {/* routes */}
        {corridors.map((c) => {
          const x = cx + c.dx;
          const y = cy + c.dy;
          return (
            <g key={c.name}>
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="url(#routeGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="animate-dash"
              />
              <circle cx={x} cy={y} r="6" fill="#79C142" />
              <circle cx={x} cy={y} r="11" fill="none" stroke="#79C142" strokeOpacity="0.4" />
              <text
                x={x + (c.dx >= 0 ? 14 : -14)}
                y={y - 10}
                fill="#e2e8f0"
                fontSize="14"
                fontWeight="700"
                textAnchor={c.dx >= 0 ? "start" : "end"}
              >
                {c.name}
              </text>
              <text
                x={x + (c.dx >= 0 ? 14 : -14)}
                y={y + 8}
                fill="#94a3b8"
                fontSize="10.5"
                fontWeight="600"
                textAnchor={c.dx >= 0 ? "start" : "end"}
              >
                {c.code} · {c.distance}
              </text>
            </g>
          );
        })}

        {/* NCR hub */}
        <g>
          <circle cx={cx} cy={cy} r="40" fill="rgba(121,193,66,0.18)" />
          <circle cx={cx} cy={cy} r="22" fill="#79C142" />
          <circle cx={cx} cy={cy} r="22" fill="none" stroke="#fff" strokeOpacity="0.6" />
          <text x={cx} y={cy + 5} textAnchor="middle" fill="#0a2240" fontWeight="800" fontSize="13">
            NCR
          </text>
        </g>

        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2BBED9" />
            <stop offset="50%" stopColor="#356939" />
            <stop offset="100%" stopColor="#74C13F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Routes() {
  return (
    <section id="routes" className="relative bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-lime-400 font-bold uppercase tracking-[0.22em] text-xs">Operational Network</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-tight">
            Major Line-Haul & Fixed Route Corridors
          </h2>
          <p className="mt-5 text-white/70 text-lg leading-8 max-w-xl">
            From the NCR hub we operate scheduled and on-demand linehaul to India's busiest industrial,
            consumption and port corridors — with consistent placement KPIs.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {corridors.slice(0, 9).map((c) => (
              <div
                key={c.name}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">NCR ⇄ {c.name}</span>
                  <span className="text-[10px] font-bold text-lime-400">{c.code}</span>
                </div>
                <div className="mt-1 text-[11px] text-white/55 font-semibold">{c.distance}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80">
            <Globe2 size={16} className="text-teal-400" /> Open to lane requests — Pan-India
          </div>
        </div>

        <div className="relative">
          <HubSpokeMap />
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-teal-600 font-bold uppercase tracking-[0.22em] text-xs">Tech & Compliance</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-navy-900">
            A Control Tower Built for Linehaul
          </h2>
          <p className="mt-4 text-lg text-navy-500 leading-8">
            Visibility, compliance and exception management — embedded into every trip we run.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map(({ title, text, Icon }) => (
            <div
              key={title}
              className="relative rounded-3xl p-7 bg-navy-800 text-white overflow-hidden shadow-soft"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 bg-teal-500/20 rounded-full blur-2xl" />
              <Icon size={28} className="text-lime-400" strokeWidth={2.2} />
              <div className="mt-6 text-lg font-extrabold">{title}</div>
              <p className="mt-2 text-white/65 text-sm leading-6">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 bg-navy-50/60 border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-teal-600 font-bold uppercase tracking-[0.22em] text-xs">How it works</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-navy-900">
            From Booking to Proof of Delivery
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map(({ step, title, text, Icon }, i) => (
            <div key={step} className="relative">
              <div className="bg-white rounded-3xl p-7 border border-navy-100 shadow-soft h-full">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-extrabold text-navy-100">{step}</span>
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 via-forest-500 to-lime-500 grid place-items-center text-white">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                </div>
                <div className="mt-3 text-lg font-extrabold text-navy-900">{title}</div>
                <p className="mt-2 text-navy-500 text-sm leading-6">{text}</p>
              </div>
              {i < process.length - 1 && (
                <ArrowRight
                  className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-navy-300"
                  size={28}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-teal-600 font-bold uppercase tracking-[0.22em] text-xs">Industries Served</div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-navy-900">
              Sectors We Move Every Day
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ label, Icon }) => (
            <div
              key={label}
              className="group flex items-center gap-4 bg-navy-50/70 hover:bg-white rounded-2xl p-5 border border-navy-100 hover:border-teal-200 hover:shadow-soft transition"
            >
              <div className="h-12 w-12 rounded-xl bg-white text-teal-600 grid place-items-center border border-navy-100 group-hover:bg-teal-500 group-hover:text-white transition">
                <Icon size={22} strokeWidth={2.2} />
              </div>
              <span className="font-bold text-navy-800">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  const items = [
    { num: "98.6%", label: "On-time placement", Icon: Timer },
    { num: "100%", label: "GPS-enabled trips", Icon: Radar },
    { num: "10+", label: "Industries served", Icon: Boxes },
    { num: "5,000+", label: "Trips / month", Icon: Truck },
  ];
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 mb-0">
        <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-[32px] p-8 lg:p-10 shadow-soft grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ num, label, Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white/10 grid place-items-center text-lime-400">
                <Icon size={24} strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">{num}</div>
                <div className="text-white/65 text-sm font-semibold">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section
      id="founder"
      className="relative py-24 overflow-hidden text-white bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900"
    >
      {/* Grid + brand-color glows — moved here from the old hero */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-lime-500/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-14 items-center">
        {/* Portrait */}
        <div className="lg:col-span-5 relative">
          <div
            className="absolute -top-6 -left-6 h-40 w-40 rounded-3xl opacity-40 blur-xl"
            style={{ background: "linear-gradient(135deg,#74C13F,#2BBED9)" }}
          />
          <div
            className="absolute -bottom-6 -right-6 h-44 w-44 rounded-3xl opacity-40 blur-xl"
            style={{ background: "linear-gradient(135deg,#2BBED9,#143C61)" }}
          />

          <div className="relative rounded-[32px] overflow-hidden border border-white/15 bg-white/5 backdrop-blur shadow-2xl">
            <img
              src="/founder.jpeg"
              alt="Founder, TransVigo Logistics"
              className="w-full aspect-[4/5] object-cover"
              draggable={false}
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900/70 to-transparent pointer-events-none" />
          </div>

          {/* floating credential card */}
          <div className="absolute -bottom-5 left-6 right-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-navy-100">
            <div
              className="h-12 w-12 rounded-xl grid place-items-center"
              style={{ background: "linear-gradient(135deg,#143C61,#0E3559)" }}
            >
              <Quote size={20} className="text-lime-400" />
            </div>
            <div className="leading-tight">
              <div className="text-[11px] font-bold uppercase tracking-wider text-navy-500">
                Founder &amp; Managing Director
              </div>
              <div className="text-base font-extrabold text-navy-900">
                TransVigo Logistics
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="lg:col-span-7">
          <div className="text-lime-400 font-bold uppercase tracking-[0.22em] text-xs">
            From the Founder
          </div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-tight">
            A promise to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#5DD0E6 0%,#9bd55e 50%,#95D360 100%)",
              }}
            >
              every load, every lane
            </span>
            .
          </h2>

          <Quote
            size={44}
            className="mt-8 text-teal-400/50"
            strokeWidth={1.6}
          />
          <blockquote className="mt-2 text-lg lg:text-xl text-white/85 leading-9 max-w-2xl">
            TransVigo was built around one belief — that India's industrial
            corridors deserve linehaul partners who are accountable to the load,
            not just the rate. Every truck we attach, every lane we open and
            every digital tool we deploy serves that promise: <em className="text-white">disciplined
            operations, transparent tracking, and on-time delivery</em>.
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div
              className="h-12 w-12 rounded-full grid place-items-center text-navy-900 font-extrabold"
              style={{ background: "linear-gradient(135deg,#2BBED9,#74C13F)" }}
            >
              TV
            </div>
            <div>
              <div className="text-lg font-extrabold">
                Founder, TransVigo Logistics
              </div>
              <div className="text-sm text-white/65 font-semibold">
                NCR · India · {new Date().getFullYear()}
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["20+", "Years in Industry"],
              ["200+", "Vehicles Managed"],
              ["10+", "Sectors Served"],
            ].map(([num, label]) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 via-forest-400 to-lime-400 bg-clip-text text-transparent">
                  {num}
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white/60">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 transition text-navy-900 font-bold px-5 py-3 rounded-2xl text-sm shadow-soft"
            >
              <MessageCircle size={16} /> Speak to the Founder
            </a>
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 border border-white/25 hover:bg-white/10 backdrop-blur transition text-white font-bold px-5 py-3 rounded-2xl text-sm"
            >
              <Mail size={16} /> {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <div className="relative rounded-[40px] bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 text-white p-8 lg:p-14 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-lime-500/20 blur-3xl rounded-full" />
        <div className="absolute -left-10 bottom-0 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-lime-400 uppercase tracking-[0.22em] font-bold text-xs">Contact Us</div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-tight">
              Need Dedicated Vehicles On Fixed Routes?
            </h2>
            <p className="mt-5 text-lg text-white/75 leading-9 max-w-xl">
              Connect with TransVigo Logistics for daily vehicle placement, inter-hub transportation and scalable
              fleet operations.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-navy-900 font-bold px-5 py-4 rounded-2xl w-fit transition"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
              <a
                href={MAILTO}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur border border-white/15 text-white font-semibold px-5 py-4 rounded-2xl w-fit transition"
              >
                <Mail size={20} /> {EMAIL}
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur border border-white/15 text-white font-semibold px-5 py-4 rounded-2xl w-fit transition"
              >
                <Phone size={20} /> +91 98765 43210
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-lime-400">NCR — Head Office</div>
                <div className="mt-1.5 text-white font-bold flex items-start gap-2">
                  <MapPin size={16} className="mt-1 text-teal-400" />
                  Logistics Park, Greater Noida, UP
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-lime-400">Operations Hub</div>
                <div className="mt-1.5 text-white font-bold flex items-start gap-2">
                  <Compass size={16} className="mt-1 text-teal-400" />
                  Faridabad · Ghaziabad · Bhiwadi
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-navy-900 rounded-[28px] p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-extrabold">Request a Callback</h3>
            <p className="mt-1 text-navy-500 text-sm">Share your requirement — our team responds within hours.</p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — TransVigo will reach out shortly.");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Company Name" className="w-full border border-navy-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-teal-500 transition" />
                <input required placeholder="Contact Person" className="w-full border border-navy-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-teal-500 transition" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Origin (City)" className="w-full border border-navy-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-teal-500 transition" />
                <input required placeholder="Destination (City)" className="w-full border border-navy-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-teal-500 transition" />
              </div>
              <input required placeholder="Vehicle Requirement (e.g. 32 ft SXL × 4)" className="w-full border border-navy-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-teal-500 transition" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="tel" placeholder="Mobile" className="w-full border border-navy-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-teal-500 transition" />
                <input type="email" placeholder="Email" className="w-full border border-navy-100 rounded-2xl px-4 py-3.5 focus:outline-none focus:border-teal-500 transition" />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 transition text-navy-900 py-4 rounded-2xl font-bold text-base shadow-soft"
              >
                Request Callback <ArrowRight size={18} strokeWidth={2.6} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Logo inverse />
          <p className="mt-6 text-white/65 leading-8 max-w-md">
            TransVigo Logistics — disciplined linehaul, dedicated fleet and inter-hub transportation across India's
            industrial corridors.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lime-500 text-navy-900 font-bold px-4 py-2.5 rounded-full text-sm"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={MAILTO} className="inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 rounded-full text-sm">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-lime-400 transition">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase">Network</h4>
          <ul className="space-y-2 text-sm">
            {corridors.slice(0, 6).map((c) => (
              <li key={c.name}>
                <a href="#routes" className="hover:text-lime-400 transition">NCR ⇄ {c.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Building2 size={16} className="mt-0.5 text-teal-400" />
              <span>Logistics Park, Greater Noida, UP — 201306</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-teal-400" />
              <a href="tel:+919876543210" className="hover:text-lime-400">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-teal-400" />
              <a href={MAILTO} className="hover:text-lime-400">{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/55 gap-2">
          <span>© {new Date().getFullYear()} TransVigo Logistics. Moving Business Forward.</span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={14} className="text-teal-400" /> EWB · FASTag · MSME registered
          </span>
        </div>
      </div>
    </footer>
  );
}

function ContactDock() {
  return (
    <aside className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp TransVigo"
        className="group h-14 w-14 rounded-full bg-lime-500 hover:bg-lime-400 transition grid place-items-center shadow-2xl"
      >
        <MessageCircle className="text-navy-900" size={24} />
      </a>
      <a
        href="tel:+919876543210"
        aria-label="Call TransVigo"
        className="group h-14 w-14 rounded-full bg-white hover:bg-navy-50 transition grid place-items-center shadow-2xl border border-navy-100"
      >
        <Phone className="text-teal-700" size={22} />
      </a>
    </aside>
  );
}

export default function App() {
  return (
    <div className="bg-white text-navy-900 min-h-screen">
      <Nav />
      <Hero />
      <PartnersMarquee />
      <About />
      <Services />
      <Fleet />
      <Routes />
      <StatsBand />
      <Capabilities />
      <Process />
      <Industries />
      <Founder />
      <Contact />
      <Footer />
      <ContactDock />
    </div>
  );
}
