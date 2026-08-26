import { Link } from "react-router-dom";
import { contact } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid architectural-grid">
        <div className="footer-lead">
          <p className="eyebrow eyebrow--orange">Chasa Design</p>
          <h2>Architecture<br />Design<br />Delivery</h2>
        </div>

        <div className="footer-column">
          <p className="footer-label">Navigate</p>
          <Link to="/projects">Projects</Link>
          <Link to="/studio">Studio</Link>
          <Link to="/labs">Labs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <p className="footer-label">Connect</p>
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>

        <div className="footer-column footer-address">
          <p className="footer-label">Find us</p>
          <address>
            Block 8<br />
            Gaborone<br />
            Botswana
          </address>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Chasa Design © {year}</span>
        <span>Gaborone / Botswana</span>
        <Link to="/labs">Powered by Chasa Labs</Link>
      </div>
    </footer>
  );
}
