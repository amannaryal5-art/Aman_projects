export type ProductCardData = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "Live" | "In Progress";
  ghost?: boolean;
};

export const landingProfile = {
  name: "Aman Naryal",
  headline: "I build backend systems and ship real products.",
  status: "Open to full-time",
  city: "Thane, India",
  email: "amannaryal5@gmail.com",
  github: "https://github.com/amannaryal5-art",
  linkedin: "https://www.linkedin.com/in/aman-naryal-608034221"
};

export const products: ProductCardData[] = [
  {
    name: "CRIE v3.0",
    tagline: "Cyber Risk Intelligence Engine",
    description:
      "Real-time cyber risk scoring platform. FastAPI backend, terminal-aesthetic UI, multi-endpoint REST API.",
    stack: ["Python", "FastAPI", "uvicorn", "REST API"],
    githubUrl: "https://github.com/amannaryal5-art/risk_intelligence_system",
    liveUrl: "https://risk-intelligence-system.vercel.app/",
    status: "Live"
  },
  {
    name: "Next Product",
    tagline: "Coming soon",
    description: "Something new is being built.",
    stack: ["Reserved", "In Discovery"],
    status: "In Progress",
    ghost: true
  },
  {
    name: "Next Product",
    tagline: "Coming soon",
    description: "Something new is being built.",
    stack: ["Reserved", "In Discovery"],
    status: "In Progress",
    ghost: true
  }
];

export const aboutStripCopy =
  "Backend-first engineer. I go deep on system design, API architecture, and real-world debugging. Currently a Trainee Engineer at CognexiaAI LLP, Navi Mumbai.";
