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
  FaMapMarkerAlt,
  FaNetworkWired,
  FaShieldAlt,
  FaRobot,
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
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiDjango,
  SiFastapi,
  SiRedis,
  SiRabbitmq,
  SiGraphql,
  SiGithubactions,
  SiDatadog,
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
  if (t.includes("graduate") || t.includes("master") || t.includes("bachelor") || t.includes("b.tech")) return <FaGraduationCap className="text-white" />;
  return <FaBuilding className="text-white" />;
};

const ic = "text-gray-500 dark:text-gray-400";

const getTechIcon = (tech: string): JSX.Element | null => {
  const t = tech.toLowerCase();

  if (t.includes("html")) return <SiHtml5 className={ic} />;
  if (t.includes("css")) return <SiCss3 className={ic} />;
  if (t.includes("javascript")) return <SiJavascript className={ic} />;
  if (t.includes("django")) return <SiDjango className={ic} />;
  if (t.includes("fastapi")) return <SiFastapi className={ic} />;
  if (t.includes("mysql")) return <SiMysql className={ic} />;
  if (t.includes("react")) return <SiReact className={ic} />;
  if (t.includes("next.js")) return <SiNextdotjs className={ic} />;
  if (t.includes("node.js")) return <SiNodedotjs className={ic} />;
  if (t.includes("typescript")) return <SiTypescript className={ic} />;
  if (t.includes("python")) return <SiPython className={ic} />;
  if (t.includes("docker")) return <SiDocker className={ic} />;
  if (t.includes("aws")) return <SiAmazonaws className={ic} />;
  if (t.includes("postgresql")) return <SiPostgresql className={ic} />;
  if (t.includes("redis")) return <SiRedis className={ic} />;
  if (t.includes("rabbitmq")) return <SiRabbitmq className={ic} />;
  if (t.includes("graphql")) return <SiGraphql className={ic} />;
  if (t.includes("github actions")) return <SiGithubactions className={ic} />;
  if (t.includes("datadog")) return <SiDatadog className={ic} />;
  if (t.includes("kubernetes")) return <SiKubernetes className={ic} />;
  if (t.includes("jwt")) return <FaShieldAlt className={ic} />;
  if (t === "mcp") return <FaNetworkWired className={ic} />;
  if (t.includes("claude")) return <FaRobot className={ic} />;
  if (t.includes("lang") || t.includes("ai") || t.includes("learning")) return <FaBrain className={ic} />;
  if (t.includes("database")) return <FaDatabase className={ic} />;
  return <FaCode className={ic} />;
};

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Career Journey</SectionHeading>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
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
                <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
                
                <div className="absolute left-0 sm:left-0 top-4 z-10 transform -translate-x-full pr-2 hidden sm:block">
                  <div className={`${getLevelColor(item.level)} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1 whitespace-nowrap`}>
                    {getLevelIcon(item.level)}
                    <span className="hidden sm:inline">{item.level}</span>
                  </div>
                </div>
                
                <div className="ml-8 sm:ml-16">
                  <div className="group relative">
                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>
                      
                      <div className="relative p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-2 sm:space-y-0">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                              {getIconForRole(item.title)}
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.title}
                              </h3>
                              <div className="flex items-start space-x-2 text-sm sm:text-base font-medium text-blue-700 dark:text-blue-300 mt-1">
                                <FaBuilding className="text-blue-400 mt-1 flex-shrink-0" />
                                <span className="break-words">{item.company}</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-left sm:text-right space-y-1 pl-12 sm:pl-0 sm:flex-shrink-0">
                            <div className="flex items-center sm:justify-end space-x-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                              <FaCalendarAlt className="text-gray-400" />
                              <span className="font-semibold whitespace-nowrap">{item.date}</span>
                            </div>
                            <div className="flex items-center sm:justify-end space-x-1 text-xs text-gray-500 dark:text-gray-400">
                              <FaMapMarkerAlt className="text-gray-400" />
                              <span className="whitespace-nowrap">{item.location}</span>
                            </div>
                          </div>
                        </div>

                        <ul className="mb-5 space-y-2.5">
                          {item.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex gap-3 text-sm sm:text-[0.95rem] text-gray-700 dark:text-gray-300 leading-relaxed"
                            >
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                              <span>
                                <span className="font-semibold text-gray-900 dark:text-white">{point.lead}</span>{" "}
                                {point.text}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/80 dark:border-gray-700">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700/70 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
                            >
                              {getTechIcon(tech)}
                              {tech}
                            </span>
                          ))}
                        </div>

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
