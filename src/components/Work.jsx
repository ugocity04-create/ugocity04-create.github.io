import { projects } from "../data/site.js";
import BrowserFrame from "./BrowserFrame.jsx";
import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <p className="eyebrow">My work</p>
          <h2>Three websites you can open right now</h2>
          <p className="lead">
            Each one solves a real problem a small business has. Tap through them on your
            phone, the way your customers would.
          </p>
        </Reveal>

        <div className="work-list">
          {projects.map((project, i) => (
            <Reveal key={project.id} className={i % 2 ? "work-row flip" : "work-row"}>
              <div className="work-visual">
                <BrowserFrame project={project} />
              </div>

              <div className="work-copy">
                <p className="work-kind">{project.kind}</p>
                <h3>{project.name}</h3>
                <p className="work-problem">{project.problem}</p>

                <ul className="ticks">
                  {project.highlights.map((line) => (
                    <li key={line}>
                      <Icon name="check" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="chips">
                  {project.tech.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <div className="work-links">
                  {project.live && (
                    <a className="btn btn-small" href={project.live} target="_blank" rel="noreferrer">
                      View live site <Icon name="arrow" />
                    </a>
                  )}
                  {project.code && (
                    <a className="btn btn-small btn-ghost" href={project.code} target="_blank" rel="noreferrer">
                      See the code
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
