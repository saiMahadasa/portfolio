import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering, Computer Engineering",
    location: "Kakinada Institute of Engineering and Technology, India",
    description:
      "Completed a Bachelor of Engineering in Computer Engineering with a GPA of 3.58/4.00, building a strong foundation in software fundamentals and systems.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2020",
    level: "Foundation",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Database Design"],
  },
  {
    title: "Software Developer / Full Stack Developer",
    location: "Multiplier Solutions, Hyderabad, India",
    description:
      "Delivered healthcare case management portals with React and ASP.NET MVC/Web API, improving workflow clarity, validation, and reliability for clinical and support users. Implemented service-layer patterns, maintained SQL Server schemas and stored procedures, and supported production with Docker and AWS delivery practices.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Jan 2022",
    level: "Entry Level",
    technologies: [
      "C#",
      "ASP.NET MVC",
      "ASP.NET Web API",
      "React",
      "JavaScript",
      "SQL Server",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Software Developer (Contract)",
    location: "ICICI Home Finance Company, Noida, India",
    description:
      "Built internal financial reporting and workflow tools with React + TypeScript and ASP.NET Core Web APIs. Improved SQL Server performance via execution plan analysis, targeted indexing, and query refactors while supporting Azure-first deployments with disciplined validation and release stability.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Jun 2023",
    level: "Mid Level",
    technologies: [
      "React",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "Azure",
      "Docker",
      "Git",
    ],
  },
  {
    title: "Senior Application Developer (Full Stack)",
    location: "Perky (Perspective Partners LLC), New York, NY (Remote)",
    description:
      "Owned end-to-end feature delivery for HR/leave platform (SaaS) workflows using React, Next.js, and TypeScript with Redux Toolkit/RTK Query. Delivered backend services with ASP.NET Core Web APIs and Node.js/Express. Integrated REST and GraphQL APIs, built GenAI chatbot with RAG patterns, and improved release reliability with GitHub Actions CI/CD and Docker in AWS environments.",
    icon: React.createElement(FaReact),
    date: "Mar 2024 - Dec 2024",
    level: "Senior",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "Node.js",
      "Express",
      "Redux Toolkit",
      "RTK Query",
      "REST",
      "GraphQL",
      "PostgreSQL",
      "LangChain",
      "LlamaIndex",
      "GitHub Actions",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Master of Science, Computer Science",
    location: "Avila University, Kansas, USA",
    description:
      "Completed graduate study focused on advanced algorithms, machine learning, and AI systems with a strong academic record (GPA 3.63/4.00).",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2024",
    level: "Advanced",
    technologies: ["Algorithms", "Machine Learning", "AI Systems", "Research"],
  },
  {
    title: "Senior Software Developer (Contract)",
    location: "Lincoln Financial Group, New York, NY (Remote)",
    description:
      "Built and enhanced enterprise leave/benefits workflows in a regulated environment with React + Next.js + TypeScript UIs and ASP.NET Core Web APIs. Delivered secure RBAC-aligned workflows with JWT/OAuth concepts and audit-friendly logging, improved performance on data-heavy pages, built LLM-powered assistant workflows with RAG pipeline (LangChain/LlamaIndex), and supported production stability with Docker and CI/CD in AWS.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - Present",
    level: "Senior",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "Redis",
      "Node.js",
      "Express",
      "LangChain",
      "LlamaIndex",
      "Docker",
      "AWS",
      "JWT",
      "OAuth",
      "RBAC",
      "CI/CD",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Enterprise Leave Management Platform (Lincoln Financial)",
    description:
      "Leading development of enterprise HR/benefits system serving thousands of employees. Reduced support escalations by 30% through AI-powered policy assistant. Collaborated with compliance teams to ensure audit-ready workflows while maintaining high performance on data-intensive operations. Mentored team on secure coding practices and established code review standards.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "C#",
      "ASP.NET Core",
      "Node.js",
      "Microservices",
      "SQL Server",
      "LangChain",
      "AWS",
      "Docker",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "GenAI HR Policy Assistant with RAG",
    description:
      "Pioneered AI chatbot that answers employee policy questions instantly, reducing HR workload by 40%. Delivered production-ready solution with 95%+ answer accuracy through retrieval-augmented generation. Collaborated with HR stakeholders to define safe-answer boundaries and built monitoring dashboards for continuous quality improvement.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "LangChain",
      "LlamaIndex",
      "OpenAI",
      "Vector DB",
      "AWS",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "HR Leave SaaS Platform (Perky)",
    description:
      "Drove end-to-end delivery of SaaS platform for multi-tenant leave management. Improved release reliability by implementing CI/CD pipelines and comprehensive testing strategies. Partnered with product team to prioritize features based on customer feedback, resulting in 25% faster feature delivery cycles.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "ASP.NET Core",
      "Node.js",
      "Microservices",
      "PostgreSQL",
      "Redux",
      "GraphQL",
      "AWS",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Financial Analytics & Reporting Console (ICICI)",
    description:
      "Built analytics platform enabling finance teams to generate compliance reports 50% faster. Optimized database queries to handle 10x data volume without performance degradation. Collaborated with stakeholders to translate complex business requirements into intuitive dashboards. Delivered on Azure with zero-downtime deployment strategy.",
    tags: [
      "React",
      "TypeScript",
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "Azure",
      "Docker",
      "REST",
    ],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "React Hooks",
  "HTML5/CSS3",
  "Responsive Design",
  "C#",
  ".NET Core",
  "ASP.NET Core",
  "Entity Framework",
  "Node.js",
  "Express",
  "Microservices",
  "REST APIs",
  "GraphQL",
  "SQL Server",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "GitHub Actions",
  "LangChain",
  "LlamaIndex",
  "RAG/Vector DB",
  "OpenAI",
  "JWT/OAuth",
  "RBAC",
  "Git",
  "Jira",
  "Agile/Scrum",
  "Code Review",
  "Mentoring",
  "Team Leadership",
] as const;
