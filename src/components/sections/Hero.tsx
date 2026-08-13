"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

useEffect(() => {
  const mediaQuery = window.matchMedia("(pointer: fine)");

  if (!mediaQuery.matches) {
    return;
  }

  const handleMouseMove = (event: MouseEvent) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    setMousePosition({
      x,
      y,
    });
  };

  window.addEventListener("mousemove", handleMouseMove, {
    passive: true,
  });

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      {/* Ambient Background */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 overflow-hidden"
>
  {/* Primary Lime Glow */}
  <div className="absolute left-[15%] top-[20%] h-64 w-64 rounded-full bg-[var(--accent)]/5 blur-[100px] sm:h-96 sm:w-96" />

  {/* Secondary Lime Glow */}
  <div className="absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full bg-[var(--accent)]/[0.035] blur-[120px] sm:h-[30rem] sm:w-[30rem]" />

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
      backgroundSize: "64px 64px",
    }}
  />

  {/* Floating Ring */}
  <motion.div
    className="absolute inset-0 opacity-[0.035]"
  animate={{
    x: mousePosition.x * 8,
    y: mousePosition.y * 8,
  }}
  transition={{
    type: "spring",
    stiffness: 50,
    damping: 25,
  }}
  >
    <div className="absolute inset-3 rounded-full border border-[var(--accent)]/10" />
  </motion.div>

  {/* Floating Accent Dot */}
  <motion.div
    className="absolute bottom-[24%] right-[24%] hidden h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent)] sm:block"
    animate={{
  x: mousePosition.x * -18,
  y: mousePosition.y * -18,
  opacity: [0.4, 1, 0.4],
}}
    transition={{
  x: {
    type: "spring",
    stiffness: 90,
    damping: 22,
  },
  y: {
    type: "spring",
    stiffness: 90,
    damping: 22,
  },
  opacity: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
}}
  />

  {/* Floating Horizontal Line */}
  <motion.div
    className="absolute left-[8%] top-[42%] hidden h-px w-20 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent sm:block"
    animate={{
      x: [0, 20, 0],
      opacity: [0.2, 0.7, 0.2],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Small Floating Orb */}
  <motion.div
    className="absolute left-[30%] top-[18%] hidden h-2 w-2 rounded-full bg-[var(--foreground)]/30 sm:block"
    animate={{
      y: [0, 15, 0],
      x: [0, 10, 0],
      opacity: [0.2, 0.6, 0.2],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Top Label */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)] shadow-[0_0_14px_var(--accent)]" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)] sm:text-sm">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="max-w-6xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-[clamp(3.5rem,13vw,9rem)] font-bold uppercase leading-[0.78] tracking-[-0.075em]"
          >
            <span className="block">MOSAIYEB</span>
<span className="block">
  MEHERAZ<span className="text-[var(--accent)]">.</span>
</span>
          </motion.h1>
        </div>

        {/* Description + CTA */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="max-w-2xl"
          >
            <p className="text-xl font-medium leading-tight sm:text-2xl lg:text-3xl">
              MERN Stack Developer crafting{" "}
              <span className="text-[var(--muted)]">
                modern, scalable and memorable
              </span>{" "}
              digital experiences.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              I turn ideas into performant web applications with thoughtful
              interfaces, clean architecture and a strong focus on user
              experience.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(182,255,0,0.25)] active:scale-95"
            >
              View Projects

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/5"
            >
              Lets Talk
            </a>
          </motion.div>
        </div>

        {/* Bottom Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 flex flex-col justify-between gap-6 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            <span>Bangladesh</span>

            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />

            <span>Open to work</span>
          </div>

          <a
            href="#about"
            className="group flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Scroll to explore

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}