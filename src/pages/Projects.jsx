import { useState } from "react";
import Container from "../components/Container";
import ProjectMiniCarousel from "../components/ProjectMiniCarousel";
import RevealOnScroll from "../components/RevealOnScroll";
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

const practiceStats = [
  {
    value: "20+",
    label: "Years in Practice",
    detail: "Registered since 2004",
  },
  {
    value: "30+",
    label: "Selected Projects",
    detail: "Across Botswana, South Africa and Kenya",
  },
  {
    value: "P800M+",
    label: "Portfolio Value",
    detail: "Across selected works listed in the company profile",
  },
  {
    value: "4",
    label: "Professional Jurisdictions",
    detail: "Botswana, South Africa, Kenya and Rwanda",
  },
];
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSlides, setActiveSlides] = useState({});

  return (
    <section className="overflow-x-hidden pt-28 pb-24 md:pt-32">
      <Container>
        <RevealOnScroll className="mx-auto max-w-3xl text-center" rootMargin="0px 0px -2% 0px">
          <p className="text-xs uppercase tracking-[0.32em] text-neutral-500">Projects</p>
          <h1 className="mt-4 text-[1.125rem] font-semibold tracking-tight text-neutral-950 sm:text-[1.35rem] md:text-[1.65rem]">
            Built around place, purpose, and movement.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base md:text-lg">
            A curated portfolio of Chasa Design work across retail, hospitality, healthcare,
            infrastructure, worship, and community environments.
          </p>
        </RevealOnScroll>

        <section id="practice-snapshot" className="mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-neutral-900 px-6 py-10 text-white sm:px-10 md:py-12">

            <RevealOnScroll className="relative z-10 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                Practice Snapshot
              </p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Experience measured through practice and place.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                A registered architectural practice with over 20 years of experience, Chasa Design
                has contributed to a diverse portfolio of commercial, hospitality, healthcare,
                worship, sports, infrastructure and residential projects across Botswana and the
                region.
              </p>
            </RevealOnScroll>

            <div className="relative z-10 mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-8">
              {practiceStats.map((stat, index) => {
                const isBlue = index % 2 === 1;

                return (
                  <article
                    key={stat.label}
                    className={`min-w-[10rem] flex-1 basis-48 rounded-2xl p-5 sm:p-6 ${
                      isBlue ? "bg-[#315b78]" : "bg-white"
                    }`}
                  >
                    <RevealOnScroll delay={index * 90}>
                    <p className={`text-center text-3xl font-semibold tracking-tight ${isBlue ? "text-white" : "text-neutral-950"}`}>
                      {stat.value}
                    </p>
                    <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.18em] ${isBlue ? "text-white/75" : "text-neutral-700"}`}>
                      {stat.label}
                    </p>
                    <p className={`mt-2 text-sm leading-6 ${isBlue ? "text-white/60" : "text-neutral-600"}`}>
                      {stat.detail}
                    </p>
                    </RevealOnScroll>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 shadow-sm backdrop-blur-sm">
          {portfolioGroups.map((group, index) => {
            const isOpen = activeIndex === index;
            const activeSlideIndex = activeSlides[group.id] || 0;
            const activeProject = group.slides[activeSlideIndex] || group.projects[0];

            return (
              <RevealOnScroll
                key={group.id}
                delay={(index % 3) * 70}
                className="border-b border-black/10 last:border-b-0"
              >
              <article>
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
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
