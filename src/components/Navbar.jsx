import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Chasa_Logo.svg";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const hideThreshold = 100;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY < 50) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY) {
            if (currentScrollY > hideThreshold) {
              setIsVisible(false);
            }
          } else {
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-slate-950/50 backdrop-blur-sm transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-20 w-full items-center overflow-x-hidden px-3 sm:px-6">
        <div className="flex flex-shrink-0 items-center">
          <NavLink to="/" className="flex items-center">
            <div className="flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-full bg-white/5 p-1">
              <img src={logo} alt="Chasa logo" className="max-h-[80px] max-w-[80px] object-contain" />
            </div>
          </NavLink>
        </div>

        <nav className="ml-auto flex flex-wrap items-center justify-end gap-2 whitespace-nowrap sm:gap-4 md:gap-6">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `inline-flex items-center rounded-full px-2 py-2 text-sm font-semibold tracking-wide sm:px-3 ${
                isActive ? "text-cyan-300" : "text-slate-100 hover:text-cyan-200"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            style={{ marginLeft: "2rem" }}
            className={({ isActive }) =>
              `inline-flex items-center rounded-full px-2 py-2 text-sm font-semibold tracking-wide sm:px-3 ${
                isActive ? "text-cyan-300" : "text-slate-100 hover:text-cyan-200"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            style={{ marginLeft: "2rem" }}
            className={({ isActive }) =>
              `inline-flex items-center rounded-full px-2 py-2 text-sm font-semibold tracking-wide sm:px-3 ${
                isActive ? "text-cyan-300" : "text-slate-100 hover:text-cyan-200"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
