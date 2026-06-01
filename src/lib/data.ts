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

export const heroTitles = ["Full Stack Developer"];

export const stats: Array<{ label: string; value: string }> = [];

export type ProjectTechCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  summary: string[];
  /** Grouped stack for detailed project cards (optional). */
  techUsed?: ProjectTechCategory[];
  category: "fullstack" | "ai";
  githubUrl?: string;
  liveUrl?: string;
  comingSoon?: boolean;
};

export const threadsAppTechUsed: ProjectTechCategory[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend & integrations",
    items: ["Node.js", "Express.js", "PostgreSQL", "Razorpay", "Shiprocket", "NextAuth"]
  }
];

export const crieTechUsed: ProjectTechCategory[] = [
  {
    title: "Backend",
    items: ["Python", "FastAPI", "SQLite", "Uvicorn", "Groq", "APScheduler"]
  },
  {
    title: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Zustand", "Recharts"]
  },
  {
    title: "Platform",
    items: ["X-API-Key auth", "Role-based access", "FastAPI + SPA deploy"]
  }
];

export const projects: Project[] = [
  {
    title: "ThreadsApp",
    summary: [
      "Fashion e-commerce with a customer storefront and admin dashboard.",
      "Next.js and Node.js on PostgreSQL; Razorpay, Shiprocket, and NextAuth for checkout, shipping, and secure access."
    ],
    techUsed: threadsAppTechUsed,
    category: "fullstack",
    githubUrl: "https://github.com/amannaryal5-art/Threadsapp"
  },
  {
    title: "CRIE v3.0 - Cyber Risk Intelligence Engine",
    summary: [
      "Full-stack platform for analyzing suspicious text, websites, malware, IOCs, and monitored assets.",
      "FastAPI engines for risk scoring, threat intel, fusion scans, cases, ARIA monitoring, alerts, and reports.",
      "React dashboard with API-key login, role-based access, and production-ready FastAPI or Vercel deployment."
    ],
    techUsed: crieTechUsed,
    category: "fullstack",
    githubUrl: "https://github.com/amannaryal5-art/risk_intelligence_system",
    liveUrl: "https://risk-intelligence-system.vercel.app/"
  }
];

export const skillGroups = [
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST API",
      "Java",
      "Spring Boot",
      "Hibernate",
      "Python",
      "FastAPI"
    ]
  },
  {
    title: "Frontend & UI Systems",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "HTML",
      "CSS",
      "Responsive Design",
      "Semantic Markup"
    ]
  },
  {
    title: "Databases & ORMs",
    skills: ["PostgreSQL", "Sequelize", "TypeORM", "SQL", "pgAdmin"]
  },
  {
    title: "Auth, Integrations & Platforms",
    skills: [
      "NextAuth",
      "Firebase",
      "Razorpay",
      "Shiprocket",
      "Cloudinary",
      "Nodemailer",
      "Twilio"
    ]
  },
  {
    title: "Delivery, Tooling & AI",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "Monorepo Workflow",
      "Prompt Engineering",
      "GitHub Copilot",
      "AI-assisted Development"
    ]
  }
];

export type ExperienceEntry = {
  period: string;
  company?: string;
  role: string;
  location?: string;
  outcome?: string;
  badge?: string;
  badgeTone?: "accent" | "cyan" | "emerald";
  tags: string[];
  detail: string;
  current?: boolean;
};

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "Feb 2026 - May 2026",
    company: "CognexiaAI LLP",
    role: "Trainee Engineer",
    location: "Navi Mumbai, India",
    badge: "Worked",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Full Stack"],
    detail:
      "Worked as a Trainee Engineer at CognexiaAI, contributing to intelligent, API-driven systems and building practical engineering experience in a professional product environment."
  },
  {
    period: "Aug 2025 - Feb 2026",
    company: "SETTribe LLP",
    role: "Trainee Software Engineer (Intern)",
    location: "Pune, India",
    tags: ["Java", "Full Stack Development", "Spring Boot", "Software Documentation"],
    detail:
      "Completed an intensive Full Stack Development training program (Java) with SEED Infotech Ltd, followed by real project work involving software development, requirement understanding, and technical documentation at SETTribe LLP."
  },
  {
    period: "2024 - Present",
    company: "Chandigarh University (Online)",
    role: "Master of Computer Applications (MCA)",
    location: "Online Program",
    outcome: "CGPA: 8.53 / 10",
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
      "Pursuing MCA at Chandigarh University with a strong academic record (CGPA 8.53). Coursework spans advanced database systems, machine learning, web application development, algorithms, and cyber security - directly supporting my full stack engineering work."
  },
  {
    period: "2021 - 2024",
    company: "Himachal Pradesh University",
    role: "Bachelor of Computer Applications (BCA)",
    location: "Laureate Institute of Information & Technology, Kangra",
    outcome: "CGPA: 6.97 / 10 | Grade: A+",
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
      "Completed BCA from Himachal Pradesh University with a CGPA of 6.97 (Grade A+). Coursework covered core CS fundamentals including OOP, databases, networking, and web design - forming the foundation for my full stack development journey."
  },
  {
    period: "March 2023 - May 2023",
    company: "E-Max Council / Aim Clear Technology Computer Institute",
    role: "CCA - Certificate in Computer Application",
    location: "Jwalamukhi, Kangra, HP",
    badge: "Certification",
    badgeTone: "emerald",
    tags: ["MS Office", "DOS", "Windows", "C Programming", "Internet", "Tally"],
    detail:
      "Completed CCA certification with 80% marks (A Grade). Covered computer fundamentals, MS Office suite, DOS/Windows, internet basics, C programming, and practical lab work."
  },
  {
    period: "June 2023 - November 2023",
    company: "E-Max Council / Aim Clear Technology Computer Institute",
    role: "DPWD - Diploma in Programming and Web Designing",
    location: "Jwalamukhi, Kangra, HP",
    badge: "Certification",
    badgeTone: "emerald",
    tags: ["C Language", "C++", "Visual Basic.NET", "ASP.NET", "Python", "JavaScript", "CSS"],
    detail:
      "Completed Diploma in Programming and Web Designing with 90% marks (A+ Grade). Covered multi-language programming including C, C++, Python, JavaScript, ASP.NET, and web design fundamentals - marking the beginning of my software development journey."
  },
  {
    period: "During BCA",
    company: "Spoken Tutorial Project, IIT Bombay",
    role: "JavaScript Training",
    location: "Laureate Institute of Management & Information Technology",
    badge: "Certification",
    badgeTone: "emerald",
    tags: ["JavaScript", "Web Development", "Front-End"],
    detail:
      "Completed structured JavaScript training and assessment through the Spoken Tutorial Project at IIT Bombay, strengthening core front-end development skills."
  },
  {
    period: "During BCA",
    company: "Spoken Tutorial Project, IIT Bombay",
    role: "CSS Training",
    location: "Laureate Institute of Management & Information Technology",
    badge: "Certification",
    badgeTone: "emerald",
    tags: ["CSS", "Responsive Design", "Front-End"],
    detail:
      "Completed CSS training through IIT Bombay's Spoken Tutorial Project, with focus on styling fundamentals, layout techniques, and practical interface development."
  },
  {
    period: "During BCA",
    company: "Spoken Tutorial Project, IIT Bombay",
    role: "HTML Training",
    location: "Laureate Institute of Management & Information Technology",
    badge: "Certification",
    badgeTone: "emerald",
    tags: ["HTML", "Semantic Markup", "Web Fundamentals"],
    detail:
      "Completed HTML training through the Spoken Tutorial Project at IIT Bombay, building a solid foundation in semantic markup and core web page structure."
  },
  {
    period: "2019 - 2021",
    company: "HP Board of School Education",
    role: "Senior Secondary (Class XII) - Commerce",
    location: "Govt. Sr. Sec. School, Kathog, District Kangra",
    outcome: "First Division | 314 / 500 Marks",
    badge: "Education",
    badgeTone: "cyan",
    tags: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "English",
      "Physical Education"
    ],
    detail:
      "Passed Senior Secondary examination in Commerce stream from HP Board of School Education with First Division, securing 314/500 marks."
  },
  {
    period: "2019",
    company: "CBSE",
    role: "Secondary School (Class X)",
    location: "Shivalik International Convent School, Jwalamukhi, Kangra",
    outcome: "Passed | 218 / 500 Marks",
    badge: "Education",
    badgeTone: "cyan",
    tags: [
      "Mathematics",
      "Science",
      "English",
      "Hindi",
      "Social Science",
      "Foundation of IT"
    ],
    detail:
      "Passed CBSE Class X board examination from Shivalik International Convent School, Kangra. Demonstrated early interest in technology with Foundation of IT as an additional subject."
  }
];
