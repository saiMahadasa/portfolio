"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { researchData, orcidUrl } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaBalanceScale, FaGithub, FaUser, FaUniversity } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

export default function Research() {
  const { ref } = useSectionInView("Research", 0.5);

  return (
    <section
      ref={ref}
      id="research"
      className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-4xl px-4"
    >
      <SectionHeading>Research</SectionHeading>

      <div className="space-y-6">
        {researchData.map((paper, index) => (
          <motion.article
            key={paper.title}
            className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-700" />

            <div className="p-6 sm:p-8 pl-8 sm:pl-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md">
                  <FaBalanceScale className="text-white text-lg" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {paper.status}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Paper
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold leading-snug text-gray-900 dark:text-white mb-4">
                {paper.title}
              </h3>

              <div className="space-y-1.5 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                <p className="flex items-center gap-2">
                  <FaUser className="text-gray-400 flex-shrink-0" />
                  {paper.authors}
                </p>
                <p className="flex items-center gap-2">
                  <FaUniversity className="text-gray-400 flex-shrink-0" />
                  <span>
                    {paper.status} at <span className="font-semibold">{paper.venue}</span>
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={paper.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 shadow hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  <FaGithub />
                  Dataset &amp; Code
                </a>
                <a
                  href={orcidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-800 dark:text-gray-100 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <SiOrcid className="text-[#A6CE39]" />
                  ORCID
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
