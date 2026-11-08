export default function SkillCard({ skillCategory, index }) {
  const { number, total, title, category, description, skills } = skillCategory;

  return (
    <article
      className="skill-card"
      aria-label={`Skill Category ${number}: ${title}`}
      tabIndex={0}
    >
      {/* Subtle corner and top geometric accents */}
      <div className="skill-card__accent-top" aria-hidden="true" />
      <div className="skill-card__corner-tl" aria-hidden="true" />
      <div className="skill-card__corner-br" aria-hidden="true" />

      {/* Card Header */}
      <header className="skill-card__header">
        <div className="skill-card__index">
          <span className="skill-card__index-current">{number}</span>
          <span className="skill-card__index-sep">/</span>
          <span className="skill-card__index-total">{total}</span>
        </div>
        <span className="skill-card__category">{category}</span>
      </header>

      {/* Main Title & Description */}
      <div className="skill-card__body">
        <h3 className="skill-card__title">{title}</h3>
        <p className="skill-card__description">{description}</p>
      </div>

      <div className="skill-card__divider" aria-hidden="true" />

      {/* Skill Items Grid */}
      <div className="skill-card__list-wrapper">
        <span className="skill-card__list-label">TECHNOLOGIES &amp; METHODS</span>
        <ul className="skill-card__list">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className={`skill-card__item ${skill.highlight ? "skill-card__item--highlight" : ""}`}
            >
              <span
                className={`skill-card__item-bullet ${
                  skill.highlight ? "skill-card__item-bullet--neon" : ""
                }`}
                aria-hidden="true"
              >
                &bull;
              </span>
              <span className="skill-card__item-name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
