/**
 * Contact Information & Editorial Dataset
 * Single source of truth for all contact channels, social links, and closing metadata.
 */

export const CONTACT_DATA = {
  sectionNumber: "07",
  sectionLabel: "CONTACT",
  
  // Headline lines for staggered editorial reveal
  headlineLines: [
    { text: "LET'S", isAccent: false },
    { text: "BUILD", isAccent: false },
    { text: "SOMETHING", isAccent: false },
    { text: "GREAT.", isAccent: true },
  ],

  // Short personal statement
  introText:
    "Have a project in mind, a website to build, or an idea worth turning into something real? Let's talk.",

  // Primary Call-To-Action button
  primaryCta: {
    label: "START A CONVERSATION",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahes23596@gmail.com",
  },

  // Editorial Contact Links (Large interactive horizontal rows)
  links: [
    {
      id: "email",
      label: "EMAIL",
      value: "ahes23596@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahes23596@gmail.com",
      iconType: "email",
      isExternal: true,
    },
    {
      id: "linkedin",
      label: "LINKEDIN",
      value: "linkedin.com/in/ahmed-elsawy14",
      href: "https://www.linkedin.com/in/ahmed-elsawy14/",
      iconType: "linkedin",
      isExternal: true,
    },
    {
      id: "github",
      label: "GITHUB",
      value: "github.com/ahmedelsawy14",
      href: "https://github.com/ahmedelsawy14",
      iconType: "github",
      isExternal: true,
    },
    {
      id: "whatsapp",
      label: "WHATSAPP",
      value: "01014905010",
      href: "https://wa.me/201014905010",
      iconType: "whatsapp",
      isExternal: true,
    },
  ],

  // Minimal Footer Metadata
  footer: {
    copyright: "© 2026 Ahmed Elsawy. All rights reserved.",
    builtWith: "Crafted with React, Framer Motion & CSS",
    backToTopLabel: "BACK TO TOP",
  },
};
