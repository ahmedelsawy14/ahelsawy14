import { motion, useReducedMotion } from "framer-motion";
import portraitImg from "../assets/sawwyyy.png";
import "../styles/introSection.css";

const cinematicEase = [0.16, 1, 0.3, 1];

export default function IntroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants with strict deterministic timing & reduced-motion fallback
  const centerTextVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.86,
      y: shouldReduceMotion ? 0 : 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.6 : 1.15,
        ease: cinematicEase,
        delay: 0,
      },
    },
  };

  const portraitVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.6 : 1.25,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0.2 : 1.5,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -90,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.6 : 1.0,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0.2 : 1.5,
      },
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 70,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.6 : 1.0,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0.4 : 1.8,
      },
    },
  };

  return (
    <section id="home" className="intro-section" aria-label="Portfolio Introduction">
      {/* Ambient background decoration */}
      <div className="intro-section__grain" aria-hidden="true" />
      <div className="intro-section__ambient-glow" aria-hidden="true" />

      <div className="intro-section__container">
        {/* 1. CENTER BACKGROUND NAME (Behind portrait) */}
        <div className="intro-background-name-wrapper">
          <motion.div
            className="intro-background-name"
            variants={centerTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden="true"
          >
            Elsawy
          </motion.div>
        </div>

        {/* 3. TOP-LEFT NAME */}
        <motion.div
          className="intro-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="intro-heading__accent-line" aria-hidden="true" />
          <div className="intro-heading__content">
            <span className="intro-heading__eyebrow">Portfolio Intro</span>
            <h1 className="intro-heading__title">
              <span>Ahmed</span>
              <span>Elsawy</span>
            </h1>
          </div>
        </motion.div>

        {/* 2. MAIN PORTRAIT */}
        <motion.div
          className="intro-portrait"
          variants={portraitVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={portraitImg}
            alt="Portrait of Ahmed Elsawy"
            className="intro-portrait__img"
            loading="eager"
            decoding="async"
            width="500"
            height="500"
          />
        </motion.div>

        {/* 4. RIGHT DESCRIPTION */}
        <motion.div
          className="intro-description"
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="intro-description__card">
            <div className="intro-description__corner-tl" aria-hidden="true" />
            <div className="intro-description__corner-br" aria-hidden="true" />
            
            <div className="intro-description__tag">
              <span className="intro-description__tag-dot" />
              <span>Overview</span>
            </div>

            <p className="intro-description__text">
              Creative developer focused on building refined digital experiences where technology, design, and visual storytelling come together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
