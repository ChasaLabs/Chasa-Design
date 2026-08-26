import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Studio from "./pages/Studio";
import Labs from "./pages/Labs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="site-shell">
      <RouteEffects />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/about" element={<Navigate to="/studio" replace />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/chasa-labs" element={<Navigate to="/labs" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
