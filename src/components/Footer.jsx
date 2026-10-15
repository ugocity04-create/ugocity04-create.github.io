import { site } from "../data/site.js";
import Icon from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="footer-role">{site.role}</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {site.tiktok && (
            <a href={site.tiktok} target="_blank" rel="noreferrer">
              TikTok
            </a>
          )}
          <a href={"mailto:" + site.email}>Email</a>
        </nav>

        <a className="to-top" href="#top">
          Back to top <Icon name="up" />
        </a>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 {site.name}. Built with React.</p>
        </div>
      </div>
    </footer>
  );
}
