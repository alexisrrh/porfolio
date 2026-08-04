import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { getProjectBySlug } from "../data/projects";
import NutriSmartCaseStudy from "./NutriSmartCaseStudy";

const futureSections = [
  "Problema",
  "Solución",
  "Mi responsabilidad",
  "Arquitectura",
  "Retos técnicos",
  "Decisiones",
  "Resultado",
  "Aprendizajes",
  "Próximas mejoras",
];

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const heroImage = project?.images?.[0];

  if (slug === "nutrismart-coach") {
    return <NutriSmartCaseStudy />;
  }

  if (!project?.caseStudyPath) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-32 text-white">
      <Seo
        title={`${project.title} | Caso de estudio`}
        description={`Caso de estudio inicial de ${project.title}, proyecto de Alexis Rodriguez.`}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.2),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Link
          to="/projects"
          className="inline-flex rounded-2xl border border-cyan-300/20 bg-white/10 px-4 py-2 text-sm font-black text-cyan-100 transition hover:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          ← Volver a proyectos
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              Caso de estudio
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-7 text-lg leading-8 text-cyan-50/75">
              {project.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/10 p-3 shadow-[0_30px_100px_rgba(34,211,238,0.12)] backdrop-blur-xl">
            <img
              src={heroImage.src}
              alt={heroImage.alt ?? `Vista previa de ${project.title}`}
              className="h-72 w-full rounded-[1.5rem] object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-black text-cyan-50/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black text-[#020617] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            Ver demo
          </a>
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:border-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Ver repositorio
            </a>
          )}
        </div>

        <div className="mt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              Estructura del caso de estudio
            </p>
            <p className="mt-4 text-sm leading-6 text-cyan-50/60">
              Índice definido para documentar el proceso cuando se incorporen
              evidencias específicas del repositorio, la demo y las decisiones
              técnicas del proyecto.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
          {futureSections.map((section) => (
            <article
              key={section}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
            >
              <h2 className="text-xl font-black text-white">{section}</h2>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
