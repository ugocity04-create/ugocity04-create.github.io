import { services } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";

export default function Services() {
  return (
    <section className="section section-tint" id="services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">What I can build for you</p>
          <h2>Simple, clear and made for your customers</h2>
        </Reveal>

        <div className="service-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} className="service-card">
              <span className="service-icon">
                <Icon name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              {service.price && <p className="service-price">{service.price}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
