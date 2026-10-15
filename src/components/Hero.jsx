import { site, projects, whatsappLink } from "../data/site.js";
import BrowserFrame from "./BrowserFrame.jsx";
import Icon from "./Icons.jsx";

export default function Hero() {
  const firstName = site.name.split(" ")[0];
  const art = projects.slice(0, 3);

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{site.role}</p>
          <h1>
            Websites that turn visitors into{" "}
            <span className="hl">customers</span>.
          </h1>
          <p className="hero-sub">
            I'm {firstName}. I design and build fast, phone-friendly websites
            for salons, restaurants, estate agents and other small businesses.
            Have a look at what I've built, then message me on WhatsApp.
          </p>

          <div className="hero-actions">
            <a className="btn" href="#work">
              See my work <Icon name="arrow" />
            </a>
            <a
              className="btn btn-ghost"
              href={whatsappLink(
                "Hello " +
                  firstName +
                  ", I would like a website for my business.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="chat" /> Chat on WhatsApp
            </a>
          </div>

          <ul className="hero-points">
            <li>
              <Icon name="check" /> {projects.length} live projects to explore
            </li>
            <li>
              <Icon name="check" /> Built for phones first
            </li>
            <li>
              <Icon name="check" /> Replies {site.replyTime}
            </li>
          </ul>
        </div>

        <div className="hero-art" aria-hidden="true">
          {art.map((project, i) => (
            <div className={"hero-card hero-card-" + i} key={project.id}>
              <BrowserFrame project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
