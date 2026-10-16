import {
  Code2, Cloud, Cpu, Terminal, Award, BrainCircuit,
  Database, Server, Smartphone, Workflow, LayoutDashboard, Mic,
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
    "Distributed backends, cloud-native services, and production GenAI — built to be fast, reliable, and quietly boring in the best way.",
  summary:
    "Software Development Engineer with experience architecting high-availability distributed backend systems, full-stack web applications, and production Generative AI / LLM pipelines — at Amazon India and IIT Guwahati, using Java (Spring Boot), Python (FastAPI) and the MERN stack on AWS.",
  typewriter: [
    "I build scalable backend systems.",
    "I ship production RAG pipelines.",
    "I design distributed architectures.",
    "I automate the 3 a.m. pages away.",
    "I make systems faster, calmer, kinder.",
  ],
  quickFacts: [
    { label: "Now", value: "SDE @ Amazon India" },
    { label: "Since", value: "May 2024" },
    { label: "Before", value: "AI/ML Research · IIT Guwahati" },
    { label: "Degree", value: "B.E. CSE · VTU · 8.68 CGPA" },
  ],
};

export const STATS = [
  { value: 30, suffix: "%", label: "Reliability gain" },
  { value: 20, suffix: "%", label: "Latency reduction" },
  { value: 40, suffix: "%", label: "Less manual ops" },
  { value: 99.9, suffix: "%", label: "Deploy success", decimals: 1 },
];

export const CAPABILITIES = [
  {
    icon: Server,
    title: "Distributed Backends",
    body: "Fault-tolerant Spring Boot and async FastAPI microservices on ECS/EKS, with caching, connection pooling and query tuning for APIs serving millions of requests a day.",
    tags: ["Java", "Spring Boot", "FastAPI", "Redis", "DynamoDB"],
  },
  {
    icon: BrainCircuit,
    title: "Production GenAI",
    body: "RAG pipelines, LangChain/LangGraph agents and LLM-assisted triage services — retrieval that answers in under a second and automation that routes tickets on its own.",
    tags: ["LLMs", "RAG", "LangGraph", "Vector DBs"],
  },
  {
    icon: Workflow,
    title: "Cloud & Automation",
    body: "Event-driven workflows on Step Functions and CloudWatch, CI/CD with Docker and Jenkins, zero-downtime rollbacks and alerting that fixes itself before anyone wakes up.",
    tags: ["AWS", "Step Functions", "Docker", "Jenkins", "Terraform"],
  },
  {
    icon: LayoutDashboard,
    title: "Full-Stack Tooling",
    body: "Responsive React dashboards and config portals on Node, Express and MongoDB — the internal tools that make incident response faster across teams.",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
  },
];

export const EXPERIENCE = [
  {
    company: "Amazon India",
    role: "Software Development Engineer",
    location: "Bengaluru, India",
    period: "May 2024 — Present",
    current: true,
    summary:
      "Building high-availability backend services, GenAI-assisted operations tooling, and the automation that keeps them running.",
    bullets: [
      {
        title: "Scalable microservices",
        text: "Designed and deployed high-availability backend services in Java, Python and AWS (Lambda, EC2), improving system reliability by 30%; architected fault-tolerant Spring Boot and async FastAPI microservices orchestrated on ECS and EKS.",
      },
      {
        title: "High-throughput APIs",
        text: "Optimised RESTful APIs handling millions of daily requests — 20% lower latency through caching, SQL tuning, Redis, Hibernate and connection pooling across MySQL and DynamoDB.",
      },
      {
        title: "LLM & GenAI integration",
        text: "Engineered AI-assisted developer and operational-triage services with Python, FastAPI, LLMs and RAG behind API Gateway, automating log root-cause analysis and ticket routing.",
      },
      {
        title: "Event-driven automation",
        text: "Built pipelines on Step Functions and CloudWatch that cut manual operational intervention by 40%, with real-time telemetry, alerting and automated recovery.",
      },
      {
        title: "Full-stack internal tools",
        text: "Shipped responsive operational dashboards and config-management portals in React, Node.js, Express and MongoDB, speeding up cross-team incident resolution.",
      },
      {
        title: "CI/CD & infrastructure",
        text: "Streamlined deployments with Docker, Jenkins and Git — 99.9% deployment success with automated unit/integration tests and zero-downtime rollbacks.",
      },
      {
        title: "Mentorship",
        text: "Mentored junior engineers on coding standards and debugging; ran HLD/LLD design reviews and code audits in an Agile/Scrum team.",
      },
    ],
    stack: [
      "Java", "Spring Boot", "Python", "FastAPI", "AWS", "ECS/EKS",
      "Step Functions", "DynamoDB", "Redis", "LLMs / RAG", "React", "Docker",
    ],
  },
  {
    company: "IIT Guwahati",
    role: "Research Intern — AI/ML",
    location: "Guwahati, India",
    period: "Jun 2023 — Nov 2023",
    current: false,
    summary:
      "Machine learning for quantum physics — teaching neural networks to predict how Bose–Einstein Condensates behave.",
    bullets: [
      {
        title: "Deep learning for physics",
        text: "Applied ML models to Bose–Einstein Condensate (BEC) simulations, increasing predictive accuracy by 30% with Python, PyTorch and custom neural-network architectures.",
      },
      {
        title: "High-performance pipelines",
        text: "Developed algorithms for quantum-state dynamics analysis, improving data-processing efficiency by 25%, and exposed model inference through lightweight FastAPI and Flask services.",
      },
      {
        title: "Research & presentation",
        text: "Presented computational research findings at 5+ academic conferences, focusing on simulation scalability and efficiency.",
      },
    ],
    stack: ["Python", "PyTorch", "NumPy", "FastAPI", "Flask", "Jupyter"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "C++", "C", "C#"],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "Spring Boot", "FastAPI", "Node.js", "Express.js", "Django", "Flask",
      "Hibernate", ".NET", "REST", "GraphQL", "gRPC", "Microservices",
    ],
  },
  {
    title: "AI · LLMs · ML",
    icon: BrainCircuit,
    items: [
      "LLMs", "RAG", "LangChain", "LangGraph", "PyTorch", "Pinecone", "FAISS",
      "ChromaDB", "Prompt Engineering", "OpenAI API", "Hugging Face",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS Lambda", "EC2", "S3", "ECS", "EKS", "API Gateway", "Step Functions",
      "CloudWatch", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions",
    ],
  },
  {
    title: "Data & Messaging",
    icon: Database,
    items: [
      "MySQL", "PostgreSQL", "DynamoDB", "MongoDB", "Redis", "Firestore", "Apache Kafka",
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: Smartphone,
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3", "Flutter"],
  },
  {
    title: "Core Competencies",
    icon: Cpu,
    items: [
      "System Design (HLD/LLD)", "Distributed Systems", "Data Structures & Algorithms",
      "OOP", "API Design", "TDD", "Agile / Scrum",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tag: string;
  role: string;
  year?: string;
  featured?: boolean;
  description: string;
  longDescription: string;
  stack: string[];
  highlights: string[];
  architecture: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "rag-assistant",
    title: "Enterprise AI Knowledge Assistant",
    tag: "GenAI · RAG",
    role: "GenAI & Backend Engineer",
    featured: true,
    description:
      "A production-grade retrieval-augmented generation system that answers questions over large technical documentation repositories — with sub-second vector retrieval and streamed answers.",
    longDescription:
      "Built to make sprawling engineering docs actually searchable. Documents are chunked, embedded and indexed into a vector database; queries go through hybrid semantic + keyword retrieval, a LangGraph-orchestrated LangChain pipeline assembles grounded context, and the LLM's answer streams token-by-token over WebSockets to a React frontend. The whole stack is containerised with Docker and runs on AWS EC2 with S3 for document storage.",
    stack: ["Python", "FastAPI", "LangChain", "LangGraph", "Vector DB", "React", "WebSockets", "Docker", "AWS"],
    highlights: [
      "Sub-second vector retrieval over large doc sets",
      "Hybrid semantic search for grounded answers",
      "Token streaming to the UI over WebSockets",
      "Fully containerised on AWS EC2 / S3",
    ],
    architecture: ["Docs → S3", "Chunk + embed", "Vector DB", "Hybrid retrieval", "LangGraph + LLM", "WebSocket stream", "React UI"],
  },
  {
    id: "sniff",
    title: "Sniff Circle",
    tag: "Social Platform",
    role: "Full-Stack Developer",
    year: "2024",
    description:
      "A social networking platform for pet owners — real-time playdate scheduling, activity feeds, chat and a global community.",
    longDescription:
      "Sniff Circle reimagines what a pet community looks like online. The Node.js + Express backend uses JWT authentication and WebSockets for real-time playdate scheduling and chat. Data is split by shape: MySQL holds relational data (users, pets, playdates) while MongoDB stores high-volume activity feeds and unstructured chat. The React UI is responsive and uses optimistic updates for a snappy feel.",
    stack: ["React", "Node.js", "Express", "MongoDB", "MySQL", "WebSockets", "JWT"],
    highlights: [
      "Real-time playdate scheduling over WebSockets",
      "Polyglot persistence — MySQL + MongoDB",
      "JWT auth & sessions",
      "Optimistic UI updates",
    ],
    architecture: ["React UI", "Express API (JWT)", "WebSockets", "MySQL · relational", "MongoDB · feeds & chat"],
  },
  {
    id: "secpass",
    title: "Secure Password Manager",
    tag: "Mobile · Security",
    role: "Mobile & Backend Developer",
    year: "2023",
    description:
      "A cross-platform encrypted vault built with Flutter, Firebase and Spring Boot — zero-knowledge, client-side AES encryption with real-time multi-device sync.",
    longDescription:
      "An encrypted password vault that works across iOS, Android and the web. AES encryption happens on-device with a zero-knowledge design — only ciphertext ever touches the network. Firestore handles real-time sync across devices with secure authentication, while Spring Boot REST APIs provide audit logging and multi-device session control.",
    stack: ["Flutter", "Dart", "Spring Boot", "Firebase", "Firestore", "AES"],
    highlights: [
      "Zero-knowledge, on-device encryption",
      "Real-time multi-device sync",
      "Audit logging & session control via Spring Boot",
      "One codebase for iOS, Android and web",
    ],
    architecture: ["Flutter client", "AES on-device", "Firestore sync", "Spring Boot · audit & sessions"],
  },
];

export const EDUCATION = [
  {
    school: "Visvesvaraya Technological University",
    short: "VTU",
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    location: "Belagavi, India",
    period: "Jul 2020 — May 2024",
    score: "8.68",
    scoreOf: "10",
    scoreLabel: "CGPA",
  },
];

export const ACHIEVEMENTS = [
  { title: "AWS Cloud Practitioner", org: "Amazon Web Services", icon: Cloud },
  { title: "500+ DSA Problems Solved", org: "LeetCode · CodeChef", icon: Terminal },
  { title: "5+ Academic Conferences", org: "IIT Guwahati research", icon: Mic },
  { title: "Hackathon Finalist", org: "Inter-college", icon: Award },
];

export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const MARQUEE_WORDS = [
  "Distributed Systems", "Java", "Spring Boot", "Python", "FastAPI", "AWS",
  "GenAI", "RAG", "LangGraph", "Microservices", "Kubernetes", "React", "System Design",
];

