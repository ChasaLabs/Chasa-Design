import { useState } from "react";
import Container from "../components/Container";
import ProjectMiniCarousel from "../components/ProjectMiniCarousel";
import { projects } from "../data/projects";

const groupDefinitions = [
  {
    id: "retail",
    category: "Retail / Mixed-use",
    projectIds: ["hillview-mall", "village-gate-mall"],
  },
  {
    id: "hospitality",
    category: "Hospitality",
    projectIds: ["travel-lodge", "kalahari-arms-hotel"],
  },
  {
    id: "healthcare",
    category: "Healthcare",
    projectIds: ["kapsabet-referral-hospital", "motswedi-clinic"],
  },
  {
    id: "sports-community",
    category: "Sports / Community",
    projectIds: ["dinaledi-sports-centre"],
  },
  {
    id: "service-infrastructure",
    category: "Service / Infrastructure",
    projectIds: ["tswana-fuel-truckstop"],
  },
  {
    id: "worship-gathering",
    category: "Worship / Gathering",
    projectIds: ["crc-church"],
  },
];

const projectsById = new Map(projects.map((project) => [project.id, project]));

const portfolioGroups = groupDefinitions.map((group) => {
  const groupedProjects = group.projectIds
    .map((projectId) => projectsById.get(projectId))
    .filter(Boolean);

  return {
    ...group,
    projects: groupedProjects,
    slides: groupedProjects.flatMap((project) =>
      (project.images?.length ? project.images : [project.image])
        .filter(Boolean)
        .map((image, imageIndex) => ({
          ...project,
          image,
          objectFit: project.imageFits?.[imageIndex] || project.objectFit || "cover",
        })),
    ),
  };
});

function ProjectLabels({ items, className = "" }) {
  return (
    <span className={className}>
      {items.map((project) => (
        <span
          key={project.id}
          className="block text-xs leading-6 text-neutral-600 sm:whitespace-nowrap sm:text-sm"
        >
          <strong className="font-semibold text-neutral-950">{project.title}</strong>
        </span>
      ))}
    </span>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSlides, setActiveSlides] = useState({});

  return (
    <section className="overflow-x-hidden pt-28 pb-24 md:pt-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">Projects</p>
          <h1 className="mt-4 text-[1.125rem] font-semibold tracking-tight text-neutral-950 sm:text-[1.35rem] md:text-[1.65rem]">
            Built around place, purpose, and movement.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base md:text-lg">
            A curated portfolio of Chasa Design work across retail, hospitality, healthcare,
            infrastructure, worship, and community environments.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 shadow-sm backdrop-blur-sm">
          {portfolioGroups.map((group, index) => {
            const isOpen = activeIndex === index;
            const activeSlideIndex = activeSlides[group.id] || 0;
            const activeProject = group.slides[activeSlideIndex] || group.projects[0];

            return (
              <article key={group.id} className="border-b border-black/10 last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`project-panel-${group.id}`}
                  onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-0 bg-transparent px-4 py-5 text-left transition-colors hover:bg-black/5 sm:px-6 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:gap-6 md:px-8 md:py-7"
                >
                  <span className="min-w-0 md:hidden">
                    <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500">
                      {group.category}
                    </span>
                    <ProjectLabels items={group.projects} className="mt-2 block" />
                  </span>
                  <span className="hidden text-xs uppercase tracking-[0.22em] text-neutral-500 md:block">
                    {group.category}
                  </span>
                  <ProjectLabels items={group.projects} className="hidden min-w-0 md:block" />
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-lg leading-none text-neutral-800 sm:h-10 sm:w-10"
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <div
                  id={`project-panel-${group.id}`}
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-black/10 bg-white/80 p-6 backdrop-blur-sm md:p-8">
                      <div className="grid items-start gap-8 md:grid-cols-[382px_1fr] lg:grid-cols-[473px_1fr]">
                        <ProjectMiniCarousel
                          slides={group.slides}
                          title={group.category}
                          onSlideChange={(slideIndex) =>
                            setActiveSlides((current) => ({
                              ...current,
                              [group.id]: slideIndex,
                            }))
                          }
                        />

                        <div className="flex min-w-0 flex-col justify-center py-1 md:py-4">
                          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                            {group.category}
                          </p>
                          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
                            <strong className="font-semibold text-neutral-950">
                              {activeProject.title}
                            </strong>
                            {" - "}
                            {activeProject.location}
                          </p>
                          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-700 sm:text-base">
                            {activeProject.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}