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
    title: "Bachelors in Computer Science",
    location: "KIET college, India",
    description:
      "I graduated from my bachelors degree in Computer Science. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Full stack Developer Intern",
    location: "Multiplier AI Solutions, Hyderabad",
    description:
      "As a fresher at Multiplier AI Solutions, Developed high-performance web applications for the healthcare sector, improving operational efficiency by 30% and reducing page load times by 20%. Engineered scalable, responsive apps using React.js, JavaScript, and Java Spring Boot, creating reusable components and leveraging React hooks for state management. Designed RESTful APIs with Java Spring Boot, deployed via Docker, and utilized AWS services for cost-effective, high-availability solutions. Built role-based dashboards for healthcare professionals, integrated third-party APIs for SMS/WhatsApp campaigns, and developed Python-based email automation tools. Optimized MySQL and MongoDB database operations, implemented CI/CD pipelines, and ensured robust code quality through unit testing. Led code reviews, debugging, and troubleshooting in Agile environments. Enhanced UI/UX design and developed custom WordPress themes/plugins to meet client needs, optimizing backend workflows and API integrations.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - May 2020",
  },
  {
    title: "Full stack Developer",
    location: "Multiplier AI Solutions, Hyderabad",
    description:
      "As a full time developer at Multiplier AI Solutions, I Led the design and development of scalable applications using Node.js, React.js, and MSSQL, enhancing operational performance. Conducted code reviews to ensure adherence to standards and optimize maintainability. Designed a real-time chat app to improve team communication and productivity. Developed API endpoints for seamless integration and enhanced data flow. Managed server and domain integration for secure deployments. Collaborated with UX designers and QA engineers to deliver customer-centric software solutions. Improved data accuracy by 60% through MSSQL automation and mentored junior developers, fostering growth and excellence.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2020 - Jan 2022",
  },
  {
    title: "Front-End Developer",
    location: "Rapid Innovation, Noida",
    description:
      "Led front-end development for NFT and crypto platforms like Radius Protocol and PixelPark, driving a 30% increase in user adoption using React.js, TypeScript, and Web3 technologies. Enhanced blockchain integration with Web3JS, improving transaction success by 25%, and delivered pixel-perfect UIs with Tailwind CSS and Next.js, boosting user satisfaction by 20% and reducing bounce rates by 15%. Streamlined state management with Redux and GraphQL, reducing load times by 40%. Developed PixelPark NFT Marketplace, improving platform reliability and user satisfaction. Championed CI/CD pipelines, ensured high code quality, and collaborated cross-functionally to maintain a 100% project delivery rate. Emphasized secure, scalable architectures with Docker and Kubernetes, and mentored junior developers to foster team growth. This led to a 30% increase in user adoption on NFT and crypto platforms and a 25% boost in transaction success rates. I also had the opportunity to work on U.S.-based projects for a year, optimizing UI/UX with Tailwind CSS, Next.js, and Redux, and delivering high-quality solutions.",
    icon: React.createElement(FaReact),
    date: "Feb 2022 - Feb 2023",
  },
   {
    title: "Masters in Computer Science",
    location: "Avila University, United States",
    description:
      "I am currently mastering my skills in Computer Science and Generative Artificial Intelligence at Avila University. My studies focus on advanced algorithms, machine learning, and AI techniques, equipping me with the knowledge and expertise to innovate and contribute to the evolving field of technology.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - Dec 2023",
  },
  {
    title: "Full stack AI Developer",
    location: "Our National Conversation, United States",
    description:
      "I worked as a Software Engineer at Our National Conversation (ONC) from January 2024 to December 2024. In this role, I developed a scalable and responsive interface using HTML5/CSS3, JavaScript/TypeScript, React.js, and Next.js, optimizing performance with server-side rendering. I enhanced user experience through React hooks, React Query, Zod, and React-Hook-Form for seamless form validation and data entry. Additionally, I led the development of an AI-powered Retrieval-Augmented Generation (RAG) application, integrating OpenAI and Meta's LLaMA APIs for dynamic, real-time responses. I also architected an end-to-end solution using Python Flask for API design, integrating LangChain for data processing and serving the backend for the React.js front-end.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Dec 2024",
  },
] 

export const projectsData = [
  {
    title: "PixelPark",
    description:
      "Developed a sophisticated NFT marketplace platform enabling users to lock, vote, verify, and claim rewards for NFT collections through seamless crypto wallet integration. Delivered a pixel-perfect UI by adhering strictly to Figma designs, enhancing user experience and engagement. Utilized Redux for robust state management, ensuring smooth and scalable application performance. Integrated GraphQL APIs for efficient data handling and implemented Styled Components and TypeScript for maintainable and type-safe code, contributing to the platform's reliability and user satisfaction.",
    tags: ["React", "Next.js", "TypeScript",  "Redux", "GraphQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "AINU Hospitals",
    description:
      "Developed a comprehensive hospital management website for AINU Hospitals using WordPress, leveraging various plugins and themes to meet client requirements. Customized functionalities with jQuery, PHP, and CSS to ensure a user-friendly interface and enhance overall performance. Focused on responsive design, providing seamless access across devices, and implemented SEO best practices for improved visibility. The project was completed ahead of schedule, demonstrating effective time management and collaboration with the client for timely feedback and adjustments.",
    tags: ["WordPress", "jQuery", "PHP", "CSS", "jQuery"],
    imageUrl: corpcommentImg,
},
  {
    title: "SunPharma Prohance D & JR Survey Tool ",
    description:
      "Developed an interactive customer platform using React.js that enhanced user engagement by 25% through seamless API integration. Integrated the WhatsApp API to enable automated customer communication and implemented cron jobs for scheduled message reminders, ensuring timely updates and boosting client satisfaction. The automation improved response rates and streamlined user notifications, resulting in a more efficient customer experience and a significant increase in user interactions across the platform.",
    tags: ["React", "PHP", "SQL", "Redux", "AWS"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "GMB DocRank AI",
    description:
      "Developed an AI-driven tool to enhance local search rankings for doctors, leveraging Google My Business API with React.js. Implemented Google Sign-In for streamlined user access and designed a pricing listing feature for transparent service offerings. Created an admin dashboard with advanced filters and pagination, allowing for efficient data management and analytics. Integrated user authentication for secure access, and optimized search visibility through keyword suggestions, contributing to a 20% improvement in local search rankings.",
    tags: ["React", "TypeScript", "Node.js", "Express JS", "MySQL"],
    imageUrl: rmtdevImg,
  }
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "C++",
  "jQuery",
  "React.js",
  "React Native",
  "Next.js",
  "Angular",
  "Python",
  "PHP",
  "Node.js",
  "Express.js",
  "MYSQL",
  "Generative AI",
  "Git",
  "Tailwind css",
  "Styled Components",
  "SASS",
  "Bootstrap",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "WordPress",
  "Webpack",
  "AWS",
  "Docker",
  "Jest",
] as const;
