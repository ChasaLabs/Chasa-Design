import { Link } from "react-router-dom";
import { contact, labsCapabilities } from "../data/site";
import LabsGraphic from "../components/LabsGraphic";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import DocumentTitle from "../components/DocumentTitle";

const systemsFlow = ["Drawings", "Data", "Dashboard", "Automation", "Insight"];
const process = ["Understand", "Map", "Draft / Design", "Build", "Coordinate", "Improve"];

export default function Labs() {
  return (
    <div className="labs-page">
      <DocumentTitle title="Chasa Labs" />
      <section className="labs-hero">
        <div className="labs-hero-grid architectural-grid" aria-hidden="true" />
        <div className="labs-hero-header">
          <p className="eyebrow eyebrow--orange">Chasa Labs</p>
          <span>Digital systems + built environment</span>
        </div>
        <Reveal className="labs-hero-title">
          <h1>Architecture<br />meets systems.</h1>
          <p>Built for smarter delivery.</p>
        </Reveal>
        <Reveal className="labs-hero-graphic" delay={100}>
          <LabsGraphic />
        </Reveal>
        <div className="labs-hero-footer">
          <span>Design / document / connect</span>
          <span>Chasa Design / technical arm</span>
        </div>
      </section>

      <section className="labs-intro">
        <p className="eyebrow">The premise</p>
        <Reveal>
          <h2>Better buildings need better information.</h2>
        </Reveal>
        <Reveal delay={80}>
          <p>
            Chasa Labs connects architecture, digital systems, electrical documentation,
            automation and smart-ready strategy for project teams, building owners and
            growing organisations.
          </p>
        </Reveal>
      </section>

      <section className="labs-capabilities section">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              index="02 / 05"
              label="Capability index"
              title="A technical layer for the built environment."
              copy="Tools and documentation that make project information easier to coordinate, use and improve."
            />
          </Reveal>
          <div className="labs-capability-list">
            {labsCapabilities.map((capability, index) => (
              <Reveal className="labs-capability" key={capability.title} delay={index * 60}>
                <span className="labs-capability-number">{capability.number}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <div className="labs-tags">
                  {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="systems-flow-section section--dark">
        <div className="systems-flow-grid architectural-grid" aria-hidden="true" />
        <div className="section-shell">
          <p className="eyebrow eyebrow--orange">03 / Information flow</p>
          <h2>From a line on a drawing<br />to an operational insight.</h2>
          <ol className="systems-flow">
            {systemsFlow.map((step, index) => (
              <Reveal as="li" key={step} delay={index * 70}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < systemsFlow.length - 1 && <i aria-hidden="true">↓</i>}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="labs-extensions section">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              index="04 / 05"
              label="Technical extensions"
              title="Electronics + renewable systems."
              copy="Early concepts, coordination and documentation support for connected and energy-aware environments."
            />
          </Reveal>
          <div className="extensions-grid">
            <Reveal className="extension-panel">
              <span>EXT / 01</span>
              <h3>Electronics</h3>
              <p>Control, sensing, low-voltage systems, equipment coordination and layout support.</p>
            </Reveal>
            <Reveal className="extension-panel" delay={80}>
              <span>EXT / 02</span>
              <h3>Renewable energy</h3>
              <p>Solar concepts, energy planning, building integration and coordinated documentation.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="labs-process">
        <div className="labs-process-top">
          <p className="eyebrow">05 / Working method</p>
          <h2>Understand the system.<br />Then make it useful.</h2>
        </div>
        <ol>
          {process.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
        <div className="scope-note">
          <span>Scope / clarity</span>
          <p>
            Chasa Labs provides digital tools, documentation support, workflow systems and
            smart-ready strategy. Statutory sign-off, physical installation and regulated
            engineering work may involve appropriately registered professionals or specialist contractors.
          </p>
        </div>
      </section>

      <section className="labs-contact">
        <div>
          <p className="eyebrow eyebrow--orange">Start a conversation</p>
          <h2>Have an idea for<br />a smarter workflow?</h2>
        </div>
        <div>
          <p>Explore how digital and technical systems can support your project, building or organisation.</p>
          <a href={contact.labsLinkedin} target="_blank" rel="noreferrer" className="button button--blue">Talk to Chasa Labs <span>↗</span></a>
          <Link to="/studio" className="text-link text-link--light">Return to the studio <span>→</span></Link>
        </div>
      </section>
    </div>
  );
}
