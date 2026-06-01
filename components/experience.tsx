import React from "react";
import { findLogo } from "@/lib/images";
import ExperienceSection, {
  type ExperienceEntry,
} from "./experience-section";

const ENTRIES: Omit<ExperienceEntry, "logo">[] = [
  {
    slug: "ncat",
    org: "North Carolina A&T State University",
    role: "Graduate Research Assistant",
    location: "Greensboro, NC",
    period: "Aug 2025 — present",
    description:
      "Research within Dr. Balakrishna Gokaraju's CABS Lab, spanning two parallel autonomy threads.",
    streams: [
      {
        name: "Autonomous QCar",
        oneLiner:
          "Indoor AV built from scratch on a Quanser map, with multiple autonomy methods explored in parallel.",
        bullets: [
          "Hand-built a custom Ackermann robot platform with RPLiDAR A3, Intel RealSense D435i, and a Jetson AGX Orin.",
          "Exploring PID control, MPC, semantic occupancy grid mapping, traffic-light detection, and collision avoidance.",
          "Published a journal manuscript on the SOGM mapping front-end (currently under revision).",
        ],
      },
      {
        name: "AutoDrive Challenge II — Integration Lead",
        oneLiner:
          "GM/SAE national autonomous-vehicle competition with a production Chevy Bolt EUV.",
        bullets: [
          "Coordinated the perception, controls, and simulation subteams.",
          "Owned integration of the full autonomy stack onto the Chevy Bolt EUV.",
          "Team is at the final competition this week.",
        ],
      },
    ],
    tags: [
      "ROS 2",
      "ROS Noetic",
      "MPC",
      "PID",
      "Diffusion Policy",
      "Perception fusion",
      "Jetson",
      "OpenCV",
    ],
    kind: "work",
  },
  {
    slug: "hca",
    org: "HCA Healthcare",
    role: "Software Engineer · contract",
    location: "Boston, MA",
    period: "Aug 2023 — Aug 2025",
    description:
      "Built Java Spring Boot and Node.js backend services and deployed ML models for patient-data analytics. Optimized CI/CD pipelines with Jenkins and Docker.",
    bullets: [
      "Built Java Spring Boot and Node.js backend services for patient-data workflows.",
      "Deployed ML models for patient-data analytics into the production environment.",
      "Optimized CI/CD pipelines with Jenkins and Docker, reducing release friction for the team.",
    ],
    tags: ["Java", "Spring Boot", "Node.js", "ML deployment", "Jenkins", "Docker"],
    kind: "work",
  },
  {
    slug: "aws",
    org: "Amazon Web Services",
    role: "Software Development Engineer",
    location: "Boston, MA",
    period: "Aug 2022 — May 2023",
    description:
      "Improved backend performance by 30%, optimized PostgreSQL query performance, and automated data-store operations with Docker and shell scripting on AWS infrastructure.",
    bullets: [
      "Improved backend service performance by 30% through targeted query and code optimization.",
      "Tuned PostgreSQL query plans and indexing on production databases to cut latency on hot paths.",
      "Automated routine data-store operations using Docker images and shell scripting, eliminating manual on-call work.",
      "Worked across AWS infrastructure to ship reliable, scalable backend changes.",
    ],
    tags: ["PostgreSQL", "Docker", "Shell", "AWS"],
    kind: "work",
  },
  {
    slug: "wmu",
    org: "Western Michigan University",
    role: "M.S., Computer Science",
    period: "2021 — 2022",
    bullets: ["M.S., Computer Science — coursework across systems, ML, and algorithms."],
    kind: "education",
  },
];

export default function Experience() {
  const entries: ExperienceEntry[] = ENTRIES.map((e) => ({
    ...e,
    logo: findLogo("experience", e.slug),
  }));

  return <ExperienceSection entries={entries} />;
}
