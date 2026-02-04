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
      "Completed a Bachelor of Engineering in Computer Engineering with a strong foundation in software fundamentals and systems.",
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
      "React",
      "JavaScript",
      "ASP.NET MVC",
      "ASP.NET Web API",
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
      "ASP.NET Core Web API",
      "SQL Server",
      "Azure",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Senior Application Developer (Full Stack)",
    location: "PERKY, Remote (Des Moines, IA)",
    description:
      "Owned end-to-end feature delivery for HR/leave platform workflows using React, Next.js, and TypeScript with Redux Toolkit/RTK Query. Integrated REST and GraphQL APIs, shipped supporting Node.js services where needed, and improved release reliability with GitHub Actions CI/CD and Docker in AWS environments.",
    icon: React.createElement(FaReact),
    date: "Mar 2024 - Dec 2024",
    level: "Senior",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "REST",
      "GraphQL",
      "Node.js",
      "GitHub Actions",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Master of Science, Computer Science",
    location: "Avila University, Kansas, USA",
    description:
      "Completed graduate study focused on advanced algorithms, machine learning, and AI systems with a strong academic record (GPA 3.63).",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2024",
    level: "Advanced",
    technologies: ["Algorithms", "Machine Learning", "AI Systems", "Research"],
  },
  {
    title: "Senior Software Developer (Contract)",
    location: "Lincoln Financial Group, Remote (Des Moines, IA)",
    description:
      "Built and enhanced enterprise leave/benefits workflows with React + TypeScript UIs and ASP.NET Core Web APIs. Delivered secure RBAC-aligned workflows, improved performance on data-heavy pages, and supported production stability with Docker and AWS-based deployment practices.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - Present",
    level: "Senior",
    technologies: [
      "React",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "Redis",
      "Docker",
      "AWS",
      "RBAC",
    ],
  },
] as const;

export const projectsData = [
  {
<<<<<<< HEAD
    title: "Leave Management Tool",
    description:
      "Currently developing a comprehensive leave management system that enables users, HR professionals, and employers to identify and manage paid and unpaid leaves according to US federal regulations, state-specific leave policies, and maternal leave requirements. As a full-stack developer, I'm implementing the solution using Next.js, React.js, and Node.js for robust frontend and backend functionality. The system is containerized with Docker for consistent deployment and utilizes PostgreSQL for reliable data management. The platform is deployed on Aptible for scalable cloud hosting, ensuring high availability and performance for enterprise-level leave management operations. The application features role-based access control, automated leave calculations, compliance reporting, and integration with HR systems to streamline the entire leave management process.",
    tags: ["Next.js", "React.js", "Node.js", "Docker", "Aptible", "PostgreSQL", "Full Stack", "TypeScript", "Tailwind CSS", "GitHub Actions", "JWT", "OAuth"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ONC News Management Platform",
    description:
      "Developed a dynamic and comprehensive news management platform for Our National Conversation (ONC) that aggregates and categorizes the latest news from across the United States. The platform features multiple news categories including Popular Voices, Tech News, Sports News, and Political News, providing users with a centralized hub for diverse content consumption. Built with React.js and Next.js for optimal performance and SEO, the application leverages Node.js backend for robust API management and PostgreSQL for efficient data storage and retrieval. Implemented advanced filtering and search capabilities, real-time news updates, and personalized content recommendations. The platform utilizes Tailwind CSS for responsive design, ensuring seamless user experience across all devices. Features include user authentication, content categorization, bookmarking functionality, and social sharing integration.",
    tags: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL", "News API", "TypeScript", "Redux", "JWT", "RESTful APIs", "Responsive Design", "SEO"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Online Customer Assistance and Survey Platform",
    description:
      "Developed a dynamic online customer assistance and survey platform, utilizing React.js for a modular, responsive frontend and optimizing the Node.js backend, resulting in a 40% improvement in response times. Integrated third-party APIs, such as WhatsApp, to enhance communication and used Chart.js for visualizing demographics. Leveraged AWS for scalable hosting and deployment, while automating testing with Jest, GitHub Actions, and Docker to ensure high-quality performance and streamlined workflows. The platform features advanced survey creation tools, real-time customer support chat, automated response systems, and comprehensive analytics dashboard. Implemented user authentication, role-based access control, and data encryption for security. The system supports multiple survey types, conditional logic, and export functionality for detailed reporting and analysis.",
    tags: ["React", "Node.js", "WhatsApp API", "Chart.js", "AWS", "Jest", "Docker", "TypeScript", "Express.js", "MongoDB", "Redux", "Bootstrap"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "PixelPark NFT Marketplace",
    description:
      "Developed a sophisticated NFT marketplace platform enabling users to lock, vote, verify, and claim rewards for NFT collections through seamless crypto wallet integration. Delivered a pixel-perfect UI by adhering strictly to Figma designs, enhancing user experience and engagement. Utilized Redux for robust state management, ensuring smooth and scalable application performance. Integrated GraphQL APIs for efficient data handling and implemented Styled Components and TypeScript for maintainable and type-safe code, contributing to the platform's reliability and user satisfaction. The marketplace features advanced filtering options, real-time price tracking, auction functionality, and secure wallet integration. Implemented comprehensive user profiles, collection management, and transaction history tracking. The platform supports multiple blockchain networks and includes advanced features like batch minting, royalty distribution, and community governance tools.",
    tags: ["React", "Next.js", "TypeScript", "Redux", "GraphQL", "Styled Components", "Web3.js", "Ethereum", "Solidity", "MetaMask", "IPFS", "Node.js"],
    imageUrl: corpcommentImg,
  },
  {
    title: "GMB DocRank AI",
    description:
      "Developed an AI-driven tool to enhance local search rankings for doctors, leveraging Google My Business API with React.js. Implemented Google Sign-In for streamlined user access and designed a pricing listing feature for transparent service offerings. Created an admin dashboard with advanced filters and pagination, allowing for efficient data management and analytics. Integrated user authentication for secure access, and optimized search visibility through keyword suggestions, contributing to a 20% improvement in local search rankings. Collaborated with backend teams using Node.js to ensure seamless data processing and API interactions. The platform features automated rank tracking, competitor analysis, review management, and performance reporting. Implemented advanced SEO optimization tools, local citation management, and automated content suggestions to improve search visibility and patient acquisition for healthcare providers.",
    tags: ["React", "TypeScript", "Node.js", "Google APIs", "MySQL", "Express.js", "JWT", "OAuth", "SEO", "Analytics", "Dashboard", "RESTful APIs"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Generative AI Chatbot Development",
    description:
      "Developed advanced AI-powered chatbots using Python, Flask, LangChain, and fine-tuned large language models with OpenAI, Nvidia and Llama APIs, delivering real-time, dynamic customer interactions. Leveraged ChromaDB for efficient data retrieval, integrating LangChain for seamless chaining of responses and improved context management. Utilized RESTful APIs to fetch product data, handle complex user queries, and ensure a smooth user experience. Deployed in AWS to ensure scalability, high availability, and optimized performance, enhancing responsiveness and user engagement. Built a high-performance frontend in React and TypeScript, providing a cohesive and interactive interface that maximizes customer satisfaction. The chatbot system features natural language processing, sentiment analysis, multi-language support, and integration with CRM systems. Implemented conversation flow management, intent recognition, and automated response generation with human-like interactions and contextual understanding.",
    tags: ["Python", "Flask", "LangChain", "OpenAI", "LLaMA", "ChromaDB", "React", "TypeScript", "AWS", "NLP", "Machine Learning", "API Integration"],
    imageUrl: corpcommentImg,
  }
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Python",
  "Flask",
  "PHP",
  "RESTful APIs",
  "GraphQL APIs",
  "Web Accessibility (WCAG)",
  "Google APIs",
  "OpenAI",
  "Meta's LLaMA API",
  "Tailwind CSS",
  "Redux",
  "Webpack",
  "Babel",
  "WordPress",
  "SQL Server",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Jest",
  "Cypress",
  "SonarQube",
  "JWT",
  "OAuth",
  "Application State Management",
  "Immutable.js",
  "Micro frontend architecture",
  "SEO",
  "Git",
  "Docker",
  "GitHub Actions",
  "Jenkins",
  "Azure",
  "AWS",
=======
    title: "Leave Management & Research Support Platform",
    description:
      "Built a workflow-driven platform for leave requests, approvals, balances, and policy eligibility. Implemented React + TypeScript screens with reusable components and performance-friendly patterns, and designed ASP.NET Core APIs with layered architecture, EF Core, and tuned SQL for heavy reports.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "Redis",
      "Docker",
      "AWS",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Financial Analytics Admin & Reporting Console",
    description:
      "Delivered an internal console for finance teams to configure thresholds and explore analytics with filters and drilldowns. Built React + TypeScript UI modules and stable ASP.NET Core APIs, while optimizing SQL Server queries to reduce report load times.",
    tags: [
      "React",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "REST",
      "Azure",
      "Docker",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Healthcare Case Management Web App",
    description:
      "Supported a case management system for clinicians and support staff by modernizing select UI modules with React and improving validation/error handling. Implemented ASP.NET MVC/Web API workflows, maintained SQL Server schemas, and supported AWS/Docker delivery practices.",
    tags: [
      "ASP.NET MVC",
      "ASP.NET Web API",
      "React",
      "JavaScript",
      "SQL Server",
      "Docker",
      "AWS",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript (ES6+)",
  "C#",
  "SQL",
  "Node.js",
  "React",
  "Next.js",
  "React Hooks",
  "Redux Toolkit",
  "RTK Query",
  "HTML5",
  "CSS3",
  "ASP.NET Core Web API",
  ".NET Core",
  "Entity Framework Core",
  "LINQ",
  "REST",
  "GraphQL",
  "JWT",
  "OAuth 2.0",
  "SQL Server",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "AWS",
  "Azure",
  "GitHub Actions",
  "Azure DevOps",
  "Git",
  "Jest",
  "xUnit",
  "MSTest",
  "Postman",
  "Jira",
  "Confluence",
>>>>>>> 6355057 (Update portfolio resume content)
] as const;
