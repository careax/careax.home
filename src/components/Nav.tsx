"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const hero = document.querySelector(".hero") as HTMLElement | null;
    const sections = ["about", "curriculum", "method", "contact"];

    function syncNav() {
      const y = window.scrollY;
      const h = hero ? hero.offsetHeight - 100 : 600;
      setDark(y > h);
    }

    function syncActive() {
      const scrollY = window.scrollY + 120;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    }

    window.addEventListener("scroll", syncNav, { passive: true });
    window.addEventListener("scroll", syncActive, { passive: true });
    syncNav();
    syncActive();
    return () => {
      window.removeEventListener("scroll", syncNav);
      window.removeEventListener("scroll", syncActive);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function scrollTo(id: string) {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header className={`nav${dark ? " dark" : ""}`}>
        <div className="shell nav-inner">
          <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="홈으로">
            <span className="glyph">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#FACC15" />
                  </linearGradient>
                </defs>
                <rect x="12" y="2" width="14.14" height="14.14" transform="rotate(45 12 2)" fill="url(#ng)" />
              </svg>
            </span>
            <span>RANA<span style={{ color: "var(--fg-3)", fontWeight: 400 }}>/</span>AX</span>
            <span className="marker">v.26</span>
          </button>

          <nav className="nav-links" aria-label="메인 메뉴">
            {["about", "curriculum", "method", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {id === "about" ? "About" : id === "curriculum" ? "Curriculum" : id === "method" ? "Method" : "Contact"}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          >
            <span className="dot" aria-hidden="true" />
            <span>Booking 2026</span>
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-nav${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        {["about", "curriculum", "method", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {id === "about" ? "About" : id === "curriculum" ? "Curriculum" : id === "method" ? "Method" : "Contact"}
          </a>
        ))}
      </div>
    </>
  );
}
