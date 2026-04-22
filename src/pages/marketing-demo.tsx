import { useState, useEffect } from "react";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconArrowDown,
  IconShoppingBag,
  IconArrowRight,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

const curatedFinds = [
  {
    id: 1,
    name: "Velvet Noir Luminary",
    subtitle: "Echo Show 8 (HD)",
    price: "₹4,499",
    tag: "Home",
    description: "Ambient light. Smart whispers. Your space, quieter.",
    link: "#",
  },
  {
    id: 2,
    name: "Shadow Seraph Keys",
    subtitle: "Minimalist Mechanical Keyboard",
    price: "₹8,999",
    tag: "Workspace",
    description: "Every keystroke. Intentional. Felt.",
    link: "#",
  },
  {
    id: 3,
    name: "Obsidian Desk Oracle",
    subtitle: "Vintage Brass Desk Clock",
    price: "₹2,299",
    tag: "Décor",
    description: "Time moves differently when you stop chasing it.",
    link: "#",
  },
];

const pillars = [
  {
    label: "35%",
    title: "Minimalist Lifestyles",
    description: "Fewer things. More meaning. The quiet abundance of less.",
  },
  {
    label: "25%",
    title: "Dark Aesthetic",
    description: "Night routines. Shadow play. The beauty in the unlit.",
  },
  {
    label: "20%",
    title: "Founder Journey",
    description:
      "Building in silence. Decisions unspoken. Progress unseen.",
  },
  {
    label: "15%",
    title: "Object Stories",
    description: "Every piece has a past. Every detail, chosen.",
  },
];

const S = {
  bg: "#0a0a0a",
  bgCard: "#111111",
  bgHover: "#0d0d0d",
  cream: "#f4f4f0",
  muted: "#888888",
  dim: "#555555",
  border: "#1e1e1e",
  borderLight: "#2a2a2a",
  gold: "#d4af37",
  serif: "'Cormorant Garamond', 'Times New Roman', Georgia, serif",
  sans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
} as const;

export default function LucyRocks() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      setEmail("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: S.bg,
        color: S.cream,
        fontFamily: S.sans,
        overflowX: "hidden",
      }}
    >
      {/* ── Navbar ─────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
          borderBottom: scrolled ? `1px solid ${S.border}` : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: S.serif,
              fontSize: "1.25rem",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: S.cream,
              textDecoration: "none",
              fontWeight: 300,
            }}
          >
            Lucy.Rocks
          </a>

          {/* Desktop nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
            className="hidden-mobile"
          >
            {["Shop", "Finds", "Philosophy"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="lr-nav-link"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href="#shop"
              className="lr-nav-cta"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                padding: "0.5rem 1rem",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Acquire
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                color: S.muted,
                cursor: "pointer",
                padding: "4px",
                display: "none",
              }}
              className="show-mobile"
              aria-label="Toggle menu"
            >
              {menuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: S.bg,
              borderTop: `1px solid ${S.border}`,
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {["Shop", "Finds", "Philosophy"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: S.muted,
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1.5rem",
          borderBottom: `1px solid ${S.border}`,
          overflow: "hidden",
        }}
      >
        {/* Subtle gold radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Fine grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <p
          style={{
            fontSize: "0.6rem",
            letterSpacing: "8px",
            textTransform: "uppercase",
            color: S.dim,
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          The Totebag · 2026
        </p>

        <h1
          style={{
            fontFamily: S.serif,
            fontSize: "clamp(4.5rem, 16vw, 13rem)",
            letterSpacing: "0.08em",
            fontWeight: 300,
            lineHeight: 0.88,
            color: S.cream,
            position: "relative",
            margin: 0,
          }}
        >
          LUCY
          <br />
          <span
            style={{
              WebkitTextStroke: `1px ${S.gold}`,
              WebkitTextFillColor: "transparent",
            }}
          >
            ROCKS
          </span>
        </h1>

        {/* Vertical rule */}
        <div
          style={{
            width: "1px",
            height: "60px",
            background: `linear-gradient(to bottom, ${S.borderLight}, transparent)`,
            margin: "2.5rem auto",
            position: "relative",
          }}
        />

        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: S.muted,
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          Silent wealth. Unspoken aesthetic.
        </p>

        <a
          href="#shop"
          className="lr-hero-cta"
          style={{
            display: "inline-block",
            fontSize: "0.6rem",
            letterSpacing: "4px",
            textTransform: "uppercase",
            padding: "1rem 2.5rem",
            textDecoration: "none",
            transition: "all 0.5s ease",
            position: "relative",
          }}
        >
          Acquire the Totebag — ₹1,499
        </a>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: S.dim,
          }}
        >
          <span style={{ fontSize: "0.55rem", letterSpacing: "3px", textTransform: "uppercase" }}>
            Scroll
          </span>
          <IconArrowDown size={12} />
        </div>
      </section>

      {/* ── Philosophy ─────────────────────────────────────────── */}
      <section
        id="philosophy"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "8rem 1.5rem",
        }}
      >
        <div
          style={{
            borderLeft: `2px solid ${S.gold}`,
            paddingLeft: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.6rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: S.muted,
              marginBottom: "2.5rem",
            }}
          >
            The Philosophy
          </p>
          <div
            style={{
              fontFamily: S.serif,
              fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#c0c0bc",
            }}
          >
            <p style={{ margin: "0 0 1rem" }}>I collected wrong for years.</p>
            <p style={{ margin: "0 0 1rem" }}>Then the noise stopped.</p>
            <p style={{ margin: "0 0 1rem" }}>Now: fewer, better, longer.</p>
            <p style={{ margin: 0, color: S.gold }}>
              This is not a brand. It is a practice.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Totebag ────────────────────────────────────────── */}
      <section
        id="shop"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem 8rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            border: `1px solid ${S.border}`,
          }}
        >
          {/* Product Visual */}
          <div
            style={{
              backgroundColor: S.bgCard,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "480px",
              position: "relative",
              overflow: "hidden",
              borderRight: `1px solid ${S.border}`,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 65%)",
              }}
            />
            <div style={{ textAlign: "center", position: "relative" }}>
              <IconShoppingBag
                size={72}
                style={{ color: "#2a2a2a", marginBottom: "1rem" }}
              />
              <p
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: S.dim,
                  lineHeight: 1.8,
                }}
              >
                High-resolution image
                <br />
                coming soon
              </p>
            </div>
          </div>

          {/* Product Details */}
          <div
            style={{
              backgroundColor: "#0c0c0c",
              padding: "3.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: S.muted,
                marginBottom: "1.5rem",
              }}
            >
              Featured Object
            </p>
            <h2
              style={{
                fontFamily: S.serif,
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 300,
                letterSpacing: "0.05em",
                color: S.cream,
                margin: "0 0 2rem",
              }}
            >
              The Totebag
            </h2>
            <div
              style={{
                color: S.muted,
                fontSize: "0.875rem",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
              }}
            >
              <p style={{ margin: "0 0 0.75rem" }}>
                One bag. Carried everywhere. Noticed by no one. Remembered by all.
              </p>
              <p style={{ margin: "0 0 0.75rem" }}>
                Premium canvas. Minimal print. The LUCY.ROCKS mark in subdued gold.
              </p>
              <p style={{ margin: 0 }}>
                It does not announce itself. It simply exists, impeccably.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: S.serif,
                  fontSize: "2.25rem",
                  color: S.gold,
                  fontWeight: 300,
                }}
              >
                ₹1,499
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: S.dim,
                }}
              >
                Free delivery · India
              </span>
            </div>

            <AcquireButton />

            <p
              style={{
                fontSize: "0.6rem",
                color: S.dim,
                marginTop: "1rem",
                textAlign: "center",
                letterSpacing: "1px",
              }}
            >
              Limited quantity · Handcrafted quality
            </p>
          </div>
        </div>
      </section>

      {/* ── Curated Finds ──────────────────────────────────────── */}
      <section
        id="finds"
        style={{
          borderTop: `1px solid ${S.border}`,
          paddingTop: "6rem",
          paddingBottom: "6rem",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "4rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: S.muted,
                  marginBottom: "1rem",
                }}
              >
                Curated Objects
              </p>
              <h2
                style={{
                  fontFamily: S.serif,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  color: S.cream,
                  margin: 0,
                }}
              >
                Trending Finds
              </h2>
            </div>
            <a
              href="#"
              className="lr-view-all"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.6rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              View all <IconArrowRight size={11} />
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              border: `1px solid ${S.border}`,
            }}
          >
            {curatedFinds.map((item, i) => (
              <FindCard
                key={item.id}
                item={item}
                hasBorder={i < curatedFinds.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Content Pillars ────────────────────────────────────── */}
      <section
        style={{
          borderTop: `1px solid ${S.border}`,
          padding: "6rem 0",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: S.muted,
                marginBottom: "1rem",
              }}
            >
              The Practice
            </p>
            <h2
              style={{
                fontFamily: S.serif,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: S.cream,
                margin: 0,
              }}
            >
              What We Stand For
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              border: `1px solid ${S.border}`,
            }}
          >
            {pillars.map((pillar, i) => (
              <PillarCard
                key={pillar.title}
                pillar={pillar}
                hasBorder={i < pillars.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────────── */}
      <section
        style={{
          borderTop: `1px solid ${S.border}`,
          padding: "8rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.6rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: S.muted,
              marginBottom: "1.5rem",
            }}
          >
            Stay Close
          </p>
          <h2
            style={{
              fontFamily: S.serif,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: S.cream,
              margin: "0 0 1.5rem",
            }}
          >
            The Quiet List
          </h2>
          <p
            style={{
              color: S.muted,
              fontSize: "0.875rem",
              lineHeight: 1.9,
              marginBottom: "2.5rem",
            }}
          >
            Curated objects. No noise. Once a week — if that.
          </p>

          {joined ? (
            <p
              style={{
                fontFamily: S.serif,
                fontSize: "1.25rem",
                fontWeight: 300,
                color: S.gold,
                fontStyle: "italic",
              }}
            >
              You are on the list.
            </p>
          ) : (
            <form
              onSubmit={handleJoin}
              style={{
                display: "flex",
                maxWidth: "420px",
                margin: "0 auto",
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: "0.875rem 1rem",
                  fontSize: "0.8rem",
                  backgroundColor: S.bgCard,
                  border: `1px solid ${S.border}`,
                  borderRight: "none",
                  color: S.cream,
                  outline: "none",
                  fontFamily: S.sans,
                }}
              />
              <NewsletterButton />
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${S.border}` }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "5rem 1.5rem 3rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "3rem",
              marginBottom: "4rem",
            }}
          >
            {/* Brand */}
            <div style={{ gridColumn: "span 2" }}>
              <h3
                style={{
                  fontFamily: S.serif,
                  fontSize: "1.5rem",
                  letterSpacing: "5px",
                  fontWeight: 300,
                  color: S.cream,
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Lucy.Rocks
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: S.dim,
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                  maxWidth: "260px",
                }}
              >
                An aesthetic practice. A curated life.
                <br />
                Objects chosen with silence.
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                {[
                  { icon: IconBrandInstagram, href: "#" },
                  { icon: IconBrandTwitter, href: "#" },
                ].map(({ icon: Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="lr-social-link"
                    style={{
                      transition: "color 0.3s",
                      textDecoration: "none",
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Shop links */}
            <FooterColumn
              title="Shop"
              links={["The Totebag", "Curated Finds", "Gift an Object"]}
            />

            {/* Explore links */}
            <FooterColumn
              title="Explore"
              links={["Philosophy", "Contact", "Returns", "Privacy"]}
            />
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: `1px solid ${S.border}`,
              paddingTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <p style={{ fontSize: "0.65rem", color: "#3a3a3a", letterSpacing: "1px" }}>
              © 2026 Lucy.Rocks · All rights reserved
            </p>
            <p style={{ fontSize: "0.65rem", color: "#3a3a3a", letterSpacing: "1px", fontStyle: "italic" }}>
              Silent wealth. Unspoken aesthetic.
            </p>
          </div>
        </div>
      </footer>

      {/* Global responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        /* ── Hover / focus-visible affordances ─────────────────── */
        .lr-nav-link { color: ${S.muted}; }
        .lr-nav-link:hover, .lr-nav-link:focus-visible { color: ${S.gold}; }

        .lr-nav-cta { color: ${S.gold}; border: 1px solid ${S.borderLight}; background-color: transparent; }
        .lr-nav-cta:hover, .lr-nav-cta:focus-visible { background-color: ${S.gold}; color: ${S.bg}; border-color: ${S.gold}; }

        .lr-hero-cta { color: ${S.cream}; border: 1px solid ${S.cream}; background-color: transparent; }
        .lr-hero-cta:hover, .lr-hero-cta:focus-visible { background-color: ${S.cream}; color: ${S.bg}; }

        .lr-view-all { color: ${S.muted}; }
        .lr-view-all:hover, .lr-view-all:focus-visible { color: ${S.gold}; }

        .lr-social-link { color: ${S.dim}; }
        .lr-social-link:hover, .lr-social-link:focus-visible { color: ${S.gold}; }

        .lr-footer-link { color: ${S.dim}; }
        .lr-footer-link:hover, .lr-footer-link:focus-visible { color: ${S.muted}; }

        .lr-acquire-btn { background-color: ${S.cream}; color: ${S.bg}; }
        .lr-acquire-btn:hover, .lr-acquire-btn:focus-visible { background-color: ${S.gold}; }

        .lr-newsletter-btn { background-color: ${S.cream}; color: ${S.bg}; border: 1px solid ${S.cream}; }
        .lr-newsletter-btn:hover, .lr-newsletter-btn:focus-visible { background-color: ${S.gold}; border-color: ${S.gold}; }

        .lr-find-card { background-color: transparent; }
        .lr-find-card:hover { background-color: ${S.bgCard}; }
        .lr-find-link { color: ${S.muted}; }
        .lr-find-card:hover .lr-find-link, .lr-find-link:focus-visible { color: ${S.gold}; }

        .lr-pillar-card { background-color: transparent; }
        .lr-pillar-card:hover { background-color: ${S.bgHover}; }
      `}</style>
    </div>
  );
}

/* ── Sub-components ──────────────────────────────────────────── */

function AcquireButton() {
  return (
    <button
      className="lr-acquire-btn"
      style={{
        width: "100%",
        fontSize: "0.6rem",
        letterSpacing: "4px",
        textTransform: "uppercase",
        padding: "1rem",
        border: "none",
        cursor: "pointer",
        transition: "all 0.4s ease",
        fontFamily: S.sans,
      }}
    >
      Acquire Now
    </button>
  );
}

function NewsletterButton() {
  return (
    <button
      type="submit"
      className="lr-newsletter-btn"
      style={{
        padding: "0.875rem 1.5rem",
        fontSize: "0.6rem",
        letterSpacing: "3px",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontFamily: S.sans,
        whiteSpace: "nowrap",
      }}
    >
      Join
    </button>
  );
}

function FindCard({
  item,
  hasBorder,
}: {
  item: (typeof curatedFinds)[0];
  hasBorder: boolean;
}) {
  return (
    <div
      className="lr-find-card"
      style={{
        padding: "2.5rem",
        borderRight: hasBorder ? `1px solid ${S.border}` : "none",
        transition: "background-color 0.3s ease",
      }}
    >
      <span
        style={{
          fontSize: "0.55rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: S.dim,
          display: "block",
          marginBottom: "1.5rem",
        }}
      >
        {item.tag}
      </span>

      <div
        style={{
          width: "56px",
          height: "56px",
          backgroundColor: "#1a1a1a",
          border: `1px solid ${S.border}`,
          marginBottom: "1.5rem",
        }}
      />

      <h3
        style={{
          fontFamily: S.serif,
          fontSize: "1.375rem",
          fontWeight: 300,
          color: S.cream,
          margin: "0 0 0.25rem",
        }}
      >
        {item.name}
      </h3>
      <p
        style={{
          fontSize: "0.65rem",
          color: S.dim,
          marginBottom: "1rem",
          letterSpacing: "1px",
        }}
      >
        {item.subtitle}
      </p>
      <p
        style={{
          fontSize: "0.8rem",
          color: S.muted,
          lineHeight: 1.8,
          marginBottom: "1.5rem",
        }}
      >
        {item.description}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: S.serif,
            fontSize: "1.25rem",
            color: S.gold,
            fontWeight: 300,
          }}
        >
          {item.price}
        </span>
        <a
          href={item.link}
          className="lr-find-link"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          View ↗
        </a>
      </div>
    </div>
  );
}

function PillarCard({
  pillar,
  hasBorder,
}: {
  pillar: (typeof pillars)[0];
  hasBorder: boolean;
}) {
  return (
    <div
      className="lr-pillar-card"
      style={{
        padding: "2.5rem",
        borderRight: hasBorder ? `1px solid ${S.border}` : "none",
        transition: "background-color 0.3s ease",
      }}
    >
      <p
        style={{
          fontSize: "0.6rem",
          letterSpacing: "2px",
          color: S.gold,
          marginBottom: "1rem",
        }}
      >
        {pillar.label}
      </p>
      <h3
        style={{
          fontFamily: S.serif,
          fontSize: "1.25rem",
          fontWeight: 300,
          color: S.cream,
          marginBottom: "1rem",
        }}
      >
        {pillar.title}
      </h3>
      <p
        style={{
          fontSize: "0.8rem",
          color: "#666",
          lineHeight: 1.8,
        }}
      >
        {pillar.description}
      </p>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p
        style={{
          fontSize: "0.6rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: S.muted,
          marginBottom: "1.5rem",
        }}
      >
        {title}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {links.map((item) => (
          <li key={item} style={{ marginBottom: "0.75rem" }}>
            <a
              href="#"
              className="lr-footer-link"
              style={{
                fontSize: "0.8rem",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
