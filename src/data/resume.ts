export const resumeProfile = {
  name: "Aman Naryal",
  title: "Full Stack Developer - Backend Systems & API Architecture",
  location: "Thane, Maharashtra, India",
  email: "amannaryal5@gmail.com",
  github: "https://github.com/amannaryal5-art",
  linkedin: "https://www.linkedin.com/in/aman-naryal-608034221",
  status: "Open to full-time roles",
  resumePdf: "/resume.pdf"
};

export const resumeSummary =
  "Backend-first full stack developer specializing in Node.js, TypeScript, and PostgreSQL. I build scalable APIs, repair broken backend systems, and deliver end-to-end products. Currently a Trainee Engineer at CognexiaAI LLP.";

export type ResumeExperience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  tags: string[];
  description: string;
};

export const experience: ResumeExperience[] = [
  {
    company: "CognexiaAI LLP",
    role: "Trainee Engineer",
    period: "Feb 2026 - Present",
    location: "Navi Mumbai, India",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Full Stack"],
    description:
      "Contributing to intelligent, API-driven systems at CognexiaAI. Building production-grade backend services and gaining hands-on experience in a professional product environment."
  },
  {
    company: "SETTribe LLP",
    role: "Trainee Software Engineer (Intern)",
    period: "Aug 2025 - Feb 2026",
    location: "Pune, India",
    tags: ["Java", "Spring Boot", "Hibernate", "Software Documentation"],
    description:
      "Completed Full Stack Development training (Java) with SEED Infotech Ltd. Delivered real project work including software development, requirement analysis, and technical documentation."
  },
  {
    company: "Self-Taught",
    role: "Full Stack Developer",
    period: "2023 - Aug 2025",
    tags: ["Node.js", "React", "PostgreSQL", "REST APIs", "JavaScript"],
    description:
      "Built backend and full stack foundations independently through real projects - API design, database architecture, and debugging complex production systems."
  }
];

export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
  tags: string[];
};

export const education: EducationEntry[] = [
  {
    institution: "Chandigarh University (Online)",
    degree: "Master of Computer Applications (MCA)",
    period: "2024 - Present",
    detail: "CGPA 8.53",
    tags: ["Python", "ML", "Web Dev", "Algorithms", "Cyber Security", "DB Systems"]
  },
  {
    institution: "Himachal Pradesh University",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2021 - 2024",
    detail: "Laureate Institute of Information & Technology, Kangra",
    tags: ["C++", "DBMS", "Computer Networks", "Web Design", "Software Engineering"]
  }
];

export type CertificationEntry = {
  name: string;
  issuer: string;
  period: string;
  detail: string;
};

export const certifications: CertificationEntry[] = [
  {
    name: "CCA - Certificate in Computer Application",
    issuer: "E-Max Council / Aim Clear Technology Computer Institute",
    period: "March 2023 - May 2023",
    detail: "Covered MS Office, DOS, Windows, internet basics, C programming, and practical lab work."
  },
  {
    name: "DPWD - Diploma in Programming and Web Designing",
    issuer: "E-Max Council / Aim Clear Technology Computer Institute",
    period: "June 2023 - November 2023",
    detail: "Covered C, C++, Python, JavaScript, ASP.NET, and core web design fundamentals."
  }
];

export type ResumeProject = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: ResumeProject[] = [
  {
    title: "CRIE v3.0 - Cyber Risk Intelligence Engine",
    description:
      "Python/FastAPI application for real-time cyber risk scoring. Rebuilt v2 -> v3 with a terminal UI aesthetic. Multi-endpoint FastAPI backend, uvicorn server, full frontend rebuild, and internal company presentation layer.",
    stack: ["Python", "FastAPI", "uvicorn", "Cyber Security", "REST API"],
    githubUrl: "https://github.com/amannaryal5-art/risk_intelligence_system",
    liveUrl: "https://risk-intelligence-system.vercel.app/"
  }
];

export const skillGroups = [
  {
    title: "Backend Engineering",
    items: ["Node.js", "Java", "Spring Boot", "Hibernate", "TypeORM", "NestJS"]
  },
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML & CSS", "TailwindCSS"]
  },
  {
    title: "Data & Storage",
    items: ["PostgreSQL", "SQL", "pgAdmin", "TypeORM"]
  },
  {
    title: "DevOps & Tooling",
    items: ["Git", "GitHub", "Vercel", "Postman", "Python Automation"]
  }
];

export const currentlyLearning = ["Docker", "Redis", "System Design", "Microservices", "AWS Basics"];
