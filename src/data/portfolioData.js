// ============================================================
// portfolioData.js — Centralized configuration for Arman KB's Portfolio
// ============================================================

export const personalInfo = {
  name: "ARMAN KB",
  firstName: "Arman",
  brandName: "ARMAN KB",
  title: "Backend Engineer | AI Systems | Technical Content & Automation",
  location: "Bangalore, India",
  phone: "Available on request",
  emails: {
    primary: "armankbarmankb04@gmail.com",
    secondary: "armankbarmankb04@gmail.com",
  },
  summary:
    "Computer Science Engineering undergraduate passionate about building scalable backend systems, AI-powered applications, distributed systems, semantic search engines, database technologies, and cloud-native applications.",
  resumeUrl: "/kb1.pdf",
};

export const socialLinks = {
  github: "https://github.com/Armankb2",
  linkedin: "https://www.linkedin.com/in/arman-kb-b53206262/",
  email: "mailto:armankbarmankb04@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Arman KB",
  titleHighlight: "Backend Engineer | AI Systems | Technical Content & Automation",
  headline: "Building Backend Systems. Exploring Intelligent Knowledge Experiences.",
  subtitle:
    "I'm a Computer Science Engineering student focused on backend engineering, AI-powered applications, and developer-focused technical solutions. I build scalable APIs, distributed systems, semantic search workflows, and automation tools.",
  ctaPrimary: { text: "View Projects", href: "#projects" },
  ctaSecondary: { text: "Contact Me", href: "#contact" },
  ctaResume: { text: "View Resume", href: "/kb1.pdf" },
};

export const aboutContent = {
  heading: "About Me",
  bio: `I'm a Computer Science Engineering student at M.S. Ramaiah Institute of Technology with a strong interest in Backend Engineering, AI Systems, and Developer-Focused Technical Content.

I build backend applications, distributed systems, and AI-powered workflows using Java, Spring Boot, Python, and FastAPI. My work includes developing REST APIs, integrating databases and messaging systems, and experimenting with semantic search, embeddings, and Retrieval-Augmented Generation (RAG).

I'm particularly interested in making complex technical systems easier to understand and use — through clear documentation, structured knowledge retrieval, and intelligent automation. I see documentation not just as a deliverable, but as a core engineering practice that improves developer experience and system reliability.`,
  education: {
    degree: "B.E. Computer Science Engineering",
    institution: "M.S. Ramaiah Institute of Technology",
    cgpa: "8.10",
    graduation: "2027",
  },
};

export const expertiseAreas = [
  {
    id: "backend",
    number: "01",
    title: "Backend Engineering",
    subtitle: "Scalable APIs & Distributed Systems",
    description:
      "Designing and building robust REST APIs and microservices using Java, Spring Boot, and FastAPI. Focused on clean architecture, secure authentication, database integration, and performance optimization for real-world applications.",
    highlights: ["REST API Design", "Spring Boot", "FastAPI", "PostgreSQL", "MongoDB", "Kafka", "Docker"],
  },
  {
    id: "ai-systems",
    number: "02",
    title: "AI Systems & Semantic Search",
    subtitle: "Embeddings, RAG & Knowledge Retrieval",
    description:
      "Building AI-powered applications that use vector embeddings, semantic search, and Retrieval-Augmented Generation to make information retrieval intelligent. Working with LLMs, embedding models, and vector storage engines.",
    highlights: ["Vector Storage", "Sentence Transformers", "BM25 Hybrid Search", "RAG Pipelines", "LLM Integration"],
  },
  {
    id: "technical-content",
    number: "03",
    title: "Technical Content & Automation",
    subtitle: "Documentation, GenAI & Developer Tools",
    description:
      "Creating structured technical documentation, automating content workflows, and experimenting with GenAI-assisted authoring. Building tools that help developers understand complex systems through clear, accurate, and retrievable knowledge.",
    highlights: ["Markdown & Structured Docs", "API Specifications", "Python Automation", "GenAI Workflows", "Data Pipelines"],
  },
  {
    id: "knowledge-retrieval",
    number: "04",
    title: "Knowledge Retrieval & RAG",
    subtitle: "Accurate, Structured, Retrievable Information",
    description:
      "Ensuring that technical knowledge is accurate, well-structured, and efficiently retrievable. Working on systems where documentation quality directly impacts search accuracy, developer experience, and AI-assisted information retrieval.",
    highlights: ["Knowledge Structuring", "Retrieval Quality", "Embedding Organization", "Developer Instructions", "Information Architecture"],
  },
];

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      icon: "code",
      skills: ["Java", "Python", "Go", "SQL", "C++", "C"],
    },
    {
      title: "Backend Frameworks",
      icon: "server",
      skills: ["Spring Boot", "FastAPI", "Flask", "REST APIs", "Microservices"],
    },
    {
      title: "Databases & Messaging",
      icon: "database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Kafka", "RabbitMQ", "Vector Databases"],
    },
    {
      title: "AI & Knowledge Systems",
      icon: "brain",
      skills: ["Sentence Transformers", "RAG", "LLM Integration", "LangGraph", "Semantic Search", "Embeddings"],
    },
    {
      title: "Developer Tools",
      icon: "tool",
      skills: ["Docker", "Git", "GitHub Actions"],
    },
    {
      title: "Documentation & Automation",
      icon: "file-text",
      skills: ["Markdown", "API Documentation", "Protocol Buffers", "Python Automation", "PySpark", "Power BI"],
    },
  ],
};

export const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Analyze requirements, study system constraints, and research existing solutions. Map the problem space before writing any code.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design system components, define API contracts, choose appropriate databases and frameworks, and plan for scalability from the start.",
  },
  {
    number: "03",
    title: "Build",
    description: "Implement with clean, modular code. Integrate backend services, set up CI/CD pipelines, write tests, and iterate based on feedback.",
  },
  {
    number: "04",
    title: "Validate & Document",
    description: "Test thoroughly, monitor performance, write clear documentation, and ensure the system is maintainable and well-understood by others.",
  },
];

export const projects = [
  {
    id: "placement-syndicate",
    badge: "Flagship Project",
    title: "Placement Syndicate",
    description:
      "A microservices-based placement preparation platform combining interview experience management, mentorship workflows and AI-powered resume feedback. Integrates Spring Boot, FastAPI, Keycloak, PostgreSQL, MongoDB, Kafka and RabbitMQ. Its resume analysis pipeline combines BM25 lexical retrieval, Sentence Transformer embeddings and Groq LLM inference to generate feedback grounded in relevant interview experiences.",
    problem: "Students lack a unified platform that combines placement preparation resources with AI-powered resume analysis and semantic search across study materials.",
    architecture: "Spring Boot backend with FastAPI AI microservice. PostgreSQL for relational data, MongoDB for document storage, Kafka and RabbitMQ for asynchronous event messaging. Keycloak for authentication and Docker for containerization.",
    techTags: [
      "Java", "Spring Boot", "Python", "FastAPI", "React", "Keycloak",
      "PostgreSQL", "MongoDB", "Kafka", "RabbitMQ", "Docker", "RAG",
    ],
    links: {
      github: "https://github.com/Armankb2/Placement-Syndicate-mini.git",
      demo: "https://placement-syndicate-mini.pages.dev/",
    },
    category: "Backend & AI",
  },
  {
    id: "scopus",
    badge: "Featured Project",
    title: "Scopus",
    description:
      "A research analytics platform that aggregates faculty publication data from Google Scholar and Elsevier Scopus APIs. Uses a FastAPI backend, React interface, background extraction jobs and Server-Sent Events for live progress updates. Generates structured CSV, JSON, Excel and PDF reports with publication and citation metrics.",
    problem: "Researchers and institutions manually collect publication records across academic portals without real-time tracking or consolidated export capabilities.",
    architecture: "FastAPI asynchronous backend with background data extraction jobs. SQLite for lightweight local storage. Server-Sent Events (SSE) for streaming progress updates to the React interface.",
    techTags: [
      "Python", "FastAPI", "React", "Scopus API", "SSE", "Data Processing", "SQLite",
    ],
    links: {
      github: "https://github.com/Armankb2/Scopus.git",
    },
    category: "Backend & Data",
  },
  {
    id: "market-analysis",
    badge: "Featured Project",
    title: "Market Analysis",
    description:
      "An end-to-end financial analytics platform for stocks, cryptocurrencies and ETFs. Automates market data ingestion using Python and Yahoo Finance, stores structured data in MySQL, performs analytical transformations using PySpark and presents insights through Power BI dashboards. Includes a Groq-powered natural-language assistant that generates SQL queries to explore market data.",
    problem: "Financial market data is fragmented across sources, making ad-hoc trend exploration difficult for non-technical users who do not write SQL.",
    architecture: "Python automated ingestion pipeline connecting Yahoo Finance. MySQL for structured persistence. PySpark for analytical transformations and aggregations. Groq LLM integration for text-to-SQL translation with Power BI visualization dashboards.",
    techTags: [
      "Python", "MySQL", "PySpark", "Power BI", "Groq LLM", "React", "Data Engineering",
    ],
    links: {
      github: "https://github.com/Armankb2/market_analysis.git",
      demo: "https://marketpulse-app-seven.vercel.app",
    },
    category: "Data Engineering",
  },
  {
    id: "planning-agent",
    badge: "AI Systems",
    title: "Planning Agent",
    description:
      "An LLM-powered agentic workflow that decomposes complex user goals into smaller tasks, generates Python code and executes it in a Jupyter kernel for validation. Uses LangGraph-based tool orchestration to coordinate planning, code generation, execution and structured result reporting.",
    problem: "Complex multi-step computational problems cannot be solved reliably with a single LLM prompt without systematic planning and live execution validation.",
    architecture: "LangGraph-driven agentic planning graph. Implements stateful task decomposition, dynamic tool routing, code execution in a sandbox Jupyter kernel environment, and structured output formatting.",
    techTags: ["Python", "LangGraph", "LLMs", "Jupyter Kernel", "Agentic Workflows"],
    links: {
      github: "https://github.com/Armankb2/Planning-Agent.git",
    },
    category: "AI Systems",
  },
  {
    id: "save-vector",
    badge: "Database Systems",
    title: "Save Vector",
    description:
      "A Go-based vector storage and indexing project with structured models, indexing components and Protocol Buffer-generated types. Focuses on organizing vector data and supporting similarity-search workflows.",
    problem: "High-performance vector operations require minimal serialization overhead, strongly typed vector schema definitions, and lightweight indexing models.",
    architecture: "Engineered in Go utilizing Protocol Buffers for strict schema definitions and compact serialization. Implements internal vector representations and indexing foundations for similarity search.",
    techTags: ["Go", "Vector Storage", "Indexing", "Protocol Buffers"],
    links: {
      github: "https://github.com/Armankb2/Save-vector.git",
    },
    category: "Database Systems",
  },
];

export const technicalContentData = {
  demonstrated: [
    {
      title: "API Documentation & Specifications",
      description: "Documented REST endpoints, request/response models, and service contracts for backend microservices and data pipelines across Placement Syndicate and Scopus.",
    },
    {
      title: "Project Architecture Guides",
      description: "Authored structured READMEs, architectural overviews, and local deployment workflows for multi-service repositories.",
    },
    {
      title: "Python Automation",
      description: "Engineered automated data ingestion, background job extraction, and multi-format report exports (CSV, JSON, Excel, PDF).",
    },
    {
      title: "Semantic Retrieval & RAG Workflows",
      description: "Implemented hybrid search combining BM25 lexical indexing with dense embedding retrieval for grounded answer generation.",
    },
  ],
  interests: [
    "GenAI-assisted authoring and content generation",
    "Prompt design and reusable evaluation templates",
    "Documentation quality validation and linting",
    "Knowledge extraction from codebases",
    "Structured content for developer portals",
    "Embedding optimization for retrieval accuracy",
  ],
};

export const certificates = {
  featured: [],
  viewAllUrl: null,
};

export const education = {
  degree: "B.E. Computer Science Engineering",
  institution: "M.S. Ramaiah Institute of Technology",
  cgpa: "8.10",
  graduation: "2027",
};

export const footerContent = {
  taglines: [
    "Backend Engineering & AI Systems",
    "Java · Spring Boot · Python · Go · FastAPI",
    "Technical Content & Automation",
  ],
  credential: "M.S. Ramaiah Institute of Technology · CGPA 8.10",
  copyright: `© ${new Date().getFullYear()} Arman KB | Engineered for Scale`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
