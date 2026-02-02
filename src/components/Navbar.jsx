import { NavLink } from "react-router-dom";
import Container from "../components/Container";

const linkBase = "text-sm tracking-wide";
const active = "text-neutral-900";
const idle = "text-neutral-500 hover:text-neutral-900";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-neutral-300" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">CHASA</div>
            <div className="text-xs text-neutral-500">Design</div>
          </div>
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink to="/projects" className={({isActive}) => `${linkBase} ${isActive ? active : idle}`}>Projects</NavLink>
          <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? active : idle}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? active : idle}`}>Contact</NavLink>
        </nav>
      </Container>
    </header>
  );
}
