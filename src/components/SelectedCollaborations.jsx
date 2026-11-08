import { useState, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import alNasserLogo from "../assets/Companies/logo.png";
import advstoLogo from "../assets/Companies/logo0.webp";
import sultanLogo from "../assets/Companies/logo1.webp";
import badyaLogo from "../assets/Companies/logo2.webp";
import ginlarosaLogo from "../assets/Companies/logo3.avif";
import esmartLogo from "../assets/Companies/logo4.webp";
import logo5 from "../assets/Companies/logo5.png";
import logo6 from "../assets/Companies/logo6.webp";
import logo7 from "../assets/Companies/logo7.png";
import logo8 from "../assets/Companies/logo8.jpg";
import logo9 from "../assets/Companies/logo9.png";
import "../styles/selectedCollaborations.css";

const cinematicEase = [0.16, 1, 0.3, 1];

// Reusable Collaborations Dataset with all company assets
export const COMPANIES = [
  {
    id: "esmart",
    name: "E Smart Soft",
    category: "Software & Technology",
    role: "Front-End Developer",
    highlights: (
      <div className="collab-rich-text">
        <p>Worked with <strong>eSmart Soft</strong> on multiple projects, gaining hands-on experience in front-end development, UI/UX, data handling, and enterprise web applications.</p>
        <p>During my time with the team, I contributed to projects including:</p>
        <ul>
          <li><strong>Badya University</strong></li>
          <li><strong>Egyptian Academy of Cinema & Television</strong></li>
          <li><strong>Company Signature Design</strong></li>
        </ul>
        <p>The experience strengthened my ability to work within a professional development team, understand real-world project requirements, and translate designs into functional web interfaces.</p>
        <p><strong>Tools & Technologies:</strong> Figma · HTML · CSS3 · JavaScript · TypeScript · Angular 7 · HTTP</p>
      </div>
    ),
    logo: esmartLogo,
    alt: "E-Smart Soft official logo",
  },
  {
    id: "alnasser",
    name: "Al Nasser Tours",
    category: "Travel & Tourism",
    role: "Full-Stack Developer",
    highlights: (
      <div className="collab-rich-text">
        <p>Developed a complete tourism website for <strong>Al Nasser Tours</strong>, focused on presenting travel packages, hotel prices, available destinations, and recommended hotels for each destination.</p>
        <ul>
          <li>Built a responsive landing page to introduce the company and its services.</li>
          <li>Developed destination and hotel sections with dynamic pricing and content.</li>
          <li>Built an <strong>admin dashboard</strong> allowing the team to continuously add destinations and hotels.</li>
          <li>Enabled administrators to update hotel prices whenever changes occur.</li>
          <li>Integrated the website with a backend database for dynamic content management.</li>
          <li>Added image management for destinations and hotels.</li>
          <li>Created a user-friendly experience for exploring destinations and making booking inquiries.</li>
        </ul>
        <p><strong>Technologies:</strong> React · Vite · Tailwind CSS · Firebase · Cloudinary</p>
      </div>
    ),
    logo: alNasserLogo,
    alt: "Al Nasser Tours official logo",
  },
  {
    id: "advsto",
    name: "Advisto",
    category: "E-Commerce",
    role: "E-commerce Developer",
    highlights: (
      <div className="collab-rich-text">
        <p>Worked on improving and developing the <strong>Advisto</strong> e-commerce store on the <strong>Zid</strong> platform.</p>
        <ul>
          <li>Analyzed the existing store's <strong>performance and SEO</strong>.</li>
          <li>Identified areas affecting the customer experience and overall usability.</li>
          <li>Improved the store's performance and loading experience.</li>
          <li>Enhanced the customer journey and overall storefront experience.</li>
          <li>Implemented <strong>multi-language support</strong> for the store.</li>
          <li>Created and configured an <strong>English version</strong> of the storefront.</li>
          <li>Improved the overall structure and presentation of the store to provide a more professional experience.</li>
        </ul>
        <p><strong>Platform:</strong> Zid<br/><strong>Focus:</strong> Performance · SEO · UX · Localization · E-commerce</p>
      </div>
    ),
    logo: advstoLogo,
    alt: "Advisto Store logo",
  },
  {
    id: "sultan",
    name: "Dr. Hazem Sultan Clinic",
    category: "Healthcare",
    role: "Full-Stack Developer",
    highlights: (
      <div className="collab-rich-text">
        <p>Developed a complete website for a medical clinic, designed to introduce the doctor and clinic services while providing an interactive experience for patients.</p>
        <ul>
          <li>Built a responsive landing page for the clinic.</li>
          <li>Developed a dynamic <strong>services section</strong> managed through an admin dashboard.</li>
          <li>Added <strong>Before & After</strong> image galleries to showcase treatment results.</li>
          <li>Enabled the admin to add and manage clinic updates and content.</li>
          <li>Created a section for the latest clinic and doctor news.</li>
          <li>Implemented a session booking flow for patients.</li>
          <li>Integrated Firebase for data management and Cloudinary for image handling.</li>
        </ul>
        <p><strong>Technologies:</strong> React · Vite · JavaScript · Tailwind CSS · Firebase · Cloudinary</p>
      </div>
    ),
    logo: sultanLogo,
    alt: "Dr. Hazem Sultan Clinic logo",
  },
  {
    id: "badya",
    name: "Badya University",
    category: "Higher Education",
    role: "Front-End Developer — eSmart Soft",
    highlights: (
      <div className="collab-rich-text">
        <p>Contributed as part of the <strong>eSmart Soft</strong> team to the development of Badya University's student platform.</p>
        <ul>
          <li>Worked on the <strong>student registration and login system</strong>.</li>
          <li>Connected the application with the <strong>database</strong>.</li>
          <li>Implemented <strong>authorization and access control</strong> for the student dashboard.</li>
          <li>Developed and integrated front-end interfaces using <strong>Angular 7 and TypeScript</strong>.</li>
          <li>Worked within a team environment on a large-scale university platform.</li>
        </ul>
        <p><strong>Technologies:</strong> TypeScript · Angular 7</p>
      </div>
    ),
    logo: badyaLogo,
    alt: "Badya University official logo",
  },
  {
    id: "ginlarosa",
    name: "Gilnarosa",
    category: "Fashion & Lifestyle",
    role: "Shopify Developer",
    highlights: (
      <div className="collab-rich-text">
        <p>Worked on building and customizing an e-commerce store for <strong>Gilnarosa</strong>, a cosmetics brand, using Shopify.</p>
        <ul>
          <li>Customized the Shopify theme to match the brand's visual identity.</li>
          <li>Developed custom sections to extend the theme beyond its default capabilities.</li>
          <li>Connected custom sections with the store's existing data and content structure.</li>
          <li>Customized the storefront experience to create a more professional and polished interface.</li>
          <li>Optimized the store to ensure a stable and production-ready experience.</li>
        </ul>
        <p><strong>Technologies:</strong> Shopify · Liquid · JSON · HTML · CSS · JavaScript</p>
      </div>
    ),
    logo: ginlarosaLogo,
    alt: "Gilnarosa official logo",
  },
  {
    id: "businessly",
    name: "Businessly",
    category: "E-Commerce",
    role: "Web Developer",
    highlights: (
      <div className="collab-rich-text">
        <p>I had the opportunity to contribute to a variety of projects with <strong>Businessly</strong>, including <strong>MSFIT</strong>, as well as several projects and e-commerce stores built using <strong>Shopify, WordPress, and Zid</strong>. I also worked on custom-coded solutions and contributed to developing and improving different digital experiences across multiple platforms.</p>
        <p><strong>Technologies & Platforms:</strong> Shopify · WordPress · Zid · Custom Coding</p>
      </div>
    ),
    logo: logo5,
    alt: "Businessly logo",
  },
  {
    id: "company6",
    name: "Naturel",
    category: "E-Commerce",
    role: "Shopify Developer",
    highlights: (
      <div className="collab-rich-text">
        <p>Worked on preparing and developing the <strong>Naturel</strong> e-commerce store on Shopify, focusing on creating a structured, reliable, and customer-friendly storefront.</p>
        <ul>
          <li>Organized and structured the store's content and data.</li>
          <li>Prepared the storefront for production and daily operation.</li>
          <li>Improved the overall presentation and customer experience.</li>
          <li>Focused on creating a smooth and professional shopping experience.</li>
        </ul>
        <p><strong>Platform:</strong> Shopify</p>
      </div>
    ),
    logo: logo6,
    alt: "Naturel logo",
  },
  {
    id: "company7",
    name: "Ribbons",
    category: "E-Commerce",
    role: "E-commerce Developer",
    highlights: (
      <div className="collab-rich-text">
        <p>Worked on the <strong>Ribbons</strong> flower store on the Zid platform, focusing on organizing the store's data and preparing the storefront for a professional customer experience.</p>
        <ul>
          <li>Organized and structured the store's data.</li>
          <li>Prepared the storefront for production and daily operation.</li>
          <li>Improved the overall organization and presentation of the store.</li>
          <li>Focused on delivering a smooth and professional customer experience.</li>
        </ul>
        <p><strong>Platform:</strong> Zid</p>
      </div>
    ),
    logo: logo7,
    alt: "Ribbons logo",
  },
  {
    id: "company8",
    name: "Egyptian Academy of Cinema & TV",
    category: "Education & Media",
    role: "UI/UX & Front-End Support",
    highlights: (
      <div className="collab-rich-text">
        <p>Contributed with <strong>eSmart Soft</strong> to the development and presentation of a new digital experience for the Egyptian Academy of Cinema & Television.</p>
        <ul>
          <li>Analyzed the existing website and identified areas for improvement.</li>
          <li>Created the initial <strong>UI/UX concepts and interface designs using Figma</strong>.</li>
          <li>Structured and analyzed the website's data and content for the new design.</li>
          <li>Prepared a dedicated <strong>data management portal</strong> for presenting and organizing the project requirements.</li>
          <li>Prepared the project presentation and explained the technical and contractual details.</li>
        </ul>
        <p><strong>Tools & Technologies:</strong> Figma</p>
      </div>
    ),
    logo: logo8,
    alt: "Egyptian Academy of Cinema logo",
  },
  {
    id: "company9",
    name: "Meat Scan",
    category: "Academic",
    role: "Full-Stack Developer · AI/ML",
    highlights: (
      <div className="collab-rich-text">
        <p>Developed <strong>Meat Scan</strong>, an AI-powered web application designed to analyze meat images and classify their freshness level as <strong>Fresh, Semi-Fresh, or Spoiled</strong>.</p>
        <ul>
          <li>Built the front-end using <strong>HTML5, CSS3, and Vanilla JavaScript</strong>.</li>
          <li>Developed the backend API using <strong>Python and Flask</strong>.</li>
          <li>Implemented image prediction through a trained <strong>Convolutional Neural Network (CNN)</strong>.</li>
          <li>Built and trained the classification model using <strong>TensorFlow and Keras</strong>.</li>
          <li>Implemented image preprocessing and resizing using <strong>Pillow (PIL)</strong>.</li>
          <li>Used <strong>NumPy</strong> for numerical processing and preparing image data for the model.</li>
          <li>Connected the front-end with the AI backend through API requests.</li>
          <li>Implemented <strong>Flask-CORS</strong> to enable communication between the client and server.</li>
          <li>The trained model processes uploaded images and returns the predicted freshness category to the user.</li>
        </ul>
        <p><strong>Technologies:</strong> Python · Flask · TensorFlow · Keras · NumPy · Pillow · HTML5 · CSS3 · JavaScript<br/><strong>AI:</strong> CNN · Computer Vision · Image Classification · Deep Learning</p>
      </div>
    ),
    logo: logo9,
    alt: "Meat Scan Graduation Project logo",
  },
];

export default function SelectedCollaborations() {
  const [activeCompany, setActiveCompany] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const rectRef = useRef(null);

  // Handle cursor spotlight over the marquee
  const handleMouseMove = (e) => {
    if (!sectionRef.current || shouldReduceMotion || !rectRef.current) return;
    const rect = rectRef.current;
    sectionRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleMouseEnter = () => {
    if (sectionRef.current) {
      rectRef.current = sectionRef.current.getBoundingClientRect();
    }
  };

  // Staggered Scroll Entrance Variants
  const numberVariants = {
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

  const headingVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 0.8,
        ease: cinematicEase,
        delay: 0.12,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 0.75,
        ease: cinematicEase,
        delay: 0.22,
      },
    },
  };

  const marqueeContainerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.5 : 0.9,
        ease: cinematicEase,
        delay: 0.32,
      },
    },
  };

  // Repeated list for seamless infinite loop (x3 ensures flawless wrap on ultra-wide screens)
  const marqueeItems = [...COMPANIES, ...COMPANIES, ...COMPANIES];

  return (
    <section
      id="collaborations"
      ref={sectionRef}
      className="collab-section"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      aria-label="Selected Collaborations"
    >
      {/* Subtle background ambient spotlight following cursor */}
      {!shouldReduceMotion && (
        <div className="collab-spotlight" aria-hidden="true" />
      )}

      {/* Atmospheric ambient glow */}
      <div className="collab-ambient-glow" aria-hidden="true" />

      <div className="collab-container">
        {/* SECTION HEADER */}
        <header className="collab-header">
          {/* 1. Section Number */}
          <motion.div
            className="collab-number"
            variants={numberVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span className="collab-number__line" aria-hidden="true" />
            <span>04</span>
          </motion.div>

          {/* 2. Main Heading with Outlined Neon Treatment */}
          <motion.h2
            className="collab-heading"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span>Selected</span>
            <span>Collaborations</span>
          </motion.h2>

          {/* 3. Supporting Text */}
          <motion.p
            className="collab-subtitle"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            Companies &amp; brands I&rsquo;ve had the opportunity to work with.
          </motion.p>
        </header>

        {/* 4. INFINITE LOGO MARQUEE */}
        <motion.div
          className="collab-marquee-wrapper"
          variants={marqueeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setActiveCompany(null);
          }}
        >
          {/* Gradient fade masks for cinematic edges */}
          <div
            className="collab-marquee-fade collab-marquee-fade--left"
            aria-hidden="true"
          />
          <div
            className="collab-marquee-fade collab-marquee-fade--right"
            aria-hidden="true"
          />

          <div
            className={`collab-marquee-track ${isPaused ? "collab-marquee-track--paused" : ""}`}
            role="region"
            aria-label="Partner company logos slider"
          >
            {marqueeItems.map((comp, idx) => {
              const isActive = activeCompany?.id === comp.id;
              return (
                <div
                  key={`${comp.id}-${idx}`}
                  className={`collab-card ${isActive ? "collab-card--active" : ""}`}
                  onMouseEnter={() => setActiveCompany(comp)}
                  onTouchStart={() => {
                    setIsPaused(true);
                    setActiveCompany(comp);
                  }}
                  onClick={() => {
                    setIsPaused(true);
                    setActiveCompany(comp);
                  }}
                  onFocus={() => {
                    setIsPaused(true);
                    setActiveCompany(comp);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${comp.name} - ${comp.role}`}
                >
                  {/* Subtle corner detail */}
                  <div className="collab-card__corner-tl" aria-hidden="true" />
                  <div className="collab-card__corner-br" aria-hidden="true" />

                  <div className="collab-card__inner">
                    {comp.logoType === "custom" ? (
                      comp.customSvg
                    ) : (
                      <img
                        src={comp.logo}
                        alt={comp.alt || `${comp.name} logo`}
                        className="collab-card__logo-img"
                        loading="lazy"
                        decoding="async"
                        style={{ objectFit: "contain" }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 5. ACTIVE COMPANY INFORMATION AREA */}
        <div className="collab-info-area" aria-live="polite">
          <AnimatePresence mode="wait">
            {activeCompany ? (
              <motion.div
                key={activeCompany.id}
                className="collab-info-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: cinematicEase }}
              >
                <div className="collab-info-header">
                  <div className="collab-info-meta">
                    <span className="collab-info-dot" aria-hidden="true" />
                    <span className="collab-info-name">
                      {activeCompany.name}
                    </span>
                  </div>
                  <div className="collab-info-role">{activeCompany.role}</div>
                </div>

                <div className="collab-info-divider" aria-hidden="true" />

                <div className="collab-info-highlights">
                  {activeCompany.highlights}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="neutral-state"
                className="collab-info-neutral"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <span className="collab-info-neutral-line" aria-hidden="true" />
                <span className="collab-info-neutral-text">
                  Selected collaborations • Hover over a logo to explore project
                  details
                </span>
                <span className="collab-info-neutral-line" aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
