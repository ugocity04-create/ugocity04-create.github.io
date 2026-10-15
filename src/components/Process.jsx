import { site } from "../data/site.js";
import Reveal from "./Reveal.jsx";

const steps = [
  {
    title: "Chat",
    text: "Tell me about your business and what you need. A short WhatsApp chat is enough.",
  },
  {
    title: "Plan",
    text: "I send you what's included, the price and the timeline. You only say yes when it all makes sense.",
  },
  {
    title: "Build",
    text:
      "You see a live preview in about " +
      site.firstPreview +
      ", and tell me what to change.",
  },
  {
    title: "Launch",
    text: "I put it online, show you how it works, and stay around if you need help afterwards.",
  },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal>
          <p className="eyebrow">How it works</p>
          <h2>From first message to live website</h2>
        </Reveal>

        <ol className="steps">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} className="step">
              <span className="step-number">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
