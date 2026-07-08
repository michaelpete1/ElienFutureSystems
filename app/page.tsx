"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
// -- Icons ------------------------------------------------------------
// -- Data -------------------------------------------------------------
function IconCloud() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconCpu() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}
function IconMobile() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function IconX() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// -- Data -------------------------------------------------------------
const services = [
  {
    icon: <IconCloud />,
    title: "GPS Trackers",
    desc: "Real-time location tracking for vehicles, pets, and valuables with weather-resistant design and extended battery life.",
  },
  {
    icon: <IconShield />,
    title: "Health & Wellness",
    desc: "Comprehensive biometric monitoring including blood oxygen, ECG, stress levels, and personalized health insights powered by AI.",
  },
  {
    icon: <IconCpu />,
    title: "Smart Gadgets",
    desc: "IoT-enabled devices that seamlessly integrate with your home ecosystem for enhanced comfort, security, and convenience.",
  },
  {
    icon: <IconMobile />,
    title: "Mobile App Ecosystem",
    desc: "Intuitive companion apps for iOS and Android that sync seamlessly with your devices and provide real-time data visualization.",
  },
  {
    icon: <IconChart />,
    title: "Analytics Dashboard",
    desc: "Personal data hub that tracks trends, sets goals, and provides actionable insights into your health and lifestyle patterns.",
  },
];

const stats = [
  { value: "500K+", label: "Active Users" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "8+", label: "Years Leading" },
  { value: "50+", label: "Countries" },
];

const navLinks = ["About", "Services", "Contact"];

// -- Components -------------------------------------------------------

// â”€â”€ Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(10,15,30,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1E293B" : "none",
        transition: "all 0.3s ease",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <Image
            src="/efs logo.jpg"
            alt="Elien Future Systems logo"
            width={40}
            height={40}
            style={{
              borderRadius: 8,
              objectFit: "cover",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              Elien Future Systems
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 40 }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "#94A3B8",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "#2563EB",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1D4ED8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2563EB")}
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "none",
          }}
          className="mobile-menu-btn"
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#0F172A",
            borderTop: "1px solid #1E293B",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                color: "#CBD5E1",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "#2563EB",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Get Started
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 1.5rem 80px",
      }}
      className="grid-bg"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top center, rgba(37,99,235,0.12) 0%, transparent 40%), linear-gradient(180deg, rgba(5,8,16,0.15) 0%, rgba(5,8,16,0.65) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "min(1200px, 100%)",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 36,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "left", maxWidth: 640 }}>
          <div
            className="animate-fade-in"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(37,99,235,0.1)",
              border: "1px solid rgba(37,99,235,0.3)",
              borderRadius: 100,
              padding: "8px 18px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#60A5FA",
                display: "inline-block",
                animation: "pulse-glow 2s infinite",
              }}
            />
            <span style={{ color: "#93C5FD", fontSize: 14, fontWeight: 500 }}>
              Smart Trackers & Connected Gadgets
            </span>
          </div>

          <h1
            className="animate-slide-up gradient-text"
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 5.6rem)",
              fontWeight: 800,
              lineHeight: 1.03,
              letterSpacing: "-0.04em",
              marginBottom: 24,
            }}
          >
            Track Your Life
            <br />
            Live Better
          </h1>

          <p
            className="animate-slide-up delay-200"
            style={{
              color: "#94A3B8",
              fontSize: "clamp(1rem, 2.3vw, 1.18rem)",
              lineHeight: 1.8,
              maxWidth: 580,
              margin: "0 0 36px",
              fontWeight: 400,
            }}
          >
            Smart trackers, connected gadgets, and wearable technology designed
            to help you stay informed, organized, and connected.
          </p>

          <div
            className="animate-slide-up delay-300"
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#2563EB",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: "0 8px 30px rgba(37,99,235,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1D4ED8";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Shop Now <IconArrow />
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(15,23,42,0.65)",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid #1E293B",
                transition: "all 0.2s",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2563EB";
                e.currentTarget.style.color = "#BFDBFE";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1E293B";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Explore Products
            </a>
          </div>

          <div
            className="animate-fade-in delay-500"
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "flex-start",
              flexWrap: "wrap",
              marginTop: 58,
            }}
          >
            {[
              "GPS Tracking",
              "Heart Rate",
              "Sleep Monitor",
              "Water Resistant",
              "1-Year Battery",
              "AI Insights",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(15,23,42,0.8)",
                  border: "1px solid #1E293B",
                  color: "#64748B",
                  padding: "6px 14px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            minHeight: 620,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="hero-visual"
            data-gallery-card="hero-visual"
            style={{
              position: "relative",
              width: "min(100%, 560px)",
              minHeight: 620,
              borderRadius: 30,
              overflow: "hidden",
              border: "1px solid rgba(30,41,59,1)",
              background: "#0F172A",
              boxShadow: "0 30px 80px rgba(0,0,0,0.38)",
              transform: "translateY(14px)",
            }}
          >
            <Image
              src="/ad4.png"
              alt="ad4"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                transform: "scale(1.01)",
                transition: "transform 0.4s ease",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(2,6,23,0.00) 0%, rgba(2,6,23,0.12) 35%, rgba(2,6,23,0.74) 100%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 22,
                right: 22,
                top: 22,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 16,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(15,23,42,0.74)",
                  border: "1px solid rgba(37,99,235,0.24)",
                  borderRadius: 999,
                  padding: "7px 14px 7px 10px",
                  color: "#BFDBFE",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <Image
                  src="/icon.jpg"
                  alt="Elien Future Systems logo"
                  width={18}
                  height={18}
                  style={{
                    borderRadius: 999,
                    objectFit: "cover",
                    display: "block",
                    flexShrink: 0,
                  }}
                />
                <span>Featured Product</span>
              </span>

              <div
                style={{
                  background: "rgba(15,23,42,0.74)",
                  border: "1px solid rgba(148,163,184,0.18)",
                  borderRadius: 16,
                  padding: "10px 12px",
                  color: "#CBD5E1",
                  fontSize: 12,
                  lineHeight: 1.5,
                  maxWidth: 165,
                  backdropFilter: "blur(12px)",
                }}
              >
                Premium device, clean crop, and a more natural visual rhythm.
              </div>
            </div>

            <div
              className="hero-mini"
              style={{
                position: "absolute",
                left: 22,
                bottom: 22,
                width: "clamp(140px, 15vw, 220px)",
                minHeight: 240,
                borderRadius: 22,
                overflow: "hidden",
                border: "1px solid rgba(37,99,235,0.28)",
                background: "#0F172A",
                boxShadow: "0 20px 55px rgba(0,0,0,0.32)",
              }}
            >
              <Image
                src="/tr.jpg"
                alt="tr"
                fill
                sizes="(max-width: 900px) 40vw, 16vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  transform: "scale(1.02)",
                  transition: "transform 0.4s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(2,6,23,0.00) 0%, rgba(2,6,23,0.18) 40%, rgba(2,6,23,0.76) 100%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 12,
                  right: 12,
                  bottom: 12,
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Track Better
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (hover: hover) {
          .hero-visual:hover img,
          .hero-mini:hover img {
            transform: scale(1.06);
          }
        }

        @media (max-width: 900px) {
          section.grid-bg > div {
            grid-template-columns: 1fr !important;
          }
          .hero-visual {
            min-height: 480px !important;
            transform: none !important;
          }
          .hero-mini {
            left: 18px !important;
            bottom: 18px !important;
            width: min(42vw, 200px) !important;
            min-height: 180px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-visual {
            min-height: 420px !important;
          }
          .hero-mini {
            width: min(50vw, 180px) !important;
            min-height: 160px !important;
          }
        }
      `}</style>
    </section>
  );
}

function Stats() {
  return (
    <section
      style={{
        background: "#0F172A",
        borderTop: "1px solid #1E293B",
        borderBottom: "1px solid #1E293B",
        padding: "56px 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 40,
          textAlign: "center",
        }}
      >
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #fff 0%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {value}
            </div>
            <div
              style={{
                color: "#64748B",
                fontSize: 15,
                fontWeight: 500,
                marginTop: 6,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      style={{ padding: "100px 1.5rem", background: "var(--navy)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span
            style={{
              color: "#3B82F6",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Our Products
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginTop: 12,
              marginBottom: 16,
            }}
          >
            Advanced Wearables & Gadgets
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: 17,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From location monitoring to connected device control, advanced
            technology keeps you informed and connected.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="gradient-border"
              style={{
                borderRadius: 16,
                padding: "32px 28px",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "rgba(37,99,235,0.1)",
                  border: "1px solid rgba(37,99,235,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#60A5FA",
                  marginBottom: 20,
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p style={{ color: "#64748B", fontSize: 15, lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      style={{ padding: "100px 1.5rem", background: "#050810" }}
      className="grid-bg"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <span
            style={{
              color: "#3B82F6",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            About Elien
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginTop: 12,
              marginBottom: 20,
              lineHeight: 1.15,
            }}
          >
            Empowering Your Connected Lifestyle
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            Elien Future Systems is a registered company focused on wearable
            technology and smart gadgets. We build products that bring advanced
            tracking and health monitoring closer to everyday use, combining
            useful hardware with a clean and dependable user experience.
          </p>
          <p
            style={{
              color: "#64748B",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Our team combines expertise in hardware engineering, mobile
            development, and data science to create devices that help people
            stay consistent, improve their routines, and make better day-to-day
            decisions. As a registered company, we are committed to building
            trustworthy products and serving our customers with professionalism.
          </p>
        </div>

        {/* Right â€” visual card */}
        <div style={{ position: "relative" }}>
          <div
            className="animate-float"
            style={{
              background: "#0F172A",
              border: "1px solid #1E293B",
              borderRadius: 20,
              padding: "36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
              }}
            />
            <div
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: 13,
                color: "#3B82F6",
                fontWeight: 600,
                marginBottom: 20,
                letterSpacing: "0.05em",
              }}
            >
              {/* SYSTEM STATUS */}
            </div>
            {[
              { label: "Battery Life", val: "1 Year", color: "#22C55E" },
              { label: "GPS Accuracy", val: "±5M", color: "#60A5FA" },
              { label: "Water Rating", val: "5ATM", color: "#A78BFA" },
              { label: "Device Rating", val: "4.8★", color: "#22C55E" },
            ].map(({ label, val, color }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid #1E293B",
                }}
              >
                <span style={{ color: "#64748B", fontSize: 14 }}>{label}</span>
                <span
                  style={{
                    color,
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                    fontSize: 15,
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed.");
      }

      setStatus("success");
      setFeedback("Thanks! Your inquiry has been received and saved securely.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.",
      );
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="contact-form"
        style={{
          display: "grid",
          gap: 14,
          textAlign: "left",
          marginTop: 24,
          marginBottom: 28,
          width: "100%",
          maxWidth: 640,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          }}
        >
          <label
            style={{ display: "grid", gap: 8, color: "#E2E8F0", fontSize: 14 }}
          >
            <span>Name</span>
            <input
              className="contact-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                border: "1px solid #1E293B",
                background: "rgba(15,23,42,0.8)",
                color: "#fff",
                borderRadius: 10,
                padding: "12px 14px",
                width: "100%",
                boxSizing: "border-box",
              }}
              placeholder="Your name"
            />
          </label>
          <label
            style={{ display: "grid", gap: 8, color: "#E2E8F0", fontSize: 14 }}
          >
            <span>Email</span>
            <input
              className="contact-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                border: "1px solid #1E293B",
                background: "rgba(15,23,42,0.8)",
                color: "#fff",
                borderRadius: 10,
                padding: "12px 14px",
                width: "100%",
                boxSizing: "border-box",
              }}
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label
          style={{ display: "grid", gap: 8, color: "#E2E8F0", fontSize: 14 }}
        >
          <span>Phone (optional)</span>
          <input
            className="contact-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              border: "1px solid #1E293B",
              background: "rgba(15,23,42,0.8)",
              color: "#fff",
              borderRadius: 10,
              padding: "12px 14px",
              width: "100%",
              boxSizing: "border-box",
            }}
            placeholder="Your phone number"
          />
        </label>

        <label
          style={{ display: "grid", gap: 8, color: "#E2E8F0", fontSize: 14 }}
        >
          <span>What are you looking for?</span>
          <textarea
            className="contact-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            style={{
              border: "1px solid #1E293B",
              background: "rgba(15,23,42,0.8)",
              color: "#fff",
              borderRadius: 10,
              padding: "12px 14px",
              resize: "vertical",
              width: "100%",
              boxSizing: "border-box",
            }}
            placeholder="Tell us about your product interest or inquiry..."
          />
        </label>

        <button
          className="contact-button"
          type="submit"
          disabled={status === "loading"}
          style={{
            background: status === "loading" ? "#1D4ED8" : "#2563EB",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "14px 20px",
            fontSize: 15,
            fontWeight: 600,
            cursor: status === "loading" ? "wait" : "pointer",
            transition: "all 0.2s",
            width: "100%",
          }}
        >
          {status === "loading" ? "Submitting..." : "Send Inquiry"}
        </button>

        {feedback ? (
          <p
            style={{
              margin: 0,
              color: status === "success" ? "#86EFAC" : "#FCA5A5",
              fontSize: 14,
            }}
          >
            {feedback}
          </p>
        ) : null}
      </form>

      <style jsx>{`
        @media (max-width: 640px) {
          .contact-form {
            gap: 12px;
            margin-top: 20px;
            margin-bottom: 24px;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-button {
            padding: 13px 16px;
          }
        }
      `}</style>
    </>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      style={{ padding: "100px 1.5rem", background: "var(--navy)" }}
    >
      <div
        className="contact-card"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          background: "linear-gradient(135deg, #0F172A 0%, #0A0F1E 100%)",
          border: "1px solid #1E293B",
          borderRadius: 24,
          padding: "72px 48px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 500,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <span
          style={{
            color: "#3B82F6",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Order Form
        </span>
        <h2
          style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginTop: 12,
            marginBottom: 16,
            lineHeight: 1.1,
          }}
        >
          Fill in the form in the link below
        </h2>
        <p
          style={{
            color: "#64748B",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 500,
            margin: "0 auto 40px",
          }}
        >
          Tell us what you need and we’ll follow up with availability, delivery
          details, and next steps. It takes less than a minute.
        </p>

        <ContactForm />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <a
            className="contact-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfvStIaOIt22s2MW0TyXsTsb2RyEEPeZmeSSIyo9XzFnbvqcw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2563EB",
              color: "#fff",
              border: "none",
              padding: "14px 28px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              maxWidth: 320,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#1D4ED8";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#2563EB";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            CLICK HERE TO COMPLETE ORDER
          </a>
        </div>

        <p style={{ color: "#334155", fontSize: 13 }}>
          Or call us at{" "}
          <span style={{ color: "#3B82F6" }}>+234 707 554 2200</span>
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .contact-card {
            padding: 40px 20px !important;
            borderradius: 20px;
          }
          .contact-link {
            max-width: 100% !important;
            padding: 13px 18px;
          }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#050810",
        borderTop: "1px solid #0F172A",
        padding: "48px 1.5rem 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 7,
                  background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#fff",
                }}
              >
                E
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                Elien Future Systems
              </span>
            </div>
            <p style={{ color: "#334155", fontSize: 14, lineHeight: 1.7 }}>
              Smart devices for a more connected lifestyle.
            </p>
          </div>

          {/* Social / Contact links */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a
              href="https://www.facebook.com/profile.php?id=1060046387195184&hr=1&wtsid=rdr_0Ye4pi49eithigfMf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#60A5FA",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/elienfuturesystems"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#60A5FA",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Instagram
            </a>
            <a
              href="https://wa.me/2347075542200"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#60A5FA",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              WhatsApp
            </a>
            <a
              href="tel:+2347075542200"
              style={{
                color: "#60A5FA",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              +234 707 554 2200
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #0F172A",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ color: "#1E293B", fontSize: 13 }}>
            (c) 2025 Elien Future Systems. All rights reserved.
          </span>
          <span
            style={{
              color: "#1E293B",
              fontSize: 13,
              display: "inline-flex",
              alignItems: "center",
              gap: 0,
            }}
          >
            <Link
              href="/privacy-policy"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" style={{ margin: "0 10px" }}>
              |
            </span>
            <Link
              href="/terms-of-service"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <CTA />

        <section
          style={{ padding: "0 1.5rem 80px", background: "#050810" }}
          aria-label="Gallery"
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              paddingTop: 56,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(37,99,235,0.1)",
                  border: "1px solid rgba(37,99,235,0.25)",
                  padding: "10px 18px",
                  borderRadius: 999,
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#60A5FA",
                    boxShadow: "0 0 20px rgba(96,165,250,0.45)",
                  }}
                />
                <span
                  style={{ color: "#93C5FD", fontWeight: 600, fontSize: 14 }}
                >
                  Product Highlights
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  marginBottom: 14,
                }}
              >
                Designed to Impress
              </h2>
              <p
                style={{
                  color: "#64748B",
                  fontSize: 16,
                  lineHeight: 1.7,
                  maxWidth: 720,
                  margin: "0 auto",
                }}
              >
                Premium visuals that spotlight craftsmanship, durability, and
                the everyday value customers instantly recognize.
              </p>
            </div>

            <div
              className="gallery-layout"
              style={{
                display: "grid",
                gridTemplateColumns: "1.18fr 0.82fr",
                gap: 20,
                alignItems: "stretch",
              }}
            >
              <div
                className="gallery-hero"
                data-gallery-card="hero"
                style={{
                  position: "relative",
                  minHeight: 700,
                  borderRadius: 28,
                  overflow: "hidden",
                  border: "1px solid rgba(30,41,59,1)",
                  background: "#0F172A",
                  boxShadow: "0 24px 70px rgba(0,0,0,0.28)",
                }}
              >
                <Image
                  src="/tr.jpg"
                  alt="tr"
                  fill
                  sizes="(max-width: 900px) 100vw, 58vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    transform: "scale(1.01)",
                    transition: "transform 0.35s ease",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(2,6,23,0.04) 0%, rgba(2,6,23,0.80) 100%)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 28,
                  }}
                >
                  <div
                    style={{
                      width: "fit-content",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(15,23,42,0.68)",
                      border: "1px solid rgba(37,99,235,0.24)",
                      borderRadius: 999,
                      padding: "7px 12px",
                      color: "#93C5FD",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Product Spotlight
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                      maxWidth: 560,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', system-ui, sans-serif",
                        color: "#fff",
                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        margin: 0,
                      }}
                    >
                      Wouldnt you want to protect your property
                    </h3>
                    <p
                      style={{
                        color: "#CBD5E1",
                        fontSize: 15,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      get yours today.
                    </p>
                  </div>

                  <div
                    className="hero-inset"
                    data-gallery-card="inset"
                    style={{
                      position: "absolute",
                      right: 22,
                      bottom: 22,
                      width: "clamp(150px, 16vw, 230px)",
                      minHeight: 300,
                      borderRadius: 22,
                      overflow: "hidden",
                      border: "1px solid rgba(37,99,235,0.28)",
                      background: "#0F172A",
                      boxShadow: "0 20px 55px rgba(0,0,0,0.35)",
                    }}
                  >
                    <Image
                      src="/ad4.png"
                      alt="ad4"
                      fill
                      sizes="(max-width: 900px) 40vw, 18vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                        transform: "scale(1.01)",
                        transition: "transform 0.35s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(2,6,23,0.00) 0%, rgba(2,6,23,0.18) 40%, rgba(2,6,23,0.78) 100%)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 14,
                        right: 14,
                        bottom: 14,
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          width: "fit-content",
                          gap: 8,
                          background: "rgba(15,23,42,0.78)",
                          border: "1px solid rgba(37,99,235,0.24)",
                          borderRadius: 999,
                          padding: "6px 10px",
                          color: "#BFDBFE",
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 10,
                        }}
                      >
                        Best Seller
                      </div>
                      <p
                        style={{
                          color: "#F8FAFC",
                          fontSize: 13,
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        Millions of Nigerians are catching on.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="gallery-stack"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gridAutoRows: "minmax(220px, auto)",
                  gap: 20,
                }}
              >
                {[
                  {
                    src: "/ad1.png",
                    alt: "ad1",
                    label: "Everyday Tracking",
                    caption: "Very affordable ",
                    style: { minHeight: 265 },
                    objectPosition: "center top",
                  },
                  {
                    src: "/ad2.png",
                    alt: "ad2",
                    label: "Premium trackers",
                    caption: "More than enough distance covered.",
                    style: { minHeight: 265 },
                    objectPosition: "center",
                  },
                  {
                    src: "/AD3.png",
                    alt: "AD3",
                    label: "Retail Ready",
                    caption: "Get Free delivery today.",
                    style: { minHeight: 255, gridColumn: "1 / -1" },
                    objectPosition: "center",
                  },
                ].map(
                  (
                    { src, alt, label, caption, style, objectPosition },
                    idx,
                  ) => (
                    <div
                      key={src}
                      data-gallery-card={idx}
                      style={{
                        position: "relative",
                        borderRadius: 22,
                        overflow: "hidden",
                        border: "1px solid rgba(30,41,59,1)",
                        background: "#0F172A",
                        boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
                        transition:
                          "transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease",
                        ...style,
                      }}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 40vw"
                        style={{
                          objectFit: "cover",
                          objectPosition,
                          display: "block",
                          transform: "scale(1.01)",
                          transition: "transform 0.4s ease",
                        }}
                      />

                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(2,6,23,0.00) 0%, rgba(2,6,23,0.10) 42%, rgba(2,6,23,0.78) 100%)",
                          pointerEvents: "none",
                        }}
                      />

                      <div
                        style={{
                          position: "absolute",
                          left: 18,
                          right: 18,
                          bottom: 18,
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            width: "fit-content",
                            gap: 8,
                            background: "rgba(15,23,42,0.72)",
                            border: "1px solid rgba(37,99,235,0.24)",
                            borderRadius: 999,
                            padding: "6px 12px",
                            color: "#93C5FD",
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {label}
                        </div>
                        <p
                          style={{
                            color: "#E2E8F0",
                            fontSize: 14,
                            lineHeight: 1.55,
                            margin: 0,
                            maxWidth: 360,
                          }}
                        >
                          {caption}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>

              <style>{`
                @media (hover: hover) {
                  [data-gallery-card]:hover {
                    transform: translateY(-8px);
                    border-color: rgba(37,99,235,0.58);
                    box-shadow: 0 24px 70px rgba(0,0,0,0.32);
                  }
                  [data-gallery-card]:hover img {
                    transform: scale(1.06);
                  }
                  .hero-inset:hover img {
                    transform: scale(1.06);
                  }
                }

                @media (max-width: 900px) {
                  .gallery-layout {
                    grid-template-columns: 1fr !important;
                  }
                  .gallery-stack {
                    grid-template-columns: 1fr !important;
                  }
                  .gallery-hero {
                    min-height: 500px !important;
                  }
                  .hero-inset {
                    position: relative !important;
                    right: auto !important;
                    bottom: auto !important;
                    width: min(100%, 240px) !important;
                    margin: 18px 0 0 auto;
                  }
                }

                @media (max-width: 640px) {
                  .gallery-hero {
                    min-height: 420px !important;
                  }
                  .hero-inset {
                    width: min(100%, 190px) !important;
                    min-height: 240px !important;
                  }
                }
              `}</style>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
