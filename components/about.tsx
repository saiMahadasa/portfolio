"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaCode,
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaPython,
  FaTrophy,
  FaCertificate,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiRedis,
  SiFastapi,
  SiNodedotjs,
} from "react-icons/si";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  const techStack = [
    { icon: FaPython, name: "Python", color: "text-yellow-500" },
    { icon: SiFastapi, name: "FastAPI", color: "text-teal-500" },
    { icon: SiDjango, name: "Django", color: "text-green-800 dark:text-green-400" },
    { icon: FaRocket, name: "Gen AI / LLM", color: "text-purple-600 dark:text-purple-400" },
    { icon: FaAws, name: "AWS", color: "text-orange-600 dark:text-orange-400" },
    { icon: FaDocker, name: "Docker", color: "text-blue-600 dark:text-blue-300" },
    { icon: FaReact, name: "React.js", color: "text-cyan-500" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-gray-100" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-600" },
    { icon: SiRedis, name: "Redis", color: "text-red-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-600 dark:text-green-400" },
  ];

  const achievements = [
    {
      icon: FaCertificate,
      title: "AWS Certified Solutions Architect",
      subtitle: "Amazon Web Services, 2021",
      color: "bg-gradient-to-br from-blue-600 to-indigo-700",
    },
    {
      icon: FaTrophy,
      title: "NVIDIA AI RAG Developer Contest Winner",
      subtitle: "Generative AI Application, 2024",
      color: "bg-gradient-to-br from-blue-600 to-indigo-700",
    },
    {
      icon: FaCertificate,
      title: "AWS Certified Generative AI Engineer Associate",
      subtitle: "Amazon Web Services, 2026",
      color: "bg-gradient-to-br from-blue-600 to-indigo-700",
    },
  ];

  const experienceHighlights = [
    {
      icon: FaUsers,
      title: "Full Stack Delivery",
      description: "React + Python across 3 companies",
    },
    {
      icon: FaRocket,
      title: "Gen AI & RAG Systems",
      description: "LangGraph, AWS Bedrock, LangChain",
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Security",
      description: "RBAC, JWT/OAuth, audit logging",
    },
    {
      icon: FaChartLine,
      title: "Cloud & DevOps",
      description: "AWS, Kubernetes, GitLab CI/CD",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[85rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 dark:hover:from-blue-400 dark:hover:via-purple-400 dark:hover:to-blue-400 transition-all duration-500 cursor-default"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.05,
          textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
        }}
      >
        About Me
      </motion.h2>
      
      {/* Main Introduction Card */}
      <motion.div
        className="relative mb-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-brand-xl border border-primary-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Senior Full Stack AI Engineer
              </motion.h3>
              <motion.p 
                className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Primarily a Python and AI engineer, building scalable REST and GraphQL APIs with Django and FastAPI,
                and designing production-grade Gen AI systems using LangGraph, LangChain, and AWS Bedrock. Experienced
                with RAG pipelines, agentic workflows, vector embeddings, and multi-step document retrieval for real
                enterprise use cases. Backed by PostgreSQL, Redis, Docker, and Kubernetes on AWS.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                On the frontend, deliver full stack features end-to-end using React.js, Next.js, and TypeScript with
                Redux Toolkit and RTK Query for data-intensive dashboards, multi-step workflows, and
                role-based UIs that connect directly to AI-powered backends. Test coverage across pytest, Jest,
                and React Testing Library across the entire stack.
              </motion.p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-brand-lg">
                <FaCode className="text-4xl mb-4" />
                <h4 className="text-xl font-semibold mb-2">Full Stack Expertise</h4>
                <p className="text-white/80">Frontend to Backend, Cloud to AI</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Experience Highlights */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Professional Strengths
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {experienceHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-brand border border-gray-200 dark:border-gray-700 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                  <highlight.icon className="text-primary-600 dark:text-primary-400 text-xl" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{highlight.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technology Stack
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-brand border border-gray-200 dark:border-gray-700 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <tech.icon className="text-xl text-white" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Certifications & Awards */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Certifications & Awards
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-brand border border-gray-200 dark:border-gray-700 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mr-4 shadow-brand`}>
                  <achievement.icon className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Latest Role Highlight */}
      <motion.div
        className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white shadow-brand-xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <FaRocket className="text-5xl mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Currently at Perky, Client: Lincoln Financial Group
          </h3>
          <p className="text-xl text-primary-100 mb-6">
            Building full stack features for a financial analytics platform using React, TypeScript, Python Django,
            and GraphQL across 25+ data-intensive dashboards. Managing Kubernetes on AWS EKS with 99.9% uptime
            across services handling 20K+ records per request. Engineered Python REST APIs with RBAC, JWT/OAuth,
            and audit logging. Automated GitLab CI/CD with Docker and AWS, cutting release cycles by 40%.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/20 px-3 py-2 rounded-full text-sm">React.js</span>
            <span className="bg-white/20 px-3 py-2 rounded-full text-sm">TypeScript</span>
            <span className="bg-white/20 px-3 py-2 rounded-full text-sm">Python</span>
            <span className="bg-white/20 px-3 py-2 rounded-full text-sm">Django</span>
            <span className="bg-white/20 px-3 py-2 rounded-full text-sm">GraphQL</span>
            <span className="bg-white/20 px-3 py-2 rounded-full text-sm">Kubernetes</span>
            <span className="bg-white/20 px-3 py-2 rounded-full text-sm">LangGraph</span>
            <span className="bg-white/20 px-3 py-2 rounded-full text-sm">AWS</span>
          </div>
        </div>
      </motion.div>

      {/* Personal Interests */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-brand border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Outside of Work</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I maintain a curious mindset through continuous learning, currently exploring history and philosophy while 
            learning guitar. I enjoy photography, cricket, and watching films. This diverse range of interests helps 
            me bring fresh perspectives to problem-solving and team collaboration.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
