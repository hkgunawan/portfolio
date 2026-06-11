// Single source of truth for site content.
// Kept at the same disclosure level as the public CV; the government client
// from the contract engagement is referenced by sector, not by name.

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type WorkItem = {
  title: string;
  context: string;
  problem: string;
  solution: string;
  stack: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "Hendra Gunawan",
  role: "Senior Software Engineer",
  tagline:
    "I build and integrate production fintech and public-sector platforms — full-stack, from API to UI.",
  location: "East Java, Indonesia",
  availability: ["Open to remote — worldwide", "Relocation: SG · AU · NZ"],
  email: "hendra@hendragunawan.com",
  linkedin: "https://www.linkedin.com/in/hendra-gunawan-73b04517a",
  github: "https://github.com/hkgunawan",
  summary:
    "Senior software engineer with 7+ years building and integrating production web and mobile systems across fintech, e-commerce, and public-sector platforms. Full-stack across React / Next.js, Node.js, and PHP / Laravel — with a track record of third-party API integration, legacy-system modernization, and shipping working software under real-world constraints.",
};

export const terminalLines: { cmd: string; out: string }[] = [
  { cmd: "whoami", out: "Hendra Gunawan — Senior Software Engineer" },
  { cmd: "cat stack.txt", out: "React · Next.js · Node.js · TypeScript · PHP / Laravel" },
  { cmd: "cat focus.txt", out: "Fintech · public-sector · 7+ years shipping production systems" },
  { cmd: "cat status.txt", out: "Open to remote (worldwide) · Relocation: SG · AU · NZ" },
];

export const experience: ExperienceItem[] = [
  {
    company: "AutoWealth",
    role: "Senior Software Engineer",
    period: "Jun 2021 — Present",
    location: "Singapore · Remote",
    summary:
      "MAS-licensed robo-advisory platform managing roughly US$190M in assets for thousands of retail and corporate clients.",
    highlights: [
      "Build and maintain the full-stack web and mobile apps used daily by retail and corporate investors.",
      "Own external integrations and onboarding end to end — the connective tissue between the platform and brokers, data providers, and e-signature.",
      "Part of the team modernizing a legacy PHP platform toward a React / Next.js + Node.js stack.",
    ],
    stack: ["PHP", "Laravel", "React", "React Native", "Node.js", "MySQL", "Oracle", "AWS", "Docker"],
  },
  {
    company: "MavenTree Technology",
    role: "Senior Software Engineer (Contract)",
    period: "Nov 2025 — Apr 2026",
    location: "Singapore · Remote",
    summary:
      "A national careers platform commissioned by a Singapore government workforce-development agency, serving job seekers, employers, and career coaches.",
    highlights: [
      "Delivered features across a four-service architecture — content, events, identity, and shared services.",
      "Integrated an external identity API for persona management — building a dedicated update endpoint to work around upstream reliability constraints.",
      "Shipped admin tooling: AI-assisted tag suggestion and virtual job-interview event management.",
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "RabbitMQ", "WebSockets", "AWS ECS", "Docker"],
  },
  {
    company: "Asia Commerce Network",
    role: "Backend Engineer",
    period: "Mar 2019 — Jun 2021",
    location: "Surabaya, Indonesia",
    summary:
      "E-commerce platform serving web and mobile clients across merchant and order flows.",
    highlights: [
      "Designed, built, and maintained RESTful APIs in Laravel powering Vue.js web and Flutter mobile clients.",
      "Built third-party integrations with WooCommerce and Xendit (payments) supporting merchant and order workflows.",
    ],
    stack: ["PHP", "Laravel", "Vue.js", "Flutter", "MySQL"],
  },
];

export const selectedWork: WorkItem[] = [
  {
    title: "Brokerage & Investment Integrations",
    context: "AutoWealth · fintech",
    problem:
      "Automated investing only works if trades execute reliably across multiple brokers — each with a different API, settlement model, and failure mode.",
    solution:
      "Built and maintained the integrations with Moomoo, iFAST, and Phillip Securities end to end — order execution, portfolio sync, and reconciliation — plus legally binding e-signature onboarding via Dropbox Sign.",
    stack: ["Node.js", "PHP / Laravel", "REST", "AWS"],
  },
  {
    title: "Service Curator — Recommendation Engine",
    context: "Gov careers platform · microservices",
    problem:
      "Surface the most relevant articles and events to each job seeker, with the underlying data spread across four independent services.",
    solution:
      "Designed a personalised recommendation engine that scores content against each user's career persona and interest tags, coordinating across four microservices over a RabbitMQ message bus.",
    stack: ["Next.js", "Node.js", "MongoDB", "RabbitMQ"],
  },
  {
    title: "Legacy → Modern Migration",
    context: "AutoWealth · modernization",
    problem:
      "A mature, revenue-critical PHP platform had to move to a modern stack without disrupting live clients or pausing feature work.",
    solution:
      "Helping migrate the codebase toward React / Next.js + Node.js incrementally — shipping new features on the modern stack while progressively replacing legacy screens and services.",
    stack: ["React", "Next.js", "Node.js", "PHP"],
  },
];

export const skills: SkillGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Tailwind CSS", "HTML / CSS"] },
  { label: "Backend", items: ["Node.js", "PHP", "Laravel", "REST APIs", "Microservices", "RabbitMQ", "WebSockets"] },
  { label: "Mobile", items: ["React Native", "Flutter"] },
  { label: "Data", items: ["MySQL", "MongoDB", "Oracle"] },
  { label: "Cloud & Tooling", items: ["AWS (ECS)", "Docker", "CI/CD", "Git"] },
];

export const education = {
  school: "Petra Christian University, Surabaya",
  degree: "B.Sc. Information Technology",
  year: "2018",
};

export const languages = [
  "English — full professional proficiency",
  "Indonesian — native",
];
