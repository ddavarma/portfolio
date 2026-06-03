"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { BsLinkedin, BsGithub, BsArrowUpRight } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const EMAILS = [
  { label: "Research", value: "ddantuluri@aggies.ncat.edu" },
  { label: "General", value: "ddavarma@gmail.com" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "/in/ddavarma",
    href: "https://www.linkedin.com/in/ddavarma/",
    Icon: BsLinkedin,
  },
  {
    label: "GitHub",
    handle: "ddavarma",
    href: "https://github.com/ddavarma",
    Icon: BsGithub,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      ref={ref}
      id="contact"
      className="w-full max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-5">
          <motion.p
            variants={itemVariants}
            className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            07 — Contact
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-fg sm:text-5xl"
          >
            Let&apos;s talk.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-md text-base leading-relaxed text-fg-muted sm:text-lg"
          >
            Open to research collaborations, conversations with other autonomy
            and robotics researchers, and summer 2027 research internships.
            Reach me directly or send a note.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 space-y-3">
            {EMAILS.map((email) => (
              <a
                key={email.value}
                href={`mailto:${email.value}`}
                className="group flex items-center gap-3 rounded-xl border border-line bg-bg-elevated px-4 py-3 transition-colors hover:border-fg-subtle"
              >
                <HiOutlineMail className="shrink-0 text-fg-subtle" />
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
                    {email.label}
                  </span>
                  <span className="block truncate text-sm text-fg">
                    {email.value}
                  </span>
                </span>
                <BsArrowUpRight className="shrink-0 text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-3 flex gap-3">
            {SOCIALS.map(({ label, handle, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-3 rounded-xl border border-line bg-bg-elevated px-4 py-3 transition-colors hover:border-fg-subtle"
              >
                <Icon className="shrink-0 text-fg-subtle transition-colors group-hover:text-accent" />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
                    {label}
                  </span>
                  <span className="block truncate text-sm text-fg">{handle}</span>
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="lg:col-span-7">
          <form
            className="flex h-full flex-col rounded-2xl border border-line bg-bg-elevated p-6 sm:p-8"
            action={async (formData) => {
              const { error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Message sent — thanks, I'll be in touch.");
            }}
          >
            <label className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
              Your email
            </label>
            <input
              className="h-13 rounded-xl border border-line bg-bg-subtle px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="you@university.edu"
            />

            <label className="mb-2 mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
              Message
            </label>
            <textarea
              className="min-h-44 flex-1 resize-none rounded-xl border border-line bg-bg-subtle p-4 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent"
              name="message"
              placeholder="What would you like to talk about?"
              required
              maxLength={5000}
            />

            <div className="mt-6">
              <SubmitBtn />
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
