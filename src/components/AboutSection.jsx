import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import portraitImg from "../assets/sssawwyy.png";
import "../styles/aboutSection.css";

const cinematicEase = [0.16, 1, 0.3, 1];

// Reusable word-by-word animated paragraph component (Optimized for performance)
function AnimatedParagraph({ text, delay = 0, isLead = false }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <p className={isLead ? "about-lead-paragraph" : ""}>{text}</p>;
  }

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: cinematicEase,
      },
    },
  };

  return (
    <motion.p
      className={`about-animated-paragraph ${isLead ? "about-lead-paragraph" : ""}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="about-word-wrap" style={{ display: "inline-block", marginRight: "0.25em" }}>
          <motion.span
            variants={wordVariants}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 1. Section Number: 0.00s
  const numberVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 0.7,
        ease: cinematicEase,
        delay: 0,
      },
    },
  };

  // 2. Heading: 0.15s
  const headingVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.5 : 0.85,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0.1 : 0.15,
      },
    },
  };

  // 4. Portrait: 0.45s
  const portraitVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.6 : 0.95,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0.2 : (isMobile ? 0.35 : 0.45),
      },
    },
  };

  return (
    <section id="about" className="about-section" aria-label="About Ahmed Elsawy">
      <div className="about-section__ambient" aria-hidden="true" />

      <div className="about-container">
        {/* LEFT COLUMN: CONTENT */}
        <div className="about-content">
          {/* 1. Section Number */}
          <motion.div
            className="about-number"
            variants={numberVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span className="about-number__line" aria-hidden="true" />
            <span>01</span>
          </motion.div>

          {/* 2. Main Heading */}
          <motion.h2
            className="about-heading"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span>A Developer</span>
            <span>Beyond One Role.</span>
          </motion.h2>

          {/* 3. About Paragraphs (Letter-by-Letter Staggered Stream) */}
          <div className="about-description">
            <AnimatedParagraph
              text="An ambitious and passionate Computer Engineering graduate who believes that becoming a strong Full-Stack Developer means understanding the different sides of software development — not just one role."
              delay={shouldReduceMotion ? 0 : 0.35}
              isLead={true}
            />
            <AnimatedParagraph
              text="Throughout university, I worked alongside my studies and gained hands-on experience across Front-End development, WordPress, Shopify, Zid, and UI design. I graduated with a Good overall grade, Very Good in my final year, and Excellent in my graduation project."
              delay={shouldReduceMotion ? 0 : (isMobile ? 0.45 : 1.35)}
            />
            <AnimatedParagraph
              text="These experiences strengthened my ability to learn quickly, adapt to new technologies, and approach challenges with a practical mindset. Now, I’m looking to deepen my professional experience and continue growing into a well-rounded Full-Stack Developer."
              delay={shouldReduceMotion ? 0 : (isMobile ? 0.65 : 2.45)}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: PORTRAIT */}
        <motion.div
          className="about-visual"
          variants={portraitVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="about-portrait-card">
            <img
              src={portraitImg}
              alt="Portrait of Ahmed Elsawy"
              className="about-portrait-img"
              loading="lazy"
              decoding="async"
              width="500"
              height="500"
            />
            {/* Subtle Geometric Neon Lime Accents */}
            <div className="about-visual-accent__corner-tl" aria-hidden="true" />
            <div className="about-visual-accent__corner-br" aria-hidden="true" />
            <div className="about-visual-accent__line" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
