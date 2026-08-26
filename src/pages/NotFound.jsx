import { Link } from "react-router-dom";
import DocumentTitle from "../components/DocumentTitle";

export default function NotFound() {
  return (
    <section className="not-found architectural-grid">
      <DocumentTitle title="Page not found" />
      <p className="eyebrow">Error / 404</p>
      <h1>That page isn’t<br />on this drawing.</h1>
      <Link to="/" className="button button--dark">Return home <span>→</span></Link>
    </section>
  );
}
