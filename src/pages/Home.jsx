// Install: npm install react-leaflet leaflet
import { useEffect, useState } from "react";
import Container from "../components/Container";
import PurposeAccordionSplit from "../components/PurposeAccordionSplit";
import RevealOnScroll from "../components/RevealOnScroll";
import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { projects } from "../data/projects";
import gatheringImage from "../assets/Gathering.png";
import projectManagementImage from "../assets/PJ_Chasa.png";
import materialsImage from "../assets/Materials.png";
import drawingImage from "../assets/Drawing.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Home() {
  const slides = projects.filter((project) => project.featuredOnHome !== false);
  const locations = [
    { city: "Johannesburg", country: "South Africa", lat: -26.2041, lng: 28.0473 },
    { city: "Gaborone", country: "Botswana", lat: -24.6282, lng: 25.9231 },
    { city: "Nairobi", country: "Kenya", lat: -1.2921, lng: 36.8219 },
    { city: "Kigali", country: "Rwanda", lat: -1.9706, lng: 30.1044 },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="relative">
          <div className="relative flex min-h-[60svh] items-center md:min-h-[70svh]">
            <div className="absolute inset-0 bg-black/40" /> {/* soft dark overlay for readability */}
            <div className="relative z-10 w-full">
              <Container>
                <RevealOnScroll className="mx-auto max-w-2xl text-center" rootMargin="0px 0px -2% 0px">
                  <p className="text-sm tracking-[0.25em] text-white/90">CHASA DESIGN</p>
                  <h1 className="mt-3 text-[1.2rem] sm:text-[1.92rem] font-semibold tracking-tight text-white">
                    Thoughtful architecture, grounded in place.
                  </h1>
                  <p className="mt-4 text-white/90 leading-relaxed">
                    We design spaces that balance form, function, and context with a calm,
                    modern approach to the built environment.
                  </p>
                  <div className="mt-8 flex justify-center gap-6">
                    <Link
                      to="/projects"
                      className="rounded-full border border-white/60 px-6 py-3 text-sm !text-white bg-white/10 hover:bg-white/20"
                    >
                      View Projects
                    </Link>
                  </div>
                </RevealOnScroll>
              </Container>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/40 to-transparent" />
        </div>
      </section>

      <section className="w-full max-w-full overflow-hidden">
        <div className="px-8 py-6">
          <RevealOnScroll>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Our Services:
            </h2>
          </RevealOnScroll>
        </div>
        <section className="grid w-full max-w-full grid-cols-2 overflow-hidden">
          <div className="min-w-0 h-[420px] overflow-hidden">
            <img
              src={drawingImage}
              alt="Site Prints & Drafting"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="flex min-w-0 items-center justify-center bg-[#7f9a93] p-8 text-center text-white md:p-16">
            <RevealOnScroll className="w-full">
              <h2 className="text-3xl font-semibold md:text-5xl">Site Prints & Drafting</h2>
              <p className="mt-4 text-lg opacity-80">
                Architectural plans, site layouts, and precise drafting for project delivery.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="grid w-full max-w-full grid-cols-2 overflow-hidden">
          <div className="flex min-w-0 items-center justify-center bg-[#7f9a93] p-8 text-center text-white md:p-16">
            <RevealOnScroll className="w-full" delay={80}>
              <h2 className="text-3xl font-semibold md:text-5xl">3D Visualization</h2>
              <p className="mt-4 text-lg opacity-80">
                High-quality architectural renders and presentation visuals.
              </p>
            </RevealOnScroll>
          </div>
          <div className="min-w-0 h-[420px] overflow-hidden">
            <img
              src={gatheringImage}
              alt="3D Visualization"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </section>

        <section className="grid w-full max-w-full grid-cols-2 overflow-hidden">
          <div className="min-w-0 h-[420px] overflow-hidden">
            <img
              src={projectManagementImage}
              alt="Spatial planning and sections"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="flex min-w-0 items-center justify-center bg-[#7f9a93] p-8 text-center text-white md:p-16">
            <RevealOnScroll className="w-full" delay={80}>
              <h2 className="text-3xl font-semibold md:text-5xl">Project Management</h2>
              <p className="mt-4 text-lg opacity-80">
                Coordinating timelines, teams, consultants, and delivery milestones from concept to completion.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="grid w-full max-w-full grid-cols-2 overflow-hidden">
          <div className="flex min-w-0 items-center justify-center bg-[#7f9a93] p-8 text-center text-white md:p-16">
            <RevealOnScroll className="w-full" delay={80}>
              <h2 className="text-3xl font-semibold md:text-5xl">
                Interior Design & Material Selection
              </h2>
              <p className="mt-4 text-lg opacity-80">
                Interior layouts, finishes, lighting concepts, and curated material palettes.
              </p>
            </RevealOnScroll>
          </div>
          <div className="min-w-0 h-[420px] overflow-hidden">
            <img
              src={materialsImage}
              alt="Interior Design & Material Selection"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </section>
      </section>

      <div className="px-8 pt-16 md:pt-24">
        <RevealOnScroll>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            How We Work:
          </h2>
        </RevealOnScroll>
      </div>

      {/* Design approach */}
      <section className="py-20">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,600px)_1fr] md:items-start">
            <RevealOnScroll className="max-w-[600px]">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                Design Approach
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Our process begins with context and intention. We shape each project through
                careful observation, disciplined planning, and precise detailing, creating spaces
                that feel quiet, functional, and enduring.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="ml-auto w-fit text-right" delay={120}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Projects at a glance
              </h3>
              <ul className="mt-5 space-y-4 text-lg text-neutral-700 sm:text-xl">
                <li>
                  <span className="font-semibold text-neutral-900">30+</span> Completed Projects
                </li>
                <li>
                  <span className="font-semibold text-neutral-900">15+</span> Years Experience
                </li>
                <li>
                  <span className="font-semibold text-neutral-900">4</span> Countries
                </li>
              </ul>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <div aria-hidden="true" className="h-10 md:h-14" />

      <PurposeAccordionSplit />
      <div aria-hidden="true" className="h-12 md:h-20" />

      <div className="px-8 pb-6">
        <RevealOnScroll>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            <Link to="/projects" className="text-neutral-900 hover:text-neutral-700">
              Our Work:
            </Link>
          </h2>
        </RevealOnScroll>
      </div>

      {/* Concepts images (slideshow) */}
      <section id="concepts" className="pb-16">
        <Container>
          <div className="mx-auto max-w-[30rem]">
            <div className="relative h-[360px] w-full overflow-hidden rounded-3xl sm:h-[440px]">
              {slides.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              {slides.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className="h-2 w-2 rounded-full border border-neutral-900/80 transition-colors"
                  style={{
                    backgroundColor: index === activeIndex ? "#f59e0b" : "#4b5563",
                    outline: index === activeIndex ? "1px solid #111827" : "none",
                    outlineOffset: "1px",
                  }}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Where we work map */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Where we work:</h2>
            </RevealOnScroll>
            <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
              <MapContainer
                center={[-2, 24]}
                zoom={4}
                scrollWheelZoom={false}
                className="h-[380px] w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location) => (
                  <Marker key={location.city} position={[location.lat, location.lng]}>
                    <Popup>
                      {location.city}, {location.country}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured projects removed per request */}

      {/* Contact CTA */}
      <section id="contact-cta" className="border-t border-neutral-200 py-16">
        <Container>
          <div className="rounded-3xl border border-neutral-200 p-8 sm:p-12">
            <RevealOnScroll>
            <h3 className="text-2xl font-semibold tracking-tight">Let's discuss your project.</h3>
            <p className="mt-3 text-neutral-600 max-w-2xl">
              Share your brief and we’ll respond with next steps and how we can help.
            </p>
            <div className="mt-4 max-w-2xl">
              <div>
                <p className="font-semibold text-neutral-900">Our Locations:</p>
                <ul className="mt-2 list-disc list-inside text-neutral-600">
                  <li>Botswana</li>
                  <li>South Africa</li>
                  <li>Kenya</li>
                  <li>Rwanda</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white hover:bg-neutral-800"
              >
                Contact us
              </Link>
            </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}


