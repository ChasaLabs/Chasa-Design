import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import pc1 from "../assets/PC_1.jpeg";
import tl1 from "../assets/TL_1.png";

export default function Home() {
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
                    We design spaces that balance form, function, and context — with a calm,
                    modern approach to the built environment.
                  </p>
                  <div className="mt-8 flex justify-center gap-6">
                    <Link
                      to="/projects"
                      className="rounded-full border border-white/60 px-6 py-3 text-sm !text-white bg-white/10 hover:bg-white/20"
                    >
                      View Projects
                    </Link>
                    <a
                      href="#contact-cta"
                      className="rounded-full border border-white/60 px-6 py-3 text-sm !text-white hover:bg-white/5"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/40 to-transparent" />
        </div>
      </section>

      {/* Concepts images (stacked) */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <img src={pc1} alt="PC" className="w-full rounded-2xl object-cover" />
              <img src={tl1} alt="TL" className="w-full rounded-2xl object-cover" />
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


