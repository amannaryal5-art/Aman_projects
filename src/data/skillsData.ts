import type { IconType } from "react-icons";
import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiHibernate,
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiRadixui,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiSequelize,
  SiTypeorm,
  SiFirebase,
  SiRazorpay,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiGithubcopilot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  TbApi,
  TbDatabase,
  TbTruckDelivery,
  TbMail,
  TbShieldLock,
  TbDevices,
  TbCode,
  TbFolders,
  TbSparkles,
  TbCpu,
  TbServer2,
  TbLayout2,
  TbPlugConnected,
  TbTerminal2,
  TbBrandTwilio,
} from "react-icons/tb";

export interface SkillItem {
  name: string;
  subtext: string;
  icon: IconType;
  brandColor: string;
}

export interface SkillCategoryData {
  id: string;
  code: string;
  title: string;
  description: string;
  categoryIcon: IconType;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategoryData[] = [
  {
    id: "backend",
    code: "01 // BACKEND",
    title: "Backend & APIs",
    description: "Building scalable server-side systems, robust RESTful APIs, and distributed architectures.",
    categoryIcon: TbServer2,
    skills: [
      {
        name: "Node.js",
        subtext: "Runtime",
        icon: SiNodedotjs,
        brandColor: "#5FA04E",
      },
      {
        name: "Express.js",
        subtext: "Framework",
        icon: SiExpress,
        brandColor: "#F1F2F4",
      },
      {
        name: "NestJS",
        subtext: "Architecture",
        icon: SiNestjs,
        brandColor: "#E0234E",
      },
      {
        name: "REST API",
        subtext: "Integration",
        icon: TbApi,
        brandColor: "#B6FF2E",
      },
      {
        name: "Java",
        subtext: "Enterprise",
        icon: FaJava,
        brandColor: "#ED8B00",
      },
      {
        name: "Spring Boot",
        subtext: "Framework",
        icon: SiSpringboot,
        brandColor: "#6DB33F",
      },
      {
        name: "Hibernate",
        subtext: "ORM",
        icon: SiHibernate,
        brandColor: "#59666C",
      },
      {
        name: "Python",
        subtext: "Language",
        icon: SiPython,
        brandColor: "#3776AB",
      },
      {
        name: "FastAPI",
        subtext: "Async API",
        icon: SiFastapi,
        brandColor: "#05998B",
      },
    ],
  },
  {
    id: "frontend",
    code: "02 // FRONTEND",
    title: "Frontend & UI Systems",
    description: "Crafting fluid, high-performance web applications and responsive design systems with modern React.",
    categoryIcon: TbLayout2,
    skills: [
      {
        name: "Next.js",
        subtext: "SSR / App Router",
        icon: SiNextdotjs,
        brandColor: "#F1F2F4",
      },
      {
        name: "React",
        subtext: "UI Library",
        icon: SiReact,
        brandColor: "#61DAFB",
      },
      {
        name: "TypeScript",
        subtext: "Type Safety",
        icon: SiTypescript,
        brandColor: "#3178C6",
      },
      {
        name: "JavaScript",
        subtext: "ES6+ Core",
        icon: SiJavascript,
        brandColor: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        subtext: "Styling Engine",
        icon: SiTailwindcss,
        brandColor: "#06B6D4",
      },
      {
        name: "Framer Motion",
        subtext: "Micro-motion",
        icon: SiFramer,
        brandColor: "#0055FF",
      },
      {
        name: "Radix UI",
        subtext: "Accessible UI",
        icon: SiRadixui,
        brandColor: "#F1F2F4",
      },
      {
        name: "HTML5",
        subtext: "Markup",
        icon: SiHtml5,
        brandColor: "#E34F26",
      },
      {
        name: "CSS3",
        subtext: "Layout & Styles",
        icon: SiCss,
        brandColor: "#1572B6",
      },
      {
        name: "Responsive Design",
        subtext: "Multi-viewport",
        icon: TbDevices,
        brandColor: "#B6FF2E",
      },
      {
        name: "Semantic Markup",
        subtext: "Accessibility & SEO",
        icon: TbCode,
        brandColor: "#A7ADBA",
      },
    ],
  },
  {
    id: "databases",
    code: "03 // DATA",
    title: "Databases & ORMs",
    description: "Designing relational schemas, optimizing query performance, and structuring robust data models.",
    categoryIcon: TbDatabase,
    skills: [
      {
        name: "PostgreSQL",
        subtext: "Relational DB",
        icon: SiPostgresql,
        brandColor: "#4169E1",
      },
      {
        name: "Sequelize",
        subtext: "Node.js ORM",
        icon: SiSequelize,
        brandColor: "#52B0E7",
      },
      {
        name: "TypeORM",
        subtext: "TypeScript ORM",
        icon: SiTypeorm,
        brandColor: "#FE0803",
      },
      {
        name: "SQL",
        subtext: "Queries & DDL",
        icon: TbDatabase,
        brandColor: "#F29111",
      },
      {
        name: "pgAdmin",
        subtext: "DB Management",
        icon: SiPostgresql,
        brandColor: "#336791",
      },
    ],
  },
  {
    id: "integrations",
    code: "04 // PLATFORMS",
    title: "Auth, Integrations & Platforms",
    description: "Securing identity, orchestrating payment gateways, third-party messaging, and cloud media pipelines.",
    categoryIcon: TbPlugConnected,
    skills: [
      {
        name: "NextAuth",
        subtext: "Authentication",
        icon: TbShieldLock,
        brandColor: "#B6FF2E",
      },
      {
        name: "Firebase",
        subtext: "Cloud Backend",
        icon: SiFirebase,
        brandColor: "#FFCA28",
      },
      {
        name: "Razorpay",
        subtext: "Payment Gateway",
        icon: SiRazorpay,
        brandColor: "#0284C7",
      },
      {
        name: "Shiprocket",
        subtext: "Shipping Logistics",
        icon: TbTruckDelivery,
        brandColor: "#9333EA",
      },
      {
        name: "Cloudinary",
        subtext: "Media CDN",
        icon: SiCloudinary,
        brandColor: "#3448C5",
      },
      {
        name: "Nodemailer",
        subtext: "SMTP Dispatch",
        icon: TbMail,
        brandColor: "#22B8CF",
      },
      {
        name: "Twilio",
        subtext: "SMS & Comms",
        icon: TbBrandTwilio,
        brandColor: "#F22F46",
      },
    ],
  },
  {
    id: "delivery",
    code: "05 // WORKFLOW",
    title: "Delivery, Tooling & AI",
    description: "Accelerating continuous shipping, automated workflows, and modern AI-augmented engineering.",
    categoryIcon: TbTerminal2,
    skills: [
      {
        name: "Git",
        subtext: "Version Control",
        icon: SiGit,
        brandColor: "#F05032",
      },
      {
        name: "GitHub",
        subtext: "Code Collaboration",
        icon: SiGithub,
        brandColor: "#F1F2F4",
      },
      {
        name: "Vercel",
        subtext: "Edge Deployment",
        icon: SiVercel,
        brandColor: "#F1F2F4",
      },
      {
        name: "Postman",
        subtext: "API Testing",
        icon: SiPostman,
        brandColor: "#FF6C37",
      },
      {
        name: "Monorepo Workflow",
        subtext: "Project Structure",
        icon: TbFolders,
        brandColor: "#B6FF2E",
      },
      {
        name: "Prompt Engineering",
        subtext: "LLM Orchestration",
        icon: TbSparkles,
        brandColor: "#B6FF2E",
      },
      {
        name: "GitHub Copilot",
        subtext: "Pair Programming",
        icon: SiGithubcopilot,
        brandColor: "#F1F2F4",
      },
      {
        name: "AI-assisted Dev",
        subtext: "Accelerated Delivery",
        icon: TbCpu,
        brandColor: "#10A37F",
      },
    ],
  },
];
