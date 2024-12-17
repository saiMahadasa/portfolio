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
      className="mb-28 max-w-[85rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Full Stack Developer with 5+ years of expertise in building scalable, high-performance web applications for healthcare, cryptocurrency, and AI-driven platforms. Proven track record of boosting application performance by 30% and reducing load times by 20%, significantly enhancing user satisfaction and operational efficiency. Skilled in debugging, problem-solving, and optimizing code for seamless functionality. Implemented security best practices, ensuring robust, secure applications.
<br/><br/>
At Multiplier AI Solutions, I played a key role in developing user-centric, highly responsive UIs for healthcare clients like Apollo, utilizing React.js, Node.js etc. These applications significantly improved patient satisfaction by providing an intuitive interface, while also reducing support expenses by streamlining processes. On the backend, I developed Restful Java Spring Boot APIs. I also implemented API validation to enhance data integrity and security and integrated in applications.
<br/><br/>
At Rapid Innovations, I led front-end development for NFT and crypto platforms such as Radius Protocol and PixelPark, utilizing React.js, TypeScript, and Web3. Translated Figma designs into pixel-perfect UIs. Recently, as an intern at Our National Conversation, I contributed to an AI project using React.js, Python Django, Node.js, Express.js, and worked with RAGs by integrating generative AI models like OpenAI and Llama, alongside vector databases.
<br/><br/>
Technical Mastery: Proficient in HTML, CSS, SASS, JavaScript, TypeScript, React.js, Next.js, C++, Electron, Java, Node.js, Express.js, Python Django, SQL, MongoDB, RESTful/GraphQL APIs, PHP, WordPress, Docker, and AWS deployment. Experienced in Progressive Web Apps, SEO optimization, and performance improvements to enhance site visibility and efficiency.
<br/><br/>
Developed AI-powered tools such as GMB DocRank AI, boosting local search visibility for healthcare professionals. Created an online Customer Assistance and Survey Platform , enhancing customer engagement.
<br/><br/>
Professional Expertise: Strong foundation in Object-Oriented Programming, data structures, and testing frameworks (Mocha, Jest). Skilled in Agile methodologies, DevOps practices, debugging, and cross-functional team collaboration. Proficient with Git, and GitHub for full-cycle software development and comprehensive documentation.
<br/><br/>
Currently advancing my skills with a Master’s in Computer Science, I’m eager to apply my full-stack expertise in emerging technologies, contributing innovative solutions in AI and web development. Open to connecting with recruiters and industry professionals.
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy Capturing and Editing pictures, watching movies, and playing cricket. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
