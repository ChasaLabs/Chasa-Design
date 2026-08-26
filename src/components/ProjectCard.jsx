import { Link } from "react-router-dom";

export default function ProjectCard({ project, className = "", eager = false }) {
  return (
    <article className={`project-card ${className}`.trim()}>
      <Link to={`/projects/${project.id}`} className="project-card-link">
        <div className={`project-card-media fit-${project.imageFits?.[0] || "cover"}`}>
          <img
            src={project.image}
            alt={`${project.title} — ${project.location}`}
            style={{ objectPosition: project.objectPosition }}
            loading={eager ? "eager" : "lazy"}
          />
          <span className="project-view">View project <b aria-hidden="true">↗</b></span>
        </div>
        <div className="project-card-meta">
          <span className="project-number">{project.number}</span>
          <div>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
          <p className="project-location">{project.location}</p>
        </div>
      </Link>
    </article>
  );
}
