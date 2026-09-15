export type Achievement = {
  title: string;
  organization: string;
  date: string;
  description: string;
  credentialId?: string;
  link?: string;
  placeholder?: boolean;
};

export const achievements: Achievement[] = [
  {
    title: "Introduction to Internet of Things (IoT)",
    organization: "NPTEL",
    date: "Certified",
    description:
      "Certification in Internet of Things (IoT) covering sensors, actuators, IoT networking protocols, and cloud connectivity.",
    placeholder: false,
  },
  {
    title: "Workshop on Python Programming",
    organization: "APSSDC (Govt. of Andhra Pradesh)",
    date: "Oct 2025",
    description:
      "Successfully participated in the intensive workshop on Python Programming conducted by Andhra Pradesh State Skill Development Corporation at RV Institute of Technology.",
    credentialId: "SDC/WS/25-26/PY/0014",
    placeholder: false,
  },
];
