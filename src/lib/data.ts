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

export const stats: Array<{ label: string; value: string }> = [];

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
    skills: ["Node.js", "Java", "Spring Boot", "Hibernate", "TypeORM"]
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML & CSS", "TailwindCSS"]
  },
  {
    title: "Data & Storage",
    skills: ["PostgreSQL", "SQL", "pgAdmin"]
  },
  {
    title: "DevOps & Tooling",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Python Automation"]
  }
];

export type ExperienceEntry = {
  period: string;
  company?: string;
  role: string;
  location?: string;
  badge?: string;
  badgeTone?: "accent" | "cyan";
  tags: string[];
  detail: string;
  current?: boolean;
};

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "Feb 2026 — Present",
    company: "CognexiaAI LLP",
    role: "Trainee Engineer",
    location: "Navi Mumbai, India",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Full Stack"],
    detail:
      "Working as a Trainee Engineer at CognexiaAI, contributing to intelligent, API-driven systems and building practical engineering experience in a professional product environment.",
    current: true
  },
  {
    period: "Aug 2025 — Feb 2026",
    company: "SETTribe LLP",
    role: "Trainee Software Engineer (Intern)",
    location: "Pune, India",
    tags: ["Java", "Full Stack Development", "Spring Boot", "Software Documentation"],
    detail:
      "Completed an intensive Full Stack Development training program (Java) with SEED Infotech Ltd, followed by real project work involving software development, requirement understanding, and technical documentation at SETTribe LLP."
  },
  {
    period: "2023 — Aug 2025",
    role: "Self-Taught Full Stack Developer",
    tags: ["Node.js", "React", "PostgreSQL", "REST APIs", "JavaScript"],
    detail:
      "Built strong backend and full stack foundations independently — working through real projects, API design, database architecture, and debugging complex systems before stepping into professional roles."
  },
  {
    period: "2024 — Present",
    company: "Chandigarh University (Online)",
    role: "Master of Computer Applications (MCA)",
    location: "CGPA 8.53",
    badge: "Education",
    badgeTone: "cyan",
    tags: [
      "Python",
      "Machine Learning",
      "Web Development",
      "Algorithms",
      "Cyber Security",
      "Database Systems"
    ],
    detail:
      "Pursuing MCA at Chandigarh University with a strong academic record (CGPA 8.53). Coursework spans advanced database systems, machine learning, web application development, algorithms, and cyber security — directly supporting my backend and full stack engineering work."
  },
  {
    period: "2021 — 2024",
    company: "Himachal Pradesh University",
    role: "Bachelor of Computer Applications (BCA)",
    location: "Laureate Institute of Information & Technology, Kangra",
    badge: "Education",
    badgeTone: "cyan",
    tags: [
      "C++",
      "DBMS",
      "Computer Networks",
      "Web Design",
      "Software Engineering",
      "Operating Systems"
    ],
    detail:
      "Completed BCA from Himachal Pradesh University with a CGPA of 6.97 (Grade A+). Coursework covered core CS fundamentals including OOP, databases, networking, and web design — forming the foundation for my full stack development journey."
  }
];

export const learningItems = ["Docker", "Redis", "System Design", "Microservices", "AWS Basics"];
