import Container from "../components/Container";

const capabilities = [
  {
    code: "SB",
    title: "Smart Building Concepts",
    description:
      "Early-stage strategies for connected spaces that improve comfort, energy awareness, usability, and long-term adaptability.",
    span: "lg:col-span-4",
  },
  {
    code: "DD",
    title: "Digital Dashboards",
    description:
      "Clear, purpose-built interfaces that turn operational data into useful information for teams, owners, and decision-makers.",
    span: "lg:col-span-2",
  },
  {
    code: "AW",
    title: "Automation & Workflows",
    description:
      "Practical digital workflows that reduce repetitive work, connect information, and make everyday processes more dependable.",
    span: "lg:col-span-2",
  },
  {
    code: "AI",
    title: "AI-Assisted Tools",
    description:
      "Focused tools that support research, coordination, documentation, and better decisions without replacing human judgment.",
    span: "lg:col-span-4",
  },
];

const systemFlow = ["Space", "Sensors / Inputs", "Data", "Dashboard", "Action"];

const useCases = [
  {
    title: "Architecture Projects",
    description: "Digital coordination, project intelligence, and smarter design-to-delivery workflows.",
    signal: "Design + Delivery",
  },
  {
    title: "Property Owners",
    description: "Clearer visibility into spaces, assets, performance, and operational priorities.",
    signal: "Assets + Insight",
  },
  {
    title: "Small Businesses",
    description: "Lean dashboards and automations designed around real teams and practical constraints.",
    signal: "Teams + Workflow",
  },
  {
    title: "Building Operations",
    description: "Connected information systems that support maintenance, comfort, and daily performance.",
    signal: "Systems + Uptime",
  },
];

const processSteps = [
  { title: "Understand", description: "Map the space, people, data, and real operational need." },
  { title: "Design", description: "Shape a clear system architecture and useful experience." },
  { title: "Build", description: "Create the focused tools, interfaces, and workflows." },
  { title: "Integrate", description: "Connect systems without adding unnecessary complexity." },
  { title: "Improve", description: "Learn from use and refine performance over time." },
];

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-white/95 p-4 shadow-2xl shadow-slate-400/30 backdrop-blur sm:p-5">
        <div className="flex items-center justify-between border-b border-slate-900/10 pb-4">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-sky-700">
              Built Environment Control
            </p>
            <p className="mt-1 text-xs text-slate-600">Workspace / Gaborone 04</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />
            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-emerald-700">Live</span>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["Comfort", "92%", "+4.2%"],
            ["Energy", "-18%", "This month"],
            ["Workflows", "12", "9 active"],
          ].map(([label, value, note]) => (
            <div key={label} className="rounded-2xl border border-slate-900/10 bg-white/75 p-3.5">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-2 text-xl font-semibold text-slate-950">{value}</p>
              <p className="mt-1 text-xs text-sky-700/75">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-64 overflow-hidden rounded-2xl border border-slate-900/10 bg-[#e5eef2] p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-slate-800">Building Systems Layer</p>
              <p className="font-mono text-[0.6rem] text-sky-700/60">BIM / IOT</p>
            </div>

            <svg
              viewBox="0 0 320 190"
              className="mt-4 h-44 w-full text-sky-700"
              role="img"
              aria-label="Connected building systems diagram"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.55">
                <path d="M65 158V55l48-28 48 28v103H65Z" />
                <path d="M161 158V78l45-25 45 25v80H161Z" />
                <path d="M83 72h18v18H83zM122 72h18v18h-18zM83 107h18v18H83zM122 107h18v18h-18z" />
                <path d="M179 91h18v18h-18zM215 91h18v18h-18zM179 124h18v18h-18zM215 124h18v18h-18z" />
                <path d="M25 42h42M251 45h42M35 151h30M251 150h44" strokeDasharray="4 5" />
              </g>
              <g fill="currentColor">
                <circle cx="24" cy="42" r="4" />
                <circle cx="296" cy="45" r="4" />
                <circle cx="34" cy="151" r="4" />
                <circle cx="297" cy="150" r="4" />
                <circle cx="113" cy="27" r="3" />
                <circle cx="206" cy="53" r="3" />
              </g>
            </svg>

            <div className="absolute bottom-3 left-3 right-3 flex justify-between rounded-xl border border-slate-900/10 bg-white/75 px-3 py-2 backdrop-blur">
              <span className="font-mono text-[0.6rem] text-slate-600">24 inputs</span>
              <span className="font-mono text-[0.6rem] text-sky-700">All systems normal</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-900/10 bg-white/75 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-800">Project Intelligence</p>
                <span className="font-mono text-[0.6rem] text-violet-700">+12%</span>
              </div>
              <div className="mt-5 flex h-20 items-end gap-2">
                {[38, 54, 43, 72, 62, 86, 78].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/35 to-cyan-300" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="mt-3 flex justify-between font-mono text-[0.55rem] text-slate-600">
                <span>MON</span>
                <span>SUN</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-900/10 bg-white/75 p-4">
              <p className="text-xs font-medium text-slate-800">Workflow Automation</p>
              <div className="mt-4 space-y-3">
                {[
                  ["Design review", "84%"],
                  ["Issue routing", "68%"],
                  ["Data sync", "96%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="flex justify-between text-[0.65rem] text-slate-600">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChasaLabs() {
  return (
    <div className="labs-page relative isolate overflow-x-hidden bg-[#edf3f5] text-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(30,64,175,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.075)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-52 top-[48rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-3xl" />

      <section className="relative pb-16 pt-28 sm:pb-24 sm:pt-36">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
                Digital Systems + Built Environment
              </p>
              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
                Chasa Labs
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-slate-800 sm:text-2xl">
                Intelligent systems for smarter buildings, better workflows, and future-ready spaces.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
                Chasa Labs connects architecture, data, automation, and digital tools to create practical systems that help spaces, teams, and organisations perform with greater clarity.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#capabilities" className="inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                  Explore Capabilities
                </a>

              </div>
            </div>

            <DashboardMockup />
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-900/10 bg-gradient-to-r from-cyan-400/[0.07] via-white/[0.025] to-violet-400/[0.07] py-12 sm:py-14">
        <Container>
          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Where architecture meets systems thinking.
            </h2>
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              Buildings are becoming connected environments shaped by data, comfort, energy, performance, and experience. Chasa Labs brings these layers into one design-led conversation.
            </p>
          </div>
        </Container>
      </section>

      <section id="capabilities" className="py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-700">Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Digital layers designed around real needs.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-6">
            {capabilities.map((capability, index) => (
              <article key={capability.title} className={`group relative min-h-64 overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white sm:p-8 ${capability.span}`}>
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-300/10 font-mono text-xs text-sky-700">
                    {capability.code}
                  </div>
                  <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">{capability.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700">{capability.description}</p>
                <div aria-hidden="true" className="absolute -bottom-12 -right-10 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-400/15 to-violet-400/10 blur-2xl transition group-hover:scale-125" />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-900/10 bg-[#e4edf1]/90 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-700">Systems Diagram</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              From physical spaces to useful intelligence.
            </h2>
          </div>

          <div className="mt-12 flex flex-col items-stretch md:flex-row md:items-center">
            {systemFlow.map((step, index) => (
              <div key={step} className="contents">
                <div className="relative flex-1 rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-5 text-center backdrop-blur">
                  <span className="mx-auto mb-3 block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
                  <p className="text-sm font-medium text-slate-950">{step}</p>
                  <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">Layer 0{index + 1}</p>
                </div>
                {index < systemFlow.length - 1 && (
                  <div className="mx-auto h-8 w-px bg-gradient-to-b from-cyan-300/70 to-violet-300/40 md:h-px md:w-8 md:flex-none md:bg-gradient-to-r" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-700">Use Cases</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Built for the people operating the space.</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <article key={useCase.title} className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 backdrop-blur transition hover:border-violet-300/30 hover:bg-white">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-violet-700">{useCase.signal}</p>
                <h3 className="mt-8 text-xl font-semibold text-slate-950">{useCase.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">{useCase.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-900/10 bg-white/45 py-16 sm:py-24">
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-sky-700">Process</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">A clear path from question to working system.</h2>

          <ol className="relative mt-12 grid gap-4 md:grid-cols-5">
            <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-cyan-400/30 via-blue-400/50 to-violet-400/30 md:block" />
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-slate-900/10 bg-white/80 p-5">
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-cyan-300/30 bg-white font-mono text-xs text-sky-700">0{index + 1}</span>
                <h3 className="mt-6 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.035] to-violet-400/[0.08] p-7 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-700">Chasa Design + Chasa Labs</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Powered by Chasa Labs.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                Chasa Labs adds a digital systems layer to Chasa Design&apos;s architectural thinking, connecting spatial intent with tools that support coordination, performance, and long-term use.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <div className="flex-1 rounded-2xl border border-slate-900/10 bg-white/65 p-6 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Chasa Design</p>
                <p className="mt-3 text-xl font-semibold text-slate-950">Architecture</p>
              </div>
              <div className="flex items-center justify-center sm:w-24">
                <div className="h-10 w-px bg-gradient-to-b from-cyan-300 to-violet-300 sm:h-px sm:w-full" />
                <span className="absolute h-3 w-3 rounded-full border-2 border-[#edf3f5] bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]" />
              </div>
              <div className="flex-1 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-6 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-700/70">Chasa Labs</p>
                <p className="mt-3 text-xl font-semibold text-slate-950">Systems</p>
              </div>
            </div>
          </div>

          <article className="mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-900/10 bg-white/70 p-6 text-center backdrop-blur sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-700">Scope Clarity</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Digital-first. Design-led.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Chasa Labs focuses on digital systems, software tools, dashboards, automation concepts, and smart-building strategy. Physical installation or regulated work may involve registered professionals or specialist contractors.
            </p>
          </article>
        </Container>
      </section>

      <section className="border-t border-slate-900/10 bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 py-14 text-slate-950 sm:py-18">
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Have an idea for a smarter space or workflow?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-800 sm:text-base">Let&apos;s explore how digital systems can support your project, building, or business operations.</p>
            </div>
            <a href="https://www.linkedin.com/in/bradley-kipruto-2462611b7/" target="_blank" rel="noreferrer" className="inline-flex w-fit flex-none rounded-full border border-slate-900/15 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white">Contact Chasa Labs</a>
          </div>
        </Container>
      </section>
    </div>
  );
}