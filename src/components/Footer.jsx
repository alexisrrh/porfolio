import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFilePdf,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import { profile } from "../data/profile";

const links = [
  { key: "navbar.projects", to: "/projects" },
  { key: "navbar.experience", to: "/experience" },
  { key: "navbar.contact", to: "/contact" },
];

const socials = [
  { name: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
  { name: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
  { name: "GitHub", href: profile.github, icon: FaGithub },
  { key: "hero.viewCv", href: profile.cvPath, icon: FaFilePdf },
];

const footerLinkClass =
  "group inline-flex min-h-11 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-bold text-cyan-50/70 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/10 bg-[#020617] px-6 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.10),transparent_32%),radial-gradient(circle_at_80%_100%,rgba(168,85,247,0.10),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="rounded-[1.7rem] border border-white/10 bg-[#020617]/70 px-6 py-7 shadow-[0_0_50px_rgba(34,211,238,0.08)]">
          <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="relative rounded-2xl border border-cyan-300/20 bg-white/10 p-1">
                  <span className="absolute inset-0 rounded-2xl bg-cyan-300/15 blur-md" />
                  <img
                    src={logo}
                    alt="Alexis.dev"
                    width="192"
                    height="186"
                    className="relative h-10 w-10 rounded-xl object-cover"
                  />
                </div>

                <div>
                  <p className="text-lg font-black leading-none">
                    Alexis
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      .dev
                    </span>
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/50">
                    Full Stack Developer
                  </p>
                </div>
              </Link>

              <p className="mt-5 max-w-md text-sm leading-6 text-cyan-50/55">
                {t("footer.description", { name: profile.name })}
              </p>

              <div className="mt-4 inline-flex max-w-md items-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-2.5 text-sm font-bold text-emerald-50/85">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.55)]"
                  aria-hidden="true"
                />
                {t("footer.availability")}
              </div>

              <Link
                to="/contact"
                className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-2.5 text-sm font-black text-white transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/55 hover:bg-cyan-300/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
              >
                {t("hero.contact")}
                <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                {t("footer.profile")}
              </p>

              <div className="mt-4 grid gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.key}
                    to={link.to}
                    className="text-sm font-semibold text-cyan-50/60 transition hover:translate-x-1 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-purple-300">
                {t("footer.connect")}
              </p>

              <div className="mt-4 grid gap-2.5">
                {socials.map((item) => (
                  <a
                    key={item.key ?? item.name}
                    href={item.href}
                    target={item.href.startsWith("http") || item.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") || item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    className={footerLinkClass}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                      {item.key ? t(item.key) : item.name}
                    </span>
                    {item.href.startsWith("http") || item.href.endsWith(".pdf") ? (
                      <FaExternalLinkAlt
                        className="h-3 w-3 text-cyan-100/45 transition group-hover:text-cyan-100"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaArrowRight
                        className="h-3 w-3 text-cyan-100/45 transition group-hover:translate-x-0.5 group-hover:text-cyan-100"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-white/10 pt-5">
         <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-between md:text-left">
              <p>{t("footer.rights")}</p>
              <p>{t("footer.builtWith")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
