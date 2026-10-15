const tools = [
  "HTML", "CSS", "JavaScript", "React", "Python", "Flask", "SQLite", "Vite", "Git", "GitHub",
];

// A slowly scrolling band of the tools I use.
export default function TechStrip() {
  // The list is shown twice so the loop has no gap
  const loop = [...tools, ...tools];
  return (
    <div className="strip" aria-label="Tools I use">
      <div className="strip-track">
        {loop.map((tool, i) => (
          <span key={tool + i}>{tool}</span>
        ))}
      </div>
    </div>
  );
}
