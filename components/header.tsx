"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed left-1/2 top-3 z-[999] -translate-x-1/2 sm:top-5">
      <motion.nav
        className="mx-3 rounded-2xl border border-line bg-bg/70 px-2 py-2 backdrop-blur-md sm:mx-0 sm:rounded-full sm:px-2 sm:py-1.5"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ul className="flex max-w-[22rem] flex-wrap items-center justify-center gap-1 text-[0.82rem] font-medium sm:max-w-none sm:flex-nowrap">
          {links.map((link) => (
            <li
              key={link.hash}
              className="relative flex items-center justify-center"
            >
              <Link
                className={clsx(
                  "relative flex items-center justify-center rounded-full px-3 py-1.5 transition-colors hover:text-fg",
                  {
                    "text-fg": activeSection === link.name,
                    "text-fg-muted": activeSection !== link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-bg-subtle"
                    layoutId="activeSection"
                    transition={{
                      type: "spring" as const,
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
