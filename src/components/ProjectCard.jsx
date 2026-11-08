import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project, index, totalProjects }) {
  const shouldReduceMotion = useReducedMotion();

  const {
    number,
    title,
    category,
    technologies,
    url,
    poster,
  } = project;



  return (
    <div
      className="project-card-sticky-wrapper"
      style={{
        zIndex: index + 10,
        "--card-idx": index,
      }}
    >
      <motion.article
        className="project-card project-card--video"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay: shouldReduceMotion ? 0 : index * 0.08,
        }}
        aria-label={`Project ${number}: ${title}`}
      >
        {/* Subtle decorative edge accents */}
        <div className="project-card__accent-top" aria-hidden="true" />
        <div className="project-card__corner-bl" aria-hidden="true" />

        {/* TOP: HEADER */}
        <div className="project-card__top">
          <div className="project-card__header">
            <span className="project-card__number">{number}</span>
            <span className="project-card__divider" aria-hidden="true" />
            <span className="project-card__category">{category}</span>
          </div>
          <h3 className="project-card__title">{title}</h3>
        </div>

        {/* MIDDLE: IMAGE VISUAL */}
        <div className="project-card__visuals project-card__visuals--video">
          <div className="project-video-wrapper">
            <img
              src={poster}
              alt={`Preview of ${title}`}
              className="project-video"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* BOTTOM: FOOTER */}
        <div className="project-card__bottom">
          <div className="project-card__tags" aria-label="Technologies used">
            {technologies.map((tech) => (
              <span key={tech} className="project-card__tag">
                {tech}
              </span>
            ))}
          </div>

          {url && url !== "#" && (
            <div className="project-card__actions">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label={`View ${title} live website (opens in a new tab)`}
              >
                <span>VIEW PROJECT</span>
                <FiArrowUpRight className="project-card__link-icon" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </motion.article>
    </div>
  );
}
