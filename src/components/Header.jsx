import { useState } from "react";
import { site, whatsappLink } from "../data/site.js";
import Icon from "./Icons.jsx";

const links = [
  ["work", "Work"],
  ["services", "Services"],
  ["process", "Process"],
  ["about", "About"],
  ["faq", "FAQ"],
  ["contact", "Contact"],
];

export default function Header({ active }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark">{site.initials}</span>
          <span className="brand-name">{site.name}</span>
        </a>

        <nav className={open ? "nav open" : "nav"} aria-label="Main">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              className={active === id ? "active" : ""}
              onClick={close}
            >
              {label}
            </a>
          ))}
          <a
            className="btn btn-small nav-cta"
            href={whatsappLink(
              "Hello " +
                site.name.split(" ")[0] +
                ", I would like a website for my business.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="chat" /> WhatsApp me
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
