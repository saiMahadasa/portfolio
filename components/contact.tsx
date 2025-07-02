"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import { BsTelephone } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center px-4 sm:px-6 lg:px-8"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="text-gray-700 -mt-6 dark:text-white/80 space-y-2">
        <p>
          Please contact me directly at{" "}
          <a className="underline text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors" href="mailto:saimahadasa1999@gmail.com">
            saimahadasa1999@gmail.com
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <BsTelephone className="text-primary-600 dark:text-primary-400" />
          <a className="underline text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors" href="tel:+16605285209">
            +1 (660) 528-5209
          </a>
        </p>
        <p>or through this form below.</p>
      </div>

      <form
        className="mt-10 flex flex-col dark:text-black space-y-4"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-12 sm:h-14 px-4 rounded-lg border border-gray-300 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 text-sm sm:text-base"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-40 sm:h-52 rounded-lg border border-gray-300 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 text-sm sm:text-base resize-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
