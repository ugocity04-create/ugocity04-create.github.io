import { faqs } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container faq-wrap">
        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2>Things people usually ask me</h2>
        </Reveal>

        <Reveal delay={100} className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}