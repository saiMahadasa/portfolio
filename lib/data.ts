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
    title: "Full stack Developer",
    location: "Multiplier AI Solutions, Hyderabad",
    description:
      "As a fresher at Multiplier AI Solutions, I quickly adapted to industry standards, mastering React.js, CSS, JavaScript, Typescript, WordPress, PHP, Tailwind CSS, and Bootstrap to contribute to high-impact projects. My initiative in learning and applying these technologies led to a 15% reduction in customer support costs, enhanced patient satisfaction, and streamlined UI development for healthcare clients.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2020 - Jan 2022",
  },
  {
    title: "Front-End Developer",
    location: "Rapid Innovation, Noida",
    description:
      "After 1.5 years of experience, I refined my skills to write more efficient and scalable code at Rapid Innovations, utilizing React.js, TypeScript, and Web3 technologies. This led to a 30% increase in user adoption on NFT and crypto platforms and a 25% boost in transaction success rates. I also had the opportunity to work on U.S.-based projects for a year, optimizing UI/UX with Tailwind CSS, Next.js, and Redux, and delivering high-quality solutions.",
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
      "I worked as a Full Stack Web Developer during my internship at Our National Conversation, where I focused on developing AI-powered web applications using large language models (LLMs). I integrated these technologies into various projects, including a news website, where I incorporated the G News API for the ONC project. This experience enhanced my skills in both front-end and back-end development while exploring the innovative applications of AI in web solutions.",
    icon: React.createElement(FaReact),
    date: "Aug 2024 - Dec 2024",
  },
] as const;

export const projectsData = [
  {
    title: "PixelPark",
    description:
      "Developed a sophisticated NFT marketplace platform enabling users to lock, vote, verify, and claim rewards for NFT collections through seamless crypto wallet integration. Delivered a pixel-perfect UI by adhering strictly to Figma designs, enhancing user experience and engagement. Utilized Redux for robust state management, ensuring smooth and scalable application performance. Integrated GraphQL APIs for efficient data handling and implemented Styled Components and TypeScript for maintainable and type-safe code, contributing to the platform's reliability and user satisfaction.",
    tags: ["React", "Next.js", "TypeScript", "Styled Components", "Tailwind CSS", "Redux", "GraphQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "AINU Hospitals",
    description:
      "Developed a comprehensive hospital management website for AINU Hospitals using WordPress, leveraging various plugins and themes to meet client requirements. Customized functionalities with jQuery, PHP, and CSS to ensure a user-friendly interface and enhance overall performance. Focused on responsive design, providing seamless access across devices, and implemented SEO best practices for improved visibility. The project was completed ahead of schedule, demonstrating effective time management and collaboration with the client for timely feedback and adjustments.",
    tags: ["WordPress", "jQuery", "PHP", "CSS", "Responsive Design", "SEO"],
    imageUrl: ainuHospitalsImg,
},
  {
    title: "GMB DocRank AI",
    description:
      "Developed an AI-driven tool to enhance local search rankings for doctors, leveraging Google My Business API with React.js. Implemented Google Sign-In for streamlined user access and designed a pricing listing feature for transparent service offerings. Created an admin dashboard with advanced filters and pagination, allowing for efficient data management and analytics. Integrated user authentication for secure access, and optimized search visibility through keyword suggestions, contributing to a 20% improvement in local search rankings. Collaborated with backend teams using Node.js to ensure seamless data processing and API interactions.",
    tags: ["React", "TypeScript", "Node.js", "Express JS", "MySQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "SunPharma Prohance D & JR Survey Tool ",
    description:
      "Developed a customer platform with React.js, boosting interaction by 25% through API integration.",
    tags: ["React", "Node.js", "SQL", "Tailwind", "Chart.js", "Redux", "AWS"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "PHP",
  "Node.js",
  "Git",
  "Tailwind",
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
  "Jest",
] as const;
