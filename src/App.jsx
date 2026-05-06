import { useState, useEffect, useId, Fragment, useRef, useCallback } from 'react';
import {
  Armchair,
  BadgeCheck,
  Boxes,
  Box,
  Building2,
  BriefcaseMedical,
  Car,
  Cpu,
  Factory,
  FlaskConical,
  Globe2,
  Landmark,
  Leaf,
  MapPinned,
  Package,
  Phone,
  Puzzle,
  Send,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Stethoscope,
  Truck,
  Users,
  UsersRound,
  UtensilsCrossed,
  Warehouse,
} from 'lucide-react';
import './App.css';

function IconX({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedin({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYoutube({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconInstagram({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 7.058 7.058 1.28.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.357-.276 6.884-2.694 7.068-7.069.058-1.28.073-1.689.073-4.949 0-3.259-.014-3.667-.073-4.947-.277-4.376-2.705-6.798-7.069-7.067-1.28-.058-1.689-.074-4.948-.074zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.993 3.993 0 1 1 4-3.993 4.003 4.003 0 0 1-4 4.017zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

/**
 * Navbar over dark hero uses an SVG-masked WHITE fill derived from logo.jpeg so the lockup reads as pure white,
 * without the colour JPEG sitting on navy. Footer / scrolled bar use the full-colour JPEG.
 */
function Logo({ variant = 'solid' }) {
  const uid = useId().replace(/:/g, '');
  const filtId = `logoInv-${uid}`;
  const maskId = `logoMask-${uid}`;

  if (variant === 'transparent') {
    return (
      <a href="#home" className="logo-link logo-link--transparentNav">
        <svg
          className="logo-link__svgWhite"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 288 76"
          role="img"
          aria-label="Transvigo — Moving Business Forward"
        >
          <defs>
            <filter id={filtId} colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="-1 0 0 0 1  
                        0 -1 0 0 1  
                        0 0 -1 0 1  
                        0 0 0 1 0"
              />
            </filter>
            <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="288" height="76">
              <image
                xlinkHref="/logo.jpeg"
                href="/logo.jpeg"
                width="288"
                height="76"
                preserveAspectRatio="xMidYMid meet"
                filter={`url(#${filtId})`}
              />
            </mask>
          </defs>
          <rect width="288" height="76" fill="#ffffff" mask={`url(#${maskId})`} />
        </svg>
      </a>
    );
  }

  const barClass =
    variant === 'footer' ? 'logo-link logo-link--footerEmbed' : 'logo-link logo-link--solidNav';

  return (
    <a href="#home" className={barClass}>
      <img
        src="/logo.jpeg"
        alt="Transvigo — Moving Business Forward"
        className="logo-link__img"
        decoding="async"
      />
    </a>
  );
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
];

const solutions = [
  {
    title: 'Warehousing & Distribution',
    text: 'Nationwide storage, inventory control, and fulfillment tuned to your SLAs.',
    Icon: Warehouse,
  },
  {
    title: 'Transportation Solutions',
    text: 'Full-truck, multi-modal, and last-mile programs with transparent tracking.',
    Icon: Truck,
  },
  {
    title: 'In-Plant Logistics',
    text: 'Streamlined material flow inside your facilities for higher throughput.',
    Icon: Factory,
  },
  {
    title: 'E-Commerce & D2C Fulfillment',
    text: 'Fast picks, reliable dispatch, and returns handling for digital brands.',
    Icon: ShoppingCart,
  },
  {
    title: 'Pharma & Healthcare Logistics',
    text: 'Temperature integrity, compliance discipline, and audit-ready processes.',
    Icon: Stethoscope,
  },
  {
    title: 'Value-Added Services',
    text: 'Kitting, labelling, QC, and custom packaging at scale.',
    Icon: Puzzle,
  },
  {
    title: 'Tech-Enabled Solutions',
    text: 'Visibility, analytics, and automation embedded across the network.',
    Icon: Cpu,
  },
  {
    title: 'Built-to-Suit Logistics Parks',
    text: 'Purpose-designed facilities aligned to your growth roadmap.',
    Icon: Building2,
  },
];

const industries = [
  { label: 'FMCG', Icon: ShoppingBag },
  { label: 'Food & Grocery', Icon: UtensilsCrossed },
  { label: 'Fashion & Lifestyle', Icon: Shirt },
  { label: 'Chemicals & Paints', Icon: FlaskConical },
  { label: 'Automotive', Icon: Car },
  { label: 'Consumer Durables', Icon: Armchair },
  { label: 'Healthcare & Pharma', Icon: BriefcaseMedical },
];

const whyItems = [
  {
    title: 'Pan-India Network',
    short: 'Coverage that keeps pace with your markets.',
    Icon: MapPinned,
    body: 'A dense footprint across 28 states with consistent operating playbooks, so your supply chain stays predictable from metros to emerging hubs.',
  },
  {
    title: 'Digital Excellence',
    short: 'Real-time visibility and smarter decisions.',
    Icon: Cpu,
    body: 'Integrated control towers, milestone tracking, and analytics help teams resolve exceptions faster and plan with confidence.',
  },
  {
    title: 'Global Standards',
    short: 'Processes benchmarked for quality and safety.',
    Icon: BadgeCheck,
    body: 'Rigorous SOPs, trained teams, and governance models aligned to international expectations for premium brand partners.',
  },
  {
    title: 'Multi-Sector Expertise',
    short: 'Depth across complex categories.',
    Icon: Boxes,
    body: 'From regulated pharma to high-velocity FMCG, we apply sector-specific know-how without compromising speed or compliance.',
  },
  {
    title: 'Empowered Teams',
    short: 'People who own your outcomes.',
    Icon: UsersRound,
    body: '5,000+ professionals focused on service reliability, continuous improvement, and accountable partnership at every site.',
  },
  {
    title: 'ESG Commitment',
    short: 'Responsible operations, measurable progress.',
    Icon: Leaf,
    body: 'Energy-conscious infrastructure, waste reduction, and safer workplaces embedded into how we run every program.',
  },
];

const statRows = [
  { num: '2005', label: 'Founded', Icon: Landmark },
  { num: '7M+', label: 'Cases / Month', Icon: Box },
  { num: '13M+', label: 'Pieces / Month', Icon: Package },
  { num: '140+', label: 'Sites', Icon: MapPinned },
  { num: '5,000+', label: 'Employees', Icon: Users },
  { num: '28', label: 'States', Icon: Globe2 },
];

const socialLinks = [
  { href: '#', label: 'LinkedIn', Icon: IconLinkedin },
  { href: '#', label: 'X', Icon: IconX },
  { href: '#', label: 'YouTube', Icon: IconYoutube },
  { href: '#', label: 'Instagram', Icon: IconInstagram },
];

const testimonials = [
  {
    quote:
      'Transvigo brought discipline and transparency to our national distribution. Their team operates like an extension of ours.',
    initial: 'A',
    name: 'Ananya Mehta',
    role: 'Head of Supply Chain',
    company: 'Leading FMCG Brand',
  },
  {
    quote: 'From inbound quality checks to on-time retail replenishment, the network has been rock solid through peak seasons.',
    initial: 'R',
    name: 'Rahul Verma',
    role: 'Director — Logistics',
    company: 'Consumer Durables Major',
  },
  {
    quote: 'We needed a partner who could scale with our D2C surge. Transvigo delivered speed, accuracy, and clear communication.',
    initial: 'S',
    name: 'Sneha Kulkarni',
    role: 'VP Operations',
    company: 'Digital-First Retailer',
  },
];

const clients = [
  'P&G',
  'Haleon',
  'Mondelez',
  'Modicare',
  'JK Tyre',
  'Reliance Digital',
  'Asian Paints',
  'Colgate',
  'Abbott',
  'Bosch',
  'Siemens',
  'Castrol',
  'Shoppers Stop',
  'Aditya Birla',
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedWhy, setSelectedWhy] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const whySectionRef = useRef(null);
  const whyAutoTimerRef = useRef(null);
  const whyManualPauseUntilRef = useRef(0);

  const advanceWhyTick = useCallback(() => {
    if (whyManualPauseUntilRef.current > Date.now()) return;
    setSelectedWhy((i) => (i + 1) % whyItems.length);
  }, []);

  const clearWhyAutoAdvance = useCallback(() => {
    if (whyAutoTimerRef.current != null) {
      window.clearInterval(whyAutoTimerRef.current);
      whyAutoTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    const el = whySectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;

    const reduceMotion =
      typeof window.matchMedia !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return undefined;

    const startAdvance = () => {
      if (whyAutoTimerRef.current != null) return;
      whyAutoTimerRef.current = window.setInterval(advanceWhyTick, 4600);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting && e.intersectionRatio >= 0.28);
        if (visible) {
          startAdvance();
        } else {
          clearWhyAutoAdvance();
        }
      },
      { threshold: [0, 0.15, 0.28, 0.45, 0.6] },
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      clearWhyAutoAdvance();
    };
  }, [advanceWhyTick, clearWhyAutoAdvance]);

  const handleWhyPillarSelect = useCallback((idx) => {
    whyManualPauseUntilRef.current = Date.now() + 14000;
    setSelectedWhy(idx);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const close = () => setMobileOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [mobileOpen]);

  const progress = ((selectedWhy + 1) / whyItems.length) * 100;
  const WhyDetailIcon = whyItems[selectedWhy].Icon;

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--solid' : 'nav--transparent'}`}>
        <div className="container nav__inner">
          <Logo variant={scrolled ? 'solid' : 'transparent'} />
          <button
            type="button"
            className="nav__burger"
            aria-expanded={mobileOpen}
            aria-label="Menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} className="nav__link" href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="btn-quote" href="#contact" onClick={() => setMobileOpen(false)}>
              GET A QUOTE
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero__backdrop" aria-hidden="true" />
          <div className="container hero__layout">
            <div className="hero__panel">
              <span className="badge hero__badge">India&apos;s Trusted 3PL Partner</span>
              <h1>Logistics Solutions Engineered for Excellence</h1>
              <p className="hero__sub">
                Transvigo delivers integrated warehousing, transportation, and value-added services with the
                reliability global enterprises expect and the agility modern brands require.
              </p>
              <div className="hero__actions">
                <a className="btn-primary" href="#solutions">
                  OUR SERVICES →
                </a>
                <a className="btn-outline-light" href="#about">
                  ABOUT US
                </a>
              </div>
              <div className="tagline-row hero__tagline">
                <span className="tagline-row__line" aria-hidden="true" />
                <span className="tagline-row__text">Moving Business Forward</span>
              </div>
            </div>
          </div>
        </section>

        <div className="stats">
          <div className="container stats__row">
            {statRows.map((row, i, arr) => {
              const StatIcon = row.Icon;
              return (
                <Fragment key={row.label}>
                  <div className="stat-item">
                    <span className="stat-item__icon" aria-hidden>
                      <StatIcon size={22} strokeWidth={2} />
                    </span>
                    <span className="stat-item__num">{row.num}</span>
                    <span className="stat-item__label">{row.label}</span>
                  </div>
                  {i < arr.length - 1 && <span className="stat-divider" aria-hidden="true" />}
                </Fragment>
              );
            })}
          </div>
        </div>

        <section id="solutions" className="solutions">
          <div className="container">
            <p className="section-label">What We Deliver</p>
            <h2>Solutions Built Around Your Supply Chain</h2>
            <div className="card-grid-4">
              {solutions.map((c) => {
                const SIcon = c.Icon;
                return (
                  <article key={c.title} className="solution-card">
                    <div className="solution-card__iconWrap" aria-hidden>
                      <SIcon size={26} strokeWidth={2} />
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about__grid">
            <div className="about-visual">
              <div className="about-visual__iconSlot" aria-hidden="true">
                <Warehouse size={40} strokeWidth={2} />
              </div>
              <h3>20+ Years of Excellence</h3>
              <p className="about-visual__text">
                From single-site programs to pan-India networks, we scale with purpose—keeping inventory accurate,
                costs visible, and service levels protected.
              </p>
              <div className="float-stat">
                200+
                <span>Happy Clients</span>
              </div>
            </div>
            <div>
              <p className="section-label">Who We Are</p>
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  marginBottom: '1.25rem',
                }}
              >
                Transvigo — Your Growth Partner
              </h2>
              <p style={{ marginBottom: '1rem', color: 'var(--muted-dark)' }}>
                Transvigo is a full-spectrum third-party logistics partner trusted by leading brands across FMCG,
                healthcare, durables, and retail. We combine disciplined execution with digital tools so your teams
                spend less time chasing updates and more time serving customers.
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--muted-dark)' }}>
                With 10M+ square feet under management and a relentless focus on safety, accuracy, and sustainability,
                we help you expand distribution, enter new regions, and respond to demand with confidence.
              </p>
              <div className="about-stats-mini">
                <div className="mini-stat">
                  <strong>10M+ Sq ft</strong>
                  <span>Warehouse footprint</span>
                </div>
                <div className="mini-stat">
                  <strong>140+ Sites</strong>
                  <span>Operational locations</span>
                </div>
                <div className="mini-stat">
                  <strong>200+ Clients</strong>
                  <span>Long-term partnerships</span>
                </div>
                <div className="mini-stat">
                  <strong>28 States</strong>
                  <span>Pan-India presence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="industries">
          <div className="container">
            <p className="section-label" style={{ color: 'var(--teal)' }}>
              Sectors We Serve
            </p>
            <h2>Industries</h2>
            <div className="industry-grid">
              {industries.map(({ label, Icon: I }) => (
                <div key={label} className="industry-card">
                  <I className="industry-card__icon" size={22} strokeWidth={2} aria-hidden />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={whySectionRef} className="why" id="why-transvigo" aria-labelledby="why-heading">
          <div className="container why__shell">
            <header className="why-intro">
              <p className="section-label">Why Leaders Choose Us</p>
              <h2 className="why__heading" id="why-heading">
                Why Transvigo
              </h2>
              <p className="why-intro__lead">
                Six pillars define how we run your network—from coverage and digitization to governance and
                sustainability. Explore each pillar below.
              </p>
            </header>

            <article className="why-detail" aria-live="polite">
              <div className="why-detail__topStripe" aria-hidden="true" />
              <div className="why-detail__grid">
                <div className="why-detail__visual">
                  <div className="why-detail__iconBubble" aria-hidden="true">
                    <WhyDetailIcon size={52} strokeWidth={2} />
                  </div>
                  <p className="why-detail__index">
                    <span>{String(selectedWhy + 1).padStart(2, '0')}</span>
                    <span className="why-detail__indexSep">/</span>
                    <span>{String(whyItems.length).padStart(2, '0')}</span>
                  </p>
                </div>
                <div className="why-detail__copy">
                  <h3 className="why-detail__title">{whyItems[selectedWhy].title}</h3>
                  <p className="why-detail__tagline">{whyItems[selectedWhy].short}</p>
                  <p className="why-detail__para">{whyItems[selectedWhy].body}</p>
                  <div
                    className="progress why-detail__progress"
                    role="progressbar"
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress__bar" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>
            </article>

            <div className="why-pickerLabel">Select a pillar to read more</div>
            <div className="why-picker" role="tablist" aria-label="Why Transvigo pillars">
              {whyItems.map((item, idx) => {
                const active = selectedWhy === idx;
                const ChipIcon = item.Icon;
                return (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={`why-chip ${active ? 'why-chip--active' : ''}`}
                    onClick={() => handleWhyPillarSelect(idx)}
                  >
                    <ChipIcon className="why-chip__icon" size={24} strokeWidth={2} aria-hidden />
                    <span className="why-chip__name">{item.title}</span>
                    <span className="why-chip__blurp">{item.short}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container testimonial-wrap">
            <p className="section-label">Client Voices</p>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                marginBottom: '2rem',
                color: 'var(--navy)',
              }}
            >
              Testimonials
            </h2>
            <article className="testimonial-card">
              <div className="quote-mark" aria-hidden="true">
                “
              </div>
              <p className="testimonial-text">{testimonials[activeTestimonial].quote}</p>
              <div className="avatar">{testimonials[activeTestimonial].initial}</div>
              <p className="person-name">{testimonials[activeTestimonial].name}</p>
              <p className="person-role">
                {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
              </p>
            </article>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={`t-${i}`}
                  type="button"
                  className={`dot ${i === activeTestimonial ? 'dot--active' : ''}`}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="careers" className="careers-strip">
          <div className="container careers-strip__inner">
            <div>
              <h3 className="careers-strip__title">
                <UsersRound className="careers-strip__titleIcon" size={28} strokeWidth={2} aria-hidden />
                Careers at Transvigo
              </h3>
              <p>
                Grow with India&apos;s evolving logistics landscape. Explore roles across operations, engineering,
                commercial teams, and shared services—with training paths that deepen your expertise.
              </p>
            </div>
            <a className="btn-primary" href="#contact">
              TALK TO HR →
            </a>
          </div>
        </section>

        <section className="marquee-section" aria-label="Trusted by leading brands">
          <div className="marquee">
            {[0, 1].map((group) => (
              <div key={group} className="marquee__group">
                {clients.map((c) => (
                  <span key={`${group}-${c}`} className="marquee-badge">
                    {c}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact__grid">
            <div>
              <p className="section-label" style={{ color: 'var(--teal)' }}>
                Get In Touch
              </p>
              <h2>Contact Transvigo</h2>
              <p className="contact__sub">
                Speak with our team about warehousing, transportation, or a tailored program for your network.
              </p>
              <div className="office-grid">
                <div className="office-card">
                  <h4 className="office-card__head">
                    <MapPinned size={18} strokeWidth={2} aria-hidden />
                    Corporate — Thane
                  </h4>
                  <a href="tel:+912225550001" className="office-card__phone">
                    <Phone size={18} strokeWidth={2} aria-hidden /> +91 22 2555 0001
                  </a>
                </div>
                <div className="office-card">
                  <h4 className="office-card__head">
                    <MapPinned size={18} strokeWidth={2} aria-hidden />
                    North — Gurugram
                  </h4>
                  <a href="tel:+911244551100" className="office-card__phone">
                    <Phone size={18} strokeWidth={2} aria-hidden /> +91 124 455 1100
                  </a>
                </div>
                <div className="office-card">
                  <h4 className="office-card__head">
                    <MapPinned size={18} strokeWidth={2} aria-hidden />
                    East — Kolkata
                  </h4>
                  <a href="tel:+913340020033" className="office-card__phone">
                    <Phone size={18} strokeWidth={2} aria-hidden /> +91 33 4002 0033
                  </a>
                </div>
                <div className="office-card">
                  <h4 className="office-card__head">
                    <MapPinned size={18} strokeWidth={2} aria-hidden />
                    South — Bengaluru
                  </h4>
                  <a href="tel:+918067550044" className="office-card__phone">
                    <Phone size={18} strokeWidth={2} aria-hidden /> +91 80 6755 0044
                  </a>
                </div>
              </div>
            </div>
            <div className="form-card">
              <h3 className="form-card__heading">
                <Send size={26} strokeWidth={2} aria-hidden /> Request a Callback
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you. Our team will contact you shortly.');
                }}
              >
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" />

                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" autoComplete="organization" />

                <label htmlFor="mobile">Mobile</label>
                <input id="mobile" name="mobile" type="tel" autoComplete="tel" />

                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" />

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  SUBMIT REQUEST →
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Logo variant="footer" />
            <p>
              Integrated 3PL for enterprises that demand precision, transparency, and scale across India—with a
              partner ethos rooted in Moving Business Forward.
            </p>
            <div className="socials">
              {socialLinks.map(({ href, label, Icon: SocIcon }) => (
                <a key={label} className="social" href={href} aria-label={label}>
                  <SocIcon size={17} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              {solutions.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#solutions">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Industries</h4>
            <ul>
              {industries.map(({ label }) => (
                <li key={label}>
                  <a href="#industries">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#home">ESG</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bar container">© 2026 Transvigo – Moving Business Forward. All rights reserved.</div>
      </footer>
    </>
  );
}
