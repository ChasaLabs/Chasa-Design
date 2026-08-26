import { projects } from "../data/projects";
import { regions } from "../data/site";

export default function StatsStrip() {
  const projectCountries = new Set(projects.map((project) => project.location.split(", ").at(-1)));
  const stats = [
    ["2004", "Established in Gaborone"],
    [String(projects.length).padStart(2, "0"), "Projects in the digital archive"],
    [String(projectCountries.size).padStart(2, "0"), "Countries represented in the archive"],
    [String(regions.length).padStart(2, "0"), "Regional practice nodes"],
  ];

  return (
    <div className="stats-strip">
      {stats.map(([value, label]) => (
        <div className="stat" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
