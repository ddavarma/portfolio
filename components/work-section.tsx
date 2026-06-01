"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import type { SiteImage } from "@/lib/images";
import Lightbox from "./lightbox";

export type ProjectLink = {
  label: string;
  href: string;
};

export type WorkProject = {
  slug: string;
  name: string;
  subtitle: string;
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  highlight: string | null;
  links: ProjectLink[];
  images: SiteImage[];
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
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
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function WorkSection({ projects }: { projects: WorkProject[] }) {
  const { ref } = useSectionInView("Work");

  return (
    <section
      ref={ref}
      id="work"
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
          03 — Selected Work
        </motion.p>
        <motion.h2
          variants={headerVariants}
          className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-5xl"
        >
          What I&apos;m building right now.
        </motion.h2>
        <motion.p
          variants={headerVariants}
          className="mt-5 max-w-2xl text-base text-fg-muted sm:text-lg"
        >
          Five projects from the last year — lab work, competitions, and a
          hackathon — ordered by how heavily they shape the week ahead.
        </motion.p>

        <motion.div
          className="mt-16 space-y-8 lg:space-y-12"
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: WorkProject;
  index: number;
}) {
  const imageOnRight = index % 2 === 1;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <motion.article
      variants={cardVariants}
      className="group grid grid-cols-1 gap-6 rounded-2xl border border-line bg-bg-elevated p-5 transition-colors duration-300 hover:border-fg-subtle sm:p-6 lg:grid-cols-12 lg:gap-10 lg:p-8"
    >
      <div
        className={`lg:col-span-5 ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}
      >
        <ProjectVisual project={project} onOpen={() => setLightboxOpen(true)} />
        <Lightbox
          images={project.images}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          caption={`${project.name} · ${project.subtitle}`}
        />
      </div>

      <div
        className={`flex flex-col lg:col-span-7 ${
          imageOnRight ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
          <span>{project.role}</span>
          <span className="text-fg-subtle/50">/</span>
          <span>{project.org}</span>
          <span className="text-fg-subtle/50">/</span>
          <span>{project.period}</span>
          {project.highlight && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/[0.08] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {project.highlight}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-2xl font-medium leading-[1.15] tracking-tightest text-fg sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-fg-muted sm:text-base">
          {project.subtitle}
        </p>

        <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-bg-subtle px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted transition-colors hover:text-accent"
              >
                {l.label}
                <BsArrowUpRight className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function ProjectVisual({
  project,
  onOpen,
}: {
  project: WorkProject;
  onOpen: () => void;
}) {
  const cover = project.images[0];

  if (cover) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-bg-subtle outline-none transition-transform hover:scale-[1.005] focus-visible:ring-2 focus-visible:ring-accent"
        aria-label={`Open gallery for ${project.name}`}
      >
        <Image
          src={cover.src}
          alt={`${project.name} — ${cover.alt}`}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {project.images.length > 1 && (
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-line bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted backdrop-blur-sm">
            +{project.images.length - 1} more
          </span>
        )}
      </button>
    );
  }

  return (
    <div className="relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-xl border border-line bg-bg-subtle p-5">
      <svg className="absolute inset-0 h-full w-full text-fg opacity-[0.05]" aria-hidden>
        <defs>
          <pattern
            id={`work-grid-${project.slug}`}
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#work-grid-${project.slug})`} />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(103,232,249,0.08),transparent_55%)]" />
      <div className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
        <span className="text-accent">▸</span> /public/projects/{project.slug}/
      </div>
    </div>
  );
}
