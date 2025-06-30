"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { 
  FaBuilding, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaArrowUp,
  FaStar,
  FaCrown,
  FaLightbulb,
  FaBrain
} from "react-icons/fa";
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiJavascript,
  SiPython,
  SiDocker,
  SiAmazonaws,
  SiMicrosoftazure,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiFigma,
  SiJenkins
} from "react-icons/si";

const getLevelIcon = (level: string) => {
  switch (level) {
    case "Foundation":
      return <FaLightbulb className="text-yellow-500" title="Foundation Level" />;
    case "Entry Level":
      return <FaCode className="text-blue-500" title="Entry Level" />;
    case "Mid Level":
      return <FaStar className="text-green-500" title="Mid Level" />;
    case "Advanced":
      return <FaBrain className="text-purple-500" title="Advanced Level" />;
    case "Specialized":
      return <FaRocket className="text-orange-500" title="Specialized" />;
    case "Senior":
      return <FaCrown className="text-indigo-500" title="Senior Level" />;
    default:
      return <FaBuilding className="text-gray-500" />;
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Foundation":
      return "bg-gradient-to-r from-yellow-400 to-orange-400";
    case "Entry Level":
      return "bg-gradient-to-r from-blue-400 to-cyan-400";
    case "Mid Level":
      return "bg-gradient-to-r from-green-400 to-emerald-400";
    case "Advanced":
      return "bg-gradient-to-r from-purple-400 to-pink-400";
    case "Specialized":
      return "bg-gradient-to-r from-orange-400 to-red-400";
    case "Senior":
      return "bg-gradient-to-r from-indigo-400 to-purple-400";
    default:
      return "bg-gradient-to-r from-gray-400 to-gray-500";
  }
};

const getIconForRole = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("full stack") || lowerTitle.includes("software")) return <FaCode className="text-blue-500" />;
  if (lowerTitle.includes("frontend")) return <FaDesktop className="text-green-500" />;
  if (lowerTitle.includes("senior")) return <FaRocket className="text-purple-500" />;
  if (lowerTitle.includes("graduate") || lowerTitle.includes("master") || lowerTitle.includes("bachelor")) return <FaGraduationCap className="text-indigo-500" />;
  return <FaBuilding className="text-gray-500" />;
};

const getTechIcons = (technologies: string[]) => {
  const techIcons: JSX.Element[] = [];
  
  technologies.forEach(tech => {
    const lowerTech = tech.toLowerCase();
    
    if (lowerTech.includes("html")) techIcons.push(<SiHtml5 key="html" className="text-orange-500" title="HTML5" />);
    else if (lowerTech.includes("css")) techIcons.push(<SiCss3 key="css" className="text-blue-500" title="CSS3" />);
    else if (lowerTech.includes("javascript")) techIcons.push(<SiJavascript key="js" className="text-yellow-400" title="JavaScript" />);
    else if (lowerTech.includes("php")) techIcons.push(<SiPhp key="php" className="text-purple-500" title="PHP" />);
    else if (lowerTech.includes("mysql")) techIcons.push(<SiMysql key="mysql" className="text-blue-600" title="MySQL" />);
    else if (lowerTech.includes("react")) techIcons.push(<SiReact key="react" className="text-blue-400" title="React" />);
    else if (lowerTech.includes("next.js") || lowerTech.includes("nextjs")) techIcons.push(<SiNextdotjs key="next" className="text-black dark:text-white" title="Next.js" />);
    else if (lowerTech.includes("node.js") || lowerTech.includes("nodejs")) techIcons.push(<SiNodedotjs key="node" className="text-green-500" title="Node.js" />);
    else if (lowerTech.includes("typescript")) techIcons.push(<SiTypescript key="ts" className="text-blue-600" title="TypeScript" />);
    else if (lowerTech.includes("python")) techIcons.push(<SiPython key="python" className="text-blue-500" title="Python" />);
    else if (lowerTech.includes("docker")) techIcons.push(<SiDocker key="docker" className="text-blue-500" title="Docker" />);
    else if (lowerTech.includes("aws")) techIcons.push(<SiAmazonaws key="aws" className="text-orange-500" title="AWS" />);
    else if (lowerTech.includes("azure")) techIcons.push(<SiMicrosoftazure key="azure" className="text-blue-600" title="Azure" />);
    else if (lowerTech.includes("postgresql")) techIcons.push(<SiPostgresql key="postgres" className="text-blue-600" title="PostgreSQL" />);
    else if (lowerTech.includes("mongodb")) techIcons.push(<SiMongodb key="mongo" className="text-green-500" title="MongoDB" />);
    else if (lowerTech.includes("git")) techIcons.push(<SiGit key="git" className="text-orange-600" title="Git" />);
    else if (lowerTech.includes("github")) techIcons.push(<SiGithub key="github" className="text-gray-800 dark:text-white" title="GitHub" />);
    else if (lowerTech.includes("tailwind")) techIcons.push(<SiTailwindcss key="tailwind" className="text-cyan-500" title="Tailwind CSS" />);
    else if (lowerTech.includes("redux")) techIcons.push(<SiRedux key="redux" className="text-purple-600" title="Redux" />);
    else if (lowerTech.includes("java")) techIcons.push(<FaCode key="java" className="text-red-500" title="Java" />);
    else if (lowerTech.includes("figma")) techIcons.push(<SiFigma key="figma" className="text-pink-500" title="Figma" />);
    else if (lowerTech.includes("jenkins")) techIcons.push(<SiJenkins key="jenkins" className="text-red-600" title="Jenkins" />);
    else if (lowerTech.includes("ai") || lowerTech.includes("llm")) techIcons.push(<FaBrain key="ai" className="text-purple-500" title="AI/LLM" />);
    else if (lowerTech.includes("database") || lowerTech.includes("dbms")) techIcons.push(<FaDatabase key="db" className="text-blue-400" title="Database" />);
    else if (lowerTech.includes("cloud")) techIcons.push(<FaCloud key="cloud" className="text-blue-300" title="Cloud" />);
    else if (lowerTech.includes("mobile") || lowerTech.includes("responsive")) techIcons.push(<FaMobile key="mobile" className="text-green-400" title="Mobile" />);
    else if (lowerTech.includes("server") || lowerTech.includes("backend")) techIcons.push(<FaServer key="server" className="text-gray-400" title="Backend" />);
    else if (lowerTech.includes("security") || lowerTech.includes("authentication")) techIcons.push(<FaShieldAlt key="security" className="text-red-400" title="Security" />);
    else if (lowerTech.includes("team") || lowerTech.includes("collaboration")) techIcons.push(<FaUsers key="team" className="text-purple-400" title="Team Collaboration" />);
    else if (lowerTech.includes("analytics") || lowerTech.includes("performance")) techIcons.push(<FaChartLine key="analytics" className="text-green-500" title="Analytics" />);
  });
  
  return techIcons;
};

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Career Journey</SectionHeading>
      
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Career progression line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-blue-500 via-green-500 via-purple-500 via-orange-500 to-indigo-500 rounded-full"></div>
          
          <div className="space-y-12">
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
                <div className="absolute left-6 top-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Level badge - moved to left side */}
                <div className="absolute left-0 top-4 z-10 transform -translate-x-full pr-2">
                  <div className={`${getLevelColor(item.level)} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1 whitespace-nowrap`}>
                    {getLevelIcon(item.level)}
                    <span>{item.level}</span>
                  </div>
                </div>
                
                <div className="ml-16">
                  <div className="group relative">
                    {/* Main card */}
                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>
                      
                      <div className="relative p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                              {getIconForRole(item.title)}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </h3>
                              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mt-1">
                                <FaBuilding className="text-gray-400" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                              <FaCalendarAlt className="text-gray-400" />
                              <span className="font-medium">{item.date}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Technologies learned/used */}
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                              Technologies & Skills:
                            </span>
                            <div className="flex items-center space-x-2 flex-wrap">
                              {getTechIcons(item.technologies || []).map((icon, iconIndex) => (
                                <div key={iconIndex} className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:scale-110 transition-transform">
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
