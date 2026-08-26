export default function SectionHeader({ index, label, title, copy, light = false }) {
  return (
    <header className={`section-header ${light ? "section-header--light" : ""}`}>
      <div className="section-header-index">
        {index && <span>{index}</span>}
        <span>{label}</span>
      </div>
      <div className="section-header-content">
        {title && <h2>{title}</h2>}
        {copy && <p>{copy}</p>}
      </div>
    </header>
  );
}
