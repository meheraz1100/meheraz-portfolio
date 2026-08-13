"use client";

import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/meheraz1100",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dev-mosaiyebmeheraz",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pt-40"
    >
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.045] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Contact
          </span>

          <span className="h-px w-12 bg-[var(--accent)]/40" />

          <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            05
          </span>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Have a project in mind?
          </p>

          <h2 className="max-w-6xl text-[clamp(3rem,9vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.07em]">
            Let&apos;s build
            <br />
            something
            <br />
            <span className="text-[var(--muted)]">great.</span>
            <span className="text-[var(--accent)]">.</span>
          </h2>
        </motion.div>

        {/* Contact Grid */}
        <div className="mt-16 grid gap-12 border-t border-[var(--border)] pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Drop me a line
            </p>

            <a
              href="mailto:mosaiyebmeheraz@gmail.com"
              className="group inline-flex items-center gap-3 text-xl font-semibold tracking-tight transition-colors duration-300 hover:text-[var(--accent)] sm:text-2xl"
            >
              mosaiyebmeheraz@gmail.com

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/5"
                >
                  <Icon className="h-4 w-4 text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--accent)]" />

                  {social.name}

                  <ArrowUpRight className="h-3.5 w-3.5 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--accent)] shadow-[0_0_15px_var(--accent)]" />

          <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Open to opportunities
          </span>
        </motion.div>

        {/* Footer */}
        <footer className="mt-24 border-t border-[var(--border)] pt-7">
          <div className="flex flex-col justify-between gap-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center">
            <div>
              © {new Date().getFullYear()} Mosaiyeb Meheraz. All rights
              reserved.
            </div>

            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />

              <span>Built with React & Next.js</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}