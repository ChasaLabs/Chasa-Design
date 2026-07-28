import { Link } from "react-router-dom";
import Container from "../components/Container";
import RevealOnScroll from "../components/RevealOnScroll";
import { projects } from "../data/projects";

const projectById = new Map(projects.map((project) => [project.id, project]));

const projectImage = (id, imageIndex = 0) => {
  const project = projectById.get(id);
  return project?.images?.[imageIndex] || project?.image;
};

const snapshot = [
  { value: "20+", label: "Years in Practice" },
  { value: "2004", label: "Established in Gaborone" },
  { value: "4", label: "Professional Jurisdictions" },
  { value: "30+", label: "Selected Projects Documented" },
];

const practiceValues = [
  {
    title: "Contextual Response",
    text: "Every project begins with its site, climate, users, restrictions, and surrounding movement patterns.",
  },
  {
    title: "Functional Planning",
    text: "Clear circulation and efficient spatial organisation support practical, adaptable buildings.",
  },
  {
    title: "Architectural Identity",
    text: "Modern architectural expression is balanced with the character and requirements of each place.",
  },
  {
    title: "Responsible Delivery",
    text: "Design intent is carried through documentation, coordination, construction, and completion.",
  },
];

const services = [
  {
    title: "Architectural Design",
    text: "Concept development, spatial planning, and context-responsive architectural solutions.",
    icon: "design",
  },
  {
    title: "Technical Documentation",
    text: "Coordinated plans, sections, details, schedules, and construction information.",
    icon: "document",
  },
  {
    title: "Consultant Coordination",
    text: "Integration of architectural, structural, electrical, and mechanical information.",
    icon: "coordinate",
  },
  {
    title: "Contract Administration",
    text: "Site coordination, inspections, reporting, certification, snagging, and project close-out.",
    icon: "delivery",
  },
];

const methodology = [
  {
    title: "Appraisal & Definition",
    text: "Understanding the site, constraints, user needs, scope, and project objectives.",
    icon: "site",
  },
  {
    title: "Concept Design",
    text: "Testing ideas for form, movement, identity, function, and response to place.",
    icon: "design",
  },
  {
    title: "Design Development",
    text: "Refining spatial relationships and coordinating architectural and technical requirements.",
    icon: "coordinate",
  },
  {
    title: "Documentation & Approvals",
    text: "Preparing coordinated technical information for approvals, tendering, and construction.",
    icon: "document",
  },
  {
    title: "Contract Administration",
    text: "Supporting delivery through site coordination, reporting, certification, and quality monitoring.",
    icon: "delivery",
  },
  {
    title: "Completion & Review",
    text: "Closing out the project and supporting the transition into long-term use.",
    icon: "complete",
  },
];

const qualityPrinciples = [
  { title: "Planning", text: "Clear objectives, roles, and project requirements." },
  {
    title: "Coordination",
    text: "Disciplined communication between clients, consultants, and contractors.",
  },
  {
    title: "Review",
    text: "Structured checking of design, documentation, and site outcomes.",
  },
  {
    title: "Improvement",
    text: "Corrections and lessons carried into each next stage of work.",
  },
];

const regionalNodes = [
  { country: "Botswana", detail: "Gaborone / Home Base" },
  { country: "South Africa", detail: "Professional Jurisdiction" },
  { country: "Kenya", detail: "Professional Jurisdiction" },
  { country: "Rwanda", detail: "Regional Jurisdiction" },
];

const regionalLabels = [
  "Regional registration",
  "Cross-border coordination",
  "Context-responsive delivery",
  "Diverse project environments",
];

const collage = [
  {
    title: "Kapsabet Referral Hospital",
    sector: "Healthcare",
    image: projectImage("kapsabet-referral-hospital", 2),
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    title: "Kalahari Arms Hotel",
    sector: "Hospitality",
    image: projectImage("kalahari-arms-hotel", 1),
    className: "",
  },
  {
    title: "Dinaledi Sports Centre",
    sector: "Sports & Community",
    image: projectImage("dinaledi-sports-centre", 1),
    className: "",
  },
  {
    title: "Tswana Fuel Truckstop",
    sector: "Infrastructure",
    image: projectImage("tswana-fuel-truckstop"),
    className: "",
  },
];

function SectionHeading({ index, eyebrow, firstLine, accentLine, light = false, className = "" }) {
  return (
    <RevealOnScroll className={`max-w-4xl ${className}`}>
      <p
        className={`text-[0.68rem] font-semibold uppercase tracking-[0.32em] ${
          light ? "text-[#d1a763]" : "text-[#8299b4]"
        }`}
      >
        {index && <span className="mr-3 text-[#d1a763]">{index} /</span>}
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-3xl font-light leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem] ${
          light ? "text-white" : "text-[#20252a]"
        }`}
      >
        {firstLine}
        <span className={`block ${light ? "text-[#d1a763]" : "text-[#8299b4]"}`}>
          {accentLine}
        </span>
      </h2>
    </RevealOnScroll>
  );
}

function PracticeSnapshot() {
  return (
    <section aria-label="Practice snapshot" className="border-y border-[#20252a]/15 bg-white/70">
      <Container className="!px-0 sm:!px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {snapshot.map((item, index) => (
            <RevealOnScroll
              key={item.label}
              delay={index * 80}
              className="flex min-h-44 flex-col items-center justify-center border-b border-r border-[#20252a]/15 px-5 py-9 text-center transition-colors duration-300 last:border-r-0 hover:bg-[#e9f1f5] lg:border-b-0 sm:px-8 sm:py-12"
            >
              <p className="text-4xl font-light tracking-[-0.055em] text-[#20252a] sm:text-5xl">
                {item.value}
              </p>
              <p className="mx-auto mt-4 max-w-40 text-[0.63rem] font-semibold uppercase leading-5 tracking-[0.2em] text-[#65707a]">
                {item.label}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PracticeValues() {
  return (
    <section id="practice" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What Defines the Practice"
          firstLine="Built around"
          accentLine="Clarity & Context"
        />
        <div className="mt-14 grid border-l border-t border-[#20252a]/15 md:grid-cols-2">
          {practiceValues.map((item, index) => (
            <RevealOnScroll
              key={item.title}
              delay={(index % 2) * 80}
              className="border-b border-r border-[#20252a]/15"
            >
              <article className="flex min-h-64 flex-col items-center justify-center bg-white/55 p-7 text-center transition-colors duration-300 hover:bg-[#e9f1f5] sm:p-10">
                <span className="h-px w-10 bg-[#d1a763]" aria-hidden="true" />
                <h3 className="mt-7 text-2xl font-medium text-[#20252a]">{item.title}</h3>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#65707a]">{item.text}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="bg-[#e9f1f5] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services & Project Delivery"
          firstLine="One practice."
          accentLine="Four connected disciplines."
        />
        <div className="mt-14 grid border-l border-t border-[#20252a]/15 md:grid-cols-2">
          {services.map((service, index) => {
            const dark = index === 0 || index === 3;
            return (
              <RevealOnScroll key={service.title} delay={(index % 2) * 90}>
                <article
                  className={`group relative min-h-72 overflow-hidden border-b border-r border-[#20252a]/15 p-7 transition-colors duration-300 sm:p-9 ${
                    dark ? "about-dark-panel bg-[#25282b] text-white hover:bg-[#30363a]" : "bg-[#f4f7f8] text-[#20252a] hover:bg-white"
                  }`}
                >
                  <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-[#d1a763]/50 transition-all duration-300 group-hover:h-20 group-hover:w-20" />
                  <div className="flex justify-end">
                    <span className="h-7 w-7 border-r border-t border-[#d1a763]" aria-hidden="true" />
                  </div>
                  <h3
                    className={`mt-10 text-center text-2xl font-light ${dark ? "!text-[#d1a763]" : "text-[#20252a]"}`}
                    style={dark ? { color: "#d1a763" } : undefined}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mx-auto mt-4 max-w-md text-center text-sm leading-7 ${dark ? "!text-[#d1a763]" : "text-[#65707a]"}`}
                    style={dark ? { color: "#d1a763" } : undefined}
                  >
                    {service.text}
                  </p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function MethodologyTimeline() {
  return (
    <section id="methodology" className="bg-[#f4f7f8] py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-20">
          <RevealOnScroll className="md:sticky md:top-28 md:self-start">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d1a763]">
              Project Methodology
            </p>
            <h2 className="mt-8 text-4xl font-light leading-[1.03] tracking-[-0.05em] text-[#20252a] sm:text-6xl lg:text-[4.5rem]">
              A clear path from
              <span className="block">Brief to Completion</span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-[#65707a]">
              A disciplined process guides how each project is understood, developed, coordinated, and delivered.
            </p>
          </RevealOnScroll>

          <div className="border-t border-[#20252a]/15">
            {methodology.map((stage, index) => (
              <RevealOnScroll
                key={stage.title}
                delay={(index % 2) * 70}
                className="group relative border-b border-[#20252a]/15 transition-colors duration-300 hover:bg-[#e9f1f5]/60"
              >
                <span className="absolute left-0 top-0 h-0.5 w-28 bg-[#d1a763] transition-[width] duration-300 group-hover:w-40" aria-hidden="true" />
                <article className="py-9 sm:py-11">
                  <div>
                    <h3 className="text-2xl font-medium text-[#20252a] sm:text-3xl">{stage.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#65707a] sm:text-base">
                      {stage.text}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function QualityGrid() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Quality Principles"
          firstLine="Quality carried through"
          accentLine="every stage of work."
        />
        <div className="mt-14 grid border-l border-t border-[#20252a]/15 sm:grid-cols-2">
          {qualityPrinciples.map((principle, index) => (
            <RevealOnScroll key={principle.title} delay={index * 70}>
              <article className="flex h-full min-h-60 flex-col items-center justify-center border-b border-r border-[#20252a]/15 bg-white/65 p-6 text-center transition-colors duration-300 hover:bg-[#e9f1f5] sm:p-8">
                <span className="h-px w-9 bg-[#d1a763]" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-medium text-[#20252a]">{principle.title}</h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#65707a]">{principle.text}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="mt-8">
          <div className="flex flex-col items-stretch gap-3 border-y border-[#20252a]/15 py-5 sm:flex-row sm:items-center">
            {["PLAN", "DO", "CHECK", "ACT"].map((label, index) => (
              <div key={label} className="flex flex-1 items-center">
                <span className="text-[0.66rem] font-semibold tracking-[0.22em] text-[#20252a]">{label}</span>
                {index < 3 && (
                  <span className="mx-4 h-px flex-1 bg-gradient-to-r from-[#d1a763] to-[#8299b4]" />
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

function RegionalFootprint() {
  return (
    <section className="border-y border-[#20252a]/15 bg-[#e9f1f5] py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading
              index="06"
              eyebrow="Regional Footprint"
              firstLine="Regional experience."
              accentLine="Grounded local response."
            />
            <div className="mt-10 grid grid-cols-2 border-l border-t border-[#20252a]/15">
              {regionalLabels.map((label, index) => (
                <RevealOnScroll
                  key={label}
                  delay={index * 70}
                  className="border-b border-r border-[#20252a]/15"
                >
                  <div className="flex min-h-32 flex-col items-center justify-center bg-white/35 px-4 py-6 text-center transition-colors duration-300 hover:bg-white/65">
                    <span className="h-px w-8 bg-[#d1a763]" aria-hidden="true" />
                    <p className="mt-4 text-sm font-medium leading-6 text-[#20252a]">{label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-[#20252a]/15">
            {regionalNodes.map((node, index) => (
              <RevealOnScroll
                key={node.country}
                delay={index * 80}
                className="border-b border-r border-[#20252a]/15"
              >
                <article className={`flex min-h-52 flex-col items-center justify-center p-6 text-center transition-colors duration-300 sm:p-8 ${
                  index === 0 ? "about-dark-panel bg-[#25282b] hover:bg-[#30363a]" : "bg-white/60 hover:bg-white"
                }`}>
                  <p className="text-sm font-semibold tracking-[0.18em] text-[#d1a763]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-7">
                    <h3 className={`text-xl font-medium ${
                      index === 0 ? "!text-[#d1a763]" : "text-[#20252a]"
                    }`}>{node.country}</h3>
                    <p className={`mt-3 text-[0.62rem] uppercase leading-5 tracking-[0.16em] ${
                      index === 0 ? "!text-[#d1a763]" : "text-[#65707a]"
                    }`}>
                      {node.detail}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProjectCollage() {
  return (
    <section className="about-dark-panel bg-[#25282b]">
      <div
        aria-hidden="true"
        className="h-16 bg-gradient-to-b from-[#e9f1f5] via-[#87949d] to-[#25282b] sm:h-24"
      />
      <div className="relative overflow-hidden py-8 sm:py-12">
        <div className="grid auto-rows-[170px] grid-cols-2 gap-2 px-2 sm:auto-rows-[230px] sm:grid-cols-4 sm:px-4">
          {collage.map((item, index) => (
            <RevealOnScroll key={item.title} delay={(index % 4) * 80} className={item.className}>
              <figure className="group relative h-full overflow-hidden bg-[#20252a]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20252a]/90 to-transparent px-4 pb-4 pt-12">
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] !text-white/65">{item.sector}</p>
                  <p className="mt-1 text-sm font-medium !text-white">{item.title}</p>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 grid place-items-center px-6">
          <RevealOnScroll className="max-w-3xl border border-white/20 bg-[#25282b]/80 px-7 py-6 text-center backdrop-blur-sm sm:px-11 sm:py-8">
            <p className="text-2xl font-light leading-tight tracking-[-0.035em] !text-white sm:text-4xl">
              Built around place, purpose and the people who use it.
            </p>
          </RevealOnScroll>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="h-16 bg-gradient-to-b from-[#25282b] via-[#87949d] to-[#e9f1f5] sm:h-24"
      />
    </section>
  );
}

export default function About() {
  return (
    <div className="about-page overflow-x-hidden bg-[#f4f7f8] text-[#20252a]">
      <section className="pb-20 pt-32 sm:pb-28 sm:pt-40">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <RevealOnScroll rootMargin="0px 0px -2% 0px">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#8299b4]">
                About Chasa Design
              </p>
              <h1 className="mt-6 !text-[2.8rem] font-light leading-[1.02] tracking-[-0.055em] text-[#20252a] sm:!text-6xl lg:!text-[4.8rem]">
                Architecture built for
                <span className="block text-[#d1a763]">Long-Term Value</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#65707a] sm:text-lg">
                Established in Gaborone in 2004, Chasa Design is an architectural practice working across commercial, hospitality, healthcare, worship, sports, infrastructure, industrial and residential environments.
              </p>
              <a
                href="#practice"
                className="mt-8 inline-flex border-b border-[#d1a763] pb-2 text-sm font-semibold text-[#20252a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d1a763]"
              >
                Explore the Practice <span className="ml-3 text-[#d1a763]">&rarr;</span>
              </a>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <div className="border-l border-t border-[#20252a]/15">
                <div className="flex items-center justify-between border-b border-r border-[#20252a]/15 bg-[#e9f1f5] px-6 py-4 sm:px-8">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#65707a]">
                    Practice Index
                  </p>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#d1a763]">
                    Design-Led
                  </p>
                </div>
                {[
                  ["Established", "2004"],
                  ["Home Base", "Gaborone, Botswana"],
                  ["Practice", "Architecture / Planning / Delivery"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className={`grid min-h-32 grid-cols-[0.35fr_0.65fr] items-end border-b border-r border-[#20252a]/15 p-6 sm:p-8 ${
                      index === 1 ? "about-dark-panel bg-[#25282b]" : "bg-white/65"
                    }`}
                  >
                    <p className={`text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
                      index === 1 ? "!text-[#d1a763]" : "text-[#8299b4]"
                    }`}>
                      {label}
                    </p>
                    <p className={`text-right text-lg font-light sm:text-xl ${
                      index === 1 ? "!text-[#d1a763]" : "text-[#20252a]"
                    }`}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <PracticeSnapshot />
      <PracticeValues />
      <ServiceGrid />
      <MethodologyTimeline />
      <QualityGrid />
      <RegionalFootprint />
      <ProjectCollage />

      <section className="bg-[#e9f1f5] py-16 sm:py-20">
        <Container>
          <RevealOnScroll className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#8299b4]">
                <span className="mr-3 text-[#d1a763]">07 /</span>
                Start a Conversation
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.045em] text-[#20252a] sm:text-5xl">
                Let&apos;s shape what comes next.
              </h2>
              <p className="mt-4 text-base text-[#65707a] sm:text-lg">
                Begin with the site, the brief and a conversation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex bg-[#25282b] px-6 py-3 text-sm font-semibold !text-white transition hover:bg-[#8299b4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d1a763]"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex border border-[#20252a]/40 px-6 py-3 text-sm font-semibold text-[#20252a] transition hover:border-[#d1a763] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d1a763]"
              >
                Contact Chasa Design
              </Link>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </div>
  );
}
