export type ProjectCategory = "Web Development" | "AI / ML" | "Backend" | "Other";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  placeholder: boolean;
};

// Add, remove or reorder projects here — the UI is fully data driven.
export const projects: Project[] = [
  {
    slug: "lms-platform",
    title: "LMS Platform",
    category: "Web Development",
    summary: "A learning management platform for courses, lessons and progress tracking.",
    problem:
      "Small institutes manage courses across spreadsheets and chat groups, so learners lose track of progress.",
    solution:
      "A single web app with course creation, enrolment, lesson delivery and per-learner progress tracking.",
    features: [
      "Role based access for admins, instructors and learners",
      "Course and lesson management",
      "Progress tracking and completion state",
      "Responsive dashboard",
    ],
    challenges: "Modelling permissions cleanly without duplicating checks across the API.",
    technologies: ["React", "Node.js", "Express", "Database"],
    github: "https://github.com/Asad-opss",
    demo: "#",
    featured: true,
    placeholder: true,
  },
  {
    slug: "face-mask-detection",
    title: "Face Mask Detection",
    category: "AI / ML",
    summary: "Real-time detection of mask compliance from a camera feed.",
    problem: "Manual monitoring of safety compliance is slow and inconsistent.",
    solution:
      "A convolutional model served behind a small Flask API that classifies frames in real time.",
    features: [
      "Real-time inference on webcam frames",
      "Confidence scores per detection",
      "Simple Flask serving layer",
    ],
    challenges: "Keeping inference fast enough for live video on modest hardware.",
    technologies: ["Python", "Machine Learning", "Flask"],
    github: "https://github.com/Asad-opss",
    demo: "#",
    featured: true,
    placeholder: true,
  },
  {
    slug: "smart-todo",
    title: "Smart To-Do Application",
    category: "Other",
    summary: "A task manager with priorities, reminders and local persistence.",
    problem: "Generic to-do apps do not surface what actually matters today.",
    solution: "Priority scoring and due-date grouping on top of a lightweight SQLite store.",
    features: ["Priority scoring", "Due date grouping", "Offline-friendly local storage"],
    challenges: "Designing a scoring rule that stays understandable to the user.",
    technologies: ["Python", "SQLite"],
    github: "https://github.com/Asad-opss",
    demo: "#",
    featured: false,
    placeholder: true,
  },
  {
    slug: "certificate-generator",
    title: "Digital Certificate Generator",
    category: "Backend",
    summary: "Bulk certificate generation from a spreadsheet of participants.",
    problem: "Generating hundreds of event certificates by hand takes hours.",
    solution: "A script that merges a CSV with a template image and exports print-ready files.",
    features: ["CSV driven batch generation", "Template positioning", "Bulk export"],
    challenges: "Handling long names and non-Latin characters without breaking the layout.",
    technologies: ["Python", "Pandas", "PIL"],
    github: "https://github.com/Asad-opss",
    demo: "#",
    featured: false,
    placeholder: true,
  },
];

export const projectCategories = ["All", "Web Development", "AI / ML", "Backend", "Other"] as const;
