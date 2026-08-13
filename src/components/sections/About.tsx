"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building modern interfaces with React, Next.js and a strong focus on usability.",
  },
  {
    number: "02",
    title: "Full-Stack",
    description:
      "Creating complete web applications with Node.js, Express, MongoDB and PostgreSQL.",
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "Breaking complex ideas into clean, scalable and maintainable solutions.",
  },
];

const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "7+",
    label: "Core Technologies",
  },
  {
    value: "∞",
    label: "Things to Learn",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            About
          </span>

          <span className="h-px w-12 bg-[var(--accent)]/40" />

          <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            01
          </span>
        </motion.div>

        {/* Main Statement */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="max-w-5xl text-[clamp(2.8rem,7vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.06em]">
              I build
              <br />
              <span className="text-[var(--muted)]">digital</span>
              <br />
              experiences
              <span className="text-[var(--accent)]">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <p className="text-lg leading-8 text-[var(--muted)] sm:text-xl">
              I&apos;m{" "}
              <span className="font-semibold text-[var(--foreground)]">
                Mosaiyeb Meheraz
              </span>
              , a MERN Stack Developer passionate about turning ideas into
              modern, useful and high-performing web applications.
            </p>

            <p className="mt-6 text-sm leading-7 text-[var(--muted)] sm:text-base">
              I enjoy working across the full development process—from
              designing intuitive interfaces to building reliable backend
              systems and connecting everything into a seamless experience.
            </p>

            <a
              href="#projects"
              className="group mt-8 flex w-fit items-center gap-3 text-sm font-semibold"
            >
              Explore my work

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-24 grid border-t border-[var(--border)] md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group border-b border-[var(--border)] py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-[var(--accent)]">
                  {item.number}
                </span>

                <ArrowUpRight className="h-4 w-4 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
              </div>

              <h3 className="mt-10 text-xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--background)] p-7 sm:p-10"
            >
              <div className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                {stat.value}
                <span className="text-[var(--accent)]">.</span>
              </div>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}