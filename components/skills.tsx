"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  easeOut,
  type MotionValue,
  type Variants,
} from "framer-motion";
import type { IconType } from "react-icons";
import { BsArrowUpRight } from "react-icons/bs";
import {
  SiRos,
  SiOpencv,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiNvidia,
  SiNumpy,
  SiScikitlearn,
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiGit,
  SiLatex,
  SiAmazonwebservices,
  SiOpenjdk,
  SiGnubash,
} from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import awsSol from "@/public/awsSol.png";
import awsml from "@/public/awsml.png";

const TECH_ICONS: Record<string, IconType> = {
  "ROS 1/2": SiRos,
  OpenCV: SiOpencv,
  Python: SiPython,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  "CUDA (basics)": SiNvidia,
  NumPy: SiNumpy,
  "scikit-learn": SiScikitlearn,
  "NVIDIA NeMo": SiNvidia,
  "C++": SiCplusplus,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Spring Boot": SiSpringboot,
  Java: SiOpenjdk,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  AWS: SiAmazonwebservices,
  Terraform: SiTerraform,
  Git: SiGit,
  LaTeX: SiLatex,
  Shell: SiGnubash,
};

type SkillGroup = {
  name: string;
  items: string[];
};

const GROUPS: SkillGroup[] = [
  {
    name: "Autonomy & Robotics",
    items: [
      "ROS 1/2",
      "MoveIt2",
      "Gazebo",
      "CARLA",
      "Isaac Sim",
      "MuJoCo",
      "LiDAR SLAM",
      "EKF Sensor Fusion",
      "Diffusion Policy",
      "YOLO",
      "OpenCV",
      "Computer Vision",
      "Probabilistic Robotics",
    ],
  },
  {
    name: "Machine Learning & Systems",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "CUDA (basics)",
      "NumPy",
      "scikit-learn",
      "NVIDIA NeMo",
      "RAG",
      "C++",
    ],
  },
  {
    name: "Engineering & Infra",
    items: [
      "TypeScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "React",
      "Next.js",
      "Tailwind",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "Terraform",
      "Pixi",
      "Distrobox",
      "Git",
      "LaTeX",
    ],
  },
];

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  href: string;
  badge: StaticImageData;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    issued: "Nov 2024",
    href: "https://www.credly.com/badges/4b0fbf81-c412-473b-9b15-45c2a43cc125",
    badge: awsSol,
  },
  {
    title: "AWS Certified Machine Learning — Specialty",
    issuer: "Amazon Web Services",
    issued: "Oct 2024",
    href: "https://www.credly.com/badges/e5908fdb-0c1f-4849-9679-2387af6eaaae",
    badge: awsml,
  },
];

const TOTAL_CHIPS = GROUPS.reduce((acc, g) => acc + g.items.length, 0);
const GROUP_OFFSETS: number[] = (() => {
  const acc: number[] = [0];
  GROUPS.forEach((g) => acc.push(acc[acc.length - 1] + g.items.length));
  return acc;
})();

// Deterministic pseudo-random so server and client agree and the
// scatter is stable across renders.
function seeded(n: number): number {
  const x = Math.sin(n * 99991.17) * 10000;
  return x - Math.floor(x);
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: inViewRef } = useSectionInView("Skills");
  const prefersReducedMotion = useReducedMotion();

  // Scroll-driven transforms are applied only after mount so the SSR
  // markup (plain chips) matches the first client render — otherwise the
  // motion values stringify at different precision and hydration breaks.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const animate = mounted && !prefersReducedMotion;

  const setRefs = (el: HTMLElement | null) => {
    sectionRef.current = el;
    inViewRef(el);
  };

  return (
    <section
      ref={setRefs}
      id="skills"
      className="w-full max-w-7xl overflow-hidden scroll-mt-28 px-4 py-28 sm:px-6 lg:px-8 lg:py-40"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
      >
        06 — Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-5xl"
      >
        Stack.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="mt-5 max-w-2xl text-base text-fg-muted sm:text-lg"
      >
        What I reach for, organized by where it lives — research first. Scroll to
        let it settle.
      </motion.p>

      <div className="mt-16 space-y-10">
        {GROUPS.map((group, gi) => (
          <div key={group.name}>
            <GroupHeader>{group.name}</GroupHeader>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((item, ci) => (
                <FlyingChip
                  key={item}
                  label={item}
                  globalIndex={GROUP_OFFSETS[gi] + ci}
                  total={TOTAL_CHIPS}
                  scrollYProgress={scrollYProgress}
                  animate={animate}
                />
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <GroupHeader>Certifications</GroupHeader>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <CertificationCard key={cert.href} cert={cert} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GroupHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
        {children}
      </span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function FlyingChip({
  label,
  globalIndex,
  total,
  scrollYProgress,
  animate,
}: {
  label: string;
  globalIndex: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  animate: boolean;
}) {
  const Icon = TECH_ICONS[label];

  // Per-chip scatter origin + the scroll window during which it flies home.
  const cfg = useMemo(() => {
    const a = seeded(globalIndex * 2.1);
    const b = seeded(globalIndex * 3.7);
    const c = seeded(globalIndex * 5.3);
    const d = seeded(globalIndex * 7.9);

    const angle = a * Math.PI * 2;
    const ox = Math.cos(angle) * (240 + b * 520);
    const oy = Math.sin(angle) * (160 + c * 360) - 40;
    const startScale = 2.2 + d * 1.6;
    const startRotate = (a - 0.5) * 44;

    const start = 0.04 + (globalIndex / total) * 0.5;
    const end = start + 0.28;

    return { ox, oy, startScale, startRotate, start, end };
  }, [globalIndex, total]);

  const opts = { ease: easeOut } as const;
  const x = useTransform(scrollYProgress, [cfg.start, cfg.end], [cfg.ox, 0], opts);
  const y = useTransform(scrollYProgress, [cfg.start, cfg.end], [cfg.oy, 0], opts);
  const scale = useTransform(
    scrollYProgress,
    [cfg.start, cfg.end],
    [cfg.startScale, 1],
    opts,
  );
  const rotate = useTransform(
    scrollYProgress,
    [cfg.start, cfg.end],
    [cfg.startRotate, 0],
    opts,
  );
  const opacity = useTransform(
    scrollYProgress,
    [cfg.start, cfg.start + (cfg.end - cfg.start) * 0.3, cfg.end],
    [0, 1, 1],
  );

  const style = animate ? { x, y, scale, rotate, opacity } : undefined;

  return (
    <motion.span
      style={style}
      className="inline-flex cursor-default items-center gap-2 rounded-full border border-line bg-bg-subtle px-3.5 py-2 text-xs font-medium text-fg transition-colors duration-200 hover:border-accent hover:bg-bg-elevated"
    >
      {Icon && <Icon className="h-[18px] w-[18px] text-fg" />}
      {label}
    </motion.span>
  );
}

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-line bg-bg-elevated p-4 transition-colors hover:border-fg-subtle sm:p-5"
    >
      <span className="relative h-14 w-14 shrink-0">
        <Image
          src={cert.badge}
          alt={`${cert.title} badge`}
          fill
          sizes="56px"
          className="object-contain"
        />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
          {cert.issuer} · {cert.issued}
        </p>
        <p className="mt-1 text-sm font-medium leading-snug text-fg sm:text-base">
          {cert.title}
        </p>
      </div>
      <BsArrowUpRight className="shrink-0 text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
    </a>
  );
}
