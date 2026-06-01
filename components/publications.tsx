"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type Author = { name: string; isMe?: boolean };

type Publication = {
  title: string;
  authors: Author[];
  venue: string;
  year: string;
  status: string;
  topics: string[];
  note?: string;
};

const PUBLICATIONS: Publication[] = [
  {
    title:
      "Autonomous Generation of Semantic Occupancy Grids via Monocular Vision and Lidar Fusion for Low-Cost Autonomous Vehicles",
    authors: [
      { name: "A. Tang" },
      { name: "S. L. Kari" },
      { name: "D. Dantuluri", isMe: true },
      { name: "et al." },
    ],
    venue: "Journal submission",
    year: "2026",
    status: "Under revision",
    topics: ["Semantic mapping", "Sensor fusion", "Autonomous vehicles", "ROS"],
  },
  {
    title:
      "Reliability Growth Modeling of Agent-Driven GPU Kernel Optimization",
    authors: [
      { name: "D. Dantuluri", isMe: true },
      { name: "S. L. Kari" },
    ],
    venue: "RAMS 2027",
    year: "2027",
    status: "Under review · decision Jun 2026",
    topics: [
      "Software Reliability",
      "AI / ML",
      "LLM agents",
      "GPU kernels",
      "NHPP models",
    ],
    note: "Primary author · paper submission",
  },
  {
    title:
      "Physics-Informed Reliability of AV Camera Perception Under Thermal Degradation",
    authors: [
      { name: "Y. Thuraka" },
      { name: "S. L. Kari" },
      { name: "D. Dantuluri", isMe: true },
      { name: "V. Kosaraju" },
    ],
    venue: "RAMS 2027",
    year: "2027",
    status: "Under review · decision Jun 2026",
    topics: [
      "Autonomous Systems",
      "Physical Reliability",
      "Perception",
      "Heterogeneous nucleation",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Publications() {
  const { ref } = useSectionInView("Publications");

  return (
    <section
      ref={ref}
      id="publications"
      className="w-full max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          variants={headerVariants}
          className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          04 — Publications
        </motion.p>
        <motion.h2
          variants={headerVariants}
          className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-5xl"
        >
          Three papers in motion.
        </motion.h2>
        <motion.p
          variants={headerVariants}
          className="mt-5 max-w-2xl text-base text-fg-muted sm:text-lg"
        >
          One journal manuscript under revision; two RAMS 2027 submissions
          awaiting decision in June 2026.
        </motion.p>

        <motion.div className="mt-16 space-y-4 lg:space-y-5" variants={containerVariants}>
          {PUBLICATIONS.map((pub, idx) => (
            <PublicationCard key={pub.title} publication={pub} index={idx} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function PublicationCard({
  publication,
  index,
}: {
  publication: Publication;
  index: number;
}) {
  return (
    <motion.article
      variants={cardVariants}
      className="group grid grid-cols-1 gap-6 rounded-2xl border border-line bg-bg-elevated p-6 transition-colors duration-300 hover:border-fg-subtle sm:p-8 lg:grid-cols-12 lg:gap-10"
    >
      <div className="lg:col-span-3">
        <p className="font-display text-4xl font-medium leading-none tracking-tightest text-fg-subtle transition-colors duration-300 group-hover:text-accent sm:text-5xl">
          {String(index + 1).padStart(2, "0")}
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted">
          {publication.venue}
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
          {publication.year}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-bg-subtle px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-fg-subtle" />
          {publication.status}
        </div>
        {publication.note && (
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
            {publication.note}
          </p>
        )}
      </div>

      <div className="lg:col-span-9">
        <h3 className="font-display text-xl font-medium leading-[1.2] tracking-tightest text-fg sm:text-2xl">
          {publication.title}
        </h3>

        <p className="mt-4 text-sm text-fg-muted sm:text-base">
          {publication.authors.map((author, i) => (
            <span key={`${author.name}-${i}`}>
              <span className={author.isMe ? "font-semibold text-fg" : ""}>
                {author.name}
              </span>
              {i < publication.authors.length - 1 && ", "}
            </span>
          ))}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {publication.topics.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-bg-subtle px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
