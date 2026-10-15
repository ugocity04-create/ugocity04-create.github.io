import { site, whatsappLink } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";

// The free-website banner. Turn it off with showOffer: false in site.js
export default function Offer() {
  if (!site.showOffer) return null;
  const firstName = site.name.split(" ")[0];

  return (
    <section className="offer">
      <div className="container">
        <Reveal className="offer-inner">
          <div>
            <p className="offer-tag">Limited offer</p>
            <h2>
              I'm building {site.freeSlots} free websites for local businesses
              this month
            </h2>
            <p>
              Tell me about your business and I'll build you a real website. You
              only pay for your domain name. If you're happy with it, I just ask
              for an honest testimonial.
            </p>
          </div>
          <a
            className="btn btn-sun"
            href={whatsappLink(
              "Hello " +
                firstName +
                ", I saw your free website offer. Here is my business: ",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="chat" /> Claim a free website
          </a>
        </Reveal>
      </div>
    </section>
  );
}
