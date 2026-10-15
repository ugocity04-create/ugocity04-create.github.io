import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TechStrip from "./components/TechStrip.jsx";
import Work from "./components/Work.jsx";
import Services from "./components/Services.jsx";
import Offer from "./components/Offer.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import { useActiveSection } from "./hooks/useActiveSection.js";

// The sections the menu can highlight (kept outside the component so it never changes)
const SECTION_IDS = ["work", "services", "process", "about", "faq", "contact"];

export default function App() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <ScrollProgress />
      <Header active={active} />
      <main>
        <Hero />
        <TechStrip />
        <Work />
        <Services />
        <Offer />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}