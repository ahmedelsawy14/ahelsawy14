import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import SelectedCollaborations from "./components/SelectedCollaborations";
import SelectedWork from "./components/SelectedWork";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ParticleBackground from "./components/ParticleBackground";
import { FaWhatsapp } from "react-icons/fa";
import "./styles/global.css";

function App() {
  return (
    <main>
      {/* 1. Hero Section */}
      <IntroSection />

      {/* 2. Post-Hero Sections with Cinematic Cosmic Particle Background */}
      <div className="post-hero-container">
        <ParticleBackground />
        <AboutSection />
        <SelectedCollaborations />
        <SelectedWork />
        <SkillsSection />
        <ContactSection />
      </div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/201014905010"
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </main>
  );
}

export default App;
