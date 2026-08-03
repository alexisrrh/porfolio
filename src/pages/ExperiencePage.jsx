import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const technicalExperience = [
  "Interfaces con React y gestión de estado",
  "APIs REST con Node.js, Express, Python y Flask",
  "Autenticación, autorización y JWT",
  "Supabase, PostgreSQL y bases de datos relacionales",
  "Integración con Google Gemini y consumo de APIs externas",
  "Despliegue en Vercel y Render, con preparación mobile mediante Capacitor",
];

const previousExperience = [
  {
    title: "Instalación de paneles solares",
    skills: [
      "trabajo en equipo",
      "cumplimiento de plazos",
      "resolución de problemas",
      "responsabilidad",
      "trabajo en entornos exigentes",
    ],
  },
  {
    title: "Atención al cliente",
    skills: [
      "comunicación",
      "resolución de incidencias",
      "organización",
      "atención al usuario",
      "adaptabilidad",
      "trabajo bajo presión",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <Seo
        title="Experiencia | Alexis Rodríguez"
        description="Experiencia práctica de Alexis Rodriguez mediante proyectos Full Stack y experiencia laboral previa con habilidades transferibles."
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            Experiencia
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Experiencia práctica y habilidades transferibles.
          </h1>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-cyan-300/15 bg-white/[0.07] p-7 backdrop-blur-xl">
            <h2 className="text-3xl font-black text-white">
              Desarrollo de proyectos Full Stack
            </h2>
            <p className="mt-4 text-sm leading-6 text-cyan-50/60">
              He desarrollado proyectos técnicos donde construí flujos de
              producto desde la interfaz hasta la persistencia, el backend y el
              despliegue. Esta experiencia se basa en proyectos propios y no se
              presenta como empleo profesional.
            </p>
            <div className="mt-6 grid gap-4">
              {technicalExperience.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >
                  <p className="text-sm font-black text-cyan-100">{item}</p>
                </div>
              ))}
            </div>
            <Link
              to="/projects"
              className="mt-6 inline-flex rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black text-[#020617] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Ver proyectos
            </Link>
          </section>

          <section className="rounded-[2rem] border border-purple-300/15 bg-white/[0.07] p-7 backdrop-blur-xl">
            <h2 className="text-3xl font-black text-white">
              Experiencia laboral previa
            </h2>
            <p className="mt-4 text-sm leading-6 text-cyan-50/60">
              Esta experiencia no se presenta como experiencia tecnológica; se
              recoge por las habilidades profesionales transferibles al trabajo
              en equipo, la comunicación y la resolución de problemas.
            </p>
            <div className="mt-6 grid gap-4">
              {previousExperience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >
                  <p className="text-lg font-black text-purple-100">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/65">
                    {item.skills.join(", ")}.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.06] p-7 text-center backdrop-blur-xl">
          <h2 className="text-2xl font-black text-white">
            Oportunidad actual
          </h2>
          <p className="mt-4 text-sm leading-7 text-cyan-50/70">
            Disponible para posiciones Full Stack junior, Frontend React y
            desarrollo web en España o remoto.
          </p>
        </div>
      </div>
    </section>
  );
}
