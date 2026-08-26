import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { principles } from "../data/site";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import StatsStrip from "../components/StatsStrip";
import RegionGraphic from "../components/RegionGraphic";
import LabsGraphic from "../components/LabsGraphic";
import DocumentTitle from "../components/DocumentTitle";

const heroSlides = [projects[0], projects[1], projects[2], projects[3]];

export default function Home() {
  const selected = [projects[0], projects[2], projects[1], projects[5]];
  const [activeHero, setActiveHero] = useState(1);
  const [heroPaused, setHeroPaused] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const activeProject = heroSlides[activeHero];

  useEffect(() => {
    if (heroPaused) return undefined;
    const timer = window.setInterval(
      () => setActiveHero((current) => (current + 1) % heroSlides.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [heroPaused]);

  return (
    <>
      <DocumentTitle />
      <section className="home-hero">
        <div className="home-hero-slides">
          {heroSlides.map((project, index) => (
            <img
              key={project.id}
              className={`home-hero-image ${index === activeHero ? "is-active" : ""}`}
              src={project.image}
              alt={index === activeHero ? `${project.title} — ${project.location}` : ""}
              aria-hidden={index !== activeHero}
              fetchPriority={index === 0 ? "high" : "auto"}
              style={{ objectPosition: project.objectPosition || "center" }}
            />
          ))}
        </div>
        <div className="home-hero-overlay" />
        <div className="hero-grid architectural-grid" aria-hidden="true" />

        <div className="home-hero-content">
          <p className="eyebrow hero-eyebrow">Architecture · Design · Delivery</p>
          <Reveal as="h1" className="hero-title">
            Chasa<br />Design
          </Reveal>
          <Reveal className="hero-statement" delay={100}>
            <h2>Architecture shaped by place, purpose and possibility.</h2>
            <p>Architecture, design and project delivery across Botswana and the broader African region.</p>
            <div className="hero-actions">
              <Link to="/projects" className="button button--light">View projects <span>↗</span></Link>
              <Link to="/studio" className="text-link text-link--light">Explore the studio <span>→</span></Link>
            </div>
          </Reveal>
        </div>

        <div className="hero-technical">
          <span>{activeProject.number} / {activeProject.title}</span>
          <span>{activeProject.location}</span>
          <div className="hero-slide-controls" aria-label="Homepage project slideshow controls">
            <button
              type="button"
              onClick={() => setHeroPaused((paused) => !paused)}
              aria-label={heroPaused ? "Play project slideshow" : "Pause project slideshow"}
              aria-pressed={heroPaused}
            >
              {heroPaused ? "Play" : "Pause"}
            </button>
            {heroSlides.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className={index === activeHero ? "is-active" : ""}
                onClick={() => setActiveHero(index)}
                aria-label={`Show ${project.title}`}
                aria-current={index === activeHero ? "true" : undefined}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--projects">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Selected work"
              title="A regional portfolio, drawn through use and place."
              copy="Commercial, hospitality, healthcare and community environments developed from first idea through coordinated delivery."
            />
          </Reveal>

          <div className="project-mosaic">
            {selected.map((project, index) => (
              <Reveal
                key={project.id}
                className={`mosaic-item mosaic-item--${index + 1}`}
                delay={(index % 2) * 80}
              >
                <ProjectCard project={project} eager={index === 0} />
              </Reveal>
            ))}
          </div>

          <div className="section-end-link">
            <Link to="/projects" className="index-link">
              <span>View all projects</span><b>09 projects</b><i aria-hidden="true">→</i>
            </Link>
          </div>
        </div>
      </section>

      <section className="studio-preview section">
        <div className="studio-preview-copy architectural-grid">
          <Reveal>
            <p className="eyebrow">Studio</p>
            <h2>Built around place.</h2>
            <p className="lead-copy">
              Established in Gaborone in 2004, Chasa Design works across architecture,
              planning, documentation, coordination and project delivery.
            </p>
            <Link to="/studio" className="text-link">About Chasa <span>→</span></Link>
          </Reveal>
        </div>
        <StatsStrip />
      </section>

      <section className="section approach-section">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Design approach"
              title="Clear ideas. Disciplined delivery."
              copy="A working method that holds context, use, identity and technical coordination in the same frame."
            />
          </Reveal>
          <div className="principles-index">
            {principles.map((principle, index) => (
              <Reveal className="principle-row" key={principle.title} delay={index * 50}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
                <i aria-hidden="true">＋</i>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="labs-preview section--dark">
        <div className="labs-preview-grid architectural-grid" aria-hidden="true" />
        <div className="section-shell labs-preview-inner">
          <Reveal className="labs-preview-copy">
            <p className="eyebrow eyebrow--orange">Chasa Labs</p>
            <h2>Designing the systems behind better buildings.</h2>
            <p>
              The experimental and technical arm of Chasa Design connects architecture,
              digital systems, electrical documentation and smart-ready strategy.
            </p>
            <Link to="/labs" className="button button--blue">Explore Chasa Labs <span>↗</span></Link>
          </Reveal>
          <Reveal className="labs-preview-graphic" delay={120}>
            <LabsGraphic />
          </Reveal>
        </div>
      </section>

      <section id="regional-practice" className="section region-section">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Regional practice"
              title="Grounded in Gaborone. Connected across the region."
              copy="The current project archive spans Botswana, South Africa and Kenya, alongside an established regional practice network."
            />
          </Reveal>
          <Reveal delay={80}>
            <RegionGraphic />
          </Reveal>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-cta-grid architectural-grid" aria-hidden="true" />
        <p className="eyebrow">Begin a conversation</p>
        <h2>Let’s build something<br />worth keeping.</h2>
        <Link to="/contact" className="button button--dark">Start a project <span>↗</span></Link>
      </section>
    </>
  );
}
