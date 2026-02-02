import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-16">
      <Container>
        <p className="text-xs tracking-[0.25em] text-neutral-500">PROJECTS</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Portfolio</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          A selection of residential, commercial, and concept work.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
