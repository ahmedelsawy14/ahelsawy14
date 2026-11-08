import { motion, useReducedMotion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiPhone,
  FiMessageCircle,
  FiArrowUpRight,
  FiArrowUp,
} from "react-icons/fi";
import { CONTACT_DATA } from "../data/contactData";
import "../styles/contactSection.css";

const cinematicEase = [0.16, 1, 0.3, 1];

// Map icon types to react-icons/fi components
function getContactIcon(iconType) {
  switch (iconType) {
    case "email":
      return <FiMail aria-hidden="true" />;
    case "linkedin":
      return <FiLinkedin aria-hidden="true" />;
    case "github":
      return <FiGithub aria-hidden="true" />;
    case "whatsapp":
      return <FiMessageCircle aria-hidden="true" />;
    case "phone":
      return <FiPhone aria-hidden="true" />;
    default:
      return <FiArrowUpRight aria-hidden="true" />;
  }
}

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  // Scroll to top with reduced motion check
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  // Animation variants
  const metaVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.6,
        ease: cinematicEase,
        delay: 0,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 0.8,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0 : 0.1 + i * 0.08,
      },
    }),
  };

  const ctaBtnVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.7,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0 : 0.45,
      },
    },
  };

  const introVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 0.75,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 25 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.6,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0 : 0.3 + i * 0.07,
      },
    }),
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.6,
        ease: cinematicEase,
        delay: shouldReduceMotion ? 0 : 0.65,
      },
    },
  };

  return (
    <section
      id="contact"
      className="contact-section"
      aria-label="Contact & Closing Statement"
    >
      {/* Subtle Atmospheric Radial Backdrop */}
      <div className="contact-ambient-glow" aria-hidden="true" />

      <div className="contact-container">
        {/* 1. SECTION META NUMBER (07 / CONTACT) */}
        <motion.header
          className="contact-meta"
          variants={metaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="contact-meta__number">{CONTACT_DATA.sectionNumber}</span>
          <span className="contact-meta__line" aria-hidden="true" />
          <span className="contact-meta__label">{CONTACT_DATA.sectionLabel}</span>
        </motion.header>

        {/* 2. ASYMMETRIC EDITORIAL LAYOUT */}
        <div className="contact-layout">
          {/* LEFT: GIANT STATEMENT & DIRECT CTA */}
          <div className="contact-statement">
            <h2 className="contact-heading" aria-label="Let's build something great.">
              {CONTACT_DATA.headlineLines.map((line, index) => (
                <motion.span
                  key={line.text}
                  custom={index}
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`contact-heading__line ${
                    line.isAccent ? "contact-heading__line--accent" : ""
                  }`}
                >
                  {line.text}
                </motion.span>
              ))}
            </h2>

            {/* Direct Conversation CTA Badge */}
            <motion.div
              variants={ctaBtnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <a
                href={CONTACT_DATA.primaryCta.href}
                className="contact-cta-btn"
                aria-label="Start a conversation with Ahmed Elsawy"
              >
                <span className="contact-cta-btn__dot" aria-hidden="true" />
                <span>{CONTACT_DATA.primaryCta.label}</span>
                <FiArrowUpRight className="contact-cta-btn__icon" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT: INTRO PARAGRAPH & HORIZONTAL EDITORIAL CONTACT ROWS */}
          <div className="contact-content">
            <motion.p
              className="contact-intro-text"
              variants={introVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {CONTACT_DATA.introText}
            </motion.p>

            <div
              className="contact-links-list"
              role="list"
              aria-label="Direct contact channels and social networks"
            >
              {CONTACT_DATA.links.map((link, index) => (
                <motion.div
                  key={link.id}
                  className="contact-row-wrapper"
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  role="listitem"
                >
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="contact-row"
                    aria-label={`${link.label}: ${link.value}${link.isExternal ? " (opens in a new tab)" : ""}`}
                  >
                    <div className="contact-row__left">
                      <span className="contact-row__icon">
                        {getContactIcon(link.iconType)}
                      </span>
                      <span className="contact-row__label">{link.label}</span>
                    </div>

                    <span className="contact-row__arrow" aria-hidden="true">
                      <FiArrowUpRight />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. MINIMAL FOOTER */}
        <motion.footer
          className="contact-footer"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="contact-footer__copyright">
            {CONTACT_DATA.footer.copyright}
          </div>


          <button
            type="button"
            className="contact-footer__back-to-top"
            onClick={handleBackToTop}
            aria-label="Scroll back to top of the page"
          >
            <span>{CONTACT_DATA.footer.backToTopLabel}</span>
            <FiArrowUp className="contact-footer__back-to-top-icon" aria-hidden="true" />
          </button>
        </motion.footer>
      </div>
    </section>
  );
}
