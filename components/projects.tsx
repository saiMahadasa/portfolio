"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws, 
  FaDocker, 
  FaCode,
  FaRocket,
  FaBrain,
  FaUsers,
  FaGlobe,
  FaNewspaper,
  FaChevronDown,
  FaChevronUp,
  FaShieldAlt,
  FaSearch,
  FaChartBar,
  FaDatabase,
  FaServer,
  FaLock,
  FaEye,
  FaCog,
  FaNetworkWired,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiPostgresql, 
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiJest,
  SiCypress,
  SiDocker,
  SiPython,
  SiFlask,
  SiOpenai,
  SiWhatsapp,
  SiChartdotjs,
  SiExpress,
  SiBootstrap,
  SiWeb3Dotjs,
  SiEthereum,
  SiSolidity,
  SiIpfs,
  SiGithubactions,
  SiGoogleanalytics
} from "react-icons/si";
import Image from "next/image";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({});

  const getProjectIcon = (title: string) => {
    const iconMap: { [key: string]: any } = {
      "Healthcare Management Web Platform": FaRocket,
      "AI-Powered Leave Assistant & Policy RAG Engine": FaBrain,
      "Financial Analytics Web Application": FaChartBar,
      "Healthcare Template & Workflow Modules": FaUsers,
    };
    return iconMap[title] || FaCode;
  };

  const getProjectColor = (index: number) => {
    const colors = [
      "from-primary-500 to-secondary-600",
      "from-accent-500 to-primary-600", 
      "from-secondary-500 to-accent-600",
      "from-primary-600 to-secondary-700",
      "from-accent-600 to-primary-700",
      "from-secondary-600 to-accent-700"
    ];
    return colors[index % colors.length];
  };

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      "React": FaReact,
      "Next.js": SiNextdotjs,
      "TypeScript": SiTypescript,
      "Node.js": FaNodeJs,
      "Python": SiPython,
      "MySQL": FaDatabase,
      "Zod": FaCode,
      "react-hook-form": FaCode,
      "FastAPI": FaServer,
      "Gulp.js": FaCog,
      "PostgreSQL": SiPostgresql,
      "MongoDB": SiMongodb,
      "Redis": FaDatabase,
      "Webpack": FaCog,
      "REST": FaNetworkWired,
      "GraphQL": SiGraphql,
      "Redux": SiRedux,
      "Docker": SiDocker,
      "AWS": FaAws,
      "Azure": FaDatabase,
      "LangChain": FaBrain,
      "LlamaIndex": FaBrain,
      "OpenAI": SiOpenai,
      "Vector DB": FaDatabase,
      "RAG": FaBrain,
      "GitHub Actions": SiGithubactions,
      "CI/CD": FaCog,
      "JWT": FaLock,
      "OAuth": FaLock,
    };
    return iconMap[tech] || FaCode;
  };

  const toggleProjectExpansion = (index: number) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateDescription = (description: string, maxLength: number = 120) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <section 
      ref={ref} 
      id="projects" 
      className="scroll-mt-28 mb-28 max-w-[85rem] mx-auto"
    >
      <SectionHeading>My projects</SectionHeading>
      
      {/* Projects Grid - 2 columns on desktop for better layout with 4 projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16 max-w-6xl mx-auto">
        {projectsData.map((project, index) => {
          const ProjectIcon = getProjectIcon(project.title);
          const gradientClass = getProjectColor(index);
          const isExpanded = expandedProjects[index];
          
          return (
            <motion.div
              key={index}
              className="group relative h-full"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              {/* Project Card */}
              <motion.div 
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 group-hover:shadow-2xl h-full flex flex-col ${
                  isExpanded ? 'ring-2 ring-blue-500/20 shadow-2xl' : ''
                }`}
                layout
                whileHover={{ y: -5 }}
              >
                
                {/* Header with Icon and Gradient */}
                <div className={`bg-gradient-to-r ${gradientClass} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <ProjectIcon className="text-2xl" />
                      </div>
                      {index === 0 && (
                        <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <FaCode className="mr-2" />
                      <span>Full Stack Development</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Project Description */}
                  <motion.div layout className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {isExpanded ? project.description : truncateDescription(project.description)}
                    </p>
                    
                    {/* Read More/Less Button */}
                    <motion.button
                      onClick={() => toggleProjectExpansion(index)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center mb-4 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? (
                        <>
                          <span>Show Less</span>
                          <FaChevronUp className="ml-1 text-xs" />
                        </>
                      ) : (
                        <>
                          <span>Read More</span>
                          <FaChevronDown className="ml-1 text-xs" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>

                  {/* Technology Stack - Hidden when expanded */}
                  <AnimatePresence>
                    {!isExpanded && (
                      <motion.div
                        initial={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-auto"
                      >
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <FaCode className="mr-2 text-blue-500" />
                          Technologies Used
                        </h4>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {project.tags.slice(0, 6).map((tag, tagIndex) => {
                            const TechIcon = getTechIcon(tag);
                            return (
                              <div
                                key={tagIndex}
                                className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-1 text-xs"
                              >
                                <TechIcon className="mr-1 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300 truncate">{tag}</span>
                              </div>
                            );
                          })}
                          {project.tags.length > 6 && (
                            <div className="flex items-center bg-blue-100 dark:bg-blue-900 rounded-lg px-2 py-1 text-xs">
                              <span className="text-blue-600 dark:text-blue-400">+{project.tags.length - 6} more</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Project Stats - Hidden when expanded */}
                  <AnimatePresence>
                    {!isExpanded && (
                      <motion.div
                        initial={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {index === 0 ? "Active" : "Completed"}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Status</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {project.tags.length}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Technologies</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expanded Content - Show when expanded */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <FaCode className="mr-2 text-blue-500" />
                            Technologies Used
                          </h4>
                          <div className="grid grid-cols-2 gap-2 mb-6">
                            {project.tags.map((tag, tagIndex) => {
                              const TechIcon = getTechIcon(tag);
                              return (
                                <div
                                  key={tagIndex}
                                  className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-1 text-xs"
                                >
                                  <TechIcon className="mr-1 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300 truncate">{tag}</span>
                                </div>
                              );
                            })}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">
                                {index === 0 ? "Active" : "Completed"}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Status</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">
                                {project.tags.length}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Technologies</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
