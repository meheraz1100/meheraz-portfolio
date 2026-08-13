"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
} from "lucide-react";

import { projects } from "@/src/data/projects";
import Image from "next/image";

const accentStyles = {
  lime: {
    glow: "bg-lime-400/10",
    text: "text-lime-400",
    border: "group-hover:border-lime-400/40",
    button: "bg-lime-400 text-black",
  },
  cyan: {
    glow: "bg-cyan-400/10",
    text: "text-cyan-400",
    border: "group-hover:border-cyan-400/40",
    button: "bg-cyan-400 text-black",
  },
  orange: {
    glow: "bg-orange-400/10",
    text: "text-orange-400",
    border: "group-hover:border-orange-400/40",
    button: "bg-orange-400 text-black",
  },
} as const;

export default function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </span>

          <span className="h-px w-12 bg-[var(--accent)]/40" />

          <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            03
          </span>
        </motion.div>

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl text-[clamp(2.8rem,7vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.06em]"
          >
            Selected
            <br />
            <span className="text-[var(--muted)]">work.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base"
          >
            A collection of products and experiments built with modern
            technologies, thoughtful interfaces and a focus on real-world
            usability.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="mt-20 space-y-28">
          {projects.map((project, index) => {
            const accent =
              accentStyles[project.accent as keyof typeof accentStyles];

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.08,
                }}
                className="group"
              >
                {/* Project Meta */}
                <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-4">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-semibold tracking-[0.2em] ${accent.text}`}
                    >
                      {project.number}
                    </span>

                    <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      {project.category}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={`h-4 w-4 text-[var(--muted)] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 ${accent.text}`}
                  />
                </div>

                {/* Showcase */}
                <div
                  className={`relative aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--card)] transition-colors duration-700 ${accent.border}`}
                >
                  {/* Ambient Glow */}
                  <div
                    className={`absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] transition-all duration-700 group-hover:scale-125 ${accent.glow}`}
                  />

                  {/* Background Grid */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                      backgroundSize: "56px 56px",
                    }}
                  />

                  {/* Decorative Number */}
                  <div className="absolute bottom-4 left-5 select-none text-[clamp(5rem,15vw,13rem)] font-black leading-none tracking-[-0.1em] text-[var(--foreground)]/[0.025] sm:left-8">
                    {project.number}
                  </div>

                  {/* Browser */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    }}
                    className="absolute inset-[6%] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-2xl sm:inset-[7%] sm:rounded-2xl"
                  >
                    {/* Browser Topbar */}
                    <div className="flex h-8 items-center gap-1.5 border-b border-[var(--border)] px-3 sm:h-10 sm:px-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]/30 sm:h-2 sm:w-2" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]/30 sm:h-2 sm:w-2" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]/30 sm:h-2 sm:w-2" />

                      <div className="ml-3 hidden h-5 flex-1 items-center rounded-md border border-[var(--border)] px-3 sm:flex">
                        <span className="truncate text-[8px] text-[var(--muted)]">
                          {project.title.toLowerCase()}.app
                        </span>
                      </div>
                    </div>

                    {/* Product Preview */}
                    <div className="relative h-full overflow-hidden">
  <Image
    src={project.image}
    alt={`${project.title} project preview`}
    fill
    sizes="(max-width: 768px) 90vw, 80vw"
    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
    priority={index === 0}
  />

  {/* Screenshot Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
</div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <h3 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                      {project.title}
                      <span className={accent.text}>.</span>
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex h-11 items-center gap-2 rounded-full border border-[var(--border)] px-4 text-sm font-medium transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <Code2 className="h-4 w-4" />

                      GitHub

                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/link inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-300 hover:scale-105 ${accent.button}`}
                    >
                      Live Demo

                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}