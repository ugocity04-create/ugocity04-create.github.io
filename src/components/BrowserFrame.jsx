import { useState } from "react";

// A small "browser window" showing a project screenshot.
// If the screenshot file does not exist yet, a coloured placeholder is shown.
export default function BrowserFrame({ project }) {
  const [failed, setFailed] = useState(false);
  const address = project.live
    ? project.live.replace("https://", "").replace(/\/$/, "")
    : "sample-project";

  return (
    <div className="frame">
      <div className="frame-bar">
        <i />
        <i />
        <i />
        <span>{address}</span>
      </div>
      <div
        className="frame-body"
        style={{ background: "linear-gradient(135deg, " + project.accent + ", " + project.accent2 + ")" }}
      >
        {!failed && (
          <img
            src={project.shot}
            alt={"Screenshot of the " + project.name + " website"}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
        {failed && (
          <div className="frame-skel">
            <span className="frame-mono">{project.name.charAt(0)}</span>
            <b />
            <b />
            <b />
          </div>
        )}
      </div>
    </div>
  );
}
