import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ChasaLabs from "./pages/ChasaLabs";
import bg from "./assets/FeintDrawings.jpeg";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      <div
        id="app-background-layer"
        data-default-bg={bg}
        aria-hidden
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 300ms ease-out",
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
      />
      <Navbar />
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/labs" element={<ChasaLabs />} />
          <Route path="/chasa-labs" element={<Navigate to="/labs" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
