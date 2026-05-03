import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const links = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Servicios", href: "#services" },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.778-.773 1.778-1.729V1.73C24 .774 23.206 0 22.222 0h.003z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Inicio");

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <motion.nav
        initial={{ opacity: 0, y: -40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
       className="relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-[1.5rem] px-4 py-3 sm:px-5 sm:py-3 ..."
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_90%_100%,rgba(168,85,247,0.22),transparent_32%)]" />

        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
        />

        <motion.span
          animate={{ x: ["-140%", "140%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-lg"
        />

        <a href="#hero" className="relative z-10 flex items-center gap-3">
          <motion.div
            animate={{
              rotate: [0, 2, -2, 0],
              boxShadow: [
                "0 0 22px rgba(34,211,238,0.25)",
                "0 0 45px rgba(168,85,247,0.45)",
                "0 0 22px rgba(34,211,238,0.25)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative rounded-2xl border border-cyan-300/25 bg-white/10 p-1"
          >
            <span className="absolute inset-0 rounded-2xl bg-cyan-300/20 blur-md" />
            <img
              src={logo}
              alt="Alexis.dev"
              className="relative h-10 w-10 rounded-xl object-cover"
            />
          </motion.div>

          <div>
            <p className="text-lg font-black leading-none tracking-tight">
              Alexis
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                .dev
              </span>
            </p>
            <p className="mt-1 hidden text-[10px] font-black uppercase tracking-[0.34em] text-cyan-100/50 sm:block">
              Frontend Lab
            </p>
          </div>
        </a>

        <div className="relative z-10 hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setActive(link.name)}
              className="relative overflow-hidden rounded-full px-4 py-2 text-sm font-black text-cyan-50/70 transition hover:text-white"
            >
              {active === link.name && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.28)]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="relative z-10 hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-cyan-100/65 backdrop-blur-xl">
            <a
              href="https://github.com/alexisrrh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:scale-110 hover:text-cyan-300 hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.75)]"
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:scale-110 hover:text-cyan-300 hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.75)]"
            >
              <LinkedinIcon />
            </a>
          </div>

          <a
            href="#contact"
            className="group relative overflow-hidden rounded-[1.6rem] p-[2px] transition hover:-translate-y-1 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-[1.6rem] bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#3b82f6,#a855f7,#22d3ee)] blur-md" />

            <span className="relative flex items-center gap-2 rounded-[1.6rem] bg-[#020617] px-5 py-2.5 text-sm font-black text-white shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              Hablemos
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-200 text-[#020617] transition group-hover:rotate-45">
                →
              </span>
            </span>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-white/10 text-white backdrop-blur-xl md:hidden"
          aria-label="Abrir menú"
        >
          <span className="absolute inset-0 rounded-2xl bg-cyan-300/10 blur-md" />
          <div className="relative flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -25, scale: 0.92 }}
            transition={{ duration: 0.28 }}
            className="relative mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#020617]/90 p-4 text-white shadow-[0_0_90px_rgba(34,211,238,0.2)] backdrop-blur-2xl md:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.2),transparent_35%)]" />

            <div className="relative flex flex-col gap-2">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-black text-cyan-50/80 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="mt-4 flex items-center justify-center gap-5 text-cyan-100/70">
                <a
                  href="https://github.com/alexisrrh"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-2xl border border-white/10 bg-white/10 p-3 transition hover:scale-110 hover:text-cyan-300"
                >
                  <GithubIcon />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-2xl border border-white/10 bg-white/10 p-3 transition hover:scale-110 hover:text-cyan-300"
                >
                  <LinkedinIcon />
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-2xl bg-cyan-300 px-4 py-3 text-center font-black text-[#020617] shadow-[0_0_35px_rgba(34,211,238,0.35)]"
              >
                Hablemos ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}