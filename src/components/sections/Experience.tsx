"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { experiences } from "@/src/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </span>

          <span className="h-px w-12 bg-[var(--accent)]/40" />

          <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            04
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
            Where I&apos;ve
            <br />
            made an
            <br />
            <span className="text-[var(--muted)]">impact.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base"
          >
            A mix of development, leadership, mentorship and community work
            that has shaped the way I approach technology and collaboration.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[var(--border)] sm:left-[11px]" />

          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.organization}-${experience.role}`}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group relative pl-10 sm:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] transition-all duration-500 group-hover:border-[var(--accent)] sm:h-6 sm:w-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)] transition-all duration-500 group-hover:scale-150 group-hover:bg-[var(--accent)] group-hover:shadow-[0_0_12px_var(--accent)]" />
                </div>

                {/* Experience Content */}
                <div className="border-b border-[var(--border)] pb-12 pt-1 sm:pb-16">
                  <div className="grid gap-6 lg:grid-cols-[0.3fr_1fr_auto] lg:gap-10">
                    {/* Period */}
                    <div>
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                        {experience.period}
                      </span>
                    </div>

                    {/* Main */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                          {experience.organization}
                          <span className="text-[var(--accent)]">.</span>
                        </h3>

                        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                          {experience.type}
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                        {experience.role}
                      </p>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                        {experience.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:block">
                      <ArrowUpRight className="h-5 w-5 text-[var(--muted)] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}