"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-line bg-bg-elevated/80 text-fg-muted backdrop-blur-md transition-all hover:scale-[1.08] hover:text-fg active:scale-105"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
