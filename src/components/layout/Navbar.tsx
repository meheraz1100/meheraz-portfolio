"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@wrksz/themes/client";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
        isScrolled ? "pt-3" : "pt-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6 ${
          isScrolled
            ? "border-[var(--border)] bg-[var(--card)]/85 shadow-2xl backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group relative flex items-center gap-1"
        >
          <span className="text-sm font-bold tracking-[-0.04em] sm:text-base">
  MOSAIYEB MEHERAZ
</span>

<span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] transition-transform duration-300 group-hover:scale-150" />

        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[var(--muted)] transition-all duration-300 hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}

          <a
            href="#contact"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(182,255,0,0.3)]"
          >
            Lets Talk
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)]"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)]"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "max-h-[500px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col p-3">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm text-[var(--muted)] transition-colors duration-300 hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)]"
              style={{
                transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 rounded-2xl bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-black"
          >
            Lets Talk
          </a>
        </div>
      </div>
    </header>
  );
}