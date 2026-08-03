import Seo from "../components/Seo";
import {
  SiBootstrap,
  SiCapacitor,
  SiCss,
  SiExpress,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRender,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const techGroups = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: SiReact,
        tone: "text-cyan-300",
        description: "Interfaces y componentes reutilizables para aplicaciones web.",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        tone: "text-yellow-200",
        description: "Lógica de interfaz, asincronía y consumo de APIs.",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        tone: "text-orange-300",
        description: "Estructura semántica y accesible.",
      },
      {
        name: "CSS3",
        icon: SiCss,
        tone: "text-blue-300",
        description: "Diseño responsive, layout y estilos de interfaz.",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        tone: "text-cyan-300",
        description: "Construcción rápida de interfaces mediante utilidades.",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        tone: "text-purple-300",
        description: "Componentes y layouts responsive.",
      },
      {
        name: "Vite",
        icon: SiVite,
        tone: "text-violet-300",
        description: "Entorno de desarrollo y construcción para proyectos frontend.",
      },
      {
        name: "Context API",
        icon: SiReact,
        tone: "text-cyan-200",
        description: "Gestión de estado compartido en aplicaciones React.",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        tone: "text-emerald-300",
        description: "APIs y lógica de servidor con JavaScript.",
      },
      {
        name: "Express",
        icon: SiExpress,
        tone: "text-cyan-50",
        description: "Rutas, middleware y servicios REST.",
      },
      {
        name: "Python",
        icon: SiPython,
        tone: "text-blue-300",
        description: "Desarrollo backend e integración de servicios.",
      },
      {
        name: "Flask",
        icon: SiFlask,
        tone: "text-cyan-50",
        description: "APIs ligeras y autenticación en proyectos Python.",
      },
      {
        name: "APIs REST",
        icon: SiOpenapiinitiative,
        tone: "text-emerald-300",
        description: "Diseño e integración de servicios entre frontend y backend.",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        tone: "text-pink-300",
        description: "Autenticación mediante tokens.",
      },
    ],
  },
  {
    title: "Datos y servicios",
    items: [
      {
        name: "Supabase",
        icon: SiSupabase,
        tone: "text-emerald-300",
        description: "Autenticación, PostgreSQL, almacenamiento y servicios backend.",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        tone: "text-sky-300",
        description: "Modelado y consulta de datos relacionales.",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        tone: "text-blue-300",
        description: "Gestión de bases de datos relacionales.",
      },
      {
        name: "SQL",
        icon: FaDatabase,
        tone: "text-cyan-200",
        description: "Consultas, relaciones y manipulación de datos.",
      },
      {
        name: "Google Gemini",
        icon: SiGooglegemini,
        tone: "text-purple-300",
        description: "Integración de modelos de IA para automatización y análisis.",
      },
    ],
  },
  {
    title: "Herramientas y despliegue",
    items: [
      {
        name: "Git",
        icon: SiGit,
        tone: "text-orange-300",
        description: "Control de versiones y trabajo por ramas.",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        tone: "text-cyan-50",
        description: "Repositorios, documentación y colaboración.",
      },
      {
        name: "Postman",
        icon: SiPostman,
        tone: "text-orange-300",
        description: "Pruebas y validación de APIs.",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        tone: "text-cyan-50",
        description: "Despliegue de aplicaciones frontend.",
      },
      {
        name: "Render",
        icon: SiRender,
        tone: "text-cyan-300",
        description: "Despliegue de servicios y backends.",
      },
      {
        name: "Capacitor",
        icon: SiCapacitor,
        tone: "text-sky-300",
        description: "Adaptación de aplicaciones web para Android e iOS.",
      },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <Seo
        title="Tecnologías | Alexis Rodríguez"
        description="Stack de Alexis Rodriguez: React, Node.js, Python, Supabase, PostgreSQL, APIs REST, Google Gemini, Vercel, Render y Capacitor."
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            Tecnologías
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Tecnologías y herramientas
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-cyan-50/70">
            Stack que utilizo para construir interfaces, APIs, bases de datos e
            integraciones completas.
          </p>
        </div>

        <div className="grid gap-6">
          {techGroups.map((group, index) => (
            <section
              key={group.title}
              aria-labelledby={`tech-${index + 1}`}
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-7"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-black text-cyan-200">
                  0{index + 1}
                </span>
                <h2 id={`tech-${index + 1}`} className="text-2xl font-black text-white">
                  {group.title}
                </h2>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                  <article
                    key={item.name}
                    className="group flex min-h-40 flex-col rounded-2xl border border-white/10 bg-[#020617]/55 p-5 shadow-[0_0_28px_rgba(34,211,238,0.06)] transition duration-200 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.07] hover:shadow-[0_0_34px_rgba(34,211,238,0.12)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                        <Icon
                          className={`h-6 w-6 ${item.tone}`}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100/55">
                        {group.title}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-white">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-cyan-50/65">
                      {item.description}
                    </p>
                  </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
