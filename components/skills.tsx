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
  FaServer,
  FaLock,
  FaShieldAlt,
  FaRobot,
  FaProjectDiagram,
  FaLink,
  FaCode,
  FaUniversalAccess,
  FaBrain,
  FaCloud,
  FaVial,
  FaTools,
  FaDatabase,
  FaSearch,
  FaNetworkWired,
  FaUsers,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiDjango,
  SiFastapi,
  SiGraphql,
  SiTerraform,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiJest,
  SiTestinglibrary,
  SiPytest,
  SiKubernetes,
  SiOpenai,
  SiGithubactions,
  SiGithub,
  SiDatadog,
} from "react-icons/si";

type IconType = React.ComponentType<{ className?: string }>;

const categoryIconMap: Record<string, IconType> = {
  "AI / GenAI": FaBrain,
  "Backend": FaServer,
  "Frontend": FaReact,
  "Cloud / DevOps": FaCloud,
  "Testing": FaVial,
  "AI Tooling": FaTools,
};

const skillIconMap: Record<string, IconType> = {
  "Claude": FaRobot,
  "LangGraph": FaProjectDiagram,
  "LangChain": FaLink,
  "LlamaIndex": FaBrain,
  "RAG & RAG Evaluation": FaSearch,
  "MCP": FaNetworkWired,
  "Tool Calling": FaTools,
  "Multi-Agent Systems": FaUsers,
  "Guardrails": FaShieldAlt,
  "Embeddings & Vector Search": FaSearch,
  "AWS Bedrock": FaAws,
  "OpenAI Models": SiOpenai,
  "ChromaDB": FaDatabase,
  "pgvector": SiPostgresql,
  "Ollama": FaRobot,
  "Hugging Face": FaBrain,
  "Python": FaPython,
  "FastAPI": SiFastapi,
  "Django": SiDjango,
  "Node.js": FaNodeJs,
  "REST APIs": FaServer,
  "GraphQL": SiGraphql,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "RabbitMQ": SiRabbitmq,
  "JWT/OAuth": FaLock,
  "RBAC": FaShieldAlt,
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Redux Toolkit": SiRedux,
  "RTK Query": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "WCAG 2.1": FaUniversalAccess,
  "AWS (EKS, EC2, S3, RDS, API Gateway, Bedrock)": FaAws,
  "Kubernetes": SiKubernetes,
  "Docker": FaDocker,
  "GitHub Actions": SiGithubactions,
  "Terraform": SiTerraform,
  "Datadog": SiDatadog,
  "pytest": SiPytest,
  "Jest": SiJest,
  "React Testing Library": SiTestinglibrary,
  "Unit & Integration Testing": FaCode,
  "Claude Code": FaRobot,
  "Cursor": FaCode,
  "GitHub Copilot": SiGithub,
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-6xl px-4 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Technical Expertise</SectionHeading>
      <div className="grid gap-5 md:grid-cols-2">
        {skillsData.map((group, groupIndex) => {
          const CategoryIcon = categoryIconMap[group.category] ?? FaCode;
          const isFeatured = groupIndex === 0;

          return (
            <motion.div
              key={group.category}
              className={`rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow ${
                isFeatured ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md">
                  <CategoryIcon className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{group.category}</h3>
                <span className="ml-auto text-xs font-medium text-gray-500 dark:text-gray-400">
                  {group.skills.length} skills
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const SkillIcon = skillIconMap[skill];
                  return (
                    <li
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-1.5 text-sm text-gray-800 dark:text-white/85 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-white/10 transition-colors"
                    >
                      {SkillIcon && <SkillIcon className="text-gray-400 dark:text-gray-400" />}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
