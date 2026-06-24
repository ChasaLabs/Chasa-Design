import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Chasa_Logo.svg";

const linkBase = "inline-flex items-center px-1 text-sm font-medium tracking-wide text-white drop-shadow-sm";
const active = "text-white font-semibold";
const idle = "text-white hover:text-white/80";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const hideThreshold = 100; // Hide navbar after scrolling 100px down

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // If near the top, always show navbar
          if (currentScrollY < 50) {
            setIsVisible(true);
            setScrollDirection("up");
          } else {
            // Determine scroll direction
            if (currentScrollY > lastScrollY) {
              setScrollDirection("down");
              // Hide if scrolled past threshold
              if (currentScrollY > hideThreshold) {
                setIsVisible(false);
              }
            } else {
              setScrollDirection("up");
              setIsVisible(true);
            }
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
      className={`fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full flex h-20 items-center overflow-x-hidden px-3 sm:px-6">

        {/* Left: logo */}
        <div className="flex items-center flex-shrink-0">
          <NavLink to="/" className="flex items-center">
            <div className="h-[80px] w-[80px] rounded-full overflow-hidden flex items-center justify-center bg-white/5 p-1">
              <img src={logo} alt="Chasa logo" className="max-h-[80px] max-w-[80px] object-contain" />
            </div>
          </NavLink>
        </div>

        {/* Right: navigation links */}
        <nav className="ml-auto flex items-center gap-5 whitespace-nowrap sm:gap-8 md:gap-10">
          <NavLink to="/projects" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>Contact</NavLink>
        </nav>


      </div>
    </header>

  );
}
