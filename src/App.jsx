import { useState, useEffect, useRef } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
`;

const projects = [
  {
    id: 1,
    name: "Angkasa Code Hub",
    tag: "Agency",
    desc: "Web development, SEO, and content writing agency for Indonesian businesses.",
    link: "#",
    status: "Active",
    color: "#E8C547",
    icon: "⚡",
  },
  {
    id: 2,
    name: "netbase",
    tag: "Education",
    desc: "A programming education platform for Indonesian students. Ebooks, materials, and learning tools.",
    link: "#",
    status: "Active",
    color: "#5BE0A8",
    icon: "📚",
  },
  {
    id: 3,
    name: "circlehub.id",
    tag: "Community",
    desc: "A collaborative community for young builders, creators, and entrepreneurs.",
    link: "#",
    status: "Active",
    color: "#A78BFA",
    icon: "🌀",
  },
  {
    id: 4,
    name: "Gudang IT Jakarta",
    tag: "E-Commerce",
    desc: "IT equipment store on Shopee. Networking equipment, hardware, and technical accessories.",
    link: "#",
    status: "Active",
    color: "#F97316",
    icon: "🖥️",
  },
  {
    id: 5,
    name: "Thrift Studio",
    tag: "Fashion",
    desc: "Selected thrift clothing from Pasar Senen. Curated vintage and streetwear.",
    link: "#",
    status: "Coming Soon",
    color: "#F472B6",
    icon: "👕",
  },
];

const services = [
  { name: "Web Development", desc: "Landing page, company profile, web app", price: "From Rp 750rb" },
  { name: "IT Support & Infrastructure", desc: "Network setup, helpdesk, server management", price: "From Rp 500rb" },
  { name: "SEO Optimization", desc: "Audit, on-page, content strategy", price: "From Rp 1jt" },
  { name: "AI Chatbot Integration", desc: "WhatsApp bot, web chatbot for business", price: "From Rp 1.5jt" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{FONTS}</style>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --bg: #0C0C0E;
          --surface: #141416;
          --border: #252528;
          --text: #F0EFE9;
          --muted: #6E6D6A;
          --accent: #E8C547;
          --accent2: #5BE0A8;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); }
        .syne { font-family: 'Syne', sans-serif; }
        .serif { font-family: 'Instrument Serif', serif; }
        .sans { font-family: 'DM Sans', sans-serif; }
        
        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 150px;
        }

        .project-card {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
        }
        .project-card:hover {
          transform: translateY(-4px);
        }
        
        .glow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #5BE0A8;
          box-shadow: 0 0 8px #5BE0A8, 0 0 20px rgba(91,224,168,0.4);
          display: inline-block;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.2s;
          cursor: pointer;
        }
        .nav-link:hover { color: var(--text); }

        .tag-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          border: 1px solid var(--border);
          color: var(--muted);
        }

        .service-card {
          transition: border-color 0.2s, background 0.2s;
        }
        .service-card:hover {
          border-color: var(--accent) !important;
          background: rgba(232,197,71,0.04) !important;
        }

        .cta-btn {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: var(--accent);
          color: #0C0C0E;
          border: none;
          padding: 14px 32px;
          border-radius: 6px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
        }
        .cta-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        .outline-btn {
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          padding: 13px 28px;
          border-radius: 6px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .outline-btn:hover { border-color: var(--text); }

        .hero-line {
          overflow: hidden;
          animation: slideUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .hero-line:nth-child(2) { animation-delay: 0.08s; }
        .hero-line:nth-child(3) { animation-delay: 0.16s; }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.6s ease both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .marquee-wrap { overflow: hidden; white-space: nowrap; }
        .marquee-inner {
          display: inline-block;
          animation: marquee 22s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 768px) {
          .hero-name { font-size: 52px !important; line-height: 1.05 !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 32px",
        height: "60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(12,12,14,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="glow-dot" />
          <span className="syne" style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "-0.01em" }}>
            Brian<span style={{ color: "var(--accent)" }}>.</span>dev
          </span>
        </div>

        <div className="desktop-nav" style={{ display: "flex", gap: "36px" }}>
          {["home", "projects", "services", "contact"].map(s => (
            <span key={s} className="nav-link" onClick={() => scrollTo(s)}>{s}</span>
          ))}
        </div>

        <button className="cta-btn" style={{ padding: "8px 20px", fontSize: "12px" }}
          onClick={() => scrollTo("contact")}>
          Hire Me
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="noise-bg" style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 40px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background decorative */}
        <div style={{
          position: "absolute", top: "15%", right: "-80px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,197,71,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "-100px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(91,224,168,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Top label */}
        <div style={{
          position: "absolute", top: "88px", left: "40px",
          display: "flex", flexDirection: "column", gap: "6px",
          animation: "fadeIn 1s ease 0.4s both",
        }}>
          <span className="section-label">Jakarta, Indonesia</span>
          <span className="section-label">Available Worldwide</span>
        </div>

        {/* Year */}
        <div style={{
          position: "absolute", top: "88px", right: "40px",
          animation: "fadeIn 1s ease 0.4s both",
        }}>
          <span className="syne" style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 600 }}>©2026</span>
        </div>

        <div style={{ maxWidth: "960px" }}>
          <div className="hero-line">
            <span className="section-label" style={{ marginBottom: "24px", display: "block" }}>
              — Network Engineer · Web Developer · IT Consultant
            </span>
          </div>
          <h1 className="hero-line syne hero-name" style={{
            fontSize: "96px",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "var(--text)",
          }}>
            Timothy
          </h1>
          <h1 className="hero-line syne hero-name" style={{
            fontSize: "96px",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}>
            <span style={{ color: "var(--accent)" }}>Brian</span>
          </h1>

          <div className="hero-line" style={{ marginTop: "36px", display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={() => scrollTo("projects")}>View Projects</button>
            <button className="outline-btn" onClick={() => scrollTo("services")}>Services</button>
          </div>
        </div>

        {/* Bottom stat bar */}
        <div style={{
          position: "absolute", bottom: "40px", right: "40px",
          display: "flex", gap: "40px",
          animation: "fadeIn 1s ease 0.6s both",
        }}>
          {[["5+", "Side Projects"], ["3+", "Years Exp"], ["20+", "Clients"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "right" }}>
              <div className="syne" style={{ fontSize: "24px", fontWeight: 800, color: "var(--accent)" }}>{n}</div>
              <div className="sans" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE DIVIDER */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "14px 0", overflow: "hidden" }}>
        <div className="marquee-wrap">
          <div className="marquee-inner">
            {Array(4).fill("WEB DEVELOPMENT · IT SUPPORT · SEO · AI CHATBOT · DIGITAL PRODUCTS · COMMUNITY · THRIFTING · EDUCATION · ").map((t, i) => (
              <span key={i} className="syne" style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.1em", marginRight: "0" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>— 01 / Ventures</span>
            <h2 className="syne" style={{ fontSize: "48px", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Side <span className="serif" style={{ fontStyle: "italic", color: "var(--accent)" }}>Projects</span>
            </h2>
          </div>
          <span className="sans" style={{ color: "var(--muted)", fontSize: "14px", maxWidth: "300px", lineHeight: 1.7 }}>
            Bisnis dan proyek yang sedang dibangun secara aktif di luar pekerjaan utama.
          </span>
        </div>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="project-card fade-in"
              onMouseEnter={() => setHoveredProject(p.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background: hoveredProject === p.id ? "var(--surface)" : "var(--surface)",
                border: `1px solid ${hoveredProject === p.id ? p.color + "55" : "var(--border)"}`,
                borderRadius: "12px",
                padding: "28px",
                animationDelay: `${i * 0.07}s`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Color accent top line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "2px",
                background: p.color,
                opacity: hoveredProject === p.id ? 1 : 0.3,
                transition: "opacity 0.3s",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <span style={{ fontSize: "28px" }}>{p.icon}</span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span className="tag-pill" style={{
                    color: p.status === "Active" ? "#5BE0A8" : "var(--muted)",
                    borderColor: p.status === "Active" ? "rgba(91,224,168,0.3)" : "var(--border)",
                  }}>
                    {p.status === "Active" && <span style={{ display: "inline-block", width: "5px", height: "5px", borderRadius: "50%", background: "#5BE0A8", marginRight: "5px", verticalAlign: "middle" }} />}
                    {p.status}
                  </span>
                </div>
              </div>

              <div className="tag-pill" style={{ marginBottom: "10px", display: "inline-block", color: p.color, borderColor: p.color + "40" }}>{p.tag}</div>

              <h3 className="syne" style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.01em" }}>{p.name}</h3>
              <p className="sans" style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>{p.desc}</p>

              <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                <span className="sans" style={{
                  fontSize: "12px", fontWeight: 500,
                  color: hoveredProject === p.id ? p.color : "var(--muted)",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}>
                  Visit →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 40px", borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>— 02 / Services</span>
            <h2 className="syne" style={{ fontSize: "48px", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Apa yang <span className="serif" style={{ fontStyle: "italic", color: "var(--accent)" }}>bisa</span><br />saya bantu
            </h2>
          </div>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          {services.map((s, i) => (
            <div key={i} className="service-card fade-in" style={{
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "32px",
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px",
              animationDelay: `${i * 0.07}s`,
              flexWrap: "wrap",
            }}>
              <div>
                <h3 className="syne" style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{s.name}</h3>
                <p className="sans" style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div className="syne" style={{ fontSize: "14px", fontWeight: 700, color: "var(--accent)" }}>{s.price}</div>
                <button className="outline-btn" style={{ marginTop: "10px", padding: "8px 16px", fontSize: "11px" }}
                  onClick={() => scrollTo("contact")}>
                  Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight bar */}
        <div style={{
          marginTop: "40px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "32px 40px",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px",
        }}>
          <div>
            <h3 className="syne" style={{ fontSize: "22px", fontWeight: 800, marginBottom: "6px" }}>
              Need a <span style={{ color: "var(--accent)" }}>custom</span> solution?
            </h3>
            <p className="sans" style={{ fontSize: "14px", color: "var(--muted)" }}>
              Discuss your needs — I can help from concept to deployment.
            </p>
          </div>
          <button className="cta-btn" onClick={() => scrollTo("contact")}>Contact Now</button>
        </div>
      </section>

      {/* DIGITAL PRODUCTS TEASER */}
      <section style={{ padding: "80px 40px", borderTop: "1px solid var(--border)" }}>
        <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>— 03 / Products</span>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <h2 className="syne" style={{ fontSize: "40px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Digital <span className="serif" style={{ fontStyle: "italic", color: "var(--accent2)" }}>Products</span>
          </h2>
          {/* <span className="sans" style={{ color: "var(--muted)", fontSize: "14px" }}>Tersedia di Tokopedia & Gumroad</span> */}
        </div>

        <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {[
            { name: "Landing Page Starter Kit", by: "Angkasa Code Hub", price: "Rp 149.000", tag: "Code" },
            { name: "IT Support Template Pack", by: "Angkasa Code Hub", price: "Rp 49.000", tag: "Template" },
            { name: "Prompt Pack untuk UMKM", by: "netbase", price: "Rp 19.000", tag: "Prompt" },
          ].map((p, i) => (
            <div key={i} style={{
              flex: "1 1 240px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "24px",
            }}>
              <span className="tag-pill" style={{ marginBottom: "12px", display: "inline-block", color: "var(--accent2)", borderColor: "rgba(91,224,168,0.3)" }}>{p.tag}</span>
              <h4 className="syne" style={{ fontSize: "15px", fontWeight: 700, marginBottom: "6px" }}>{p.name}</h4>
              <p className="sans" style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "16px" }}>by {p.by}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="syne" style={{ fontSize: "15px", fontWeight: 700, color: "var(--accent)" }}>{p.price}</span>
                <button className="outline-btn" style={{ padding: "6px 14px", fontSize: "11px" }}>Buy</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "100px 40px",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "300px",
          background: "radial-gradient(ellipse, rgba(232,197,71,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <span className="section-label" style={{ display: "block", marginBottom: "20px" }}>— 04 / Contact</span>
        <h2 className="syne" style={{ fontSize: "64px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "16px" }}>
          Let's <span className="serif" style={{ fontStyle: "italic", color: "var(--accent)" }}>build</span><br />something.
        </h2>
        <p className="sans" style={{ color: "var(--muted)", fontSize: "15px", marginBottom: "48px", lineHeight: 1.8 }}>
          Have a project, a question, or just want to chat?<br />I'm open to collaboration and freelancing.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/6288213179608" target="_blank" rel="noopener noreferrer">
          <button className="cta-btn" style={{ fontSize: "14px" }}>
            💬 WhatsApp
          </button>
          </a>
          <a href="mailto:andrieswilar@gmail.com" target="_blank">
          <button className="outline-btn">
            📧 Email
          </button>
          </a>
          <a href="https://www.upwork.com/freelancers/~01ee6f9f8f506919b5?mp_source=share" target="_blank" rel="noopener noreferrer">
          <button className="outline-btn">
            💼 Upwork
          </button>
          </a>
        </div>

        <div style={{ marginTop: "80px", paddingTop: "32px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <span className="syne" style={{ fontSize: "15px", fontWeight: 700 }}>
            Brian<span style={{ color: "var(--accent)" }}>.</span>dev
          </span>
          <span className="sans" style={{ fontSize: "12px", color: "var(--muted)" }}>
            © 2026 · Jakarta, Indonesia
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            {["LinkedIn", "GitHub", "Instagram"].map(s => (
              <span key={s} className="nav-link" style={{ cursor: "pointer" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
