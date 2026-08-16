import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { profile } from "../data/profile";

const links = [
  { key: "navbar.home", to: "/" },
  { key: "navbar.projects", to: "/projects" },
  { key: "navbar.experience", to: "/experience" },
  { key: "navbar.technologies", to: "/technologies" },
  { key: "navbar.about", to: "/about" },
  { key: "navbar.contact", to: "/contact" },
];

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
];

const navbarIconLink =
  "inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-100/75 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-300/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]";

const languageToggleClass =
  "inline-flex h-10 min-w-20 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/12 px-3.5 text-xs font-black text-cyan-50 shadow-[0_0_20px_rgba(34,211,238,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-cyan-300/20 hover:text-white hover:shadow-[0_0_26px_rgba(34,211,238,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] active:scale-[0.98]";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const currentLanguage = (i18n.resolvedLanguage || i18n.language)?.startsWith(
    "en",
  )
    ? "en"
    : "es";
  const nextLanguage = currentLanguage === "es" ? "en" : "es";

  const closeMenu = () => setIsOpen(false);
  const toggleLanguage = () => {
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <motion.nav
        initial={{ opacity: 0, y: -40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#020617]/55 px-5 py-3 text-white shadow-[0_0_90px_rgba(34,211,238,0.18)] backdrop-blur-2xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_90%_100%,rgba(168,85,247,0.22),transparent_32%)]" />

        <motion.div
          animate={shouldReduceMotion ? undefined : { x: ["-100%", "100%"] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
          }
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
        />

        <motion.span
          animate={shouldReduceMotion ? undefined : { x: ["-140%", "140%"] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-lg"
        />

        <Link to="/" className="relative z-10 flex items-center gap-3">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [0, 2, -2, 0],
                    boxShadow: [
                      "0 0 22px rgba(34,211,238,0.25)",
                      "0 0 45px rgba(168,85,247,0.45)",
                      "0 0 22px rgba(34,211,238,0.25)",
                    ],
                  }
            }
            transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity }}
            className="relative rounded-2xl border border-cyan-300/25 bg-white/10 p-1"
          >
            <span className="absolute inset-0 rounded-2xl bg-cyan-300/20 blur-md" />
            <img
              src={logo}
              alt="Alexis.dev"
              width="192"
              height="186"
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
              Full Stack Lab
            </p>
          </div>
        </Link>

        <div className="relative z-10 hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl md:flex">
          {links.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              className={({ isActive }) =>
                `relative overflow-hidden rounded-full px-4 py-2 text-sm font-black transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                  isActive ? "text-white" : "text-cyan-50/70"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.28)]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
                  )}
                  <span className="relative z-10">{t(link.key)}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="relative z-10 hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-cyan-100/65 backdrop-blur-xl">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("navbar.openSocial", { label: link.label })}
                title={link.label}
                className={navbarIconLink}
              >
                <link.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
            <div className="ml-1 border-l border-white/12 pl-4">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={t("navbar.switchLanguage")}
                title={t("navbar.switchLanguage")}
                className={languageToggleClass}
              >
                <FaGlobe className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                <span>{nextLanguage.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeMenu();
          }}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-white/10 text-white backdrop-blur-xl md:hidden"
          aria-label={t("navbar.openMenu")}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
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
            id="mobile-navigation"
            initial={{ opacity: 0, y: -25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -25, scale: 0.92 }}
            transition={{ duration: 0.28 }}
            className="relative mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#020617]/90 p-4 text-white shadow-[0_0_90px_rgba(34,211,238,0.2)] backdrop-blur-2xl md:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.2),transparent_35%)]" />

            <div className="relative flex flex-col gap-2">
              {links.map((link) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-2xl border px-4 py-3 font-black transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                        isActive
                          ? "border-cyan-300/35 bg-cyan-300/10 text-white"
                          : "border-white/10 bg-white/5 text-cyan-50/80"
                      }`
                    }
                  >
                    {t(link.key)}
                  </NavLink>
                </motion.div>
              ))}

              <div className="mt-4 grid gap-2 text-cyan-100/80">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("navbar.openSocial", { label: link.label })}
                    className="flex min-h-12 items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-black transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <span className="flex items-center gap-3">
                      <link.icon className="h-5 w-5" aria-hidden="true" />
                      {link.label}
                    </span>
                    <FaExternalLinkAlt className="h-3 w-3 text-cyan-100/50" aria-hidden="true" />
                  </a>
                ))}
                <button
                  type="button"
                  onClick={toggleLanguage}
                  aria-label={t("navbar.switchLanguage")}
                  title={t("navbar.switchLanguage")}
                  className="mt-1 flex min-h-12 items-center justify-between rounded-2xl border border-cyan-300/25 bg-cyan-300/12 px-4 py-3 font-black text-cyan-50 transition hover:border-cyan-300/60 hover:bg-cyan-300/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <span className="flex items-center gap-3">
                    <FaGlobe className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                    {nextLanguage.toUpperCase()}
                  </span>
                  <span className="text-xs text-cyan-100/50">
                    {currentLanguage.toUpperCase()}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
