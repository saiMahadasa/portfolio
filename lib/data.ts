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
      "Graduated with a GPA of 3.58. Built a strong foundation in computer science principles and programming fundamentals. Mastered core web technologies including HTML, CSS, JavaScript, PHP, and MySQL. Developed hands-on experience with database design, web development, and software engineering practices. Completed multiple projects demonstrating full-stack development capabilities and problem-solving skills.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2016 - November 2020",
    level: "Foundation",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Web Development", "Database Design"],
  },
  {
    title: "Full Stack Developer",
    location: "Multiplier AI Solutions, Hyderabad, India",
    description:
      "Conceptualized end-to-end development and deployment of a healthcare application for 5000+ users, leveraging React, Node.js, and AWS, driving a 20% increase in patient appointments and reducing customer support tickets. Optimized code for faster load times, developed unit tests using Cypress, integrated Google APIs, and implemented security measures with validation to protect healthcare data and enhance user experience. Managed project changes using JIRA within an Agile framework and optimized version control through Git, improving delivery efficiency by 40% and ensuring seamless collaboration across teams.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2019 - January 2022",
    level: "Entry Level",
    technologies: ["React", "Node.js", "AWS", "Cypress", "Google APIs", "JIRA", "Git", "Agile"],
  },
  {
    title: "Software Developer",
    location: "Rapid Innovation, Noida, India",
    description:
      "Developed a full-stack financial application using React, Next.js, Typescript, App routing and MySQL, fetched data using Axios, NPM, Yarn Front-end build tools, used Immutable.js for security best practices delivering seamless user experiences and driving significant business growth by enhancing customer engagement and generating increased revenue. Implemented complex form validation with React-Hook-Form and Zod, enhancing user experience and error handling. Built RESTful APIs using Node.js, ensuring robust backend functionality. Integrated frontend libraries like Redux, along with custom hooks and reusable components, to enhance performance and scalability. Strong expertise in Server-Side Rendering (SSR), Static Site Generation (SSG), and hybrid rendering models to build high-performance, scalable web applications.",
    icon: React.createElement(FaReact),
    date: "February 2022 - June 2023",
    level: "Mid Level",
    technologies: ["React", "Next.js", "TypeScript", "MySQL", "Axios", "Redux", "SSR", "SSG", "React-Hook-Form", "Zod"],
  },
  {
    title: "Master of Science, Computer Science",
    location: "Avila University, Kansas, United States",
    description:
      "Graduated with a GPA of 3.63. Advanced studies in Computer Science and Generative Artificial Intelligence, focusing on advanced algorithms, machine learning, and AI techniques. Mastered cutting-edge technologies including AI, Large Language Models (LLMs), Generative AI, Software Development Life Cycle (SDLC), Java programming, and advanced Database Management Systems (DBMS). Developed expertise in modern software engineering practices, project management, and emerging AI technologies to innovate and contribute to the evolving field of technology.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023 - December 2024",
    level: "Advanced",
    technologies: ["AI", "LLMs", "Generative AI", "SDLC", "Java", "DBMS", "Machine Learning", "Project Management"],
  },
  {
    title: "Software Developer",
    location: "Our National Conversation, CA, United States",
    description:
      "Collaborated with product and UX teams to develop a dynamic, responsive news platform for ONC, driving a 20% increase in user engagement through seamless integration of front-end and back-end technologies using Agile methodologies. Designed and implemented visually appealing, responsive layouts using Figma, Framer, react routing and modern CSS frameworks, reducing development efforts while ensuring adherence to user stories and accessibility standards. Proficient in implementing web accessibility standards, including ADA compliance and WCAG guidelines, to ensure inclusive and user-friendly digital experiences. Developed a robust CI/CD pipeline using Jenkins, GitHub Actions, Docker, and Azure, automating deployments for over 20 features and updates, cutting release cycles by 50% and boosting team productivity by 30%.",
    icon: React.createElement(FaReact),
    date: "February 2024 - December 2024",
    level: "Specialized",
    technologies: ["React", "Figma", "Framer", "Jenkins", "GitHub Actions", "Docker", "Azure", "WCAG", "ADA Compliance"],
  },
  {
    title: "Senior Software Developer",
    location: "Perky NY, United States",
    description:
      "Spearheaded the development of a scalable Employee Leave Benefits Application using React.js and Node.js, delivering seamless user experience across complex workflows and reducing HR management. Engineered responsive, accessible UI components with Tailwind CSS and React Router, improving user engagement and ensuring full compliance with WCAG 2.1 accessibility standards. Automated the deployment pipeline using Docker and GitHub Actions, enabling smooth CI/CD integration with PostgreSQL and reducing deployment errors and downtime by over 60%.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2025 - Present",
    level: "Senior",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker", "GitHub Actions", "WCAG 2.1", "CI/CD"],
  },
] 

export const projectsData = [
  {
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
] as const;
