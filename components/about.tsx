"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Frontend Developer with 2.5 years of experience specializing in<span className="font-medium"> React.js, Next.js, 
        TypeScript, Redux, and Tailwind CSS </span>. Successfully improved application performance by <b>30% </b> 
        and reduced load times by <b>20%</b>. Adept at building responsive, scalable, and secure web applications
         in healthcare and cryptocurrency sectors. Proven ability to collaborate with global teams
          to deliver high-quality software solutions. Led initiatives that optimized resources, resulting
           in significant time and cost savings for organizations. Strong focus on modern development
            practices and continuous improvement, ensuring efficient and maintainable code that meets
             both user and business needs. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing cricket. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
