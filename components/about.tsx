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
      className=" mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About me </SectionHeading>

      <p className="mb-3">
        After completing my Master's in{" "}
        <span className="font-medium">Data Science</span>, I focused on
        leveraging my skills in{" "}
        <span className="font-medium">Full-stack Web Development</span> and{" "}
        <span className="font-medium">Machine Learning</span>. I have experience
        building <span className="italic">scalable web applications</span> and
        deploying ML models for real-world use cases. My core stack includes{" "}
        <span className="font-medium">React, Node.js, Java, and AWS</span>. I'm
        also proficient in{" "}
        <span className="font-medium">
          Python, SpringBoot, Docker, Kubernetes, PostgreSQL, SQL, Pytorch and ML Frameworks 
        </span>
        . I'm actively seeking a{" "}
        <span className="font-medium">full-time role</span> as a software
        developer or machine learning engineer.
      </p>

      <p className="mb-3">
        <span className="italic">When I’m not coding</span>, I enjoy gaming,
        learning photography, and exploring new technologies. I’m currently
        diving into <span className="font-medium">MLOps</span> and honing my
        skills in <span className="font-medium">Cloud Infrastructure</span>. I
        love the challenge of problem-solving and constantly strive to improve
        my expertise across the different tech stack.
      </p>
    </motion.section>
  );
}
