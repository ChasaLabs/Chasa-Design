import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// About page removed; redirect route set to home
import Contact from "./pages/Contact";
import bg from "./assets/FeintDrawings.jpeg";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <div
        id="app-background-layer"
        data-default-bg={bg}
        aria-hidden
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transition: "background-image 300ms ease-out",
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
      />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Navigate to="/#concepts" replace />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
