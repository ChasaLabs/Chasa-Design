import { useMemo, useState } from "react";
import { projectFilters, projects } from "../data/projects";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import DocumentTitle from "../components/DocumentTitle";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.filter === activeFilter),
    [activeFilter],
  );

  return (
    <>
      <DocumentTitle title="Projects" />
      <PageHero
        eyebrow={`Project archive / 01—${String(projects.length).padStart(2, "0")}`}
        title={<>Selected<br />work.</>}
        copy="Architecture across retail, hospitality, healthcare, community, infrastructure and gathering."
        meta="Botswana / South Africa / Kenya"
        className="projects-hero"
      />

      <section className="project-archive section">
        <div className="section-shell">
          <div className="filter-bar" role="group" aria-label="Filter projects">
            <span className="filter-label">Filter /</span>
            <div className="filter-options">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter ? "is-active" : ""}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="filter-count">{String(visibleProjects.length).padStart(2, "0")}</span>
          </div>

          <div className="archive-grid" aria-live="polite">
            {visibleProjects.map((project, index) => (
              <Reveal
                key={project.id}
                className={`archive-item ${index % 5 === 0 ? "archive-item--wide" : ""}`}
                delay={(index % 3) * 50}
              >
                <ProjectCard project={project} eager={index < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
