import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS_DATA } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import "../styles/selectedWork.css";

const cinematicEase = [0.16, 1, 0.3, 1];

export default function SelectedWork() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll entrance variants
  const numberVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.6, ease: cinematicEase, delay: 0 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0.4 : 0.8, ease: cinematicEase, delay: 0.12 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.4 : 0.75, ease: cinematicEase, delay: 0.22 },
    },
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="selected-work-section"
      aria-label="Selected Work and Stacked Project Showcase"
    >
      {/* Subtle Ambient Background Light */}
      <div className="selected-work-ambient" aria-hidden="true" />

      <div className="selected-work-container">
        {/* SECTION HEADER */}
        <header className="selected-work-header">
          {/* 1. Section Number */}
          <motion.div
            className="selected-work-number"
            variants={numberVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span className="selected-work-number__line" aria-hidden="true" />
            <span>05</span>
          </motion.div>

          {/* 2. Main Heading with Outlined Neon Treatment */}
          <motion.h2
            className="selected-work-heading"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span>Selected</span>
            <span>Work</span>
          </motion.h2>

          {/* 3. Supporting Text */}
          <motion.p
            className="selected-work-subtitle"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            A curated showcase of real-world web applications, e-commerce platforms, and digital systems built with performance and precision.
          </motion.p>
        </header>

        {/* STACKED PROJECTS DECK */}
        <div className="projects-stack" role="feed" aria-label="Stacked Projects Showcase">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalProjects={PROJECTS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
