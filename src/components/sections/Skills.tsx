"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Code2 } from "lucide-react";

import { skills } from "@/src/data/skills";

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Skills
          </span>

          <span className="h-px w-12 bg-[var(--accent)]/40" />

          <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            02
          </span>
        </motion.div>

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl text-[clamp(2.8rem,7vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.06em]"
          >
            Tools I use
            <br />
            to build
            <br />
            <span className="text-[var(--muted)]">the web.</span>
            <span className="text-[var(--accent)]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base"
          >
            A constantly evolving toolkit built around modern JavaScript,
            scalable architecture and thoughtful user experiences.
          </motion.p>
        </div>

        {/* Skill Categories */}
        <div className="mt-20 space-y-16">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category,
            );

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: categoryIndex * 0.05,
                }}
              >
                {/* Category Header */}
                <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="h-4 w-4 text-[var(--accent)]" />

                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                      {category}
                    </h3>
                  </div>

                  <span className="text-xs text-[var(--muted)]">
                    {String(categorySkills.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.04,
                      }}
                      className="group relative min-h-40 bg-[var(--background)] p-6 transition-colors duration-500 hover:bg-[var(--card)] sm:p-7"
                    >
                      {/* Hover Accent */}
                      <div className="absolute left-0 top-0 h-full w-0.5 origin-bottom scale-y-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-y-100" />

                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                          <span className="text-sm font-bold">
                            {skill.name.charAt(0)}
                          </span>
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                      </div>

                      <h4 className="mt-8 text-lg font-semibold tracking-tight">
                        {skill.name}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}