"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function HeroSection({ portrait }: { portrait: string | null }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: inViewRef } = useSectionInView("Home", 0.5);
  const prefersReducedMotion = useReducedMotion();

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const setRefs = (el: HTMLElement | null) => {
    sectionRef.current = el;
    inViewRef(el);
  };

  return (
    <section
      ref={setRefs}
      id="home"
      className="relative w-full max-w-7xl scroll-mt-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-7">
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {portrait && (
              <span className="relative inline-block h-11 w-11 overflow-hidden rounded-full border border-line bg-bg-elevated">
                <Image
                  src={portrait}
                  alt="Devi Aditya Varma Dantuluri"
                  fill
                  sizes="44px"
                  className="object-cover"
                  priority
                />
              </span>
            )}
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              PhD Researcher · Autonomous Systems
            </p>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            Devi Aditya Varma
            <br />
            Dantuluri.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            I build autonomous vehicles and robots,{" "}
            <span className="italic text-fg">and study how they fail.</span>
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-sm leading-relaxed text-fg-subtle sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
          >
            Integration Lead on the{" "}
            <span className="text-fg-muted">GM/SAE AutoDrive Challenge II</span>{" "}
            team, working on a real Chevy Bolt EUV. PhD researcher at{" "}
            <span className="text-fg-muted">North Carolina A&T</span>, advised by{" "}
            <span className="text-fg-muted">Dr. Balakrishna Gokaraju</span>.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
          >
            <Link
              href="#research"
              onClick={() => {
                setActiveSection("Research");
                setTimeOfLastClick(Date.now());
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              View Research
              <BsArrowRight className="opacity-70 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="#publications"
              onClick={() => {
                setActiveSection("Publications");
                setTimeOfLastClick(Date.now());
              }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated px-6 py-3 text-sm font-medium text-fg transition-all hover:border-fg-subtle hover:scale-[1.03] active:scale-[0.98]"
            >
              Publications
            </Link>

            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <AutonomousVisual
            prefersReducedMotion={!!prefersReducedMotion}
            containerRef={sectionRef}
          />
        </div>
      </div>
    </section>
  );
}

const OBSTACLES = [
  { cx: 90, cy: 160, delay: 0 },
  { cx: 320, cy: 200, delay: 0.6 },
  { cx: 80, cy: 360, delay: 1.2 },
  { cx: 330, cy: 380, delay: 1.8 },
  { cx: 200, cy: 100, delay: 2.4 },
];

function AutonomousVisual({
  prefersReducedMotion,
  containerRef,
}: {
  prefersReducedMotion: boolean;
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const panelScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const panelOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.55]);

  return (
    <motion.div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-bg-elevated"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      style={
        prefersReducedMotion
          ? undefined
          : { scale: panelScale, opacity: panelOpacity }
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(103,232,249,0.10),transparent_55%)]" />

      <svg className="absolute inset-0 h-full w-full text-fg opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <radialGradient id="sweepGradient" cx="50%" cy="100%" r="80%">
            <stop offset="0%" stopColor="var(--research-yellow)" stopOpacity="0.55" />
            <stop offset="60%" stopColor="var(--research-yellow)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--research-yellow)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {[80, 140, 200].map((r) => (
          <circle
            key={r}
            cx="200"
            cy="280"
            r={r}
            fill="none"
            stroke="currentColor"
            className="text-fg-subtle"
            strokeOpacity="0.25"
            strokeDasharray="2 5"
            strokeWidth="1"
          />
        ))}

        {OBSTACLES.map((o) => (
          <motion.g
            key={`${o.cx}-${o.cy}`}
            initial={{ opacity: 0.25 }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.5 }
                : { opacity: [0.25, 1, 0.25] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: o.delay,
                  }
            }
          >
            <circle cx={o.cx} cy={o.cy} r="6" fill="var(--accent)" opacity="0.18" />
            <circle cx={o.cx} cy={o.cy} r="2.5" fill="var(--accent)" />
          </motion.g>
        ))}

        <motion.g
          style={{ transformOrigin: "200px 280px" }}
          animate={prefersReducedMotion ? { rotate: 0 } : { rotate: 360 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 5, repeat: Infinity, ease: "linear" }
          }
        >
          <path
            d="M 200 280 L 200 80 A 200 200 0 0 1 373 380 Z"
            fill="url(#sweepGradient)"
          />
          <line
            x1="200"
            y1="280"
            x2="200"
            y2="80"
            stroke="var(--research-yellow)"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
        </motion.g>

        <g transform="translate(180 248)">
          <rect
            x="0"
            y="0"
            width="40"
            height="64"
            rx="9"
            fill="var(--bg-subtle)"
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
          <rect x="7" y="8" width="26" height="18" rx="3" fill="var(--accent)" opacity="0.18" />
          <rect x="7" y="38" width="26" height="18" rx="3" fill="var(--accent)" opacity="0.18" />
          <circle cx="20" cy="32" r="2" fill="var(--accent)" />
        </g>

        {!prefersReducedMotion && (
          <motion.circle
            cx="200"
            cy="280"
            r="0"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            animate={{ r: [30, 220], opacity: [0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </svg>

      <div className="absolute left-4 top-4 max-w-[70%] font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
        Perception · LiDAR sweep
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
        <span>Autonomy stack · live</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          tracking {OBSTACLES.length}
        </span>
      </div>
    </motion.div>
  );
}
