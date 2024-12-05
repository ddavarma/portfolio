import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import awsSol from "@/public/awsSol.png";
import awsml from "@/public/awsml.png";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiDjango,
  SiPostgresql,
  SiPython,
  SiFramer,
  SiPrisma,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
} from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certfication",
    hash: "#certification",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Western Michigan University",
//     location: "Kalamazoo, MI",
//     description:
//       "I earned a Master's degree in Data Science from WMU.",
//     icon: React.createElement(LuGraduationCap),
//     date: " Dec 2022",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

import { AiOutlineRobot } from "react-icons/ai";
import { SiPytorch, SiSpring } from "react-icons/si";

export const experiencesData = [
  {
    title: "Software Engineer (AI/ML)",
    location: "HCA Health Care, Boston, MA",
    description:
      "Engineered backend services using Java Spring Boot and Node.js, deployed machine learning models for patient data analytics, and optimized CI/CD workflows using Jenkins and Docker, resulting in significant performance improvements.",
    icon: React.createElement(SiPytorch),
    date: "Aug 2023 - Present",
  },
  {
    title: "Software Development Engineer",
    location: "Amazon Web Services, Boston, MA",
    description:
      "Enhanced backend performance by 30%, optimized PostgreSQL database queries, and automated data store tasks using Docker and shell scripting. Leveraged AWS services for scalable solutions.",
    icon: React.createElement(SiSpring),
    date: "Aug 2022 - May 2023",
  },
  {
    title: "Western Michigan University",
    location: "Kalamazoo, MI",
    description:
      "I earned a Master's degree in Computer Science with a GPA of 3.42/4.0.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2021 - Dec 2022",
  },
  {
    title: "Student IT Assistant",
    location: "CHHS at WMU, Kalamazoo, MI",
    description:
      "Developed a web-based asset tracking system using React and Node.js, automated workflows with Python, and implemented a helpdesk solution with Angular and Express.js.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Jul 2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // Web Development Skills
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Redux", icon: SiRedux },
  { name: "Django", icon: SiDjango },
  { name: "Framer Motion", icon: SiFramer },

  // Machine Learning Technologies
  { name: "Python", icon: SiPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },

  // CI/CD and DevOps
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Jenkins", icon: SiJenkins },
  { name: "Terraform", icon: SiTerraform },

  // Cloud and AWS
  // { name: "AWS", icon: SiAws },
  // { name: "AWS Solution Architect Associate", icon: SiAws },
  // { name: "AWS Machine Learning Engineer Associate", icon: SiAws },
] as const;

export const certificationsData = [
  {
    id: "4b0fbf81-c412-473b-9b15-45c2a43cc125",
    title: "AWS Certified Solutions Architect – Associate",
    issueDate: "November 2, 2024",
    expirationDate: "November 2, 2027",
    link: "https://www.credly.com/badges/4b0fbf81-c412-473b-9b15-45c2a43cc125",
    imageUrl: awsSol,
  },
  {
    id: "e5908fdb-0c1f-4849-9679-2387af6eaaae",
    title: "AWS Certified Machine Learning – Specialty",
    issueDate: "October 27, 2024",
    expirationDate: "October 27, 2027",
    link: "https://www.credly.com/badges/e5908fdb-0c1f-4849-9679-2387af6eaaae",
    imageUrl: awsml,
  },
];
