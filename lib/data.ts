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
      "Delivered healthcare applications used by clinical and support staff to manage cases, tasks, and follow-ups. Built backend features in ASP.NET MVC/Web API using service-layer patterns, modernized key UI modules with React, and maintained SQL Server schemas with audit-friendly history tracking. Standardized environments using Docker and supported AWS delivery patterns.",
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
      "Built internal finance tools — configuration screens, reporting dashboards, and workflow experiences. Developed React + TypeScript dashboards with complex filtering and drilldowns, implemented ASP.NET Core APIs with clean separation of concerns, and tuned SQL Server performance by analyzing execution plans, rewriting heavy joins, and adding targeted indexes. Worked in an Azure-first environment with Git-based CI/CD workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Jun 2023",
    level: "Mid Level",
    technologies: [
      "React",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "REST",
      "Azure",
      "Docker",
      "Git",
    ],
  },
  {
    title: "Senior Application Developer (Full Stack)",
    location: "Perky (Perspective Partners LLC, client: Lincoln Finance), New York, NY (Remote)",
    description:
      "Owned end-to-end delivery for leave-management features across the HR platform (SaaS). Built React + Next.js + TypeScript UI experiences using reusable component patterns with Redux Toolkit/RTK Query. Delivered backend services with ASP.NET Core Web APIs and Node.js/Express for supporting services and integrations. Implemented secure workflows using JWT/OAuth and RBAC patterns, built a GenAI chatbot with RAG patterns (LangChain/LlamaIndex), and improved release reliability with GitHub Actions CI/CD and Docker in AWS environments. Mentored teammates through PR reviews and pairing sessions.",
    icon: React.createElement(FaReact),
    date: "Mar 2024 - Dec 2025",
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
      "JWT",
      "OAuth",
      "RBAC",
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
] as const;

export const projectsData = [
  {
    title: "Leave Management & Research Support Platform",
    description:
      "Built a workflow-driven platform for employees and HR teams to manage leave requests, approvals, balances, eligibility rules, and policy enforcement. Implemented React + TypeScript screens with reusable components, consistent UI states, and performance-first patterns (lazy loading, code splitting). Designed ASP.NET Core Web APIs with layered architecture, modeled accrual/balance rules in the database, and reduced report timeouts through indexing and execution-plan-driven query tuning. Used Docker and GitHub Actions CI/CD for repeatable, safe releases.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "PostgreSQL",
      "REST",
      "GraphQL",
      "Redis",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "GenAI HR Policy Assistant — RAG Chatbot",
    description:
      "Built an HR self-service assistant that answers leave/policy questions using a retrieval-first approach. Created a document ingestion flow, chunked and embedded content, indexed it into a vector store, and implemented retrieval for grounded responses. Integrated the assistant into a React/Next.js chat UI with follow-ups and safe fallback behavior. Added logging for retrieval traces and response outputs, and supported evaluation workflows to improve prompts and retrieval quality over time.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "LangChain",
      "LlamaIndex",
      "Vector DB",
      "Docker",
      "CI/CD",
      "AWS",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Financial Analytics Admin & Reporting Console",
    description:
      "Built an internal console for finance teams to configure thresholds and reporting rules, then explore analytics results with filters, drilldowns, and search. Developed the React UI with a component-first approach for quick dashboard additions. Delivered .NET APIs with stable response contracts and defensive validation. Tuned SQL Server queries for large datasets — rewriting joins/aggregations, adding indexes aligned with real filter usage, and validating improvements using execution plans.",
    tags: [
      "React",
      "TypeScript",
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "REST",
      "Azure",
      "Docker",
      "Git",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Healthcare Case Management Web App",
    description:
      "Worked on a case management system used by clinicians and support teams to track cases, tasks, and communications. Implemented backend workflows enforcing consistent case lifecycle rules with traceability. Modernized select UI modules with React, improved validation and error messaging, and maintained stored procedures and schema constraints with audit-friendly history tracking for compliance. Supported production through logs/DB traces and low-risk fixes.",
    tags: [
      "ASP.NET MVC",
      "ASP.NET Web API",
      "React",
      "JavaScript",
      "SQL Server",
      "Docker",
      "AWS",
    ],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "C#",
  "Python",
  "SQL",
  "Node.js",
  "Redux Toolkit",
  "RTK Query",
  "React Hooks",
  "HTML5/CSS3",
  "SSR/CSR",
  ".NET Core",
  "ASP.NET Core Web API",
  "Entity Framework Core",
  "LINQ",
  "Express",
  "REST APIs",
  "GraphQL",
  "SQL Server",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "JWT/OAuth",
  "RBAC",
  "LangChain",
  "LlamaIndex",
  "RAG/Vector DB",
  "AWS",
  "Azure",
  "Docker",
  "GitHub Actions",
  "Azure DevOps",
  "CI/CD",
  "Jest",
  "xUnit/MSTest",
  "Postman",
  "Git",
  "Jira",
  "Confluence",
] as const;
