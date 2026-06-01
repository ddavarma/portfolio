export const SECTION_NAMES = [
  "Home",
  "About",
  "Research",
  "Work",
  "Publications",
  "Skills",
  "Experience",
  "Certfication",
  "Contact",
] as const;

export type SectionName = (typeof SECTION_NAMES)[number];
