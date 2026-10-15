import { useState } from "react";
import { site, whatsappLink } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";

const needs = [
  "A website for my business",
  "Online booking or ordering",
  "A listings or catalogue website",
  "Fix or redesign my current website",
  "Not sure yet",
];

export default function Contact() {
  const firstName = site.name.split(" ")[0];
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [need, setNeed] = useState(needs[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Builds a WhatsApp message from the form and opens WhatsApp
  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please tell me your name so I know who to reply to.");
      return;
    }
    setError("");

    const lines = [
      "Hello " +
        firstName +
        ", my name is " +
        name.trim() +
        (business.trim() ? " from " + business.trim() : "") +
        ".",
      "I need: " + need + ".",
    ];
    if (message.trim()) lines.push(message.trim());

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <Reveal>
          <p className="eyebrow eyebrow-light">Let's talk</p>
          <h2>Tell me about your business</h2>
          <p className="lead lead-light">
            No pressure and no long forms. Send me a message and I'll reply{" "}
            {site.replyTime} with ideas and a price.
          </p>

          <div className="contact-links">
            <a
              className="btn btn-sun"
              href={whatsappLink(
                "Hello " +
                  firstName +
                  ", I would like a website for my business.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="chat" /> WhatsApp {site.phoneDisplay}
            </a>
            <a className="btn btn-outline-light" href={"mailto:" + site.email}>
              <Icon name="mail" /> {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Your name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ada Obi"
                autoComplete="name"
              />
            </label>
            <label>
              Your business <span className="optional">(optional)</span>
              <input
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Ada's Hair Studio"
              />
            </label>
            <label>
              What do you need?
              <select value={need} onChange={(e) => setNeed(e.target.value)}>
                {needs.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              Anything else? <span className="optional">(optional)</span>
              <textarea
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A few words about what you have in mind"
              />
            </label>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn" type="submit">
              <Icon name="chat" /> Send on WhatsApp
            </button>
            <p className="form-note">
              This opens WhatsApp with your message ready to send.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
