"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[2.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-brand backdrop-blur-[0.5rem] sm:top-2 sm:h-[2.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.05rem] left-1/2 h-8 -translate-x-1/2 py-0 sm:top-[0.8rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[20rem] flex-wrap items-center justify-center gap-y-1 text-[0.8rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-2 py-1 hover:text-primary-600 transition-all duration-300 dark:text-gray-500 dark:hover:text-primary-400 whitespace-nowrap font-medium text-sm",
                  {
                    "text-primary-600 dark:text-primary-400":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full absolute inset-0 -z-10 dark:from-primary-900 dark:to-secondary-900"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
