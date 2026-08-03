import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { profile } from "../data/profile";

const links = [
  { name: "Proyectos", to: "/projects" },
  { name: "Experiencia", to: "/experience" },
  { name: "Contacto", to: "/contact" },
];

const socials = [
  { name: "Email", href: `mailto:${profile.email}` },
  { name: "LinkedIn", href: profile.linkedin },
  { name: "GitHub", href: profile.github },
  { name: "CV", href: profile.cvPath },
];

export default function Footer() {
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
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/40">
                    Full Stack Developer
                  </p>
                </div>
              </Link>

              <p className="mt-5 max-w-md text-sm leading-6 text-cyan-50/55">
                {profile.name} construye proyectos web con React, Node.js,
                Python y Supabase, cuidando interfaz, datos, APIs y despliegue.
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-cyan-50/55">
                Disponible para oportunidades Full Stack junior, Frontend React
                y desarrollo web en España o remoto.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-2.5 text-sm font-black text-white transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/15"
              >
                Hablemos 
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 text-[#020617]">
                  →
                </span>
              </Link>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                Perfil
              </p>

              <div className="mt-4 grid gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-sm font-semibold text-cyan-50/55 transition hover:translate-x-1 hover:text-cyan-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-purple-300">
                Conecta
              </p>

              <div className="mt-4 grid gap-2.5">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm font-semibold text-cyan-50/55 transition hover:translate-x-1 hover:text-purple-300"
                  >
                    {item.name} →
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-white/10 pt-5">
         <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-between md:text-left">
              <p>© 2026 Alexis.dev. Todos los derechos reservados.</p>
              <p>Diseñado y desarrollado con React + Tailwind.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
