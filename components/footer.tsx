import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto mb-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
          &copy; 2026 Devi Aditya Varma Dantuluri
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle">
          Next.js · TypeScript · Tailwind · Framer Motion · Vercel
        </p>
      </div>
    </footer>
  );
}
