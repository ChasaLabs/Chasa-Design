import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import StatsStrip from "../components/StatsStrip";
import RegionGraphic from "../components/RegionGraphic";
import Reveal from "../components/Reveal";
import DocumentTitle from "../components/DocumentTitle";
import { methodology, principles, services } from "../data/site";
import drawingImage from "../assets/Drawing.png";
import materialsImage from "../assets/Materials.png";

export default function Studio() {
  return (
    <>
      <DocumentTitle title="Studio" />
      <PageHero
        eyebrow="Studio / Gaborone"
        title={<>Built around<br />place.</>}
        copy="An architectural practice working across design, documentation, coordination and delivery."
        meta="Established / 2004"
        className="studio-hero"
      />

      <section className="studio-introduction">
        <div className="studio-intro-copy">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <p className="studio-manifesto">
              Established in Gaborone in 2004, Chasa Design works across commercial,
              hospitality, healthcare, worship, sports, infrastructure, industrial and
              residential environments.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Our work connects architectural intent with the practical information,
              coordination and review needed to carry a project through delivery.
            </p>
          </Reveal>
        </div>
        <div className="studio-intro-image">
          <img src={drawingImage} alt="Chasa architectural drawing and drafting process" loading="lazy" />
          <span>Working drawing / technical coordination</span>
        </div>
        <StatsStrip />
      </section>

      <section className="section studio-principles">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              index="01 / 04"
              label="Practice principles"
              title="Architecture that works before it speaks."
              copy="Four linked principles guide how the studio reads a brief, forms an idea and carries it into the built environment."
            />
          </Reveal>
          <div className="principle-cards">
            {principles.map((principle, index) => (
              <Reveal className="principle-card" key={principle.title} delay={index * 60}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section section--dark">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              index="02 / 04"
              label="Capabilities"
              title="From the first line to the final review."
              copy="An integrated architectural service supported by coordinated technical information."
              light
            />
          </Reveal>
          <div className="services-index">
            {services.map((service, index) => (
              <Reveal className="service-row" key={service.title} delay={(index % 3) * 40}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="method-section section">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              index="03 / 04"
              label="Method"
              title="A deliberate route from brief to building."
            />
          </Reveal>
          <div className="method-layout">
            <div className="method-image">
              <img src={materialsImage} alt="Interior material study and architectural details" loading="lazy" />
              <span>Material / light / detail</span>
            </div>
            <ol className="method-list">
              {methodology.map((step, index) => (
                <Reveal as="li" key={step} delay={index * 45}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                  <i aria-hidden="true">→</i>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section studio-regional">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              index="04 / 04"
              label="Regional experience"
              title="One home base. A wider field of work."
              copy="Chasa’s current digital archive records work across Botswana, South Africa and Kenya, with a wider regional network that includes Rwanda."
            />
          </Reveal>
          <RegionGraphic />
        </div>
      </section>

      <section className="studio-labs-bridge">
        <div>
          <p className="eyebrow eyebrow--orange">Chasa / Labs</p>
          <h2>Architecture, extended by systems.</h2>
        </div>
        <p>Chasa Labs supports digital workflows, technical documentation and smart-ready thinking alongside the architectural practice.</p>
        <Link to="/labs" className="button button--blue">Explore Labs <span>↗</span></Link>
      </section>
    </>
  );
}
