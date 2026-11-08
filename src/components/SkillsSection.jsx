import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SKILLS_DATA } from "../data/skillsData";
import SkillCard from "./SkillCard";
import "../styles/skillsSection.css";

export default function SkillsSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScrollDistance, setMaxScrollDistance] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Connect vertical page scroll to scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the exact horizontal translation distance based on rendered track width
  useEffect(() => {
    const updateScrollDistance = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      // Extra right breathing room so the last card finishes in full view
      const extraOffset = window.innerWidth < 768 ? 40 : 120;
      const distance = Math.max(0, trackWidth - viewportWidth + extraOffset);
      setMaxScrollDistance(distance);
    };

    updateScrollDistance();
    window.addEventListener("resize", updateScrollDistance);
    return () => window.removeEventListener("resize", updateScrollDistance);
  }, []);

  // Map vertical scroll progress (0 -> 1) to horizontal translation (0 -> -maxScrollDistance)
  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `-${maxScrollDistance}px`]
  );

  return (
    <section
      id="skills"
      ref={containerRef}
      className="skills-scroll-container"
      aria-label="Skills & Capabilities Showcase"
    >
      <div className="skills-sticky-viewport">
        {/* Subtle Ambient Radial Glow */}
        <div className="skills-ambient-glow" aria-hidden="true" />

        {/* Top-Left Section Meta */}
        <header className="skills-section-meta">
          <span className="skills-meta-number">06</span>
          <span className="skills-meta-line" aria-hidden="true" />
          <span className="skills-meta-title">TOOLS I USE</span>
        </header>

        {/* Scroll-Driven Horizontal Track */}
        <div className="skills-track-wrapper">
          {/* Huge Oversized Background Title Sitting Behind Cards */}
          <div className="skills-giant-bg-title" aria-hidden="true">
            <div className="skills-marquee-content">
              <span>TOOLS I USE • </span>
              <span>TOOLS I USE • </span>
              <span>TOOLS I USE • </span>
              <span>TOOLS I USE • </span>
            </div>
          </div>

          <motion.div
            ref={trackRef}
            className="skills-track"
            style={shouldReduceMotion ? { x: 0 } : { x: xTransform }}
            role="region"
            aria-label="Horizontal skills cards sequence"
          >
            {SKILLS_DATA.map((category, index) => (
              <SkillCard
                key={category.id}
                skillCategory={category}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
