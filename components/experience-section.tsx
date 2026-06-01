"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices,
  SiSpringboot,
  SiNodedotjs,
  SiJenkins,
  SiOpenjdk,
  SiGnubash,
} from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";

const TECH_ICONS: Record<string, IconType> = {
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  AWS: SiAmazonwebservices,
  "Node.js": SiNodedotjs,
  "Spring Boot": SiSpringboot,
  Jenkins: SiJenkins,
  Java: SiOpenjdk,
  Shell: SiGnubash,
};

export type SubStream = {
  name: string;
  oneLiner: string;
  bullets: string[];
};

export type ExperienceEntry = {
  slug: string;
  org: string;
  role: string;
  location?: string;
  period: string;
  description?: string;
  bullets?: string[];
  streams?: SubStream[];
  tags?: string[];
  kind: "work" | "education";
  logo: string | null;
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
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
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ExperienceSection({
  entries,
}: {
  entries: ExperienceEntry[];
}) {
  const { ref } = useSectionInView("Experience");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  return (
    <section
      ref={ref}
      id="experience"
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
          05 — Experience
        </motion.p>
        <motion.h2
          variants={headerVariants}
          className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-5xl"
        >
          Before the PhD.
        </motion.h2>
        <motion.p
          variants={headerVariants}
          className="mt-5 max-w-2xl text-base text-fg-muted sm:text-lg"
        >
          Two years of industry engineering at AWS and HCA, after a Master&apos;s
          in Computer Science. Click any role for the full breakdown.
        </motion.p>

        <motion.div
          className="mt-16 space-y-5 lg:space-y-6"
          variants={containerVariants}
        >
          {entries.map((entry, idx) => (
            <ExperienceCard
              key={entry.slug}
              entry={entry}
              onOpen={() => setActiveIndex(idx)}
            />
          ))}
        </motion.div>
      </motion.div>

      <ExperienceModal
        entry={activeIndex !== null ? entries[activeIndex] : null}
        onClose={close}
      />
    </section>
  );
}

function ExperienceCard({
  entry,
  onOpen,
}: {
  entry: ExperienceEntry;
  onOpen: () => void;
}) {
  return (
    <motion.article
      variants={cardVariants}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${entry.org}`}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-line bg-bg-elevated outline-none transition-colors duration-300 hover:border-fg-subtle focus-visible:border-accent"
    >
      <div className="absolute inset-y-0 left-0 w-[3px] bg-line transition-colors duration-300 group-hover:bg-accent group-focus-visible:bg-accent" />

      <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <OrgLogo entry={entry} size={44} />
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-subtle px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-fg-subtle transition-colors duration-300 group-hover:bg-accent" />
              {entry.kind === "education" ? "Education" : "Engineering"}
            </div>
          </div>

          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
            {entry.period}
          </p>

          <h3 className="mt-3 font-display text-2xl font-medium leading-[1.15] tracking-tightest text-fg sm:text-3xl">
            {entry.org}
          </h3>

          <p className="mt-2 text-sm text-fg-muted sm:text-base">
            {entry.role}
            {entry.location && (
              <span className="text-fg-subtle"> · {entry.location}</span>
            )}
          </p>
        </div>

        <div className="lg:col-span-8">
          {entry.description && (
            <p className="text-base leading-relaxed text-fg-muted sm:text-lg">
              {entry.description}
            </p>
          )}

          {entry.streams && entry.streams.length > 0 && (
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {entry.streams.map((s) => (
                <div
                  key={s.name}
                  className="rounded-xl border border-line bg-bg-subtle p-4"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                    ▸ {s.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {s.oneLiner}
                  </p>
                </div>
              ))}
            </div>
          )}

          {entry.tags && entry.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-1.5">
              {entry.tags.map((t) => (
                <TagChip key={t} tag={t} />
              ))}
            </div>
          )}

          <p className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-subtle transition-colors duration-300 group-hover:text-accent">
            Open details
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M2 5.5h7M5.5 2l3.5 3.5L5.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function TagChip({ tag }: { tag: string }) {
  const Icon = TECH_ICONS[tag];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-subtle px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted">
      {Icon && <Icon className="h-3 w-3 text-fg-muted" />}
      {tag}
    </span>
  );
}

function OrgLogo({
  entry,
  size = 56,
}: {
  entry: ExperienceEntry;
  size?: number;
}) {
  if (entry.logo) {
    return (
      <span
        className="relative inline-block shrink-0 overflow-hidden rounded-lg border border-line bg-bg-subtle"
        style={{ width: size, height: size }}
      >
        <Image
          src={entry.logo}
          alt={`${entry.org} logo`}
          fill
          sizes={`${size}px`}
          className="object-contain p-1.5"
        />
      </span>
    );
  }

  if (entry.slug === "aws") {
    return (
      <span
        className="inline-flex shrink-0 items-center justify-center rounded-lg border border-line bg-bg-subtle"
        style={{ width: size, height: size }}
        aria-label="Amazon Web Services"
      >
        <SiAmazonwebservices
          size={Math.round(size * 0.58)}
          style={{ color: "#FF9900" }}
        />
      </span>
    );
  }

  const initials = orgInitials(entry.org);
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-lg border border-line bg-bg-subtle font-display font-medium tracking-tight text-fg"
      style={{
        width: size,
        height: size,
        fontSize: Math.max(13, Math.round(size * 0.32)),
      }}
      aria-label={`${entry.org} monogram`}
    >
      {initials}
    </span>
  );
}

function orgInitials(org: string): string {
  const lower = org.toLowerCase();
  if (lower.includes("amazon")) return "AWS";
  if (lower.includes("hca")) return "HCA";
  if (lower.includes("western")) return "WMU";
  if (lower.includes("a&t") || lower.includes("a & t")) return "A&T";
  return org
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function ExperienceModal({
  entry,
  onClose,
}: {
  entry: ExperienceEntry | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!entry) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [entry, onClose]);

  return (
    <AnimatePresence>
      {entry && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-bg/90 p-4 backdrop-blur-md sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="relative my-auto w-full max-w-3xl rounded-2xl border border-line bg-bg-elevated p-6 sm:p-10"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg-subtle text-fg-muted transition-colors hover:text-fg"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            <div className="flex items-start gap-5">
              <OrgLogo entry={entry} size={68} />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
                  {entry.kind === "education" ? "Education" : "Engineering"} ·{" "}
                  {entry.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium leading-[1.15] tracking-tightest text-fg sm:text-3xl">
                  {entry.org}
                </h3>
                <p className="mt-1 text-sm text-fg-muted sm:text-base">
                  {entry.role}
                  {entry.location && (
                    <span className="text-fg-subtle"> · {entry.location}</span>
                  )}
                </p>
              </div>
            </div>

            {entry.description && (
              <p className="mt-8 text-base leading-relaxed text-fg-muted sm:text-lg">
                {entry.description}
              </p>
            )}

            {entry.streams && entry.streams.length > 0 && (
              <div className="mt-8 space-y-7">
                {entry.streams.map((s) => (
                  <div key={s.name}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      ▸ {s.name}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-base">
                      {s.oneLiner}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="text-sm leading-relaxed text-fg sm:text-base">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {entry.bullets && entry.bullets.length > 0 && !entry.streams && (
              <div className="mt-8">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Highlights
                </p>
                <ul className="space-y-3">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-fg sm:text-base">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {entry.tags && entry.tags.length > 0 && (
              <div className="mt-8">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((t) => {
                    const Icon = TECH_ICONS[t];
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-subtle px-3.5 py-1.5 text-xs text-fg"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5 text-fg-muted" />}
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
