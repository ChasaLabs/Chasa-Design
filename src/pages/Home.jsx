import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import bg from "../assets/FeintDrawings.jpeg";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="relative">
          <div
            className="relative min-h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="absolute inset-0 bg-white/60" /> {/* soft overlay for readability */}
            <div className="relative z-10">
              {/* logo + headline + buttons */}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
          <Container className="absolute inset-x-0 bottom-0 pb-14">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.25em] text-neutral-600">CHASA DESIGN</p>
              <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
                Thoughtful architecture, grounded in place.
              </h1>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                We design spaces that balance form, function, and context — with a calm,
                modern approach to the built environment.
              </p>
              <div className="mt-8 flex gap-3">
                <Link
                  to="/projects"
                  className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white hover:bg-neutral-800"
                >
                  View Projects
                </Link>
                <a
                  href="#contact-cta"
                  className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-neutral-900 hover:bg-neutral-50"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Services / What we do */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.25em] text-neutral-500">WHAT WE DO</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                Architecture across residential and commercial projects.
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                From concept design to documentation support, we bring clarity and intention
                to every phase — working closely with clients and consultants.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Architectural Design",
                "Concept & Feasibility",
                "Space Planning",
                "Project Coordination",
              ].map((s) => (
                <div key={s} className="rounded-2xl border border-neutral-200 p-5">
                  <div className="text-sm font-medium">{s}</div>
                  <div className="mt-2 text-sm text-neutral-500">
                    Clean deliverables, practical detail, strong aesthetics.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="pb-16">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.25em] text-neutral-500">SELECTED WORK</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                Featured projects
              </h2>
            </div>
            <Link to="/projects" className="text-sm text-neutral-600 hover:text-neutral-900">
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section id="contact-cta" className="border-t border-neutral-200 py-16">
        <Container>
          <div className="rounded-3xl border border-neutral-200 p-8 sm:p-12">
            <h3 className="text-2xl font-semibold tracking-tight">Let’s talk about your project.</h3>
            <p className="mt-3 text-neutral-600 max-w-2xl">
              Share your brief and timeline — we’ll respond with next steps and how we can help.
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
