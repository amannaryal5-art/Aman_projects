export const developer = {
  name: "Aman Naryal",
  shortName: "Aman",
  location: "Thane, Maharashtra, India",
  email: "amannaryal5@gmail.com",
  github: "https://github.com/amannaryal5-art",
  linkedin: "https://www.linkedin.com/in/aman-naryal-608034221",
  availability: "Open to full-time roles",
  tagline: "Full Stack Developer crafting intelligent, API-driven applications"
};

export const heroTitles = [
  "Full Stack Developer",
  "API Architect",
  "TypeScript + Node.js Engineer",
  "Problem Solver"
];

export const stats = [
  { label: "Modules Architected", value: "5+" },
  { label: "Bugs Squashed", value: "100+" },
  { label: "Cups of Chai", value: "\u221E" }
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: "backend" | "fullstack" | "ai";
  githubUrl?: string;
  liveUrl?: string;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "Risk Intelligence System",
    description:
      "An intelligent risk analysis platform that processes supply chain, logistics, and inventory data to identify and flag operational risks in real time.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "REST API"],
    category: "backend",
    githubUrl: "https://github.com/amannaryal5-art/risk_intelligence_system",
    liveUrl: "https://risk-intelligence-system.vercel.app/"
  }
];

export const skillGroups = [
  {
    title: "Backend Engineering",
    skills: [
      "Node.js",
      "Java",
      "Spring Boot",
      "Hibernate",
      "TypeORM"
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "TailwindCSS"
    ]
  },
  {
    title: "Data & Storage",
    skills: ["PostgreSQL", "SQL", "pgAdmin"]
  },
  {
    title: "DevOps & Tooling",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "Python Automation"
    ]
  }
];
