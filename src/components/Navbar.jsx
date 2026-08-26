import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Chasa_Logo_Wide.jpeg";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/studio", label: "Studio" },
  { to: "/labs", label: "Labs" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  const overlayRoute =
    pathname === "/" || pathname === "/labs" || /^\/projects\/.+/.test(pathname);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const menuLinks = Array.from(menuRef.current?.querySelectorAll("a[href]") || []);
    const focusable = [menuToggleRef.current, ...menuLinks].filter(Boolean);
    menuLinks[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => menuToggleRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    let frame;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const current = window.scrollY;
        setScrolled(current > 24);
        setHidden(current > 160 && current > lastScroll.current + 4 && !menuOpen);
        if (current < lastScroll.current - 4 || current < 80) setHidden(false);
        lastScroll.current = current;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen]);

  const navClass = [
    "site-nav",
    overlayRoute && !scrolled ? "site-nav--overlay" : "site-nav--solid",
    hidden ? "site-nav--hidden" : "",
    menuOpen ? "site-nav--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={navClass}>
      <div className="nav-inner">
        <NavLink to="/" className="brand-mark" aria-label="Chasa Design home" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Chasa Design Architects and Planners" />
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta">
            Start a project <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>

        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal={menuOpen ? "true" : undefined}
        aria-label="Site navigation"
      >
        <div className="mobile-menu-grid" aria-hidden="true" />
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <NavLink key={link.to} to={link.to} className="mobile-link" onClick={() => setMenuOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu-meta">
          <span>Gaborone / Botswana</span>
          <span>24.6° S / 25.9° E</span>
        </div>
      </div>
    </header>
  );
}
