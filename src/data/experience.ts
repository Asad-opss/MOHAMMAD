export type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  placeholder: boolean;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
};

// PLACEHOLDER DATA — replace with your real experience.
export const experience: ExperienceItem[] = [
  {
    year: "2026",
    role: "Full Stack Developer Intern",
    company: "[COMPANY NAME]",
    location: "[LOCATION]",
    duration: "[START] — [END]",
    placeholder: true,
    responsibilities: [
      "Built responsive web applications",
      "Developed REST APIs",
      "Worked with relational and document databases",
      "Improved application performance",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    achievements: ["[ADD A MEASURABLE RESULT]"],
  },
  {
    year: "2025",
    role: "[ROLE TITLE]",
    company: "[COMPANY / ORGANISATION]",
    location: "[LOCATION]",
    duration: "[START] — [END]",
    placeholder: true,
    responsibilities: ["[RESPONSIBILITY ONE]", "[RESPONSIBILITY TWO]", "[RESPONSIBILITY THREE]"],
    technologies: ["[TECH 1]", "[TECH 2]"],
    achievements: ["[ADD AN ACHIEVEMENT]"],
  },
];
