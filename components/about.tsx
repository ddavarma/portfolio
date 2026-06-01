"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const FACTS = [
  { label: "Program", value: "PhD, Computational Data Science & Engineering" },
  { label: "Institution", value: "North Carolina A&T State University" },
  { label: "Lab", value: "CABS Lab" },
  { label: "Advisor", value: "Dr. Balakrishna Gokaraju" },
  { label: "Started", value: "August 2025" },
  { label: "Expected defense", value: "2028" },
  { label: "Role on team", value: "Integration Lead, AutoDrive Challenge II" },
];

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="w-full max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={lineVariants}
            className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            01 — About
          </motion.p>

          <motion.h2
            variants={lineVariants}
            className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-5xl"
          >
            Autonomy, perception, and reliability.
          </motion.h2>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-fg-muted sm:text-lg">
            <motion.p variants={lineVariants}>
              I&apos;m a PhD researcher in{" "}
              <span className="text-fg">
                Computational Data Science and Engineering
              </span>{" "}
              at North Carolina A&amp;T State University, advised by{" "}
              <span className="text-fg">Dr. Balakrishna Gokaraju</span> in the{" "}
              <span className="text-fg">CABS Lab</span>. I started in August 2025
              and expect to defend in 2028.
            </motion.p>

            <motion.p variants={lineVariants}>
              My work sits at the intersection of{" "}
              <span className="text-fg">
                autonomous systems, perception, and reliability
              </span>
              . I&apos;m currently Integration Lead on the{" "}
              <span className="text-fg">GM/SAE AutoDrive Challenge II</span>{" "}
              team, coordinating perception, controls, and simulation subteams to
              bring a full autonomy stack onto a production Chevy Bolt EUV. In
              parallel, I research{" "}
              <span className="text-fg">low-cost semantic mapping</span> for
              indoor autonomous vehicles,{" "}
              <span className="text-fg">reliability modeling</span> for AI-driven
              systems, and{" "}
              <span className="text-fg">learned manipulation</span> for
              industrial robotics.
            </motion.p>

            <motion.p variants={lineVariants}>
              Before the PhD, I spent two years as a software engineer. At{" "}
              <span className="text-fg">Amazon Web Services</span> I worked on
              backend infrastructure and database performance at scale; at{" "}
              <span className="text-fg">HCA Healthcare</span> I deployed ML
              models for patient-data analytics. That engineering foundation
              shapes how I approach research:{" "}
              <span className="italic text-fg">
                I care about systems that actually run, not just results on
                paper.
              </span>
            </motion.p>

            <motion.p variants={lineVariants}>
              I&apos;m focused full-time on my PhD and not seeking industry roles
              right now. I&apos;m always open to research collaborations and
              conversations with other autonomy and robotics researchers, and
              I&apos;ll be exploring{" "}
              <span className="text-fg">summer 2027 research internships</span>{" "}
              closer to that window.
            </motion.p>
          </div>
        </motion.div>

        <div className="lg:col-span-5">
          <motion.aside
            className="lg:sticky lg:top-36"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          >
            <div className="rounded-2xl border border-line bg-bg-elevated p-6 sm:p-8">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
                At a glance
              </p>
              <dl className="space-y-5">
                {FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-1 gap-1 border-b border-line pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[1fr_2fr] sm:gap-4"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
                      {fact.label}
                    </dt>
                    <dd className="text-sm text-fg">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
