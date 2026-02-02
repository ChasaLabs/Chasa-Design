export default function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="text-xs text-neutral-500">{project.category} • {project.year}</div>
        <div className="mt-1 text-base font-semibold tracking-wide">{project.title}</div>
        <div className="mt-1 text-sm text-neutral-500">{project.location}</div>
      </div>
    </div>
  );
}
