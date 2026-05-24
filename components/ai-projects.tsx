"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaTrophy,
  FaBrain,
  FaChartBar,
  FaComments,
  FaCogs,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { SiNvidia } from "react-icons/si";
import { aiProjectsData } from "@/lib/data";
import LoomEmbed from "./loom-embed";

const CARD_GRADIENT = "from-blue-600 to-indigo-700";
const BADGE_STYLE = "bg-white/20 text-white border border-white/30 text-xs font-semibold px-3 py-1 rounded-full";
const CARD_ICONS = [FaCogs, FaTrophy, FaBrain, FaComments, FaChartBar] as const;

export default function AiProjects() {
  return (
    <main className="flex flex-col items-center px-4 pt-28 pb-20">

      <motion.div
        className="text-center max-w-3xl mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <BsStars className="text-base" />
          AI / GenAI Projects
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          AI Projects,{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            RAG, Agents
          </span>{" "}
          & LLMs
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          A collection of AI-powered tools I built independently, exploring RAG pipelines, NVIDIA AI
          Endpoints, LangChain, n8n automation, and conversational interfaces. Prototyped and
          deployed fast.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {aiProjectsData.map((project, index) => {
          const Icon = project.id === 2 ? SiNvidia : CARD_ICONS[index];

          return (
            <motion.article
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={`bg-gradient-to-r ${CARD_GRADIENT} p-5 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-14 translate-x-14" />

                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon className="text-xl text-white" />
                  </div>
                  <span className={BADGE_STYLE}>{project.badge}</span>
                </div>

                <div className="relative z-10">
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">
                    {project.categoryLabel}
                  </p>
                  <h2 className="text-base font-bold leading-snug">{project.title}</h2>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900/30">
                {project.loomVideoId ? (
                  <LoomEmbed videoId={project.loomVideoId} title={project.title} />
                ) : project.loomNote ? (
                  <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.loomNote}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-200 group"
                  >
                    <FaGithub className="text-base group-hover:scale-110 transition-transform" />
                    View on GitHub
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 text-sm">
                    No public repo
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.p
        className="mt-16 text-sm text-gray-500 dark:text-gray-400 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        All projects built independently to explore what is possible with modern AI tooling. More
        experiments are always in progress.
      </motion.p>
    </main>
  );
}
