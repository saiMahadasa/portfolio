import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Research", hash: "#research" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Senior AI Engineer, People Development",
    company: "CoreWeave",
    location: "Manhattan, NY | Hybrid",
    icon: React.createElement(FaReact),
    date: "Jun 2026 - Present",
    level: "Senior",
    points: [
      {
        lead: "Built the Multi-Agent Onboarding Platform",
        text: "as the team's core system, and now apply the same agent patterns to recruiting, growth, and everyday People operations.",
      },
      {
        lead: "Designed agentic workflows that plan and act inside enterprise recruiting platforms,",
        text: "connecting agents to company systems through MCP so routine recruiting tasks run without manual handoffs.",
      },
      {
        lead: "Own the architecture for orchestration, memory, and guardrails",
        text: "across the team's agents, keeping each workflow safe, traceable, and consistent as new use cases roll out.",
      },
      {
        lead: "Building an internal skill graph and mobility tool",
        text: "that maps employee skills and surfaces matching growth opportunities, using Next.js, FastAPI, LangGraph, and PostgreSQL with pgvector for semantic matching.",
      },
      {
        lead: "Partner with People leaders on every rollout,",
        text: "from requirements and live demos to production, with GitHub Actions running build, test, and deploy on every change.",
      },
    ],
    technologies: [
      "Claude",
      "LangGraph",
      "MCP",
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    title: "Senior AI Engineer",
    company: "Perky (Perspective Partners LLC) | Client: Lincoln Financial Group",
    location: "New York, NY | Hybrid",
    icon: React.createElement(FaReact),
    date: "Mar 2024 - May 2026",
    level: "Senior",
    points: [
      {
        lead: "Shipped LLM assistants for employee benefits questions",
        text: "on a LangGraph and AWS Bedrock RAG pipeline that answers only from retrieved policy text, handling thousands of employee queries each month.",
      },
      {
        lead: "Designed a multi-tenant RAG layer on ChromaDB",
        text: "that reads policy and benefits documents, pulls out key details, and keeps each client's data isolated, with RBAC and full audit trails across three AWS environments.",
      },
      {
        lead: "Added AI-assisted workflows for appointments, reporting, and admin tasks,",
        text: "taking repetitive manual work off HR and operations teams.",
      },
      {
        lead: "Developed secure Python and Node.js APIs",
        text: "with REST and GraphQL endpoints on PostgreSQL, using JWT/OAuth, role-based access, and audit logging to meet enterprise API governance.",
      },
      {
        lead: "Kept production services at 99.9% uptime on AWS EKS",
        text: "with rolling updates, autoscaling, and health probes, shipped through Docker and GitHub Actions pipelines with automated tests and security checks.",
      },
      {
        lead: "Led demos and requirement sessions with Lincoln Financial,",
        text: "walking the client through new features and resolving feedback in the meeting so delivery stayed aligned with what the business needed.",
      },
    ],
    technologies: [
      "LangGraph",
      "AWS Bedrock",
      "Python",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "JWT",
    ],
  },
  {
    title: "Master of Science, Computer Science",
    company: "Avila University",
    location: "Kansas City, MO",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2024",
    level: "Advanced",
    points: [
      {
        lead: "GPA 3.63/4.00.",
        text: "Graduate coursework in advanced algorithms, machine learning, and AI systems.",
      },
    ],
    technologies: ["Machine Learning", "AI Systems", "Python", "Database Design"],
  },
  {
    title: "Software Developer",
    company: "Rapid Innovation | Client: ICICI Home Finance",
    location: "Hyderabad, India | Remote",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Jun 2023",
    level: "Mid Level",
    points: [
      {
        lead: "Built loan origination and credit approval workflows in React and TypeScript,",
        text: "with dynamic forms, validation, and accessible dashboards for high-volume lending operations.",
      },
      {
        lead: "Developed the backend in Node.js microservices and Django REST and GraphQL APIs,",
        text: "secured with OAuth 2.0, JWT, and RBAC to protect sensitive financial data.",
      },
      {
        lead: "Cut deployment time from 6 hours to under 45 minutes",
        text: "by rebuilding the release flow around multi-stage Docker builds and matching environments from development to production.",
      },
      {
        lead: "Reduced dashboard load time from 8 seconds to 2",
        text: "by tuning PostgreSQL query plans and adding Redis caching on the slowest paths.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Django",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "Software Developer",
    company: "Multiplier AI | Client: Apollo Hospitals",
    location: "Hyderabad, India",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2020 - Jan 2022",
    level: "Entry Level",
    points: [
      {
        lead: "Built multi-tenant healthcare modules and dashboards in React and TypeScript,",
        text: "improving UI responsiveness by 20% through debouncing, throttling, and component profiling.",
      },
      {
        lead: "Delivered real-time notifications and live dashboards",
        text: "with WebSockets and an event-driven RabbitMQ queue, routing each alert to the right role automatically.",
      },
      {
        lead: "Set up CI/CD in GitHub Actions",
        text: "with Docker builds and Datadog APM, cutting deployment time by 40% and helping the team spot production issues sooner.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "RabbitMQ",
      "Docker",
      "GitHub Actions",
      "Datadog",
    ],
  },
  {
    title: "B.Tech, Computer Science",
    company: "Kakinada Institute of Engineering and Technology",
    location: "India",
    icon: React.createElement(LuGraduationCap),
    date: "Apr 2020",
    level: "Foundation",
    points: [
      {
        lead: "CGPA 7.5/10.",
        text: "Foundation in data structures, software engineering, and web development.",
      },
    ],
    technologies: ["Python", "JavaScript", "MySQL", "Database Design"],
  },
] as const;

export const projectsData = [
  {
    title: "Multi-Agent Onboarding Platform",
    company: "CoreWeave",
    category: "Multi-Agent Systems",
    status: "Active",
    description:
      "Designed and built the multi-agent platform that runs onboarding for every new hire and hiring manager at CoreWeave. Specialist agents split the work across documents, system access, and ramp-up planning, so each new hire gets a personal plan with next steps for their first weeks, and each manager can see where their new hire stands. The agents run on Claude and LangGraph and reach internal HR and IT systems through MCP servers, while Slack bots deliver tasks, reminders, and answers inside the tools people already use, with sensitive actions sent to a person for approval. Onboarding state and audit history live in PostgreSQL behind FastAPI services on Kubernetes, and a live dashboard shows progress, blockers, and access issues for each new hire.",
    tags: [
      "Claude",
      "MCP",
      "LangGraph",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Slack API",
      "Kubernetes",
    ],
  },
  {
    title: "AI Leave Policy Advisor",
    company: "Perky, Client: Lincoln Financial Group",
    category: "Agentic RAG",
    status: "Shipped",
    description:
      "An AI leave advisor for an enterprise HR benefits platform that tells employees which leave they qualify for and how to apply. When an employee describes their situation, a LangGraph agent on AWS Bedrock checks it against federal FMLA rules, the leave laws of the state where they work, and company policy, then explains the result in plain language with the policy source and the steps to file. For HR, cases that once needed a manual policy lookup arrive with a cited summary ready for review, and dashboards show request volume, leave types, and the questions employees ask most.",
    tags: [
      "LangGraph",
      "AWS Bedrock",
      "RAG",
      "ChromaDB",
      "Python",
      "FastAPI",
      "React.js",
      "TypeScript",
    ],
  },
  {
    title: "Employee Benefits Assistant",
    company: "Perky, Client: Lincoln Financial Group",
    category: "Multi-Tenant RAG",
    status: "Shipped",
    description:
      "LLM assistants that answer employee benefits questions only from retrieved policy text, handling thousands of employee queries each month. A multi-tenant RAG layer on ChromaDB reads policy and benefits documents, pulls out key details, and keeps each client's data isolated, with RBAC and full audit trails across three AWS environments. Runs on AWS EKS at 99.9% uptime with rolling updates, autoscaling, and health probes, shipped through Docker and GitHub Actions pipelines with automated tests and security checks.",
    tags: [
      "LangGraph",
      "AWS Bedrock",
      "ChromaDB",
      "RAG",
      "Python",
      "PostgreSQL",
      "RBAC",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    title: "Loan Origination & Credit Workflows",
    company: "Rapid Innovation, Client: ICICI Home Finance",
    category: "Full Stack Fintech",
    status: "Shipped",
    description:
      "Loan origination and credit approval workflows for high-volume lending operations, built in React and TypeScript with dynamic forms, validation, and accessible dashboards. The backend runs on Node.js microservices and Django REST and GraphQL APIs secured with OAuth 2.0, JWT, and RBAC. Rebuilt the release flow around multi-stage Docker builds to cut deployment time from 6 hours to under 45 minutes, and tuned PostgreSQL query plans with Redis caching to bring dashboard load time from 8 seconds to 2.",
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Django",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
] as const;

export const orcidUrl = "https://orcid.org/0009-0007-0011-4496";

export const researchData = [
  {
    title: "When Visa Rules Change: Do Language Models Give the Rule in Force?",
    authors: "Sai Subrahmanyam Mahadasa",
    status: "Under review",
    venue: "AIDA2J @ JURIX 2026",
    codeUrl: "https://github.com/saiMahadasa/visa-rules-bench",
  },
] as const;

export const aiProjectsData = [
  {
    id: 1,
    title: "N8N AI Job Application Automation",
    badge: "Featured",
    categoryLabel: "AI Automation / LLM",
    description:
      "An end-to-end AI-powered job application system built entirely in n8n. Uses Apify to scrape fresh job listings, feeds them into an OpenAI AI Agent acting as a Resume Analyst, which rewrites and tailors the resume and cover letter to match each job description with ATS-optimized keywords. The tailored content is injected into a Google Docs template to generate a polished PDF. AnyMail Finder locates the hiring manager's direct email, and a personalized Gmail is sent with the custom resume attached, bypassing the job portal black hole entirely. Dramatically increases application volume while maintaining high personalization at scale.",
    tags: ["n8n", "OpenAI AI Agent", "Apify", "AnyMail Finder", "Google Docs API", "Gmail API", "LLM", "Automation", "ATS Optimization"],
    loomVideoId: "307dcaacea764e27adb833559e86c6a9",
    thumbnailUrl: "/n8n-demo-thumbnail.png",
    loomNote: null,
    githubUrl: null,
  },
  {
    id: 2,
    title: "NVIDIA Medical Advice RAG",
    badge: "NVIDIA AI Endpoints",
    categoryLabel: "RAG Pipeline",
    description:
      "A medical RAG system built with NVIDIA's NV-Embed-QA embedding model and LlamaIndex. Users enter health symptoms and the system retrieves contextually accurate medical insights by embedding documents with NVIDIA embeddings and organizing them via LlamaIndex for fast retrieval. Answers are generated through an intuitive Streamlit interface. Makes medical information accessible, precise, and grounded with no hallucinations.",
    tags: ["NVIDIA AI Endpoints", "NV-Embed-QA", "LlamaIndex", "Streamlit", "Python", "RAG", "HuggingFace", "Vector Embeddings"],
    loomVideoId: "61c10718fc19472cae6b2b49486c9f84",
    thumbnailUrl: "/nvidia-demo-thumbnail.png",
    loomNote: null,
    githubUrl: "https://github.com/saiMahadasa/llamaindex_nvidia_medical_advice_rag",
  },
  {
    id: 3,
    title: "Medical Assistant RAG Chatbot",
    badge: "RAG Pipeline",
    categoryLabel: "RAG Pipeline",
    description:
      "An AI-powered Medical Assistant Chatbot trained on a 600+ page medical book PDF. Uses LangChain, Sentence Transformers, and Pinecone vector database to deliver accurate, context-driven answers. Every response is grounded in the trained document with no hallucinations. Features vector embeddings for precise retrieval, a custom interactive chat UI built with HTML, CSS, and JavaScript, and a Flask backend serving the OpenAI-powered RAG chain. Fully open-sourced on GitHub.",
    tags: ["LangChain", "OpenAI GPT", "Pinecone", "Sentence Transformers", "Flask", "Python", "HTML/CSS/JS", "RAG"],
    loomVideoId: "a83bb0b5851f49f2b3f83f60aa2d19a4",
    thumbnailUrl: "/medical-chatbot-thumbnail.png",
    loomNote: null,
    githubUrl: "https://github.com/saiMahadasa/medical_chatbot",
  },
  {
    id: 4,
    title: "AI Portfolio Chatbot",
    badge: "Live in Production",
    categoryLabel: "Deployed",
    description:
      "A deployed, production-grade AI assistant integrated into this portfolio. Built with LangChain and OpenAI GPT-3.5-turbo-instruct, it answers questions about my career, projects, and skills using a custom persona-locked prompt with scope guardrails to prevent off-topic responses. Temperature set to 0 for professional consistency. Flask backend with CORS enabled, deployed via Procfile, integrated with the React frontend. This is the chatbot visible on this site right now.",
    tags: ["LangChain", "OpenAI GPT", "Flask", "React", "CORS", "Python", "Deployed", "Procfile"],
    loomVideoId: null,
    thumbnailUrl: "",
    loomNote: "This is the AI assistant running live on this site. Try it using the chat button in the bottom-right corner.",
    githubUrl: "https://github.com/saiMahadasa/ai_portfolio_chatbot",
  },
  {
    id: 5,
    title: "Financial Stock Advisor AI",
    badge: "Structured Output",
    categoryLabel: "OpenAI API / NLP",
    description:
      "Built with React.js and the OpenAI API, this app uses LLM-powered NLP to predict stock prices and surface estimated returns for investors in real time. Microsoft Copilot Studio handles the conversational layer, letting users query company performance through natural language and receive AI-generated profitability signals without needing financial expertise. The OpenAI model processes market-relevant inputs to deliver structured, actionable outputs through a clean, responsive interface across desktop and mobile.",
    tags: ["React.js", "OpenAI API", "Microsoft Copilot Studio", "LLM", "NLP", "AI Prediction", "JavaScript", "Responsive Design"],
    loomVideoId: "0d0fc66f292c468c827e2156ccd9185b",
    thumbnailUrl: "/financial-advisor-thumbnail.png",
    loomNote: null,
    githubUrl: "https://github.com/saiMahadasa/financial_data_extraction",
  },
] as const;

export const skillsData = [
  {
    category: "AI / GenAI",
    skills: [
      "Claude",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "RAG & RAG Evaluation",
      "MCP",
      "Tool Calling",
      "Multi-Agent Systems",
      "Guardrails",
      "Embeddings & Vector Search",
      "AWS Bedrock",
      "OpenAI Models",
      "ChromaDB",
      "pgvector",
      "Ollama",
      "Hugging Face",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "JWT/OAuth",
      "RBAC",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "WCAG 2.1",
    ],
  },
  {
    category: "Cloud / DevOps",
    skills: [
      "AWS (EKS, EC2, S3, RDS, API Gateway, Bedrock)",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "Terraform",
      "Datadog",
    ],
  },
  {
    category: "Testing",
    skills: ["pytest", "Jest", "React Testing Library", "Unit & Integration Testing"],
  },
  {
    category: "AI Tooling",
    skills: ["Claude Code", "Cursor", "GitHub Copilot"],
  },
] as const;
