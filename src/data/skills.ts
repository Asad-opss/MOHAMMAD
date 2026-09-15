export type SkillCategory = {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    description: "Core languages I use to think and build.",
    skills: [
      { name: "C", level: 75 },
      { name: "Java", level: 78 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    description: "Interfaces that feel fast and look intentional.",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "React", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    description: "APIs and services that stay predictable under load.",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    description: "Modelling and querying data the right way.",
    skills: [
      { name: "MySQL", level: 78 },
      { name: "PostgreSQL", level: 76 },
      { name: "MongoDB", level: 74 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    icon: "Brain",
    description: "Data-driven features, from notebooks to production.",
    skills: [
      { name: "Pandas", level: 82 },
      { name: "NumPy", level: 80 },
      { name: "Matplotlib", level: 76 },
      { name: "Machine Learning", level: 75 },
      { name: "Deep Learning", level: 68 },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    description: "The daily workflow around the code.",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Docker", level: 68 },
    ],
  },
];
