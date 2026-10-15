import { useState } from "react";
import { site } from "../data/site.js";
import Reveal from "./Reveal.jsx";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Flask",
  "SQLite",
  "Git and GitHub",
];

const principles = [
  {
    title: "Phone first",
    text: "Most of your customers will visit on a phone, so I design for that before anything else.",
  },
  {
    title: "Plain language",
    text: "No jargon. I tell you what each step involves and what it costs.",
  },
  {
    title: "You own everything",
    text: "The website, the content and the domain are yours. Nothing is locked away.",
  },
];

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="section section-tint" id="about">
      <div className="container about-grid">
        <Reveal className="about-photo">
          {!photoFailed && (
            <img
              src="images/me.jpg"
              alt={"Photo of " + site.name}
              onError={() => setPhotoFailed(true)}
            />
          )}
          {photoFailed && (
            <span className="about-initials">{site.initials}</span>
          )}
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">About me</p>
          <h2>Hi, I'm {site.name.split(" ")[0]}</h2>
          <p className="about-text">
            I'm a web developer based in Nigeria. I build with HTML, CSS,
            JavaScript and React, and with Python when a site needs a real
            backend, like bookings that must never double up. I learn by
            building real websites for the kinds of businesses around me, and
            I'm now taking on client projects.
          </p>

          <div className="chips chips-lg">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <ul className="principles">
            {principles.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
