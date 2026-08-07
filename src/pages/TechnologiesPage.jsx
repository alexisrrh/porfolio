import Seo from "../components/Seo";
import { useTranslation } from "react-i18next";
import { localized } from "../utils/localized";
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
        description: {
          es: "Interfaces y componentes reutilizables para aplicaciones web.",
          en: "Reusable interfaces and components for web applications.",
        },
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        tone: "text-yellow-200",
        description: {
          es: "Lógica de interfaz, asincronía y consumo de APIs.",
          en: "Interface logic, async flows, and API consumption.",
        },
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        tone: "text-orange-300",
        description: {
          es: "Estructura semántica y accesible.",
          en: "Semantic and accessible structure.",
        },
      },
      {
        name: "CSS3",
        icon: SiCss,
        tone: "text-blue-300",
        description: {
          es: "Diseño responsive, layout y estilos de interfaz.",
          en: "Responsive design, layout, and interface styling.",
        },
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        tone: "text-cyan-300",
        description: {
          es: "Construcción rápida de interfaces mediante utilidades.",
          en: "Fast interface construction through utility classes.",
        },
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        tone: "text-purple-300",
        description: {
          es: "Componentes y layouts responsive.",
          en: "Responsive components and layouts.",
        },
      },
      {
        name: "Vite",
        icon: SiVite,
        tone: "text-violet-300",
        description: {
          es: "Entorno de desarrollo y construcción para proyectos frontend.",
          en: "Development and build environment for frontend projects.",
        },
      },
      {
        name: "Context API",
        icon: SiReact,
        tone: "text-cyan-200",
        description: {
          es: "Gestión de estado compartido en aplicaciones React.",
          en: "Shared state management in React applications.",
        },
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
        description: {
          es: "APIs y lógica de servidor con JavaScript.",
          en: "APIs and server logic with JavaScript.",
        },
      },
      {
        name: "Express",
        icon: SiExpress,
        tone: "text-cyan-50",
        description: {
          es: "Rutas, middleware y servicios REST.",
          en: "Routes, middleware, and REST services.",
        },
      },
      {
        name: "Python",
        icon: SiPython,
        tone: "text-blue-300",
        description: {
          es: "Desarrollo backend e integración de servicios.",
          en: "Backend development and service integration.",
        },
      },
      {
        name: "Flask",
        icon: SiFlask,
        tone: "text-cyan-50",
        description: {
          es: "APIs ligeras y autenticación en proyectos Python.",
          en: "Lightweight APIs and authentication in Python projects.",
        },
      },
      {
        name: "APIs REST",
        icon: SiOpenapiinitiative,
        tone: "text-emerald-300",
        description: {
          es: "Diseño e integración de servicios entre frontend y backend.",
          en: "Service design and integration between frontend and backend.",
        },
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        tone: "text-pink-300",
        description: {
          es: "Autenticación mediante tokens.",
          en: "Token-based authentication.",
        },
      },
    ],
  },
  {
    title: { es: "Datos y servicios", en: "Data and services" },
    items: [
      {
        name: "Supabase",
        icon: SiSupabase,
        tone: "text-emerald-300",
        description: {
          es: "Autenticación, PostgreSQL, almacenamiento y servicios backend.",
          en: "Authentication, PostgreSQL, storage, and backend services.",
        },
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        tone: "text-sky-300",
        description: {
          es: "Modelado y consulta de datos relacionales.",
          en: "Relational data modeling and querying.",
        },
      },
      {
        name: "MySQL",
        icon: SiMysql,
        tone: "text-blue-300",
        description: {
          es: "Gestión de bases de datos relacionales.",
          en: "Relational database management.",
        },
      },
      {
        name: "SQL",
        icon: FaDatabase,
        tone: "text-cyan-200",
        description: {
          es: "Consultas, relaciones y manipulación de datos.",
          en: "Queries, relationships, and data manipulation.",
        },
      },
      {
        name: "Google Gemini",
        icon: SiGooglegemini,
        tone: "text-purple-300",
        description: {
          es: "Integración de modelos de IA para automatización y análisis.",
          en: "AI model integration for automation and analysis.",
        },
      },
    ],
  },
  {
    title: { es: "Herramientas y despliegue", en: "Tools and deployment" },
    items: [
      {
        name: "Git",
        icon: SiGit,
        tone: "text-orange-300",
        description: {
          es: "Control de versiones y trabajo por ramas.",
          en: "Version control and branch-based work.",
        },
      },
      {
        name: "GitHub",
        icon: SiGithub,
        tone: "text-cyan-50",
        description: {
          es: "Repositorios, documentación y colaboración.",
          en: "Repositories, documentation, and collaboration.",
        },
      },
      {
        name: "Postman",
        icon: SiPostman,
        tone: "text-orange-300",
        description: {
          es: "Pruebas y validación de APIs.",
          en: "API testing and validation.",
        },
      },
      {
        name: "Vercel",
        icon: SiVercel,
        tone: "text-cyan-50",
        description: {
          es: "Despliegue de aplicaciones frontend.",
          en: "Frontend application deployment.",
        },
      },
      {
        name: "Render",
        icon: SiRender,
        tone: "text-cyan-300",
        description: {
          es: "Despliegue de servicios y backends.",
          en: "Service and backend deployment.",
        },
      },
      {
        name: "Capacitor",
        icon: SiCapacitor,
        tone: "text-sky-300",
        description: {
          es: "Adaptación de aplicaciones web para Android e iOS.",
          en: "Adapting web applications for Android and iOS.",
        },
      },
    ],
  },
];

export default function TechnologiesPage() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <Seo
        title={t("seo.technologies.title")}
        description={t("seo.technologies.description")}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            {t("technologies.eyebrow")}
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {t("technologies.title")}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-cyan-50/70">
            {t("technologies.description")}
          </p>
        </div>

        <div className="grid gap-6">
          {techGroups.map((group, index) => (
            <section
              key={localized(group.title, language)}
              aria-labelledby={`tech-${index + 1}`}
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-7"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-black text-cyan-200">
                  0{index + 1}
                </span>
                <h2 id={`tech-${index + 1}`} className="text-2xl font-black text-white">
                  {localized(group.title, language)}
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
                        {localized(group.title, language)}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-white">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-cyan-50/65">
                      {localized(item.description, language)}
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
