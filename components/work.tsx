import React from "react";
import { getImagesForSlug } from "@/lib/images";
import WorkSection, { type WorkProject } from "./work-section";

const PROJECTS: Omit<WorkProject, "images">[] = [
  {
    slug: "sogm-qcar",
    name: "Autonomous QCar",
    subtitle: "From-scratch indoor AV on a Quanser map",
    role: "Researcher",
    org: "CABS Lab",
    period: "Ongoing",
    description:
      "Hand-built an autonomous robot car from scratch on a Quanser indoor map — custom Ackermann platform with RPLiDAR A3, Intel RealSense D435i, and a Jetson AGX Orin. The team is working through every layer of the autonomy stack in parallel: PID control, MPC, semantic occupancy grid mapping, traffic-light detection, and collision avoidance. The SOGM thread covered in Research is the first published artifact from this work.",
    tags: [
      "Custom hardware",
      "Ackermann",
      "Jetson AGX Orin",
      "RPLiDAR",
      "RealSense D435i",
      "PID",
      "MPC",
      "ROS",
    ],
    highlight: null,
    links: [],
  },
  {
    slug: "autodrive",
    name: "AutoDrive Challenge II",
    subtitle: "Chevy Bolt EUV",
    role: "Integration Lead",
    org: "NC A&T",
    period: "2025 — present",
    description:
      "GM/SAE national autonomous-vehicle competition on a production Chevy Bolt EUV. I coordinate the perception, controls, and simulation subteams and own integration of the full autonomy stack onto the vehicle. The team is currently at the final competition.",
    tags: [
      "ROS 2",
      "Perception fusion",
      "Controls",
      "CARLA",
      "Gazebo",
      "Real-vehicle integration",
    ],
    highlight: "Final competition this week",
    links: [],
  },
  {
    slug: "intrinsic-cable",
    name: "AI for Industry Challenge",
    subtitle: "Dexterous Cable Insertion",
    role: "Researcher",
    org: "NC A&T team",
    period: "2026 · Phase 1 completed",
    description:
      "Intrinsic + Open Robotics industrial-robotics challenge, sim-to-real over three phases. I focused on the SC-port insertion task: collected 200–300 teleoperation episodes via gamepad in Gazebo and trained a diffusion policy for the insertion. Built the full environment with Pixi and Distrobox on Ubuntu 24. We completed Phase 1; the team did not advance to Phase 2.",
    tags: [
      "Diffusion Policy",
      "ROS 2",
      "Gazebo",
      "Isaac Sim",
      "MuJoCo",
      "Pixi",
      "Distrobox",
    ],
    highlight: null,
    links: [],
  },
  {
    slug: "cr2c2",
    name: "CR2C2 2026 Southeast Data Competition",
    subtitle: "Triad Connector",
    role: "Demographics & Demand Lead",
    org: "Team of 4",
    period: "Spring 2026",
    description:
      "Center for Regional and Rural Connected Communities competition: design an efficient transportation system for an underserved Triad-region county. I led the demographics and demand analysis from Census ACS data and built the verified-demand workbook behind a demand-responsive microtransit feeder system for Rockingham County, NC. Co-authored the Stage 3 report and final presentation.",
    tags: [
      "Census ACS",
      "Demand modeling",
      "Microtransit",
      "Transportation planning",
    ],
    highlight: "2nd Place",
    links: [],
  },
  {
    slug: "cognivi",
    name: "Cognivi (StrokePager)",
    subtitle: "Stanford TreeHacks 2026",
    role: "ML/AI Engineer",
    org: "Team of 4",
    period: "Feb 2026",
    description:
      "Smartphone-based stroke triage tool that turns a 60-second video into a neurologic risk signal, built around the FAST stroke criteria. I worked the multimodal pipeline: MediaPipe + OpenCV for arm-drift and facial-asymmetry detection, NVIDIA NeMo ASR plus a retrieval-augmented LLM grading stage for speech abnormality, fused into an interpretable risk score. Privacy-first architecture across Next.js (Vercel), FastAPI (Render), and Modal inference.",
    tags: [
      "MediaPipe",
      "OpenCV",
      "NVIDIA NeMo",
      "RAG",
      "FastAPI",
      "Modal",
      "Next.js",
    ],
    highlight: null,
    links: [{ label: "GitHub", href: "https://github.com/laurie-png/cognivi" }],
  },
];

export default function Work() {
  const projects: WorkProject[] = PROJECTS.map((p) => ({
    ...p,
    images: getImagesForSlug("projects", p.slug),
  }));

  return <WorkSection projects={projects} />;
}
