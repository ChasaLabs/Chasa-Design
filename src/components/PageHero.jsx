export default function PageHero({ eyebrow, title, copy, meta, children, dark = false, className = "" }) {
  return (
    <section className={`page-hero ${dark ? "page-hero--dark" : ""} ${className}`.trim()}>
      <div className="page-hero-grid architectural-grid" aria-hidden="true" />
      <div className="page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="page-hero-footer">
          {copy && <p>{copy}</p>}
          {meta && <span>{meta}</span>}
        </div>
        {children}
      </div>
    </section>
  );
}
