import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/ChasaLogo.jpg";

const linkBase = "text-white text-sm tracking-wide";
const active = "text-white font-semibold";
const idle = "text-white hover:text-neutral-200";

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
      className={`fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Left: logo */}
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Chasa logo" className="h-14 w-auto object-contain" />
          </NavLink>
        </div>

        {/* Right: links + site title, single flex container controls spacing */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <NavLink to="/projects" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>Contact</NavLink>
          </nav>
        </div>

      </Container>
    </header>

  );
}
