import ginlarosaMp4 from '../assets/projects/videos/ginlarosa.mp4';
import ginlarosaPoster from '../assets/projects/posters/ginlarosa.png';

const drHazemMp4 = null; // Video was deleted
import drHazemPoster from '../assets/projects/posters/dr-hazem-sultan.png';

import advstoMp4 from '../assets/projects/videos/advsto.mp4';
import advstoPoster from '../assets/projects/posters/advsto.png';

const alnasserMp4 = null; // Video was deleted
import alnasserPoster from '../assets/projects/posters/al-nasser.png';

import badyaPoster from '../assets/projects/posters/badyauni.png';

// Reusable Project Showcase Dataset
export const PROJECTS_DATA = [
  {
    id: "alnasser",
    number: "01",
    title: "Al Nasser Tours",
    category: "Full-Stack Travel Platform",
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase", "Cloudinary"],
    url: "https://al-nasser-tours.vercel.app/",
    themeColor: "#b6ff00",
    videoMp4: alnasserMp4,
    poster: alnasserPoster,
  },
  {
    id: "dr-hazem-sultan",
    number: "02",
    title: "Dr. Hazem Sultan Clinic",
    category: "Full-Stack Medical Web App",
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase", "Cloudinary"],
    url: "https://www.drhazem-sultan.com/",
    themeColor: "#b6ff00",
    videoMp4: drHazemMp4,
    poster: drHazemPoster,
  },
  {
    id: "badya-university",
    number: "03",
    title: "Badya University",
    category: "Higher Education Portal",
    technologies: ["Angular 7", "TypeScript", "REST API", "Responsive UI"],
    url: "#",
    themeColor: "#b6ff00",
    videoMp4: null,
    poster: badyaPoster,
  },
  {
    id: "ginlarosa",
    number: "04",
    title: "Ginlarosa",
    category: "Shopify E-Commerce",
    technologies: ["Shopify", "Liquid", "UI/UX", "JavaScript", "Responsive Design"],
    url: "https://gilnarosa.com",
    themeColor: "#b6ff00",
    videoMp4: ginlarosaMp4,
    poster: ginlarosaPoster,
  },
  {
    id: "advsto",
    number: "05",
    title: "Advsto Adventurers",
    category: "Outdoor E-Commerce & Gear",
    technologies: ["Shopify", "UI Architecture", "Liquid", "Performance Optimization"],
    url: "https://advsto.sa/en-eg/",
    themeColor: "#b6ff00",
    videoMp4: advstoMp4,
    poster: advstoPoster,
  },
];
