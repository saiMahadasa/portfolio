import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2 
      className="text-3xl font-medium capitalize mb-8 text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 dark:hover:from-blue-400 dark:hover:via-purple-400 dark:hover:to-blue-400 transition-all duration-500 cursor-default"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
      }}
    >
      {children}
    </motion.h2>
  );
}
