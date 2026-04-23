export const resumeProfile = {
  name: "Aman Naryal",
  title: "Full Stack Developer - APIs, Products & Scalable Web Apps",
  location: "Thane, Maharashtra, India",
  email: "amannaryal5@gmail.com",
  github: "https://github.com/amannaryal5-art",
  linkedin: "https://www.linkedin.com/in/aman-naryal-608034221",
  status: "Open to full-time roles",
  resumePdf: "/resume.pdf"
};

export const resumeSummary =
  "Full Stack Developer specializing in Node.js, TypeScript, and PostgreSQL. I build scalable APIs and deliver end-to-end products. Currently a Trainee Engineer at CognexiaAI LLP.";

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
      "Contributing to intelligent, API-driven systems at CognexiaAI. Building production-grade application features and gaining hands-on experience in a professional product environment."
  },
  {
    company: "SETTribe LLP",
    role: "Trainee Software Engineer (Intern)",
    period: "Aug 2025 - Feb 2026",
    location: "Pune, India",
    tags: ["Java", "Spring Boot", "Hibernate", "Software Documentation"],
    description:
      "Completed Full Stack Development training (Java) with SEED Infotech Ltd. Delivered real project work including software development, requirement analysis, and technical documentation."
  }
];

export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  result?: string;
  campus?: string;
  tags: string[];
};

export const education: EducationEntry[] = [
  {
    institution: "Chandigarh University",
    degree: "Master of Computer Applications (MCA)",
    period: "2024 - Present",
    result: "CGPA: 8.53",
    campus: "Online Program",
    tags: ["Python", "Machine Learning", "Web Development", "Algorithms", "Cyber Security", "Database Systems"]
  },
  {
    institution: "Himachal Pradesh University",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2021 - 2024",
    result: "CGPA: 6.97",
    campus: "Laureate Institute of Information Technology, Kangra",
    tags: ["C++", "DBMS", "Computer Networks", "Web Design", "Software Engineering"]
  },
  {
    institution: "Himachal Pradesh Board of School Education",
    degree: "Senior Secondary Examination (Class XII), Commerce",
    period: "2019 - 2021",
    result: "314/500 Marks | First Division",
    campus: "Government Senior Secondary School, Kathog, Kangra",
    tags: ["Accountancy", "Business Studies", "Economics", "English", "Physical Education"]
  },
  {
    institution: "Central Board of Secondary Education (CBSE)",
    degree: "Secondary Examination (Class X)",
    period: "2019",
    result: "218/500 Marks | Pass",
    campus: "Shivalik International Convent School, Jwalamukhi, Kangra",
    tags: ["Mathematics", "Science", "English", "Hindi", "Social Science", "Information Technology"]
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
  },
  {
    name: "JavaScript Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    period: "During BCA",
    detail:
      "Completed structured JavaScript training and online assessment through the Spoken Tutorial Project at IIT Bombay, supported by Laureate Institute of Management & Information Technology."
  },
  {
    name: "CSS Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    period: "During BCA",
    detail:
      "Completed CSS training focused on styling fundamentals, layout techniques, and practical front-end development concepts through IIT Bombay's Spoken Tutorial Project."
  },
  {
    name: "HTML Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    period: "During BCA",
    detail:
      "Completed HTML training covering semantic structure and core web page development concepts through the Spoken Tutorial Project at IIT Bombay."
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
      "Built and shipped a Python/FastAPI application for real-time cyber risk scoring. Led the v2 to v3 rebuild, redesigned the frontend with a terminal-style interface, and prepared the product for live deployment and internal presentation.",
    stack: ["Python", "FastAPI", "uvicorn", "Cyber Security", "REST API"],
    githubUrl: "https://github.com/amannaryal5-art/risk_intelligence_system",
    liveUrl: "https://risk-intelligence-system.vercel.app/"
  }
];

export const skillGroups = [
  {
    title: "Backend Engineering",
    items: [
      "Node.js",
      "NestJS",
      "Java",
      "Spring Boot",
      "Hibernate",
      "Python",
      "FastAPI",
      "REST API",
      "TypeORM"
    ]
  },
  {
    title: "Frontend Technologies",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
      "Semantic Markup",
      "Web Design"
    ]
  },
  {
    title: "Databases & Data Tools",
    items: ["PostgreSQL", "SQL", "pgAdmin", "TypeORM"]
  },
  {
    title: "Developer Tools & Deployment",
    items: ["Git", "GitHub", "Vercel", "Postman", "Python Automation"]
  }
];
