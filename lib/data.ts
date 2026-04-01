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
      "Earned a Bachelor of Engineering in Computer Engineering with a GPA of 3.58/4.00, establishing a strong foundation in software engineering principles, data structures, and full stack web development.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2020",
    level: "Foundation",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Database Design"],
  },
  {
    title: "Software Developer",
    location: "Multiplier AI Solutions, Hyderabad, India",
    description:
      "Built template-driven healthcare screens using React.js with JSON-driven configuration, enabling new screen variations without rebuilding UI structure from scratch. Developed reusable workflow patterns for forms, validations, and error messaging that reduced repeated defects across modules. Integrated backend APIs with defensive rendering and validation-first behavior to handle incomplete records safely. Maintained build reliability through Gulp.js workflows and introduced unit testing discipline with Jest for shared utilities and critical UI logic.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Jan 2022",
    level: "Entry Level",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "REST APIs",
      "Gulp.js",
      "Jest",
      "Git",
    ],
  },
  {
    title: "Software Developer",
    location: "Rapid Innovation, Noida, India",
    description:
      "Developed data-dense UI workflows using React + TypeScript where users navigated dashboards, drilldowns, and reporting tables. Built reusable building blocks (filter bars, table shells, pagination controls, summary cards) so new report types shipped faster. Integrated backend services using Node.js/Express and GraphQL, focused on clean contracts and consistent response shapes. Collaborated on MySQL query tuning (joins, ordering, pagination) and maintained Webpack + Gulp build pipelines for reliable, environment-based builds.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Jun 2023",
    level: "Mid Level",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "GraphQL",
      "Redux Toolkit",
      "MySQL",
      "Webpack",
      "Jest",
      "GitHub Actions",
      "Git",
    ],
  },
  {
    title: "Senior Software Developer",
    location: "Perky (Perspective Partners LLC), Fairport, NY",
    description:
      "Owned key healthcare workflows end-to-end using React + TypeScript, building a component-driven UI system with reusable form sections, tables, modals, and stepper flows. Built complex validation-heavy forms using react-hook-form + Zod, designed scalable state management with Redux Toolkit, and integrated GraphQL (Apollo Client/Server) with Node.js/Express backends. Supported Redis-backed session patterns, Docker-based builds, AWS delivery practices, and New Relic monitoring. Contributed GenAI features by integrating LLM + RAG concepts using LangChain patterns with safe UX and evaluation-minded logging.",
    icon: React.createElement(FaReact),
    date: "Mar 2024 - Mar 2026",
    level: "Senior",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Redux Toolkit",
      "GraphQL",
      "Apollo",
      "react-hook-form",
      "Zod",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "JWT",
      "LangChain",
      "Docker",
      "AWS",
      "GitHub Actions",
      "Jest",
      "New Relic",
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
    title: "Healthcare Management Web Platform",
    description:
      "A secure healthcare platform supporting workflow-driven experiences where users manage dashboards, approvals, and document-driven processes. Built the frontend using React.js + TypeScript, combining Redux/Redux Toolkit for shared state (user context, permissions, cross-page filters) with Hooks for clean local UI control. A key focus was creating complex workflows using react-hook-form + Zod, centralizing validation rules and keeping multi-step flows consistent. Integrated through GraphQL (Apollo Client) and collaborated on Node.js/Express + Apollo Server patterns. Reliability was supported through Redis session/caching patterns, Docker builds, AWS delivery practices, and New Relic for monitoring and incident root-cause analysis.",
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "GraphQL",
      "Apollo",
      "Node.js",
      "Express",
      "react-hook-form",
      "Zod",
      "Redis",
      "MySQL",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "AI-Powered Leave Assistant & Policy RAG Engine",
    description:
      "Designed and delivered a production RAG assistant that helps employees and managers get policy-grounded answers inside a leave management SaaS product. Implemented ingestion and retrieval patterns (chunking, embeddings, retrieval) and generated answers constrained to retrieved context, with guardrails and fallback behavior when confidence was low. Integrated the assistant into real HR workflows using React + TypeScript, focusing on clear UX with helpful states (loading, citations, escalation paths). Added logging of retrieval sources and response metadata so support teams could reproduce issues and audit outputs. Deployed using Docker + CI/CD with cloud integrations for storage and monitoring.",
    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "LangChain",
      "Vector DB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Financial Analytics Web Application",
    description:
      "A dashboard-driven analytics product designed for users exploring large datasets through filters, drilldowns, and reporting screens. Built reusable UI systems with React + TypeScript and established consistent patterns for dense filters, table shells with pagination, and stable loading/error states so the experience stayed predictable even when queries took time. Used Redux/Redux Toolkit where shared state mattered across dashboards and implemented performance-friendly UI patterns to avoid unnecessary re-renders. On the integration side, worked with Node.js/Express and GraphQL contracts to keep payloads consistent. Collaborated on MySQL query behavior (joins, ordering, pagination) so dashboards stayed responsive as usage scaled.",
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "GraphQL",
      "MySQL",
      "Webpack",
      "Jest",
      "GitHub Actions",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Healthcare Template & Workflow Modules",
    description:
      "Healthcare operational modules built for reliability under real-world data conditions. Created React screens driven by JSON templates, which standardized layouts and reduced repeated UI effort. Built reusable workflow patterns for forms, validation, and messaging so modules behaved consistently — making the system easier for users to learn and easier for QA to test. Integrated backend APIs with defensive UI rendering and validation-first behavior to handle incomplete records safely. Maintained build and packaging workflows with Gulp.js, improved quality through Jest unit tests for shared logic, and strengthened teamwork by owning bug triage and communicating clearly with QA and stakeholders during Agile cycles.",
    tags: [
      "React",
      "JavaScript",
      "REST APIs",
      "Gulp.js",
      "Jest",
      "Git",
    ],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Redux Toolkit",
  "React Hooks",
  "Context API",
  "HTML5/CSS3",
  "react-hook-form",
  "Zod",
  "WCAG Accessibility",
  "Node.js",
  "Express.js",
  "GraphQL (Apollo)",
  "REST APIs",
  "JWT Auth",
  "Python",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "GitHub Actions",
  "CI/CD",
  "Jest",
  "Webpack",
  "Gulp.js",
  "Git",
  "New Relic",
  "LangChain",
  "RAG / Vector DB",
  "LLM Integration",
  "Agentic AI",
  "Hugging Face",
  "Postman",
  "NPM/Yarn",
] as const;
