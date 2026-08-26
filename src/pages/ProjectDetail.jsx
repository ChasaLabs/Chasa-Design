import { Link, Navigate, useParams } from "react-router-dom";
import { getNextProject, getProject, projects } from "../data/projects";
import Reveal from "../components/Reveal";
import DocumentTitle from "../components/DocumentTitle";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = getProject(projectId);

  if (!project) return <Navigate to="/not-found" replace />;

  const nextProject = getNextProject(project.id);

  return (
    <article className="project-detail">
      <DocumentTitle title={project.title} />
      <section className="project-detail-hero">
        <img
          src={project.image}
          alt={`${project.title} in ${project.location}`}
          style={{ objectPosition: project.objectPosition }}
          fetchPriority="high"
        />
        <div className="project-detail-overlay" />
        <div className="project-detail-grid architectural-grid" aria-hidden="true" />
        <div className="project-detail-title">
          <p className="eyebrow">{project.number} / {project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.location}</p>
        </div>
        <div className="project-detail-count">{project.number} / {String(projects.length).padStart(2, "0")}</div>
      </section>

      <section className="project-intro">
        <div className="project-facts">
          <div><span>Location</span><strong>{project.location}</strong></div>
          <div><span>Type</span><strong>{project.category}</strong></div>
          {project.metadata && <div><span>Scope</span><strong>{project.metadata}</strong></div>}
        </div>
        <Reveal className="project-overview">
          <p className="eyebrow">Project overview</p>
          <p>{project.description}</p>
        </Reveal>
      </section>

      {project.images.length > 1 && (
        <section className={`project-gallery gallery-count-${project.images.length - 1}`}>
          {project.images.slice(1).map((image, index) => (
            <Reveal className={`gallery-image gallery-image--${index + 1}`} key={image} delay={(index % 2) * 70}>
              <div className={`gallery-frame fit-${project.imageFits?.[index + 1] || "cover"}`}>
                <img
                  src={image}
                  alt={`${project.title} project view ${index + 2}`}
                  loading="lazy"
                />
              </div>
              <p><span>{project.number}.{String(index + 2).padStart(2, "0")}</span> Project view</p>
            </Reveal>
          ))}
        </section>
      )}

      {project.images.length === 1 && (
        <section className="single-image-note">
          <span>Image archive / 01</span>
          <p>Additional drawings and project photography can be added to this page as the archive develops.</p>
        </section>
      )}

      <nav className="project-next" aria-label="Project navigation">
        <p className="eyebrow">Next project / {nextProject.number}</p>
        <Link to={`/projects/${nextProject.id}`}>
          <span>{nextProject.title}</span>
          <b aria-hidden="true">→</b>
        </Link>
        <p>{nextProject.location}</p>
      </nav>
    </article>
  );
}
