"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaGraduationCap,
  FaCalendarAlt,
  FaCode,
  FaDatabase,
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaCrown,
  FaLightbulb,
  FaBrain,
  FaDesktop,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDocker,
  SiAmazonaws,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiDjango,
  SiFastapi,
  SiRedis,
  SiGraphql,
  SiGitlab,
  SiTerraform,
  SiJest,
  SiPytest,
  SiKubernetes,
} from "react-icons/si";

const getLevelIcon = (level: string) => {
  switch (level) {
    case "Foundation":  return <FaLightbulb className="text-white" title="Foundation" />;
    case "Entry Level": return <FaCode className="text-white" title="Entry Level" />;
    case "Mid Level":   return <FaStar className="text-white" title="Mid Level" />;
    case "Advanced":    return <FaBrain className="text-white" title="Advanced" />;
    case "Senior":      return <FaCrown className="text-white" title="Senior" />;
    default:            return <FaBuilding className="text-white" />;
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Foundation":  return "bg-gradient-to-r from-gray-500 to-gray-600";
    case "Entry Level": return "bg-gradient-to-r from-blue-500 to-blue-600";
    case "Mid Level":   return "bg-gradient-to-r from-blue-600 to-indigo-700";
    case "Advanced":    return "bg-gradient-to-r from-indigo-600 to-indigo-700";
    case "Senior":      return "bg-gradient-to-r from-indigo-700 to-purple-700";
    default:            return "bg-gradient-to-r from-gray-500 to-gray-600";
  }
};

const getIconForRole = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("full stack") || t.includes("software")) return <FaCode className="text-white" />;
  if (t.includes("frontend")) return <FaDesktop className="text-white" />;
  if (t.includes("senior") || t.includes("ai engineer")) return <FaRocket className="text-white" />;
  if (t.includes("graduate") || t.includes("master") || t.includes("bachelor")) return <FaGraduationCap className="text-white" />;
  return <FaBuilding className="text-white" />;
};

const ic = "text-gray-500 dark:text-gray-400";

const getTechIcons = (technologies: readonly string[]) => {
  const techIcons: JSX.Element[] = [];

  technologies.forEach(tech => {
    const t = tech.toLowerCase();

    if (t.includes("html")) techIcons.push(<SiHtml5 key="html" className={ic} title="HTML5" />);
    else if (t.includes("css")) techIcons.push(<SiCss3 key="css" className={ic} title="CSS3" />);
    else if (t.includes("javascript")) techIcons.push(<SiJavascript key="js" className={ic} title="JavaScript" />);
    else if (t.includes("django")) techIcons.push(<SiDjango key="django" className={ic} title="Django" />);
    else if (t.includes("fastapi")) techIcons.push(<SiFastapi key="fastapi" className={ic} title="FastAPI" />);
    else if (t.includes("mysql")) techIcons.push(<SiMysql key="mysql" className={ic} title="MySQL" />);
    else if (t.includes("react")) techIcons.push(<SiReact key="react" className={ic} title="React" />);
    else if (t.includes("next.js") || t.includes("nextjs")) techIcons.push(<SiNextdotjs key="next" className={ic} title="Next.js" />);
    else if (t.includes("node.js") || t.includes("nodejs")) techIcons.push(<SiNodedotjs key="node" className={ic} title="Node.js" />);
    else if (t.includes("typescript")) techIcons.push(<SiTypescript key="ts" className={ic} title="TypeScript" />);
    else if (t.includes("python")) techIcons.push(<SiPython key="python" className={ic} title="Python" />);
    else if (t.includes("docker")) techIcons.push(<SiDocker key="docker" className={ic} title="Docker" />);
    else if (t.includes("aws")) techIcons.push(<SiAmazonaws key="aws" className={ic} title="AWS" />);
    else if (t.includes("postgresql")) techIcons.push(<SiPostgresql key="postgres" className={ic} title="PostgreSQL" />);
    else if (t.includes("redis")) techIcons.push(<SiRedis key="redis" className={ic} title="Redis" />);
    else if (t.includes("rabbitmq")) techIcons.push(<FaServer key="rabbitmq" className={ic} title="RabbitMQ" />);
    else if (t.includes("graphql")) techIcons.push(<SiGraphql key="graphql" className={ic} title="GraphQL" />);
    else if (t.includes("gitlab")) techIcons.push(<SiGitlab key="gitlab" className={ic} title="GitLab CI/CD" />);
    else if (t.includes("github")) techIcons.push(<SiGithub key="github" className={ic} title="GitHub Actions" />);
    else if (t.includes("datadog")) techIcons.push(<FaServer key="datadog" className={ic} title="Datadog" />);
    else if (t.includes("terraform")) techIcons.push(<SiTerraform key="terraform" className={ic} title="Terraform" />);
    else if (t === "git") techIcons.push(<SiGit key="git" className={ic} title="Git" />);
    else if (t.includes("tailwind")) techIcons.push(<SiTailwindcss key="tailwind" className={ic} title="Tailwind CSS" />);
    else if (t.includes("redux")) techIcons.push(<SiRedux key="redux" className={ic} title="Redux Toolkit" />);
    else if (t.includes("jest")) techIcons.push(<SiJest key="jest" className={ic} title="Jest" />);
    else if (t.includes("pytest")) techIcons.push(<SiPytest key="pytest" className={ic} title="pytest" />);
    else if (t.includes("langchain")) techIcons.push(<FaBrain key="langchain" className={ic} title="LangChain" />);
    else if (t.includes("langgraph")) techIcons.push(<FaBrain key="langgraph" className={ic} title="LangGraph" />);
    else if (t.includes("jwt")) techIcons.push(<FaShieldAlt key="jwt" className={ic} title="JWT" />);
    else if (t.includes("kubernetes")) techIcons.push(<SiKubernetes key="k8s" className={ic} title="Kubernetes" />);
    else if (t.includes("ai") || t.includes("llm")) techIcons.push(<FaBrain key="ai" className={ic} title="AI/LLM" />);
    else if (t.includes("database") || t.includes("dbms")) techIcons.push(<FaDatabase key="db" className={ic} title="Database" />);
    else if (t.includes("cloud")) techIcons.push(<FaCloud key="cloud" className={ic} title="Cloud" />);
    else if (t.includes("server") || t.includes("backend")) techIcons.push(<FaServer key="server" className={ic} title="Backend" />);
    else if (t.includes("security") || t.includes("authentication")) techIcons.push(<FaShieldAlt key="security" className={ic} title="Security" />);
  });

  return techIcons;
};

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Career Journey</SectionHeading>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Career progression line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {experiencesData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot with level indicator */}
                <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Level badge - responsive positioning */}
                <div className="absolute left-0 sm:left-0 top-4 z-10 transform -translate-x-full pr-2 hidden sm:block">
                  <div className={`${getLevelColor(item.level)} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1 whitespace-nowrap`}>
                    {getLevelIcon(item.level)}
                    <span className="hidden sm:inline">{item.level}</span>
                  </div>
                </div>
                
                <div className="ml-8 sm:ml-16">
                  <div className="group relative">
                    {/* Main card */}
                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>
                      
                      <div className="relative p-4 sm:p-6">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-2 sm:space-y-0">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                              {getIconForRole(item.title)}
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </h3>
                              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                                <FaBuilding className="text-gray-400" />
                                <span className="break-words">{item.location}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-left sm:text-right">
                            <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                              <FaCalendarAlt className="text-gray-400" />
                              <span className="font-medium">{item.date}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Technologies learned/used */}
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                              Technologies & Skills:
                            </span>
                            <div className="flex items-center space-x-2 flex-wrap">
                              {getTechIcons(item.technologies || []).map((icon, iconIndex) => (
                                <div key={iconIndex} className="p-1 sm:p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:scale-110 transition-transform">
                                  {icon}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
