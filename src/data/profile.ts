// EDIT ME: replace every placeholder below with your real information.
export const profile = {
  name: "Sk Mohammad Asad",
  role: "AI/ML Enthusiast • AI Engineer • Web Developer",
  tagline:
    "I build modern, scalable and user-focused digital experiences using modern web technologies and intelligent solutions.",
  shortBio:
    "I'm a developer who enjoys turning complex problems into clean, reliable products. I care about performance, accessible interfaces and code that stays easy to maintain as it grows.",
  philosophy:
    "Ship small, measure, iterate. Good software is simple on the surface and honest underneath.",
  email: "shaikmohammadasad21@gmail.com",
  phone: "+91 8247619433",
  location: "Ponnur, Guntur, Andhra Pradesh",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/Asad-opss",
    linkedin: "https://www.linkedin.com/feed/",
    instagram: "[OPTIONAL]",
  },
  highlights: [
    { label: "Education", value: "Computer Science Student", note: "CGPA: 8.12" },
    { label: "Focus", value: "Full Stack Development", note: "React, Node.js, databases" },
    { label: "Interests", value: "AI / ML / Web", note: "Applied ML and product engineering" },
    { label: "Goal", value: "Building impactful technology", note: "Useful, fast, accessible" },
  ],
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "works", label: "Works" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;
