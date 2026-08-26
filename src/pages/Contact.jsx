import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import DocumentTitle from "../components/DocumentTitle";
import { contact } from "../data/site";

export default function Contact() {
  return (
    <>
      <DocumentTitle title="Contact" />
      <PageHero
        eyebrow="Contact / Gaborone"
        title={<>Let’s build something<br />worth keeping.</>}
        copy="Tell us where the project is, what it needs to become, and where you are in the process."
        meta="24.6° S / 25.9° E"
        className="contact-hero"
      />

      <section className="contact-section">
        <div className="contact-primary">
          <Reveal>
            <p className="eyebrow">New work</p>
            <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}<span>↗</span></a>
            <p>
              A useful first note includes the project location, intended use, current stage,
              expected timeline and the decisions you need help making.
            </p>
          </Reveal>
        </div>

        <div className="contact-details">
          <Reveal className="contact-detail">
            <span>01 / Phone</span>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </Reveal>
          <Reveal className="contact-detail" delay={50}>
            <span>02 / Studio</span>
            <address>{contact.address.map((line) => <span key={line}>{line}</span>)}</address>
          </Reveal>
          <Reveal className="contact-detail" delay={100}>
            <span>03 / Social</span>
            <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </Reveal>
          <Reveal className="contact-detail contact-detail--labs" delay={150}>
            <span>04 / Digital systems</span>
            <Link to="/labs">Chasa Labs →</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
