import {
  Code2, Cloud, Cpu, Layers, Terminal, Award, GraduationCap,
} from "lucide-react";

/**
 * ALL personal data lives here. Edit this file — the rest of the site
 * reads from it automatically.
 */

export const PROFILE = {
  name: "Faizan Fayaz Mir",
  firstName: "Faizan",
  middleName: "Fayaz",
  lastName: "Mir",
  role: "Software Development Engineer",
  company: "Amazon",
  location: "Bengaluru, India",
  email: "faizanfayazmir1@gmail.com",
  phone: "+91 7006492628",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/faizanfayazmir1",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com/in/faizanfayazmir1",
  resumeUrl: "https://drive.google.com/file/d/1TXmN4Gq_VXLKtZDvXVDO1NWNVCFirROj/view?usp=drivesdk",
  tagline:
    "Backend, cloud, and distributed systems — with a soft spot for AI/ML research.",
  typewriter: [
    "I build scalable backend systems.",
    "I ship cloud-native services.",
    "I design distributed architectures.",
    "I make systems faster, calmer, kinder.",
  ],
};

export const STATS = [
  { value: 30, suffix: "%", label: "Reliability gain" },
  { value: 20, suffix: "%", label: "Latency reduction" },
  { value: 500, suffix: "+", label: "DSA problems" },
  { value: 2, suffix: "yr", label: "Production scale" },
];

export const EXPERIENCE = [
  {
    company: "Amazon",
    role: "Software Development Engineer",
    location: "Bengaluru, India",
    period: "May 2024 — Present",
    current: true,
    bullets: [
      "Architected scalable backend services in Java & Python on AWS, supporting millions of daily transactions.",
      "Lifted system reliability by 30% via observability, retries, and idempotency design.",
      "Reduced p99 API latency by 20% through caching, query optimization, and async pipelines.",
      "Orchestrated workflows with AWS Step Functions, Lambda, and CloudWatch alarms.",
      "Owned CI/CD with Docker + Jenkins + Git; shipped weekly to production in an Agile pod.",
    ],
    stack: ["Java", "Python", "AWS", "Step Functions", "DynamoDB", "Docker"],
  },
  {
    company: "IIT Guwahati",
    role: "Research Intern — AI/ML",
    location: "Guwahati, India",
    period: "Jun 2023 — Nov 2023",
    current: false,
    bullets: [
      "Applied ML models to Bose–Einstein Condensate simulations, raising predictive accuracy by 30%.",
      "Developed algorithms modelling quantum state dynamics across parameter regimes.",
      "Presented findings at an internal academic conference; co-authored research notes.",
    ],
    stack: ["Python", "PyTorch", "NumPy", "Matplotlib", "Jupyter"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Java", "Python", "TypeScript", "JavaScript", "C++", "C", "C#", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Docker", "Jenkins", "Git", "CloudWatch", "Step Functions", "Lambda"],
  },
  {
    title: "Frameworks & Tools",
    icon: Layers,
    items: [
      "Spring Boot", "React", "Next.js", "Django", "Flask", "Flutter",
      "Firebase", "Hibernate", ".NET", "Postman",
    ],
  },
  {
    title: "Core Competencies",
    icon: Cpu,
    items: [
      "Distributed Systems", "Microservices", "REST APIs",
      "System Design", "DSA", "OOP", "Machine Learning",
    ],
  },
];

export const PROJECTS = [
  {
    id: "sniff",
    title: "Sniff Circle",
    tag: "Social Platform",
    year: "2024",
    description:
      "A social networking platform built for pet owners — schedule playdates, share moments, connect with a global community.",
    longDescription:
      "Sniff Circle reimagines what a pet community looks like online. Built end-to-end with React, Node.js, and MySQL, it features real-time playdate scheduling, location-aware matching, and an event feed engineered for high engagement. The backend exposes a REST API with JWT auth, and the front-end uses optimistic updates for a snappy feel.",
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "Socket.io"],
    highlights: ["Real-time scheduling", "JWT auth & sessions", "Optimistic UI updates"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "secpass",
    title: "Secure Password Manager",
    tag: "Mobile · Security",
    year: "2023",
    description:
      "A cross-platform encrypted vault built with Flutter and Firebase, featuring AES encryption and real-time sync.",
    longDescription:
      "Encrypted password vault that works seamlessly across iOS, Android, and web. AES-256 encryption happens on-device; only ciphertext touches the network. Firestore handles real-time sync across devices with offline-first behaviour. Master password derives a key via PBKDF2 — credentials never leave the device in plaintext.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "AES-256", "PBKDF2"],
    highlights: ["On-device encryption", "Offline-first sync", "Cross-platform"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export const ACHIEVEMENTS = [
  { title: "AWS Cloud Practitioner", org: "Amazon Web Services", icon: Cloud },
  { title: "500+ DSA Problems Solved", org: "LeetCode · CodeChef", icon: Terminal },
  { title: "Research Presentation", org: "IIT Guwahati", icon: GraduationCap },
  { title: "Hackathon Finalist", org: "Inter-college", icon: Award },
];

export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const MARQUEE_WORDS = [
  "Backend", "AWS", "Distributed Systems", "Java", "Python",
  "Microservices", "Cloud", "Machine Learning", "System Design",
];
