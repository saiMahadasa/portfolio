"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaServer,
  FaLock,
  FaShieldAlt,
  FaRobot,
  FaProjectDiagram,
  FaLink,
  FaCubes,
  FaMobileAlt,
  FaCode,
  FaUniversalAccess,
  FaRocket,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiApollographql,
  SiTerraform,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiRabbitmq,
  SiJest,
  SiTestinglibrary,
  SiPytest,
  SiGitlab,
  SiKubernetes,
  SiHelm,
  SiOpenai,
  SiGit,
} from "react-icons/si";
const skillIconMap: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string }> = {
  "React.js": { icon: FaReact, color: "text-cyan-500" },
  "Next.js": { icon: SiNextdotjs, color: "text-gray-800 dark:text-gray-100" },
  "Next.js (App Router, SSR/SSG)": { icon: SiNextdotjs, color: "text-gray-800 dark:text-gray-100" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-600" },
  "JavaScript (ES6+)": { icon: SiJavascript, color: "text-yellow-400" },
  "Redux Toolkit": { icon: SiRedux, color: "text-purple-600" },
  "Zustand": { icon: FaCode, color: "text-orange-500" },
  "RTK Query": { icon: SiRedux, color: "text-purple-500" },
  "React Hooks": { icon: FaReact, color: "text-cyan-400" },
  "Context API": { icon: FaReact, color: "text-cyan-600" },
  "Micro Frontend": { icon: FaCubes, color: "text-indigo-500" },
  "Storybook": { icon: FaCode, color: "text-pink-500" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-500" },
  "Sass": { icon: SiSass, color: "text-pink-500" },
  "HTML5": { icon: SiHtml5, color: "text-orange-500" },
  "CSS3": { icon: SiCss3, color: "text-blue-500" },
  "WCAG 2.1 Accessibility": { icon: FaUniversalAccess, color: "text-blue-600" },
  "Responsive Design": { icon: FaMobileAlt, color: "text-green-500" },
  "Python": { icon: FaPython, color: "text-yellow-500" },
  "Django": { icon: SiDjango, color: "text-green-800 dark:text-green-400" },
  "Node.js": { icon: FaNodeJs, color: "text-green-600" },
  "Express.js": { icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
  "FastAPI": { icon: SiFastapi, color: "text-teal-500" },
  "REST APIs": { icon: FaServer, color: "text-blue-500" },
  "GraphQL": { icon: SiGraphql, color: "text-pink-500" },
  "Apollo": { icon: SiApollographql, color: "text-indigo-500" },
  "Terraform": { icon: SiTerraform, color: "text-purple-600" },
  "JWT Authentication": { icon: FaLock, color: "text-yellow-600" },
  "RBAC": { icon: FaShieldAlt, color: "text-red-500" },
  "LangChain": { icon: FaLink, color: "text-green-600" },
  "RAG": { icon: FaRobot, color: "text-purple-500" },
  "Agentic AI": { icon: FaRobot, color: "text-indigo-500" },
  "LangSmith": { icon: FaProjectDiagram, color: "text-green-500" },
  "LangGraph": { icon: FaProjectDiagram, color: "text-blue-600" },
  "Vercel AI SDK UI": { icon: FaRobot, color: "text-black dark:text-white" },
  "MCP": { icon: FaLink, color: "text-blue-500" },
  "Retrieval Grounding": { icon: FaLink, color: "text-purple-500" },
  "OpenAI": { icon: SiOpenai, color: "text-gray-800 dark:text-gray-100" },
  "Ollama": { icon: FaRobot, color: "text-gray-600" },
  "Hugging Face": { icon: FaCubes, color: "text-yellow-500" },
  "ChromaDB": { icon: FaDatabase, color: "text-orange-500" },
  "Pinecone": { icon: FaDatabase, color: "text-green-500" },
  "Embeddings": { icon: FaCubes, color: "text-purple-400" },
  "PostgreSQL": { icon: SiPostgresql, color: "text-blue-600" },
  "MongoDB": { icon: SiMongodb, color: "text-green-500" },
  "MySQL": { icon: SiMysql, color: "text-blue-600" },
  "Redis": { icon: SiRedis, color: "text-red-500" },
  "RabbitMQ": { icon: SiRabbitmq, color: "text-orange-500" },
  "SQL Server": { icon: FaDatabase, color: "text-red-600" },
  "Vector DB": { icon: FaDatabase, color: "text-purple-500" },
  "Jest": { icon: SiJest, color: "text-red-600" },
  "React Testing Library": { icon: SiTestinglibrary, color: "text-red-500" },
  "Integration Testing": { icon: FaCode, color: "text-red-500" },
  "Regression Testing": { icon: FaCode, color: "text-orange-500" },
  "Unit Testing": { icon: FaCode, color: "text-blue-500" },
  "Jenkins": { icon: FaServer, color: "text-red-600" },
  "GitHub Actions": { icon: FaServer, color: "text-gray-700 dark:text-gray-200" },
  "pytest": { icon: SiPytest, color: "text-blue-500" },
  "GitLab CI/CD": { icon: SiGitlab, color: "text-orange-600" },
  "Kubernetes": { icon: SiKubernetes, color: "text-blue-500" },
  "Helm": { icon: SiHelm, color: "text-blue-600" },
  "Docker": { icon: FaDocker, color: "text-blue-500" },
  "AWS": { icon: FaAws, color: "text-orange-500" },
  "Webpack": { icon: FaCubes, color: "text-blue-400" },
  "Vite": { icon: FaRocket, color: "text-yellow-500" },
  "SonarQube": { icon: FaShieldAlt, color: "text-blue-500" },
  "New Relic": { icon: FaProjectDiagram, color: "text-green-500" },
  "Git": { icon: SiGit, color: "text-orange-600" },
  "Structured Logging": { icon: FaServer, color: "text-gray-500" },
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technical Expertise</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          const iconData = skillIconMap[skill];
          const IconComponent = iconData?.icon;
          const iconColor = iconData?.color || "text-gray-500";

          return (
            <motion.li
              className="bg-white borderBlack rounded-xl px-4 sm:px-5 py-2 sm:py-3 dark:bg-white/10 dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/20 transition-colors flex items-center gap-2"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {IconComponent && <IconComponent className={`text-lg ${iconColor}`} />}
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
