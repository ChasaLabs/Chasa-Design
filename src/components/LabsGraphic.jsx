const nodes = ["Design", "Document", "Connect", "Monitor", "Understand", "Improve"];

export default function LabsGraphic() {
  return (
    <div className="labs-graphic">
      <div className="labs-orbit" aria-hidden="true">
        <span className="orbit orbit-a" />
        <span className="orbit orbit-b" />
        <span className="orbit-core">CL</span>
      </div>
      <ol className="labs-flow">
        {nodes.map((node, index) => (
          <li key={node}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{node}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
