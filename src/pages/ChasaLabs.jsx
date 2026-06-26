import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";

const trustItems = [
  "Architecture-led systems thinking",
  "Electrical & MEP documentation support",
  "Dashboards and workflow automation",
  "Smart-ready building strategy",
];

const capabilities = [
  {
    title: "Digital Systems",
    description:
      "Practical digital tools that help teams track, automate, and understand their work.",
    bullets: [
      "Websites and digital presence",
      "Dashboards and reporting tools",
      "Workflow automation",
      "AI-assisted admin and documentation",
    ],
    accent: "from-cyan-400/20 via-sky-500/10 to-emerald-400/15",
  },
  {
    title: "Electrical & MEP Documentation",
    description:
      "Technical drafting and coordination support for electrical and building-services information.",
    bullets: [
      "Electrical layout drafting",
      "Lighting and small power drawings",
      "DB schedules and single-line diagram drafting",
      "Redline and as-built drawing support",
      "MEP coordination support",
    ],
    accent: "from-sky-400/20 via-blue-500/10 to-cyan-400/15",
  },
  {
    title: "Smart Building Readiness",
    description:
      "Design-stage strategies for buildings that may later integrate sensors, monitoring, automation, and digital infrastructure.",
    bullets: [
      "IoT and sensor planning concepts",
      "Access, security, and monitoring coordination",
      "Data and network infrastructure planning",
      "Smart-ready design strategies",
    ],
    accent: "from-emerald-400/20 via-cyan-500/10 to-slate-400/15",
  },
  {
    title: "Electronics",
    description:
      "Practical support for electronic systems, control concepts, and integration planning across projects.",
    bullets: [
      "Control and sensing system concepts",
      "Low-voltage and power distribution support",
      "Product and equipment coordination",
      "Technical documentation and layout review",
    ],
    accent: "from-violet-400/20 via-fuchsia-500/10 to-sky-400/15",
  },
  {
    title: "Renewable Energy",
    description:
      "Concept and documentation support for renewable energy strategies that need clear technical thinking and coordination.",
    bullets: [
      "Solar and energy system concepts",
      "Energy performance and feasibility planning",
      "Integration with building systems",
      "Technical coordination and documentation",
    ],
    accent: "from-emerald-500/20 via-lime-400/10 to-cyan-400/15",
  },
];

const systemFlow = [
  {
    title: "Drawings",
    description: "Ideas begin as drawings and technical intent, giving the system a clear starting point.",
  },
  {
    title: "Data",
    description: "Those drawings become structured information that can be shared, reviewed, and reused.",
  },
  {
    title: "Dashboard",
    description: "The information is presented in a clear view that helps teams understand status at a glance.",
  },
  {
    title: "Automation",
    description: "Routine tasks are simplified so the workflow becomes faster and more consistent.",
  },
  {
    title: "Insight",
    description: "The system produces useful insight, helping people make better decisions over time.",
  },
];

const useCases = [
  {
    title: "Architecture Projects",
    description: "Digital coordination, project intelligence, and smarter design-to-delivery workflows.",
    tag: "Design + Delivery",
  },
  {
    title: "Property Owners",
    description: "Clearer visibility into spaces, assets, performance, and operational priorities.",
    tag: "Assets + Insight",
  },
  {
    title: "Small Businesses",
    description: "Lean dashboards and automations designed around real teams and practical constraints.",
    tag: "Teams + Workflow",
  },
  {
    title: "Building Operations",
    description: "Connected information systems that support maintenance, comfort, and daily performance.",
    tag: "Systems + Uptime",
  },
];

const processSteps = [
  "Understand",
  "Map",
  "Draft / Design",
  "Build",
  "Coordinate",
  "Improve",
];

function RevealLine({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}>
      <div className={`mx-auto mb-4 h-0.5 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 transition-all duration-700 ${isVisible ? "w-full" : "w-0"}`} />
      {children}
    </div>
  );
}

function CapabilitySlideshow({ bullets }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (bullets.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bullets.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, [bullets.length]);

  return (
    <div className="mt-6 min-h-[5rem]">
      <div className="relative flex min-h-[3rem] items-center justify-center">
        {bullets.map((bullet, index) => (
          <div
            key={bullet}
            className={`flex items-start justify-center gap-2 text-center transition-all duration-700 ${
              index === activeIndex ? "translate-y-0 opacity-100" : "pointer-events-none absolute translate-y-2 opacity-0"
            }`}
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{bullet}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {bullets.map((bullet, index) => (
          <span
            key={bullet}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-sky-600" : "bg-sky-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SystemFlowSlideshow({ steps }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (steps.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="rounded-[2rem] border border-sky-200 bg-white/90 p-6 shadow-[0_25px_70px_rgba(14,116,144,0.12)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-slate-900">{steps[activeIndex].title}</h3>

          <div className="mt-4 flex items-center justify-center gap-2">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-sky-600" : "w-2.5 bg-sky-200 hover:bg-sky-300"}`}
                aria-label={`Show ${step.title}`}
              />
            ))}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
          {steps[activeIndex].description}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${index === activeIndex ? "border-sky-600 bg-sky-600 text-white" : "border-sky-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700"}`}
            >
              {step.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-0 rounded-[2.4rem] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.18),transparent_35%)] blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white/90 p-4 shadow-[0_30px_100px_rgba(14,116,144,0.16)] backdrop-blur-xl sm:p-5">
        <div className="border-b border-sky-100 pb-4" />

      </div>
    </div>
  );
}

export default function ChasaLabs() {
  return (
    <div className="relative isolate overflow-x-hidden bg-[#eef7fb] text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(14,116,144,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,144,0.08)_1px,transparent_1px)] bg-[size:44px_44px]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-8rem] top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-300/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-10rem] top-[44rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-cyan-300/20 blur-3xl" />

      <section className="relative pb-16 pt-36 sm:pb-24 sm:pt-44 lg:pt-48">
        <Container>
          <div className="flex flex-col gap-10">
            <DashboardMockup />

            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-3xl lg:text-4xl">
                Chasa Labs
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-700 sm:text-xl">
                Digital systems, electrical documentation, and smart-building support for future-ready spaces.
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Chasa Labs connects architecture, data, automation, and technical documentation to create practical tools for project teams, building owners, and growing organisations.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {trustItems.map((item) => (
                  <div key={item} className="rounded-full border border-sky-100 bg-white/80 px-3 py-2 text-sm text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <a href="#capabilities" className="inline-flex rounded-full border border-sky-200 bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
                  Explore Capabilities
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="capabilities" className="py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl text-center sm:mx-auto">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-sky-700">
              CAPABILITIES
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Digital layers designed around real needs.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {capabilities.map((card) => (
              <RevealLine key={card.title} className="h-full">
                <article className="relative h-full overflow-hidden rounded-[1.8rem] border border-sky-100 bg-white/85 p-6 text-center shadow-[0_20px_60px_rgba(14,116,144,0.12)] backdrop-blur-xl sm:p-8">
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${card.accent}`} />
                  <h3 className="text-2xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                  <CapabilitySlideshow bullets={card.bullets} />
                </article>
              </RevealLine>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-sky-100 bg-sky-50/70 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl text-center sm:mx-auto">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-sky-700">
              SYSTEMS DIAGRAM
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              From drawings to digital systems.
            </h2>
          </div>

          <SystemFlowSlideshow steps={systemFlow} />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl text-center sm:mx-auto">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-sky-700">
              USE CASES
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built for the people shaping and running a space.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((card) => (
              <RevealLine key={card.title} className="h-full">
                <article className="h-full rounded-[1.5rem] border border-sky-100 bg-white/85 p-6 text-center backdrop-blur-xl">
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-emerald-600">{card.tag}</p>
                  <h3 className="mt-8 text-xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                </article>
              </RevealLine>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-sky-100 bg-white/70 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl text-center sm:mx-auto">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-sky-700">
              PROCESS
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              From brief to working system.
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-center">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-center justify-center lg:flex-1">
                <RevealLine className="w-full">
                  <div className="rounded-[1.4rem] border border-sky-100 bg-white/80 px-6 py-4 text-center shadow-sm">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-sky-700">{step}</p>
                  </div>
                </RevealLine>
                {index < processSteps.length - 1 && (
                  <div className="mx-2 hidden h-px w-6 bg-gradient-to-r from-sky-500/70 to-emerald-500/60 lg:block" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="rounded-[2rem] border border-sky-200 bg-[linear-gradient(135deg,rgba(224,242,254,0.95),rgba(255,255,255,0.95))] p-7 text-center sm:p-10">
            <div className="mx-auto max-w-2xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-sky-700">
                SCOPE CLARITY
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Digital-first. Design-led.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                Chasa Labs helps teams turn ideas into practical digital tools, clearer documentation, and more connected project information. The focus is on thoughtful systems, structured workflows, and useful support that makes complex work easier to manage.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[1.8rem] border border-sky-100 bg-white/80 p-7 text-center sm:p-10">
            <h3 className="text-2xl font-semibold text-slate-900">
              Have an idea for a smarter space or workflow?
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Let&apos;s explore how digital systems can support your project, building, or business operations.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}