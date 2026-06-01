"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type StatusKind = "in-progress" | "accepted";

type ResearchThread = {
  number: string;
  title: string;
  status: string;
  statusKind: StatusKind;
  subStatus?: string;
  description: React.ReactNode;
  methods: string[];
  outcome?: string;
};

const THREADS: ResearchThread[] = [
  {
    number: "01",
    title: "Semantic Mapping for Low-Cost Autonomous Vehicles",
    status: "Manuscript under revision",
    statusKind: "in-progress",
    description: (
      <>
        Standard 2D-LiDAR maps are blind to floor-level lane markings, which
        makes legal lane-constrained navigation impossible without expensive 3D
        sensors or hand-built HD vector maps. I fuse low-cost 2D LiDAR with
        monocular vision to generate{" "}
        <span className="text-fg">Semantic Occupancy Grids</span> that bake
        visual lane constraints directly into the navigation costmap. The
        pipeline uses Inverse Perspective Mapping, HSV segmentation,
        morphological filtering, and a temporal-accumulation layer in the ROS
        navigation stack.
      </>
    ),
    methods: [
      "2D LiDAR",
      "Monocular vision",
      "ROS Nav",
      "IPM",
      "HSV segmentation",
      "Temporal accumulation",
    ],
    outcome:
      "Validated on an Ackermann-steering platform with 0.50% loop-closure error.",
  },
  {
    number: "02",
    title: "Reliability Growth Modeling of Agent-Driven GPU Kernel Optimization",
    status: "RAMS 2027 · under review",
    statusKind: "in-progress",
    subStatus: "Decision expected Jun 2026 · primary author",
    description: (
      <>
        LLM coding agents now iteratively optimize performance-critical software
        like GPU kernels, but practitioners stop iterating based on intuition
        rather than analysis. I treat these agent loops as{" "}
        <span className="text-fg">
          software reliability growth processes
        </span>
        , fitting five non-homogeneous Poisson process models — Goel-Okumoto,
        Musa-Okumoto, two Yamada S-shaped variants, and Pham-Zhang
        imperfect-debugging — to per-iteration AutoKernel trajectories. The
        output is a{" "}
        <span className="text-fg">
          deployment-risk-budgeted stopping criterion
        </span>
        : when does the expected marginal value of further iteration cross zero?
      </>
    ),
    methods: [
      "LLM agents",
      "GPU kernels",
      "AutoKernel",
      "NHPP",
      "Goel-Okumoto",
      "Musa-Okumoto",
      "Yamada S-shaped",
      "Pham-Zhang",
    ],
  },
  {
    number: "03",
    title: "Physics-Informed Perception Reliability",
    status: "RAMS 2027 · under review",
    statusKind: "in-progress",
    subStatus: "Decision expected Jun 2026",
    description: (
      <>
        Camera perception degrades when condensation, frost, or ice forms on
        the lens enclosure during temperature transitions — a short-lived but
        safety-critical failure that aggregate benchmark accuracy hides. I
        model this as a{" "}
        <span className="text-fg">time-varying availability problem</span>{" "}
        grounded in heterogeneous nucleation theory, evaluated across BDD100K,
        KITTI, and nuScenes, producing a design tool that links environmental
        conditions to required thermal mitigation.
      </>
    ),
    methods: [
      "Heterogeneous nucleation",
      "Availability modeling",
      "BDD100K",
      "KITTI",
      "nuScenes",
      "Thermal design",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
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

export default function Research() {
  const { ref } = useSectionInView("Research");

  return (
    <section
      ref={ref}
      id="research"
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
          02 — Research
        </motion.p>
        <motion.h2
          variants={headerVariants}
          className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-5xl"
        >
          Three active threads.
        </motion.h2>
        <motion.p
          variants={headerVariants}
          className="mt-5 max-w-2xl text-base text-fg-muted sm:text-lg"
        >
          Each thread sits at the intersection of autonomy and reliability —
          built so that systems work in the real world, and fail in ways we can
          explain.
        </motion.p>

        <motion.div
          className="mt-16 space-y-6 lg:space-y-8"
          variants={containerVariants}
        >
          {THREADS.map((thread) => (
            <motion.article
              key={thread.number}
              variants={cardVariants}
              className="group relative grid grid-cols-1 gap-8 rounded-2xl border border-line bg-bg-elevated p-6 transition-colors duration-300 hover:border-fg-subtle sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
            >
              <div className="lg:col-span-3">
                <p className="font-display text-5xl font-medium leading-none tracking-tightest text-fg-subtle transition-colors duration-300 group-hover:text-accent sm:text-6xl">
                  {thread.number}
                </p>
                <StatusPill kind={thread.statusKind} text={thread.status} />
                {thread.subStatus && (
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
                    {thread.subStatus}
                  </p>
                )}
              </div>

              <div className="lg:col-span-9">
                <h3 className="font-display text-2xl font-medium leading-[1.15] tracking-tightest text-fg sm:text-3xl">
                  {thread.title}
                </h3>

                <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
                  {thread.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {thread.methods.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-line bg-bg-subtle px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {thread.outcome && (
                  <div className="mt-6 flex items-start gap-3 border-t border-line pt-5">
                    <span className="mt-[2px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <p className="text-sm leading-relaxed text-fg sm:text-base">
                      {thread.outcome}
                    </p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatusPill({ kind, text }: { kind: StatusKind; text: string }) {
  const isAccepted = kind === "accepted";
  return (
    <div
      className={`mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${
        isAccepted
          ? "border-accent/40 bg-accent/[0.08] text-accent"
          : "border-line bg-bg-subtle text-fg-muted"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isAccepted ? "bg-accent" : "bg-fg-subtle"
        }`}
      />
      {text}
    </div>
  );
}
