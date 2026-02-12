// Install: npm install react-leaflet leaflet
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import pc1 from "../assets/PC_1.jpeg";
import pc2 from "../assets/PC_2.jpeg";
import tl1 from "../assets/TL_1.jpeg";
import krh1 from "../assets/KRH_1.jpeg";
import dsc1 from "../assets/DSC_1.jpeg";
import vgm01 from "../assets/VGM_01.jpeg";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Home() {
  const slides = [pc1, pc2, tl1, krh1, dsc1, vgm01];
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
          <div className="relative min-h-[70vh] flex items-center">
            <div className="absolute inset-0 bg-black/40" /> {/* soft dark overlay for readability */}
            <div className="relative z-10 w-full">
              <Container>
                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-sm tracking-[0.25em] text-white/90">CHASA DESIGN</p>
                  <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                    Thoughtful architecture, grounded in place.
                  </h1>
                  <p className="mt-4 text-white/90 leading-relaxed">
                    We design spaces that balance form, function, and context with a calm,
                    modern approach to the built environment.
                  </p>
                  <div className="mt-8 flex justify-center gap-6">
                    <a
                      href="#concepts"
                      className="rounded-full border border-white/60 px-6 py-3 text-sm !text-white bg-white/10 hover:bg-white/20"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/40 to-transparent" />
        </div>
      </section>

      {/* Design approach */}
      <section className="py-20">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,600px)_1fr] md:items-start">
            <div className="max-w-[600px]">
              <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                Design Approach
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Our process begins with context and intention. We shape each project through
                careful observation, disciplined planning, and precise detailing, creating spaces
                that feel quiet, functional, and enduring.
              </p>
            </div>
            <div className="ml-auto w-fit text-right">
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
            </div>
          </div>
        </Container>
      </section>

      {/* Concepts images (slideshow) */}
      <section id="concepts" className="py-16">
        <Container>
          <div className="mx-auto max-w-[30rem]">
            <div className="relative h-[360px] w-full overflow-hidden rounded-3xl sm:h-[440px]">
              {slides.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
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
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Where we work</h2>
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
            <h3 className="text-2xl font-semibold tracking-tight">Let’s talk about your project.</h3>
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
          </div>
        </Container>
      </section>
    </>
  );
}


