"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { certificationsData } from "@/lib/data";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Certification() {
  const { ref } = useSectionInView("Certfication");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="certification"
    >
      <SectionHeading>Certifications</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {certificationsData.map((cert, index) => (
          <motion.li
            className="flex flex-col items-center bg-white border border-gray-300 rounded-xl px-6 py-4 shadow-lg dark:bg-gray-900 dark:text-white dark:border-gray-700"
            key={cert.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <Image
                src={cert.imageUrl} // This works with StaticImageData
                alt={`${cert.title} badge`}
                width={80} // Specify the width
                height={80} // Specify the height
                className="mb-4"
              />
              <span className="font-semibold">{cert.title}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Issued: {cert.issueDate}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Expires: {cert.expirationDate}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
