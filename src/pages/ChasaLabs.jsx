import { Link } from "react-router-dom";
import Container from "../components/Container";
import RevealOnScroll from "../components/RevealOnScroll";
import TechnicalSystemList from "../components/TechnicalSystemList";

const capabilities = [
  {
    title: "Digital Systems",
    icon: "dashboard",
    description: "Practical digital tools that help teams track, automate and understand their work.",
    items: [
      {
        title: "Websites & Digital Presence",
        description: "Responsive digital platforms that communicate clearly and support a credible, useful public presence.",
      },
      {
        title: "Dashboards & Reporting",
        description: "Focused interfaces that organise operational information into clear views for teams and decision-makers.",
      },
      {
        title: "Workflow Automation",
        description: "Connected processes that reduce repetitive administration and improve the consistency of everyday work.",
      },
      {
        title: "AI-Assisted Documentation",
        description: "Purpose-built tools that support research, administration and documentation while keeping human review central.",
      },
    ],
  },
  {
    title: "Electrical & MEP Documentation",
    icon: "electrical",
    description: "Technical drafting and coordination support for clear and usable building-services information.",
    items: [
      {
        title: "Electrical Layout Drafting",
        description: "Coordinated layouts that clearly locate electrical systems within the wider architectural information.",
      },
      {
        title: "Lighting & Small Power",
        description: "Readable lighting, switching and small-power drawings developed around how each space will be used.",
      },
      {
        title: "DB Schedules & Single-Line Diagrams",
        description: "Structured schedules and diagrams prepared to support coordination, review and practical project use.",
      },
      {
        title: "Redline & As-Built Support",
        description: "Drawing updates that record coordinated changes and provide a dependable account of completed work.",
      },
      {
        title: "MEP Coordination",
        description: "Cross-discipline information support that helps architectural and building-services systems align clearly.",
      },
    ],
  },
  {
    title: "Smart Building Readiness",
    icon: "sensor",
    description: "Early-stage systems thinking for buildings that may later integrate monitoring, automation and connected infrastructure.",
    items: [
      {
        title: "Sensor & IoT Planning",
        description: "Early concepts for sensing and connected devices considered alongside spatial and operational requirements.",
      },
      {
        title: "Access & Monitoring",
        description: "Coordinated strategies for access, visibility and monitoring that support safe, legible building operation.",
      },
      {
        title: "Data & Network Infrastructure",
        description: "Planning support for the pathways and technical spaces required by dependable connected systems.",
      },
      {
        title: "Smart-Ready Design Strategy",
        description: "A practical framework that allows buildings to adopt future systems without compromising present needs.",
      },
    ],
  },
  {
    title: "Project Information Systems",
    icon: "workflow",
    description: "Connected project information that supports clearer coordination, reporting and long-term operational use.",
    items: [
      {
        title: "Project Tracking",
        description: "Structured project views that make responsibilities, progress and key information easier to understand.",
      },
      {
        title: "Asset & Maintenance Records",
        description: "Organised records that support long-term visibility of building assets, servicing and maintenance needs.",
      },
      {
        title: "Information Coordination",
        description: "Connected sources of project information that reduce fragmentation and support clearer collaboration.",
      },
      {
        title: "Operational Reporting",
        description: "Useful reporting structures that translate day-to-day information into practical operational insight.",
      },
    ],
  },
];

const technicalExtensions = [
  {
    title: "Electronics",
    text: "Control, sensing, low-voltage, equipment coordination, and technical layout support.",
  },
  {
    title: "Renewable Energy",
    text: "Solar concepts, energy planning, building-system integration, and coordinated documentation.",
  },
];

const systemFlow = [
  { title: "Drawings", status: "Structured project information" },
  { title: "Data", status: "Organised and usable inputs" },
  { title: "Dashboard", status: "Clear project visibility" },
  { title: "Automation", status: "Reduced repetitive work" },
  { title: "Insight", status: "Better-informed decisions" },
];

const useCases = [
  {
    title: "Architecture Projects",
    text: "Digital coordination, clearer project information and connected design-to-delivery workflows.",
    icon: "building",
  },
  {
    title: "Property Owners",
    text: "Clearer visibility into spaces, assets, performance and operational priorities.",
    icon: "asset",
  },
  {
    title: "Small Businesses",
    text: "Lean digital systems designed around practical team workflows.",
    icon: "team",
  },
  {
    title: "Building Operations",
    text: "Connected information that supports maintenance, comfort and daily performance.",
    icon: "operations",
  },
];

const processSteps = [
  { title: "Understand", text: "Define the project, users, information, constraints and intended outcome." },
  { title: "Map", text: "Organise the workflow, responsibilities and required outputs." },
  { title: "Draft / Design", text: "Develop the documentation, interface or technical system." },
  { title: "Build", text: "Translate the design into a usable working solution." },
  { title: "Coordinate", text: "Align information with project teams and specialists." },
  { title: "Improve", text: "Refine the system through feedback and practical use." },
];

const trustItems = [
  "Architecture-led systems thinking",
  "Electrical & MEP documentation support",
  "Dashboards & workflow automation",
  "Smart-ready building strategy",
];

function LabsHeading({ eyebrow, firstLine, accentLine, light = false, className = "" }) {
  return (
    <RevealOnScroll className={`max-w-4xl ${className}`}>
      <p
        className={`text-[0.68rem] font-semibold uppercase tracking-[0.32em] ${
          light ? "text-[#e6c68a]" : "text-[#859bb4]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-3xl font-light leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem] ${
          light ? "text-[#f1d9a7]" : "text-[#20262b]"
        }`}
      >
        {firstLine}
        <span className={`block ${light ? "text-[#e6c68a]" : "text-[#c99a4b]"}`}>
          {accentLine}
        </span>
      </h2>
    </RevealOnScroll>
  );
}

function CapabilityGrid() {
  return (
    <section id="capabilities" className="py-20 sm:py-28">
      <Container>
        <LabsHeading
          eyebrow="Capabilities"
          firstLine="Technical support for"
          accentLine="Real Project Needs"
        />
        <p className="mt-7 max-w-2xl text-base leading-8 text-[#66727c]">
          Practical digital and technical support shaped around project information, coordinated workflows, and useful long-term outcomes.
        </p>

        <div className="mt-14 flex flex-col gap-10">
          {capabilities.map((capability, index) => (
            <RevealOnScroll key={capability.title} delay={(index % 2) * 80}>
              <article
                className={`overflow-hidden rounded-3xl border border-sky-200/70 p-6 shadow-[0_18px_55px_rgba(71,104,124,0.08)] sm:p-8 lg:p-10 ${
                  index % 2 === 0
                    ? "bg-white/80"
                    : "bg-gradient-to-br from-[#edf5f9] via-white/90 to-[#e5eef4]"
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-12">
                  <div className="flex flex-col items-center text-center lg:sticky lg:top-28">
                    <span className="h-px w-12 bg-[#c99a4b]" aria-hidden="true" />
                    <p className="mt-5 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-sky-700">
                      Technical Capability
                    </p>
                    <h3 className="mt-4 text-2xl font-light tracking-[-0.03em] text-[#20262b] sm:text-3xl">
                      {capability.title}
                    </h3>
                    <p className="mt-5 max-w-md text-sm leading-7 text-[#66727c]">
                      {capability.description}
                    </p>
                  </div>

                  <TechnicalSystemList items={capability.items} />
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {technicalExtensions.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 90}>
              <div className="h-full rounded-2xl border border-sky-200/70 bg-[#e5eef4] p-6 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:p-8">
                <p className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#859bb4]">
                  Extended Technical Support
                </p>
                <h3 className="mt-3 text-center text-lg font-medium text-[#20262b]">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-6 text-[#66727c]">{item.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SystemsFlow() {
  return (
    <section id="systems-flow" className="border-y border-[#20262b]/15 bg-[#e5eef4] py-20 sm:py-28">
      <Container>
        <LabsHeading
          eyebrow="Systems Flow"
          firstLine="From Drawings to"
          accentLine="Useful Intelligence"
        />
        <div className="mt-14 grid border-l border-t border-[#20262b]/15 sm:grid-cols-2 lg:grid-cols-5">
          {systemFlow.map((node, index) => (
            <RevealOnScroll
              key={node.title}
              delay={index * 70}
              className="border-b border-r border-[#20262b]/15"
            >
                <article className="group relative flex h-full min-h-48 flex-col items-center justify-center bg-white p-5 text-center transition-colors duration-300 hover:bg-[#f3f7fa]">
                  <span className="h-2 w-2 bg-[#e6c68a]" aria-hidden="true" />
                  <h3 className="mt-7 text-lg font-medium uppercase tracking-[0.1em] text-[#20262b]">{node.title}</h3>
                  <p className="mx-auto mt-3 max-w-40 text-sm leading-6 text-[#66727c]">{node.status}</p>
                  <span className="absolute bottom-0 left-0 h-0.5 w-14 bg-[#c99a4b] transition-[width] duration-300 group-hover:w-full" />
                </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ElectricalSupport() {
  const labels = [
    {
      title: "Layout Drafting",
      text: "Clear electrical layouts coordinated around project information.",
    },
    {
      title: "Lighting & Small Power",
      text: "Structured lighting, switching and small-power information.",
    },
    {
      title: "Schedules & Single-Line Diagrams",
      text: "Organised schedules and diagrams prepared for practical project use.",
    },
    {
      title: "Redline & As-Built Support",
      text: "Drawing updates that record coordinated changes and completed information.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <LabsHeading
              eyebrow="Technical Documentation"
              firstLine="Electrical Information"
              accentLine="Made Clear"
            />
            <p className="mt-7 max-w-xl text-base leading-8 text-[#66727c]">
              Structured drafting and coordination support helps convert project information into clear, usable technical outputs.
            </p>
          </div>
          <div className="border-t border-[#20262b]/15">
            {labels.map((label, index) => (
              <RevealOnScroll
                key={label.title}
                delay={index * 70}
                className="border-b border-[#20262b]/15"
              >
                <article className={`group grid gap-4 p-6 transition-colors duration-300 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#e5eef4]"
                }`}>
                  <div>
                    <h3 className="text-xl font-medium text-[#20262b]">{label.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#66727c]">{label.text}</p>
                  </div>
                  <span className="text-xl text-[#c99a4b] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function UseCaseGrid() {
  return (
    <section className="border-y border-[#20262b]/15 bg-white/65 py-20 sm:py-28">
      <Container>
        <LabsHeading
          eyebrow="Use Cases"
          firstLine="Built for the People"
          accentLine="Shaping and Running Spaces"
        />
        <div className="mt-14 grid border-l border-t border-[#20262b]/15 md:grid-cols-2">
          {useCases.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 70}>
              <article className={`group flex h-full min-h-64 flex-col items-center border-b border-r border-[#20262b]/15 p-7 text-center transition-colors duration-300 sm:p-9 ${
                index === 3 ? "labs-dark-panel bg-[#202a33] hover:bg-[#293641]" : "bg-[#f3f7fa] hover:bg-[#e5eef4]"
              }`}>
                <div className="flex w-full justify-end">
                  <span className="h-7 w-7 border-r border-t border-[#e6c68a]" aria-hidden="true" />
                </div>
                <p className={`mt-10 text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${
                  index === 3 ? "" : "text-[#859bb4]"
                }`}>Use Case</p>
                <h3 className={`mt-3 text-2xl font-medium ${index === 3 ? "" : "text-[#20262b]"}`}>{item.title}</h3>
                <p className={`mx-auto mt-4 max-w-md text-sm leading-7 ${index === 3 ? "" : "text-[#66727c]"}`}>{item.text}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessRows() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <LabsHeading
          eyebrow="Process"
          firstLine="From brief to"
          accentLine="Working System"
        />
        <div className="mt-14">
          {processSteps.map((step, index) => (
            <RevealOnScroll
              key={step.title}
              delay={(index % 2) * 70}
              className="group relative border-t border-[#20262b]/15 transition-colors duration-300 hover:bg-[#e5eef4]/55"
            >
              <span className="absolute left-0 top-0 h-0.5 w-28 bg-[#c99a4b] transition-[width] duration-300 group-hover:w-40" aria-hidden="true" />
              <article className="grid gap-4 py-8 md:grid-cols-[0.75fr_1.25fr] md:items-baseline md:gap-8 md:py-10">
                <h3 className="text-xl font-medium text-[#20262b]">{step.title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-[#66727c]">{step.text}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PracticeRelationship() {
  const designItems = ["Architecture", "Planning", "Technical Documentation", "Project Delivery"];
  const labsItems = ["Digital Systems", "Electrical Documentation", "Automation", "Smart-Ready Strategy"];

  return (
    <section className="bg-[#e5eef4] py-20 sm:py-28">
      <Container>
        <LabsHeading
          eyebrow="Chasa Design + Chasa Labs"
          firstLine="Design thinking connected to"
          accentLine="technical systems."
        />
        <div className="mt-14 grid items-stretch md:grid-cols-[1fr_auto_1fr]">
          <RevealOnScroll>
            <article className="labs-dark-panel h-full bg-[#202a33] p-7 sm:p-10">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em]">Chasa Design</p>
              <h3 className="mt-5 text-2xl font-light">Architecture & Delivery</h3>
              <ul className="mt-8 grid grid-cols-2 border-l border-t border-[#e6c68a]/25">
                {designItems.map((item) => (
                  <li key={item} className="grid min-h-20 place-items-center border-b border-r border-[#e6c68a]/25 p-3 text-center text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="grid place-items-center">
            <div className="flex items-center md:flex-col">
              <span className="h-px w-10 bg-[#e6c68a] md:h-10 md:w-px" />
              <span className="border border-[#e6c68a] bg-[#f3f7fa] px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#20262b]">
                Built Environment
              </span>
              <span className="h-px w-10 bg-[#e6c68a] md:h-10 md:w-px" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={180}>
            <article className="h-full border border-[#20262b]/15 bg-white p-7 sm:p-10">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#859bb4]">Chasa Labs</p>
              <h3 className="mt-5 text-2xl font-light text-[#20262b]">Systems & Information</h3>
              <ul className="mt-8 grid grid-cols-2 border-l border-t border-[#20262b]/15">
                {labsItems.map((item) => (
                  <li key={item} className="grid min-h-20 place-items-center border-b border-r border-[#20262b]/15 p-3 text-center text-sm text-[#66727c]">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}

export default function ChasaLabs() {
  return (
    <div className="labs-page overflow-x-hidden bg-[#f3f7fa] text-[#20262b]">
      <section className="pb-20 pt-32 sm:pb-28 sm:pt-40">
        <Container>
          <div className="flex justify-center">
            <RevealOnScroll
              rootMargin="0px 0px -2% 0px"
              className="max-w-3xl text-center"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#859bb4]">
                Digital Systems + Built Environment
              </p>
              <span className="mx-auto mt-5 block h-0.5 w-20 bg-[#c99a4b]" aria-hidden="true" />
              <h1 className="mt-6 !text-[2.8rem] font-light leading-[1.02] tracking-[-0.055em] text-[#20262b] sm:!text-6xl lg:!text-[4.8rem]">
                Built for
                <span className="block text-[#c99a4b]">Smarter Delivery</span>
              </h1>
              <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#66727c] sm:text-lg">
                Chasa Labs connects architecture, digital systems, electrical documentation, automation and smart-ready strategy to create practical tools for project teams, building owners and growing organisations.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
                <a href="#capabilities" className="group border-b border-[#c99a4b] pb-2 text-sm font-semibold text-[#20262b]">
                  Explore Capabilities <span className="ml-2 inline-block text-[#c99a4b] transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bradley-kipruto-2462611b7/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-[#859bb4] pb-2 text-sm font-semibold text-[#20262b]"
                >
                  Contact Chasa Labs
                </a>
              </div>
            </RevealOnScroll>
          </div>

          <div className="mt-16 grid grid-cols-1 border-l border-t border-[#20262b]/20 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <RevealOnScroll
                key={item}
                delay={index * 70}
                className={`border-b border-r border-[#20262b]/20 px-5 py-6 text-center ${
                  index === 2 ? "labs-dark-panel bg-[#202a33]" : "bg-white"
                }`}
              >
                <span className="mx-auto block h-px w-8 bg-[#c99a4b]" aria-hidden="true" />
                <p className={`mt-4 text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.16em] ${
                  index === 2 ? "" : "text-[#66727c]"
                }`}>
                  {item}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CapabilityGrid />
      <SystemsFlow />
      <ElectricalSupport />
      <UseCaseGrid />
      <ProcessRows />
      <PracticeRelationship />

      <section className="py-16 sm:py-20">
        <Container>
          <RevealOnScroll className="relative border border-[#20262b]/15 bg-[#e5eef4] p-7 pl-10 sm:p-10 sm:pl-14">
            <span className="absolute bottom-7 left-0 top-7 w-1 bg-[#c99a4b] sm:bottom-10 sm:top-10" aria-hidden="true" />
            <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#859bb4]">
                  Scope Clarity
                </p>
                <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-[#20262b]">Digital-First. Design-Led.</h2>
              </div>
              <p className="max-w-3xl text-sm leading-7 text-[#66727c] sm:text-base">
                Chasa Labs provides digital tools, documentation support, workflow systems and smart-ready strategy. Statutory sign-off, physical installation and regulated engineering work may involve appropriately registered professionals or specialist contractors.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <div
        aria-hidden="true"
        className="h-16 bg-gradient-to-b from-[#f3f7fa] via-[#81909a] to-[#202a33] sm:h-24"
      />
      <section className="labs-dark-panel border-t border-[#e6c68a]/60 bg-[#202a33] py-16 sm:py-20">
        <Container>
          <RevealOnScroll className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em]">
                Start a Conversation
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.045em] sm:text-5xl">
                Have an Idea for
                <span className="block">a Smarter Workflow?</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg">
                Let&apos;s explore how digital and technical systems can support your project, building or organisation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/bradley-kipruto-2462611b7/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex border border-[#e6c68a] px-6 py-3 text-sm font-semibold transition hover:bg-[#293641]"
              >
                Start a Conversation <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
              <Link
                to="/"
                className="inline-flex border border-[#e6c68a]/45 px-6 py-3 text-sm font-semibold transition hover:border-[#e6c68a]"
              >
                Return to Chasa Design
              </Link>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </div>
  );
}
