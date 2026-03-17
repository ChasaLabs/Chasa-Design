import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import bg from "./assets/FeintDrawings.jpeg";

export default function App() {
  return (
    <div className="min-h-[100svh] overflow-x-hidden font-sans">
      <div
        id="app-background-layer"
        data-default-bg={bg}
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          transition: "background-image 300ms ease-out",
        }}
      />
      <Navbar />
      <main className="overflow-x-hidden">
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
