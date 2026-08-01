// ============================================================
// portfolioData.js — Centralized configuration for Arman KB's Portfolio
// ============================================================

export const personalInfo = {
  name: "ARMAN KB",
  firstName: "Arman",
  brandName: "ARMAN KB",
  title: "Backend & AI Systems Engineer",
  location: "Bangalore, India",
  phone: "Available on request",
  emails: {
    primary: "armankbarmankb04@gmail.com",
    secondary: "armankbarmankb04@gmail.com",
  },
  summary:
    "Computer Science Engineering undergraduate passionate about building scalable backend systems, AI-powered applications, distributed systems, semantic search engines, database technologies, DevSecOps and cloud-native applications.",
  resumeUrl: "https://drive.google.com/file/d/1I8Z5OxtpyPM8koxHRYivBKT4mhhm6fm3/view?usp=share_link",
};

export const socialLinks = {
  github: "https://github.com/Armankb2",
  linkedin: "https://www.linkedin.com/in/arman-kb-b53206262/",
  email: "mailto:armankbarmankb04@gmail.com",
  portfolio: "https://placement-syndicate-mini.pages.dev/",
};

export const heroContent = {
  greeting: "Hi, I'm Arman KB",
  titleHighlight: "Backend & AI Systems Engineer",
  subtitle:
    "I build highly scalable distributed systems, AI-powered applications, and robust backend architectures.",
  ctaPrimary: { text: "View Projects", href: "#projects" },
  ctaSecondary: { text: "Contact Me", href: "#contact" },
  ctaResume: { text: "Download Resume", href: "https://drive.google.com/file/d/1I8Z5OxtpyPM8koxHRYivBKT4mhhm6fm3/view?usp=share_link" },
};

export const aboutContent = {
  heading: "About Me",
  bio: `I am <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Arman KB</span>, a Computer Science Engineering student at M S Ramaiah Institute of Technology. I am deeply passionate about <strong>Backend Engineering</strong>, <strong>Java</strong>, and <strong>Spring Boot</strong>. I thrive on architecting distributed systems and building high-performance database engines. Beyond traditional backend development, I specialize in <strong>AI Systems</strong> and <strong>Semantic Search</strong>, constantly exploring ways to integrate intelligent solutions into robust applications. My drive for problem-solving pushes me to embrace continuous learning and adhere to the highest standards of software engineering.`,
  techStack: ["Java", "Spring Boot", "AI Systems", "Distributed Systems"],
};

export const skillsContent = {
  badge: "My Expertise",
  heading: "Architecting Scalable Backend Solutions",
  description:
    "From distributed databases to AI-driven search engines, I focus on performance, security, and scalability.",
  cards: [
    {
      number: "01",
      title: "Backend Engineering",
      text: "Designing robust, highly available REST APIs and microservices using Java, Spring Boot, and FastAPI.",
    },
    {
      number: "02",
      title: "AI & Semantic Search",
      text: "Building RAG systems, embedding storage, and hybrid search solutions using Vector Databases and LLMs.",
    },
    {
      number: "03",
      title: "Database Systems",
      text: "Developing custom storage engines and optimizing complex queries for PostgreSQL and MongoDB.",
    },
    {
      number: "04",
      title: "DevSecOps",
      text: "Implementing secure CI/CD pipelines, containerization with Docker, and monitoring with Prometheus & Grafana.",
    },
  ],
  endText: "Built for scale.",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "Python", level: 90 },
        { name: "SQL", level: 90 },
        { name: "C++", level: 85 },
        { name: "C", level: 85 },
      ]
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "Spring Security", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Flask", level: 80 },
        { name: "REST APIs", level: 95 },
        { name: "Microservices", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Vector Databases", level: 85 }
      ]
    },
    {
      title: "DevSecOps",
      skills: [
        { name: "Docker", level: 90 },
        { name: "GitHub Actions", level: 85 },
        { name: "Git", level: 90 },
        { name: "SonarQube", level: 80 },
        { name: "Trivy", level: 80 },
        { name: "Prometheus & Grafana", level: 75 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 }
      ]
    }
  ]
};

export const projects = [
  {
    id: "placement-syndicate",
    number: "01",
    badge: "Flagship Project",
    title: "Placement Syndicate",
    description:
      "An AI-enabled placement preparation platform featuring Hybrid Semantic Search (BM25 + Sentence Transformers), automated Resume Analysis, Resume Builder, and Interview Preparation. Backed by 20+ secure REST APIs and monitored via Prometheus and Grafana.",
    techTags: [
      "Spring Boot",
      "React",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "SonarQube",
      "Trivy",
      "Prometheus",
      "Grafana"
    ],
    links: {
      github: "https://github.com/Armankb2", // Placeholder if specific repo not available
      demo: "https://placement-syndicate-mini.pages.dev/",
    },
    isFlagship: true,
  },
  {
    id: "planning-agent",
    number: "02",
    badge: "AI Systems",
    title: "Planning Agent",
    description:
      "An autonomous multi-agent planning system with a modular architecture. Features intelligent tool orchestration and extensible APIs to solve complex, multi-step tasks dynamically using Large Language Models.",
    techTags: ["Python", "LLMs", "AI Agents", "Planning"],
    links: {
      github: "https://github.com/Armankb2/Planning-Agent",
    },
    isFlagship: false,
  },
  {
    id: "save-vector",
    number: "03",
    badge: "Database Systems",
    title: "Save Vector",
    description:
      "A lightweight, custom-built Vector Database focused on embedding storage and rapid semantic search. It utilizes Cosine Similarity Search to provide robust Retrieval-Augmented Generation (RAG) support for AI applications.",
    techTags: ["Python", "Vector Database", "Semantic Search"],
    links: {
      github: "https://github.com/Armankb2/Save-vector",
    },
    isFlagship: false,
  },
  {
    id: "bytemimicdb",
    number: "04",
    badge: "Core Engineering",
    title: "ByteMimicDB",
    description:
      "A lightweight, custom Database Engine designed from scratch. It features a custom storage architecture, query execution pipeline, and full support for basic CRUD operations to demonstrate deep understanding of DBMS internals.",
    techTags: ["Python", "Database Engine", "Storage"],
    links: {
      github: "https://github.com/Armankb2/ByteMimicDB",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Software Engineering Virtual Experience",
      issuer: "JPMorgan Chase",
      icon: null,
    },
    {
      name: "Software Engineering Virtual Experience",
      issuer: "Walmart USA",
      icon: null,
    }
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "B.E. Computer Science Engineering",
  institution: "M S Ramaiah Institute of Technology",
  cgpa: "7.84",
  graduation: "2027"
};

export const footerContent = {
  taglines: [
    "Backend Engineering & AI",
    "Java · Spring Boot · Distributed Systems",
    "Cloud Native Applications",
  ],
  credential: "M S Ramaiah Institute of Technology · CGPA 8.10",
  copyright: `© ${new Date().getFullYear()} Arman KB | Engineered for Scale`,
};

export const softSkillsList = [
  { name: "Problem Solving", icon: null, desc: "Breaking down complex engineering tasks into modular, scalable solutions." },
  { name: "Continuous Learning", icon: null, desc: "Always exploring new database technologies, AI systems, and DevSecOps tools." },
  { name: "System Design", icon: null, desc: "Architecting distributed systems and robust APIs capable of high throughput." },
  { name: "Adaptability", icon: null, desc: "Quickly transitioning between backend frameworks and emerging AI frameworks." }
];

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
